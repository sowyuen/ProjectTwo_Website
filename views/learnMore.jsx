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
          <img src="/budget.jpeg" width="500" height="500" alt="budget"/>
        </div>
        <div className="row justify-content-center">
        </div>


           <div className="container-fluid-savings">
            <h2><strong>Saving Tips 101 in 3 steps</strong></h2>
           <h5>Step One:</h5>
           <p>1. On your payday, you get paid a salary credited into your Savings Account</p>
           <p>2. One day after your payday, you set up an automated transfer of 50% to your Expenses Account</p>
           <p>3. In the middle of the month, a preset amount (around 30%) will be deducted with an automated Regular Savings Plan (RSP) for your Wealth Account to buy the STI ETF</p>

           <h5>Step Two:</h5>
           <p>1. Set up your <span className="three">3 accounts</span> and clearly define the boundaries (savings, spending, wealth).</p>
           <p>2. From the first month, start adjusting your % between the 3 to define the right allocation.</p>
           <p>3. It should be comfortable but also a tad challenging to push yourself to make smarter spending choices.</p>

            <h5>Step Three:</h5>
           <p>1. Here comes the most challenging part! To save accordingly to your budget set. </p>
           <p>2. To keep a record of how much you spend so that you won't overspend. You can download <span className="three">KAching!</span> to help you track your monthly expenses</p>
           <p>3. Key in your expenses daily and remind yourself of your budget set. It is simple but need lots of effort and self-discipline!</p>
           <h2> Here's a video you can watch to know more! </h2>
           </div>

           <div className="embed-responsive embed-responsive-16by9 video" align="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S01C8P4OEBU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <p className="source"> source taken from @seedly 2019 for more info : www.seedly.com</p>




    </DefaultLayout>
    );
  }
}

module.exports = LearnMore;