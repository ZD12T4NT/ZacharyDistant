import fs from "fs/promises";
import path from "path";

export type TemplateInfo = {
  title: string;
  description: string;
  demoLink: string;
  image: string;
  backgroundColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
};

export async function getTemplateData(slug: string): Promise<TemplateInfo | null> {
  const filePath = path.join(process.cwd(), "src/content/templates", `${slug}.json`);

  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    // Optionally log error if debugging
    return null;
  }
}
