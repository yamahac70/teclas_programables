const sqlite3=require('sqlite3').verbose();
const db=new sqlite3.Database('./db_prog.db');



module.exports.sql_query = (command, method = 'all') => {
    return new Promise((resolve, reject) => {
      db[method](command, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };


