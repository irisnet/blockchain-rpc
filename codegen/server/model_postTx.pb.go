// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model_postTx.proto

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

type PostTxRequest struct {
	Tx                   []byte   `protobuf:"bytes,1,opt,name=tx,proto3" json:"tx,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PostTxRequest) Reset()         { *m = PostTxRequest{} }
func (m *PostTxRequest) String() string { return proto.CompactTextString(m) }
func (*PostTxRequest) ProtoMessage()    {}
func (*PostTxRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_postTx_c9ba535b99e172e2, []int{0}
}
func (m *PostTxRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PostTxRequest.Unmarshal(m, b)
}
func (m *PostTxRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PostTxRequest.Marshal(b, m, deterministic)
}
func (dst *PostTxRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PostTxRequest.Merge(dst, src)
}
func (m *PostTxRequest) XXX_Size() int {
	return xxx_messageInfo_PostTxRequest.Size(m)
}
func (m *PostTxRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PostTxRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PostTxRequest proto.InternalMessageInfo

func (m *PostTxRequest) GetTx() []byte {
	if m != nil {
		return m.Tx
	}
	return nil
}

type PostTxResponse struct {
	TxHash               string   `protobuf:"bytes,2,opt,name=txHash" json:"txHash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PostTxResponse) Reset()         { *m = PostTxResponse{} }
func (m *PostTxResponse) String() string { return proto.CompactTextString(m) }
func (*PostTxResponse) ProtoMessage()    {}
func (*PostTxResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_postTx_c9ba535b99e172e2, []int{1}
}
func (m *PostTxResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PostTxResponse.Unmarshal(m, b)
}
func (m *PostTxResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PostTxResponse.Marshal(b, m, deterministic)
}
func (dst *PostTxResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PostTxResponse.Merge(dst, src)
}
func (m *PostTxResponse) XXX_Size() int {
	return xxx_messageInfo_PostTxResponse.Size(m)
}
func (m *PostTxResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_PostTxResponse.DiscardUnknown(m)
}

var xxx_messageInfo_PostTxResponse proto.InternalMessageInfo

func (m *PostTxResponse) GetTxHash() string {
	if m != nil {
		return m.TxHash
	}
	return ""
}

func init() {
	proto.RegisterType((*PostTxRequest)(nil), "model.postTx.PostTxRequest")
	proto.RegisterType((*PostTxResponse)(nil), "model.postTx.PostTxResponse")
}

func init() { proto.RegisterFile("model_postTx.proto", fileDescriptor_model_postTx_c9ba535b99e172e2) }

var fileDescriptor_model_postTx_c9ba535b99e172e2 = []byte{
	// 136 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xca, 0xcd, 0x4f, 0x49,
	0xcd, 0x89, 0x2f, 0xc8, 0x2f, 0x2e, 0x09, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xe2,
	0x01, 0x8b, 0xe9, 0x41, 0xc4, 0xa4, 0xa0, 0x2a, 0x92, 0xf3, 0x73, 0x73, 0xf3, 0xf3, 0x20, 0x2a,
	0x94, 0xe4, 0xb9, 0x78, 0x03, 0xc0, 0xb2, 0x41, 0xa9, 0x85, 0xa5, 0xa9, 0xc5, 0x25, 0x42, 0x7c,
	0x5c, 0x4c, 0x25, 0x15, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x3c, 0x41, 0x4c, 0x25, 0x15, 0x4a, 0x1a,
	0x5c, 0x7c, 0x30, 0x05, 0xc5, 0x05, 0xf9, 0x79, 0xc5, 0xa9, 0x42, 0x62, 0x5c, 0x6c, 0x25, 0x15,
	0x1e, 0x89, 0xc5, 0x19, 0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0x9c, 0x41, 0x50, 0x9e, 0x13, 0x7b, 0x14,
	0x2b, 0xd8, 0x82, 0x00, 0x86, 0x24, 0x36, 0xb0, 0xe1, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff,
	0x12, 0x49, 0xa2, 0xd8, 0x94, 0x00, 0x00, 0x00,
}
