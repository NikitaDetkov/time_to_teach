const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Lesson = sequelize.define('lesson', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  price: { type: DataTypes.INTEGER },
  date: { type: DataTypes.DATE } 
});

const Subject = sequelize.define('subject', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
});

const Student = sequelize.define('student', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.DATE },
  grade: { type: DataTypes.INTEGER },
});

const Tutor = sequelize.define('tutor', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  birthdate: { type: DataTypes.DATE },
});

Tutor.hasMany(Lesson);
Lesson.belongsTo(Tutor);

Tutor.hasMany(Subject);
Subject.belongsTo(Tutor);

Subject.hasOne(Lesson);
Lesson.belongsTo(Subject);

Student.hasOne(Lesson);
Lesson.belongsTo(Student);

module.exports = { Lesson, Tutor, Student, Subject };
