import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router' 

import HomePage  from '../pages/HomePage'
 

// const Layout = styled.div`
//   height: 100%;
//   position: fixed;
//   overflowY: scroll;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
// `

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
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
