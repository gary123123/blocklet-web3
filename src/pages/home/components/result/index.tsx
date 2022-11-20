import React from 'react';
import { Result } from 'antd';

export enum ResultStatus {
  SUCCESS = 'success',
  FAIL = 'fail',
  EMPTY = 'empty',
}
const resultInfo = {
  [ResultStatus.EMPTY]: {
    text: 'Please enter block hash to search',
    status: undefined,
  },
  [ResultStatus.FAIL]: {
    text: "Oops! We couldn't find what you are looking for.",
    status: 'warning',
  },
};
interface ResultDomProps {
  status: ResultStatus;
}
const ResultDom = ({ status }: ResultDomProps) => {
  return (
    <Result
      status={resultInfo[status].status}
      title={resultInfo[status].text}
    />
  );
};

export default ResultDom;
