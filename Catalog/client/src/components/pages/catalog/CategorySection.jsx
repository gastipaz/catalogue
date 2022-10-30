import React from 'react'
import SubcategorySection from './SubcategorySection'

const CategorySection = ({products, category, subcategories, columnRef}) => {
  return (
    <>
        {subcategories.map((dict)=>(
            dict[category]?.map((subcategory, index)=> {
              return (
                products?.find((product)=> product.subcategory === subcategory) &&
                    <SubcategorySection key={index} products={products} subcategory={subcategory} columnRef={columnRef}/>
                    )})))}
    </>
  )
}

export default CategorySection