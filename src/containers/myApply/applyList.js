/**
 * Created by liangshuang on 17/12/1.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ApplaySearchCon from '../../components/myApply/applySearch'
import { getMyApplyList, approveSubmit, approveReject, myApplyInfo, billApproveSave } from '../../actions/myApply'
import { fileDown } from '../../actions/billStatusManage/billStatusManage'
import { getContractUrl } from '../../actions/billApplication'

const mapStateToProps = state => ({
  myApply: state.myApply,
  contractUrl: state.billApplication.contractUrl,
})
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    getMyApplyList,
    approveSubmit,
    approveReject,
    myApplyInfo,
    billApproveSave,
    fileDown,
    getContractUrl,
  }, dispatch)
)
// eslint-disable-next-line react/prefer-stateless-function
class ApplyListContainer extends React.Component {
  render() {
    return (
      <ApplaySearchCon {...this.props} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyListContainer)

