import React from 'react'

interface Props {
  status: string
}
const StatusDisplay: React.FC<Props> = ({ status }: Props) => {
    const getColor = (status: string) => {
      let color;
      switch (status) {
        case "done":
          color = "bg-green-200";
          return color;
        case "started":
          color = "bg-yellow-200";
          return color;
        case "not started":
          color = "bg-red-200";
          return color;
        case "delay":
          color = "bg-orange-500	";
          return color;
        default:
          color = "bg-slate-700";
      }
      return color;
    };
    return (
      <span
        className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
          status
        )}`}
      >
        {status}
      </span>
    );
  };
  export default StatusDisplay;