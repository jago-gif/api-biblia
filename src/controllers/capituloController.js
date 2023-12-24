import db from '../config/db.js';

const getChapterByBook = async (idBook) => {
  try {
    const connection = await db.getConnection();
    console.log("entramos al sql");
    const [results] = await connection.query(
      "SELECT DISTINCT CHAPTER FROM bible_verses where IDBOOK = ?",
      [idBook]
    );
    connection.release();
    return results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw new Error("Error al obtener datos");
  }
};

export { getChapterByBook };
