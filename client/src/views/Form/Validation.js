const validation = (input) => {
    let errors = {};
    
    if (!input.email) {
      errors.email1 = "Email is required";
    } else if (!/^[\w-]+@([\w-]+\.)+[\w-]{3}$/.test(input.email)) {
      errors.email2 = "Invalid email";
    } else if (input.email.length > 35) {
      errors.email3 = "Username can't be longer than 35 characters";
    }
  
    
   if(!input.password) {
        errors.password1 = "Password is required";
      } else if(input.password.length < 6 || input.password.length > 10) {
        errors.password2 = "Password must be between 6 and 10 characters";
      } else if (!/\d/.test(input.password)) {
        errors.password = "Password must contain at least one number";
      } 
    return errors;
  }


  export default validation;