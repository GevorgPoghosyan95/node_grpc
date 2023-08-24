// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc__proto_calculator_pb = require('../../grpc/_proto/calculator_pb.js');

function serialize_AddRequest(arg) {
  if (!(arg instanceof grpc__proto_calculator_pb.AddRequest)) {
    throw new Error('Expected argument of type AddRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddRequest(buffer_arg) {
  return grpc__proto_calculator_pb.AddRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_AddResponse(arg) {
  if (!(arg instanceof grpc__proto_calculator_pb.AddResponse)) {
    throw new Error('Expected argument of type AddResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_AddResponse(buffer_arg) {
  return grpc__proto_calculator_pb.AddResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  add: {
    path: '/Calculator/Add',
    requestStream: false,
    responseStream: false,
    requestType: grpc__proto_calculator_pb.AddRequest,
    responseType: grpc__proto_calculator_pb.AddResponse,
    requestSerialize: serialize_AddRequest,
    requestDeserialize: deserialize_AddRequest,
    responseSerialize: serialize_AddResponse,
    responseDeserialize: deserialize_AddResponse,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
