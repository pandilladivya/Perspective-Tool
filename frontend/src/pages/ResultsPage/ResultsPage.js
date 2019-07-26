import React from 'react'  
import { Card } from 'antd'
import styled from 'styled-components'
 
const InnerLayout = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const CardLayout = styled(Card)` 
    width: 600px; 
    text-align: center;
    font-weight: 600;
`

export default class ResultsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
        response : this.props.response
    }
  }
 
  componentWillReceiveProps (nextProps) {
    this.setState({ 
        response: nextProps.response
     })
  } 
 
  render () { 
    const {response} = this.state                                                              
    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems: 'center',margin:40}}>
      <CardLayout>
        Your Response
        <InnerLayout>
      <div>{response.personalityType}</div>
      <div>{response.email}</div>
      <div>{response.createdDate}</div>
        </InnerLayout>
      </CardLayout>

      </div>
    )
  }
}
