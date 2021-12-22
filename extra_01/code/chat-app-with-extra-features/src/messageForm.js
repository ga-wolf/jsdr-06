import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function MessageForm({ user }) {
  let [content, setContent] = useState("");

  function handleChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    supabase
      .from("messages")
      .insert({ content: content, email: user.email })
      .then(function () {
        setContent("");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={handleChange} />
      <button>Send</button>
    </form>
  );
}

export default MessageForm;
