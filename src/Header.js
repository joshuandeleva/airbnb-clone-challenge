import React from "react";
import "./Header.css";
import {Link }from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import LanguageIcon from "@material-ui/icons/Language";
function Header() {
	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__icon"
					src="https://seeklogo.com/images/A/airbnb-logo-3023AC4CBA-seeklogo.com.png"
					alt=""
				/>
			</Link>

			<div className="header__center">
				<input type="text" placeholder="find your home" />
				<SearchIcon />
			</div>
			<div className="header__right">
				<p>Become a host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar src="https://i.pinimg.com/564x/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg" />
			</div>
		</div>
	);
}

export default Header;
