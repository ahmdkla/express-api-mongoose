const { Subject } = require("../../models");
const objectId = require("mongodb").ObjectId

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Subject.find({});
      res.status(200).json({ message: "Show Data Subject", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  addOne: async (req, res) => {
    try {
      const result = await Subject.create(req.body);

      res.status(200).json({ message: "Add Data Subject", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getByEmail: async (req, res) => {
    try {
      const result = await Subject.find({ email: req.params.email }).populate(
        "users"
      );

      res.status(200).json({ message: "Show all subject by id", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Subject.remove({ _id: objectId(id) });

      res
        .status(200)
        .json({
          message: `Data succesfully delete with id ${id}`,
          data: result
        });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Subject.update(
        { _id: objectId(id) },
        { $set: req.body }
      );

      res
        .status(200)
        .json({
          message: `Data succesfully update with id ${id}`,
          data: result
        });
    } catch (error) {
      console.log(error);
    }
  }
};
