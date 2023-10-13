"use client";

import { useRouter } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return "Error";
  if (isLoading) return "Loading...";
    console.log(data)

  return (
    <>
      <div>Dashboard Page</div>
      <div>Data: {data?.topics.join(', ')}</div>
      <div>
        <button onClick={() => handleBack()}>Back home</button>
      </div>
    </>
  );
};

export default Dashboard;
