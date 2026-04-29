const CONTACTS = [
  {
    label: "EMAIL",
    display: "kavinduvijegunasekara@gmail.com",
    href: "mailto:kavinduvijegunasekara@gmail.com",
  },
  {
    label: "GITHUB",
    display: "@Kavinduprabasara",
    href: "https://github.com/Kavinduprabasara",
  },
  {
    label: "LINKEDIN",
    display: "Connect with me",
    href: "https://www.linkedin.com/in/kavindu-wijegunasekara-49729a219/",
  },
];

export default function ContactSection() {
  return (
    <section className="section-visible mb-14">
      <div className="flex items-start gap-3 mb-5">
        <span className="font-semibold shrink-0" style={{ color: "var(--terminal-cyan)" }}>
          kavindu@portfolio:~$
        </span>
        <span className="font-medium" style={{ color: "var(--terminal-green)" }}>
          echo $CONTACT_INFO
        </span>
      </div>
      <div>
        <p className="mb-5 text-sm" style={{ color: "var(--terminal-gray)" }}>
          I&apos;m always open to discussing new opportunities and interesting projects.
        </p>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {CONTACTS.map(({ label, display, href }) => (
            <div
              key={label}
              className="px-4 py-4 rounded transition-all duration-300"
              style={{
                background: "rgba(107,228,224,0.05)",
                border: "1px solid rgba(107,228,224,0.2)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(107,228,224,0.1)";
                el.style.borderColor = "var(--terminal-cyan)";
                el.style.boxShadow = "0 0 15px rgba(107,228,224,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(107,228,224,0.05)";
                el.style.borderColor = "rgba(107,228,224,0.2)";
                el.style.boxShadow = "none";
              }}
            >
              <strong
                className="block mb-2 text-[13px]"
                style={{ color: "var(--terminal-cyan)" }}
              >
                {label}
              </strong>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-[13px] transition-colors duration-300"
                style={{ color: "var(--terminal-white)", textDecoration: "none" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--terminal-green)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--terminal-white)")
                }
              >
                {display}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
