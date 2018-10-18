const api = require('../api/battlefields.json');

// Get all battlefields
exports.getAllBattlefields = (req, res) => {
    res.json( api.battlefields );
}

// General Controllers
exports.getBattlefieldByName = (req, res) => {
    res.json( api.battlefields[req.params.battlefield] );
}

exports.getBattlefieldName = (req, res) => {
    res.json( {"name": api.battlefields[req.params.battlefield].name } );
}

exports.getBattlefieldDescription = (req, res) => {
    res.json( {"description": api.battlefields[req.params.battlefield].description } );
}

exports.getBattlefieldCreep = (req, res) => {
    res.json( {"creep": api.battlefields[req.params.battlefield].creep } );
}

exports.getBattlefieldHazard = (req, res) => {
    res.json( {"hazard": api.battlefields[req.params.battlefield].hazard } );
}

exports.getBattlefieldHazardText = (req, res) => {
    res.json( {"hazard_text": api.battlefields[req.params.battlefield].hazard_text } );
}

exports.getBattlefieldSplash = (req, res) => {
    res.json( {"splash_art": api.battlefields[req.params.battlefield].splash_art } );
}

exports.getBattlefieldMap = (req, res) => {
    res.json( {"map": api.battlefields[req.params.battlefield].map } );
}
