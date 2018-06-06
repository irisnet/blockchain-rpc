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
	return fileDescriptor_model_balance_ef5f43277c8e9786, []int{0}
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
	Coins                []*Coin  `protobuf:"bytes,1,rep,name=coins" json:"coins,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SequenceResponse) Reset()         { *m = SequenceResponse{} }
func (m *SequenceResponse) String() string { return proto.CompactTextString(m) }
func (*SequenceResponse) ProtoMessage()    {}
func (*SequenceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_balance_ef5f43277c8e9786, []int{1}
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

func init() { proto.RegisterFile("model_balance.proto", fileDescriptor_model_balance_ef5f43277c8e9786) }

var fileDescriptor_model_balance_ef5f43277c8e9786 = []byte{
	// 153 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xce, 0xcd, 0x4f, 0x49,
	0xcd, 0x89, 0x4f, 0x4a, 0xcc, 0x49, 0xcc, 0x4b, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17,
	0xe2, 0x05, 0x0b, 0xea, 0x41, 0x05, 0xa5, 0x84, 0x20, 0x6a, 0x92, 0xf3, 0x73, 0x73, 0xf3, 0xf3,
	0x20, 0x4a, 0x94, 0xb4, 0xb8, 0xf8, 0x9c, 0x20, 0xd2, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25,
	0x42, 0x12, 0x5c, 0xec, 0x89, 0x29, 0x29, 0x45, 0xa9, 0xc5, 0xc5, 0x12, 0x8c, 0x0a, 0x8c, 0x1a,
	0x9c, 0x41, 0x30, 0xae, 0x92, 0x0d, 0x97, 0x40, 0x30, 0x48, 0x11, 0x58, 0x71, 0x71, 0x41, 0x7e,
	0x5e, 0x71, 0xaa, 0x90, 0x06, 0x17, 0x6b, 0x72, 0x7e, 0x66, 0x1e, 0x48, 0x2d, 0xb3, 0x06, 0xb7,
	0x91, 0x90, 0x1e, 0xc4, 0x4a, 0xa8, 0x1d, 0xce, 0xf9, 0x99, 0x79, 0x41, 0x10, 0x05, 0x4e, 0xec,
	0x51, 0xac, 0x60, 0xb9, 0x00, 0x86, 0x24, 0x36, 0xb0, 0xdd, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff,
	0xff, 0x99, 0x01, 0xd9, 0x0e, 0xb5, 0x00, 0x00, 0x00,
}
