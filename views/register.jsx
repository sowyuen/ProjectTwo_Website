var React = require("react");
var DefaultLayout2 = require('./layout/defaultLRUW');

class Register extends React.Component {
  render() {
    return (
        <DefaultLayout2>
            <body>
              <h3>Join us!</h3>
              <form method="POST" action="/kaching/register">
                  <p> Name: <input type="text" name="name"/> </p>
                  <p> Username: <input type="text" name="username"/> </p>
                  <p> Password: <input type="password" name="password"/> </p>
                  <button type="submit" className="btn btn-primary">Sign up</button>
                  <p>Already have an account? <a href="/kaching/login">Login</a></p>

              </form>
            </body>
        </DefaultLayout2>
)
}
}

module.exports = Register;