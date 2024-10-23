import React from "react";

const AllocationTable = () => {
  const columns = [
    "Allocation",
    " of Total Supply",
    "Amount of Tokens",
    "TGE % of Allocation",
    "% of Supply Unlocked at TGE",
    "Cliff (in months)",
    "Vesting (in months)",
    "Total Vesting (in months)",
  ];
  const allocations = [
    {
      allocation: "Seed",
      totalSupply: "5,71%",
      tokens: "57 142 850",
      tgeAllocation: "6,0%",
      unlockedAtTge: "0,34%",
      cliff: "6",
      vesting: "24",
      totalVesting: "30",
    },
    {
      allocation: "Private",
      totalSupply: "7,71%",
      tokens: "77 083 483",
      tgeAllocation: "10,0%",
      unlockedAtTge: "0,77%",
      cliff: "4",
      vesting: "16",
      totalVesting: "20",
    },
    {
      allocation: "KOL",
      totalSupply: "1,17%",
      tokens: "11 666 667",
      tgeAllocation: "15,0%",
      unlockedAtTge: "0,18%",
      cliff: "0",
      vesting: "12",
      totalVesting: "12",
    },
    {
      allocation: "Community",
      totalSupply: "3,13%",
      tokens: "31 250 000",
      tgeAllocation: "17,5%",
      unlockedAtTge: "0,55%",
      cliff: "0",
      vesting: "8",
      totalVesting: "8",
    },
    {
      allocation: "Public",
      totalSupply: "2,29%",
      tokens: "22 857 000",
      tgeAllocation: "20,0%",
      unlockedAtTge: "0,46%",
      cliff: "0",
      vesting: "6",
      totalVesting: "6",
    },
    {
      allocation: "Team",
      totalSupply: "15,00%",
      tokens: "150 000 000",
      tgeAllocation: "0%",
      unlockedAtTge: "0,00%",
      cliff: "12",
      vesting: "36",
      totalVesting: "48",
    },
    {
      allocation: "Reserves",
      totalSupply: "15,00%",
      tokens: "150 000 000",
      tgeAllocation: "0%",
      unlockedAtTge: "0,00%",
      cliff: "12",
      vesting: "48",
      totalVesting: "60",
    },
    {
      allocation: "Ecosystem Dev Fund",
      totalSupply: "20,00%",
      tokens: "200 000 000",
      tgeAllocation: "0%",
      unlockedAtTge: "0,00%",
      cliff: "0",
      vesting: "36",
      totalVesting: "36",
    },
    {
      allocation: "Advisors",
      totalSupply: "5,00%",
      tokens: "50 000 000",
      tgeAllocation: "0%",
      unlockedAtTge: "0,00%",
      cliff: "6",
      vesting: "24",
      totalVesting: "30",
    },
    {
      allocation: "Airdrops",
      totalSupply: "3,00%",
      tokens: "30 000 000",
      tgeAllocation: "10%",
      unlockedAtTge: "0,30%",
      cliff: "0",
      vesting: "9",
      totalVesting: "9",
    },
    {
      allocation: "Bug Bounty",
      totalSupply: "7,00%",
      tokens: "70 000 000",
      tgeAllocation: "5%",
      unlockedAtTge: "0,35%",
      cliff: "6",
      vesting: "24",
      totalVesting: "30",
    },
    {
      allocation: "Market Liquidity",
      totalSupply: "15,00%",
      tokens: "150 000 000",
      tgeAllocation: "100%",
      unlockedAtTge: "15%",
      cliff: "0",
      vesting: "0",
      totalVesting: "0",
    },
  ];

  return (
    <div className="w-full overflow-x-auto rounded-lg text-xs">
      <h2 className="my-4 text-base font-semibold flex justify-center">TOKEN ALLOCATION & VESTING SCHEDULE</h2>
      <table className="w-full min-w-max">
        <thead>
          <tr className="border-b border-gray-800">
            {columns.map((column) => (
              <th
                key={column}
                className="p-4 text-left  font-semibold text-gray-400"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allocations.map((row, index) => (
            <tr
              key={row.allocation}
              className={`
                border-b border-gray-800 hover:bg-gray-900/50 transition-colors
              `}
            >
              <td className="p-4  font-medium text-white">{row.allocation}</td>
              <td className="p-4  text-white">{row.totalSupply}</td>
              <td className="p-4  text-white">{row.tokens}</td>
              <td className="p-4  text-white">{row.tgeAllocation}</td>
              <td className="p-4  text-white">{row.unlockedAtTge}</td>
              <td className="p-4  text-white">{row.cliff}</td>
              <td className="p-4  text-white">{row.vesting}</td>
              <td className="p-4  text-white">{row.totalVesting}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllocationTable;
