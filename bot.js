console.log("The bot is here");

var Twit = require('twit');
var T = new Twit({
    consumer_key:         'tapGTC0mLOiYLiDLGH9ZaCWL1',
    consumer_secret:      '58J1EgdjRnvaX81pOpF3TFERazSzzPdK3pbOuzhreIYptlnKPc',
    access_token:         '1198147514764972032-GCrm33lX8fIUPTaJYY3fawhrvAZeBv',
    access_token_secret:  'dUvd9uMuPWlwZJ8I6Va3FG0Iil1LOzPzeS14KlWggcgf1',
    timeout_ms:           60*1000,  
    strictSSL:            true,     
  })


  
// ********* Tweet scheduler **********//
function tweetSched(){
    var r = Math.floor(Math.random()*100);
    var tweet  ={ status : 'I am #d34dShoT'+r+'' }
    
    T.post('statuses/update', tweet ,tweeted);
    function tweeted(err, data, response) {
        console.log(data)
    }

}
tweetSched();

//************* CAlling scheduler every 1Hr ***********//
setInterval(tweetSched,1000*60*60);


//+++++++++++++ NON -WORKING (NOW) +++++++++++ TWEET ON FOLLOW +++++++++++++++++++//
// var stream  = T.stream('user');
// stream.on('follow',followed);
// function followed(eventMsg){
//      var name = eventMsg.source.name;
//      var screenName = eventMsg.source.screen_name;
//      TweetSched('@'+screenName+'Thanks for the follow !')
// }
// function tweetSched(txt){
//     var r = Math.floor(Math.random()*100);
//     var tweet  ={ status : txt }
        
//     T.post('statuses/update', tweet ,tweeted);
//         function tweeted(err, data, response) {
//             console.log(data)
//         }
// }
    












  

// ************** Post a tweet *************//

// var tweet  ={ status : 'I am #d34dShoT' }
// T.post('statuses/update', tweet ,tweeted);
// function tweeted(err, data, response) {
//     console.log(data)
// }


//***********Search in tweets*************//

// T.get('search/tweets', { q: 'Deadshot', count: 20 }, goData);

// function goData(err, data, response) {
//     var tweets = data.statuses;
//     for(var i=0;i<tweets.length ; i++){
//         console.log(tweets[i].text);
//     }
// }