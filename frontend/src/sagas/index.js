import questions from './questions';

export default function * root () {
  yield [
    questions()
  ]
}
