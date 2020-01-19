import React, { useState, useEffect } from 'react'
import { createStyles, makeStyles, List, Divider, ListItem, ListItemText, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Pagination from "material-ui-flat-pagination";
import { Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Spinner from './Spinner'
import { withRouter } from 'react-router-dom';


const MainList = ({ list, load, loading, type, location }) => {





    const classes = useStyles();

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(12);
    const [float, setFloat] = useState('center')

    const handleClick = async offset => {
        await setOffset(offset);
        await load(offset / limit)
    };





    useEffect(() => {

        load(1)
    }, []);

    return (
        !loading && list.length <= 0 ? "No Item to Show" :
            <div className={classes.root}>

                <div className={classes.mainListContainerWrapper} >

                    <div className={clsx(classes.mainListContainer, float === 'left' ? classes.listLeft : classes.listCenter)}>

                        <Paper className={classes.paper}>
                            {
                                loading && <Spinner />
                            }

                            {
                                !loading && list.length > 0 &&

                                <span>
                                    <List component="nav" aria-label="secondary mailbox folders" className={classes.listParent} >
                                        {list.map((cur, ind) =>
                                            <Link to={`/${type}/${cur.url.split(`${type}/`)[1]}`} key={ind}
                                            >
                                                <ListItem
                                                    button
                                                    onClick={() => setFloat('left')}
                                                    className={classes.listField}
                                                >
                                                    <ListItemText primary={cur.name || 'Name'} />
                                                </ListItem>
                                            </Link>
                                        )
                                        }
                                    </List>
                                    <Divider />
                                    <Pagination
                                        limit={limit}
                                        offset={offset}
                                        total={180}
                                        onClick={(e, offset) => handleClick(offset)}
                                        className={classes.paginate}
                                    />
                                </span>

                            }

                        </Paper>
                    </div>
                </div>
            </div>
    )
}

const useStyles = makeStyles((theme) => createStyles({

    root: {
        backgroundColor: '#142A41',
        height: '900px'
    },


    mainListContainerWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
    },
    mainListContainer: {
        position: 'fixed',
        top: 15,
        bottom: 0,
    },
    listCenter: {
        width: 400,
    },
    listLeft: {
        width: 400,
        left: 20,
    },
    listParent: {
        '& a': {
            textDecoration: 'none'
        }
    },
    listField: {
        color: "#000",
        '&:focus': {
            backgroundColor: '#d3d3d3'
        }
    },

    nav: {
        padding: 0,
        height: 'calc(100% - 120px)',
        overflow: 'auto',
    },

    paginate: {
        display: 'flex',
        justifyContent: 'center'
    }
}))



export default withRouter(MainList)