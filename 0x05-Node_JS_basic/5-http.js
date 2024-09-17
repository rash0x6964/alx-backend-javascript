const fs = require('fs');
const http = require('http');
const url = require('url');

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

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.write('This is the list of our students\n');

    const databasePath = process.argv[2];

    countStudents(databasePath)
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
