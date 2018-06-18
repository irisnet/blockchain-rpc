//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import {Thrift} from "./thrift";

var BalanceRequest = function(args) {
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
        this.address = input.readString().value;
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

var BalanceResponse = function(args) {
  this.coins = null;
  if (args) {
    if (args.coins !== undefined && args.coins !== null) {
      this.coins = Thrift.copyList(args.coins, [Coin]);
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
        var _size0 = 0;
        var _rtmp34;
        this.coins = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Coin();
          elem6.read(input);
          this.coins.push(elem6);
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
    for (var iter7 in this.coins)
    {
      if (this.coins.hasOwnProperty(iter7))
      {
        iter7 = this.coins[iter7];
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

export {

    BalanceRequest,
    BalanceResponse
}