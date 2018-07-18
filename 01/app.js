var express = require('express')
var app = express()

app.get('/', function (req, res) {
	res.send(
		`
            <div style="color: red">
                Hello express!
            </div>
        `
	)
})

app.listen(3000)
