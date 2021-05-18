let express = require('express');
let router = express.Router();
 
const users = require('../controllers/controller.js');

router.post('/api/customer', users.createCustomer);
router.get('/api/customer/:id', users.getCustomer);
router.get('/api/users', users.users);
router.put('/api/customer', users.updateCustomer);
router.delete('/api/customer/:id', users.deleteCustomer);

module.exports = router;