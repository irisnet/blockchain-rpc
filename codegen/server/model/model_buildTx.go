// Autogenerated by Thrift Compiler (0.11.0)
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING

package model

import (
	"bytes"
	"reflect"
	"context"
	"fmt"
	"git.apache.org/thrift.git/lib/go/thrift"

)

// (needed to ensure safety because of naive import list construction.)
var _ = thrift.ZERO
var _ = fmt.Printf
var _ = context.Background
var _ = reflect.DeepEqual
var _ = bytes.Equal

// buildTx request
// @param sequence, sender's nonce
// @param sender, sender info
// @param receiver, receiver info
// @param amount, amount
// @param fee, fee
// @param memo, extra info
// 
// Attributes:
//  - Sequence
//  - Sender
//  - Receiver
//  - Amount
//  - Fee
//  - Memo
type BuildTxRequest struct {
  Sequence int64 `thrift:"sequence,1" db:"sequence" json:"sequence"`
  Sender *Address `thrift:"sender,2" db:"sender" json:"sender"`
  Receiver *Address `thrift:"receiver,3" db:"receiver" json:"receiver"`
  Amount []*Coin `thrift:"amount,4" db:"amount" json:"amount"`
  Fee *Fee `thrift:"fee,5" db:"fee" json:"fee"`
  Memo *Memo `thrift:"memo,6" db:"memo" json:"memo"`
}

func NewBuildTxRequest() *BuildTxRequest {
  return &BuildTxRequest{}
}


func (p *BuildTxRequest) GetSequence() int64 {
  return p.Sequence
}
var BuildTxRequest_Sender_DEFAULT *Address
func (p *BuildTxRequest) GetSender() *Address {
  if !p.IsSetSender() {
    return BuildTxRequest_Sender_DEFAULT
  }
return p.Sender
}
var BuildTxRequest_Receiver_DEFAULT *Address
func (p *BuildTxRequest) GetReceiver() *Address {
  if !p.IsSetReceiver() {
    return BuildTxRequest_Receiver_DEFAULT
  }
return p.Receiver
}

func (p *BuildTxRequest) GetAmount() []*Coin {
  return p.Amount
}
var BuildTxRequest_Fee_DEFAULT *Fee
func (p *BuildTxRequest) GetFee() *Fee {
  if !p.IsSetFee() {
    return BuildTxRequest_Fee_DEFAULT
  }
return p.Fee
}
var BuildTxRequest_Memo_DEFAULT *Memo
func (p *BuildTxRequest) GetMemo() *Memo {
  if !p.IsSetMemo() {
    return BuildTxRequest_Memo_DEFAULT
  }
return p.Memo
}
func (p *BuildTxRequest) IsSetSender() bool {
  return p.Sender != nil
}

func (p *BuildTxRequest) IsSetReceiver() bool {
  return p.Receiver != nil
}

func (p *BuildTxRequest) IsSetFee() bool {
  return p.Fee != nil
}

func (p *BuildTxRequest) IsSetMemo() bool {
  return p.Memo != nil
}

