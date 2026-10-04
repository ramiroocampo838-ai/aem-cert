import type { Concept } from "../types"

export const delegationAndModelInterfacesConcepts: Concept[] = [
  {
    id: "comp-066",
    category: "Delegation & Model Interfaces",
    title: "Because their implementation classes are private and can change",
    reference: "Why must you never extend the Core Components' implementation classes directly?",
    explanation:
      "The speech says the Core Components implement their models privately. Because the implementation classes are private and can change, you must never extend them.",
  },
  {
    id: "comp-067",
    category: "Delegation & Model Interfaces",
    title: "Use the delegation pattern",
    reference: "What pattern should you use to extend or customize a Core Component model?",
    explanation:
      "The speech says you must never extend the private Core Component implementation classes and should use the delegation pattern instead.",
  },
  {
    id: "comp-068",
    category: "Delegation & Model Interfaces",
    title: "The public Core Component model interface",
    reference: "In the Model Interfaces pattern, what does your custom model implement?",
    explanation:
      "The speech gives com.adobe.cq.wcm.core.components.models.Title as an example and says your own model implements that public interface.",
  },
  {
    id: "comp-069",
    category: "Delegation & Model Interfaces",
    title: "It registers your class as an implementation of the interface",
    reference: "What is the purpose of the adapters parameter in @Model for a proxy model implementation?",
    explanation:
      "The speech says that in @Model(... adapters = Title.class ...), the adapters parameter registers your class as an implementation of the interface.",
  },
  {
    id: "comp-070",
    category: "Delegation & Model Interfaces",
    title: "It binds the model to your proxy component's resource type",
    reference: "What does the resourceType parameter do in a delegated proxy model?",
    explanation:
      "The speech says the resourceType parameter binds the model to your proxy component's resource type.",
  },
  {
    id: "comp-071",
    category: "Delegation & Model Interfaces",
    title: "Use @Self @Via(type = ResourceSuperType.class) on the interface field",
    reference: "Given a scenario where you need the parent Core Component's model inside your proxy model, how does the speech say to inject it?",
    explanation:
      "The speech gives the exact pattern: @Self @Via(type = ResourceSuperType.class) private Title title.",
  },
  {
    id: "comp-072",
    category: "Delegation & Model Interfaces",
    title: "Sling Models picks your implementation instead of the Core Component's",
    reference: "Because of resourceType binding, what happens when the Title interface is adapted for the proxy resource?",
    explanation:
      "The speech says that because of the resourceType binding, Sling Models picks your implementation for the proxy resource, not the Core Component's. It calls this double binding in the Model Interfaces pattern.",
  },
]
