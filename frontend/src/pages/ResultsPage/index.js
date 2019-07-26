import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import ResultsPage from './ResultsPage' 

import {makeSelectUserResponse} from '../../selectors/questions'

const mapStateToProps = createStructuredSelector({ 
  response: makeSelectUserResponse()
})

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      { 
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage)
