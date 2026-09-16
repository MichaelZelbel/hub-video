# 3. Animated slides, title cards and overlays

Captions come from `hub-video`. Anything that moves and is not your footage comes from
HyperFrames: an open-source renderer that turns a web page with an animation timeline into an
MP4, frame by frame. You never write the page. Your assistant does, following the HyperFrames
recipes the setup put in your hub, and it shows you the result.

## Three things to ask for first

> Make a five-second vertical title card that says "Three things I learned this week", in white on dark blue.

> Put a lower third with my name and "hub builder" over the first eight seconds of ~/Videos/intro.mp4.

> Turn these three points into a 20-second vertical slideshow, one point per slide: ...

## What happens

1. Your assistant asks a few short questions if it needs to: the shape (vertical or wide),
   the look, how long. Say what you know; "you choose" is a fine answer.
2. It makes a project folder next to your footage, never inside the hub, writes the
   composition, and runs HyperFrames' own check on it.
3. It renders an MP4 into the project folder and looks at still frames from it before it tells
   you it is done.

A three-second card rendered in about 14 seconds on the author's desktop. A three-minute video
with seventeen cards over a talking head takes minutes, not seconds. The first render also
downloads the browser HyperFrames draws with.

## Graphics over a talking head

The heaviest thing it does, and the one the author uses most: your clip plays untouched and
designed cards appear at the moments you mention something (a book, a website, a number). Ask:

> Put graphic cards over ~/Videos/talk.mp4 at the moments I mention something worth showing. Here are two screenshots to use: ...

Expect a first version and a round of corrections. "Move the quote up, it covers my eyes" is
the kind of note that works. Captions go on last, on top of the render:

> Now caption the rendered video.

## To watch while it works

`npx hyperframes@0.8.43 preview`, run in the project folder, opens the composition in your
browser with a timeline you can scrub. You do not need it; it is there when you want to see a
card before the render.

## About the pin

The recipes in your hub belong to HyperFrames 0.8.43. When a newer add-on version moves the
pin, running the setup line again replaces them. The HyperFrames program itself, started with
`npx`, may also offer to update skills it finds on your computer; that does not touch the copies
in your hub.
