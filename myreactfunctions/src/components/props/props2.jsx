import React from "react";

const Props2 = (props) => {
    return (
        <div>
            <h2>Email={props.email}</h2>
            <h2>Name={props.name}</h2>
        </div>
    )
}
// default componets..............

Props2.defaultProps = {
    email: "default email"
}
export default Props2