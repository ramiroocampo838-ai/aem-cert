import type { Concept } from "../types"

export const virtualHostsConcepts: Concept[] = [
  {
    id: "disp-016",
    category: "Virtual Hosts",
    title: "The /virtualhosts property lists every hostname and URI combination the farm accepts",
    reference: "What does the /virtualhosts property list for a farm?",
    explanation:
      "Section 3 says /virtualhosts lists every hostname and URI combination that Dispatcher accepts for the farm.",
  },
  {
    id: "disp-017",
    category: "Virtual Hosts",
    title: "A single asterisk handles all requests",
    reference: "What is the effect of using a single asterisk in /virtualhosts?",
    explanation:
      "Section 3 states that a single asterisk handles all requests.",
  },
  {
    id: "disp-018",
    category: "Virtual Hosts",
    title: "Dispatcher evaluates farms from the bottom up, and within a farm it checks virtual host entries from top to bottom",
    reference: "When a request arrives, in what overall order does Dispatcher evaluate farms and virtual host entries?",
    explanation:
      "Section 3 says Dispatcher starts at the lowest farm and works upward, and within each farm it starts at the top value and works down.",
  },
  {
    id: "disp-019",
    category: "Virtual Hosts",
    title: "The first priority is the first virtual host that matches the host, the scheme, and the URI",
    reference: "Which matching rule has first priority when Dispatcher chooses a virtual host?",
    explanation:
      "Section 3 says the first virtual host that matches the host, the scheme, and the URI is used.",
  },
  {
    id: "disp-020",
    category: "Virtual Hosts",
    title: "It uses the first virtual host that matches the host",
    reference: "If no virtual host matches both scheme and URI, what fallback does Dispatcher use next?",
    explanation:
      "Section 3 says that if none match both scheme and URI, the first virtual host that matches the host is used.",
  },
  {
    id: "disp-021",
    category: "Virtual Hosts",
    title: "Dispatcher uses the topmost virtual host of the topmost farm",
    reference: "If no host matches at all, what does Dispatcher use?",
    explanation:
      "Section 3 says that if no host matches, the topmost virtual host of the topmost farm is used.",
  },
  {
    id: "disp-022",
    category: "Virtual Hosts",
    title: "The default virtual host should be there because the final fallback uses the topmost virtual host of the topmost farm",
    reference: "Why should the default virtual host be placed at the top of the virtualhosts property in the topmost farm?",
    explanation:
      "Section 3 explicitly says to put the default virtual host at the top of the virtualhosts property in the topmost farm because of the fallback behavior.",
  },
]
