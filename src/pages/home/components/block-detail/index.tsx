import { ProDescriptions } from '@ant-design/pro-components';
import { Typography, Tooltip } from 'antd';
import { BlockInfo } from '@/types/block-info';
import moment from 'moment';
import { formatHash } from '@/utils/format';

const { Paragraph } = Typography;

interface BlockDetailProps {
  data?: BlockInfo;
}
const HashText = ({ hash }) => {
  return (
    <Paragraph
      style={{ marginBottom: 0 }}
      copyable={{ text: hash, tooltips: false }}
    >
      <Tooltip title={hash}>{formatHash(hash)}</Tooltip>
    </Paragraph>
  );
};

const BlockDetail = ({ data }: BlockDetailProps) => {
  const columns = [
    {
      title: 'bits',
      dataIndex: 'bits',
    },
    {
      title: 'block_index',
      dataIndex: 'block_index',
    },

    {
      title: 'fee',
      dataIndex: 'fee',
    },

    {
      title: 'height',
      dataIndex: 'height',
    },
    {
      title: 'nonce',
      dataIndex: 'nonce',
    },

    {
      title: 'size',
      dataIndex: 'size',
    },
    {
      title: 'time',
      dataIndex: 'time',
      render: (_, record) => {
        return moment(record.time * 1000).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
    {
      title: 'mrkl_root',
      dataIndex: 'mrkl_root',
      render: (_, record) => {
        return <HashText hash={record.mrkl_root} />;
      },
    },
    {
      title: 'hash',
      dataIndex: 'hash',
      copyable: true,
      render: (_, record) => {
        return <HashText hash={record.hash} />;
      },
    },
    {
      title: 'prev_block',
      dataIndex: 'prev_block',
      render: (_, record) => {
        return <HashText hash={record.prev_block} />;
      },
    },
    {
      title: 'next_block',
      dataIndex: 'next_block',
      render: (_, record) => {
        return <HashText hash={record?.next_block?.[0]} />;
      },
    },
  ];
  return (
    <ProDescriptions
      column={{ xs: 1, sm: 2 }}
      dataSource={data}
      columns={columns}
      title="Block Info"
    />
  );
};

export default BlockDetail;
