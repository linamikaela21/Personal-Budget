const Budget = require("../models/Budget");
const User = require("../models/User");

exports.getOperations = async (req, res) => {
  User.findOne({ email: req.body.userEmail }).exec(async (err, user) => {
    if (err) {
      console.log('BUUUU',err);
      return res.status(400).json({ err });
    } else if (user) {
      const budgets = await Budget.find({
        userEmail: { $all: [`${user?.email}`] },
      });
      console.log('BUUUU',budgets);
      res.status(200).send(budgets);
    }
  });
};

exports.getOperationById = async (req, res) => {
  const { id } = req.params;
  Budget.findOne({ _id: id }, (err, data) => {
    if (err) {
      return res.status(400).json({ err });
    } else {
      res.send(data);
    }
  });
};

exports.newOperation = async (req, res) => {
  const { concept, amount, category, type, userEmail } = req.body;
  const newBudget = await new Budget({
    userEmail,
    concept,
    amount,
    category,
    type,
    date: new Date().toDateString(),
  });
  newBudget.save((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    } else {
      const { _id, concept, amount, category, type, date, userEmail } = data;
      res
        .status(201)
        .send({ _id, concept, amount, category, type, date, userEmail });
    }
  });
};

exports.deleteOperation = async (req, res) => {
  const { id } = req.params;
  Budget.findByIdAndDelete(id, (err, _data) => {
    if (err) {
      return res.status(400).json({ err });
    } else {
      res.status(200).send("Data Deleted !");
    }
  });
};

exports.updateOperation = async (req, res) => {
  const { id } = req.params;
  const { amount, concept, category } = req.body;
  Budget.findByIdAndUpdate(
    { _id: id },
    { amount, concept, category },
    (err, _data) => {
      if (err) {
        return res.status(400).json({ err });
      } else {
        res.status(200).send("Data updated !");
      }
    }
  );
};
