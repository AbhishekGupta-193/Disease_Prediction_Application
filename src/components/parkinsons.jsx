import React, { useState } from 'react';
import './diabetes.css'
import axios from 'axios'
import { redirect } from "react-router-dom";

function Parkinsons() {
    const [user, setUser] = useState({
        m1: "",
        m2: "",
        m3: "",
        m4: "",
        m5: "",
        m6: "",
        m7: "",
        jd: "",
        m8: "",
        m9: "",
        sa3: "",
        sa5: "",
        m10: "",
        sd: "",
        nhr: "",
        hnr: "",
        rpde: "",
        dfa: "",
        s1: "",
        s2: "",
        d2: "",
        ppe:""

    })
    const [result, setResult] = useState("You will get ans3 here")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const submit = async () => {
        const url = "http://10.223.85.88:5000/predict3"
        const res = await axios.post(url, user)
        const data = res.data;
        setResult(data);

    }

    return (
        <div className='parkinson-wrp'>
            <div className='Note'><p>The below user input dataset is fed into the ML Model using flask server which further predicts (using svm (SUPPORT VECTOR MACHINE) model) that the patient has this disease or not with an accuracy percentage of 87.19%.
                </p></div>
            <h1>Parkinson's disease prediction using ML</h1>
            <div className="heart-form">
                <div className="form-control">
                    <span>MDVP:Fo(Hz)</span>
                    <input type="number" name='m1' value={user.m1
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:Fhi(Hz)</span>
                    <input type="number" name='m2' value={user.m2
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:Flo(Hz)</span>
                    <input type="number" name='m3' value={user.m3
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:jitter(%)</span>
                    <input type="number" name='m4' value={user.m4
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:jitter(Abs)</span>
                    <input type="number" name='m5' value={user.m5
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:RAP</span>
                    <input type="number" name='m6' value={user.m6
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:PPQ</span>
                    <input type="number" name='m7' value={user.m7
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Jitter:DDP</span>
                    <input type="number" name='jd' value={user.jd
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:Shimmer</span>
                    <input type="number" name='m8' value={user.m8
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:Shimmer(dB)</span>
                    <input type="number" name='m9' value={user.m9
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Shimmer:APQ3</span>
                    <input type="number" name='sa3' value={user.sa3
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Shimmer:APQ5</span>
                    <input type="number" name='sa5' value={user.sa5
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>MDVP:APQ</span>
                    <input type="number" name='m10' value={user.m10
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Shimmer:DDA</span>
                    <input type="number" name='sd' value={user.sd
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>NHR</span>
                    <input type="number" name='nhr' value={user.nhr
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>HNR</span>
                    <input type="number" name='hnr' value={user.hnr
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>RPDE</span>
                    <input type="number" name='rpde' value={user.rpde
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>DFA</span>
                    <input type="number" name='dfa' value={user.dfa
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Spread1</span>
                    <input type="number" name='s1' value={user.s1
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>Spread2</span>
                    <input type="number" name='s2' value={user.s2
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>D2</span>
                    <input type="number" name='d2' value={user.d2
                    } onChange={handleChange
                    }/>
                </div>
                <div className="form-control">
                    <span>PPE</span>
                    <input type="number" name='ppe' value={user.ppe
                    } onChange={handleChange
                    }/>
                </div>
            </div>
            <section onClick={submit} className='heart-submit'>
                Parkinson's disease test Result = {result}
            </section>
            
        </div>
    )
}

export default Parkinsons
