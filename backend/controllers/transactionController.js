const Transaction = require("../models/Transaction");

// @desc Get all transactions
// @route GET /api/transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions" });
  }
};

// @desc Get single transaction
// @route GET /api/transactions/:id
exports.getTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) return res.status(404).json({ message: "Not found" });
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transaction" });
  }
};

// @desc Create new transaction
// @route POST /api/transactions
exports.addTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const transaction = new Transaction({ title, amount, date, category });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error creating transaction" });
  }
};

// @desc Update transaction
// @route PUT /api/transactions/:id
exports.updateTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { title, amount, date, category },
      { new: true }
    );
    if (!transaction) return res.status(404).json({ message: "Not found" });
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: "Error updating transaction" });
  }
};

// @desc Delete transaction
// @route DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction" });
  }
};
