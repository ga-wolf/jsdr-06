import React from "react";
import { supabase } from "./supabaseClient";

export default function Nav({ session }) {
  function handleLogout() {
    supabase.auth.signOut();
  }

  let markup = <h4>Not logged in</h4>;
  if (session) {
    markup = (
      <h4 onClick={handleLogout}>
        Logged in as {session.user.email}. Log out?
      </h4>
    );
  }

  return <nav>{markup}</nav>;
}
