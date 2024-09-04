import { useState } from 'react'
import Nav from './Navigation/Nav'
import Recommended from './Recommended/Recommended'
import SideBar from './Sidebar/SideBar'
import Products from './products/Products'
import './index.css'

//Database
import products from './db/data'
import Card from './component/Card'

export default function App() {

    const [selectedCategory, setSelectedCategory] = useState(null)

    //--------input filter------
    const [query, setQuery] = useState("")

    const handleInputChange = event => {
        setQuery(event.target.value)
    }

    const filteredItems = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1) 

    //--------Radio Filter---------
    const handleChange = event => {
        setSelectedCategory(event.target.value)
    }

    //-----buttons filter------
    const handleClick = event => {
        setSelectedCategory(event.target.value)
    }

    function filteredData(products, selected, query) {
        let filteredProducts = products

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems
        }

        // Selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selected || color === selected || company === selected || newPrice == selected || title === selected)
        }
        return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
            <Card
                key={Math.random()}
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />
        ))
    }
    const result = filteredData(products, selectedCategory, query)

    return (
        <>
            <SideBar handleChange={handleChange}/>
            <Nav query={query} handleInputChange={handleInputChange}/>
            <Recommended handleClick={handleClick}/>
            <Products result={result}/>
        </>
    )
}