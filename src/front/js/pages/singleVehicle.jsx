import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicle = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [vehicle, setVehicle] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/vehicles/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setVehicle(respuestaJson.result.properties)
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
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.uid}.jpg`}
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg' }}
                                className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title text-center">{vehicle.name}</h1>

                                <h5 className="card-text">Model: {vehicle.model} <br />Length: {vehicle.length} <br />Manufacturer: {vehicle.manufacturer} <br />Cargo Capacity: {vehicle.cargo_capacity} <br />Max. Speed: {vehicle.max_atmosphering_speed} <br />Class: {vehicle.vehicle_class}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default SingleVehicle