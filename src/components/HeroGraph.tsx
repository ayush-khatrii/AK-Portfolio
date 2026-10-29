const desktopPath = "M70 200 H205 L310 82 H455 L550 185 H670 L780 88 H890";
const mobilePath = "M36 60 H250 V138 H95 V210 H260 V300 H324";

type GraphNode = {
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  anchor?: "start" | "end";
  label: string;
  tools: string;
};

const desktopNodes: GraphNode[] = [
  { x: 205, y: 200, labelX: 205, labelY: 228, label: "Interface", tools: "React / Next.js" },
  { x: 455, y: 82, labelX: 455, labelY: 57, label: "Logic", tools: "Node.js / APIs" },
  { x: 670, y: 185, labelX: 670, labelY: 213, label: "Data", tools: "PostgreSQL / MongoDB" },
  { x: 890, y: 88, labelX: 890, labelY: 116, anchor: "end", label: "Realtime", tools: "Ably / Redis" },
];

const mobileNodes: GraphNode[] = [
  { x: 36, y: 60, labelX: 36, labelY: 87, label: "Interface", tools: "React / Next.js" },
  { x: 250, y: 138, labelX: 250, labelY: 112, anchor: "end", label: "Logic", tools: "Node.js / APIs" },
  { x: 95, y: 210, labelX: 95, labelY: 238, label: "Data", tools: "PostgreSQL / MongoDB" },
  { x: 260, y: 300, labelX: 260, labelY: 324, anchor: "end", label: "Realtime", tools: "Ably / Redis" },
];

function Graph({ mobile = false }: { mobile?: boolean }) {
  const path = mobile ? mobilePath : desktopPath;
  const nodes = mobile ? mobileNodes : desktopNodes;

  return (
    <svg
      className={mobile ? "h-full w-full lg:hidden" : "hidden h-full w-full lg:block"}
      viewBox={mobile ? "0 0 360 360" : "0 0 960 300"}
      fill="none"
      role="img"
      aria-label="Full-stack flow from interface through application logic and data to realtime updates"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} className="hero-graph-line" />
      <path d={path} pathLength={100} className="hero-graph-signal" />
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="11" className="hero-graph-halo" />
          <circle cx={node.x} cy={node.y} r="4" className="hero-graph-node" />
          <text x={node.labelX} y={node.labelY} textAnchor={node.anchor ?? "start"} className="hero-graph-label">
            {node.label}
          </text>
          <text x={node.labelX} y={node.labelY + 15} textAnchor={node.anchor ?? "start"} className="hero-graph-tools">
            {node.tools}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function HeroGraph() {
  return (
    <div className="hero-system-map relative flex min-h-[300px] flex-1 flex-col overflow-hidden border-b border-line px-5 py-4 sm:px-8">
      <div aria-hidden="true" className="hero-system-grid pointer-events-none absolute inset-0" />
      <div className="relative flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        <span className="text-primary">How I build</span>
        <span className="hidden sm:inline">A full-stack flow</span>
      </div>
      <div className="relative my-auto h-[290px] w-full sm:h-[260px] lg:h-[240px]">
        <Graph mobile />
        <Graph />
      </div>
      <div className="relative flex items-center justify-between gap-3 font-mono text-[10px] text-muted-foreground">
        <span>From idea to working product</span>
        <span className="hidden sm:inline">Interface → logic → data → realtime</span>
      </div>
    </div>
  );
}
