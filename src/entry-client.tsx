// @refresh reload
import { mount, StartClientTanstack } from "@solidjs/start/client";
import { attachDevtoolsOverlay } from "@solid-devtools/overlay";

attachDevtoolsOverlay();

mount(() => <StartClientTanstack />, document.getElementById("__root")!);
