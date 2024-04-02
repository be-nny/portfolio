import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext({});

export const MyProvider = ({ children }) => {
    const [value, setValue] = useState('about');

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

MyProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useMyContext = () => useContext(MyContext);
