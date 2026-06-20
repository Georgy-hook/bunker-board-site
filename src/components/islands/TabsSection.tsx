import { useState } from "react";
import descriptionIcon from "../../assets/description-icon.png";
import privacyIcon from "../../assets/privacy-icon.png";
import termsIcon from "../../assets/terms-icon.png";
import supportIcon from "../../assets/support-icon.png";
import DescriptionTab from "./DescriptionTab";
import PrivacyTab from "./PrivacyTab";
import TermsTab from "./TermsTab";
import SupportTab from "./SupportTab";
import type { FeedbackFormKind, HomeTabId, HomeTabsContent, SiteLocale } from "../../modules/content";

function imgSrc(img: string | { src: string }): string {
  return typeof img === "string" ? img : img.src;
}

interface Props {
  content: HomeTabsContent;
  locale: SiteLocale;
}

const tabIcons = {
  description: descriptionIcon,
  privacy: privacyIcon,
  terms: termsIcon,
  support: supportIcon,
} satisfies Record<HomeTabId, string | { src: string }>;

const tabIds: HomeTabId[] = ["description", "privacy", "terms", "support"];

export default function TabsSection({ content, locale }: Props) {
  const [active, setActive] = useState<HomeTabId>("description");
  const [animKey, setAnimKey] = useState(0);
  const [activeFeedbackForm, setActiveFeedbackForm] = useState<FeedbackFormKind | null>(null);

  const tabs = tabIds.map((id) => ({
    id,
    label: content.labels[id],
    icon: tabIcons[id],
  }));

  const handleTab = (id: HomeTabId) => {
    if (id === active) return;
    setActive(id);
    setAnimKey((k) => k + 1);
  };

  const handleOpenFeedback = (form: FeedbackFormKind) => {
    setActiveFeedbackForm(form);
    setActive("support");
    setAnimKey((k) => k + 1);
  };

  const activeContent = {
    description: <DescriptionTab content={content.description} onOpenFeedback={handleOpenFeedback} />,
    privacy: <PrivacyTab content={content.privacy} />,
    terms: <TermsTab content={content.terms} />,
    support: (
      <SupportTab
        activeFeedbackForm={activeFeedbackForm}
        content={content.support}
        locale={locale}
        onActiveFeedbackFormChange={setActiveFeedbackForm}
      />
    ),
  } satisfies Record<HomeTabId, React.ReactNode>;

  return (
    <div className="w-full fade-in-up">
      <nav
        aria-label={content.ariaLabel}
        className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-1.5 gap-1.5"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTab(tab.id)}
            type="button"
            className={`flex items-center justify-center text-xs sm:text-sm lg:text-base gap-1.5 sm:gap-2 px-2 sm:px-3 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-200 ${
              active === tab.id
                ? "bg-orange-500 text-white shadow-md scale-[1.02]"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
            }`}
          >
            <img src={imgSrc(tab.icon)} alt="" className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0" />
            <span className="truncate">{tab.label}</span>
          </button>
        ))}
      </nav>

      <div key={animKey}>
        {activeContent[active]}
      </div>
    </div>
  );
}
