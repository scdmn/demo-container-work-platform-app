import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeAppStyles} from '@smart-link/context';
import {useRemoteApp} from '@smart-link/core';
import {AppBar, Paper, Toolbar, Typography} from '@smart-link/core/material-ui';
import clsx from 'clsx';

const Home = memo(props => {
    const {className} = props;
    const classes = useStyles(props);
    const {App: TodoApp, TodoList} = useRemoteApp('todo');
    return (
        <div className={clsx(classes.root, className)}>
            <AppBar className={classes.header}>
                <Toolbar>
                    <Typography className="text-15 font-bold">工作台</Typography>
                </Toolbar>
            </AppBar>

            <div className="flex flex-1 p-32">
                <Paper className="flex w-320 h-400" elevation={4}>
                    <TodoApp baseRoute />
                </Paper>
                <Paper className="flex w-320 h-400 ml-32" elevation={4}>
                    <TodoList title="待办列表" />
                </Paper>
            </div>
        </div>
    );
});

Home.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
};

const useStyles = makeAppStyles(
    theme => ({
        root: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
        },
        header: {
            position: 'relative',
        },
    }),
    {name: 'Home'},
);

export default Home;