func (p *BuildTxRequest) Read(iprot thrift.TProtocol) error {
  if _, err := iprot.ReadStructBegin(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read error: ", p), err)
  }


  for {
    _, fieldTypeId, fieldId, err := iprot.ReadFieldBegin()
    if err != nil {
      return thrift.PrependError(fmt.Sprintf("%T field %d read error: ", p, fieldId), err)
    }
    if fieldTypeId == thrift.STOP { break; }
    switch fieldId {
    case 1:
      if fieldTypeId == thrift.I64 {
        if err := p.ReadField1(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 2:
      if fieldTypeId == thrift.STRUCT {
        if err := p.ReadField2(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 3:
      if fieldTypeId == thrift.STRUCT {
        if err := p.ReadField3(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 4:
      if fieldTypeId == thrift.LIST {
        if err := p.ReadField4(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 5:
      if fieldTypeId == thrift.STRUCT {
        if err := p.ReadField5(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    case 6:
      if fieldTypeId == thrift.STRUCT {
        if err := p.ReadField6(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    default:
      if err := iprot.Skip(fieldTypeId); err != nil {
        return err
      }
    }
    if err := iprot.ReadFieldEnd(); err != nil {
      return err
    }
  }
  if err := iprot.ReadStructEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read struct end error: ", p), err)
  }
  return nil
}

func (p *BuildTxRequest)  ReadField1(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadI64(); err != nil {
  return thrift.PrependError("error reading field 1: ", err)
} else {
  p.Sequence = v
}
  return nil
}

func (p *BuildTxRequest)  ReadField2(iprot thrift.TProtocol) error {
  p.Sender = &Address{}
  if err := p.Sender.Read(iprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", p.Sender), err)
  }
  return nil
}

func (p *BuildTxRequest)  ReadField3(iprot thrift.TProtocol) error {
  p.Receiver = &Address{}
  if err := p.Receiver.Read(iprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", p.Receiver), err)
  }
  return nil
}

func (p *BuildTxRequest)  ReadField4(iprot thrift.TProtocol) error {
  _, size, err := iprot.ReadListBegin()
  if err != nil {
    return thrift.PrependError("error reading list begin: ", err)
  }
  tSlice := make([]*Coin, 0, size)
  p.Amount =  tSlice
  for i := 0; i < size; i ++ {
    _elem0 := &Coin{}
    if err := _elem0.Read(iprot); err != nil {
      return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", _elem0), err)
    }
    p.Amount = append(p.Amount, _elem0)
  }
  if err := iprot.ReadListEnd(); err != nil {
    return thrift.PrependError("error reading list end: ", err)
  }
  return nil
}

func (p *BuildTxRequest)  ReadField5(iprot thrift.TProtocol) error {
  p.Fee = &Fee{}
  if err := p.Fee.Read(iprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", p.Fee), err)
  }
  return nil
}

func (p *BuildTxRequest)  ReadField6(iprot thrift.TProtocol) error {
  p.Memo = &Memo{}
  if err := p.Memo.Read(iprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error reading struct: ", p.Memo), err)
  }
  return nil
}

func (p *BuildTxRequest) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("BuildTxRequest"); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write struct begin error: ", p), err) }
  if p != nil {
    if err := p.writeField1(oprot); err != nil { return err }
    if err := p.writeField2(oprot); err != nil { return err }
    if err := p.writeField3(oprot); err != nil { return err }
    if err := p.writeField4(oprot); err != nil { return err }
    if err := p.writeField5(oprot); err != nil { return err }
    if err := p.writeField6(oprot); err != nil { return err }
  }
  if err := oprot.WriteFieldStop(); err != nil {
    return thrift.PrependError("write field stop error: ", err) }
  if err := oprot.WriteStructEnd(); err != nil {
    return thrift.PrependError("write struct stop error: ", err) }
  return nil
}

func (p *BuildTxRequest) writeField1(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("sequence", thrift.I64, 1); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 1:sequence: ", p), err) }
  if err := oprot.WriteI64(int64(p.Sequence)); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.sequence (1) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 1:sequence: ", p), err) }
  return err
}

func (p *BuildTxRequest) writeField2(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("sender", thrift.STRUCT, 2); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 2:sender: ", p), err) }
  if err := p.Sender.Write(oprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", p.Sender), err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 2:sender: ", p), err) }
  return err
}

func (p *BuildTxRequest) writeField3(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("receiver", thrift.STRUCT, 3); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 3:receiver: ", p), err) }
  if err := p.Receiver.Write(oprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", p.Receiver), err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 3:receiver: ", p), err) }
  return err
}

func (p *BuildTxRequest) writeField4(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("amount", thrift.LIST, 4); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 4:amount: ", p), err) }
  if err := oprot.WriteListBegin(thrift.STRUCT, len(p.Amount)); err != nil {
    return thrift.PrependError("error writing list begin: ", err)
  }
  for _, v := range p.Amount {
    if err := v.Write(oprot); err != nil {
      return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", v), err)
    }
  }
  if err := oprot.WriteListEnd(); err != nil {
    return thrift.PrependError("error writing list end: ", err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 4:amount: ", p), err) }
  return err
}

func (p *BuildTxRequest) writeField5(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("fee", thrift.STRUCT, 5); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 5:fee: ", p), err) }
  if err := p.Fee.Write(oprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", p.Fee), err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 5:fee: ", p), err) }
  return err
}

func (p *BuildTxRequest) writeField6(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("memo", thrift.STRUCT, 6); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 6:memo: ", p), err) }
  if err := p.Memo.Write(oprot); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T error writing struct: ", p.Memo), err)
  }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 6:memo: ", p), err) }
  return err
}

func (p *BuildTxRequest) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("BuildTxRequest(%+v)", *p)
}

// buildTx response
// @param data, result of buildTx
// 
// Attributes:
//  - Data
type BuildTxResponse struct {
  Data []byte `thrift:"data,1" db:"data" json:"data"`
}

func NewBuildTxResponse() *BuildTxResponse {
  return &BuildTxResponse{}
}


func (p *BuildTxResponse) GetData() []byte {
  return p.Data
}
func (p *BuildTxResponse) Read(iprot thrift.TProtocol) error {
  if _, err := iprot.ReadStructBegin(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read error: ", p), err)
  }


  for {
    _, fieldTypeId, fieldId, err := iprot.ReadFieldBegin()
    if err != nil {
      return thrift.PrependError(fmt.Sprintf("%T field %d read error: ", p, fieldId), err)
    }
    if fieldTypeId == thrift.STOP { break; }
    switch fieldId {
    case 1:
      if fieldTypeId == thrift.STRING {
        if err := p.ReadField1(iprot); err != nil {
          return err
        }
      } else {
        if err := iprot.Skip(fieldTypeId); err != nil {
          return err
        }
      }
    default:
      if err := iprot.Skip(fieldTypeId); err != nil {
        return err
      }
    }
    if err := iprot.ReadFieldEnd(); err != nil {
      return err
    }
  }
  if err := iprot.ReadStructEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T read struct end error: ", p), err)
  }
  return nil
}

func (p *BuildTxResponse)  ReadField1(iprot thrift.TProtocol) error {
  if v, err := iprot.ReadBinary(); err != nil {
  return thrift.PrependError("error reading field 1: ", err)
} else {
  p.Data = v
}
  return nil
}

func (p *BuildTxResponse) Write(oprot thrift.TProtocol) error {
  if err := oprot.WriteStructBegin("BuildTxResponse"); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write struct begin error: ", p), err) }
  if p != nil {
    if err := p.writeField1(oprot); err != nil { return err }
  }
  if err := oprot.WriteFieldStop(); err != nil {
    return thrift.PrependError("write field stop error: ", err) }
  if err := oprot.WriteStructEnd(); err != nil {
    return thrift.PrependError("write struct stop error: ", err) }
  return nil
}

func (p *BuildTxResponse) writeField1(oprot thrift.TProtocol) (err error) {
  if err := oprot.WriteFieldBegin("data", thrift.STRING, 1); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field begin error 1:data: ", p), err) }
  if err := oprot.WriteBinary(p.Data); err != nil {
  return thrift.PrependError(fmt.Sprintf("%T.data (1) field write error: ", p), err) }
  if err := oprot.WriteFieldEnd(); err != nil {
    return thrift.PrependError(fmt.Sprintf("%T write field end error 1:data: ", p), err) }
  return err
}

func (p *BuildTxResponse) String() string {
  if p == nil {
    return "<nil>"
  }
  return fmt.Sprintf("BuildTxResponse(%+v)", *p)
}
