import { TEXTADV_API_URL } from "@/config/apiConstants";
import { SinglePagepParamsType } from "@/types/entities";
import { getById } from "@/util/ServerUtil";
import { EditTextAdvForm } from "../../components";

let updatetextadvData;
const EditSectionPage = async ({
  params,
}: {
  params: SinglePagepParamsType;
}) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updatetextadvData = await getById(TEXTADV_API_URL, params.id);
    updatetextadvData = updatetextadvData.document || {};
  } else {
    updatetextadvData = {
      _id: "new",
    };
  }
  return <EditTextAdvForm data={updatetextadvData} />;
};

export default EditSectionPage;
