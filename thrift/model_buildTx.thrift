namespace go model

include "model_common.thrift"

/** buildTx request
 * @param sequence, sender's nonce
 * @param sender, sender info
 * @param receiver, receiver info
 * @param amount, amount
 * @param fee, fee
 * @param memo, extra info
 */
struct BuildTxRequest {
	1: i64 sequence,
	2: model_common.Address sender,
	3: model_common.Address receiver,
	4: list<model_common.Coin> amount,
	5: model_common.Fee fee,
	6: model_common.Memo memo,
	7: string txType
}

/** buildTx response
 * @param data, result of buildTx
 */
struct BuildTxResponse {
	1: binary data
	2: binary ext
}