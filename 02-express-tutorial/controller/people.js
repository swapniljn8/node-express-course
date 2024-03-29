let {people} = require('../data')//going back by one step

const getPeople = (req,res) =>{
    console.log('getPeople');
    return res.status(200).json({success:true, data:people})
}

const createPerson = (req,res)=> {
    const {name} = req.body
    if(!name) {
        console.log('inside if');
        res.status(400).json({success : false, msg:'please provide name value'})
    }
    console.log('outside if');
    res.status(201).send({success:true, person:name})
}

const createPersonPostman = (req,res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false, msg:"please provide name value"})
    }
    else {
        res.status(200).json({success:true, data:[...people,{'id':people[people.length-1].id+1,'name':name}]})
    }
}

const updatePerson = (req,res)=>{
    const {id} = req.params
    const {name} = req.body
    if(id && name) {
        console.log('Id=='+id);
        console.log('people=='+JSON.stringify(people));
        let person = people.find(element=> {
            Number(element.id)===Number(id)
        })
        console.log('person=='+JSON.stringify(person));
        if(person) {
            /* people.forEach((element,index) => {
                if(element.id===Number(id)) {
                    element.name = name
                }
            }); */
            const newPeople = people.map((person) => {
                if (person.id === Number(id)) {
                  person.name = name
                }
                return person
              })
              console.log('newPeople =',newPeople);
              console.log('people =',people);
            return res.status(200).json({success:true, data:newPeople})
        }
        else {
            return res.status(404).json('No person with such name found')
        }
    }
    else {
        res.status(400).json({success:false, msg:"Id or Name is missing"})
    }
}


const deletePerson = (req,res)=> {
    const {id} = req.params
    let person = people.find(element => {
        return Number(id) === Number(element.id)
    })
    if(!person) {
        return res.status(400).json({success:false, msg:`no person with id = ${id} found`})
    }
    let newpeople = people.filter(element => {
        return Number(id) !== element.id
    })
    res.status(200).json({success:true, data:newpeople})
}

module.exports = {getPeople,createPerson,createPersonPostman,updatePerson,deletePerson}