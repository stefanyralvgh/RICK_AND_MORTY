const Favorite = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ error: "data is missing" });
    }

    await Favorite.create({
      name,
      origin,
      status,
      image,
      species,
      gender,
    });

    const allFavorites = await Favorite.findAll();

    return res.status(200).json({ favorites: allFavorites });
  } catch (error) {
    return res.status(500).json({ error: `Error: ${error.message}` });
  }
};

module.exports = postFav;
