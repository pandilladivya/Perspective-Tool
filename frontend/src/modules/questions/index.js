import { types } from './types'
import { fromJS } from 'immutable'
 
export const listQuestions = () => {
  return {
    type: types.LIST
  }
}

export const listQuestionsSuccess = (questions) => {
  return {
    type: types.LIST_SUCCESS,
    questions: questions
  }
}

export const submitAnswers = (email,answers) => {
  return {
    type: types.SUBMIT,
    email: email,
    answers: answers
  }
}

export const noteResult = (userResponse) => {
  return {
    type: types.NOTE_RESULT,
    userResponse
  }
}

const initialState = fromJS({
    questions: [],
    userResponse:{}
})

export default function questions (state = initialState, action) {
  switch (action.type) {
    case types.LIST_SUCCESS:
      return state
        .set('questions', action.questions)

    case types.NOTE_RESULT:
      return state
        .set('userResponse',action.userResponse)

    default:
      return state
  }
}
