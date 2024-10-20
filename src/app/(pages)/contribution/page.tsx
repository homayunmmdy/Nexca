import ContributionCash from "@/etc/cash/ContributionCash";
import ContributionGraph from "./components/ContributionGraph";

const PointsPage = () => {
  return (
    <>
      <ContributionGraph contribute={ContributionCash} />
    </>
  );
};

export default PointsPage;
