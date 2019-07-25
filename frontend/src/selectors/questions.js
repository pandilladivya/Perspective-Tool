import { createSelector } from 'reselect'

const questions = state => state.get('questions')

const makeSelectQuestions = () =>
  createSelector(questions, state => {
    return state.get('questions')
  })

export {
  makeSelectQuestions
}
