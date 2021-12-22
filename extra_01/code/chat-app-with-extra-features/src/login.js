import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function Login() {
  let [email, setEmail] = useState("");

  function handleInput(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    supabase.auth.signIn({ email: email }).then(function () {
      console.log("This worked!");
    });
  }

  return (
    <form className={"login"} onSubmit={onSubmit}>
      <input type="text" value={email} onChange={handleInput} />
      <button>Login</button>
    </form>
  );
}

export default Login;
