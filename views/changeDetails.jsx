var React = require("react");
var DefaultLayout = require('./layout/default');

class ChangeDetails extends React.Component {
  render() {
    let item = this.props.result;
    console.log('RESULT HERE');
    console.log(this.props.result);
    let url = "/kaching/home/expenses/" + this.props.id+"?_method=PUT";

    return (
        <DefaultLayout>
            <div className="container-fluid-addTrans justify-content-center">

                <div className="border border-warning justify-content-center borderAdd">
                  <h3>Edit/Delete:</h3>
                    <form method="POST" action={url}>

                        <div className="form-group">
                        <div className="row catBad">
                            <span className="badge badge-pill badge-primary justify-content-center">Category: </span>

                        </div>
                        <div className="form-check-inline">
                              <label className="form-check-label">
                              <input type="radio" className="form-check-input" name="optionsRadios"value="option1" checked={this.props.result.types_id === 1}/><img src="https://png.pngtree.com/svg/20170208/be6783b29c.png" width="35" height="35" alt="Kaching!"/> Food
                              </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="optionsRadios"value="option2" checked={this.props.result.types_id === 2}/><img src="https://cdn4.iconfinder.com/data/icons/transportation-lineal-color-set-version-two/512/Transport_Bus_Lineal_Color-512.png" width="35" height="35" alt="Kaching!"/> Transport
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="optionsRadios"value="option3" checked={this.props.result.types_id === 3}/><img src="https://image.flaticon.com/icons/png/512/1365/1365895.png" width="35" height="35" alt="Kaching!"/> Bills
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="optionsRadios"value="option4" checked={this.props.result.types_id === 4}/><img src="https://cdn1.iconfinder.com/data/icons/news-and-media-solid-the-world-today/512/Entertainment_News-512.png" width="35" height="35" alt="Kaching!"/> Entertainment
                                  </label>
                                </div>
                                <div className="form-check-inline">
                                  <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="optionsRadios"value="option5" checked={this.props.result.types_id === 5}/><img src="/kaching.png" width="35" height="35" alt="Kaching!"/> Others
                                  </label>
                                </div>

                                <p></p>

                                <div className="row justify-content-center">
                                    <span className="badge badge-pill badge-primary justify-content-center">Amount: </span>
                                </div>
                                <div className="row justify-content-center">
                                    <img src="https://ya-webdesign.com/images/cartoon-money-bag-png-2.png" width="35" height="35" alt="Kaching!" className="imgMoney"/>
                                    <div className="form-group col-xs moneyInput">
                                        <input type="text" className="form-control" name="amount" placeholder="$0.00" id="inputDefault" value={this.props.result.amount}/>
                                    </div>
                                </div>

                                <p></p>

                                 <div className="row justify-content-center">
                                    <span className="badge badge-pill badge-primary">Description: </span>
                                </div>
                                <div className="row justify-content-center">
                                    <img src="https://cdn1.iconfinder.com/data/icons/education-set-01/512/document-info-512.png" width="35" height="35" alt="Kaching!" className="imgMoney"/>
                                    <div className="form-group col-l desInput">
                                        <input type="text" className="form-control" name="description" placeholder="lunch" id="inputDefault" value={this.props.result.description}/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-warning ">Update Transaction</button>
                        </div>
                    </form>

                    <form method="POST" action={`/kaching/home/expenses/${this.props.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-warning">Delete Transaction</button>
                    </form>
                    <a role="button" className="btn btn-warning addButt" href="/kaching/home/expenses">Back</a>
                    </div>

            </div>

          </DefaultLayout>
    );
  }
}

module.exports = ChangeDetails;