const supabase = require('../../supabaseinstance');

const cache = {};

// GET single snack by ID
const getAllID = async (req, res) => {
  const snackId = req.params.id;
  try {
    const { data } = await axios.get(`${SUPABASE_URL}/rest/v1/snacks?id=eq.${snackId}`, {
      headers: SUPABASE_HEADERS,
    });
    if (data.length > 0) {
      res.json(data[0]);
    } else {
      res.status(404).send('Snack not found');
    }
  } catch (error) {
    res.status(500).send('Error fetching snack');
  }
}



module.exports = getAllID