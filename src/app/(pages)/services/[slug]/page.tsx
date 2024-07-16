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
import ImageWithDetailedFeatureDescription from "@/components/PageDynamicSections/ImageWithDetailedFeatureDescription";
import ProcessSection from "@/components/PageDynamicSections/ProcessSection";
import GetInTouchForm from "@/forms/GetInTouchForm";

const findService = (slug: string) => {
  return ServiceData.find((service) => service.slug === slug);
};

const fetchservice = async (slug: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/service/getServices/${slug}`
  );
  const data = await result.json();
  return data;
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

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URI}/service/getServices`
  );
  const data = await res.json();
  const newData = data;
  return newData.map((service: any) => ({
    slug: service.slug.toString(),
  }));
}


interface ServiceProps {
  params: {
    slug: string;
  };
}

const ServicePage: React.FC<ServiceProps> = async ({ params }) => {
  const service = findService(params.slug);
  const fetchedService = await fetchservice(params.slug);
  const { bodyData } = fetchedService;

  if (!fetchedService) {
    return <div>Service not found</div>; // Return 404 page if service not found in API
  }

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <PageBanner title={fetchedService.serviceName} />
      <MaxWidthWrapper>
        <div className="flex justify-between items-center gap-10 py-12 ">
          <div className="w-[70%]">
            <TwoColumnFeatureSection
              colorScheme={service.colorScheme}
              featuredSectionData={service.bodyData[0].body}
            />
          </div>
          <aside className="w-[30%]">
            <NavigationMenu serviceName={service.serviceName} />
            <GetInTouchForm />
          </aside>
        </div>
        <div>
          <ProcessSection colorScheme={fetchedService.colorScheme}/>
        </div>
        <div>
          <ImageWithDetailedFeatureDescription />
        </div>
        <div>
          <FaqSection faqs={service?.bodyData[1]?.body?.faq ?? []} />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ServicePage;
