import React, { useContext } from 'react'
import { ElementWrapper, Paragraph } from '../../elements/PagesElements'
import Subcategories from './Subcategories';
import FilterContext from '../../elements/context/FilterContext';
import './Catalog.css'

const Filters = ({ categories, subcategories,  }) => {

    const { handleChange } = useContext(FilterContext)

    return (
        <>
            <form className='filters_form' method="post">
                <ElementWrapper className="filters">
                    <Paragraph className='filters-title'>Categories:</Paragraph>
                    {categories?.map((category, index) => {
                        return (
                            <ElementWrapper className='checkbox_option' key={index}>
                                <input type="checkbox" id={category} name="category" value={category} onChange={(event) => handleChange(event)} />
                                <label className='checkbox-option-label' htmlFor={category}>{category}</label>
                            </ElementWrapper>
                        )
                    })}
                </ElementWrapper>
                <ElementWrapper className="filters">
                    <Subcategories categories={categories} subcategories={subcategories} handleChange={handleChange} />
                </ElementWrapper>
                <ElementWrapper className="filters">
                    <Paragraph className='filters-title'>Minimum price:</Paragraph>
                    <ElementWrapper className='price-input-wrapper'>
                        <input className='price-input' id='min_price' name='min_price' type="text" onChange={(event) => handleChange(event)} placeholder="Enter minimum price"/>
                    </ElementWrapper>
                    <Paragraph className='filters-title'>Maximum price:</Paragraph>
                    <ElementWrapper className='price-input-wrapper'>
                        <input className='price-input' id='max_price' name='max_price' type="text" onChange={(event) => handleChange(event)} placeholder="Enter maximum price"/>
                    </ElementWrapper>
                </ElementWrapper>
            </form>
        </>
    )
}

export default Filters