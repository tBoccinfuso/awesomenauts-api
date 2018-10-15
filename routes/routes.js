const express = require('express');
const router = express.Router();

const nautsController = require('../controllers/NautsController');
const battlefieldsController = require('../controllers/MapsController');

router.get('/', function (req, res) {
  res.end(`Awesomenauts API
By: T.Boccinfuso 
www.twitter.com/boccinfusoT`);
});

// Get all nauts
router.get('/nauts', nautsController.getAllNauts)

// Get all battlefields
router.get('/battlefields', battlefieldsController.getAllBattlefields)

// Get battlefield by name
router.get('/battlefield/:battlefield', battlefieldsController.getBattlefieldByName)
router.get('/battlefield/:battlefield/name', battlefieldsController.getBattlefieldName)
router.get('/battlefield/:battlefield/description', battlefieldsController.getBattlefieldDescription)
router.get('/battlefield/:battlefield/creep', battlefieldsController.getBattlefieldCreep)
router.get('/battlefield/:battlefield/hazard', battlefieldsController.getBattlefieldHazard)
router.get('/battlefield/:battlefield/hazard_text', battlefieldsController.getBattlefieldHazardText)
router.get('/battlefield/:battlefield/splash', battlefieldsController.getBattlefieldSplash)
router.get('/battlefield/:battlefield/map', battlefieldsController.getBattlefieldMap)

// Get naut by name
router.get('/naut/:naut', nautsController.getNautByName)
router.get('/naut/:naut/role', nautsController.getNautRole)
router.get('/naut/:naut/difficulty', nautsController.getNautDifficulty)
router.get('/naut/:naut/description', nautsController.getNautDescription)
router.get('/naut/:naut/image', nautsController.getNautImage)
router.get('/naut/:naut/name', nautsController.getNautProperName)

// Get abilities by name
router.get('/naut/:naut/abilities', nautsController.getNautAbilities)
router.get('/naut/:naut/abilities/one', nautsController.getNautAbilityOne)
router.get('/naut/:naut/abilities/two', nautsController.getNautAbilityTwo)
router.get('/naut/:naut/abilities/attack', nautsController.getNautAbilityAttack)
router.get('/naut/:naut/abilities/jump', nautsController.getNautAbilityJump)


module.exports = router;
