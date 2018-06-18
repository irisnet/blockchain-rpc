namespace go model

/** postTx request
 * @param tx, tx which has been signed
 */
struct PostTxRequest {
	1: binary tx
}

/** postTx response
 * @param txHash, transaction hash
 */
struct PostTxResponse {
	1: string txHash
}