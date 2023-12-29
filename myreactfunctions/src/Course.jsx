import React, { useState } from "react";

function Course() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: "",
    instructor: "",
    fee: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({
      ...newCourse,
      [name]: value,
    });
  };

  const createCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({
      courseName: "",
      instructor: "",
      fee: "",
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Course Registration</h2>
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Course Name"
          name="courseName"
          value={newCourse.courseName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Instructor Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Instructor Name"
          name="instructor"
          value={newCourse.instructor}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Fee</label>
        <input
          type="number"
          className="form-control"
          value={newCourse.fee}
          onChange={handleInputChange}
          min="0"
          max="10000"
          step="1"
          name="fee"
          required
        />
      </div>
      <br />
      <button className="btn btn-primary" onClick={createCourse}>
        Create Course
      </button>

      {courses.map((course, index) => (
        <div className="mt-4" key={index}>
          <h4>Course Info</h4>
          <h4>Name: {course.courseName}</h4>
          <h4>Instructor: {course.instructor}</h4>
          <h4>Fee: {course.fee}</h4>
        </div>
      ))}
    </div>
  );
}

export default Course;
