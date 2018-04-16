
const express = require('express')
const app = express()
var index = require('./routes/index')
var recommendationExchange = require('./routes/recommendationExchange')

//app.get('/', (req, res) => res.send('Hello World!'));
app.get('/',index.getUserAccountDetails);

//http://localhost:3000/getItemBasedRecommendations?userId=202&numberOfRecommendation=5
app.get('/getItemBasedRecommendations',recommendationExchange.getItemBasedRecommendations);

//http://localhost:3000/getUserBasedRecommendations?userId=202&numberOfRecommendation=5
app.get('/getUserBasedRecommendations',recommendationExchange.getUserBasedRecommendations);

//http://localhost:3000/postUserData?userId=364&itemId=6&ratings=4
app.get('/postUserData',recommendationExchange.postUserData);

app.listen(3000, () => console.log('Example app listening on port 3000!'));