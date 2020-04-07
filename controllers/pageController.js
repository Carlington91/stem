exports.index = (req, res) => {
  const title = 'Welcome to';
  const currentUrl = '/';
  res.render('index', { title, currentUrl });
};

//About Controller
exports.about = (req, res) => {
  const currentUrl = '/about';
  res.render('about', { currentUrl });
};

//contact Controller
exports.contact = (req, res) => {
  const currentUrl = '/contact';
  res.render('contact', { currentUrl });
};

//termsController
exports.terms = (req, res) => {
  res.render('terms');
};

//privacy Controller
exports.privacy = (req, res) => {
  res.render('privacy');
};
