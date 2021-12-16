import React, { useState } from "react";

function LoginForm() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }

  function handleEmailInput(event) {
    setEmail(event.target.value); // Re-render the component
  }

  return (
    <form>
      <p>Email: {email}</p>
      <input onInput={handleEmailInput} value={email} type={"email"} />
      <p>Password: {password}</p>
      <input onInput={handlePasswordInput} value={password} type="password" />
    </form>
  );
}

export default LoginForm;
