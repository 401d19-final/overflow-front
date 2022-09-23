import { useState } from 'react';
import { useAuth } from '../contexts/auth';

export default function QuestionForm({ create, close }) {

    const { user } = useAuth()

    const initialValues = {
        question: '',
        category: '',
        level: '',
        keywords: 'optional',
    };

    const [values, setValues] = useState(initialValues);

    function handleSubmit(event) {
        event.preventDefault();
        const newQuestion = {
            username: user.username,
            user: user.id,
            title: event.target.title.value,
            content: event.target.content.value,
            level: event.target.level.value
        }
        create(newQuestion)
        event.target.reset()
        close()
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }
        setValues({ ...values, [name]: value });
    }

    return (
        <form
            className="grid-cols-20 gap-4 p-8 mx-auto my-4 bg-white-200 border-2 border-slate-600 rounded-lg text-md gap-x-8 w-full"
            onSubmit={handleSubmit}>
            <div className="flex flex-col col-span-2 mb-4 ">
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="title">Question Title</label>

                {/* <input className="px-3 py-2 mx-8 border text-grey-darkest" type="text" name="question" id="question"
                    value={values.question} onChange={inputChangeHandler} placeholder="Your question here..." /> */}
                <input className="px-3 py-2 mx-8 border text-grey-darkest border-slate-600" type="text" name="title" id="question"
                    placeholder="Title" required />
                <label className="mb-2 font-bold text-grey-darkest" htmlFor="content">Question Content</label>
                <textarea className="px-3 py-2 mx-8 border border-slate-600 text-grey-darkest h-32" name="content" id="question" placeholder="Content" required />
            </div>
            <label className="mb-2 font-bold text-grey-darkest" htmlFor="level">Pick your level:</label>
            <select name='level' className='mb-2 font-bold text-grey-darkest' required>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="201">201</option>
                <option value="301">301</option>
                <option value="401">401</option>
                <option value="Graduate">Graduate</option>
                <option value="Career Readiness">Career Readiness</option>
            </select>
            <br></br>
            {/* <label className="mb-2 font-bold text-grey-darkest" htmlFor="language">Pick language category:</label>
            <select name='language' className='mb-2 font-bold text-grey-darkest'>
                <option value="Python">Python</option>
                <option value="JavaScript">Javascript</option>
                <option value="C#">C#</option>
                <option value="Java">Java</option>
            </select> */}
            <br></br>
            <button className="px-4 py-2 uppercase bg-yellow-200 rounded text-emerald hover:bg-red-100" type="submit">Submit
            </button>

        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div className="flex flex-col justify-between">
            {children}
        </div>
    );
}