interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ background: "var(--terminal-darker)", padding: "3rem 2rem" }}
    >
      {/* Gradient glow border wrapper */}
      <div className="terminal-glow-wrapper w-full" style={{ maxWidth: "1400px" }}>
        {/* Actual terminal window sits inside the 1px gradient border */}
        <div className="overflow-hidden rounded-[10px]" style={{ background: "var(--terminal-bg)" }}>

          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              background: "var(--window-chrome)",
              borderBottom: "1px solid rgba(0,0,0,0.4)",
            }}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-125 transition-all cursor-default" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-125 transition-all cursor-default" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:brightness-125 transition-all cursor-default" />
            </div>
            <div
              className="flex-1 text-center text-[13px] font-medium tracking-wide"
              style={{ color: "#888" }}
            >
              {title}
            </div>
            <div className="w-[60px]" />
          </div>

          {/* Terminal body */}
          <div
            className="scan-lines px-10 py-10 md:px-20 md:py-16"
            style={{ background: "var(--terminal-bg)" }}
          >
            <div className="relative z-[2]">{children}</div>
          </div>

        </div>
      </div>
    </div>
  );
}
