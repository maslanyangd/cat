import React from 'react';

import { setSelectedCategory } from '../redux/reducers/selectedBreedReducer/actions';
import { ICategory } from '../types';
import { useAppDispatch, useAppSelector } from '../types/redux';

function Select() {
    const dispatch = useAppDispatch();
    const categoriesRedux = useAppSelector(state => state.categories);
    const selectedCategory = useAppSelector(state => state.selectedCategory);


    return (
        <>
            <label htmlFor="breeds" style={{paddingBottom:'10px'}}>Choose a category</label>
            <select
                name="breeds"
                id="breeds"
                onChange={e => setSelectedCategory(dispatch, e.target.value)}
                value={selectedCategory}
                style={{
                    padding:'5px',
                }}
            >
                <option disabled selected value={''}>Select an option</option>
                {categoriesRedux.map(({ id, name }: ICategory) => (
                    <option key={id} value={id} >
                        {name}
                    </option>
                ))}
            </select>
        </>
    );
}

export default Select;
