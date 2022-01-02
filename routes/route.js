var express = require("express");
var router = express.Router();
var mentorModule = require('../module/mentorModule');

router.post("/create-student", mentorModule.createStudent);
router.post("/create-mentor", mentorModule.createMentor);
router.put("/change-mentor", mentorModule.changeMentor);
router.put("/assign-mentor", mentorModule.assignMentor);
router.get("/get", mentorModule.mentors);

// router.post("/add",mentorModule.addRooms);
// router.post("/book",mentorModule.bookRooms);
// router.get("/booked",mentorModule.bookedRooms);


module.exports=router;