import axios from "axios";

const getPersonajes = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results)
}

const getPersonajesById = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log('LINK ', `https://rickandmortyapi.com/api/character/${id}`)
    console.log('DATA ', peticion.data)
    state(peticion.data)
}

export {
    getPersonajes,
    getPersonajesById
}