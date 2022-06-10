import { makeStyles } from '@mui/styles';
import bg from "./bg.svg";

const useStyles = makeStyles({
    App: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        /* background by SVGBackgrounds.com */
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`,
    },
})
export default useStyles;