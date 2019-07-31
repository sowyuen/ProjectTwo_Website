module.exports = (dbPoolInstance) => {

    let getNameAndAmount = (username, callback) => {
        console.log("just to knw tat we reach here")
        console.log(username);
        let text = `SELECT users.name,expenses.amount FROM users INNER JOIN expenses ON(users.id = expenses.users_id) WHERE users.username = $1`;
        let values = [username];

        dbPoolInstance.query(text,values,(error, result) => {
            if( error ){
                console.log("err1")
                callback(error, null);

            } else {
                console.log("OKAY")
                console.log(result)
                console.log(result.rows)
                callback(null, result.rows[0]);
            }
        });
    }

    let registerNewUser = (userId,callback) => {
        console.log('JIJIJ',userId);
        let text = 'INSERT INTO expenses (users_id,types_id,amount,description) VALUES ($1,$2,$3,$4) RETURNING *';
        let values = [userId, 4, '$0','NIL'];

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

    return {
        getNameAndAmount,
        registerNewUser
    };
};