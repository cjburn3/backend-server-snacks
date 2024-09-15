app.delete('/snacks/:id', async (req, res) => {
    const snackId = req.params.id;
  
    try {
      const { data } = await axios.delete(`${SUPABASE_URL}/rest/v1/snacks?id=eq.${snackId}`, {
        headers: SUPABASE_HEADERS,
      });
      res.json({ message: 'Snack deleted', data });
    } catch (error) {
      res.status(500).send('Error deleting snack');
    }
  });