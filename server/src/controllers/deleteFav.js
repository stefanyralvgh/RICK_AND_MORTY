const Favorite = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const allFavorites = await Favorite.findAll();

    return res.status(200).json({ favorites: allFavorites });
  } catch (error) {
    return res.status(500).json({ error: `Error: ${error.message}` });
  }
};

module.exports = deleteFav;
