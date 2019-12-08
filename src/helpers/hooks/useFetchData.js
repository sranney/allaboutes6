import { useReducer, useEffect } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
    if (action.type === 'successful') {
        return { loading: false, error: undefined, response: action.data };
    } else if (action.type === 'loading') {
        return { loading: true, error: undefined, response: [] };
    } else if (action.type === 'error') {
        return { loading: false, error: action.data, response: [] };
    }
};

const useFetchData = path => {
    const [{ response, error, loading }, dispatch] = useReducer(reducer, {
        response: [],
        error: undefined,
        loading: false,
    });
    useEffect(() => {
        dispatch({ type: 'loading' });
        axios
            .get(`http://mylearningposts-api.herokuapp.com/${path}`)
            .then(res => {
                dispatch({ type: 'successful', data: res.data });
            })
            .catch(err => {
                dispatch({ type: 'error', data: err.data });
            });
    }, [path]);

    return [response, error, loading];
};

export default useFetchData;
