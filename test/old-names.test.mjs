// A machine set up before 2026-09-22 must keep working without being set up again.
//
// The rename moved the add-on's record from ~/.hub-video to ~/.mc-video, the hub's record from
// HUB_DIR in ~/.hub/device.env to GODSPEED_DIR in ~/.godspeed/device.env, and the marker on the
// recipes it installs from .installed-by-hub-video to .installed-by-mc-video, keeping none of
// the old ones. So on such a machine it lost its settings, could not find the mission control,
// and refused to update its own recipes as if a reader had written them. Never one name.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import * as L from "../bin/lib.mjs";

let work, home, hub;
const saved = {};
before(() => {
  work = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), "mc-video-old-")));
  home = path.join(work, "home");
  hub = path.join(work, "hub");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(hub, { recursive: true });
  fs.writeFileSync(path.join(hub, "AGENTS.md"), "x");
  for (const k of ["HOME", "USERPROFILE", "GODSPEED_VIDEO_HOME", "HUB_VIDEO_HOME"]) saved[k] = process.env[k];
  process.env.HOME = home;
  process.env.USERPROFILE = home;
  delete process.env.GODSPEED_VIDEO_HOME;
  delete process.env.HUB_VIDEO_HOME;
});
after(() => {
  for (const [k, v] of Object.entries(saved)) { if (v === undefined) delete process.env[k]; else process.env[k] = v; }
  fs.rmSync(work, { recursive: true, force: true });
});

test("the add-on's record is ~/.hub-video when only it exists", () => {
  fs.mkdirSync(path.join(home, ".hub-video"));
  assert.equal(L.home(), path.join(home, ".hub-video"));
});

test("the mission control is found from HUB_DIR in ~/.hub/device.env", () => {
  fs.mkdirSync(path.join(home, ".hub"));
  fs.writeFileSync(path.join(home, ".hub", "device.env"), `HUB_DIR=${hub}\n`);
  assert.equal(L.findHub({ cwd: work, userHome: home }), hub);
});

test("a recipe the old version installed may still be updated", () => {
  const dir = path.join(work, "recipe");
  fs.mkdirSync(dir);
  fs.writeFileSync(path.join(dir, ".installed-by-hub-video"), "");
  assert.equal(L.mayReplace(dir), true);
});

test("a recipe a reader wrote is still never replaced", () => {
  const dir = path.join(work, "theirs");
  fs.mkdirSync(dir);
  assert.equal(L.mayReplace(dir), false);
});

test("once the new record exists, it wins", () => {
  fs.mkdirSync(path.join(home, ".mc-video"));
  assert.equal(L.home(), path.join(home, ".mc-video"));
});
