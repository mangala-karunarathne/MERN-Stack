const router = require('express').Router();
const { request } = require('express');
let Student = require('../models/Student');

router.route('/add').post((req,res)=>{ // http://localhost:8070/student/add
// Create in CRUD
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({

        name, // initialize
        age,
        gender

    })

    newStudent.save().then(()=> {    // Js Promise
        res.json('Student Added')

    }).catch(()=>{
        console.log(err);
    })

})

router.route('/').get((req,res)=>{
// Read in CRUD
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err) =>{
        console.log(err)
    })

})

router.route('/update/:id').put(async (req, res) =>{

    let userid = req.params.id;
    const {name, age, gender} = req.body;// Destructure
    
    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findById

}) // back end useerid fetch

module.exports = router;    