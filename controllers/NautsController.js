const fs = require("fs");
const api = require('../api/nauts.json');

// Get all nauts
exports.getAllNauts = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts );
 });
}

// General Controllers
exports.getNautByName = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut] );
 });
}

exports.getNautProperName = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].name );
 });
}

exports.getNautRole = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].role );
 });
}

exports.getNautDifficulty = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].difficulty );
 });
}

exports.getNautDescription = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].description );
 });
}

exports.getNautImage = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].image_url );
 });
}

// Ability Controllers
exports.getNautAbilities = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].abilities );
 });
}

exports.getNautAbilityOne = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].abilities.one );
 });
}

exports.getNautAbilityTwo = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].abilities.two );
 });
}

exports.getNautAbilityAttack = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].abilities.attack );
 });
}

exports.getNautAbilityJump = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.nauts[req.params.naut].abilities.jump );
 });
}