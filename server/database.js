const Sequelize   = require('sequelize');
const postgresUrl = process.env.DATABASE_URL || 'postgres://localhost/things_db';

const sequelize = new Sequelize(postgresUrl);

const Thing = sequelize.define('thing', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

const initialization = async () => {
  await sequelize.sync({ force: true });
  await Thing.create({ name: 'Widget' });
};

initialization();

module.exports = {
  sequelize,
  Thing
};
