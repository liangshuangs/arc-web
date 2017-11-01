/* eslint-disable no-unused-vars,react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Pagination, message } from 'antd'
import moment from 'moment'
import ProjectReceiptClaimSearchWithForm from './projectReceiptClaimSearch'
import ProjectReceiptClaimModal from '../../containers/projectReceiptClaim/projectReceiptClaimModal'

const dateFormat = 'YYYY-MM-DD'
const columns = [{
  title: '数据状态',
  dataIndex: 'statusDesc',
  width: 100,
  fixed: 'left',
}, {
  title: '收款日期',
  dataIndex: 'receiptDate',
  width: 100,
  render: text => moment(text).format(dateFormat),
}, {
  title: '收款来源',
  dataIndex: 'sourceType',
  width: 100,
}, {
  title: '收款分类',
  dataIndex: 'claimType',
  width: 100,
}, {
  title: '客户名称',
  dataIndex: 'custName',
  width: 300,
}, {
  title: '认款金额',
  dataIndex: 'claimAmount',
  width: 100,
}, {
  title: '收款用途',
  dataIndex: 'receiptUse',
  width: 100,
}, {
  title: '备注',
  dataIndex: 'accountantApproveMessage',
  width: 100,
}, {
  title: '币种',
  dataIndex: 'currency',
  width: 100,
}, {
  title: '收款金额',
  dataIndex: 'receiptAmount',
  width: 100,
}, {
  title: '项目编码',
  dataIndex: 'projectNo',
  width: 100,
}, {
  title: '项目阶段',
  dataIndex: 'paymentPhrases',
  width: 100,
}, {
  title: '付款百分比',
  dataIndex: 'paymentPercent',
  width: 100,
}, {
  title: '合同编码',
  dataIndex: 'contractNo',
  width: 100,
}, {
  title: '发票号',
  dataIndex: 'invoiceNo',
  width: 100,
}, {
  title: 'SBU',
  dataIndex: 'sbuId',
  width: 100,
}, {
  title: '部门',
  dataIndex: 'deptId',
  width: 100,
}, {
  title: '公司',
  dataIndex: 'companyName',
  width: 100,
}, {
  title: '收款日期',
  dataIndex: 'glDate',
  width: 100,
  render: text => moment(text).format(dateFormat),
}, {
  title: '银行流水号',
  dataIndex: 'bankTransactionNo',
  width: 200,
}, {
  title: '付款客户名称',
  dataIndex: 'payCustName',
  width: 100,
}, {
  title: '客户付款银行',
  dataIndex: 'payBankName',
  width: 100,
}, {
  title: '客户付款银行账号',
  dataIndex: 'payBankAccount',
  width: 150,
}, {
  title: '收款编号',
  dataIndex: 'receiptNo',
  width: 100,
}, {
  title: '认款人',
  dataIndex: 'accountantName',
  width: 100,
},
]

export default class ContractList extends React.Component {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
    status: '21',
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.receiptClaimListRefresh !== nextProps.receiptClaimListRefresh) {
      this.handleQuery()
    }
  }
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRowKeys, selectedRows })
  }
  queryParam = {
    pageInfo: {
      pageNo: 1,
      pageSize: 10,
    },
    custId: '',
    sourceType: '',
    projectIds: '',
    receiptMethodId: '',
    receiptDates: '',
    contractIds: '',
    status: this.state.status,
    receiptNo: '',
  }
  handleChangePage = (page) => {
    this.queryParam.pageInfo.pageNo = page
    this.handleQuery()
  }
  handleChangeSize = (current, size) => {
    this.queryParam.pageInfo.pageNo = current
    this.queryParam.pageInfo.pageSize = size
    this.handleQuery()
  }
  handleChangeParam = (param) => {
    this.queryParam = { ...this.queryParam, ...param }
    this.handleQuery()
  }
  handleQuery = () => {
    // this.props.history.push('112')
    // console.log(this.queryParam)
    this.setState({ selectedRowKeys: [], selectedRows: [] })
    this.props.getReceiptList(this.queryParam)
  }

  handleOpenClaim = () => {
    if (this.state.selectedRows.length === 0) {
      message.error('请选择要认款的收款流水')
      return
    }
    if (this.state.selectedRows.length > 1) {
      message.error('一次只能对一条收款流水进行认款')
      return
    }
    this.props.openClaim(this.state.selectedRows[0])
  }
  handleReject = () => {
    if (this.state.selectedRowKeys.length === 0) {
      message.error('请选择要拒绝的收款流水')
      return
    }
    this.props.reject(this.state.selectedRowKeys)
  }
  render() {
    const { selectedRowKeys } = this.state
    const rowSelection = {
      type: 'checkBox',
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div>
        <ProjectReceiptClaimSearchWithForm
          onQuery={this.handleChangeParam}
        />
        <Button type="primary" onClick={this.handleOpenClaim}>{this.state.status === '21' ? '' : '重新'}认款</Button>&nbsp;&nbsp;
        <Button type="danger" onClick={this.handleReject}>拒绝</Button>
        <br /><br />
        <Table
          rowKey="receiptClaimId"
          rowSelection={rowSelection}
          columns={columns}
          bordered
          size="middle"
          dataSource={this.props.receiptClaimList.result}
          scroll={{ x: '260%' }}
          pagination={{
            current: this.props.receiptClaimList.pageNo,
            total: this.props.receiptClaimList.total,
            pageSize: this.props.receiptClaimList.pageSize,
            onChange: this.handleChangePage,
            showSizeChanger: true,
            onShowSizeChange: this.handleChangeSize,
          }}
        />
        <ProjectReceiptClaimModal />
      </div>
    )
  }
}

ContractList.propTypes = {
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired,
  // }).isRequired,
  getReceiptList: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired,
  openClaim: PropTypes.func.isRequired,
  receiptClaimList: PropTypes.shape({
    pageNo: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    result: PropTypes.arrayOf.isRequired,
  }).isRequired,
  receiptClaimListRefresh: PropTypes.number.isRequired,
}