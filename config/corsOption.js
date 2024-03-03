const whitelist = ['https://counter-beryl-kappa.vercel.app/']

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
