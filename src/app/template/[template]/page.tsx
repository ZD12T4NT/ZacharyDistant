import { notFound } from "next/navigation";
import { getTemplateData } from "@/lib/getTemplateData";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from 'next/image'

// Ensure dynamic params are enabled
export const dynamicParams = true;

// PageProps definition
type PageProps = {
  params: Promise<{
    template: string;
  }>;
};

// Tell Next.js which slugs to statically generate
export async function generateStaticParams() {
  const templatesDir = path.join(process.cwd(), "src/content/templates");
  const filenames = fs.readdirSync(templatesDir);

  return filenames.map((name) => ({
    template: name.replace(".json", ""),
  }));
}

// Metadata per template page
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const template = await getTemplateData(params.template); // await params before use
  if (!template) return { title: "Template Not Found" };
  return {
    title: template.title,
    description: template.description,
  };
}

// Page component
export default async function TemplatePage(props: PageProps) {
  const params = await props.params;
  const templateInfo = await getTemplateData(params.template); // await params before use
  if (!templateInfo) notFound();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-6">{templateInfo.title}</h1>
      <div className="relative flex justify-center mb-12 w-full h-[400px]"> {/* Set height as required */}
        <Image
          src={templateInfo.image}
          alt={templateInfo.title}
          layout="fill"
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-lg mb-6 text-center max-w-2xl mx-auto">{templateInfo.description}</p>
      <div className="flex justify-center">
        <a
          href={templateInfo.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-700"
        >
          View Live Demo
        </a>
      </div>
    </div>
  );
}
