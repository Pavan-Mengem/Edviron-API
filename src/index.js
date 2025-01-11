
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from './app.js'
import csv from 'csv-parser';
import fs from 'fs';
import { TransactionStatus } from "./models/transactionstatus.model.js";
import { Transaction } from "./models/transaction.model.js";


dotenv.config()



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})




//  Data Import Script (run separately for CSV import)


const importCSV = (filePath) => {
  const transactions = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => transactions.push(data))
    .on('end', async () => {
      try {
        await Transaction.insertMany(transactions);
        console.log('CSV data imported successfully');
      } catch (err) {
        console.error('CSV Import Failed:', err);
      }
    });
};

// Uncomment for  import data.
//importCSV('./src/Data/transactions.csv');