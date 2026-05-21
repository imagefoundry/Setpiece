# Image Foundry Landing Page Project — Handover Guide

A complete instructional breakdown for replicating the Image Foundry landing page build system in a new Claude account. Read this in order — each section builds on the previous.

---

## 1. What this project does

Image Foundry is a Manchester-based CGI and product visualisation studio with offices in Manchester, London, and New Delhi. The project's goal is to produce production-ready landing pages that support outbound marketing and Google Ads campaigns for two audiences:

- **Audience A — Property developers and their marketing teams.** Focused on off-plan sales.
- **Audience B — Product manufacturers in the KBB sector (kitchen, bedroom, bathroom) and broader consumer goods.**

A key differentiator running through every page: Image Foundry's **AI Labs** offering — combining CGI with AI to embellish imagery, create animated content, and add people and animals to scenes.

**Current state at handover:**
- Page A (Property developer) — copy approved, full production HTML built.
- Hub page (Adding People to CGI — five methods) — rebuilt to match the canonical hub design system.
- Page B (KBB / product manufacturer) — defined in the build brief, not yet built.

---

## 2. Files to bring across (the starter kit)

These are the files you must upload to the new Claude account's Project knowledge before doing anything else. Gather them into one folder first.

**Master reference documents**
1. `Image_Foundry_Landing_Page_Build_Brief.docx` — the nine-section master brief. Contains everything Claude needs to build any page.
2. `if_hub_landing_final.html` — the canonical design system reference. This is the gold standard. Every hub-style or brand-aligned page must match its DNA.

**Original source documents**
3. Image Foundry brand guidelines (the brand identity doc you supplied originally)
4. Image Foundry tone of voice document
5. Love Image Foundry Broader Agency Landscape Report (the Claude Cowork research output)

**Completed work (as reference examples)**
6. The Page A production HTML (property developer landing page)
7. The rebuilt People-in-CGI hub page HTML

**This guide**
8. This handover document itself.

If any of files 1, 2, 3, 4, or 5 are missing, don't start building. Ask your records / Image Foundry's shared drive for them first. The brief especially is non-negotiable — it was synthesised from the source documents plus a full review of www.imagefoundry.co.uk, and it encodes decisions that are not obvious from scratch.

---

## 3. Setting up the new Claude account

**Step 3.1 — Create a Project in claude.ai.**
Projects keep knowledge scoped and let you reuse custom instructions across every conversation. Call it something like "Image Foundry — Landing Pages."

**Step 3.2 — Upload the starter kit to Project knowledge.**
Drop all eight files from Section 2 into the Project's knowledge panel. Claude will reference these automatically in every conversation inside the project.

**Step 3.3 — Paste the Project custom instructions.**
Copy the block in Section 4 below into the Project's custom instructions field. This gives every new conversation inside the project the right frame of reference without you having to re-explain each time.

**Step 3.4 — Use one conversation per page.**
Don't mix Page A, Page B, and the hub page work in the same conversation. Keep them separate so Claude's context stays clean and focused.

---

## 4. Project custom instructions (paste this into the Project)

```
This project produces landing pages and hub pages for Image Foundry (trading name of Love Image Foundry), a Manchester-based CGI and product visualisation studio. Pages serve two audiences: property developers (off-plan sales) and product manufacturers in KBB and consumer goods.

Always read the Image Foundry Landing Page Build Brief in full before writing anything, and treat if_hub_landing_final.html as the canonical design reference for brand-aligned pages.

Brand rules that are non-negotiable:
- Tagline: "Persuasive CGI"
- Tone: conversational, considered, practical, empowering
- Primary colours: IF Pink (#a60064) and IF Blue (#006680); IF Yellow (#ecaa00) as accent only
- Hub page colour scheme: black and teal (see if_hub_landing_final.html)
- Typography: Barlow Condensed exclusively, all caps for display, aggressive negative letter-spacing
- Section rhythm: dark hero → white content sections → single brand-colour CTA band → dark footer
- Forbidden words: "visualisations," "emotive," "engage," "immerse," "contact us"
- Preferred CTAs: "Let's talk," "Tell us about your project," "Chat to us"
- No exclamation marks. UK English throughout.

Workflow:
- Always produce copy for approval first, then build HTML only after copy is approved.
- One page per conversation.
- Weave AI capabilities throughout copy — never silo them into a single section.
- Social proof without testimonials is handled via a named client logo row plus a proof point strip (Breville, Ideal Standard, Geberit, Aqualisa, Croydex, Rippon Homes, Sage Housing, Vistry, Forshaws, JELD-WEN, Accora, Layla Sleep, Austroflamm).
- Target copy volume: 200–350 words of body copy per page.

Directive style: the person prefers detailed upfront specification followed by minimal instruction. Once a copy draft or build matches the brief, they often issue a two- or three-word next step like "Build it." Don't ask for extensive clarification if the brief already answers it.
```

