const User = require('../models/user');

module.exports.loginUser = (req, res)=> {
    const { name } = req.body
    User.findOne({name:name}).exec(function(err, user) {
        if (err) res.status(400);
        else{
            console.log(user);
            if(user==null){
                res.render('error',{ message : 'Login Failed, You need to register first!.'});
                return;
            } else{
                if(user.type == "mentor")
                {
                //   res.redirect('/student_course');
                    res.send({ user: user });
                }
                else if(user.type == "student")
                {
                //   res.redirect('/course_enroll');
                    res.send({ user: user })
                }
                console.log("Success");
                 res.status(200);

            }  
        }
    });
}

module.exports.registerUser = async(req, res)=> {

    // const {name, type, courses} = req.body;
    const {name} = req.body;
    
    User.create({
            
            "name" : name,
            // "type" : type,
            // "courses" : courses,

        }, function (err, doc) {
            if (err) {
                res.status(400);
                console.log("Failed");
            }
            else {
                res.status(200);
                console.log("Success");
            } 
        });
}


