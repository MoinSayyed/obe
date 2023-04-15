import React, {useState} from 'react'
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

// for some unknown reasons axios is not working
// AxiosError {message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK', config: {…}, request: XMLHttpRequest, …}

function LoginForm() {

// created a state having two variables initially empty
    const [Values, setValues] = useState({
        email : '',
        password : '',
        authority : 'user' // to implement different levels of access initially state is set to user and can be changed otherwise
    })

// using useNavigate() hook from react-router-dom
    const navigate = useNavigate()


// on submit of the form we call this function to communicate with the backend to verify the Email & Password fields
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/login', Values)
        .then(res => {
            if(res.data.Status === "Success"){
                navigate('/adminControl')
            }else{
                alert(res.data.Message)
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Outcome Based Education<br/></h2>
                    <p>Empowering students for success through measurable outcomes.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        {/* for some weird reason the handleSubmit function doesn't work! Need to work on that*/}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="XYZ@gmail.com" onChange={event => setValues({...Values, email : event.target.value})}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={event => setValues({...Values, password : event.target.value})}/>
                            </div>
                            <div className="my-2">
                            <button type="submit" className="btn btn-success mx-1">Login</button>
                            <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm