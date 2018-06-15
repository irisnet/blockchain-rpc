//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TxDetailRequest = function(args) {
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

TxDetailResponse = function(args) {
  this.txHash = null;
  this.time = null;
  this.height = null;
  this.sender = null;
  this.receiver = null;
  this.amount = null;
  this.type = null;
  this.status = null;
  this.fee = null;
  this.memo = null;
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
      this.sender = new Address(args.sender);
    }
    if (args.receiver !== undefined && args.receiver !== null) {
      this.receiver = new Address(args.receiver);
    }
    if (args.amount !== undefined && args.amount !== null) {
      this.amount = Thrift.copyList(args.amount, [Coin]);
    }
    if (args.type !== undefined && args.type !== null) {
      this.type = args.type;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.fee !== undefined && args.fee !== null) {
      this.fee = new FeeUsed(args.fee);
    }
    if (args.memo !== undefined && args.memo !== null) {
      this.memo = new Memo(args.memo);
    }
    if (args.ext !== undefined && args.ext !== null) {
      this.ext = args.ext;
    }
  }
};
TxDetailResponse.prototype = {};
TxDetailResponse.prototype.read = function(input) {
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
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.time = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.height = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.sender = new Address();
        this.sender.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.receiver = new Address();
        this.receiver.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
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
          elem6 = new Coin();
          elem6.read(input);
          this.amount.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.type = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.status = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.STRUCT) {
        this.fee = new FeeUsed();
        this.fee.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.STRUCT) {
        this.memo = new Memo();
        this.memo.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.STRING) {
        this.ext = input.readBinary().value;
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

TxDetailResponse.prototype.write = function(output) {
  output.writeStructBegin('TxDetailResponse');
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
  if (this.fee !== null && this.fee !== undefined) {
    output.writeFieldBegin('fee', Thrift.Type.STRUCT, 9);
    this.fee.write(output);
    output.writeFieldEnd();
  }
  if (this.memo !== null && this.memo !== undefined) {
    output.writeFieldBegin('memo', Thrift.Type.STRUCT, 10);
    this.memo.write(output);
    output.writeFieldEnd();
  }
  if (this.ext !== null && this.ext !== undefined) {
    output.writeFieldBegin('ext', Thrift.Type.STRING, 11);
    output.writeBinary(this.ext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

FeeUsed = function(args) {
  this.denom = null;
  this.cost = null;
  if (args) {
    if (args.denom !== undefined && args.denom !== null) {
      this.denom = args.denom;
    }
    if (args.cost !== undefined && args.cost !== null) {
      this.cost = args.cost;
    }
  }
};
FeeUsed.prototype = {};
FeeUsed.prototype.read = function(input) {
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
        this.denom = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.DOUBLE) {
        this.cost = input.readDouble().value;
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

FeeUsed.prototype.write = function(output) {
  output.writeStructBegin('FeeUsed');
  if (this.denom !== null && this.denom !== undefined) {
    output.writeFieldBegin('denom', Thrift.Type.STRING, 1);
    output.writeString(this.denom);
    output.writeFieldEnd();
  }
  if (this.cost !== null && this.cost !== undefined) {
    output.writeFieldBegin('cost', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.cost);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

