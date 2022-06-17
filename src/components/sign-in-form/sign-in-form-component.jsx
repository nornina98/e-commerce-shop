import { useState } from "react";

import FormInput from "../form-input/form-input-component";
import Button from "../button/button-component";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase-utils";

import "./sign-in-form-styles.scss";

// set as default value which is create empty object for initial data
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // config formfield and setform by desctructuring base object
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  // function to handle submit data from form button

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      console.log(response, "ikram access token: xx-xx--");
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  // function to trigger changing FormInput
  const changeHandler = (event) => {
    const { name, value } = event.target;

    // set formfield into new value which target name properties in form which default object is "" and FormInput new value by triggering onChange function.
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-cointainer">
      <h2>Don't have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={changeHandler}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={changeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
