import { SECTIONS_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditSectionForm } from "../../components";

let updatesectionData;
const EditSectionPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatesectionData = await getById(SECTIONS_API_URL, params.id);
    updatesectionData = updatesectionData.document || {};
  } else {
    updatesectionData = {
      _id: "new",
    };
  }
  return <EditSectionForm data={updatesectionData} />;
};

export default EditSectionPage;
