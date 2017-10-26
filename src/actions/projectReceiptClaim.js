import { httpApi } from '../http/reduxRequestMiddleware'

// eslint-disable-next-line import/prefer-default-export
export function getReceiptList(queryParam) {
  return {
    [httpApi]: {
      url: '/arc/receiptclaim/claim/search/project',
      options: {
        method: 'POST',
        body: queryParam,
      },
      types: ['GET_PROJECT_RECEIPT_LIST_SUCCESS'],
    },
  }
}

export function reject(receiptClaimIds) {
  return {
    [httpApi]: {
      url: '/arc/receiptclaim/reject',
      options: {
        method: 'POST',
        body: receiptClaimIds,
      },
      types: ['PROJECT_RECEIPT_REJECT_SUCCESS'],
    },
  }
}
