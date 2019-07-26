const path = require('path')
const express = require('express')
const csv=require('csvtojson')
const app = express()
const cors = require('cors');
const errorHandler = require('./helpers/error-handler');
app.use(cors());
app.use(express.json())
const port = 2018

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
    res.send(Object.assign({}, questionList))
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

function matchPersonalityType(result,pairs){
    var personalityType = ''
    pairs.map((pair)=>{
        if(result[pair.charAt(0)]> result[pair.charAt(1)])
            personalityType=personalityType+pair.charAt(0)
        else
            personalityType=personalityType+pair.charAt(1)
    })
    return personalityType
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
    if(Object.keys(answerList).length === solutionList.length){
        Object.keys(answerList).map((answerKey)=>{
            const solution = solutionList[answerKey]
            analyser(resultMap,solution, answerList[answerKey])
        }) 
        let pairs=['EI','SN','TF','PJ'] 
        res.send({personalityType: matchPersonalityType(resultMap,pairs)}) 
    }else{
        throw new Error('All answers should be given.')
    }
})

app.use('/users', require('./users/user.controller'));
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))