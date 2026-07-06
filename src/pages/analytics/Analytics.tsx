import { useState, type PointerEvent } from "react";
import { ChevronRight, Eye, Share2, TrendingUp } from "lucide-react";

import PageHeader from "../../components/PageHeader/PageHeader";

type TimeRange = "Today" | "Week" | "Month" | "Year" | "All Time";

type ActivityType = "view" | "share";

interface ChartPoint {
  label: string;
  value: number;
}

interface ActivityItem {
  type: ActivityType;
  title: string;
  subtitle: string;
  time: string;
}

interface SummaryCardConfig {
  label: string;
  period: string;
  value: string;
  helper: string;
  icon: typeof Eye | typeof TrendingUp | typeof Share2;
  iconWrap: string;
}

interface AnalyticsRangeData {
  title: string;
  subtitle: string;
  chart: ChartPoint[];
  hoveredIndex: number;
  summaryCards: [SummaryCardConfig, SummaryCardConfig, SummaryCardConfig];
}

const chartWidth = 920;
const chartHeight = 290;
const chartPadding = {
  top: 18,
  right: 36,
  bottom: 48,
  left: 48,
};
const chartPlotBottom = chartHeight - chartPadding.bottom;

const timeRanges: TimeRange[] = ["Today", "Week", "Month", "Year", "All Time"];

const analyticsData: Record<TimeRange, AnalyticsRangeData> = {
  Today: {
    title: "Profile Visits",
    subtitle: "Real-time engagement across the day",
    chart: [
      { label: "12 AM", value: 6 },
      { label: "2 AM", value: 5 },
      { label: "4 AM", value: 4 },
      { label: "6 AM", value: 7 },
      { label: "8 AM", value: 15 },
      { label: "10 AM", value: 21 },
      { label: "12 PM", value: 18 },
      { label: "2 PM", value: 24 },
      { label: "4 PM", value: 34 },
      { label: "6 PM", value: 17 },
      { label: "8 PM", value: 29 },
      { label: "10 PM", value: 18 },
    ],
    hoveredIndex: 8,
    summaryCards: [
      {
        label: "Views",
        period: "Today",
        value: "24",
        helper: "+20% vs yesterday",
        icon: Eye,
        iconWrap: "bg-blue-50 text-blue-600",
      },
      {
        label: "Total Views",
        period: "All Time",
        value: "1,284",
        helper: "Steady growth",
        icon: TrendingUp,
        iconWrap: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Total Shares",
        period: "All Time",
        value: "92",
        helper: "Shared via app",
        icon: Share2,
        iconWrap: "bg-purple-50 text-purple-600",
      },
    ],
  },
  Week: {
    title: "Profile Visits",
    subtitle: "Last 7 days of card activity",
    chart: [
      { label: "Mon", value: 14 },
      { label: "Tue", value: 18 },
      { label: "Wed", value: 16 },
      { label: "Thu", value: 20 },
      { label: "Fri", value: 26 },
      { label: "Sat", value: 33 },
      { label: "Sun", value: 28 },
    ],
    hoveredIndex: 5,
    summaryCards: [
      {
        label: "Views",
        period: "Week",
        value: "175",
        helper: "+12% vs last week",
        icon: Eye,
        iconWrap: "bg-blue-50 text-blue-600",
      },
      {
        label: "Total Views",
        period: "All Time",
        value: "1,284",
        helper: "Consistent growth",
        icon: TrendingUp,
        iconWrap: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Total Shares",
        period: "All Time",
        value: "92",
        helper: "Shared via app",
        icon: Share2,
        iconWrap: "bg-purple-50 text-purple-600",
      },
    ],
  },
  Month: {
    title: "Profile Visits",
    subtitle: "Month-over-month activity trend",
    chart: [
      { label: "W1", value: 82 },
      { label: "W2", value: 96 },
      { label: "W3", value: 121 },
      { label: "W4", value: 115 },
    ],
    hoveredIndex: 2,
    summaryCards: [
      {
        label: "Views",
        period: "Month",
        value: "414",
        helper: "+28% vs last month",
        icon: Eye,
        iconWrap: "bg-blue-50 text-blue-600",
      },
      {
        label: "Total Views",
        period: "All Time",
        value: "1,284",
        helper: "Steady growth",
        icon: TrendingUp,
        iconWrap: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Total Shares",
        period: "All Time",
        value: "92",
        helper: "Shared via app",
        icon: Share2,
        iconWrap: "bg-purple-50 text-purple-600",
      },
    ],
  },
  Year: {
    title: "Profile Visits",
    subtitle: "Rolling year performance overview",
    chart: [
      { label: "Q1", value: 320 },
      { label: "Q2", value: 420 },
      { label: "Q3", value: 520 },
      { label: "Q4", value: 600 },
    ],
    hoveredIndex: 3,
    summaryCards: [
      {
        label: "Views",
        period: "Year",
        value: "1,860",
        helper: "+34% vs last year",
        icon: Eye,
        iconWrap: "bg-blue-50 text-blue-600",
      },
      {
        label: "Total Views",
        period: "All Time",
        value: "1,284",
        helper: "Steady growth",
        icon: TrendingUp,
        iconWrap: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Total Shares",
        period: "All Time",
        value: "92",
        helper: "Shared via app",
        icon: Share2,
        iconWrap: "bg-purple-50 text-purple-600",
      },
    ],
  },
  "All Time": {
    title: "Profile Visits",
    subtitle: "Lifetime performance across all channels",
    chart: [
      { label: "2021", value: 88 },
      { label: "2022", value: 121 },
      { label: "2023", value: 162 },
      { label: "2024", value: 214 },
      { label: "2025", value: 302 },
      { label: "2026", value: 384 },
    ],
    hoveredIndex: 5,
    summaryCards: [
      {
        label: "Views",
        period: "All Time",
        value: "1,284",
        helper: "+51% vs prior period",
        icon: Eye,
        iconWrap: "bg-blue-50 text-blue-600",
      },
      {
        label: "Total Views",
        period: "All Time",
        value: "1,284",
        helper: "Steady growth",
        icon: TrendingUp,
        iconWrap: "bg-emerald-50 text-emerald-600",
      },
      {
        label: "Total Shares",
        period: "All Time",
        value: "92",
        helper: "Shared via app",
        icon: Share2,
        iconWrap: "bg-purple-50 text-purple-600",
      },
    ],
  },
};

