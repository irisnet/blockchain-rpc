namespace go model

/** sequence request
 * @param address, address
 */
struct SequenceRequest {
	1: string address
}

/** sequence response
 * @param sequence, sequence of address
 */
struct SequenceResponse {
	1: i64 sequence
}
