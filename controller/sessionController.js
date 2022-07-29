// const Session = require('../models/session');
const Session = require('.././sessionData');

module.exports.addSession = async(req, res)=> {
    // const { name, date, start, end, course} = req.body
    const session = req.body;

    const newSession = new Session(session);
    try{
        await newSession.save();
        res.status(201).json(newSession);
        console.log("Success");
    } catch (error){
      res.status(409).json({ message: error.message});   
      consol.log("Error");
    }
}

module.exports.getSession = async(req, res) => {
    
    try{
      const session = await Session.find();
      consol.log(session);
      res.status(200).json(session);
      console.log("Success");
  }catch( error ){
    res.status(404).json({ message: error.message })
    consol.log("Error");
  }
}

module.exports.getSessionById = async (req, res) => {
  try{
      const session = await Session.findById(req.params.id);
      res.status(200).json(session);
  }catch( error ){
    res.status(404).json({ message: error.message })
  }
}
