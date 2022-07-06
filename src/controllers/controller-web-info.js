const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
  console.error(err);
});

module.exports = {
  getWebInfo(req, res) {
    pool.getConnection(function (err, connection) {
      if (err) throw err;
      connection.query(`SELECT * FROM web_info;`, function (error, results) {
        if (error) throw error;
        let data = {} 
        for (let res of results) {
          data[res.nama_info] = res.value
        }
        res.send({
          success: true,
          result: data
        });
      });
      connection.release();
    })
  },
}