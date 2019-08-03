module.exports = (dbPoolInstance) => {

    let getTransactions = (userId,callback) =>{
        console.log("just checking");
        let text = "SELECT types.img,types.category, expenses.description, expenses.amount, expenses.create_date FROM types INNER JOIN expenses ON (types.id = expenses.types_id) WHERE expenses.users_id = $1 ORDER BY expenses.create_date DESC"
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

//     let getSelectedTransactions = (userId,callback) =>{
//         console.log("just checking");
//         // let text = "SELECT types.img,types.category, expenses.description, expenses.amount, expenses.create_date FROM types INNER JOIN expenses ON (types.id = expenses.types_id) WHERE expenses.users_id ="+ parseInt(request.params.id);
//         // let values =[userId];
// let text = "SELECT types.img,types.category, expenses.description, expenses.amount, expenses.create_date FROM types INNER JOIN expenses ON (types.id = expenses.types_id) WHERE expenses.users_id = $1 "
//         let values =[userId];

//         dbPoolInstance.query(text,values,(error, result) => {
//             if( error ){
//                 console.log("err1 ST")
//                 callback(error, null);

//             } else {
//                 console.log("OKAY ST")
//                 console.log(result)
//                 console.log(result.rows)
//                 callback(null, result.rows);
//             }
//         });
//     }

    //     let editSelectedTransactions = (userId,callback) =>{
    //     console.log("just checking");
    // // let text = "UPDATE expenses,types SET types.category=$1, expenses.description=$2, expenses.amount=$3 FROM expenses INNER JOIN types ON (types.id = expenses.types_id) WHERE expenses.users_id ="+ parseInt(request.params.id);
    //     let text = "UPDATE expenses SET types_id =$1, description=$2,amount=$3 WHERE types_id =$4";
    //     let value = [request.body.types_id, request.body.description, request.body.amount,request.body.types_id];

    //     dbPoolInstance.query(text,values,(error, result) => {
    //         if( error ){
    //             console.log("err1 ST")
    //             callback(error, null);

    //         } else {
    //             console.log("OKAY ST")
    //             console.log(result)
    //             console.log(result.rows)
    //             callback(null, result.rows);
    //         }
    //     });
    // }


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
        addTransactions
        // getSelectedTransactions
        // editSelectedTransactions
    };
};