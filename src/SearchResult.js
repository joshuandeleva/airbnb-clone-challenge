import React from 'react'
import './SearchResults.css'
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function SearchResult({img , location , star , price , total ,title ,description}) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                 <div className="searchResult__infoBotttom">
                    <div className="searchResult__Stars">
                        <StarIcon className="searchResult__star"/>
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
