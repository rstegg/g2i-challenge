export const refreshQuiz = () =>
({
  type: 'REFRESH_QUIZ'
})

export const fetchQuiz = api =>
({
  type: 'FETCH_QUIZ',
  payload: {
    api
  }
})

export const onFetchQuizSuccess = res =>
({
  type: 'FETCH_QUIZ_SUCCESS',
  payload: {
    questions: res.body.results,
    active: res.body.results[res.body.results.length - 1]
  }
})

export const onFetchQuizFailure = error =>
({
  type: 'FETCH_QUIZ_FAILURE',
  payload: {
    error
  }
})

export const setActiveQuestion = question =>
({
  type: 'SET_ACTIVE_QUESTION',
  payload: {
    question
  }
})

export const answerQuestion = (question, answer) =>
({
  type: 'ANSWER_QUESTION',
  payload: {
    question,
    answer,
  }
})
