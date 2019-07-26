import React from 'react' 
import Question from './Question/index'
import { Card, Button,Input,message } from 'antd'
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

export default class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      questions : this.props.questions,
      answers: {},
      email:undefined,
    }
  }

   mailWarning = () => {
    message.error('Please enter your email!');
  };

   Countwarning = () => {
    message.warning('Please answer all the questions');
  };

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
    return (
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems: 'center',margin:40}}>
      {this.renderQuestions()}
      <CardLayout>
        Your Email
        <InnerLayout>
        <Input placeholder="you@example.com" onChange={(e)=>{
          this.setState({email:e.target.value})
        }}/>
        </InnerLayout>
      </CardLayout>

      <Button style={{margin:40,background: '#3F51B5',
    color: 'white'}} onClick={()=>{
      if(!this.state.email){
        this.mailWarning()
      }
      else if(Object.keys(this.state.answers).length !=10){
        this.Countwarning()
      }
      else{
        this.props.actions.submitAnswers(this.state.email,this.state.answers)
        this.props.history.push('/results')
      }
      }}>Save & Continue</Button>
      </div>
    )
  }
}
