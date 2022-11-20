import { BlockInfo } from '@/types/block-info';
import request from '../utils/request';
import { UrlPath } from './url-path';

export const getBlockInfoByBlockHeight = (blockHeight: number) => {
  return request.request({
    url: `${UrlPath.BLOCK_HEIGHT}/${blockHeight}?format=json`,
    method: 'get',
  });
};

export const getBlockInfoByBlockHash = (
  blockHash: string,
): Promise<BlockInfo> => {
  return request.request({
    url: `${UrlPath.BLOCK_HASH}/${blockHash}`,
    method: 'get',
  });
};
