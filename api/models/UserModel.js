module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('users', {	
	  id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  name: {
			type: Sequelize.STRING
	  },
      username: {
        type: Sequelize.STRING
    },
	  password: {
			type: Sequelize.STRING
      }
	});
	
	return Users;
}