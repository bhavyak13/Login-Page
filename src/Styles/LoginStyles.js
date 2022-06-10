import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'column',
        backgroundColor:'#394bad',
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem',
    },
    username: {
        width: '40%',
        marginBottom: '1rem',
    },
    password: {
        width: '40%',
        marginBottom: '2rem'
    },
    button: {
        width: '40%'
    },
    helperText: {
        color: 'red',
    },
    forgetText: {
        marginTop: '0.7rem',
        fontSize: '13px',
        '& span': {
            textDecoration: 'none',
            color: 'black',
            fontWeight: '600',
            cursor: 'pointer'
        }
    }
})

export default useStyle;