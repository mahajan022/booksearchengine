const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.static(path.join(__dirname, '/public')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});