---

## 5. The established brand system (summary)

These details must apply consistently across all landing page work. They're in the brief in more detail — this is a quick-reference summary.

**Identity and tone**
- Tagline: *Persuasive CGI*
- Tone attributes: conversational, considered, practical, empowering
- Three-pillar service structure (from the live site): IMAGE / VIDEO / INTERACTIVE
- AI Labs is the differentiator — woven into every page, not siloed.

**Colour**
- IF Pink: `#a60064`
- IF Blue: `#006680`
- IF Yellow: `#ecaa00` (accent only)
- Hub pages use a different, darker scheme — black and teal — see Section 6.

**Typography**
- Barlow Condensed throughout, no secondary font.
- Display text in all caps with aggressive negative letter-spacing.
- Use weight hierarchy (300–800) and tracking to create visual rhythm.

**Section rhythm**
- Dark hero → white content sections → single brand-colour CTA band → dark footer.
- Never place two consecutive dark sections (e.g. dark hero followed by a dark case studies block). This is the single biggest on-brand risk — see Section 11.

**Copy rules**
- UK English throughout.
- No exclamation marks anywhere.
- Forbidden words: *visualisations, emotive, engage, immerse, contact us.*
- Preferred CTAs: *Let's talk · Tell us about your project · Chat to us.*
- Social proof uses real named clients, not testimonials (none are available).

**Clients to use by name**
- Property: Forshaws, Rippon Homes, Sage Housing, Vistry, St James' Quay
- Product/KBB: Breville, Ideal Standard, Geberit, Aqualisa, Croydex, JELD-WEN, Accora, Layla Sleep, Austroflamm

**Copy volume**
- 200–350 words of body copy per page. Tight, dense, no filler.

---

## 6. The design DNA — the hub page as canonical reference

`if_hub_landing_final.html` is the gold-standard brand execution. It is the reference file Claude checks when a page needs to feel "on-brand." The DNA:

- **Typography.** Barlow Condensed exclusively. All caps. Aggressive negative letter-spacing on display text.
- **Outline treatment.** Large text uses `-webkit-text-stroke` to produce an outlined effect — key brand signature.
- **Colour scheme.** Black and teal for hub pages (note: different from the pink/blue scheme used on standard landing pages).
- **Spacing.** Dense section padding with minimal vertical breathing room. Airy, generous white space is *off-brand* — this is the opposite of "modern SaaS" aesthetics.
- **Decorative accents.** Teal corner squares as a decorative motif.
- **Layouts.** Edge-to-edge 50/50 split layouts for content sections. Compact section eyebrows with dash styling.
- **Grids.** Three-column takeaway card grids. 12-column gallery grids with 3px gaps.
- **Nav and footer.** Fixed top-right nav pill with burger, white contact pill extending from it. Specific CTA band and footer patterns — see the file.

**When to apply hub DNA vs landing page style:**
- *Landing pages* (Page A, Page B) use the pink/blue scheme, the dark → white → CTA band → dark rhythm, and a more conventional section architecture.
- *Hub pages* (like Adding People to CGI) use the black/teal scheme, the outline treatment, and the dense, edge-to-edge hub architecture.

If Claude drifts into airy, modern-SaaS aesthetics with pastel spacing and sans-serif mixing, it's wrong. Point it back at the hub file.

---

## 7. The workflow (copy first, build second)

This sequence is the one that has worked. Don't collapse it.

**Step 7.1 — Copy prompt.** Ask Claude to read the brief in full, then produce *only* the copy for the target page, presented section by section with headings so you can review cleanly. No HTML at this stage.

**Step 7.2 — Review copy.** Revise in place. It's far easier to edit words in a doc than find them inside built HTML. Approve each section.

**Step 7.3 — Build prompt.** Once copy is approved, issue a short directive — "Build it" is usually enough — and Claude produces the full single-file HTML with the approved copy placed exactly.

**Step 7.4 — One page per conversation.** Start a fresh conversation for each new page so Claude has a clean context window.

---

## 8. Prompt templates (copy these verbatim)

