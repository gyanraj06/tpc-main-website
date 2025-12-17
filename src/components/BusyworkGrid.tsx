
import { useId } from "react";
import { Lightning, Ticket, ChatCircleDots, ChartLineUp, Handshake, ArrowsClockwise } from '@phosphor-icons/react';

export default function BusyworkGrid() {
    return (
        <section className="pt-24 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 px-4">
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900">
                        How Trippechalo Eliminates the Busywork
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {grid.map((feature) => (
                        <div
                            key={feature.title}
                            className="relative bg-gradient-to-b from-neutral-100 to-white p-6 rounded-3xl overflow-hidden border border-neutral-200"
                        >
                            <Grid size={20} />
                            <div className="relative z-20 mb-4 text-blue-600">
                                {feature.icon}
                            </div>
                            <p className="text-base font-bold text-neutral-800 relative z-20 font-heading">
                                {feature.title}
                            </p>
                            <div className="text-neutral-600 mt-4 text-base font-normal relative z-20 font-body">
                                {feature.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const grid = [
    {
        title: "Instant Experience Publishing",
        description: "TPC auto-creates the description, poster, pricing suggestions, and SEO text in seconds. Publish your experience with almost zero manual work.",
        icon: <Lightning size={32} weight="fill" />,
    },
    {
        title: "Zero-Stress Ticketing & Payments",
        description: "TPC automates ticketing, payouts, QR codes, attendee lists, and confirmations – all synced in real time.",
        icon: <Ticket size={32} weight="fill" />,
    },
    {
        title: "Automated Attendee Communication",
        description: (
            <>
                TPC sends automated WhatsApp, SMS, and email updates for:
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Registration confirmations</li>
                    <li>Audition details</li>
                    <li>Payment reminders</li>
                    <li>Entry passes</li>
                    <li>Day-of instructions</li>
                </ul>
            </>
        ),
        icon: <ChatCircleDots size={32} weight="fill" />,
    },
    {
        title: "Smart Insights Instead of Guesswork",
        description: (
            <>
                Trippechalo provides AI-powered insights:
                <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Who’s visiting your page</li>
                    <li>When people drop off</li>
                    <li>Optimal pricing windows</li>
                    <li>Predicted attendance</li>
                    <li>Repeat visitor tracking</li>
                </ul>
                <div className="mt-2">You get clarity that’s impossible with traditional tools.</div>
            </>
        ),
        icon: <ChartLineUp size={32} weight="fill" />,
    },
    {
        title: "Vendor & Sponsor Discovery Done for You",
        description: "Finding DJs, anchors, photographers, venues, partners, or sponsors typically takes days. Trippechalo connects you instantly to a curated vendor pool and brand sponsors using AI-matching.",
        icon: <Handshake size={32} weight="fill" />,
    },
    {
        title: "Recurring Events Become 1-Click",
        description: "Instead of recreating your entire event from scratch every time, Trippechalo lets you duplicate and relaunch experiences with one click. Work once → host again → earn more.",
        icon: <ArrowsClockwise size={32} weight="fill" />,
    },
];

export const Grid = ({
    pattern,
    size,
}: {
    pattern?: number[][];
    size?: number;
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-black/10 fill-black/10"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}`}
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
