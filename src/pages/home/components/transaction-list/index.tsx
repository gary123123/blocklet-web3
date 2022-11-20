import { Collapse, Space, Pagination, Row, Col, Typography, Table } from 'antd';
import { TxInfo } from '@/types/block-info';
import { useState, useEffect } from 'react';
import { formatHash, formatBtcValue, formatTxAddress } from '@/utils/format';
import moment from 'moment';
import styles from './index.less';

const { Paragraph } = Typography;
const { Panel } = Collapse;

interface TransactionListProps {
  data?: TxInfo[];
}
const PAGE_SIZE = 10;
const TransactionList = ({ data }: TransactionListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<TxInfo[]>([]);
  const renderHeader = (index, itemValue: TxInfo) => {
    const txIndex = (currentPage - 1) * PAGE_SIZE + index + 1;
    const btvValue = itemValue.out.reduce((prev, cur) => {
      return prev + cur.value;
    }, 0);
    return (
      <Row>
        <Col flex={1}>
          <div>
            TX{txIndex}·Hash {formatHash(itemValue.hash)}
          </div>
          <div>
            {moment(itemValue.time * 1000).format('YYYY-MM-DD HH:mm:ss')}
          </div>
        </Col>
        <Col>
          <div>{formatBtcValue(btvValue)} BTC</div>
          <div>Fee {itemValue.fee / 1000}K</div>
        </Col>
      </Row>
    );
  };

  const renderContent = (itemValue: TxInfo) => {
    return (
      <Row>
        <Col span={24} sm={12}>
          <Table
            pagination={false}
            rowKey="script"
            columns={[
              {
                dataIndex: 'key',
                title: 'FROM',
                render: (_, item, index) => {
                  return (
                    <Row>
                      <Col>{index + 1}. </Col>
                      <Col flex={1}>
                        <div>
                          <Paragraph
                            style={{ marginBottom: 0 }}
                            copyable={{
                              text: item.prev_out?.addr,
                              tooltips: false,
                            }}
                          >
                            {formatTxAddress(item.prev_out?.addr)}
                          </Paragraph>
                        </div>
                        <div>{formatBtcValue(item.prev_out.value)} BTC</div>
                      </Col>
                    </Row>
                  );
                },
              },
            ]}
            dataSource={itemValue.inputs}
          />
        </Col>
        <Col span={24} sm={12}>
          <Table
            pagination={false}
            rowKey="script"
            columns={[
              {
                dataIndex: 'key',
                title: 'TO',
                render: (_, item, index) => {
                  return (
                    <Row>
                      <Col>{index + 1}. </Col>
                      <Col flex={1}>
                        <div>
                          <Paragraph
                            style={{ marginBottom: 0 }}
                            copyable={{ text: item.addr, tooltips: false }}
                          >
                            {formatTxAddress(item.addr)}
                          </Paragraph>
                        </div>
                        <div>{formatBtcValue(item.value)} BTC</div>
                      </Col>
                    </Row>
                  );
                },
              },
            ]}
            dataSource={itemValue.out}
          />
        </Col>
      </Row>
    );
  };
  const handlePageChange = (e) => {
    setCurrentData(data?.slice((e - 1) * PAGE_SIZE, e * PAGE_SIZE) || []);
    setCurrentPage(e);
  };
  useEffect(() => {
    handlePageChange(1);
  }, [data]);

  return (
    <Space
      size={10}
      direction="vertical"
      align="center"
      className={styles.container}
    >
      {currentData.map((item, index) => (
        <Collapse key={item.hash} expandIconPosition="end">
          <Panel header={renderHeader(index, item)} key="1">
            {renderContent(item)}
          </Panel>
        </Collapse>
      ))}
      <div className={styles.pagination}>
        <Pagination
          responsive
          defaultCurrent={1}
          current={currentPage}
          onChange={handlePageChange}
          total={data?.length || 0}
          showSizeChanger={false}
        />
      </div>
    </Space>
  );
};

export default TransactionList;
