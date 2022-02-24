const salesService = require('../services/salesService');

const getAll = async (_req, res) => {
    const sales = await salesService.getAll();
    return res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesService.findById(id);

  if (sale.err) return res.status(sale.code).json({ message: sale.err });

  return res.status(200).json(sale);
};

const create = async (req, res) => {
  const { quantity, name } = req.body;

  return res.status(200).json({ quantity, name });
};

module.exports = {
  getAll,
  findById,
  create,
};
