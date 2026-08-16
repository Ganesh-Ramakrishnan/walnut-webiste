"use client";

import { useState } from "react";
import { ArrowRight, Check, LoaderCircle, ChevronDown } from "lucide-react";

const DISCORD_URL = "https://discord.com/invite/Tcw88yu6q";

const ROLES = [
  { value: "qa-engineer", label: "QA Engineer" },
  { value: "developer", label: "Developer" },
  { value: "devops", label: "DevOps Engineer" },
  { value: "ml-engineer", label: "ML Engineer" },
  { value: "pm", label: "Product Manager" },
  { value: "other", label: "Other" },
];

const EXPERIENCE = [
  { value: "0-2", label: "0-2 Years" },
  { value: "2-5", label: "2-5 Years" },
  { value: "5-10", label: "5-10 Years" },
  { value: "10+", label: "10+ Years" },
];

const TEAM_SIZES = [2, 3, 4] as const;

interface Person {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  experience: string;
  github: string;
  linkedin: string;
}

/** Numbered section wrapper — gives the long form a scannable spine. */
function Section({
  num,
  title,
  hint,
  children,
}: {
  num: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="hk-fs">
      <div className="hk-fs-head">
        <span className="hk-fs-num">{num}</span>
        <div>
          <h4 className="hk-fs-title">{title}</h4>
          {hint && <p className="hk-fs-hint">{hint}</p>}
        </div>
      </div>
      <div className="hk-fs-body">{children}</div>
    </section>
  );
}

const emptyPerson = (): Person => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  role: "",
  experience: "",
  github: "",
  linkedin: "",
});

const initialForm = {
  teamName: "",
  company: "",
  teamSize: "",
  projectIdea: "",
  agreeNewsletter: true,
};

