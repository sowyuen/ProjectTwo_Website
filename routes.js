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

};