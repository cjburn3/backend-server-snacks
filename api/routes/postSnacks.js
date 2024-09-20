const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()


const postSnack = async (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  const snack = {
    name, description, price, category, inStock
  }

  const url = process.env.SUPABASE_URL + '/rest/v1/snacks'
  const token = process.env.SUPABASE_KEY

  console.log(url)
  console.log(token)

  

  try {
    const { data } = await axios.post(url, snack, {
      headers: {
        apikey: process.env.SUPABASE_KEY,
        Authorization: "Bearer " + process.env.SUPABASE_KEY,
      }
    });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send('Error adding snack');
  }
};

module.exports = postSnack