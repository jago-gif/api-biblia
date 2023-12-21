import express from 'express';
import { getData, getVersiculo, getVersesBetween } from '../controllers/bibliaController.js';

const router = express.Router();

router.get('/datos', async (req, res) => {
  const { page, limit } = req.query;
  try {
    const data = await getData(page, limit);
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/versiculo/:idBook/:chapter/:verse', async (req, res) => {
    const { idBook, chapter, verse } = req.params;
    console.log(idBook, chapter, verse)
    try {
      const data = await getVersiculo(parseInt(idBook), parseInt(chapter), parseInt(verse));
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/versiculos-entre/:idBook/:chapter/:verse1/:verse2', async (req, res) => {
    const { idBook, chapter, verse1, verse2 } = req.params;
    try {
      const data = await getVersesBetween(idBook, chapter, verse1, verse2);
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

export default router;