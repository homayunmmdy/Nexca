import { Button } from "@/components";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { DeleteBlock } from "../../admin/components/elements";
// @ts-ignore
const ContributionGraph = ({ contributions }) => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  const daysArray = Array.from({ length: 365 }, (_, i) => {
    const date = new Date(oneYearAgo);
    date.setDate(date.getDate() + i);
    return date;
  });

  const getContributionCount = (date: Date) => {
    // @ts-ignore
    return contributions?.filter((contribute) => {
      const contributionDate = new Date(contribute.date);
      return contributionDate.toDateString() === date.toDateString();
    }).length;
  };

  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-200";
    if (count < 3) return "bg-indigo-500";
    if (count < 5) return "bg-indigo-600";
    if (count < 7) return "bg-indigo-700";
    return "bg-indigo-800";
  };

  const formatDate = (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div className="mx-auto w-[94%] pt-4 md:w-[92%]">
      <h2 className="mb-4 text-2xl font-bold">Contribution Graph</h2>
      <div className="flex flex-wrap gap-1">
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`w-6 h-6 ${getColor(getContributionCount(date))}`}
            title={`${formatDate(date)}: ${getContributionCount(
              date
            )} contributions`}
          />
        ))}
      </div>
      <div className="mt-4">
        <h3 className="mb-2 text-xl font-semibold">Contributions</h3>
        {contributions?.length > 0 ? (
          <div className="group space-y-2">
            {/* @ts-ignore */}
            {contributions?.map((contribute, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 1 }}
                key={index}
                className="rounded border p-3 hover:border-indigo-600"
              >
                <div className="flex items-center justify-between">
                  {contribute.link ? (
                    <Link
                      href={contribute.link}
                      className="text-indigo-600 hover:underline group-hover:text-indigo-600"
                    >
                      {contribute.title}
                    </Link>
                  ) : (
                    <span>{contribute.title}</span>
                  )}
                  <div className="flex gap-3">
                    <Link
                      href={`/admin/contribution/${contribute._id}`}
                      style={{ display: "contents" }}
                    >
                      <Button
                        title={<FaEdit />}
                        color="btn-warning"
                        type="button"
                      />
                    </Link>
                    <DeleteBlock path="contribution" id={contribute._id} />
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  {contribute.description}
                </p>
                <p className="text-xs text-gray-400">
                  {formatDate(new Date(contribute.date))}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p>No contributions yet.</p>
        )}
      </div>
    </div>
  );
};

export default ContributionGraph;
