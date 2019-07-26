import { createSelector } from 'reselect'

const questions = state => state.get('questions')

const makeSelectQuestions = () =>
  createSelector(questions, state => {
    return state.get('questions')
  })

const makeSelectUserResponse = () =>
createSelector(questions, state => {
  return state.get('userResponse')
})

export {
  makeSelectQuestions,
  makeSelectUserResponse
}
