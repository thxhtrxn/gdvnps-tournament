import { MetaProvider, Title, /* Base, */ Link as LinkMeta } from "@solidjs/meta";
import { clientOnly } from "@solidjs/start";
import { Suspense, onMount } from "solid-js";

import { ColorModeProvider, ColorModeScript } from "@kobalte/core";
import { Outlet, createRootRoute } from "@tanstack/solid-router";

import { Navbar } from "~/components/Navbar";

const Devtools = clientOnly(() => import("../components/Devtools"));

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  onMount(() => {
    if (navigator.userAgent.includes("Firefox")) document.documentElement.classList.add("firefox");

    if (navigator.userAgent.includes("Windows")) {
      document.documentElement.classList.add("windows");
      document.documentElement.classList.add("win-custom-scrollbar");
      document.documentElement.classList.add("styled-scrollbar");
    }
  });
  return (
    <MetaProvider>
      <Title>GDVNPS Tournament</Title>
      <LinkMeta rel="preconnect" href="https://fonts.googleapis.com" />
      <LinkMeta rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <LinkMeta
        href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <Suspense>
        <ColorModeScript />
        <ColorModeProvider>
          <Navbar />
          <Outlet />
          <Devtools />
        </ColorModeProvider>
      </Suspense>
    </MetaProvider>
  );
}
