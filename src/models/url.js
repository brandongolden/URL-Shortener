const db = require('./db');



exports.redirect = (payload, err, success) => {
	db.url.find({
		where: {
			shortened_url: payload.shortened_url,
		},
		// Find all relations in sequelize
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}





exports.create = (payload, err, success) => {
	db.url.create(payload).then(success).catch(err);
}

exports.findAll = (err, success) => {
	db.url.findAll().then(success).catch(err);
}

exports.find = (payload, err, success) => {
	db.url.find({
		where: {
			id: payload.id,
		},
		// Find all relations in sequelize
		include: [{
			all: true,
			nested: true,
		}],
	}).then(success).catch(err);
}

exports.update = (payload, err, success) => {
	db.url.find({
		where: {
			id: payload.id,
		}
	}).then( (existingData) => {
		existingData.updateAttributes(payload).then(success).catch(err);
	}).catch(err);
}

exports.destroy = (payload, err, success) => {
	db.url.destroy({
		where: {
			id: payload.id,
		}
	}).then(success).catch(err);
}