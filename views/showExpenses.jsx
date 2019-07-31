var React = require("react");

class ShowExpenses extends React.Component {
  render() {
    // const showTransactions = this.props.allTransactions.map(allTweeds =>{
    //     return (
    //         <div className = "single-tweed">
    //             <p>"{allTweeds.content}" - By user: {allTweeds.name}</p>
    //         </div>
    //     )
    // });
    return (
      <html>
        <head />
        <body>
          <h3>JULY EXPENSES:</h3>
          <p>{this.props.userdata.amount}</p>

          <button variant="outline-primary" href = "components/addTransactions">Add Transaction</button>
          <div className="show-transactions">
          </div>
        </body>
      </html>
    );
  }
}

module.exports = ShowExpenses;