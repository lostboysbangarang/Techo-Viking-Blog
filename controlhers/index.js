const router = require(`express`).Router();
const routes = require(`./api`);

router.use(`./api`, apiRoutes);

module.exports = router;