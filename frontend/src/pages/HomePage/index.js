import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomeComponent from './HomeComponent'
  

const mapStateToProps = createStructuredSelector({ 
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
