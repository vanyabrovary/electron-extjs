const AddressesModel = require('../models/addresses');

module.exports = {
  index() {
    return {
      success: true,
      data: AddressesModel.getAll()
    };
  },

  show(id) {
    const address = AddressesModel.getById(id);
    if (!address) {
      return { success: false, error: 'Not found' };
    }
    return { success: true, data: address };
  }
};
