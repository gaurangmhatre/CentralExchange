var express = require('express');
/*var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/


exports.getUserAccountDetails = function(req,res){

    /*onsole.log("userId: "+req.session.userid);

    var email = req.session.userid;
    var msg_payload = {"email":email};
    if(email != undefined ) {
        mq_client.make_request('accountDetails_queue',msg_payload, function(err,results){

            console.log(results.statusCode);
            if(err){
                throw err;
            }
            else
            {
                if(results.statusCode == 200){
                    console.log("valid Login");
                    res.send(results.json_responses);
                }
                else {
                    console.log("Invalid Login");
                    res.send({"statusCode" : 401});
                }
            }
        });
    }
    else {
        //var json_responses = {"statusCode": 401};
        res.send({"statusCode": 401});
    }*/


    res.send({"statusCode": 200});
};


/*
module.exports = router;*/
