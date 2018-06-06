// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model_sequence.proto

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

type SequenceRequest struct {
	Address              string   `protobuf:"bytes,1,opt,name=address" json:"address,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SequenceRequest) Reset()         { *m = SequenceRequest{} }
func (m *SequenceRequest) String() string { return proto.CompactTextString(m) }
func (*SequenceRequest) ProtoMessage()    {}
func (*SequenceRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_sequence_71ffdb99482eece6, []int{0}
}
func (m *SequenceRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SequenceRequest.Unmarshal(m, b)
}
func (m *SequenceRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SequenceRequest.Marshal(b, m, deterministic)
}
func (dst *SequenceRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SequenceRequest.Merge(dst, src)
}
func (m *SequenceRequest) XXX_Size() int {
	return xxx_messageInfo_SequenceRequest.Size(m)
}
func (m *SequenceRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_SequenceRequest.DiscardUnknown(m)
}

var xxx_messageInfo_SequenceRequest proto.InternalMessageInfo

func (m *SequenceRequest) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

type SequenceResponse struct {
	Sequence             uint64   `protobuf:"varint,1,opt,name=sequence" json:"sequence,omitempty"`
	Height               uint64   `protobuf:"varint,2,opt,name=height" json:"height,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SequenceResponse) Reset()         { *m = SequenceResponse{} }
func (m *SequenceResponse) String() string { return proto.CompactTextString(m) }
func (*SequenceResponse) ProtoMessage()    {}
func (*SequenceResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_model_sequence_71ffdb99482eece6, []int{1}
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

func (m *SequenceResponse) GetSequence() uint64 {
	if m != nil {
		return m.Sequence
	}
	return 0
}

func (m *SequenceResponse) GetHeight() uint64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func init() {
	proto.RegisterType((*SequenceRequest)(nil), "model.sequence.SequenceRequest")
	proto.RegisterType((*SequenceResponse)(nil), "model.sequence.SequenceResponse")
}

func init() {
	proto.RegisterFile("model_sequence.proto", fileDescriptor_model_sequence_71ffdb99482eece6)
}

var fileDescriptor_model_sequence_71ffdb99482eece6 = []byte{
	// 149 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0xc9, 0xcd, 0x4f, 0x49,
	0xcd, 0x89, 0x2f, 0x4e, 0x2d, 0x2c, 0x4d, 0xcd, 0x4b, 0x4e, 0xd5, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0xe2, 0x03, 0x8b, 0xea, 0xc1, 0x44, 0xa5, 0x84, 0x20, 0xaa, 0x92, 0xf3, 0x73, 0x73, 0xf3,
	0xf3, 0x20, 0x6a, 0x94, 0xb4, 0xb9, 0xf8, 0x83, 0xa1, 0xf2, 0x41, 0x20, 0xba, 0xb8, 0x44, 0x48,
	0x82, 0x8b, 0x3d, 0x31, 0x25, 0xa5, 0x28, 0xb5, 0xb8, 0x58, 0x82, 0x51, 0x81, 0x51, 0x83, 0x33,
	0x08, 0xc6, 0x55, 0x72, 0xe3, 0x12, 0x40, 0x28, 0x2e, 0x2e, 0xc8, 0xcf, 0x2b, 0x4e, 0x15, 0x92,
	0xe2, 0xe2, 0x80, 0x59, 0x00, 0x56, 0xce, 0x12, 0x04, 0xe7, 0x0b, 0x89, 0x71, 0xb1, 0x65, 0xa4,
	0x66, 0xa6, 0x67, 0x94, 0x48, 0x30, 0x81, 0x65, 0xa0, 0x3c, 0x27, 0xf6, 0x28, 0x56, 0xb0, 0x53,
	0x02, 0x18, 0x92, 0xd8, 0xc0, 0xce, 0x30, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0xe4, 0x64, 0xe3,
	0x75, 0xc2, 0x00, 0x00, 0x00,
}
