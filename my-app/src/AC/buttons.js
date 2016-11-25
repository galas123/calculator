    import { ADD_SYMBOL, SET_OPERATOR, CLEAR_LAST_OPERAND, CLEAR_ALL} from '../constants'


    export function addSymbol(symbol) {
      return {
        type   : ADD_SYMBOL,
        payload: {symbol}
      }
    }
    export function setOperator(operator) {
      return {
        type   : SET_OPERATOR,
        payload: {
          operator
        }
      }
    }
    export function clearLastOperand() {
      return {
        type: CLEAR_LAST_OPERAND
      }
    }
      export function clearAll() {
        return {
          type : CLEAR_ALL
        }
    }