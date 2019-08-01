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


                    var now = new Date();
                    var m = now.getMonth();
                    m = m + 1;
                    var d = now.getDate();
                    var y = now.getFullYear();
                    var loggedDate = m + "/" + d + "/" + y;

                    const data = {
                        userId: user_id,
                        types: 5,
                        description: '-',
                        amount: '$0'
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
         }else{
            console.log(request.cookies.user_name);
            var username = request.cookies.user_name;
            console.log(username);
             db.expenses.getNameAndAmount(username, (err, result) => {
                if (err) {
                    response.send(err)
                }

                 else {
                    console.log("test")
                    let data = {
                        userdata : result
                    };
                    console.log(result);
                    response.render('home', data);
                }
            });
        };
    };

    let expensesController = (request,response)=>{
        var username = request.cookies.user_name;
        var userId = request.cookies.user_id;

        db.expenses.getNameAndAmount(username, (err, nameAmountRes) => {
            if (err) {
                response.send(err)
            }

            else {
                //console.log("test")
                // let data = {
                //     userdata : nameAmountRes
                // };

                //console.log("Name and amount: ", data);
                //response.render('showExpenses', data);

                db.expenses.getTransactions(userId, (err, expensesRes) => {
                    if (err) {
                        response.send(err)
                    }

                    else {
                        let data = {
                            nameAmount: nameAmountRes,
                            userdata : expensesRes,
                        };
                        //console.log(result);
                       // console.log("expenses transactions ", data)
                        response.render('showExpenses', data);
                    }
                });
            }
        });
    }

    let reportController =(request,response)=>{
        response.render('monthlyReport');
    }

    let addController = (request,response)=>{
        response.render('addTransactions');
    }

   let addPostController = (request, response) => {
};


 //app.GET (logout)
    let logoutController = (request, response) => {
        // response.cookie('loggedIn', 'nahh', { expires: new Date(Date.now() + 900000), httpOnly: true })
        // response.cookie('loggedIn', "nahh");
        // cookies.set('username', {expires: Date.now()});
        response.cookie('loggedIn', 'nahh', { expires: new Date(Date.now()), httpOnly: true })
        response.clearCookie('username');
        console.log(response.cookie)
        // response.clearCookie('username', { path: '/kaching/login' })
        response.redirect('/kaching/login')
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
    report : reportController,
    add : addController,
    addPost : addPostController,
    logout : logoutController
  };

 }