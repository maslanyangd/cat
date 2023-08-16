import { useEffect } from 'react';

import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Select from './components/Select';
import { setCategoriesRedux } from './redux/reducers/categoriesReducer/actions';
import { setImagesRedux } from './redux/reducers/imagesReducer/actions';
import { useAppDispatch, useAppSelector } from './types/redux';
import { URL } from './types';

function App() {
    const dispatch = useAppDispatch();
    const selectedCategory = useAppSelector(state => state.selectedCategory);

    useEffect(() => {
        async function init() {
            const response = await fetch(
                'https://api.thecatapi.com/v1/categories',
            ).then(res => res.json());

            setCategoriesRedux(dispatch, response);
            const res = await fetch(URL).then(res => res.json());

            setImagesRedux(dispatch, res);
        }
        init();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            async function init() {
                const res = await fetch(`${URL}&category_ids=${selectedCategory}`).then(
                    res => res.json(),
                );

                setImagesRedux(dispatch, res);
            }

            init();
        }
    }, [selectedCategory]);

    return (
        <div
            className="App"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px',
            }}
        >
            <Select />
            <Container />
            <Button />
        </div>
    );
}

export default App;
