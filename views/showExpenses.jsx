var React = require("react");
var DefaultLayout = require('./layout/default');

class ShowExpenses extends React.Component {

  render() {

    console.log("name amount data:",this.props.nameAmount);
    console.log("expenses userdata:",this.props.userdata);

    let transactions = this.props.userdata.map(item=>{

        let url = '/expenses/' + item.id;
        var timestamp = item.create_date.toString();
        var date = timestamp.slice(0, 15);
        return (
            <tr className="table-warning">
                <th scope="row"><a href='#'><img className="types_icon"src={item.img} width="53px" height="53px"/></a></th>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>{item.amount}</td>
                    <td>{date}</td>
            </tr>
            )
    });



    return (
        <DefaultLayout>
          <div className="container-fluid">
              <h3>JULY EXPENSES:</h3>

                <div className="addTransaction-wrapper">
                     <div className="col-md-4 text-center buttonAddTrans">
                      <a role="button" className="btn btn-primary" href="/kaching/home/expenses/add">Add Transaction</a>
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