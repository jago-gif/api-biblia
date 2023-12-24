import db from "../config/db.js";

const getAllbook = async () => {
  try {
    const connection = await db.getConnection();
    const [results] = await connection.query(
      "SELECT * FROM bible_books"
    );
    connection.release();
    return results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw new Error("Error al obtener datos");
  }
};

const getBooksNew = async () => {
  try {
    const connection = await db.getConnection();
    const [results] = await connection.query(
      "SELECT * FROM bible_books where testament = 'N'"
    );
    connection.release();
    return results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw new Error("Error al obtener datos");
  }
};

const getBooksOld = async () => {
  try {
    const connection = await db.getConnection();
    const [results] = await connection.query(
      "SELECT * FROM bible_books where testament = 'O'"
    );
    connection.release();
    return results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    throw new Error("Error al obtener datos");
  }
};

export { getAllbook, getBooksNew, getBooksOld };
