# blockchain-rpc
Common RPC interface for all blockChains

# Generate Code

**1. Setup**

[setup](http://thrift-tutorial.readthedocs.io/en/latest/installation.html)

**2. Generating Code**

- go server

```
thrift -r -out ./codegen/server --gen go ./thrift/service_blockchain.thrift
```

- js client

```
thrift -r -out ./codegen/gen-js --gen js ./thrift/service_blockchain.thrift
```

- nodejs client

```
thrift -r -out ./codegen/gen-nodejs --gen js:node ./thrift/service_blockchain.thrift
```
