/** FAB anchor — bottom-corner placement supported by the widget. */
type SitepingPosition = "bottom-right" | "bottom-left";
/** Visual theme — `auto` resolves to `light` or `dark` via system preference. */
type SitepingTheme = "light" | "dark" | "auto";
/** Built-in UI locales shipped with the widget. */
declare const BUILTIN_LOCALES: readonly ["en", "fr", "de", "es", "it", "pt", "ru"];
type BuiltinLocale = (typeof BUILTIN_LOCALES)[number];
/**
 * Locale identifier accepted by the widget. Built-in locales are kept as
 * literal strings so editors auto-complete them, but arbitrary BCP-47 tags
 * are also accepted (custom dictionaries registered via `registerLocale`).
 */
type SitepingLocale = BuiltinLocale | (string & {});
/** Reasons reported through `SitepingConfig.onSkip`. */
type SitepingSkipReason = "production" | "mobile";
/** Per-channel + per-buffer-size diagnostics configuration. */
interface DiagnosticsCaptureOptions {
    console?: boolean;
    network?: boolean;
    maxConsoleEntries?: number;
    maxNetworkEntries?: number;
}
/** Identity payload supplied by the host application — bypasses the modal. */
interface SitepingIdentity {
    name: string;
    email: string;
}
/** Deep-link configuration — controls how a feedback id is read from the URL. */
interface SitepingDeepLinkOptions {
    /** Query parameter name carrying the feedback id. Defaults to `"siteping"`. */
    param?: string;
}
/** Configuration options for the Siteping widget. */
interface SitepingConfig {
    /** HTTP endpoint that receives feedbacks (e.g. '/api/siteping'). Required unless `store` is provided. */
    endpoint?: string | undefined;
    /** Required — project identifier used to scope feedbacks */
    projectName: string;
    /** Direct store for client-side mode. When set, bypasses HTTP and uses the store directly in the browser. */
    store?: SitepingStore | undefined;
    /** FAB position — defaults to 'bottom-right' */
    position?: SitepingPosition;
    /**
     * @deprecated This annotation-only fork never renders a marker-visibility
     * FAB action, so this option has no effect. It remains accepted for
     * compatibility with the upstream SitePing configuration type.
     */
    showAnnotationsToggle?: boolean | undefined;
    /** Accent color for the widget UI — defaults to '#0066ff' */
    accentColor?: string;
    /**
     * Render the widget even when it would normally be skipped — this bypasses
     * BOTH the production-environment guard AND the mobile-viewport guard.
     * Defaults to false. Use it for dedicated review tools, staging environments,
     * or responsive testing where you always want the widget present.
     */
    forceShow?: boolean;
    /**
     * Minimum viewport width (px) at or above which the widget renders. Below it,
     * the widget is skipped and `onSkip("mobile")` fires. Defaults to `768`.
     *
     * Set lower (e.g. `0`) to allow narrow/mobile viewports, or use `forceShow`
     * to bypass the viewport check entirely.
     */
    minViewportWidth?: number | undefined;
    /** Enable debug logging of lifecycle events — defaults to false */
    debug?: boolean;
    /** Color theme — defaults to 'light' */
    theme?: SitepingTheme;
    /** UI locale — defaults to 'en'. Built-in: en, fr, de, es, it, pt (Brazilian), ru. Any other string falls back to English. */
    locale?: SitepingLocale | undefined;
    /**
     * Returns the current page scope for annotations and panel filtering.
     * Called on initial markers load and on `instance.refresh()`.
     *
     * Default: `{ url: window.location.pathname, urlPattern: null }` — annotations
     * are scoped strictly to the current pathname.
     *
     * Apps with parameterized routes (e.g. React Router) should return both the
     * concrete URL and the route template (e.g. `/orders/:orderId`) so the panel
     * can offer a "this type of page" filter that groups feedbacks by template.
     */
    getPageScope?: (() => PageScope) | undefined;
    /**
     * When true (default), the widget filters initial markers and panel results
     * by `feedback.url === scope.url`, so annotations created on one page never
     * leak to other pages — even if their CSS selector accidentally matches.
     * Set to `false` to revert to the legacy project-wide behavior.
     */
    scopeAnnotationsByUrl?: boolean | undefined;
    /**
     * Capture a JPEG screenshot of the annotated area on submit. Defaults to
     * `false` — opt-in because:
     *
     * - it adds runtime weight (~40 KB gzip dynamic chunk for html2canvas,
     *   loaded only on first capture),
     * - it embeds page content in the feedback (privacy/GDPR consideration —
     *   inform end users in your widget host UI when enabling).
     *
     * `html2canvas` ships as a regular dependency of `@siteping/widget` so the
     * dynamic import always resolves; you don't need to install anything extra.
     *
     * **Masking sensitive elements:** add `data-siteping-ignore="true"` to any
     * element you do NOT want captured (password fields, credit-card forms,
     * API tokens shown in the UI, etc.). The capture predicate skips matching
     * elements *and their descendants*. Do this BEFORE turning on screenshots
     * in production — once a feedback is saved, the screenshot is in your DB
     * (or object storage) regardless of what was on the page.
     */
    enableScreenshot?: boolean | undefined;
    /**
     * Capture the last few `console.*` calls and failed network requests
     * (HTTP >= 400 or network error) at the moment a feedback is submitted.
     *
     * Lets reviewers replay the technical context that led to the report —
     * stack traces, 500 responses, dead third-party scripts. Great for the
     * "the page just doesn't work" feedback that contains zero detail.
     *
     * - `true` — capture with defaults (50 console / 20 network entries).
     * - `false` (default) — no capture, no monkey-patching.
     * - object — per-channel toggles + custom buffer sizes.
     *
     * **Privacy considerations:** console messages may contain anything the
     * host page logs, including user data. Failed network requests record the
     * URL (with query string) but never the response body. Inform end users
     * before enabling in environments where they might log sensitive values.
     */
    captureDiagnostics?: boolean | DiagnosticsCaptureOptions | undefined;
    /** Called when the widget is skipped (production mode, mobile viewport) */
    onSkip?: (reason: SitepingSkipReason) => void;
    /**
     * Auto-focus a specific annotation when its ID appears in the URL query
     * string. Lets hosts deeplink directly into a feedback from external
     * systems (Zammad tickets, Slack notifications, dashboard rows).
     *
     * When enabled, the widget reads the configured query parameter from
     * `window.location.search` right after the initial markers load. If the
     * value matches a visible feedback ID, the widget scrolls the annotation
     * into view, pins its highlight, and pulses the marker — the same visual
     * affordance a marker click produces.
     *
     * - `false` / `undefined` (default): no URL parsing. Existing behavior
     *   unchanged, no host URL inspection.
     * - `true`: enabled with default query parameter name `siteping`.
     * - object: enabled with a custom parameter name. Use this to avoid
     *   clashes with host-app query keys.
     *
     * Only the initial load triggers focus. Subsequent URL changes (SPA
     * navigation, `history.pushState`, hash updates) are ignored —
     * deliberate, to avoid surprising re-scrolls during normal browsing.
     * Hosts that need re-focus on route change can call
     * `instance.focusFeedback(id)` explicitly.
     */
    deepLink?: boolean | SitepingDeepLinkOptions | undefined;
    /**
     * Automatically re-fetch feedbacks when the page changes during client-side
     * (SPA) navigation. Enabled by default.
     *
     * The widget is normally mounted once (singleton) inside a persistent layout
     * — e.g. a Next.js App Router `layout.tsx`, which does NOT remount on
     * client-side navigation. Without this, init runs a single time and both the
     * panel list and the page markers stay frozen on the page where the widget
     * first mounted. With it on, the widget patches the History API
     * (`pushState`/`replaceState`, which SPA routers call instead of triggering
     * `popstate`) and listens for `popstate`/`hashchange`, then re-fetches when
     * the scope key (`getPageScope().url` + template) actually changes.
     *
     * This re-fetches data only — it deliberately does NOT re-focus or re-scroll
     * to an annotation (deep-link focus stays initial-load only; see `deepLink`),
     * so normal browsing is never interrupted by a surprise scroll.
     *
     * - `true` (default) — watch navigation and re-fetch on route change.
     * - `false` — never touch the History API; hosts drive updates manually via
     *   `instance.refresh()`.
     */
    watchNavigation?: boolean | undefined;
    /**
     * Pre-fill author identity from the host application — typically the
     * currently signed-in user. When set, the widget uses these values
     * directly and never shows the identity modal, even on first feedback.
     *
     * Use case: SSO-integrated apps where the end user is already
     * authenticated by the host. Avoids the awkward "enter your name and
     * email" prompt for users the host already knows.
     *
     * When unset (default), the widget falls back to localStorage and shows
     * the modal on first feedback as before — existing behavior unchanged.
     *
     * Note: `config.identity` is **not** persisted to localStorage. It is
     * read at widget init time, not on every render. Hosts that need live
     * identity updates after sign-in/sign-out should currently remount the
     * widget (e.g. via a React `key` on the wrapping component). See
     * https://github.com/NeosiaNexus/SitePing/issues/85 for tracking a
     * future enhancement that propagates identity updates without a remount.
     */
    identity?: SitepingIdentity | undefined;
    /** Called when the feedback panel is opened. */
    onOpen?: () => void;
    /** Called when the feedback panel is closed. */
    onClose?: () => void;
    onFeedbackSent?: (feedback: FeedbackResponse) => void;
    /**
     * Called when a feedback API call fails.
     *
     * The widget always emits a `SitepingError` (or a subclass:
     * `SitepingNetworkError`, `SitepingValidationError`, `SitepingAuthError`)
     * for HTTP-mode failures — host apps can `instanceof` to drive retry
     * logic, or read `error.code` (`"NETWORK" | "VALIDATION" | "AUTH" |
     * "SERVER"`) and `error.retryable`. The type is widened to `Error` so
     * direct-store callers can still surface raw errors without breaking the
     * contract.
     */
    onError?: (error: Error) => void;
    /** Called when the user starts drawing an annotation. */
    onAnnotationStart?: () => void;
    /** Called when the user finishes drawing an annotation. */
    onAnnotationEnd?: () => void;
}
/** Instance returned by initSiteping() with lifecycle methods. */
interface SitepingInstance {
    /** Remove the widget from the DOM and clean up all listeners. */
    destroy: () => void;
    /** Open the panel programmatically */
    open: () => void;
    /** Close the panel */
    close: () => void;
    /** Reload feedbacks from server */
    refresh: () => void;
    /**
     * Scroll the matching annotation into view, pin its highlight, and
     * pulse its marker. Returns `true` when a visible feedback matched the
     * given ID, `false` otherwise (unknown ID, feedback on another URL when
     * `scopeAnnotationsByUrl` filtered it out, or markers not yet loaded).
     *
     * Counterpart to the `deepLink` config option for hosts that prefer to
     * drive focus from JS (e.g., a notification click handler) instead of a
     * URL query parameter.
     */
    focusFeedback: (feedbackId: string) => boolean;
    /** Subscribe to a public widget event */
    on: <K extends keyof SitepingPublicEvents>(event: K, listener: SitepingPublicEventListener<K>) => SitepingUnsubscribe;
    /** Unsubscribe from a public widget event */
    off: <K extends keyof SitepingPublicEvents>(event: K, listener: SitepingPublicEventListener<K>) => void;
}
/** Listener signature for a single `SitepingPublicEvents` key. */
type SitepingPublicEventListener<K extends keyof SitepingPublicEvents> = (...args: SitepingPublicEvents[K]) => void;
/** Disposer returned by `SitepingInstance.on` — call once to detach the listener. */
type SitepingUnsubscribe = () => void;
/** Events exposed to consumers via SitepingInstance.on / .off */
interface SitepingPublicEvents {
    "feedback:sent": [FeedbackResponse];
    "feedback:deleted": [FeedbackResponse["id"]];
    "panel:open": [];
    "panel:close": [];
}
/** Single source of truth for feedback types — used by both TS types and Zod schemas. */
declare const FEEDBACK_TYPES: readonly ["question", "change", "bug", "other"];
type FeedbackType = (typeof FEEDBACK_TYPES)[number];
/** Single source of truth for feedback statuses. */
declare const FEEDBACK_STATUSES: readonly ["open", "resolved"];
type FeedbackStatus = (typeof FEEDBACK_STATUSES)[number];
/**
 * Page scope returned by `SitepingConfig.getPageScope()`.
 *
 * - `url`: concrete page identifier — usually `window.location.pathname`,
 *   used as the strict scope for marker rendering.
 * - `urlPattern`: optional parameterized template (e.g. `/orders/:orderId`)
 *   used by the panel's "this type of page" filter to group feedbacks across
 *   instances of the same page kind.
 */
