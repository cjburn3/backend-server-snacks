const supabase = require('../../supabaseinstance');
const axios = require('axios')

const cache = {};

// GET single snack by ID
const getAll = async (req, res) => {
  const snackId = req.params.id;
  try {
    const { data } = await axios.get(`${SUPABASE_URL}/rest/v1/snacks`, {
      headers: SUPABASE_HEADERS,
    });
    if (data.length > 0) {
      res.json(data[0]);
    } else {
      res.status(404).send('Snack not found');
    }
  } catch (error) {
    res.status(500).json({message: "Error", err: error.message})
  }
}



module.exports = getAll