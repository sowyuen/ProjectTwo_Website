var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <html>
      <body>
            <h1>WELCOME HOME,</h1>
            <h1>{this.props.userdata.name}</h1>
            <p> <a href='/kaching/home/expenses'>{this.props.userdata.amount}</a></p>
        </body>
        </html>
    );
  }
}

module.exports = Home;