
const express = require("express");
const app = express();
const mongo = require("./shared/connect");
const roomDetailsRouter = require("./routes/roomDetails");
const customerDetailsRouter = require("./routes/customerDetails");
const cors = require("cors");

app.use(express.json());
mongo.connect();
app.use(cors());

//app.use(authorize.AuthorizeUser);
app.use('/customerDetails', customerDetailsRouter )
app.use('/roomDetails', roomDetailsRouter )



app.listen(process.env.PORT || 3001);