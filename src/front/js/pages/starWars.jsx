import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import Planets from "../component/planets.jsx";
import Vehicle from "../component/vehicle.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
    const { store, actions } = useContext(Context);
    const [listPeople, setListPeople] = useState([]);
    const [listPlanet, setListPlanet] = useState([]);
    const [listVehicle, setListVehicle] = useState([]);

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people");
            if (response.ok) {
                setListPeople(respuestaJson.results);
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"));
            if (response.ok) {
                setListPlanet(respuestaJson.results);
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"));
            if (response.ok) {
                setListVehicle(respuestaJson.results);
            }
        };
        cargaDatos();
    }, []);

    return (
        <>
            <h1>CHARACTERS</h1>
            <div className="container mt-3">
                <div className="card-container d-flex flex-nowrap">
                    {listPeople.map((item, index) => (
                        <CardPeople key={item.uid} name={item.name} uid={item.uid} />
                    ))}
                </div>
            </div>
            <h1>PLANETS</h1>
            <div className="container mt-3">
                <div className="card-container d-flex flex-nowrap">
                    {listPlanet.map((item, index) => (
                        <Planets key={item.uid} name={item.name} uid={item.uid} />
                    ))}
                </div>
            </div>
            <h1>VEHICLES</h1>
            <div className="container mt-3">
                <div className="card-container d-flex flex-nowrap">
                    {listVehicle.map((item, index) => (
                        <Vehicle key={item.uid} name={item.name} uid={item.uid} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default StarWars;