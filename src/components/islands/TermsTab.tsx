import { contact, type LegalTabContent } from "../../modules/content";

interface Props {
  content: LegalTabContent;
}

function renderTextWithEmail(text: string) {
  const parts = text.split("{email}");

  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 && (
        <a href={`mailto:${contact.email}`} className="text-orange-600 hover:text-orange-700">
          {contact.email}
        </a>
      )}
    </span>
  ));
}

export default function TermsTab({ content }: Props) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-visible card-animated tab-content-enter">
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="legal-content max-w-none">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center tracking-tight mb-6">{content.title}</h2>

          {content.sections.map((section) => (
            <section key={section.heading}>
              <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">
                {section.heading}
              </h3>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{renderTextWithEmail(paragraph)}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{renderTextWithEmail(item)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