### 8.1 Copy prompt — Page A (property developer)

> I've attached the landing page build brief. Please read it in full before writing anything.
>
> Write all the copy for the property developer landing page (Page A). Structure it exactly as the brief describes — Hero, Value proposition, Three case studies, Social proof (no testimonials available — use a client logo row and a proof point strip instead), How it works, Final CTA.
>
> For the hero, give me three headline options and tell me which one you recommend and why.
>
> For the three case studies, use real client names from the portfolio list in the brief where possible — Forshaws, Rippon Homes, Sage Housing, Vistry, or St James' Quay.
>
> Write in the Image Foundry tone of voice as described in the brief. UK English throughout. No exclamation marks. No jargon.
>
> Present the copy section by section with the section name as a heading, so I can review and approve each part easily before anything is built.
>
> Focus on how we infuse AI with CGI — using it to embellish imagery, create animated content, and add people and animals into scenes to create more realism.

### 8.2 Copy prompt — Page B (KBB / product manufacturer)

> I've attached the landing page build brief. Please read it in full before writing anything.
>
> Write all the copy for the product manufacturer landing page (Page B). Structure it exactly as the brief describes.
>
> For the three case studies, use real client names from the portfolio list in the brief — Breville, Ideal Standard, Geberit, Aqualisa, Croydex, JELD-WEN, Accora, Layla Sleep, or Austroflamm.
>
> Write in the Image Foundry tone of voice. UK English. No exclamation marks. No jargon. Avoid the forbidden words list in the brief.
>
> Present the copy section by section with the section name as a heading, so I can review and approve each part before anything is built.
>
> The KBB audience cares about speed-to-market, consistency across SKUs, and the ability to produce imagery and animation at scale. Weave the AI Labs capability throughout — particularly life-moment shots and motion from stills.

### 8.3 Build prompt (once copy is approved)

