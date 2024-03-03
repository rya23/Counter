const whitelist = ['https://counter-beryl-kappa.vercel.app/', 'https://counter-gyel.onrender.com', "http://localhost:3000"]

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
