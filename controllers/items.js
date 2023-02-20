const Item = require("../models/Item");
const asyncWrapper = require("../middleware/asyncWrapper");

const getItems = asyncWrapper(async (req, res, next) => {
  const items = await Item.find();
  res.status(200).json({ success: true, data: items });
});

const addItem = asyncWrapper(async (req, res, next) => {
  const item = await Item.create(req.body);
  res.status(201).json({ success: true, data: item });
});

const deleteItem = asyncWrapper(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return next(new Error("Item not found"));
  }
  res.status(200).json({ success: true, data: {} });
});

module.exports = {
  getItems,
  addItem,
  deleteItem,
};
