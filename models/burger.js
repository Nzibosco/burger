var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(col, val, cb){
        orm.insertOne("burgers", col, val, function(res){
            cb(res);
        });
    },
    updateOne: function(col2set1, col2set2, setVal1, setVal2, refCol, refVal,cb){
        orm.updateOne("burgers", col2set1, col2set2, setVal1, setVal2, refCol, refVal, function(res){
            cb(res);
        });
    }
};

module.exports= burger;

