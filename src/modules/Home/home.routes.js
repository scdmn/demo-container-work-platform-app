import React from 'react';
import Home from './Home';

const routes = [
    {
        path: '/',
        exact: true,
        sorted: -1,
        component: () => <Home />,
    },
];

export default routes;
