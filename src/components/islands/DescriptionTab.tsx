import bunkerLogo from "../../assets/af3b0ac35568f0c21ec86e6301202642d53c9127.png";
import characterImage2 from "../../assets/01dd0ce9e0b60769d8e2373f6148055f34ea473a.png";
import iosLogo from "../../assets/c2ee98b3b52bcc7fc4a05bff8e8d653ad06349b6.png";
import dogIcon from "../../assets/dog.png";
import fishIcon from "../../assets/fish-mutant.png";
import backpackIcon from "../../assets/backpack-icon.png";
import telegramIcon from "../../assets/telegram-icon.png";
import bugIcon from "../../assets/bug-icon.png";
import suggestIcon from "../../assets/suggest-icon.png";
import { contact, externalLinks, siteConfig } from "../../modules/content";

const reportBugUrl = externalLinks.find((link) => link.label.startsWith("Report"))?.url ?? "#";
const suggestContentUrl = externalLinks.find((link) => link.label.startsWith("Suggest"))?.url ?? "#";

function imgSrc(img: string | { src: string }): string {
  return typeof img === "string" ? img : img.src;
}

export default function DescriptionTab() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-visible card-animated tab-content-enter">
      <div className="p-6 sm:p-8 lg:p-12">
        <div className="text-center">

          {/* Hero section with logo and stickers */}
          <div className="relative mb-6 sm:mb-8 pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-28 px-4 sm:px-12 overflow-visible min-h-[220px] sm:min-h-[320px] lg:min-h-[420px]">

            {/* Main logo */}
            <img
              src={imgSrc(bunkerLogo)}
              alt="Vault Logo"
              className="relative z-[1] mx-auto h-auto drop-shadow-2xl scale-in"
              style={{ width: "clamp(8rem, 40vw, 28rem)" }}
            />

            {/* Left character sticker */}
            <div
              className="absolute left-0 sm:left-4 top-0 z-[2] sticker sticker-float pointer-events-none"
              style={{ "--sticker-rotate": "12deg" } as React.CSSProperties}
            >
              <img src={imgSrc(dogIcon)} alt="Dog character" className="big-sticker object-contain" />
            </div>

            {/* Right character sticker */}
            <div
              className="absolute right-0 sm:right-4 top-0 z-[2] sticker sticker-float-alt pointer-events-none"
              style={{ "--sticker-rotate": "-12deg" } as React.CSSProperties}
            >
              <img src={imgSrc(characterImage2)} alt="Character" className="big-sticker object-contain" />
            </div>

            {/* Bottom left small sticker */}
            <div className="absolute left-[20%] sm:left-1/4 bottom-0 sm:-bottom-2 z-[2] sticker sticker-float-slow pointer-events-none">
              <img src={imgSrc(fishIcon)} alt="Mutant fish" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>

            {/* Bottom right small sticker */}
            <div className="absolute right-[20%] sm:right-1/4 bottom-0 sm:-bottom-2 z-[2] sticker sticker-float-slow pointer-events-none" style={{ animationDelay: "1.2s" }}>
              <img src={imgSrc(backpackIcon)} alt="Backpack" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 text-gray-800 fade-in-up stagger-1">
            Vault - Survive the Debate
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-6 sm:mb-8 fade-in-up stagger-2">
            Vault is a fast, social survival debate for 4-12 players. Spin up a session, share a join code, and jump into an evolving apocalypse with a living bunker: capacity, area, time left, food reserves, and cozy-factor all shift as events unfold. Every player brings a unique mix of traits &mdash; Bio, Conditions, Body Type, Personality, Hobby, Phobia, Knowledge, Backpack, and Extra Info &mdash; plus an always-visible Profession. Reveal strengths, craft your pitch, and convince the group you're essential. Build the ultimate team or get left outside.
          </p>

          {/* Primary CTA */}
          <div className="flex justify-center mb-6 sm:mb-8 fade-in-up stagger-3">
            <a
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ios-cta inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg btn-animated btn-cta"
            >
              <img src={imgSrc(iosLogo)} alt="iOS Logo" />
              Get the iOS App
            </a>
          </div>

          {/* Secondary buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 fade-in-up stagger-4">
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 shadow-md btn-animated text-sm sm:text-base"
            >
              <img src={imgSrc(telegramIcon)} alt="Telegram" className="w-5 h-5 object-contain" />
              Telegram channel
            </a>
            <a
              href={reportBugUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-2 shadow-md btn-animated text-sm sm:text-base"
            >
              <img src={imgSrc(bugIcon)} alt="Bug Report" className="w-5 h-5 object-contain" />
              Report a bug
            </a>
            <a
              href={suggestContentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white rounded-full px-5 py-2 shadow-md btn-animated text-sm sm:text-base"
            >
              <img src={imgSrc(suggestIcon)} alt="Suggest Content" className="w-5 h-5 object-contain" />
              Suggest content
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
