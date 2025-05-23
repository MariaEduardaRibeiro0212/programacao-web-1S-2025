const espress = require(`express`);
const router = espress.Router();
const agendamentoController = require(`../controllers/agendamentoController`);

router.get(`/`, agendamentoController.getIndexView);
router.post('/agendar_consulta', agendamentoController.postAgendarConsulta);

module.exports = router;