interface PageScope {
    url: string;
    urlPattern: string | null;
}
/** Input for creating a feedback record in the store. */
interface FeedbackCreateInput {
    projectName: string;
    type: FeedbackType;
    message: string;
    status: FeedbackStatus;
    url: string;
    /**
     * Optional parameterized URL template (e.g. `/orders/:orderId`) for the page
     * where the feedback was created. Allows the panel to filter feedbacks by
     * "this type of page" across different instances. Null when the host did not
     * provide a `getPageScope` callback or the route has no template.
     */
    urlPattern?: string | null | undefined;
    viewport: string;
    userAgent: string;
    authorName: string;
    authorEmail: string;
    clientId: string;
    annotations: AnnotationCreateInput[];
    /**
     * Base64 JPEG `data:` URL captured by the widget at submit time.
     *
     * Adapters with a configured `ScreenshotStorage` are expected to upload
     * this and persist the returned URL on `FeedbackRecord.screenshotUrl`.
     * Adapters without storage may persist the data URL inline (memory /
     * localStorage / dev) — the widget then renders it directly.
     */
    screenshotDataUrl?: string | null | undefined;
    /**
     * Optional console + failed-network snapshot captured by the widget when
     * `SitepingConfig.captureDiagnostics` is enabled. Stored as JSON on
     * `FeedbackRecord.diagnostics` so reviewers can replay the context.
     */
    diagnostics?: DiagnosticsSnapshot | null | undefined;
}
/** Input for a single annotation when creating a feedback. */
interface AnnotationCreateInput {
    cssSelector: string;
    xpath: string;
    textSnippet: string;
    elementTag: string;
    elementId?: string | undefined;
    textPrefix: string;
    textSuffix: string;
    fingerprint: string;
    neighborText: string;
    /**
     * Semantic anchor identifier from the closest ancestor's `data-feedback-anchor`
     * attribute. When set, this is the most stable re-anchoring signal because
     * hosts deliberately place these on layout/section roots that survive DOM
     * refactors and viewport changes. Null when no semantic ancestor exists.
     */
    anchorKey?: string | null | undefined;
    xPct: number;
    yPct: number;
    wPct: number;
    hPct: number;
    scrollX: number;
    scrollY: number;
    viewportW: number;
    viewportH: number;
    devicePixelRatio: number;
}
/** Query parameters for fetching feedbacks. */
interface FeedbackQuery {
    projectName: string;
    type?: FeedbackType | undefined;
    status?: FeedbackStatus | undefined;
    search?: string | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    /**
     * Filter to feedbacks created on this exact URL (path). Used by the panel's
     * "this page" filter and by the markers loader to keep page scopes isolated.
     */
    url?: string | undefined;
    /**
     * Filter to feedbacks created on this URL pattern (e.g. `/orders/:orderId`).
     * Used by the panel's "this type of page" filter to group feedbacks across
     * different concrete instances of the same template.
     */
    urlPattern?: string | undefined;
}
/** Update payload for patching a feedback. */
interface FeedbackUpdateInput {
    status: FeedbackStatus;
    resolvedAt: Date | null;
}
/** A persisted feedback record returned by the store. */
interface FeedbackRecord {
    id: string;
    type: FeedbackType;
    message: string;
    status: FeedbackStatus;
    projectName: string;
    url: string;
    /**
     * Parameterized URL template the feedback was created on.
     * Null for legacy records or hosts without `getPageScope`.
     */
    urlPattern: string | null;
    authorName: string;
    authorEmail: string;
    viewport: string;
    userAgent: string;
    clientId: string;
    resolvedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    annotations: AnnotationRecord[];
    /**
     * URL the widget renders as `<img src>`. Either an `https://...` from a
     * configured `ScreenshotStorage`, or a `data:image/jpeg;base64,...` URL
     * inline-persisted by adapters without storage. Null when no screenshot
     * was captured (legacy records, capture failed, or host disabled it).
     */
    screenshotUrl: string | null;
    /**
     * Console + failed-network snapshot captured at submit time. Null when
     * diagnostics weren't enabled on the widget side.
     */
    diagnostics: DiagnosticsSnapshot | null;
}
/** A persisted annotation record returned by the store. */
interface AnnotationRecord {
    id: string;
    feedbackId: string;
    cssSelector: string;
    xpath: string;
    textSnippet: string;
    elementTag: string;
    elementId: string | null;
    textPrefix: string;
    textSuffix: string;
    fingerprint: string;
    neighborText: string;
    /**
     * Semantic anchor identifier from `data-feedback-anchor`. Null for legacy
     * annotations or those drawn outside any anchored region.
     */
    anchorKey: string | null;
    xPct: number;
    yPct: number;
    wPct: number;
    hPct: number;
    scrollX: number;
    scrollY: number;
    viewportW: number;
    viewportH: number;
    devicePixelRatio: number;
    createdAt: Date;
}
/** Paginated result returned by `SitepingStore.getFeedbacks`. */
interface FeedbackPage {
    feedbacks: FeedbackRecord[];
    total: number;
}
/**
 * Abstract storage interface for Siteping.
 *
 * Any adapter (Prisma, Drizzle, raw SQL, localStorage, etc.) implements this
 * interface. The HTTP handler and widget `StoreClient` operate against
 * `SitepingStore`, decoupled from the storage backend.
 *
 * ## Error contract
 *
 * - **`updateFeedback` / `deleteFeedback`**: throw `StoreNotFoundError` when
 *   the record does not exist.
 * - **`createFeedback`**: either return the existing record on duplicate
 *   `clientId` (idempotent) or throw `StoreDuplicateError`. The handler
 *   handles both patterns.
 * - **All mutations**: when a write is accepted but cannot be persisted
 *   (e.g. storage quota), throw `StorePersistenceError` instead of reporting
 *   a phantom success. Detect it with `isStorePersistence`.
 * - Other methods should not throw on empty results — return empty arrays or `null`.
 */
