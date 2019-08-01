var React = require("react");
var DefaultLayout = require('./layout/default');

class ChangeDetails extends React.Component {
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
        <div className="row justify-content-center">
          <h3>EDIT AND DELETE</h3>
          <p>~~~COMING SOOOOON~~~</p>
          <a role="button" className="btn btn-warning backButt" href="/kaching/home/expenses">Back</a>
        </div>

    </DefaultLayout>
    );
  }
}

module.exports = ChangeDetails;