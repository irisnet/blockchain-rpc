//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

import {Thrift} from "./thrift";
var Coin = function(args) {
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
        this.amount = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.denom = input.readString().value;
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

var Address = function(args) {
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
        this.chain = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.app = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.addr = input.readString().value;
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

var Fee = function(args) {
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
        this.amount = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.denom = input.readString().value;
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

var Memo = function(args) {
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
        this.id = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readBinary().value;
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

var Exception = function(args) {
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
        this.errCode = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.errMsg = input.readString().value;
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

export  {Coin,Address,Fee,Memo,Exception}