const express = require("express");
const db = require("../data/config");
const router = express.Router();
// const router = express();

// server.use(express.json());
function create(car) {
  //raw sql; INSERT INTO cars (registration,make,model,milage) values ('LA51ABE', 'Volvo', 'SC60', '50000');
  return db("cars")
    .insert(car)
    .then(ids => {
      return getAll();
    });
}
function getAll() {
  // raw SQL: select * from cars;
  return db.select("*").from("cars");
}
router.get("/", async (req, res) => {
  try {
    const data = await getAll();
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fatal error getting all cars" });
  }
});

//  //   .insert('cars' id)
router.post("/", async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Fatal error posting new car" });
  }
});
console.log("hello");
module.exports = router;
