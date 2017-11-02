import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import user from './user'
import common from './common'
import batchImport from './batchImport'
import projectReceiptClaim from './projectReceiptClaim'
import noProjectReceiptClaim from './noProjectReceiptClaim'
import reviewReceiptClaim from './reviewReceiptClaim'
import cbsTurnoverWholenessConfirm from './cbsTurnoverWholenessConfirm'
import contractChange from './contractChange'

export default combineReducers({
  user,
  common,
  batchImport,
  projectReceiptClaim,
  noProjectReceiptClaim,
  reviewReceiptClaim,
  cbsTurnoverWholenessConfirm,
  contractChange,
  routing: routerReducer, // 整合路由
})
