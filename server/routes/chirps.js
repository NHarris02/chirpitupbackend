const express = require("express");
const router = express.Router();
import database from "../database";


router.get("/:id?", async (req, res) => {
  const id = req.params.id;

  try {
    if (id) {
      res.json(await database.chirpr.one(id));
    } else {
      res.json(await database.chirpr.all());
    }
  } catch (e) {
    console.log(e);
    res.send(500);
  }
});


router.post("/", async (req, res) => {
  const body = req;

  try {
    res.json(await database.chirpr.one(body));
  } catch (e) {
    console.log(e);
    res.send(500);
  }
});

export default router;