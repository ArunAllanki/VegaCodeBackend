const express = require("express");
const router = express.Router();

const fItemModel = require("../Models/fItems");
const mItemModel = require("../Models/mItems");

router.get("/getAllfItems", async (req, res) => {
  try {
    const allItems = await fItemModel.find({});
    res.status(200).json(allItems);
  } catch (error) {
    console.log(`Error getting items:${error}`);
    res.status(500).json({ message: `Error getting items:${error}` });
  }
});

router.post("/addfItems", async (req, res) => {
  try {
    var { name, quantity, units } = req.body;
    const fItem = new fItemModel({ name, quantity, units });
    await fItem
      .save()
      .then((result) => res.json(result))
      .catch((err) => console.log(err, "Error while saving fItem"));
  } catch (error) {
    console.log(`Error getting items:${error}`);
    res.status(500).json({ message: `Error getting items:${error}` });
  }
});


router.post("/addmItems", async (req, res) => {
  try {
    var { name, quantity, units } = req.body;
    const fItem = new mItemModel({ name, quantity, units });
    await fItem
      .save()
      .then((result) => res.json(result))
      .catch((err) => console.log(err, "Error while saving fItem"));
  } catch (error) {
    console.log(`Error getting items:${error}`);
    res.status(500).json({ message: `Error getting items:${error}` });
  }
});


router.get("/getAllmItems", async (req, res) => {
  try {
    const allItems = await mItemModel.find({});
    res.status(200).json(allItems);
  } catch (error) {
    console.log(`Error getting items:${error}`);
    res.status(500).json({ message: `Error getting items:${error}` });
  }
});

router.delete("/delfItem", async (req, res) => {
  try {
    const { Id } = req.body;
    fItemModel
      .findByIdAndDelete(Id)
      .then((response) => res.status(200).json(response));
  } catch (error) {
    console.log("Error while deleting Item");
    res.status(500).json({ message: "Error while deleting Item" });
  }
});

module.exports = router;
