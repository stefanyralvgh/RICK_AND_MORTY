import { useState } from "react";
import validation from "./Validation.js";
import { FormContainer, FormButton, FormLabel, FormInput, FormImage, FormErrors } from "./FormStyles.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }, errors, setErrors))
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.login(userData);
  }

  return (
   <FormContainer>
        <form onSubmit={submitHandler}>
        <div>
          <FormImage src="./Images/RyM-Navbar.png" alt="Rick y Morty" />
          <FormInput
            type="text"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
          />
          <FormLabel htmlFor="email"> E-mail: </FormLabel>
          {errors.email1 ? (
            <FormErrors>{errors.email1}</FormErrors>
            ) : errors.email2 ? (
              <FormErrors>{errors.email2}</FormErrors>
              ) : (
                <FormErrors>{errors.email3}</FormErrors>
                )}
        
        </div>
        <br />
        <br />
        <div>
          
          <FormInput
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
          /> 
           <FormLabel htmlFor="password"> Password: </FormLabel>
          {errors.password1 ? (
            <FormErrors>{errors.password1}</FormErrors>
        ) : (
            <FormErrors>{errors.password2}</FormErrors>
        )}
       
        </div>
        <br />
        <FormButton type="submit" onClick={submitHandler}>Login</FormButton>
      </form>
      <FormButton type="submit">Sign Up</FormButton>
      {/* <HomeImage src="./Images/RYM.png" alt="Rick y Morty" /> */}
    </FormContainer>
  );
}
