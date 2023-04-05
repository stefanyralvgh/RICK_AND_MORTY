const validation = (input) => {
    let errors = {};
    // Validación del campo de usuario
    if (!input.email) {
      errors.email1 = "E-mail vacío";
    } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{3}$/.test(input.email)) {
      errors.email2 = "E-mail inválido";
    } else if (input.email.length > 35) {
      errors.email3 = "El nombre de usuario no puede tener más de 35 caracteres";
    }
  
    // Validación del campo de contraseña
   if(!input.password) {
        errors.password1 = "Password vacía";
      } else if(input.password.length < 6 || input.password.length > 10) {
        errors.password2 = "La contraseña debe tener entre 6 y 10 caracteres";
      } else if (!/\d/.test(input.password)) {
        errors.password = "La contraseña debe contener al menos un número";
      }  
    return errors;
  }


  export default validation;