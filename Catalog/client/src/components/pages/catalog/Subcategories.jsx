import React from 'react'
import { ElementWrapper, Paragraph } from '../../elements/PagesElements'

const Subcategories = ({ categories, subcategories, handleChange }) => {
    return (
        <>
            <Paragraph className='filters-title'>Subcategories:</Paragraph>
                {subcategories?.map((dict) => ((
                    Object.values(dict).map((values) => (
                        values.map((subcategory, index) => {
                            return (
                                <ElementWrapper className='checkbox_option' key={index}>
                                <input type="checkbox" id={subcategory} name="subcategory" value={subcategory} onChange={(event) => handleChange(event)}/>
                                <label className='checkbox-option-label' htmlFor={subcategory}>{subcategory}</label>
                                </ElementWrapper>
                            )
                    })))                        
                    )
                ))}
        </>
    )
}

export default Subcategories