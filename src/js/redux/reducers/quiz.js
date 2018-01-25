const initialState = {
  questions: [],
  answered: [],
  active: {},
  isLoading: false,
  error: null
}

const answerQuestion = (question, answer) =>
  ({ ...question, answer })

const getNextQuestion = (question, questionsState) =>
  questionsState[questionsState.indexOf(question) - 1] ?
  questionsState[questionsState.indexOf(question) - 1] : null

export default function(state = initialState, action) {
  switch (action.type) {
  case 'FETCH_QUIZ':
    return Object.assign({}, state, {
      questions: [],
      error: null,
      isLoading: true
    })
  case 'FETCH_QUIZ_SUCCESS':
    return Object.assign({}, state, {
      questions: action.payload.questions,
      active: action.payload.active,
      error: null,
      isLoading: false
    })
  case 'FETCH_QUIZ_FAILURE':
    return Object.assign({}, state, {
      questions: [],
      error: 'Something went wrong. Please contact me if error persists!',
      isLoading: false
    })
  case 'ANSWER_QUESTION':
    return Object.assign({}, state, {
      answered: [
        ...state.answered,
        answerQuestion(action.payload.question, action.payload.answer)
      ],
      active: getNextQuestion(action.payload.question, state.questions)
    })
  case 'REFRESH_QUIZ':
    return initialState
  default:
    return state
  }
}
