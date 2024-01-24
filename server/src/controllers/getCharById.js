const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const params = req.params;
    const { data } = await axios.get(`${URL}${params.id}`);

    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin.name,
      image: data.image,
    };

    character.id
      ? res.status(200).json(character)
      : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;
