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
        res.status(201).send(newBudget) 
      }
  });
};