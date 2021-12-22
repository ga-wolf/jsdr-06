import React, { useState } from "react";
import { supabase } from "./supabaseClient";

function MessageForm() {
  let [content, setContent] = useState("");

  function onChange(e) {
    setContent(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    supabase
      .from("messages")
      .insert([{ content: content }])
      .then(function () {
        console.log("That worked");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={content} onChange={onChange} />
      <button>Send</button>
    </form>
  );
}

export default MessageForm;
