import { TIMELINE_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditTimeLineForm } from "../../components";

let updateservicesData;
const EditServicesPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateservicesData = await getById(TIMELINE_API_URL, params.id);
    updateservicesData = updateservicesData.document || {};
  } else {
    updateservicesData = {
      _id: "new",
    };
  }
  return <EditTimeLineForm data={updateservicesData} />;
};

export default EditServicesPage;
