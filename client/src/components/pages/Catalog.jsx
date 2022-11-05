import React, {useState, useEffect, useRef, useContext} from 'react'
import { PageContainer, PageWrapper, Subtitle, ElementWrapper, Title } from '../elements/PagesElements'
import CategorySection from './catalog/CategorySection'
import Filters from './catalog/Filters'
import MostPopular from './catalog/MostPopular'
import FilterContext from '../elements/context/FilterContext'
import {getData} from './../elements/context/APIHooks'
import '../pages/catalog/Catalog.css'

const Catalog = ({products, setProducts}) => {

  const {filterData} = useContext(FilterContext);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [mostPopular, setMostPopular] = useState({});
  const columnRef = useRef();

  function Filter(products) {
    const filters = Object.fromEntries(Object.entries(filterData).filter(([_, v]) => v.length > 0 && v !== ""));
    if (Object.keys(filters).length !== 0) {
      if (filters.hasOwnProperty("search")) {
        var filteredProducts = products.filter((product) => 
        product.category?.includes(filters.search) ||
        product.subcategory?.includes(filters.search) || 
        product.description?.toLowerCase().includes(filters.search) ||
        product.details?.includes(filters.search))
      } else {
        filteredProducts = products}
      if (filters.hasOwnProperty("category")) {
        filteredProducts = filteredProducts.filter((product) =>  filters.category.includes(product.category))}
      if (filters.hasOwnProperty("subcategory")) {
        filteredProducts = filteredProducts.filter((product) => filters.subcategory.includes(product.subcategory))}
      if (filters.hasOwnProperty("min_price")) {
        filteredProducts = filteredProducts.filter((product) => product.price >= Number(filters.min_price))}
      if (filters.hasOwnProperty("max_price")) {
        filteredProducts = filteredProducts.filter((product) => product.price <= Number(filters.max_price))}
      return filteredProducts
    }  
    return products
}

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("/catalog");
      setProducts(result.data.products);
      setCategories(result.data.categories);
      setSubcategories(result.data.subcategories);
      setLoading(false)
    };
    const fetchMostPopular = async () => {
      const result = await getData("/mostPopular");
      setMostPopular(result.data.orders)
    };
    fetchData();
    fetchMostPopular();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isLoading) {
      return (
          <PageContainer>
              <PageWrapper>
                  <ElementWrapper>
                      <Title>Loading...</Title>
                  </ElementWrapper>
              </PageWrapper>
          </PageContainer>
      )
  }

  return (
    <>
      <PageContainer className="catalog-container">
        <PageWrapper className="catalog-container">
          <div className='catalog-row'>
            <div className='catalog-column-left'>
              <Filters categories={categories} subcategories={subcategories}/>
            </div>
            <div className='catalog-column-middle' ref={columnRef}>
              {Filter(products)?.length > 0 ? categories?.map((category, index)=>(
                <CategorySection key={index} name={category} products={Filter(products)} category={category} subcategories={subcategories} columnRef={columnRef}/>
                )) :
                <ElementWrapper className='not-found-message-wrapper'>
                  <Subtitle>There are no products that match the specified criteria</Subtitle>
                </ElementWrapper>
                }
            </div>
            <div className='catalog-column-right'>
              <MostPopular products={products} mostPopular={mostPopular}/>
            </div>
          </div>
        </PageWrapper>
      </PageContainer>
    </>
  )
}

export default Catalog