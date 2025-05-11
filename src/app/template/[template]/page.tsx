import { notFound } from "next/navigation";
import { getTemplateData } from "@/lib/getTemplateData";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import Image from "next/image";

// PageProps definition (dynamic routing)


// Tell Next.js which slugs to statically generate
export async function generateStaticParams() {
  const templatesDir = path.join(process.cwd(), "src/content/templates");
  const filenames = fs.readdirSync(templatesDir);

  return filenames.map((name) => ({
    template: name.replace(".json", ""),
  }));
}

export default async function TemplatePage({ params }: { params: { template: string } }) {
  const templateInfo = await getTemplateData(params.template);
  if (!templateInfo) notFound();

  const bgColor = templateInfo.backgroundColor || "#ffffff";
  const buttonColor = templateInfo.buttonColor || "#a7ec51";
  const buttonTextColor = templateInfo.buttonTextColor || "#000000";

  return (
    <div className="min-h-screen text-black" style={{ backgroundColor: bgColor }}>
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        <Image
          src={templateInfo.image}
          alt={templateInfo.title}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-bold">{templateInfo.title}</h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">{templateInfo.description}</p>
            <div className="mt-6">
              <a
                href={templateInfo.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold py-3 px-6 rounded-full transition-colors"
                style={{
                  backgroundColor: buttonColor,
                  color: buttonTextColor,
                }}
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// Metadata
export async function generateMetadata({ params }: { params: { template: string } }): Promise<Metadata> {

  const template = await getTemplateData(params.template);
  if (!template) return { title: "Template Not Found" };
  return {
    title: template.title,
    description: template.description,
  };
}
