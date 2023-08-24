// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc__proto_messages_pb = require('../../grpc/_proto/messages_pb.js');

function serialize_Message(arg) {
  if (!(arg instanceof grpc__proto_messages_pb.Message)) {
    throw new Error('Expected argument of type Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Message(buffer_arg) {
  return grpc__proto_messages_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Response(arg) {
  if (!(arg instanceof grpc__proto_messages_pb.Response)) {
    throw new Error('Expected argument of type Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Response(buffer_arg) {
  return grpc__proto_messages_pb.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessengerService = exports.MessengerService = {
  sendMessage: {
    path: '/Messenger/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: grpc__proto_messages_pb.Message,
    responseType: grpc__proto_messages_pb.Response,
    requestSerialize: serialize_Message,
    requestDeserialize: deserialize_Message,
    responseSerialize: serialize_Response,
    responseDeserialize: deserialize_Response,
  },
};

exports.MessengerClient = grpc.makeGenericClientConstructor(MessengerService);
