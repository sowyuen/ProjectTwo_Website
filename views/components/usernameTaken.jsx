var React = require("react");

class UsernameTaken extends React.Component {
  render() {
    return (
      <html>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="/bootstrap.css"/>
        <head />
        <body>
          <h3>Welcome Back!</h3>
          <h3> Login to your Kaching</h3>

          <form method="POST" action="/kaching/register">

          <p> Name: <input type="text" name="name"/> </p>

          <div className="form-group has-danger">
          <label className="form-control-label" for="inputDanger1">Username: </label>
          <input type="text" className="form-control is-invalid" name="username"/>
          <div className="invalid-feedback">Sorry,username is taken!</div>
          </div>

          <p> Password: <input type="password" name="password"/> </p>
          <button type="submit" className="btn btn-primary">Login</button>
          <p>Don't have an account? <a href="/kaching/register">Sign up</a></p>
          </form>

        </body>
      </html>
    );
  }
}

module.exports = UsernameTaken;