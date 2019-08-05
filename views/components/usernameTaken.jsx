var React = require("react");
var DefaultLayout2 = require('../layout/defaultLRUW');

class UsernameTaken extends React.Component {
  render() {
    return (
        <DefaultLayout2>
        <div className="usernameTakenForm">
            <img src="/title.jpg" width="700" height="100" alt="title" class="img-fluid"/>
              <h3>Welcome Back!</h3>
              <h3> Login to your Kaching</h3>

              <form method="POST" action="/kaching/register">
                  <p> Name: <input type="text" name="name"/> </p>

                  <div className="form-group has-danger">
                  <p >Username: </p>
                  <input type="text" className="form-control is-invalid usernameTaken" name="username"/>
                  <div className="invalid-feedback">Sorry,username is taken!</div>
                  </div>

                  <p> Password: <input type="password" name="password"/> </p>
                  <button type="submit" className="btn btn-primary">Sign up</button>
                  <p>Already have an account? <a href="/kaching/login">Login</a></p>
              </form>
            </div>
        </DefaultLayout2>
    );
  }
}

module.exports = UsernameTaken;