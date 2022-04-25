const Budget = require("../models/Budget");

exports.getOperations = async (req, res) => {
  const budget = await Budget.find();
  res.status(200).send(budget);
};

exports.getOperationById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  Budget.findOne({_id: id}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

exports.newOperation = async (req, res) => {
  const { concept, amount, category } = req.body;
  const newBudget = await new Budget({
    concept,
    amount,
    category,
    date: new Date().toDateString(),
  });
  newBudget.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
};

exports.deleteOperation = async (req, res) => {
  const { id } = req.params;
  Budget.findByIdAndDelete(id, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send("Data Deleted !");
    }
  });
};

exports.updateOperation = async (req, res) => {
  const { id } = req.params;
  const { amount, concept, category } = req.body;
  Budget.findByIdAndUpdate(
    id,
    { amount, concept, category },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).send(`Data updated ! ${data}`);
      }
    }
  );
};
