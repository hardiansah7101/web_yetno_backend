const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
  console.error(err);
});

module.exports = {
  postLogin(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(`SELECT * FROM users where username = ? and password = ?;`, [req.body.username, req.body.password], function (error, results) {
        if (error) throw error;
        if (results.length == 0) {
          res.send({
            success: false,
            message: 'Username / password tidak ditemukan!'
          });
        } else {
          res.send({
            success: true,
            data: results[0]
          });
        }
      });
      connection.release();
    })
  },
}