fetch(`https://randomuser.me/api/?results=15`)
    .then( function(response) {
      return response;
    })

    .catch( function() {
      main.setState({
        infoStatus: 'error'
      });
    })