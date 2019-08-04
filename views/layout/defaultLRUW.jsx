var React = require("react");

class DefaultLayout2 extends React.Component {
  render() {
    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <link rel="stylesheet" type="text/css" href="/bootstrap.css"/>
      <link rel="stylesheet" type="text/css" href="/style.css"/>

      </head>
      <body>

      <div>
      {this.props.children}
      </div>

      <footer className="page-footer font-small teal pt-4 text-center footer">
      <div className="container-fluid text-center text-md-left">
      <div className="row footer-row">
      <h5 className="text-uppercase font-weight-bold"><img src="/kaching.png" width="50" height="50" alt="Kaching!" width="32px" height="30px"/> Get it now!</h5>
      </div>

      <div className="row footer-text footer-row">
      <p>Now available on Appstore and Googleplay! Download your Kaching today!</p>
      </div>

      <div className="row footer-row">
      <img href="#" src="/badge-iphone.png" width="200" height="60" alt="iphone!" className="imgBadge"/>
      <img href="#" src="/badge-android.png" width="200" height="60" alt="android!"className="imgBadge"/>
      </div>

      <div className="row footer-row">
      <div className="footer-copyright text-center py-3">© 2019 Copyright</div>
      </div>
      </div>
      </footer>
      </body>
      </html>
      )
}
}

module.exports = DefaultLayout2;