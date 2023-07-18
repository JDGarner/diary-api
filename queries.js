const { pool } = require('./database/database');

function getAllEntries(req, res, next) {
  pool.query('SELECT * FROM entries')
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

function getEntry(req, res, next) {
  const entryId = parseInt(req.params.id);

  pool.query('SELECT * FROM entries WHERE id = $1', entryId)
    .then(function (data) {
      res.status(200)
        .json(data);
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getAllEntries,
  getEntry
};
