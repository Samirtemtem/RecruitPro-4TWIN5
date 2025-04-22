import React from "react";

const MatchInsightCard = ({ matchDetails }) => {
  if (!matchDetails) return null;

  const similarity = (matchDetails.similarity * 100).toFixed(2);

  const outerWrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
    marginBottom: "25px",
  };

  const tableContainerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1400px",
    padding: "25px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
  };

  const headerStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "1.1rem",
    color: "#343a40",
    marginBottom: "8px",
  };

  const rowStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    alignItems: "center",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "7px 14px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: 500,
    margin: "5px",
    whiteSpace: "nowrap",
  };

  return (
    <div style={outerWrapperStyle}>
      <div style={tableContainerStyle}>
        {/* Row 1: Match Score */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "25px",
          backgroundColor: "#e9f7ef",
          padding: "12px 24px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}>
          <span style={{ fontSize: "1.4rem", color: "#17a2b8" }}>📊</span>
          <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "#343a40" }}>
            Match Score:
          </span>
          <span style={{ fontSize: "1.3rem", fontWeight: "700", color: "#28a745" }}>
            {similarity}%
          </span>
        </div>

        {/* Row 2: Headers */}
        <div style={rowStyle}>
          <div style={{ textAlign: "center", ...headerStyle }}>🟢 Exact Skills:</div>
          <div style={{ textAlign: "center", ...headerStyle }}>🟡 Related Skills:</div>
        </div>

        {/* Row 3: Skills */}
        <div style={rowStyle}>
          <div style={{ textAlign: "center" }}>
            {matchDetails.exactSkillMatches.length > 0 ? (
              matchDetails.exactSkillMatches.map((skill, i) => (
                <span
                  key={i}
                  style={{
                    ...badgeStyle,
                    backgroundColor: "#28a745",
                    color: "#fff",
                  }}
                >
                  {skill}
                </span>
              ))
            ) : (
              <span style={{ color: "gray", fontStyle: "italic" }}>None</span>
            )}
          </div>
          <div style={{ textAlign: "center" }}>
            {matchDetails.semanticSkillMatches.length > 0 ? (
              matchDetails.semanticSkillMatches.map((s, i) => (
                <span
                  key={i}
                  style={{
                    ...badgeStyle,
                    backgroundColor: "#ffc107",
                    color: "#212529",
                  }}
                >
                  {s.candidateSkill} ≈ {s.jobSkill}
                </span>
              ))
            ) : (
              <span style={{ color: "gray", fontStyle: "italic" }}>None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchInsightCard;
