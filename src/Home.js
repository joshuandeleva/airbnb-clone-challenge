import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card
					src="https://i.pinimg.com/236x/7b/df/05/7bdf059bf3aae3872396ea0ef6b65d72.jpg"
					title="Online Experience"
					description="But living like a local, in one of the capital’s finest Airbnbs, is a brilliant place to start. We've scoured through the most beautiful London properties listed to bring you this edit: the smartest homestays in brilliant locations that we love the look of."
					price="$130/night"
				/>
				<Card
					src="https://i.pinimg.com/236x/01/c3/46/01c346559d7e57c29908e2be38de53d8.jpg"
					title="unique stays"
					description="But living like a local, in one of the capital’s finest Airbnbs, is a brilliant place to start. We've scoured through the most beautiful London properties listed to bring you this edit: the smartest homestays in brilliant locations that we love the look of."
					price="$130/night"
				/>
				<Card
					src="https://i.pinimg.com/236x/7c/38/b2/7c38b27df9c11f349ab027120575ec61.jpg"
					title="Penthouse London"
					description="But living like a local, in one of the capital’s finest Airbnbs, is a brilliant place to start. We've scoured through the most beautiful London properties listed to bring you this edit: the smartest homestays in brilliant locations that we love the look of."
					price="$130/night"
				/>
			</div>
			<div className="home__section">
				<Card
					src="https://i.pinimg.com/236x/c3/1d/02/c31d02ac6c1f92f4b4e1f505b33dc4b5.jpg"
					title="stamford houses in London"
					description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets "
					price="$130/night"
				/>
				<Card
					src="https://i.pinimg.com/236x/fe/c0/48/fec0480036f055696324d702bc4c4ce4.jpg"
					title="3 bedroom flat in Cambridge"
					description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets "
					price="$130/night"
				/>
				<Card
					src="https://i.pinimg.com/236x/5f/89/1d/5f891d9cfdcd513f0b24b0610f11d527.jpg"
					title="Enire houses"
					description="This three-floor penthouse in arty Bloomsbury is stuffed with unusual details: a grand four-poster in one of the bedrooms, a futuristic glassy wardrobe in another, a huge, copper bath in one of the ensuites. There are two pretty terraces – set up breakfast outside as central London comes to life in the streets "
					price="$130/night"
				/>
			</div>
		</div>
	);
}

export default Home;
