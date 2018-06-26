//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

BlockChainService_GetSequence_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new SequenceRequest(args.req);
    }
  }
};
BlockChainService_GetSequence_args.prototype = {};
BlockChainService_GetSequence_args.prototype.read = function(input) {
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
        this.req = new SequenceRequest();
        this.req.read(input);
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

BlockChainService_GetSequence_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetSequence_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetSequence_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new SequenceResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_GetSequence_result.prototype = {};
BlockChainService_GetSequence_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new SequenceResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_GetSequence_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetSequence_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_BuildTx_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new BuildTxRequest(args.req);
    }
  }
};
BlockChainService_BuildTx_args.prototype = {};
BlockChainService_BuildTx_args.prototype.read = function(input) {
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
        this.req = new BuildTxRequest();
        this.req.read(input);
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

BlockChainService_BuildTx_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_BuildTx_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_BuildTx_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new BuildTxResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_BuildTx_result.prototype = {};
BlockChainService_BuildTx_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new BuildTxResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_BuildTx_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_BuildTx_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_PostTx_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new PostTxRequest(args.req);
    }
  }
};
BlockChainService_PostTx_args.prototype = {};
BlockChainService_PostTx_args.prototype.read = function(input) {
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
        this.req = new PostTxRequest();
        this.req.read(input);
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

BlockChainService_PostTx_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_PostTx_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_PostTx_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new PostTxResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_PostTx_result.prototype = {};
BlockChainService_PostTx_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new PostTxResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_PostTx_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_PostTx_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetBalance_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new BalanceRequest(args.req);
    }
  }
};
BlockChainService_GetBalance_args.prototype = {};
BlockChainService_GetBalance_args.prototype.read = function(input) {
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
        this.req = new BalanceRequest();
        this.req.read(input);
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

BlockChainService_GetBalance_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetBalance_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetBalance_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new BalanceResponse(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_GetBalance_result.prototype = {};
BlockChainService_GetBalance_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new BalanceResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_GetBalance_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetBalance_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetTxList_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new TxListRequest(args.req);
    }
  }
};
BlockChainService_GetTxList_args.prototype = {};
BlockChainService_GetTxList_args.prototype.read = function(input) {
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
        this.req = new TxListRequest();
        this.req.read(input);
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

BlockChainService_GetTxList_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetTxList_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetTxList_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [Tx]);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_GetTxList_result.prototype = {};
BlockChainService_GetTxList_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new Tx();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_GetTxList_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetTxList_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetTxDetail_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined && args.req !== null) {
      this.req = new TxDetailRequest(args.req);
    }
  }
};
BlockChainService_GetTxDetail_args.prototype = {};
BlockChainService_GetTxDetail_args.prototype.read = function(input) {
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
        this.req = new TxDetailRequest();
        this.req.read(input);
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

BlockChainService_GetTxDetail_args.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetTxDetail_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainService_GetTxDetail_result = function(args) {
  this.success = null;
  this.e = null;
  if (args instanceof Exception) {
    this.e = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new Tx(args.success);
    }
    if (args.e !== undefined && args.e !== null) {
      this.e = args.e;
    }
  }
};
BlockChainService_GetTxDetail_result.prototype = {};
BlockChainService_GetTxDetail_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Tx();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.e = new Exception();
        this.e.read(input);
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

BlockChainService_GetTxDetail_result.prototype.write = function(output) {
  output.writeStructBegin('BlockChainService_GetTxDetail_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.e !== null && this.e !== undefined) {
    output.writeFieldBegin('e', Thrift.Type.STRUCT, 1);
    this.e.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

BlockChainServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
BlockChainServiceClient.prototype = {};
BlockChainServiceClient.prototype.GetSequence = function(req, callback) {
  this.send_GetSequence(req, callback); 
  if (!callback) {
    return this.recv_GetSequence();
  }
};

BlockChainServiceClient.prototype.send_GetSequence = function(req, callback) {
  this.output.writeMessageBegin('GetSequence', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_GetSequence_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_GetSequence();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_GetSequence = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_GetSequence_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'GetSequence failed: unknown result';
};
BlockChainServiceClient.prototype.BuildTx = function(req, callback) {
  this.send_BuildTx(req, callback); 
  if (!callback) {
    return this.recv_BuildTx();
  }
};

BlockChainServiceClient.prototype.send_BuildTx = function(req, callback) {
  this.output.writeMessageBegin('BuildTx', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_BuildTx_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_BuildTx();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_BuildTx = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_BuildTx_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'BuildTx failed: unknown result';
};
BlockChainServiceClient.prototype.PostTx = function(req, callback) {
  this.send_PostTx(req, callback); 
  if (!callback) {
    return this.recv_PostTx();
  }
};

BlockChainServiceClient.prototype.send_PostTx = function(req, callback) {
  this.output.writeMessageBegin('PostTx', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_PostTx_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_PostTx();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_PostTx = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_PostTx_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'PostTx failed: unknown result';
};
BlockChainServiceClient.prototype.GetBalance = function(req, callback) {
  this.send_GetBalance(req, callback); 
  if (!callback) {
    return this.recv_GetBalance();
  }
};

BlockChainServiceClient.prototype.send_GetBalance = function(req, callback) {
  this.output.writeMessageBegin('GetBalance', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_GetBalance_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_GetBalance();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_GetBalance = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_GetBalance_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'GetBalance failed: unknown result';
};
BlockChainServiceClient.prototype.GetTxList = function(req, callback) {
  this.send_GetTxList(req, callback); 
  if (!callback) {
    return this.recv_GetTxList();
  }
};

BlockChainServiceClient.prototype.send_GetTxList = function(req, callback) {
  this.output.writeMessageBegin('GetTxList', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_GetTxList_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_GetTxList();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_GetTxList = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_GetTxList_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'GetTxList failed: unknown result';
};
BlockChainServiceClient.prototype.GetTxDetail = function(req, callback) {
  this.send_GetTxDetail(req, callback); 
  if (!callback) {
    return this.recv_GetTxDetail();
  }
};

BlockChainServiceClient.prototype.send_GetTxDetail = function(req, callback) {
  this.output.writeMessageBegin('GetTxDetail', Thrift.MessageType.CALL, this.seqid);
  var params = {
    req: req
  };
  var args = new BlockChainService_GetTxDetail_args(params);
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_GetTxDetail();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

BlockChainServiceClient.prototype.recv_GetTxDetail = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new BlockChainService_GetTxDetail_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.e) {
    throw result.e;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'GetTxDetail failed: unknown result';
};
