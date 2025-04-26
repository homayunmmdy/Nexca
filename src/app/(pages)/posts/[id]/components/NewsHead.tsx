import FormatTime from "../../components/FormatTime";
import {Container} from "@/components/atoms";

interface Props {
    title: string;
    description: string;
    createdAt?: string;
}

const NewsHead = ({title, description, createdAt}: Props) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    return (
        <>
            <div
                className="relative mt-[-30px] overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-40"></div>
                <Container className="relative py-8">
                    <div
                        className="text-4xl font-bold tracking-tight mb-4 pb-[6px] text-white sm:text-5xl md:text-6xl line-clamp-1 md:line-clamp-2">
                        {title}
                    </div>
                    <p className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent line-clamp-2 md:line-clamp-3">{description}</p>
                    {createdAt && (
                        <p className="my-3 text-center text-lg text-white">
                            <FormatTime timestamp={createdAt} options={options as Intl.DateTimeFormatOptions}/>
                        </p>
                    )}
                </Container>
            </div>
        </>
    );
};

export default NewsHead;
