const { Schema } = require("mongoose");

const Villain = new Schema(
  {
    name: { type: String, required: true },
    otherName: { type: String },
    age: { type: Number },
    aliveOrDeath: { type: String },
    mainEnemies: { type: String },
  },
  { timestamps: true }
);

module.exports = Villain;