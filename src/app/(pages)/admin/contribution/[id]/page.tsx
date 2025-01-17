import { CONTRIBUTION_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditContributionForm } from "../../components";
import { FetchDataForEditPage } from "@/util/ServerUtil";

const EditAdminContribution = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updateData = await FetchDataForEditPage(
    CONTRIBUTION_API_URL,
    params.id
  );

  return <EditContributionForm contribute={updateData} />;
};

export default EditAdminContribution;
