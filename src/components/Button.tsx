import React from 'react';

import { loadMoreImages } from '../redux/reducers/imagesReducer/actions';
import { URL } from '../types';
import { useAppDispatch, useAppSelector } from '../types/redux';
import style from './button.module.css'

function Button() {
    const dispatch = useAppDispatch();

    const selectedCategory = useAppSelector(state => state.selectedCategory);

    async function getMoreImages() {
        const response = await fetch(
            selectedCategory ? `${URL}&category_ids=${selectedCategory}` : URL,
        ).then(res => res.json());

        loadMoreImages(dispatch, response);
    }

    return <button className={style.button} onClick={() => getMoreImages()}>Load More</button>;
}

export default Button;
