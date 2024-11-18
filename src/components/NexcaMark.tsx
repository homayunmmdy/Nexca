import Link from "next/link";
import { PiSealCheckFill } from "react-icons/pi";

const NexcaMark = ({ master }: { master: boolean }) => {
  return master ? (
    <Link href="/demo" title="This post write by Nexca">
      <PiSealCheckFill size={32} color="#6366F1" />
    </Link>
  ) : null;
};

export default NexcaMark;
