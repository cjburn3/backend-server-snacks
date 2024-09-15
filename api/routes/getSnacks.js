const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_HEADERS = {
  'apikey': SUPABASE_KEY,
  'Authorization': `Bearer ${SUPABASE_KEY}`,
};

app.get('/snacks', async (req, res) => {
  try {
    const { data } = await axios.get(`${SUPABASE_URL}/rest/v1/snacks`, {
      headers: SUPABASE_HEADERS,
    });
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching snacks');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});