const settings = require('./config/settings');
const dbConfig = (process.env.NODE_ENV === 'production' ? settings.cloudConfig : settings.lConfig);

const
  express = require('express'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  passportConf = require('./config/passport'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  ejs = require('ejs'),
  flash = require('connect-flash'),
  expressValidator = require('express-validator'),
  engine = require('ejs-mate');

// express app
var app = express();

// middlewares
app.use(express.static(__dirname+'/public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(logger('dev'));
app.use(flash());
// Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;
  
      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

  // routes

  require('./routes/main')(app);

  app.listen(settings.port, (err)=>{
    if(err) throw new Error(err);
    console.log('server started on port :'+settings.port);
  });