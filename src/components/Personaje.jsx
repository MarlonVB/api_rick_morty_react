import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPersonajesById} from "../funtions/funtions";

const Personaje = () => {
    const [personaje, setPersonaje] = useState(null)

    const params = useParams()
    useEffect(() => {
        console.log('PARAMS '+params.id)
        getPersonajesById(params.id, setPersonaje)
        console.log('DATA '+personaje)
    },[])

    return (
        <>
            {/*{<h2>HAS EN TRADO A VER A {personaje.name}</h2>}*/}
        </>
    )
}

export default Personaje