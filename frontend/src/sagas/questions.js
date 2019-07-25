import { types } from '../modules/questions/types'
import { put, call, takeLatest } from 'redux-saga/effects'

import { listQuestionsSuccess } from '../modules/questions'
import Request from './requests' 
 
export function * list (data) {
  try { 
    const questions = yield call(Request.getQuestions)
    yield put(listQuestionsSuccess(questions))
  } catch (err) { 
    console.log(err)
  }
}

export default function * questions () {
  yield takeLatest(types.LIST, list)
}
