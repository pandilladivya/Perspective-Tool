import React from 'react'
import { Radio, Card, List } from 'antd'
import styled from 'styled-components'

const RadioComponent = styled(Radio)`
  margin: 10px;
`
const DisagreeText = styled.span`
    color: red;
    font-weight: 500;
    font-size: 14px;
    margin-right: 30px;
    `

const AgreeText = styled.span`
    color: green;
    font-weight: 500;
    font-size: 14px;
    margin-left: 30px;
    `
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
class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: this.props.question,
      questionKey: this.props.questionKey
    }
  }


  componentWillReceiveProps (nextProps) {
    this.setState({ 
      question: nextProps.question,
      questionKey: nextProps.questionKey
     })
  }


  onChange = e => {
    this.setState({
      value: e.target.value,
    });
    console.log("keyyyy",this.state.questionKey);
    
    this.props.onAnswerSelect(this.state.questionKey,e.target.value)
  };

  render() {
    return (
      <CardLayout>
        {this.state.question}
        <InnerLayout>
          <DisagreeText>Disagree</DisagreeText>
          <Radio.Group size="large" onChange={this.onChange} value={this.state.value}>
            <RadioComponent value={1}></RadioComponent>
            <RadioComponent value={2}></RadioComponent>
            <RadioComponent value={3}></RadioComponent>
            <RadioComponent value={4}></RadioComponent>
            <RadioComponent value={5}></RadioComponent>
            <RadioComponent value={6}></RadioComponent>
            <RadioComponent value={7}></RadioComponent>
          </Radio.Group>
          <AgreeText>Agree</AgreeText>
        </InnerLayout>
      </CardLayout>
    )
  }
}

export default Question
