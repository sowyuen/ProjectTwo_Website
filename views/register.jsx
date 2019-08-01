var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="/bootstrap.css"/>
            <body>
              <h3>Join us!</h3>
              <form method="POST" action="/kaching/register">
                  <p> Name: <input type="text" name="name"/> </p>
                  <p> Username: <input type="text" name="username"/> </p>
                  <p> Password: <input type="password" name="password"/> </p>
                  <button type="submit" className="btn btn-primary">Sign up</button>
              </form>
            </body>
        </head>
      </html>
)
}
}

module.exports = Register;