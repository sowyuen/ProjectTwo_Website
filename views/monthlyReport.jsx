var React = require("react");
var DefaultLayout = require('./layout/default');

class MonthyReport extends React.Component {
  render() {
    // const showTransactions = this.props.allTransactions.map(allTweeds =>{
    //     return (
    //         <div className = "single-tweed">
    //             <p>"{allTweeds.content}" - By user: {allTweeds.name}</p>
    //         </div>
    //     )
    // });
    return (
    <DefaultLayout>
          <h3>Monthly Report:</h3>
          <p>June: ~BRB FIXING IN PROGRESS~ GG TO BE SHOWN IN A GRAPH</p>
          <p>July: ~BRB FIXING IN PROGRESS~ GG TO BE SHOWN IN A GRAPH</p>
          <p>August: ~BRB FIXING IN PROGRESS~ GG TO BE SHOWN IN A GRAPH</p>
          <a role="button" className="btn btn-warning addButt" href="/kaching/home/expenses">Back</a>
    </DefaultLayout>
    );
  }
}

module.exports = MonthyReport;