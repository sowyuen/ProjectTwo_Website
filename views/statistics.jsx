var React = require("react");
var DefaultLayout = require('./layout/default');

class Statistics extends React.Component {
  render() {
    var foodSum = this.props.foodSum;
    var transportSum = this.props.transportSum;
    var billSum = this.props.billSum;
    var entertainmentSum = this.props.entertainmentSum;
    var othersSum = this.props.othersSum;
    return (

    <DefaultLayout>
    <h1>Total Expenses: ${this.props.amountSum}</h1>
        <div className="container-fluid-s justify-content-center ">
            <div className=" mx-auto justify-content-center">
                <div className="d-inline-block border-primary mb-3 mx-2 legendS">
                  <img src="/legend.jpg" width="350" height="170" alt="legend" className="legend"/>
                </div>
                <div className="d-inline-block border-primary mb-3 mx-2 legendS">
                  <canvas id="doughnutcanvas" width="400" height="400"></canvas>
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


        <script type="text/javascript" src="/script.js"/>

    </DefaultLayout>
    );
  }
}
module.exports = Statistics;