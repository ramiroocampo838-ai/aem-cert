import type { Concept } from "../types"

export const htlSightlyConcepts: Concept[] = [
  {
    id: "cq-047",
    title: "context='unsafe' disables all HTL XSS escaping — output is inserted into the DOM raw and unescaped, enabling XSS attacks",
    reference: "HTL-001 (Severity: Major) flags the use of context='unsafe' in HTL expressions. What does this context option do and why is it prohibited?",
    explanation:
      "HTL-001 (Major): HTL's primary security feature is automatic output escaping. Every '${expression}' is HTML-escaped by default. Using context='unsafe' removes this protection completely: the raw value is written directly into the HTML output. If the value contains '<script>alert(1)</script>', this executes as JavaScript in the victim's browser — a stored or reflected XSS vulnerability.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-048",
    title: "Use context='html' only for trusted, pre-validated rich text from the CMS RTE — HTL applies Anti-Samy sanitization to remove dangerous tags/attributes",
    reference: "When is context='html' the correct HTL output context to use, and what security mechanism does HTL still apply?",
    explanation:
      "HTL-001 and security: context='html' is the correct context for HTML-formatted rich text from the CMS RTE (Rich Text Editor). Unlike context='unsafe' (no protection), context='html' runs the value through Adobe's Anti-Samy HTML whitelist sanitizer, which strips dangerous elements (script, object, embed) and event handler attributes (onclick, onerror) while preserving safe formatting tags. Never use context='html' for user-submitted form data.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-049",
    title: "data-sly-use delegates business logic to Java/JS Use-API objects while keeping HTL purely declarative — no JSP-style scriptlets",
    reference: "HTL-002 (Severity: Major) requires using data-sly-use to bind Java Sling Models or WCMUsePojo for business logic. Why does data-sly-use enforce this separation?",
    explanation:
      "HTL-002 (Major): HTL was designed as a template language with intentionally limited expressiveness — it cannot execute arbitrary Java or perform complex computations inline. data-sly-use.model='com.myproject.MyModel' injects a Java Use-API object into the template, providing access to pre-computed properties. This enforces MVC separation: the @Model handles all data preparation and business logic; the HTL file handles only presentation.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-050",
    title: "data-sly-test",
    reference: "Which HTL attribute causes its element and all its children to be removed from the DOM output if the condition expression evaluates to false?",
    explanation:
      "HTL conditional rendering uses data-sly-test. When '${myModel.showSection}' is false/null/empty, the element with data-sly-test and its entire subtree are suppressed from the output. Falsy values are: false, null, 0, empty string, empty array/collection. This is roughly equivalent to JSP's <c:if test='...'> but more readable and type-safe.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-051",
    title: "It renders the element's children while removing the element's own start and end tags from the output",
    reference: "What does the 'data-sly-unwrap' HTL attribute do to the element it is placed on?",
    explanation:
      "HTL data-sly-unwrap allows grouping of logic without adding extra HTML elements. '<div data-sly-unwrap><p>content</p></div>' renders only '<p>content</p>' — the <div> wrapper is not output. This is useful for wrapping multiple sibling elements under a single data-sly-test or data-sly-list condition without polluting the HTML structure. Equivalent to React's Fragment or Vue's template tag.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-052",
    title: "context='scriptToken' for safe identifier values, or context='scriptString' for string values — never 'unsafe' for inline JS",
    reference: "HTL-004 requires the correct output context for expressions placed inside a JavaScript event handler attribute (e.g., onclick). Which context should be used?",
    explanation:
      "HTL-004 (Major): Expression output context must match the syntactic context it appears in. For inline JavaScript, incorrect escaping can create XSS vulnerabilities. HTL provides: context='scriptToken' for values used as JS identifiers or numbers (allows only safe characters), and context='scriptString' for values embedded inside JS string literals (applies JS string escaping with \\u encoding). The default HTML attribute escaping does not protect against JavaScript injection within event handlers.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-053",
    title: "data-sly-call='${templates.myTemplate @ param1=value1}' after importing the template file with data-sly-use",
    reference: "Which HTL attribute and syntax is used to include another HTL component template by calling a defined template from the same or a different HTL file?",
    explanation:
      "HTL Template Calling: To call a template, first import the file containing it: '<div data-sly-use.t='/apps/project/components/base/base.html'></div>', then call the specific template: '<sly data-sly-call='${t.myBlock @ title=model.title}'/>'. data-sly-template defines a reusable HTML block with parameters; data-sly-call invokes it. Note: data-sly-include includes a full HTL script (passing the current context); data-sly-call invokes just the named template block.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-054",
    title: "data-sly-include includes another HTL script in the same component context; data-sly-resource includes a JCR resource resolved by path, running its full Sling rendering pipeline",
    reference: "In HTL, what is the difference between data-sly-include and data-sly-resource?",
    explanation:
      "HTL includes: data-sly-include evaluates the referenced HTL/JSP script in the current Sling rendering context — same request, same resource, same resolver. data-sly-resource dispatches a new Sling include request for a JCR resource, which causes Sling to look up its sling:resourceType and render it through the full component rendering pipeline, including any associated Use-API objects and child scripts.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-055",
    title: "context='uri' — validates the URI structure and strips dangerous javascript: and data: scheme prefixes",
    reference: "HTL-003 requires always specifying an explicit output context for URI expressions. Which context prevents open redirect and XSS attacks for href attribute values?",
    explanation:
      "HTL-003 (Major): Without context='uri', an attacker can inject javascript:alert(1) as an href value. The default attribute context encodes HTML special characters but does NOT validate URI schemes. context='uri' applies URI scheme validation, blocking javascript:, data:, vbscript:, and other dangerous schemes. Safe schemes (http, https, relative paths, mailto, #anchors) pass through; unsafe ones are replaced with an empty string or '#', preventing protocol injection.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-056",
    title: "data-sly-list.item='${model.items}' iterates the collection; provides itemList.index (0-based), itemList.count (1-based), itemList.first, itemList.last, itemList.odd, itemList.even",
    reference: "How does HTL's data-sly-list attribute iterate over a collection, and what implicit loop variables does it provide?",
    explanation:
      "HTL data-sly-list: The syntax 'data-sly-list.item=\"${model.items}\"' binds each element to 'item'. HTL automatically creates a companion variable 'itemList' (the loop variable name + 'List') with helper properties: .index (0-based), .count (1-based), .first (boolean), .last (boolean), .odd/.even (alternating booleans). These allow CSS class conditionals and element separators without Java logic.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-057",
    title: "Use AEM Client Libraries (cq:ClientLibraryFolder) to deliver CSS and JS as versioned, cacheable assets linked via data-sly-call='${clientlib.all @ categories=...}'",
    reference: "HTL-005 (Severity: Minor) discourages inline CSS or JavaScript within HTL templates. What is the recommended approach for component styling and behavior?",
    explanation:
      "HTL-005 (Minor): AEM Client Libraries (cq:ClientLibraryFolder) are the correct way to deliver CSS and JavaScript. They are versioned (via md5 fingerprinting in AEM CS), cached by the Dispatcher as long-lived static assets, combinable via categories to reduce HTTP requests, and tree-shaken in modern AEM setups. Inline CSS/JS in HTL is not cached, cannot be combined with other component styles, and pollutes the HTML response.",
    category: "HTL / Sightly",
  },
  {
    id: "cq-058",
    title: "numberLiteral allows only numeric characters (no quotes) for JS numeric values; styleToken allows only safe CSS identifiers (no special chars) for CSS values",
    reference: "What is the purpose of HTL's context='numberLiteral' and context='styleToken' output contexts?",
    explanation:
      "HTL strict contexts: context='numberLiteral' restricts output to numeric characters only (digits, plus/minus signs, decimal point, exponent notation) — safe for embedding in JavaScript number literals without quotes. context='styleToken' restricts output to CSS-safe identifier characters (alphanumerics, hyphens, underscores) — safe for dynamic CSS class names or property values in style attributes. Both use allowlist filtering: any character not in the allowed set is stripped.",
    category: "HTL / Sightly",
  },
]
