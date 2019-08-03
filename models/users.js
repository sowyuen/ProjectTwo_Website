/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
 module.exports = (dbPoolInstance) => {

    let registerUser = (userDetails, callback) => {
        let text = "SELECT username FROM users WHERE username = $1";
        let values = [userDetails.username];

        dbPoolInstance.query(text, values, (error, result) => {

            if( error ){
                callback(error, null);

            } else {
                if (result.rows.length > 0) {
                    callback(null, null);
                } else {
                    let text = "INSERT INTO users (name,username,password) values ($1, $2, $3) RETURNING *";
                    let values = [userDetails.name, userDetails.username, userDetails.password];

                    dbPoolInstance.query(text,values, (error, result) => {
                        if( error ){
                            callback(error, null);

                        } else {
                            callback(null, result);
                        }
                    });
                }
            }
        });
    }

    let loginUser = (userDetails, callback) => {
        console.log(userDetails )
        console.log(userDetails.username );

        let text = `SELECT * from users where username = '${userDetails.username}'`;

        dbPoolInstance.query(text, (error, result) => {

            if( error ){
                console.log("error1")
                callback(error, null);

            } else {
                if( error ){
                    console.log("error2")
                    callback(error, null);

                } else {
                    console.log("test")
                    console.log(result.rows);
                    callback(null, result);
                }
            }
        });
    }

    let logoutUser =(callback) =>{
        console.log("logging out!");
    }

    return {
        registerUser,
        loginUser,
        logoutUser
    };
};