const {Router} = require('express');
const router = Router();
const {getEmployees, getEmployee, postEmployee, putEmployee, patchEmployee, deleteEmployee} = require('../controllers/employee.controller');

router.get('/', getEmployees);
router.get('/:id', getEmployee);
router.post('/', postEmployee);
router.patch('/:id', patchEmployee);
router.put('/:id', putEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;