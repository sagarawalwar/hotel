const connect= require('./db');

exports.getAdd= (req,res)=>{  // localhost:3000/roomBook
    var name=req.body.name;
    var room_number=req.body.room_number;
    var rent=req.body.rent;
    
    connect.query("Insert into details(name,room_number,rent) values ('" +name+ "' ,'" +room_number+ "','"+rent+"')",
    function(err,result){
        if(!err){
            res.send(result);
        }else{
            return err;
        }
    }
    );
};

exports.getDelete = (req,res) => {  // localhost:3000/detete_details
    var name= req.body.name;
    connect.query("DELETE FROM details WHERE name = ('"+name+"')",
      function(err,result){
        if(!err){
            connect.query("DELETE FROM info WHERE name = ('"+name+"')",
            function (err,result1) {
                if(!err){
                    res.send(result1);
                  }else{
                    return err;
                  }
              }
            );
        
        }else{
            return err;
        }
    }
    );
};