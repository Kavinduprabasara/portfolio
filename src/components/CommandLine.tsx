interface CommandLineProps {
  command: string;
}

export default function CommandLine({ command }: CommandLineProps) {
  return (
    <div
      className="flex items-center gap-3 mb-7 pb-3"
      style={{ borderBottom: "1px dashed rgba(0,255,65,0.14)" }}
    >
      <span
        className="shrink-0 text-[12px] font-semibold tracking-wide"
        style={{ color: "var(--terminal-cyan)" }}
      >
        kavindu@portfolio:~$
      </span>
      <span
        className="text-[13px] font-semibold tracking-widest"
        style={{ color: "var(--terminal-green)" }}
      >
        {command}
      </span>
    </div>
  );
}
