import { useState } from "react";
import validation from "./Validation.js";
import {
  FormContainer,
  FormButton,
  FormLabel,
  FormInput,
  FormImage,
  FormErrors,
} from "./FormStyles.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(false);

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    setErrors(
      validation({ ...userData, [property]: value }, errors, setErrors)
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const validationErrors = validation(userData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setLoginError(true);
    } else {
      props.login(userData);
      setLoginError(false);
    }
  };

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
          <FormLabel htmlFor="email"> E-mail </FormLabel>
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
          <FormLabel htmlFor="password"> Password </FormLabel>
          {errors.password1 ? (
            <FormErrors>{errors.password1}</FormErrors>
          ) : (
            <FormErrors>{errors.password2}</FormErrors>
          )}
        </div>
        <br />
        {loginError && <FormErrors>Incorrect password or email</FormErrors>}
        <FormButton type="submit">Login</FormButton>
      </form>
      <FormButton type="submit">Sign Up</FormButton>
    </FormContainer>
  );
}
