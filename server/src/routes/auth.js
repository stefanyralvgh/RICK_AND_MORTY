const passport = require ('passport');
// const LocalStrategy = require ('passport-local');
// const User = require ('../DB_connection');

// passport.use(new LocalStrategy(
//     (username, password, done) => {
//       User.findOne({ username: username }, (err, user) => {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false, { message: 'Nombre de usuario incorrecto' });
//         }
//         if (!user.validPassword(password)) {
//           return done(null, false, { message: 'Contraseña incorrecta' });
//         }
//         return done(null, user);
//       });
//     }
//   ));
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });
  
//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user);
//     });
//   });

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { User } = require('../DB_connection'); // Asegúrate de tener correctamente importado tu modelo de usuario

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return done(null, false, { message: 'Nombre de usuario incorrecto' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
  module.exports = { ensureAuthenticated };
  