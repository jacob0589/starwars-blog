import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicle = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(store.favorites.some(favorite => favorite.uid === props.uid && favorite.name === props.name));
    }, [store.favorites, props.uid, props.name]);

    const handleLikeClick = () => {
        if (isFavorite) {
            actions.deleteFavorite(props.uid, props.category);
        } else {
            actions.addFavorite({
                name: props.name,
                uid: props.uid,
                category: props.category,
                link: `/vehicles/${props.uid}`
            });
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card-wrapper" >
            <div className="card" style={{ width: "250px" }}>
                <img
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body" >
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/vehicles/${props.uid}`} className="btn btn-primary">Learn More!</Link>


                        <p
                            type="button"
                            role="button"
                            className={`fs-3 fa ${isFavorite ? "fa-heart text-danger" : "fa-regular fa-heart"}`}
                            onClick={handleLikeClick}
                        ></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vehicle;