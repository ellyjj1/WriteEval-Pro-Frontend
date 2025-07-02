import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {HiOutlineBars3} from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../Assets/logo.png";

const menuOptions = [
    {
        text: "Home",
        icon: <HomeIcon className="text-gray-700"/>,
        link: "/",
        displayBeforeAuth: true,
        displayAfterAuth: true,
    },
    {
        text: "Evaluator",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/evaluate",
        displayBeforeAuth: true,
        displayAfterAuth: true,
    },
    {
        text: "Sign up",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/register",
        displayBeforeAuth: true,
        displayAfterAuth: false,
    },
    {
        text: "Sign in",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/login",
        displayBeforeAuth: true,
        displayAfterAuth: false,
    },
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("username");
        if (token && user) {
            setIsAuth(true);
            setUsername(user);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setIsAuth(false);
        navigate("/");
    };

    const filteredMenu = menuOptions.filter((item) =>
        isAuth ? item.displayAfterAuth : item.displayBeforeAuth
    );

    return (
        <nav className="flex items-center justify-between px-6 pb-10">
            <div className="flex items-center">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="h-auto w-48"/>
                </Link>
            </div>

            <div className="hidden md:flex space-x-6 text-[#4e0317] font-bold items-center">
                {filteredMenu.map((item) => (
                    <Link key={item.text} to={item.link} className="hover:text-gray-500">
                        {item.text}
                    </Link>
                ))}
                {isAuth && (
                    <div className="flex items-center space-x-5">
                        <div className="flex items-center space-x-1">
                            <PersonIcon className="text-[#4e0317]"/>
                            <a href="/userprofile">
                                <span>{username}</span>
                            </a>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center space-x-1 font-medium text-white rounded-xl text-sm px-4 py-1 hover:opacity-80 transition duration-300"
                        >
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>

            <div className="md:hidden">
                <HiOutlineBars3
                    onClick={() => setOpenMenu(true)}
                    className="w-6 h-6 text-gray-700 cursor-pointer"
                />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{width: 250}}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {filteredMenu.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton component={Link} to={item.link}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        {isAuth && (
                            <>

                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon className="text-gray-700"/>
                                    </ListItemIcon>
                                    <ListItemText primary={username}/>
                                </ListItem>


                                <ListItem button onClick={handleLogout}>
                                    <ListItemIcon>
                                        <LogoutIcon className="text-red-600"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Logout"/>
                                </ListItem>
                            </>
                        )}
                    </List>
                    <Divider/>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;