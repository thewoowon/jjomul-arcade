"use client";

import BoardSection from "@/components/sections/BoardSection";
import LandingSection from "@/components/sections/LandingSection";
import ListSection from "@/components/sections/ListSection";
import ScreenSection from "@/components/sections/ScreenSection";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Main>
      <LandingSection />
      <BoardSection />
      <ScreenSection />
      <ListSection />
    </Main>
  );
}

const Main = styled.main`
  margin-top: 80px;
`;
