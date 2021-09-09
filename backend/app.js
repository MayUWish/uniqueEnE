const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

// checking production environment or not
const { environment } = require('./config');
const isProduction = environment === 'production';

//import routes
const routes = require('./routes');

const app = express();


app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    // CORS isn't needed in production since all of our React and Express resources will come from the same origin.
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(helmet({
    contentSecurityPolicy: false
}));

// Set the _csrf token and create req.csrfToken method
// Doing so, generating at backend and send to front-end as cookie, bc react is not going refresh page;
// In order to authentication, need to generate cookie to send to front -end
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true,
        },
    })
);

// connect routes
app.use(routes);


module.exports = app;