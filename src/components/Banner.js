import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FiHome} from "react-icons/fi";
import {Text, View} from "react-native-web";
import { IconContext } from "react-icons";
import "../styles/Banner.css";

const options = [
    'Éducation',
    'Expérience',
    'Activités',
    'Projets',
];

const ITEM_HEIGHT = 48;

export default function Banner(props) {
    let navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (event) => {
        switch (event.target.innerText) {
            case 'Éducation':
                navigate("/education", {replace: true});
                break;
            case 'Expérience':
                navigate("/experience", {replace: true});
                break;
            case 'Activités':
                navigate("/activities", {replace: true});
                break;
            case 'Projets':
                navigate("/projects", {replace: true});
                break;
            default:
                break;
        }
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{ background: '#000000'}}>
                <Toolbar>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        color='inherit'
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Laurence Daisy Floriani
                    </Typography>
                    {props.isHome ?
                        <>
                            <Typography variant="h6" align="right" component="div" sx={{flexGrow: 1, marginRight: 1}} >
                                Voyez mon CV
                                <img src={"right_arrow.png"} width={50} height={20} alt="right_arrow"/>
                            </Typography>
                            <a href={"/LaurenceDaisyFloriani.pdf"} target="_blank" rel="noreferrer">
                                <img src={"logo_cv.png"} alt="logo-cv" className="link" height={50}/>
                            </a>
                        </>:
                        <button onClick={() => navigate("/")} >
                            <View>
                                <Text style={{fontSize: 45}}>
                                    <IconContext.Provider
                                        value={{ color: 'black' }}
                                    >
                                    <FiHome className="link" />
                                    </IconContext.Provider>
                                </Text>
                            </View>
                        </button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}