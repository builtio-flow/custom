var request = require('request')

module.exports = {
  label : 'Connect to Apikey',    
  mock_input: { api_key: 'abc123456test' },
  input: { 
    type: "object", 
    properties: {
      api_key: {
        type: 'string',
        minLength: 1, 
        label: 'API KEY'  
      }
    } 
  },
  test : function (input, output){
    var apikey = input.auth.api_key;
    request({
      url: "http://apikey.builtapp.io/api/v1/apps",
      headers: {
        api_key: apikey,
        "ContentType": "application/json"
      }
    }, 
    function(err, resp, body){
      if(err){
        output(err, null);
      }
      if(resp.statusCode != 200){
        output(res.body, null)
      } else {
        output(null, 'Successfully authenticated')
      }
    })
  }
}