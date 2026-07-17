const phonesController    = require('../controllers/phonesController');
const addressesController = require('../controllers/addressesController');

const routes = {
  'phones.index': ()          => phonesController.index(),
  'phones.show': (params)     => phonesController.show(params.id),
  'addresses.index': ()       => addressesController.index(),
  'addresses.show': (params)  => addressesController.show(params.id)
};

function handle(route, params = {}) {
  const handler = routes[route];

  if (!handler) {
    return { success: false, error: `Route "${route}" not found` };
  }

  return handler(params);

}

module.exports = { routes, handle };
