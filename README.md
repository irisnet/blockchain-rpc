# blockchain-rpc
Common gRPC interface for all blockchains

# Generate Server Code

go example

**1. Setup**

[setup](https://grpc.io/docs/tutorials/basic/go.html#example-code-and-setup)

**2. Generating Server Code**

```
protoc -I ./protocol --go_out=plugins=grpc:./codegen/server ./protocol/*.proto
```