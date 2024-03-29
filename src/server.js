const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path'); // Import path module

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'devsytech_db'
});

connection.connect();

app.post('/contact-us', (req, res) => {
  const { name, email, mobile, requirement, message } = req.body;

  // Store contact information in MySQL database
  const query = `INSERT INTO contacts (name, email, phone_number, requirement, message) VALUES (?, ?, ?, ?, ?)`;
  connection.query(query, [name, email, mobile, requirement, message], (error, results) => {
    if (error) {
      console.error("Error saving contact:", error);
      res.status(500).send("An error occurred while saving contact information.");
    } else {
      console.log("Contact information added successfully");
      res.status(200).send("Contact information added successfully");
    }

    // Send email notification
    sendEmail(name, email, mobile, requirement, message);
  });
});

function sendEmail(name, email, mobile, requirement, message) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'izzohizzoh805@gmail.com',
      pass: 'ioli gqso tykc ghov'
    }
  });

  let mailOptions = {
    from: email,
    to: 'izzohizzoh805@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve Google Tag Manager script
app.get('/gtag.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'gtag.js'));
});

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
