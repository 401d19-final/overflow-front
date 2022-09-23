import useQuestion from '../hooks/useQuestion'
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';
import Question from './Question';
import QuestionModal from './QuestionModal';

export default function Main(props) {

   const { question_resources, question_loading, createQuestion } = useQuestion();
   const { user } = useAuth();
   const [display_questions, setQuestions] = useState();

   function sortFilterQuestions(filter_string) {
      function customSort(a, b) {
         function parseTime(time) {
            const parsedTime = {
               year: parseInt(time.substring(0, 4)),
               month: parseInt(time.substring(5, 7)),
               day: parseInt(time.substring(8, 10)),
               hour: parseInt(time.substring(11, 13)),
               minute: parseInt(time.substring(14, 16)),
               second: parseInt(time.substring(17, 19)),
            };
            return parsedTime
         }

         const time_a = parseTime(a.updated_time);
         const time_b = parseTime(b.updated_time);
         if (time_a.year !== time_b.year) return time_b.year - time_a.year
         if (time_a.month !== time_b.month) return time_b.month - time_a.month
         if (time_a.day !== time_b.day) return time_b.day - time_a.day
         if (time_a.hour !== time_b.hour) return time_b.hour - time_a.hour
         if (time_a.minute !== time_b.minute) return time_b.minute - time_a.minute
         return time_b.second - time_a.second
      }

      if (question_resources) {
         let questions = question_resources.slice()
         if (filter_string) {
            questions = questions.filter((question) => question.level == filter_string)
         }
         setQuestions(questions.sort(customSort))

      }
   }

   useEffect(() => {
      sortFilterQuestions()
   }, [question_resources])

   return (
      <>
         <div>
            <h1 className='w-full pt-5 pb-5 mt-0 mr-24 text-xl text-center text-white text-opacity-50 bg-black border-b-4 border-red-600 bg-gradient-to-r from-slate-500 '>Welcome to Stack Fellow, A community for Code Fellows members!</h1>
         </div>
         <div className='flex'>
            <aside class="flex float-left w-64" aria-label="Sidebar">
               <div class="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-black">
                  <p>Courses</p>
                  <ul class="space-y-4">
                     <li onClick={() => sortFilterQuestions('101')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="ml-3">101</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('102')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="ml-3">102</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('201')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">201</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('301')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">301</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('401')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">401</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('Graduate')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">Graduate</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions('Career Readiness')}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">Career Readiness</span>
                        </div>
                     </li>
                     <li onClick={() => sortFilterQuestions(false)}>
                        <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">All</span>
                        </div>
                     </li>
                     {/* <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">JavaScript</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">Python</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                           <span class="flex-1 ml-3 whitespace-nowrap">Java</span>
                        </a>
                     </li> */}
                  </ul>
               </div>
            </aside>

            <div className='w-full'>
               {/* <form className='w-full mx-auto mb-16 text-center'>
                  <label>
                     <input id='search-bar' name='' className='items-center inline-block w-full max-w-md p-3 mx-auto mt-8 mt-16 border-0 border-4 border-black border-gray-800 border-double rounded shadow shadow-lg' type='text' placeholder='search...' />
                  </label>
                  <button id='search-button' type='submit' className='px-8 py-2 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-green-700 rounded-lg shadow-xlg hover:bg-green-700 hover:-translate-y-1 hover:scale-110'>Submit</button>
               </form> */}
               <h2 className='text-4xl font-bold text-center my-4'>Questions</h2>
               {user ? <QuestionModal create={createQuestion} /> : null}
               {question_loading || !display_questions ? null :
                  display_questions.map((question, idx) => (
                     <Question key={idx} className='w-3/4' username={question.username} title={question.title} content={question.content} updated={question.updated_time} id={question.id} level={question.level} />
                  ))
               }
            </div>
         </div>
      </>
   );
}

