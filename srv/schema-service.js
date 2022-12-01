const cds = require('@sap/cds')

const { TwitterApi } = require('twitter-api-v2')
const Twit = require('twit')


module.exports = cds.service.impl(() => {
  cds.on("served", () => {

    // API KEYS
    const client = new TwitterApi({
      appKey: 'Nkx2v187GxXE4kMZfVpVoeNrO',
      appSecret: 'v11wEdMk3nccoyKABy9DsVgK4hOg2SRR9laqkVrQ17OZLkHRCC',
      accessToken: '1595776550980534274-kYR222I4XsIHkWK9zGuC5440DREA8J',
      accessSecret: 'pXK9YBsuS55aD00rRDu3HEFr82SFGaLaBzoVx6DaSIua8',
    })

    // Traer un tweet específico
    // client.v2.singleTweet('1595684143429550080')

    
    // Traer todos los tweets de un usuario, elonmusk en este caso (https://codeofaninja.com/tools/find-twitter-id/)

    client.v2.userTimeline('44196397', { max_results: 5 })
    .then((val) => {
        console.log("---------------------> 5 tuits de elon musk")
        console.log(val)
      }).catch((err) => {
        console.log(err)
      })


    // --------------------------- //

    const T = new Twit({
      consumer_key: 'Nkx2v187GxXE4kMZfVpVoeNrO',
      consumer_secret: 'v11wEdMk3nccoyKABy9DsVgK4hOg2SRR9laqkVrQ17OZLkHRCC',
      access_token: '1595776550980534274-kYR222I4XsIHkWK9zGuC5440DREA8J',
      access_token_secret: 'pXK9YBsuS55aD00rRDu3HEFr82SFGaLaBzoVx6DaSIua8',
      timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
      strictSSL: true,     // optional - requires SSL certificates to be valid.
    })


    // Trae todos los tweets con la palabra clave, YYYY-MM-DD
    T.get('search/tweets', { q: 'accenture since:2021-12-01', count: 5 }, function (err, data, response) {
      console.log("---------------------> 5 tuits que incluyan 'accenture'")
      console.log(data)
    })

  })
})
