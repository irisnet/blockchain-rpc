namespace go model

include "model_common.thrift"

/** txDetail request
 * @param txHash, tx hash
 */
struct TxDetailRequest {
	1: required string txHash
}

/** txDetail response
 * @param txHash, tx hash
 * @param time, tx time
 * @param height, block height
 * @param sender, sender info
 * @param receiver, receiver info
 * @param amount
 * @param type, tx type
 * @param status, tx status
 * @param fee
 * @param memo
 * @param ext, extra info
 */
struct TxDetailResponse {
	1: string txHash,
	2: string time,
	3: i64 height,
	4: model_common.Address sender,
	5: model_common.Address receiver,
	6: list<model_common.Coin> amount,
	7: string type,
	8: string status,
    9: FeeUsed fee,
	10: model_common.Memo memo,
	11: binary ext
}

struct FeeUsed {
	1: string denom,
	2: double cost
}