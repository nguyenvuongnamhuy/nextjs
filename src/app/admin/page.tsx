import Link from "next/link";

const Admin = () => {
  return (
    <>
      <div>Admin Page</div>
      <br />
      <Link href={"/admin/dashboard"}>Dashboard Page</Link>
    </>
  );
};

export default Admin;
