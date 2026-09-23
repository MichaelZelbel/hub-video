#!/usr/bin/env node
// The old name, kept so a reader who installed before 2026-09-22 keeps working. It loads the
// real program; it is not a second copy, because two copies drift apart and a reader then gets
// one behaviour from the name they know and another from the name the book documents.
// Retired in the hub engine's scripts/config/hub-layout.json under retired.files.
import "./mc-video.mjs";
