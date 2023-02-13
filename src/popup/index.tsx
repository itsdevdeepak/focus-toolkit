import React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./Popup";

const appContainer = createRoot(document.getElementById("app-container")!);
appContainer.render(<Popup />);
