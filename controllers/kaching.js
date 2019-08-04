var sha256 = require('js-sha256');
const SALT = "This is life";
const cookieParser = require('cookie-parser');
var d = new Date();

module.exports = (db) => {

   /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

 //app.GET (register)
let registerController = (request, response) => {
    response.render('register');
};

 //app.POST (register)
let registerPostController = (request, response) => {

   let hashedPassword = sha256( request.body.password + SALT );

   request.body.password = hashedPassword;
   console.log("jhagsjd")

   db.users.registerUser(request.body, (err, result) => {
    if (err) {
        response.send(err)

    } else {

        if (result) {
            let user_id = result.rows[0].id;
            var userId = request.cookies.user_id;

            let loggedInCookie = sha256( user_id + 'logged_id' + SALT );
            response.cookie('user_name', result.rows[0].name);
            console.log(result.rows[0].name)
            response.cookie('loggedIn', loggedInCookie);
            response.cookie('user_id', user_id);

            const data = {
                userId: user_id,
                types: 6,
                description: 'Welcome to Kaching!',
                amount: 0.00
            }
            db.expenses.registerNewUser(data, (err,result)=>{
                if (err) {
                    response.send(err)

                } else {

                    if (result) {
                        response.redirect('/kaching/login');
                    }
                }
            })
        } else {
            response.render('components/usernameTaken');
        }
    }
    });
};

 //app.GET (login)
let loginController = (request, response) => {
    response.render('login');
};

 // app.POST (login)
let loginPostController = (request, response) => {
    let hashedPassword = sha256( request.body.password + SALT );
    request.body.password = hashedPassword;
    var user = request.body;
    console.log("YIYIYI");
    db.users.loginUser(user, (err, result) => {
        if (err) {
            response.send(err)

        } else {
            console.log("test2")
            console.log(result.rows[0].password);
            if(result.rows[0].password === hashedPassword) {
                let userId = result.rows[0].id;
                let loggedInCookie = sha256( userId + 'logged_id' + SALT );

                response.cookie('user_name', result.rows[0].username);
                response.cookie('loggedIn', loggedInCookie);
                response.cookie('user_id', userId);
                response.redirect('/kaching/home');

            } else {
                console.log("error");
                response.render('components/wrongPassword');
            }
        }
    });
};

 //app.GET (home)
let homeController = (request, response) => {
   if( request.cookies.loggedIn === undefined || request.cookies.loggedIn === "nahh" ){
    response.render('/');
    }
    else{
        console.log(request.cookies.user_name);
        var username = request.cookies.user_name;
        console.log(username);
        db.expenses.getNameAndAmount(username, (err, result) => {
            if (err) {
                response.send(err)
            }

            else {
                console.log("test")
                let amountSum = 0;
                for (let i = 0; i < result.length; i++) {
                    amountSum += result[i].amount;
                }
                let data = {
                    name: result[0].name,
                    amountSum: amountSum.toFixed(2)
                };
                console.log(result);
                response.render('home', data);
            }
        });
    };
};

//app.GET (expenses)
let expensesController = (request,response)=>{
    var username = request.cookies.user_name;
    var userId = request.cookies.user_id;

    db.expenses.getNameAndAmount(username, (err, nameAmountRes) => {
        if (err) {
            response.send(err)
        }

        else {
            db.expenses.getTransactions(userId, (err, expensesRes) => {
                if (err) {
                    response.send(err)
                }

                else {
                    var username = request.cookies.user_name;
                    db.expenses.getNameAndAmount(username, (err, result) => {
                        if (err) {
                            response.send(err)
                        }

                        else {
                            console.log("test12345")
                            let amountSum = 0;
                                for (let i = 0; i < result.length; i++) {
                                    amountSum += result[i].amount;
                                }
                            let data = {
                                nameAmount: nameAmountRes,
                                userdata : expensesRes,
                                amountSum: amountSum.toFixed(2)
                            };
                            console.log(result);
                            response.render('showExpenses', data);
                        }
                    });
                }
            });
        }
    });
}

//app.GET (/add)
let addController = (request,response)=>{
    response.render('addTransactions');
}

//app.POST (/add)
let addPostController = (request, response) =>{
        var uId = request.cookies.user_id
        console.log(uId);
        //response.send(request.body)

        const userinput = request.body;
        let types;

        if(userinput.optionsRadios === "option1"){
            types = 1;
            //food
        }
        else if(userinput.optionsRadios === "option2"){
            types = 2;
            //transport
        }
        else if(userinput.optionsRadios === "option3"){
            types = 3;
            //bills
        }
        else if(userinput.optionsRadios === "option4"){
            types = 4;
            //entertainment
        }
        else if(userinput.optionsRadios === "option5"){
            types = 5;
            //others
        }

        var data = {
            userId: uId,
            typesId: types,
            description: userinput.description,
            amount: userinput.amount
        }

        db.expenses.addTransactions(data, (err, result) =>{
            if (err) {
                response.send(err);

            } else {
                if(result){
                    console.log(result.rows);
                    response.redirect('/kaching/home/expenses');
                }
            }
        });
    }

//app.GET (edit)
let editController = (request,response) =>{
   var data = {
       id : request.params.id
   }
   db.expenses.showTransactionEdit(data, (err, result) => {
    if (err) {
        response.send(err);
    } else {
        console.log('result');
        console.log(result);
        response.render('changeDetails', {result, id: request.params.id});
    }
   });
}

//app.PUT (edit)
let editPostController = (request,response) =>{
    console.log("editpost",request.params.id);
        var uId = request.cookies.user_id;
        var exId = request.params.id;
        console.log(uId);
        console.log('request.params', exId);
        //response.send(request.body)

        const userinput = request.body;
        let types;

        if(userinput.optionsRadios === "option1"){
            types = 1;
            //food
        }
        else if(userinput.optionsRadios === "option2"){
            types = 2;
            //transport
        }
        else if(userinput.optionsRadios === "option3"){
            types = 3;
            //bills
        }
        else if(userinput.optionsRadios === "option4"){
            types = 4;
            //entertainment
        }
        else if(userinput.optionsRadios === "option5"){
            types = 5;
            //others
        }

        var data = {
            userId: uId,
            typesId: types,
            description: userinput.description,
            amount: userinput.amount,
            expensesId : exId
        }

    db.expenses.editSelectedTransactions(data, (err, result) => {
    if (err) {
       console.error('query error:', err.stack);
       response.send('query error');
   } else {
       // console.log("edit post result rows!!",this.result.rows[0]);
        // console.log("ccccc",request.body)
        response.redirect("/kaching/home/expenses");
       // response.send("yes")
     }
    });

}

//app.GET (report)
let reportController =(request,response)=>{
    response.render('monthlyReport');
}

//app.GET (learnMore)
let learnMoreController = (request,response) =>{
        response.render('learnMore');
}

//app.DELETE
let deleteTransactionController = (request,response) =>{
    var exId = request.params.id;
    var data = {
        expensesId : exId
    }
    db.expenses.deleteTransaction(data,(err,result)=>{

        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            response.redirect('/kaching/home/expenses');
        }
    })
}

 //app.GET (logout)
 let logoutController = (request, response) => {
        // response.cookie('loggedIn', 'nahh', { expires: new Date(Date.now() + 900000), httpOnly: true })
        // response.cookie('loggedIn', "nahh");
        // cookies.set('username', {expires: Date.now()});
        // response.cookie('loggedIn', 'nahh', { expires: new Date(Date.now()), httpOnly: true })
        // response.clearCookie('username');
        console.log(response.cookie)
        // response.clearCookie('username', { path: '/kaching/login' })
        // Session.Abandon();
        // response.cookies.clear();

        var user = request.body;
        db.users.logoutUser(user, (err, result) => {
            if (err) {
                response.send(err)

            } else {
                console.log("clearing cookies")
                cookie.Expires = DateTime.Now.AddDays(-1);
                Session.Abandon();
                response.cookies.clear();
                response.redirect('/kaching/login');

            }
        });
    };


   /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
   return {
    login: loginController,
    loginPost: loginPostController,
    register: registerController,
    registerPost: registerPostController,
    home: homeController,
    logout: logoutController,
    expenses: expensesController,
    report: reportController,
    add: addController,
    addPost: addPostController,
    logout: logoutController,
    edit: editController,
    editPost: editPostController,
    learnMore: learnMoreController,
    delete: deleteTransactionController
};

}