const activityItems: ActivityItem[] = [
  { type: "view", title: "Card Viewed", subtitle: "From QR Code", time: "2 mins ago" },
  { type: "share", title: "Card Shared", subtitle: "Shared via WhatsApp", time: "Yesterday, 2:14 PM" },
  { type: "view", title: "Card Viewed", subtitle: "From Direct Link", time: "Yesterday, 11:40 AM" },
  { type: "view", title: "Card Viewed", subtitle: "From QR Code", time: "Jul 10, 8:12 PM" },
  { type: "share", title: "Card Shared", subtitle: "Shared via Email", time: "Jul 10, 6:02 PM" },
];

function buildSvgPath(data: ChartPoint[], width: number, height: number) {
  const maxValue = Math.max(...data.map((point) => point.value));
  const minValue = Math.min(...data.map((point) => point.value));
  const horizontalStep = (width - chartPadding.left - chartPadding.right) / (data.length - 1);
  const plotHeight = height - chartPadding.top - chartPadding.bottom;
  const scaleY = (value: number) => {
    const normalized = (value - minValue) / (maxValue - minValue || 1);
    return chartPadding.top + (1 - normalized) * plotHeight;
  };

  const points = data.map((point, index) => ({
    x: chartPadding.left + index * horizontalStep,
    y: scaleY(point.value),
  }));

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");

  const areaPath = `${linePath} L ${(width - chartPadding.right).toFixed(1)} ${chartPlotBottom.toFixed(1)} L ${chartPadding.left.toFixed(1)} ${chartPlotBottom.toFixed(1)} Z`;

  return { points, linePath, areaPath };
}

