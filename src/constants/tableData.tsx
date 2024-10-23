// Sales Table Structure
const SALES_TABLE = {
  columns: [
    {
      key: "investment_round",
      label: "Investment Round"
    },
    {
      key: "price_per_token",
      label: "Price Per Token"
    },
    {
      key: "amount_of_tokens",
      label: "Amount of Tokens"
    },
    {
      key: "allocation_of_total_supply",
      label: "Allocation of Total Supply"
    },
    {
      key: "allocation_of_raise",
      label: "Allocation of Raise"
    },
    {
      key: "raise_amount",
      label: "Raise Amount"
    },
    {
      key: "valuation",
      label: "Valuation"
    }
  ],
  rows: [
    {
      investment_round: "Seed",
      price_per_token: 0.0175,
      amount_of_tokens: 57142850,
      allocation_of_total_supply: "5.714285%",
      allocation_of_raise: "20%",
      raise_amount: 1000000,
      valuation: 17500000
    },
    {
      investment_round: "Private",
      price_per_token: 0.0240,
      amount_of_tokens: 77083483,
      allocation_of_total_supply: "7.708348%",
      allocation_of_raise: "37%",
      raise_amount: 1850004,
      valuation: 24000000
    },
    {
      investment_round: "KOL",
      price_per_token: 0.0300,
      amount_of_tokens: 11666667,
      allocation_of_total_supply: "1.166667%",
      allocation_of_raise: "7%",
      raise_amount: 350000,
      valuation: 30000000
    },
    {
      investment_round: "Community",
      price_per_token: 0.0320,
      amount_of_tokens: 31250000,
      allocation_of_total_supply: "3.125000%",
      allocation_of_raise: "20%",
      raise_amount: 1000000,
      valuation: 32000000
    },
    {
      investment_round: "Public",
      price_per_token: 0.0350,
      amount_of_tokens: 22857000,
      allocation_of_total_supply: "2.285700%",
      allocation_of_raise: "16%",
      raise_amount: 799995,
      valuation: 35000000
    },
    {
      investment_round: "Total",
      price_per_token: "-",
      amount_of_tokens: 200000000,
      allocation_of_total_supply: "20.00%",
      allocation_of_raise: "100%",
      raise_amount: 4999998,
      valuation: "-"
    }
  ]
};

// Allocation Table Structure
const ALLOCATION_TABLE = {
  columns: [
    {
      key: "allocation",
      label: "Allocation"
    },
    {
      key: "total_supply",
      label: "% of Total Supply"
    },
    {
      key: "amount_of_tokens",
      label: "Amount of Tokens"
    },
    {
      key: "tge_allocation",
      label: "TGE % of Allocation"
    },
    {
      key: "unlocked_at_tge",
      label: "% of Supply Unlocked at TGE"
    },
    {
      key: "cliff",
      label: "Cliff (in months)"
    },
    {
      key: "vesting",
      label: "Vesting (in months)"
    },
    {
      key: "total_vesting",
      label: "Total Vesting (in months)"
    }
  ],
  rows: [
    {
      allocation: "Seed",
      total_supply: "5,71%",
      amount_of_tokens: "57 142 850",
      tge_allocation: "6,0%",
      unlocked_at_tge: "0,34%",
      cliff: "6",
      vesting: "24",
      total_vesting: "30"
    },
    {
      allocation: "Private",
      total_supply: "7,71%",
      amount_of_tokens: "77 083 483",
      tge_allocation: "10,0%",
      unlocked_at_tge: "0,77%",
      cliff: "4",
      vesting: "16",
      total_vesting: "20"
    },
    {
      allocation: "KOL",
      total_supply: "1,17%",
      amount_of_tokens: "11 666 667",
      tge_allocation: "15,0%",
      unlocked_at_tge: "0,18%",
      cliff: "0",
      vesting: "12",
      total_vesting: "12"
    },
    {
      allocation: "Community",
      total_supply: "3,13%",
      amount_of_tokens: "31 250 000",
      tge_allocation: "17,5%",
      unlocked_at_tge: "0,55%",
      cliff: "0",
      vesting: "8",
      total_vesting: "8"
    },
    {
      allocation: "Public",
      total_supply: "2,29%",
      amount_of_tokens: "22 857 000",
      tge_allocation: "20,0%",
      unlocked_at_tge: "0,46%",
      cliff: "0",
      vesting: "6",
      total_vesting: "6"
    },
    {
      allocation: "Team",
      total_supply: "15,00%",
      amount_of_tokens: "150 000 000",
      tge_allocation: "0%",
      unlocked_at_tge: "0,00%",
      cliff: "12",
      vesting: "36",
      total_vesting: "48"
    },
    {
      allocation: "Reserves",
      total_supply: "15,00%",
      amount_of_tokens: "150 000 000",
      tge_allocation: "0%",
      unlocked_at_tge: "0,00%",
      cliff: "12",
      vesting: "48",
      total_vesting: "60"
    },
    {
      allocation: "Ecosystem Dev Fund",
      total_supply: "20,00%",
      amount_of_tokens: "200 000 000",
      tge_allocation: "0%",
      unlocked_at_tge: "0,00%",
      cliff: "0",
      vesting: "36",
      total_vesting: "36"
    },
    {
      allocation: "Advisors",
      total_supply: "5,00%",
      amount_of_tokens: "50 000 000",
      tge_allocation: "0%",
      unlocked_at_tge: "0,00%",
      cliff: "6",
      vesting: "24",
      total_vesting: "30"
    },
    {
      allocation: "Airdrops",
      total_supply: "3,00%",
      amount_of_tokens: "30 000 000",
      tge_allocation: "10%",
      unlocked_at_tge: "0,30%",
      cliff: "0",
      vesting: "9",
      total_vesting: "9"
    },
    {
      allocation: "Bug Bounty",
      total_supply: "7,00%",
      amount_of_tokens: "70 000 000",
      tge_allocation: "5%",
      unlocked_at_tge: "0,35%",
      cliff: "6",
      vesting: "24",
      total_vesting: "30"
    },
    {
      allocation: "Market Liquidity",
      total_supply: "15,00%",
      amount_of_tokens: "150 000 000",
      tge_allocation: "100%",
      unlocked_at_tge: "15%",
      cliff: "0",
      vesting: "0",
      total_vesting: "0"
    }
  ]
};

export { SALES_TABLE, ALLOCATION_TABLE }