app.put('/snacks/:id', async (req, res) => {
    const snackId = req.params.id;
    const { name, description, price, category, inStock } = req.body;
  
    try {
      const { data } = await axios.patch(
        `${SUPABASE_URL}/rest/v1/snacks?id=eq.${snackId}`,
        { name, description, price, category, inStock },
        { headers: SUPABASE_HEADERS }
      );
      res.json(data);
    } catch (error) {
      res.status(500).send('Error updating snack');
    }
  });
  