"use client";
import { Spinner } from "@/components";
import { CONTRIBUTION_KEY } from "@/config/Constants";
import { CONTRIBUTION_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
import ContributionGraph from "./components/ContributionGraph";

const PointsPage = () => {
  const { data, loading } = useFetch(CONTRIBUTION_KEY, CONTRIBUTION_API_URL);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <ContributionGraph contributions={data} />
    </>
  );
};

export default PointsPage;
