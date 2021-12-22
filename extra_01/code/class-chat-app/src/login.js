import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function Login() {
  let [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    supabase.auth.signIn({ email: email }).then(function () {
      console.log("You are logged in!");
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" value={email} onChange={onChange} />
      <button>Login</button>
    </form>
  );
}

export default Login;
