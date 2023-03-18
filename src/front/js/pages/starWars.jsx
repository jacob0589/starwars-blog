import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardPeople from "../component/cardPeople.jsx";
import Planets from "../component/planets.jsx";
import Vehicle from "../component/vehicle.jsx";
import { todoActions } from "../store/todos";

const StarWars = () => {
    const { store, actions } = useContext(Context)
    const [listPeople, setListPeople] = useState({})
    const [listPlanet, setListPlanet] = useState({})
    const [listVehicle, setListVehicle] = useState({})
    //se ejecuta la primera vez que se reenderiza el componente
    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch("/people")
            if (response.ok) {

                setListPeople(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/planets"))
            if (response.ok) {

                setListPlanet(respuestaJson.results)
            }

            ({ respuestaJson, response } = await actions.useFetch("/vehicles"))
            if (response.ok) {

                setListVehicle(respuestaJson.results)
            }
        }
        cargaDatos()

    }, [])

    return (<>
        Soy el componente de Star wars

        <div>
            <ul>
                {listPeople && listPeople.length > 0 ?
                    <>
                        {listPeople.map((item, index) => {
                            return <li >
                                <CardPeople name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>
        <div>
            <ul>
                {listPlanet && listPlanet.length > 0 ?
                    <>
                        {listPlanet.map((item, index) => {
                            return <li>
                                <Planets name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>
        <div>
            <ul>
                {listVehicle && listVehicle.length > 0 ?
                    <>
                        {listVehicle.map((item, index) => {
                            return <li>
                                <Vehicle name={item.name} uid={item.uid} />
                            </li>
                        })}
                    </> : <></>}
            </ul>
        </div>
    </>)
}

export default StarWars