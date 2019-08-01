var React = require('react');
var DefaultLayout = require('./layout/default');

class Home extends React.Component {
  render() {
    return (
        <DefaultLayout>
        <div className="container-fluid">
            <div className="jumbotron">
                  <h1 className="display-3">Hello, </h1>
                  <h1 className="display-6"> {this.props.userdata.name} </h1>
                  <p className="lead">Have you recorded your expenses for today?</p>
                  <hr className="my-4"/>
                  <p className="text-info">"Money, like emotions, is something you must control to keep your life on the right track" -Natasha Munson</p>
                  <p className="lead">
                  <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                  </p>
            </div>

            <div className="container-fluid text-center cardContainer">
            <div className="card border-warning d-inline-block border-primary mb-3 mx-2 expensesCard">
              <div className="card-header">Expenses</div>
              <div className="card-body">
              <h3 className="card-title cardTextData"><a href='/kaching/home/expenses'>{this.props.userdata.amount}</a></h3>
              </div>
            </div>

            <div className="card border-warning d-inline-block border-primary mb-3 mx-2 expensesCard">
              <div className="card-header">Monthly Report</div>
              <div className="card-body">
              <h3 className="card-title cardTextData "><a href='/kaching/home/report'>Monthly Report</a></h3>
              </div>
            </div>
            </div>

        </div>
        </DefaultLayout>

    );
  }
}

module.exports = Home;