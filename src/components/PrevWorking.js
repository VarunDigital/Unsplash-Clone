import React from 'react'
import { useEffect, useState } from 'react'

export default function Clone() {
    const [value, setValue] = useState("")
    const [search, setSearch] = useState([])

    function handleClick() {
     // useEffect(() => {
        fetch(`https://api.unsplash.com/search/photos?client_id=ewXlW4zW_oQBNxMrDWYrpWErFYt3wJrtA5K0MC0PeiU&query=${value}&per_page=15`)
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
      <h2>This is Unsplash Clone</h2>
      <input type="search" placeholder="Search"
           // value={search}
            aria-label="Search" onChange={(event) => {
                setValue(event.target.value)
            }} />
      <button type='button' onClick={() => handleClick()}>Search Meaning</button>

      <div className="container">
        {
          search.map((item)=>{
            return <img key={item.id} src={item.urls.regular}></img>
          })
        }
      </div>
    </div>
  )
}
