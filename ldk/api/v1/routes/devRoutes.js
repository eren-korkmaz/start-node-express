const router = require("express").Router();

const devController = require("../conrollers/devController");

router.get("/", devController.index);
router.get("/vlog", devController.blogtitles);

module.exports = router;
