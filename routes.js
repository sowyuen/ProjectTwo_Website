module.exports = (app, allModels) => {
  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const kachingControllerCallbacks = require('./controllers/kaching')(allModels);

//register
  app.get('/kaching/register', kachingControllerCallbacks.register);
  app.post('/kaching/register', kachingControllerCallbacks.registerPost);

//login
  app.get('/kaching/login', kachingControllerCallbacks.login);
  app.post('/kaching/login', kachingControllerCallbacks.loginPost);

//logout
  app.get('/kaching/login',kachingControllerCallbacks.logout);

//homepage
  app.get('/kaching/home', kachingControllerCallbacks.home);

//showing all expenses transactions
  app.get('/kaching/home/expenses',kachingControllerCallbacks.expenses);

//adding new transaction
  app.get('/kaching/home/expenses/add',kachingControllerCallbacks.add);
  app.post('/kaching/home/expenses/add',kachingControllerCallbacks.addPost);

//edit
  app.get('/kaching/home/expenses/edit',kachingControllerCallbacks.edit);
//  app.put('/kaching/home/expenses/:id',kachingControllerCallbacks.editPost);


//graphs,piechart,budgeting
  app.get('/kaching/home/report',kachingControllerCallbacks.report);
  app.get('/kaching/learnMore',kachingControllerCallbacks.learnMore);


};