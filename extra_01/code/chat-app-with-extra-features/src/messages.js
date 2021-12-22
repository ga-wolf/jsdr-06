import React, { useEffect, useState, useRef } from "react";
import { supabase } from "./supabaseClient";

function Messages({ user }) {
  let [messages, setMessages] = useState([]);
  let container = useRef(null);

  function scrollToBottom() {
    if (container) {
      container.current.scrollTop = container.current.scrollHeight;
    }
  }

  useEffect(function () {
    supabase
      .from("messages")
      .select()
      .then(function (data) {
        setMessages([...data.body]);
        scrollToBottom();
      });
  }, []);

  useEffect(
    function () {
      supabase
        .from("messages")
        .on("INSERT", function (payload) {
          setMessages([...messages, payload.new]);
          scrollToBottom();
        })
        .subscribe();
    },
    [messages],
  );

  let markup = <h2>No messages to display...</h2>;

  if (messages.length > 0) {
    markup = messages.map(function (m) {
      let className = "their-message";
      if (m.email === user.email) {
        className = "your-message";
      }
      return (
        <div key={m.id} className={`message ${className}`}>
          <p>{m.content}</p>
        </div>
      );
    });
  }

  return (
    <div className={"messages"} ref={container}>
      {markup}
    </div>
  );
}

export default Messages;
