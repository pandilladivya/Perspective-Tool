import React from 'react' 
import Question from './Question/index'
import { Card } from 'antd'
 
export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      questions : this.props.questions
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ 
      questions: nextProps.questions
     })
  }

  render () { 
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
      <Card style={{marginTop:40}}>
         <Question question={"You find it takes effort to introduce yourself to other people"} />
         </Card>
      </div>
    )
  }
}
