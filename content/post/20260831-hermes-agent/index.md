---
title: "How I've been using Hermes Agent"
description: "Sharing my experience so far"
slug: hermes-agent
date: 2026-08-31 00:00:00+0000
topics: ["tools"]
tags: ["ai", "agents", "hermes-agent"]
draft: false
categories:
    - AI
# - weight: 1       # You can add weight to some posts to override the default sorting (date descending)
---
## Why I chose Hermes Agent

There are a lot of options out there now. I went with Hermes Agent for three reasons:

### Learning

I'm genuinely curious about how an **Agent Harness** actually works under the hood. Hermes gave me a running system I could poke at, break, and learn from, without needing to build the scaffolding myself.

### Privacy

My data stays on my machine. No cloud processing, no third-party logging of my conversations or files.

### Research — what I looked at (and why it didn't stick)

Before committing, I spent time evaluating a few alternatives:

- **OpenClaw** — Impressive release velocity (literally twice a day). But the rapid pace came with some worrisome security issues that gave me pause.
- **NanoClaw/ZeroClaw/Moltis** — Didn't like their vibe. Something about them felt incomplete or half-baked.
- **Pi Coding Agent** — At the time, it required too many decisions about architecture, tooling, and integration points. I wasn't prepared for that level of upfront commitment. Now I'm more confident on taking those decisions and there's also oh-my-pi to help with that, so I'll probably be playing with it soon :D

Hermes struck the right balance: mature enough to be useful day one, flexible enough to evolve with my needs, and didn’t seem to break out of nothing like OpenClaw.

---

## My setup strategy

### Hardware

A M1 MacBook Pro with 32GB of RAM. Could have used the Insomnia app to keep it awake, but so far its lid is just slightly open :D (also for better thermal dissipation)

### Use case: personal assistance

I run Hermes Agent as my primary personal assistant, and I've set up three distinct agent profiles, each with its own focus:

1. **General** — Everyday tasks, web research, and general knowledge
2. **Finance/Investments** — Market research, investment analysis, and tracking
3. **Software Engineering/Career Coaching** — Technical problem-solving, project planning, pair programming, and career planning

Each profile has its own personality and focus area. This separation keeps things organized and prevents context bleed between unrelated tasks.

Examples of what I've achieved with them:
* Installed a Minecraft server with minimal interaction
* Done numerous researches on topics of my interest
* Getting assistance for the planning and design of an app I'm developing
* Summary of the top-N articles (and their comments) on HackerNews for a given day, so I can decide which one is worth reading

### Telegram vs TUI

- **Telegram** — When I'm away from my laptop, for quick questions and casual chats. It's fast, always accessible on my phone, and I can begin a session on my phone and continue on the laptop (or vice versa).
- **TUI (Terminal UI)** — When I'm doing serious work: writing code, analyzing data, deep research. The full terminal interface gives me more control and visibility.

The two complement each other well. Quick ping via Telegram, deep dive via TUI when I'm at my desk.

**Note**: I'm not totally comfortable with my personal data over Telegram, so for those occasions I prefer the TUI as well. And I'm also considering implementing a Matrix Server on the same laptop Hermes runs so I have my private messaging server (and the recommended Matrix client called "Element X" seems pretty nice). The server would be only reachable via LAN (local network) or via Tailscale, which I already have set up to use my ad-blocker (Pi-hole) when out of home.

---

## Pieces of advice (Things I wish someone told me Day One)

### Git from the beginning

Set up version control on day one. The ability to roll back messes and track what's changing underneath has saved me more times than I can count. Hermes evolves fast, your configs, skills, and cron jobs will change. Git is your safety net.

### AGENTS.md — Your per-session notes

Use the `AGENTS.md` file to include instructions such as “include a `YYYY-MM-DD` date prefix to all saved files” in each session.

### SOUL.md — Define how each agent works

`SOUL.md` is where you define each agent's or profile's way of working. Tone, boundaries, communication style, all customizable per profile. This is what makes multi-profile setups feel distinct rather than like the same robot with different labels.

