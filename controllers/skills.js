const skills = require("../models/skill");

// Index action - GET /skills
function index(req, res) {
  res.render("skills/index", { skills });
}

// Show action - GET /skills/:id
function show(req, res) {
  const id = parseInt(req.params.id);
  const skill = skills.find((skill) => skill.id === id);

  if (skill) {
    res.render("skills/show", { skill });
  } else {
    res.status(404).send("Skill not found.");
  }
}

module.exports = {
  index,
  show,
};
