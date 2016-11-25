import { ADD_SYMBOL, CLEAR_LAST_OPERAND, SET_OPERATOR, CLEAR_ALL} from '../constants'

function calcExp(left, right, operator){
  switch (operator){
    case '+': return left+right;
    case '-': return left-right;
    case '*': return left*right;
    case '/': return left/right
  }
  return left
}

const defaultState = {
  show: '',
  leftOperand: null,
  rightOperand: null,
  operator: null,
  canCalc:false,
  leftOperandHint:'',
  rightOperandHint:'',
  operatorHint: '',
};

export default (calculation = defaultState, action) => {
  const {type, payload} = action;
  console.log(type, payload, calculation);
  const newState = Object.assign({}, calculation);
  
  switch (type) {
    case ADD_SYMBOL:
      if (newState.operator == '=') {
        newState.leftOperand  = null
        newState.rightOperand = null
        newState.show = 0
        newState.leftOperandHint=''
        newState.rightOperandHint=''
        newState.operatorHint=''
      }

      if (!newState.canCalc) {
        newState.show = ''
      }

      newState.show += payload.symbol
      if (newState.leftOperand == null) {newState.leftOperandHint=newState.show}
      else {
        newState.rightOperandHint=newState.show
      }
      newState.canCalc = true

      return newState

    case SET_OPERATOR:
      if (newState.canCalc) {
        if (newState.leftOperand == null) {
          newState.leftOperand = Number(newState.show)

        }
        else {
          newState.rightOperand = Number(newState.show)
          newState.show         = calcExp(newState.leftOperand, newState.rightOperand, newState.operator)
          newState.leftOperand  = Number(newState.show)
        }
      }
      newState.operator = payload.operator
      newState.canCalc  = false
      if (newState.operator == '=') {
       // newState.leftOperand  = 0
        newState.rightOperand = 0
        newState.rightOperandHint=newState.rightOperandHint+'='+newState.show
      }
      else {
        newState.operatorHint=newState.operator
        newState.leftOperandHint=newState.leftOperand
        newState.rightOperandHint=''
      }
      return newState


    case CLEAR_LAST_OPERAND:
      newState.show =0
      newState.canCalc=false
      newState.rightOperandHint=''
      return newState

    case CLEAR_ALL:
      newState.leftOperand  = null
      newState.rightOperand = null
      newState.show = 0
      newState.leftOperandHint=''
      newState.rightOperandHint=''
      newState.operatorHint=''
      return newState
  }
  return newState
}
