import type { Concept } from "../types"

export const samlConfigurationConcepts: Concept[] = [
  {
    id: "auth-052",
    category: "SAML 2.0 — Configuration",
    title: "Deployment Manager access to Cloud Manager, AEM Administrator access to the environment, and administrator access to the IDP",
    reference: "What access is required as a prerequisite for setting up SAML 2.0 authentication?",
    explanation:
      "Prerequisites for SAML 2.0 setup include Deployment Manager access to Cloud Manager, AEM Administrator access to the AEMaaCS environment, administrator access to the IDP, and optionally a public/private keypair for encrypting SAML payloads.",
  },
  {
    id: "auth-053",
    category: "SAML 2.0 — Configuration",
    title: "AEM's Global Trust Store, accessed via Tools > Security > Trust Store",
    reference: "Where in AEM do you install the IDP's public certificate for SAML validation?",
    explanation:
      "The IDP's public certificate is installed into AEM's Global Trust Store via Tools > Security > Trust Store. AEM uses this stored certificate to verify the digital signature of SAML assertions received from the IDP.",
  },
  {
    id: "auth-054",
    category: "SAML 2.0 — Configuration",
    title: "It must be replicated from Author to Publish, because SAML authentication only runs on Publish",
    reference: "Why must the Global Trust Store be replicated after the IDP certificate is added on Author?",
    explanation:
      "The Global Trust Store is configured on AEM Author, but since SAML only runs on AEM Publish, that trust store must be replicated to Publish so the IDP's public certificate is accessible where SAML validation actually happens.",
  },
  {
    id: "auth-055",
    category: "SAML 2.0 — Configuration",
    title: "By creating a package with a filter on /etc/truststore and replicating it to Publish",
    reference: "How do you replicate the Global Trust Store node to AEM Publish?",
    explanation:
      "You create a package (Tools > Deployment > Packages) with a filter for the root path /etc/truststore, build it, and then use More > Replicate to activate the Global Trust Store node on AEM Publish.",
  },
  {
    id: "auth-056",
    category: "SAML 2.0 — Configuration",
    title: "The authentication-service keystore",
    reference: "Which AEM keystore is essential for authentication operations like SSL certificates and token signing?",
    explanation:
      "The authentication-service keystore is essential for the security and integrity of authentication operations: generating and storing SSL certificates, signing and verifying tokens, and encrypting/decrypting data.",
  },
  {
    id: "auth-057",
    category: "SAML 2.0 — Configuration",
    title: "When handleLogout is set to true, or when AuthnRequest signing or SAML assertion encryption is required",
    reference: "When is creating an authentication-service keystore required for SAML?",
    explanation:
      "Creating an authentication-service keystore is required when the SAML 2.0 authentication handler's handleLogout OSGi property is set to true, or when AuthnRequest signing or SAML assertion encryption is needed.",
  },
  {
    id: "auth-058",
    category: "SAML 2.0 — Configuration",
    title: "The Adobe Granite SAML 2.0 Authentication Handler, implemented as an OSGi factory configuration",
    reference: "What OSGi component manages AEM's SAML configuration, and what kind of configuration is it?",
    explanation:
      "AEM's SAML configuration is managed through the Adobe Granite SAML 2.0 Authentication Handler OSGi configuration. It's a factory configuration, meaning you can define multiple SAML setups for different resource trees within the AEMaaCS Publish service.",
  },
  {
    id: "auth-059",
    category: "SAML 2.0 — Configuration",
    title: "path, idpCertAlias, idpIdentifier, idpUrl, serviceProviderEntityId, createUser, synchronizeAttributes, addGroupMemberships, defaultGroups",
    reference: "What are the key properties of the SAML Authentication Handler OSGi configuration?",
    explanation:
      "Key properties include: path (which content trees SAML protects), idpCertAlias, idpIdentifier, idpUrl (IDP details), serviceProviderEntityId (AEM's own identity), createUser, synchronizeAttributes, addGroupMemberships, and defaultGroups — controlling how AEM handles the resulting user.",
  },
  {
    id: "auth-060",
    category: "SAML 2.0 — Configuration",
    title: "It's multi-site friendly — different SAML configurations can target different site trees via the path property",
    reference: "Why does it matter that the SAML Authentication Handler is a factory configuration?",
    explanation:
      "Because it's a factory configuration, you can create multiple named instances of the SAML handler, each scoped to a different path. This is particularly useful for multi-site AEM deployments that need distinct SAML setups per site.",
  },
  {
    id: "auth-061",
    category: "SAML 2.0 — Configuration",
    title: "com.adobe.granite.auth.saml.SamlAuthenticationHandler~<name>.cfg.json under /ui.config/.../osgiconfig/config.publish/",
    reference: "What is the file naming pattern for a SAML Authentication Handler OSGi configuration file, and where does it live?",
    explanation:
      "The configuration file is named com.adobe.granite.auth.saml.SamlAuthenticationHandler~<identifier>.cfg.json, placed at /ui.config/src/main/content/jcr_root/<project>/osgiconfig/config.publish/ — the config.publish run-mode folder, since SAML only applies to Publish.",
  },
  {
    id: "auth-062",
    category: "SAML 2.0 — Configuration",
    title: "If the IDP posts from a different origin than AEM Publish, its requests must be explicitly allowed",
    reference: "When does the AEM Publish Referrer Filter need to be updated for SAML to work?",
    explanation:
      "During SAML authentication, the IDP sends an HTTP POST to AEM Publish's saml_login endpoint. If the IDP and AEM Publish are on different origins, the Referrer Filter must be configured via OSGi to allow POST requests from the IDP's origin.",
  },
  {
    id: "auth-063",
    category: "SAML 2.0 — Configuration",
    title: "Because the IDP's POST to saml_login often comes from a different host/domain, requiring CORS to accept it",
    reference: "Why does AEM Publish's CORS policy need to be configured for SAML authentication?",
    explanation:
      "When the IDP initiates a client-side HTTP POST to AEM Publish's saml_login endpoint from a different host or domain, CORS must be configured to allow that cross-origin request, listing the IDP's origin, the saml_login path, and the POST method.",
  },
  {
    id: "auth-064",
    category: "SAML 2.0 — Configuration",
    title: "Include \"null\" in the alloworigin list, since local testing can produce a null Origin header",
    reference: "What special CORS consideration applies when testing SAML locally against localhost:4503?",
    explanation:
      "When testing SAML with the local AEM SDK on localhost:4503, the IDP might set the Origin header to null. To handle this, you need to include the literal string \"null\" in the CORS configuration's alloworigin list.",
  },
  {
    id: "auth-065",
    category: "SAML 2.0 — Configuration",
    title: "Committing the OSGi configuration to Git and deploying it through a Full Stack Cloud Manager pipeline",
    reference: "How do you deploy SAML configuration changes to an AEMaaCS environment?",
    explanation:
      "SAML configuration changes are code, not console clicks: OSGi configuration files are committed to the Cloud Manager Git branch (e.g. develop) and deployed using a Full Stack deployment pipeline, ensuring the settings are applied consistently across the environment.",
  },
]
