var React = require("react");
var DefaultLayout2 = require('../layout/defaultLRUW');

class WrongPassword extends React.Component {
  render() {
    return (
    <DefaultLayout2>
        <body>
        <div className="wrongPasswordForm">
            <img src="/title.jpg" width="700" height="100" alt="title" class="img-fluid"/>
              <h3>Welcome Back!</h3>
              <h3> Login to your Kaching</h3>
              <form method="POST" action="/kaching/login">
              <p> Username: <input type="text" name="username"/> </p>
              <div className="form-group has-danger">
              <label className="form-control-label" for="inputDanger1">Password: </label>
              <input type="password" className="form-control is-invalid wrongPassword" name="password"/>
              <div className="invalid-feedback">Sorry,password incorrect!</div>
              <button type="submit" className="btn btn-primary">Login</button>
              </div>

              <p>whoops.. <a href="/kaching/register">Forgotten account?</a></p>
              </form>
        </div>
        </body>
    </DefaultLayout2>
    );
  }
}

module.exports = WrongPassword;