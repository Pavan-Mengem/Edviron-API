import { TransactionStatus } from "../models/transactionstatus.model.js";
import { Transaction } from "../models/transaction.model.js";

// Get All Transaction
export const GetAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const transactionStatuses = await TransactionStatus.find();

    const combinedData = transactions.map(transaction => {
      const status = transactionStatuses.find(status => status.custom_order_id === transaction.custom_order_id);
      return {
        ...transaction.toObject(),
        status: status ? status.status : null,
        payment_method: status ? status.payment_method : null,
        gateway: status ? status.gateway : null,
        bank_reference: status ? status.bank_reference : null,
      };
    });

    res.status(200).json(combinedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Transaction By School Id
export  const GetTransctionBySchool = async (req, res) => {
    try {
      const { school_id } = req.params;

      if (!school_id) {
        return res.status(400).json({ message: "School_id is required" });
      }
      const transactions = await Transaction.find({ school_id });
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }

}

// Transaction Status Check with Custom Order id
export const GetTransctionByCustomOrderId = async (req, res) => {
  try {
    const { custom_order_id } = req.params;

    if (!custom_order_id) {
        return res.status(400).json({ message: "custom_order_id is required" });
        }
    const transactions = await TransactionStatus.find({ custom_order_id });
    res.status(200).json(transactions);
    }
  catch (error) {
    res.status(500).json({ message: error.message });
    }
}

// Webhook endpoint to receive status updates for transactions
export const webhookStatusUpdate = async (req, res) => {
  try {
    const { custom_order_id, status } = req.body;

    if (!custom_order_id || !status) {
      return res.status(400).json({ message: "custom_order_id and status are required" });
    }

    const transaction = await TransactionStatus.findOneAndUpdate(
      { custom_order_id },
      { status },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST endpoint to allow manual updates of a transaction’s status
export const manualStatusUpdate = async (req, res) => {
  try {
    const { custom_order_id, status } = req.body;

    if (!custom_order_id || !status) {
      return res.status(400).json({ message: "custom_order_id and status are required" });
    }

    const transaction = await TransactionStatus.findOneAndUpdate(
      { custom_order_id },
      { status },
      { new: true }
    );

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


