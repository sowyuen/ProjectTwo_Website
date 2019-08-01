module.exports = (dbPoolInstance) => {

    let getTransactions = (userId,callback) =>{
        console.log("just checking");
        let text = "SELECT types.img,types.category, expenses.description, expenses.amount, expenses.create_date FROM types INNER JOIN expenses ON (types.id = expenses.types_id) WHERE expenses.users_id = $1;"
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
                callback(null, result.rows[0]);
            }
        });
    }

    let registerNewUser = (data,callback) => {
        console.log("expenses data")

        let text = 'INSERT INTO expenses (users_id,types_id,description,amount ) VALUES ($1,$2,$3,$4) RETURNING *';
        let values = [data.userId, data.types, data.description,data.amount];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1")
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log(result.rows[0])
                callback(null, result.rows[0]);
            }
        });
    }

    let addTransactions = (callback)=>{
        let text = 'INSERT INTO expenses ('
    }

    return {
        getNameAndAmount,
        registerNewUser,
        getTransactions
    };
};