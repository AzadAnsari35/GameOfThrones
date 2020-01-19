import React from 'react'
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import Spinner from '../Spinner'
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom'

const MainBookPage = ({ obj, loading }) => {

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



                <div className={classes.InfoAbout}>

                    <div className={classes.about}>
                        <Typography variant="h4" className={classes.boxHeading}>
                            About
                    </Typography>
                        <Typography variant="body1">
                            ISBN : {obj.isbn || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Number Of Pages : {obj.numberOfPages || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Publisher : {obj.publisher || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Country : {obj.country || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Media Type : {obj.mediaType || 'Not Present'}
                        </Typography>
                        <Typography variant="body1">
                            Released : {obj.released || 'Not Present'}
                        </Typography>
                        {obj.authors && obj.authors.slice(0, 3).map((cur, ind) => <Typography variant="body" >
                            Author {ind + 1} : {cur}
                        </Typography>
                        )}


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
export default MainBookPage