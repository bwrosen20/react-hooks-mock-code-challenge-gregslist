import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings,setListings]=useState([])
  const [search,setSearch]=useState("")



useEffect(()=>{

  fetch("http://localhost:6001/listings")
      .then((r)=>r.json())
      .then((listings)=>setListings(listings))

  
},[])


function searchFunction(event){
  setSearch(event.target.value)
}


function onDeleteListing(deletedListing){
  const updatedListings=listings.filter((listing)=>listing.id!==deletedListing.id)
  setListings(updatedListings)

}

const itemsToDisplay=listings.filter((listing)=>{

  if (search==="") return true;

  else {
    return ((listing.description).toLowerCase()).includes((search).toLowerCase())
  }

})


  return (
    <div className="app">
      <Header searchFunction={searchFunction} search={search}/>
      <ListingsContainer listings={itemsToDisplay} onDeleteListing={onDeleteListing}/>
    </div>
  );
}

export default App;
