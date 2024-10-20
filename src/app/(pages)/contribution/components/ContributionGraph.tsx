import React from 'react';

interface Point {
  Point: string;
  description: string;
  link: string;
  createdAt: string;
}

interface ContributionGraphProps {
  points?: Point[];
}

const ContributionGraph: React.FC<ContributionGraphProps> = ({ points = [] }) => {
  const today = new Date();
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

  const daysArray = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(oneYearAgo);
    date.setDate(date.getDate() + i);
    return date;
  });

  const getContributionCount = (date: Date) => {
    return points.filter(point => {
      const pointDate = new Date(point.createdAt);
      return pointDate.toDateString() === date.toDateString();
    }).length;
  };

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100';
    if (count < 3) return 'bg-green-200';
    if (count < 5) return 'bg-green-300';
    if (count < 7) return 'bg-green-400';
    return 'bg-green-500';
  };

  const formatDate = (date: Date): string => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contribution Graph</h2>
      <div className="flex flex-wrap gap-1">
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`w-3 h-3 ${getColor(getContributionCount(date))}`}
            title={`${formatDate(date)}: ${getContributionCount(date)} contributions`}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Contributions</h3>
        {points.length > 0 ? (
          <ul className="space-y-2">
            {points.map((point, index) => (
              <li key={index} className="border p-2 rounded">
                <a href={point.link} className="text-blue-500 hover:underline">{point.Point}</a>
                <p className="text-sm text-gray-600">{point.description}</p>
                <p className="text-xs text-gray-400">{formatDate(new Date(point.createdAt))}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No contributions yet.</p>
        )}
      </div>
    </div>
  );
};

export default ContributionGraph;