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

         db.users.registerUser(request.body, (err, result) => {
            if (err) {
                response.send(err)

             } else {

                if (result) {
                    let user_id = result.rows[0].id;
                    var userId = request.cookies.user_id;

                    let loggedInCookie = sha256( user_id + 'logged_id' + SALT );
                response.cookie('user_name', result.rows[0].name);
                response.cookie('loggedIn', loggedInCookie);
                response.cookie('user_id', user_id);


                    db.expenses.registerNewUser(user_id,(err,result)=>{
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
        response.render('showExpenses');
    }



 // //app.POST (home)
 //    let homePostController = (request, response) =>{

 //         db.users.postExpenses(request.body, request.cookies, (err, result) => {
 //            if (err) {
 //                response.send(err)

 //             } else {
 //                response.redirect('/home')
 //            };
 //        });
 //    };

 // //app.GET (default home - not login)
 //    let rootController = (request, response) => {
 //        db.tweedr.showTweed(request.body, (err, result) => {
 //            if (err) {
 //                response.send(err)
 //            }

 //             else {
 //                let data = {
 //                    allTweeds : result.rows
 //                }
 //                response.render('tweedr/root', data);
 //            }
 //        });
 //    };

 //app.GET (logout)
    let logoutController = (request, response) => {
        response.cookie('loggedIn', "nahh");
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
    expenses: expensesController
  };

 }