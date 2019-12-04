const fs = require('fs')
const path = require('path')

exports.prosesPost = (req, res) => {
	if (req.files) {
		let img = req.files.gambar
		let path = "./public/image/" + img.name

		img.mv(path,(err) => {
			if(err){
				console.log(err);
			}else{
				let name = req.body.nama
				let hobi = req.body.hobi
				res.send(`nama saya ${name} dan hobi saya adalah ${hobi} <br> <img src="../image/${ img.name }">`)
			}
		})
	}
}

