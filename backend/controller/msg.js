const db = require('../helpers/db');



const postmsg=async(req,res,next, msg, userid)=>{


    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    g = date.getDate();
    const calendar = year + "-" + month + "-" + g;
    
    let findstatement = `insert into msg (detail, createdAt, userid) value ('${msg}', '${calendar}', '${userid}')`;
        db.query(findstatement, (err,result)=>{
            if(err){
                return res.send(400).json({
                    msg:'msg unsecesssfull',
                    data:err
                })
            }else{
                return res.send(200).json({
                    msg:'msg delivered',
                    data:result.rows[0].detail
                }) 
            }
        })




}

const getmsgHistory=async(req, res, next, userid)=>{
    let findstatement = `select detail from  msg where userid='${userid}' order by detail desc limit 10`;
    db.query(findstatement, (err,result)=>{
        if(err){
            return res.send(400).json({
                msg:'msg unsecesssfull',
                data:err
            })
        }else{
            return res.send(200).json({
                msg:'msg delivered',
                data:result.rows[0].detail
            }) 
        }
    })

}

module.exports={
postmsg, getmsgHistory
}