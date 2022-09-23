import axios from 'axios';
import useSWR from 'swr';

export const apiUrl = process.env.NEXT_PUBLIC_QUESTION_URL;
import { useAuth } from '../contexts/auth';

export default function useQuestion() {

  const { tokens, logout } = useAuth();

  const { data, error: question_error, mutate } = useSWR([apiUrl, tokens], fetchQuestion);

  async function fetchQuestion(url) {


    try {
      const response = await axios.get(url);

      return response.data;

    } catch (err) {
      handleError(err);
    }
  }

  async function createQuestion(info) {

    try {
      await axios.post(apiUrl, info, config());
      mutate(); // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(err);
    }
  }

  async function deleteQuestion(id) {

    try {
      const url = apiUrl + id;
      await axios.delete(url, config());
      mutate(); // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(err);
    }
  }

  async function updateQuestion(id, info) {
    try {
      const url = apiUrl + id;
      await axios.put(url, info, config());
      mutate(); // mutate causes complete collection to be refetched
    } catch (err) {
      handleError(err);
    }
  }

  async function getOneQuestion(id) {
    try {
      const url = apiUrl + id;
      const response = await axios.get(url, config());
      return response.data;

    } catch (err) {
      handleError(err);
    }
  }

  async function getOneQuestionLocal(id) {
    return data.filter(question.id == id)
  }

  // helper function to handle getting Authorization headers EXACTLY right
  function config() {

    return {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    };
  }

  function handleError(err) {
    console.error(err);
    // currently just log out on error
    // but a common error will be short lived token expiring
    // STRETCH: refresh the access token when it has expired
    logout();
  }

  return {
    question_resources: data,
    question_error,
    question_loading: !question_error && !data,
    createQuestion,
    deleteQuestion,
    updateQuestion,
    getOneQuestion,
    getOneQuestionLocal,
  };
}

/* STRETCH
This approach works, but it's not very snappy for the user.
Check the SWR docs to see if you can "optomistically" render updated state while the API response is pending.
*/