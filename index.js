var Twit = require('twit')

var t = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
})

///////////////////////////////////////////////////////////////////
// check we are connected
t.get('account/verify_credentials', {
        include_entities: false,
        skip_status: true,
        include_email: false
      }, onAuthenticated);


function onAuthenticated(err, res) {
  if (err) {
    throw err
  }
  console.log('Authentication successful. Running script...\n')
}

///////////////////////////////////////////////////////////////////
// posts a tweet
t.post('statuses/update', {
  status: 'Il est mort.'
}, onTweeted)

function onTweeted(err, reply) {
  if (err !== undefined) {
    console.log(err)
  } else {
    console.log('Tweeted: ' + reply.text)
  }
}
