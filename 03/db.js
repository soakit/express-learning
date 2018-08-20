var userRep = {
	a: {
		name: 'user001'
	},
	b: {
		name: 'user002'
	}
}

module.exports = {
	getUserById(req, res, next) {
		const id = req.params.id
		const user = userRep[id]
		if (user) {
			req.user = user
		} else {
			res.send(404)
        }
        next()
	}
}
