var React = require("react");
var DefaultLayout2 = require('./layout/defaultLRUW');

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout2>
              <div className="loginForm">
               <img src="/title.jpg" width="700" height="100" alt="title" class="img-fluid"/>
                  <h3>Welcome Back!</h3>
                  <h3> Login to your Kaching</h3>
                  <fieldset>
                      <form method="POST" action="/kaching/login">
                          <p> Username: <input type="text" name="username"/> </p>
                          <p> Password: <input type="password" name="password"/> </p>
                          <button type="submit" className="btn btn-primary">Login</button>
                          <p>Don't have an account? <a href="/kaching/register">Sign up</a></p>
                      </form>
                  </fieldset>
              </div>
      </DefaultLayout2>
    );
  }
}

module.exports = Login;