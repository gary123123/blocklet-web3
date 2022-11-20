import { useState } from 'react';
import { getBlockInfoByBlockHash } from '@/services/block-info';
import { BlockInfo } from '@/types/block-info';
import { Row, Col } from 'antd';
import BlockDetail from './components/block-detail';
import Search from './components/search';
import TransactionList from './components/transaction-list';
import Result, { ResultStatus } from './components/result';
import styles from './index.less';

const HomePage = () => {
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchState, setSearchState] = useState(ResultStatus.EMPTY);
  const [blockData, setBlockData] = useState<BlockInfo | undefined>();
  const handleSearch = async (e) => {
    setSearchLoading(true);
    try {
      const res = await getBlockInfoByBlockHash(e);
      setSearchLoading(false);
      setBlockData(res);
      setSearchState(ResultStatus.SUCCESS);
    } catch (e) {
      setSearchState(ResultStatus.FAIL);
      setSearchLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          <Search loading={searchLoading} onSearch={handleSearch} />
        </Col>
        {searchState === ResultStatus.SUCCESS ? (
          <>
            <Col span={24} xl={14}>
              <BlockDetail data={blockData} />
            </Col>
            <Col span={24} xl={10}>
              <TransactionList data={blockData?.tx} />
            </Col>
          </>
        ) : (
          <Col span={24}>
            <Result status={searchState} />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default HomePage;
