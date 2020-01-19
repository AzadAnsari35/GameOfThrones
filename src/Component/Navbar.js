import React from 'react'
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core';
import HBOLogo from "./Image/hbo_logo.png"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    const classes = useStyles();


    return (
        <div className={classes.navbar}>

            <img src={HBOLogo}
                width="120px"
                height="50px"
                alt="cover"
                style={{ marginRight: 50 }}
            />
            <div className={classes.links}>
                <NavLink
                    to="/"
                    exact
                    activeClassName={"active"}

                >
                    <Typography variant="subtitle" color="inherit" className={classes.navlink} >
                        Home
            </Typography>
                </NavLink>


                <NavLink
                    to="/books"
                    exact
                    activeClassName={"active"}

                >
                    <Typography variant="display3" color="inherit" className={classes.navlink} >
                        Books
            </Typography>
                </NavLink>


                <NavLink
                    to="/houses"
                    exact
                    activeClassName={"active"}

                >
                    <Typography variant="display3" color="inherit" className={classes.navlink} >
                        Houses
            </Typography>
                </NavLink>



                <NavLink
                    to="/characters"
                    exact
                    activeClassName={"active"}

                >
                    <Typography variant="display3" color="inherit" className={classes.navlink} >
                        Characters
            </Typography>
                </NavLink>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => createStyles({
    navbar: {
        position: 'absolute',
        top: "8%",
        left: "6%",
        display: 'flex',
        alignItems: "center",

    },
    links: {
        '& a': {
            textDecoration: 'none',
            color: '#B8B5B1'
        },
        '& .active': {
            color: '#fff',
        },
    },
    navlink: {
        margin: '0px 20px'
    },
    right: {
        backgroundColor: 'yellow',
        left: 200,
        width: 400,
        position: 'absolute'
    }

}))

export default Navbar
