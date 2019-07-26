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
    const createdUser = yield call(Request.createUser,data.email)
    const response = yield call(Request.submitAnswers,data.answers)

    yield put(noteResult(createdUser,response))
    console.log("responseresponse",response);
    
  }catch (err) { 
    console.log(err)
  }
}

export default function * questions () {
  yield takeLatest(types.LIST, list)
  yield takeLatest(types.SUBMIT, submit)
}
