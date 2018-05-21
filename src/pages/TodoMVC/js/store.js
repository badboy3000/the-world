// var STORAGE_KEY = 'todos-vuejs';

export default {
  fetch() {
    return [
      { title: 'breakfast', completed: true },
      { title: 'fix bug', completed: false },
      { title: 'meeting', completed: false },
    ];
  },
  save(todos) {
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
