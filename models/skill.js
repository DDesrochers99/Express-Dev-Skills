const skills = [
  { id: 1, name: "JavaScript", experience: "beginner" },
  { id: 2, name: "HTML", experience: "beginner" },
  { id: 3, name: "CSS", experience: "beginner" },
  { id: 4, name: "w3schools", experience: "beginner" },
];

module.exports = {
  getAll,
  findSkillById,
  create,
};

function findSkillById(id) {
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getAll() {
  console.log(skills);
  return skills;
}