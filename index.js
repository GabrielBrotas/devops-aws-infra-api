const app = require('express')();
const cors = require('cors');

app.use(cors());

app.get('/health-check', (req, res) => {
    return res.status(200).json({ success: true })
})

app.get('/', (req, res) => {
    const env1 = process.env.ENV1;
    const env2 = process.env.ENV2;

    return res.status(200).json({ env1, env2 })
})

const PORT = 4000

app.listen(() => {
    console.log(`Server is running on port ${PORT}`);
})
