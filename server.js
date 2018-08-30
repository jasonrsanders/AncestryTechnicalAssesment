let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.json());

// Pickup data from frontend and inject it into the "INSTER INTO" sql command
  // Wasn't able to get this working in time
// app.post('/api/suggestions', (req, res, next) => {
//   console.log('request received:', req.body);

let db = new sqlite3.Database('sqlite3files/test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite test database.');
});

// Open Database connection
db.serialize(() => {
  // Create a table if one doesn't already exists; else open the table
  db.all(`create table if not exists suggestions2 (id integer primary key, name text, email varchar(255), age int, gender text, country text, experience int, improvements text, originpage varchar(255));`)
  // Insert dummy values
  db.run(`INSERT INTO suggestions2(name, email, age, gender, country, experience, improvements, originpage) VALUES ("jason", "jason@gmail.com", 33, "male", "USA", 1, "it was good", "www.ancestry.com")`, function(err){
    if (err) {
      console.error(err.message);
    }
  });
  // Print the table
  db.all(`SELECT * FROM suggestions2;`, (err, rows) => {
    if (err) {
      console.error(err.message);
    }
    rows.forEach(row => {
      console.log(`${row.id}\t${row.name}\t${row.email}\t${row.age}\t${row.gender}\t${row.country}\t${row.experience}\t${row.originpage}`);
    })
  });
});

// Close Database when done!!!
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('The test database connection has been closed.');
});
// });


// Run a GET command to pull data from table; send to marketing report page for processing and display
  // Didn't have the time to work on this piece

let port = 8000;
app.listen(port, () => {
  console.log('listening on port ' + port);
})
