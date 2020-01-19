import React from 'react'
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FlagIcon from '@material-ui/icons/Flag';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom'

const Explore = () => {

    const classes = useStyles();

    return (
        <div className={classes.root} id="explore">
            <Typography variant="h3" className={classes.heading}>
                EXPLORE
            </Typography>
            <div className={classes.iconParent}>
                <div className={classes.iconWrapper}>
                    <Link to="/books">
                        <LibraryBooksIcon className={classes.icon} />
                    </Link>
                </div>
                <div className={classes.iconWrapper}>
                    <Link to="/houses">
                        <FlagIcon className={classes.icon} />
                    </Link>
                </div>
                <div className={classes.iconWrapper}>
                    <Link to="/characters">
                        <FaceIcon className={classes.icon} />
                    </Link>
                </div>
            </div>

        </div>
    )
}

const useStyles = makeStyles((theme) => createStyles({
    root: {
        backgroundColor: '#142A41',
        height: 400,
        marginTop: -10
    },
    heading: {
        fontFamily: 'Cinzel Decorative',
        color: "#c0c0c0",
        padding: 60,
        textAlign: 'center'
    },

    iconParent: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    iconWrapper: {
        height: 150,
        width: 150,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        '&:hover': {
            boxShadow: '0px 0px 128px -20px rgba(242,248,252,1)',
            transitionDuration: '1s'

        }
    },
    icon: {
        fontSize: 100,
        color: '#142A41'
    }
}))
export default Explore