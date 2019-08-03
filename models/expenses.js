module.exports = (dbPoolInstance) => {

    let getTransactions = (userId,callback) =>{
        console.log("just checking");
        let text = "SELECT types.img,types.category, expenses.description, expenses.amount, expenses.create_date, expenses.id FROM types INNER JOIN expenses ON (types.id = expenses.types_id) WHERE expenses.users_id = $1 ORDER BY expenses.create_date DESC"
        let values =[userId];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1")
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log(result)
                console.log(result.rows)
                callback(null, result.rows);
            }
        });
    }

let editSelectedTransactions = (data,callback) =>{
       console.log("just checking");
        // console.log("modelsssss",data);
       let text = "UPDATE expenses SET types_id =$1, description=$2,amount=$3 WHERE id =$4 RETURNING *";
       console.log('test');
       console.log("DATA",data);
       console.log("jshdajshda",data.types_id);
       let values = [data.typesId, data.description, data.amount,data.expensesId];
       console.log('values', values);
       dbPoolInstance.query(text,values,(error, result) => {
           if( error ){
               console.log("err1 ST")
               callback(error, null);
           } else {
               console.log("OKAY ST")
               console.log(result)
               console.log(result.rows)
               callback(null, result.rows);
           }
       });
   }

   let showTransactionEdit = (data, callback) => {
        let text = "SELECT * FROM expenses WHERE id = $1";
        const value = [data.id];
           dbPoolInstance.query(text, value, (error, result) => {
            if( error ){
                console.log("err1")
                console.log(error);
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log("getNameAndAmount ",result.rows)
                callback(null, result.rows[0]);
            }
        });

   }

   let deleteTransaction = (data, callback) =>{
    let text = "DELETE FROM expenses WHERE id = $1";
    const value = [data.expensesId];
    dbPoolInstance.query(text, value, (error, result) => {
            if( error ){
                console.log("err1")
                console.log(error);
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log("getNameAndAmount ",result.rows)
                callback(null, result.rows[0]);
            }
        });

   }
    let getNameAndAmount = (username, callback) => {
        console.log("just to knw tat we reach here")
        console.log(username);
        //sum the expenses.amount
        let text = `SELECT users.name,expenses.amount FROM users INNER JOIN expenses ON(users.id = expenses.users_id) WHERE users.username = $1`;
        let values = [username];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1")
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log("getNameAndAmount ",result.rows)
                callback(null, result.rows);
            }
        });
    }

    let registerNewUser = (data,callback) => {
        console.log("expenses data")

        let text = 'INSERT INTO expenses (users_id,types_id,description,amount ) VALUES ($1,$2,$3,$4) RETURNING *';
        let values = [data.userId, data.types, data.description,data.amount];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1 defaultTrans")
                callback(error, null);

            } else {
                console.log("OKAY defaultTrans")
                console.log(result.rows[0])
                callback(null, result.rows[0]);
            }
        });
    }

    let addTransactions = (dataAdd,callback)=>{
        var data = {
            userId: "",
            typesId: "",
            description: "",
            amount: ""
        }

        console.log("adding transaction to dataBase");
        let text = 'INSERT INTO expenses (users_id, types_id,description,amount) VALUES($1,$2,$3,$4) RETURNING *';
        let values = [dataAdd.userId, dataAdd.typesId, dataAdd.description,dataAdd.amount];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1 addTrans")
                callback(error, null);

            } else {
                console.log("OKAY addTrans")
                console.log(result.rows[0])
                callback(null, result.rows[0]);
            }
        });
    }

    return {
        getNameAndAmount,
        registerNewUser,
        getTransactions,
        addTransactions,
        editSelectedTransactions,
        showTransactionEdit,
        deleteTransaction
    };
};