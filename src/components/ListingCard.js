import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {


    const [favorite,setFavorite]=useState(true)

  function handleDeleteClick(){
    fetch(`http://localhost:6001/listings/${listing.id}`,{
      method:"DELETE"
    })
        .then((r)=>r.json())
        .then(()=>onDeleteListing(listing))
  }
function favoriteFunction(){
    setFavorite(!favorite)
}



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details" onClick={favoriteFunction}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={(handleDeleteClick)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;



// Here's the original json data btw
// {
//   "listings": [
//     {
//       "id": 1,
//       "description": "heater",
//       "image": "./images/heater.jpg",
//       "location": "BROOKLYN"
//     },
//     {
//       "id": 2,
//       "description": "2019 Toyota Tacoma grill",
//       "image": "./images/toyota-grill.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 3,
//       "description": "Free Braun 3735 Electric Toothbrush charger",
//       "image": "./images/toothbrush-charger.jpg",
//       "location": "Williamsburg"
//     },
//     {
//       "id": 4,
//       "description": "FREE Hundreds of DVD/CD Cases - Different Sizes and Colors",
//       "image": "./images/dvd-cases.jpg",
//       "location": "Prospect Heights"
//     },
//     {
//       "id": 5,
//       "description": "wood",
//       "image": "./images/wood.jpg",
//       "location": "Greenpoint"
//     },
//     {
//       "id": 6,
//       "description": "Beautiful couch",
//       "image": "./images/couch.jpg",
//       "location": "Bay Ridge"
//     },
//     {
//       "id": 7,
//       "description": "Treadmill Parts For Free",
//       "image": "./images/treadmill.jpg",
//       "location": "East Flatbush"
//     }
//   ]
// }