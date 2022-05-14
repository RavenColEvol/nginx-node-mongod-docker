const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log('Request received here.');
    next();
});
app.use(require('./routes/todo.routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server listening on port ${PORT}`);
    try {
        await require('./db').connect();
    }catch(err) { console.log(err); }
})