import { getById } from "@/util/getById";
import { EditTimeLineForm } from "../../components";
import { TIMELINE_API_URL } from "@/etc/config/apiConstants";

let updateservicesData = {};
{/* @ts-ignore */}
const EditServicesPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateservicesData = await getById(TIMELINE_API_URL,params.id);
  {/* @ts-ignore */}
    updateservicesData = updateservicesData.document;
  } else {
    updateservicesData = {
      _id: "new",
    };
  }
  return <EditTimeLineForm data={updateservicesData} />;
};

export default EditServicesPage;
