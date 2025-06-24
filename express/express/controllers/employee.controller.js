const Designation = require('../models').designation;
const Role = require('../models').role;
const Employee = require('../models').employee;



const getEmployees = async function (req, res) {
  let err;
  // let response = { name: 'SaiJanani' };
  console.log('getEmployees: ');
  [err, response] = await to(Employee.findAll({
    // where: {
    // id:1
    //   RoleId: 1
    // }
    include: [
      { model: Role },
      { model: Designation }
    ]
  }));
  if (err) return ReE(res, err, 422);
  return ReS(res, { response });
}
module.exports.getEmployees = getEmployees;

const createEmployee = async function (req, res) {
  let err;
  let body = req.body;
  // console.log('resCreateEmp:', res);
  console.log('body ', body);
  [err, employee] = await to(Employee.create(body));
  console.log('response ', employee);
  if (err) return ReE(res, err, 422);
  return ReS(res, { employee });
}
module.exports.createEmployee = createEmployee;

const getDesignation = async function (req, res) {
  let err;
  [err, designation] = await to(Designation.findAll());
  console.log('response ', designation);
  if (err) return ReE(res, err, 422);
  return ReS(res, { designation });
}
module.exports.getDesignation = getDesignation;

const getRole = async function (req, res) {
  let err;
  [err, role] = await to(Role.findAll());
  console.log('response ', role);
  if (err) return ReE(res, err, 422);
  return ReS(res, { role });
}
module.exports.getRole = getRole;

const deleteEmployee = async function (req, res) {
  let err, deleteEmp;
  let body = req.body;
  console.log('body', body.id);
  [err, deleteEmp] = await to(Employee.destroy({
    where: {
      id: body.id
    }
  }));
  console.log('response ', deleteEmp);
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleteEmp });
}
module.exports.deleteEmployee = deleteEmployee;

const getEmployeeFormFill = async function (req, res) {
  let err;
  [err, employeeDetails] = await to(Employee.findOne({
    where: {
      id: req.body.id
    }
  }));
  console.log('response ', employeeDetails);
  if (err) return ReE(res, err, 422);
  return ReS(res, { employeeDetails });
}
module.exports.getEmployeeFormFill = getEmployeeFormFill;

const updateEmployee = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body ', body);
  [err, update] = await to(Employee.update(body, {
    where: {
      id: body.id
    }
  }));
  console.log('responseUpdate ', update);
  if (err) return ReE(res, err, 422);
  return ReS(res, { update });
}
module.exports.updateEmployee = updateEmployee;

const postRole = async function (req, res) {
  let err;
  let body;
  body = req.body;
  console.log('body ', body);
  [err, addRole] = await to(Role.create(body));
  console.log('addRole ', addRole);
  if (err) return ReE(res, err, 422);
  return ReS(res, { addRole });
}
module.exports.postRole = postRole;

const deleteRole = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body', body.id);
  [err, deleterole] = await to(Role.destroy({
    where: {
      id: body.id
    }
  }));
  console.log('response ', deleterole);
  if (err) return ReE(res, err, 422);
  return ReS(res, { deleterole });
}
module.exports.deleteRole = deleteRole;

const updateRoleget = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body ', body);
  [err, updaterole] = await to(Role.findOne({
    where: {
      id: body.id
    }
  }));
  console.log('responseUpdate ', updaterole);
  if (err) return ReE(res, err, 422);
  return ReS(res, { updaterole });
}
module.exports.updateRoleget = updateRoleget;

const updateRole = async function (req, res) {
  let err;
  let body = req.body;
  console.log('body ', body);
  [err, updatefinal] = await to(Role.update(body, {
    where: {
      id: body.id
    }
  }));
  console.log('responseUpdate ', updatefinal);
  if (err) return ReE(res, err, 422);
  return ReS(res, { updatefinal });
}
module.exports.updateRole = updateRole;