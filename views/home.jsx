var React = require('react');
var DefaultLayout = require('./layout/default');

class Home extends React.Component {
  render() {

    var name =this.props.name;
    var foodSum = this.props.foodSum;
    var transportSum = this.props.transportSum;
    var billSum = this.props.billSum;
    var entertainmentSum = this.props.entertainmentSum;
    var othersSum = this.props.othersSum;


    var monthlySum = this.props.amountSum;
    return (
        <DefaultLayout>
        <div className="container-fluid">
            <div className="jumbotron">
                  <h1 className="display-3">Hello, </h1>
                  <h1 className="display-6"> {name} </h1>
                  <p className="lead">Have you recorded your expenses for today?</p>
                  <hr className="my-4"/>
                  <p className="text-info">"Money, like emotions, is something you must control to keep your life on the right track" -Natasha Munson</p>
                  <p className="lead">
                  <a className="btn btn-primary btn-lg" href="/kaching/learnMore" role="button">Learn more</a>
                  </p>
            </div>

            <div className="container-fluid text-center cardContainer">

                <div className="row mx-auto justify-content-center">
                    <div className="card border-warning d-inline-block border-primary mb-3 mx-2 expensesCard">
                      <div className="card-header">Expenses</div>
                      <div className="card-body">
                      <h3 className="card-title cardTextData"><a href='/kaching/home/expenses'>${this.props.amountSum}</a></h3>
                      <canvas id="doughnutcanvas" width="200" height="200"></canvas>
                      <img src="/legend.jpg" width="250" height="100" alt="legend" className="legend"/>

                      <canvas id="barcanvas" width="200" height="200"></canvas>
                      </div>
                    </div>

                    <div className="card border-warning d-none border-primary mb-3 mx-2 expensesCard">
                      <div className="card-header">Monthly Report</div>
                      <div className="card-body">
                      <h3 className="card-title cardTextData "><a href='/kaching/home/report'>Monthly Report</a></h3>
                      </div>
                    </div>
                </div>
            </div>

            <div className="container-typesId d-none">
            <h3 id="foodSum">{foodSum}</h3>
            <h3 id="transportSum">{transportSum}</h3>
            <h3 id="billSum">{billSum}</h3>
            <h3 id="entertainmentSum">{entertainmentSum}</h3>
            <h3 id="othersSum">{othersSum}</h3>
            </div>

        </div>

        <script type="text/javascript" src="/script.js"/>
        </DefaultLayout>

    );
  }
}

module.exports = Home;