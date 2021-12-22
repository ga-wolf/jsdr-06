import React, { useState, useEffect } from "react";
import Login from "./login";
import Messages from "./messages";
import MessageForm from "./messageForm";
import { supabase } from "./supabaseClient";
import Nav from "./nav";

function App() {
  let [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  let markup = <Login />;
  if (session && session.user) {
    markup = (
      <div>
        <Messages user={session.user} />
        <MessageForm user={session.user} />
      </div>
    );
  }

  return (
    <div>
      <Nav session={session} />
      {markup}
    </div>
  );
}

export default App;
