import { NavigationMenu } from "@kobalte/core/navigation-menu";
import { onMount } from "solid-js";
import { animate } from "motion";

import styles from "./Navbar.module.scss";

export function Navbar() {
  onMount(() => {
    animate(
      '[data-slot="navigation"]',
      {
        opacity: [0, 1],
        transformPerspective: [1200, 1200],
        y: [-64, 0],
      },
      { damping: 60, duration: 0.8, mass: 1, stiffness: 300, type: "spring" },
    );
  });
  return (
    <header data-slot="navigation" gdvnps-comp="navigation-bar" class={styles.navigation}>
      <NavigationMenu>
        <div>a</div>
      </NavigationMenu>
    </header>
  );
}
