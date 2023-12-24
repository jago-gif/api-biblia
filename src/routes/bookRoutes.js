import express from "express";
import { getAllbook, getBooksNew, getBooksOld } from "../controllers/bookController.js";
const router = express.Router();
router.get("/book/all", async (req, res) => {
  try {
    const data = await getAllbook();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/book/new", async (req, res) => {
  try {
    const data = await getBooksNew();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/book/old", async (req, res) => {
  try {
    const data = await getBooksOld();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
