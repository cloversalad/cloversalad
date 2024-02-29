const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'csadmin',
  port: 5432,
});

// Testez la connexion à la base de données
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Erreur lors de la connexion à PostgreSQL', err);
  } else {
    console.log('Connecté à PostgreSQL');
  }
});

// Votre application Express commence ici
app.get('/', (req, res) => {
  // Utilisez la connexion pool pour exécuter des requêtes SQL
  pool.query('SELECT * FROM ma_table', (err, result) => {
    if (err) {
      console.error('Erreur lors de la requête SQL', err);
      res.status(500).send('Erreur serveur');
    } else {
      // Traitez les données de résultat ici et renvoyez la réponse
      res.json(result.rows);
    }
  });
});

// Démarrez le serveur Express
app.listen(port, () => {
  console.log(`Serveur Express écoutant sur le port ${port}`);
});
