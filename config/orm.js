const connection = require('./connection');

var orm = {
    all: function(tableName, cb) {
        connection.query(`select * from ${tableName}`, function(error, data){
            if (error){
                throw error;
            }
            cb(data);
        })
    }
}