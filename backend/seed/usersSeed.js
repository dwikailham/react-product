module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'Mouse',
      qty: "1",
      picture: "110110101",
      expiredAt: new Date(),
      isActive: true
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};