import React, { useState } from 'react';
import './diabetes.css'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";

function Diabetes() {
    // const navigate = useNavigate();
    const [user, setUser] = useState({
        preg: "",
        gl: "",
        bp: "",
        skv: "",
        il: "",
        bmi: "",
        dofv: "",
        age: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = () => {
        const { preg, gl, bp, skv, il, bmi, dofv, age } = user
        if (preg && gl && bp && skv && il && bmi && dofv && age) {
            axios.post("http://localhost:8000/", user)
                .then(res => alert(res.data.message));
            redirect('http://localhost:8000/');
        }
        else {
            alert("No feild should be empty");
        }
    }

    return (
        <div className="main-home">

            <label class="custom-field two">
                <input type="number" name="preg" value={user.preg} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Number of Pregnancies</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='gl' value={user.gl} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Glocose Level</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='bp' value={user.bp} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Blood Pressure Level</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='skv' value={user.skv} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Skin Thickness Value</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='il' value={user.il} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Insulin Level</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='bmi' value={user.bmi} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">BMI value</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='dofv' value={user.dofv} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Diabetes Oedigree Function value</span>
            </label>

            <label class="custom-field two">
                <input type="number" name='age' value={user.age} onChange={handleChange} placeholder="&nbsp;" />
                <span class="placeholder">Age of Person</span>
            </label>

            <button class="button" style={{ verticalAlign: "middle" }} onClick={submit}><span>Submit </span></button>

        </div >
    )
}

export default Diabetes