function formatTooltipLabel(range: TimeRange, label: string) {
  return range === "Today" ? `Today, ${label}` : label;
}

function Analytics() {
  const [selectedRange, setSelectedRange] = useState<TimeRange>("Today");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const currentData = analyticsData[selectedRange];
  const { points, linePath, areaPath } = buildSvgPath(currentData.chart, chartWidth, chartHeight);
  const activeHoverIndex = hoveredIndex === null ? null : Math.min(hoveredIndex, currentData.chart.length - 1);
  const hoveredData = activeHoverIndex === null ? null : currentData.chart[activeHoverIndex];
  const hoveredPoint = activeHoverIndex === null ? null : points[activeHoverIndex];
  const axisLabels = currentData.chart.map((point: ChartPoint, index: number) => ({
    label: point.label,
    x: points[index]?.x ?? 0,
  }));
  const tooltipWidth = 96;
  const tooltipHeight = 56;
  const tooltipX = hoveredPoint ? Math.min(Math.max(hoveredPoint.x, tooltipWidth / 2 + 12), chartWidth - tooltipWidth / 2 - 12) : 0;
  const placeTooltipAbove = hoveredPoint ? hoveredPoint.y > 96 : false;
  const tooltipY = hoveredPoint
    ? placeTooltipAbove
      ? Math.max(hoveredPoint.y - tooltipHeight - 14, 12)
      : Math.min(hoveredPoint.y + 16, chartHeight - tooltipHeight - 12)
    : 0;
  const tooltipArrowX = hoveredPoint ? Math.min(Math.max(hoveredPoint.x - tooltipX, -tooltipWidth / 2 + 12), tooltipWidth / 2 - 12) : 0;

  const handleChartPointerMove = (event: PointerEvent<SVGSVGElement>) => {
    const svg = event.currentTarget;
    const screenMatrix = svg.getScreenCTM();

    if (!screenMatrix) {
      return;
    }

    const cursorPoint = svg.createSVGPoint();
    cursorPoint.x = event.clientX;
    cursorPoint.y = event.clientY;

    const svgPoint = cursorPoint.matrixTransform(screenMatrix.inverse());
    const pointerX = Math.min(Math.max(svgPoint.x, 0), chartWidth);
    const closestIndex = points.reduce((nearestIndex, point, index) => {
      const currentDistance = Math.abs(point.x - pointerX);
      const nearestDistance = Math.abs(points[nearestIndex].x - pointerX);

      return currentDistance < nearestDistance ? index : nearestIndex;
    }, 0);

    setHoveredIndex(closestIndex);
  };

  return (
      <div className="w-full space-y-6">
        <PageHeader title="Analytics" subtitle="Track how your digital business card is performing." />

        <div className="flex flex-wrap gap-2 rounded-md border border-border bg-surface p-1">
          {timeRanges.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setSelectedRange(range)}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition ${range === selectedRange ? "bg-primary text-white" : "text-text-secondary hover:bg-surface-container hover:text-text"}`}
            >
              {range}
            </button>
          ))}
        </div>

        <section className="card overflow-hidden">
          <div className="border-b border-border-light px-6 py-5">
            <p className="text-2xl font-bold text-primary">{currentData.title}</p>
            <p className="mt-1 text-xs text-text-secondary">{currentData.subtitle}</p>
          </div>

          <div className="relative overflow-hidden p-6">
            <div className="relative h-[290px] rounded-xl border border-border-light bg-[#fdfdfd]">
              <svg
                viewBox="0 0 920 290"
                className="h-full w-full touch-none"
                onPointerMove={handleChartPointerMove}
                onPointerLeave={() => setHoveredIndex(null)}
              >
                <defs>
                  <linearGradient id="analyticsAreaFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2f7d32" stopOpacity="0.22" />
                    <stop offset="70%" stopColor="#2f7d32" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#2f7d32" stopOpacity="0.01" />
                  </linearGradient>
                </defs>

                {[18, 74, 130, 186, 242].map((y) => (
                  <line key={y} x1={chartPadding.left} y1={y} x2={chartWidth - chartPadding.right} y2={y} stroke="#EBEBEB" strokeDasharray="2 6" />
                ))}

                {axisLabels.map((axisLabel: { label: string; x: number }) => (
                  <text key={axisLabel.label} x={axisLabel.x} y="276" textAnchor="middle" className="fill-text-secondary text-[10px]">
                    {axisLabel.label}
                  </text>
                ))}

                <path d={areaPath} fill="url(#analyticsAreaFill)" />
                <path d={linePath} fill="none" stroke="#2f7d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                {hoveredPoint ? <line x1={hoveredPoint.x} y1={chartPadding.top} x2={hoveredPoint.x} y2={chartPlotBottom} stroke="#2f7d32" strokeOpacity="0.24" strokeDasharray="4 6" /> : null}

                {points.map((point, index) => (
                  <circle key={currentData.chart[index].label} cx={point.x} cy={point.y} r={index === activeHoverIndex ? 5 : 3} fill={index === activeHoverIndex ? "#2f7d32" : "#B9D7BA"} />
                ))}

                {hoveredPoint && hoveredData ? (
                  <g className="pointer-events-none" transform={`translate(${tooltipX} ${tooltipY})`}>
                    {placeTooltipAbove ? (
                      <polygon points={`${tooltipArrowX - 8},56 ${tooltipArrowX + 8},56 ${tooltipArrowX},64`} fill="#ffffff" stroke="#D8D8D8" />
                    ) : (
                      <polygon points={`${tooltipArrowX - 8},0 ${tooltipArrowX + 8},0 ${tooltipArrowX},-8`} fill="#ffffff" stroke="#D8D8D8" />
                    )}
                    <rect x={-tooltipWidth / 2} y="0" width={tooltipWidth} height={tooltipHeight} rx="6" fill="#ffffff" stroke="#D8D8D8" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.12))" />
                    <text x="0" y="24" textAnchor="middle" className="fill-text text-lg font-semibold">
                      {hoveredData.value}
                    </text>
                    <text x="0" y="41" textAnchor="middle" className="fill-text-secondary text-[10px]">
                      {formatTooltipLabel(selectedRange, hoveredData.label)}
                    </text>
                  </g>
                ) : null}
              </svg>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {currentData.summaryCards.map((card: SummaryCardConfig) => {
            const Icon = card.icon;

            return (
              <article key={card.label} className="card p-6">
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${card.iconWrap}`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-text-secondary">{card.label}</div>
                    <div className="text-xs text-text-secondary">{card.period}</div>
                    <div className="mt-2 text-3xl font-semibold text-text">{card.value}</div>
                    <div className="mt-1 text-xs text-text-secondary">{card.helper}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <section className="card overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-border-light px-6 py-5">
            <div>
              <p className="text-2xl font-bold text-primary">Recent Activity</p>
            </div>

            <button type="button" className="inline-flex items-center gap-1 text-sm font-medium text-primary transition hover:text-primary-dark">
              View All
            </button>
          </div>

          <div>
            {activityItems.map((item, index) => {
              const iconClass = item.type === "view" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600";
              const Icon = item.type === "view" ? Eye : Share2;

              return (
                <div key={`${item.title}-${item.time}`} className={`flex items-center gap-4 px-6 py-4 ${index !== activityItems.length - 1 ? "border-b border-border-light" : ""}`}>
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${iconClass}`}>
                    <Icon className="h-4 w-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-text">{item.title}</div>
                    <div className="text-xs text-text-secondary">{item.subtitle}</div>
                  </div>

                  <div className="text-xs text-text-secondary">{item.time}</div>
                  <ChevronRight className="h-4 w-4 text-text-secondary" />
                </div>
              );
            })}
          </div>

          <div className="border-t border-border-light bg-surface-container px-4 py-3 text-center text-sm font-medium text-primary">
            View More
          </div>
        </section>
      </div>
  );
}

export default Analytics;
