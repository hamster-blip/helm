"use client";

import { useState } from "react";
import { X, RotateCcw } from "lucide-react";

export default function LandscapeTip() {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center gap-3 rounded-lg border border-paper-border bg-paper-surface px-4 py-3 shadow-md portrait:flex landscape:hidden md:hidden">
            <RotateCcw className="h-4 w-4 shrink-0 text-teal-dark" strokeWidth={1.5} />
            <p className="flex-1 font-body text-[12px] text-paper-muted">
                For the best experience, rotate your device to <span className="font-semibold text-paper-text">landscape</span>.
            </p>
            <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                className="shrink-0"
            >
                <X className="h-4 w-4 text-paper-dim" strokeWidth={1.5} />
            </button>
        </div>
    );
}
