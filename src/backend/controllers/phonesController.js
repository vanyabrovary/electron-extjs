const PhonesModel = require('../models/phones');

module.exports = {
  index() {
    return {
      success: true,
      data: PhonesModel.getAll()
    };
  },

  show(id) {
    const phone = PhonesModel.getById(id);
    if (!phone) {
      return { success: false, error: 'Not found' };
    }
    return { success: true, data: phone };
  }
};