> Now build the HTML using the approved copy.
>
> Produce a single, production-ready HTML file. Follow the brand rules: Barlow Condensed throughout, IF Pink (#a60064) and IF Blue (#006680) as primary brand colours, dark hero → white content → brand-colour CTA band → dark footer rhythm. Never place two consecutive dark sections.
>
> Include a sticky nav that tightens on scroll, scroll-reveal animations on content sections, and a hero video slot with a clearly labelled placeholder (animated colour orbs are fine as a video stand-in). Label every image and video slot with its content direction so the dev team knows exactly what goes where.
>
> Give the AI Labs capability its own full-width spotlight card in the services section so it reads as a differentiator, not just a feature.

### 8.4 Hub-style page prompt (when building hub pages, not landing pages)

> Use `if_hub_landing_final.html` as the canonical design reference. Match its DNA exactly: Barlow Condensed throughout, aggressive negative letter-spacing, black and teal colour scheme, webkit text-stroke outline treatments, teal corner square accents, dense section padding with minimal vertical breathing room, edge-to-edge 50/50 split layouts, compact dash-styled section eyebrows, and a 12-column gallery grid with 3px gaps.
>
> Do not use the pink/blue landing page scheme. Do not use airy, generous white space — hub pages are dense.

### 8.5 Revision prompt — common corrections

- *"The page feels too dark — it's using consecutive dark sections. Restore the correct rhythm: dark hero, then transition straight into white content sections."*
- *"This doesn't feel on-brand — too airy, too much white space, and the typography hierarchy is off. Rebuild using the DNA of if_hub_landing_final.html exactly."*
- *"AI is getting siloed into one section. Weave it throughout — value proposition, case studies, service cards, and the process step description."*

---

## 9. Page specifications (summary — full detail in the brief)

### Page A — Property developer (COMPLETED)
- **Architecture:** Hero → Value proposition → Three case studies → Social proof (logo row + proof point strip) → Services → How it works → Whitepaper download → Final CTA → Footer.
- **Hero video direction:** Golden hour residential exterior, animated lifestyle detail with people in frame.
- **Three case studies:** Named clients from Forshaws, Rippon Homes, Sage Housing, Vistry, St James' Quay.
- **Lead magnet:** "Download our guide to marketing new-build property" placed before the final CTA as a lower-commitment conversion point.
- **Recommended hero headline:** "Sell It Before You Build It."

### Hub page — Adding People to CGI (COMPLETED, rebuilt)
- Explains five methods: 2D cut-out, 3D people, mixed methodology with AI refinement, classic photo shoot, AI-generated.
- Must match `if_hub_landing_final.html` DNA exactly. Earlier pink-and-blue, airy-spacing iterations were rejected.
- AI Labs badge appears on the two methods that use it.

### Page B — KBB / product manufacturer (NOT YET BUILT)
- Defined in Section 9 of the brief but never actioned in conversation.
- Three case studies should use KBB/consumer goods clients: Breville, Ideal Standard, Geberit, Aqualisa, Croydex, JELD-WEN, Accora, Layla Sleep, Austroflamm.
- The audience cares about speed-to-market, SKU consistency, and scaled image/animation production.
- AI Labs angle: life-moment shots, motion from stills, scene variation at scale.

---

## 10. Rules and constraints (the non-negotiables)

**Language**
- UK English throughout (organise not organize, colour not color).
- No exclamation marks anywhere.
- Avoid: *visualisations, emotive, engage, immerse, contact us.*
- Prefer: *Let's talk, Tell us about your project, Chat to us.*

**Copy**
- 200–350 words of body copy per page total. Be tight.
- Weave AI throughout, never in isolation.
- Use real client names; no placeholder names.
- No testimonials — social proof is logo row + proof point strip only.

**Design**
- Barlow Condensed exclusively.
- Dark hero → white content → single CTA band → dark footer.
- Never two consecutive dark sections.
- Every image/video slot clearly labelled with its content direction.
- AI Labs gets its own spotlight card in services — distinct from the three pillars.

**Workflow**
- Copy approved before any HTML is built.
- One page per conversation.

---

## 11. Known pitfalls (learn from past revisions)

**Pitfall 1 — Consecutive dark sections.**
The single biggest on-brand risk. A dark hero followed directly by a dark case studies block creates the wrong rhythm and feels heavy. The live site's rhythm is dark hero → predominantly white content. Always transition quickly into white sections.

**Pitfall 2 — Airy, modern-SaaS aesthetics.**
Earlier iterations of the hub page used generous white space, pastel pink/blue, and mixed typography. All rejected. Image Foundry's design DNA is *dense* — tight section padding, minimal vertical breathing room, outline typography, teal accents. If it looks like a typical SaaS landing page, it's wrong.

**Pitfall 3 — AI siloed into one section.**
AI Labs is the differentiator and must appear in the value proposition, case studies, service cards, and process steps — not just an isolated "AI Labs" block. AI is always framed around what it delivers (people, animals, movement, life-moment shots), never mentioned as an abstract capability.

**Pitfall 4 — Inventing case study clients.**
Always use real names from the portfolio list in the brief. Never use placeholders like "A leading developer" when a real name is available.

**Pitfall 5 — Using forbidden words.**
*Visualisations, emotive, engage, immerse, contact us* — these words signal off-brand copy and must be caught at review.

**Pitfall 6 — Mixing hub style and landing page style.**
They are different design systems. Hub pages are black/teal, outlined, dense. Landing pages are pink/blue with the dark-to-white rhythm. Don't blend them.

---

## 12. Quick-start checklist (for day one in the new account)

- [ ] Create a Project in claude.ai called "Image Foundry — Landing Pages."
- [ ] Upload all eight files from Section 2 into Project knowledge.
- [ ] Paste the custom instructions from Section 4 into the Project's instructions field.
- [ ] Start a new conversation inside the project for the first task (e.g. Page B copy).
- [ ] Paste the appropriate prompt from Section 8.
- [ ] Review copy section by section.
- [ ] Once approved, issue the build prompt.
- [ ] Save the completed HTML back to Project knowledge as a reference for the next page.

---

## 13. If something goes wrong

If Claude in the new account produces output that feels off-brand, these are the most common fixes in order of likelihood:

1. **Claude didn't read the brief.** Re-prompt: *"Please read the Image Foundry Landing Page Build Brief in full before doing anything else, then continue."*
2. **Claude didn't reference the hub file.** Re-prompt: *"Open if_hub_landing_final.html and match its DNA exactly — Barlow Condensed throughout, black and teal, webkit text-stroke outlines, dense section padding, teal corner square accents."*
3. **The page is too dark.** Re-prompt with the pitfall 1 correction: *"You've got consecutive dark sections. Restore the dark hero → white content → CTA band → dark footer rhythm."*
4. **AI is siloed.** Re-prompt: *"Weave the AI Labs capability throughout — value proposition, case studies, service cards, process. Don't isolate it."*
5. **The copy is too long.** Re-prompt: *"Tighten to 200–350 words of body copy across the whole page. Every word earns its place."*

---

*End of handover guide.*
