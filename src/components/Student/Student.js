import React from "react";

//make our component:
const Student = (props) => (
    <div className="student">
        <p>Id: {props.id}</p>
        <p>Name: {props.name}</p>
        <p>Favorite Subject: {props.favoriteSubject}</p>
        {/* () => in front of props makes it so that it waits to fire, until the button has been clicked, vs when the page is loaded */}
        <button onClick={() => props.rollCall(props.name, props.favoriteSubject)}>Call on Student</button>
        <hr />
    </div>
);

export default Student;