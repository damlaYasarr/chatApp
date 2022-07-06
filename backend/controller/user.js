const db = require('../helpers/db');
const jwt = require('jsonwebtoken')
const bycrpt = require('bcrypt');
const { sendEmail } = require('./../middleware/auth/verification')
const { validateEmail } = require('./../middleware/auth/validation');
const logUser = async (req, res, next) => {
    //when  log in , token is created. 
    let findstatement = `SELECT * FROM users WHERE email= '${req.body.email}' and verified='true';`;
// let findverify=`select * from users where email ='${req.body.email}'`;
  
   
    db.query(findstatement, (err, result) => {
        if (err) {
            return res.status(401).json({
                error: `1Auth failed`
            });
        } else if (!validateEmail(req.body.email)) {
            return res.status(401).json({
                error: `UNVALID EMAIL`
            });
        }
        else {
           // console.log(result.rows[0].password)
            //onsole.log(req.body.password)
            bycrpt.compare(req.body.password, result.rows[0].password, (err, success) => {
                if (err) {
                    return res.status(401).json({
                        error: `2Auth failed`
                    });
                }
                if (success) {
                    const token = jwt.sign({ id: result.rows[0].id, email: result.rows[0].email, exp: Math.floor(Date.now() / 1000) + 60 }, 'secretKey');

                    return res.status(200).json({
                        error: 'auth sucessfull',
                        token
                    })
                }
                res.status(401).json({
                    error: 'auth failed'
                })
            })
        }
    })


}
const IsActive=(req,res,next)=>{
    db.query(`select verified from users where email='${req.body.email}'`, (err,result)=>{
            if(err){
                res.status(401).json({
                    error: err,
                    msg: "not find users"
                }) 
            }else{
                console.log(result.rows[0].verified)
               return res.status(201).json({
                   
                    data: result.rows[0].verified
                })
            }
    })
}
const getUser = (req, res, next) => {
    db.query(`select * from users `, (err, result) => {
        if (err) {
            res.status(401).json({
                error: err,
                msg: "not find users"
            })
        } else {
            res.status(201).json({
                msg: "successfully",
                data: result.rows
            })
        }
    })
}
const createUser = async (req, res, next) => {
    //before creat  if there is a user with that email or not?

    db.query(
        `select * from users where email= '${req.body.email}'  `, (err, result) => {
            if (result.rowCount === 0) {
                bycrpt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err,
                            msg: "failed to hash user password"
                        })

                    } else if (!validateEmail(req.body.email)) {
                        return res.status(500).json({
                            error: err,
                            msg: "UNVALID EMAIL"
                        })
                    }
                    else {
                        const user = {
                           
                            email: req.body.email,
                            phone: req.body.phone,
                            password: hash
                        }
                       
                        //console.log(user.email, user.phone, user.password)
                        var date = new Date();
                        year = date.getFullYear();
                        month = date.getMonth();
                        g = date.getDate();
                        const calendar = year + "-" + month + "-" + g;

                        //console.log(calendar)
                        
                        const verified=false;
                        db.query(` INSERT INTO users (email, phone, password, createdat, verified) values ('${user.email}','${user.phone}','${user.password}', '${calendar}','${verified}' );`, (err, result) => {
                            if (err) {
                                res.status(500).json({
                                    error: err,
                                    msg: "failed new user insert"
                                })
                            } else {
                                res.status(201).json({
                                    msg: "user registered successfully"
                                })
                            }
                        })

                       db.query(`select id from users where email= '${user.email}'`, (error,result)=>{
                       
                         const message = `http://localhost:3000/chat/chat/verify/${result.rows[0].id}`;
                         sendEmail(user.email, "Verify Email", message);
                       
                       })
                      
                    }
                })
            } else {
                res.status(409).json({
                    error: `cannot create user`
                })
            }
        })
}
const getVerfy = (req, res, next) => {
    //email ve telefon verifikasyonu yapılacak 
    //id kontrolu düzeltilmeli 
    try {
        db.query(`select * from users (id) values (${req.params.id})`, (error, result) => {
     
            db.query(`update users set verified=true where id='${req.params.id}'`)
            return res.status(200).json({ msg: "email verified" })



        })

    } catch (error) {
        return res.status(400).json({ msg: "bişey olmadı aşkım" })
    }
}

const forgotPass = (req, res, next) => {
    //telefon ile veya email ile kontrol ederiz. 
    //burada token denetlemeyeceğiz. id ile verifikasyon sağlayacağız
      
}




module.exports = { getUser, createUser, logUser, getVerfy,IsActive }
