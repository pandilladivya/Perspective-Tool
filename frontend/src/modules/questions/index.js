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
    userResponse:{
      "personalityType": "ENFJ",
      "_id": "5d3b69bc5446933b75c880ea",
      "email": "divvu@jnkdf.com",
      "createdDate": "2019-07-26T20:59:40.725Z",
      "__v": 0,
      "id": "5d3b69bc5446933b75c880ea"
  }
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
