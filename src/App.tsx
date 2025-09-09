import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import bunkerLogo from "figma:asset/af3b0ac35568f0c21ec86e6301202642d53c9127.png";
import characterImage2 from "figma:asset/01dd0ce9e0b60769d8e2373f6148055f34ea473a.png";
import iosLogo from "figma:asset/c2ee98b3b52bcc7fc4a05bff8e8d653ad06349b6.png";
import houseIcon from "figma:asset/114ebae2afe3a8a82f1ffeca9290fb1759e0ab3a.png";
import descriptionIcon from "./assets/description-icon.png";
import privacyIcon from "./assets/privacy-icon.png";
import termsIcon from "./assets/terms-icon.png";
import supportIcon from "./assets/support-icon.png";
import telegramIcon from "./assets/telegram-icon.png";
import bugIcon from "./assets/bug-icon.png";
import suggestIcon from "./assets/suggest-icon.png";
import fishIcon from "./assets/fish-mutant.png";
import dogIcon from "./assets/dog.png";
import backpackIcon from "./assets/backpack-icon.png";
import clockIcon from "./assets/clock-icon.png";
import iosIcon2 from "./assets/ios-icon-logo.png";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "radial-gradient(circle at center, #FDAC04 0%, #E95600 100%)",
        fontFamily: '"Classic Comic", "Comic Sans MS", "Comic Neue", "Chalkboard SE", cursive'
      }}
    >
      <style>{`
        .app-badge img{width:28px;height:28px;object-fit:contain;flex-shrink:0;display:inline-block}
        .ios-cta img{width:32px;height:32px;object-fit:contain;flex-shrink:0;display:inline-block}
        .legal-content p{margin-top:1rem;margin-bottom:1rem;line-height:1.75}
        .legal-content ul{padding-left:1.25rem;margin-top:0.75rem;margin-bottom:0.75rem}
        .legal-content li{margin-top:0.5rem;margin-bottom:0.5rem}
        .btn-animated{transition:transform .25s ease, box-shadow .25s ease; will-change:transform, box-shadow; animation:shadowPulse 3.2s ease-in-out infinite}
        .btn-animated:hover{transform:translateY(-2px) scale(1.03)}
        .btn-animated:active{transform:translateY(0) scale(.98)}
        .btn-animated:focus-visible{outline:0; box-shadow:0 0 0 .35rem rgba(255,255,255,.35)}
        @keyframes shadowPulse{0%,100%{box-shadow:0 10px 28px rgba(0,0,0,.18)}50%{box-shadow:0 20px 48px rgba(0,0,0,.28)}}
        .card-animated{animation:cardGlow 6s ease-in-out infinite}
        @keyframes cardGlow{0%,100%{box-shadow:0 24px 70px rgba(0,0,0,.15)}50%{box-shadow:0 36px 110px rgba(0,0,0,.25)}}
        @keyframes bounceSoft{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .bounce-soft{animation:bounceSoft 1.6s ease-in-out infinite; will-change:transform; transform:translateZ(0)}
        .bounce-soft.delay-1{animation-delay:.6s}
        .big-sticker{width:clamp(4rem,22vw,6rem);height:clamp(4rem,22vw,6rem)}
        @media(min-width:1024px){.big-sticker{width:7rem;height:7rem}}
      `}</style>

      <header className="p-4 lg:p-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="text-4xl lg:text-5xl text-white drop-shadow-lg flex items-center gap-3">
            <img
              src={houseIcon}
              alt="Bunker Board House"
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
            />
            Bunker Board
          </h1>
          <Button
            asChild
            size="lg"
            className="bg-black text-white hover:bg-gray-800 shadow-lg hover:shadow-2xl btn-animated flex-shrink-0"
          >
            <a
              href="https://apps.apple.com/app/id6749825722"
              target="_blank"
              rel="noopener noreferrer"
              className="app-badge flex items-center gap-2 text-lg px-6 py-3"
            >
              <img src={iosIcon2} alt="iOS App Store" />
              Download on iOS
            </a>
          </Button>
        </div>
      </header>

      <main className="p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid h-auto w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md">
              <TabsTrigger value="description" className="text-sm lg:text-base gap-2 transition-all hover:shadow-md hover:-translate-y-0.5">
                <img src={descriptionIcon} alt="Description" className="w-5 h-5 object-contain" />
                Description
              </TabsTrigger>
              <TabsTrigger value="privacy" className="text-sm lg:text-base gap-2 transition-all hover:shadow-md hover:-translate-y-0.5">
                <img src={privacyIcon} alt="Privacy Policy" className="w-5 h-5 object-contain" />
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="terms" className="text-sm lg:text-base gap-2 transition-all hover:shadow-md hover:-translate-y-0.5">
                <img src={termsIcon} alt="Terms of Use" className="w-5 h-5 object-contain" />
                Terms of Use
              </TabsTrigger>
              <TabsTrigger value="support" className="text-sm lg:text-base gap-2 transition-all hover:shadow-md hover:-translate-y-0.5">
                <img src={supportIcon} alt="Support" className="w-5 h-5 object-contain" />
                Support
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border-0 overflow-visible card-animated">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-12">
                    <div className="relative mb-8 pt-28 sm:pt-20 lg:pt-16 pb-24 lg:pb-28 px-6 sm:px-12 overflow-visible min-h-[300px] sm:min-h-[360px] lg:min-h-[420px]">
                      <img
                        src={bunkerLogo}
                        alt="Bunker Logo"
                        className="relative z-[1] mx-auto h-auto drop-shadow-2xl"
                        style={{ width: "clamp(6rem, 30vw, 28rem)" }}
                      />
                      <div
                        className="absolute left-2 sm:left-4 z-[2] bounce-soft pointer-events-none"
                        style={{ top: "clamp(0rem, 0vw, 0rem)" }}
                      >
                        <img
                          src={dogIcon}
                          alt="Character 1"
                          className="big-sticker object-contain rotate-12"
                        />
                      </div>
                      <div
                        className="absolute right-2 sm:right-4 z-[2] bounce-soft delay-1 pointer-events-none"
                        style={{ top: "clamp(0rem, 0vw, 0rem)" }}
                      >
                        <img
                          src={characterImage2}
                          alt="Character 2"
                          className="big-sticker object-contain -rotate-12"
                        />
                      </div>
                      <div
                        className="absolute left-1/4 z-[2] bounce-soft pointer-events-none"
                        style={{ bottom: "clamp(0rem, 0vw, 0rem)" }}
                      >
                        <img src={fishIcon} alt="Radiation" className="w-10 h-10 object-contain" />
                      </div>
                      <div
                        className="absolute right-1/4 z-[2] bounce-soft pointer-events-none"
                        style={{ bottom: "clamp(0rem, 0vw, 0em)" }}
                      >
                        <img src={backpackIcon} alt="Backpack" className="w-10 h-10 object-contain" />
                      </div>
                    </div>

                    <h2 className="text-3xl lg:text-4xl mb-6 text-gray-800">
                      Bunker Board — Survive the Debate
                    </h2>

                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-8">
                      Bunker Board is a fast, social survival debate for 4–12 players. Spin up a session, share a join code, and jump into an evolving apocalypse with a living bunker: capacity, area, time left, food reserves, and cozy-factor all shift as events unfold. Every player brings a unique mix of traits — Bio, Conditions, Body Type, Personality, Hobby, Phobia, Knowledge, Backpack, and Extra Info — plus an always-visible Profession. Reveal strengths, craft your pitch, and convince the group you're essential. Some rounds spotlight stories; others bring ruthless elimination votes. Timers keep the pace, and the final stats reveal who makes it into the bunker. Build the ultimate team… or get left outside.
                    </p>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
                      <Button
                        asChild
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl btn-animated"
                      >
                        <a
                          href="https://apps.apple.com/app/id6749825722"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ios-cta flex items-center gap-2"
                        >
                          <img src={iosLogo} alt="iOS Logo" />
                          Get the iOS App
                        </a>
                      </Button>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                      <Button
                        asChild
                        variant="outline"
                        className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500 rounded-full px-6 py-2 shadow-md hover:shadow-xl btn-animated"
                      >
                        <a
                          href="https://t.me/+9r6mKQuDwtMxNzdi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <img src={telegramIcon} alt="Telegram" className="w-5 h-5 object-contain" />
                          Telegram channel
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="bg-green-500 hover:bg-green-600 text-white border-green-500 rounded-full px-6 py-2 shadow-md hover:shadow-xl btn-animated"
                      >
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdhBsAiVDsFjXHKlhsravX7DQwNWafxHgn_vISj7WkMWl7k0w/viewform?usp=dialog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <img src={bugIcon} alt="Bug Report" className="w-5 h-5 object-contain" />
                          Report a bug / Feature request
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="bg-purple-500 hover:bg-purple-600 text-white border-purple-500 rounded-full px-6 py-2 shadow-md hover:shadow-xl btn-animated"
                      >
                        <a
                          href="https://docs.google.com/forms/d/17IeZPlwZYqihaaBet6IZVGyDgejLz8R5K9wiWVz8qTc/edit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <img src={suggestIcon} alt="Suggest Content" className="w-5 h-5 object-contain" />
                          Suggest in-game content
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border-0 overflow-visible card-animated">
                <CardContent className="p-8 lg:p-12">
                  <div className="legal-content max-w-none">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-center tracking-tight mb-6">Privacy Policy</h2>
                    <p>This privacy policy applies to the Bunker Board app (hereby referred to as "Application") for mobile devices that was created by Pavlina Gluhova (hereby referred to as "Service Provider") as a freemium service with optional subscriptions. This service is intended for use "AS IS".</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Information Collection and Use</h3>
                    <p>The Application collects information when you download and use it. This information may include information such as</p>
                    <ul>
                      <li>Your device's Internet Protocol address (e.g. IP address)</li>
                      <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                      <li>The time spent on the Application</li>
                      <li>The operating system you use on your mobile device</li>
                    </ul>
                    <p>The Application does not gather precise information about the location of your mobile device.</p>
                    <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
                    <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Third Party Access</h3>
                    <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
                    <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                    <ul>
                      <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                      <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                      <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                    </ul>
                    <p>The Application uses third-party services for subscriptions and analytics, including Apphud, as well as the payment systems of Apple App Store and Google Play. These services may collect information as described in their own privacy policies.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Opt-Out Rights</h3>
                    <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Data Retention Policy</h3>
                    <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at <a href="mailto:georgin2000155@gmail.com" className="text-orange-600 hover:text-orange-700">georgin2000155@gmail.com</a>. and they will respond in a reasonable time.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Children</h3>
                    <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
                    <p>The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (<a href="mailto:georgin2000155@gmail.com" className="text-orange-600 hover:text-orange-700">georgin2000155@gmail.com</a>.) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Security</h3>
                    <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Changes</h3>
                    <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
                    <p>This privacy policy is effective as of 2025-08-16</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Your Consent</h3>
                    <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Contact Us</h3>
                    <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:georgin2000155@gmail.com" className="text-orange-600 hover:text-orange-700">georgin2000155@gmail.com</a>.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="terms">
              <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border-0 overflow-visible card-animated">
                <CardContent className="p-8 lg:p-12">
                  <div className="legal-content max-w-none">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-center tracking-tight mb-6">Terms of Service</h2>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Terms & Conditions</h3>
                    <p>These terms and conditions apply to the Bunker Board app (hereby referred to as "Application") for mobile devices that was created by Pavlina Gluhova (hereby referred to as "Service Provider") as a Free service with optional subscriptions.</p>
                    <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p>
                    <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p>
                    <p>The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advises against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.</p>
                    <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.</p>
                    <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.</p>
                    <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p>
                    <p>In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.</p>
                    <p>The Application uses third-party services to handle subscriptions and in-app purchases, including Apphud, as well as the payment systems of Apple App Store and Google Play. These third parties have their own Terms of Service and Privacy Policies, and by using the Application you also agree to be bound by their terms.</p>
                    <p>The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination:</p>
                    <p>(a) the rights and licenses granted to you in these terms will end;</p>
                    <p>(b) you must cease using the application, and (if necessary) delete it from your device.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Changes to These Terms and Conditions</h3>
                    <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>
                    <p>These terms and conditions are effective as of 2025-08-16.</p>

                    <h3 className="text-2xl lg:text-3xl font-bold text-center tracking-tight mt-12 mb-4">Contact Us</h3>
                    <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:georgin2000155@gmail.com" className="text-orange-600 hover:text-orange-700">georgin2000155@gmail.com</a>.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="support">
              <Card className="bg-white/95 backdrop-blur-sm rounded-3xl border-0 overflow-visible card-animated">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center">
                    <h2 className="text-3xl mb-8 text-gray-800">Support & Contact</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                          <h3 className="text-xl mb-4">📧 Contact Information</h3>
                          <p className="mb-2">
                            <strong>Email:</strong>
                            <a href="mailto:georgin2000155@gmail.com" className="text-orange-600 hover:text-orange-700 ml-2">
                              georgin2000155@gmail.com
                            </a>
                          </p>
                          <p>
                            <strong>Phone:</strong>
                            <a href="tel:+79295833289" className="text-orange-600 hover:text-orange-700 ml-2">
                              +79295833289
                            </a>
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                          <h3 className="text-xl mb-4">🔗 Quick Links</h3>
                          <div className="space-y-3">
                            <Button
                              asChild
                              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md hover:shadow-xl btn-animated"
                            >
                              <a
                                href="https://t.me/+9r6mKQuDwtMxNzdi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <img src={telegramIcon} alt="Telegram" className="w-5 h-5 object-contain" />
                                Telegram Channel
                              </a>
                            </Button>

                            <Button
                              asChild
                              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md hover:shadow-xl btn-animated"
                            >
                              <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdhBsAiVDsFjXHKlhsravX7DQwNWafxHgn_vISj7WkMWl7k0w/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <img src={bugIcon} alt="Bug Report" className="w-5 h-5 object-contain" />
                                Report a Bug / Request a Feature
                              </a>
                            </Button>

                            <Button
                              asChild
                              className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-md hover:shadow-xl btn-animated"
                            >
                              <a
                                href="https://docs.google.com/forms/d/17IeZPlwZYqihaaBet6IZVGyDgejLz8R5K9wiWVz8qTc/edit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                              >
                                <img src={suggestIcon} alt="Suggest Content" className="w-5 h-5 object-contain" />
                                Suggest Game Content
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto max-w-3xl rounded-2xl ring-1 ring-yellow-200 bg-yellow-50 p-4 shadow-sm">
                      <p className="text-yellow-800 flex items-center justify-center gap-2">
                        <img src={clockIcon} alt="Response time" className="w-5 h-5 object-contain" />
                        <span><strong>Response Time:</strong> We aim to respond within 24 hours.</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <footer className="p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/90 drop-shadow-md">
            © 2025 Bunker Board. Pavlina Gluhova. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}