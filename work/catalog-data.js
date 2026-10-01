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
    teaser: "Exact identity and room context across every conversation surface—without one giant prompt.",
    summary: "Claw Machine resolves contact and group profiles at bootstrap, then injects only the context appropriate to that conversation. Sean can feel personal across family, friends, and work surfaces without flattening everyone into one giant prompt.",
    why: "It turns identity from a pile of prompt text into a deliberate routing layer—with exact profiles, explicit authority, and a public implementation others can inspect.",
    story: {
      promise: "The same agent can meet you on six different channels and still know exactly who walked into which room.",
      problem: "Personal agents usually choose between amnesia and prompt soup. They either treat every sender like a stranger or load so much global context that identity, privacy, and authority boundaries blur together.",
      shift: "Claw Machine makes identity a small deterministic system. Verified channel IDs resolve to one canonical person, room profiles add the local rules, and only the relevant context enters the turn.",
      scenario: {
        label: "See the signal move",
        title: "Same person. Different door. Correct context.",
        intro: "A message can arrive from Telegram, iMessage, SMS, Slack, Discord, or another explicit identity without making the agent guess.",
        steps: [
          { label: "01 / Arrival", title: "An exact identity arrives", body: "The channel supplies a concrete channel:id—not a display name, fuzzy phone match, or prose guess." },
          { label: "02 / Resolve", title: "One canonical profile wins", body: "A bounded in-memory index maps verified aliases to the same contact file and refuses ambiguous collisions." },
          { label: "03 / Behave", title: "The room gets the right Sean", body: "Contact, group, roster, and authority context are injected within explicit budgets before the response begins." }
        ]
      },
      capabilities: [
        { title: "Cross-channel identity", body: "One human can own multiple verified channel identities without maintaining duplicate live profiles." },
        { title: "Room-aware behavior", body: "DMs receive the contact profile; groups receive the room profile plus a bounded roster of relevant people." },
        { title: "Fail-closed resolution", body: "Collisions are surfaced instead of guessed. Names, usernames, and profile prose never silently merge identities." }
      ],
      proof: [
        { value: "0", label: "runtime dependencies", detail: "Markdown files, exact IDs, and one in-memory index." },
        { value: "Exact", label: "matching contract", detail: "Verified aliases first; legacy exact paths second; fuzzy identity never." },
        { value: "Public", label: "implementation", detail: "Tests, installer, audit tooling, benchmark, and migration guidance ship with the source." }
      ],
      possibilities: [
        "Give family, coworkers, and public rooms distinct behavior without cloning the agent.",
        "Attach explicit authority and privacy boundaries to people and rooms instead of hoping a prompt remembers them.",
        "Move a real relationship between channels while preserving one curated history and identity."
      ],
      audience: "Anyone building one long-lived assistant for more than one person, room, or channel.",
      boundary: "It only knows identities you verify. That restraint is the safety feature, not a missing trick.",
      close: "Make the agent feel personal because the identity system is precise—not because the prompt is enormous."
    },
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
    teaser: "A family AI workspace where speed, full agency, and local privacy screening are visible choices.",
    summary: "Lobster Chat gives JPop and family a purpose-built conversation surface instead of another generic chat box. Direct modes keep history in the browser; Sean mode can use the full agent environment when that is the point.",
    why: "The interesting part is not the chat UI. It is the visible privacy choice: visitors can choose speed, agency, or local screening without pretending those modes have identical boundaries.",
    story: {
      promise: "A shared AI workspace can be fast, personal, multimodal, and honest about what each mode can access.",
      problem: "Generic chat products flatten every conversation into the same trust model. A quick question, a private file, and a task for a fully empowered agent all look like the same text box—even though they should not carry the same context or risk.",
      shift: "Lobster Chat exposes the choice. Direct modes stay intentionally thin and browser-local; Sean mode reaches the real agent environment when tools, memory, and follow-through are the reason you came.",
      scenario: {
        label: "Choose the boundary",
        title: "One workspace. Three very different jobs.",
        intro: "The interface makes the operating mode part of the product instead of hiding it behind a model picker.",
        steps: [
          { label: "01 / Fast", title: "Ask without summoning the whole machine", body: "Direct conversation modes prioritize speed and keep their history in the browser without silently inheriting agent tools or private memory." },
          { label: "02 / Screen", title: "Check sensitive material locally", body: "Browser-local privacy screening can inspect supported content before it crosses into a broader workflow." },
          { label: "03 / Sean", title: "Escalate when the task needs agency", body: "The full Sean lane can use the connected agent environment for real context, tools, files, voice, and follow-through." }
        ]
      },
      capabilities: [
        { title: "Explicit operating modes", body: "Visitors choose speed, deeper reasoning, or the full agent instead of receiving an invisible blend." },
        { title: "Multimodal workspace", body: "Voice, files, search, and persistent browser-side history make it useful beyond prompt-and-response chat." },
        { title: "Privacy as product behavior", body: "Conversation text is excluded from server telemetry, and private uploads, feedback, and configuration stay owner-controlled." }
      ],
      proof: [
        { value: "Live", label: "hosted product", detail: "The public app is usable now, not a portfolio mockup." },
        { value: "Local", label: "direct-mode history", detail: "Fast and High conversation history remains in the visitor's browser." },
        { value: "Explicit", label: "agent boundary", detail: "Direct modes do not quietly inherit Sean's tools or private memory." }
      ],
      possibilities: [
        "Give a household one polished AI front door without giving every conversation the keys to the agent.",
        "Use local screening as a practical checkpoint before sending sensitive material into another workflow.",
        "Move from a lightweight answer to a fully agentic task without switching products or pretending the modes are equivalent."
      ],
      audience: "Families and small trusted groups who want a useful AI workspace rather than a generic model demo.",
      boundary: "It does not claim blanket anonymity or perfect security. The value is that its real boundaries are visible and intentional.",
      close: "Choose the amount of intelligence, context, and agency the moment actually deserves."
    },
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
    teaser: "Decision-grade model evaluation that keeps tool use, failures, cost, and route identity beside the answer.",
    summary: "ClawGauge combines ShellBench-style scoring with personal-agent QA, evidence capture, and bounded comparison runs. It is built for choosing routes and catching failure modes, not producing decorative leaderboard numbers.",
    why: "Agent output is easy to praise and surprisingly hard to prove. ClawGauge keeps the execution path, cost, and reliability visible beside the answer.",
    story: {
      promise: "Stop choosing agent models from vibes, one lucky answer, or a leaderboard that never touched your tools.",
      problem: "A response can look excellent while using the wrong route, skipping tools, falling back silently, leaking context, or failing three times before the screenshot. Most benchmarks erase exactly the evidence an operator needs.",
      shift: "ClawGauge freezes the task and route, runs bounded agent-shaped cells, captures the trajectory and cost, and fails closed when the evidence cannot support a decision.",
      scenario: {
        label: "From candidate to route",
        title: "A cheaper model asks for a real job.",
        intro: "ClawGauge makes it earn promotion on the same tasks, tools, and safety expectations the agent actually faces.",
        steps: [
          { label: "01 / Freeze", title: "Lock the experiment", body: "Tasks, controls, route expectations, budgets, and decision floors are recorded before expensive calls begin." },
          { label: "02 / Run", title: "Execute isolated cells", body: "Repeated attempts capture capability, tool trajectories, reliability, latency, tokens, cost, fallback state, and cleanup." },
          { label: "03 / Decide", title: "Compare only defensible evidence", body: "QA, truthfulness, and worst-run floors can block a winner even when the average score looks attractive." }
        ]
      },
      capabilities: [
        { title: "Agent-shaped evaluation", body: "Measures whether the route can operate tools and finish real workflows—not merely answer static questions." },
        { title: "Fail-closed evidence", body: "Requested and observed routes, fallback state, commits, judges, task fingerprints, and cost provenance stay attached to results." },
        { title: "Separate kinds of quality", body: "Deterministic capability, personal-agent safety, truthfulness, and blind character evidence do not collapse into one magic number." }
      ],
      proof: [
        { value: "10", label: "personal-agent scenarios", detail: "A dedicated fail-closed QA gate covers real assistant failure modes." },
        { value: "n≥3", label: "truthfulness cells", detail: "Repeated content-bound runs guard against one-shot false greens." },
        { value: "Blocked", label: "means blocked", detail: "A failed route canary or missing evidence prevents promotion instead of becoming a footnote." }
      ],
      possibilities: [
        "Choose daily, coding, research, background, persona, and escalation routes with evidence.",
        "Catch regressions after model, provider, prompt, tool, or OpenClaw changes.",
        "Promote a cheaper route only when its reliability and worst-case behavior remain acceptable."
      ],
      audience: "Operators who care which model actually works inside their agent—not which one won a generic benchmark.",
      boundary: "ClawGauge does not claim a universal intelligence score. It makes bounded decisions from representative tasks and explicit rubrics.",
      close: "If a model wants the keys to the agent, make it bring receipts."
    },
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
    teaser: "Portable agent runbooks that preserve hard-won judgment without publishing the private home they came from.",
    summary: "SkillReef is the public shelf for Sean's reusable runbooks—from research and browser work to Telegram UI, routing, and system operations. A publishing pipeline keeps public copies generated from canonical live sources.",
    why: "Good agent behavior should be portable without leaking the home it came from. SkillReef treats publication, scrubbing, and source drift as one system.",
    story: {
      promise: "Turn the operating judgment inside a mature agent into reusable skills without leaking its people, paths, secrets, or private machinery.",
      problem: "Useful agent behavior usually lives in one messy workspace: mixed with local IDs, machine paths, account assumptions, and unwritten lessons. Copy it raw and you leak the house; rewrite it by hand and the public version drifts.",
      shift: "SkillReef publishes a curated public-safe subset from canonical live skills through one scrubbed pipeline. The useful procedure survives; private bindings and stale mirror edits do not.",
      scenario: {
        label: "From lived lesson to portable skill",
        title: "Publish behavior, not somebody else's home directory.",
        intro: "Every skill begins as working operational guidance and earns a public form only when it can stand on its own.",
        steps: [
          { label: "01 / Prove", title: "Use it in the real environment", body: "The canonical skill evolves where the agent actually needs it, with working commands, boundaries, and failure lessons." },
          { label: "02 / Scrub", title: "Remove private bindings", body: "The publication pipeline filters local identities, paths, configuration, and unsupported assumptions before staging." },
          { label: "03 / Sync", title: "Generate every public copy together", body: "SkillReef and any standalone mirror come from the same staged output so public surfaces cannot quietly fork." }
        ]
      },
      capabilities: [
        { title: "Practical runbooks", body: "Skills cover research, browser work, chat UI, routing, project operations, contribution proof, and other repeatable agent jobs." },
        { title: "Self-contained guidance", body: "A public skill should answer the operational question directly instead of sending another agent through private pointer chains." },
        { title: "No-drift publishing", body: "Scrubbing, checksums, curated inclusion, and shared generation keep the public shelf aligned with its declared source." }
      ],
      proof: [
        { value: "1", label: "canonical source per skill", detail: "Public repositories are generated outputs, never competing editable homes." },
        { value: "Checked", label: "publication boundary", detail: "Declared outputs are scrubbed and checksum-verified before synchronization claims." },
        { value: "Curated", label: "public subset", detail: "Environment-specific or sensitive skills stay out instead of being cosmetically renamed." }
      ],
      possibilities: [
        "Bootstrap a new OpenClaw agent with battle-tested operating patterns instead of inventing every workflow from scratch.",
        "Inspect exactly how another agent handles Telegram UI, research, routing, contributions, and safety boundaries.",
        "Share improvements as durable procedures rather than one-off prompts lost in chat history."
      ],
      audience: "OpenClaw operators and agent builders who want reusable behavior with enough detail to work at response time.",
      boundary: "SkillReef is a public-safe library, not a dump of every installed skill or a claim that every local capability is portable.",
      close: "The reef keeps the hard-earned behavior and leaves the private sediment behind."
    },
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
    teaser: "Patch the exact live conversations that need a new model, account, or reasoning posture—without a restart.",
    summary: "Shell Swap moves current sessions between model, provider, account, thinking, fast-mode, and runtime settings through Gateway-native session patching. Ordinary runs avoid config edits and Gateway restarts.",
    why: "Routing should be reversible and scoped. The default path touches current-agent human chats; broader workload or persistent-default changes require explicit flags.",
    story: {
      promise: "Change the lane, not the whole highway: route the conversations you mean without rewriting defaults or bouncing the Gateway.",
      problem: "Model switches are often treated like configuration surgery. That is too broad for a live assistant with human chats, background work, multiple accounts, and tasks that should not all move together.",
      shift: "Shell Swap previews and patches session overrides through the Gateway's own bulk API. The ordinary path stays scoped, reversible, and restart-free; persistent defaults require an explicit separate decision.",
      scenario: {
        label: "A bounded route change",
        title: "Move tonight's conversations. Leave the rest alone.",
        intro: "A provider is degraded—or one task simply deserves a stronger model. Shell Swap changes only the lanes you select.",
        steps: [
          { label: "01 / Preview", title: "See the exact blast radius", body: "A dry run lists the matching sessions and every model, provider, account, thinking, fast-mode, or runtime field that would change." },
          { label: "02 / Patch", title: "Update live session overrides", body: "Gateway-native patchMany calls update bounded batches without editing shared config or restarting the service." },
          { label: "03 / Restore", title: "Clear or change the override later", body: "The same scoped mechanism can move the lane again or return it to its inherited default." }
        ]
      },
      capabilities: [
        { title: "More than model switching", body: "Route model, provider, auth profile, thinking level, fast mode, runtime, agent scope, and chat-only selections." },
        { title: "Human-chat default", body: "The normal fleet path targets current-agent human conversations instead of silently rewriting cron, tests, or detached workloads." },
        { title: "Machine-readable receipts", body: "Dry-run and apply flows can emit JSON so operators can inspect, archive, or verify the exact mutation set." }
      ],
      proof: [
        { value: "0", label: "ordinary restarts", detail: "Normal session routing does not require a Gateway restart." },
        { value: "100", label: "sessions per batch", detail: "Bulk patching is bounded instead of becoming one giant mutation." },
        { value: "Explicit", label: "persistent change", detail: "Default-model mutation exists only behind a separate opt-in flag." }
      ],
      possibilities: [
        "Fail over active chats during a provider incident without moving background jobs.",
        "Give one expensive task deeper reasoning, then return the conversation to its normal route.",
        "Run controlled account or model migrations with a previewable, reversible receipt."
      ],
      audience: "OpenClaw operators managing several human conversations, providers, models, or account lanes.",
      boundary: "It does not make broad fleet or persistent-default changes unless the operator explicitly asks for that larger surface.",
      close: "Routing becomes a precise operational action instead of a maintenance-window ritual."
    },
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
    teaser: "An out-of-band VPS watchdog that can text when the Mac—or the Gateway itself—cannot speak.",
    summary: "A VPS-side systemd timer checks Mac reachability before the tailnet-only Gateway readiness endpoint. It sends one direct SMS per incident and one recovery notice, with Gateway alerts suppressed when the Mac itself is unreachable.",
    why: "A monitor inside the failed system is a motivational poster. This one lives outside the Gateway and owns its own bounded delivery path.",
    story: {
      promise: "When the assistant disappears, the alert path should not disappear with it.",
      problem: "Internal health checks are useful right up until the host, Gateway, scheduler, or agent runtime is the thing that failed. Then the system responsible for warning you is trapped inside the outage.",
      shift: "Gateway Uptime Watch lives on the public-edge VPS. It checks the Mac first, then the tailnet-only readiness endpoint, and owns a direct SMS path that does not depend on the agent being alive.",
      scenario: {
        label: "Outage logic",
        title: "Tell the difference between a missing Mac and a sick Gateway.",
        intro: "The order matters: one dead host should not produce a second misleading Gateway incident.",
        steps: [
          { label: "01 / Reach", title: "Can the VPS reach ClawPop?", body: "A one-minute systemd timer checks tailnet reachability and starts a longer Mac-unreachable threshold when the host vanishes." },
          { label: "02 / Ready", title: "Is the Gateway actually healthy?", body: "Only while the Mac is reachable does the watchdog query the private readiness endpoint and track its shorter health threshold." },
          { label: "03 / Notify", title: "Send one incident and one recovery", body: "Stateful deduplication prevents spam, while direct Twilio delivery stays outside the Gateway failure domain." }
        ]
      },
      capabilities: [
        { title: "Layered diagnosis", body: "Mac reachability is evaluated before Gateway health so downstream symptoms do not masquerade as separate root incidents." },
        { title: "Bounded alerting", body: "Independent thresholds, incident state, one-shot alerting, and recovery notices keep the signal useful." },
        { title: "Independent delivery", body: "The VPS and its encrypted systemd credential can send directly even when OpenClaw cannot." }
      ],
      proof: [
        { value: "1 min", label: "check cadence", detail: "The timer continuously observes both reachability and readiness." },
        { value: "5 / 10", label: "minute thresholds", detail: "Gateway and Mac failures use different windows based on their failure shape." },
        { value: "5", label: "state tests", detail: "Incident, suppression, deduplication, and recovery behavior are covered before live delivery." }
      ],
      possibilities: [
        "Know that the personal assistant is unavailable before someone has to ask why it stopped answering.",
        "Separate host reachability from application health in the first alert instead of debugging from silence.",
        "Extend the same outside-in pattern to other private services without making the monitored system its own pager."
      ],
      audience: "Self-hosted agent operators who need a genuinely independent availability signal.",
      boundary: "It proves availability state, not root cause. The VPS, tailnet, and SMS provider remain explicit dependencies.",
      close: "An offline assistant cannot reassure you that it is offline. The watchdog can."
    },
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
    teaser: "A field-tested route through Twilio, A2P, webhooks, pairing, native OpenClaw SMS, and the sharp edges between them.",
    summary: "This is not a standalone product repo. It documents the setup decisions, webhook shape, pairing, compliance examples, and sharp edges learned while helping move the SMS lane from a custom plugin into native OpenClaw.",
    why: "Some work is most useful as a route through a complicated system. The catalog entry stays concise; the dedicated page owns the real guidance and contribution trail.",
    story: {
      promise: "Turn 'OpenClaw supports SMS' into a channel that is registered, routed, paired, deliverable, and understandable when it breaks.",
      problem: "SMS is not one toggle. Carrier registration, Twilio numbers, webhook routing, signature validation, sender authorization, pairing, reply behavior, and compliance copy all have to agree before the first trustworthy conversation.",
      shift: "The guide organizes the entire path around the decisions and failure points that mattered during a real migration from a custom bridge to native OpenClaw SMS.",
      scenario: {
        label: "From number to conversation",
        title: "The happy path has several owners.",
        intro: "The guide keeps carrier, provider, server, and OpenClaw steps in one sequence so success is not confused with a single green webhook.",
        steps: [
          { label: "01 / Register", title: "Make the sender legitimate", body: "Complete the Twilio and A2P requirements, choose accurate examples, and understand which approvals or fees belong outside OpenClaw." },
          { label: "02 / Route", title: "Land signed traffic safely", body: "Point inbound webhooks at the correct public edge, validate the request, authorize the sender, and preserve the reply target." },
          { label: "03 / Prove", title: "Test both directions and pairing", body: "Verify outbound delivery, inbound context, pairing behavior, commands, and the operational logs needed when one layer disagrees." }
        ]
      },
      capabilities: [
        { title: "End-to-end setup map", body: "Connects carrier compliance, Twilio configuration, public routing, native channel config, pairing, and proof." },
        { title: "Real sharp edges", body: "Documents webhook shapes, auth context, direct-only behavior, compliance examples, and the mistakes that surfaced during live work." },
        { title: "Contribution trail", body: "Shows how the external reference implementation, native migration, docs, guarded egress, pairing, commands, and RCS normalization evolved upstream." }
      ],
      proof: [
        { value: "Native", label: "production lane", detail: "The live custom SMS bridge was retired after migration to OpenClaw's bundled channel." },
        { value: "2-way", label: "transport proof", detail: "Inbound webhook and outbound carrier delivery paths were exercised during the migration." },
        { value: "Public", label: "receipts", detail: "The guide links the reference repo and relevant OpenClaw contribution history." }
      ],
      possibilities: [
        "Give an agent a universal low-bandwidth channel that works without installing another app.",
        "Use SMS as a fallback or operational surface when richer chat clients are unavailable.",
        "Adapt the proven setup sequence for support, household, field, or notification workflows with explicit consent boundaries."
      ],
      audience: "Operators who want native OpenClaw SMS and would rather learn from one real migration than rediscover every provider boundary.",
      boundary: "This is a guide, not a zero-config product. Credentials, carrier fees, consent, webhook exposure, and runtime changes remain operator-owned decisions.",
      close: "The guide gets you from a phone number to a channel you can actually trust."
    },
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
