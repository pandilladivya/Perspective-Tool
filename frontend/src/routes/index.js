import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router' 

import HomePage  from '../pages/HomePage'
import ResultsPage from '../pages/ResultsPage'
class Router extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/results' component={ResultsPage}/> 
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
