// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model_buildTx.proto

package model

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

// Ignoring public import of Coin from model_common.proto

// Ignoring public import of Address from model_common.proto

// Ignoring public import of Fee from model_common.proto

// Ignoring public import of Memo from model_common.proto

type BuildTxRequest struct {
	Nonce                uint64   `protobuf:"varint,1,opt,name=nonce" json:"nonce,omitempty"`
	From                 *Address `protobuf:"bytes,2,opt,name=from" json:"from,omitempty"`
	To                   *Address `protobuf:"bytes,3,opt,name=to" json:"to,omitempty"`
	Amount               []*Coin  `protobuf:"bytes,4,rep,name=amount" json:"amount,omitempty"`
	Fee                  *Fee     `protobuf:"bytes,5,opt,name=fee" json:"fee,omitempty"`
	Memo                 *Memo    `protobuf:"bytes,6,opt,name=memo" json:"memo,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BuildTxRequest) Reset()         { *m = BuildTxRequest{} }
func (m *BuildTxRequest) String() string { return proto.CompactTextString(m) }
func (*BuildTxRequest) ProtoMessage()    {}
func (*BuildTxRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_buildTx_614a4c213855bec7, []int{0}
}
func (m *BuildTxRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BuildTxRequest.Unmarshal(m, b)
}
func (m *BuildTxRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BuildTxRequest.Marshal(b, m, deterministic)
}
func (dst *BuildTxRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BuildTxRequest.Merge(dst, src)
}
func (m *BuildTxRequest) XXX_Size() int {
	return xxx_messageInfo_BuildTxRequest.Size(m)
}
func (m *BuildTxRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BuildTxRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BuildTxRequest proto.InternalMessageInfo

func (m *BuildTxRequest) GetNonce() uint64 {
	if m != nil {
		return m.Nonce
	}
	return 0
}

func (m *BuildTxRequest) GetFrom() *Address {
	if m != nil {
		return m.From
	}
	return nil
}

func (m *BuildTxRequest) GetTo() *Address {
	if m != nil {
		return m.To
	}
	return nil
}

func (m *BuildTxRequest) GetAmount() []*Coin {
	if m != nil {
		return m.Amount
	}
	return nil
}

func (m *BuildTxRequest) GetFee() *Fee {
	if m != nil {
		return m.Fee
	}
	return nil
}

func (m *BuildTxRequest) GetMemo() *Memo {
	if m != nil {
		return m.Memo
	}
	return nil
}

type BuildTxResponse struct {
	Data                 []byte   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BuildTxResponse) Reset()         { *m = BuildTxResponse{} }
func (m *BuildTxResponse) String() string { return proto.CompactTextString(m) }
func (*BuildTxResponse) ProtoMessage()    {}
func (*BuildTxResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_buildTx_614a4c213855bec7, []int{1}
}
func (m *BuildTxResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BuildTxResponse.Unmarshal(m, b)
}
func (m *BuildTxResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BuildTxResponse.Marshal(b, m, deterministic)
}
func (dst *BuildTxResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BuildTxResponse.Merge(dst, src)
}
func (m *BuildTxResponse) XXX_Size() int {
	return xxx_messageInfo_BuildTxResponse.Size(m)
}
func (m *BuildTxResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_BuildTxResponse.DiscardUnknown(m)
}

var xxx_messageInfo_BuildTxResponse proto.InternalMessageInfo

func (m *BuildTxResponse) GetData() []byte {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*BuildTxRequest)(nil), "model.buildTx.BuildTxRequest")
	proto.RegisterType((*BuildTxResponse)(nil), "model.buildTx.BuildTxResponse")
}

func init() { proto.RegisterFile("model_buildTx.proto", fileDescriptor_model_buildTx_614a4c213855bec7) }

var fileDescriptor_model_buildTx_614a4c213855bec7 = []byte{
	// 242 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x7c, 0x90, 0xcf, 0x4a, 0xc3, 0x40,
	0x10, 0xc6, 0x4d, 0xb2, 0x89, 0x30, 0xf5, 0x0f, 0x8e, 0x0a, 0x8b, 0xa7, 0x50, 0xa9, 0x44, 0x0f,
	0x39, 0xd4, 0x27, 0xb0, 0x82, 0x37, 0x41, 0x16, 0x4f, 0x5e, 0x24, 0xed, 0x4e, 0xa1, 0xd0, 0xdd,
	0xa9, 0xd9, 0x0d, 0xf8, 0xda, 0xbe, 0x81, 0x38, 0x1b, 0x84, 0x7a, 0xf0, 0xb6, 0xfb, 0x7d, 0x3f,
	0x7e, 0xf0, 0x0d, 0x9c, 0x3b, 0xb6, 0xb4, 0x7d, 0x5f, 0x0e, 0x9b, 0xad, 0x7d, 0xfd, 0x6c, 0x77,
	0x3d, 0x47, 0xc6, 0x63, 0x09, 0xdb, 0x31, 0xbc, 0xc2, 0xc4, 0xac, 0xd8, 0x39, 0xf6, 0x09, 0x99,
	0x7e, 0x65, 0x70, 0xb2, 0x48, 0xbd, 0xa1, 0x8f, 0x81, 0x42, 0xc4, 0x0b, 0x28, 0x3d, 0xfb, 0x15,
	0xe9, 0xac, 0xce, 0x1a, 0x65, 0xd2, 0x07, 0x6f, 0x41, 0xad, 0x7b, 0x76, 0x3a, 0xaf, 0xb3, 0x66,
	0x32, 0xbf, 0x6c, 0x93, 0x7a, 0x74, 0x3d, 0x58, 0xdb, 0x53, 0x08, 0x46, 0x10, 0x9c, 0x41, 0x1e,
	0x59, 0x17, 0xff, 0x81, 0x79, 0x64, 0xbc, 0x83, 0xaa, 0x73, 0x3c, 0xf8, 0xa8, 0x55, 0x5d, 0x34,
	0x93, 0x39, 0xee, 0xa3, 0x8f, 0xbc, 0xf1, 0x66, 0x24, 0xf0, 0x1a, 0x8a, 0x35, 0x91, 0x2e, 0xc5,
	0x79, 0xb6, 0x0f, 0x3e, 0x11, 0x99, 0x9f, 0x16, 0x6f, 0x40, 0x39, 0x72, 0xac, 0x2b, 0xa1, 0xfe,
	0xe8, 0x9e, 0xc9, 0xb1, 0x91, 0x7e, 0x3a, 0x83, 0xd3, 0xdf, 0xc9, 0x61, 0xc7, 0x3e, 0x10, 0x22,
	0x28, 0xdb, 0xc5, 0x4e, 0x26, 0x1f, 0x19, 0x79, 0x2f, 0x0e, 0xdf, 0x4a, 0x31, 0xbc, 0x1c, 0x2c,
	0x2b, 0x39, 0xd6, 0xfd, 0x77, 0x00, 0x00, 0x00, 0xff, 0xff, 0xd5, 0x88, 0x88, 0xa8, 0x66, 0x01,
	0x00, 0x00,
}
