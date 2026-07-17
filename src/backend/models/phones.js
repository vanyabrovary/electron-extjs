const phones = [
  { id: 1, phone: '+38-063-111-11-11', name: 'Иванов Иван Иванович' },
  { id: 2, phone: '+38-063-222-22-22', name: 'Петров Пётр Петрович' },
  { id: 3, phone: '+38-063-333-33-33', name: 'Сидоров Сидор Сидорович' }
];

module.exports = {
  getAll() {
    return phones;
  },

  getById(id) {
    return phones.find(p => p.id === id);
  }
};
