import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Searchbar = () => {
  
    const [query, setquery] = useState("")
    const location = useLocation()
    const onChangeHandler = (event)=>{
        return(
            setquery(event.target.value)
        )
    }
    useEffect(() => {
        location.pathname===`/search/${query}`?console.log(""):setquery("")
      
    }, [location.pathname])
    
    
    return (
        <div>
            <form className="d-flex" role="search">
                <input onChange={onChangeHandler} value={query} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <Link to={`/search/${query}`}>
                    <button className="btn btn-outline-success">Search</button>
                </Link>
            </form>
        </div>
    )
}

export default Searchbar