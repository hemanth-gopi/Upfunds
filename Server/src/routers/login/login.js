const express = require("express");
const router = new express.Router();

const auth = require("../../middleware/auth");

const bcrypt = require("bcryptjs");

const User = require("./../../models/User");

const assertUserNottExists = async (type, value) => {
  let existingUser = null;
  try {
    existingUser = value && (await User.find({ [type]: value }));
  } catch (error) {
    throw new Error("Error asserting whether the user already exists " + error);
  }

  if (Array.isArray(existingUser) && existingUser.length != 0) {
    throw new Error("User already exists with the same " + type);
  }
};

const assertUserExists = async (type, value) => {
  let existingUser = null;
  try {
    existingUser = await User.find({ [type]: value });
  } catch (error) {
    throw new Error("Error asserting whether the user already exists " + error);
  }

  if (Array.isArray(existingUser) && existingUser.length == 0) {
    throw new Error("No user exists with the given " + type);
  }
};



// APIs
// Api to register 
router.post("/register", auth.assertNotAuthenticated, async (req, res) => {
  const user = new User(req.body);
  console.log("Debug: user", req.body)

  try {
    await assertUserNottExists("username", user.get("username"));

    await assertUserNottExists("email", user.get("email"));

    const hashedPassword = await bcrypt.hash(user.get("password"), 8);
    user.set("password", hashedPassword);
    console.log("Debug: user", user)

    await user.save();

    res.status(302).redirect("/register/success");
  } catch (e) {
    res.status(400).send("Unable to register the user : " + e.message);
  }
});


// Api to login
router.post("/login", auth.assertNotAuthenticated , async (req, res) => {
  const user = new User(req.body);

  try {
    let userInDb = null;

    if (user.get("username")) {
      await assertUserExists("username", user.get("username"));
      userInDb = await User.findOne({ username: user.get("username") });
    } else if (user.get("email")) {
      await assertUserExists("email", user.get("email"));
      userInDb = await User.findOne({ email: user.get("email") });
    } else {
      throw new Error("No such user");
    }

    const isMatch = await bcrypt.compare(
      user.get("password"),
      userInDb.get("password")
    );

    if (isMatch) {
      const token = await userInDb.generateAuthToken();

      
      res.cookie('_upt', token, {maxAge : '3d', httpOnly : true})
      
      console.log(token)


      res.status(302).send('/dashboard');

    } else {
      throw new Error("Authentication failed!");
    }
  } catch (e) {
    console.log(e)
    res.status(400).send("Unable to login the user : " + e.message);
  }
});

module.exports = router;
