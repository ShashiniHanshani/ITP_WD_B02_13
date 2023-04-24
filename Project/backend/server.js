const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

//get database connection
const dbo = require("./db/conn");

//get routes files

app.use("/client", require("./routes/client/record"));
app.use("/loyalty", require("./routes/loyalty/record"));
app.use("/feedback", require("./routes/feedback/record"));

app.use("/employee", require("./routes/employee/record"));

app.use("/template", require("./routes/template/record"));
app.use("/productType", require("./routes/productType/record"));
app.use("/printType", require("./routes/printType/record"));
app.use("/material", require("./routes/material/record"));

app.use("/order", require("./routes/order/record"));


app.listen(PORT, () => {
	//perform connection to database
	dbo.connectToServer(function (err) {
		if (err) console.error(err);
	});
	console.log("................");
	console.log(`Server is up and running on port ${PORT}`);
}); 