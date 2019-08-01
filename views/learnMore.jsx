var React = require("react");
var DefaultLayout = require('./layout/default');

class LearnMore extends React.Component {
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
          <h3>BUDGEtiNG IS IMPORTANT</h3>
          <p>~~~COMING SOOOOON~~~</p>
          <a role="button" className="btn btn-warning backButt" href="/kaching/home">Home</a>
        </div>

    </DefaultLayout>
    );
  }
}

module.exports = LearnMore;