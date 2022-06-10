import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Reset from './Reset';
import useStyles from './Styles/AppStyles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
