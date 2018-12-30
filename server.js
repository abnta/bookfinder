const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));

const port = process.env.PORT || 3000 ;

app.get('/',(req,res)=>{
    res
        .render('home.handlebars')
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});