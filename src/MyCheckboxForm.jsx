import { useState } from "react";
import { createRoot } from "react-dom/client";

export default function MyCheckboxForm() {
    const [inputs, setInputs] = useState({});

    function handleChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name  = target.name;
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(e){
        let fillings ='';
        if(inputs.tomato) fillings += 'tomato';
        if(inputs.onion){
            if(inputs.tomato) fillings += ' and ';
            fillings += 'onion'
        }
        if(fillings=='') fillings = ' no fillings';
        alert(`${inputs.firstname} wants a burger with ${fillings}`);
        e.preventDefault();
    }

    return(
        <form>
            <label>My name is:
            <input
                type="text"
                name="firstname"
                value={inputs.firstname}
                onChange={handleChange}
            />
            </label>

            <p>I want a burger with:</p>
            <label>Tomato:
            <input
                type="checkbox"
                name="Tomato"
                checked={inputs.tomato}
                onChange={handleChange}
            />
            </label>
            <label>Onion:
            <input
                type="checkbox"
                name="Onion"
                checked={inputs.onion}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}