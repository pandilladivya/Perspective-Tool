import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

const InnerLayout = styled.div`
    margin: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Row = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CardLayout = styled(Card)` 
    width: 92%; 
    text-align: center;
    display:flex;
    flex-direction:row;
    font-weight: 600;
`

const LighterBlock = styled.div`
    width: 140px; 
    height: 14px;
    background: #e8e8e88c;
`

const DarkerBlock = styled.div`
    width: 140px; 
    height: 14px;
    background: #673ab7;
`
const BlockTwo = styled.div`
  margin-right:40px;
`
const BlockOne = styled.div`
  margin-left:40px;
`

const SpanLeft = styled.span`
    width: 160px;
    text-align: right;
    font-size: 14px;
    font-weight: 400;
`

const SpanRight = styled.span`
    width: 160px;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`

export default class ResultsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      response: this.props.response
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      response: nextProps.response
    })
  }

  render() {
    const { response } = this.state
    const type = 'ENTP'
    const pairs = ['EI', 'SN', 'TF', 'PJ']
    return (
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', margin: 40 }}>
        <CardLayout>
          <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Description>
          <div style={{fontSize:26,fontWeight:'600',color:'#4c5798',marginLeft:-4}}>Your Perspective</div> 
          <div style={{fontSize:16,fontWeight:'700'}}>Your Perspective Type is {type}</div>
          </Description> 
        <InnerLayout>
            <Row>
              <SpanLeft>Introversion ( I )</SpanLeft>
              <BlockOne>{type.charAt('0') === 'I' ? <DarkerBlock /> : <LighterBlock />}</BlockOne>
              <BlockTwo>{type.charAt('0') === 'E' ? <DarkerBlock /> : <LighterBlock />}</BlockTwo>
              <SpanRight>Extraversion ( E )</SpanRight>
            </Row>

            <Row>
              <SpanLeft>Sensing ( S )</SpanLeft>
              <BlockOne>{type.charAt('1') === 'S' ? <DarkerBlock /> : <LighterBlock />}</BlockOne>
              <BlockTwo>{type.charAt('1') === 'N' ? <DarkerBlock /> : <LighterBlock />}</BlockTwo>
              <SpanRight>Intution ( N )</SpanRight>
            </Row>

             <Row>
              <SpanLeft>Thinking ( T )</SpanLeft>
              <BlockOne>{type.charAt('2') === 'T' ? <DarkerBlock /> : <LighterBlock />}</BlockOne>
              <BlockTwo>{type.charAt('2') === 'F' ? <DarkerBlock /> : <LighterBlock />}</BlockTwo>
              <SpanRight>Feeling ( F )</SpanRight>
            </Row>

             <Row>
              <SpanLeft>Judging ( J )</SpanLeft>
              <BlockOne>{type.charAt('3') === 'J' ? <DarkerBlock /> : <LighterBlock />}</BlockOne>
              <BlockTwo>{type.charAt('3') === 'P' ? <DarkerBlock /> : <LighterBlock />}</BlockTwo>
              <SpanRight>Perceiving ( P )</SpanRight>
            </Row>

          </InnerLayout>
       

          </div>
         </CardLayout>


      </div>
    )
  }
}
