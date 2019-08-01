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

  app.get('/kaching/register', kachingControllerCallbacks.register);
  app.post('/kaching/register', kachingControllerCallbacks.registerPost);

  app.get('/kaching/login', kachingControllerCallbacks.login);
  app.post('/kaching/login', kachingControllerCallbacks.loginPost);

  app.get('/kaching/home', kachingControllerCallbacks.home);

  app.get('/kaching/home/expenses',kachingControllerCallbacks.expenses);

  app.get('/kaching/home/report',kachingControllerCallbacks.report);

  app.get('/kaching/home/expenses/add',kachingControllerCallbacks.add);
  app.post('/kaching/home/expenses/add',kachingControllerCallbacks.add);

  app.get('/kaching/login',kachingControllerCallbacks.logout);

  app.get('/kaching/home/expenses/change',kachingControllerCallbacks.change);

  app.get('/kaching/learnMore',kachingControllerCallbacks.learnMore);

};