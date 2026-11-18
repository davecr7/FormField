
import { useState } from "react";
import FormField from "./components/FormField";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    gender: "",
    course: ""
  });
  const [errors, setErrors] = useState({});
  const [student, setStudent] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.age || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = "Enter a valid age";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStudent(formData);
      alert("Registration successful!");
      setFormData({
        fullName: "",
        age: "",
        email: "",
        gender: "",
        course: ""
      });
    }
  }

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <p>Fill in your details below</p>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <FormField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          error={errors.age}
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <small>{errors.gender}</small>}
        </div>

        <div className="form-group">
          <label htmlFor="course">Preferred Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Data Science">Data Science</option>
          </select>
          {errors.course && <small>{errors.course}</small>}
        </div>

        <button type="submit">Register Now</button>
      </form>

      {student && (
        <div className="success">
          <h2>Registration Successful!</h2>
          <p>Name: {student.fullName}</p>
          <p>Age: {student.age}</p>
          <p>Email: {student.email}</p>
          <p>Gender: {student.gender}</p>
          <p>Course: {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
