namespace go model

include "model_common.thrift"

/** balance request
 * @param address, address of blockchain
 */
struct BalanceRequest {
	1: string address
}

/** balance response
 * @param coins, balance of address
 */
struct BalanceResponse {
	1: list<model_common.Coin> coins
}
