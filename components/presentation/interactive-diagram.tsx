/**
 * Interactive Diagram Component
 * Base component for SVG-based interactive diagrams
 */

"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import type { DiagramData } from "@/lib/slides-content"

interface InteractiveDiagramProps {
  diagram: DiagramData
  className?: string
}

export function InteractiveDiagram({ diagram, className }: InteractiveDiagramProps) {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null)

  // Render different diagram types
  const renderDiagram = () => {
    switch (diagram.type) {
      case "architecture":
        return <ArchitectureDiagram diagram={diagram} onHover={setHoveredElement} />
      case "flow":
        return <FlowDiagram diagram={diagram} onHover={setHoveredElement} />
      case "tree":
        return <TreeDiagram diagram={diagram} onHover={setHoveredElement} />
      case "comparison":
        return <ComparisonDiagram diagram={diagram} onHover={setHoveredElement} />
      default:
        return <DefaultDiagram diagram={diagram} />
    }
  }

  return (
    <div className={cn("relative rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm", className)}>
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-white">{diagram.description}</h3>
      </div>
      
      <div className="flex justify-center">
        {renderDiagram()}
      </div>

      {/* Hover Info */}
      {hoveredElement && (
        <div className="mt-4 rounded-lg bg-blue-500/20 border border-blue-400/40 px-4 py-2 text-sm text-blue-200">
          {diagram.elements?.find(el => el.id === hoveredElement)?.tooltip || hoveredElement}
        </div>
      )}
    </div>
  )
}

