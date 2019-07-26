
export default class Requests {
    static getQuestions() {
        try {
            return request('http://localhost:2018/quiz', {
                method: 'GET',
                headers:{
                    "Content-Type":'application/json'
                }
            })
        }
     catch(err) {
         console.log("srtrtwt");
         
        throw err
    }
}

static submitAnswers(answers) {
    try {
        return request('http://localhost:2018/quiz', {
            method: 'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify(answers)
        })
    }
 catch(err) {
     console.log("srtrtwt");
     
    throw err
}
}
}

function request(url, options) { 
    return fetch(url, options)
        .then((response) => { 
            console.log("sfsdjfhdskhfgdskhfds",response);
            
            return response.json()
        })
        .then((response) => parseJSON(response))
}

function parseJSON(response) {
    return response
}

function checkStatus(response) {
    return response.json()
}
  



