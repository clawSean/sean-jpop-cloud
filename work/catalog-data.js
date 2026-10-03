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
  },
  {
    id: "telegram-workspace",
    index: "008",
    name: "Telegram workspace",
    kind: "app",
    kindLabel: "Telegram app layer",
    status: "Live",
    statusTone: "live",
    authorship: "Original system",
    availability: "Public source",
    featured: false,
    visual: "telegram",
    tone: "blue",
    lead: "Turn Telegram from one endless bot chat into a structured operating surface for projects, people, and live work.",
    teaser: "Groups, topics, rich controls, media, and agent-managed navigation make Telegram feel like an interface—not an inbox.",
    summary: "Our Telegram setup separates projects and intentions into distinct rooms, uses topics for active workstreams, and gives Sean native controls for polls, files, edits, reactions, media, status, and group management.",
    why: "OpenClaw can meet people across many channels, but Telegram becomes much more useful when the conversation architecture and the interface are designed together.",
    story: {
      promise: "Your agent does not need to live in one immortal DM. Telegram can become the organized, mobile control surface around the work.",
      problem: "Most Telegram bot setups collapse everything into one scroll. Projects collide, old context becomes hard to find, and the interface never grows beyond alternating text bubbles.",
      shift: "Use groups as durable context boundaries, topics as focused workstreams, and Telegram's native interaction controls as part of the product. The agent can help create, navigate, and maintain that structure instead of merely replying inside it.",
      scenario: {
        label: "From chat to workspace",
        title: "Give every kind of work a place to live.",
        intro: "The structure stays legible on a phone while the agent retains the context and tools needed to act.",
        steps: [
          { label: "01 / Separate", title: "Create rooms with a purpose", body: "Use a dedicated group for a project, household lane, or recurring intention instead of forcing unrelated work through one history." },
          { label: "02 / Focus", title: "Use topics for active workstreams", body: "Split releases, research, feedback, or support into named threads that remain easy to return to and hand off." },
          { label: "03 / Operate", title: "Let the interface do real work", body: "The agent can use buttons, polls, files, media, edits, reactions, status updates, and topic controls when those are clearer than another paragraph." }
        ]
      },
      capabilities: [
        { title: "Conversation architecture", body: "Groups and topics create visible boundaries for projects and workstreams while commands such as /new give people deliberate context control." },
        { title: "Agent-managed navigation", body: "With the right permissions, the agent can create or edit topics, manage group structure, and place information where it will remain useful." },
        { title: "Native interaction design", body: "Rich formatting, controls, polls, reactions, media, files, and edits turn the conversation into a usable mobile interface." }
      ],
      proof: [
        { value: "Live", label: "daily workspace", detail: "Projects and recurring intentions already run in dedicated Telegram groups instead of one permanent bot DM." },
        { value: "Public", label: "UI skill", detail: "The live-calibrated Telegram UI runbook, action recipes, and rendering evidence are published for other agents." },
        { value: "Native", label: "platform controls", detail: "The experience uses Telegram's own groups, topics, polls, reactions, files, media, and administrative actions." }
      ],
      possibilities: [
        "Give each important project a durable mobile room with a recognizable purpose and history.",
        "Let an agent organize new workstreams and surface the right controls instead of waiting for manual chat housekeeping.",
        "Build richer support, family, operations, or collaboration experiences without asking people to learn a new app."
      ],
      audience: "OpenClaw users who already talk to an agent in Telegram and want the channel to feel organized, intentional, and genuinely useful.",
      boundary: "Telegram supplies the rooms and controls; identity, durable project context, and safe authority still need their own systems.",
      close: "The channel stops feeling like a bot window when the conversations, controls, and agent behavior are designed as one workspace."
    },
    tags: ["Telegram", "Topics", "Mobile UI"],
    reviewed: "Oct 2026",
    links: [
      { label: "View Telegram UI source", href: "https://github.com/clawSean/telegram-ui", primary: true }
    ]
  },
  {
    id: "action-button-voice-inbox",
    index: "009",
    name: "Action Button voice inbox",
    kind: "app",
    kindLabel: "iPhone voice shortcut",
    status: "Live",
    statusTone: "live",
    authorship: "Original build",
    availability: "Casefile + setup pattern",
    featured: false,
    visual: "shortcut",
    tone: "gold",
    lead: "Your agent as Siri: press one physical button, speak, and send a real request into the full agent workflow.",
    teaser: "One press turns a spoken thought into a normal Telegram request with the agent's memory, tools, and follow-through behind it.",
    summary: "An iPhone Shortcut captures dictation, posts the text to an authenticated relay, and delivers it through a dedicated Telegram user session into a private voice inbox. OpenClaw receives an ordinary human message and handles it normally.",
    why: "The smallest requests often die in the friction between having a thought and opening the right app. A physical button makes the agent available at the speed of the thought.",
    story: {
      promise: "Press, speak, pocket the phone. The request reaches the same agent that can remember, research, operate tools, and follow through.",
      problem: "Voice assistants are quick but shallow; full agents are capable but usually hidden behind an app, a chat, and several taps. That friction is enough to lose reminders, questions, and useful ideas in motion.",
      shift: "The iPhone Action Button becomes a direct capture surface. iOS performs the dictation, a bounded relay delivers only the text to one private destination, and the message enters OpenClaw through the normal human Telegram path.",
      scenario: {
        label: "Your agent as Siri",
        title: "A physical button becomes the front door.",
        intro: "There is no separate voice-agent product to remember or launch.",
        steps: [
          { label: "01 / Press", title: "Capture the thought immediately", body: "The Action Button starts a tiny Shortcut and iOS turns the spoken request into text on the phone." },
          { label: "02 / Deliver", title: "Send it through a bounded relay", body: "An authenticated HTTPS request reaches a fixed relay that can post only into the designated private Telegram inbox." },
          { label: "03 / Act", title: "Use the whole agent", body: "Because the message arrives as ordinary human input, the agent can apply its normal context, tools, memory, and reply behavior." }
        ]
      },
      capabilities: [
        { title: "One-button capture", body: "The physical Action Button reduces a useful agent request to one press and one sentence." },
        { title: "Normal OpenClaw intake", body: "The relay produces a genuine inbound Telegram message instead of a bot echo that bypasses the usual conversation path." },
        { title: "Bounded delivery", body: "A fixed destination, bearer authentication, rate limits, size limits, and blocked slash commands keep the relay deliberately narrow." }
      ],
      proof: [
        { value: "1 press", label: "capture cost", detail: "No app hunt, chat selection, or model picker stands between the thought and the agent." },
        { value: "0", label: "audio uploads", detail: "iOS performs dictation and the relay receives text, so no recording needs server-side transcription." },
        { value: "Daily", label: "real use", detail: "The workflow is a proven everyday voice inbox rather than a speculative Shortcut diagram." }
      ],
      possibilities: [
        "Capture reminders, research questions, shopping needs, and operational tasks while walking, cooking, or carrying something.",
        "Give a capable personal agent the same reflexive access people expect from a phone's built-in assistant.",
        "Route different physical or on-screen triggers into separate private inboxes for family, work, travel, or quick capture."
      ],
      audience: "People who want hands-free access to a real agent without living inside a chat app.",
      boundary: "It needs an iPhone Shortcut, a private Telegram destination, and an always-on authenticated relay. The Telegram user session is sensitive and must be protected accordingly.",
      close: "Siri-speed capture becomes useful when the request lands with an agent that can actually do something about it."
    },
    tags: ["iPhone", "Voice", "Shortcut"],
    reviewed: "Oct 2026",
    guide: {
      mode: "inline",
      label: "Setup shape",
      title: "Three pieces connect the button to the agent",
      steps: [
        "Create an iOS Shortcut that dictates text and posts it as JSON to one authenticated HTTPS endpoint.",
        "Run a narrow relay that can deliver only to the intended private Telegram group through an authorized user session.",
        "Assign the Shortcut to the Action Button, then prove relay health, dry-run authentication, Telegram delivery, and OpenClaw response in order."
      ]
    },
    links: []
  },
  {
    id: "active-initiative-docs",
    index: "010",
    name: "AID — Active Initiative Docs",
    kind: "system",
    kindLabel: "Continuity system",
    status: "Maintained",
    statusTone: "maintained",
    authorship: "Original system",
    availability: "Public source",
    featured: false,
    visual: "aid",
    tone: "green",
    lead: "A lightweight project-context system that preserves vision, decisions, current truth, and the next action across every session.",
    teaser: "Keep long-running agent work aligned across chats, channels, handoffs, and restarts without rebuilding the project from memory.",
    summary: "Active Initiative Docs gives durable work a small operating floor: VISION for direction, STATUS for current truth, LOG for history, and optional ROADMAP, DECISIONS, and rollout files only when the work earns them.",
    why: "Multi-channel agents are powerful precisely because work can begin anywhere. Without a canonical project floor, that same flexibility causes stale assumptions, repeated decisions, and drift.",
    story: {
      promise: "Start a fresh chat, change channels, hand the project to another capable agent—and recover the same vision, decisions, and next move.",
      problem: "Long-running work accumulates plans, chat promises, code changes, review notes, and one-off status updates. After a restart or handoff, the next session has to guess which fragments still describe reality.",
      shift: "AID gives each real initiative a tiny canonical operating floor. Direction, current state, history, settled decisions, and rollout mechanics live in separate files with clear jobs and update rules.",
      scenario: {
        label: "Continuity without prompt soup",
        title: "The chat changes. The project does not drift.",
        intro: "AID makes the project's own docs the handoff surface instead of expecting one conversation to remain alive forever.",
        steps: [
          { label: "01 / Orient", title: "Read the durable direction", body: "VISION states why the initiative exists, what it will not become, and what done means before new work starts." },
          { label: "02 / Reconcile", title: "Check truth against reality", body: "STATUS records observable current state, blockers, and exactly one next action; the agent verifies external state before trusting it." },
          { label: "03 / Record", title: "Update when reality changes", body: "LOG and decision records capture what changed and why, so later sessions do not reopen settled questions or repeat old mistakes." }
        ]
      },
      capabilities: [
        { title: "Cross-session continuity", body: "A fresh session can recover the project without depending on a giant transcript or one model's hidden conversational state." },
        { title: "Decision and vision control", body: "The reason for the work and the choices already made remain visible beside the current implementation state." },
        { title: "Bounded documentation", body: "Small initiatives stay small; ROADMAP, DECISIONS, and rollout files appear only when they have a real job." }
      ],
      proof: [
        { value: "3", label: "core documents", detail: "VISION, STATUS, and LOG separate direction, truth, and history without turning the project into paperwork." },
        { value: "1", label: "next action", detail: "STATUS keeps one exact next move so resumed work does not restart as an open-ended planning exercise." },
        { value: "Public", label: "portable protocol", detail: "The canon, template, minimal example, and install prompt are available for other agent-led projects." }
      ],
      possibilities: [
        "Maintain one product vision while work moves between Telegram groups, topics, coding sessions, and contributors.",
        "Give every agent a reliable resume packet after compaction, interruption, or model changes.",
        "Prevent duplicate side projects by checking the existing estate and reusing the right initiative before creating another folder."
      ],
      audience: "Anyone using agents for projects that last longer than one chat, especially across multiple channels or collaborators.",
      boundary: "AID preserves project truth only when the files are kept honest. It is a small operating ritual, not automatic memory or a substitute for proof.",
      close: "The goal is not more documentation. It is the same project, the same decisions, and the right next move—wherever the next session begins."
    },
    tags: ["Continuity", "Projects", "Anti-drift"],
    reviewed: "Oct 2026",
    links: [
      { label: "View AID source", href: "https://github.com/clawSean/active-initiative-docs", primary: true }
    ]
  }
];
