import { useEffect, useMemo, useState } from "react";
import {
  Bug,
  ChevronDown,
  CheckCircle2,
  ChevronRight,
  CloudLightning,
  Lightbulb,
  Loader2,
  Send,
  Sparkles,
  UserRound,
  Warehouse,
} from "lucide-react";
import {
  feedbackFormsContentByLocale,
  type BunkerEffectId,
  type FeedbackFormKind,
  type IdeaKind,
  type SiteLocale,
} from "../../modules/content";

interface Props {
  locale: SiteLocale;
  activeForm: FeedbackFormKind | null;
  onActiveFormChange: (form: FeedbackFormKind) => void;
}

type SubmitState = "idle" | "submitting" | "success" | "error";

const ideaIcons: Record<IdeaKind, React.ComponentType<{ className?: string }>> = {
  characteristic: UserRound,
  cataclysm: CloudLightning,
  "bunker-feature": Warehouse,
};

function getSubmitText(state: SubmitState, idleText: string, submittingText: string) {
  return state === "submitting" ? submittingText : idleText;
}

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: string }) {
  return (
    <label className="mb-2 block text-left text-sm font-bold text-gray-800">
      {children}
      {optional && <span className="ml-2 text-xs font-semibold text-gray-400">{optional}</span>}
    </label>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  );
}

function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="min-h-28 w-full resize-y rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
    />
  );
}

async function submitNetlifyForm(form: HTMLFormElement) {
  const formData = new FormData(form);
  const payload = new URLSearchParams();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      payload.append(key, value);
    }
  });

  const response = await fetch("/__forms.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with ${response.status}`);
  }
}

