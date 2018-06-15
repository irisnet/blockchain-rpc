# blockchain-rpc
Common RPC interface for all blockChains

# Generate Server Code

go example

**1. Setup**

[setup](http://thrift-tutorial.readthedocs.io/en/latest/installation.html)

**2. Generating Server Code**

```
thrift -r -out ./codegen/server --gen go ./thrift/service_blockchain.thrift 
```