interface SitepingStore {
    /** Create a feedback with its annotations. Idempotent on `clientId` — return existing record on duplicate, or throw `StoreDuplicateError`. Throws `StorePersistenceError` when the write cannot be persisted. */
    createFeedback(data: FeedbackCreateInput): Promise<FeedbackRecord>;
    /** Paginated query with optional filters. Returns empty array (not error) when no results. */
    getFeedbacks(query: FeedbackQuery): Promise<FeedbackPage>;
    /** Lookup by client-generated UUID. Returns `null` (not error) when not found. */
    findByClientId(clientId: string): Promise<FeedbackRecord | null>;
    /** Update status/resolvedAt. Throws `StoreNotFoundError` if `id` does not exist, `StorePersistenceError` when the write cannot be persisted. */
    updateFeedback(id: string, data: FeedbackUpdateInput): Promise<FeedbackRecord>;
    /** Delete a single record. Throws `StoreNotFoundError` if `id` does not exist, `StorePersistenceError` when the write cannot be persisted. */
    deleteFeedback(id: string): Promise<void>;
    /** Bulk delete all feedbacks for a project. No-op (not error) if none exist. Throws `StorePersistenceError` when the write cannot be persisted. */
    deleteAllFeedbacks(projectName: string): Promise<void>;
}
/** Severity levels persisted in `ConsoleDiagnosticEntry`. */
type ConsoleDiagnosticLevel = "log" | "info" | "warn" | "error";
/** A single console entry captured by `ConsoleBuffer`. */
interface ConsoleDiagnosticEntry {
    level: ConsoleDiagnosticLevel;
    /** ISO 8601 timestamp captured at log time. */
    timestamp: string;
    /** Best-effort string representation of the original console args. */
    message: string;
}
/** A single failed network request captured by `NetworkBuffer`. */
interface NetworkDiagnosticEntry {
    url: string;
    method: string;
    /** HTTP status; 0 when the request never reached the server. */
    status: number;
    /** End-to-end duration in ms. */
    durationMs: number;
    /** ISO 8601 timestamp at the moment the request was initiated. */
    timestamp: string;
}
/**
 * Diagnostics captured by the widget when `captureDiagnostics` is enabled.
 *
 * Both arrays are bounded (default: 50 console / 20 network). Adapters that
 * support diagnostics should persist this as a JSON blob alongside the
 * feedback so reviewers can replay the context that led to the report.
 */
