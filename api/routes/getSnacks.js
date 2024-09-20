const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config() // Load env variables

// GET single snack by ID
const getAll = async (req, res) => {

  try {

    const url = process.env.SUPABASE_URL+'/rest/v1/snacks'
    const token = process.env.SUPABASE_KEY

    console.log(url)
    console.log(token)

    const { data } = await axios.get(url, {
      headers: {
        apikey: process.env.SUPABASE_KEY,
        Authorization: "Bearer " + process.env.SUPABASE_KEY,
      }
    });
    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send('Snack not found');
    }
  } catch (error) {
    res.status(500).json({ message: "Error", err: error.message })
  }
}



module.exports = getAll