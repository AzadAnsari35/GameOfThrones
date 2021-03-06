import React from 'react'
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import Spinner from '../Spinner'
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom'

const MainPageHouse = ({ obj, loading }) => {

    const classes = useStyles();
    const history = useHistory()

    const handleBack = () => {
        history.goBack()
    }

    const handleHome = () => {
        history.push('/')
    }

    return (
        loading ? <Spinner /> :

            <div className={classes.root}>
                <ArrowBackIcon className={classes.backIcon} onClick={handleBack} />
                <HomeIcon className={classes.homeIcon} onClick={handleHome} />

                <Typography variant="h4" component="h2" className={classes.characterName} >
                    {obj.name || 'Not Present'}
                </Typography>

                <Typography variant="h5" className={classes.characterAliases}>
                    {obj.aliases && obj.aliases[0]}
                </Typography>


                <div className={classes.InfoAbout}>

                    <div className={classes.about}>
                        <Typography variant="h4" className={classes.boxHeading}>
                            About
                    </Typography>
                        <Typography variant="body1">
                            Region : {obj.region || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Words : {obj.culture || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Current Lord : {obj.currentLord || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Heir : {obj.heir || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Founded : {obj.founded || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Founder : {obj.founder || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            DiedOut : {obj.diedOut || 'Not Present'}
                        </Typography>


                    </div>


                </div>




            </div>
    )
}

const useStyles = makeStyles((theme) => createStyles({
    root: {
        position: 'absolute',
        left: "35%",
        top: '1%',
        width: '61%'
    },
    name: {
        display: "flex",
        justifyContent: "center"
    },
    homeIcon: {
        position: 'absolute',
        right: '2%',
        fontSize: 40,
        color: 'white',
        top: "4%"
    },
    backIcon: {
        color: 'white',
        fontSize: 40,
        position: 'absolute',
        top: '4%'

    },
    characterName: {
        textAlign: 'center',
        color: '#f5f5f5',
        fontWeight: '600'
    },
    characterAliases: {
        textAlign: 'center',
        color: "#d3d3d3",
        marginBottom: 30,
        fontFamily: 'Cinzel Decorative'

    },
    boxHeading: {
        textAlign: 'center',
        marginBottom: 30
    },
    InfoAbout: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px 0px'

    },

    about: {
        backgroundColor: '#d3d3d3',

        '& span': {
            display: 'block'
        },
        boxShadow: '1px 0px 65px -6px rgba(51,51,51,1)',
        padding: '20px 30px 30px 30px',
        borderRadius: 25,
        width: 400,


    }

}))
export default MainPageHouse