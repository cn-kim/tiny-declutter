/* ============================================================
   TINY DECLUTTER — MISSION LIST
   ============================================================
   This is the ONLY file you edit to change the daily suggestions.
   The layout and logic live in index.html — you don't need to touch that.

   ── TO ADD a mission ──────────────────────────────────────
   Copy any line below, paste it on its own line, and change the
   four pieces of text. Keep the format EXACTLY, including the
   commas, the { curly braces }, and the quotes:

     { emoji: '🧦', category: 'Closet', title: 'Short title', desc: 'One sentence.' },

     • emoji     – one emoji shown big on the card
     • category  – the room/area (e.g. Bathroom, Kitchen, Closet, Paper, Digital)
     • title     – a few words, shown large
     • desc      – one short sentence of instruction

   ── TO REMOVE a mission ───────────────────────────────────
   Delete its whole line.

   ── QUOTES: the one thing to watch ────────────────────────
   Wrap each piece of text in straight single quotes '...'.
   If your text itself contains an apostrophe, wrap THAT piece
   in double quotes instead, like this:
       desc: "Remove one you'll never use."

   ── GOOD TO KNOW ──────────────────────────────────────────
   • The site shows ONE mission per day, cycling through this
     list top-to-bottom. Order doesn't really matter — just add
     new ones at the bottom.
   • You can invent a brand-new category any time. If it's not
     in the greeting list (in index.html) it still works — the
     card just says "Let's visit the <category> today".
   ============================================================ */

const MISSIONS = [
  { emoji: '🧴', category: 'Bathroom', title: 'Toss one empty bottle',    desc: 'Find one empty shampoo or lotion bottle and throw it away now.' },
  { emoji: '💊', category: 'Bathroom', title: 'Clear expired medicine',   desc: 'Check one shelf and bin a single expired medicine.' },
  { emoji: '🧼', category: 'Bathroom', title: 'Ditch a hotel toiletry',   desc: "Remove one tiny hotel soap or bottle you'll never use." },
  { emoji: '🌶️', category: 'Kitchen',  title: 'Drop one old spice',        desc: 'Find a spice past its date and toss it out.' },
  { emoji: '🥡', category: 'Kitchen',  title: 'Lidless container out',    desc: 'Recycle one food container that has no matching lid.' },
  { emoji: '🥢', category: 'Kitchen',  title: 'Fewer spare chopsticks',   desc: 'Remove a handful of duplicate takeaway chopsticks.' },
  { emoji: '👕', category: 'Closet',   title: 'One shirt you skip',       desc: "Pull out one shirt you haven't worn in over a year." },
  { emoji: '🧥', category: 'Closet',   title: 'Bin a broken hanger',      desc: 'If you have one, throw away a bent or broken hanger.' },
  { emoji: '🧦', category: 'Closet',   title: 'Match one sock pair',      desc: 'Reunite a single pair of stray socks.' },
  { emoji: '📄', category: 'Paper',    title: 'Go paperless once',        desc: 'Switch one paper statement over to email.' },
  { emoji: '🧾', category: 'Paper',    title: 'Recycle an old receipt',   desc: 'Grab one receipt you no longer need and recycle it.' },
  { emoji: '📑', category: 'Paper',    title: 'Expired warranty out',     desc: 'Throw away one warranty that has already expired.' },
  { emoji: '📱', category: 'Digital',  title: 'Delete 5 screenshots',     desc: 'Open your photos and delete five old screenshots.' },
  { emoji: '🗑️', category: 'Digital',  title: 'Remove one app',           desc: "Delete one app you haven't opened in months." },
  { emoji: '✉️', category: 'Digital',  title: 'Unsubscribe once',         desc: 'Open one newsletter and hit unsubscribe.' },
];
