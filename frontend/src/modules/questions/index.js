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

export const noteResult = (user,result) => {
  return {
    type: types.NOTE_RESULT,
    user:user,
    result:result
  }
}

const initialState = fromJS({
    questions: []
})

export default function questions (state = initialState, action) {
  switch (action.type) {
    case types.LIST_SUCCESS:
      return state
        .set('questions', action.questions)

    case types.NOTE_RESULT:
      return state
        .set('result',action.result)
        .set('user',action.user)

    default:
      return state
  }
}
