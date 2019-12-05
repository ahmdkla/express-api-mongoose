const router = require("express").Router();

router.get("/", require("./subjectController").getAll);
router.get("/email/:email", require("./subjectController").getByEmail);
router.post("/", require("./subjectController").addOne);
router.delete("/:id", require("./subjectController").deleteOne);
router.put("/:id", require("./subjectController").updateOne);

module.exports = router;
