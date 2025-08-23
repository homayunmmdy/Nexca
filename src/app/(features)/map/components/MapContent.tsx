"use client";
import useGetMapContent from "@/app/(features)/map/hooks/useGetMapContent";
import { ErrorText, Spinner } from "@/components/atoms";
import Image from "next/image";
import { MapsCashType } from "../types/types";

interface Props {
  key: string;
  provinceID: number;
  countryID?: number;
}

const MapContent = ({ key, provinceID, countryID = 1 }: Props) => {
  const { data, loading } = useGetMapContent(key, -1, countryID, provinceID);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {data.length > 0 ? (
        data?.map((content: MapsCashType) => (
          <div key={content._id} className="card bg-base-100 w-full shadow-sm">
            <figure>
              <Image
                width={662.172}
                height={372.469}
                src={content.imgurl}
                title={content.title}
                alt={content.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title line-clamp-2">{content.title}</h2>
              <p className="line-clamp-3">{content.description}</p>
            </div>
          </div>
        ))
      ) : (
        <ErrorText>No Content found for this province.</ErrorText>
      )}
    </div>
  );
};

export default MapContent;
