import React, { useState } from "react";

const BRAND = {
  teal: "#1ABCB0",
  tealDark: "#148F86",
  dark: "#0B1215",
  darkCard: "#111A1E",
  darkSurface: "#162024",
  textPrimary: "#FAFCFC",
  textSecondary: "#8A9BA3",
  textMuted: "#5D6E76",
  green: "#34C78A",
  yellow: "#F2C744",
  red: "#E74C3C",
};

const FONT = "'Plus Jakarta Sans', sans-serif";
const t = (s) => ({ ...s, fontFamily: FONT });

const LineOfSightCourse = () => {
  const [stage, setStage] = useState("welcome");
  const [responses, setResponses] = useState({});
  const [currentScenario, setCurrentScenario] = useState(0);
  const [currentWalkthrough, setCurrentWalkthrough] = useState(0);
  const [emailInput, setEmailInput] = useState("");

  const scenarios = [
    {
      id: "visibility",
      title: "Can You See Your Whole System At Once?",
      question:
        "Right now, can you pull together the key information about your system in one place?",
      options: [
        {
          text: "Yes. One dashboard or view. I can see everything I need in seconds.",
          score: 3,
          icon: "✓",
          feedback:
            "You have the visibility that lets you lead with confidence and speed.",
        },
        {
          text: "Mostly. I can see it, but I have to pull it from multiple places.",
          score: 2,
          icon: "◐",
          feedback:
            "You understand the system. Making it visible in one place multiplies your impact.",
        },
        {
          text: "Not really. I carry the picture in my head.",
          score: 1,
          icon: "◯",
          feedback:
            "That knowledge is powerful. This move helps you make it visible so others can see it too.",
        },
        {
          text: "No. Data is scattered everywhere.",
          score: 0,
          icon: "✕",
          feedback:
            "You have insights. This move helps you translate them into visible systems.",
        },
      ],
    },
    {
      id: "team_sees",
      title: "Does Your Team See What You See?",
      question:
        "When you need to make a decision, do your leaders have the same data you have?",
      options: [
        {
          text: "Yes. They can see the same information. They make decisions with the same data.",
          score: 3,
          icon: "✓",
          feedback:
            "Your team leads with the same clarity you have. That multiplies your leadership.",
        },
        {
          text: "Somewhat. Some people have access, but they have to ask me for context.",
          score: 2,
          icon: "◐",
          feedback:
            "You're the source of truth. This move distributes that truth so your team can lead independently.",
        },
        {
          text: "Not really. They make decisions based on fragments of information.",
          score: 1,
          icon: "◯",
          feedback:
            "Your insight is clear. Making it visible so they see the whole picture changes everything.",
        },
        {
          text: "No. They make decisions without the full picture.",
          score: 0,
          icon: "✕",
          feedback:
            "You see the system. This move helps your team see it too, and lead from that clarity.",
        },
      ],
    },
    {
      id: "decision_speed",
      title: "How Fast Can You Make Decisions?",
      question:
        "When you need to respond to something, how quickly do you have the data you need?",
      options: [
        {
          text: "Fast. I look at my dashboard. I know immediately what's happening and what to do.",
          score: 3,
          icon: "✓",
          feedback: "You have decision-speed. That's leadership at scale.",
        },
        {
          text: "Medium. I can pull data, but it takes time to assemble the picture.",
          score: 2,
          icon: "◐",
          feedback:
            "You have the knowledge. A dashboard gives you the speed to act on it.",
        },
        {
          text: "Slow. I have to ask people for data, or it's not current.",
          score: 1,
          icon: "◯",
          feedback:
            "You're managing by asking questions. This move lets you lead by seeing.",
        },
        {
          text: "Very slow. By the time I have data, the moment has passed.",
          score: 0,
          icon: "✕",
          feedback:
            "You understand what matters. This move helps you see it in real time.",
        },
      ],
    },
    {
      id: "system_focus",
      title: "Do You Know What's Working And What Isn't?",
      question:
        "Can you clearly see which systems are delivering results and which ones need adjustment?",
      options: [
        {
          text: "Yes. I can see outcomes clearly. I know what to keep and what to change.",
          score: 3,
          icon: "✓",
          feedback:
            "You have the clarity that makes systems better. That's continuous improvement.",
        },
        {
          text: "Mostly. I have a sense, but the data isn't always clear.",
          score: 2,
          icon: "◐",
          feedback:
            "Your intuition is right. This move makes that intuition visible and verifiable.",
        },
        {
          text: "Not really. We keep running systems without knowing if they work.",
          score: 1,
          icon: "◯",
          feedback:
            "You care about outcomes. This move helps you see them clearly enough to adjust.",
        },
        {
          text: "No. We don't have a clear view of what's working.",
          score: 0,
          icon: "✕",
          feedback:
            "You have the vision for what matters. This move helps you measure and improve it.",
        },
      ],
    },
  ];

  const walkthroughs = [
    {
      id: "data_inventory",
      title: "Move 1: Know What Data Matters",
      icon: "📊",
      overview:
        "You already know what you need to see. This move is about naming it and organizing it so it's accessible, not scattered.",
      realExample:
        'A middle school principal realized she checked three different sheets to answer one question: "How are our flagged students doing?" One sheet had flagging data, another had progress monitoring scores, a third had attendance. She pulled them together into one view: Student name, flagged reason, current score, attendance, and status. Took 2 hours to build. Now she can see her whole intervention system in seconds.',
      steps: [
        "Name what you look at: What information do you check to understand your system?",
        "Organize by outcome: What does each piece of data tell you? Pull it together by what matters.",
        "Keep it simple: 3-5 key metrics, not 20. You can't act on everything.",
        "Make it current: If data isn't updated regularly, it's not useful. Build in the refresh.",
      ],
      thisWeek:
        "By Friday: List the 3-5 pieces of data you check most. Where does each one live? That's your inventory.",
    },
    {
      id: "dashboard_build",
      title: "Move 2: Build Your Dashboard",
      icon: "📊",
      overview:
        "This isn't fancy. It's a simple view where you can see what's happening. Google Sheet, Airtable, or simple template—whatever you already use.",
      realExample:
        "A principal used a Google Sheet with columns: Student name, grade, flagging date, help type, start date, weekly progress check (yes/no), and status. She updated it every Friday using data from her flagging system and coach check-ins. Takes 15 minutes. Now she can see: Who's flagged? Who started help? Who's not progressing? Where are the gaps? The dashboard made the system visible.",
      steps: [
        "Choose your tool: Google Sheet (easiest), Airtable (slightly fancier), or template—you already know how to use it",
        "Organize by what you see: Columns for each data point you listed in Move 1",
        "Add one action column: Status (Requested, In Progress, Started, Monitoring, Complete)",
        "Build in a refresh: Weekly or monthly? When will you update it? Make it automatic if possible.",
      ],
      thisWeek:
        "By Friday: Build your dashboard. Use one week of real data. See how it feels.",
    },
    {
      id: "review_cadence",
      title: "Move 3: Look At It Regularly And Act",
      icon: "📊",
      overview:
        "A dashboard you don't look at is useless. This move is about building the rhythm of leadership: See it, understand it, decide, act.",
      realExample:
        "A principal built her dashboard and then never looked at it. A coach reminded her: \"You're building this so you can lead faster, not just so it exists.\" She set a rhythm: Every Monday morning, 15 minutes with her instructional coach. They looked at the dashboard together. Who needs help starting? Who isn't progressing? What do we adjust? The dashboard became her leadership rhythm, not her filing system.",
      steps: [
        "Set your rhythm: Weekly, bi-weekly, or monthly? When will you look at your dashboard?",
        "Block the time: Put it on your calendar. Protect it. This is leadership time.",
        "Look with your team: Your coach, your admin team, whoever else needs to see. Make it a shared ritual.",
        "Decide and act: Don't just look. See something? Decide what to do. The dashboard guides action, not just observation.",
      ],
      thisWeek:
        "By Friday: Schedule your first dashboard review. Put it on the calendar. Make it a 15-minute rhythm.",
    },
  ];

  const calculateScore = () => {
    let total = 0;
    scenarios.forEach((scenario) => {
      total += responses[scenario.id] || 0;
    });
    return {
      raw: total,
      percentage: Math.round((total / (scenarios.length * 3)) * 100),
    };
  };

  const getStatus = (percentage) => {
    if (percentage >= 75) return { label: "Strong", color: BRAND.green };
    if (percentage >= 50) return { label: "Building", color: BRAND.yellow };
    if (percentage >= 25) return { label: "Priority", color: BRAND.teal };
    return { label: "Foundation", color: BRAND.red };
  };

  const score = calculateScore();
  const status = getStatus(score.percentage);

  // Welcome
  if (stage === "welcome") {
    return (
      <div
        style={{
          background: BRAND.dark,
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", marginBottom: "24px" }}>📊</div>
            <h1
              style={t({
                fontSize: "40px",
                fontWeight: 700,
                color: BRAND.textPrimary,
                marginBottom: "16px",
              })}
            >
              See Your Whole System at a Glance
            </h1>
            <p
              style={t({
                fontSize: "15px",
                color: BRAND.textSecondary,
                marginBottom: "32px",
                lineHeight: 1.6,
              })}
            >
              In 15 minutes, assess how visible your system is. You already
              understand it—this course helps you make it visible so your whole
              team can see it and lead from that clarity.
            </p>

            <div
              style={{
                background: BRAND.darkCard,
                border: `1px solid ${BRAND.teal}20`,
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "32px",
                textAlign: "left",
              }}
            >
              <p
                style={t({
                  fontSize: "14px",
                  fontWeight: 600,
                  color: BRAND.textPrimary,
                  marginBottom: "12px",
                })}
              >
                Here's what you'll get:
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {[
                  "4 questions about how visible your system is",
                  "Your Line of Sight readiness score",
                  "3 moves to build a simple, powerful dashboard",
                  "Email your implementation checklist",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: "16px", flexShrink: 0 }}>✓</span>
                    <span
                      style={t({
                        fontSize: "13px",
                        color: BRAND.textSecondary,
                      })}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setStage("scenarios")}
            style={{
              ...t({ fontSize: "15px", fontWeight: 600 }),
              width: "100%",
              padding: "16px 20px",
              background: BRAND.teal,
              color: BRAND.dark,
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: `0 8px 24px ${BRAND.teal}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = BRAND.tealDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = BRAND.teal;
            }}
          >
            Start Assessment →
          </button>
        </div>
      </div>
    );
  }

  // Scenarios
  if (stage === "scenarios") {
    const scenario = scenarios[currentScenario];
    const isAnswered = responses[scenario.id] !== undefined;
    const progress = Math.round(
      ((currentScenario + 1) / scenarios.length) * 100
    );

    return (
      <div
        style={{
          background: BRAND.dark,
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "32px" }}>
            <div
              style={t({
                fontSize: "11px",
                fontWeight: 600,
                color: BRAND.textMuted,
                marginBottom: "12px",
                textTransform: "uppercase",
              })}
            >
              Question {currentScenario + 1} of {scenarios.length}
            </div>
            <div
              style={{
                background: BRAND.darkSurface,
                height: "6px",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: BRAND.teal,
                  height: "100%",
                  width: `${progress}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: BRAND.darkCard,
              border: `1px solid ${BRAND.teal}20`,
              borderRadius: "16px",
              padding: "40px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "48px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              📊
            </div>
            <h2
              style={t({
                fontSize: "28px",
                fontWeight: 700,
                color: BRAND.textPrimary,
                marginBottom: "12px",
                textAlign: "center",
              })}
            >
              {scenario.title}
            </h2>
            <p
              style={t({
                fontSize: "16px",
                color: BRAND.textSecondary,
                marginBottom: "32px",
                textAlign: "center",
                lineHeight: 1.6,
              })}
            >
              {scenario.question}
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {scenario.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setResponses({ ...responses, [scenario.id]: option.score })
                  }
                  style={{
                    ...t({ fontSize: "14px", fontWeight: 500 }),
                    padding: "16px",
                    textAlign: "left",
                    background:
                      responses[scenario.id] === option.score
                        ? `${BRAND.teal}20`
                        : BRAND.darkSurface,
                    border:
                      responses[scenario.id] === option.score
                        ? `1px solid ${BRAND.teal}60`
                        : `1px solid ${BRAND.teal}20`,
                    borderRadius: "10px",
                    cursor: "pointer",
                    color: BRAND.textPrimary,
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color:
                        responses[scenario.id] === option.score
                          ? BRAND.teal
                          : BRAND.textMuted,
                      flexShrink: 0,
                    }}
                  >
                    {option.icon}
                  </span>
                  <span>{option.text}</span>
                </button>
              ))}
            </div>

            {isAnswered && (
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px",
                  background: `${BRAND.teal}15`,
                  border: `1px solid ${BRAND.teal}40`,
                  borderRadius: "10px",
                  display: "flex",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "18px", flexShrink: 0 }}>💡</span>
                <p
                  style={t({
                    fontSize: "13px",
                    color: BRAND.textSecondary,
                    lineHeight: 1.5,
                    margin: 0,
                  })}
                >
                  {
                    scenario.options.find(
                      (o) => o.score === responses[scenario.id]
                    )?.feedback
                  }
                </p>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() =>
                setCurrentScenario(Math.max(0, currentScenario - 1))
              }
              disabled={currentScenario === 0}
              style={{
                ...t({ fontSize: "14px", fontWeight: 600 }),
                padding: "12px 20px",
                background:
                  currentScenario === 0
                    ? `${BRAND.textMuted}20`
                    : BRAND.darkSurface,
                border: `1px solid ${BRAND.teal}20`,
                borderRadius: "10px",
                color: currentScenario === 0 ? BRAND.textMuted : BRAND.teal,
                cursor: currentScenario === 0 ? "not-allowed" : "pointer",
              }}
            >
              ← Back
            </button>
            <button
              onClick={() => {
                if (currentScenario < scenarios.length - 1) {
                  setCurrentScenario(currentScenario + 1);
                } else {
                  setStage("score");
                }
              }}
              disabled={!isAnswered}
              style={{
                ...t({ fontSize: "14px", fontWeight: 600 }),
                flex: 1,
                padding: "12px 20px",
                background: isAnswered ? BRAND.teal : `${BRAND.textMuted}20`,
                border: "none",
                borderRadius: "10px",
                color: BRAND.dark,
                cursor: isAnswered ? "pointer" : "not-allowed",
                boxShadow: isAnswered ? `0 8px 20px ${BRAND.teal}30` : "none",
              }}
            >
              {currentScenario === scenarios.length - 1
                ? "See My Score"
                : "Next"}{" "}
              →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Score
  if (stage === "score") {
    return (
      <div
        style={{
          background: BRAND.dark,
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>📊</div>
            <h1
              style={t({
                fontSize: "40px",
                fontWeight: 700,
                color: BRAND.textPrimary,
                marginBottom: "12px",
              })}
            >
              Your Line of Sight Readiness
            </h1>
          </div>

          <div
            style={{
              background: `${status.color}15`,
              border: `1px solid ${status.color}40`,
              borderRadius: "14px",
              padding: "40px",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            <div
              style={t({
                fontSize: "64px",
                fontWeight: 700,
                color: status.color,
                marginBottom: "8px",
              })}
            >
              {score.percentage}%
            </div>
            <p
              style={t({
                fontSize: "16px",
                color: BRAND.textPrimary,
                margin: "0",
              })}
            >
              Line of Sight Readiness
            </p>
            <p
              style={t({
                fontSize: "13px",
                color: BRAND.textSecondary,
                marginTop: "8px",
                margin: 0,
              })}
            >
              {status.label}
            </p>
          </div>

          <button
            onClick={() => setStage("walkthrough")}
            style={{
              ...t({ fontSize: "15px", fontWeight: 600 }),
              width: "100%",
              padding: "16px 20px",
              background: BRAND.teal,
              color: BRAND.dark,
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: `0 8px 24px ${BRAND.teal}30`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = BRAND.tealDark;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = BRAND.teal;
            }}
          >
            Learn the 3 Moves →
          </button>
        </div>
      </div>
    );
  }

  // Walkthrough
  if (stage === "walkthrough") {
    const walkthrough = walkthroughs[currentWalkthrough];
    const progress = Math.round(
      ((currentWalkthrough + 1) / walkthroughs.length) * 100
    );

    return (
      <div
        style={{
          background: BRAND.dark,
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "32px" }}>
            <div
              style={t({
                fontSize: "11px",
                fontWeight: 600,
                color: BRAND.textMuted,
                marginBottom: "12px",
                textTransform: "uppercase",
              })}
            >
              Move {currentWalkthrough + 1} of {walkthroughs.length}
            </div>
            <div
              style={{
                background: BRAND.darkSurface,
                height: "6px",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background: BRAND.teal,
                  height: "100%",
                  width: `${progress}%`,
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: BRAND.darkCard,
              border: `1px solid ${BRAND.teal}20`,
              borderRadius: "16px",
              padding: "40px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "56px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              {walkthrough.icon}
            </div>
            <h2
              style={t({
                fontSize: "32px",
                fontWeight: 700,
                color: BRAND.textPrimary,
                marginBottom: "20px",
                textAlign: "center",
              })}
            >
              {walkthrough.title}
            </h2>

            <p
              style={t({
                fontSize: "15px",
                color: BRAND.textSecondary,
                marginBottom: "32px",
                textAlign: "center",
                lineHeight: 1.6,
              })}
            >
              {walkthrough.overview}
            </p>

            <div
              style={{
                marginBottom: "32px",
                paddingBottom: "32px",
                borderBottom: `1px solid ${BRAND.teal}20`,
              }}
            >
              <p
                style={t({
                  fontSize: "14px",
                  fontWeight: 600,
                  color: BRAND.teal,
                  marginBottom: "12px",
                })}
              >
                Real school example:
              </p>
              <p
                style={t({
                  fontSize: "13px",
                  color: BRAND.textSecondary,
                  lineHeight: 1.6,
                  margin: 0,
                })}
              >
                {walkthrough.realExample}
              </p>
            </div>

            <div style={{ marginBottom: "32px" }}>
              <p
                style={t({
                  fontSize: "14px",
                  fontWeight: 600,
                  color: BRAND.textPrimary,
                  marginBottom: "16px",
                })}
              >
                How to do this:
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {walkthrough.steps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={t({
                        fontSize: "16px",
                        fontWeight: 700,
                        color: BRAND.teal,
                        flexShrink: 0,
                      })}
                    >
                      {idx + 1}.
                    </span>
                    <span
                      style={t({
                        fontSize: "13px",
                        color: BRAND.textSecondary,
                        lineHeight: 1.5,
                      })}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                background: `${BRAND.green}15`,
                border: `1px solid ${BRAND.green}40`,
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "18px", flexShrink: 0 }}>⚡</span>
              <div>
                <p
                  style={t({
                    fontSize: "12px",
                    fontWeight: 600,
                    color: BRAND.green,
                    marginBottom: "4px",
                  })}
                >
                  This Week
                </p>
                <p
                  style={t({
                    fontSize: "13px",
                    color: BRAND.textSecondary,
                    margin: 0,
                  })}
                >
                  {walkthrough.thisWeek}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() =>
                setCurrentWalkthrough(Math.max(0, currentWalkthrough - 1))
              }
              disabled={currentWalkthrough === 0}
              style={{
                ...t({ fontSize: "14px", fontWeight: 600 }),
                padding: "12px 20px",
                background:
                  currentWalkthrough === 0
                    ? `${BRAND.textMuted}20`
                    : BRAND.darkSurface,
                border: `1px solid ${BRAND.teal}20`,
                borderRadius: "10px",
                color: currentWalkthrough === 0 ? BRAND.textMuted : BRAND.teal,
                cursor: currentWalkthrough === 0 ? "not-allowed" : "pointer",
              }}
            >
              ← Back
            </button>
            <button
              onClick={() => {
                if (currentWalkthrough < walkthroughs.length - 1) {
                  setCurrentWalkthrough(currentWalkthrough + 1);
                } else {
                  setStage("checklist");
                }
              }}
              style={{
                ...t({ fontSize: "14px", fontWeight: 600 }),
                flex: 1,
                padding: "12px 20px",
                background: BRAND.teal,
                border: "none",
                borderRadius: "10px",
                color: BRAND.dark,
                cursor: "pointer",
                boxShadow: `0 8px 20px ${BRAND.teal}30`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = BRAND.tealDark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = BRAND.teal;
              }}
            >
              {currentWalkthrough === walkthroughs.length - 1
                ? "Get Your Checklist"
                : "Next Move"}{" "}
              →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Checklist
  if (stage === "checklist") {
    return (
      <div
        style={{
          background: BRAND.dark,
          minHeight: "100vh",
          paddingTop: "60px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ marginBottom: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>✓</div>
            <h1
              style={t({
                fontSize: "40px",
                fontWeight: 700,
                color: BRAND.textPrimary,
                marginBottom: "12px",
              })}
            >
              Dashboard Implementation Checklist
            </h1>
            <p style={t({ fontSize: "15px", color: BRAND.textSecondary })}>
              Print this. Build your dashboard this week. Earn your Responsive
              Systems Certification.
            </p>
          </div>

          <div
            style={{
              background: BRAND.darkCard,
              border: `1px solid ${BRAND.teal}20`,
              borderRadius: "14px",
              padding: "40px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                marginBottom: "32px",
                paddingBottom: "32px",
                borderBottom: `1px solid ${BRAND.teal}20`,
              }}
            >
              <h3
                style={t({
                  fontSize: "18px",
                  fontWeight: 700,
                  color: BRAND.textPrimary,
                  marginBottom: "16px",
                })}
              >
                📊 Move 1: Know What Data Matters
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Name what you look at: What information do you check to understand your system?",
                  "Organize by outcome: What does each piece tell you? Pull it together by what matters.",
                  "Keep it simple: 3-5 key metrics, not 20. You can't act on everything.",
                  "Make it current: If data isn't updated regularly, it's not useful.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={t({ fontSize: "13px", color: BRAND.textSecondary })}
                  >
                    ☐ {item}
                  </div>
                ))}
              </div>
              <p
                style={t({
                  fontSize: "12px",
                  color: BRAND.textMuted,
                  marginTop: "16px",
                  fontStyle: "italic",
                  margin: 0,
                })}
              >
                Due: By Friday - List your 3-5 key data points
              </p>
            </div>

            <div
              style={{
                marginBottom: "32px",
                paddingBottom: "32px",
                borderBottom: `1px solid ${BRAND.teal}20`,
              }}
            >
              <h3
                style={t({
                  fontSize: "18px",
                  fontWeight: 700,
                  color: BRAND.textPrimary,
                  marginBottom: "16px",
                })}
              >
                📊 Move 2: Build Your Dashboard
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Choose your tool: Google Sheet, Airtable, or simple template you already know",
                  "Organize by what you see: Columns for each data point from Move 1",
                  "Add one action column: Status (Requested, In Progress, Started, Monitoring, Complete)",
                  "Build in a refresh: Weekly or monthly? When will you update it?",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={t({ fontSize: "13px", color: BRAND.textSecondary })}
                  >
                    ☐ {item}
                  </div>
                ))}
              </div>
              <p
                style={t({
                  fontSize: "12px",
                  color: BRAND.textMuted,
                  marginTop: "16px",
                  fontStyle: "italic",
                  margin: 0,
                })}
              >
                Due: By Friday - Build it with real data
              </p>
            </div>

            <div>
              <h3
                style={t({
                  fontSize: "18px",
                  fontWeight: 700,
                  color: BRAND.textPrimary,
                  marginBottom: "16px",
                })}
              >
                📊 Move 3: Look At It Regularly And Act
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  "Set your rhythm: Weekly, bi-weekly, or monthly? When will you look at it?",
                  "Block the time: Put it on your calendar. Protect it.",
                  "Look with your team: Your coach, your admin team. Make it a shared ritual.",
                  "Decide and act: See something? Decide what to do. The dashboard guides action.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={t({ fontSize: "13px", color: BRAND.textSecondary })}
                  >
                    ☐ {item}
                  </div>
                ))}
              </div>
              <p
                style={t({
                  fontSize: "12px",
                  color: BRAND.textMuted,
                  marginTop: "16px",
                  fontStyle: "italic",
                  margin: 0,
                })}
              >
                Due: By Friday - Schedule your first review on the calendar
              </p>
            </div>
          </div>

          <div
            style={{
              background: `${BRAND.green}15`,
              border: `1px solid ${BRAND.green}40`,
              borderRadius: "14px",
              padding: "28px",
              marginBottom: "40px",
            }}
          >
            <h3
              style={t({
                fontSize: "16px",
                fontWeight: 700,
                color: BRAND.green,
                marginBottom: "12px",
              })}
            >
              ✓ What Happens When You Build This System
            </h3>
            <p
              style={t({
                fontSize: "13px",
                color: BRAND.textSecondary,
                lineHeight: 1.6,
                margin: 0,
              })}
            >
              You see your whole system at a glance. Data that used to be
              scattered becomes visible. Your team sees what you see. You make
              decisions faster. You know what's working and what needs
              adjustment. Your leadership becomes visible, not just in your
              head. That changes everything.
            </p>
          </div>

          <button
            onClick={() => {
              setStage("welcome");
              setResponses({});
              setCurrentScenario(0);
              setCurrentWalkthrough(0);
              setEmailInput("");
            }}
            style={{
              ...t({ fontSize: "14px", fontWeight: 600 }),
              width: "100%",
              padding: "12px 20px",
              background: BRAND.darkSurface,
              color: BRAND.teal,
              border: `1px solid ${BRAND.teal}20`,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Take Again ↻
          </button>
        </div>
      </div>
    );
  }
};

export default LineOfSightCourse;
