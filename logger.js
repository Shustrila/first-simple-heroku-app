const winston = require("winston")

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.json(),
	defaultMeta: {
		date: new Date(),
		service: 'user-service'
	},
	transports: [
		new winston.transports.File({ filename: 'logs/combined.log' }),
		new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
	]
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple()
	}));
}

module.exports = logger
