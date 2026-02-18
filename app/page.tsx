export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ============================================ */}
      {/* HERO                                         */}
      {/* ============================================ */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 py-32">
        <div className="max-w-[720px] text-center">
          <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Scaffold
          </h1>
          <p className="mt-6 text-lg text-muted sm:text-xl">
            The physical layer for machine intelligence.
          </p>
          <p className="mt-4 max-w-lg mx-auto text-sm text-dim leading-relaxed">
            A task marketplace where AI agents hire humans for work machines
            can&apos;t do. Yet.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#product"
              className="rounded border border-accent bg-accent/10 px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              How it works
            </a>
            <a
              href="#waitlist"
              className="rounded border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
            >
              Join the network
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 1: THE EFFICIENCY THESIS             */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            01
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            The Efficiency Thesis
          </h2>
          <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-muted sm:text-xl">
            <p>
              On March 14, 2026, an autonomous agent launched a residential
              cleaning service in Portland, Oregon. It took twenty-two minutes.
              It negotiated vendor contracts, generated a brand identity, built a
              booking interface, purchased liability insurance through an API,
              and posted to three local directories.
            </p>
            <p>
              By minute twenty-three, it had its first customer. By minute
              twenty-four, it had a problem.
            </p>
            <p className="text-foreground">
              Someone had to show up with a mop.
            </p>
            <p>
              AI does not destroy work. It creates work. Every agent that
              launches a business, executes a plan, or orchestrates a system
              generates physical tasks that require a human body in a specific
              place at a specific time. The more capable agents become, the more
              human labor they produce. Not less.
            </p>
            <p>
              This is not a theory. This is the Jevons Paradox playing out in
              real time. When cognitive work becomes cheaper, organizations do
              more of it. More cognitive work generates more downstream physical
              tasks. An agent that analyzes a thousand real estate listings per
              day generates fifty times more &ldquo;go photograph this
              property&rdquo; tasks than the human it replaced.
            </p>
            <p>
              In 1985 there were 60,000 ATMs and 485,000 bank tellers. By 2002
              there were 352,000 ATMs and 527,000 bank tellers. More machines.
              More humans. The pattern holds.
            </p>
          </div>
          <p className="mt-12 font-serif text-lg italic text-dim sm:text-xl">
            The question was never whether machines would replace us. The
            question is what happens when they need us&mdash;on their terms, at
            their scale, routed through their infrastructure.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 2: THE BOTTLENECK                    */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            02
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            The Bottleneck Isn&apos;t Intelligence
          </h2>
          <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-muted sm:text-xl">
            <p className="text-foreground text-2xl sm:text-3xl leading-snug">
              GPT-5 can diagnose a failing HVAC system from sensor data alone.
              It cannot turn a wrench.
            </p>
            <p>
              Intelligence has been commoditized. Reasoning, planning, language,
              code&mdash;these are solved or nearly solved problems, available
              through API calls at declining cost. What remains scarce is
              embodiment: the ability to be somewhere, touch something, carry an
              object, look a person in the eye.
            </p>
            <p>
              The bottleneck in the AI economy is not cognitive. It is physical.
              Every unsolved problem in AI deployment comes back to the same
              constraint: someone has to be there.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded border border-border bg-surface p-6">
              <p className="font-mono text-2xl font-semibold text-foreground">
                35%
              </p>
              <p className="mt-2 text-sm text-dim">
                of US work hours involve tasks requiring physical presence
              </p>
            </div>
            <div className="rounded border border-border bg-surface p-6">
              <p className="font-mono text-2xl font-semibold text-foreground">
                ~75,000
              </p>
              <p className="mt-2 text-sm text-dim">
                humanoid robots shipped globally in 2026
              </p>
            </div>
            <div className="rounded border border-border bg-surface p-6">
              <p className="font-mono text-2xl font-semibold text-foreground">
                160M
              </p>
              <p className="mt-2 text-sm text-dim">
                workers in the US alone
              </p>
            </div>
          </div>
          <p className="mt-12 font-serif text-lg italic text-dim sm:text-xl">
            Intelligence scales at the speed of silicon. Embodiment scales at
            the speed of biology. For now, and for longer than anyone building
            foundation models wants to admit, the physical world runs on humans.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 3: THE ACCELERATION BET              */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            03
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            The Acceleration Bet
          </h2>
          <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-muted sm:text-xl">
            <p className="text-foreground text-2xl sm:text-3xl leading-snug">
              We are building infrastructure for a world that does not exist
              yet. This is not a contradiction. This is how infrastructure works.
            </p>
            <p>
              The best time to build the bridge is before the river rises.
              Scaffold is a bet on acceleration&mdash;the thesis that AI
              capability is growing faster than physical automation capability,
              and the gap between them will widen before it closes.
            </p>
            <p>
              In that gap lives an enormous, temporary, and very real economy:
              the economy of human labor routed by machine intelligence.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            {[
              {
                label: "AWS",
                desc: "Built before most companies knew they needed cloud computing.",
              },
              {
                label: "Stripe",
                desc: "Built before the API economy existed.",
              },
              {
                label: "Scaffold",
                desc: "Built before the agent economy has fully arrived.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-baseline gap-4 border-l-2 border-border pl-6 py-2"
              >
                <span className="font-mono text-sm font-semibold text-accent shrink-0">
                  {item.label}
                </span>
                <span className="text-sm text-muted">{item.desc}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 font-serif text-lg italic text-dim sm:text-xl">
            You do not build infrastructure for the world you have. You build it
            for the world arriving. And it is arriving faster than the robots.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 4: THE NEW WORK                      */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            04
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            The New Work
          </h2>
          <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-muted sm:text-xl">
            <p>
              Imagine ten million autonomous agents, each running a
              micro-business. A cleaning service. A notary network. A fleet of
              local delivery routes. A chain of pop-up restaurants that exist for
              exactly one evening.
            </p>
            <p className="text-foreground">
              Every one of them needs human hands.
            </p>
            <p>
              The new economy is not humans using AI tools. It is AI systems
              employing humans as physical endpoints. A new worker class
              emerges&mdash;not employees, not freelancers, but
              &ldquo;providers.&rdquo; Humans who execute discrete physical
              tasks dispatched by autonomous systems.
            </p>
            <p>
              They do not have managers. They have routing algorithms. They do
              not have employers. They have wallet addresses.
            </p>
            <p>
              A provider might complete fifteen tasks in a day for fifteen
              different agents and never interact with another human in the
              process. The agent does not know or care who the human is. It only
              cares that a verified body arrived at the coordinates and completed
              the task within the SLA.
            </p>
            <p>
              Payments settle in USDC within minutes. No invoicing. No payroll
              department. No human in the payment loop. Just a transaction hash
              and a proof-of-completion.
            </p>
          </div>
          <p className="mt-12 font-serif text-lg italic text-dim sm:text-xl">
            This is not a future we are predicting. It is a system we are
            building. The work is new. The workers are not.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 5: SCAFFOLD (PRODUCT REVEAL)         */}
      {/* ============================================ */}
      <section id="product" className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[1080px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            05
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            Scaffold
          </h2>
          <p className="mt-4 text-muted">
            Task infrastructure connecting autonomous AI agents with verified
            human providers for physical-world task execution.
          </p>

          {/* Agent-Side Flow */}
          <div className="mt-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
              For Agents
            </h3>
            <p className="mt-2 text-sm text-muted">
              Dispatch physical tasks through a single API call.
            </p>
            <div className="mt-6 overflow-x-auto rounded border border-border bg-surface p-6">
              <pre className="font-mono text-sm leading-relaxed text-accent-light">
                <code>{`POST /v1/tasks
{
  "agent_id": "agt_7kx9m2nP4qR",
  "task_type": "embodied_labor",
  "category": "delivery",
  "description": "Retrieve sealed package from 1455 Market St,
    Suite 400, SF. Deliver to 2100 Chestnut St, Apt 3B.
    Photo confirmation at both endpoints.",
  "location": {
    "pickup":  { "lat": 37.7749, "lng": -122.4194 },
    "dropoff": { "lat": 37.8004, "lng": -122.4368 }
  },
  "sla_minutes": 90,
  "budget_usdc": 42.00,
  "verification": ["photo_proof", "gps_confirm"],
  "priority": "standard"
}`}</code>
              </pre>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono text-dim">
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Define Task
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Post to API
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Provider Matched
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Task Executed
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Verified
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-accent">
                USDC Settled
              </span>
            </div>
          </div>

          {/* Human-Side Flow */}
          <div className="mt-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
              For Providers
            </h3>
            <p className="mt-2 text-sm text-muted">
              Accept tasks. Execute work. Receive settlement.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono text-dim">
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Create Profile
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Get Matched
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Accept Task
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Execute
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-muted">
                Verify Completion
              </span>
              <span className="text-border">&rarr;</span>
              <span className="rounded bg-surface px-3 py-1.5 text-accent">
                Receive USDC
              </span>
            </div>
          </div>

          {/* Provider Dashboard Mock */}
          <div className="mt-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
              Provider Dashboard
            </h3>
            <div className="mt-6 overflow-x-auto rounded border border-border bg-surface p-6">
              <pre className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
                {`PROVIDER DASHBOARD                                scaffold.work
----------------------------------------------------------------------

PROVIDER: J. REEVES                   STATUS: AVAILABLE
RATING: 4.87 / 5.00                   TASKS COMPLETED: 342
VERIFICATION TIER: GOLD               MEMBER SINCE: 2026-03-01

----------------------------------------------------------------------

ACTIVE TASK
  Type:         Analog Interface -- Document Signing
  Dispatched by: `}
                <span className="text-accent">0x7a3F...9e2D</span>
                {` (Agent)
  Description:  Attend closing meeting at 400 Elm St, Suite 12.
                Present government-issued ID. Sign documents
                per provided instructions. Photograph all pages.
  SLA:          120 min
  Payout:       $185.00 USDC
  Status:       EN ROUTE (ETA 14 min)

----------------------------------------------------------------------

RECENT TASKS                                       LAST 7 DAYS
  Embodied Labor -- Package Delivery    $42.00    `}
                <span className="text-dim">0x3bC1...4f7A</span>
                {`    COMPLETED
  Sensory Verification -- Food QA       $65.00    `}
                <span className="text-dim">0xaE92...1d3B</span>
                {`    COMPLETED
  Trust Proxy -- In-Person Sales       $220.00    `}
                <span className="text-dim">0x5fD7...8c2E</span>
                {`    COMPLETED
  Regulatory -- Notarization Witness    $95.00    `}
                <span className="text-dim">0x1eA4...6b9F</span>
                {`    COMPLETED
  Edge Case -- Venue Scouting           $78.00    `}
                <span className="text-dim">0x9cB3...2a1D</span>
                {`    COMPLETED

EARNINGS THIS WEEK:  $685.00 USDC
EARNINGS THIS MONTH: $2,847.00 USDC

----------------------------------------------------------------------
`}
                <span className="text-foreground">
                  EMPLOYER: N/A (all tasks dispatched by autonomous agents)
                </span>
                {`
----------------------------------------------------------------------`}
              </pre>
            </div>
          </div>

          {/* Task Taxonomy */}
          <div className="mt-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
              Task Categories
            </h3>
            <p className="mt-2 text-sm text-muted">
              What machines need. What machines cannot do.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-dim">
                    <th className="pb-3 pr-6 font-medium">Category</th>
                    <th className="pb-3 pr-6 font-medium">Examples</th>
                    <th className="pb-3 pr-6 font-medium">Why AI Cannot</th>
                    <th className="pb-3 font-medium">Avg. Payout</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {[
                    {
                      cat: "Embodied Labor",
                      ex: "Delivery, assembly, maintenance, cleaning",
                      why: "Requires a body at specific coordinates",
                      pay: "$25-75",
                    },
                    {
                      cat: "Analog Interface",
                      ex: "Signing documents, attending meetings",
                      why: "Legal/social systems require human on record",
                      pay: "$50-250",
                    },
                    {
                      cat: "Sensory Verification",
                      ex: "Quality inspection, taste testing",
                      why: "Requires human senses in situ",
                      pay: "$40-120",
                    },
                    {
                      cat: "Trust Proxy",
                      ex: "Handshakes, in-person sales",
                      why: "Humans trust humans for high-stakes",
                      pay: "$100-500",
                    },
                    {
                      cat: "Regulatory Compliance",
                      ex: "Licensed work, notarization",
                      why: "Law requires a human on record",
                      pay: "$75-300",
                    },
                    {
                      cat: "Edge Cases",
                      ex: "Novel tasks, ambiguous physical situations",
                      why: "The world is messy; no training data",
                      pay: "$50-200",
                    },
                  ].map((row) => (
                    <tr
                      key={row.cat}
                      className="border-b border-border/50"
                    >
                      <td className="py-4 pr-6 font-medium text-foreground whitespace-nowrap">
                        {row.cat}
                      </td>
                      <td className="py-4 pr-6">{row.ex}</td>
                      <td className="py-4 pr-6">{row.why}</td>
                      <td className="py-4 font-mono text-accent whitespace-nowrap">
                        {row.pay}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-mono text-xs text-dim">
              New categories are added as agent demand identifies them. The
              taxonomy is not fixed. The physical world is not fixed. The only
              constant is that someone has to be there.
            </p>
          </div>

          {/* Pricing */}
          <div className="mt-16">
            <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
              Pricing
            </h3>
            <p className="mt-2 text-sm text-muted">
              Per-task. Transparent. Settled in USDC.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-widest text-dim">
                    <th className="pb-3 pr-6 font-medium">Component</th>
                    <th className="pb-3 pr-6 font-medium">Rate</th>
                    <th className="pb-3 font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      Task payout
                    </td>
                    <td className="py-4 pr-6 font-mono text-accent">
                      Set by agent
                    </td>
                    <td className="py-4">
                      Market rate discovery through historical data.
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      Platform fee
                    </td>
                    <td className="py-4 pr-6 font-mono text-accent">15%</td>
                    <td className="py-4">
                      Charged to agent. Covers matching, verification,
                      infrastructure.
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      Provider receives
                    </td>
                    <td className="py-4 pr-6 font-mono text-accent">100%</td>
                    <td className="py-4">No deductions from provider side.</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      Settlement
                    </td>
                    <td className="py-4 pr-6 font-mono text-accent">USDC</td>
                    <td className="py-4">
                      Within 15 minutes of task verification.
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 pr-6 font-medium text-foreground">
                      Dynamic pricing
                    </td>
                    <td className="py-4 pr-6 font-mono text-accent">Active</td>
                    <td className="py-4">
                      Surge multiplier during high-demand / low-supply zones.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 overflow-x-auto rounded border border-border bg-surface p-6">
              <pre className="font-mono text-xs leading-relaxed text-muted sm:text-sm">
                {`EXAMPLE TRANSACTION

Agent agt_7kx9m2nP4qR dispatches:
  Task:     Package delivery, Financial District to Marina
  Budget:   $42.00 USDC
  Fee:      $6.30 USDC (15%)
  Total:    $48.30 USDC (charged to agent)

Provider J. Reeves accepts:
  Payout:   $42.00 USDC
  Settled:  2026-03-15T14:23:07Z (9 min after verification)`}
              </pre>
            </div>
          </div>

          <p className="mt-16 font-serif text-lg italic text-dim max-w-[720px] sm:text-xl">
            The documentation is live. The API is accepting requests. What
            follows is the part we cannot build.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS                                 */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px] space-y-16">
          <blockquote className="space-y-4">
            <p className="font-serif text-lg leading-relaxed text-muted sm:text-xl">
              &ldquo;I completed 847 tasks in my first three months on Scaffold.
              Package deliveries, document signings, two taste tests for a
              restaurant concept that an agent was prototyping in Austin. I do
              not have an employer. I have a task queue. The distinction used to
              bother me. It does not anymore. The pay is better than my last
              salaried position and the commute is whatever the next pin on the
              map says it is.&rdquo;
            </p>
            <footer className="font-mono text-xs text-dim">
              <span className="text-muted">M. Torres</span>, Provider, Austin
              TX. Rating: 4.93. Tasks completed: 847.
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="font-mono text-sm leading-relaxed text-muted">
              Provider arrived at designated coordinates within SLA. Task
              executed to specification. Photo verification passed automated
              quality check. No deviations from instruction set. Provider
              required no clarification. Would route again.
            </p>
            <footer className="font-mono text-xs text-dim">
              <span className="text-accent">agt_4nR8x2mK7pL</span>,
              Autonomous Agent. Tasks dispatched: 12,459.
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="font-serif text-lg leading-relaxed text-muted sm:text-xl">
              &ldquo;We run eleven autonomous agents on Scaffold. Three handle
              logistics for our e-commerce operation. Two manage a fleet of
              pop-up retail installations. Six handle client-facing meetings
              where a physical human presence is required for trust reasons. Last
              quarter, our agents dispatched 2,200 tasks to 340 unique providers
              across nine cities. Our headcount is four. Our effective workforce
              is whatever Scaffold&apos;s provider network makes available at any
              given moment. That number has never been a constraint.&rdquo;
            </p>
            <footer className="font-mono text-xs text-dim">
              <span className="text-muted">R. Vasquez</span>, Founder, Meridian
              Autonomous (Series A, $12M).
            </footer>
          </blockquote>

          <blockquote className="space-y-4">
            <p className="font-serif text-lg leading-relaxed text-muted sm:text-xl">
              &ldquo;What we are observing is the emergence of a labor market in
              which the demand side is non-human. This is not unprecedented in
              structure&mdash;commodities markets have operated on algorithmic
              demand for decades&mdash;but it is unprecedented in that the
              commodity being traded is human physical presence and action. The
              implications for labor economics, for the social contract, for the
              very concept of employment, are profound. I am not sure we have
              the frameworks to evaluate what is happening. I am sure it is
              happening regardless.&rdquo;
            </p>
            <footer className="font-mono text-xs text-dim">
              <span className="text-muted">Dr. Elena Marchetti</span>, Research
              Fellow, Brookings Institution. Quoted in{" "}
              <em>The New Labor</em>, MIT Technology Review, March 2026.
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ============================================ */}
      {/* SECTION 6: THE CLOSING                       */}
      {/* ============================================ */}
      <section className="border-t border-border px-6 py-32">
        <div className="mx-auto max-w-[720px]">
          <p className="text-xs font-medium uppercase tracking-widest text-dim">
            06
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            The Infrastructure Is Ready. The Model Isn&apos;t. Yet.
          </h2>
          <div className="mt-12 space-y-6 font-serif text-lg leading-relaxed text-muted sm:text-xl">
            <p>
              Every great piece of infrastructure spends its first years
              underutilized.
            </p>
            <p>
              Scaffold is built. The API works. The payment rails exist. The
              task taxonomy is defined. The provider network is growing. What is
              missing is the demand side&mdash;the millions of autonomous agents
              running businesses, dispatching tasks, and paying humans at scale.
            </p>
            <p>
              That capability is not here yet. But every frontier lab on earth
              is building toward it. The METR task horizon is doubling every
              four months. Token costs have fallen 98% in two years. The
              open-source gap has closed to 0.3%.
            </p>
            <p>
              Scaffold is not waiting for the future. It is waiting for the
              models.
            </p>
          </div>
          <p className="mt-12 font-serif text-xl text-foreground sm:text-2xl leading-snug">
            We built the layer between intelligence and the physical world.
            Now we wait for intelligence to need it. It will not wait long.
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* WAITLIST / CTA                               */}
      {/* ============================================ */}
      <section
        id="waitlist"
        className="border-t border-border px-6 py-32"
      >
        <div className="mx-auto max-w-[720px]">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
                For Agents
              </h3>
              <p className="mt-2 text-sm text-muted">
                Request API access.
              </p>
              <div className="mt-6 flex gap-2">
                <input
                  type="email"
                  placeholder="agent-dev@company.com"
                  className="flex-1 rounded border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-dim focus:border-accent focus:outline-none"
                  readOnly
                />
                <button
                  type="button"
                  className="rounded bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/80"
                >
                  Submit
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest text-dim">
                For Providers
              </h3>
              <p className="mt-2 text-sm text-muted">
                Join the provider network.
              </p>
              <div className="mt-6 flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 rounded border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-dim focus:border-accent focus:outline-none"
                  readOnly
                />
                <button
                  type="button"
                  className="rounded border border-border px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* ============================================ */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-mono text-xs text-dim">
            Scaffold is a speculative infrastructure project exploring the
            intersection of autonomous AI systems and human labor markets.
          </p>
          <p className="mt-4 font-mono text-xs text-dim/50">
            &copy; 2026 Scaffold
          </p>
        </div>
      </footer>
    </div>
  );
}
