const connect= require('./db');

exports.getAdd= (req,res)=>{
    var name=req.body.name;
    var email=req.body.email;
    var phone_number=req.body.phone_number;
    // console.log(name);
    // console.log(city);

    connect.query("Insert into info(name,email,phone_number) values ('" +name+ "' ,'" +email+ "','"+phone_number+"')",
    function(err,result){
        if(!err){
            res.send(result);
        }else{
            return err;
        }
    }
    );
};

exports.getAll = (req, res) => { 
    connect.query("SELECT * from info",
      function (err,result) {
        if(!err){
            res.send(result[0]);
          }else{
            return err;
          }
      }
    );
  };

exports.getUpdate = (req,res) => { 
    // console.log(req.body)
    var name=req.body.name;
    var phone_number=req.body.phone_number;
    connect.query(
      "UPDATE info SET name= ('"+name+ "'),email=('"+email+"'),phone_number=('"+phone_number+"') WHERE name = ('"+name+"')",
      function (err, result){
        if(!err){
          status: "success",
          res.send(result);
        }else{
          return err;
        }
      }
    );
  };
  
exports.getDelete = (req,res) => { 
    var name= req.body.name;
    connect.query(
      "DELETE FROM info WHERE name = ('"+name+"')",
      function (err, result){
        if(!err){
          status: "success",
          res.send(result);
        }else{
          return err;
        }
      }
    );
  };
  