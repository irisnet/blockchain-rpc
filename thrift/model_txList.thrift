namespace go model

include "model_common.thrift"

/** txList request
 * @param address, address of blockchain
 * @param page, current page
 * @param perPage, num of record each page
 * @param status, tx status
 * @param type, tx type
 * @param startTime, tx time
 * @param endTime, tx time
 * @param sort, sort
 * @param q, content of query
 */
struct TxListRequest {
	1: string address,
	2: required i64 page,
	3: required i64 perPage,
	4: string status,
	5: string type,
	6: string startTime,
	7: string endTime,
	8: string sort,
	9: string q
}

/** txList response
 * @param txs, list of tx
 */
struct TxListResponse {
	1: list<TxListObject> txs
}

/** content of txList response
 * @param txHash, tx hash
 * @param time, tx time
 * @param height, block height
 * @param sender, sender info
 * @param receiver, receiver info
 * @param amount, tx amount
 * @param type, tx type
 * @param status, tx status
 * @param ext, extra content
 */
struct TxListObject {
	1: string txHash,
	2: string time,
	3: i64 height,
	4: model_common.Address sender,
	5: model_common.Address receiver,
	6: list<model_common.Coin> amount,
	7: string type,
	8: string status,
	9: string ext
}