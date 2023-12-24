import express from 'express';
import { getChapterByBook } from "../controllers/capituloController.js";
const router = express.Router();
router.get('/capitulo/:idBook', async (req, res) => {
    const { idBook, } = req.params;
    console.log(idBook);
    console.log("estamos en controller");
    try {
      const data = await getChapterByBook(parseInt(idBook));
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  export default router;