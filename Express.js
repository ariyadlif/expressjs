const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route')
const uploadData = require('express-fileupload')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(uploadData())

app.get('/',(req, res) => {
	res.render('index');
})

app.use('/dilo', routes)

/*app.post('/proses', (req, res) => {
	let name = req.body.nama
	let hobi = req.body.hobi

	res.send(`nama saya ${name} dan hobi saya adalah ${hobi}`)
})*/

app.listen(8002, () => {
	console.log('Server di 8002');
});