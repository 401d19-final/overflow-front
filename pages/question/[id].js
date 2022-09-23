import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../../contexts/auth';
import useQuestion from '../../hooks/useQuestion';
import axios from 'axios';
import Popup from 'reactjs-popup';
import Question from '../../components/Question';
import Comment from '../../components/Comment';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";
export const URL = process.env.NEXT_PUBLIC_API_URL

export default function OneQuestion() {
    const { tokens, user } = useAuth();
    const { question_resources } = useQuestion();
    const [comments, setComments] = useState([])
    const [question, setQuestion] = useState()
    const [questionIsShowing, setQuestionIsShowing] = useState(false)

    const router = useRouter();

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    function showQuestionModal() {
        if (questionIsShowing) {
            setQuestionIsShowing(false);
        } else {
            setQuestionIsShowing(true);
        }
    }

    function handleUpdateComment(event, id, i) {
        event.preventDefault()
        let commentURL = URL + "/comment/" + id + "/"
        let newComment = {
            content: event.target.comment.value,
            username: user.username,
            question: router.query.id,
            user: user.id,
        }
        axios.put(commentURL, newComment, config())
        document.querySelector("#button" + i).click()
    }

    function handleNewComment(event) {
        event.preventDefault();
        const commentURL = URL + "/question/" + router.query.id + "/comment";
        const newComment = {
            content: event.target.comment.value,
            username: user.username,
            question: router.query.id,
            user: user.id
        };
        axios.post(commentURL, newComment, config());
        event.target.reset()
    }

    function handleDeleteComment(id) {
        const commentURL = URL + "/comment/" + id + "/"
        axios.delete(commentURL, config());

    }

    function handleUpdateQuestion(event) {
        event.preventDefault();
        let updateQuestion = { ...question, content: event.target.content.value }
        axios.put(filteredCommentsURL + router.query.id + "/", updateQuestion, config())
        setQuestionIsShowing(false)
    }

    function handDeleteQuestion() {
        axios.delete(filteredCommentsURL + router.query.id + "/", config())
            .then((res) => {
                router.push('/')
            }, (error) => {
                console.error(error)
            })

    }

    const getComment = async () => {
        axios.get(filteredCommentsURL + router.query.id + "/comment")
            .then((res) => {
                setComments(res.data)
            }, (error) => {
                console.error(error)
            })
    }

    const getQuestion = async () => {
        axios.get(filteredCommentsURL + router.query.id + "/")
            .then((res) => {
                setQuestion(res.data)
            }, (error) => {
                console.error(error)
            })
    }

    useEffect(() => {
        if (router && router.query && router.query.id) {
            getQuestion()
            getComment()
        }
    }, [router, comments, question_resources])

    return (

        <div>
            <h3 className='text-4xl w-3/4 my-4 mx-auto font-bold'>Question</h3>
            {question ? <Question className='w-3/4' username={question.username} title={question.title} content={question.content} updated={question.updated_time} id={question.id} level={question.level} oneQuestion={true} /> : null}
            {user && question && user.id === question.user ?
                <div className='w-3/4 text-right mx-auto mb-4'>
                    <button className="p-2 font-medium uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1" onClick={showQuestionModal}>Edit</button>
                    <button className="p-2 font-medium uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1" onClick={() => handDeleteQuestion()}>Delete</button>
                    {questionIsShowing ? <form onSubmit={handleUpdateQuestion}>
                        <title defaultValue={question.title}></title>
                        <textarea className="w-1/2 shadow" name="content" defaultValue={question.content}></textarea>
                        <button className="p-2 font-medium uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type="submit" >Submit</button>
                    </form> : null}
                </div> : <></>
            }
            {question ? <h3 className='text-3xl w-3/4 my-4 mx-auto font-bold'>Comments</h3> : null}
            {comments ? comments.map((c, i) => (
                <div key={i}>
                    {/* <div>{c.content}</div> */}
                    <Comment content={c.content} username={c.username} updated={c.updated_time} />
                    {user && user.id === c.user ?
                        <div className='w-3/4 mx-auto text-right'>
                            <Popup trigger={<button className="p-2 font-medium uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1" id={"button" + i}>Edit</button>} position="left">
                                <form onSubmit={(event) => handleUpdateComment(event, c.id, i)}>
                                    <textarea name="comment" defaultValue={c.content}></textarea>
                                    <button className="p-2 font-medium uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type="submit">Submit</button>
                                </form>
                            </Popup>
                            <button className="p-2 font-medium uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1" onClick={() => handleDeleteComment(c.id)} >Delete</button>
                        </div>
                        : <></>}
                </div>
            )) : null}
            {user ?
                <form className='w-3/4 mx-auto' onSubmit={handleNewComment}>
                    <label className='block font-semibold text-xl' htmlFor='comment'>New Comment</label>
                    <textarea className='block w-full my-2 p-1 shadow' name='comment' placeholder='comment here...' required></textarea>
                    <button className="font-medium float-right p-2 uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" type='submit'>Submit Comment</button>
                </form> : null}
        </div>

    );
}