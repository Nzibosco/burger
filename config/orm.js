var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cd){
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result){
        if (err){
            throw err;
        }
        cd(result);
    });
},

insertOne: function(table, col, val, cb) {
    //var queryString = "INSERT INTO " + table;
    var queryString = "INSERT INTO ?? (??) VALUES (?); ";
    //queryString = "INSERT INTO tableName (col1, col2, ...) VALUES (row4col1, row4col2, ...);"

    //queryString += " (";
    //queryString += cols.toString();
    //queryString += ") ";
    //queryString += "VALUES (";
    //queryString += printQuestionMarks(vals.length);
    //queryString += ") ";

    console.log(queryString);

    connection.query(queryString, [table, col, val], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

updateOne: function(table, col2set1, col2set2, setVal1, setVal2, refCol, refVal, cb){
    var queryString = "UPDATE ?? SET ?? = ?, ?? = ?  WHERE ?? = ?"; 
    connection.query(queryString, [table, col2set1, setVal1, col2set2, setVal2, refCol, refVal], function(err, result){
        if(err){
            throw err;
        }
        cb(result);
    });
}

};

module.exports= orm; 