import { useRouter } from 'next/router';
import useComment from '../../hooks/useComment';
import useQuestion from '../../hooks/useQuestion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/auth';
import Popup from 'reactjs-popup';

export const filteredCommentsURL = process.env.NEXT_PUBLIC_QUESTION_URL + "/";
export const URL = process.env.NEXT_PUBLIC_API_URL

export default function Question() {
    const { tokens, logout, user } = useAuth();
    const [comments, setComments] = useState([])
    // const { getFilteredComment } = useComment()
    const router = useRouter();
    const { question_resources, question_loading } = useQuestion();
    let question;

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        };
    }

    const getComment = async (id) => {
        if (router.query.id) {
            axios.get(filteredCommentsURL + router.query.id + "/comment")
                .then((res) => {
                    setComments(res.data)
                })
        }
    }

    function handleSubmit(event){
        commentURL = URL + "/comment/"+event.target.commentId.value+"/"
        newComment={
            content: event.target.updateComment.value,
            username: user.id,
            question: event.target.questionId.value
        }
        axios.put(commentURL, newComment, config())
    }

    useEffect(() => {
        getComment()
    }, [router])


    if (!question_loading) {
        let [q] = question_resources.filter((question) => parseInt(question.id) === parseInt(router.query.id))
        question = q
    }

    return (

        <div>
            <div>{question.title}</div>
            <div>{question.content}</div> 
            <button className="p-4 uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1">Delete</button>
            <button className="p-4 uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1">Edit</button>
            {comments ? comments.map((c, i) => (
                <div key={i}>
                    <div>{c.content}</div>
                    <button className="p-4 uppercase bg-red-300 rounded text-emerald hover:bg-red-100 m-1">Delete</button>
                    <Popup  trigger={<button className="p-4 uppercase bg-cyan-200 rounded text-emerald hover:bg-red-100 m-1">Edit</button>} position="right center">
                    <form onSubmit={handleSubmit}>
                        
                        <textarea name="updateComment">{c.content}</textarea>
                        <input type="hidden" value={c.id} name="commentId"></input>
                        <input type="hidden" value={c.question} name="questionId"></input>
                        <button className="p-4 uppercase bg-cyan-500 rounded text-emerald hover:bg-red-100 m-1" >Submit</button>
                    </form>
                    </Popup>
                    
                    
                </div>
                
            )) : <div></div>}
        </div>

    );
}