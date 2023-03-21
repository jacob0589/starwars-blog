import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = (props) => {
    const [addLike, setaddLike] = useState();

    const Favorite = () => {
        setaddLike(!addLike);}
        return (<>
            <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/planets/${props.uid}`} className="btn btn-primary">Learn More!</Link>
                    <p
                        id="likeButton"
                        role="button2"
                        className={` ${addLike ? "fa fa-heart text-danger" : "fa-regular fa-heart"} `}
                        onClick={Favorite}
                    ></p>
                </div>
            </div>
        </>)
    }

    export default Planets;