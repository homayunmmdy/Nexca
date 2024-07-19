import { SERVICES_API_URL } from '@/app/config/apiConstants';
import { EditForm, EditSectionForm } from '../../components/elements';

const getServicesById = async (id) => {
    const API_URL = process.env.API_URL

    try {
        const res = await fetch(`${API_URL}${SERVICES_API_URL}/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.error(error);
    }
};
let updateservicesData = {};

const EditServicesPage = async ({ params }) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) {
        updateservicesData = await getServicesById(params.id);
        updateservicesData = updateservicesData.document;
    } else {
        updateservicesData = {
            _id: "new",
        };
    }
    return <EditForm data={updateservicesData} apiUrl={SERVICES_API_URL} name="services"/>;

}

export default EditServicesPage