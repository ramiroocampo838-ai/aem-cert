import type { Concept } from "../types"

export const rendersAndClientHeadersConcepts: Concept[] = [
  {
    id: "disp-023",
    category: "Renders and Client Headers",
    title: "The /renders property defines where Dispatcher sends requests to render a document",
    reference: "What does the /renders property define in Dispatcher?",
    explanation:
      "Section 4 says the /renders property defines where Dispatcher sends requests to render a document.",
  },
  {
    id: "disp-024",
    category: "Renders and Client Headers",
    title: "Each render has a /hostname and a /port",
    reference: "Which two child properties does each render have according to the speech?",
    explanation:
      "Section 4 says each render has a /hostname and a /port.",
  },
  {
    id: "disp-025",
    category: "Renders and Client Headers",
    title: "When there are several renders, Dispatcher distributes requests among them",
    reference: "When a farm contains several renders, how does Dispatcher handle requests?",
    explanation:
      "Section 4 says that when there are several renders, requests are distributed among them.",
  },
  {
    id: "disp-026",
    category: "Renders and Client Headers",
    title: "The /timeout property is the connection timeout in milliseconds, and 0 means wait indefinitely, which is the default",
    reference: "What does /timeout control, and what do 0 and the default mean?",
    explanation:
      "Section 4 says /timeout is the connection timeout in milliseconds, where 0 means wait indefinitely, and that is the default.",
  },
  {
    id: "disp-027",
    category: "Renders and Client Headers",
    title: "The relevant setting is /receiveTimeout, whose default is 600000 milliseconds, or ten minutes",
    reference: "A request hangs while Dispatcher is parsing response headers and then returns 504. Which setting from the speech is most directly involved, and what is its default?",
    explanation:
      "Section 4 says /receiveTimeout is the time a response may take, its default is 600000 milliseconds or ten minutes, and hitting that timeout while parsing response headers returns 504.",
  },
  {
    id: "disp-028",
    category: "Renders and Client Headers",
    title: "Setting /secure to 1 makes Dispatcher use HTTPS to reach AEM",
    reference: "What does setting /secure to 1 do for a render?",
    explanation:
      "Section 4 says that /secure set to 1 makes Dispatcher use HTTPS to reach AEM.",
  },
  {
    id: "disp-029",
    category: "Renders and Client Headers",
    title: "The /clientheaders list must be exhaustive, including default headers, and page activation requests need the PATH header",
    reference: "Why is customizing /clientheaders risky if you forget a default header, and which header does the speech call out for page activation requests?",
    explanation:
      "Section 4 says that /clientheaders is the list of headers passed to the render, and if you customize it, you must specify an exhaustive list including the defaults. It also gives PATH as an example needed for page activation requests.",
  },
]
