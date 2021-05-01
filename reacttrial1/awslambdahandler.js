const mysql = require("/opt/nodejs/node14/node_modules/mysql");
const bcrypt = require("/opt/nodejs/node14/node_modules/bcryptjs");
const Cookie = require("/opt/nodejs/node14/node_modules/js-cookie");
const jwt = require("/opt/nodejs/node14/node_modules/jsonwebtoken");

const pool = mysql.createPool({
  connectionLimit: 100,
  host     : process.env.RDS_HOST,
  user     : process.env.RDS_USER,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database : process.env.RDS_DBNAME,
  timeout  : 60000
});



function signToken(userid) {
    return jwt.sign({userid}, "secret", {
        expiresIn: "1h"
    });
}

function getCookie(name, event) {
    var match = event.headers.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
    return match ? match[1] : null;
}

var jwtToken;

module.exports.handler = async function(event, context, callback){
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  const email = data.email;
  const password = data.password;
  console.log(email);
  console.log(password)
  const sql = 'SELECT * FROM tropiweb_users WHERE email = ?';
  const values = [
    [email]
  ];
  console.log("Before entering the query");

  const infoFromDB = await new Promise((resolve, reject) => {
    pool.getConnection((error, connection) => {
      console.log("Enters query...");
      console.log("Before checking for errors...");
      if (error) throw error;
      connection.query(sql, [values], function(err, result){
        connection.on('error', function(err) {
        console.log(err);
        connection.destroy();
        callback(new Error(err));
    });
    console.log("Got the values from the table...");
    console.log(result);
    console.log("Before parsing the result");
    const parsedResult = JSON.parse(JSON.stringify(result));
    console.log("After parsing the result");
    console.log("The parsed results: ", parsedResult[0].password);
    connection.destroy();
    resolve({
    password: parsedResult[0].password,
    userid: parsedResult[0].userid
    });
    return;
      });
    });

  });

  const isPasswordValid = await new Promise((resolve, reject) => {
    bcrypt.compare(password, infoFromDB.password, function(err, res){
    console.log("Inside bcrypt callback");
    if(res==true) {
      console.log("Inside the (res===true) condition");
      resolve(true);
      }
    else{
      console.log("Inside the error");
       return new Error(err);
      }
    })
  });
  console.log(infoFromDB.password);
  console.log(infoFromDB.userid);
  console.log("Is the password the same?", isPasswordValid);
  if (isPasswordValid){
    jwtToken = signToken(infoFromDB.userid);
  }
  const response = {
    statusCode:200,
    headers:{
      "Access-Control-Allow-Origin": "http://localhost:3000",
      'Access-Control-Allow-Credentials': "true",
      "Content-Type":"text/html",
      "Set-Cookie": "token="+jwtToken+"; SameSite=None; Secure;"
    },
    body: JSON.stringify("Cookie was stored and the JWT is:" + jwtToken)
  };
  console.log("This is the token with the userid and secret.", jwtToken)
  console.log("Lambda was successfully called.");
  console.log("Cookie List: " + JSON.stringify(event.headers.cookie));
  console.log("Got the cookie using getCookie() function: "+ getCookie("token", event));
  callback(null, response);
}
