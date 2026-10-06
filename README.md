# Student Marks – React

A simple React application that demonstrates how to use **Props and State** to display and dynamically update student marks.

## 🚀 Live Demo

**[View Live Demo](https://muthukoornandini.github.io/student-marks-react/)**

## 📂 GitHub Repository

**[View Source Code](https://github.com/muthukoornandini/student-marks-react)**

## 🎯 Objective

To create a reusable Student component using:

* **Props** to receive the student's name and subject
* **State** to store and update the student's marks
* React event handling to increase and decrease marks

## 🛠️ Technologies Used

* React
* JavaScript
* Vite
* HTML
* CSS
* Git & GitHub
* GitHub Pages

## ✨ Features

* Displays student name
* Displays subject name
* Displays current marks
* Increase Marks button
* Decrease Marks button
* Marks update dynamically using React State
* Student information is passed using Props

## 📌 Student Details

| Property      | Value |
| ------------- | ----- |
| Student Name  | Rahul |
| Subject       | Java  |
| Initial Marks | 50    |

## ⚛️ React Concepts Demonstrated

### Props

Props are used to pass student information from the parent component to the Student component.

```jsx
<Student
  name="Rahul"
  subject="Java"
/>
```

The Student component receives these values through props:

```jsx
function Student(props) {
  return (
    <>
      <p>Student Name: {props.name}</p>
      <p>Subject:
```
