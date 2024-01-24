const bcrypt = require('bcrypt');
const { User } = require("../DB_connection");


// const login = async (req, res) => {
//   try {
//     const { email, password } = req.query;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Data is missing" });
//     }

//     const user = await User.findOne({ where: { email } });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       return res.status(403).json({ error: "Incorrect password" });
//     }

//     return res.status(200).json({ access: true });
//   } catch (error) {
//     return res.status(500).json({ error: `Error: ${error.message}` });
//   }
// };

// module.exports = login;

const passport = require('passport');

const login = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    try {
      if (err) {
        throw new Error(err);
      }
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      req.logIn(user, (err) => {
        if (err) {
          throw new Error(err);
        }
        return res.status(200).json({ access: true });
      });
    } catch (error) {
      return res.status(500).json({ error: `Error: ${error.message}` });
    }
  })(req, res, next);
};

module.exports = login;

