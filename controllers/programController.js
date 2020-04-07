const programList = require('../model/programs');

exports.programs = (req, res) => {
  const currentUrl = '/programs';
  res.render('programs', {
    programs: programList.programs,
    currentUrl,
  });
};

exports.program = (req, res) => {
  let item;
  programList.programs.map((program) => {
    if (program.id.toString() === req.params.id) {
      item = program;
    }
  });
  const currentUrl = '/programs';
  res.render('program', { program: item, currentUrl });
};
