exports.lConfig = {
    server:'localhost',
    user:'sa',
    database:'acf',
    password:'imran123'
}

exports.cloudConfig = {
    server:'45.76.90.167',
    user:'sa',
    database:'acf',
    password:'7Cd29FhP2YQU4FtP'
}

exports.imranConfig = {
    server:'10.11.71.37',
    user:'sa',
    database:'ACF MIS',
    password:'imran123'
}

exports.port = (process.env.NODE_ENV === 'production') ? 8080 : 3000;

exports.secretKey = 'qwertyuioppoiuytrewq';