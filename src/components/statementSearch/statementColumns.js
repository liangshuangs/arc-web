import currency from '../../util/currency'
//收款信息查询表
const reciptMoneyInfoCols = [{
  title: '签约公司',
  dataIndex: 'signCompany',
  width: 100,
}, {
  title: '项目编号',
  dataIndex: 'projectNo',
  width: 250,
}, {
  title: '节点',
  dataIndex: 'node',
  width: 100,
}, {
  title: '付款百分比',
  dataIndex: 'payParam',
  width: 100,
},
  {
    title: '付款条款',
    dataIndex: 'payParamItem',
    width: 100,
  }, {
    title: '收款币种',
    dataIndex: 'currency',
    width: 80,
  }, {
    title: '应收金额',
    dataIndex: 'shouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  }, {
    title: '收款日期',
    dataIndex: 'recipDate',
    width: 120,
  },
  {
    title: '收款编号',
    dataIndex: 'recipNo',
    width: 120,
  }, {
    title: '收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  }, {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 120,
  },
  {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 120,
  },
  {
    title: '项目经理',
    dataIndex: 'projectManager',
    width: 80,
  },
  {
    title: '销售经理',
    dataIndex: 'saleManager',
    width: 80,
  },
  {
    title: '立项部门',
    dataIndex: 'projectBU',
    width: 80,
  },
  {
    title: '已开票金额',
    dataIndex: 'billedMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
]
//发票信息查询表
const billInfocomCols = [{
  title: '签约公司',
  dataIndex: 'signCompany',
  width: 100,
}, {
  title: '项目编号',
  dataIndex: 'projectNo',
  width: 250,
}, {
  title: '节点',
  dataIndex: 'node',
  width: 100,
}, {
  title: '付款百分比',
  dataIndex: 'payParam',
  width: 100,
},
  {
    title: '付款条款',
    dataIndex: 'payParamItem',
    width: 100,
  }, {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  }, {
    title: '应收金额',
    dataIndex: 'shouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '申请开票金额',
    dataIndex: 'applyBillMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '开票日期',
    dataIndex: 'billDate',
    width: 100,
  },
  {
    title: '发票号',
    dataIndex: 'billNo',
    width: 100,
  },
  {
    title: '开票金额',
    dataIndex: 'billMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '开票类型',
    dataIndex: 'billType',
    width: 80,
  },
  {
    title: '发票内容',
    dataIndex: 'billInfo',
    width: 200,
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    width: 200,
  },
  {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 120,
  },
  {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 120,
  },
  {
    title: '项目经理',
    dataIndex: 'projectManager',
    width: 80,
  },
  {
    title: '销售经理',
    dataIndex: 'saleManager',
    width: 80,
  },
  {
    title: '立项部门',
    dataIndex: 'projectBU',
    width: 80,
  },
  {
    title: '收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },

]
//发票及收款信息查询表
const billAndReciptMoneyCols = [{
  title: '签约公司',
  dataIndex: 'signCompany',
  width: 100,
}, {
  title: '项目编号',
  dataIndex: 'projectNo',
  width: 250,
}, {
  title: '节点',
  dataIndex: 'node',
  width: 100,
},
  {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 150,
  },
  {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 150,
  },
  {
    title: '付款百分比',
    dataIndex: 'payParam',
    width: 100,
  },
  {
    title: '付款条款',
    dataIndex: 'payParamItem',
    width: 100,
  }, {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  }, {
    title: '应收金额',
    dataIndex: 'shouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '应收余额',
    dataIndex: 'shouldReciptRemianMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '收款日期',
    dataIndex: 'reciptDate',
    width: 120,
  },
  {
    title: '收款编号',
    dataIndex: 'reciptNo',
    width: 80,
  },
  {
    title: '收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '开票日期',
    dataIndex: 'billDate',
    width: 120,
  },
  {
    title: '开票金额',
    dataIndex: 'billMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '发票号',
    dataIndex: 'billNo',
    width: 80,
  },
  {
    title: '扣款',
    dataIndex: 'deductMmoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '坏账划销',
    dataIndex: 'badBill',
    width: 100,
  },
  {
    title: '其他',
    dataIndex: 'other',
    width: 200,
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
    width: 200,
  },
  {
    title: '立项BU',
    dataIndex: 'projectBU',
    width: 100,
  },
]
// 应收账款询证函报表
const shouldReciptCols = [{
  title: '客户名称',
  dataIndex: 'constomerName',
  width: 200,
}, {
  title: '项目编号',
  dataIndex: 'projectNo',
  width: 100,
}, {
  title: '合同名称',
  dataIndex: 'contractName',
  width: 200,
},
  {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 150,
  },
  {
    title: '合同总额',
    dataIndex: 'contractTotalMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '其他金额（扣款等）',
    dataIndex: 'otherMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '已收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '合同未收款金额',
    dataIndex: 'contractDidnotReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '开票金额',
    dataIndex: 'billMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '开票金额',
    dataIndex: 'billDidnotReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
]
// 项目综合信息查询报表
const projectTotalCols = [{
  title: '签约公司',
  dataIndex: 'siginCommey',
  width: 200,
}, {
  title: '项目编码',
  dataIndex: 'projectNo',
  width: 100,
}, {
  title: '项目名称',
  dataIndex: 'projectName',
  width: 200,
}, {
  title: '节点',
  dataIndex: 'node',
  width: 80,
},
  {
    title: '合同号',
    dataIndex: 'contractNo',
    width: 120,
  },
  {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 200,
  },
  {
    title: '客户名称',
    dataIndex: 'constromerName',
    width: 200,
  },
  {
    title: '签约时间',
    dataIndex: 'siginDate',
    width: 120,
  },
  {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  },
  {
    title: '合同总额',
    dataIndex: 'contactTotalMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '扣款金额',
    dataIndex: 'remainMoeny',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '累计应收账款',
    dataIndex: 'totalShouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '应收账款余额',
    dataIndex: 'shouldReciptRemainMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '累计已收账款',
    dataIndex: 'totalReciptedMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '收款比例',
    dataIndex: 'reciptRate',
    width: 80,
  },
  {
    title: '累计已开票金额',
    dataIndex: 'totalBilledMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '未开票金额',
    dataIndex: 'notBilledMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: 'BU',
    dataIndex: 'BU',
    width: 80,
  },
  {
    title: '项目经理',
    dataIndex: 'projectManager',
    width: 80,
  },
]
// 整体合同内容查询
const totalContractContentColumns = [
  {
    title: '项目编号',
    dataIndex: 'projectNo',
    width: 100,
  }, {
    title: '合同编号',
    dataIndex: 'contractNo',
    width: 150,
  }, {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 200,
  },
  {
    title: '签约日期',
    dataIndex: 'siginDate',
    width: 120,
  },
  {
    title: '签约公司',
    dataIndex: 'siginCOmey',
    width: 200,
  },
  {
    title: '客户名称',
    dataIndex: 'comstromerName',
    width: 200,
  },
  {
    title: '签约部门',
    dataIndex: 'siginBu',
    width: 100,
  },
  {
    title: '立项部门',
    dataIndex: 'projectBu',
    width: 100,
  },
  {
    title: '立项区域',
    dataIndex: 'projecteara',
    width: 100,
  },
  {
    title: '销售经理',
    dataIndex: 'saleManager',
    width: 100,
  },
  {
    title: '项目经理',
    dataIndex: 'projectManager',
    width: 100,
  },
  {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  },
  {
    title: '合同总额',
    dataIndex: 'contractTotalMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: 'BILLED AR',
    dataIndex: 'billedAR',
    width: 80,
  },
  {
    title: '累计开票金额',
    dataIndex: 'totalBillMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '已回款总额',
    dataIndex: 'totalReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
]
// 转包项目表
const turnProColumns = [{
  title: '签约公司',
  dataIndex: 'siginCommey',
  width: 200,
}, {
  title: '合同名称',
  dataIndex: 'contractName',
  width: 200,
}, {
  title: '合同号',
  dataIndex: 'contractNo',
  width: 100,
}, {
  title: '项目编码',
  dataIndex: 'projectNo',
  width: 100,
}, {
  title: '节点',
  dataIndex: 'node',
  width: 80,
},
  {
    title: '付款百分比',
    dataIndex: 'payParam',
    width: 100,
  },
  {
    title: '付款条款',
    dataIndex: 'payParamItem',
    width: 100,
  },
  {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  },
  {
    title: '应收金额',
    dataIndex: 'shouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '收款日期',
    dataIndex: 'reciptDate',
    width: 120,
  },
  {
    title: '收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '客户名称',
    dataIndex: 'constromerName',
    width: 200,
  },
  {
    title: '开票日期',
    dataIndex: 'billDate',
    width: 120,
  },
  {
    title: '开票金额',
    dataIndex: 'billedMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '发票号',
    dataIndex: 'billNo',
    width: 80,
  },
  {
    title: '签约公司',
    dataIndex: 'siginCompany',
    width: 200,
  },
  {
    title: '合同名称',
    dataIndex: 'contractName',
    width: 200,
  },
  {
    title: '合同号',
    dataIndex: 'contractNo',
    width: 100,
  },
  {
    title: '项目编码',
    dataIndex: 'projectNo',
    width: 100,
  },
  {
    title: '节点',
    dataIndex: 'node',
    width: 80,
  },
  {
    title: '付款百分比',
    dataIndex: 'payParam',
    width: 80,
  },
  {
    title: '付款条款',
    dataIndex: 'payParamItem',
    width: 100,
  },
  {
    title: '币种',
    dataIndex: 'currency',
    width: 80,
  },
  {
    title: '应收金额',
    dataIndex: 'shouldReciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
  {
    title: '收款日期',
    dataIndex: 'reciptDate',
    width: 120,
  },
  {
    title: '收款金额',
    dataIndex: 'reciptMoney',
    width: 100,
    render: (text,rocord,index)=>(text ? currency(text) : currency(0))
  },
]



export {
  reciptMoneyInfoCols,
  billInfocomCols,
  billAndReciptMoneyCols,
  shouldReciptCols,
  projectTotalCols,
  totalContractContentColumns,
  turnProColumns,
}
