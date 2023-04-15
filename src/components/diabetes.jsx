import React, { useState } from 'react';
import './diabetes.css'
import axios from 'axios'
import { redirect } from "react-router-dom";

function Diabetes() {
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
    const [result, setResult] = useState("You will get ans1 here")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = async () => {
        const url = " http://10.223.85.88:5000/predict1"
        const res = await axios.post(url, user)
        const data = res.data;
        setResult(data);
    }

    return (
        <div className='diabetes-wrp'>
            <div className='Note'><p>The below user input dataset is fed into the ML Model using flask server which further predicts (using CLASSIFIER algorithm) that the patient has this disease or not with an accuracy percentage of 77.27%.
                Here is a sample input dataset for a healthy person : [	1	85	66	29	0	26.6	0.351	31]</p></div>
            <h1>Diabetes prediction using ML</h1>
            <div className="heart-form">
                <div className="form-control">
                    <span>Number of Pregnancies</span>
                    <input type="number" name='preg' value={user.preg
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Glocose Level</span>
                    <input type="number" name='gl' value={user.gl
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>Blood Pressure Level</span>
                    <input type="number" name='bp' value={user.bp
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>Skin Thickness Value</span>
                    <input type="number" name='skv' value={user.skv
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>Insulin Level</span>
                    <input type="number" name='il' value={user.il
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>BMI value</span>
                    <input type="number" name='bmi' value={user.bmi
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>Diabetes Oedigree Function value</span>
                    <input type="number" name='dofv' value={user.dofv
                    } onChange={handleChange
                    } />
                </div>
                <div className="form-control">
                    <span>Age of Person</span>
                    <input type="number" name='age' value={user.age
                    } onChange={handleChange
                    } />
                </div>
            </div>

            <section onClick={submit} className='heart-submit'>
                Diabetes test Result = {result}
            </section>
        </div>
    )
}

export default Diabetes
