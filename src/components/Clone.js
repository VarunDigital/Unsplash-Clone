import React from 'react'
import { useEffect, useState } from 'react'

export default function Clone() {
    const [value, setValue] = useState("")
    const [search, setSearch] = useState([])

    function handleClick() {
     // useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?client_id=ewXlW4zW_oQBNxMrDWYrpWErFYt3wJrtA5K0MC0PeiU&query=${value}&per_page=200&orientation=squarish`)
            .then((res) => res.json())
            .then((data) => {
                //this.setState(json);
                console.log(data)
                setSearch(data.results)
            })
    // }, [])
    }
    
    
    
  return (
    <div>
      <nav>
      <div className='container'>
      <h1 className='pt-5'>Unsplash Clone</h1>
      <h6 className='pb-3'>Search Visuals of related search from Unsplash. Start your search here.</h6>
      <div className="search-body">
      <input type="search" placeholder="Search"
           // value={search}
            aria-label="Search" onChange={(event) => {
                setValue(event.target.value)
            }} />
      <button type='button' className='btn btn-success' onClick={() => handleClick()}>Search</button>
      </div>
      </div>
      </nav>
      <div className="container my-5">
        {
          search.map((item)=>{
            return <img key={item.id} src={item.urls.regular}></img>
          })
        }
      </div>
    </div>
  )
}
