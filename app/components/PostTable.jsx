import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import DeleteBlock from "@/app/components/DeleteBlock";

const PostTable = ({ post }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={post.imgurl} width={48} height={48} alt={post.title} className="bg-gray-600"/>
              </div>
            </div>
            <div>
              <div className="font-normal md:font-bold">{post.title}</div>
            </div>
          </div>
        </td>
        <td className="hidden lg:block">{post.description}</td>
        <td>
          <Link href={`/admin/post/${post._id}`}>
            <CiEdit size={25} />
          </Link>
        </td>
        <th>
            <DeleteBlock path="Posts" id={post._id} />
        </th>
      </tr>
    </>
  );
};

export default PostTable;