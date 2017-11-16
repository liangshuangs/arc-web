/* eslint-disable react/prop-types,max-len */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { message } from 'antd'
import Index from '../components/index'
import NoMatch from '../components/noMatch/noMatch'
import { getUserInfo } from '../actions/common'

import HomeContainer from '../containers/home/home'
import ProjectReceiptClaimContainer from '../containers/projectReceiptClaim/projectReceiptClaim'
import NoProjectReceiptClaimContainer from '../containers/noProjectReceiptClaim/noProjectReceiptClaim'
import CBSTurnoverWholenessConfirm from '../containers/cbsTurnoverWholenessConfirm/cbsTurnoverWholenessConfirm'
import ManualEntryBankTurnover from '../containers/manualEntryBankTurnover/manualEntryBankTurnover'
import ReviewReceiptClaimContainer from '../containers/reviewReceiptClaim/reviewReceiptClaim'
import CustomerBankLinkContainer from '../containers/customerBankLink/customerBankLink'
import BatchImport from '../containers/manualEntryBankTurnover/batchImport'
import ContractChangeContainer from '../containers/contractChange/contractChange'
import BilledARApprove from './billedAR/Approve'
import BilledARConfirm from './billedAR/Confirm'
import BadDebtsApply from './badDebts/Apply'
import BadDebtsStatus from './badDebts/Status'
import { permission } from '../index'

const mapStateToProps = state => ({
  user: state.common.user,
  error: state.common.error,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getUserInfo,
  }, dispatch)
)


// eslint-disable-next-line react/prefer-stateless-function
class IndexContainer extends React.Component {
  componentWillMount() {
    this.props.getUserInfo()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.error !== nextProps.error) {
      message.error(nextProps.error.message)
    }
  }
  getMenuComponent = (component) => {
    if (component === 'HomeContainer') {
      return HomeContainer
    }
    if (component === 'ProjectReceiptClaimContainer') {
      return ProjectReceiptClaimContainer
    }
    if (component === 'NoProjectReceiptClaimContainer') {
      return NoProjectReceiptClaimContainer
    }
    if (component === 'CBSTurnoverWholenessConfirm') {
      return CBSTurnoverWholenessConfirm
    }
    if (component === 'ManualEntryBankTurnover') {
      return ManualEntryBankTurnover
    }
    if (component === 'ReviewReceiptClaimContainer') {
      return ReviewReceiptClaimContainer
    }
    if (component === 'CustomerBankLinkContainer') {
      return CustomerBankLinkContainer
    }
    if (component === 'BatchImport') {
      return BatchImport
    }
    if (component === 'ContractChangeContainer') {
      return ContractChangeContainer
    }
    if (component === 'BilledARApprove') {
      return BilledARApprove
    }
    if (component === 'BilledARConfirm') {
      return BilledARConfirm
    }
    if (component === 'BadDebtsApply') {
      return BadDebtsApply
    }
    if (component === 'BadDebtsStatus') {
      return BadDebtsStatus
    }
  }
  getMenuRoutes = (menu) => {
    if (menu) {
      let menuRoutes = []
      if (menu.menu) {
        menu.menu.forEach((childMenu) => {
          menuRoutes = menuRoutes.concat(this.getMenuRoutes(childMenu))
        })
      }
      menuRoutes.push(<Route key={menu.key} exact path={menu.path} component={this.getMenuComponent(menu.component)} />)
      return menuRoutes
    }
    return null
  }
  render() {
    //  eslint-disable-next-line
    const { accountId } = this.props.user
    if (!accountId) {
      return null
    }
    const menuRoutes = this.getMenuRoutes(permission)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div style={{ height: '100%' }}>
          <Index {...this.props}>
            <Switch>
              {menuRoutes}
              <Route component={NoMatch} />
            </Switch>
          </Index>
        </div>
      </Router>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer)
