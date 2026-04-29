import type { Metadata } from "next";
import TerminalEmulator from "@/components/terminal/TerminalEmulator";

export const metadata: Metadata = {
  title: "terminal — kavindu@portfolio",
};

export default function TerminalPage() {
  return (
    <div className="min-h-screen py-10 px-5" style={{ background: "#000" }}>
      <TerminalEmulator />
    </div>
  );
}
