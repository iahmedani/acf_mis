const settings = require('./config/settings');
const dbConfig = (process.env.NODE_ENV === 'production' ? settings.cloudConfig : settings.lConfig);

console.log(process.env.NODE_ENV);