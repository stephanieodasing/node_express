exports.createUser = (req, res) => {
    let user = {};

    try{
        user.name = req.body.name;
        user.username = req.body.username;
        user.age = req.body.password;
    
        // Save to MySQL database
        Users.create(user, 
                          {attributes: ['id', 'name', 'username', 'password']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}


exports.users = (req, res) => {
    try{
        Users.findAll({attributes: ['id', 'name', 'username']})
        .then(users => {
            res.status(200).json(users);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}