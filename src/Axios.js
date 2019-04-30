const axios = require('axios')

//promised based node js library for making async http requests 


export const fetchUserRepo1 = async (userName1) =>{
    var encodedURI = window.encodeURI('https://api.github.com/users/' + userName1)
    const data = await axios.get(encodedURI).then((response) =>  response.data);
    return data
  }

  export const fetchUserRepo2 = function (userName2) {
    var encodedURI = window.encodeURI('https://api.github.com/users/' + userName2)
    return axios.get(encodedURI)
      .then(function (response) {
          console.log(response)
        return response.data;
      });
  }

//   export default {fetchUserRepo1,fetchUserRepo2};




