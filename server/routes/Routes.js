const router=require("express").Router();
const {chat} = require("../controllers/Controller");

router.get("/chat", chat);

module.exports=router;