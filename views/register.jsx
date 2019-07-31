var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head>
            <body>
              <h3>Join us!</h3>
              <form method="POST" action="/kaching/register">
                  <p> Name: <input type="text" name="name"/> </p>
                  <p> Username: <input type="text" name="username"/> </p>
                  <p> Password: <input type="password" name="password"/> </p>
                  <button type="submit" class="btn btn-primary">Sign up</button>
              </form>
            </body>
        </head>
      </html>
)
}
}

module.exports = Register;