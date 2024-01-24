const bcrypt = require('bcrypt');
const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      return res.status(400).json({ error: "data is missing" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { password: hashedPassword },
    });
    return res.status(200).json({ message: "User saved succesfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ error: `Error while processing the request: ${error.message}` });
  }
};

module.exports = postUser;
