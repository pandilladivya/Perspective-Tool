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

  componentWillMount(){
    this.props.actions.listQuestions()
  }

  render () { 
    console.log("tksjhkghsd",this.state.questions);
    
    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems: 'center',margin:40}}>
      {this.state.questions.map((question)=>{
        return <Question question={question} />
      })}
      </div>
    )
  }
}
