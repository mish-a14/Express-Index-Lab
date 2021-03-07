const students = [
    { student: 'mishal', done: true },
    { student: 'kareem', done: false },
    { student: 'nicole', done: false }
];

module.exports = {
    getAll: function() {
        return students;
    }
};