export default function FeedbackForms({ locale, activeForm, onActiveFormChange }: Props) {
  const content = feedbackFormsContentByLocale[locale];
  const [activeIdeaKind, setActiveIdeaKind] = useState<IdeaKind>("characteristic");
  const [selectedEffects, setSelectedEffects] = useState<BunkerEffectId[]>([]);
  const [bugState, setBugState] = useState<SubmitState>("idle");
  const [ideaState, setIdeaState] = useState<SubmitState>("idle");
  const [ideaError, setIdeaError] = useState("");
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    setPageUrl(window.location.href);
  }, []);

  const activePanel = activeForm ?? "idea";
  const effectsById = useMemo(
    () => Object.fromEntries(content.bunkerEffects.map((effect) => [effect.id, effect])),
    [content.bunkerEffects],
  );

  const handleEffectToggle = (effectId: BunkerEffectId) => {
    const effect = effectsById[effectId];
    setSelectedEffects((current) => {
      if (current.includes(effectId)) {
        return current.filter((id) => id !== effectId);
      }

      return [...current.filter((id) => effectsById[id]?.group !== effect.group), effectId];
    });
    setIdeaError("");
  };

  const handleBugSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setBugState("submitting");

    try {
      await submitNetlifyForm(form);
      form.reset();
      setBugState("success");
    } catch {
      setBugState("error");
    }
  };

  const handleIdeaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIdeaError("");

    if (activeIdeaKind === "bunker-feature" && selectedEffects.length === 0) {
      setIdeaError(content.bunkerEffectRequired);
      return;
    }

    setIdeaState("submitting");

    try {
      await submitNetlifyForm(form);
      form.reset();
      setSelectedEffects([]);
      setIdeaState("success");
    } catch {
      setIdeaState("error");
    }
  };

  return (
    <section id="feedback-forms" className="text-left fade-in-up stagger-3">
      <div className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-yellow-50 shadow-lg">
        <div className="border-b border-orange-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-gray-900">
                <Sparkles className="h-5 w-5 text-orange-600" />
                {content.panelTitle}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">{content.panelSubtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/80 p-1.5 shadow-inner ring-1 ring-orange-100">
              {[
                { id: "bug" as const, label: content.bugButton, icon: Bug },
                { id: "idea" as const, label: content.ideaButton, icon: Lightbulb },
              ].map((item) => {
                const Icon = item.icon;
                const isActive = activePanel === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onActiveFormChange(item.id)}
                    className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-orange-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-orange-50 hover:text-orange-800"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          {activePanel === "bug" ? (
            <form
              name="vault-bug-report"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleBugSubmit}
              className="space-y-5 animate-[fadeInUp_0.35s_ease-out]"
            >
              <input type="hidden" name="form-name" value="vault-bug-report" readOnly />
              <input type="hidden" name="subject" value="Vault bug report" readOnly />
              <input type="hidden" name="locale" value={locale} readOnly />
              <input type="hidden" name="page_url" value={pageUrl} readOnly />
              <p className="hidden">
                <label>
                  Bot field <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <h4 className="text-lg font-extrabold text-gray-900">{content.bugTitle}</h4>
                <p className="mt-1 text-sm text-gray-600">{content.bugSubtitle}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <FieldLabel optional={content.optionalLabel}>{content.contactEmailLabel}</FieldLabel>
                  <TextInput name="contact_email" type="email" placeholder={content.contactEmailPlaceholder} />
                </div>
                <div>
                  <FieldLabel optional={content.optionalLabel}>{content.bugAreaLabel}</FieldLabel>
                  <TextInput name="bug_area" type="text" placeholder={content.bugAreaPlaceholder} maxLength={80} />
                </div>
              </div>

              <div>
                <FieldLabel>{content.bugSummaryLabel}</FieldLabel>
                <TextInput name="bug_summary" type="text" placeholder={content.bugSummaryPlaceholder} maxLength={140} required />
              </div>

              <div>
                <FieldLabel>{content.bugStepsLabel}</FieldLabel>
                <TextArea name="bug_steps" placeholder={content.bugStepsPlaceholder} required />
              </div>

              <button
                type="submit"
                disabled={bugState === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-green-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {bugState === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {getSubmitText(bugState, content.submitBug, content.submitting)}
              </button>

              {bugState === "success" && (
                <p className="flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  {content.successBug}
                </p>
              )}
              {bugState === "error" && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{content.error}</p>}
            </form>
          ) : (
            <form
              name="vault-content-idea"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleIdeaSubmit}
              className="space-y-5 animate-[fadeInUp_0.35s_ease-out]"
            >
              <input type="hidden" name="form-name" value="vault-content-idea" readOnly />
              <input type="hidden" name="subject" value="Vault content idea" readOnly />
              <input type="hidden" name="locale" value={locale} readOnly />
              <input type="hidden" name="page_url" value={pageUrl} readOnly />
              <input type="hidden" name="idea_kind" value={activeIdeaKind} readOnly />
              <p className="hidden">
                <label>
                  Bot field <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <h4 className="text-lg font-extrabold text-gray-900">{content.ideaTitle}</h4>
                <p className="mt-1 text-sm text-gray-600">{content.ideaSubtitle}</p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {content.ideaChoices.map((choice) => {
                  const Icon = ideaIcons[choice.id];
                  const isActive = activeIdeaKind === choice.id;

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => {
                        setActiveIdeaKind(choice.id);
                        setIdeaError("");
                        setIdeaState("idle");
                      }}
                      className={`group rounded-2xl border p-4 text-left shadow-sm transition-all duration-200 ${
                        isActive
                          ? "border-orange-300 bg-orange-100 text-orange-900 shadow-md"
                          : "border-orange-100 bg-white hover:-translate-y-0.5 hover:border-orange-200 hover:bg-orange-50"
                      }`}
                    >
                      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-700 shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="block text-sm font-extrabold">{choice.label}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-gray-600">{choice.description}</span>
                      <ChevronRight className={`mt-3 h-4 w-4 transition-transform duration-200 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`} />
                    </button>
                  );
                })}
              </div>

              <div>
                <FieldLabel optional={content.optionalLabel}>{content.contactEmailLabel}</FieldLabel>
                <TextInput name="contact_email" type="email" placeholder={content.contactEmailPlaceholder} />
              </div>

              {activeIdeaKind === "characteristic" && (
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <FieldLabel>{content.characteristicTypeLabel}</FieldLabel>
                    <div className="relative">
                      <select
                        name="characteristic_type"
                        required
                        className="h-12 w-full appearance-none rounded-2xl border border-orange-100 bg-white px-4 py-3 pr-10 text-sm font-semibold text-gray-900 shadow-sm outline-none transition-all duration-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                      >
                        {content.characteristicOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <FieldLabel>{content.characteristicContentLabel}</FieldLabel>
                    <TextInput
                      name="characteristic_content"
                      type="text"
                      placeholder={content.characteristicContentPlaceholder}
                      maxLength={40}
                      required
                    />
                  </div>
                </div>
              )}

              {activeIdeaKind === "cataclysm" && (
                <div>
                  <FieldLabel>{content.cataclysmDescriptionLabel}</FieldLabel>
                  <TextArea name="cataclysm_description" placeholder={content.cataclysmDescriptionPlaceholder} required />
                </div>
              )}

              {activeIdeaKind === "bunker-feature" && (
                <div className="space-y-5">
                  <div>
                    <FieldLabel>{content.bunkerFeatureContentLabel}</FieldLabel>
                    <TextInput
                      name="bunker_feature_content"
                      type="text"
                      placeholder={content.bunkerFeatureContentPlaceholder}
                      maxLength={40}
                      required
                    />
                  </div>

                  <div>
                    <FieldLabel>{content.bunkerEffectLabel}</FieldLabel>
                    <p className="mb-3 text-xs font-semibold text-gray-500">{content.bunkerEffectHint}</p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {content.bunkerEffects.map((effect) => {
                        const checked = selectedEffects.includes(effect.id);

                        return (
                          <label
                            key={effect.id}
                            className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                              checked
                                ? "border-orange-300 bg-orange-100 text-orange-900 shadow-sm"
                                : "border-orange-100 bg-white text-gray-700 hover:border-orange-200 hover:bg-orange-50"
                            }`}
                          >
                            <input
                              type="checkbox"
                              name="bunker_effects"
                              value={effect.id}
                              checked={checked}
                              onChange={() => handleEffectToggle(effect.id)}
                              className="h-4 w-4 rounded border-orange-300 text-orange-600 focus:ring-orange-500"
                            />
                            {effect.label}
                          </label>
                        );
                      })}
                    </div>
                    {ideaError && <p className="mt-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{ideaError}</p>}
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={ideaState === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:bg-purple-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {ideaState === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {getSubmitText(ideaState, content.submitIdea, content.submitting)}
              </button>

              {ideaState === "success" && (
                <p className="flex items-center gap-2 rounded-2xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                  <CheckCircle2 className="h-5 w-5" />
                  {content.successIdea}
                </p>
              )}
              {ideaState === "error" && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{content.error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
