import mongoose, { Schema } from "mongoose";

const transactionStatusSchema = new Schema(
    {
        collect_id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        payment_method: {
            type: String,
            required: true,
        },
        gateway: {
            type: String,
            required: true,
        },
        bank_reference: {
            type: String,
            required: true,
        },
        custom_order_id: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);




export const TransactionStatus = mongoose.model("Transactionstatus", transactionStatusSchema)