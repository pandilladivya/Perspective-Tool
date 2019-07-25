import React from 'react' 
import Question from './Question/index'
import { Card, Button } from 'antd'
 
export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      questions : this.props.questions,
      answers: {}
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

  onAnswerSelect = (key,answer) => {
    var answers = this.state.answers
    answers[key] = answer
    this.setState({
      answers: answers
    })
  }

  renderQuestions = () => {
    var questions = this.state.questions 
   return Object.keys(questions).map((questionKey)=>{ 
      return <Question question={questions[questionKey]} questionKey={questionKey} onAnswerSelect={this.onAnswerSelect}/>
    }) 
  } 

  render () {
    console.log("answersanswers",this.state.answers);
      
    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems: 'center',margin:40}}>
      {this.renderQuestions()}
      <Button onClick={()=>{
        this.props.actions.submitAnswers(this.state.answers)
      }}>Submit</Button>
      </div>
    )
  }
}
