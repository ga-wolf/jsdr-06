import React from "react";

function Student(props) {
  let firstName = props.firstName;
  let lastName = props.lastName;
  return (
    <div>
      <h2>
        {firstName} {lastName}
      </h2>
    </div>
  );
}

export default Student;
