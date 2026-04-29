"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { buildCommands, imageToASCII } from "./commands";

interface Line {
  id: number;
  text: string;
  type: "output" | "command" | "error" | "info" | "success";
}

let lineId = 0;

export default function TerminalEmulator() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([
    { id: lineId++, text: "Welcome to Terminal v1.0", type: "info" },
    { id: lineId++, text: "Type 'help' for available commands", type: "output" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [mode, setMode] = useState<"dots" | "full">("dots");
  const [width, setWidth] = useState(80);

  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function addLine(text: string, type: Line["type"] = "output") {
    setLines((prev) => [...prev, { id: lineId++, text, type }]);
  }

  const scrollBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    });
  }, []);

  useEffect(scrollBottom, [lines, scrollBottom]);

  const loadKavindu = useCallback(() => {
    const img = new Image();
    img.onload = () => {
      addLine(imageToASCII(img, width, mode), "output");
    };
    img.onerror = () => addLine("Error loading portrait.", "error");
    img.src = "/kavindu.jpg";
  }, [width, mode]);

  const commands = buildCommands({
    mode,
    width,
    setMode,
    setWidth,
    triggerLoad: () => fileInputRef.current?.click(),
    triggerKavindu: loadKavindu,
    exit: () => router.push("/"),
    clear: () => setLines([]),
  });

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;

    addLine(`user@terminal:~$ ${trimmed}`, "command");
    setHistory((h) => [trimmed, ...h]);
    setHistoryIdx(-1);

    const [cmd, ...args] = trimmed.toLowerCase().split(" ");
    if (commands[cmd]) {
      const result = commands[cmd](args);
      if (result) addLine(result, "output");
    } else {
      addLine(`Command not found: ${cmd}`, "error");
      addLine('Type "help" for available commands', "info");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        setInput(history[next] ?? "");
        return next;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIdx((i) => {
        const next = Math.max(i - 1, -1);
        setInput(next === -1 ? "" : history[next] ?? "");
        return next;
      });
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    addLine(`Loading: ${file.name}...`, "info");
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        addLine(`Processing image (${img.width}×${img.height})...`, "info");
        addLine(imageToASCII(img, width, mode), "output");
        addLine("Image loaded successfully!", "success");
      };
      img.onerror = () => addLine("Error loading image", "error");
      img.src = ev.target!.result as string;
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  const typeColor: Record<Line["type"], string> = {
    output: "#0f0",
    command: "#fff",
    error: "#ff5f56",
    info: "#5ac8fa",
    success: "#27c93f",
  };

  return (
    <div
      className="max-w-[900px] mx-auto rounded-xl overflow-hidden"
      style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.5)" }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{
          background: "#2d2d2d",
          borderBottom: "1px solid #3d3d3d",
        }}
      >
        <button
          className="w-3 h-3 rounded-full bg-[#ff5f56] border-none cursor-pointer"
          onClick={() => router.push("/")}
          aria-label="Close terminal"
        />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <div className="flex-1 text-center text-xs" style={{ color: "#888" }}>
          terminal — bash — 80×24
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="px-5 py-5 min-h-[400px] max-h-[80vh] overflow-y-auto"
        style={{ background: "#000" }}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <div
            key={line.id}
            className="mb-2 leading-[1.4]"
            style={{
              color: typeColor[line.type],
              whiteSpace: "pre",
              fontSize: line.type === "output" && line.text.includes("\n") ? "10px" : "14px",
              lineHeight: line.type === "output" && line.text.includes("\n") ? "1.1" : "1.4",
              fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
            }}
          >
            {line.text}
          </div>
        ))}

        {/* Input line */}
        <div className="flex items-center mt-2.5">
          <span className="text-sm shrink-0" style={{ color: "#0f0", fontFamily: "inherit" }}>
            user@terminal:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="flex-1 ml-2 text-sm outline-none"
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontFamily: "'Menlo', 'Monaco', 'Courier New', monospace",
            }}
          />
          <span
            className="inline-block w-2 h-4"
            style={{ background: "#0f0", animation: "blink 1s infinite" }}
          />
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