### Model providers

I use a combination of:

- **LM Studio** — For local models. Full privacy, no API costs, works offline. Great for routine tasks and experiments.
Recommended models:
  - `qwen3.6-35b-a3b` if you have at least 32GB of RAM
  - `qwen3.6-9b` otherwise
  - Gemma models acted laisy when I tried them, asking ME to give them information that they could try reaching out :D:D:D

- **OpenRouter** — When I need a more powerful model for complex reasoning or research. Pay-per-use, access to many models through one API key.
Recommended models:
  - DeepSeek Flash v4
  - Hy3

The key insight: **local-first, cloud-assisted**. Use local models for 80% of work, reach for the cloud when you need extra horsepower.

### Disable Curator (Initially)

Curator was messing with my skills, overwriting, and reorganizing things I'd carefully set up. I disabled it, and I’ll run it manually if needed. It's a trade-off: more control, less automation. For me, the control wins, but YMMV depending on how hands-off you want to be.

### Web interaction

#### Browser automation: Camofox / Camoufox

Seemed interesting for streamlining the agent's web navigation. The promise is to overcome some agent blockage. So far, so good :)

#### Web Search & Scraping: the evolution

1. **DuckDuckGo** — My starting point. Simple, free, privacy-respecting. But I noticed the agent had real difficulty reading and extracting content from actual web pages. The search results were fine, but getting the *content* out was frustrating.

2. **Firecrawl** — Switched over, much smoother web navigation and content extraction. If you're hitting the same wall with DuckDuckGo's scraping limitations, Firecrawl is worth the switch.

### Memory: Built-In vs Extended

The built-in memory system (`MEMORY.md` and `USER.md`) is pretty good for basic needs, but it's limited. For anything beyond simple fact storage, you'll want to extend it.

I've been exploring several memory providers:

- **Honcho** — Interesting concept, still evaluating
- **Hindsight** — Had some hard times setting it up locally. The concept is great and the Cloud version worked fine, but the local setup friction was real.
- **OpenViking** — Most successful so far. Active endpoint, durable indexed memory, semantic search over knowledge base. I'm actively using it and exploring its capabilities (expect a follow-up blog post on this one!)
- **Mnemosine** — Really interesting, still on the radar

The pattern I'm seeing: built-in memory works for simple recall, but for research, long-term knowledge management, and cross-session retrieval, you'll want an external memory provider. OpenViking has been the best fit for my use case so far.

---

## What's next

I'm continuing to explore and refine this setup. Upcoming posts:

- Deep dive on OpenViking as a memory provider
- A look at oh-my-pi and how it compares to Hermes Agent for getting started
- Real-world examples: what I've actually built or automated with these agents

---

## References

| Software | Link |
|---|---|
| [Hermes Agent](https://hermes-agent.nousresearch.com/docs) | The agent harness I run daily — self-learning, local-first, skill-based and multi-profile. |
| [OpenClaw](https://github.com/openclaw/openclaw) | AI assistant that runs on your devices and meets you in the channels you already use. |
| [Pi Coding Agent](https://pi.dev) | A starting point for building agent-based coding workflows. |
| [oh-my-pi](https://omp.sh) | An opinionated framework for Pi Coding Agent. |
| [LM Studio](https://lmstudio.ai) | Local model runner — privacy-first, works offline. |
| [OpenRouter](https://openrouter.ai) | Unified API for multiple models, pay-per-use. |
| [Honcho](https://github.com/plastic-labs/honcho) | Memory library for building stateful AI agents. |
| [Hindsight](https://github.com/vectorize-io/hindsight) | Agent memory that learns — cloud version worked fine, local setup was a friction. |
| [OpenViking](https://www.openviking.ai/) | My memory provider of choice so far — durable indexed memory with semantic search. |
| [Mnemosyne](https://github.com/mnemosyne-oss/mnemosyne) | Cognitive memory OS for AI agents — local, SQLite-backed, interesting. |
