// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// CORS middleware

app.use(cors())
// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'blog'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// Create a new post
app.post('/posts', (req, res) => {
  const { title, titledescription, img } = req.body;
  const sql = 'INSERT INTO posts (title, titledescription, img, created_at) VALUES (?, ?, ?, NOW())';
  db.query(sql, [title, titledescription, img], (err, result) => {
    if (err) {
      console.error('Error creating post: ', err);
      res.status(500).send('Error creating post');
    } else {
      console.log('Post created successfully');
      res.status(200).send('Post created successfully');
    }
  });
});




// Get all posts
app.get('/posts', (req, res) => {
  const selectQuery = `SELECT * FROM posts`;
  db.query(selectQuery, (err, result) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send(result);
    }
  });
});


app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const selectQuery = `SELECT * FROM posts WHERE id = ?`;
  db.query(selectQuery, [id], (err, result) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      if (result.length === 0) {
        res.status(404).send({ message: `Post with id ${id} not found` });
      } else {
        res.status(200).send(result[0]);
      }
    }
  });
});

// update post
app.put('/posts/:id', (req, res) => {
  const { id } = req.params;
  const { title, titledescription, img } = req.body; 
  const updateQuery = `UPDATE posts SET title = ?, description = ?, img = ? WHERE id = ?`; 
  db.query(updateQuery, [title, titledescription, img, id], (err, result) => { 
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send({ message: `Post with id ${id} updated successfully` });
    }
  });
});


// Delete a post
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM posts WHERE id = ?`;
  db.query(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.status(200).send({ message: `Post with id ${id} deleted successfully` });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
