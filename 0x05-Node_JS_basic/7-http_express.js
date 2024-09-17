const fs = require('fs');
const express = require('express');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      const result = [];

      if (lines.length <= 1) {
        result.push('Number of students: 0');
        resolve(result);
        return;
      }

      const students = lines.slice(1);
      result.push(`Number of students: ${students.length}`);

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
        result.push(
          `Number of students in ${field}: ${names.length}. List: ${names.join(
            ', ',
          )}`,
        );
      }

      resolve(result.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentData = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${studentData}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(1245, () => {});

module.exports = app;
