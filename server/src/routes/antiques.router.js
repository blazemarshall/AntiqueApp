const methodNotAllowed = require("../errors/methodNotAllowed")
const express = require('express')

 const router = express.Router();
const controller = require("./antiques.controller");

router
.route("/")
.get(controller.list)
.delete(controller.deleteAntique)
.all(methodNotAllowed)

router.route('/addantique')
.post(controller.create)
.all(methodNotAllowed)

router.route("/:antiqueId")
.get(controller.read)
.put(controller.update)
.all(methodNotAllowed)

module.exports=router;