import { Button } from "@/components";
import ContributionHandler from "@/util/handler/ContributionHandler";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { DeleteBlock } from "../../admin/components/elements";
// @ts-ignore
const ContributionGraph = ({ contributions }) => {
  const handler = new ContributionHandler(contributions);

  const getContributionCount = handler.getContributionCount

  const formatDate = handler.formatDate

  return (
    <div className="mx-auto w-[94%] pt-4 md:w-[92%]">
      <h2 className="mb-4 text-2xl font-bold">Contribution Graph of 2024</h2>
      <div className="flex flex-wrap gap-1">
        {handler.daysArray.map((date, index) => (
          <div
            key={index}
            className={`w-6 h-6 ${handler.getColor(
              getContributionCount(date)
            )}`}
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
                      className="text-indigo-600 hover:underline"
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
                        color="btn-warning"
                        type="button"
                      ><FaEdit /></Button>
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
