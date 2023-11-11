const express = require('express');
const app = express();
require("./backend/db/mongoose");
const cors = require('cors');
const loginRoute = require('./backend/routes/loginRoutes');
const jobSeekersRoute = require('./backend/routes/jobSeekerRoutes');
const companyRoute = require("./backend/routes/companiesRoutes");
const recruiterRoute = require( "./backend/routes/recruiterRoutes" );
const port = 4000; // Define the port number for your server

app.listen(port, () => {
    console.log(`Server started listening successfully on port ${port}`);
});

app.use(express.json());
app.use(cors());

// Define your API routes
app.use(loginRoute); 
app.use(jobSeekersRoute);
app.use(companyRoute);
app.use(recruiterRoute);


// Handle any other API routes
app.get('/api', (req, res) => {
    // Handle your API routes here
    res.send('API is working');
});
