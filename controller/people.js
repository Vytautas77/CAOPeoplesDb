const poepleModel = require("../models/people");

const ADD_PEOPLE = (req, res) => {
  const people = new poepleModel({
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
  });
  people
    .save()
    .then((dbResponse) => {
      return res
        .status(201)
        .json({ response: "User was added", user: dbResponse });
    })
    .catch((err) => {
      console.log("ERROR: ", err);
      res.status(500).json({ response: "Something went wrong!" });
    });
};

const GET_ALL_PEOPLES = (req, res) => {
  poepleModel.find().then((response) => {
    return res.send({ users: response });
  });
};
const GET_ALL_PEOPLE_BY_ID = (req, res) => {
  poepleModel.findById(req.params.id).then((response) => {
    return res.send({ user: response });
  });
};

//pavyzdys tinka visiems parametras
// const GET_ALL_PEOPLE_BY_ID = (req, res) => {
//   poepleModel.findOne({ _id: req.params.id }).then((response) => {
//     return res.send({ user: response });
//   });
// };

const UPDATE_PEOPLE = (req, res) => {
  poepleModel
    .updateOne({ _id: req.params.id }, { ...req.body })
    .then((response) => {
      if (response.nModified === 0) {
        return res.status(404).json({ status: "Task not found" });
      }
      return res
        .status(200)
        .json({ status: "Task was updated", response: response });
    })
    .catch((err) => {
      console.error("ERROR: ", err);
      return res.status(500).json({ status: "Something went wrong" });
    });
};
module.exports = {
  ADD_PEOPLE,
  GET_ALL_PEOPLES,
  GET_ALL_PEOPLE_BY_ID,
  UPDATE_PEOPLE,
};
