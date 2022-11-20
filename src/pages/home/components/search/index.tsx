import { Input } from 'antd';
const { Search } = Input;

interface SearchDomProps {
  onSearch: (v: string) => void;
  loading: boolean;
}
const SearchDom = ({ onSearch, loading }: SearchDomProps) => {
  return (
    <Search
      placeholder="Search Block Hash"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      loading={loading}
      // defaultValue="00000000000000000007878ec04bb2b2e12317804810f4c26033585b3f81ffaa"
    />
  );
};

export default SearchDom;
