var Twit = require('twit');
var express = require("express");

var app = express();


var T = new Twit({
    consumer_key:         'B9gZ9Vpo23U4msP5m7p0pg'
    , consumer_secret:      'cCUBpDOIe7yZJ38cWBi7QYeQOnkZy2OxanAjs9boMDg'
    , access_token:         '586787449-968Nb1p8w9B2GxYHfFDhlk16XuqsJDnBIUGNkESX'
    , access_token_secret:  'TIBpu9vkUEJj08eU1gZaz7yNKScvyB4oB06gqKxCVYWgk'
})



app.get("/tweets.json", function(req, res) {

    T.get('search/tweets', { q: req.query.search, count: 100, result_type: 'popular' }, function(err, reply) {
    // this is important -
        if(err){
            throw err;
        }
    // you must use Response.json()
    res.jsonp(reply);
    console.log(req.query.search);
    })
});

// app.enable("jsonp callback");
app.listen(process.env.PORT || 3000);
console.log("listening on port 3000");

