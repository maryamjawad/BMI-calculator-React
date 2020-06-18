import React from "react";
import ReactDOM from "react-dom";
import './App.css';


class Form extends React.Component{

    render() {
        return(

    <form>
        <h1> Weight Calculator</h1>
        <p1> Weight </p1> <input type = "text"/> 
        <p2> Size </p2>  <input type = "text"/> 
        <p3> Select Weight  </p3> 

    <select>
        <option value="example 1 ">example 1</option>
        <option value="example 2">example 2</option>
        <option value="example 3">example 3</option>
    </select>
    </form>    
     );
}
}

ReactDOM.render(<Form/>,document.getElementById("root"));

