import { useState } from "react";
import { createRoot } from "react-dom/client";

function MyForm(){
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input 
                    type="text"
                    value={name}
                    onChange={handleChange}/>
                {/* <textarea
                    value={mytxt}
                    onChange={handleChange}/> */}
            </label>
            <p>Current value: {name}</p>
            <input type="submit"/>
        </form>
    );
}

export default MyForm;