"use client";
import { NEXT_MAIN_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";

const NextMain = () => {
  const { data, loading } = useGetSection(NEXT_MAIN_QUERY_KEY, -3, 2);

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex flex-col gap-3">
        {data?.map((post: PostsCashType) => (
          <div className="card card-side bg-base-100 p-2 shadow-xl" key={post._id}>
            <figure className="mr-2 w-2/5">
              <img
                src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
                title={post.title}
                alt={post.title.slice(0,120)}
                className="rounded-lg p-0"
              />
            </figure>
            <div className="card-body ml-2 w-3/5 p-0">
              <h2 className="card-title line-clamp-1 md:line-clamp-2">{post.title}</h2>
              <p className="line-clamp-2 flex-none sm:line-clamp-3 md:line-clamp-2 lg:line-clamp-3">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextMain;
