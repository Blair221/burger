const express = require('express');
const exphbs = require('express-handlebars');

let PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function (){
    console.log(`successfully connected on port ${PORT}`);
});