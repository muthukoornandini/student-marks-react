import { useState } from "react";

function Student(props) {
  // State
  const [marks, setMarks] = useState(50);

  return (
    <div>
      <h2>Student Marks</h2>

      {/* Props */}
      <p>Student Name: {props.name}</p>
      <p>Subject: {props.subject}</p>

      {/* State */}
      <p>Marks: {marks}</p>

      <button onClick={() => setMarks(marks + 1)}>
        Increase Marks
      </button>

      <button onClick={() => setMarks(marks - 1)}>
        Decrease Marks
      </button>
    </div>
  );
}

export default Student;