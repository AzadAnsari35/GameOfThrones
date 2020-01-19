import React from 'react'
import { createStyles, makeStyles, Button } from '@material-ui/core';
import logo from './Image/logo.png';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar'
import cover from './Image/jonsnow.jpg'
import Explore from './Explore'




const Home = () => {
    const classes = useStyles();


    const handleScroll = function (ele) {
        let offsetTop = document.getElementById(ele).offsetTop;
        console.log('offsetTop', offsetTop)
        window.scrollTo({
            top: offsetTop - 100,
            behavior: "smooth"
        });
    }

    return (
        <div className={classes.root}>
            <Navbar />

            <img src={cover}
                width="100%"
                alt="cover"
                className={classes.backgroundImg}
            />

            <img src={logo}
                width="500px"
                alt="logo"
                className={classes.gotLogo}
            />

            <div>
                <Typography variant="headline" className={classes.quote} >
                    "There is only one war that matters.<br></br>
                    The Great War, And It's Here" - <span style={{ color: '#C1C1C1' }}>Jon Snow</span>
                </Typography>
            </div>
            <Button size="small" className={classes.exploreButton} onClick={() => handleScroll('explore')} >EXPLORE!</Button>
            <Explore />
        </div>
    )
}

const useStyles = makeStyles((theme) => createStyles({
    backgroundImg: {
    },
    gotLogo: {
        position: 'absolute',
        top: '37%',
        left: "9%"
    },
    quote: {
        position: "absolute",
        top: "58%",
        left: "11%",
        fontSize: 17,
        color: "#D9D9D9"
    },
    exploreButton: {
        position: "absolute",
        bottom: '25%',
        left: "11%",
        height: 38,
        width: 150,
        color: 'white',
        backgroundColor: "#1295f9",
        boxShadow: "0px 0px 128px 20px rgba(35,152,235,1)",

        '&:hover': {
            backgroundColor: "#095894",
            boxShadow: '0px 0px 84px -10px rgba(35,152,235,1)'
        }

    }
}))

export default Home
