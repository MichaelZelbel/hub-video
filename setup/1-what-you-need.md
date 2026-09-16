# 1. What you need before the one line

The setup does almost everything itself. This page is what it cannot do, and what it will
ask you before it does something.

## Already there if you built the hub from the book

- **Your hub**, on the computer where your videos are. The setup finds it the way the kit's
  installer recorded it. If it cannot, run the line from inside your hub folder, or add
  `--hub` and the folder: `npx --yes github:MichaelZelbel/hub-video setup --hub ~/hub`.
- **Node.js 22 or newer.** Type `node -v`. If the number starts below 22, install the current
  version from https://nodejs.org and open a new terminal.

This add-on is for your laptop or desktop, not the server from Chapter 31. Video work is heavy,
your footage is on your computer, and you want to watch the result where you made it.

## What the setup offers to install, and asks first

- **ffmpeg**, the program that reads and writes video files. The setup uses one that can write
  H.264 video and draw captions, and says so if the one it finds cannot.
  - Windows: it offers `winget install --id Gyan.FFmpeg -e`. The `ffmpeg` that Windows sometimes
    has already is an empty placeholder from the Microsoft Store; the setup skips it.
  - macOS: it offers `brew install ffmpeg` if you have Homebrew (https://brew.sh). Without
    Homebrew it says so, and you install Homebrew first.
  - Linux: it offers `sudo apt-get install -y ffmpeg`, which asks for your password.
- **uv**, a small program that installs a private Python for the speech model, so the Python
  you may already have is left alone. If you use Hermes, you probably have uv already.

Say no to either and the setup prints the line to run yourself, then carries on with the rest
and tells you at the end what is still missing. Run the setup again when you have done it.

## Disk and time

About 1.5 GB in total, most of it downloaded the first time something needs it:

- the speech model's code in a private Python, in `~/.hub-video/venv`;
- the speech model itself (about 500 MB), the first time you caption anything;
- the browser HyperFrames draws with (about 150 MB), the first time you render.

The first setup takes a few minutes on a normal connection. Later runs take seconds.

## Linux only: the browser's libraries

HyperFrames draws each frame in a headless Chrome. A desktop Linux has what Chrome needs. A
minimal one may not, and the title-card proof then fails with a message about a missing `.so`
file. `npx hyperframes@0.8.43 doctor` names what is missing; on Ubuntu,
`sudo apt-get install -y libnss3 libatk-bridge2.0-0t64 libgbm1 libasound2t64 libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libpango-1.0-0 libcairo2`
is the usual fix.

## A graphics card is optional

Captions are heard on the graphics card when an NVIDIA card and its libraries are there, and
on the processor otherwise. On the processor, a three-minute clip takes a minute or two. Both
give the same words.
