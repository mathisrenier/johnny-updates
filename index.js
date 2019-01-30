var Twit = require('twit')

var t = new Twit({
  consumer_key: '6YikVkeTsQoxLmSO4weperHvP',
  consumer_secret: 'cw22sXaOSWSHWVDvJ3G9sY8dbSTRsPLOfT1fkM0aGEJI4zQ2wv',
  access_token: '1088993637822853120-IbELC0pOjE6l4XyBNVtsfAMBixwp7W',
  access_token_secret: 'qyK1rRKONhnOoUuT66rN7q7ZrDU6kl2D9QmjjZima6fFW'
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