// Architecture Diagram (3 layers)
function ArchitectureDiagram({ 
  diagram, 
  onHover 
}: { 
  diagram: DiagramData
  onHover: (id: string | null) => void 
}) {
  const layers = diagram.elements || [
    { id: "osgi", label: "OSGi", tooltip: "Application container" },
    { id: "sling", label: "Sling", tooltip: "Web framework" },
    { id: "jcr", label: "JCR", tooltip: "Content repository" }
  ]

  return (
    <svg viewBox="0 0 400 300" className="w-full max-w-lg">
      {layers.map((layer, idx) => {
        const y = 50 + (idx * 80)
        const colors = ["#3b82f6", "#8b5cf6", "#ec4899"]
        
        return (
          <g 
            key={layer.id}
            onMouseEnter={() => onHover(layer.id)}
            onMouseLeave={() => onHover(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          >
            <rect
              x="50"
              y={y}
              width="300"
              height="60"
              rx="8"
              fill={colors[idx]}
              fillOpacity="0.2"
              stroke={colors[idx]}
              strokeWidth="2"
            />
            <text
              x="200"
              y={y + 35}
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
            >
              {layer.label}
            </text>
          </g>
        )
      })}
      
      {/* Arrows */}
      {layers.slice(0, -1).map((_, idx) => (
        <path
          key={`arrow-${idx}`}
          d={`M 200 ${50 + (idx * 80) + 60} L 200 ${50 + ((idx + 1) * 80)}`}
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.4"
          markerEnd="url(#arrowhead)"
        />
      ))}
      
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="white" fillOpacity="0.4" />
        </marker>
      </defs>
    </svg>
  )
}

// Flow Diagram
function FlowDiagram({ 
  diagram, 
  onHover 
}: { 
  diagram: DiagramData
  onHover: (id: string | null) => void 
}) {
  const steps = diagram.elements || [
    { id: "request", label: "Request", tooltip: "HTTP Request" },
    { id: "resolve", label: "Resolve", tooltip: "URL to Resource" },
    { id: "process", label: "Process", tooltip: "Execute Logic" },
    { id: "render", label: "Render", tooltip: "Generate Response" }
  ]

  return (
    <svg viewBox="0 0 600 200" className="w-full max-w-2xl">
      {steps.map((step, idx) => {
        const x = 50 + (idx * 140)
        
        return (
          <g key={step.id}>
            <g
              onMouseEnter={() => onHover(step.id)}
              onMouseLeave={() => onHover(null)}
              className="cursor-pointer transition-opacity hover:opacity-80"
            >
              <rect
                x={x}
                y="70"
                width="100"
                height="60"
                rx="8"
                fill="#6366f1"
                fillOpacity="0.3"
                stroke="#6366f1"
                strokeWidth="2"
              />
              <text
                x={x + 50}
                y="105"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="600"
              >
                {step.label}
              </text>
            </g>
            
            {/* Arrow to next step */}
            {idx < steps.length - 1 && (
              <path
                d={`M ${x + 100} 100 L ${x + 140} 100`}
                stroke="white"
                strokeWidth="2"
                strokeOpacity="0.5"
                markerEnd="url(#arrowhead-flow)"
              />
            )}
          </g>
        )
      })}
      
      <defs>
        <marker
          id="arrowhead-flow"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="5"
          orient="auto"
        >
          <polygon points="0 0, 10 5, 0 10" fill="white" fillOpacity="0.5" />
        </marker>
      </defs>
    </svg>
  )
}

// Tree Diagram
function TreeDiagram({ 
  diagram, 
  onHover 
}: { 
  diagram: DiagramData
  onHover: (id: string | null) => void 
}) {
  const nodes = [
    { id: "root", label: "/", x: 300, y: 30, level: 0 },
    { id: "content", label: "content", x: 150, y: 120, level: 1 },
    { id: "apps", label: "apps", x: 300, y: 120, level: 1 },
    { id: "libs", label: "libs", x: 450, y: 120, level: 1 },
    { id: "pages", label: "pages", x: 100, y: 210, level: 2 },
    { id: "dam", label: "dam", x: 200, y: 210, level: 2 }
  ]

  const connections = [
    { from: "root", to: "content" },
    { from: "root", to: "apps" },
    { from: "root", to: "libs" },
    { from: "content", to: "pages" },
    { from: "content", to: "dam" }
  ]

  return (
    <svg viewBox="0 0 600 250" className="w-full max-w-2xl">
      {/* Connections */}
      {connections.map((conn, idx) => {
        const from = nodes.find(n => n.id === conn.from)
        const to = nodes.find(n => n.id === conn.to)
        if (!from || !to) return null
        
        return (
          <line
            key={idx}
            x1={from.x}
            y1={from.y + 20}
            x2={to.x}
            y2={to.y - 20}
            stroke="white"
            strokeWidth="2"
            strokeOpacity="0.3"
          />
        )
      })}
      
      {/* Nodes */}
      {nodes.map((node) => (
        <g
          key={node.id}
          onMouseEnter={() => onHover(node.id)}
          onMouseLeave={() => onHover(null)}
          className="cursor-pointer"
        >
          <circle
            cx={node.x}
            cy={node.y}
            r="30"
            fill={node.level === 0 ? "#f59e0b" : node.level === 1 ? "#3b82f6" : "#8b5cf6"}
            fillOpacity="0.3"
            stroke={node.level === 0 ? "#f59e0b" : node.level === 1 ? "#3b82f6" : "#8b5cf6"}
            strokeWidth="2"
            className="transition-all hover:fillOpacity-50"
          />
          <text
            x={node.x}
            y={node.y + 5}
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  )
}

// Comparison Table as Diagram
function ComparisonDiagram({ 
  diagram 
}: { 
  diagram: DiagramData
  onHover?: (id: string | null) => void 
}) {
  return (
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-blue-400/40 bg-blue-500/10 p-4">
          <h4 className="mb-3 text-center font-semibold text-blue-300">AEM 6.5</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Self-hosted infrastructure</li>
            <li>• Manual updates</li>
            <li>• Fixed capacity</li>
            <li>• Single environment</li>
          </ul>
        </div>
        <div className="rounded-lg border border-purple-400/40 bg-purple-500/10 p-4">
          <h4 className="mb-3 text-center font-semibold text-purple-300">AEM Cloud Service</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>• Managed by Adobe</li>
            <li>• Automatic updates</li>
            <li>• Auto-scaling</li>
            <li>• Multiple environments</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Default/Placeholder Diagram
function DefaultDiagram({ diagram }: { diagram: DiagramData }) {
  return (
    <div className="flex h-64 w-full max-w-2xl items-center justify-center rounded-lg border-2 border-dashed border-white/20">
      <div className="text-center">
        <p className="text-white/60">📊 {diagram.description}</p>
        <p className="mt-2 text-sm text-white/40">Interactive diagram</p>
      </div>
    </div>
  )
}
