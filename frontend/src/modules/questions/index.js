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

export const submitAnswers = (answers) => {
  return {
    type: types.SUBMIT,
    answers: answers
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

    default:
      return state
  }
}
