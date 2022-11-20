export interface BlockInfo {
  hash: string;
  ver: number;
  prev_block: string;
  mrkl_root: string;
  time: number;
  bits: number;
  next_block: string[];
  fee: number;
  nonce: number;
  n_tx: number;
  size: number;
  block_index: number;
  main_chain: boolean;
  height: number;
  weight: number;
  tx: TxInfo[];
}

export interface TxInfo {
  hash: string;
  ver: number;
  vin_sz: number;
  vout_sz: number;
  size: number;
  weight: number;
  fee: number;
  relayed_by: string;
  lock_time: number;
  tx_index: number;
  double_spend: boolean;
  time: number;
  block_index: number;
  block_height: number;
  inputs: Input[];
  out: Out[];
}

interface Out {
  type: number;
  spent: boolean;
  value: number;
  spending_outpoints: Spendingoutpoint[];
  n: number;
  tx_index: number;
  script: string;
  addr?: string;
}

interface Input {
  sequence: number;
  witness: string;
  script: string;
  index: number;
  prev_out: Prevout;
}

interface Prevout {
  n: number;
  script: string;
  spending_outpoints: Spendingoutpoint[];
  spent: boolean;
  tx_index: number;
  type: number;
  value: number;
  addr?: string;
}

interface Spendingoutpoint {
  n: number;
  tx_index: number;
}
