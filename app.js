const settings = require('./config/settings');
const dbConfig = (process.env.NODE_ENV === 'production' ? settings.cloudConfig : settings.lConfig);
const sql=require("mssql");
const config = {
    user: 'sa',
    password: 'smartest1',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'demo',
 }

const
  express = require('express'),
  mongoose = require('mongoose'),
//   passport = require('passport'),
//   passportConf = require('./config/passport'),
session = require('express-session'),
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
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(logger('dev'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: settings.secretKey,
  // store: new MongoStore({url: localConfig.dbURL, autoReconnect: true, autoRemove: 'native'})
}));
app.use(flash());

app.use((req, res, next)=>{
  app.locals.user = req.user;
  // app.locals.msg = req.msg || null;
  app.locals.messages = require('express-messages')(req, res);
  app.locals.url = req.path;
  next();
});
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
  require('./routes/admin')(app);

  app.listen(settings.port, (err)=>{
    if(err) throw new Error(err);
    console.log('server started on port :'+settings.port);
  });
