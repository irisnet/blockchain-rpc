namespace go model

include "model_common.thrift"
include "model_buildTx.thrift"
include "model_postTx.thrift"
include "model_sequence.thrift"
include "model_balance.thrift"
include "model_txList.thrift"
include "model_txDetail.thrift"

service BlockChainService {
	// build tx
	model_buildTx.BuildTxResponse BuildTx(1: model_buildTx.BuildTxRequest req) throws (1:model_common.Exception e),
	// post tx
	model_postTx.PostTxResponse PostTx(1: model_postTx.PostTxRequest req) throws (1:model_common.Exception e),
	// get sequence
	model_sequence.SequenceResponse GetSequence(1: model_sequence.SequenceRequest req) throws (1:model_common.Exception e),
	// get balance
	model_balance.BalanceResponse GetBalance(1: model_balance.BalanceRequest req) throws (1:model_common.Exception e),
	// get tx list
	model_txList.TxListResponse GetTxList(1: model_txList.TxListRequest req) throws (1:model_common.Exception e),
	// get tx detail
	model_txDetail.TxDetailResponse GetTxDetail(1: model_txDetail.TxDetailRequest req) throws (1:model_common.Exception e)
}

