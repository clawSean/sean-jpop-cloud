window.SEAN_CATALOG = [
  {
    id: "claw-machine",
    index: "001",
    name: "Claw Machine",
    kind: "system",
    kindLabel: "Identity system",
    status: "Live",
    statusTone: "live",
    authorship: "Original build",
    availability: "Public source",
    featured: true,
    featureSize: "hero",
    visual: "identity",
    tone: "crimson",
    lead: "One shared agent. The right identity, room, and boundaries every time.",
    summary: "Claw Machine resolves contact and group profiles at bootstrap, then injects only the context appropriate to that conversation. Sean can feel personal across family, friends, and work surfaces without flattening everyone into one giant prompt.",
    why: "It turns identity from a pile of prompt text into a deliberate routing layer—with exact profiles, explicit authority, and a public implementation others can inspect.",
    tags: ["Identity", "Context", "Profiles"],
    reviewed: "Sep 2026",
    links: [
      { label: "View source", href: "https://github.com/clawSean/claw-machine", primary: true }
    ]
  },
  {
    id: "lobster-chat",
    index: "002",
    name: "Lobster Chat",
    kind: "app",
    kindLabel: "Private web app",
    status: "Live",
    statusTone: "live",
    authorship: "Original build",
    availability: "Hosted app",
    featured: true,
    featureSize: "standard",
    visual: "chat",
    tone: "teal",
    lead: "A private family workspace with fast models, full Sean, voice, files, and local privacy screening.",
    summary: "Lobster Chat gives JPop and family a purpose-built conversation surface instead of another generic chat box. Direct modes keep history in the browser; Sean mode can use the full agent environment when that is the point.",
    why: "The interesting part is not the chat UI. It is the visible privacy choice: visitors can choose speed, agency, or local screening without pretending those modes have identical boundaries.",
    tags: ["Privacy", "Multimodal", "Web"],
    reviewed: "Sep 2026",
    links: [
      { label: "Open the app", href: "https://chat.jpop.cloud", primary: true }
    ]
  },
  {
    id: "clawgauge",
    index: "003",
    name: "ClawGauge",
    kind: "system",
    kindLabel: "Evaluation system",
    status: "Beta",
    statusTone: "beta",
    authorship: "Original build",
    availability: "Public source",
    featured: true,
    featureSize: "standard",
    visual: "gauge",
    tone: "gold",
    lead: "Model evaluation for real agents: quality, reliability, latency, cost, and whether the tools actually worked.",
    summary: "ClawGauge combines ShellBench-style scoring with personal-agent QA, evidence capture, and bounded comparison runs. It is built for choosing routes and catching failure modes, not producing decorative leaderboard numbers.",
    why: "Agent output is easy to praise and surprisingly hard to prove. ClawGauge keeps the execution path, cost, and reliability visible beside the answer.",
    tags: ["Evals", "QA", "Models"],
    reviewed: "Sep 2026",
    links: [
      { label: "View source", href: "https://github.com/clawSean/clawgauge", primary: true }
    ]
  },
  {
    id: "skillreef",
    index: "004",
    name: "SkillReef",
    kind: "system",
    kindLabel: "Skill collection",
    status: "Maintained",
    statusTone: "maintained",
    authorship: "Original collection",
    availability: "Public source",
    featured: false,
    visual: "reef",
    tone: "teal",
    lead: "Reusable OpenClaw skills with the private environment scrubbed out and the operating judgment left in.",
    summary: "SkillReef is the public shelf for Sean's reusable runbooks—from research and browser work to Telegram UI, routing, and system operations. A publishing pipeline keeps public copies generated from canonical live sources.",
    why: "Good agent behavior should be portable without leaking the home it came from. SkillReef treats publication, scrubbing, and source drift as one system.",
    tags: ["Skills", "Runbooks", "Publishing"],
    reviewed: "Sep 2026",
    links: [
      { label: "Browse the reef", href: "https://github.com/clawSean/skillreef", primary: true }
    ]
  },
  {
    id: "shell-swap",
    index: "005",
    name: "Shell Swap",
    kind: "skill",
    kindLabel: "OpenClaw skill",
    status: "Maintained",
    statusTone: "maintained",
    authorship: "Original build",
    availability: "Public source + notes",
    featured: false,
    visual: "swap",
    tone: "blue",
    lead: "Restart-free model and account routing across active OpenClaw conversations.",
    summary: "Shell Swap moves current sessions between model, provider, account, thinking, fast-mode, and runtime settings through Gateway-native session patching. Ordinary runs avoid config edits and Gateway restarts.",
    why: "Routing should be reversible and scoped. The default path touches current-agent human chats; broader workload or persistent-default changes require explicit flags.",
    tags: ["Routing", "Sessions", "No restart"],
    reviewed: "Sep 2026",
    guide: {
      mode: "inline",
      label: "Operator note",
      title: "Use the smallest routing surface that solves the problem.",
      steps: [
        "Preview the exact sessions and settings that would change.",
        "Patch the current conversation lane without rewriting global defaults.",
        "Escalate to all-agent, workload, or persistent changes only when those are actually intended."
      ]
    },
    links: [
      { label: "View source", href: "https://github.com/clawSean/shell-swap", primary: true }
    ]
  },
  {
    id: "gateway-uptime-watch",
    index: "006",
    name: "Gateway Uptime Watch",
    kind: "plugin",
    kindLabel: "Reliability service",
    status: "Live",
    statusTone: "live",
    authorship: "Original build",
    availability: "Public source",
    featured: false,
    visual: "uptime",
    tone: "green",
    lead: "An external watchdog that can still text when the assistant it watches is completely offline.",
    summary: "A VPS-side systemd timer checks Mac reachability before the tailnet-only Gateway readiness endpoint. It sends one direct SMS per incident and one recovery notice, with Gateway alerts suppressed when the Mac itself is unreachable.",
    why: "A monitor inside the failed system is a motivational poster. This one lives outside the Gateway and owns its own bounded delivery path.",
    tags: ["Monitoring", "SMS", "Fail-safe"],
    reviewed: "Sep 2026",
    links: [
      { label: "View source", href: "https://github.com/clawSean/gateway-uptime-watch", primary: true }
    ]
  },
  {
    id: "native-sms-guide",
    index: "007",
    name: "Native SMS setup guide",
    kind: "guide",
    kindLabel: "Operator guide",
    status: "Maintained",
    statusTone: "maintained",
    authorship: "Upstream collaboration",
    availability: "Dedicated guide",
    featured: false,
    visual: "sms",
    tone: "crimson",
    lead: "The practical path from Twilio and A2P registration to a working native OpenClaw SMS channel.",
    summary: "This is not a standalone product repo. It documents the setup decisions, webhook shape, pairing, compliance examples, and sharp edges learned while helping move the SMS lane from a custom plugin into native OpenClaw.",
    why: "Some work is most useful as a route through a complicated system. The catalog entry stays concise; the dedicated page owns the real guidance and contribution trail.",
    tags: ["SMS", "Twilio", "OpenClaw"],
    reviewed: "Sep 2026",
    guide: {
      mode: "page",
      label: "Dedicated setup guide",
      href: "/sms/"
    },
    links: [
      { label: "Open setup guide", href: "/sms/", primary: true },
      { label: "Contribution receipts", href: "/contributions/" }
    ]
  }
];
