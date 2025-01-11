# School Payment Dashboard API

This is a school payment dashboard API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Health Check](#health-check)
  - [Transactions](#transactions)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/school-payment-dashboard.git
    cd school-payment-dashboard
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/1) file in the root directory and add the following environment variables:
    ```env
    PORT=8000
    MONGODB_URI="your_mongodb_uri"
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=your_access_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    REFRESH_TOKEN_EXPIRY=10d
    ```

## Running the Server

To start the server in development mode, run:
```sh
npm run dev



Collecting workspace information

Here is a comprehensive API documentation for your repository's 

README.md

 file:

```md
# School Payment Dashboard API

This is a school payment dashboard API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
  - [Health Check](#health-check)
  - [Transactions](#transactions)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/school-payment-dashboard.git
    cd school-payment-dashboard
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a 

.env

 file in the root directory and add the following environment variables:
    ```env
    PORT=8000
    MONGODB_URI="your_mongodb_uri"
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=your_access_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    REFRESH_TOKEN_EXPIRY=10d
    ```

## Running the Server

To start the server in development mode, run:
```sh
npm run dev
```

## API Endpoints

### Health Check

#### GET `/api/v1/healthcheck`

**Description:** Returns the health status of the API.

**Response:**
- `200 OK` - API is healthy.

### Transactions

#### GET `/api/v1/transactions/all`

**Description:** Retrieves all transactions.

**Response:**
- `200 OK` - Returns an array of transactions.
- 

500 Internal Server Error

 - An error occurred while retrieving transactions.

#### GET `/api/v1/transactions/:school_id`

**Description:** Retrieves transactions by school ID.

**Parameters:**
- 

school_id

 (string) - The ID of the school.

**Response:**
- `200 OK` - Returns an array of transactions for the specified school.
- `400 Bad Request` - 

school_id

 is required.
- 

500 Internal Server Error

 - An error occurred while retrieving transactions.

#### GET `/api/v1/transactions/status/:custom_order_id`

**Description:** Retrieves transaction status by custom order ID.

**Parameters:**
- 

custom_order_id

 (string) - The custom order ID.

**Response:**
- `200 OK` - Returns an array of transaction statuses for the specified custom order ID.
- `400 Bad Request` - 

custom_order_id

 is required.
- 

500 Internal Server Error

 - An error occurred while retrieving transaction statuses.

#### POST `/api/v1/transactions/webhook-status-update`

**Description:** Webhook endpoint to receive status updates for transactions.

**Request Body:**
- 

custom_order_id

 (string) - The custom order ID.
- 

status

 (string) - The status of the transaction.

**Response:**
- `200 OK` - Returns the updated transaction status.
- `400 Bad Request` - 

custom_order_id

 and 

status

 are required.
- `404 Not Found` - Transaction not found.
- 

500 Internal Server Error

 - An error occurred while updating the transaction status.

#### POST `/api/v1/transactions/status-update`

**Description:** Allows manual updates of a transaction’s status.

**Request Body:**
- 

custom_order_id

 (string) - The custom order ID.
- 

status

 (string) - The status of the transaction.

**Response:**
- `200 OK` - Returns the updated transaction status.
- `400 Bad Request` - 

custom_order_id

 and 

status

 are required.
- `404 Not Found` - Transaction not found.
- 

500 Internal Server Error

 - An error occurred while updating the transaction status.


