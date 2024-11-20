import { DeleteBlock } from "@/app/(pages)/admin/components/elements";
import FormatTime from "@/app/(pages)/posts/components/FormatTime";
import { Button } from "@/components";
import { TicketsCashType } from "@/types/CashTypes";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
interface Props {
  ticket: TicketsCashType;
  master: boolean;
}
const TicketCard = ({ ticket, master }: Props) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  return (
    <div className="hover:bg-card-hover bg-card card m-2 flex h-full flex-col rounded-md p-5 shadow-xl">
      <div className="mb-3 flex">
        <PriorityDisplay priority={ticket.priority} />
        {master ? (
          <div className="ml-auto">
            <DeleteBlock path="tickets" id={ticket._id} />
            <Link
              href={`/tickets/${ticket._id}`}
              style={{ display: "contents" }}
            >
              <Button color="btn-warning" type="button">
                <FaEdit />
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
      <div>
        <h4 className="mb-1 line-clamp-2 font-bold">
          {ticket.title}
          {ticket.title.split(" ").length > 10 ? "..." : ""}
        </h4>
        <hr className="bg-page mb-2 h-px border-0"></hr>
        <p className="line-clamp-3 whitespace-pre-wrap">{ticket.description}</p>
        <div className="flex-grow"></div>
        <div className="mt-2 flex">
          <div className="flex flex-col">
            <p className="my-1 text-xs">
              <FormatTime
                timestamp={ticket.createdAt}
                options={options as Intl.DateTimeFormatOptions}
              />
            </p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TicketCard;
