import {
    SwapToken
} from "../types/Swap/SwapContract"
import { SwapEntity } from "../types/schema"

export function handleSwapToken(event: SwapToken): void {
    let swapEntity = new SwapEntity(event.transaction.hash.toHex())
    swapEntity.receiver = event.params.receiver
    swapEntity.fromToken = event.params.fromToken
    swapEntity.toToken = event.params.toToken
    swapEntity.inAmount = event.params.inAmount.toBigDecimal()
    swapEntity.outAmount = event.params.outAmount.toBigDecimal()
    swapEntity.date = event.block.timestamp.toI32()
    swapEntity.save()
}
