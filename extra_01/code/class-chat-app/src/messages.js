import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function Messages() {
  let [messages, setMessages] = useState([]);

  useEffect(function () {
    supabase
      .from("messages")
      .select()
      .then(function (data) {
        setMessages(data.body);
      });
  }, []);

  useEffect(
    function () {
      supabase
        .from("messages")
        .on("INSERT", function (payload) {
          // Spread Operator
          // Pass in a new array with all of the current messages
          // As well as the new message at the end
          setMessages([...messages, payload.new]);
        })
        .subscribe();
    },
    [messages],
  );

  let messagesMarkup = messages.map(function (msg) {
    return (
      <div key={msg.id}>
        <p>{msg.content}</p>
      </div>
    );
  });

  return <div>{messagesMarkup}</div>;
}

export default Messages;
