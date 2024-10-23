import React from "react";

type Props = {
  data: any
  title: string
}

const AllocationTable = (props: Props) => {
    const { data: { rows, columns }, title } = props ?? {}
  return (
    <div className="w-full overflow-x-auto rounded-lg text-xs">
      <h2 className="my-4 text-base font-semibold flex justify-center">{ title }</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-black">
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 text-left  font-semibold text-gray-400"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.allocation}
              className={`
                border-b border-black hover:bg-gray-900/50 transition-colors
              `}
            >
              {columns.map((col) => (
              <td key={col.key} className="p-4  font-medium text-white">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllocationTable;
