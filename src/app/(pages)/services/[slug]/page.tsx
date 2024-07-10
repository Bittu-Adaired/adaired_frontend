import React from "react";
import type { Metadata } from "next";
import NavigationMenu from "@/components/NavigationMenu";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageBanner from "@/components/PageBanner";

// Data
import { ServiceData } from "@/data/services/serviceData";

// Sections
import TwoColumnFeatureSection from "@/components/PageDynamicSections/TwoColumnFeatureSection";
import FaqSection from "@/components/PageDynamicSections/FaqSection";

const findService = (slug: string) => {
  return ServiceData.find((service) => service.slug === slug);
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = findService(params.slug);
  return {
    title: data?.metaTitle ? data.metaTitle : data?.serviceName,
    description: data?.metaDescription ? data.metaDescription : "",
    alternates: {
      canonical: `https://adaired.com/services/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

interface ServiceProps {
  params: {
    slug: string;
  };
}

const ServicePage: React.FC<ServiceProps> = async ({ params }) => {
  const service = findService(params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <PageBanner title={service.serviceName} />
      <MaxWidthWrapper>
        <div className="flex justify-between items-center gap-5 py-12 ">
          <div className="w-[70%]">
            <TwoColumnFeatureSection
              colorScheme={service.colorScheme}
              featuredSectionData={service.bodyData[0].body}
            />
          </div>
          <aside className="w-[30%]">
            <NavigationMenu serviceName={service.serviceName} />
          </aside>
        </div>
        <div>
          <FaqSection faqs={service?.bodyData[1]?.body?.faq ?? []} />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ServicePage;
