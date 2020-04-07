const express = require('express'); // required files
const path = require('path');
var cors = require('cors');

//instanciate expess
const app = express();

app.use(express.json());
app.use(cors());

//set view engine
app.set('view engine', 'pug');
// app.set('views', './views');

//Set static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', require('./routes/pageRouter'));
app.use('/programs', cors(), require('./routes/programRouter'));

//Set port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
