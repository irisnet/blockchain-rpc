//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Coin = module.exports.Coin = function(args) {
  this.amount = null;
  this.denom = null;
  if (args) {
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = args.amount;
    }
    if (args.denom !== undefined && args.denom !== null) {
      this.denom = args.denom;
    }
  }
};
Coin.prototype = {};
Coin.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.DOUBLE) {
        this.amount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.denom = input.readString();
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

Coin.prototype.write = function(output) {
  output.writeStructBegin('Coin');
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.amount);
    output.writeFieldEnd();
  }
  if (this.denom !== null && this.denom !== undefined) {
    output.writeFieldBegin('denom', Thrift.Type.STRING, 2);
    output.writeString(this.denom);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Address = module.exports.Address = function(args) {
  this.chain = null;
  this.app = null;
  this.addr = null;
  if (args) {
    if (args.chain !== undefined && args.chain !== null) {
      this.chain = args.chain;
    }
    if (args.app !== undefined && args.app !== null) {
      this.app = args.app;
    }
    if (args.addr !== undefined && args.addr !== null) {
      this.addr = args.addr;
    }
  }
};
Address.prototype = {};
Address.prototype.read = function(input) {
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
        this.chain = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.app = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.addr = input.readString();
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

Address.prototype.write = function(output) {
  output.writeStructBegin('Address');
  if (this.chain !== null && this.chain !== undefined) {
    output.writeFieldBegin('chain', Thrift.Type.STRING, 1);
    output.writeString(this.chain);
    output.writeFieldEnd();
  }
  if (this.app !== null && this.app !== undefined) {
    output.writeFieldBegin('app', Thrift.Type.STRING, 2);
    output.writeString(this.app);
    output.writeFieldEnd();
  }
  if (this.addr !== null && this.addr !== undefined) {
    output.writeFieldBegin('addr', Thrift.Type.STRING, 3);
    output.writeString(this.addr);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Fee = module.exports.Fee = function(args) {
  this.amount = null;
  this.denom = null;
  if (args) {
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = args.amount;
    }
    if (args.denom !== undefined && args.denom !== null) {
      this.denom = args.denom;
    }
  }
};
Fee.prototype = {};
Fee.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.DOUBLE) {
        this.amount = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.denom = input.readString();
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

Fee.prototype.write = function(output) {
  output.writeStructBegin('Fee');
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.amount);
    output.writeFieldEnd();
  }
  if (this.denom !== null && this.denom !== undefined) {
    output.writeFieldBegin('denom', Thrift.Type.STRING, 2);
    output.writeString(this.denom);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Memo = module.exports.Memo = function(args) {
  this.id = null;
  this.text = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
  }
};
Memo.prototype = {};
Memo.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readBinary();
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

Memo.prototype.write = function(output) {
  output.writeStructBegin('Memo');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 2);
    output.writeBinary(this.text);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Tx = module.exports.Tx = function(args) {
  this.sequence = null;
  this.sender = null;
  this.receiver = null;
  this.amount = null;
  this.fee = null;
  this.memo = null;
  this.type = null;
  this.txHash = null;
  this.time = null;
  this.height = null;
  this.status = null;
  this.ext = null;
  if (args) {
    if (args.sequence !== undefined && args.sequence !== null) {
      this.sequence = args.sequence;
    }
    if (args.sender !== undefined && args.sender !== null) {
      this.sender = new ttypes.Address(args.sender);
    }
    if (args.receiver !== undefined && args.receiver !== null) {
      this.receiver = new ttypes.Address(args.receiver);
    }
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = Thrift.copyList(args.amount, [ttypes.Coin]);
    }
    if (args.fee !== undefined && args.fee !== null) {
      this.fee = new ttypes.Fee(args.fee);
    }
    if (args.memo !== undefined && args.memo !== null) {
      this.memo = new ttypes.Memo(args.memo);
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.txHash !== undefined && args.txHash !== null) {
      this.txHash = args.txHash;
    }
    if (args.time !== undefined && args.time !== null) {
      this.time = args.time;
    }
    if (args.height !== undefined && args.height !== null) {
      this.height = args.height;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.ext !== undefined && args.ext !== null) {
      this.ext = args.ext;
    }
  }
};
Tx.prototype = {};
Tx.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.sequence = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.sender = new ttypes.Address();
        this.sender.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.receiver = new ttypes.Address();
        this.receiver.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.amount = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Coin();
          elem6.read(input);
          this.amount.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.fee = new ttypes.Fee();
        this.fee.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRUCT) {
        this.memo = new ttypes.Memo();
        this.memo.read(input);
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
        this.txHash = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRING) {
        this.time = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.I64) {
        this.height = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.status = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.ext = input.readBinary();
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

Tx.prototype.write = function(output) {
  output.writeStructBegin('Tx');
  if (this.sequence !== null && this.sequence !== undefined) {
    output.writeFieldBegin('sequence', Thrift.Type.I64, 1);
    output.writeI64(this.sequence);
    output.writeFieldEnd();
  }
  if (this.sender !== null && this.sender !== undefined) {
    output.writeFieldBegin('sender', Thrift.Type.STRUCT, 2);
    this.sender.write(output);
    output.writeFieldEnd();
  }
  if (this.receiver !== null && this.receiver !== undefined) {
    output.writeFieldBegin('receiver', Thrift.Type.STRUCT, 3);
    this.receiver.write(output);
    output.writeFieldEnd();
  }
  if (this.amount !== null && this.amount !== undefined) {
    output.writeFieldBegin('amount', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRUCT, this.amount.length);
    for (var iter7 in this.amount)
    {
      if (this.amount.hasOwnProperty(iter7))
      {
        iter7 = this.amount[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.fee !== null && this.fee !== undefined) {
    output.writeFieldBegin('fee', Thrift.Type.STRUCT, 5);
    this.fee.write(output);
    output.writeFieldEnd();
  }
  if (this.memo !== null && this.memo !== undefined) {
    output.writeFieldBegin('memo', Thrift.Type.STRUCT, 6);
    this.memo.write(output);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.STRING, 7);
    output.writeString(this.type);
    output.writeFieldEnd();
  }
  if (this.txHash !== null && this.txHash !== undefined) {
    output.writeFieldBegin('txHash', Thrift.Type.STRING, 8);
    output.writeString(this.txHash);
    output.writeFieldEnd();
  }
  if (this.time !== null && this.time !== undefined) {
    output.writeFieldBegin('time', Thrift.Type.STRING, 9);
    output.writeString(this.time);
    output.writeFieldEnd();
  }
  if (this.height !== null && this.height !== undefined) {
    output.writeFieldBegin('height', Thrift.Type.I64, 10);
    output.writeI64(this.height);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRING, 11);
    output.writeString(this.status);
    output.writeFieldEnd();
  }
  if (this.ext !== null && this.ext !== undefined) {
    output.writeFieldBegin('ext', Thrift.Type.STRING, 12);
    output.writeBinary(this.ext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Exception = module.exports.Exception = function(args) {
  Thrift.TException.call(this, "Exception");
  this.name = "Exception";
  this.errCode = null;
  this.errMsg = null;
  if (args) {
    if (args.errCode !== undefined && args.errCode !== null) {
      this.errCode = args.errCode;
    }
    if (args.errMsg !== undefined && args.errMsg !== null) {
      this.errMsg = args.errMsg;
    }
  }
};
Thrift.inherits(Exception, Thrift.TException);
Exception.prototype.name = 'Exception';
Exception.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.errCode = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.errMsg = input.readString();
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

Exception.prototype.write = function(output) {
  output.writeStructBegin('Exception');
  if (this.errCode !== null && this.errCode !== undefined) {
    output.writeFieldBegin('errCode', Thrift.Type.I32, 1);
    output.writeI32(this.errCode);
    output.writeFieldEnd();
  }
  if (this.errMsg !== null && this.errMsg !== undefined) {
    output.writeFieldBegin('errMsg', Thrift.Type.STRING, 2);
    output.writeString(this.errMsg);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SequenceRequest = module.exports.SequenceRequest = function(args) {
  this.address = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
  }
};
SequenceRequest.prototype = {};
SequenceRequest.prototype.read = function(input) {
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

SequenceRequest.prototype.write = function(output) {
  output.writeStructBegin('SequenceRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SequenceResponse = module.exports.SequenceResponse = function(args) {
  this.sequence = null;
  if (args) {
    if (args.sequence !== undefined && args.sequence !== null) {
      this.sequence = args.sequence;
    }
  }
};
SequenceResponse.prototype = {};
SequenceResponse.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I64) {
        this.sequence = input.readI64();
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

SequenceResponse.prototype.write = function(output) {
  output.writeStructBegin('SequenceResponse');
  if (this.sequence !== null && this.sequence !== undefined) {
    output.writeFieldBegin('sequence', Thrift.Type.I64, 1);
    output.writeI64(this.sequence);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuildTxRequest = module.exports.BuildTxRequest = function(args) {
  this.tx = null;
  if (args) {
    if (args.tx !== undefined && args.tx !== null) {
      this.tx = new ttypes.Tx(args.tx);
    }
  }
};
BuildTxRequest.prototype = {};
BuildTxRequest.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.tx = new ttypes.Tx();
        this.tx.read(input);
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

BuildTxRequest.prototype.write = function(output) {
  output.writeStructBegin('BuildTxRequest');
  if (this.tx !== null && this.tx !== undefined) {
    output.writeFieldBegin('tx', Thrift.Type.STRUCT, 1);
    this.tx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BuildTxResponse = module.exports.BuildTxResponse = function(args) {
  this.data = null;
  this.ext = null;
  if (args) {
    if (args.data !== undefined && args.data !== null) {
      this.data = args.data;
    }
    if (args.ext !== undefined && args.ext !== null) {
      this.ext = args.ext;
    }
  }
};
BuildTxResponse.prototype = {};
BuildTxResponse.prototype.read = function(input) {
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
        this.data = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.ext = input.readBinary();
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

BuildTxResponse.prototype.write = function(output) {
  output.writeStructBegin('BuildTxResponse');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 1);
    output.writeBinary(this.data);
    output.writeFieldEnd();
  }
  if (this.ext !== null && this.ext !== undefined) {
    output.writeFieldBegin('ext', Thrift.Type.STRING, 2);
    output.writeBinary(this.ext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PostTxRequest = module.exports.PostTxRequest = function(args) {
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
        this.tx = input.readBinary();
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

var PostTxResponse = module.exports.PostTxResponse = function(args) {
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
        this.txHash = input.readString();
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

var BalanceRequest = module.exports.BalanceRequest = function(args) {
  this.address = null;
  if (args) {
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
  }
};
BalanceRequest.prototype = {};
BalanceRequest.prototype.read = function(input) {
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

BalanceRequest.prototype.write = function(output) {
  output.writeStructBegin('BalanceRequest');
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin('address', Thrift.Type.STRING, 1);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BalanceResponse = module.exports.BalanceResponse = function(args) {
  this.coins = null;
  if (args) {
    if (args.coins !== undefined && args.coins !== null) {
      this.coins = Thrift.copyList(args.coins, [ttypes.Coin]);
    }
  }
};
BalanceResponse.prototype = {};
BalanceResponse.prototype.read = function(input) {
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
        var _size8 = 0;
        var _rtmp312;
        this.coins = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.Coin();
          elem14.read(input);
          this.coins.push(elem14);
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

BalanceResponse.prototype.write = function(output) {
  output.writeStructBegin('BalanceResponse');
  if (this.coins !== null && this.coins !== undefined) {
    output.writeFieldBegin('coins', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.coins.length);
    for (var iter15 in this.coins)
    {
      if (this.coins.hasOwnProperty(iter15))
      {
        iter15 = this.coins[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

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

var TxDetailRequest = module.exports.TxDetailRequest = function(args) {
  this.txHash = null;
  if (args) {
    if (args.txHash !== undefined && args.txHash !== null) {
      this.txHash = args.txHash;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field txHash is unset!');
    }
  }
};
TxDetailRequest.prototype = {};
TxDetailRequest.prototype.read = function(input) {
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

TxDetailRequest.prototype.write = function(output) {
  output.writeStructBegin('TxDetailRequest');
  if (this.txHash !== null && this.txHash !== undefined) {
    output.writeFieldBegin('txHash', Thrift.Type.STRING, 1);
    output.writeString(this.txHash);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

