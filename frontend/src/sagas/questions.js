import { types } from '../modules/questions/types'
import { put, call, takeLatest } from 'redux-saga/effects'

import { listQuestionsSuccess,noteResult } from '../modules/questions'
import Request from './requests' 
 
export function * list (data) {
  try { 
    const questions = yield call(Request.getQuestions)
    yield put(listQuestionsSuccess(questions))
  } catch (err) { 
    console.log(err)
  }
}

export function * submit (data) {
  try {
    const response = yield call(Request.submitAnswers,data.answers)
    const userResponse = yield call(Request.createUser,data.email,response.personalityType)

    yield put(noteResult(userResponse))
    console.log("responseresponse",response);
    
  }catch (err) { 
    console.log(err)
  }
}

export default function * questions () {
  yield takeLatest(types.LIST, list)
  yield takeLatest(types.SUBMIT, submit)
}
