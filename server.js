const express = require("express");
const app = express();

app.use( express.static(".") );

const server = app.listen(9900, () => {
	let host = server.address().address;
	host = (host === "::" ? "localhost" : host);
	const port = server.address().port;

	console.log(`Server running at http://${host}:${port}...`)
})