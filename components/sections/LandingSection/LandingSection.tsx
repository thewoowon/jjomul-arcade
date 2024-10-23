import styled from "@emotion/styled";

const dummyStrings = [
  "# Blue bananas sing at dawn.",
  "# The chair sleeps loudly.",
  "# Butterflies paint with thunder.",
  "# A silent apple screams.",
];

const LandingSection = () => {
  return (
    <Section>
      <Title>
        <div>We</div>
        <div>Talk,</div>
        <div>Play,</div>
        <div>Love!</div>
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
          margin: "1rem 0",
          fontSize: "20px",
          lineHeight: "28px",
          fontWeight: 400,
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            {dummyStrings.map((str, index) => (
              <div key={index}>{str}</div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default LandingSection;

const Title = styled.div`
  font-size: 210px;
  line-height: 1;
  letter-spacing: 0;
  font-weight: 500;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 72px;
  padding: 0 64px;
  height: fit-content;
`;
