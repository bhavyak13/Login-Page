import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useStyle from './Styles/LoginStyles';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const changeUsernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = () => {
        if (username === 'admin' && password === 'admin') {
            if (error) setError(false);
            navigate('/welcome');
        }
        else {
            setError(true);
            setUsername('');
            setPassword('');
        }
    }

    const classes = useStyle();
    return (
        <form className={classes.root}>
            <h1 className={classes.title}>A Platform</h1>
            <div className={classes.username}>
                <TextField id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={changeUsernameHandler}
                    fullWidth
                />
            </div>
            <div className={classes.password}>
                <TextField id="outlined-basic"
                    label="Password"
                    type='password'
                    variant="outlined"
                    value={password}
                    onChange={changePasswordHandler}
                    fullWidth
                />
            </div>
            <div className={classes.helperText}
                hidden={!error}
            >
                Invalid credentials, Please try again!
            </div>
            <div className={classes.button}>
                <Button variant="outlined" fullWidth onClick={submitHandler}>Login</Button>
            </div>
            <div className={classes.forgetText}>
                forget your Password ?
                <span onClick={() => { navigate('/reset') }}> Reset password</span>
            </div>
        </form>
    )
}
export default Login;