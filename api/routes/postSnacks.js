
app.use(express.json());

app.post('/snacks', async (req, res) => {
  const { name, description, price, category, inStock } = req.body;

  try {
    const { data } = await axios.post(
      `${SUPABASE_URL}/rest/v1/snacks`,
      { name, description, price, category, inStock },
      { headers: SUPABASE_HEADERS }
    );
    res.status(201).json(data);
  } catch (error) {
    res.status(500).send('Error adding snack');
  }
});