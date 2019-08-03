var React = require("react");
var DefaultLayout = require('./layout/default');

class ShowExpenses extends React.Component {

  render() {

    console.log("name amount data:",this.props.nameAmount);
    console.log("expenses userdata:",this.props.userdata);

        var d = new Date();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var currentMonth = month[d.getMonth()];

    let transactions = this.props.userdata.map(item=>{

        let url = '/expenses/' + item.id;
        var timestamp = item.create_date.toString();
        var date = timestamp.slice(0, 15);
        return (
            <div>
                <tr className="table-warning">
                    <th scope="row"><a href='/kaching/home/expenses/edit'><img className="types_icon"src={item.img} width="53px" height="53px"/></a></th>
                        <td><a className="aShow" href='/kaching/home/expenses/:id/edit'>{item.category}</a></td>
                        <td><a className="aShow" href='/kaching/home/expenses/:id/edit'>{item.description}</a></td>
                        <td>$ <a className="aShow" href='/kaching/home/expenses/:id/edit'>{item.amount.toFixed(2)}</a></td>
                        <td>{date}</td>
                </tr>
            </div>
            )
    });



    return (
        <DefaultLayout>

        <h3>{currentMonth} Expenses:</h3>

          <div className="container-fluid">

                <div className="addTransaction-wrapper">

                <div className="row justify-content-center">
                <a role="button" className="btn btn-warning  addButt" href="/kaching/home/expenses/add">Add Transaction</a>
                </div>
                        <div className ="transaction-table" >
                            <table className="table table-active ">
                              <thead>
                                <tr>
                                  <th scope="col">Type</th>
                                  <th scope="col">Category</th>
                                  <th scope="col">Description</th>
                                  <th scope="col">Amount</th>
                                  <th scope="col">Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {transactions}
                            </tbody>
                           </table>
                      </div>
                </div>
          </div>
        </DefaultLayout>
    );
  }

}

module.exports = ShowExpenses;