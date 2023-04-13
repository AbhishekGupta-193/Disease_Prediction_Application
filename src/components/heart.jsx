import React, { useState } from 'react';
import './diabetes.css'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom';
import { redirect } from "react-router-dom";
function Heart() {
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
const [result, setResult] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = async() => {
        const { preg, gl, bp, skv, il, bmi, dofv, age } = user
        const url="http://127.0.0.1:5000/predict"
        const res=await axios.post(url,user)
        const data=res.data;
        setResult(data);


        // if (preg && gl && bp && skv && il && bmi && dofv && age) {
        //     axios.post("http://localhost:8000/", user)
        //         .then(res => alert(res.data.message));
        //     redirect('http://localhost:8000/');
        // }
        // else {
        //     alert("No feild should be empty");
        // }
    }

    return (
        <div className='heart-wrp'>
            <h1>Heart Disease Prediction Using ML</h1>
            <div className="heart-form">
                <div className="form-control">
                    <span>Age</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Sex</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Chest pain type</span>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <span>Resting blood pressure</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Serum Cholestoral in mg/dl</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Fasting Blood Sugar `{'>'}` 120mg/dl</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Resting Electrocardiographic results</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Maximum heart rate achieved</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Exercise induced Angina</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>ST depression induced by exercise </span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Slope of the peak exercise ST segment</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Major vessels colored by flourosopy</span>
                    <input type="number" />
                </div>
                <div className="form-control">
                    <span>Thal:0=normal;1=fixed;2=reversable defect</span>
                    <input type="number" />
                </div>
            </div>
            <button className='heart-submit'>Heart Disease test Result</button>

        {/* <div className="main-home">

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
        <section>
            <div className='result-header'>
                    Predicted value
            </div>
            <div className='result'>
                {result}
            </div>
        </section> */}
        </div>
    )
}

export default Heart
