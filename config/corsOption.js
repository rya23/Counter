const whitelist = ['https://www.google.com', 'http://localhost:3000', 'http://localhost:3000/index.js']

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        }
        else {
            callback(new Error('Not allowed by cors'));
        }

    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;
