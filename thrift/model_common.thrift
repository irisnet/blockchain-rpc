namespace go model

/** coin struct
 * @param amount, token amount
 * @param denom, name of token
 */
struct Coin {
	1: double amount,
	2: string denom
}

/** address structure
 * @param chain, blockchain identify
 * @param app, reserved field
 * @param addr, address in blockchain
 */
struct Address {
	1: string chain,
	2: string app,
	3: string addr
}

/** fee structure
 * @param amount, token amount
 * @param denom, name of token
 */
struct Fee {
	1: double amount,
	2: string denom
}

/** memo structure
 * @param id,
 * @param text, content of memo
 */
struct Memo {
	1: i64 id,
	2: i8 text
}

/** common exception
 * @param errCode, error code
 * @param errMsg, error message
 */
exception Exception {
  1: i32 errCode,
  2: string errMsg
}