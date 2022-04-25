const Budget = require('../models/Budget')

exports.getOperations = async (req, res) => {
      const budget = await Budget.find()
          res.status(200).send(budget) 
}

exports.newOperation = async (req, res) => {
    const{ concept, amount, category } = req.body
    const newBudget = await new Budget({ concept, amount, category, date: new Date().toDateString() });
    newBudget.save((err, data) => {
      if(err) {
          console.log(err);
      }
      else {
        res.status(201).send(data) 
      }
  });
};

exports.deleteOperation = async (req, res) => {
  const { _id } = req.params
  console.log(_id);
      Budget.findByIdAndDelete(_id, 
    (err, data) => {
        if(err){
            console.log(err);
        }
        else{
            res.status(200).send(data);
            console.log("Data Deleted!");
        }
    });  
}