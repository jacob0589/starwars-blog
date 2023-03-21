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
        <h1>CHARACTERS</h1>
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

        <div className="d-flex">
            
                {listPeople && listPeople.length > 0 ?
                    <>
                        {listPeople.map((item, index) => {
                            return <div className= "d-flex" >
                                <CardPeople name={item.name} uid={item.uid} />
                            </div>
                        })}
                    </> : <></>}
            
        </div>
        <div className="d-flex">
           
                {listPlanet && listPlanet.length > 0 ?
                    <>
                        {listPlanet.map((item, index) => {
                            return <div className= "d-flex" >
                                <Planets name={item.name} uid={item.uid} />
                            </div>
                        })}
                    </> : <></>}
            
        </div>
        <div className="d-flex">
            
                {listVehicle && listVehicle.length > 0 ?
                    <>
                        {listVehicle.map((item, index) => {
                            return <div className= "d-flex" >
                                <Vehicle name={item.name} uid={item.uid} />
                            </div>
                        })}
                    </> : <></>}
            
        </div>
    </>)
}

export default StarWars