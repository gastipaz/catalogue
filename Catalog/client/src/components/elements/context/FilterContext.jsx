import { createContext, useState } from "react";

const FilterContext = createContext();

export function FilterContextProvider({ children }) {

    const [filterData, setFilterData] = useState({ category: [], subcategory: [], min_price: "", max_price: "", search: ""})

    const removeIfUnchecked = (name, value) => {
        const removeValue = (list, value) => {
            const newList = [];
            if (list.length > 0) {
                list.filter((item) => item !== value).forEach((entry) => (
                    newList.push(entry)
                ))}
            return newList
        }
        if (name === 'category') {
            if (filterData.category?.includes(value)) {
                setFilterData((prevState) => ({ ...prevState, category: removeValue(filterData.category, value) }))
            }}
        if (name === 'subcategory') {
            if (filterData.subcategory?.includes(value)) {
                setFilterData((prevState) => ({ ...prevState, subcategory: removeValue(filterData.subcategory, value) }))
            }}
    }

    const handleChange = (event) => {
        const name = event.target.getAttribute("name")
        const value = event.target.getAttribute("value")
        if (event.target.name === "search") {
            setFilterData((prevState) => ({ ...prevState, search: event.target.value }));
        }
        if (event.target.name === "min_price") {
            setFilterData((prevState) => ({ ...prevState, min_price: event.target.value }));
        }
        if (event.target.name === "max_price") {
            setFilterData((prevState) => ({ ...prevState, max_price: event.target.value }));
        }
        if (event.target.checked === true) {
            if (name === "category") {
                if (filterData.category?.includes(value) === false) {
                    setFilterData((prevState) => ({ ...prevState, category: [...prevState.category, value] }))
                };
            }
            if (name === "subcategory") {
                if (filterData.subcategory?.includes(value) === false) {
                    setFilterData((prevState) => ({ ...prevState, subcategory: [...prevState.subcategory, value] }))
                };
            }
        }
        if (event.target.checked === false) {
            removeIfUnchecked(name, value);
        }
    }

    return (
        <FilterContext.Provider
            value={{
                filterData, setFilterData, handleChange
            }}>
            {children}  
        </FilterContext.Provider>
    );
}

export default FilterContext;