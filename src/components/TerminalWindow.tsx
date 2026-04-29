interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: TerminalWindowProps) {
  return (
    <div
      className="max-w-[1400px] mx-2.5 my-5 md:mx-auto md:my-10 rounded-[10px] overflow-hidden"
      style={{
        background: "var(--terminal-bg)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "var(--window-chrome)",
          borderBottom: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:brightness-125 transition-all cursor-default" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:brightness-125 transition-all cursor-default" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:brightness-125 transition-all cursor-default" />
        </div>
        <div
          className="flex-1 text-center text-[13px] font-medium"
          style={{ color: "#999" }}
        >
          {title}
        </div>
        <div className="w-[60px]" />
      </div>

      {/* Terminal body with scan-line overlay */}
      <div
        className="scan-lines px-5 py-5 md:px-10 md:py-8 min-h-screen"
        style={{ background: "var(--terminal-bg)" }}
      >
        <div className="relative z-[2]">{children}</div>
      </div>
    </div>
  );
}
