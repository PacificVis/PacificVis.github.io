import { getCharter } from "@/lib/content";
import CharterContent from "./charter-content";

export default async function CharterPage() {
  const charter = await getCharter();

  return (
    <CharterContent
      title={charter.title}
      subtitle={charter.subtitle}
      label={charter.label}
      pdfHref={charter.pdfHref}
      html={charter.content}
    />
  );
}
