const mysql = require('../shared/connect');

exports.createStudent = async (req,res,next)=> {
    var query=`Insert into student(sname, place) values('${req.body.sname}','${req.body.place}')`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.createMentor = async (req,res,next)=> {
    var query=`Insert into mentor(tname, subject) values('${req.body.tname}','${req.body.subject}')`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.changeMentor = async (req,res,next)=> {
    var query=`update student set tid='${req.body.tid}'`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}


exports.assignMentor = async (req,res,next)=> {
    var query=`update student set tid=${req.body.tid} where sid in(${req.body.sid1},${req.body.sid2})`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}


exports.mentors = async (req,res,next)=> {
    var query=`select*from student WHERE tid = ${req.body.tid}`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}
