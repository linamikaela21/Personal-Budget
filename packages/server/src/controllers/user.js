const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.signup = async (req, res) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (user)
      return res.status(400).json({
        error: "User already registered",
      });

    const { firstName, lastName, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);

    const newUser = await new User({
      firstName,
      lastName,
      email,
      hash_password,
    });

    newUser.save((error, user) => {
      if (error) {
        return res.status(400).json({ message: "Something went wrong" });
      } 
      if(user) {
        const token = generateJwtToken(user._id);
        const { _id, firstName, lastName, email } = user;
        return res.status(201).json({
          token,
          user: { _id, firstName, lastName, email },
        });
      }
    });
  });
};

exports.signin = async (req, res) => {
  await User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      const isPassword = await user.authenticate(req.body.password);
      if (isPassword) {
        const token = generateJwtToken(user._id);
        const { _id, firstName, lastName, email } = user;
        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email },
        });
      } else {
        return res.status(400).json({
          message: "Something went wrong",
        });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
};