export default function HackathonForm() {
  const [form, setForm] = useState(initialForm);
  const [lead, setLead] = useState<Person>(emptyPerson());
  const [members, setMembers] = useState<Person[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Team size counts everyone including the lead, so the member cards are size - 1.
  const handleTeamSize = (size: number) => {
    setForm((prev) => ({ ...prev, teamSize: String(size) }));
    setMembers((prev) => {
      const next = Array.from({ length: size - 1 }, (_, i) => prev[i] ?? emptyPerson());
      return next;
    });
  };

  const handleForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleLead = (field: keyof Person, value: string) =>
    setLead((prev) => ({ ...prev, [field]: value }));

  const handleMember = (index: number, field: keyof Person, value: string) =>
    setMembers((prev) => prev.map((m, i) => (i === index ? { ...m, [field]: value } : m)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/hackathon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lead, members }),
      });
      const data = await res.json().catch(() => ({ ok: false }));

      if (res.ok && data.ok) {
        setStatus("success");
        setForm(initialForm);
        setLead(emptyPerson());
        setMembers([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setLead(emptyPerson());
    setMembers([]);
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="hk-form-inner">
        <div className="hk-success">
          <div className="hk-success-badge">
            <Check size={40} strokeWidth={3} />
          </div>
          <h3>Registration Received</h3>
          <p>
            Your team is in. We are reviewing the application and will send joining details to the
            team lead&apos;s email shortly.
          </p>
          <div className="hk-success-next">
            <span>Next step:</span>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Join the Hacker Hub
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  const sending = status === "sending";
  const roster = [{ label: "Lead", person: lead }, ...members.map((m, i) => ({ label: `M${i + 1}`, person: m }))];

  const personFields = (
    person: Person,
    onChange: (field: keyof Person, value: string) => void,
    idPrefix: string,
    compact = false
  ) => (
    <>
      <div className={compact ? "" : "hk-form-row"}>
        <div className="hk-field">
          <input
            id={`${idPrefix}-firstName`}
            type="text"
            className="hk-input"
            placeholder=" "
            value={person.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-firstName`} className="hk-field-label">First Name *</label>
        </div>
        <div className="hk-field">
          <input
            id={`${idPrefix}-lastName`}
            type="text"
            className="hk-input"
            placeholder=" "
            value={person.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-lastName`} className="hk-field-label">Last Name *</label>
        </div>
      </div>

      <div className={compact ? "" : "hk-form-row"}>
        <div className="hk-field">
          <input
            id={`${idPrefix}-email`}
            type="email"
            className="hk-input"
            placeholder=" "
            value={person.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-email`} className="hk-field-label">Email *</label>
        </div>
        <div className="hk-field">
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            className="hk-input"
            placeholder=" "
            value={person.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-phone`} className="hk-field-label">Phone *</label>
        </div>
      </div>

      <div className={compact ? "" : "hk-form-row"}>
        <div className="hk-field">
          <select
            id={`${idPrefix}-role`}
            className={`hk-input ${person.role ? "hk-input--filled" : ""}`}
            value={person.role}
            onChange={(e) => onChange("role", e.target.value)}
            required
          >
            <option value="" disabled hidden />
            {ROLES.map((r) => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
          <label htmlFor={`${idPrefix}-role`} className="hk-field-label hk-field-label--float">Role *</label>
          <ChevronDown size={16} className="hk-select-arrow" />
        </div>
        <div className="hk-field">
          <select
            id={`${idPrefix}-experience`}
            className={`hk-input ${person.experience ? "hk-input--filled" : ""}`}
            value={person.experience}
            onChange={(e) => onChange("experience", e.target.value)}
            required
          >
            <option value="" disabled hidden />
            {EXPERIENCE.map((x) => (
              <option key={x.value} value={x.value}>{x.label}</option>
            ))}
          </select>
          <label htmlFor={`${idPrefix}-experience`} className="hk-field-label hk-field-label--float">
            Experience Level *
          </label>
          <ChevronDown size={16} className="hk-select-arrow" />
        </div>
      </div>

      <div className={compact ? "" : "hk-form-row"}>
        <div className="hk-field">
          <input
            id={`${idPrefix}-github`}
            type="text"
            className="hk-input"
            placeholder=" "
            value={person.github}
            onChange={(e) => onChange("github", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-github`} className="hk-field-label">GitHub Profile *</label>
        </div>
        <div className="hk-field">
          <input
            id={`${idPrefix}-linkedin`}
            type="text"
            className="hk-input"
            placeholder=" "
            value={person.linkedin}
            onChange={(e) => onChange("linkedin", e.target.value)}
            required
          />
          <label htmlFor={`${idPrefix}-linkedin`} className="hk-field-label">LinkedIn Profile *</label>
        </div>
      </div>
    </>
  );

  return (
    <div className="hk-form-inner">
      <form onSubmit={handleSubmit}>
        <div className="hk-form-head">
          <h3 className="hk-form-title">Team Registration</h3>
          <p className="hk-form-note">
            Teams of 2 to 4, including the team lead. No individual entries.
          </p>
        </div>

        <Section num="01" title="Team Details" hint="Who is entering, and how many of you">
          <div className="hk-form-row">
            <div className="hk-field">
              <input
                id="hk-teamName"
                name="teamName"
                type="text"
                className="hk-input"
                placeholder=" "
                value={form.teamName}
                onChange={handleForm}
                required
              />
              <label htmlFor="hk-teamName" className="hk-field-label">Team Name *</label>
            </div>
            <div className="hk-field">
              <input
                id="hk-company"
                name="company"
                type="text"
                className="hk-input"
                placeholder=" "
                value={form.company}
                onChange={handleForm}
                required
              />
              <label htmlFor="hk-company" className="hk-field-label">Company / Organization *</label>
            </div>
          </div>

          <p className="hk-field-heading">Team Size *</p>
          <div className="hk-size-selector">
            {TEAM_SIZES.map((size) => (
              <label
                key={size}
                className={`hk-size-option ${form.teamSize === String(size) ? "hk-size-option--on" : ""}`}
              >
                <input
                  type="radio"
                  name="teamSize"
                  value={size}
                  checked={form.teamSize === String(size)}
                  onChange={() => handleTeamSize(size)}
                  required
                />
                <span className="hk-size-num">{size}</span>
                <span className="hk-size-word">Members</span>
              </label>
            ))}
          </div>
        </Section>

        <Section num="02" title="Team Lead" hint="Primary contact — we send everything here">
          {personFields(lead, handleLead, "hk-lead")}
        </Section>

        {members.length > 0 && (
          <Section
            num="03"
            title="Team Members"
            hint={`${members.length} more to add alongside the lead`}
          >
            <div className="hk-members">
              {members.map((member, i) => (
                <div key={i} className="hk-member-card">
                  <p className="hk-member-number">Member {i + 1}</p>
                  {personFields(
                    member,
                    (field, value) => handleMember(i, field, value),
                    `hk-m${i + 1}`,
                    true
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        {form.teamSize && (
          <Section num="04" title="Team Overview" hint="Fills in as you type — check it before submitting">
            <div className="hk-roster">
              <div className="hk-roster-head">
                <span>#</span><span>Name</span><span>Email</span><span>Role</span><span>Experience</span>
              </div>
              {roster.map((row, i) => (
                <div key={i} className={`hk-roster-row ${i === 0 ? "hk-roster-row--lead" : ""}`}>
                  <span className="hk-roster-tag">{row.label}</span>
                  <span>{[row.person.firstName, row.person.lastName].filter(Boolean).join(" ") || "—"}</span>
                  <span>{row.person.email || "—"}</span>
                  <span>{ROLES.find((r) => r.value === row.person.role)?.label || "—"}</span>
                  <span>{EXPERIENCE.find((x) => x.value === row.person.experience)?.label || "—"}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section num="05" title="Project Idea" hint="A couple of lines is plenty at this stage">
          <div className="hk-field">
            <textarea
              id="hk-projectIdea"
              name="projectIdea"
              rows={3}
              maxLength={2000}
              className="hk-input"
              placeholder=" "
              value={form.projectIdea}
              onChange={handleForm}
              required
            />
            <label htmlFor="hk-projectIdea" className="hk-field-label">
              What is your AI solution idea? *
            </label>
          </div>
        </Section>

        <Section num="06" title="Stay in the loop">
          <label className="hk-check">
            <input type="checkbox" name="agreeNewsletter" checked={form.agreeNewsletter} onChange={handleForm} />
            <span>Send me updates about WalnutAI events and hackathons</span>
          </label>
        </Section>

        <div className="hk-form-actions">
          <button type="submit" className="hk-submit" disabled={sending}>
            {sending ? (
              <>
                Registering Team...
                <LoaderCircle size={18} className="hk-spin" />
              </>
            ) : (
              <>
                Register Team
                <ArrowRight size={18} />
              </>
            )}
          </button>
          <button type="button" className="hk-reset" onClick={handleReset} disabled={sending}>
            Clear
          </button>
        </div>

        {status === "error" && (
          <p className="hk-form-error">Something went wrong. Please try again.</p>
        )}

        <p className="hk-fine-print">
          By submitting, you agree to the WalnutAI Hackathon{" "}
          <a href="/terms-and-conditions">Terms of Service</a> and{" "}
          <a href="/privacy-policy">Privacy Policy</a>. Code of Conduct applies.
        </p>
      </form>
    </div>
  );
}
