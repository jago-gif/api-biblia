import db from '../config/db.js';

const getData = async (page = 1, limit = 10) => {
  const offset = (page - 1) * limit;

  try {
    const connection = await db.getConnection();
    const [results] = await connection.query('SELECT * FROM bible_verses LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)]);
    connection.release();
    return results;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw new Error('Error al obtener datos');
  }
};

const getVersiculo = async (idBook, chapter, verse) => {
  
    try {
      const connection = await db.getConnection();
      const [results] = await connection.query(      'SELECT * FROM bible_verses WHERE idBook = ? AND chapter = ? AND verse = ?',[idBook, chapter, verse]);
      connection.release();
      return results;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw new Error('Error al obtener datos');
    }
  };

  const getVersesBetween = async (idBook, chapter, verse1, verse2) => {
    try {
      const connection = await db.getConnection();
      const [results] = await connection.query(
        'SELECT * FROM bible_verses WHERE idBook = ? AND chapter = ? AND verse BETWEEN ? AND ?',
        [idBook, chapter, verse1, verse2]
      );
      connection.release();
      return results; // Devuelve todos los versículos que cumplen con el criterio
    } catch (error) {
      console.error('Error al obtener versículos entre los valores dados:', error);
      throw new Error('Error al obtener versículos entre los valores dados');
    }
  };

  const getVersesByBookAndChapter = async (idBook, chapter) => {
    try {
      const connection = await db.getConnection();
      const [results] = await connection.query(
        "SELECT * FROM bible_verses WHERE idBook = ? AND chapter = ? ",
        [idBook, chapter,]
      );
      connection.release();
      return results; 
    } catch (error) {
      console.error(
        "Error al obtener versículos entre los valores dados:",
        error
      );
      throw new Error("Error al obtener versículos entre los valores dados");
    }
  };
  
export { getData, getVersiculo, getVersesBetween, getVersesByBookAndChapter };
