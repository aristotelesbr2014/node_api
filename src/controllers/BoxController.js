const Box = require('../models/Box');

class BoxController {
  async store(req, res) {
    const box = await Box.create(req.body);

    return res.json(box);
  }

  async show(req, res) {
    // populate('files') retorna os dados da associação
    // const box = await Box.findById(req.params.id).populate('files');
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: { sort: { createdAt: -1 } },
    });

    return res.json(box);
  }
}

module.exports = new BoxController();
