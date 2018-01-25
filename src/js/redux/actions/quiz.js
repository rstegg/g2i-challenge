// @flow

export const resetQuiz = () =>
({
  type: 'RESET_QUIZ'
})

export const fetchQuiz = () =>
({
  type: 'FETCH_QUIZ'
})

export const onFetchQuizSuccess = (res: Object) =>
({
  type: 'FETCH_QUIZ_SUCCESS',
  payload: {
    questions: res.body.results,
    active: res.body.results[res.body.results.length - 1]
  }
})

export const onFetchQuizFailure = (error: String) =>
({
  type: 'FETCH_QUIZ_FAILURE',
  payload: {
    error
  }
})

export const setActiveQuestion = (question: String) =>
({
  type: 'SET_ACTIVE_QUESTION',
  payload: {
    question
  }
})

export const answerQuestion = (question: String, answer: String) =>
({
  type: 'ANSWER_QUESTION',
  payload: {
    question,
    answer,
  }
})