interface DiagnosticsSnapshot {
    console: ConsoleDiagnosticEntry[];
    network: NetworkDiagnosticEntry[];
}
/** Feedback record as returned by the API (dates serialized as strings). */
interface FeedbackResponse {
    id: string;
    projectName: string;
    type: FeedbackType;
    message: string;
    status: FeedbackStatus;
    url: string;
    /** Parameterized URL template the feedback was created on, or null. */
    urlPattern: string | null;
    viewport: string;
    userAgent: string;
    authorName: string;
    authorEmail: string;
    resolvedAt: string | null;
    createdAt: string;
    updatedAt: string;
    annotations: AnnotationResponse[];
    /** Screenshot URL (data: or http:) — see `FeedbackRecord.screenshotUrl`. */
    screenshotUrl: string | null;
    /** Console + failed-network snapshot, or null when diagnostics weren't captured. */
    diagnostics: DiagnosticsSnapshot | null;
}
/** Annotation record as returned by the API. */
interface AnnotationResponse {
    id: string;
    feedbackId: string;
    cssSelector: string;
    xpath: string;
    textSnippet: string;
    elementTag: string;
    elementId: string | null;
    textPrefix: string;
    textSuffix: string;
    fingerprint: string;
    neighborText: string;
    /** Semantic anchor identifier from `data-feedback-anchor`, or null. */
    anchorKey: string | null;
    xPct: number;
    yPct: number;
    wPct: number;
    hPct: number;
    scrollX: number;
    scrollY: number;
    viewportW: number;
    viewportH: number;
    devicePixelRatio: number;
    createdAt: string;
}

