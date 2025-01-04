import { TIMELINE_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { EditTimeLineForm } from "../../components";
import { FetchDataForEditPage } from "../../components/util/Util";

const EditAdmniTime = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const updateData = await FetchDataForEditPage(TIMELINE_API_URL, params.id);

  return <EditTimeLineForm data={updateData} />;
};

export default EditAdmniTime;
