import { cache } from "react";

export const revalidate = "force-cache";
const getOrgMetrics = cache(async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 100 * 20));
  // const org = await organizations.getOrganization({ organizationId: orgId });
  // console.log({ slug });

  return "Selected slug>>" + slug;
});

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug = "overview" } = params;
  const data = await getOrgMetrics(slug);

  return (
    <>
      <h1>{data}</h1>
    </>
  );
}
