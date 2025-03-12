"use client";
import { ErrorText, Spinner } from "@/components";
import { POST_API_URL, SERVICES_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import React from "react";
import { DataTable, DeleteBlock } from "../components/elements";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/atoms";
import Link from "next/link";
import { PostsCashType } from "@/types/CashTypes";

const Services: React.FC = () => {
  const { data, loading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  const { data: posts, loading : loadingPost } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);
  console.log(posts)
  if (loading && loadingPost) {
    return <Spinner />;
  }
  
  const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];
  const postCounts = posts?.reduce((acc: any, post: PostsCashType) => {
    const serviceId = post.services;
    if (serviceId) {
      acc[serviceId] = (acc[serviceId] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  
  const editor = true
  return (
    <>
      <div className="overflow-x-auto">
      {editor ? (
        <div className="flex w-full justify-center">
          <Link href={`/admin/services/new`}>
            <Button
              color="btn-primary"
              className="btn-outline m-3"
            >{`New services`}</Button>
          </Link>
        </div>
      ) : null}
      {sortedData?.length === 0 ? (
        <ErrorText>There are currently no services created.</ErrorText>
      ) : (
        <table className="table table-zebra my-2">
          <thead>
            <tr>
              <th>id</th>
              <th>services</th>
              <th>posts</th>
              <th>edit</th>
              {editor ? <th>delete</th> : null}
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item) => (
              <tr key={item.id}>
                <td>{item.secid}</td>
                <td>{item.name}</td>
                <td>{postCounts?.[item.secid] || 0}</td>
                <td>
                  <Link href={`/admin/services/${item._id}`}>
                    <Button color="btn-warning" className="mb-2 me-2">
                      <CiEdit size={25} />
                    </Button>
                  </Link>
                </td>
                {editor ? (
                  <td>
                    <DeleteBlock path="services" id={item._id} />
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default Services;
