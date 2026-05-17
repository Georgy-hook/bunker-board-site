import { useState } from "react";
import descriptionIcon from "../../assets/description-icon.png";
import privacyIcon from "../../assets/privacy-icon.png";
import termsIcon from "../../assets/terms-icon.png";
import supportIcon from "../../assets/support-icon.png";
import DescriptionTab from "./DescriptionTab";
import PrivacyTab from "./PrivacyTab";
import TermsTab from "./TermsTab";
import SupportTab from "./SupportTab";

function imgSrc(img: string | { src: string }): string {
  return typeof img === "string" ? img : img.src;
}

const tabs = [
  { id: "description", label: "Description", icon: descriptionIcon },
  { id: "privacy", label: "Privacy Policy", icon: privacyIcon },
  { id: "terms", label: "Terms of Service", icon: termsIcon },
  { id: "support", label: "Support", icon: supportIcon },
] as const;

type TabId = (typeof tabs)[number]["id"];

const tabContent: Record<TabId, React.FC> = {
  description: DescriptionTab,
  privacy: PrivacyTab,
  terms: TermsTab,
  support: SupportTab,
};

export default function TabsSection() {
  const [active, setActive] = useState<TabId>("description");
  const [animKey, setAnimKey] = useState(0);
  const ActiveContent = tabContent[active];

  const handleTab = (id: TabId) => {
    if (id === active) return;
    setActive(id);
    setAnimKey((k) => k + 1);
  };

  return (
    <div className="w-full fade-in-up">
      <nav className="grid w-full grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-1.5 gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTab(tab.id)}
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
        <ActiveContent />
      </div>
    </div>
  );
}
