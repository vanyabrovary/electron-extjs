const addresses = [
  { id: 1, address: 'г. Киев, ул. Шевченка, д. 1',     name: 'Иванов Иван Иванович' },
  { id: 2, address: 'г. Бровары, Гагарина пр., д. 10', name: 'Петров Пётр Петрович' },
  { id: 3, address: 'г. Житомир, ул. Королева, д. 5',  name: 'Сидоров Сидор Сидорович' }
];

module.exports = {
  getAll() {
    return addresses;
  },

  getById(id) {
    return addresses.find(a => a.id === id);
  }
};
