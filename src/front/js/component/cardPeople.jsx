import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(store.favorites.some(favorite => favorite.uid === props.uid));
    }, [store.favorites, props.uid]);

    const handleLikeClick = () => {
        if (isFavorite) {
            actions.deleteFavorite(props.uid);
        } else {
            actions.addFavorite({
                name: props.name,
                uid: props.uid,
                category: "people",
                link: `/people/${props.uid}`
            });
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="card d-flex" style={{ width: "15rem" }}>

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex ">
                    <div className="d-flex justify-content-start">
                        <Link to={`/people/${props.uid}`} className="btn btn-primary">Learn More!</Link>
                    </div>

                    <div className="d-flex justify-content-end">
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

export default CardPeople;