/**
 * React helper for `@siteping/widget`.
 *
 * `useSiteping` initialises the widget once for the lifetime of the component
 * tree, even under React.StrictMode's double-invoke effect dance. Returns the
 * `SitepingInstance` so consumers can drive `open()` / `close()` / `refresh()`
 * programmatically from anywhere in their tree.
 *
 * Why a dedicated entry instead of a snippet in the README:
 * - StrictMode mounts every effect twice in dev, which the obvious
 *   `useEffect(() => { const i = initSiteping(...); return i.destroy }, [])`
 *   handles fine for *re-mount*, but not for the brief window where the
 *   second mount sees a still-alive widget (the widget's own singleton guard
 *   logs an info message and returns the existing instance — surprising
 *   noise for developers).
 * - The hook also captures the latest `config` in a ref so callbacks (e.g.
 *   `onFeedbackSent`) read closure values without re-initialising the widget.
 *
 * Peer dep on react ≥ 18 (declared as optional in package.json), so projects
 * that never import `@siteping/widget/react` don't need React installed.
 */

/**
 * Initialise the SitePing widget for the lifetime of the calling component.
 *
 * Safe to call from a Server Component file as long as the component itself
 * is marked `"use client"` — the hook bails out cleanly on the server because
 * `useEffect` never runs there.
 *
 * @example Next.js App Router
 * ```tsx
 * "use client"
 * import { useSiteping } from "@siteping/widget/react"
 *
 * export function FeedbackProvider({ children }: { children: React.ReactNode }) {
 *   useSiteping({
 *     endpoint: "/api/siteping",
 *     projectName: "my-app",
 *   })
 *   return <>{children}</>
 * }
 * ```
 *
 * @example Driving the panel programmatically
 * ```tsx
 * "use client"
 * import { useSiteping } from "@siteping/widget/react"
 *
 * export function HelpButton() {
 *   const widget = useSiteping({ endpoint: "/api/siteping", projectName: "my-app" })
 *   return <button onClick={() => widget?.open()}>Need help?</button>
 * }
 * ```
 */
declare function useSiteping(config: SitepingConfig): SitepingInstance | null;

export { useSiteping };
