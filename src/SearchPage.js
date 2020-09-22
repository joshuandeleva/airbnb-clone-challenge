import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage__info">
				<p>62 stays . 26 august to 30 august </p>
				<h1>stays nearby</h1>
				<Button variant="outlined">Cancellation flexibility</Button>
				<Button variant="outlined">Price</Button>
				<Button variant="outlined">Type of place</Button>
				<Button variant="outlined">Rooms and beds</Button>
				<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult
				img="https://i.pinimg.com/236x/03/b2/f5/03b2f518afc718e22b1604bfeffcb6aa.jpg"
				location="london"
				title="stamford Ninja houses"
				description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets"
				star={4.73}
                price="$400/Night"
                total="$400/Total"
            />
            <SearchResult
				img="https://i.pinimg.com/236x/a0/d9/f9/a0d9f9d8f1dc22cc17ac7048ec382567.jpg"
				location="london"
				title="stamford Ninja houses"
				description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets"
				star={4.73}
                price="$400/Night"
                total="$400/Total"
            />
            <SearchResult
				img="https://i.pinimg.com/236x/ac/fe/06/acfe06a544c27ff4894e9a0c8ea59704.jpg"
				location="london"
				title="stamford Ninja houses"
				description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets"
				star={4.73}
                price="$400/Night"
                total="$400/Total"
            />
            <SearchResult
				img="https://i.pinimg.com/236x/2f/a8/99/2fa899353585fb023c064c8ec8bf5483.jpg"
				location="london"
				title="stamford Ninja houses"
				description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets"
				star={4.73}
                price="$400/Night"
                total="$400/Total"
            />
            <SearchResult
				img="https://i.pinimg.com/236x/bd/dc/8a/bddc8a8bab316ae8ef824ecc8b725a98.jpg"
				location="london"
				title="stamford Ninja houses"
				description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets"
				star={4.73}
                price="$400/Night"
                total="$400/Total"
			/>
		</div>
	);
}

export default SearchPage;
