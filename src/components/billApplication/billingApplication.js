import React from 'react'
import BillingApplyForm from './billingApplyForm'
import BillDetail from './billDetail'
import { Table, Button } from 'antd'
import './billingApplication.less'

const normalCols = [
  {
    title: '开票申请类别',
    dataIndex: 'applyType',
    width: 100,
  }, {
    title: '项目编码',
    dataIndex: 'projectCode',
    width: 100,
  }, {
    title: '签约公司',
    dataIndex: 'comName',
    width: 100,
  }, {
    title: '签约日期',
    dataIndex: 'signDate',
    width: 100,
  }, {
    title: '合同编码',
    dataIndex: 'contractNo',
    width: 100,
  }, {
    title: '发票号',
    dataIndex: 'invoiceNumber',
    width: 100,
  }, {
    title: '客户名称',
    dataIndex: 'custName',
    width: 100,
  }, {
    title: '付款条件',
    dataIndex: 'paymentTerm',
    width: 100,
  }, {
    title: '付款条款',
    dataIndex: 'paymentName',
    width: 100,
  }, {
    title: '付款阶段',
    dataIndex: 'paymentPhrases',
    width: 100,
  }, {
    title: '付款金额',
    dataIndex: 'billedArAmount',
    width: 100,
  }, {
    title: '已开票金额',
    dataIndex: 'alreadyBillingAmount',
    width: 100,
  }, {
    title: '提前开票原因',
    dataIndex: 'reason',
    width: 100,
  }, {
    title: '预计回款日期',
    dataIndex: 'backdate',
    width: 100,
  }, {
    title: '提前开票备注',
    dataIndex: 'note',
    width: 100,
  }, {
    title: '操作',
    dataIndex: '',
    render: () => <a href="#">修改</a>,
  },
]

const advanceCols = [
  {
    title: '开票申请类别',
    dataIndex: 'applyType',
    width: 150,
  }, {
    title: '签约公司',
    dataIndex: 'company',
    width: 150,
  }, {
    title: '客户名称',
    dataIndex: 'client',
    width: 150,
  }, {
    title: '项目编码',
    dataIndex: 'project',
    width: 150,
  }, {
    title: '提前开票原因',
    dataIndex: 'reason',
    width: 150,
  }, {
    title: '预计回款日期',
    dataIndex: 'datea',
    width: 150,
  }, {
    title: '提前开票备注',
    dataIndex: 'note',
    width: 150,
  }, {
    title: '操作',
    dataIndex: '',
    render: () => <a href="#">修改</a>,
  },
]

const redFontCols = [
  {
    title: '开票申请类别',
    dataIndex: 'applyType',
    width: 150,
  }, {
    title: '发票号',
    dataIndex: 'invoiceNo',
    width: 150,
  }, {
    title: '开票金额',
    dataIndex: 'invoiceMoney',
    width: 150,
  }, {
    title: '开票税额',
    dataIndex: 'invoiceshuie',
    width: 150,
  }, {
    title: '开票税率',
    dataIndex: 'invoiceRate',
    width: 150,
  }, {
    title: '项目编码',
    dataIndex: 'proNumber',
    width: 150,
  }, {
    title: '签约公司',
    dataIndex: 'company',
    width: 150,
  }, {
    title: '签约日期',
    dataIndex: 'date',
    width: 150,
  }, {
    title: '合同编码',
    dataIndex: 'contractNumber',
    width: 150,
  }, {
    title: '客户名称',
    dataIndex: 'clientName',
    width: 150,
  }, {
    title: '付款条款',
    dataIndex: 'tiaokuan',
    width: 150,
  }, {
    title: '付款阶段',
    dataIndex: 'progress',
    width: 150,
  }, {
    title: '付款金额',
    dataIndex: 'money',
    width: 150,
  }, {
    title: '操作',
    dataIndex: '',
    render: () => <a href="#">修改</a>,
  },
]

const otherCols = [
  {
    title: '开票申请类别',
    dataIndex: 'applyType',
    width: 150,
  }, {
    title: '签约公司',
    dataIndex: 'invoiceRate',
    width: 150,
  }, {
    title: '客户名称',
    dataIndex: 'clientName',
    width: 150,
  }, {
    title: '操作',
    dataIndex: '',
    render: () => <a href="#">修改</a>,
  },
]

export default class BillingApplication extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentType: '1',
      visible: false
    }
  }

  getApplyChange = (value) => {
    this.setState({
      currentType: value,
    })
  }

  getApplyColumns = () => {
    const type = this.state.currentType
    if (type === '1' || type === '2' || type === '6') {
      return normalCols
    } else if (type === '4' || type === '5') {
      return advanceCols
    } else if (type === '5' || type === '8') {
      return redFontCols
    } else if (type === '7') {
      return otherCols
    }
  }

  render() {
    const { billList } = this.props
    console.log(this.props)
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
      }),
    }
    return (
      <div>
        <BillingApplyForm
          applyChange={value => this.getApplyChange(value)}
          onQuery={this.props.billApplySearch}
        />
        <div className="form-btns">
          <Button type="primary" ghost onClick={() => this.setState({visible: true})}>开票</Button>
          <Button type="primary" ghost>编辑</Button>
        </div>
        <Table
          rowKey="receiptClaimId"
          rowSelection={rowSelection}
          bordered
          columns={this.getApplyColumns()}
          dataSource={billList}
        />
        <BillDetail
          visible={this.state.visible}
          onCancel={() => this.setState({visible: false})}
        />
      </div>
    )
  }
}

