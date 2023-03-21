import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	
	return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	<div className="container-fluid">
	<Link to="/">
	<img className="img-responsive h-25 w-25 starWarsNavIcon" src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
				</Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="btn-group">
			<a type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites {store.favorites.length}
			</a>
			<ul className="dropdown-menu list-unstyled" aria-labelledby="navbarDropdown">
							{store.favorites && store.favorites.length > 0 ? <>
								{store.favorites.map((item, index) => {
									return <li key={index} to={item.link}>
										{item.name} <p
                    className="ocultar "
                    type="button"
                    onClick={() => {
						actions.deleteFavorite(item.uid);
                    }}
                  >
                   <i className="fa-solid fa-trash"></i>
                  </p>
										
									</li>
									
								})}
							</> : <></>}
							</ul>
		</div>
	</div>
		</nav>
	);
};
