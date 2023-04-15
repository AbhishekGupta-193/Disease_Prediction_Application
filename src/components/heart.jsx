import React, { useState } from 'react';
import './diabetes.css'
import axios from 'axios'
import { redirect } from "react-router-dom";
function Heart() {
    const [user, setUser] = useState({
        age: "",
        sex: "",
        cpt: "",
        rpb: "",
        sc: "",
        fbg: "",
        rer: "",
        mhra: "",
        eia: "",
        stdpi: "",
        spest: "",
        mvcf: "",
        tnfr: ""
    })
    const [result, setResult] = useState("You will get ans2 here")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: parseInt(value)
        })
    }

    const submit = async () => {
       console.log(typeof user['age'])
        const url = "https://flask-server-xnv0.onrender.com/predict2"
        const res = await axios.post(url, user)
        const data = res.data;
        setResult(data);
    }

    return (
        <div className='heart-wrp'>
            <div className='Note'><p>The below user input dataset is fed into the ML Model using flask server which further predicts (using LOGISTIC REGRESSION algorithm) that the patient has this disease or not with an accuracy percentage of 81.96%.
                Here is a sample input dataset for a healthy person : [63	1	3	145	 233	1	0	150	0	2.3	0	0	1]</p></div>
            <h1>Heart Disease Prediction Using ML</h1>
            <div className="heart-form">
                <div className="form-control">
                    <span>Age</span>
                    <input type="number" name='age' value={user.age
                    } onChange={handleChange
                    }/>
                    </div>
                <div className="form-control">
                    <span>Sex</span>
                    <input type="number" name='sex' value={user.sex
                    } onChange={handleChange
                    }/>
                    </div>
                <div className="form-control">
                    <span>Chest pain type</span>
                    <input type="number" name='cpt' value={user.cpt
                    } onChange={handleChange
                    }/>
                    </div>
                <div className="form-control">
                    <span>Resting blood pressure</span>
                    <input type="number" name='rpb' value={user.rpb
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Serum Cholestoral in mg/dl</span>
                    <input type="number" name='sc' value={user.sc
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Fasting Blood Sugar `{'>'}` 120mg/dl</span>
                    <input type="number" name='fbg' value={user.fbg
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Resting Electrocardiographic results</span>
                    <input type="number" name='rer' value={user.rer
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Maximum heart rate achieved</span>
                    <input type="number" name='mhra' value={user.mhra
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Exercise induced Angina</span>
                    <input type="number" name='eia' value={user.eia
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>ST depression induced by exercise </span>
                    <input type="number" name='stdpi' value={user.stdpi
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Slope of the peak exercise ST segment</span>
                    <input type="number" name='spest' value={user.spest
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Major vessels colored by flourosopy</span>
                    <input type="number" name='mvcf' value={user.mvcf
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Thal:0=normal;1=fixed;2=reversable defect</span>
                    <input type="number" name='tnfr' value={user.tnfr
                    } onChange={handleChange
                    }/>
                </div>
            </div>
            <section onClick={submit} className='heart-submit'>
                Heart Disease test Result = {result}
            </section>
        </div>
    )
}

export default Heart
