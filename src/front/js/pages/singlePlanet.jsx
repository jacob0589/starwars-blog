import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/planets/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPlanet(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        <div className="container">
            <Link to="/"><button type="button" className="btn btn-primary mt-3">Go Back</button></Link>
            <div className="d-flex justify-content-center mt-3">
                <div className="card mb-3" style={{ width: "75%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg' }}
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">{planet.name}</h1>
                                <h5 className="card-text">Climate: {planet.climate} <br />Diameter: {planet.diameter} <br />Gravity: {planet.gravity} <br />Orbital Period: {planet.orbital_period} <br />Population: {planet.population} <br />Terrain: {planet.terrain}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SinglePlanet