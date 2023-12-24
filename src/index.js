import express from 'express';
import dotenv from 'dotenv';
import cors from "cors"

import bibliaRoutes from './routes/bibliaRoutes.js';
import capituloRoutes from './routes/capituloRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use('/api', bibliaRoutes);
app.use("/api", capituloRoutes);
app.use("/api", bookRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});