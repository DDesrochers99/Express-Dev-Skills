const skills = require("../models/skill");
module.exports = {
  index,
  show,
  new: newSkill,
  create,
};

// Index action - GET /skills
function index(req, res) {
  res.render("skills/index", { skills: skills.getAll() });
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
function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  skills.create(req.body);
  res.redirect("/skills");
}

