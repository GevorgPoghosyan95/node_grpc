const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.join(__dirname, 'grpc/_proto/calculator.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const calculatorProto = grpc.loadPackageDefinition(packageDefinition).Calculator;

const server = new grpc.Server();

server.addService(calculatorProto.service, {
    Add: (call, callback) => {
        const num1 = call.request.num1;
        const num2 = call.request.num2;
        const result = num1 + num2;''
        callback(null, { result });
    },
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Server running at http://127.0.0.1:50051');
    server.start();
});