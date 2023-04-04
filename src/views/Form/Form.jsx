import { useState } from "react";
import validation from "./Validation.js";
import { HomeImage } from "../../components/Styles";

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
   <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email"> E-mail: </label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={userData.email}
          />
          {errors.email1 ? (
                        <p>{errors.email1}</p>
                    ) : errors.email2 ? (
                        <p>{errors.email2}</p>
                    ) : (
                        <p>{errors.email3}</p>
                    )}
        </div>
        <div>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={userData.password}
          /> {errors.password1 ? (
            <p>{errors.password1}</p>
        ) : (
            <p>{errors.password2}</p>
        )}
        </div>
        <button type="submit" onClick={submitHandler}>Login</button>
      </form>
      <HomeImage src="./Images/RYM.png" alt="Rick y Morty" />
    </div>
  );
}
