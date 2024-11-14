import { TIMELINE_API_URL } from "@/etc/config/apiConstants";
import { getById } from "@/util/ServerUtil";
import { EditTimeLineForm } from "../../components";
import { SinglePagepParamsType } from "@/types/entities";

let updateservicesData ;
const EditServicesPage = async ({ params }: {params : SinglePagepParamsType}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateservicesData = await getById(TIMELINE_API_URL,params.id);
    updateservicesData = updateservicesData.document || {};
  } else {
    updateservicesData = {
      _id: "new",
    };
  }
  return <EditTimeLineForm data={updateservicesData} />;
};

export default EditServicesPage;
