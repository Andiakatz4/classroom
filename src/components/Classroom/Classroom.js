import React, { Component } from "react";

import students from "../../students.json";
import Student from "../Student";

class Classroom extends Component {

    state = {
        students: students
    };

    rollCall = (name, favSubject) => {
        alert(`Hello my name is ${name} and my favorite subject is ${favSubject}`)
    }

    render() {
        return (<div>
            <h1>Classroom </h1>
            {/* //student in parens in a function- it can be called anything */}
            {this.state.students.map(student => (
                <Student
                    id={student.id}
                    name={student.name}
                    favoriteSubject={student.favoriteSubject}
                    rollCall = {this.rollCall}
                />
            ))}

            {/* We use .map instead of entering each array individually */}
            {/* <p>Id: {students[0].id}</p>
            <p>Name: {students[0].name}</p>
            <p>Favorite Subject: {students[0].favoriteSubject}</p>

            <p>Id: {students[1].id}</p>
            <p>Name: {students[1].name}</p>
            <p>Favorite Subject: {students[1].favoriteSubject}</p>

            <p>Id: {students[2].id}</p>
            <p>Name: {students[2].name}</p>
            <p>Favorite Subject: {students[2].favoriteSubject}</p> */}
        </div>
        )
    }
}
export default Classroom;