//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import {Thrift} from "./thrift";

var PostTxRequest = function(args) {
  this.tx = null;
  if (args) {
    if (args.tx !== undefined && args.tx !== null) {
      this.tx = args.tx;
    }
  }
};
PostTxRequest.prototype = {};
PostTxRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.tx = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PostTxRequest.prototype.write = function(output) {
  output.writeStructBegin('PostTxRequest');
  if (this.tx !== null && this.tx !== undefined) {
    output.writeFieldBegin('tx', Thrift.Type.STRING, 1);
    output.writeBinary(this.tx);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PostTxResponse = function(args) {
  this.txHash = null;
  if (args) {
    if (args.txHash !== undefined && args.txHash !== null) {
      this.txHash = args.txHash;
    }
  }
};
PostTxResponse.prototype = {};
PostTxResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.txHash = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PostTxResponse.prototype.write = function(output) {
  output.writeStructBegin('PostTxResponse');
  if (this.txHash !== null && this.txHash !== undefined) {
    output.writeFieldBegin('txHash', Thrift.Type.STRING, 1);
    output.writeString(this.txHash);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

export {
    PostTxRequest,
    PostTxResponse
}