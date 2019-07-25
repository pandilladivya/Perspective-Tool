const path = require('path')
const express = require('express')
const csv=require('csvtojson')
const app = express()
app.use(express.json())
const port = 2019

let solutionList;

const csvFilePath=path.join(__dirname, "Data","Questions.csv")
csv().fromFile(csvFilePath)
.then((jsonList)=>{
    solutionList = jsonList
})

app.get('/quiz', (req, res) => {
    const questionList = []
    solutionList.map((solution)=>{
        questionList.push(solution['Question'])
    })
    res.send(questionList)
})

const analyser = (resultMap, solution, answer) => {
    const dimension = solution['Dimension']
    const direction = solution['Direction']
    const meaning = solution['Meaning']
    const score = parseInt(answer) - 4
    switch(dimension){
        case 'EI':
            resultMap[meaning] += direction ? score : -score
        case 'SN':
            resultMap[meaning] += direction ? score : -score
        case 'TF':
            resultMap[meaning] += direction ? score : -score
        case 'JP':
            resultMap[meaning] += direction ? score : -score
    }
}

app.post('/quiz', (req, res) => {
    answerList = req.body
    const resultMap = {
        'E':0,
        'I':0,
        'N':0,
        'S':0,
        'T':0,
        'F':0,
        'P':0,
        'J':0
    }
    if(answerList.length === solutionList.length){
        answerList.map((answer, index)=>{
            const solution = solutionList[index]
            analyser(resultMap,solution, answer)
        })
        res.send(resultMap)
        res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

    }else{
        throw new Error('All answers should be given.')
    }
})
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
//   })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))