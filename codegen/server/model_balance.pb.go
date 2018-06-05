// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model_balance.proto

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

// Ignoring public import of Error from model_common.proto

// Ignoring public import of ResponseStatus from model_common.proto

type BalanceRequest struct {
	Address              string   `protobuf:"bytes,1,opt,name=address" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BalanceRequest) Reset()         { *m = BalanceRequest{} }
func (m *BalanceRequest) String() string { return proto.CompactTextString(m) }
func (*BalanceRequest) ProtoMessage()    {}
func (*BalanceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_balance_86047c59388501ef, []int{0}
}
func (m *BalanceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BalanceRequest.Unmarshal(m, b)
}
func (m *BalanceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BalanceRequest.Marshal(b, m, deterministic)
}
func (dst *BalanceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BalanceRequest.Merge(dst, src)
}
func (m *BalanceRequest) XXX_Size() int {
	return xxx_messageInfo_BalanceRequest.Size(m)
}
func (m *BalanceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BalanceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BalanceRequest proto.InternalMessageInfo

func (m *BalanceRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

type SequenceResponse struct {
	Result               ResponseStatus `protobuf:"varint,1,opt,name=result,enum=model.common.ResponseStatus" json:"result,omitempty"`
	Error                *Error         `protobuf:"bytes,2,opt,name=error" json:"error,omitempty"`
	Coins                []*Coin        `protobuf:"bytes,3,rep,name=coins" json:"coins,omitempty"`
	XXX_NoUnkeyedLiteral struct{}       `json:"-"`
	XXX_unrecognized     []byte         `json:"-"`
	XXX_sizecache        int32          `json:"-"`
}

func (m *SequenceResponse) Reset()         { *m = SequenceResponse{} }
func (m *SequenceResponse) String() string { return proto.CompactTextString(m) }
func (*SequenceResponse) ProtoMessage()    {}
func (*SequenceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_balance_86047c59388501ef, []int{1}
}
func (m *SequenceResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SequenceResponse.Unmarshal(m, b)
}
func (m *SequenceResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SequenceResponse.Marshal(b, m, deterministic)
}
func (dst *SequenceResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SequenceResponse.Merge(dst, src)
}
func (m *SequenceResponse) XXX_Size() int {
	return xxx_messageInfo_SequenceResponse.Size(m)
}
func (m *SequenceResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_SequenceResponse.DiscardUnknown(m)
}

var xxx_messageInfo_SequenceResponse proto.InternalMessageInfo

func (m *SequenceResponse) GetResult() ResponseStatus {
	if m != nil {
		return m.Result
	}
	return ResponseStatus_SUCCESS
}

func (m *SequenceResponse) GetError() *Error {
	if m != nil {
		return m.Error
	}
	return nil
}

func (m *SequenceResponse) GetCoins() []*Coin {
	if m != nil {
		return m.Coins
	}
	return nil
}

func init() {
	proto.RegisterType((*BalanceRequest)(nil), "model.balance.BalanceRequest")
	proto.RegisterType((*SequenceResponse)(nil), "model.balance.SequenceResponse")
}

func init() { proto.RegisterFile("model_balance.proto", fileDescriptor_model_balance_86047c59388501ef) }

var fileDescriptor_model_balance_86047c59388501ef = []byte{
	// 206 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0xcf, 0xb1, 0x4e, 0x85, 0x30,
	0x14, 0x06, 0x60, 0xeb, 0x0d, 0xf7, 0xc6, 0xde, 0x48, 0x4c, 0x59, 0x1a, 0xe3, 0x40, 0x98, 0xaa,
	0x03, 0x03, 0xfa, 0x04, 0x18, 0x77, 0x53, 0x36, 0x17, 0x53, 0xe0, 0x0c, 0x24, 0xd0, 0x83, 0x3d,
	0xe5, 0x71, 0x7c, 0xd7, 0x1b, 0x5a, 0x18, 0x18, 0xfb, 0xff, 0x5f, 0xf3, 0xe7, 0xf0, 0x6c, 0xc2,
	0x1e, 0xc6, 0xdf, 0xd6, 0x8c, 0xc6, 0x76, 0x50, 0xce, 0x0e, 0x3d, 0x8a, 0xc7, 0x10, 0x96, 0x5b,
	0xf8, 0x2c, 0xa2, 0xe9, 0x70, 0x9a, 0xd0, 0x46, 0x52, 0xbc, 0xf1, 0xb4, 0x8e, 0xb5, 0x86, 0xbf,
	0x05, 0xc8, 0x0b, 0xc9, 0x2f, 0xa6, 0xef, 0x1d, 0x10, 0x49, 0x96, 0x33, 0xf5, 0xa0, 0xf7, 0x67,
	0xf1, 0xcf, 0xf8, 0x53, 0xb3, 0xaa, 0xa0, 0x69, 0x46, 0x4b, 0x20, 0x3e, 0xf8, 0xd9, 0x01, 0x2d,
	0xa3, 0x0f, 0x3a, 0xad, 0x5e, 0xca, 0x38, 0xba, 0xad, 0xec, 0xae, 0xf1, 0xc6, 0x2f, 0xa4, 0x37,
	0x2b, 0x5e, 0x79, 0x02, 0xce, 0xa1, 0x93, 0xf7, 0x39, 0x53, 0xd7, 0x2a, 0x3b, 0x7e, 0xfa, 0x5a,
	0x2b, 0x1d, 0x85, 0x50, 0x3c, 0xe9, 0x70, 0xb0, 0x24, 0x4f, 0xf9, 0x49, 0x5d, 0x2b, 0x71, 0xa4,
	0x9f, 0x38, 0x58, 0x1d, 0x41, 0x7d, 0xf9, 0x49, 0x42, 0xf7, 0x7d, 0xd7, 0x9e, 0xc3, 0x75, 0xef,
	0xb7, 0x00, 0x00, 0x00, 0xff, 0xff, 0xe5, 0xfa, 0xd7, 0xdd, 0x17, 0x01, 0x00, 0x00,
}
