import React from 'react'
import "./App.css";
import GoogleLogin from 'react-google-login';  // importing library
const App = () => {

  // Function for displaying response in console
  const displayResponse = (res) => {
     console.log(res);
     console.log(res.profileObj);

  };

  return (
    <div className="App1">
      {/* It takes some props as clientId , ButtonText
      onSuccess , onFailure, cookiePolicy= {single_host_origin} */}
      <GoogleLogin
         clientId="384106847436-fb9ojavf5p5t1unrsqc5tgugojurbf2q.apps.googleusercontent.com"
         buttonText="Login with Google"
         onSuccess={displayResponse}
         onFailure={displayResponse}
         cookiePolicy="single_host_origin"
      />
    </div>
  )
}

export default App;

