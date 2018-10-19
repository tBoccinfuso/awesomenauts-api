const api = require('../api/nauts.json');

// Get all nauts
exports.getAllNauts = (req, res) => {
    res.json( api.nauts );
}

// General Controllers
exports.getNautByName = (req, res) => {
    res.json( api.nauts[req.params.naut] );
}

exports.getNautProperName = (req, res) => {
    res.json( {"name": api.nauts[req.params.naut].name } );
}

exports.getNautRole = (req, res) => {
    res.json( {"role": api.nauts[req.params.naut].role } );
}

exports.getNautDifficulty = (req, res) => {
    res.json( {"difficulty": api.nauts[req.params.naut].difficulty } );
}

exports.getNautDescription = (req, res) => {
    res.json( {"description": api.nauts[req.params.naut].description } );
}

exports.getNautImage = (req, res) => {
    res.json( {"image_url": api.nauts[req.params.naut].image_url } );
}

// Ability Controllers
exports.getNautAbilities = (req, res) => {
    res.json( api.nauts[req.params.naut].abilities );
}

exports.getNautAbilityOne = (req, res) => {
    res.json( api.nauts[req.params.naut].abilities.one );
}

exports.getNautAbilityTwo = (req, res) => {
    res.json( api.nauts[req.params.naut].abilities.two );
}

exports.getNautAbilityAttack = (req, res) => {
    res.json( api.nauts[req.params.naut].abilities.attack );
}

exports.getNautAbilityJump = (req, res) => {
    res.json( api.nauts[req.params.naut].abilities.jump );
}
