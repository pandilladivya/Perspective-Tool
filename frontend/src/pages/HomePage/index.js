import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomeComponent from './HomeComponent'
  
import { listQuestions,submitAnswers } from '../../modules/questions'

import {makeSelectQuestions} from '../../selectors/questions'

const mapStateToProps = createStructuredSelector({ 
  questions: makeSelectQuestions()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      { 
        listQuestions,
        submitAnswers
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
