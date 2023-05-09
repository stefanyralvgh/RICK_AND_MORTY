// function getCharById(res, id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data=>{
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status,
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end(JSON.stringify(character));
//     }))
//     .catch((error)=>{
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end(error.message)
//     })
// }

// module.exports = {
//     getCharById
// }

const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {

    const params = req.params;

    axios
      .get(`${URL}${params.id}`)
      .then(({ data }) => {
        const character = {
          id: data.id,
          image: data.image,
          name: data.name,
          gender: data.gender,
          species: data.species,
        };

        character.id ? res.status(200).json(character) : res.status(404).send('Not found');
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
}

module.exports = getCharById;
