const fs = require("fs");
const api = require('../api/battlefields.json');

// Get all battlefields
exports.getAllBattlefields = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields );
 });
}

// General Controllers
exports.getBattlefieldByName = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield] );
 });
}

exports.getBattlefieldName = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].name );
 });
}

exports.getBattlefieldDescription = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].description );
 });
}

exports.getBattlefieldCreep = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].creep );
 });
}

exports.getBattlefieldHazard = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].hazard );
 });
}

exports.getBattlefieldHazardText = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].hazard_text );
 });
}

exports.getBattlefieldSplash = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].splash_art );
 });
}

exports.getBattlefieldMap = (req, res) => {
  fs.readFile( api.toString(), 'utf8', function (err, data) {
    res.json( api.battlefields[req.params.battlefield].map );
 });
}