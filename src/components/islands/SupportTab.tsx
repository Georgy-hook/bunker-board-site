import telegramIcon from "../../assets/telegram-icon.png";
import bugIcon from "../../assets/bug-icon.png";
import suggestIcon from "../../assets/suggest-icon.png";
import clockIcon from "../../assets/clock-icon.png";
import { contact, externalLinks, type SupportContent } from "../../modules/content";

const reportBugUrl = externalLinks.find((link) => link.label.startsWith("Report"))?.url ?? "#";
const suggestContentUrl = externalLinks.find((link) => link.label.startsWith("Suggest"))?.url ?? "#";

function imgSrc(img: string | { src: string }): string {
  return typeof img === "string" ? img : img.src;
}

interface Props {
  content: SupportContent;
}

export default function SupportTab({ content }: Props) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-visible card-animated tab-content-enter">
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-800 fade-in-up">{content.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="fade-in-up stagger-1">
              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl mb-4">{content.contactHeading}</h3>
                <p className="mb-2 text-sm sm:text-base">
                  <strong>{content.emailLabel}</strong>
                  <a href={`mailto:${contact.email}`} className="text-orange-600 hover:text-orange-700 ml-2 break-all">
                    {contact.email}
                  </a>
                </p>
                <p className="text-sm sm:text-base">
                  <strong>{content.phoneLabel}</strong>
                  <a href={`tel:${contact.phone}`} className="text-orange-600 hover:text-orange-700 ml-2">
                    {contact.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="fade-in-up stagger-2">
              <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg sm:text-xl mb-4">{content.quickLinksHeading}</h3>
                <div className="space-y-3">
                  <a
                    href={contact.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2.5 shadow-md btn-animated text-sm sm:text-base"
                  >
                    <img src={imgSrc(telegramIcon)} alt={content.telegramAlt} className="w-5 h-5 object-contain" />
                    {content.telegramLabel}
                  </a>
                  <a
                    href={reportBugUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2.5 shadow-md btn-animated text-sm sm:text-base"
                  >
                    <img src={imgSrc(bugIcon)} alt={content.reportBugAlt} className="w-5 h-5 object-contain" />
                    {content.reportBugLabel}
                  </a>
                  <a
                    href={suggestContentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full px-4 py-2.5 shadow-md btn-animated text-sm sm:text-base"
                  >
                    <img src={imgSrc(suggestIcon)} alt={content.suggestContentAlt} className="w-5 h-5 object-contain" />
                    {content.suggestContentLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl ring-1 ring-yellow-200 bg-yellow-50 p-4 shadow-sm fade-in-up stagger-3">
            <p className="text-yellow-800 flex items-center justify-center gap-2 text-sm sm:text-base">
              <img src={imgSrc(clockIcon)} alt={content.responseTimeAlt} className="w-5 h-5 object-contain flex-shrink-0" />
              <span><strong>{content.responseTimeLabel}</strong> {content.responseTimeText}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
