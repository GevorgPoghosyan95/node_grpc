const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'grpc/_proto/calculator.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

const client = new calculatorProto('127.0.0.1:50051', grpc.credentials.createInsecure());

const addNums = (num1, num2) => {
    return new Promise((resolve, reject) => {
        client.Add({ num1, num2 }, (error, response) => {
            if (!error) {
                resolve(response.result);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = {addNums}
