import { Input } from "@/components/atoms";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

const ImagePreview = ({
  imgurl,
  title,
  onChange,
}: {
  imgurl: string;
  title: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <>
    <Image
      src={!imgurl ? "/static/Image/logo.jpg" : imgurl}
      alt={title}
      title={title}
      height={390.938}
      width={695}
      className="mb-2 aspect-video w-full rounded-xl border border-indigo-500"
    />
    <Input
      id="imgurl"
      type="url"
      name="imgurl"
      color="input-primary"
      style="w-full mb-2"
      placeholder="Enter url of image here"
      icon={<FaLink />}
      value={imgurl}
      onChange={onChange}
    />
  </>
);

export default ImagePreview;
