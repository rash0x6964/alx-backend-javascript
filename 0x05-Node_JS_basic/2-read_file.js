const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldGroups = {};

    students.forEach((student) => {
      const studentData = student.split(',');

      const field = studentData[studentData.length - 1];
      const firstName = studentData[0];

      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstName);
    });

    for (const [field, names] of Object.entries(fieldGroups)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
