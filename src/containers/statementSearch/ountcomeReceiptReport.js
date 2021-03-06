import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import StatementListCom from '../../components/statementSearch/statementList'
import * as actions from '../../actions/statement'

const mapStateToProps = state => ({
  statement: state.statement,

})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...actions,
  }, dispatch)
)

// eslint-disable-next-line react/prefer-stateless-function
class OuntcomeReceiptReport extends React.Component {
  render() {
    return (<StatementListCom {...this.props} reportType = 'outcomeReceiptReport' />)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OuntcomeReceiptReport)

