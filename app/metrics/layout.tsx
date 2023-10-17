import Link from "next/link";

export default async function Home({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/metrics/overview">Overview</Link>
      <br />
      <Link href="/metrics/social">Social Impact</Link>
      <br />
      <Link href="/metrics/business">Business Impact</Link>
      <br />
      <div className="flex">{children}</div>;
    </>
  );
}
