const express = require(`express`);
const app = express();
const db = require(`../config/db`);
const port = 5000;

const router = express.Router();

// TEST GET
router.get("/", (req, res) => {
  db.query("SELECT * FROM aquaponik", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

module.exports = router;
