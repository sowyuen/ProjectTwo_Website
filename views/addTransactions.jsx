var React = require("react");
var DefaultLayout = require('./layout/default');

class AddTransactions extends React.Component {
  render() {

    return (
        <DefaultLayout>
          <div>
          <h3>Add Transactions:</h3>
          <p>ADD ADD ADD ADD ADD ~BRB FIXING IN PROGRESS~</p>
          <form method="POST" action="/kaching/register">
              <p> Name: <input type="text" name="name"/> </p>
              <p> Username: <input type="text" name="username"/> </p>
              <p> Password: <input type="password" name="password"/> </p>
              <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
          </div>
          </DefaultLayout>
    );
  }
}

module.exports = AddTransactions;