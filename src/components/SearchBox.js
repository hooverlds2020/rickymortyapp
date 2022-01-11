import axios from 'axios';
import React, { useState, useEffect} from 'react'
import LocationInfo from './LocationInfo'
import ResidentList from './ResidentList';


const randomId = Math.floor(Math.random() * 5 + 1)

const SearchBox = () => {
    
    const [id, setId] = useState( randomId );

    const [dataApi, setDataApi] = useState({})

    const [pageZero, setPageZero] = useState(0)
    const [pageTen, setPageTen] = useState(10)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setDataApi(res.data))
            .catch(error =>console.log(error))
    }, [])
    
    const handleSearch = (e) => {
        e.preventDefault()
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)    
            .then(res => setDataApi(res.data))      
            .catch(error => console.log(error))            
            setPageZero(0)
            setPageTen(10)
      }; 


    return (
        <>
            <div className="search-box">
                    <form onSubmit={(e) => handleSearch(e)}>
                        <input
                        type="number"
                        onChange={(e) => setId(e.target.value)}
                        placeholder="Type a location id"
                        />
                        <button 
                        type="submit"
                        className="button-search"
                        >
                        Search
                        </button>
                    </form>
            </div>
            <LocationInfo 
                residents = {dataApi?.residents}
                name = { dataApi?.name } 
                type = {dataApi?.type}
                dimension ={ dataApi?.dimension}
            />
            <ResidentList 
                residents = {dataApi?.residents}
                pageZero = {pageZero}
                setPageZero = {setPageZero}
                pageTen = {pageTen}
                setPageTen = {setPageTen}
            />        
        </>
        
    )
}

export default SearchBox
