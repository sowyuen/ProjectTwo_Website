var React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <head />
        <body>
          <h3>Welcome Back!</h3>
          <h3> Login to your Kaching</h3>
          <form method="POST" action="/kaching/login">
          <p> Username: <input type="text" name="username"/> </p>
          <p> Password: <input type="password" name="password"/> </p>
          <input type="submit"/>
          <p>Don't have an account? <a href="/kaching/register">Sign up</a></p>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Login;