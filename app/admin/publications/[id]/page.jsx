import { PUBLICATIONS_API_URL } from "@/app/config/apiConstants";
import EditPublicationForm from "../../components/EditPublicationForm";

const getTicketById = async (id) => {
    const API_URL = process.env.API_URL

    try {
        const res = await fetch(`${API_URL}${PUBLICATIONS_API_URL}/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch topic");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

let updatePublicationData = {};
const PublicationPage = async ({ params }) => {
    const EDITMODE = params.id === "new" ? false : true;

    if (EDITMODE) {
        updatePublicationData = await getTicketById(params.id);
        updatePublicationData = updatePublicationData.foundTicket;
    } else {
        updatePublicationData = {
            _id: "new",
        };
    }

    return <EditPublicationForm ticket={updatePublicationData} />;
};

export default PublicationPage;
