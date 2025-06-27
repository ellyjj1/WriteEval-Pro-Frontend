import React, {useState} from "react";
import Logo from "../Assets/logo.png";
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
import {Link} from "react-router-dom";

const menuOptions = [
    {
        text: "Home",
        icon: <HomeIcon className="text-gray-700"/>,
        link: "/",
    },
    {
        text: "Evaluator",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/evaluate",
    },
    {
        text: "Sign up",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/register",
    },
    {
        text: "Sign in",
        icon: <InfoIcon className="text-gray-700"/>,
        link: "/login",
    },
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 pb-10 ">
            <div className="flex items-center">
                <a href="/">
                    <img src={Logo} alt="Logo" className="h-auto w-48"/>
                </a>

            </div>
            <div className="hidden md:flex space-x-6 text-gray-700 font-bold">
                {menuOptions.map((item) => (
                    <Link key={item.text} to={item.link} className="hover:text-gray-500">
                        {item.text}
                    </Link>
                ))}
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
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    to={item.link}
                                    onClick={() => setOpenMenu(false)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
