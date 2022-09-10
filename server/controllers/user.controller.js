const User = require("../models/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.signup = async function (req, res) {
  try {
    const user = await User.create(req.body);
    console.log(user)
    //---
    const payload = {
      userId: user._id
    }
    //--
    const secretKey = process.env.JWT_SECRET_KEY
    //--
    const token = jwt.sign(payload, secretKey)
    //--
    res.json({username:user.username, email:user.email, userToken: token });

  } catch (err) {
    console.log(err.errors, 'err')
    res.status(400).json(err);
    //res.sendStatus(400)
  }
};

module.exports.login = async function (req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if (!correctPassword) {
      return res.status(400).json(err);
    }

    const payload = {
      userId: user._id
    }

    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign(payload, secretKey)

    console.log(user)

    res.json({ username:user.username, email:user.email, userToken: token })

  } catch (err) {
    res.status(400).json(" email dosn't exist ");
  }
};

module.exports.getAllUsers = async function (req, res) {
  console.log(req.userId)
  const users = await User.find();
  res.json(users)
}

module.exports.findUser = (req, res) => {
  User.findOne({ email: req.params.email })
    .then(singleUser => res.json({ user: singleUser }))
    .catch(err => res.status(400).json(err))
}

module.exports.findUserById = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(singleUser => res.json({ user: singleUser }))
    .catch(err => res.status(400).json(err))
}
