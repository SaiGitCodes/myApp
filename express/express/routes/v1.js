var express = require('express');
var router = express.Router();

const passport = require('passport');

require('./../middleware/passport')(passport);

const EmployeeController = require('../controllers/employee.controller');
const UserAccountController = require('../controllers/userAccount.controller');
router.post('/login', UserAccountController.login);
router.post('/refreshToken', UserAccountController.refreshToken);


router.get('/getEmployees', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployees);
router.post('/createEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.createEmployee);
router.get('/getDesignation', passport.authenticate('jwt', { session: false }), EmployeeController.getDesignation);
router.get('/getRole', passport.authenticate('jwt', { session: false }), EmployeeController.getRole);
router.post('/deleteEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.deleteEmployee);
router.post('/getEmployeeFormFill', passport.authenticate('jwt', { session: false }), EmployeeController.getEmployeeFormFill);
router.post('/updateEmployee', passport.authenticate('jwt', { session: false }), EmployeeController.updateEmployee);
router.post('/postRole', passport.authenticate('jwt', { session: false }), EmployeeController.postRole);
router.post('/deleteRole', passport.authenticate('jwt', { session: false }), EmployeeController.deleteRole);
router.post('/updateRoleget', passport.authenticate('jwt', { session: false }), EmployeeController.updateRoleget);
router.post('/updateRole', passport.authenticate('jwt', { session: false }), EmployeeController.updateRole);





// router.get('/getEmployees', EmployeeController.getEmployees);
// router.post('/createEmployee', EmployeeController.createEmployee);
// router.get('/getDesignation', EmployeeController.getDesignation);
// router.get('/getRole', EmployeeController.getRole);
// router.post('/deleteEmployee', EmployeeController.deleteEmployee);
// router.post('/getEmployeeFormFill', EmployeeController.getEmployeeFormFill);
// router.post('/updateEmployee', EmployeeController.updateEmployee);

module.exports = router;
