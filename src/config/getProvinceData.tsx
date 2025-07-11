// Get the appropriate province data based on selected country
import {AD_MAP_DATA, AF_MAP_DATA, AL_MAP_DATA, DZ_MAP_DATA} from "@/config/maps";

export const getProvinceData = (selectedService: string) => {
    switch (selectedService) {
        case '1': // Afghanistan
            return AF_MAP_DATA;
        case '2': // Albania
            return AL_MAP_DATA;
        case '3':
            return DZ_MAP_DATA // Algeria
        case '4':
            return AD_MAP_DATA // Andorra
        default:
            return [];
    }
};