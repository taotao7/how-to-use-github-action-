import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm";

Reveal.initialize({
  plugins: [Markdown, RevealHighlight, Notes],
  multiplex: {
    secret: "16342833718093233323",
    id: "315b5a46b1094d47",
    url: "http://cf32-110-191-179-224.ngrok.io/",
  },
  dependencies: [
    {
      src: "http://cf32-110-191-179-224.ngrok.io/socket.io/socket.io.js",
      async: true,
    },
    {
      src: "http://cf32-110-191-179-224.ngrok.io/master.js",
      async: true,
    },
    {
      src: "http://cf32-110-191-179-224.ngrok.io/client.js",
      async: true,
    },
  ],
});
