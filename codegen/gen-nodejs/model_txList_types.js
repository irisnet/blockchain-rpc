//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var model_common_ttypes = require('./model_common_types');


var ttypes = module.exports = {};
var TxListRequest = module.exports.TxListRequest = function(args) {
  this.address = null;
  this.page = null;
  this.perPage = null;
  this.status = null;
  this.type = null;
  this.startTime = null;
  this.endTime = null;
  this.sort = null;
  this.q = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.page !== undefined && args.page !== null) {
      this.page = args.page;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field page is unset!');
    }
    if (args.perPage !== undefined && args.perPage !== null) {
      this.perPage = args.perPage;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field perPage is unset!');
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.startTime !== undefined && args.startTime !== null) {
      this.startTime = args.startTime;
    }
    if (args.endTime !== undefined && args.endTime !== null) {
      this.endTime = args.endTime;
    }
    if (args.sort !== undefined && args.sort !== null) {
      this.sort = args.sort;
    }
    if (args.q !== undefined && args.q !== null) {
      this.q = args.q;
    }
  }
};
TxListRequest.prototype = {};
TxListRequest.prototype.read = function(input) {
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
        this.address = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.page = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.perPage = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.status = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.startTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.endTime = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.sort = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.q = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TxListRequest.prototype.write = function(output) {
  output.writeStructBegin('TxListRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.page !== null && this.page !== undefined) {
    output.writeFieldBegin('page', Thrift.Type.I64, 2);
    output.writeI64(this.page);
    output.writeFieldEnd();
  }
  if (this.perPage !== null && this.perPage !== undefined) {
    output.writeFieldBegin('perPage', Thrift.Type.I64, 3);
    output.writeI64(this.perPage);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRING, 4);
    output.writeString(this.status);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 5);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.startTime !== null && this.startTime !== undefined) {
    output.writeFieldBegin('startTime', Thrift.Type.STRING, 6);
    output.writeString(this.startTime);
    output.writeFieldEnd();
  }
  if (this.endTime !== null && this.endTime !== undefined) {
    output.writeFieldBegin('endTime', Thrift.Type.STRING, 7);
    output.writeString(this.endTime);
    output.writeFieldEnd();
  }
  if (this.sort !== null && this.sort !== undefined) {
    output.writeFieldBegin('sort', Thrift.Type.STRING, 8);
    output.writeString(this.sort);
    output.writeFieldEnd();
  }
  if (this.q !== null && this.q !== undefined) {
    output.writeFieldBegin('q', Thrift.Type.STRING, 9);
    output.writeString(this.q);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TxListResponse = module.exports.TxListResponse = function(args) {
  this.txs = null;
  if (args) {
    if (args.txs !== undefined && args.txs !== null) {
      this.txs = Thrift.copyList(args.txs, [null]);
    }
  }
};
TxListResponse.prototype = {};
TxListResponse.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.txs = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.TxListObject();
          elem6.read(input);
          this.txs.push(elem6);
        }
        input.readListEnd();
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

TxListResponse.prototype.write = function(output) {
  output.writeStructBegin('TxListResponse');
  if (this.txs !== null && this.txs !== undefined) {
    output.writeFieldBegin('txs', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.txs.length);
    for (var iter7 in this.txs)
    {
      if (this.txs.hasOwnProperty(iter7))
      {
        iter7 = this.txs[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TxListObject = module.exports.TxListObject = function(args) {
  this.txHash = null;
  this.time = null;
  this.height = null;
  this.sender = null;
  this.receiver = null;
  this.amount = null;
  this.type = null;
  this.status = null;
  this.ext = null;
  if (args) {
    if (args.txHash !== undefined && args.txHash !== null) {
      this.txHash = args.txHash;
    }
    if (args.time !== undefined && args.time !== null) {
      this.time = args.time;
    }
    if (args.height !== undefined && args.height !== null) {
      this.height = args.height;
    }
    if (args.sender !== undefined && args.sender !== null) {
      this.sender = new model_common_ttypes.Address(args.sender);
    }
    if (args.receiver !== undefined && args.receiver !== null) {
      this.receiver = new model_common_ttypes.Address(args.receiver);
    }
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = Thrift.copyList(args.amount, [model_common_ttypes.Coin]);
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.ext !== undefined && args.ext !== null) {
      this.ext = args.ext;
    }
  }
};
TxListObject.prototype = {};
TxListObject.prototype.read = function(input) {
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
        this.txHash = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.time = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.height = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.sender = new model_common_ttypes.Address();
        this.sender.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.receiver = new model_common_ttypes.Address();
        this.receiver.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.amount = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new model_common_ttypes.Coin();
          elem14.read(input);
          this.amount.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.status = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.ext = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TxListObject.prototype.write = function(output) {
  output.writeStructBegin('TxListObject');
  if (this.txHash !== null && this.txHash !== undefined) {
    output.writeFieldBegin('txHash', Thrift.Type.STRING, 1);
    output.writeString(this.txHash);
    output.writeFieldEnd();
  }
  if (this.time !== null && this.time !== undefined) {
    output.writeFieldBegin('time', Thrift.Type.STRING, 2);
    output.writeString(this.time);
    output.writeFieldEnd();
  }
  if (this.height !== null && this.height !== undefined) {
    output.writeFieldBegin('height', Thrift.Type.I64, 3);
    output.writeI64(this.height);
    output.writeFieldEnd();
  }
  if (this.sender !== null && this.sender !== undefined) {
    output.writeFieldBegin('sender', Thrift.Type.STRUCT, 4);
    this.sender.write(output);
    output.writeFieldEnd();
  }
  if (this.receiver !== null && this.receiver !== undefined) {
    output.writeFieldBegin('receiver', Thrift.Type.STRUCT, 5);
    this.receiver.write(output);
    output.writeFieldEnd();
  }
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.amount.length);
    for (var iter15 in this.amount)
    {
      if (this.amount.hasOwnProperty(iter15))
      {
        iter15 = this.amount[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 7);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRING, 8);
    output.writeString(this.status);
    output.writeFieldEnd();
  }
  if (this.ext !== null && this.ext !== undefined) {
    output.writeFieldBegin('ext', Thrift.Type.STRING, 9);
    output.writeString(this.ext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

