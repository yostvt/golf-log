var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const { useState, useMemo, useEffect, useRef } = React;
const REXY_IMAGES = typeof window !== "undefined" && window.REXY_IMAGES || {};
function rexyCostumeForWeather(weather) {
  return weather === "rainy" ? "rain" : "basic";
}
const REXY_ANALYTICS_LINES = [
  "\u524D\u56DE\u3088\u308A\u4F38\u3073\u3066\u308B\u3068\u3053\u308D\u3001\u898B\u3064\u3051\u306B\u3044\u3053\u3046\uFF01",
  "\u6570\u5B57\u306F\u3061\u3083\u3093\u3068\u5473\u65B9\u3060\u3088\u3002\u4E00\u7DD2\u306B\u898B\u3066\u3044\u3053\u3046\uFF01",
  "\u5F31\u70B9\u304C\u5206\u304B\u308C\u3070\u3001\u3042\u3068\u306F\u4F38\u3073\u3057\u308D\u3060\u306D\uFF01",
  "\u3044\u3044\u6D41\u308C\u3060\u3088\u3001\u3053\u306E\u8ABF\u5B50\uFF01",
  "\u3053\u3053\u3092\u76F4\u305B\u3070\u3001\u3082\u3063\u3068\u826F\u304F\u306A\u308B\u3002\u4E00\u7DD2\u306B\u304C\u3093\u3070\u308D\u3046\uFF01",
  "\u7126\u3089\u305A\u4E00\u6B69\u305A\u3064\u3002\u3061\u3083\u3093\u3068\u898B\u3066\u308B\u3088\uFF01",
  "\u541B\u306A\u3089\u3067\u304D\u308B\uFF01",
  "\u4E0A\u9054\u306E\u30B5\u30A4\u30F3\u3001\u6B21\u306B\u3064\u306A\u3052\u3088\u3046\uFF01",
  "\u3075\u3080\u3075\u3080\u3002\u304D\u307F\u306E\u3044\u3044\u3068\u3053\u306F\u30FB\u30FB\u30FB\uFF01",
  "\u541B\u306E\u6210\u9577\u3001\u3061\u3083\u3093\u3068\u898B\u3066\u308B\u3088\uFF01",
  "\u3044\u3044\u767A\u898B\u3060\u306D\uFF01\u3082\u3063\u3068\u3046\u307E\u304F\u306A\u308B\u3088\uFF01",
  "\uFF08\u5927\u304D\u304F\u5909\u308F\u308B\u4E88\u611F\u30FB\u30FB\u30FB\uFF09\u5927\u4E08\u592B\uFF01"
];
function RexyIcon({ costume = "basic", size = 60, alt = "", style = {} }) {
  const src = REXY_IMAGES[costume] || REXY_IMAGES.basic;
  if (!src) return null;
  return /* @__PURE__ */ React.createElement(
    "img",
    {
      src,
      alt,
      "aria-hidden": alt ? void 0 : true,
      style: __spreadValues({ height: size + "px", width: "auto", display: "block", flex: "none" }, style)
    }
  );
}
function RexyBubble({ costume = "basic", size = 64, children }) {
  if (!(REXY_IMAGES[costume] || REXY_IMAGES.basic)) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 0 } }, /* @__PURE__ */ React.createElement(RexyIcon, { costume, size, alt: "" }), /* @__PURE__ */ React.createElement("div", { style: { width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderRight: "10px solid #f0fdf4", alignSelf: "center", marginLeft: "2px" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0, background: "#f0fdf4", border: "1px solid #86efac", borderRadius: "10px", padding: "10px 12px" } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "13px", color: "#15803d", fontWeight: "600", margin: 0, lineHeight: 1.5 } }, children)));
}
function AnalyticsRexyGreeting() {
  const [line] = useState(() => REXY_ANALYTICS_LINES[Math.floor(Math.random() * REXY_ANALYTICS_LINES.length)]);
  if (!REXY_IMAGES.basic) return null;
  return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement(RexyBubble, { costume: "basic", size: 64 }, line));
}
const CLUB_MASTER = [
  // ウッド
  { id: "1W", label: "1W", category: "\u30A6\u30C3\u30C9" },
  { id: "2W", label: "2W", category: "\u30A6\u30C3\u30C9" },
  { id: "3W", label: "3W", category: "\u30A6\u30C3\u30C9" },
  { id: "4W", label: "4W", category: "\u30A6\u30C3\u30C9" },
  { id: "5W", label: "5W", category: "\u30A6\u30C3\u30C9" },
  { id: "6W", label: "6W", category: "\u30A6\u30C3\u30C9" },
  { id: "7W", label: "7W", category: "\u30A6\u30C3\u30C9" },
  { id: "8W", label: "8W", category: "\u30A6\u30C3\u30C9" },
  { id: "9W", label: "9W", category: "\u30A6\u30C3\u30C9" },
  { id: "10W", label: "10W", category: "\u30A6\u30C3\u30C9" },
  { id: "11W", label: "11W", category: "\u30A6\u30C3\u30C9" },
  // ユーティリティ
  { id: "U1", label: "U1", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U2", label: "U2", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U3", label: "U3", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U4", label: "U4", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U5", label: "U5", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U6", label: "U6", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U7", label: "U7", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U8", label: "U8", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  { id: "U9", label: "U9", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3" },
  // アイアン
  { id: "1I", label: "1I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "2I", label: "2I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "3I", label: "3I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "4I", label: "4I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "5I", label: "5I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "6I", label: "6I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "7I", label: "7I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "8I", label: "8I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "9I", label: "9I", category: "\u30A2\u30A4\u30A2\u30F3" },
  { id: "10I", label: "10I", category: "\u30A2\u30A4\u30A2\u30F3" },
  // ウェッジ
  { id: "PW", label: "PW", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W46", label: "46\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W48", label: "48\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W50", label: "50\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W52", label: "52\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W54", label: "54\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W56", label: "56\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W58", label: "58\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W60", label: "60\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W62", label: "62\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  { id: "W64", label: "64\xB0", category: "\u30A6\u30A7\u30C3\u30B8" },
  // パター
  { id: "PT", label: "PT", category: "\u30D1\u30BF\u30FC" }
];
const CLUB_CATEGORIES = ["\u30A6\u30C3\u30C9", "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", "\u30A2\u30A4\u30A2\u30F3", "\u30A6\u30A7\u30C3\u30B8", "\u30D1\u30BF\u30FC"];
function normalizeClubId(id) {
  if (!id) return id;
  const m = /^(\d{2})w$/i.exec(id);
  if (m) return "W" + m[1];
  return id;
}
function clubLabel(id) {
  const norm = normalizeClubId(id);
  const c = CLUB_MASTER.find((x) => x.id === norm);
  return c ? c.label : norm;
}
const CATEGORIES = {
  // ── ティショット（全Par共通） ─────────────────────────────────────────────
  tee: {
    label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8",
    options: [
      { id: "good", label: "\u25CB", quality: "\u25CB", score: 0, color: "green", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "ok", label: "\u25B3", quality: "\u25B3", score: 0, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bad", label: "\xD7", quality: "\xD7", score: 0, color: "gray", nextState: "_sub", shotCount: 1, penaltyCount: 0 },
      { id: "greenon", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", quality: "\u25CB", score: 0, color: "green", nextState: "on", shotCount: 1, penaltyCount: 0 },
      { id: "cupin", label: "\u30AB\u30C3\u30D7\u30A4\u30F3", quality: "\u25CB", score: 0, color: "green", nextState: "done", shotCount: 1, penaltyCount: 0 }
    ]
  },
  // ── アプローチ（ティ以外の全ショット） ───────────────────────────────────
  approach: {
    label: "\u30A2\u30D7\u30ED\u30FC\u30C1",
    options: [
      { id: "good", label: "\u25CB", quality: "\u25CB", score: 0, color: "green", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "ok", label: "\u25B3", quality: "\u25B3", score: 0, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bad", label: "\xD7", quality: "\xD7", score: 0, color: "gray", nextState: "_sub", shotCount: 1, penaltyCount: 0 },
      { id: "greenon", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", quality: "\u25CB", score: 0, color: "green", nextState: "on", shotCount: 1, penaltyCount: 0 },
      { id: "cupin", label: "\u30AB\u30C3\u30D7\u30A4\u30F3", quality: "\u25CB", score: 0, color: "green", nextState: "done", shotCount: 1, penaltyCount: 0 }
    ]
  },
  // ── パット（変更なし） ─────────────────────────────────────────────────────
  putt: {
    label: "\u30D1\u30C3\u30C8",
    options: [
      { id: "p1", label: "1\u30D1\u30C3\u30C8", quality: "\u25CB", score: 2, color: "green", nextState: "done", shotCount: 1, penaltyCount: 0 },
      { id: "p2", label: "2\u30D1\u30C3\u30C8", quality: "\u25B3", score: 1, color: "yellow", nextState: "done", shotCount: 2, penaltyCount: 0 },
      { id: "p3", label: "3\u30D1\u30C3\u30C8", quality: "\xD7", score: 0, color: "gray", nextState: "done", shotCount: 3, penaltyCount: 0 },
      { id: "p4", label: "4\u30D1\u30C3\u30C8", quality: "\xD7", score: -1, color: "red", nextState: "done", shotCount: 4, penaltyCount: 0 },
      { id: "p5", label: "5\u30D1\u30C3\u30C8", quality: "\xD7", score: -2, color: "darkred", nextState: "done", shotCount: 5, penaltyCount: 0 }
    ]
  }
};
const BAD_SUB_OPTIONS = {
  tee: [
    { id: "bad_bunker", label: "\u30D0\u30F3\u30AB\u30FC", quality: "\xD7", subType: "bunker", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
    { id: "bad_1pen", label: "1\u30DA\u30CA", quality: "\xD7", subType: "1pen", score: 0, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 1 },
    { id: "bad_ob", label: "OB", quality: "\xD7", subType: "ob", score: 0, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 2 }
  ],
  approach: [
    { id: "bad_bunker", label: "\u30D0\u30F3\u30AB\u30FC", quality: "\xD7", subType: "bunker", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
    { id: "bad_1pen", label: "1\u30DA\u30CA", quality: "\xD7", subType: "1pen", score: 0, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 1 },
    { id: "bad_ob", label: "OB", quality: "\xD7", subType: "ob", score: 0, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 }
  ]
};
const REMAIN_DIST_OPTIONS = [
  { id: "10y", label: "10Y\u4EE5\u5185" },
  { id: "20y", label: "20Y\u4EE5\u5185" },
  { id: "30y", label: "30Y\u4EE5\u5185" },
  { id: "40y", label: "40Y\u4EE5\u5185" },
  { id: "50y", label: "50Y\u4EE5\u5185" },
  { id: "100y", label: "100Y\u4EE5\u5185" },
  { id: "150y", label: "150Y\u4EE5\u5185" },
  { id: "200y", label: "200Y\u4EE5\u5185" },
  { id: "250y", label: "250Y\u4EE5\u5185" },
  { id: "250y+", label: "250Y\u8D85" }
];
const DIST_LABEL_MID = {
  "10Y\u4EE5\u5185": 5,
  "20Y\u4EE5\u5185": 15,
  "30Y\u4EE5\u5185": 25,
  "40Y\u4EE5\u5185": 35,
  "50Y\u4EE5\u5185": 45,
  "100Y\u4EE5\u5185": 75,
  "150Y\u4EE5\u5185": 125,
  "200Y\u4EE5\u5185": 175,
  "250Y\u4EE5\u5185": 225,
  "250Y\u8D85": 270
};
function metersToPinDistLabel(m) {
  if (m <= 1) return "1m\u4EE5\u5185";
  if (m <= 2) return "2m\u4EE5\u5185";
  if (m <= 3) return "3m\u4EE5\u5185";
  if (m <= 4) return "4m\u4EE5\u5185";
  if (m <= 5) return "5m\u4EE5\u5185";
  if (m <= 10) return "10m\u4EE5\u5185";
  if (m <= 15) return "15m\u4EE5\u5185";
  if (m <= 20) return "20m\u4EE5\u5185";
  return "20m\u8D85";
}
const SLIDER_CSS = `
  .golf-slider{-webkit-appearance:none;width:100%;height:6px;border-radius:3px;outline:none;cursor:pointer;}
  .golf-slider::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;border-radius:50%;background:#60a5fa;border:2px solid #e2e8f0;box-shadow:0 0 0 3px rgba(96,165,250,.28);cursor:pointer;transition:box-shadow .15s;}
  .golf-slider::-webkit-slider-thumb:active{box-shadow:0 0 0 7px rgba(96,165,250,.2);}
  .golf-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#60a5fa;border:2px solid #e2e8f0;cursor:pointer;}
  @keyframes sfadeDown{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}
`;
function sliderBg(val, min, max) {
  const p = (val - min) / (max - min) * 100;
  return `linear-gradient(to right,rgba(96,165,250,.65) ${p}%,rgba(255,255,255,.07) ${p}%)`;
}
function distToLabel(y) {
  if (!y) return null;
  if (y <= 10) return "10Y\u4EE5\u5185";
  if (y <= 20) return "20Y\u4EE5\u5185";
  if (y <= 30) return "30Y\u4EE5\u5185";
  if (y <= 40) return "40Y\u4EE5\u5185";
  if (y <= 50) return "50Y\u4EE5\u5185";
  if (y <= 100) return "100Y\u4EE5\u5185";
  if (y <= 150) return "150Y\u4EE5\u5185";
  if (y <= 200) return "200Y\u4EE5\u5185";
  if (y <= 250) return "250Y\u4EE5\u5185";
  return "250Y\u8D85";
}
function initialCategory(par) {
  return "tee";
}
function categoryForState(state) {
  if (state === "on") return "putt";
  return "approach";
}
const PIN_DIST_OPTIONS = [
  { id: "1m", label: "1m\u4EE5\u5185" },
  { id: "2m", label: "2m\u4EE5\u5185" },
  { id: "3m", label: "3m\u4EE5\u5185" },
  { id: "4m", label: "4m\u4EE5\u5185" },
  { id: "5m", label: "5m\u4EE5\u5185" },
  { id: "10m", label: "10m\u4EE5\u5185" },
  { id: "15m", label: "15m\u4EE5\u5185" },
  { id: "20m", label: "20m\u4EE5\u5185" },
  { id: "20m+", label: "20m\u8D85" }
];
const COLOR_MAP = {
  green: { bg: "rgba(22,163,74,0.10)", border: "rgba(22,163,74,0.40)", text: "#16a34a" },
  yellow: { bg: "rgba(161,98,7,0.08)", border: "rgba(234,179,8,0.45)", text: "#a16207" },
  gray: { bg: "rgba(100,116,139,0.08)", border: "rgba(100,116,139,0.25)", text: "#64748b" },
  red: { bg: "rgba(220,38,38,0.08)", border: "rgba(220,38,38,0.35)", text: "#dc2626" },
  darkred: { bg: "rgba(185,28,28,0.10)", border: "rgba(185,28,28,0.40)", text: "#b91c1c" }
};
const GOAL_TYPES = [
  { id: "birdie", label: "\u30D0\u30FC\u30C7\u30A3\u4EE5\u4E0A" },
  { id: "par", label: "\u30D1\u30FC\u4EE5\u4E0A" },
  { id: "gir", label: "\u30D1\u30FC\u30AA\u30F3\u9054\u6210" },
  { id: "tee", label: "Par4/5\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u6210\u529F" },
  { id: "twoPutt", label: "2\u30D1\u30C3\u30C8\u4EE5\u5185" }
];
function calcGoalProgress(holeData, holePars, goal) {
  if (!goal || !goal.type) return 0;
  return Object.entries(holeData).filter(([, hd]) => hd.done).filter(([hKey, hd]) => {
    const h = parseInt(hKey);
    const par = holePars[h - 1] || 4;
    const shots = hd.shots || [];
    const totalStrokes = shots.reduce((a, s) => a + s.shotCount, 0) + (hd.extraPenalty || 0);
    const puttShots = shots.filter((s) => s.categoryKey === "putt");
    const putts = puttShots.reduce((a, s) => a + s.shotCount, 0);
    const hasPutt = puttShots.length > 0;
    const nonPuttStrokes = shots.filter((s) => s.categoryKey !== "putt").reduce((a, s) => a + s.shotCount, 0);
    switch (goal.type) {
      case "birdie":
        return totalStrokes - par <= -1;
      case "par":
        return totalStrokes - par <= 0;
      case "gir": {
        const onGreen = hasPutt || shots.some((s) => s.optionId === "cupin");
        return onGreen && nonPuttStrokes <= par - 2;
      }
      case "tee": {
        if (par < 4) return false;
        const teeShot = shots.find((s) => s.categoryKey === "tee");
        return !!(teeShot && teeShot.quality === "\u25CB");
      }
      case "twoPutt":
        return putts <= 2;
      default:
        return false;
    }
  }).length;
}
function scoreColor(s) {
  if (s >= 1) return "#16a34a";
  if (s >= 0.5) return "#65a30d";
  if (s >= 0) return "#64748b";
  if (s >= -1) return "#f59e0b";
  return "#dc2626";
}
function fmt(n) {
  return (n >= 0 ? "+" : "") + Math.round(n * 10) / 10;
}
function isBACKCourse(venueId, courseName) {
  const venue = VENUES.find((v) => v.id === venueId);
  if (!venue) return false;
  const sc = venue.subCourses.find((c) => c.name === courseName);
  if (!sc || !sc.holes || !sc.holes.length) return false;
  return sc.holes[0].hole >= 10;
}
function getRoundHoles(round) {
  var _a, _b;
  if (!round) return [];
  const venue = VENUES.find((v) => v.id === round.venueId);
  if (!venue) return [];
  const front = ((_a = venue.subCourses.find((c) => c.name === round.frontCourse)) == null ? void 0 : _a.holes) || [];
  const back = round.backCourse && round.backCourse !== round.frontCourse ? ((_b = venue.subCourses.find((c) => c.name === round.backCourse)) == null ? void 0 : _b.holes) || [] : venue.subCourses.length === 1 ? front : [];
  return back.length > 0 ? [...front, ...back] : front;
}
const normQuality = (v) => {
  if (!v) return v;
  if (v === "good" || v === "\u25CB") return "\u25CB";
  if (v === "fair" || v === "\u25B3") return "\u25B3";
  if (v === "bad" || v === "\xD7") return "\xD7";
  return v;
};
const calcIdealGIR = (hcp, holeCount) => {
  const h = Math.max(0, Math.min(54, hcp));
  return Math.min(holeCount, Math.max(
    0,
    (476e-5 * h * h - 0.429 * h + 10.12) * holeCount / 18
  ));
};
const rnd2 = (v) => Math.round(v * 100) / 100;
const LONG_DIST_SET = /* @__PURE__ */ new Set(["150Y\u4EE5\u5185", "200Y\u4EE5\u5185", "250Y\u4EE5\u5185", "250Y\u8D85"]);
const SHORT_DIST_SET = /* @__PURE__ */ new Set(["10Y\u4EE5\u5185", "20Y\u4EE5\u5185", "30Y\u4EE5\u5185", "40Y\u4EE5\u5185", "50Y\u4EE5\u5185", "100Y\u4EE5\u5185"]);
function calcSimpleAnalytics(simpleHoleData, holePars, hcp = null, teeRates = null) {
  var _a, _b;
  const normEval = normQuality;
  const holes = Object.entries(simpleHoleData).map(([h, d]) => __spreadProps(__spreadValues({}, d), {
    hole: parseInt(h),
    par: holePars[parseInt(h) - 1] || 4,
    teeEval: normEval(d.teeEval),
    secondEval: normEval(d.secondEval),
    thirdEval: normEval(d.thirdEval),
    approachEval: normEval(d.approachEval)
  }));
  if (!holes.length) return null;
  const r = rnd2;
  const rate = (arr, key, val) => {
    if (!arr.length) return 0;
    return arr.filter((h) => h[key] === val).length / arr.length;
  };
  const teeHoles45 = holes.filter((h) => h.par >= 4);
  const teeBadHoles = teeHoles45.filter((h) => h.teeEval === "\xD7");
  const teeFairHoles = teeHoles45.filter((h) => h.teeEval === "\u25B3");
  const teeBadOB = teeBadHoles.reduce((a, h) => a + (h.ob || 0), 0);
  const totalOB = holes.reduce((a, h) => a + (h.ob || 0), 0);
  const totalPen = holes.reduce((a, h) => a + (h.penalty || 0), 0);
  const COEF_A = 0.3, COEF_B = 0, COEF_C = 0.9;
  const bunkRate = (_a = teeRates == null ? void 0 : teeRates.bunkerFailRate) != null ? _a : 0.81;
  const bunkerCount = holes.reduce((a, h) => a + (h.bunker || 0), 0);
  const bunkerPen = bunkerCount * bunkRate;
  let tGSecG = 0, tFSecG = 0, tFSecB = 0;
  for (const h of teeHoles45) {
    const tee = h.teeEval, sec = h.secondEval;
    if (!tee || !sec) continue;
    if (tee === "\u25CB" && sec === "\u25CB") tGSecG++;
    if (tee === "\u25B3" && sec === "\u25CB") tFSecG++;
    if (tee === "\u25B3" && sec === "\xD7") tFSecB++;
  }
  const hcpBase = hcp != null ? hcp : 0;
  const teeScore = r(hcpBase * 0.3 - totalOB * 2 - totalPen - bunkerPen + tGSecG * COEF_A + tFSecG * COEF_B - tFSecB * COEF_C);
  const girCount = holes.filter((h) => (h.score || 0) - (h.putts || 0) <= h.par - 2).length;
  const penParOnCount = holes.filter((h) => {
    if (h.teeEval !== "\xD7") return false;
    const ob = h.ob || 0, pen = h.penalty || 0;
    if (ob + pen === 0) return false;
    const nonPutts = (h.score || 0) - (h.putts || 0);
    const regularGIR = nonPutts <= h.par - 2;
    return !regularGIR && nonPutts <= h.par + ob * 2 + pen - 2;
  }).length;
  const longGameOB = holes.filter((h) => h.teeEval !== "\xD7" && (h.ob || 0) > 0).reduce((a, h) => a + (h.ob || 0), 0);
  const longGamePen = holes.filter((h) => h.teeEval !== "\xD7").reduce((a, h) => a + (h.penalty || 0), 0);
  const longGameBunk = holes.filter((h) => h.teeEval !== "\xD7" && (h.bunker || 0) > 0).reduce((a, h) => a + (h.bunker || 0), 0);
  let longScore;
  if (hcp !== null && hcp !== void 0) {
    const idealGIR = calcIdealGIR(hcp, holes.length);
    const longBunkRate = (_b = teeRates == null ? void 0 : teeRates.longBunkerFailRate) != null ? _b : 0.81;
    longScore = r(girCount - idealGIR - longGameOB * 2 - longGamePen - longGameBunk * longBunkRate + penParOnCount);
  } else {
    const longShots = [
      ...holes.filter((h) => h.par === 3).map((h) => h.teeEval),
      ...holes.map((h) => h.secondEval)
    ].filter(Boolean);
    const longBadRate = longShots.filter((v) => v === "\xD7").length / Math.max(longShots.length, 1);
    const longFairRate = longShots.filter((v) => v === "\u25B3").length / Math.max(longShots.length, 1);
    longScore = r(longFairRate * -0.5 + longBadRate * -1);
  }
  const approachHoles = holes.filter((h) => h.approachEval && h.approachEval !== "\u7121" && h.approachEval !== "none");
  const approachPuttTotal = approachHoles.reduce((a, h) => a + (h.putts || 0), 0);
  const avgAfterPutts = approachHoles.length ? Math.round(approachPuttTotal / approachHoles.length * 10) / 10 : 0;
  const shortMinSample = holes.length <= 9 ? 2 : 3;
  let shortScore;
  if (approachHoles.length < shortMinSample) {
    shortScore = null;
  } else if (hcp !== null && hcp !== void 0) {
    let loss = 0, bonus = 0;
    for (const h of approachHoles) {
      if (h.approachEval === "\xD7") loss += 1;
      if (h.approachEval === "\u25B3") loss += 0.5;
      if ((h.putts || 0) >= 3) loss += 1;
      if (h.approachEval === "\u25CB" && (h.putts || 0) === 0) bonus += 1;
      if (h.approachEval === "\u25CB" && (h.putts || 0) === 1) bonus += 0.5;
    }
    const relief = Math.min(hcp, 36) * 0.15;
    shortScore = r(bonus - loss + relief);
  } else {
    const approachShots = approachHoles.map((h) => h.approachEval);
    const appBad = approachShots.filter((v) => v === "\xD7").length / Math.max(approachShots.length, 1);
    const appFair = approachShots.filter((v) => v === "\u25B3").length / Math.max(approachShots.length, 1);
    shortScore = r((appFair * -0.5 + appBad * -1) * avgAfterPutts);
  }
  const threePuttCount = holes.filter((h) => (h.putts || 0) >= 3).length;
  const puttOverSum = holes.reduce((a, h) => a + Math.max(0, (h.putts || 0) - 2), 0);
  const onePuttCount = holes.filter((h) => (h.putts || 0) === 1).length;
  const totalPutts = holes.reduce((a, h) => a + (h.putts || 0), 0);
  const totalParSum = holes.reduce((a, h) => a + h.par, 0);
  let puttScore;
  if (hcp !== null && hcp !== void 0) {
    puttScore = r(totalParSum * 0.4 + hcp * 0.15 - totalPutts - puttOverSum + onePuttCount * 0.5);
  } else {
    puttScore = r(threePuttCount / Math.max(holes.length, 1) * -1);
  }
  const bunkerHoles = holes.filter((h) => (h.bunker || 0) > 0);
  let bunkerScore = null;
  if (bunkerHoles.length > 0) {
    const bunkerParDiffSum = bunkerHoles.reduce((a, h) => a + ((h.score || 0) - h.par), 0);
    if (hcp !== null && hcp !== void 0) {
      const expectedDiff = hcp * bunkerHoles.length / 18;
      bunkerScore = r(expectedDiff - bunkerParDiffSum);
    } else {
      bunkerScore = r(-bunkerParDiffSum);
    }
  }
  const longShotQuals = [
    ...holes.filter((h) => h.par === 3 && h.teeEval).map((h) => h.teeEval),
    ...holes.map((h) => h.secondEval).filter(Boolean)
  ];
  const shortShotQuals = [
    ...holes.map((h) => h.thirdEval).filter(Boolean),
    ...holes.filter((h) => h.approachEval && h.approachEval !== "\u7121" && h.approachEval !== "none").map((h) => h.approachEval)
  ];
  return {
    teeScore,
    longScore,
    shortScore,
    puttScore,
    bunkerScore,
    bunkerHoleCount: bunkerHoles.length,
    totalScore: holes.reduce((a, h) => a + (h.score || 0), 0),
    totalPar: totalParSum,
    totalPutts,
    totalOB,
    totalPen,
    totalBunker: holes.reduce((a, h) => a + (h.bunker || 0), 0),
    holeCount: holes.length,
    avgAfterPutts: Math.round(avgAfterPutts * 10) / 10,
    idealGIR: hcp !== null && hcp !== void 0 ? calcIdealGIR(hcp, holes.length) : null,
    longShotQuals,
    shortShotQuals
  };
}
function calcDetailAnalytics(holeData, holePars, hcp = null, teeRates = null) {
  var _a, _b, _c, _d, _e, _f, _g;
  const pars = holePars || Array(18).fill(4);
  const r = rnd2;
  const normQ = normQuality;
  const isLongDist = (d) => !d || LONG_DIST_SET.has(d);
  const isShortDist = (d) => d && SHORT_DIST_SET.has(d);
  const holes = Object.entries(holeData).filter(([, hi]) => hi == null ? void 0 : hi.done).map(([hStr, hi]) => {
    const h = parseInt(hStr);
    const par = pars[h - 1] || 4;
    const shots = hi.shots || [];
    const extraPen = hi.extraPenalty || 0;
    const score = shots.reduce((a, s) => a + s.shotCount, 0) + extraPen;
    const putts = shots.filter((s) => s.categoryKey === "putt").reduce((a, s) => a + s.shotCount, 0);
    const ob = shots.filter((s) => s.subType === "ob").length;
    const penalty = shots.filter((s) => s.subType === "1pen").reduce((a, s) => a + (s.penaltyCount || 0), 0) + extraPen;
    const bunker = shots.filter((s) => s.subType === "bunker").length;
    const teeShots = shots.filter((s) => s.categoryKey === "tee");
    const teeQuality = par >= 4 && teeShots[0] ? normQ(teeShots[0].quality) : null;
    const longShotQuals = [
      // Par3ティ: 100Y超(isLongDist, null→long扱い)のみlong
      ...par === 3 ? teeShots.filter((s) => isLongDist(s.remainDist)).map((s) => normQ(s.quality)) : [],
      ...shots.filter((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt").filter((s) => isLongDist(s.remainDist)).map((s) => normQ(s.quality))
    ].filter(Boolean);
    const shortShotQuals = [
      // Par3ティ: 100Y以内(isShortDist)のみshort
      ...par === 3 ? teeShots.filter((s) => isShortDist(s.remainDist)).map((s) => normQ(s.quality)) : [],
      ...shots.filter((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt").filter((s) => isShortDist(s.remainDist)).map((s) => normQ(s.quality))
    ].filter(Boolean);
    const hasShortShot = shortShotQuals.length > 0;
    const firstShortIdx = shots.findIndex(
      (s) => s.categoryKey !== "tee" && s.categoryKey !== "putt" && isShortDist(s.remainDist) || par === 3 && s.categoryKey === "tee" && isShortDist(s.remainDist)
    );
    const afterShortStrokes = firstShortIdx >= 0 ? shots.slice(firstShortIdx).reduce((a, s) => a + s.shotCount, 0) : null;
    return { h, par, score, putts, ob, penalty, bunker, teeQuality, longShotQuals, shortShotQuals, hasShortShot, afterShortStrokes };
  });
  if (!holes.length) return null;
  const totalOB = holes.reduce((a, h) => a + h.ob, 0);
  const totalPen = holes.reduce((a, h) => a + h.penalty, 0);
  const totalPutts = holes.reduce((a, h) => a + h.putts, 0);
  const totalParSum = holes.reduce((a, h) => a + h.par, 0);
  const totalScore = holes.reduce((a, h) => a + (Number.isFinite(h.score) ? h.score : 0), 0);
  const threePuttCount = holes.filter((h) => h.putts >= 3).length;
  const puttOverSum = holes.reduce((a, h) => a + Math.max(0, (h.putts || 0) - 2), 0);
  const onePuttCount = holes.filter((h) => (h.putts || 0) === 1).length;
  const teeHoles = holes.filter((h) => h.par >= 4);
  const teeBadHoles = teeHoles.filter((h) => h.teeQuality === "\xD7");
  const teeFairHoles = teeHoles.filter((h) => h.teeQuality === "\u25B3");
  const teeBadOB = teeBadHoles.reduce((a, h) => a + h.ob, 0);
  const COEF_A = 0.3, COEF_B = 0, COEF_C = 0.9;
  const bunkerPenalty = holes.reduce((a, h) => a + h.bunker, 0) * ((_a = teeRates == null ? void 0 : teeRates.bunkerFailRate) != null ? _a : 0.81);
  const hcpBase = hcp != null ? hcp : 0;
  let teeScore;
  if (hcp !== null && (teeRates == null ? void 0 : teeRates.hasData)) {
    let bonus = 0;
    for (const hole of holes) {
      if (hole.par < 4) continue;
      const teeQ = hole.teeQuality;
      if (teeQ !== "\u25CB" && teeQ !== "\u25B3") continue;
      const nShot = (((_b = holeData[hole.h]) == null ? void 0 : _b.shots) || []).find((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt");
      const dist = nShot == null ? void 0 : nShot.remainDist;
      if (!dist || !teeRates.byDist[dist]) continue;
      const dr = teeRates.byDist[dist];
      if (teeQ === "\u25CB" && dr.goodRate !== null) bonus += dr.goodRate;
      if (teeQ === "\u25B3" && dr.fairGoodRate !== null) bonus += dr.fairGoodRate;
      if (teeQ === "\u25B3" && dr.fairBadRate !== null) bonus -= dr.fairBadRate;
    }
    teeScore = r(hcpBase * 0.3 - totalOB * 2 - totalPen - bunkerPenalty + bonus);
  } else {
    let tGSecG = 0, tFSecG = 0, tFSecB = 0;
    for (const hole of holes) {
      if (hole.par < 4) continue;
      const teeQ = hole.teeQuality;
      if (teeQ !== "\u25CB" && teeQ !== "\u25B3") continue;
      const nShot = (((_c = holeData[hole.h]) == null ? void 0 : _c.shots) || []).find((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt");
      const nextQ = nShot == null ? void 0 : nShot.quality;
      if (!nextQ) continue;
      if (teeQ === "\u25CB" && nextQ === "\u25CB") tGSecG++;
      if (teeQ === "\u25B3" && nextQ === "\u25CB") tFSecG++;
      if (teeQ === "\u25B3" && nextQ === "\xD7") tFSecB++;
    }
    teeScore = r(hcpBase * 0.3 - totalOB * 2 - totalPen - bunkerPenalty + tGSecG * COEF_A + tFSecG * COEF_B - tFSecB * COEF_C);
  }
  const girCount = holes.filter((h) => h.score - h.putts <= h.par - 2).length;
  let longGameOB = 0, longGamePen = 0, longGameBunk = 0;
  for (const hole of holes) {
    const hiShots = ((_d = holeData[hole.h]) == null ? void 0 : _d.shots) || [];
    for (let i = 0; i < hiShots.length; i++) {
      const s = hiShots[i];
      const isLong = hole.par === 3 && s.categoryKey === "tee" && isLongDist(s.remainDist) || s.categoryKey !== "tee" && s.categoryKey !== "putt" && LONG_DIST_SET.has(s.remainDist);
      if (!isLong) continue;
      if (s.subType === "ob") longGameOB++;
      if (s.subType === "1pen") longGamePen += s.penaltyCount || 1;
      if (s.subType === "bunker") longGameBunk++;
    }
  }
  const penParOnCount = holes.filter((hole) => {
    var _a2;
    if (hole.teeQuality !== "\xD7") return false;
    const teeShots = (((_a2 = holeData[hole.h]) == null ? void 0 : _a2.shots) || []).filter((s) => s.categoryKey === "tee");
    const teeOB = teeShots.filter((s) => s.subType === "ob").length;
    const teePen = teeShots.filter((s) => s.subType === "1pen").reduce((a, s) => a + (s.penaltyCount || 1), 0);
    if (teeOB + teePen === 0) return false;
    const nonPutts = hole.score - hole.putts;
    const regularGIR = nonPutts <= hole.par - 2;
    return !regularGIR && nonPutts <= hole.par + teeOB * 2 + teePen - 2;
  }).length;
  let longScore;
  if (hcp !== null && hcp !== void 0) {
    const idealGIR = calcIdealGIR(hcp, holes.length);
    const longBunkRate = (_e = teeRates == null ? void 0 : teeRates.longBunkerFailRate) != null ? _e : 0.81;
    longScore = r(girCount - idealGIR - longGameOB * 2 - longGamePen - longGameBunk * longBunkRate + penParOnCount);
  } else {
    const allLong = holes.flatMap((h) => h.longShotQuals);
    const longBadR = allLong.filter((q) => q === "\xD7").length / Math.max(allLong.length, 1);
    const longFairR = allLong.filter((q) => q === "\u25B3").length / Math.max(allLong.length, 1);
    longScore = r(longFairR * -0.5 + longBadR * -1);
  }
  const allShort = holes.flatMap((h) => h.shortShotQuals);
  const shortFairCnt = allShort.filter((q) => q === "\u25B3").length;
  const shortBadCnt = allShort.filter((q) => q === "\xD7").length;
  const shortHoles = holes.filter((h) => h.hasShortShot);
  const shortPuttSum = shortHoles.reduce((a, h) => a + h.putts, 0);
  const avgAfterPutts = shortHoles.length ? Math.round(shortPuttSum / shortHoles.length * 10) / 10 : 0;
  const SHORT_STRICT_SET = /* @__PURE__ */ new Set(["10Y\u4EE5\u5185", "20Y\u4EE5\u5185"]);
  const WITHIN_3M_SET = /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185", "3m\u4EE5\u5185"]);
  const CUP_SUCCESS_THRESH = {
    "10Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185"]),
    "20Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185"]),
    "30Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185", "3m\u4EE5\u5185"]),
    "40Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185", "3m\u4EE5\u5185", "4m\u4EE5\u5185"]),
    "50Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185", "3m\u4EE5\u5185", "4m\u4EE5\u5185", "5m\u4EE5\u5185"]),
    "100Y\u4EE5\u5185": /* @__PURE__ */ new Set(["1m\u4EE5\u5185", "2m\u4EE5\u5185", "3m\u4EE5\u5185", "4m\u4EE5\u5185", "5m\u4EE5\u5185", "10m\u4EE5\u5185", "10Y\u4EE5\u5185"])
  };
  const isShortSuccess = (shotDist, pinDist) => {
    var _a2;
    return !!((_a2 = CUP_SUCCESS_THRESH[shotDist]) == null ? void 0 : _a2.has(pinDist));
  };
  let shortScore;
  if (hcp !== null && hcp !== void 0) {
    const idealGIR = calcIdealGIR(hcp, holes.length);
    if (shortHoles.length > 0) {
      let successPts = 0, failureCount = 0;
      for (const hole of shortHoles) {
        const shots = ((_f = holeData[hole.h]) == null ? void 0 : _f.shots) || [];
        const pinDist = (_g = holeData[hole.h]) == null ? void 0 : _g.pinDist;
        let lastSGIdx = -1;
        for (let i = shots.length - 1; i >= 0; i--) {
          const s = shots[i];
          if (s.categoryKey !== "tee" && s.categoryKey !== "putt" && isShortDist(s.remainDist)) {
            lastSGIdx = i;
            break;
          }
        }
        if (lastSGIdx < 0) continue;
        const lastSG = shots[lastSGIdx];
        const putt = shots.slice(lastSGIdx + 1).find((s) => s.categoryKey === "putt");
        if (pinDist && isShortSuccess(lastSG.remainDist, pinDist)) {
          successPts += 1;
        } else if (pinDist && WITHIN_3M_SET.has(pinDist) && (putt == null ? void 0 : putt.shotCount) === 1) {
          successPts += 1;
        } else if ((putt == null ? void 0 : putt.shotCount) === 2 && SHORT_STRICT_SET.has(lastSG.remainDist)) {
          failureCount++;
        } else if ((putt == null ? void 0 : putt.shotCount) === 2) {
        } else if (putt && putt.shotCount >= 3) {
          failureCount++;
        }
      }
      shortScore = r(hcp * 0.15 + successPts * 0.3 - failureCount);
    } else {
      const afterShortHoles = shortHoles.filter((h) => h.afterShortStrokes !== null);
      const avgAfterShort = afterShortHoles.length > 0 ? afterShortHoles.reduce((a, h) => a + h.afterShortStrokes, 0) / afterShortHoles.length : 0;
      shortScore = r(holes.length * 2 - idealGIR - avgAfterShort * holes.length);
    }
  } else {
    const shortBadR = shortBadCnt / Math.max(allShort.length, 1);
    const shortFairR = shortFairCnt / Math.max(allShort.length, 1);
    shortScore = r((shortFairR * -0.5 + shortBadR * -1) * Math.max(avgAfterPutts, 1));
  }
  let puttScore;
  if (hcp !== null && hcp !== void 0) {
    puttScore = r(totalParSum * 0.4 + hcp * 0.15 - totalPutts - puttOverSum + onePuttCount * 0.5);
  } else {
    puttScore = r(threePuttCount / Math.max(holes.length, 1) * -1);
  }
  const bunkerHoles = holes.filter((h) => h.bunker > 0);
  let bunkerScore = null;
  if (bunkerHoles.length > 0) {
    const bunkerParDiffSum = bunkerHoles.reduce((a, h) => a + (h.score - h.par), 0);
    if (hcp !== null && hcp !== void 0) {
      const expectedDiff = hcp * bunkerHoles.length / 18;
      bunkerScore = r(expectedDiff - bunkerParDiffSum);
    } else {
      bunkerScore = r(-bunkerParDiffSum);
    }
  }
  return {
    teeScore,
    longScore,
    shortScore: r(shortScore),
    puttScore,
    bunkerScore,
    bunkerHoleCount: bunkerHoles.length,
    totalScore,
    totalPar: totalParSum,
    totalPutts,
    totalOB,
    totalPen,
    totalBunker: holes.reduce((a, h) => a + h.bunker, 0),
    holeCount: holes.length,
    avgAfterPutts,
    idealGIR: hcp !== null && hcp !== void 0 ? calcIdealGIR(hcp, holes.length) : null,
    // AIインサイト用：ロング/ショート品質配列（正確な集計）
    longShotQuals: holes.flatMap((h) => h.longShotQuals || []),
    shortShotQuals: holes.flatMap((h) => h.shortShotQuals || [])
  };
}
function calcDriverDistStats(rounds, maxRounds = 5) {
  const detailRounds = [...rounds].filter((r) => r.isComplete && r.inputMode === "detail" && r.holeData).sort((a, b) => dateToNum(b.date) - dateToNum(a.date)).slice(0, maxRounds);
  const result = [];
  for (const r of detailRounds) {
    const venue = VENUES.find((v) => v.id === r.venueId);
    if (!venue) continue;
    const allHoles = getRoundHoles(r);
    const samples = [];
    for (const [hKey, hd] of Object.entries(r.holeData)) {
      if (!hd.done) continue;
      const h = parseInt(hKey);
      const par = (r.holePars || [])[h - 1] || 4;
      if (par < 4) continue;
      const shots = hd.shots || [];
      const teeShot = shots.find((s) => s.categoryKey === "tee");
      if (!teeShot || teeShot.club !== "1W" || teeShot.quality !== "\u25CB") continue;
      const secondShot = shots.find((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt");
      if (!(secondShot == null ? void 0 : secondShot.remainDist)) continue;
      const remainVal = secondShot.remainDistRaw != null ? secondShot.remainDistRaw : DIST_LABEL_MID[secondShot.remainDist];
      if (!remainVal) continue;
      const hInfo = allHoles[h - 1];
      const yardage = hInfo ? venue.getYardage(hInfo, r.green, r.tee) : null;
      if (!yardage || yardage <= 0) continue;
      const dist = yardage - remainVal;
      if (dist > 100 && dist < 420) samples.push(dist);
    }
    if (samples.length > 0) {
      const avg = Math.round(samples.reduce((a, v) => a + v, 0) / samples.length);
      result.push({ date: r.date, avg, count: samples.length });
    }
  }
  return result;
}
function calcSegmentAnalysis(rounds, n) {
  const target = [...rounds || []].filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length >= 17).sort((a, b) => dateToNum(b.date) - dateToNum(a.date)).slice(0, n);
  if (target.length === 0) return null;
  const SEGMENTS = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15], [16, 17, 18]];
  const segments = SEGMENTS.map((holes) => {
    const roundParDiffs = [];
    const roundPutts = [];
    let girHoles = 0, totalHoles = 0;
    let recOk = 0, recTotal = 0;
    let teeBad = 0, tee45 = 0;
    target.forEach((r) => {
      const shd = r.simpleHoleData || {};
      const pars = r.holePars || Array(18).fill(4);
      let rParDiff = 0, rPutt = 0, hasData = false;
      holes.forEach((h) => {
        const hd = shd[h];
        if (!hd || hd.score == null) return;
        hasData = true;
        const par = pars[h - 1] || 4;
        const score = hd.score || 0;
        const putts = hd.putts || 0;
        rParDiff += score - par;
        rPutt += putts;
        totalHoles++;
        const isGir = score - putts <= par - 2;
        if (isGir) {
          girHoles++;
        } else {
          recTotal++;
          if (score <= par) recOk++;
        }
        if (par >= 4) {
          tee45++;
          if (normQuality(hd.teeEval) === "\xD7") teeBad++;
        }
      });
      if (hasData) {
        roundParDiffs.push(rParDiff);
        roundPutts.push(rPutt);
      }
    });
    const avgParDiff = roundParDiffs.length ? roundParDiffs.reduce((a, v) => a + v, 0) / roundParDiffs.length : 0;
    const avgPutt = roundPutts.length ? roundPutts.reduce((a, v) => a + v, 0) / roundPutts.length : 0;
    return {
      parDiff: Math.round(avgParDiff * 10) / 10,
      gir: totalHoles ? Math.round(girHoles / totalHoles * 100) : 0,
      rec: recTotal ? Math.round(recOk / recTotal * 100) : 0,
      putt: Math.round(avgPutt * 10) / 10,
      teeBad: tee45 ? Math.round(teeBad / tee45 * 100) : 0
    };
  });
  return { segments, count: target.length };
}
function calcAnalytics(r, hcp, teeRates = null) {
  if (r.inputMode === "detail" && r.holeData && Object.keys(r.holeData).length > 0) {
    const sa2 = calcDetailAnalytics(r.holeData, r.holePars, hcp, teeRates);
    return sa2 ? __spreadProps(__spreadValues({}, sa2), { isDetailMode: true }) : null;
  }
  const sa = calcSimpleAnalytics(r.simpleHoleData || {}, r.holePars || Array(18).fill(4), hcp, teeRates);
  return sa ? __spreadProps(__spreadValues({}, sa), { isDetailMode: false }) : null;
}
function calcHistoricalTeeRates(rounds) {
  const DIST_KEYS = ["10Y\u4EE5\u5185", "20Y\u4EE5\u5185", "30Y\u4EE5\u5185", "40Y\u4EE5\u5185", "50Y\u4EE5\u5185", "100Y\u4EE5\u5185", "150Y\u4EE5\u5185", "200Y\u4EE5\u5185", "250Y\u4EE5\u5185", "250Y\u8D85"];
  const targets = [...rounds || []].filter((r) => r.isComplete && r.inputMode === "detail" && r.holeData && Object.keys(r.holeData).length > 0).sort((a, b) => {
    return dateToNum(b.date) - dateToNum(a.date);
  }).slice(0, 20);
  let bunkTotal = 0, bunkFail = 0;
  let longBunkTotal = 0, longBunkFail = 0;
  const distMap = {};
  for (const dk of DIST_KEYS) distMap[dk] = { gNG: 0, gT: 0, fNG: 0, fNB: 0, fT: 0 };
  for (const r of targets) {
    for (const [hKey, hi] of Object.entries(r.holeData || {})) {
      if (!(hi == null ? void 0 : hi.done)) continue;
      const shots = hi.shots || [];
      const par = (r.holePars || [])[parseInt(hKey) - 1] || 4;
      const teeSh = shots.find((s) => s.categoryKey === "tee");
      if (!teeSh || par < 4) continue;
      if (teeSh.subType === "bunker") {
        bunkTotal++;
        const next2 = shots.find((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt");
        if (!next2 || next2.quality !== "\u25CB") bunkFail++;
      }
      for (let i = 0; i < shots.length; i++) {
        const s = shots[i];
        const isLong = par === 3 && s.categoryKey === "tee" && (!s.remainDist || LONG_DIST_SET.has(s.remainDist)) || s.categoryKey !== "tee" && s.categoryKey !== "putt" && LONG_DIST_SET.has(s.remainDist);
        if (!isLong || s.subType !== "bunker") continue;
        longBunkTotal++;
        const next2 = shots.slice(i + 1).find((ns) => ns.categoryKey !== "putt");
        if (!next2 || next2.quality !== "\u25CB") longBunkFail++;
      }
      const teeQ = teeSh.quality;
      if (teeQ !== "\u25CB" && teeQ !== "\u25B3") continue;
      const next = shots.find((s) => s.categoryKey !== "tee" && s.categoryKey !== "putt");
      if (!next) continue;
      const dist = next.remainDist;
      if (!dist || !distMap[dist]) continue;
      const nextQ = next.quality;
      if (teeQ === "\u25CB") {
        distMap[dist].gT++;
        if (nextQ === "\u25CB") distMap[dist].gNG++;
      } else {
        distMap[dist].fT++;
        if (nextQ === "\u25CB") distMap[dist].fNG++;
        if (nextQ === "\xD7") distMap[dist].fNB++;
      }
    }
  }
  const byDist = {};
  for (const dk of DIST_KEYS) {
    const v = distMap[dk];
    byDist[dk] = {
      goodRate: v.gT > 0 ? v.gNG / v.gT : null,
      // ティ○→次打○率
      fairGoodRate: v.fT > 0 ? v.fNG / v.fT : null,
      // ティ△→次打○率
      fairBadRate: v.fT > 0 ? v.fNB / v.fT : null,
      // ティ△→次打×率
      gT: v.gT,
      fT: v.fT
    };
  }
  return {
    bunkerFailRate: bunkTotal > 0 ? bunkFail / bunkTotal : 0.81,
    longBunkerFailRate: longBunkTotal > 0 ? longBunkFail / longBunkTotal : 0.81,
    byDist,
    hasData: targets.length > 0
  };
}
function generateDiagnosis(sa, shd, hcp, rounds, roundId, roundCount = 1, scoreOverride = null) {
  var _a, _b, _c;
  const holeEntries = Object.entries(shd || {});
  const rCount = Math.max(1, roundCount || 1);
  const fmtN = (n) => Number.isInteger(Math.round(n * 10) / 10) ? String(Math.round(n)) : (Math.round(n * 10) / 10).toFixed(1);
  const is9H = sa.holeCount <= 12;
  const hcAdj = is9H ? Math.floor(hcp / 2) : hcp;
  const expectedScore = sa.totalPar + hcAdj;
  const scoreForGap = scoreOverride != null ? scoreOverride : sa.totalScore;
  const gap = Math.round((scoreForGap - expectedScore) * 10) / 10;
  const count = (key, val) => holeEntries.filter(([, h]) => normQuality(h[key]) === val).length / rCount;
  const threePutts = holeEntries.filter(([, h]) => (h.putts || 0) >= 3).length / rCount;
  const hcpBands = [
    { max: 0, id: "S", label: "\u30A8\u30AD\u30B9\u30D1\u30FC\u30C8" },
    { max: 5, id: "A+", label: "\u8D85\u4E0A\u7D1A\u8005" },
    { max: 9, id: "A", label: "\u4E0A\u7D1A\u8005" },
    { max: 17, id: "B", label: "\u4E2D\u7D1A\u8005" },
    { max: 25, id: "C", label: "\u521D\u4E2D\u7D1A" },
    { max: 36, id: "D", label: "\u521D\u7D1A\u8005" },
    { max: Infinity, id: "E", label: "\u5165\u9580\u8005" }
  ];
  const band = (_a = hcpBands.find((b) => hcp <= b.max)) != null ? _a : hcpBands[hcpBands.length - 1];
  const sdBase = Math.max(2.5, (hcp != null ? hcp : 0) * 0.25 + 2.5);
  const sd = sdBase * (is9H ? 0.707 : 1);
  const z = gap / sd;
  const gapLevels = [
    { maxZ: -0.5, label: "\u7D76\u597D\u8ABF", color: "#f59e0b", comment: "\u5B9F\u529B\u4EE5\u4E0A\u306E\u30E9\u30A6\u30F3\u30C9\u3002\u30B3\u30F3\u30C7\u30A3\u30B7\u30E7\u30F3\u304C\u975E\u5E38\u306B\u826F\u304B\u3063\u305F\u3067\u3059\uFF01" },
    { maxZ: 0.5, label: "\u597D\u8ABF", color: "#16a34a", comment: "\u5B9F\u529B\u3092\u3057\u3063\u304B\u308A\u767A\u63EE\u3067\u304D\u305F\u30E9\u30A6\u30F3\u30C9\u3067\u3059\u3002" },
    { maxZ: 1, label: "\u6A19\u6E96", color: "#0ea5e9", comment: "\u5B9F\u529B\u76F8\u5FDC\u306E\u30B9\u30B3\u30A2\u3067\u3059\u3002\u5F31\u70B9\u306E\u6539\u5584\u3067\u6B21\u306E\u30EC\u30D9\u30EB\u3078\u3002" },
    { maxZ: 2, label: "\u3084\u3084\u4E0D\u8ABF", color: "#fbbf24", comment: "\u5B9F\u529B\u3088\u308A\u5C11\u3057\u843D\u3061\u305F\u30E9\u30A6\u30F3\u30C9\u3002\u4F55\u304C\u539F\u56E0\u304B\u632F\u308A\u8FD4\u308A\u307E\u3057\u3087\u3046\u3002" },
    { maxZ: Infinity, label: "\u4E0D\u8ABF", color: "#dc2626", comment: "\u8AB2\u984C\u304C\u91CD\u306A\u3063\u305F\u30E9\u30A6\u30F3\u30C9\u3067\u3059\u3002\u7279\u5B9A\u306E\u5F31\u70B9\u306B\u96C6\u4E2D\u3057\u3066\u5BFE\u51E6\u3092\u3002" }
  ];
  const lvl = (_b = gapLevels.find((l) => z <= l.maxZ)) != null ? _b : gapLevels[gapLevels.length - 1];
  const gradeOf = (score, hcpForTee = null, idealGIRForLong = null, isShort = false, isDetailShort = false, isPutt = false) => {
    if (score == null) return { label: "\uFF0D", color: "#475569" };
    if (isPutt) {
      if (score >= 1.5) return { label: "S", color: "#D4A017" };
      if (score >= -0.5) return { label: "A", color: "#3FA34D" };
      if (score >= -1.5) return { label: "B", color: "#4DA8DA" };
      if (score >= -3.5) return { label: "C", color: "#C2B280" };
      return { label: "D", color: "#D9534F" };
    }
    if (idealGIRForLong !== null) {
      const ig = Math.max(0.01, idealGIRForLong);
      if (score > 0) return { label: "S", color: "#D4A017" };
      if (score > -ig * 0.3) return { label: "A", color: "#3FA34D" };
      if (score > -ig * 0.5) return { label: "B", color: "#4DA8DA" };
      if (score > -ig * 0.7) return { label: "C", color: "#C2B280" };
      return { label: "D", color: "#D9534F" };
    }
    if (hcpForTee !== null) {
      const h = Math.max(0.1, hcpForTee);
      if (score > h * 0.3) return { label: "S", color: "#D4A017" };
      if (score > h * 0.1) return { label: "A", color: "#3FA34D" };
      if (score > 0) return { label: "B", color: "#4DA8DA" };
      if (score > -h * 0.15) return { label: "C", color: "#C2B280" };
      return { label: "D", color: "#D9534F" };
    }
    if (isShort) {
      if (isDetailShort) {
        if (score > 2) return { label: "S", color: "#D4A017" };
        if (score > 1) return { label: "A", color: "#3FA34D" };
        if (score > 0) return { label: "B", color: "#4DA8DA" };
        if (score > -1) return { label: "C", color: "#C2B280" };
        return { label: "D", color: "#D9534F" };
      }
      if (score > 3) return { label: "S", color: "#D4A017" };
      if (score > 1.5) return { label: "A", color: "#3FA34D" };
      if (score > 0) return { label: "B", color: "#4DA8DA" };
      if (score > -2) return { label: "C", color: "#C2B280" };
      return { label: "D", color: "#D9534F" };
    }
    if (score >= 1.5) return { label: "S", color: "#D4A017" };
    if (score >= 0.3) return { label: "A", color: "#3FA34D" };
    if (score >= -0.5) return { label: "B", color: "#4DA8DA" };
    if (score >= -1.5) return { label: "C", color: "#C2B280" };
    return { label: "D", color: "#D9534F" };
  };
  const normalizeTeeScore = (score, hcpVal) => {
    const h = Math.max(0.1, hcpVal);
    return score >= 0 ? score / (h * 0.3) * 1.5 : score / (h * 0.15) * 1.5;
  };
  const normalizeLongScore = (score, idealGIRVal) => {
    const ig = Math.max(0.01, idealGIRVal);
    return score / ig * (1.5 / 0.3);
  };
  const barW = (score) => `${Math.max(5, Math.min(93, 50 + (score || 0) * 14))}%`;
  const barC = (score) => score >= 1.5 ? "#D4A017" : score >= 0.3 ? "#3FA34D" : score >= -0.5 ? "#4DA8DA" : score >= -1.5 ? "#C2B280" : "#D9534F";
  const teeGood = count("teeEval", "\u25CB"), teeBad = count("teeEval", "\xD7"), teeFair = count("teeEval", "\u25B3");
  const longQuals = sa.longShotQuals || [];
  const longGood = longQuals.filter((v) => v === "\u25CB").length / rCount;
  const longBad = longQuals.filter((v) => v === "\xD7").length / rCount;
  const longTotal = longQuals.length / rCount;
  const shortQuals = sa.shortShotQuals || [];
  const shortGood = shortQuals.filter((v) => v === "\u25CB").length / rCount;
  const shortBad = shortQuals.filter((v) => v === "\xD7").length / rCount;
  const shortTotal = shortQuals.length / rCount;
  const diagIdealGIR = (_c = sa.idealGIR) != null ? _c : null;
  const insights = {
    tee: (() => {
      const g = gradeOf(sa.teeScore);
      if (g.label === "S" || g.label === "A") {
        return sa.totalOB + sa.totalPen > 0 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u5B89\u5B9A\u3002\u305F\u3060\u3057OB/\u30DA\u30CA\u30EB\u30C6\u30A3${fmtN(sa.totalOB + sa.totalPen)}\u56DE\u306F\u8981\u6CE8\u610F` : `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25CB${fmtN(teeGood)}\u56DE\u3002\u3053\u306E\u8ABF\u5B50\u3092\u7DAD\u6301\u3057\u3088\u3046`;
      }
      if (g.label === "B") {
        return teeFair >= teeGood ? "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25B3\u304C\u591A\u3081\u3002\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u7387\u3092\u4E0A\u3052\u3088\u3046" : "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u306F\u6A19\u6E96\u7684\u3002\u3082\u3046\u4E00\u6BB5\u306E\u5B89\u5B9A\u611F\u3092\u76EE\u6307\u305D\u3046";
      }
      return sa.totalOB + sa.totalPen >= 4 ? `OB/\u30DA\u30CA\u30EB\u30C6\u30A3${fmtN(sa.totalOB + sa.totalPen)}\u56DE\u3002\u7F70\u6253\u304C\u30B9\u30B3\u30A2\u3092\u76F4\u6483\u3057\u3066\u3044\u307E\u3059` : teeBad >= 5 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\xD7\u304C${fmtN(teeBad)}\u56DE\u3002\u30A4\u30F3\u30D1\u30AF\u30C8\u7CBE\u5EA6\u306E\u5B89\u5B9A\u304C\u6700\u512A\u5148\u8AB2\u984C` : teeBad >= 3 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30DF\u30B9${fmtN(teeBad)}\u56DE\u3002\u30B9\u30A4\u30F3\u30B0\u306E\u30A4\u30F3\u30D1\u30AF\u30C8\u30BE\u30FC\u30F3\u3092\u78BA\u8A8D\u3057\u3088\u3046` : band.id === "S" || band.id === "A+" || band.id === "A" ? "\u25B3\u304C\u591A\u3081\u3002\u30D5\u30A7\u30FC\u30B9\u7BA1\u7406\u3068\u30A4\u30F3\u30D1\u30AF\u30C8\u30BE\u30FC\u30F3\u306E\u7CBE\u5EA6\u5411\u4E0A\u3067\u25CB\u7387\u3092\u9AD8\u3081\u3088\u3046" : "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25B3\u304C\u591A\u3081\u3002\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u7387\u3092\u4E0A\u3052\u3088\u3046";
    })(),
    long: (() => {
      const g = gradeOf(sa.longScore, null, diagIdealGIR);
      if (g.label === "S" || g.label === "A") {
        return longGood >= longTotal * 0.6 ? "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u304C\u5B89\u5B9A\u3002\u5927\u304D\u306A\u5F37\u307F\u3067\u3059" : "\u30D1\u30FC\u30AA\u30F3\u304C\u5B89\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u8ABF\u5B50\u3092\u7DAD\u6301\u3057\u3088\u3046";
      }
      if (g.label === "B") {
        return longBad >= 2 ? `\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\xD7${fmtN(longBad)}\u56DE\u3002\u756A\u624B\u9078\u3073\u3068\u65B9\u5411\u6027\u3092\u898B\u76F4\u305D\u3046` : "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u306F\u6A19\u6E96\u7684\u3002\u30D1\u30FC\u30AA\u30F3\u7387\u306E\u5411\u4E0A\u3067\u30B9\u30B3\u30A2\u304C\u5909\u308F\u308A\u307E\u3059";
      }
      return longBad >= 4 ? `\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\xD7${fmtN(longBad)}\u56DE\u3002\u756A\u624B\u9078\u3073\u3068\u65B9\u5411\u6027\u3092\u898B\u76F4\u305D\u3046` : "\u30D1\u30FC\u30AA\u30F3\u304C\u671F\u5F85\u3092\u4E0B\u56DE\u3063\u3066\u3044\u307E\u3059\u3002\u30B0\u30EA\u30FC\u30F3\u3092\u6349\u3048\u308B\u7CBE\u5EA6\u5411\u4E0A\u304C\u6700\u512A\u5148\u8AB2\u984C";
    })(),
    short: (() => {
      const g = gradeOf(sa.shortScore, null, null, true, sa.isDetailMode);
      if (g.label === "D" || g.label === "C") {
        return shortBad >= 4 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\xD7${fmtN(shortBad)}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u306E\u7CBE\u5EA6\u304C\u6700\u91CD\u8981\u8AB2\u984C` : "\u5BC4\u305B\u5F8C\u306B1\u30D1\u30C3\u30C8\u3067\u4E0A\u304C\u308B\u305F\u3081\u306E\u30A8\u30EA\u30A2\u3092\u610F\u8B58\u3057\u307E\u3057\u3087\u3046";
      }
      return shortBad >= 4 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\xD7${fmtN(shortBad)}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u306E\u7CBE\u5EA6\u304C\u6700\u91CD\u8981\u8AB2\u984C` : sa.avgAfterPutts > 2.3 ? band.id === "S" || band.id === "A+" || band.id === "A" ? `\u5BC4\u305B\u5F8C\u306E\u5E73\u5747${sa.avgAfterPutts}\u30D1\u30C3\u30C8\u3002\u30D4\u30F32m\u4EE5\u5185\u306E\u5BC4\u305B\u7387\u3092\u610F\u8B58\u3057\u3088\u3046` : `\u5BC4\u305B\u5F8C\u306E\u5E73\u5747${sa.avgAfterPutts}\u30D1\u30C3\u30C8\u3002\u5BC4\u305B\u7CBE\u5EA6\u3092\u9AD8\u3081\u3066\u30D1\u30C3\u30C8\u3092\u697D\u306B\u3057\u3088\u3046` : shortGood >= shortTotal * 0.6 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u25CB${fmtN(shortGood)}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u304C\u5F37\u307F\u3067\u3059` : "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u306E\u5B89\u5B9A\u611F\u3092\u3082\u3046\u5C11\u3057\u4E0A\u3052\u307E\u3057\u3087\u3046";
    })(),
    putt: (() => {
      const g = gradeOf(sa.puttScore, null, null, false, false, true).label;
      if (threePutts >= 4) return `3\u30D1\u30C3\u30C8${fmtN(threePutts)}\u56DE\u304C\u75DB\u3044\u3002\u30ED\u30F3\u30B0\u30D1\u30C3\u30C8\u306E\u8DDD\u96E2\u611F\u304C\u6700\u91CD\u8981\u8AB2\u984C`;
      if (threePutts >= 2) return `3\u30D1\u30C3\u30C8${fmtN(threePutts)}\u56DE\u3002\u30D5\u30A1\u30FC\u30B9\u30C8\u30D1\u30C3\u30C8\u306E\u7CBE\u5EA6\u3092\u4E0A\u3052\u308B\u3053\u3068\u304C\u5148\u6C7A`;
      if (g === "S") return `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u4E0A\u304C\u5927\u304D\u306A\u6B66\u5668\u3067\u3059`;
      if (g === "A") return `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u5B89\u5B9A\u3057\u305F\u30D1\u30C3\u30C6\u30A3\u30F3\u30B0\u3067\u3059`;
      if (g === "B") return `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u6A19\u6E96\u7684\u306A\u6C34\u6E96\u3067\u3059`;
      if (g === "C") return `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u4E0A\u306E\u5B89\u5B9A\u611F\u3092\u9AD8\u3081\u305F\u3044`;
      return `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u8DDD\u96E2\u611F\u3068\u30AB\u30C3\u30D7\u5468\u308A\u306E\u7CBE\u5EA6\u304C\u8AB2\u984C\u3067\u3059`;
    })(),
    bunker: (() => {
      if (!sa.bunkerHoleCount) return "\u30D0\u30F3\u30AB\u30FC\u306A\u3057\u3002\u7D20\u6674\u3089\u3057\u3044\u30B3\u30FC\u30B9\u7BA1\u7406\u3067\u3059";
      const g = gradeOf(sa.bunkerScore);
      if (g.label === "S" || g.label === "A") {
        return `\u30D0\u30F3\u30AB\u30FC${fmtN(sa.bunkerHoleCount)}\u56DE\u3002\u30B9\u30B3\u30A2\u3078\u306E\u5F71\u97FF\u306F\u6700\u5C0F\u9650\u306B\u6291\u3048\u3089\u308C\u3066\u3044\u307E\u3059`;
      }
      if (g.label === "B") {
        return `\u30D0\u30F3\u30AB\u30FC${fmtN(sa.bunkerHoleCount)}\u56DE\u3002\u307E\u305A\u307E\u305A\u306E\u5BFE\u51E6\u304C\u3067\u304D\u3066\u3044\u307E\u3059`;
      }
      return sa.bunkerHoleCount >= 4 ? `\u30D0\u30F3\u30AB\u30FC${fmtN(sa.bunkerHoleCount)}\u56DE\u3002\u56DE\u907F\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u610F\u8B58\u3057\u3066` : `\u30D0\u30F3\u30AB\u30FC${fmtN(sa.bunkerHoleCount)}\u56DE\u3002\u307E\u305A\u8131\u51FA\u3092\u6700\u512A\u5148\u306B`;
    })()
  };
  const categories = [
    { key: "tee", label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", score: sa.teeScore, hcpForGrade: hcp, idealGIRForGrade: null },
    { key: "long", label: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", score: sa.longScore, hcpForGrade: null, idealGIRForGrade: diagIdealGIR },
    ...shortTotal > 0 && sa.shortScore != null ? [{ key: "short", label: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", score: sa.shortScore, hcpForGrade: null, idealGIRForGrade: null, isShort: true, isDetailMode: sa.isDetailMode }] : [],
    { key: "putt", label: "\u30D1\u30C3\u30C8", score: sa.puttScore, hcpForGrade: null, idealGIRForGrade: null, isPutt: true },
    ...sa.bunkerScore != null ? [{ key: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", score: sa.bunkerScore, hcpForGrade: null, idealGIRForGrade: null }] : []
  ].map((c) => __spreadProps(__spreadValues({}, c), {
    insight: insights[c.key],
    displayScore: c.hcpForGrade !== null ? normalizeTeeScore(c.score, c.hcpForGrade) : c.idealGIRForGrade !== null ? normalizeLongScore(c.score, c.idealGIRForGrade) : c.score
  }));
  const sortedCats = [...categories].sort((a, b) => {
    var _a2, _b2;
    return ((_a2 = a.displayScore) != null ? _a2 : a.score) - ((_b2 = b.displayScore) != null ? _b2 : b.score);
  });
  const weakestCat = sortedCats[0];
  const isWeak = (cat) => {
    const g = gradeOf(cat.score, cat.hcpForGrade, cat.idealGIRForGrade, cat.isShort, cat.isDetailMode, cat.isPutt);
    return g.label === "C" || g.label === "D";
  };
  const forcedKeys = /* @__PURE__ */ new Set();
  const teeGradeLbl = gradeOf(sa.teeScore, hcp, null).label;
  const puttGradeLbl = gradeOf(sa.puttScore, null, null, false, false, true).label;
  if (sa.totalOB + sa.totalPen >= 4 && (teeGradeLbl === "C" || teeGradeLbl === "D")) forcedKeys.add("tee");
  if ((band.id === "S" || band.id === "A+" || band.id === "A") && sa.totalOB + sa.totalPen >= 2 && (teeGradeLbl === "C" || teeGradeLbl === "D")) forcedKeys.add("tee");
  if (threePutts >= 4 && (puttGradeLbl === "C" || puttGradeLbl === "D")) forcedKeys.add("putt");
  const forced = [...forcedKeys].map((k) => categories.find((c) => c.key === k)).filter(Boolean);
  const rest = sortedCats.filter((c) => !forcedKeys.has(c.key) && isWeak(c));
  const weaknesses = [...forced, ...rest].slice(0, 3);
  const adviceMap = {
    tee: {
      S: "\u30A4\u30F3\u30D1\u30AF\u30C8\u6642\u306E\u30D5\u30A7\u30FC\u30B9\u5411\u304D\u30FB\u5165\u5C04\u89D2\u3092\u78BA\u8A8D\u3002\u30DF\u30B9\u30B7\u30E7\u30C3\u30C8\u306E\u50BE\u5411\uFF08\u5F15\u3063\u639B\u3051/\u30D7\u30C3\u30B7\u30E5\uFF09\u3092\u628A\u63E1\u3057\u3066\u6839\u672C\u539F\u56E0\u304B\u3089\u4FEE\u6B63\u3057\u3088\u3046",
      "A+": "\u30A4\u30F3\u30D1\u30AF\u30C8\u6642\u306E\u30D5\u30A7\u30FC\u30B9\u5411\u304D\u30FB\u5165\u5C04\u89D2\u3092\u78BA\u8A8D\u3002\u30DF\u30B9\u30B7\u30E7\u30C3\u30C8\u306E\u50BE\u5411\uFF08\u5F15\u3063\u639B\u3051/\u30D7\u30C3\u30B7\u30E5\uFF09\u3092\u628A\u63E1\u3057\u3066\u6839\u672C\u539F\u56E0\u304B\u3089\u4FEE\u6B63\u3057\u3088\u3046",
      A: "\u30A4\u30F3\u30D1\u30AF\u30C8\u6642\u306E\u30D5\u30A7\u30FC\u30B9\u5411\u304D\u30FB\u5165\u5C04\u89D2\u3092\u78BA\u8A8D\u3002\u30DF\u30B9\u30B7\u30E7\u30C3\u30C8\u306E\u50BE\u5411\uFF08\u5F15\u3063\u639B\u3051/\u30D7\u30C3\u30B7\u30E5\uFF09\u3092\u628A\u63E1\u3057\u3066\u6839\u672C\u539F\u56E0\u304B\u3089\u4FEE\u6B63\u3057\u3088\u3046",
      B: "\u30B9\u30A4\u30F3\u30B0\u4E2D\u306E\u30A4\u30F3\u30D1\u30AF\u30C8\u30BE\u30FC\u30F3\u3092\u5B89\u5B9A\u3055\u305B\u308B\u3053\u3068\u304C\u5148\u6C7A\u3002\u30CF\u30FC\u30D5\u30B7\u30E7\u30C3\u30C8\u3067\u82AF\u306B\u5F53\u3066\u308B\u611F\u899A\u3092\u7E70\u308A\u8FD4\u3057\u78BA\u8A8D\u3057\u3088\u3046",
      C: "\u30AF\u30E9\u30D6\u3092\u77ED\u304F\u6301\u3061\u3001\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30B9\u30A4\u30F3\u30B0\u3067\u30B7\u30E7\u30C3\u30C8\u7CBE\u5EA6\u3092\u9AD8\u3081\u3088\u3046\u3002\u98DB\u8DDD\u96E2\u3088\u308A\u65B9\u5411\u6027\u3068\u82AF\u5F53\u3066\u3092\u512A\u5148\u306B",
      D: "\u307E\u305A\u30D5\u30EB\u30B7\u30E7\u30C3\u30C8\u3092\u6E1B\u3089\u3057\u3066\u30AF\u30A9\u30FC\u30BF\u30FC\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u3092\u7DF4\u7FD2\u3002\u30DF\u30B9\u306E\u65B9\u5411\u304C\u5B89\u5B9A\u3057\u3066\u304D\u3066\u304B\u3089\u5927\u304D\u304F\u632F\u308D\u3046",
      E: "\u307E\u305A\u30D5\u30EB\u30B7\u30E7\u30C3\u30C8\u3092\u6E1B\u3089\u3057\u3066\u30AF\u30A9\u30FC\u30BF\u30FC\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u3092\u7DF4\u7FD2\u3002\u30DF\u30B9\u306E\u65B9\u5411\u304C\u5B89\u5B9A\u3057\u3066\u304D\u3066\u304B\u3089\u5927\u304D\u304F\u632F\u308D\u3046"
    },
    long: {
      S: "\u6B8B\u308A\u8DDD\u96E2\u30FB\u30E9\u30A4\u30FB\u98A8\u3092\u52A0\u5473\u3057\u305F\u756A\u624B\u9078\u629E\u7CBE\u5EA6\u3092\u9AD8\u3081\u3088\u3046\u3002\u30B0\u30EA\u30FC\u30F3\u306E\u5B89\u5168\u306A\u30BE\u30FC\u30F3\u3078\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3082\u518D\u78BA\u8A8D",
      "A+": "\u6B8B\u308A\u8DDD\u96E2\u30FB\u30E9\u30A4\u30FB\u98A8\u3092\u52A0\u5473\u3057\u305F\u756A\u624B\u9078\u629E\u7CBE\u5EA6\u3092\u9AD8\u3081\u3088\u3046\u3002\u30B0\u30EA\u30FC\u30F3\u306E\u5B89\u5168\u306A\u30BE\u30FC\u30F3\u3078\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3082\u518D\u78BA\u8A8D",
      A: "\u6B8B\u308A\u8DDD\u96E2\u30FB\u30E9\u30A4\u30FB\u98A8\u3092\u52A0\u5473\u3057\u305F\u756A\u624B\u9078\u629E\u7CBE\u5EA6\u3092\u9AD8\u3081\u3088\u3046\u3002\u30B0\u30EA\u30FC\u30F3\u306E\u5B89\u5168\u306A\u30BE\u30FC\u30F3\u3078\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3082\u518D\u78BA\u8A8D",
      B: "\u30D1\u30FC\u30AA\u30F3\u306B\u3053\u3060\u308F\u3089\u305A\u624B\u524D\u82B1\u9053\u72D9\u3044\u3078\u3002\u30DC\u30AE\u30FC\u30AA\u30F3\u7387\u3092\u5B89\u5B9A\u3055\u305B\u3066\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u306B\u7E4B\u3052\u3088\u3046",
      C: "\u30B0\u30EA\u30FC\u30F3\u65B9\u5411\u3078\u6B63\u78BA\u306B\u5411\u3051\u308B\u3053\u3068\u3092\u610F\u8B58\u3002\u30DF\u30B9\u306E\u65B9\u5411\u3068\u8DDD\u96E2\u611F\u306E\u30AF\u30BB\u3092\u81EA\u899A\u3057\u3066\u756A\u624B\u30921\u672C\u4E0A\u3052\u308B\u3053\u3068\u3082\u691C\u8A0E",
      D: "\u30D5\u30A7\u30A2\u30A6\u30A7\u30A4\u30A6\u30C3\u30C9\u3088\u308AUT\u30FB\u30DF\u30C9\u30EB\u30A2\u30A4\u30A2\u30F3\u3067\u5B89\u5B9A\u611F\u3092\u3002\u30B7\u30E7\u30C3\u30C8\u7CBE\u5EA6\u3088\u308A\u30DC\u30FC\u30EB\u306E\u7F6E\u304D\u5834\u6240\u3092\u8003\u3048\u3088\u3046",
      E: "\u30D5\u30A7\u30A2\u30A6\u30A7\u30A4\u30A6\u30C3\u30C9\u3088\u308AUT\u30FB\u30DF\u30C9\u30EB\u30A2\u30A4\u30A2\u30F3\u3067\u5B89\u5B9A\u611F\u3092\u3002\u30B7\u30E7\u30C3\u30C8\u7CBE\u5EA6\u3088\u308A\u30DC\u30FC\u30EB\u306E\u7F6E\u304D\u5834\u6240\u3092\u8003\u3048\u3088\u3046"
    },
    short: {
      S: "60Y\u4EE5\u5185\u306E\u30ED\u30D6\u30FB\u30E9\u30F3\u30CB\u30F3\u30B0\u306E\u4F7F\u3044\u5206\u3051\u3092\u78E8\u3053\u3046\u3002\u30E9\u30A4\u5225\u306E\u7403\u7B4B\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u304C\u30B9\u30B3\u30A2\u306E\u58C1\u3092\u7834\u308B",
      "A+": "60Y\u4EE5\u5185\u306E\u30ED\u30D6\u30FB\u30E9\u30F3\u30CB\u30F3\u30B0\u306E\u4F7F\u3044\u5206\u3051\u3092\u78E8\u3053\u3046\u3002\u30E9\u30A4\u5225\u306E\u7403\u7B4B\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u304C\u30B9\u30B3\u30A2\u306E\u58C1\u3092\u7834\u308B",
      A: "60Y\u4EE5\u5185\u306E\u30ED\u30D6\u30FB\u30E9\u30F3\u30CB\u30F3\u30B0\u306E\u4F7F\u3044\u5206\u3051\u3092\u78E8\u3053\u3046\u3002\u30E9\u30A4\u5225\u306E\u7403\u7B4B\u30D0\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u304C\u30B9\u30B3\u30A2\u306E\u58C1\u3092\u7834\u308B",
      B: "10m\u4EE5\u5185\u306B\u5BC4\u305B\u308B\u7CBE\u5EA6\u3092\u4E0A\u3052\u308B\u3053\u3068\u304C\u76EE\u6A19\u3002\u90312\u56DE\u4EE5\u4E0A\u30A2\u30D7\u30ED\u30FC\u30C1\u7DF4\u7FD2\u306B\u96C6\u4E2D\u3057\u3066\u91CF\u3092\u3053\u306A\u305D\u3046",
      C: "\u307E\u305A\u30B0\u30EA\u30FC\u30F3\u306B\u78BA\u5B9F\u306B\u4E57\u305B\u308B\u3053\u3068\u3092\u6700\u512A\u5148\u306B\u3002\u30B7\u30E7\u30FC\u30C8\u306F\u7D76\u5BFENG\u3001\u5965\u3088\u308A\u624B\u524D\u30672\u30D1\u30C3\u30C8\u3092\u53D6\u308B\u8A2D\u8A08\u3067",
      D: "\u30C8\u30C3\u30D7\u30FB\u30C0\u30D5\u30EA\u3092\u64B2\u6EC5\u3057\u3088\u3046\u3002SW\u3088\u308A\u8EE2\u304C\u3057\uFF08PW/AW\uFF09\u3092\u4F7F\u3063\u3066\u30DF\u30B9\u5E45\u3092\u6E1B\u3089\u3059\u3053\u3068\u304B\u3089\u59CB\u3081\u3066",
      E: "\u30C8\u30C3\u30D7\u30FB\u30C0\u30D5\u30EA\u3092\u64B2\u6EC5\u3057\u3088\u3046\u3002SW\u3088\u308A\u8EE2\u304C\u3057\uFF08PW/AW\uFF09\u3092\u4F7F\u3063\u3066\u30DF\u30B9\u5E45\u3092\u6E1B\u3089\u3059\u3053\u3068\u304B\u3089\u59CB\u3081\u3066"
    },
    putt: {
      S: "5m\u8D85\u306E\u30ED\u30F3\u30B0\u30D1\u30C3\u30C8\u8DDD\u96E2\u611F\u7CBE\u5EA6\u304C\u9375\u30023\u30D1\u30C3\u30C8\u3092\u30B7\u30FC\u30BA\u30F3\u901A\u3058\u3066\u30BC\u30ED\u306B\u3059\u308B\u5F37\u3044\u610F\u8B58\u3067\u6BCE\u7DF4\u7FD2\u306E\u6700\u521D\u306B\u53D6\u308A\u7D44\u3082\u3046",
      "A+": "5m\u8D85\u306E\u30ED\u30F3\u30B0\u30D1\u30C3\u30C8\u8DDD\u96E2\u611F\u7CBE\u5EA6\u304C\u9375\u30023\u30D1\u30C3\u30C8\u3092\u30B7\u30FC\u30BA\u30F3\u901A\u3058\u3066\u30BC\u30ED\u306B\u3059\u308B\u5F37\u3044\u610F\u8B58\u3067\u6BCE\u7DF4\u7FD2\u306E\u6700\u521D\u306B\u53D6\u308A\u7D44\u3082\u3046",
      A: "5m\u8D85\u306E\u30ED\u30F3\u30B0\u30D1\u30C3\u30C8\u8DDD\u96E2\u611F\u7CBE\u5EA6\u304C\u9375\u30023\u30D1\u30C3\u30C8\u3092\u30B7\u30FC\u30BA\u30F3\u901A\u3058\u3066\u30BC\u30ED\u306B\u3059\u308B\u5F37\u3044\u610F\u8B58\u3067\u6BCE\u7DF4\u7FD2\u306E\u6700\u521D\u306B\u53D6\u308A\u7D44\u3082\u3046",
      B: "2m\u4EE5\u5185\u306E\u30B7\u30E7\u30FC\u30C8\u30D1\u30C3\u30C8\u3092\u30EB\u30FC\u30C6\u30A3\u30F3\u5316\u3002\u6BCE\u56DE\u540C\u3058\u624B\u9806\u3067\u69CB\u3048\u308B\u3053\u3068\u3067\u5B89\u5B9A\u7387\u3092\u4E0A\u3052\u3088\u3046",
      C: "3\u30D1\u30C3\u30C8\u64B2\u6EC5\u304C\u6700\u512A\u5148\u8AB2\u984C\u30021\u6253\u76EE\u3067\u5FC5\u305A\u30AB\u30C3\u30D750cm\u4EE5\u5185\u306B\u5C4A\u304B\u305B\u308B\u8DDD\u96E2\u611F\u7DF4\u7FD2\u3092\u7E70\u308A\u8FD4\u305D\u3046",
      D: "\u65B9\u5411\u6027\u3088\u308A\u8DDD\u96E2\u611F\u3092\u5148\u306B\u8EAB\u306B\u4ED8\u3051\u3088\u3046\u3002\u30B7\u30E7\u30FC\u30C8/\u30AA\u30FC\u30D0\u30FC\u3057\u306A\u3044\u3088\u3046\u306B\u632F\u308A\u5E45\u3068\u30DC\u30FC\u30EB\u8EE2\u304C\u308A\u3092\u4F53\u306B\u899A\u3048\u3055\u305B\u3066",
      E: "\u65B9\u5411\u6027\u3088\u308A\u8DDD\u96E2\u611F\u3092\u5148\u306B\u8EAB\u306B\u4ED8\u3051\u3088\u3046\u3002\u30B7\u30E7\u30FC\u30C8/\u30AA\u30FC\u30D0\u30FC\u3057\u306A\u3044\u3088\u3046\u306B\u632F\u308A\u5E45\u3068\u30DC\u30FC\u30EB\u8EE2\u304C\u308A\u3092\u4F53\u306B\u899A\u3048\u3055\u305B\u3066"
    },
    bunker: {
      S: "\u305D\u3082\u305D\u3082\u30D0\u30F3\u30AB\u30FC\u306B\u5165\u308C\u306A\u3044\u30B3\u30FC\u30B9\u7BA1\u7406\u304C\u4E0A\u7D1A\u8005\u3078\u306E\u8FD1\u9053\u3002\u30D4\u30F3\u4F4D\u7F6E\u3068\u30CF\u30B6\u30FC\u30C9\u3092\u5148\u8AAD\u307F\u3057\u3066\u30D0\u30F3\u30AB\u30FC\u624B\u524D\u306B\u523B\u3080\u9078\u629E\u80A2\u3082\u6301\u3068\u3046\u3002\u5165\u3063\u305F\u5834\u5408\u306F\u30B9\u30D4\u30F3\u91CF\u30FB\u8DDD\u96E2\u611F\u3092\u5B89\u5B9A\u3055\u305B\u3066\u8131\u51FA\u7387100%\u3092\u7DAD\u6301",
      "A+": "\u30D4\u30F3\u4F4D\u7F6E\u3068\u30CF\u30B6\u30FC\u30C9\u3092\u5148\u8AAD\u307F\u3057\u3066\u30D0\u30F3\u30AB\u30FC\u56DE\u907F\u30EB\u30FC\u30C8\u3092\u5FB9\u5E95\u3057\u3088\u3046\u3002\u5165\u3063\u305F\u5834\u5408\u306F\u8131\u51FA\u7387100%\u3092\u6B7B\u5B88\u3001\u8DDD\u96E2\u611F\u306E\u7CBE\u5EA6\u5411\u4E0A\u3067\u300C\u5BC4\u305B\u30EF\u30F3\u300D\u3092\u72D9\u3048\u308B\u30EC\u30D9\u30EB\u3078",
      A: "\u30B7\u30E7\u30C3\u30C8\u524D\u306B\u5FC5\u305A\u30D0\u30F3\u30AB\u30FC\u56DE\u907F\u30EB\u30FC\u30C8\u3092\u78BA\u8A8D\u3059\u308B\u7FD2\u6163\u3092\u3064\u3051\u3088\u3046\u3002\u5165\u308C\u306A\u3044\u3053\u3068\u304C\u6700\u5584\u3001\u5165\u3063\u305F\u5834\u5408\u306F1\u6253\u3067\u8131\u51FA\u3059\u308B\u3053\u3068\u3092\u6700\u512A\u5148\u306B\u30E9\u30A4\u30FB\u7802\u306E\u6DF1\u3055\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u30B9\u30BF\u30F3\u30B9\u3092\u6C7A\u3081\u3066",
      B: "\u30AF\u30E9\u30D6\u9078\u629E\u3068\u30BF\u30FC\u30B2\u30C3\u30C8\u8A2D\u5B9A\u3067\u30D0\u30F3\u30AB\u30FC\u3092\u907F\u3051\u308B\u3053\u3068\u3092\u610F\u8B58\u3057\u3088\u3046\u3002\u5165\u3063\u3066\u3057\u307E\u3063\u305F\u5834\u5408\u306F1\u6253\u3067\u78BA\u5B9F\u306B\u8131\u51FA\u3059\u308B\u3053\u3068\u3092\u6700\u512A\u5148\u306B\u3001\u30E9\u30A4\u3068\u7802\u306E\u6DF1\u3055\u3092\u78BA\u8A8D\u3057\u3066\u304B\u3089\u6253\u3064\u624B\u9806\u3092\u5FB9\u5E95\u3057\u3066",
      C: "\u30D0\u30F3\u30AB\u30FC\u306B\u5165\u308C\u306A\u3044\u30B3\u30FC\u30B9\u7BA1\u7406\u3092\u7B2C\u4E00\u306B\u8003\u3048\u3088\u3046\u3002\u30B0\u30EA\u30FC\u30F3\u624B\u524D\u306B\u523B\u3080\u52C7\u6C17\u304C\u5927\u5207\u3002\u5165\u3063\u305F\u5834\u5408\u306F\u30D0\u30F3\u30AB\u30FC\u7DF4\u7FD2\u3092\u67081\u56DE\u4EE5\u4E0A\u53D6\u308A\u5165\u308C\u3001\u7126\u3089\u305A\u8131\u51FA\u3092\u6700\u512A\u5148\u306B",
      D: "\u30D0\u30F3\u30AB\u30FC\u56DE\u907F\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u5FB9\u5E95\u3057\u3088\u3046\u3002\u7121\u7406\u306B\u30D4\u30F3\u3092\u72D9\u308F\u305A\u30D0\u30F3\u30AB\u30FC\u306E\u306A\u3044\u5B89\u5168\u30BE\u30FC\u30F3\u3092\u5E38\u306B\u72D9\u3046\u3053\u3068\u3067\u30B9\u30B3\u30A2\u304C\u5B89\u5B9A\u3059\u308B\u3002\u5165\u3063\u3066\u3057\u307E\u3063\u305F\u3089\u5FC5\u305A1\u6253\u3067\u8131\u51FA\u3059\u308B\u3053\u3068\u3092\u6700\u4F4E\u30E9\u30A4\u30F3\u306B",
      E: "\u30D0\u30F3\u30AB\u30FC\u56DE\u907F\u306E\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u5FB9\u5E95\u3057\u3088\u3046\u3002\u7121\u7406\u306B\u30D4\u30F3\u3092\u72D9\u308F\u305A\u30D0\u30F3\u30AB\u30FC\u306E\u306A\u3044\u5B89\u5168\u30BE\u30FC\u30F3\u3092\u5E38\u306B\u72D9\u3046\u3053\u3068\u3067\u30B9\u30B3\u30A2\u304C\u5B89\u5B9A\u3059\u308B\u3002\u5165\u3063\u3066\u3057\u307E\u3063\u305F\u3089\u5FC5\u305A1\u6253\u3067\u8131\u51FA\u3059\u308B\u3053\u3068\u3092\u6700\u4F4E\u30E9\u30A4\u30F3\u306B"
    }
  };
  const priorities = ["\u6700\u512A\u5148", "\u91CD\u8981", "\u63A8\u5968"];
  const priorityColors = ["#dc2626", "#fbbf24", "#16a34a"];
  const advice = weaknesses.slice(0, 3).map((w, i) => ({
    priority: priorities[i],
    priorityColor: priorityColors[i],
    text: (adviceMap[w.key] || {})[band.id] || ""
  }));
  if (!advice.length) advice.push({ priority: "\u7DAD\u6301", priorityColor: "#16a34a", text: "\u5168\u8981\u7D20\u304C\u5B89\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002\u73FE\u5728\u306E\u7DF4\u7FD2\u30E1\u30CB\u30E5\u30FC\u3092\u7D99\u7D9A\u3057\u307E\u3057\u3087\u3046" });
  const currentRoundData = (rounds || []).find((r) => r.id === roundId);
  const currentDateNum = currentRoundData ? dateToNum(currentRoundData.date) : Infinity;
  const prevRounds = (rounds || []).filter((r) => r.isComplete && r.id !== roundId && Object.keys(r.simpleHoleData || {}).length > 0).filter((r) => {
    const rCount2 = Object.keys(r.simpleHoleData || {}).length;
    if (!(is9H ? rCount2 <= 12 : rCount2 > 12)) return false;
    return dateToNum(r.date) < currentDateNum;
  }).sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
  let trend = null;
  if (prevRounds.length > 0) {
    const prev = prevRounds[0];
    const prevSA = calcAnalytics(prev, hcp, null);
    if (prevSA) {
      const prevGap = prevSA.totalScore - (prevSA.totalPar + (prevSA.holeCount <= 12 ? Math.floor(hcp / 2) : hcp));
      const change = Math.round((gap - prevGap) * 10) / 10;
      const flatLabel = `${weakestCat.label}\u306B\u307E\u3060\u6539\u5584\u4F59\u5730\u304C\u3042\u308A\u307E\u3059`;
      trend = {
        label: change < -1 ? "\u6539\u5584\u4E2D \u2191" : change > 1 ? "\u60AA\u5316 \u2193" : "\u6A2A\u3070\u3044 \u2192",
        color: change < -1 ? "#16a34a" : change > 1 ? "#dc2626" : "#94a3b8",
        text: change <= -5 ? `\u524D\u56DE\u3088\u308A${Math.abs(change)}\u6253\u6539\u5584\uFF01\u96C6\u4E2D\u7684\u306A\u7DF4\u7FD2\u306E\u6210\u679C\u304C\u51FA\u3066\u3044\u307E\u3059` : change < -1 ? "\u7740\u5B9F\u306B\u826F\u304F\u306A\u3063\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u8ABF\u5B50\u3067\u30D7\u30EC\u30FC\u3092\u7D9A\u3051\u307E\u3057\u3087\u3046" : change <= 1 ? `\u30B9\u30B3\u30A2\u306F\u5B89\u5B9A\u3057\u3066\u3044\u308B\u304C\u3001${flatLabel}` : change <= 4 ? `\u524D\u56DE\u3088\u308A\u5C11\u3057\u843D\u3061\u307E\u3057\u305F\u3002${weakestCat.label}\u306E\u72B6\u614B\u3092\u78BA\u8A8D\u3057\u3066\u307F\u3066` : `\u524D\u56DE\u3088\u308A${change}\u6253\u60AA\u5316\u3002${weakestCat.label}\u3092\u4E2D\u5FC3\u306B\u8AB2\u984C\u3092\u6574\u7406\u3057\u3088\u3046`,
        prevDate: prev.date
      };
    }
  }
  return { lvl, band, gap, expectedScore, hcAdj, is9H, categories, weaknesses, advice, trend, gradeOf, barW, barC };
}
function dateToNum(d) {
  if (!d) return 0;
  const p = d.split("/").map(Number);
  return (p[0] || 0) * 1e4 + (p[1] || 0) * 100 + (p[2] || 0);
}
function scoreDiffSymbol(diff) {
  if (diff <= -3) return { sym: "\u2606", color: "#b91c1c" };
  if (diff === -2) return { sym: "\u25CE", color: "#dc2626" };
  if (diff === -1) return { sym: "\u25CB", color: "#ef4444" };
  if (diff === 0) return { sym: "\uFF0D", color: "#16a34a" };
  if (diff === 1) return { sym: "\u25B3", color: "#60a5fa" };
  if (diff === 2) return { sym: "\u25A1", color: "#3b82f6" };
  if (diff === 3) return { sym: "\u25A0", color: "#1d4ed8" };
  return { sym: `+${diff}`, color: "#1e3a8a" };
}
function AiDiagnosisPanel({ sa, sa5 = null, shd, hcp, rounds, roundId, teeRates = null, showTrend = true, label = "AI \u30B9\u30B3\u30A2\u8A3A\u65AD", roundCount = null, dateRange = null, radarSlot = null }) {
  var _a;
  const [showDefs, setShowDefs] = useState(false);
  let d;
  try {
    d = generateDiagnosis(sa, shd, hcp, rounds, roundId, roundCount, (_a = sa5 == null ? void 0 : sa5.totalScore) != null ? _a : null);
  } catch (e) {
    return null;
  }
  if (!d || !d.lvl || !d.band) return null;
  const rexyWeather = roundId != null && Array.isArray(rounds) ? (rounds.find((r) => r.id === roundId) || {}).weather : null;
  const rexyCostume = rexyCostumeForWeather(rexyWeather);
  return /* @__PURE__ */ React.createElement("div", { style: { marginTop: "12px" } }, /* @__PURE__ */ React.createElement("style", null, `
        @keyframes diagUp { from{opacity:0;transform:translateY(7px)} to{opacity:1;transform:translateY(0)} }
        .dag0{animation:diagUp .4s ease .00s both}
        .dag1{animation:diagUp .4s ease .07s both}
        .dag2{animation:diagUp .4s ease .14s both}
        .dag3{animation:diagUp .4s ease .21s both}
        .dag4{animation:diagUp .4s ease .28s both}
        .dag5{animation:diagUp .4s ease .35s both}
        @keyframes barGrow { from{width:0} }
        .dbar{animation:barGrow .8s cubic-bezier(.4,0,.2,1) .3s both}
      `), /* @__PURE__ */ React.createElement("div", { className: "dag0", style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", letterSpacing: ".06em" } }, label), roundCount != null && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b", background: "#f1f5f9", borderRadius: "4px", padding: "1px 6px" } }, roundCount, "\u30E9\u30A6\u30F3\u30C9\u5E73\u5747"), dateRange && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8" } }, dateRange), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "1px", background: "#e2e8f0" } })), /* @__PURE__ */ React.createElement("div", { className: "dag1", style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px 14px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b", marginBottom: "2px", textTransform: "uppercase", letterSpacing: ".08em" } }, "\u7DCF\u5408\u8A55\u4FA1"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "17px", fontWeight: "900", color: d.lvl.color } }, d.lvl.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b", marginTop: "2px" } }, "HC ", hcp, " (", d.band.label, ")")), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "22px", fontWeight: "800", color: d.gap >= 0 ? "#f97316" : "#16a34a", lineHeight: 1 } }, d.gap >= 0 ? "+" : "", d.gap), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b" } }, sa5 ? "\u76F4\u8FD15R\u5E73\u5747\uFF0F" : "", "\u671F\u5F85", d.expectedScore, "\u6BD4"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.65 } }, d.lvl.comment)), radarSlot, /* @__PURE__ */ React.createElement("div", { className: "dag2", style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px 14px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "5\u8981\u7D20\u5206\u6790")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowDefs(!showDefs),
      style: {
        padding: "2px 8px",
        borderRadius: "12px",
        border: "1px solid #e2e8f0",
        background: showDefs ? "#e2e8f0" : "#f1f5f9",
        color: "#64748b",
        fontSize: "9px",
        fontWeight: "700",
        cursor: "pointer",
        whiteSpace: "nowrap"
      },
      "aria-label": "\u7528\u8A9E\u306E\u5B9A\u7FA9\u3092\u8868\u793A/\u975E\u8868\u793A"
    },
    "\u2139 \u7528\u8A9E"
  )), sa5 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "8px", fontSize: "8px", color: "#64748b", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#fbbf24", fontWeight: "700", minWidth: "32px", textAlign: "center" } }, "\u76F4\u8FD15R"), /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700", minWidth: "32px", textAlign: "center" } }, "\u76F4\u8FD120R")), showDefs && /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: "9px",
    color: "#64748b",
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    padding: "7px 9px",
    marginBottom: "10px",
    lineHeight: 1.6
  } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("b", { style: { color: "#1e293b" } }, "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8"), ": Par4/5\u306E\u6700\u521D\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u306F\u9664\u5916\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("b", { style: { color: "#1e293b" } }, "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0"), ": 100Y\u8D85\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u8D85\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", { style: { color: "#1e293b" } }, "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0"), ": 100Y\u4EE5\u5185\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u4EE5\u5185\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09")), d.categories.map((cat) => {
    const g20 = d.gradeOf(cat.score, cat.hcpForGrade, cat.idealGIRForGrade, cat.isShort, cat.isDetailMode, cat.isPutt);
    const score5 = sa5 ? (() => {
      var _a2;
      const keyMap = { tee: "teeScore", long: "longScore", short: "shortScore", putt: "puttScore", bunker: "bunkerScore" };
      return (_a2 = sa5[keyMap[cat.key]]) != null ? _a2 : null;
    })() : null;
    const useScore = score5 != null ? score5 : cat.score;
    const g5 = score5 != null ? d.gradeOf(score5, cat.hcpForGrade, cat.idealGIRForGrade, cat.isShort, cat.isDetailMode, cat.isPutt) : g20;
    const ds5 = score5 != null ? cat.hcpForGrade !== null ? d.normalizeTeeScore ? d.normalizeTeeScore(score5, cat.hcpForGrade) : score5 : cat.idealGIRForGrade !== null ? score5 : score5 : cat.displayScore;
    const computeDs5 = (() => {
      if (cat.hcpForGrade !== null) {
        const h = Math.max(0.1, cat.hcpForGrade);
        return (useScore >= 0 ? useScore / (h * 0.3) : useScore / (h * 0.15)) * 1.5;
      }
      if (cat.idealGIRForGrade !== null) {
        const ig = Math.max(0.01, cat.idealGIRForGrade);
        return useScore / ig * (1.5 / 0.3);
      }
      return useScore;
    })();
    return /* @__PURE__ */ React.createElement("div", { key: cat.key, style: { marginBottom: "9px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "700", color: "#1e293b", minWidth: "74px", flexShrink: 0, whiteSpace: "nowrap" } }, cat.label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "6px", background: "#f1f5f9", borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "dbar", style: { height: "100%", width: d.barW(computeDs5), background: d.barC(computeDs5), borderRadius: "3px" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#64748b", fontWeight: "700", minWidth: "42px", textAlign: "right" } }, (useScore >= 0 ? "+" : "") + (useScore != null ? useScore : 0).toFixed(1)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "900", color: g5.color, width: "22px", textAlign: "center" } }, g5.label), sa5 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: g20.color, width: "22px", textAlign: "center", opacity: 0.7 } }, g20.label)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", paddingLeft: "24px", lineHeight: 1.5 } }, cat.insight));
  }), d.weaknesses.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "dag3", style: { marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "6px", display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("span", null, "\u6539\u5584\u8AB2\u984C\uFF08\u512A\u5148\u9806\uFF09")), d.weaknesses.map((w, i) => /* @__PURE__ */ React.createElement("div", { key: w.key, style: { display: "flex", alignItems: "flex-start", gap: "10px", padding: "10px 4px", borderBottom: i < d.weaknesses.length - 1 ? "1px solid #f1f5f9" : "none" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "18px", fontWeight: "900", color: ["#dc2626", "#fbbf24", "#94a3b8"][i], flexShrink: 0, lineHeight: 1.2, minWidth: "16px", textAlign: "center" } }, i + 1), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: "#1e293b", marginBottom: "2px" } }, w.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.5 } }, w.insight))))), /* @__PURE__ */ React.createElement("div", { className: "dag4", style: { marginTop: "14px", paddingTop: "14px", borderTop: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "6px", display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "\u6539\u5584\u30A2\u30C9\u30D0\u30A4\u30B9")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", alignItems: "flex-start" } }, REXY_IMAGES[rexyCostume] && /* @__PURE__ */ React.createElement(RexyIcon, { costume: rexyCostume, size: 64, alt: "", style: { marginTop: "2px" } }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, d.advice.map((a, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: "9px", alignItems: "flex-start", padding: "10px 4px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "3px", alignSelf: "stretch", background: a.priorityColor, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: a.priorityColor, marginBottom: "3px" } }, a.priority), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#475569", lineHeight: 1.6 } }, a.text)))))))), showTrend && d.trend && /* @__PURE__ */ React.createElement("div", { className: "dag5", style: { padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b" } }, "\u30C8\u30EC\u30F3\u30C9"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "800", color: d.trend.color } }, d.trend.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8", marginLeft: "auto" } }, "\u524D\u56DE: ", d.trend.prevDate)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.6 } }, d.trend.text)));
}
function deriveSimpleHoleData(holeData, holePars) {
  const pars = holePars || Array(18).fill(4);
  const result = {};
  Object.entries(holeData).forEach(([hStr, hInfo]) => {
    if (!(hInfo == null ? void 0 : hInfo.done)) return;
    const h = parseInt(hStr);
    const par = pars[h - 1] || 4;
    const shots = hInfo.shots || [];
    const isNewFmt = shots.some((s) => s.quality !== void 0);
    const extraPen = hInfo.extraPenalty || 0;
    const score = shots.reduce((a, s) => a + s.shotCount, 0) + extraPen;
    const putts = shots.filter((s) => s.categoryKey === "putt").reduce((a, s) => a + s.shotCount, 0);
    let ob, penalty, bunker, teeEval, secondEval, thirdEval, approachEval;
    if (isNewFmt) {
      ob = shots.filter((s) => s.subType === "ob").length;
      penalty = shots.filter((s) => s.subType === "1pen").reduce((a, s) => a + (s.penaltyCount || 0), 0) + extraPen;
      bunker = shots.filter((s) => s.subType === "bunker").length;
      const teeShot = shots.find((s) => s.categoryKey === "tee");
      if (teeShot) {
        teeEval = teeShot.quality === "\u25CB" ? "good" : teeShot.quality === "\u25B3" ? "fair" : "bad";
      } else {
        teeEval = null;
      }
      const approachShots = shots.filter((s) => s.categoryKey === "approach");
      const longShot = approachShots.find((s) => LONG_DIST_SET.has(s.remainDist));
      if (longShot) {
        const q = longShot.quality;
        secondEval = q === "\u25CB" ? "good" : q === "\u25B3" ? "fair" : "bad";
      } else {
        secondEval = null;
      }
      const shortShot = approachShots.find((s) => SHORT_DIST_SET.has(s.remainDist));
      if (shortShot) {
        const q = shortShot.quality;
        thirdEval = q === "\u25CB" ? "good" : q === "\u25B3" ? "fair" : "bad";
      } else {
        thirdEval = null;
      }
      if (approachShots.length > 0) {
        const q = approachShots[approachShots.length - 1].quality;
        approachEval = q === "\u25CB" ? "good" : q === "\u25B3" ? "fair" : "bad";
      } else {
        approachEval = "none";
      }
    } else {
      ob = shots.filter((s) => s.optionId === "ob").length;
      penalty = shots.filter((s) => s.optionId !== "ob").reduce((a, s) => a + (s.penaltyCount || 0), 0);
      bunker = shots.filter((s) => s.optionId === "bunker" || s.optionId === "pond").length;
      const teeShot = shots.find((s) => s.categoryKey === "tee_par4plus" || s.categoryKey === "tee_par3");
      if (teeShot) {
        const oid = teeShot.optionId;
        teeEval = oid === "fw_ok" || oid === "on" ? "good" : oid === "fw_ng" || oid === "near" ? "fair" : "bad";
      } else {
        teeEval = null;
      }
      secondEval = null;
      if (par >= 4) {
        const cat = par === 4 ? "second_par4" : "second_par5";
        const sh = shots.find((s) => s.categoryKey === cat);
        if (sh) {
          const oid = sh.optionId;
          secondEval = oid === "on" || oid === "fw_ok" ? "good" : oid === "near" || oid === "fw_ng" ? "fair" : "bad";
        }
      }
      thirdEval = null;
      if (par >= 5) {
        const sh = shots.find((s) => s.categoryKey === "fairway");
        if (sh) {
          const oid = sh.optionId;
          thirdEval = oid === "on" ? "good" : oid === "near" || oid === "fw_ng" ? "fair" : "bad";
        }
      }
      const approachShots = shots.filter((s) => s.categoryKey === "approach");
      if (approachShots.length > 0) {
        const last = approachShots[approachShots.length - 1];
        approachEval = last.optionId === "on" ? "good" : last.optionId === "near" ? "fair" : "bad";
      } else {
        approachEval = "none";
      }
    }
    const note = shots.map((s) => s.note).filter(Boolean).join(" / ");
    result[h] = {
      score,
      putts,
      ob,
      penalty,
      bunker,
      teeEval,
      secondEval,
      thirdEval,
      approachEval,
      note
    };
  });
  return result;
}
class RoundCardErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.warn("[RoundCard] render error caught:", err == null ? void 0 : err.message);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 16px", borderRadius: "10px", border: "1px solid rgba(248,113,113,0.3)", background: "rgba(248,113,113,0.04)", color: "#f87171", fontSize: "12px", marginBottom: "10px" } }, "\u26A0\uFE0F \u3053\u306E\u30E9\u30A6\u30F3\u30C9\u306E\u8868\u793A\u4E2D\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\uFF08\u30C7\u30FC\u30BF\u5F62\u5F0F\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\uFF09");
    }
    return this.props.children;
  }
}
function GolfTracker() {
  var _a, _b, _c, _d, _e;
  const [view, setView] = useState("home");
  const [inputMode, setInputMode] = useState("simple");
  const [simpleHoleData, setSimpleHoleData] = useState({});
  const [rounds, setRounds] = useState([]);
  const [importedTestData, setImportedTestData] = useState([]);
  const [dataMgmtOpen, setDataMgmtOpen] = useState(false);
  const [storageLoaded, setStorageLoaded] = useState(false);
  const [currentRound, setCurrentRound] = useState(null);
  const [currentHole, setCurrentHole] = useState(1);
  const [holePars, setHolePars] = useState(Array(18).fill(4));
  const [holeData, setHoleData] = useState({});
  const [showExtraPenaltyModal, setShowExtraPenaltyModal] = useState(false);
  const [extraPenaltyDraft, setExtraPenaltyDraft] = useState(0);
  const [showShotForm, setShowShotForm] = useState(false);
  const [showNewRound, setShowNewRound] = useState(false);
  const [showDiscardWarning, setShowDiscardWarning] = useState(false);
  const [showHcpWarning, setShowHcpWarning] = useState(false);
  const BUY_LINK_URL = "https://note.com/yostvt/n/n1b365d1d69da";
  const DETAIL_FREE_LIMIT = 3;
  const DETAIL_PRICE_LABEL = "\xA5500";
  const UNLOCK_CODES = ["SCRX-EZ6U-98QV"];
  const [detailUnlocked, setDetailUnlocked] = useState(false);
  const [showDetailPaywall, setShowDetailPaywall] = useState(false);
  const [unlockInput, setUnlockInput] = useState("");
  const [unlockError, setUnlockError] = useState("");
  useEffect(() => {
    try {
      if (localStorage.getItem("golf_detail_unlocked") === "1") setDetailUnlocked(true);
    } catch (_) {
    }
  }, []);
  const [shotDetailRid, setShotDetailRid] = useState(null);
  const [scoreDisplayMode, setScoreDisplayMode] = useState("number");
  const [courseName, setCourseName] = useState("");
  const [showYardage, setShowYardage] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [venueDropdownOpen, setVenueDropdownOpen] = useState(false);
  const [venueTab, setVenueTab] = useState("fav");
  const [selectedCourseA, setSelectedCourseA] = useState(null);
  const [selectedCourseB, setSelectedCourseB] = useState(null);
  const [selectedGreen, setSelectedGreen] = useState(null);
  const [selectedTee, setSelectedTee] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState("sunny");
  const [selectedWind, setSelectedWind] = useState(0);
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
  });
  const [editingRoundId, setEditingRoundId] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editWeather, setEditWeather] = useState("sunny");
  const [editWind, setEditWind] = useState(0);
  const [savedClubs, setSavedClubs] = useState([]);
  const [showHcpHint, setShowHcpHint] = useState(false);
  const [profile, setProfile] = useState({ nickname: "", bestScore: null, targetHcp: null, manualHcp: null, hcpMode: "auto", favoriteVenues: [] });
  const [profileEdit, setProfileEdit] = useState(null);
  const [toast, setToast] = useState({ message: "", visible: false });
  const toastTimerRef = React.useRef(null);
  const announcedRef = React.useRef(/* @__PURE__ */ new Set());
  const prevHcpRef = React.useRef(void 0);
  const hcpInitializedRef = React.useRef(false);
  const showToast = (message) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ message, visible: true });
    toastTimerRef.current = setTimeout(() => setToast({ message: "", visible: false }), 2800);
  };
  const scoreToast = (score, par2) => {
    const diff = score - par2;
    if (diff <= -3) showToast("\u30A2\u30EB\u30D0\u30C8\u30ED\u30B9\uFF01\uFF01\u304A\u3081\u3067\u3068\u3046\uFF01");
    else if (diff === -2) showToast("\u30CA\u30A4\u30B9\u30A4\u30FC\u30B0\u30EB\uFF01");
    else if (diff === -1) showToast("\u30CA\u30A4\u30B9\u30D0\u30FC\u30C7\u30A3\uFF01\uFF01");
    else if (diff === 0) showToast("\u30CA\u30A4\u30B9\u30D1\u30FC\uFF01");
  };
  const saveProfile = (p) => {
    setProfile(p);
  };
  useEffect(() => {
    if (!storageLoaded) return;
    try {
      localStorage.setItem("golf_profile", JSON.stringify(profile));
    } catch (_) {
    }
    if (true) {
      (() => {
        try {
          localStorage.setItem("golf_profile", JSON.stringify(profile));
        } catch (_) {
        }
      })();
    }
  }, [profile, storageLoaded]);
  useEffect(() => {
    let localStorageHadProfile = false;
    try {
      const raw = localStorage.getItem("golf_clubs");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setSavedClubs(parsed);
      }
    } catch (_) {
    }
    let localStorageHadRounds = false;
    try {
      const raw = localStorage.getItem("golf_rounds");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          localStorageHadRounds = true;
          const migrated = parsed.map((r) => {
            const base = __spreadProps(__spreadValues({}, r), { shots: r.shots || [] });
            if (base.inputMode === "detail" && Object.keys(base.simpleHoleData || {}).length === 0 && base.holeData) {
              return __spreadProps(__spreadValues({}, base), { simpleHoleData: deriveSimpleHoleData(base.holeData, base.holePars) });
            }
            return base;
          });
          setRounds(migrated);
        }
      }
    } catch (_) {
    }
    try {
      const raw = localStorage.getItem("golf_current_round");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.currentRound) {
          setCurrentRound(parsed.currentRound);
          setInputMode(parsed.inputMode || "simple");
          setHolePars(parsed.holePars || Array(18).fill(4));
          setCurrentHole(parsed.currentHole || 1);
          if (parsed.inputMode === "simple") {
            setSimpleHoleData(parsed.simpleHoleData || {});
          } else {
            setHoleData(parsed.holeData || {});
          }
          if (parsed.roundGoal) setRoundGoal(parsed.roundGoal);
          setView("round");
        }
      }
    } catch (_) {
    }
    try {
      const raw = localStorage.getItem("golf_profile");
      if (raw) {
        const parsed = JSON.parse(raw);
        setProfile((p) => __spreadValues(__spreadValues({}, p), parsed));
        const name = parsed.nickname ? parsed.nickname + "\u3055\u3093\uFF01" : "";
        setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01" + name), 700);
        localStorageHadProfile = true;
      } else if (false) {
        setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"), 700);
      }
    } catch (_) {
      if (false) {
        setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"), 700);
      }
    }
    if (true) {
      (async () => {
        try {
          const result = await Promise.resolve({ value: localStorage.getItem("golf_profile") });
          if (!localStorageHadProfile) {
            if (result && result.value) {
              const parsed = JSON.parse(result.value);
              setProfile((p) => __spreadValues(__spreadValues({}, p), parsed));
              const name = parsed.nickname ? parsed.nickname + "\u3055\u3093\uFF01" : "";
              setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01" + name), 700);
            } else {
              setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"), 700);
            }
          }
        } catch (_) {
          if (!localStorageHadProfile) setTimeout(() => showToast("\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\uFF01"), 700);
        }
        try {
          const result = await Promise.resolve({ value: localStorage.getItem("golf_clubs") });
          if (result && result.value) {
            const parsed = JSON.parse(result.value);
            if (Array.isArray(parsed)) {
              setSavedClubs((prev) => prev.length === 0 ? parsed : prev);
            }
          }
        } catch (_) {
        }
        if (!localStorageHadRounds) {
          try {
            const result = await Promise.resolve({ value: localStorage.getItem("golf_rounds") });
            if (result && result.value) {
              const parsed = JSON.parse(result.value);
              if (Array.isArray(parsed)) {
                const migrated = parsed.map((r) => {
                  const base = __spreadProps(__spreadValues({}, r), { shots: r.shots || [] });
                  if (base.inputMode === "detail" && Object.keys(base.simpleHoleData || {}).length === 0 && base.holeData) {
                    return __spreadProps(__spreadValues({}, base), { simpleHoleData: deriveSimpleHoleData(base.holeData, base.holePars) });
                  }
                  return base;
                });
                setRounds((prev) => prev.length === 0 ? migrated : prev);
              }
            }
          } catch (_) {
          }
        }
        try {
          const result = await Promise.resolve({ value: localStorage.getItem("golf_test_data") });
          if (result && result.value) {
            const parsed = JSON.parse(result.value);
            if (Array.isArray(parsed)) {
              const migrated = parsed.map((r) => {
                const base = __spreadProps(__spreadValues({}, r), { shots: r.shots || [] });
                if (base.inputMode === "detail" && Object.keys(base.simpleHoleData || {}).length === 0 && base.holeData) {
                  return __spreadProps(__spreadValues({}, base), { simpleHoleData: deriveSimpleHoleData(base.holeData, base.holePars) });
                }
                return base;
              });
              setImportedTestData(migrated);
            }
          }
        } catch (_) {
        }
      })();
    }
    setStorageLoaded(true);
  }, []);
  const [roundMemo, setRoundMemo] = useState("");
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [shotNote, setShotNote] = useState("");
  const [pendingOptId, setPendingOptId] = useState(null);
  const [pendingBadSub, setPendingBadSub] = useState(false);
  const [pendingClubId, setPendingClubId] = useState(null);
  const [pendingDistStep, setPendingDistStep] = useState(false);
  const [newResultId, setNewResultId] = useState(null);
  const [newBadSubId, setNewBadSubId] = useState(null);
  const [approachDistVal, setApproachDistVal] = useState(100);
  const [puttDistVal, setPuttDistVal] = useState(5);
  const [teeDistOverride, setTeeDistOverride] = useState(null);
  const [calcOpen, setCalcOpen] = useState(false);
  const [calcInput, setCalcInput] = useState("");
  const [showPinDistStep, setShowPinDistStep] = useState(false);
  const par = holePars[currentHole - 1];
  const hd = holeData[currentHole] || { shots: [], state: initialCategory(par), done: false };
  const currentCategory = hd.done ? null : hd.state;
  const currentCatDef = currentCategory ? CATEGORIES[currentCategory] : null;
  const totalStrokes = hd.shots.reduce((s, sh) => s + sh.shotCount, 0) + (hd.extraPenalty || 0);
  const holeScore = hd.shots.reduce((s, sh) => s + sh.score, 0);
  const allHoleShots = Object.values(holeData).flatMap((h) => h.shots);
  const totalScore = allHoleShots.reduce((s, sh) => s + sh.score, 0);
  const totalStrk = allHoleShots.reduce((s, sh) => s + sh.shotCount, 0) + Object.values(holeData).reduce((a, h) => a + (h.extraPenalty || 0), 0);
  const autoSelectPutterClub = (nextCat) => {
    if (nextCat === "putt" && savedClubs.includes("PT")) {
      setSelectedClub("PT");
    } else {
      setSelectedClub(null);
    }
  };
  const openShotForm = () => {
    setSelectedOpt(null);
    setSelectedClub(null);
    setPendingOptId(null);
    setPendingBadSub(false);
    setPendingClubId(null);
    setPendingDistStep(false);
    setNewResultId(null);
    setNewBadSubId(null);
    setApproachDistVal(100);
    setPuttDistVal(5);
    setTeeDistOverride(null);
    setCalcOpen(false);
    setCalcInput("");
    setShotNote("");
    setShowShotForm(true);
  };
  const recordShot = (optId, clubId = null, remainDist = null, pinDistLabel = null, remainDistRaw = null) => {
    let opt;
    const SUB_IDS = ["bad_bunker", "bad_1pen", "bad_ob"];
    if (SUB_IDS.includes(optId)) {
      const subList = BAD_SUB_OPTIONS[currentCategory] || BAD_SUB_OPTIONS.approach;
      opt = subList.find((o) => o.id === optId);
    } else {
      opt = currentCatDef == null ? void 0 : currentCatDef.options.find((o) => o.id === optId);
    }
    if (!opt) return;
    const totalShotCount = opt.shotCount + (opt.penaltyCount || 0);
    const shot = {
      id: Date.now(),
      hole: currentHole,
      par,
      categoryKey: currentCategory,
      optionId: opt.id,
      optionLabel: opt.label,
      quality: opt.quality || null,
      subType: opt.subType || void 0,
      score: opt.score || 0,
      shotCount: totalShotCount,
      penaltyCount: opt.penaltyCount || 0,
      color: opt.color,
      club: clubId,
      remainDist: remainDist || null,
      remainDistRaw: remainDistRaw != null ? remainDistRaw : null,
      note: shotNote
    };
    const nextShotNum = totalStrokes + totalShotCount + 1;
    let nextState;
    if (opt.nextState === "done") {
      nextState = "done";
    } else if (opt.nextState === "_sub") {
      nextState = "approach";
    } else {
      nextState = categoryForState(opt.nextState);
    }
    setHoleData((prev) => {
      var _a2, _b2, _c2;
      return __spreadProps(__spreadValues({}, prev), {
        [currentHole]: {
          shots: [...((_a2 = prev[currentHole]) == null ? void 0 : _a2.shots) || [], shot],
          state: nextState,
          done: nextState === "done",
          pinDist: pinDistLabel != null ? pinDistLabel : (_b2 = prev[currentHole]) == null ? void 0 : _b2.pinDist,
          extraPenalty: (_c2 = prev[currentHole]) == null ? void 0 : _c2.extraPenalty
        }
      });
    });
    setPendingOptId(null);
    setPendingBadSub(false);
    setPendingClubId(null);
    setPendingDistStep(false);
    setSelectedClub(null);
    setNewResultId(null);
    setNewBadSubId(null);
    setApproachDistVal(100);
    setPuttDistVal(5);
    setTeeDistOverride(null);
    setCalcOpen(false);
    setCalcInput("");
    if (shot.categoryKey === "tee" && shot.subType === "ob") {
      const nextNum = 4 + (hd.extraPenalty || 0);
      setTimeout(() => showToast(`\u6B21\u306F${nextNum}\u6253\u76EE\u304B\u3089\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044`), 300);
    }
    if (nextState === "done") {
      setShowShotForm(false);
      const finalStrokes = totalStrokes + totalShotCount;
      const holeNum = currentHole;
      setTimeout(() => scoreToast(finalStrokes, par), 200);
      if (currentCategory === "putt") {
        if (pinDistLabel) {
          if (holeNum < holePars.length) {
            setTimeout(() => setCurrentHole((h) => h + 1), 900);
          }
        } else {
          setTimeout(() => setShowPinDistStep(true), 400);
        }
      } else {
        if (holeNum < holePars.length) {
          setTimeout(() => setCurrentHole((h) => h + 1), 900);
        }
      }
    } else {
      setSelectedOpt(null);
      setShotNote("");
    }
  };
  const savePinDistAndAdvance = (dist) => {
    setShowPinDistStep(false);
    if (dist !== null) {
      setHoleData((prev) => __spreadProps(__spreadValues({}, prev), {
        [currentHole]: __spreadProps(__spreadValues({}, prev[currentHole]), { pinDist: dist })
      }));
    }
    if (currentHole < holePars.length) {
      setTimeout(() => setCurrentHole((h) => h + 1), 200);
    }
  };
  const undoLastShot = () => {
    var _a2;
    const shots = hd.shots;
    if (!shots.length) return;
    const prev = shots.slice(0, -1);
    setPendingOptId(null);
    setPendingBadSub(false);
    setPendingClubId(null);
    setPendingDistStep(false);
    setSelectedClub(null);
    setNewResultId(null);
    setNewBadSubId(null);
    setApproachDistVal(100);
    setPuttDistVal(5);
    setTeeDistOverride(null);
    setCalcOpen(false);
    setCalcInput("");
    let state = initialCategory(par);
    const SUB_IDS = ["bad_bunker", "bad_1pen", "bad_ob"];
    for (const sh of prev) {
      let opt = (_a2 = CATEGORIES[sh.categoryKey]) == null ? void 0 : _a2.options.find((o) => o.id === sh.optionId);
      if (!opt) {
        const subList = BAD_SUB_OPTIONS[sh.categoryKey] || BAD_SUB_OPTIONS.approach;
        opt = subList == null ? void 0 : subList.find((o) => o.id === sh.optionId);
      }
      if (!opt) continue;
      if (opt.nextState === "done") {
        state = "done";
        break;
      }
      state = categoryForState(opt.nextState);
    }
    setHoleData((p) => {
      var _a3;
      return __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: state === "done", pinDist: void 0, extraPenalty: (_a3 = p[currentHole]) == null ? void 0 : _a3.extraPenalty } });
    });
  };
  const canRecordNew = (() => {
    if (!currentCatDef) return false;
    if (currentCategory === "putt") return !!newResultId;
    if (!newResultId) return false;
    if (newResultId === "bad" && !newBadSubId) return false;
    if (newResultId !== "cupin" && !selectedClub) return false;
    return true;
  })();
  const handleRecordNew = () => {
    if (!canRecordNew) return;
    const finalOptId = newBadSubId != null ? newBadSubId : newResultId;
    let distLabel = null;
    let distRaw = null;
    if (currentCategory === "tee") {
      const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
      const allH = venue ? getRoundHoles(currentRound) : [];
      const hInfo = allH[currentHole - 1];
      const autoY = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
      distRaw = teeDistOverride != null ? teeDistOverride : autoY;
      distLabel = distToLabel(distRaw);
    } else if (currentCategory === "approach") {
      distRaw = approachDistVal;
      distLabel = distToLabel(distRaw);
    }
    const pinDistLabel = currentCategory === "putt" ? metersToPinDistLabel(puttDistVal) : null;
    recordShot(finalOptId, selectedClub, distLabel, pinDistLabel, distRaw);
  };
  const applyUnlockCode = () => {
    const code = unlockInput.trim().toUpperCase();
    if (UNLOCK_CODES.map((c) => c.toUpperCase()).includes(code)) {
      setDetailUnlocked(true);
      try {
        localStorage.setItem("golf_detail_unlocked", "1");
      } catch (_) {
      }
      if (true) {
        (() => {
          try {
            localStorage.setItem("golf_detail_unlocked", "1");
          } catch (_) {
          }
        })();
      }
      setShowDetailPaywall(false);
      setUnlockInput("");
      setUnlockError("");
      showToast("\u8A73\u7D30\u30E2\u30FC\u30C9\u3092\u89E3\u9664\u3057\u307E\u3057\u305F\uFF01");
    } else {
      setUnlockError("\u30B3\u30FC\u30C9\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093");
    }
  };
  const startRound = () => {
    if (!selectedVenue || selectedCourseA === null || selectedCourseB === null || !selectedGreen || !selectedTee) return;
    if (inputMode === "detail" && !detailUnlocked && rounds.filter((r) => r.inputMode === "detail").length >= DETAIL_FREE_LIMIT) {
      setUnlockInput("");
      setUnlockError("");
      setShowDetailPaywall(true);
      return;
    }
    if (effectiveHcp === null) {
      setShowHcpWarning(true);
      return;
    }
    if (currentRound) {
      setShowDiscardWarning(true);
      return;
    }
    doStartRound();
  };
  const doStartRound = () => {
    if (!selectedVenue || selectedCourseA === null || selectedCourseB === null || !selectedGreen || !selectedTee) return;
    const venue = VENUES.find((v) => v.id === selectedVenue);
    const frontSC = venue.subCourses[selectedCourseA];
    const is9H = selectedCourseB === "none";
    const backSC = is9H ? null : venue.subCourses[selectedCourseB];
    const pars = is9H ? frontSC.holes.map((h) => h.par) : [...frontSC.holes, ...backSC.holes].map((h) => h.par);
    const teeKey = selectedTee;
    const greenKey = selectedGreen;
    const label = is9H ? `${venue.name}\uFF08${frontSC.name}\u30FB9H\uFF09` : venue.subCourses.length === 1 ? venue.name : frontSC.name === backSC.name ? `${venue.name}\uFF08${frontSC.name}\xD72\uFF09` : `${venue.name}\uFF08${frontSC.name}\u2192${backSC.name}\uFF09`;
    const frontHoleNums = frontSC.holes.map((h) => h.hole);
    const backHoleNums = is9H ? [] : backSC.holes.map((h) => h.hole);
    setCurrentRound({
      id: Date.now(),
      course: label,
      date: selectedDate,
      venueId: selectedVenue,
      frontCourse: frontSC.name,
      backCourse: is9H ? null : backSC.name,
      is9H,
      totalHoles: pars.length,
      green: greenKey,
      tee: teeKey,
      weather: selectedWeather,
      wind: selectedWind,
      clubs: savedClubs,
      frontHoleNums,
      backHoleNums,
      memo: roundMemo.trim().slice(0, 20),
      goal: roundGoal.type && inputMode === "detail" ? { type: roundGoal.type, target: roundGoal.target } : null
    });
    setHoleData({});
    setSimpleHoleData({});
    setCurrentHole(1);
    setHolePars(pars);
    setView("round");
    setShowNewRound(false);
    setShowDiscardWarning(false);
    setSetupStep(0);
    setSelectedVenue(null);
    setSelectedCourseA(null);
    setSelectedCourseB(null);
    setSelectedGreen(null);
    setSelectedTee(null);
    setRoundMemo("");
    setVenueSearch("");
    setRoundGoal({ type: null, target: 1 });
  };
  const [roundGoal, setRoundGoal] = useState({ type: null, target: 1 });
  useEffect(() => {
    if (!storageLoaded) return;
    try {
      localStorage.setItem("golf_clubs", JSON.stringify(savedClubs));
    } catch (_) {
    }
    if (true) {
      (() => {
        try {
          localStorage.setItem("golf_clubs", JSON.stringify(savedClubs));
        } catch (_) {
        }
      })();
    }
  }, [savedClubs, storageLoaded]);
  useEffect(() => {
    if (!storageLoaded) return;
    (() => {
      try {
        localStorage.setItem("golf_rounds", JSON.stringify(rounds));
      } catch (_) {
      }
    })();
    if (true) {
      (() => {
        try {
          localStorage.setItem("golf_rounds", JSON.stringify(rounds));
        } catch (_) {
        }
      })();
    }
  }, [rounds, storageLoaded]);
  useEffect(() => {
    if (!storageLoaded) return;
    try {
      if (!currentRound) {
        (() => {
          try {
            localStorage.removeItem("golf_current_round");
          } catch (_) {
          }
        })();
        return;
      }
      const payload = { currentRound, inputMode, holePars, currentHole, holeData, simpleHoleData, roundGoal };
      (() => {
        try {
          localStorage.setItem("golf_current_round", JSON.stringify(payload));
        } catch (_) {
        }
      })();
    } catch (_) {
    }
  }, [currentRound, inputMode, holePars, currentHole, holeData, simpleHoleData, roundGoal, storageLoaded]);
  const finishRound = () => {
    let totalScore2 = 0;
    let isComplete = false;
    const courseName2 = (currentRound == null ? void 0 : currentRound.course) || "";
    if (inputMode === "simple") {
      const completedHoles = Object.keys(simpleHoleData).length;
      const allRequired = Object.entries(simpleHoleData).every(([, h]) => h.teeEval && h.approachEval);
      isComplete = completedHoles >= holePars.length && allRequired;
      totalScore2 = Object.values(simpleHoleData).reduce((a, h) => a + (h.score || 0), 0);
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots: [], holePars: [...holePars], simpleHoleData: __spreadValues({}, simpleHoleData), inputMode: "simple", isComplete, hcp: effectiveHcp }), ...prev]);
      setCurrentRound(null);
      setSimpleHoleData({});
    } else {
      const shots = Object.values(holeData).flatMap((h) => h.shots);
      const completedHoles = Object.values(holeData).filter((h) => h.done).length;
      isComplete = completedHoles >= holePars.length;
      totalScore2 = Object.values(holeData).reduce((a, h) => a + h.shots.reduce((s, sh) => s + sh.shotCount, 0) + (h.extraPenalty || 0), 0);
      const derivedSimple = deriveSimpleHoleData(holeData, holePars);
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots, holePars: [...holePars], holeData: __spreadValues({}, holeData), simpleHoleData: derivedSimple, inputMode: "detail", isComplete, hcp: effectiveHcp }), ...prev]);
      setCurrentRound(null);
      setHoleData({});
    }
    if (isComplete && totalScore2 > 0 && (profile.bestScore === null || totalScore2 < profile.bestScore)) {
      saveProfile(__spreadProps(__spreadValues({}, profile), { bestScore: totalScore2 }));
      setTimeout(() => showToast(`\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\u66F4\u65B0\uFF01${totalScore2} (${courseName2})`), 400);
    } else {
      showToast("\u304A\u3064\u304B\u308C\u69D8\u3067\u3057\u305F\uFF01");
    }
    setView("home");
  };
  const resumeRound = (r) => {
    setCurrentRound({
      id: r.id,
      course: r.course,
      date: r.date,
      venueId: r.venueId,
      frontCourse: r.frontCourse,
      backCourse: r.backCourse,
      green: r.green,
      tee: r.tee,
      weather: r.weather,
      wind: r.wind,
      memo: r.memo || "",
      frontHoleNums: r.frontHoleNums || null,
      backHoleNums: r.backHoleNums || null,
      goal: r.goal || null
    });
    setInputMode(r.inputMode || "detail");
    if (r.inputMode === "simple") {
      setSimpleHoleData(r.simpleHoleData || {});
      setHoleData({});
    } else {
      setHoleData(r.holeData || {});
      setSimpleHoleData({});
    }
    setHolePars(r.holePars || Array(18).fill(4));
    const resumeHoleCount = (r.holePars || Array(18).fill(4)).length;
    const firstIncomplete = Array.from({ length: resumeHoleCount }, (_, i) => i + 1).find(
      (h) => {
        var _a2, _b2, _c2;
        return r.inputMode === "simple" ? !((_a2 = r.simpleHoleData) == null ? void 0 : _a2[h]) : !((_c2 = (_b2 = r.holeData) == null ? void 0 : _b2[h]) == null ? void 0 : _c2.done);
      }
    );
    setCurrentHole(firstIncomplete || 1);
    setRounds((prev) => prev.filter((x) => x.id !== r.id));
    setView("round");
  };
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [expandedRounds, setExpandedRounds] = useState(/* @__PURE__ */ new Set());
  const [pendingFinish, setPendingFinish] = useState(false);
  useEffect(() => {
    if (pendingFinish) {
      setPendingFinish(false);
      finishRound();
    }
  }, [simpleHoleData, pendingFinish]);
  const [finishConfirm, setFinishConfirm] = useState(null);
  const [skipConfirm, setSkipConfirm] = useState(null);
  const handleDetailFinishClick = () => {
    const allHoles = Array.from({ length: holePars.length }, (_, i) => i + 1);
    const incomplete = allHoles.filter((h) => {
      var _a2;
      return !((_a2 = holeData[h]) == null ? void 0 : _a2.done);
    });
    if (incomplete.length > 0) {
      setFinishConfirm({ type: "incomplete", incompleteHoles: incomplete });
    } else {
      setFinishConfirm({ type: "ok" });
    }
  };
  const deleteRound = (id) => {
    setRounds((prev) => prev.filter((r) => r.id !== id));
    setConfirmDeleteId(null);
  };
  const [importMsg, setImportMsg] = useState(null);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportJson, setExportJson] = useState("");
  const handleExport = () => {
    const payload = { version: 1, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), rounds };
    setExportJson(JSON.stringify(payload));
    setShowExportModal(true);
  };
  const handleImport = (e) => {
    var _a2;
    const file = (_a2 = e.target.files) == null ? void 0 : _a2[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a3;
      try {
        const parsed = JSON.parse(ev.target.result);
        const imported = (_a3 = parsed.rounds) != null ? _a3 : Array.isArray(parsed) ? parsed : null;
        if (!Array.isArray(imported)) throw new Error("\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u4E0D\u6B63");
        const migrated = imported.map((r) => {
          const base = __spreadProps(__spreadValues({}, r), { shots: r.shots || [] });
          if (base.inputMode === "detail" && Object.keys(base.simpleHoleData || {}).length === 0 && base.holeData) {
            return __spreadProps(__spreadValues({}, base), { simpleHoleData: deriveSimpleHoleData(base.holeData, base.holePars) });
          }
          return base;
        });
        setRounds((prev) => {
          const existingIds = new Set(prev.map((r) => r.id));
          const newRounds = migrated.filter((r) => !existingIds.has(r.id));
          return [...prev, ...newRounds];
        });
        setImportMsg({ type: "ok", text: `${imported.length}\u4EF6\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\uFF08\u91CD\u8907\u306F\u9664\u5916\uFF09` });
      } catch (err) {
        setImportMsg({ type: "error", text: "\u8AAD\u307F\u8FBC\u307F\u5931\u6557\uFF1A\u6B63\u3057\u3044\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044" });
      }
      e.target.value = "";
      setTimeout(() => setImportMsg(null), 4e3);
    };
    reader.readAsText(file);
  };
  const [pasteImportText, setPasteImportText] = useState("");
  const handlePasteImport = () => {
    var _a2;
    try {
      const parsed = JSON.parse(pasteImportText.trim());
      const imported = (_a2 = parsed.rounds) != null ? _a2 : Array.isArray(parsed) ? parsed : null;
      if (!Array.isArray(imported)) throw new Error("\u30D5\u30A9\u30FC\u30DE\u30C3\u30C8\u4E0D\u6B63");
      const migrated = imported.map((r) => {
        const base = __spreadProps(__spreadValues({}, r), { shots: r.shots || [] });
        if (base.inputMode === "detail" && Object.keys(base.simpleHoleData || {}).length === 0 && base.holeData) {
          return __spreadProps(__spreadValues({}, base), { simpleHoleData: deriveSimpleHoleData(base.holeData, base.holePars) });
        }
        return base;
      });
      setRounds((prev) => {
        const existingIds = new Set(prev.map((r) => r.id));
        const newRounds = migrated.filter((r) => !existingIds.has(r.id));
        return [...newRounds, ...prev];
      });
      setImportMsg({ type: "ok", text: `${imported.length}\u4EF6\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3057\u305F\uFF08\u91CD\u8907\u306F\u9664\u5916\uFF09` });
      setPasteImportText("");
    } catch (err) {
      setImportMsg({ type: "error", text: "\u8AAD\u307F\u8FBC\u307F\u5931\u6557\uFF1A\u6B63\u3057\u3044JSON\u304B\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044" });
    }
    setTimeout(() => setImportMsg(null), 4e3);
  };
  const getDisplayHoleNum = (holeKey) => {
    var _a2, _b2;
    if (!currentRound) return holeKey;
    const fNums = currentRound.frontHoleNums || [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bNums = currentRound.backHoleNums || [10, 11, 12, 13, 14, 15, 16, 17, 18];
    const fLen = fNums.length;
    if (holeKey >= 1 && holeKey <= fLen) return (_a2 = fNums[holeKey - 1]) != null ? _a2 : holeKey;
    if (holeKey > fLen) return (_b2 = bNums[holeKey - fLen - 1]) != null ? _b2 : holeKey;
    return holeKey;
  };
  const setPar = (h, p) => {
    setHolePars((prev) => {
      const a = [...prev];
      a[h - 1] = p;
      return a;
    });
    setHoleData((prev) => {
      const next = __spreadValues({}, prev);
      delete next[h];
      return next;
    });
  };
  const handicap = useMemo(() => {
    const completed = [...rounds.filter((r) => {
      var _a2, _b2;
      return r.isComplete && ((_b2 = (_a2 = r.holePars) == null ? void 0 : _a2.length) != null ? _b2 : 18) >= 18;
    })].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (completed.length < 3) return null;
    const target = completed.slice(0, 20);
    const diffs = target.map((r) => {
      let totalScore2 = 0;
      let totalPar = 0;
      const shd = r.simpleHoleData || {};
      const shdKeys = Object.keys(shd);
      if (shdKeys.length > 0) {
        totalScore2 = Object.values(shd).reduce((a, h) => a + (h.score || 0), 0);
        totalPar = shdKeys.reduce((a, k) => a + ((r.holePars || [])[parseInt(k) - 1] || 4), 0);
      } else if (r.inputMode !== "simple") {
        const shots = r.shots || [];
        totalScore2 = shots.reduce((a, s) => a + s.shotCount, 0);
        totalPar = (r.holePars || Array(18).fill(4)).reduce((a, p) => a + p, 0);
      }
      if (!totalPar || !totalScore2) return null;
      return { diff: totalScore2 - totalPar, score: totalScore2, par: totalPar, date: r.date, course: r.course, id: r.id };
    }).filter(Boolean);
    if (diffs.length < 3) return null;
    const sorted = [...diffs].sort((a, b) => a.diff - b.diff);
    const topN = Math.max(1, Math.round(sorted.length * 0.4));
    const top = sorted.slice(0, topN);
    const avgDiff = top.reduce((a, d) => a + d.diff, 0) / top.length;
    const hcp = Math.round(avgDiff * 0.96 * 10) / 10;
    return {
      hcp,
      roundCount: diffs.length,
      usedCount: topN,
      avgDiff: Math.round(avgDiff * 10) / 10,
      bestDiff: sorted[0].diff,
      worstDiff: sorted[sorted.length - 1].diff,
      allDiffs: sorted,
      top
    };
  }, [rounds]);
  const effectiveHcp = useMemo(() => {
    var _a2;
    const m = profile.manualHcp !== null && profile.manualHcp !== void 0 ? profile.manualHcp : null;
    const mode = (_a2 = profile.hcpMode) != null ? _a2 : "auto";
    if (mode === "manual") {
      return m !== null ? m : handicap !== null ? handicap.hcp : null;
    }
    if (handicap !== null) return handicap.hcp;
    return m;
  }, [handicap, profile.manualHcp, profile.hcpMode]);
  const hcpHintShownRef = useRef(false);
  useEffect(() => {
    if (!storageLoaded || hcpHintShownRef.current) return;
    hcpHintShownRef.current = true;
    if (effectiveHcp === null) {
      const showT = setTimeout(() => setShowHcpHint(true), 900);
      const hideT = setTimeout(() => setShowHcpHint(false), 5400);
      return () => {
        clearTimeout(showT);
        clearTimeout(hideT);
      };
    }
  }, [storageLoaded, effectiveHcp]);
  useEffect(() => {
    if (effectiveHcp !== null && showHcpHint) setShowHcpHint(false);
  }, [effectiveHcp, showHcpHint]);
  useEffect(() => {
    var _a2;
    const curr = (_a2 = handicap == null ? void 0 : handicap.hcp) != null ? _a2 : null;
    if (!hcpInitializedRef.current) {
      prevHcpRef.current = curr;
      hcpInitializedRef.current = true;
      return;
    }
    if (curr !== null && curr !== prevHcpRef.current) {
      const target = profile.targetHcp;
      if (target != null && curr <= target) {
        setTimeout(() => showToast(`\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u304C${curr}\u306B\u306A\u308A\u307E\u3057\u305F\uFF01\u304A\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01`), 1e3);
      }
    }
    prevHcpRef.current = curr;
  }, [handicap == null ? void 0 : handicap.hcp]);
  const S = {
    app: { minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans JP',sans-serif", color: "#1e293b" },
    header: { background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "calc(env(safe-area-inset-top) + 13px) 16px 13px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
    logo: { fontSize: "17px", fontWeight: "800", background: "linear-gradient(90deg,#16a34a,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    navBtn: (a) => ({ padding: "5px 11px", borderRadius: "20px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: "600", background: a ? "rgba(22,163,74,0.12)" : "transparent", color: a ? "#16a34a" : "#94a3b8" }),
    page: { padding: "16px 14px", maxWidth: "480px", margin: "0 auto" },
    card: (extra = {}) => __spreadValues({ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "13px", padding: "16px", marginBottom: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }, extra),
    btn: (v = "primary") => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      padding: "10px 18px",
      borderRadius: "9px",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "13px"
    }, v === "primary" && { background: "linear-gradient(135deg,#f59e0b,#ea580c)", color: "#ffffff", boxShadow: "0 3px 10px rgba(245,158,11,0.30)" }), v === "secondary" && { background: "#f1f5f9", color: "#475569", border: "1px solid #e2e8f0" }), v === "danger" && { background: "rgba(220,38,38,0.08)", color: "#dc2626", border: "1px solid rgba(220,38,38,0.30)" }), v === "ghost" && { background: "transparent", color: "#94a3b8", padding: "5px 9px", fontSize: "12px" }), v === "undo" && { background: "rgba(245,158,11,0.10)", color: "#d97706", border: "1px solid rgba(245,158,11,0.30)", padding: "8px 14px", fontSize: "12px" }),
    input: { width: "100%", padding: "10px 13px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#1e293b", fontSize: "16px", outline: "none", boxSizing: "border-box" },
    lbl: { fontSize: "10px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", display: "block" },
    modal: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", zIndex: 200 },
    modalBox: { background: "#ffffff", borderRadius: "18px 18px 0 0", padding: "20px 16px 36px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid #e2e8f0", maxHeight: "88vh", overflowY: "auto" },
    pill: (c) => ({ padding: "2px 8px", borderRadius: "20px", background: `${c}20`, color: c, fontSize: "10px", fontWeight: "700" }),
    optBtn: (sel, col) => {
      const c = COLOR_MAP[col] || COLOR_MAP.gray;
      return { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 13px", borderRadius: "9px", border: sel ? `1.5px solid ${c.border}` : "1px solid #e2e8f0", background: sel ? c.bg : "#f8fafc", cursor: "pointer", marginBottom: "7px" };
    }
  };
  const RoundSetupForm = () => {
    var _a2, _b2;
    const venue = VENUES.find((v) => v.id === selectedVenue);
    const canStart = selectedVenue && selectedCourseA !== null && selectedCourseB !== null && selectedGreen && selectedTee;
    const selRow = (items, val, setter, colorSel = "#16a34a") => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, items.map((it, i) => {
      var _a3, _b3, _c2;
      const key = (_b3 = (_a3 = it.id) != null ? _a3 : it.name) != null ? _b3 : i;
      const active = val === (it.id !== void 0 ? it.id : i);
      return /* @__PURE__ */ React.createElement("button", { key, onClick: () => setter(it.id !== void 0 ? it.id : i), style: {
        padding: it.muted ? "6px 10px" : "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: it.muted && !active ? "600" : "700",
        fontSize: it.muted ? "11px" : "12px",
        border: active ? `2px solid ${colorSel}` : "1px solid #e2e8f0",
        background: active ? `${colorSel}20` : it.muted ? "transparent" : "#f8fafc",
        color: active ? colorSel : it.muted ? "#94a3b8" : "#64748b"
      } }, (_c2 = it.label) != null ? _c2 : it.name);
    }));
    const onClose = () => {
      setShowNewRound(false);
      setSetupStep(0);
      setSelectedVenue(null);
      setSelectedCourseA(null);
      setSelectedCourseB(null);
      setSelectedGreen(null);
      setSelectedTee(null);
      setSelectedWeather("sunny");
      setSelectedWind(0);
      setVenueSearch("");
    };
    const selectVenue = (vid) => {
      const v = VENUES.find((x) => x.id === vid);
      setSelectedVenue(vid);
      setVenueSearch(v.name);
      setVenueDropdownOpen(false);
      setSelectedGreen(v.greens[0].id);
      setSelectedTee(v.tees[0].id);
      if (vid === "sobu_sobu") {
        setSelectedCourseA(0);
        setSelectedCourseB(1);
      } else if (vid === "sobu_kita") {
        setSelectedCourseA(0);
        setSelectedCourseB(0);
      } else {
        setSelectedCourseA(0);
        setSelectedCourseB(v.subCourses.length > 1 ? 1 : 0);
      }
    };
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.22)", marginBottom: "18px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "15px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: onClose }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5165\u529B\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [
      { id: "detail", label: "\u8A73\u7D30\u30E2\u30FC\u30C9", desc: "\u30B7\u30E7\u30C3\u30C8\u5358\u4F4D\u3067\u8A18\u9332" },
      { id: "simple", label: "\u7C21\u6613\u30E2\u30FC\u30C9", desc: "\u30B9\u30B3\u30A2\u30FB\u8A55\u4FA1\u306E\u307F" }
    ].map((m) => /* @__PURE__ */ React.createElement("button", { key: m.id, onClick: () => setInputMode(m.id), style: {
      flex: 1,
      padding: "10px 8px",
      borderRadius: "9px",
      cursor: "pointer",
      textAlign: "center",
      border: inputMode === m.id ? "2px solid #34d399" : "1px solid #e2e8f0",
      background: inputMode === m.id ? "rgba(22,163,74,0.10)" : "#f8fafc",
      color: inputMode === m.id ? "#16a34a" : "#64748b"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "13px" } }, m.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", opacity: 0.7, marginTop: "2px" } }, m.desc))))), inputMode === "detail" && (detailUnlocked ? /* @__PURE__ */ React.createElement("div", { style: { marginTop: "-6px", marginBottom: "14px", fontSize: "11px", color: "#16a34a", fontWeight: "700" } }, "\u2713 \u8A73\u7D30\u30E2\u30FC\u30C9\uFF1A\u89E3\u9664\u6E08\u307F\uFF08\u7121\u5236\u9650\uFF09") : (() => {
      const used = rounds.filter((r) => r.inputMode === "detail").length;
      const remain = Math.max(0, DETAIL_FREE_LIMIT - used);
      return /* @__PURE__ */ React.createElement("div", { style: { marginTop: "-6px", marginBottom: "14px", fontSize: "11px", fontWeight: "700", color: remain > 0 ? "#0ea5e9" : "#d97706" } }, remain > 0 ? `\u8A73\u7D30\u30E2\u30FC\u30C9\u306F\u7121\u6599\u3067\u3042\u3068 ${remain} \u30E9\u30A6\u30F3\u30C9\u767B\u9332\u3067\u304D\u307E\u3059` : `\u7121\u6599\u304A\u8A66\u3057\uFF08${DETAIL_FREE_LIMIT}\u30E9\u30A6\u30F3\u30C9\uFF09\u306F\u7D42\u4E86 \u30FB ${DETAIL_PRICE_LABEL}\u3067\u8A73\u7D30\u30E2\u30FC\u30C9\u304C\u4F7F\u3048\u307E\u3059\uFF08\u304A\u8A66\u3057\u8CA9\u58F2\u4E2D\uFF09`);
    })()), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B4\u30EB\u30D5\u5834"), (() => {
      const favIds = profile.favoriteVenues || [];
      const favVenues = VENUES.filter((v) => favIds.includes(v.id)).sort((a, b) => favIds.indexOf(a.id) - favIds.indexOf(b.id));
      const venueRow = (v) => {
        if (/^[A-Za-z0-9]/.test(v.name)) return 10;
        const norm = {
          \u30AC: "\u30AB",
          \u30AE: "\u30AD",
          \u30B0: "\u30AF",
          \u30B2: "\u30B1",
          \u30B4: "\u30B3",
          \u30B6: "\u30B5",
          \u30B8: "\u30B7",
          \u30BA: "\u30B9",
          \u30BC: "\u30BB",
          \u30BE: "\u30BD",
          \u30C0: "\u30BF",
          \u30C2: "\u30C1",
          \u30C5: "\u30C4",
          \u30C7: "\u30C6",
          \u30C9: "\u30C8",
          \u30D0: "\u30CF",
          \u30D3: "\u30D2",
          \u30D6: "\u30D5",
          \u30D9: "\u30D8",
          \u30DC: "\u30DB",
          \u30D1: "\u30CF",
          \u30D4: "\u30D2",
          \u30D7: "\u30D5",
          \u30DA: "\u30D8",
          \u30DD: "\u30DB",
          \u30A1: "\u30A2",
          \u30A3: "\u30A4",
          \u30A5: "\u30A6",
          \u30A7: "\u30A8",
          \u30A9: "\u30AA",
          \u30F4: "\u30A6",
          \u30F5: "\u30AB",
          \u30F6: "\u30B1",
          \u30C3: "\u30C4",
          \u30E3: "\u30E4",
          \u30E5: "\u30E6",
          \u30E7: "\u30E8",
          \u30EE: "\u30EF"
        };
        const map = {
          \u30A2: 0,
          \u30A4: 0,
          \u30A6: 0,
          \u30A8: 0,
          \u30AA: 0,
          \u30AB: 1,
          \u30AD: 1,
          \u30AF: 1,
          \u30B1: 1,
          \u30B3: 1,
          \u30B5: 2,
          \u30B7: 2,
          \u30B9: 2,
          \u30BB: 2,
          \u30BD: 2,
          \u30BF: 3,
          \u30C1: 3,
          \u30C4: 3,
          \u30C6: 3,
          \u30C8: 3,
          \u30CA: 4,
          \u30CB: 4,
          \u30CC: 4,
          \u30CD: 4,
          \u30CE: 4,
          \u30CF: 5,
          \u30D2: 5,
          \u30D5: 5,
          \u30D8: 5,
          \u30DB: 5,
          \u30DE: 6,
          \u30DF: 6,
          \u30E0: 6,
          \u30E1: 6,
          \u30E2: 6,
          \u30E4: 7,
          \u30E6: 7,
          \u30E8: 7,
          \u30E9: 8,
          \u30EA: 8,
          \u30EB: 8,
          \u30EC: 8,
          \u30ED: 8,
          \u30EF: 9,
          \u30F2: 9,
          \u30F3: 9
        };
        const c = norm[v.reading[0]] || v.reading[0];
        return map[c] !== void 0 ? map[c] : 10;
      };
      const rowLabel = ["\u3042\u884C", "\u304B\u884C", "\u3055\u884C", "\u305F\u884C", "\u306A\u884C", "\u306F\u884C", "\u307E\u884C", "\u3084\u884C", "\u3089\u884C", "\u308F\u884C", "\u82F1\u6570"];
      const sorted = [...VENUES].sort((a, b) => {
        const ra = venueRow(a);
        const rb = venueRow(b);
        if (ra !== rb) return ra - rb;
        return ra === 10 ? a.name.localeCompare(b.name) : a.reading.localeCompare(b.reading);
      });
      const groups = [];
      let lastRow = -1;
      sorted.forEach((v) => {
        const row = venueRow(v);
        if (row !== lastRow) {
          groups.push({ label: rowLabel[row], venues: [] });
          lastRow = row;
        }
        groups[groups.length - 1].venues.push(v);
      });
      const existingRows = groups.map((g) => g.label);
      const VenueItem = ({ v }) => /* @__PURE__ */ React.createElement("button", { key: v.id, onClick: () => selectVenue(v.id), style: {
        width: "100%",
        textAlign: "left",
        padding: "10px 12px",
        background: v.id === selectedVenue ? "rgba(22,163,74,0.08)" : "transparent",
        border: "none",
        borderBottom: "1px solid #f1f5f9",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: v.id === selectedVenue ? "700" : "400",
        color: v.id === selectedVenue ? "#16a34a" : "#1e293b",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        WebkitTapHighlightColor: "transparent"
      } }, v.id === selectedVenue ? /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "12px", width: "16px" } }, "\u2713") : /* @__PURE__ */ React.createElement("span", { style: { width: "16px" } }), /* @__PURE__ */ React.createElement("span", { style: { flex: 1 } }, v.name));
      return /* @__PURE__ */ React.createElement("div", { style: { border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", background: "#ffffff" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" } }, [["fav", `\u304A\u6C17\u306B\u5165\u308A\uFF08${favVenues.length}\uFF09`], ["aiueo", "\u4E94\u5341\u97F3\u9806"]].map(([key, label]) => /* @__PURE__ */ React.createElement("button", { key, onClick: () => setVenueTab(key), style: {
        flex: 1,
        padding: "9px 4px",
        border: "none",
        cursor: "pointer",
        fontSize: "12px",
        fontWeight: "700",
        background: "transparent",
        color: venueTab === key ? "#16a34a" : "#94a3b8",
        borderBottom: venueTab === key ? "2px solid #16a34a" : "2px solid transparent",
        WebkitTapHighlightColor: "transparent"
      } }, label))), /* @__PURE__ */ React.createElement("div", { style: { maxHeight: "260px", overflowY: "auto", WebkitOverflowScrolling: "touch" } }, venueTab === "fav" ? favVenues.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "24px 16px", textAlign: "center", color: "#94a3b8", fontSize: "12px", lineHeight: 1.7 } }, "\u304A\u6C17\u306B\u5165\u308A\u304C\u672A\u767B\u9332\u3067\u3059", /* @__PURE__ */ React.createElement("br", null), "\u30DE\u30A4\u30DA\u30FC\u30B8\u3067\u767B\u9332\u3057\u3066\u304F\u3060\u3055\u3044") : favVenues.map((v) => /* @__PURE__ */ React.createElement(VenueItem, { key: v.id, v })) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", padding: "8px 10px", borderBottom: "1px solid #f1f5f9", background: "#f8fafc" } }, existingRows.map((label) => /* @__PURE__ */ React.createElement("button", { key: label, onClick: () => {
        const el = document.getElementById(`venue-row-${label}`);
        if (el) el.scrollIntoView({ block: "nearest" });
      }, style: {
        padding: "3px 7px",
        borderRadius: "6px",
        border: "1px solid #e2e8f0",
        background: "#ffffff",
        color: "#64748b",
        fontSize: "11px",
        cursor: "pointer",
        fontWeight: "600",
        WebkitTapHighlightColor: "transparent"
      } }, label))), groups.map((g) => /* @__PURE__ */ React.createElement("div", { key: g.label }, /* @__PURE__ */ React.createElement("div", { id: `venue-row-${g.label}`, style: { padding: "4px 12px", fontSize: "10px", fontWeight: "800", color: "#94a3b8", background: "#f8fafc", letterSpacing: "0.05em", borderBottom: "1px solid #f1f5f9" } }, g.label), g.venues.map((v) => /* @__PURE__ */ React.createElement(VenueItem, { key: v.id, v })))))));
    })()), venue && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, venue.subCourses.length === 1 ? "\u30B3\u30FC\u30B9" : "\u524D\u534A\u30B3\u30FC\u30B9"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.subCourses.map((c, i) => ({ id: i, label: c.name })), selectedCourseA, (idx) => {
      setSelectedCourseA(idx);
      if (selectedCourseB === null) {
        const n = venue.subCourses.length;
        if (n === 2) {
          setSelectedCourseB(idx === 0 ? 1 : 0);
        } else if (n === 4) {
          setSelectedCourseB(idx % 2 === 0 ? idx + 1 : idx - 1);
        }
      }
      if (!selectedGreen && venue.greens.length > 0) setSelectedGreen(venue.greens[0].id);
    }, "#34d399")), venue.subCourses.length > 1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5F8C\u534A\u30B3\u30FC\u30B9"), selRow([...venue.subCourses.map((c, i) => ({ id: i, label: c.name })), { id: "none", label: "\u5F8C\u534A\u306A\u3057\uFF089H\uFF09", muted: true }], selectedCourseB, (idx) => {
      setSelectedCourseB(idx);
      if (!selectedGreen && venue.greens.length > 0) setSelectedGreen(venue.greens[0].id);
    }, "#60a5fa"))), venue && selectedCourseA !== null && selectedCourseB !== null && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u4F7F\u7528\u30B0\u30EA\u30FC\u30F3"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.greens, selectedGreen, setSelectedGreen, "#34d399")), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30C6\u30A3\u30FC"), selRow(venue.tees, selectedTee, setSelectedTee, "#fbbf24")), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u65E5\u4ED8"), /* @__PURE__ */ React.createElement("input", { type: "date", value: selectedDate.replace(/\//g, "-"), onChange: (e) => {
      if (e.target.value) setSelectedDate(e.target.value.replace(/-/g, "/"));
    }, style: __spreadProps(__spreadValues({}, S.input), { colorScheme: "dark" }) })), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5929\u6C17"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "12px" } }, [{ id: "sunny", label: "\u2600\uFE0F \u6674\u308C" }, { id: "cloudy", label: "\u2601\uFE0F \u66C7\u308A" }, { id: "rainy", label: "\u{1F327}\uFE0F \u96E8" }, { id: "snowy", label: "\u2744\uFE0F \u96EA" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.id, onClick: () => setSelectedWeather(w.id), style: { flex: 1, padding: "8px 4px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "12px", border: selectedWeather === w.id ? "2px solid #16a34a" : "1px solid #e2e8f0", background: selectedWeather === w.id ? "rgba(14,165,233,0.12)" : "#f8fafc", color: selectedWeather === w.id ? "#0ea5e9" : "#64748b" } }, w.label))), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u98A8\u306E\u5F37\u3055"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, [{ val: 0, sub: "0\u301C1" }, { val: 1, sub: "2\u301C3" }, { val: 2, sub: "4\u301C5" }, { val: 3, sub: "6\u301C8" }, { val: 4, sub: "9\u301C12" }, { val: 5, sub: "13\u301C" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.val, onClick: () => setSelectedWind(w.val), style: { flex: 1, padding: "8px 2px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px", border: selectedWind === w.val ? "2px solid #fbbf24" : "1px solid #e2e8f0", background: selectedWind === w.val ? "rgba(251,191,36,0.15)" : "#f8fafc", color: selectedWind === w.val ? "#fbbf24" : "#64748b", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" } }, /* @__PURE__ */ React.createElement("span", null, w.val), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "600", opacity: 0.75, whiteSpace: "nowrap", lineHeight: 1.2, textAlign: "center" } }, w.sub, /* @__PURE__ */ React.createElement("br", null), "m/s"))))), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30E9\u30A6\u30F3\u30C9\u30E1\u30E2\uFF08\u4EFB\u610F\u30FB20\u6587\u5B57\u4EE5\u5185\uFF09"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        inputMode: "text",
        enterKeyHint: "done",
        style: __spreadValues({}, S.input),
        placeholder: "\u4F8B\uFF1A\u521D\u30E9\u30A6\u30F3\u30C9\u3001\u98A8\u5F37\u3081...",
        value: roundMemo,
        maxLength: 20,
        onChange: (e) => setRoundMemo(e.target.value.slice(0, 20))
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontSize: "11px", color: roundMemo.length >= 20 ? "#ef4444" : "#475569", marginTop: "3px" } }, roundMemo.length, "/20")), inputMode === "detail" && venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u4ECA\u65E5\u306E\u76EE\u6A19\uFF08\u4EFB\u610F\u30FB1\u3064\u9078\u629E\uFF09"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setRoundGoal({ type: null, target: 1 }),
        style: {
          width: "100%",
          padding: "9px 12px",
          borderRadius: "9px",
          cursor: "pointer",
          border: roundGoal.type === null ? "2px solid rgba(22,163,74,0.6)" : "1px solid #e2e8f0",
          background: roundGoal.type === null ? "rgba(22,163,74,0.08)" : "#f8fafc",
          color: roundGoal.type === null ? "#16a34a" : "#94a3b8",
          fontWeight: "600",
          fontSize: "12px",
          textAlign: "left",
          marginBottom: "6px"
        }
      },
      "\u76EE\u6A19\u3092\u8A2D\u5B9A\u3057\u306A\u3044"
    ), (() => {
      const frontSC = venue.subCourses[selectedCourseA];
      const is9HGoal = selectedCourseB === "none";
      const backSC = is9HGoal ? null : venue.subCourses[selectedCourseB];
      const allPars = frontSC && is9HGoal ? frontSC.holes.map((h) => h.par) : frontSC && backSC ? [...frontSC.holes, ...backSC.holes].map((h) => h.par) : Array(18).fill(4);
      const par45Max = allPars.filter((p) => p >= 4).length;
      return GOAL_TYPES.map((g) => {
        const sel = roundGoal.type === g.id;
        const maxVal = g.id === "tee" ? par45Max : allPars.length;
        return /* @__PURE__ */ React.createElement("div", { key: g.id, style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setRoundGoal((prev) => ({
              type: g.id,
              target: sel ? Math.min(prev.target, maxVal) : Math.min(3, maxVal)
            })),
            style: {
              flex: 1,
              padding: "9px 12px",
              borderRadius: "9px",
              cursor: "pointer",
              border: sel ? "2px solid rgba(245,158,11,0.6)" : "1px solid #e2e8f0",
              background: sel ? "rgba(245,158,11,0.08)" : "#f8fafc",
              color: sel ? "#d97706" : "#475569",
              fontWeight: "700",
              fontSize: "12px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }
          },
          /* @__PURE__ */ React.createElement("span", null, g.label)
        ), sel && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setRoundGoal((prev) => __spreadProps(__spreadValues({}, prev), { target: Math.max(1, prev.target - 1) })),
            style: { width: "30px", height: "30px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#475569", cursor: "pointer", fontWeight: "800", fontSize: "16px" }
          },
          "\u2212"
        ), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "28px", textAlign: "center", fontWeight: "800", fontSize: "15px", color: "#d97706" } }, roundGoal.target), /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: () => setRoundGoal((prev) => __spreadProps(__spreadValues({}, prev), { target: Math.min(maxVal, prev.target + 1) })),
            style: { width: "30px", height: "30px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#475569", cursor: "pointer", fontWeight: "800", fontSize: "16px" }
          },
          "\uFF0B"
        ), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#94a3b8", fontWeight: "600" } }, "H"))));
      });
    })()), canStart && venue && /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "8px", padding: "10px 12px", marginBottom: "14px", fontSize: "12px", color: "#94a3b8" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", color: "#16a34a", marginBottom: "4px" } }, venue.name), /* @__PURE__ */ React.createElement("div", null, "\u524D\u534A\uFF1A", venue.subCourses[selectedCourseA].name, selectedCourseB === "none" ? " / \u5F8C\u534A\uFF1A\u306A\u3057\uFF089H\uFF09" : ` / \u5F8C\u534A\uFF1A${venue.subCourses[selectedCourseB].name}`), /* @__PURE__ */ React.createElement("div", null, "\u30B0\u30EA\u30FC\u30F3\uFF1A", venue.greens.length > 1 ? (_a2 = venue.greens.find((g) => g.id === selectedGreen)) == null ? void 0 : _a2.label : venue.greens[0].label, " / \u30C6\u30A3\u30FC\uFF1A", (_b2 = venue.tees.find((t) => t.id === selectedTee)) == null ? void 0 : _b2.label), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "3px" } }, "\u65E5\u4ED8\uFF1A", selectedDate.replace(/(\d{4})\/(\d{2})\/(\d{2})/, (_, y, m, d) => `${y}/${+m}/${+d}`), "\u5929\u6C17\uFF1A", { "sunny": "\u2600\uFE0F\u6674\u308C", "cloudy": "\u2601\uFE0F\u66C7\u308A", "rainy": "\u{1F327}\uFE0F\u96E8", "snowy": "\u2744\uFE0F\u96EA" }[selectedWeather], "\u98A8\uFF1A", ["0\u301C1m/s", "2\u301C3m/s", "4\u301C5m/s", "6\u301C8m/s", "9\u301C12m/s", "13m/s\u301C"][selectedWind], "\uFF08", selectedWind, "\uFF09")), /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", opacity: canStart ? 1 : 0.35, cursor: canStart ? "pointer" : "not-allowed" }), onClick: startRound, disabled: !canStart }, "\u30E9\u30A6\u30F3\u30C9\u958B\u59CB"));
  };
  const RoundCard = ({ r, teeRates }) => {
    const shots_ = r.shots || [];
    const tot = Math.round(shots_.reduce((s, sh) => s + sh.score, 0) * 10) / 10;
    const strk = shots_.reduce((s, sh) => s + sh.shotCount, 0);
    const holeNums = [...new Set(shots_.map((s) => s.hole))].sort((a, b) => a - b);
    const holeStats = holeNums.map((h) => {
      var _a2;
      const hs = shots_.filter((s) => s.hole === h);
      const par2 = ((_a2 = hs[0]) == null ? void 0 : _a2.par) || 4;
      const totalS = hs.reduce((a, s) => a + s.shotCount, 0);
      const diff = totalS - par2;
      const putts = hs.filter((s) => s.categoryKey === "putt").reduce((a, s) => a + s.shotCount, 0);
      const ob = hs.filter((s) => s.optionId === "ob").length;
      const pond = hs.filter((s) => s.optionId === "pond").length;
      const bunker = hs.filter((s) => s.optionId === "bunker").length;
      const evalSc = Math.round(hs.reduce((a, s) => a + s.score, 0) * 10) / 10;
      const { sym, color: symColor } = scoreDiffSymbol(diff);
      return { h, par: par2, totalS, diff, putts, ob, pond, bunker, evalSc, sym, symColor };
    });
    const frontStats = holeStats.filter((h) => h.h <= 9);
    const backStats = holeStats.filter((h) => h.h >= 10);
    const frontStrk = frontStats.reduce((a, h) => a + h.totalS, 0);
    const backStrk = backStats.reduce((a, h) => a + h.totalS, 0);
    const frontPar = frontStats.reduce((a, h) => a + h.par, 0);
    const backPar = backStats.reduce((a, h) => a + h.par, 0);
    const totalPar = frontPar + backPar;
    const ScoreRow = ({ stats, label, halfStrk, halfPar }) => /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569", fontWeight: "700", width: "28px" } }, label), stats.map(({ h, par: par2, sym, symColor, totalS, putts }) => /* @__PURE__ */ React.createElement("div", { key: h, style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "26px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8", lineHeight: 1 } }, "P", par2), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", color: symColor, lineHeight: 1, fontWeight: "700" } }, sym), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b", lineHeight: 1 } }, totalS), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#94a3b8", lineHeight: 1 } }, putts > 0 ? `${putts}P` : ""))), halfStrk > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "4px", padding: "2px 7px", background: "#f8fafc", borderRadius: "6px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: halfStrk - halfPar >= 0 ? "#f97316" : "#34d399" } }, halfStrk, halfStrk - halfPar >= 0 ? `(+${halfStrk - halfPar})` : `(${halfStrk - halfPar})`), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569" } }, "\u5C0F\u8A08"))));
    const isCollapsed = !expandedRounds.has(r.id);
    const toggleCollapse = () => setExpandedRounds((prev) => {
      const next = new Set(prev);
      if (next.has(r.id)) next.delete(r.id);
      else next.add(r.id);
      return next;
    });
    const hasSimpleData_ = Object.keys(r.simpleHoleData || {}).length > 0;
    const sa = hasSimpleData_ ? (() => {
      var _a2;
      try {
        return calcAnalytics(r, (_a2 = r.hcp) != null ? _a2 : null, teeRates);
      } catch (e) {
        return null;
      }
    })() : null;
    return /* @__PURE__ */ React.createElement("div", { key: r.id, style: S.card() }, (() => {
      const isSimple = r.inputMode === "simple";
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isCollapsed ? "0px" : "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: toggleCollapse,
          style: { display: "flex", alignItems: "center", gap: "6px", cursor: "pointer", userSelect: "none" }
        },
        /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "13px" } }, r.course),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", padding: "1px 6px", borderRadius: "10px", background: isSimple ? "rgba(251,191,36,0.15)" : "rgba(96,165,250,0.15)", color: isSimple ? "#fbbf24" : "#60a5fa", fontWeight: "700" } }, isSimple ? "\u7C21\u6613" : "\u8A73\u7D30"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f59e0b", marginLeft: "2px", fontWeight: "700" } }, isCollapsed ? "\u25B6" : "\u25BC")
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: () => {
            var _a2;
            setEditingRoundId(r.id);
            setEditDate(r.date || "");
            setEditWeather(r.weather || "sunny");
            setEditWind((_a2 = r.wind) != null ? _a2 : 0);
          },
          style: { color: "#94a3b8", fontSize: "11px", marginTop: "2px", display: "flex", gap: "8px", cursor: "pointer", textDecoration: "underline dotted", textUnderlineOffset: "2px" }
        },
        /* @__PURE__ */ React.createElement("span", null, r.date),
        r.weather && /* @__PURE__ */ React.createElement("span", null, { "sunny": "\u2600\uFE0F", "cloudy": "\u2601\uFE0F", "rainy": "\u{1F327}\uFE0F", "snowy": "\u2744\uFE0F" }[r.weather]),
        r.wind !== void 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, ["0\u301C1m/s", "2\u301C3m/s", "4\u301C5m/s", "6\u301C8m/s", "9\u301C12m/s", "13m/s\u301C"][r.wind], "\uFF08", r.wind, "\uFF09"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8" } }, "\u270E")
      ), r.memo && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#94a3b8", marginTop: "3px" } }, r.memo), r.goal && r.inputMode === "detail" && r.holeData && (() => {
        const progress = calcGoalProgress(r.holeData, r.holePars || Array(18).fill(4), r.goal);
        const goalDef = GOAL_TYPES.find((g) => g.id === r.goal.type);
        if (!goalDef) return null;
        const achieved = progress >= r.goal.target;
        return /* @__PURE__ */ React.createElement("div", { style: {
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "4px",
          padding: "2px 8px",
          borderRadius: "12px",
          background: achieved ? "rgba(22,163,74,0.10)" : "rgba(14,165,233,0.08)",
          border: `1px solid ${achieved ? "rgba(22,163,74,0.30)" : "rgba(14,165,233,0.25)"}`
        } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: achieved ? "#16a34a" : "#0ea5e9" } }, goalDef.label, " ", progress, "/", r.goal.target, "H"), achieved && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#16a34a", fontWeight: "800" } }, "\u2705"));
      })()), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", flexShrink: 0, marginLeft: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" } }, !r.isComplete ? /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => resumeRound(r),
          style: { padding: "5px 12px", borderRadius: "20px", border: "1px solid rgba(251,191,36,0.5)", background: "rgba(251,191,36,0.12)", color: "#fbbf24", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
        },
        "\u270F\uFE0F \u5165\u529B\u4E2D"
      ) : /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => resumeRound(r),
          style: { padding: "5px 12px", borderRadius: "20px", border: "1px solid rgba(148,163,184,0.4)", background: "rgba(148,163,184,0.08)", color: "#94a3b8", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
        },
        "\u{1F58A} \u4FEE\u6B63"
      )), sa ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "20px", color: sa.totalScore - sa.totalPar >= 0 ? "#f97316" : "#16a34a" } }, sa.totalScore), /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "9px" } }, "(", sa.totalScore - sa.totalPar >= 0 ? "+" : "", sa.totalScore - sa.totalPar, ")")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "20px", color: scoreColor(tot) } }, fmt(tot)), /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "9px" } }, "\u8A55\u4FA1\u30B9\u30B3\u30A2")))), !isCollapsed && /* @__PURE__ */ React.createElement(React.Fragment, null, sa && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "10px" } }, (() => {
        const shd = r.simpleHoleData || {};
        const frontHoles = Array.from({ length: 9 }, (_, i) => i + 1).filter((h) => shd[h]);
        const backHoles = Array.from({ length: 9 }, (_, i) => i + 10).filter((h) => shd[h]);
        const frontScore = frontHoles.reduce((a, h) => {
          var _a2;
          return a + (((_a2 = shd[h]) == null ? void 0 : _a2.score) || 0);
        }, 0);
        const backScore = backHoles.reduce((a, h) => {
          var _a2;
          return a + (((_a2 = shd[h]) == null ? void 0 : _a2.score) || 0);
        }, 0);
        const frontPar2 = frontHoles.reduce((a, h) => {
          var _a2;
          return a + (((_a2 = r.holePars) == null ? void 0 : _a2[h - 1]) || 4);
        }, 0);
        const backPar2 = backHoles.reduce((a, h) => {
          var _a2;
          return a + (((_a2 = r.holePars) == null ? void 0 : _a2[h - 1]) || 4);
        }, 0);
        const frontLabel = r.frontCourse || "\u524D\u534A";
        const backLabel = r.backCourse || "\u5F8C\u534A";
        const sign = (d) => (d >= 0 ? "+" : "") + d;
        const items = [];
        if (frontHoles.length) items.push(`${frontLabel}\uFF1A${frontScore}\uFF08${sign(frontScore - frontPar2)}\uFF09`);
        if (backHoles.length) items.push(`${backLabel}\uFF1A${backScore}\uFF08${sign(backScore - backPar2)}\uFF09`);
        if (items.length > 1) items.push(`\u5408\u8A08\uFF1A${sa.totalScore}\uFF08${sign(sa.totalScore - sa.totalPar)}\uFF09`);
        return /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 10px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", fontSize: "12px", color: "#1e293b", fontWeight: "700", textAlign: "center", marginBottom: "8px" } }, items.join("\u3000"));
      })(), (() => {
        const shd = r.simpleHoleData || {};
        const pars = r.holePars || Array(18).fill(4);
        const norm = (v) => v === "good" ? "\u25CB" : v === "fair" ? "\u25B3" : v === "bad" ? "\xD7" : v;
        const teeRateByPar = (par2) => {
          const target = Object.entries(shd).filter(([h, d]) => (pars[parseInt(h) - 1] || 4) === par2 && (d == null ? void 0 : d.teeEval));
          if (!target.length) return null;
          const ok = target.filter(([, d]) => norm(d.teeEval) === "\u25CB").length;
          return Math.round(ok / target.length * 100);
        };
        const p5 = teeRateByPar(5), p4 = teeRateByPar(4), p3 = teeRateByPar(3);
        const allHoles = Object.entries(shd).filter(([, d]) => (d == null ? void 0 : d.score) != null);
        const girHoles = allHoles.filter(([h, d]) => (d.score || 0) - (d.putts || 0) <= (pars[parseInt(h) - 1] || 4) - 2);
        const girRate = allHoles.length > 0 ? Math.round(girHoles.length / allHoles.length * 100) : null;
        const rateColor = (v) => v == null ? "#94a3b8" : v >= 60 ? "#16a34a" : v >= 30 ? "#fbbf24" : "#dc2626";
        const cell = (label, val) => /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, label, " ", /* @__PURE__ */ React.createElement("span", { style: { color: rateColor(val), fontWeight: "700" } }, val != null ? `${val}%` : "\u2212"));
        return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center", fontSize: "11px", paddingTop: "6px", borderTop: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontWeight: "600" } }, "\u30C6\u30A3\u6210\u529F\u7387"), cell("Par5", p5), cell("Par4", p4), cell("Par3", p3), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", marginLeft: "4px", fontWeight: "600" } }, "\u30D1\u30FC\u30AA\u30F3\u7387"), /* @__PURE__ */ React.createElement("span", { style: { color: rateColor(girRate), fontWeight: "700" } }, girRate != null ? `${girRate}%` : "\u2212"));
      })(), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", marginTop: "5px", paddingTop: "5px", borderTop: "1px dashed #e2e8f0", fontSize: "11px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D1\u30C3\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, sa.totalPutts)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "OB ", /* @__PURE__ */ React.createElement("span", { style: { color: sa.totalOB > 0 ? "#b91c1c" : "#e2e8f0", fontWeight: "700" } }, sa.totalOB)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30DA\u30CA\u30EB\u30C6\u30A3 ", /* @__PURE__ */ React.createElement("span", { style: { color: sa.totalPen > 0 ? "#b91c1c" : "#e2e8f0", fontWeight: "700" } }, sa.totalPen)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D0\u30F3\u30AB\u30FC ", /* @__PURE__ */ React.createElement("span", { style: { color: sa.totalBunker > 0 ? "#fbbf24" : "#e2e8f0", fontWeight: "700" } }, sa.totalBunker))), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => setShotDetailRid(shotDetailRid === r.rid ? null : r.rid),
          style: { padding: "3px 10px", borderRadius: "20px", border: "1px solid rgba(96,165,250,0.4)", background: shotDetailRid === r.rid ? "rgba(96,165,250,0.2)" : "rgba(96,165,250,0.08)", color: "#0ea5e9", fontSize: "10px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }
        },
        "\u30DB\u30FC\u30EB\u30D0\u30A4\u30DB\u30FC\u30EB"
      )), shotDetailRid === r.rid && (() => {
        const shd = r.simpleHoleData || {};
        const pars = r.holePars || Array(18).fill(4);
        const evalLabel = (v, isApproach = false) => {
          if (v === "\u25CB" || v === "good") return "\u25CB";
          if (v === "\u25B3" || v === "fair") return "\u25B3";
          if (v === "\xD7" || v === "bad") return "\xD7";
          if (v === "\u7121" || v === "none") return isApproach ? "\uFF0D" : "\u7121";
          return "\uFF0D";
        };
        const evalColor = (v) => v === "\u25CB" || v === "good" ? "#15803d" : v === "\u25B3" || v === "fair" ? "#a16207" : v === "\xD7" || v === "bad" ? "#475569" : "#94a3b8";
        const successRate = (holes, key) => {
          const valid = holes.filter((h) => {
            var _a2, _b2, _c2;
            return ((_a2 = shd[h]) == null ? void 0 : _a2[key]) && ((_b2 = shd[h]) == null ? void 0 : _b2[key]) !== "\u7121" && ((_c2 = shd[h]) == null ? void 0 : _c2[key]) !== "none";
          });
          if (!valid.length) return "\uFF0D";
          const ok = valid.filter((h) => {
            var _a2, _b2;
            return ((_a2 = shd[h]) == null ? void 0 : _a2[key]) === "\u25CB" || ((_b2 = shd[h]) == null ? void 0 : _b2[key]) === "good";
          }).length;
          return `${Math.round(ok / valid.length * 100)}%`;
        };
        const rows = [
          { label: "Par", key: null, isEval: false, render: (h) => pars[h - 1] || 4, color: () => "#94a3b8", totalFn: null },
          { label: "\u30B9\u30B3\u30A2", key: "score", isEval: false, render: (h) => {
            var _a2;
            const v = (_a2 = shd[h]) == null ? void 0 : _a2.score;
            if (v == null) return "\uFF0D";
            if (scoreDisplayMode === "symbol") return scoreDiffSymbol(v - (pars[h - 1] || 4)).sym;
            return v;
          }, color: (h) => {
            var _a2;
            const v = (_a2 = shd[h]) == null ? void 0 : _a2.score;
            if (v == null) return "#94a3b8";
            return scoreDiffSymbol(v - (pars[h - 1] || 4)).color;
          }, totalFn: (holes) => holes.reduce((a, h) => {
            var _a2;
            return a + (((_a2 = shd[h]) == null ? void 0 : _a2.score) || 0);
          }, 0) },
          { label: "\u30D1\u30C3\u30C8\u6570", key: "putts", isEval: false, render: (h) => {
            var _a2, _b2;
            return (_b2 = (_a2 = shd[h]) == null ? void 0 : _a2.putts) != null ? _b2 : "\uFF0D";
          }, color: (h) => {
            var _a2;
            return (((_a2 = shd[h]) == null ? void 0 : _a2.putts) || 0) >= 3 ? "#dc2626" : "#e2e8f0";
          }, totalFn: (holes) => holes.reduce((a, h) => {
            var _a2;
            return a + (((_a2 = shd[h]) == null ? void 0 : _a2.putts) || 0);
          }, 0) },
          { label: "OB", key: "ob", isEval: false, render: (h) => {
            var _a2;
            return ((_a2 = shd[h]) == null ? void 0 : _a2.ob) || "\uFF0D";
          }, color: (h) => {
            var _a2;
            return (((_a2 = shd[h]) == null ? void 0 : _a2.ob) || 0) > 0 ? "#dc2626" : "#475569";
          }, totalFn: (holes) => holes.reduce((a, h) => {
            var _a2;
            return a + (((_a2 = shd[h]) == null ? void 0 : _a2.ob) || 0);
          }, 0) },
          { label: "\u30DA\u30CA\u30EB\u30C6\u30A3", key: "penalty", isEval: false, render: (h) => {
            var _a2;
            return ((_a2 = shd[h]) == null ? void 0 : _a2.penalty) || "\uFF0D";
          }, color: (h) => {
            var _a2;
            return (((_a2 = shd[h]) == null ? void 0 : _a2.penalty) || 0) > 0 ? "#dc2626" : "#475569";
          }, totalFn: (holes) => holes.reduce((a, h) => {
            var _a2;
            return a + (((_a2 = shd[h]) == null ? void 0 : _a2.penalty) || 0);
          }, 0) },
          { label: "\u30D0\u30F3\u30AB\u30FC", key: "bunker", isEval: false, render: (h) => {
            var _a2;
            return ((_a2 = shd[h]) == null ? void 0 : _a2.bunker) || "\uFF0D";
          }, color: (h) => {
            var _a2;
            return (((_a2 = shd[h]) == null ? void 0 : _a2.bunker) || 0) > 0 ? "#fbbf24" : "#475569";
          }, totalFn: (holes) => holes.reduce((a, h) => {
            var _a2;
            return a + (((_a2 = shd[h]) == null ? void 0 : _a2.bunker) || 0);
          }, 0) },
          { label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", key: "teeEval", isEval: true, render: (h) => {
            var _a2;
            return evalLabel((_a2 = shd[h]) == null ? void 0 : _a2.teeEval);
          }, color: (h) => {
            var _a2;
            return evalColor((_a2 = shd[h]) == null ? void 0 : _a2.teeEval);
          }, totalFn: (holes) => successRate(holes, "teeEval") }
        ];
        const front = r.frontCourse || "\u524D\u534A";
        const back = r.backCourse || "\u5F8C\u534A";
        const _fNums = r.frontHoleNums || Array.from({ length: 9 }, (_, i) => i + 1);
        const _bNums = r.backHoleNums || Array.from({ length: 9 }, (_, i) => i + 10);
        const sections = [
          { label: front, keys: Array.from({ length: 9 }, (_, i) => i + 1).filter((h) => shd[h]), nums: _fNums },
          { label: back, keys: Array.from({ length: 9 }, (_, i) => i + 10).filter((h) => shd[h]), nums: _bNums }
        ].filter((s) => s.keys.length > 0);
        return /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", overflowX: "auto" } }, sections.map((sec) => /* @__PURE__ */ React.createElement("div", { key: sec.label, style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#0ea5e9", marginBottom: "4px" } }, sec.label), /* @__PURE__ */ React.createElement("table", { style: { borderCollapse: "collapse", fontSize: "10px", width: "100%" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", { style: { padding: "3px 5px", color: "#475569", fontWeight: "700", background: "#f8fafc", borderBottom: "1px solid #e2e8f0", whiteSpace: "nowrap" } }, "\u30DB\u30FC\u30EB"), sec.keys.map((h, i) => /* @__PURE__ */ React.createElement("td", { key: h, style: { padding: "3px 4px", textAlign: "center", color: "#0ea5e9", fontWeight: "700", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" } }, (sec.nums || sec.keys)[i])), /* @__PURE__ */ React.createElement("td", { style: { padding: "3px 5px", textAlign: "center", color: "#94a3b8", fontWeight: "700", background: "#f8fafc", borderBottom: "1px solid #e2e8f0" } }, "\u8A08"))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((row, ri) => {
          const totalVal = row.totalFn ? row.totalFn(sec.keys) : null;
          const totalColor = row.isEval ? "#16a34a" : "#94a3b8";
          const isScoreRow = row.key === "score";
          return /* @__PURE__ */ React.createElement("tr", { key: row.label, style: { background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" } }, /* @__PURE__ */ React.createElement(
            "td",
            {
              onClick: isScoreRow ? () => setScoreDisplayMode((m) => m === "number" ? "symbol" : "number") : void 0,
              title: isScoreRow ? "\u30BF\u30C3\u30D7\u3067\u6570\u5B57\u2194\u8A18\u53F7\u3092\u5207\u66FF" : void 0,
              style: __spreadValues({
                padding: "3px 5px",
                color: isScoreRow ? "#0ea5e9" : "#64748b",
                fontWeight: "600",
                whiteSpace: "nowrap",
                borderRight: "1px solid #e2e8f0"
              }, isScoreRow && { cursor: "pointer", userSelect: "none" })
            },
            row.label,
            isScoreRow && /* @__PURE__ */ React.createElement("span", { style: { marginLeft: "3px", fontSize: "9px", opacity: 0.75 } }, "\u21C4")
          ), sec.keys.map((h) => /* @__PURE__ */ React.createElement("td", { key: h, style: { padding: "3px 4px", textAlign: "center", color: row.color(h), fontWeight: "700" } }, row.render(h))), /* @__PURE__ */ React.createElement("td", { style: { padding: "3px 4px", textAlign: "center", color: totalColor, fontWeight: "700", borderLeft: "1px solid #e2e8f0", fontSize: row.isEval ? "9px" : "10px" } }, totalVal !== null ? totalVal === 0 ? "\uFF0D" : totalVal : ""));
        }))))));
      })(), r.goal && r.inputMode === "detail" && r.holeData && (() => {
        const progress = calcGoalProgress(r.holeData, r.holePars || Array(18).fill(4), r.goal);
        const goalDef = GOAL_TYPES.find((g) => g.id === r.goal.type);
        if (!goalDef) return null;
        const achieved = progress >= r.goal.target;
        const pct = r.goal.target > 0 ? Math.round(progress / r.goal.target * 100) : 0;
        return /* @__PURE__ */ React.createElement("div", { style: {
          marginTop: "10px",
          padding: "12px 14px",
          borderRadius: "10px",
          background: achieved ? "rgba(22,163,74,0.07)" : "rgba(14,165,233,0.06)",
          border: `1px solid ${achieved ? "rgba(22,163,74,0.25)" : "rgba(14,165,233,0.20)"}`
        } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: achieved ? "#16a34a" : "#0ea5e9" } }, "\u76EE\u6A19\u9054\u6210\u5EA6"), achieved && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#16a34a", marginLeft: "auto" } }, "\u2705 \u9054\u6210\uFF01")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#475569", flex: 1 } }, goalDef.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", fontWeight: "800", color: achieved ? "#16a34a" : "#0ea5e9" } }, progress, " / ", r.goal.target, "H")), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "8px", height: "5px", background: "#e2e8f0", borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
          height: "100%",
          width: `${Math.min(100, pct)}%`,
          background: achieved ? "#16a34a" : "#0ea5e9",
          borderRadius: "3px",
          transition: "width 0.3s"
        } })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#94a3b8", marginTop: "4px", textAlign: "right" } }, pct, "%", !achieved && ` \uFF08\u76EE\u6A19\u307E\u3067\u3042\u3068${r.goal.target - progress}H\uFF09`));
      })(), r.isComplete && sa && sa.holeCount >= 9 && (r.hcp != null ? /* @__PURE__ */ React.createElement(
        AiDiagnosisPanel,
        {
          sa,
          shd: r.simpleHoleData || {},
          hcp: r.hcp,
          rounds,
          roundId: r.id,
          teeRates
        }
      ) : /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", padding: "10px 12px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, "HCP\u672A\u767B\u9332\u306E\u305F\u3081\u5206\u6790\u4E0D\u80FD\u3067\u3059\uFF08\u30DE\u30A4\u30DA\u30FC\u30B8\u3067HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u8A18\u9332\u3059\u308B\u3068\u5229\u7528\u3067\u304D\u307E\u3059\uFF09"))))));
    })(), !isCollapsed && holeStats.length > 0 && !sa && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "10px", overflowX: "auto" } }, frontStats.length > 0 && /* @__PURE__ */ React.createElement(ScoreRow, { stats: frontStats, label: "\u524D\u534A", halfStrk: frontStrk, halfPar: frontPar }), backStats.length > 0 && /* @__PURE__ */ React.createElement(ScoreRow, { stats: backStats, label: "\u5F8C\u534A", halfStrk: backStrk, halfPar: backPar }), (() => {
      const totalPutts = holeStats.reduce((a, h) => a + h.putts, 0);
      const totalOb = holeStats.reduce((a, h) => a + h.ob, 0);
      const totalPond = holeStats.reduce((a, h) => a + h.pond, 0);
      const totalBunker = holeStats.reduce((a, h) => a + h.bunker, 0);
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "6px", borderTop: "1px solid #e2e8f0", fontSize: "11px", flexWrap: "wrap", gap: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "800" } }, strk), " (", strk - totalPar >= 0 ? "+" : "", strk - totalPar, ")"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D1\u30C3\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, totalPutts)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "OB ", /* @__PURE__ */ React.createElement("span", { style: { color: totalOb > 0 ? "#b91c1c" : "#e2e8f0", fontWeight: "700" } }, totalOb)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30DA\u30CA\u30EB\u30C6\u30A3 ", /* @__PURE__ */ React.createElement("span", { style: { color: totalPond > 0 ? "#b91c1c" : "#e2e8f0", fontWeight: "700" } }, totalPond)), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D0\u30F3\u30AB\u30FC ", /* @__PURE__ */ React.createElement("span", { style: { color: totalBunker > 0 ? "#fbbf24" : "#e2e8f0", fontWeight: "700" } }, totalBunker))), /* @__PURE__ */ React.createElement("span", { style: S.pill(scoreColor(tot)) }, fmt(tot), "pt"));
    })()), !isCollapsed && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", paddingTop: "10px", borderTop: "1px solid #e2e8f0", textAlign: "right" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setConfirmDeleteId(r.id),
        style: { padding: "5px 14px", borderRadius: "20px", border: "1px solid rgba(239,68,68,0.3)", background: "rgba(239,68,68,0.06)", color: "#dc2626", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
      },
      "\u524A\u9664"
    )), editingRoundId === r.id && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "14px", marginBottom: "16px", color: "#1e293b" } }, "\u65E5\u4ED8\u30FB\u5929\u6C17\u30FB\u98A8\u3092\u5909\u66F4"), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u65E5\u4ED8"), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "date",
        value: editDate.replace(/\//g, "-"),
        onChange: (e) => {
          if (e.target.value) setEditDate(e.target.value.replace(/-/g, "/"));
        },
        style: __spreadProps(__spreadValues({}, S.input), { marginBottom: "14px", colorScheme: "dark" })
      }
    ), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5929\u6C17"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "14px" } }, [{ id: "sunny", label: "\u2600\uFE0F" }, { id: "cloudy", label: "\u2601\uFE0F" }, { id: "rainy", label: "\u{1F327}\uFE0F" }, { id: "snowy", label: "\u2744\uFE0F" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.id, onClick: () => setEditWeather(w.id), style: {
      flex: 1,
      padding: "8px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "18px",
      border: editWeather === w.id ? "2px solid #16a34a" : "1px solid #e2e8f0",
      background: editWeather === w.id ? "rgba(14,165,233,0.12)" : "#f8fafc"
    } }, w.label))), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u98A8\u306E\u5F37\u3055"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", marginBottom: "20px" } }, [{ v: 0, s: "0\u301C1" }, { v: 1, s: "2\u301C3" }, { v: 2, s: "4\u301C5" }, { v: 3, s: "6\u301C8" }, { v: 4, s: "9\u301C12" }, { v: 5, s: "13\u301C" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.v, onClick: () => setEditWind(w.v), style: {
      flex: 1,
      padding: "6px 2px",
      borderRadius: "7px",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "12px",
      border: editWind === w.v ? "2px solid #fbbf24" : "1px solid #e2e8f0",
      background: editWind === w.v ? "rgba(251,191,36,0.15)" : "#f8fafc",
      color: editWind === w.v ? "#fbbf24" : "#64748b",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    } }, /* @__PURE__ */ React.createElement("span", null, w.v), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "600", opacity: 0.75, whiteSpace: "nowrap", lineHeight: 1.2, textAlign: "center" } }, w.s, /* @__PURE__ */ React.createElement("br", null), "m/s")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setEditingRoundId(null),
        style: { flex: 1, padding: "10px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#475569", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
      },
      "\u30AD\u30E3\u30F3\u30BB\u30EB"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          setRounds((prev) => prev.map((x) => x.id === r.id ? __spreadProps(__spreadValues({}, x), { date: editDate, weather: editWeather, wind: editWind }) : x));
          setEditingRoundId(null);
        },
        style: { flex: 1, padding: "10px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#34d399,#60a5fa)", color: "#f8fafc", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
      },
      "\u4FDD\u5B58"
    )))), confirmDeleteId === r.id && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(239,68,68,0.4)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", marginBottom: "8px", color: "#1e293b" } }, r.course), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#94a3b8", marginBottom: "6px" } }, r.date), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", color: "#dc2626", fontWeight: "700", marginBottom: "20px", padding: "10px", background: "#fef2f2", borderRadius: "8px" } }, "\u767B\u9332\u3055\u308C\u305F\u30B9\u30B3\u30A2\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setConfirmDeleteId(null),
        style: { flex: 1, padding: "10px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#475569", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
      },
      "\u30AD\u30E3\u30F3\u30BB\u30EB"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => deleteRound(r.id),
        style: { flex: 1, padding: "10px", borderRadius: "9px", border: "none", background: "rgba(220,38,38,0.10)", color: "#dc2626", fontWeight: "700", fontSize: "13px", cursor: "pointer", border: "1px solid rgba(239,68,68,0.4)" }
      },
      "\u524A\u9664\u3059\u308B"
    )))));
  };
  const AnalyticsAIDiagnosis = () => {
    const parseDate = (d) => {
      const p = (d || "").split("/").map(Number);
      return new Date(p[0], (p[1] || 1) - 1, p[2] || 1);
    };
    const formatDate = (d) => `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
    const completed = [...rounds.filter((r) => r.isComplete && r.hcp != null && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (completed.length === 0) {
      return /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#1e293b", marginBottom: "2px" } }, "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9 \u5E73\u5747AI\u8A3A\u65AD"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b" } }, "HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068\u5229\u7528\u3067\u304D\u307E\u3059")));
    }
    const targetRounds = completed.slice(0, 20);
    const target5Rounds = completed.slice(0, 5);
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const avgN = (arr) => {
      const v = arr.filter((x) => x != null);
      return v.length ? v.reduce((s, x) => s + x, 0) / v.length : null;
    };
    const buildAvgSa = (rList) => {
      const sList = rList.map((r) => {
        var _a2;
        return calcAnalytics(r, (_a2 = r.hcp) != null ? _a2 : null, teeRatesAna);
      }).filter(Boolean);
      if (!sList.length) return null;
      const detailList = sList.filter((s) => s.isDetailMode);
      const simpleList = sList.filter((s) => !s.isDetailMode);
      const shortUseDetail = detailList.length >= simpleList.length;
      const shortSrc = shortUseDetail ? detailList : simpleList;
      const shortScoreAvg = avgN(shortSrc.map((s) => s.shortScore));
      const shortShotQualsSel = shortSrc.flatMap((s) => s.shortShotQuals || []);
      return {
        teeScore: avgN(sList.map((s) => s.teeScore)),
        longScore: avgN(sList.map((s) => s.longScore)),
        shortScore: shortScoreAvg,
        puttScore: avgN(sList.map((s) => s.puttScore)),
        bunkerScore: sList.some((s) => s.bunkerScore != null) ? avgN(sList.filter((s) => s.bunkerScore != null).map((s) => s.bunkerScore)) : null,
        idealGIR: avgN(sList.filter((s) => s.idealGIR != null).map((s) => s.idealGIR)),
        totalScore: avgN(sList.map((s) => s.totalScore)),
        totalPar: avgN(sList.map((s) => s.totalPar)),
        totalPutts: Math.round(avgN(sList.map((s) => s.totalPutts)) * 10) / 10,
        totalOB: Math.round(avgN(sList.map((s) => s.totalOB)) * 10) / 10,
        totalPen: Math.round(avgN(sList.map((s) => s.totalPen)) * 10) / 10,
        totalBunker: Math.round(avgN(sList.map((s) => s.totalBunker)) * 10) / 10,
        holeCount: Math.round(avgN(sList.map((s) => s.holeCount))),
        avgAfterPutts: Math.round(avgN(sList.map((s) => s.avgAfterPutts)) * 10) / 10,
        bunkerHoleCount: Math.round(avgN(sList.map((s) => s.bunkerHoleCount)) * 10) / 10,
        longShotQuals: sList.flatMap((s) => s.longShotQuals || []),
        shortShotQuals: shortShotQualsSel,
        // ショートゲームのグレード閾値は採用したモードに合わせる
        isDetailMode: shortUseDetail
      };
    };
    const avgSa = buildAvgSa(targetRounds);
    const avgSa5 = buildAvgSa(target5Rounds);
    if (!avgSa) return null;
    const buildFlatShd = (rList) => {
      const out = {};
      let idx = 0;
      rList.forEach((r) => {
        Object.values(r.simpleHoleData || {}).forEach((hd2) => {
          out[idx++] = hd2;
        });
      });
      return out;
    };
    const flatShd = buildFlatShd(targetRounds);
    const oldestDate = targetRounds[targetRounds.length - 1].date;
    const dateRange = `${oldestDate} \u301C ${completed[0].date}`;
    const diagHcp = effectiveHcp != null ? effectiveHcp : 0;
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement(
      AiDiagnosisPanel,
      {
        sa: avgSa,
        sa5: avgSa5,
        shd: flatShd,
        hcp: diagHcp,
        rounds: [],
        roundId: null,
        showTrend: false,
        label: "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9 \u5E73\u5747AI\u8A3A\u65AD",
        roundCount: targetRounds.length,
        dateRange,
        radarSlot: /* @__PURE__ */ React.createElement(AnalyticsRadarChart, null)
      }
    ));
  };
  const AnalyticsScoreChart = () => {
    const simpleCompleted = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (simpleCompleted.length < 2) return null;
    const recent = simpleCompleted.slice(0, 5).reverse();
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const saList = recent.map((r) => {
      var _a2, _b2, _c2;
      const is9H = ((_b2 = (_a2 = r.holePars) == null ? void 0 : _a2.length) != null ? _b2 : 18) <= 12;
      const mult = is9H ? 2 : 1;
      return {
        date: r.date,
        sa: calcAnalytics(r, (_c2 = r.hcp) != null ? _c2 : null, teeRatesAna),
        is9H,
        totalScore: Object.values(r.simpleHoleData || {}).reduce((a, h) => a + (h.score || 0), 0) * mult,
        totalPutts: Object.values(r.simpleHoleData || {}).reduce((a, h) => a + (h.putts || 0), 0) * mult,
        totalPar: (r.holePars || Array(18).fill(4)).reduce((a, p) => a + p, 0) * mult
      };
    }).filter((x) => x.sa);
    if (saList.length < 2) return null;
    const sc20all = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date)).slice(0, 20);
    const weightOf = (r) => {
      var _a2, _b2;
      return ((_b2 = (_a2 = r.holePars) == null ? void 0 : _a2.length) != null ? _b2 : 18) <= 12 ? 0.5 : 1;
    };
    const totalWeight20 = sc20all.reduce((a, r) => a + weightOf(r), 0);
    const avg20Score = totalWeight20 ? Math.round(sc20all.reduce((a, r) => a + Object.values(r.simpleHoleData || {}).reduce((s, h) => s + (h.score || 0), 0), 0) / totalWeight20 * 10) / 10 : null;
    const avg20Putts = totalWeight20 ? Math.round(sc20all.reduce((a, r) => a + Object.values(r.simpleHoleData || {}).reduce((s, h) => s + (h.putts || 0), 0), 0) / totalWeight20 * 10) / 10 : null;
    const teeRatesAna20 = calcHistoricalTeeRates(rounds);
    const saList20 = sc20all.map((r) => {
      var _a2;
      return { sa: calcAnalytics(r, (_a2 = r.hcp) != null ? _a2 : null, teeRatesAna20) };
    }).filter((x) => x.sa);
    const avg20EvalTotal = saList20.length ? Math.round(saList20.reduce((a, x) => {
      const vals = ["teeScore", "longScore", "shortScore", "puttScore", "bunkerScore"].map((k) => x.sa[k]).filter((v) => v != null);
      return a + vals.reduce((s, v) => s + v, 0);
    }, 0) / saList20.length * 10) / 10 : null;
    const avg20ByKey = saList20.length ? {
      teeScore: Math.round(saList20.reduce((a, x) => {
        var _a2;
        return a + ((_a2 = x.sa.teeScore) != null ? _a2 : 0);
      }, 0) / saList20.length * 100) / 100,
      longScore: Math.round(saList20.reduce((a, x) => {
        var _a2;
        return a + ((_a2 = x.sa.longScore) != null ? _a2 : 0);
      }, 0) / saList20.length * 100) / 100,
      shortScore: saList20.some((x) => x.sa.shortScore != null) ? Math.round(saList20.filter((x) => x.sa.shortScore != null).reduce((a, x) => a + x.sa.shortScore, 0) / saList20.filter((x) => x.sa.shortScore != null).length * 100) / 100 : null,
      puttScore: Math.round(saList20.reduce((a, x) => {
        var _a2;
        return a + ((_a2 = x.sa.puttScore) != null ? _a2 : 0);
      }, 0) / saList20.length * 100) / 100,
      bunkerScore: saList20.some((x) => x.sa.bunkerScore != null) ? Math.round(saList20.filter((x) => x.sa.bunkerScore != null).reduce((a, x) => {
        var _a2;
        return a + ((_a2 = x.sa.bunkerScore) != null ? _a2 : 0);
      }, 0) / saList20.filter((x) => x.sa.bunkerScore != null).length * 100) / 100 : null
    } : null;
    const LineChart = ({ title, series, yMin, yMax, color, formatY }) => {
      const W = 320, H = 160, padL = 62, padR = 12, padT = 14, padB = 28;
      const n = saList.length;
      const xOf = (i) => padL + i / (n - 1) * (W - padL - padR);
      const yRange = yMax - yMin;
      const yOf = (v) => padT + (1 - (v - yMin) / yRange) * (H - padT - padB);
      const gridVals = [yMin, (yMin + yMax) / 2, yMax];
      return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, title), /* @__PURE__ */ React.createElement("svg", { width: "100%", viewBox: `0 0 ${W} ${H}`, style: { display: "block" } }, gridVals.map((v, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: padL, y1: yOf(v).toFixed(1), x2: W - padR, y2: yOf(v).toFixed(1), stroke: "#f1f5f9", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: "2", y: (yOf(v) + 4).toFixed(1), textAnchor: "start", fill: "#475569", fontSize: "9" }, formatY ? formatY(v) : v))), yMin < 0 && yMax > 0 && /* @__PURE__ */ React.createElement("line", { x1: padL, y1: yOf(0).toFixed(1), x2: W - padR, y2: yOf(0).toFixed(1), stroke: "rgba(255,255,255,0.2)", strokeWidth: "1", strokeDasharray: "3 2" }), series.map((s, si) => {
        const pts = saList.map((x, i) => [xOf(i), yOf(s.vals[i])]);
        const pathD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
        return /* @__PURE__ */ React.createElement("g", { key: si }, /* @__PURE__ */ React.createElement("path", { d: pathD, fill: "none", stroke: s.color, strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), pts.map(([x, y], i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: "3.5", fill: s.color }), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: (y - 7).toFixed(1), textAnchor: "middle", fill: s.color, fontSize: "9", fontWeight: "700" }, s.format ? s.format(s.vals[i]) : s.vals[i]))));
      }), saList.map((x, i) => /* @__PURE__ */ React.createElement("text", { key: i, x: xOf(i).toFixed(1), y: H - 4, textAnchor: "middle", fill: "#475569", fontSize: "8" }, x.date.replace(/\d{4}\//, "").replace(/\/(\d)$/, "/0$1")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" } }, series.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: "2px", background: s.color, borderRadius: "1px" } }), /* @__PURE__ */ React.createElement("span", { style: { color: s.color } }, s.label)))));
    };
    const evalKeys = ["teeScore", "longScore", "shortScore", "puttScore", "bunkerScore"];
    const evalVals = saList.flatMap((x) => evalKeys.map((k) => x.sa[k]).filter((v) => v != null));
    const evalMin = Math.floor(Math.min(...evalVals, -1));
    const evalMax = Math.ceil(Math.max(...evalVals, 1));
    const scores = saList.map((x) => x.totalScore);
    const putts = saList.map((x) => x.totalPutts);
    const combinedMin = Math.floor(Math.min(...scores, ...putts)) - 2;
    const combinedMax = Math.ceil(Math.max(...scores, ...putts)) + 2;
    const evalTotals = saList.map((x) => {
      const sa = x.sa;
      const vals = [sa.teeScore, sa.longScore, sa.shortScore, sa.puttScore, sa.bunkerScore].filter((v) => v != null);
      return Math.round(vals.reduce((a, v) => a + v, 0) * 10) / 10;
    });
    const fmtEval = (v) => v == null ? "" : (v >= 0 ? "+" : "") + Math.round(v);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, (() => {
      var _a2, _b2;
      const W = 320, H = 180, padL = 62, padR = 28, padT = 22, padB = 28;
      const n = saList.length;
      const xOf = (i) => padL + i / (n - 1) * (W - padL - padR);
      const yOfL = (v) => padT + (1 - (v - combinedMin) / (combinedMax - combinedMin)) * (H - padT - padB);
      const latestPar = ((_a2 = saList[saList.length - 1]) == null ? void 0 : _a2.totalPar) || 72;
      const hcpVal = effectiveHcp != null ? effectiveHcp : 0;
      const zeroAnchorL = latestPar + hcpVal;
      const zeroY = yOfL(zeroAnchorL);
      const leftRange = combinedMax - combinedMin;
      const evalScale = (H - padT - padB) / leftRange;
      const yOfR = (v) => zeroY - v * evalScale;
      const gridVals = [combinedMin, Math.round((combinedMin + combinedMax) / 2), combinedMax];
      const gridValsR = gridVals.map((lv) => Math.round((zeroAnchorL - lv) * -1));
      const barW = Math.floor((W - padL - padR) / n * 0.65);
      return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B9\u30B3\u30A2\u30FB\u30D1\u30C3\u30C8\u6570\u30FB\u8A55\u4FA1\u5408\u8A08\u63A8\u79FB\uFF08\u76F4\u8FD15R\uFF09"), /* @__PURE__ */ React.createElement("svg", { width: "100%", viewBox: `0 0 ${W} ${H}`, style: { display: "block" } }, gridVals.map((v, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: padL, y1: yOfL(v).toFixed(1), x2: W - padR, y2: yOfL(v).toFixed(1), stroke: "#f1f5f9", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: "2", y: (yOfL(v) + 4).toFixed(1), textAnchor: "start", fill: "#475569", fontSize: "9" }, v))), evalTotals.map((v, i) => {
        const x = xOf(i);
        const y0 = yOfR(0);
        const y1 = yOfR(-v);
        const barColor = v >= 0 ? "rgba(96,165,250,0.45)" : "rgba(248,113,113,0.45)";
        const textY = Math.max(y0, y1) + 10;
        return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement(
          "rect",
          {
            x: (x - barW / 2).toFixed(1),
            y: Math.min(y0, y1).toFixed(1),
            width: barW,
            height: Math.max(2, Math.abs(y0 - y1)).toFixed(1),
            fill: barColor,
            rx: "2"
          }
        ), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: x.toFixed(1),
            y: textY.toFixed(1),
            textAnchor: "middle",
            fill: v >= 0 ? "#0ea5e9" : "#dc2626",
            fontSize: "8",
            fontWeight: "700"
          },
          v >= 0 ? "+" : "",
          v
        ));
      }), /* @__PURE__ */ React.createElement("line", { x1: padL, y1: zeroY.toFixed(1), x2: W - padR, y2: zeroY.toFixed(1), stroke: "rgba(148,163,184,0.35)", strokeWidth: "1", strokeDasharray: "3 2" }), (() => {
        const pts = scores.map((v, i) => [xOf(i), yOfL(v)]);
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d, fill: "none", stroke: "#94a3b8", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), pts.map(([x, y], i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: "3.5", fill: "#94a3b8" }), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: (y - 6).toFixed(1), textAnchor: "middle", fill: "#94a3b8", fontSize: "9", fontWeight: "700" }, scores[i]))));
      })(), (() => {
        const pts = putts.map((v, i) => [xOf(i), yOfL(v)]);
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d, fill: "none", stroke: "#64748b", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), pts.map(([x, y], i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: "3.5", fill: "#64748b" }), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: (y + 15).toFixed(1), textAnchor: "middle", fill: "#64748b", fontSize: "9", fontWeight: "700" }, putts[i]))));
      })(), saList.map((x, i) => /* @__PURE__ */ React.createElement("text", { key: i, x: xOf(i).toFixed(1), y: H - 4, textAnchor: "middle", fill: "#475569", fontSize: "8" }, x.date.replace(/\d{4}\//, "").replace(/\/(\d)$/, "/0$1"))), avg20Score != null && avg20Score >= combinedMin && avg20Score <= combinedMax && (() => {
        const y = yOfL(avg20Score);
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: padL, y1: y.toFixed(1), x2: W - padR, y2: y.toFixed(1), stroke: "#94a3b8", strokeWidth: "1.2", strokeDasharray: "5 3", opacity: "0.7" }), /* @__PURE__ */ React.createElement("text", { x: (W - padR + 2).toFixed(1), y: (y + 3).toFixed(1), textAnchor: "start", fill: "#94a3b8", fontSize: "8", fontWeight: "700" }, avg20Score));
      })(), avg20Putts != null && avg20Putts >= combinedMin && avg20Putts <= combinedMax && (() => {
        const y = yOfL(avg20Putts);
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1: padL, y1: y.toFixed(1), x2: W - padR, y2: y.toFixed(1), stroke: "#64748b", strokeWidth: "1.2", strokeDasharray: "5 3", opacity: "0.7" }), /* @__PURE__ */ React.createElement("text", { x: (W - padR + 2).toFixed(1), y: (y + 3).toFixed(1), textAnchor: "start", fill: "#64748b", fontSize: "8", fontWeight: "700" }, avg20Putts));
      })()), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" } }, [
        { label: "\u7DCF\u6253\u6570\uFF08\u5DE6\u8EF8\uFF09", color: "#94a3b8", bar: false },
        { label: "\u30D1\u30C3\u30C8\u6570\uFF08\u5DE6\u8EF8\uFF09", color: "#64748b", bar: false },
        { label: "\u8A55\u4FA1\u5408\u8A08 +", color: "#0ea5e9", bar: true },
        { label: "\u8A55\u4FA1\u5408\u8A08 -", color: "#dc2626", bar: true }
      ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: s.bar ? "10px" : "2px", background: s.color, opacity: s.bar ? 0.7 : 1, borderRadius: "2px" } }), /* @__PURE__ */ React.createElement("span", { style: { color: s.color } }, s.label))), (avg20Score != null || avg20Putts != null) && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: "1px", borderTop: "1.5px dashed #94a3b8" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "20R\u5E73\u5747"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "4px" } }, "\u203B\u53F3\u8EF80 = Par", (_b2 = saList[saList.length - 1]) == null ? void 0 : _b2.totalPar, "+HCP", Math.round(hcpVal * 10) / 10, " = ", Math.round(zeroAnchorL)));
    })(), (() => {
      const W = 320, H = 210, padL = 62, padR = 12, padT = 20, padB = 24;
      const n = saList.length;
      const seriesDef = [
        { label: "A \u30C6\u30A3", color: "#0ea5e9", key: "teeScore", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.teeScore) != null ? _a2 : 0;
        }) },
        { label: "B \u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", color: "#16a34a", key: "longScore", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.longScore) != null ? _a2 : 0;
        }) },
        { label: "C \u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", color: "#fbbf24", key: "shortScore", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.shortScore) != null ? _a2 : 0;
        }) },
        { label: "D \u30D1\u30C3\u30C8", color: "#f472b6", key: "puttScore", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.puttScore) != null ? _a2 : 0;
        }) },
        ...saList.some((x) => x.sa.bunkerScore != null) ? [{ label: "E \u30D0\u30F3\u30AB\u30FC", color: "#fb923c", key: "bunkerScore", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.bunkerScore) != null ? _a2 : 0;
        }) }] : []
      ];
      const avg20Vals = avg20ByKey ? seriesDef.map((s) => {
        var _a2;
        return (_a2 = avg20ByKey[s.key]) != null ? _a2 : 0;
      }) : null;
      const avg20Total = avg20Vals ? Math.round(avg20Vals.reduce((a, v) => a + v, 0) * 10) / 10 : null;
      const posMaxArr = saList.map((_, i) => seriesDef.reduce((a, s) => a + Math.max(0, s.vals[i]), 0));
      const negMinArr = saList.map((_, i) => seriesDef.reduce((a, s) => a + Math.min(0, s.vals[i]), 0));
      const avg20PosMax = avg20Vals ? avg20Vals.reduce((a, v) => a + Math.max(0, v), 0) : 0;
      const avg20NegMin = avg20Vals ? avg20Vals.reduce((a, v) => a + Math.min(0, v), 0) : 0;
      const absMax = Math.ceil(Math.max(Math.max(...posMaxArr, avg20PosMax, 1), Math.abs(Math.min(...negMinArr, avg20NegMin, -1))));
      const chartH = H - padT - padB;
      const y0 = padT + chartH * 0.55;
      const scale = chartH * 0.5 / absMax;
      const yOf = (v) => y0 - v * scale;
      const sepX = W - padR - 52;
      const xOf = (i) => padL + (n === 1 ? (sepX - padL) / 2 : i / (n - 1) * (sepX - padL));
      const barW = Math.floor((sepX - padL) / Math.max(n, 1) * 0.65);
      const avgBarX = W - padR - 10;
      const avgBarW = Math.min(barW, 22);
      const step = Math.ceil(absMax / 2 / 5) * 5 || 5;
      const gridLines = [];
      for (let v = step; v <= absMax; v += step) gridLines.push({ v: -v, label: "-" + v });
      gridLines.push({ v: 0, label: "0" });
      for (let v = step; v <= absMax; v += step) gridLines.push({ v, label: "+" + v });
      return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u8A55\u4FA1\u30B9\u30B3\u30A2\u63A8\u79FB\uFF08\u76F4\u8FD15R\uFF09"), /* @__PURE__ */ React.createElement("svg", { width: "100%", viewBox: "0 0 " + W + " " + H, style: { display: "block" } }, gridLines.map((g, i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: padL,
          y1: yOf(g.v).toFixed(1),
          x2: W - padR,
          y2: yOf(g.v).toFixed(1),
          stroke: g.v === 0 ? "rgba(100,116,139,0.5)" : "#f1f5f9",
          strokeWidth: g.v === 0 ? 1.5 : 1,
          strokeDasharray: g.v === 0 ? "none" : "none"
        }
      ), /* @__PURE__ */ React.createElement(
        "text",
        {
          x: "2",
          y: (yOf(g.v) + 4).toFixed(1),
          textAnchor: "start",
          fill: g.v === 0 ? "#94a3b8" : "#475569",
          fontSize: "9"
        },
        g.label
      ))), saList.map((_, i) => {
        const x = xOf(i);
        let posBot = y0, negTop = y0;
        const bars = [];
        seriesDef.forEach((s) => {
          const v = s.vals[i];
          if (v === 0) return;
          if (v > 0) {
            const h = v * scale;
            bars.push({ y: posBot, h, color: s.color });
            posBot += h;
          } else {
            const h = Math.abs(v) * scale;
            bars.push({ y: negTop - h, h, color: s.color });
            negTop -= h;
          }
        });
        return /* @__PURE__ */ React.createElement("g", { key: i }, bars.map((b, bi) => /* @__PURE__ */ React.createElement(
          "rect",
          {
            key: bi,
            x: (x - barW / 2).toFixed(1),
            y: b.y.toFixed(1),
            width: barW,
            height: Math.max(1, b.h).toFixed(1),
            fill: b.color,
            opacity: "0.8",
            rx: "1"
          }
        )), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: H - 6, textAnchor: "middle", fill: "#475569", fontSize: "8" }, saList[i].date.replace(/\d{4}\//, "").replace(/\/(\d)$/, "/0$1")));
      }), (() => {
        const pts = evalTotals.map((v, i) => [xOf(i), yOf(-v)]);
        const d = pts.map((p, i) => (i === 0 ? "M" : "L") + p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d, fill: "none", stroke: "#94a3b8", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), pts.map(([x, y], i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: "3.5", fill: "#94a3b8" }), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: (y - 6).toFixed(1), textAnchor: "middle", fill: "#1e293b", fontSize: "8", fontWeight: "700", stroke: "white", strokeWidth: "2.5", paintOrder: "stroke" }, (evalTotals[i] >= 0 ? "+" : "") + evalTotals[i]))));
      })(), avg20Vals && /* @__PURE__ */ React.createElement(
        "line",
        {
          x1: (sepX + 4).toFixed(1),
          y1: padT,
          x2: (sepX + 4).toFixed(1),
          y2: H - padB,
          stroke: "rgba(255,255,255,0.1)",
          strokeWidth: "1",
          strokeDasharray: "3 2"
        }
      ), avg20Vals && (() => {
        let posBot = y0, negTop = y0;
        const bars = [];
        seriesDef.forEach((s, si) => {
          const v = avg20Vals[si];
          if (v === 0) return;
          if (v > 0) {
            const h = v * scale;
            bars.push({ y: posBot, h, color: s.color });
            posBot += h;
          } else {
            const h = Math.abs(v) * scale;
            bars.push({ y: negTop - h, h, color: s.color });
            negTop -= h;
          }
        });
        const totalY = yOf(-(avg20Total != null ? avg20Total : 0));
        return /* @__PURE__ */ React.createElement("g", null, bars.map((b, bi) => /* @__PURE__ */ React.createElement(
          "rect",
          {
            key: bi,
            x: (avgBarX - avgBarW / 2).toFixed(1),
            y: b.y.toFixed(1),
            width: avgBarW,
            height: Math.max(1, b.h).toFixed(1),
            fill: b.color,
            opacity: "0.4",
            rx: "1",
            stroke: b.color,
            strokeWidth: "0.8"
          }
        )), /* @__PURE__ */ React.createElement("circle", { cx: avgBarX.toFixed(1), cy: totalY.toFixed(1), r: "4", fill: "#f59e0b" }), /* @__PURE__ */ React.createElement(
          "text",
          {
            x: avgBarX.toFixed(1),
            y: (totalY - 7).toFixed(1),
            textAnchor: "middle",
            fill: "#1e293b",
            fontSize: "8",
            fontWeight: "700",
            stroke: "white",
            strokeWidth: "2.5",
            paintOrder: "stroke"
          },
          (avg20Total >= 0 ? "+" : "") + avg20Total
        ), /* @__PURE__ */ React.createElement("text", { x: avgBarX.toFixed(1), y: H - 13, textAnchor: "middle", fill: "#f59e0b", fontSize: "7", fontWeight: "700" }, "20R"), /* @__PURE__ */ React.createElement("text", { x: avgBarX.toFixed(1), y: H - 4, textAnchor: "middle", fill: "#f59e0b", fontSize: "7", fontWeight: "700" }, "\u5E73\u5747"));
      })()), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" } }, seriesDef.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "12px", height: "12px", background: s.color, borderRadius: "2px", opacity: 0.8 } }), /* @__PURE__ */ React.createElement("span", { style: { color: s.color } }, s.label))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: "2px", background: "#94a3b8", borderRadius: "1px" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8" } }, "\u5408\u8A08")), avg20Vals && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#f59e0b" } }, "20R\u5E73\u5747\u5408\u8A08"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "3px" } }, "\u203B\u4E0A\u304C\u30DE\u30A4\u30CA\u30B9\u3001\u4E0B\u304C\u30D7\u30E9\u30B9"));
    })());
  };
  const AnalyticsRadarChart = () => {
    var _a2, _b2, _c2, _d2;
    const completed = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (completed.length === 0) return null;
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const recent5 = completed.slice(0, 5);
    const recent20 = completed.slice(0, 20);
    const buildRadarAvg = (rList) => {
      const scores = { A: 0, B: 0, C: null, D: 0, E: null };
      const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
      rList.forEach((r) => {
        var _a3;
        const sa = calcAnalytics(r, (_a3 = r.hcp) != null ? _a3 : null, teeRatesAna);
        if (!sa) return;
        scores.A += sa.teeScore;
        counts.A++;
        scores.B += sa.longScore;
        counts.B++;
        if (sa.shortScore != null) {
          scores.C = (scores.C || 0) + sa.shortScore;
          counts.C++;
        }
        scores.D += sa.puttScore;
        counts.D++;
        if (sa.bunkerScore != null) {
          scores.E = (scores.E || 0) + sa.bunkerScore;
          counts.E++;
        }
      });
      return {
        A: counts.A ? Math.round(scores.A / counts.A * 100) / 100 : 0,
        B: counts.B ? Math.round(scores.B / counts.B * 100) / 100 : 0,
        C: counts.C ? Math.round(scores.C / counts.C * 100) / 100 : null,
        D: counts.D ? Math.round(scores.D / counts.D * 100) / 100 : 0,
        E: counts.E ? Math.round(scores.E / counts.E * 100) / 100 : null
      };
    };
    const avg5 = buildRadarAvg(recent5);
    const avg20 = buildRadarAvg(recent20);
    const hasBunker = avg5.E != null || avg20.E != null;
    const hasShort = avg5.C != null || avg20.C != null;
    const items = [
      { key: "A", label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", val: avg5.A, avgVal: avg20.A },
      { key: "B", label: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", val: avg5.B, avgVal: avg20.B },
      ...hasShort ? [{ key: "C", label: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", val: (_a2 = avg5.C) != null ? _a2 : 0, avgVal: (_b2 = avg20.C) != null ? _b2 : 0 }] : [],
      { key: "D", label: "\u30D1\u30C3\u30C8", val: avg5.D, avgVal: avg20.D },
      ...hasBunker ? [{ key: "E", label: "\u30D0\u30F3\u30AB\u30FC", val: (_c2 = avg5.E) != null ? _c2 : 0, avgVal: (_d2 = avg20.E) != null ? _d2 : 0 }] : []
    ];
    const n = items.length;
    const cx = 175, cy = 155, R = 108;
    const hcpForGrid = effectiveHcp != null ? effectiveHcp : 99;
    const gridStep = hcpForGrid <= 5 ? 1 : hcpForGrid < 10 ? 2 : hcpForGrid <= 18 ? 3 : 5;
    const MAX = gridStep;
    const MIN = -(gridStep * 3);
    const normalize = (v) => Math.max(0, Math.min(1, (v - MIN) / (MAX - MIN)));
    const angleOf = (i) => Math.PI * 2 * i / n - Math.PI / 2;
    const pointOf = (i, r) => {
      const a = angleOf(i);
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };
    const toPath = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";
    const gridLevels = [0.25, 0.5, 0.75, 1];
    const gridPaths = gridLevels.map(
      (lv) => toPath(items.map((_, i) => pointOf(i, R * lv)))
    );
    const pts5 = items.map((it, i) => pointOf(i, R * normalize(it.val)));
    const pts20 = items.map((it, i) => pointOf(i, R * normalize(it.avgVal)));
    const labelPts = items.map((it, i) => {
      const [x, y] = pointOf(i, R + 22);
      return __spreadProps(__spreadValues({}, it), { x, y });
    });
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" } }, /* @__PURE__ */ React.createElement("svg", { width: "340", height: "320", viewBox: "0 0 350 320", style: { display: "block", margin: "0 auto" } }, gridPaths.map((d, gi) => /* @__PURE__ */ React.createElement("path", { key: gi, d, fill: "none", stroke: "#eef2f7", strokeWidth: "1" })), items.map((_, i) => {
      const [x, y] = pointOf(i, R);
      return /* @__PURE__ */ React.createElement("line", { key: i, x1: cx, y1: cy, x2: x.toFixed(1), y2: y.toFixed(1), stroke: "#eef2f7", strokeWidth: "1" });
    }), (() => {
      const idealPts = items.map((_, i) => pointOf(i, R * 0.75));
      return /* @__PURE__ */ React.createElement("path", { d: toPath(idealPts), fill: "rgba(52,211,153,0.08)", stroke: "#16a34a", strokeWidth: "1.5", strokeDasharray: "3 3" });
    })(), /* @__PURE__ */ React.createElement("path", { d: toPath(pts20), fill: "rgba(14,165,233,0.12)", stroke: "#0ea5e9", strokeWidth: "1.5", strokeDasharray: "4 3" }), /* @__PURE__ */ React.createElement("path", { d: toPath(pts5), fill: "rgba(251,191,36,0.18)", stroke: "#fbbf24", strokeWidth: "2" }), pts5.map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x.toFixed(1), cy: y.toFixed(1), r: "4", fill: "#fbbf24" })), labelPts.map((it, i) => {
      const anchor = it.x < cx - 5 ? "end" : it.x > cx + 5 ? "start" : "middle";
      const lines = it.label.endsWith("\u30B2\u30FC\u30E0") && it.label.length > 3 ? [it.label.slice(0, -3), "\u30B2\u30FC\u30E0"] : [it.label];
      const totalH = lines.length * 13;
      return /* @__PURE__ */ React.createElement("g", { key: i }, lines.map((line, li) => /* @__PURE__ */ React.createElement("text", { key: li, x: it.x.toFixed(1), y: (it.y - 4 + li * 13).toFixed(1), textAnchor: anchor, fill: "#94a3b8", fontSize: "11", fontWeight: "700" }, line)), /* @__PURE__ */ React.createElement("text", { x: it.x.toFixed(1), y: (it.y - 4 + totalH + 2).toFixed(1), textAnchor: anchor, fill: "#fbbf24", fontSize: "10" }, it.val >= 0 ? "+" : "", it.val.toFixed(1)));
    }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: R * 0.75, fill: "none", stroke: "rgba(255,255,255,0.25)", strokeWidth: "1", strokeDasharray: "2 2" })), /* @__PURE__ */ React.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#16a34a", borderTop: "2px dashed #34d399" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700" } }, "\u7406\u60F3\uFF08\xB10\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#fbbf24" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, "\u76F4\u8FD15R\u5E73\u5747"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontSize: "10px" } }, "(", recent5.length, "R)")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#0ea5e9", borderTop: "2px dashed #60a5fa" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700" } }, "\u76F4\u8FD120R\u5E73\u5747"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontSize: "10px" } }, "(", recent20.length, "R)")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "9px", color: "#64748b", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "3px" } }, /* @__PURE__ */ React.createElement("span", null, "\u8981\u7D20"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { minWidth: "44px", textAlign: "right", color: "#d97706" } }, "\u76F4\u8FD15R"), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "44px", textAlign: "right", color: "#0ea5e9" } }, "\u76F4\u8FD120R"))), items.map((it) => {
      const v5disp = parseFloat(it.val.toFixed(1));
      const v20disp = parseFloat(it.avgVal.toFixed(1));
      const diff = Math.round((v5disp - v20disp) * 10) / 10;
      let arrow = null;
      if (!isNaN(diff) && Math.abs(diff) >= 0.05) {
        const improved = diff > 0;
        const ac = improved ? "#16a34a" : "#b91c1c";
        const mag = (Math.round(Math.abs(diff) * 10) / 10).toFixed(1).replace(/\.0$/, "");
        arrow = /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" } }, trendArrow(ac, !improved, 22), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "700", color: ac, marginLeft: "1px" } }, mag));
      } else if (!isNaN(diff)) {
        arrow = /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, fontSize: "11px", color: "#cbd5e1" } }, "\u2014");
      }
      return /* @__PURE__ */ React.createElement("div", { key: it.key, style: { marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "6px", marginRight: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, it.key, " ", it.label), arrow), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: it.val < 0 ? "#dc2626" : "#d97706", fontWeight: "700", minWidth: "44px", textAlign: "right" } }, it.val >= 0 ? "+" : "", it.val.toFixed(1)), /* @__PURE__ */ React.createElement("span", { style: { color: it.avgVal < 0 ? "#64748b" : "#0ea5e9", minWidth: "44px", textAlign: "right" } }, it.avgVal >= 0 ? "+" : "", it.avgVal.toFixed(1)))));
    }))));
  };
  const TREND_ARROW_PATH = "M 12.06 70.82 L 12.49 71.53 L 12.94 72.20 L 13.41 72.86 L 13.89 73.50 L 14.38 74.12 L 14.87 74.73 L 15.38 75.33 L 15.89 75.91 L 16.41 76.47 L 16.94 77.02 L 17.47 77.56 L 18.01 78.09 L 18.56 78.60 L 19.12 79.09 L 19.69 79.57 L 20.27 80.04 L 20.85 80.49 L 21.44 80.93 L 22.04 81.35 L 22.65 81.76 L 23.26 82.15 L 23.89 82.53 L 24.52 82.89 L 25.16 83.23 L 25.81 83.56 L 26.47 83.87 L 27.14 84.17 L 27.81 84.44 L 28.50 84.71 L 29.19 84.95 L 29.89 85.17 L 30.60 85.38 L 31.31 85.57 L 32.03 85.74 L 32.76 85.89 L 33.49 86.03 L 34.24 86.14 L 34.98 86.24 L 35.74 86.32 L 36.50 86.37 L 37.26 86.41 L 38.04 86.43 L 38.81 86.43 L 39.59 86.41 L 40.38 86.37 L 41.17 86.32 L 41.96 86.24 L 42.76 86.14 L 43.56 86.03 L 44.36 85.89 L 45.17 85.74 L 45.98 85.56 L 46.80 85.37 L 47.61 85.16 L 48.43 84.93 L 49.26 84.69 L 50.08 84.42 L 50.91 84.13 L 51.74 83.83 L 52.57 83.51 L 53.41 83.17 L 54.24 82.81 L 55.08 82.43 L 55.92 82.04 L 56.77 81.63 L 57.61 81.20 L 58.46 80.75 L 59.31 80.28 L 60.16 79.80 L 61.02 79.30 L 61.87 78.78 L 62.73 78.24 L 63.59 77.69 L 64.45 77.12 L 65.32 76.53 L 66.19 75.92 L 67.06 75.30 L 67.93 74.66 L 68.81 74.00 L 69.68 73.32 L 70.56 72.63 L 71.44 71.92 L 72.33 71.19 L 73.22 70.44 L 74.10 69.68 L 75.00 68.90 L 75.89 68.10 L 76.79 67.28 L 77.69 66.45 L 89.93 78.25 L 92.06 40.02 L 53.93 43.54 L 66.17 55.34 L 65.46 56.17 L 64.74 56.98 L 64.04 57.78 L 63.33 58.56 L 62.64 59.32 L 61.94 60.06 L 61.25 60.78 L 60.57 61.49 L 59.89 62.18 L 59.21 62.86 L 58.54 63.52 L 57.88 64.16 L 57.21 64.78 L 56.56 65.39 L 55.90 65.98 L 55.25 66.56 L 54.61 67.12 L 53.97 67.66 L 53.34 68.19 L 52.71 68.70 L 52.08 69.19 L 51.46 69.67 L 50.84 70.13 L 50.23 70.58 L 49.62 71.01 L 49.02 71.43 L 48.42 71.83 L 47.83 72.22 L 47.24 72.59 L 46.65 72.94 L 46.07 73.28 L 45.49 73.61 L 44.92 73.92 L 44.35 74.22 L 43.79 74.50 L 43.23 74.77 L 42.67 75.02 L 42.11 75.27 L 41.56 75.49 L 41.02 75.71 L 40.47 75.91 L 39.93 76.09 L 39.39 76.27 L 38.86 76.43 L 38.32 76.58 L 37.79 76.71 L 37.26 76.83 L 36.73 76.94 L 36.20 77.04 L 35.67 77.12 L 35.14 77.19 L 34.62 77.25 L 34.09 77.29 L 33.56 77.32 L 33.04 77.34 L 32.51 77.35 L 31.98 77.34 L 31.45 77.32 L 30.92 77.28 L 30.38 77.23 L 29.85 77.17 L 29.31 77.09 L 28.77 77.00 L 28.23 76.90 L 27.68 76.77 L 27.14 76.64 L 26.59 76.49 L 26.04 76.32 L 25.48 76.14 L 24.93 75.94 L 24.37 75.73 L 23.81 75.50 L 23.25 75.26 L 22.69 74.99 L 22.12 74.72 L 21.55 74.42 L 20.98 74.11 L 20.41 73.79 L 19.83 73.45 L 19.26 73.09 L 18.68 72.71 L 18.10 72.32 L 17.52 71.91 L 16.93 71.49 L 16.35 71.05 L 15.76 70.60 L 15.16 70.13 L 14.56 69.65 L 13.94 69.18 Z";
  const TREND_VB_UP = "9.06 37.02 86.00 52.41";
  const TREND_VB_DN = "9.06 10.57 86.00 52.41";
  const trendArrow = (color, down, size) => /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: down ? TREND_VB_DN : TREND_VB_UP,
      width: size,
      height: Math.round(size * 52.41 / 86),
      style: { verticalAlign: "middle" },
      "aria-hidden": "true"
    },
    /* @__PURE__ */ React.createElement("path", { d: TREND_ARROW_PATH, fill: color, transform: down ? "translate(0,100) scale(1,-1)" : void 0 })
  );
  const renderTrend = (n5, n20, betterLow, unit, mult) => {
    if (n5 == null || n20 == null || isNaN(n5) || isNaN(n20)) return null;
    const m = mult || 1;
    const diff = Math.round((n5 - n20) * 10) / 10;
    if (Math.abs(diff) < 0.05) {
      return /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, fontSize: "12px", color: "#cbd5e1" } }, "\u2014");
    }
    const improved = betterLow ? diff < 0 : diff > 0;
    const c = improved ? "#16a34a" : "#b91c1c";
    const mag = Math.abs(diff) * m;
    const magStr = unit === "Y" ? String(Math.round(mag)) : (Math.round(mag * 10) / 10).toFixed(1).replace(/\.0$/, "");
    return /* @__PURE__ */ React.createElement("span", { style: { flexShrink: 0, display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" } }, trendArrow(c, !improved, 24), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "700", color: c, marginLeft: "1px" } }, magStr, unit));
  };
  const AnalyticsStats = () => {
    const allCompleted = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    const sc20 = allCompleted.slice(0, 20);
    const sc5 = allCompleted.slice(0, 5);
    if (sc20.length === 0) return null;
    const calcStats = (list) => {
      if (!list.length) return null;
      const statsWeight = list.reduce((a, r) => {
        var _a2, _b2;
        return a + (((_b2 = (_a2 = r.holePars) == null ? void 0 : _a2.length) != null ? _b2 : 18) <= 12 ? 0.5 : 1);
      }, 0);
      const avgScore = statsWeight ? Math.round(list.reduce((a, r) => a + Object.values(r.simpleHoleData || {}).reduce((s, h) => s + (h.score || 0), 0), 0) / statsWeight * 10) / 10 : 0;
      let gir = 0, holes = 0, recOk = 0, recTot = 0, pbHoles = 0, pbTot = 0;
      list.forEach((r) => {
        const hd2 = r.simpleHoleData || {};
        const pars = r.holePars || Array(18).fill(4);
        Object.entries(hd2).forEach(([hStr, h]) => {
          const par2 = pars[parseInt(hStr) - 1] || 4;
          holes++;
          pbTot++;
          const isGIR = (h.score || 0) - (h.putts || 0) <= par2 - 2;
          if (isGIR) gir++;
          if (!isGIR) {
            recTot++;
            if ((h.score || 0) <= par2) recOk++;
          }
          if ((h.score || 0) <= par2) pbHoles++;
        });
      });
      const avgGIR = statsWeight ? Math.round(gir / statsWeight * 10) / 10 : 0;
      const girRate = holes ? Math.round(gir / holes * 1e3) / 10 : 0;
      const recoveryRate = recTot ? Math.round(recOk / recTot * 1e3) / 10 : null;
      const parBreakRate = pbTot ? Math.round(pbHoles / pbTot * 1e3) / 10 : null;
      let putts = 0, puttHoles = 0;
      const roundPutts = [];
      list.forEach((r) => {
        const hs = Object.values(r.simpleHoleData || {});
        const rP = hs.reduce((a, h) => a + (h.putts || 0), 0);
        roundPutts.push(rP);
        putts += rP;
        puttHoles += hs.length;
      });
      const avgPuttPerHole = puttHoles ? Math.round(putts / puttHoles * 10) / 10 : null;
      const avgTotalPutts = statsWeight ? Math.round(roundPutts.reduce((a, v) => a + v, 0) / statsWeight * 10) / 10 : 0;
      let ob = 0, pen = 0;
      list.forEach((r) => {
        const hs = Object.values(r.simpleHoleData || {});
        ob += hs.reduce((a, h) => a + (h.ob || 0), 0);
        pen += hs.reduce((a, h) => a + (h.penalty || 0), 0);
      });
      const avgOB = statsWeight ? Math.round(ob / statsWeight * 10) / 10 : 0;
      const avgPenalty = statsWeight ? Math.round(pen / statsWeight * 10) / 10 : 0;
      return { avgScore, avgGIR, girRate, recoveryRate, parBreakRate, avgPuttPerHole, avgTotalPutts, avgOB, avgPenalty };
    };
    const s20 = calcStats(sc20);
    const s5 = calcStats(sc5);
    const hcpVal = effectiveHcp;
    const ddStats5 = calcDriverDistStats(rounds, 5);
    const ddStats20 = calcDriverDistStats(rounds, 20);
    const ddAvg5 = ddStats5.length > 0 ? Math.round(ddStats5.reduce((a, r) => a + r.avg, 0) / ddStats5.length) : null;
    const ddAvg20 = ddStats20.length > 0 ? Math.round(ddStats20.reduce((a, r) => a + r.avg, 0) / ddStats20.length) : null;
    const fmt2 = (v) => v == null ? "\uFF0D" : String(v);
    const fmtPct = (v) => v == null ? "\uFF0D" : v + "%";
    const statRows = [
      { label: "\u5E73\u5747\u30B9\u30B3\u30A2", v5: fmt2(s5 == null ? void 0 : s5.avgScore), v20: fmt2(s20.avgScore), color: "#16a34a", unit: "", n5: s5 == null ? void 0 : s5.avgScore, n20: s20.avgScore, betterLow: true, diffUnit: "\u6253" },
      { label: "\u5E73\u5747\u30D1\u30C3\u30C8\u6570\uFF081H\uFF09", v5: fmt2(s5 == null ? void 0 : s5.avgPuttPerHole), v20: fmt2(s20.avgPuttPerHole), color: "#94a3b8", unit: "\u6253", n5: s5 == null ? void 0 : s5.avgPuttPerHole, n20: s20.avgPuttPerHole, betterLow: true, diffUnit: "\u6253" },
      { label: "\u5E73\u5747\u30C8\u30FC\u30BF\u30EB\u30D1\u30C3\u30C8\u6570\uFF0818H\uFF09", v5: fmt2(s5 == null ? void 0 : s5.avgTotalPutts), v20: fmt2(s20.avgTotalPutts), color: "#64748b", unit: "\u6253", n5: s5 == null ? void 0 : s5.avgTotalPutts, n20: s20.avgTotalPutts, betterLow: true, diffUnit: "\u6253" },
      { label: "\u30D1\u30FC\u30AA\u30F3\u7387", v5: fmtPct(s5 == null ? void 0 : s5.girRate), v20: fmtPct(s20.girRate), color: "#fbbf24", unit: "", n5: s5 == null ? void 0 : s5.girRate, n20: s20.girRate, betterLow: false, diffUnit: "pt" },
      { label: "\u5E73\u5747\u30D1\u30FC\u30AA\u30F3\u6570\uFF0818H\uFF09", v5: fmt2(s5 == null ? void 0 : s5.avgGIR) + " \u56DE", v20: fmt2(s20.avgGIR) + " \u56DE", color: "#a78bfa", unit: "", n5: s5 == null ? void 0 : s5.avgGIR, n20: s20.avgGIR, betterLow: false, diffUnit: "\u56DE" },
      { label: "\u30EA\u30AB\u30D0\u30EA\u30FC\u7387", v5: fmtPct(s5 == null ? void 0 : s5.recoveryRate), v20: fmtPct(s20.recoveryRate), color: "#fb923c", unit: "", n5: s5 == null ? void 0 : s5.recoveryRate, n20: s20.recoveryRate, betterLow: false, diffUnit: "pt" },
      { label: "\u30D1\u30FC\u30D6\u30EC\u30A4\u30AF\u7387", v5: fmtPct(s5 == null ? void 0 : s5.parBreakRate), v20: fmtPct(s20.parBreakRate), color: "#f472b6", unit: "", n5: s5 == null ? void 0 : s5.parBreakRate, n20: s20.parBreakRate, betterLow: false, diffUnit: "pt" },
      { label: "OB\u6570\uFF0818H\uFF09", v5: fmt2(s5 == null ? void 0 : s5.avgOB), v20: fmt2(s20.avgOB), color: "#dc2626", unit: "\u56DE", n5: s5 == null ? void 0 : s5.avgOB, n20: s20.avgOB, betterLow: true, diffUnit: "\u6253", mult: 2 },
      { label: "\u30DA\u30CA\u30EB\u30C6\u30A3\u6570\uFF0818H\uFF09", v5: fmt2(s5 == null ? void 0 : s5.avgPenalty), v20: fmt2(s20.avgPenalty), color: "#b91c1c", unit: "\u56DE", n5: s5 == null ? void 0 : s5.avgPenalty, n20: s20.avgPenalty, betterLow: true, diffUnit: "\u6253" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "Stats"), hcpVal != null && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "500" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "17px", fontWeight: "800", color: "#0ea5e9" } }, hcpVal)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: "0", padding: "6px 0 2px", borderBottom: "1px solid rgba(226,232,240,0.5)" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#f59e0b", fontWeight: "700", minWidth: "56px", textAlign: "right" } }, "\u76F4\u8FD15R"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#0ea5e9", fontWeight: "700", minWidth: "64px", textAlign: "right" } }, "\u76F4\u8FD120R")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "0px" } }, statRows.map((row, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 0",
      borderBottom: i < statRows.length - 1 ? "1px solid #e2e8f0" : "none"
    } }, /* @__PURE__ */ React.createElement("span", { style: { flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "6px", marginRight: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "500", lineHeight: "1.4" } }, row.label), renderTrend(row.n5, row.n20, row.betterLow, row.diffUnit, row.mult)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", fontWeight: "700", color: "#f59e0b", minWidth: "56px", textAlign: "right" } }, row.v5, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "500", marginLeft: "1px", color: "#64748b" } }, row.unit)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", fontWeight: "800", color: row.color, minWidth: "64px", textAlign: "right" } }, row.v20, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "500", marginLeft: "1px" } }, row.unit))))), (ddAvg5 != null || ddAvg20 != null) && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "10px", marginTop: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "500", flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", null, "\u5E73\u5747\u30C9\u30E9\u30A4\u30D3\u30F3\u30B0\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9"), renderTrend(ddAvg5, ddAvg20, false, "Y", 1)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px" } }, "\uFF08\u63A8\u5B9A\uFF0F1W\u3007\u306E\u307F\uFF09")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", fontWeight: "700", color: "#f59e0b", minWidth: "56px", textAlign: "right" } }, ddAvg5 != null ? ddAvg5 : "\uFF0D", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "500", marginLeft: "1px", color: "#64748b" } }, "Y")), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", fontWeight: "800", color: "#16a34a", minWidth: "64px", textAlign: "right" } }, ddAvg20 != null ? ddAvg20 : "\uFF0D", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "500", marginLeft: "2px", color: "#64748b" } }, "Y")))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", paddingTop: "8px", borderTop: "1px solid rgba(226,232,240,0.6)" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: "14px", fontSize: "10px", color: "#94a3b8" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" } }, trendArrow("#16a34a", false, 20), /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700", marginLeft: "2px" } }, "\u6539\u5584")), /* @__PURE__ */ React.createElement("span", { style: { display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" } }, trendArrow("#b91c1c", true, 20), /* @__PURE__ */ React.createElement("span", { style: { color: "#b91c1c", fontWeight: "700", marginLeft: "2px" } }, "\u60AA\u5316")), /* @__PURE__ */ React.createElement("span", { style: { whiteSpace: "nowrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#cbd5e1" } }, "\u2014"), " \u6A2A\u3070\u3044")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "5px", lineHeight: "1.6" } }, "\u203B\u76F4\u8FD15R \u3068 \u76F4\u8FD120R \u306E\u5DEE\u3002OB\u6570\u306F\u300C1OB\uFF1D2\u6253\u300D\u63DB\u7B97\uFF08%\u7CFB\u306F\u30DD\u30A4\u30F3\u30C8\u5DEE\uFF09\u3002")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "8px", lineHeight: "1.6" } }, "\u203B\u30D1\u30FC\u30AA\u30F3\uFF1A\u30B9\u30B3\u30A2\uFF0D\u30D1\u30C3\u30C8\u6570 \u2264 Par\uFF0D2\u306E\u30DB\u30FC\u30EB", /* @__PURE__ */ React.createElement("br", null), "\u203B\u30EA\u30AB\u30D0\u30EA\u30FC\u7387\uFF1A\u30D1\u30FC\u30AA\u30F3\u5931\u6557\u30DB\u30FC\u30EB\u3067Par\u4EE5\u4E0B\u3092\u53D6\u3063\u305F\u5272\u5408", /* @__PURE__ */ React.createElement("br", null), "\u203B\u30D1\u30FC\u30D6\u30EC\u30A4\u30AF\u7387\uFF1A\u30B9\u30B3\u30A2\u304CPar\u4EE5\u4E0B\u306E\u30DB\u30FC\u30EB\u306E\u5272\u5408", /* @__PURE__ */ React.createElement("br", null), "\u203B\u5E73\u5747\u30C9\u30E9\u30A4\u30D3\u30F3\u30B0\u30C7\u30A3\u30B9\u30BF\u30F3\u30B9\uFF1APar4/5\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30671W\u4F7F\u7528\u25CB\u306E\u307F\uFF0F\u30DB\u30FC\u30EB\u8DDD\u96E2\uFF0D\u6B8B\u308A\u8DDD\u96E2"));
  };
  const AnalyticsPuttStats = () => {
    const distStats = {};
    PIN_DIST_OPTIONS.forEach((o) => {
      distStats[o.label] = { total: 0, one: 0, three: 0, putts: 0 };
    });
    rounds.filter((r) => r.isComplete && r.inputMode === "detail" && r.holeData).forEach((r) => {
      Object.values(r.holeData).forEach((hInfo) => {
        const dist = hInfo.pinDist;
        if (!dist || !distStats[dist]) return;
        const puttShot = (hInfo.shots || []).find((s) => s.categoryKey === "putt");
        if (!puttShot) return;
        const putts = puttShot.shotCount;
        distStats[dist].total += 1;
        distStats[dist].putts += putts;
        if (putts === 1) distStats[dist].one += 1;
        if (putts >= 3) distStats[dist].three += 1;
      });
    });
    const rows = PIN_DIST_OPTIONS.map((o) => __spreadValues({ label: o.label }, distStats[o.label])).filter((r) => r.total > 0);
    if (rows.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "280px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u8DDD\u96E2", "\u56DE\u6570", "1\u30D1\u30C3\u30C8\u7387", "3\u30D1\u30C3\u30C8\u7387", "\u5E73\u5747"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
      const onePct = Math.round(r.one / r.total * 100);
      const thrPct = Math.round(r.three / r.total * 100);
      const avg = Math.round(r.putts / r.total * 10) / 10;
      return /* @__PURE__ */ React.createElement("tr", { key: i, style: { borderBottom: "1px solid rgba(255,255,255,0.04)" } }, /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#93c5fd", fontWeight: "700", whiteSpace: "nowrap" } }, r.label), /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#64748b" } }, r.total), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "700",
        color: onePct >= 60 ? "#16a34a" : onePct >= 30 ? "#fbbf24" : "#94a3b8"
      } }, onePct, "%"), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "700",
        color: thrPct === 0 ? "#16a34a" : thrPct <= 10 ? "#fbbf24" : "#dc2626"
      } }, thrPct, "%"), /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#1e293b", fontWeight: "800" } }, avg));
    })))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "8px" } }, "\u203B\u8A73\u7D30\u30E2\u30FC\u30C9\u3067\u8DDD\u96E2\u3092\u8A18\u9332\u3057\u305F\u30DB\u30FC\u30EB\u306E\u307F\u96C6\u8A08"));
  };
  const AnalyticsDistanceStats = () => {
    const allShots = rounds.filter((r) => r.isComplete && r.inputMode === "detail" && r.holeData).flatMap((r) => Object.values(r.holeData).flatMap((h) => h.shots || [])).filter((s) => s.quality !== void 0 && s.categoryKey !== "putt");
    if (allShots.length === 0) return null;
    const distMap = {};
    REMAIN_DIST_OPTIONS.forEach((o) => {
      distMap[o.label] = { total: 0, good: 0, bad: 0 };
    });
    allShots.forEach((s) => {
      const d = s.remainDist;
      if (!d || !distMap[d]) return;
      distMap[d].total += 1;
      if (s.quality === "\u25CB") distMap[d].good += 1;
      if (s.quality === "\xD7") distMap[d].bad += 1;
    });
    const rows = REMAIN_DIST_OPTIONS.map((o) => __spreadValues({ label: o.label }, distMap[o.label])).filter((r) => r.total > 0);
    if (rows.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u6B8B\u308A\u8DDD\u96E2\u5225 \u25CB/\xD7\u7387\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "260px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u8DDD\u96E2", "\u56DE\u6570", "\u25CB\u7387", "\xD7\u7387"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
      const gPct = Math.round(r.good / r.total * 100);
      const bPct = Math.round(r.bad / r.total * 100);
      return /* @__PURE__ */ React.createElement("tr", { key: i, style: { borderBottom: "1px solid rgba(255,255,255,0.04)" } }, /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#fbbf24", fontWeight: "700", whiteSpace: "nowrap" } }, r.label), /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#64748b" } }, r.total), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "800",
        color: gPct >= 60 ? "#16a34a" : gPct >= 30 ? "#fbbf24" : "#94a3b8"
      } }, gPct, "%"), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "800",
        color: bPct === 0 ? "#16a34a" : bPct <= 20 ? "#fbbf24" : "#dc2626"
      } }, bPct, "%"));
    })))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "6px" } }, "\u203B\u30C6\u30A3\u30FB\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u307F\u96C6\u8A08\u3001\u30D1\u30C3\u30C8\u3092\u9664\u304F"));
  };
  const AnalyticsClubStats = () => {
    const allShots = rounds.filter((r) => r.isComplete && r.inputMode === "detail" && r.holeData).flatMap((r) => Object.values(r.holeData).flatMap((h) => h.shots || [])).filter((s) => s.quality !== void 0 && s.categoryKey !== "putt" && s.club);
    if (allShots.length === 0) return null;
    const clubMap = {};
    allShots.forEach((s) => {
      const cid = normalizeClubId(s.club);
      if (!clubMap[cid]) clubMap[cid] = { total: 0, good: 0, bad: 0 };
      clubMap[cid].total += 1;
      if (s.quality === "\u25CB") clubMap[cid].good += 1;
      if (s.quality === "\xD7") clubMap[cid].bad += 1;
    });
    const clubOrder = CLUB_MASTER.map((c) => c.id);
    const rows = Object.entries(clubMap).map(([club, v]) => __spreadValues({ club }, v)).sort((a, b) => clubOrder.indexOf(a.club) - clubOrder.indexOf(b.club));
    if (rows.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30AF\u30E9\u30D6\u5225 \u25CB/\xD7\u7387\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "240px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u30AF\u30E9\u30D6", "\u56DE\u6570", "\u25CB\u7387", "\xD7\u7387"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
      const gPct = Math.round(r.good / r.total * 100);
      const bPct = Math.round(r.bad / r.total * 100);
      return /* @__PURE__ */ React.createElement("tr", { key: i, style: { borderBottom: "1px solid rgba(255,255,255,0.04)" } }, /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#93c5fd", fontWeight: "800" } }, clubLabel(r.club)), /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#64748b" } }, r.total), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "800",
        color: gPct >= 60 ? "#16a34a" : gPct >= 30 ? "#fbbf24" : "#94a3b8"
      } }, gPct, "%"), /* @__PURE__ */ React.createElement("td", { style: {
        padding: "8px 4px",
        textAlign: "center",
        fontWeight: "800",
        color: bPct === 0 ? "#16a34a" : bPct <= 20 ? "#fbbf24" : "#dc2626"
      } }, bPct, "%"));
    })))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "6px" } }, "\u203B\u30C6\u30A3\u30FB\u30A2\u30D7\u30ED\u30FC\u30C1\u306E\u307F\u96C6\u8A08\u3001\u30D1\u30C3\u30C8\u3092\u9664\u304F"));
  };
  const AnalyticsSegmentCharts = () => {
    const seg20 = calcSegmentAnalysis(rounds, 20);
    const seg5 = calcSegmentAnalysis(rounds, 5);
    if (!seg20) return null;
    const show20 = seg20.count >= 20;
    const labels = ["1-3", "4-6", "7-9", "10-12", "13-15", "16-18"];
    const C_BLUE = "#378ADD";
    const C_AMBER = "#EF9F27";
    const metrics = [
      { key: "parDiff", title: "\u5BFE\u30D1\u30FC\u30B9\u30B3\u30A2\uFF08\u533A\u9593\u5408\u8A08\uFF09", unit: "", decimals: 1, allowNeg: true, betterLow: true },
      { key: "gir", title: "\u30D1\u30FC\u30AA\u30F3\u7387", unit: "%", decimals: 0, allowNeg: false, fixed100: true, betterLow: false },
      { key: "rec", title: "\u30EA\u30AB\u30D0\u30EA\u30FC\u7387", unit: "%", decimals: 0, allowNeg: false, fixed100: true, betterLow: false },
      { key: "putt", title: "\u30D1\u30C3\u30C8\u6570\uFF08\u533A\u9593\u5408\u8A08\uFF09", unit: "", decimals: 1, allowNeg: false, betterLow: true },
      { key: "teeBad", title: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\xD7\u7387", unit: "%", decimals: 0, allowNeg: false, fixed100: true, betterLow: true }
    ];
    const ARROW_LIFT = 6;
    const SegTrendArrow = ({ x1, y1, x2, y2, color }) => {
      const ly1 = y1 - ARROW_LIFT, ly2 = y2 - ARROW_LIFT;
      const ang = Math.atan2(ly2 - ly1, x2 - x1);
      const head = 5;
      const spread = 0.5;
      const hx1 = x2 - head * Math.cos(ang - spread);
      const hy1 = ly2 - head * Math.sin(ang - spread);
      const hx2 = x2 - head * Math.cos(ang + spread);
      const hy2 = ly2 - head * Math.sin(ang + spread);
      return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("line", { x1, y1: ly1, x2, y2: ly2, stroke: color, strokeWidth: "1.8", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: `M${x2},${ly2} L${hx1.toFixed(1)},${hy1.toFixed(1)} L${hx2.toFixed(1)},${hy2.toFixed(1)} Z`, fill: color }));
    };
    const SegBar = ({ m }) => {
      const v20 = seg20.segments.map((s) => s[m.key]);
      const v5 = seg5 ? seg5.segments.map((s) => s[m.key]) : null;
      const all = [...show20 ? v20 : [], ...v5 || []];
      let yMin = m.allowNeg ? Math.min(0, ...all) : 0;
      let yMax = m.fixed100 ? 100 : Math.max(...all, 1);
      if (!m.fixed100) yMax = yMax * 1.15;
      if (yMax === yMin) yMax = yMin + 1;
      const W = 340, H = 150, padL = 30, padR = 10, padT = 10, padB = 24;
      const innerW = W - padL - padR, innerH = H - padT - padB;
      const yToPx = (v) => padT + innerH - (v - yMin) / (yMax - yMin) * innerH;
      const groupW = innerW / 6;
      const avg20 = v20.reduce((a, v) => a + v, 0) / v20.length;
      const avg20Px = yToPx(avg20);
      const avg5 = v5 ? v5.reduce((a, v) => a + v, 0) / v5.length : null;
      const avg5Px = avg5 != null ? yToPx(avg5) : null;
      const zeroPx = yMin < 0 && yMax > 0 ? yToPx(0) : null;
      return /* @__PURE__ */ React.createElement("div", { style: { marginTop: "12px", paddingTop: "12px", borderTop: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "700", color: "#1e293b", marginBottom: "4px" } }, m.title), /* @__PURE__ */ React.createElement("svg", { viewBox: `0 0 ${W} ${H}`, style: { width: "100%", height: "auto", display: "block" } }, [0, 0.5, 1].map((t, i) => {
        const val = yMin + (yMax - yMin) * t;
        const y = yToPx(val);
        return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("line", { x1: padL, y1: y, x2: W - padR, y2: y, stroke: "#f1f5f9", strokeWidth: "1" }), /* @__PURE__ */ React.createElement("text", { x: padL - 4, y: y + 3, textAnchor: "end", fontSize: "8", fill: "#94a3b8" }, m.decimals === 1 ? val.toFixed(1) : Math.round(val)));
      }), zeroPx != null && /* @__PURE__ */ React.createElement("line", { x1: padL, y1: zeroPx, x2: W - padR, y2: zeroPx, stroke: "#cbd5e1", strokeWidth: "1" }), labels.map((lb, i) => {
        const gx = padL + groupW * i;
        const barCount = show20 ? 2 : 1;
        const gap = show20 ? groupW * 0.1 : 0;
        const usableW = groupW * 0.6;
        const bw = show20 ? (usableW - gap) / 2 : usableW;
        const startX = gx + groupW * 0.2;
        const base = zeroPx != null ? zeroPx : yToPx(yMin);
        const bars = [];
        let arrowEl = null;
        const x5 = show20 ? startX + bw + gap : startX;
        const x20 = startX;
        if (v5) {
          const y5 = yToPx(v5[i]);
          bars.push(/* @__PURE__ */ React.createElement("rect", { key: "b5", x: show20 ? x5 : startX, y: Math.min(y5, base), width: bw, height: Math.abs(base - y5), fill: C_AMBER, rx: "1.5" }));
        }
        if (show20) {
          const y20 = yToPx(v20[i]);
          bars.push(/* @__PURE__ */ React.createElement("rect", { key: "b20", x: x20, y: Math.min(y20, base), width: bw, height: Math.abs(base - y20), fill: C_BLUE, rx: "1.5" }));
          if (v5) {
            const diff = v5[i] - v20[i];
            if (Math.abs(diff) >= (m.decimals === 0 ? 0.5 : 0.05)) {
              const improved = m.betterLow ? diff < 0 : diff > 0;
              const ac = improved ? "#16a34a" : "#b91c1c";
              const x20c = x20 + bw / 2;
              const x5c = x5 + bw / 2;
              const fromY = yToPx(v20[i]);
              const toY = yToPx(v5[i]);
              arrowEl = /* @__PURE__ */ React.createElement(SegTrendArrow, { x1: x20c, y1: fromY, x2: x5c, y2: toY, color: ac });
            }
          }
        }
        return /* @__PURE__ */ React.createElement("g", { key: i }, bars, arrowEl, /* @__PURE__ */ React.createElement("text", { x: gx + groupW / 2, y: H - 8, textAnchor: "middle", fontSize: "8", fill: "#64748b" }, lb));
      }), show20 ? /* @__PURE__ */ React.createElement("line", { x1: padL, y1: avg20Px, x2: W - padR, y2: avg20Px, stroke: C_BLUE, strokeWidth: "1.3", strokeDasharray: "5 4", opacity: "0.8" }) : avg5Px != null && /* @__PURE__ */ React.createElement("line", { x1: padL, y1: avg5Px, x2: W - padR, y2: avg5Px, stroke: C_AMBER, strokeWidth: "1.3", strokeDasharray: "5 4", opacity: "0.8" })));
    };
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "12px 14px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "4px" } }, "3\u30DB\u30FC\u30EB\u533A\u9593\u5206\u6790"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "10px" } }, "\u533A\u9593\u3054\u3068\u306B\u5F31\u70B9\u3092\u53EF\u8996\u5316\uFF0818H\u30E9\u30A6\u30F3\u30C9\u306E\u307F\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "11px", color: "#64748b" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: "12px", height: "12px", borderRadius: "2px", background: C_AMBER } }), "\u76F4\u8FD1", seg5 ? seg5.count : 0, "R"), show20 && /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: "12px", height: "12px", borderRadius: "2px", background: C_BLUE } }), "\u76F4\u8FD120R"), show20 ? /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: "16px", height: 0, borderTop: `2px dashed ${C_BLUE}` } }), "20R\u533A\u9593\u5E73\u5747") : /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { width: "16px", height: 0, borderTop: `2px dashed ${C_AMBER}` } }), "\u533A\u9593\u5E73\u5747")), show20 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "10px", color: "#94a3b8", marginTop: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10" }, /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "5", x2: "15", y2: "5", stroke: "#16a34a", strokeWidth: "1.8", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M18,5 L13,2.5 L13,7.5 Z", fill: "#16a34a" })), /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700" } }, "\u6539\u5584")), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ React.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10" }, /* @__PURE__ */ React.createElement("line", { x1: "2", y1: "5", x2: "15", y2: "5", stroke: "#b91c1c", strokeWidth: "1.8", strokeLinecap: "round" }), /* @__PURE__ */ React.createElement("path", { d: "M18,5 L13,2.5 L13,7.5 Z", fill: "#b91c1c" })), /* @__PURE__ */ React.createElement("span", { style: { color: "#b91c1c", fontWeight: "700" } }, "\u60AA\u5316")), /* @__PURE__ */ React.createElement("span", null, "\u77E2\u5370\u306F 20R \u2192 \u76F4\u8FD15R \u306E\u5909\u5316")), metrics.map((m) => /* @__PURE__ */ React.createElement(SegBar, { key: m.key, m }))));
  };
  return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("div", { style: S.header }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "7px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setView("home"), style: { display: "inline-block", lineHeight: 0, verticalAlign: "middle", background: "none", border: "none", padding: 0, cursor: "pointer", borderRadius: "6px", outline: "none" }, title: "\u30DB\u30FC\u30E0" }, /* @__PURE__ */ React.createElement("img", { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDW+PPxV1vWvEt7oWiahPY6LZytAfs7lGumU4ZmYc7cggL0wMnOePJftV5nm7uP+/rf41Z1Rf8AiZ3f/XeT/wBCNV9lfv8Al+CoYPDxpUopJL7/ADfmfleLxtWvVlObD7Vef8/dx/39b/GgXV5/z93H/f1v8aNntRtrutHscvtX3D7Vef8AP1cf9/W/xpPtV5/z93H/AH9b/Gl2cUbaLR7D9q+4hurz/n7uP+/rf41638Bfitrei+JbLQNc1Ca+0a8kWBTcOXa1djhWVjztzgEHjnIxjnyQpVjS1P8AaloRwfPj/wDQhXFmGBoY3DypVYppr7vNHVg8bVoVYzgyxqa/8TK6/wCu7/8AoRqttrt5/Bd3ceHrzxIZZmMtzOlpa29lLO0vluN5dkG2IDPG7rg8V1nw08I+GNJ8d21r4puI9QlWwWd4JbYraxzSKjxJ5hOJCULEDAGVOM4rgrZzh8PRlK7k430SfTf/ACvtfTcmll1etVUdlK2rffb/AIbfrseaeHPC3iHxGJW0PSLq/WEgSNEo2qT0BJIGT2HerR8G6pF4fOt3txpmnwEzLHFd3qRTyvE22REiPzFgeMepHrXqfiLxF4K8Pa9rUEWkWM0EyWt2liqssT3MM+RjZ9xijORn5cqMg5wef1Xx3olz4d1TRTd+IZhdXt7crMltbJ5y3GG2yb9xXDZz5eMj8MedRzjG4tKpRpWg2t072tr177aL87d9TLsJhrwq1LyV+vXp+H9d/LGjccGNxyRyp6jqKsXWnXdpZ2V5cQ7IL6NpLZtwPmKrlGOOo+YEc+lemxfEyweWAyW+uWjQWiWq3dtcRtcEI8bmQ7gBvlCFJD3UJ1wQZG8VeB9cSBtUsksUtJI5vsr2hkSRVN1K8EbJ91WlmQZOAQo6YrslmeLhZyoO3W2r+VvO343tozljgsLK6jWV+l9DyXZU+mL/AMTK0/67x/8AoQr1fU9A0DU9Bklsn0eyhtdOto5Lq3T7SWSONZriZUX51fzZUixnJBOcAccfq3gzXfD2rI95ZSyWUV8sC3scZ8pyGX15U8jg45yOoNb0M3o4hOL92XZ/1a+u26Mq2ArUGpbruv6/HY2fC3iafwtrF7Oo1O4C3Jmgt4dTkt4DKrHmVFB8wdMjjIGO9Yesa1r2r2SWOo6pdT2UchkjtS58qMkk/KvoMkAdhwMVqX9hm+uDj/lq/wD6EahGn5/hrCnSw6n7blXM7a+nbt8jxqmY4jk9lze6r/j37nNi0x0XFH2U+ldIbA/3aT7Af7tdn1lHJ7WRzn2Y+lBtvauj+wexpDYH+7T+soPayMnS5rjSTcapZ3F1aXVvEDHLbSmNwWdU6jthjxWtp/iy+1W0/s+SYTmWW2hlmbO8RRSFxGR0OZG8xm6sw5qe208Na3qugYGEcEekiEfypmnaeI7232IFHnISAMfxCvnZQr1swqVHKLpqys1rdJO6d1bpo7ryPpqOZ4KllUaPs5/WG21JStHldlZxad3o9VyvVau1i9f6/pi31wqpISsrg5wP4jUH9u2hPyxD8Wqf9oP4ZeJfDnia+8QaDp1zqGg3srXB+yoXe0djllZRztzkhgMYODjHPjg1PUM4NrdDHX903+FfiON4k4k53FVuVeUY/qm/xPankmDozanTv6t/5nrv9s2+OFjpP7ag54jBryQ6tf8A/Pvc/wDfpv8ACmnVNQ5/0e6P/bJv8K8qWccQz3xU/wAvyRSwGCX/AC6R602twjtGaY2vwj/lnH+teTnU9QwP9Huv+/Tf4U06pfkf8e10P+2Lf4VcM54hhtipfg/zQPL8E/8Al0j1G48bafYi5ins7h28gMPKjZg3zqMAgYz3x6A1b03xTpb3lqJILhC8qAcA4yw+leQnUtRI2i2u+fSJv8K9h/Z4+F3ifxJ4osfEHiDTbnTtAspVuB9qjKPeOpyqqp525AJYjGBgZzx62B4hz+M7Kre71uo+S6Jdu4LJsJiHGEadreb7+p//2Q==", style: { width: "28px", height: "28px", borderRadius: "6px", display: "block" }, alt: "icon" })), detailUnlocked ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "800", color: "#16a34a", background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.30)", borderRadius: "20px", padding: "2px 7px" } }, "PRO") : /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setUnlockInput("");
    setUnlockError("");
    setShowDetailPaywall(true);
  }, style: { fontSize: "9px", fontWeight: "800", color: "#0ea5e9", background: "rgba(14,165,233,0.10)", border: "1px solid rgba(14,165,233,0.30)", borderRadius: "20px", padding: "2px 7px", cursor: "pointer" } }, "\u7121\u6599\u7248")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px" } }, currentRound && /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "round"), onClick: () => setView("round") }, "\u8A18\u9332\u4E2D"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "analytics"), onClick: () => setView("analytics") }, "\u5206\u6790"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "clubs"), onClick: () => setView("clubs") }, "\u30AF\u30E9\u30D6"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "manual"), onClick: () => setView("manual") }, "\u4F7F\u3044\u65B9"), (() => {
    const hcpUnset = effectiveHcp === null;
    return /* @__PURE__ */ React.createElement("div", { style: { position: "relative", display: "inline-flex" } }, /* @__PURE__ */ React.createElement("style", null, `@keyframes hcpPulse{0%{box-shadow:0 0 0 0 rgba(14,165,233,0.45)}70%{box-shadow:0 0 0 7px rgba(14,165,233,0)}100%{box-shadow:0 0 0 0 rgba(14,165,233,0)}}.hcp-pulse{animation:hcpPulse 2s ease-out infinite}@keyframes hcpHintIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.hcp-hint{animation:hcpHintIn .3s ease both}`), /* @__PURE__ */ React.createElement(
      "button",
      {
        className: hcpUnset ? "hcp-pulse" : void 0,
        style: __spreadValues(__spreadProps(__spreadValues({}, S.navBtn(view === "profile")), { padding: "5px 9px" }), hcpUnset ? { background: "rgba(14,165,233,0.12)", color: "#0ea5e9", borderRadius: "20px" } : {}),
        onClick: () => {
          setShowHcpHint(false);
          setView("profile");
          setProfileEdit(__spreadValues({}, profile));
        }
      },
      "\u{1F464}"
    ), hcpUnset && /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: "-1px", right: "-1px", width: "8px", height: "8px", borderRadius: "50%", background: "#dc2626", border: "1.5px solid #ffffff", pointerEvents: "none" } }), hcpUnset && showHcpHint && /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "hcp-hint",
        onClick: () => {
          setShowHcpHint(false);
          setView("profile");
          setProfileEdit(__spreadValues({}, profile));
        },
        style: { position: "absolute", top: "36px", right: 0, background: "#0ea5e9", color: "#ffffff", fontSize: "11px", fontWeight: "600", padding: "7px 11px", borderRadius: "8px", whiteSpace: "nowrap", boxShadow: "0 3px 10px rgba(14,165,233,0.35)", cursor: "pointer", zIndex: 50 }
      },
      /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: "-5px", right: "14px", width: "10px", height: "10px", background: "#0ea5e9", transform: "rotate(45deg)" } }),
      "\u30CF\u30F3\u30C7\u30A3\u3092\u8A2D\u5B9A\u3057\u3066\u5206\u6790\u3092\u5145\u5B9F \u203A"
    ));
  })())), /* @__PURE__ */ React.createElement("div", { style: S.page }, view === "home" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "3px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", margin: 0, background: "linear-gradient(90deg,#f59e0b,#ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution\uFF08\u30B9\u30B3\u30EC\u30DC\uFF09"), detailUnlocked ? /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#16a34a", background: "rgba(22,163,74,0.10)", border: "1px solid rgba(22,163,74,0.30)", borderRadius: "20px", padding: "2px 9px" } }, "PRO \u89E3\u9664\u6E08\u307F") : /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#0ea5e9", background: "rgba(14,165,233,0.10)", border: "1px solid rgba(14,165,233,0.30)", borderRadius: "20px", padding: "2px 9px" } }, "\u7121\u6599\u7248")), REXY_IMAGES.basic ? /* @__PURE__ */ React.createElement("div", { style: { marginTop: "8px" } }, /* @__PURE__ */ React.createElement(RexyBubble, { costume: "basic", size: 64 }, profile.nickname ? /* @__PURE__ */ React.createElement(React.Fragment, null, "\u3053\u3093\u306B\u3061\u306F\u3001", profile.nickname, "\u3055\u3093\uFF01", /* @__PURE__ */ React.createElement("br", null)) : null, "\u4ECA\u65E5\u3082\u4E00\u7DD2\u306B\u697D\u3057\u3082\u3046\uFF01")) : profile.nickname ? /* @__PURE__ */ React.createElement("p", { style: { color: "#16a34a", fontSize: "13px", fontWeight: "600", marginBottom: "3px" } }, "\u3053\u3093\u306B\u3061\u306F\u3001", profile.nickname, "\u3055\u3093\uFF01") : null), handicap ? /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(96,165,250,0.25)", marginBottom: "18px", background: "#eff6ff" }) }, (() => {
    var _a2;
    const scores = (handicap.allDiffs || []).map((d) => d.score).filter(Boolean).sort((a, b) => a - b);
    const allScores = rounds.filter((r) => r.isComplete).map((r) => Object.values(r.simpleHoleData || {}).reduce((a, h) => a + (h.score || 0), 0)).filter((v) => v > 0);
    const bestFromData = allScores.length > 0 ? Math.min(...allScores) : null;
    const bestFromProfile = (_a2 = profile.bestScore) != null ? _a2 : null;
    const best = bestFromData != null && bestFromProfile != null ? Math.min(bestFromData, bestFromProfile) : bestFromData != null ? bestFromData : bestFromProfile;
    const avg = scores.length > 0 ? Math.round(scores.reduce((a, v) => a + v, 0) / scores.length * 10) / 10 : null;
    const median = scores.length > 0 ? scores.length % 2 === 0 ? Math.round((scores[scores.length / 2 - 1] + scores[scores.length / 2]) / 2 * 10) / 10 : scores[Math.floor(scores.length / 2)] : null;
    const items = [
      { label: "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09", value: (handicap.hcp >= 0 ? "+" : "") + handicap.hcp, color: "#0ea5e9" },
      { label: "\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2", value: best, color: "#16a34a" },
      { label: "\u5E73\u5747", value: avg, color: "#64748b" },
      { label: "\u4E2D\u592E\u5024", value: median, color: "#94a3b8" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0px" } }, items.map(({ label, value, color }, i) => /* @__PURE__ */ React.createElement("div", { key: label, style: {
      textAlign: "center",
      padding: "8px 4px",
      borderRight: i % 2 === 0 ? "1px solid #e2e8f0" : "none",
      borderBottom: i < 2 ? "1px solid #e2e8f0" : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", fontWeight: "800", color, lineHeight: 1 } }, value != null ? value : "\uFF0D"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#94a3b8", marginTop: "4px", whiteSpace: "nowrap" } }, label))));
  })(), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "8px", fontSize: "9px", color: "#94a3b8", fontStyle: "italic", lineHeight: 1.7 } }, "\u203B\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF1A\u5DEE\u5206\u5E73\u5747\u65B9\u5F0F\u306B\u3088\u308B\u53C2\u8003\u5024\u3002\u516C\u5F0F\u3068\u306F\u7570\u306A\u308A\u307E\u3059", /* @__PURE__ */ React.createElement("br", null), "\u203B\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\uFF1A\u5168\u8A18\u9332\u30E9\u30A6\u30F3\u30C9\u3068\u30DE\u30A4\u30DA\u30FC\u30B8\u81EA\u5DF1\u7533\u544A\u306E\u3046\u3061\u5C0F\u3055\u3044\u65B9", /* @__PURE__ */ React.createElement("br", null), "\u203B\u5E73\u5747\u30FB\u4E2D\u592E\u5024\uFF1A\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9\u304B\u3089\u7B97\u51FA")) : rounds.filter((r) => r.isComplete).length > 0 ? /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, S.card({ marginBottom: "18px", border: "1px solid rgba(96,165,250,0.15)" })), { fontSize: "12px", color: "#475569", textAlign: "center", padding: "12px" }) }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u7B97\u51FA\u306B\u306F18H\u5B8C\u4E86\u30E9\u30A6\u30F3\u30C9\u304C3\u4EF6\u4EE5\u4E0A\u5FC5\u8981\u3067\u3059\uFF08\u73FE\u5728 ", rounds.filter((r) => r.isComplete).length, "\u4EF6\uFF09") : null, !showNewRound ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "14px" }), onClick: () => {
    setShowNewRound(true);
    setSetupStep(0);
  } }, "\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB"), false, false) : RoundSetupForm(), rounds.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: S.card({ textAlign: "center", padding: "38px 20px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "42px", marginBottom: "10px" } }), /* @__PURE__ */ React.createElement("p", { style: { fontWeight: "700", color: "#94a3b8" } }, "\u307E\u3060\u30E9\u30A6\u30F3\u30C9\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", marginTop: "3px", color: "#1e293b" } }, "\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u3057\u3066\u8A18\u9332\u3057\u3088\u3046\uFF01")) : (() => {
    const teeRates = calcHistoricalTeeRates(rounds);
    return [...rounds].sort((a, b) => {
      return dateToNum(b.date) - dateToNum(a.date);
    }).map((r) => /* @__PURE__ */ React.createElement(RoundCardErrorBoundary, { key: r.id }, /* @__PURE__ */ React.createElement(RoundCard, { r, teeRates })));
  })()), view === "round" && currentRound && inputMode === "simple" && (() => {
    var _a2, _b2;
    const shd = simpleHoleData[currentHole] || {};
    const setShd = (patch) => setSimpleHoleData((prev) => __spreadProps(__spreadValues({}, prev), {
      [currentHole]: __spreadValues(__spreadValues({}, prev[currentHole] || {}), patch)
    }));
    const moveToHole = (nextHole) => {
      setSimpleHoleData((prev) => {
        const h = prev[currentHole] || {};
        const needsSave = h.score == null || h.putts === void 0;
        if (!needsSave) return prev;
        return __spreadProps(__spreadValues({}, prev), { [currentHole]: __spreadProps(__spreadValues({}, h), {
          score: h.score == null ? par : h.score,
          putts: h.putts === void 0 ? 0 : h.putts
        }) });
      });
      setCurrentHole(nextHole);
    };
    const simpleTotalScore = Object.values(simpleHoleData).reduce((a, h) => a + (h.score || 0), 0);
    const simpleTotalPar = holePars.slice(0, Math.max(...Object.keys(simpleHoleData).map(Number), 0)).reduce((a, p) => a + p, 0);
    const simpleRecKeys = Object.keys(simpleHoleData).filter((k) => {
      var _a3;
      return ((_a3 = simpleHoleData[k]) == null ? void 0 : _a3.score) != null;
    });
    const simpleRecCount = simpleRecKeys.length;
    const simpleRecPar = simpleRecKeys.reduce((a, k) => a + (holePars[+k - 1] || 4), 0);
    const simpleRecDiff = simpleTotalScore - simpleRecPar;
    const simpleTotalPutts = Object.values(simpleHoleData).reduce((a, h) => a + (h.putts || 0), 0);
    const EvalBtn = ({ val, current, onChange, labels }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, labels.map((l) => /* @__PURE__ */ React.createElement("button", { key: l.v, onClick: () => onChange(current === l.v ? null : l.v), style: {
      width: "36px",
      height: "36px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "800",
      fontSize: "14px",
      border: current === l.v ? `2px solid ${l.color}` : "1px solid rgba(255,255,255,0.1)",
      background: current === l.v ? `${l.color}25` : "rgba(255,255,255,0.04)",
      color: current === l.v ? l.color : "#475569"
    } }, l.label)));
    const OX = [
      { v: "good", label: "\u25CB", color: "#34d399" },
      { v: "fair", label: "\u25B3", color: "#fbbf24" },
      { v: "bad", label: "\xD7", color: "#f87171" }
    ];
    const OXN = [...OX, { v: "none", label: "\u7121", color: "#64748b" }];
    const NumInput = ({ val, onChange, min = 0, max = 10 }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "3px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.max(min, (val || 0) - 1)), style: { boxSizing: "border-box", width: "32px", height: "32px", borderRadius: "8px", border: "1.5px solid #cbd5e1", background: "#f1f5f9", color: "#0f172a", cursor: "pointer", fontSize: "20px", fontWeight: "800", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 2px rgba(15,23,42,0.10)" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "26px", textAlign: "center", fontWeight: "800", fontSize: "20px", color: "#1e293b" } }, val || 0), /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.min(max, (val || 0) + 1)), style: { boxSizing: "border-box", width: "32px", height: "32px", borderRadius: "8px", border: "1.5px solid #cbd5e1", background: "#f1f5f9", color: "#0f172a", cursor: "pointer", fontSize: "20px", fontWeight: "800", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 2px rgba(15,23,42,0.10)" } }, "\uFF0B"));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, (currentRound.course || "").replace(/（[^）]*）\s*$/, "") || currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "11px", marginTop: "1px" } }, simpleRecCount, "\u30DB\u30FC\u30EB\u8A18\u9332\u6E08\u307F\u3000\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, simpleTotalScore), "\u6253", simpleRecCount > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: scoreDiffSymbol(simpleRecDiff).color } }, "\uFF08", simpleRecDiff >= 0 ? "+" : "", simpleRecDiff, "\uFF09"))), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: () => {
      setSimpleHoleData((prev) => {
        const h = prev[currentHole] || {};
        const needsSave = h.score == null || h.putts === void 0;
        if (!needsSave) return prev;
        return __spreadProps(__spreadValues({}, prev), { [currentHole]: __spreadProps(__spreadValues({}, h), {
          score: h.score == null ? par : h.score,
          putts: h.putts === void 0 ? 0 : h.putts
        }) });
      });
      setTimeout(() => {
        setSimpleHoleData((prev) => {
          const allHoles = [...Array.from({ length: 9 }, (_, i) => i + 1), ...Array.from({ length: 9 }, (_, i) => i + 10)];
          const incomplete = allHoles.filter((h) => {
            const hd2 = prev[h];
            if (!hd2 || hd2.score == null) return true;
            if (!hd2.teeEval) return true;
            if (!hd2.approachEval) return true;
            return false;
          });
          if (incomplete.length > 0) {
            setFinishConfirm({ type: "incomplete", incompleteHoles: incomplete });
          } else {
            setFinishConfirm({ type: "ok" });
          }
          return prev;
        });
      }, 50);
    } }, "\u7D42\u4E86")), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30DB\u30FC\u30EB\u9078\u629E"), (() => {
      const frontLabel = (currentRound == null ? void 0 : currentRound.frontCourse) || "\u524D\u534A";
      const backLabel = (currentRound == null ? void 0 : currentRound.backCourse) || "\u5F8C\u534A";
      const frontNums = (currentRound == null ? void 0 : currentRound.frontHoleNums) || [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const backNums = (currentRound == null ? void 0 : currentRound.backHoleNums) || [10, 11, 12, 13, 14, 15, 16, 17, 18];
      return [
        { label: frontLabel, keys: [1, 2, 3, 4, 5, 6, 7, 8, 9], nums: frontNums },
        { label: backLabel, keys: [10, 11, 12, 13, 14, 15, 16, 17, 18], nums: backNums }
      ].map((row, ri) => {
        const halfDiff = row.keys.reduce((a, h) => {
          const hd2 = simpleHoleData[h];
          if ((hd2 == null ? void 0 : hd2.score) == null) return a;
          return a + (hd2.score - (holePars[h - 1] || 4));
        }, 0);
        const halfDoneCount = row.keys.filter((h) => {
          var _a3;
          return ((_a3 = simpleHoleData[h]) == null ? void 0 : _a3.score) != null;
        }).length;
        return /* @__PURE__ */ React.createElement("div", { key: ri, style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#475569" } }, row.label), halfDoneCount > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: "900", color: halfDiff < 0 ? "#ef4444" : halfDiff === 0 ? "#16a34a" : "#f97316" } }, halfDiff > 0 ? "+" : "", halfDiff)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, row.keys.map((h, i) => {
          var _a3;
          const hh = simpleHoleData[h];
          const active = currentHole === h;
          const done = (hh == null ? void 0 : hh.score) != null;
          const diff = done ? hh.score - (holePars[h - 1] || 4) : null;
          const { sym, color: symColor } = diff !== null ? scoreDiffSymbol(diff) : { sym: "", color: "#94a3b8" };
          const dispNum = (_a3 = row.nums[i]) != null ? _a3 : h;
          return /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => setCurrentHole(h), style: {
            width: "33px",
            height: done ? "44px" : "33px",
            borderRadius: "7px",
            cursor: "pointer",
            border: active ? "2px solid #34d399" : done ? `1px solid ${symColor}55` : "1px solid #e2e8f0",
            background: active ? "rgba(52,211,153,0.18)" : done ? `${symColor}11` : "#f8fafc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1px",
            padding: "2px 0"
          } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "11px", color: active ? "#16a34a" : done ? symColor : "#334155", lineHeight: 1 } }, dispNum), done && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: symColor, lineHeight: 1 } }, sym));
        })));
      });
    })()), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.15)" }) }, (() => {
      var _a3, _b3;
      const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
      const allHoles = venue ? getRoundHoles(currentRound) : [];
      const hInfo = allHoles[currentHole - 1] || null;
      const yard = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
      const teeLabel = ((_a3 = venue == null ? void 0 : venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _a3.label) || "";
      const greenLabel = ((_b3 = venue == null ? void 0 : venue.greens.find((g) => g.id === currentRound.green)) == null ? void 0 : _b3.label) || "";
      return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "15px" } }, getDisplayHoleNum(currentHole), "\u756A"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => setPar(currentHole, p), style: {
        padding: "3px 11px",
        borderRadius: "7px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "13px",
        border: par === p ? "1.5px solid #16a34a" : "1px solid #e2e8f0",
        background: par === p ? "rgba(22,163,74,0.10)" : "#f8fafc",
        color: par === p ? "#0ea5e9" : "#94a3b8"
      } }, "Par", p))), hInfo && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontWeight: "500", fontSize: "10px" } }, "HC", hInfo.hdcp)), yard && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "5px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, [greenLabel, teeLabel].filter(Boolean).join("\u3000"), " ", yard, "y")));
    })(), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09"), /* @__PURE__ */ React.createElement(NumInput, { val: (_a2 = shd.score) != null ? _a2 : par, onChange: (v) => {
      var _a3;
      const maxPutts = Math.max(0, v - 1);
      const currentPutts = (_a3 = shd.putts) != null ? _a3 : 0;
      setShd(__spreadValues({ score: v }, currentPutts > maxPutts ? { putts: maxPutts } : {}));
    }, min: 1, max: 20 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30D1\u30C3\u30C8\u6570"), /* @__PURE__ */ React.createElement(NumInput, { val: shd.putts, onChange: (v) => setShd({ putts: v }), min: 0, max: Math.max(0, ((_b2 = shd.score) != null ? _b2 : par) - 1) }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" } }, [
      { key: "ob", label: "OB" },
      { key: "penalty", label: "\u30DA\u30CA\u30EB\u30C6\u30A3" },
      { key: "bunker", label: "\u30D0\u30F3\u30AB\u30FC" }
    ].map(({ key, label }) => /* @__PURE__ */ React.createElement("div", { key }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, label), /* @__PURE__ */ React.createElement(NumInput, { val: shd[key], onChange: (v) => setShd({ [key]: v }), min: 0, max: 5 })))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "12px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "600", width: "104px", whiteSpace: "nowrap", color: shd.teeEval ? "#94a3b8" : "#dc2626" } }, "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px" } }, "*")), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.teeEval, current: shd.teeEval, onChange: (v) => setShd({ teeEval: v }), labels: OX })), par >= 4 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "104px", whiteSpace: "nowrap" } }, "\u30BB\u30AB\u30F3\u30C9\u30B7\u30E7\u30C3\u30C8"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.secondEval, current: shd.secondEval, onChange: (v) => setShd({ secondEval: v }), labels: OX })), par >= 5 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "104px", whiteSpace: "nowrap" } }, "\u30B5\u30FC\u30C9\u30B7\u30E7\u30C3\u30C8"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.thirdEval, current: shd.thirdEval, onChange: (v) => setShd({ thirdEval: v }), labels: OX })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "600", width: "104px", whiteSpace: "nowrap", color: shd.approachEval ? "#94a3b8" : "#dc2626" } }, "\u30A2\u30D7\u30ED\u30FC\u30C1 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px" } }, "*")), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.approachEval, current: shd.approachEval, onChange: (v) => setShd({ approachEval: v }), labels: OXN })))), /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: "480px", boxSizing: "border-box", background: "#ffffff", borderTop: "1px solid #e2e8f0", padding: "8px 14px calc(8px + env(safe-area-inset-bottom))", boxShadow: "0 -2px 10px rgba(0,0,0,0.08)", zIndex: 90 } }, (() => {
      const firstHole = 1;
      const lastHole = 18;
      const _frontLastHole = 9;
      const _backFirstHole = 10;
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, currentHole !== firstHole && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { flex: 1 }), onClick: () => {
        if (currentHole === _backFirstHole) {
          setCurrentHole(_frontLastHole);
        } else {
          setCurrentHole(currentHole - 1);
        }
      } }, "\u2039 \u524D\u306E\u30DB\u30FC\u30EB"), currentHole !== lastHole ? /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { flex: 1 }), onClick: () => {
        var _a3;
        const nextHole = currentHole === _frontLastHole ? _backFirstHole : currentHole + 1;
        if (!shd.teeEval || !shd.approachEval) {
          setSkipConfirm({ nextHole });
          return;
        }
        const sc = (_a3 = shd.score) != null ? _a3 : par;
        scoreToast(sc, par);
        moveToHole(nextHole);
      } }, "\u6B21\u306E\u30DB\u30FC\u30EB \u203A") : /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("danger")), { flex: 1 }), onClick: () => {
        setSimpleHoleData((prev) => {
          const h = prev[currentHole] || {};
          const needsSave = h.score == null || h.putts === void 0;
          if (!needsSave) return prev;
          return __spreadProps(__spreadValues({}, prev), { [currentHole]: __spreadProps(__spreadValues({}, h), {
            score: h.score == null ? par : h.score,
            putts: h.putts === void 0 ? 0 : h.putts
          }) });
        });
        setTimeout(() => {
          setSimpleHoleData((prev) => {
            const allHoles = [...Array.from({ length: 9 }, (_, i) => i + 1), ...Array.from({ length: 9 }, (_, i) => i + 10)];
            const incomplete = allHoles.filter((h) => {
              const hd2 = prev[h];
              if (!hd2 || hd2.score == null) return true;
              if (!hd2.teeEval) return true;
              if (!hd2.approachEval) return true;
              return false;
            });
            if (incomplete.length > 0) {
              setFinishConfirm({ type: "incomplete", incompleteHoles: incomplete });
            } else {
              setFinishConfirm({ type: "ok" });
            }
            return prev;
          });
        }, 50);
      } }, "\u7D42\u4E86"));
    })())), /* @__PURE__ */ React.createElement("div", { style: { height: "92px" }, "aria-hidden": "true" }), skipConfirm && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(251,191,36,0.4)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "28px", marginBottom: "10px" } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#1e293b", marginBottom: "6px" } }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1\u304C\u672A\u5165\u529B\u3067\u3059"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#64748b", lineHeight: 1.6, marginBottom: "18px" } }, "\u3053\u306E\u30DB\u30FC\u30EB\u306E\u30C6\u30A3\uFF0F\u30A2\u30D7\u30ED\u30FC\u30C1\u8A55\u4FA1\u304C\u672A\u5165\u529B\u3067\u3059\u3002\u5165\u529B\u305B\u305A\u306B\u6B21\u306E\u30DB\u30FC\u30EB\u3078\u9032\u307F\u307E\u3059\u304B\uFF1F"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setSkipConfirm(null),
        style: { flex: 1, padding: "11px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#f59e0b,#ea580c)", color: "#ffffff", fontWeight: "800", fontSize: "13px", cursor: "pointer", boxShadow: "0 3px 10px rgba(245,158,11,0.30)" }
      },
      "OK"
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          var _a3;
          const nh = skipConfirm.nextHole;
          setSkipConfirm(null);
          const sc = (_a3 = shd.score) != null ? _a3 : par;
          scoreToast(sc, par);
          moveToHole(nh);
        },
        style: { flex: 1, padding: "11px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#475569", fontWeight: "800", fontSize: "13px", cursor: "pointer" }
      },
      "\u30B9\u30AD\u30C3\u30D7"
    )))));
  })(), view === "round" && currentRound && inputMode === "detail" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, (currentRound.course || "").replace(/（[^）]*）\s*$/, "") || currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "11px", marginTop: "1px", display: "flex", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", null, (() => {
    const doneEntries = Object.entries(holeData).filter(([, hd2]) => hd2.done);
    const doneCount = doneEntries.length;
    const totalParDone = doneEntries.reduce((a, [hKey]) => a + (holePars[parseInt(hKey) - 1] || 4), 0);
    const diff = totalStrk - totalParDone;
    return /* @__PURE__ */ React.createElement(React.Fragment, null, doneCount, "\u30DB\u30FC\u30EB\u8A18\u9332\u6E08\u307F\u3000\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, totalStrk), "\u6253", doneCount > 0 && totalParDone > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: diff < 0 ? "#ef4444" : diff === 0 ? "#16a34a" : "#f97316", fontWeight: "700" } }, "\uFF08", diff > 0 ? "+" : "", diff, "\uFF09"));
  })()))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px" } }, (() => {
    const ep = hd.extraPenalty || 0;
    const baseStyle = {
      border: "none",
      borderRadius: "8px",
      padding: "6px 9px",
      fontSize: "12px",
      fontWeight: "700",
      cursor: "pointer",
      whiteSpace: "nowrap"
    };
    const style = ep > 0 ? __spreadProps(__spreadValues({}, baseStyle), { background: "#b91c1c", color: "#ffffff" }) : __spreadProps(__spreadValues({}, baseStyle), { background: "#fee2e2", color: "#b91c1c" });
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        style,
        onClick: () => {
          setExtraPenaltyDraft(hd.extraPenalty || 0);
          setShowExtraPenaltyModal(true);
        },
        title: "\u305D\u306E\u4ED6\u30DA\u30CA\u30EB\u30C6\u30A3\u3092\u52A0\u7B97"
      },
      "\u26A0\uFE0F ",
      ep > 0 ? `+${ep}` : "+\u30DA\u30CA"
    );
  })(), currentRound.venueId && /* @__PURE__ */ React.createElement("button", { style: S.btn("secondary"), onClick: () => setShowYardage((v) => !v) }, "\u8DDD\u96E2"), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: handleDetailFinishClick }, "\u7D42\u4E86"))), (() => {
    var _a2, _b2;
    const venue = VENUES.find((v) => v.id === currentRound.venueId);
    if (!venue) return null;
    const greenLabel = ((_a2 = venue.greens.find((g) => g.id === currentRound.green)) == null ? void 0 : _a2.label) || currentRound.green;
    const teeLabel = ((_b2 = venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _b2.label) || currentRound.tee;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "10px 14px", marginBottom: "10px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u524D\u534A: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700" } }, currentRound.frontCourse)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u5F8C\u534A: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700" } }, currentRound.backCourse)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u30B0\u30EA\u30FC\u30F3: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, greenLabel)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u30C6\u30A3\u30FC: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, teeLabel))));
  })(), showYardage && (() => {
    var _a2;
    const venue = VENUES.find((v) => v.id === currentRound.venueId);
    if (!venue) return null;
    const allHoles = getRoundHoles(currentRound);
    if (!allHoles.length) return null;
    const green = currentRound.green;
    const tee = currentRound.tee;
    const teeLabel = ((_a2 = venue.tees.find((t) => t.id === tee)) == null ? void 0 : _a2.label) || tee;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "12px 10px", marginBottom: "10px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("label", { style: __spreadProps(__spreadValues({}, S.lbl), { margin: 0 }) }, "\u30E4\u30FC\u30C7\u30FC\u30B8\u8868\uFF08", teeLabel, "\uFF09"), /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => setShowYardage(false) }, "\u2715")), /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "12px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { color: "#475569" } }, ["H", "Par", "HDCP", "\u8DDD\u96E2(Y)"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "5px 4px", textAlign: "center", borderBottom: "1px solid #e2e8f0", fontWeight: "700" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, allHoles.map((h, i) => {
      const yard = venue.getYardage(h, green, tee);
      const isActive = i + 1 === currentHole;
      const isFront = i < 9;
      const dispHoleNum = getDisplayHoleNum(i + 1);
      return /* @__PURE__ */ React.createElement(
        "tr",
        {
          key: i,
          onClick: () => setCurrentHole(i + 1),
          style: { background: isActive ? "rgba(22,163,74,0.10)" : i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent", cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", fontWeight: isActive ? "800" : "600", color: isActive ? "#16a34a" : isFront ? "#0ea5e9" : "#a78bfa" } }, dispHoleNum),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#1e293b", fontWeight: "700" } }, h.par),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#64748b" } }, h.hdcp),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#fbbf24", fontWeight: "700" } }, yard != null ? yard : "\u2014")
      );
    }), /* @__PURE__ */ React.createElement("tr", { style: { borderTop: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("td", { colSpan: 3, style: { padding: "5px 4px", textAlign: "center", color: "#64748b", fontWeight: "700", fontSize: "10px" } }, "TOTAL"), /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#fbbf24", fontWeight: "800" } }, allHoles.reduce((s, h) => s + (venue.getYardage(h, green, tee) || 0), 0), "Y")))), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "6px" } }, "\u884C\u3092\u30BF\u30C3\u30D7\u3067\u30DB\u30FC\u30EB\u79FB\u52D5"));
  })(), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30DB\u30FC\u30EB\u9078\u629E"), [{ label: (currentRound == null ? void 0 : currentRound.frontCourse) || "\u524D\u534A", holes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, { label: (currentRound == null ? void 0 : currentRound.backCourse) || "\u5F8C\u534A", holes: [10, 11, 12, 13, 14, 15, 16, 17, 18] }].map((row, ri) => {
    const halfDiff = row.holes.reduce((a, h) => {
      const hInfo = holeData[h];
      if (!(hInfo == null ? void 0 : hInfo.done)) return a;
      const strokes = hInfo.shots.reduce((s, sh) => s + sh.shotCount, 0) + (hInfo.extraPenalty || 0);
      return a + (strokes - (holePars[h - 1] || 4));
    }, 0);
    const halfDoneCount = row.holes.filter((h) => {
      var _a2;
      return (_a2 = holeData[h]) == null ? void 0 : _a2.done;
    }).length;
    return /* @__PURE__ */ React.createElement("div", { key: ri, style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#475569" } }, row.label), halfDoneCount > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: "900", color: halfDiff < 0 ? "#ef4444" : halfDiff === 0 ? "#16a34a" : "#f97316" } }, halfDiff > 0 ? "+" : "", halfDiff)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, row.holes.map((h) => {
      const hInfo = holeData[h] || { shots: [], done: false };
      const active = currentHole === h;
      const hasDone = hInfo.done;
      const hasAny = hInfo.shots.length > 0;
      const strokes = hInfo.shots.reduce((a, s) => a + s.shotCount, 0) + (hInfo.extraPenalty || 0);
      const hPar = holePars[h - 1] || 4;
      const diff = hasDone ? strokes - hPar : null;
      const { sym, color: symColor } = diff !== null ? scoreDiffSymbol(diff) : { sym: "", color: "#94a3b8" };
      return /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => setCurrentHole(h), style: {
        width: "33px",
        height: hasDone ? "44px" : "33px",
        borderRadius: "7px",
        cursor: "pointer",
        border: active ? "2px solid #34d399" : hasDone ? `1px solid ${symColor}55` : hasAny ? "1px solid rgba(251,191,36,0.4)" : "1px solid #e2e8f0",
        background: active ? "rgba(52,211,153,0.18)" : hasDone ? `${symColor}11` : hasAny ? "rgba(251,191,36,0.07)" : "#f8fafc",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1px",
        padding: "2px 0"
      } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "11px", color: active ? "#16a34a" : hasDone ? symColor : hasAny ? "#fbbf24" : "#334155", lineHeight: 1 } }, getDisplayHoleNum(h)), hasDone && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: symColor, lineHeight: 1 } }, sym));
    })));
  })), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: `1px solid ${hd.done ? "rgba(22,163,74,0.25)" : "rgba(245,158,11,0.35)"}`, background: hd.done ? "#f0fdf4" : "#ffffff" }) }, (() => {
    var _a2, _b2;
    const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
    const allHoles = venue ? getRoundHoles(currentRound) : [];
    const hInfo = allHoles[currentHole - 1] || null;
    const yard = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
    const teeLabel = ((_a2 = venue == null ? void 0 : venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _a2.label) || "";
    const greenLabel = ((_b2 = venue == null ? void 0 : venue.greens.find((g) => g.id === currentRound.green)) == null ? void 0 : _b2.label) || "";
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "14px" } }, getDisplayHoleNum(currentHole), "\u756A"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: p,
        onClick: () => setPar(currentHole, p),
        style: {
          padding: "2px 8px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "12px",
          border: par === p ? "1.5px solid #16a34a" : "1px solid #e2e8f0",
          background: par === p ? "rgba(22,163,74,0.10)" : "#f8fafc",
          color: par === p ? "#0ea5e9" : "#94a3b8"
        }
      },
      "Par",
      p
    ))), hInfo && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontWeight: "500", fontSize: "10px" } }, "HC", hInfo.hdcp)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, totalStrokes > 0 ? (() => {
      const diff = totalStrokes - par;
      const { sym, color: symColor } = scoreDiffSymbol(diff);
      return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", lineHeight: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "3px", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "26px", fontWeight: "900", color: "#1e293b" } }, totalStrokes), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600" } }, "\u6253")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: symColor, textAlign: "right", marginTop: "1px" } }, diff > 0 ? "+" : "", diff));
    })() : /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", lineHeight: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "3px", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "26px", fontWeight: "900", color: "#cbd5e1" } }, "0"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600" } }, "\u6253"))), hd.done && /* @__PURE__ */ React.createElement("span", { style: S.pill("#16a34a") }, "\u2713 \u5B8C\u4E86"), hd.done && /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => {
          const shots = hd.shots;
          if (!shots.length) return;
          const prev = shots.slice(0, -1);
          let state = initialCategory(par);
          let strokes = 0;
          for (const sh of prev) {
            const cat = CATEGORIES[sh.categoryKey];
            const opt = cat == null ? void 0 : cat.options.find((o) => o.id === sh.optionId);
            if (!opt) continue;
            strokes += opt.shotCount + (opt.penaltyCount || 0);
            if (opt.nextState === "done") {
              state = "done";
              break;
            }
            state = categoryForState(opt.nextState, par, strokes + 1);
          }
          setHoleData((p) => {
            var _a3;
            return __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: false, pinDist: void 0, extraPenalty: (_a3 = p[currentHole]) == null ? void 0 : _a3.extraPenalty } });
          });
        },
        style: { padding: "2px 9px", borderRadius: "20px", background: "rgba(245,158,11,0.10)", color: "#d97706", border: "1px solid rgba(245,158,11,0.30)", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
      },
      "\u4FEE\u6B63"
    ))), yard && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", marginTop: "5px", fontSize: "10px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, [greenLabel, teeLabel].filter(Boolean).join("\u3000"), " ", yard, "y")));
  })(), hd.shots.map((s, i) => {
    const c = COLOR_MAP[s.color] || COLOR_MAP.gray;
    return /* @__PURE__ */ React.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: "9px", padding: "9px 11px", borderRadius: "8px", background: "#f8fafc", border: "1px solid rgba(255,255,255,0.055)", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "22px", height: "22px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800", color: "#64748b", flexShrink: 0 } }, hd.shots.slice(0, i).reduce((a, sh) => a + sh.shotCount, i > 0 ? 1 + (hd.extraPenalty || 0) : 1)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "13px", color: c.text } }, s.optionLabel), s.remainDist && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#fbbf24", background: "rgba(251,191,36,0.1)", padding: "1px 6px", borderRadius: "4px" } }, s.remainDist), s.club && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#0ea5e9", background: "rgba(14,165,233,0.12)", padding: "1px 6px", borderRadius: "4px" } }, clubLabel(s.club))), s.penaltyCount > 0 && /* @__PURE__ */ React.createElement("div", { style: { color: "#b91c1c", fontSize: "10px" } }, "\uFF08+", s.penaltyCount, "\u7F70\u30FB\u8A08", s.shotCount, "\u6253\u6D88\u8CBB\uFF09"), s.shotCount > 1 && !s.penaltyCount && s.categoryKey === "putt" && /* @__PURE__ */ React.createElement("div", { style: { color: "#475569", fontSize: "10px" } }, "\uFF08", s.shotCount, "\u6253\u5206\uFF09"), s.note && /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "10px" } }, s.note)), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "13px", flexShrink: 0, color: s.quality !== void 0 ? s.quality === "\u25CB" ? "#16a34a" : s.quality === "\u25B3" ? "#fbbf24" : "#94a3b8" : scoreColor(s.score) } }, s.quality !== void 0 ? s.quality : fmt(s.score)));
  }), hd.shots.length === 0 && /* @__PURE__ */ React.createElement("p", { style: { color: "#1e293b", fontSize: "12px", textAlign: "center", padding: "10px 0" } }, "\u3053\u306E\u30DB\u30FC\u30EB\u306F\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093"), (hd.extraPenalty || 0) > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "9px", padding: "9px 11px", borderRadius: "8px", background: "rgba(185,28,28,0.06)", border: "1px solid rgba(185,28,28,0.25)", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "22px", height: "22px", borderRadius: "50%", background: "rgba(185,28,28,0.10)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", flexShrink: 0 } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "13px", color: "#b91c1c" } }, "\u305D\u306E\u4ED6\u30DA\u30CA\u30EB\u30C6\u30A3"), /* @__PURE__ */ React.createElement("div", { style: { color: "#b91c1c", fontSize: "10px" } }, "\uFF08+", hd.extraPenalty, "\u7F70\u6253\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "13px", color: "#b91c1c" } }, "\xD7")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", marginTop: "10px" } }, !hd.done && currentCatDef ? /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: openShotForm,
      style: {
        flex: 1,
        padding: "12px 16px",
        borderRadius: "10px",
        border: "1px solid rgba(251,191,36,0.35)",
        background: "rgba(251,191,36,0.08)",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#fbbf24", fontWeight: "700" } }, "\u6B21: ", currentCatDef.label),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600" } }, totalStrokes + 1, "\u6253\u76EE \u203A")
  ) : hd.done ? /* @__PURE__ */ React.createElement(React.Fragment, null, currentHole > 1 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h - 1) }, "\u2039 \u524D\u306E\u30DB\u30FC\u30EB"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, textAlign: "center", padding: "12px", color: "#16a34a", fontSize: "13px", fontWeight: "700" } }, "\u30DB\u30FC\u30EB\u5B8C\u4E86", hd.pinDist && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#0ea5e9", fontWeight: "600", marginTop: "2px" } }, hd.pinDist)), currentHole < holePars.length ? /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h + 1) }, "\u6B21\u306E\u30DB\u30FC\u30EB \u203A") : /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("danger")), { padding: "10px 18px", fontSize: "13px", fontWeight: "800" }), onClick: handleDetailFinishClick }, "\u30E9\u30A6\u30F3\u30C9\u7D42\u4E86")) : null, !hd.done && hd.shots.length > 0 && /* @__PURE__ */ React.createElement("button", { style: S.btn("undo"), onClick: undoLastShot }, "\u21A9 \u53D6\u6D88"))), showExtraPenaltyModal && /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(15,23,42,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 300,
        padding: "16px"
      },
      onClick: () => setShowExtraPenaltyModal(false)
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          background: "#ffffff",
          borderRadius: "14px",
          padding: "20px 18px",
          width: "100%",
          maxWidth: "300px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.18)"
        },
        onClick: (e) => e.stopPropagation()
      },
      /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "15px", fontWeight: "800", color: "#1e293b" } }, "\u26A0\uFE0F \u305D\u306E\u4ED6\u30DA\u30CA\u30EB\u30C6\u30A3"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginTop: "4px" } }, "Hole ", getDisplayHoleNum(currentHole), "\uFF08Par ", par, "\uFF09\u306B\u52A0\u7B97\u3059\u308B\u7F70\u6253\u6570")),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: "18px", margin: "20px 0 14px" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          style: {
            background: "#f1f5f9",
            border: "1.5px solid #cbd5e1",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#0f172a",
            cursor: extraPenaltyDraft > 0 ? "pointer" : "not-allowed",
            opacity: extraPenaltyDraft > 0 ? 1 : 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box"
          },
          disabled: extraPenaltyDraft <= 0,
          onClick: () => setExtraPenaltyDraft((v) => Math.max(0, v - 1))
        },
        "\u2212"
      ), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", minWidth: "76px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "36px", fontWeight: "800", color: extraPenaltyDraft > 0 ? "#b91c1c" : "#94a3b8", lineHeight: 1 } }, extraPenaltyDraft > 0 ? `+${extraPenaltyDraft}` : "0"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#94a3b8", marginTop: "4px" } }, "\u6253\u7F70")), /* @__PURE__ */ React.createElement(
        "button",
        {
          style: {
            background: "#f1f5f9",
            border: "1.5px solid #cbd5e1",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            fontSize: "22px",
            fontWeight: "800",
            color: "#0f172a",
            cursor: extraPenaltyDraft < 9 ? "pointer" : "not-allowed",
            opacity: extraPenaltyDraft < 9 ? 1 : 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box"
          },
          disabled: extraPenaltyDraft >= 9,
          onClick: () => setExtraPenaltyDraft((v) => Math.min(9, v + 1))
        },
        "\uFF0B"
      )),
      /* @__PURE__ */ React.createElement("div", { style: { background: "#fffbeb", border: "0.5px solid rgba(245,158,11,0.30)", borderRadius: "8px", padding: "8px 10px", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10.5px", color: "#92400e", lineHeight: 1.5 } }, "\u9023\u7D9AOB\u30FB\u7A7A\u632F\u308A\u30FB\u8AA4\u7403\u306A\u3069\u3001\u901A\u5E38\u306E\u30B7\u30E7\u30C3\u30C8\u8A18\u9332\u306B\u542B\u307E\u308C\u306A\u3044\u7F70\u6253\u3092\u52A0\u7B97\u3057\u307E\u3059\u30020\u306B\u3059\u308B\u3068\u53D6\u308A\u6D88\u3057\u306B\u306A\u308A\u307E\u3059\u3002")),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement(
        "button",
        {
          style: { flex: 1, background: "#f1f5f9", border: "none", borderRadius: "8px", padding: "11px 0", fontSize: "13px", fontWeight: "700", color: "#475569", cursor: "pointer" },
          onClick: () => setShowExtraPenaltyModal(false)
        },
        "\u30AD\u30E3\u30F3\u30BB\u30EB"
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          style: {
            flex: 1.4,
            background: "linear-gradient(135deg,#f59e0b,#ea580c)",
            border: "none",
            borderRadius: "8px",
            padding: "11px 0",
            fontSize: "13px",
            fontWeight: "700",
            color: "#ffffff",
            cursor: "pointer",
            boxShadow: "0 3px 10px rgba(245,158,11,0.30)"
          },
          onClick: () => {
            const val = Math.max(0, Math.min(9, extraPenaltyDraft | 0));
            setHoleData((prev) => {
              const existing = prev[currentHole] || { shots: [], state: initialCategory(par), done: false };
              return __spreadProps(__spreadValues({}, prev), { [currentHole]: __spreadProps(__spreadValues({}, existing), { extraPenalty: val }) });
            });
            setShowExtraPenaltyModal(false);
          }
        },
        "\u78BA\u5B9A"
      ))
    )
  )), view === "round" && currentRound && inputMode === "detail" && currentRound.goal && (() => {
    const goal = currentRound.goal;
    const goalDef = GOAL_TYPES.find((g) => g.id === goal.type);
    if (!goalDef) return null;
    const progress = calcGoalProgress(holeData, holePars, goal);
    const completed = Object.values(holeData).filter((hd2) => hd2.done).length;
    const achieved = progress >= goal.target;
    const remaining = goal.target - progress;
    const pct = goal.target > 0 ? Math.min(100, Math.round(progress / goal.target * 100)) : 0;
    return /* @__PURE__ */ React.createElement("div", { style: {
      background: achieved ? "rgba(22,163,74,0.07)" : "#ffffff",
      border: `1px solid ${achieved ? "rgba(22,163,74,0.30)" : "#e2e8f0"}`,
      borderRadius: "13px",
      padding: "14px 16px",
      marginTop: "4px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em" } }, "\u4ECA\u65E5\u306E\u76EE\u6A19"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "1px", background: "#e2e8f0" } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8" } }, completed, "H\u5B8C\u4E86")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "700", color: "#1e293b" } }, goalDef.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginTop: "1px" } }, "\u76EE\u6A19 ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: "#1e293b" } }, goal.target), " \u30DB\u30FC\u30EB")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "26px", fontWeight: "900", lineHeight: 1, color: achieved ? "#16a34a" : "#1e293b" } }, progress, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", color: "#94a3b8", fontWeight: "600" } }, "/", goal.target)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", marginTop: "2px" } }, achieved ? /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "800" } }, "\u2705 \u9054\u6210\uFF01") : /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u3042\u3068 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#f59e0b", fontWeight: "800" } }, remaining), "H")))), /* @__PURE__ */ React.createElement("div", { style: { height: "6px", background: "#f1f5f9", borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: {
      height: "100%",
      width: `${pct}%`,
      background: achieved ? "linear-gradient(to right, #16a34a, #34d399)" : "linear-gradient(to right, #f59e0b, #ea580c)",
      borderRadius: "3px",
      transition: "width 0.4s ease"
    } })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "3px", textAlign: "right" } }, pct, "%"));
  })(), showHcpWarning && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 400, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(251,191,36,0.5)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#1e293b", marginBottom: "8px" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u304C\u672A\u8A2D\u5B9A\u3067\u3059"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#64748b", marginBottom: "20px", lineHeight: 1.7 } }, "HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700" } }, "AI\u8A3A\u65AD\u30FB5\u8981\u7D20\u5206\u6790"), "\u304C\u5229\u7528\u3067\u304D\u307E\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "\u3053\u306E\u307E\u307E\u958B\u59CB\u3057\u305F\u5834\u5408\u3001\u4ECA\u56DE\u306E\u30E9\u30A6\u30F3\u30C9\u306F", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "#dc2626", fontWeight: "700" } }, "\u5206\u6790\u306A\u3057"), "\u3067\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setShowHcpWarning(false);
        setShowNewRound(false);
        setView("profile");
        setProfileEdit(__spreadValues({}, profile));
      },
      style: { width: "100%", padding: "12px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#0ea5e9,#0284c7)", color: "#fff", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "\u30DE\u30A4\u30DA\u30FC\u30B8\u3067HCP\u3092\u8A2D\u5B9A\u3059\u308B"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setShowHcpWarning(false);
        if (currentRound) {
          setShowDiscardWarning(true);
          return;
        }
        doStartRound();
      },
      style: { width: "100%", padding: "11px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#64748b", fontWeight: "600", fontSize: "12px", cursor: "pointer" }
    },
    "\u5206\u6790\u306A\u3057\u3067\u3053\u306E\u307E\u307E\u958B\u59CB\u3059\u308B"
  )))), showDiscardWarning && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 400, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(239,68,68,0.4)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", marginBottom: "12px" } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#1e293b", marginBottom: "8px" } }, "\u5165\u529B\u4E2D\u306E\u30E9\u30A6\u30F3\u30C9\u304C\u3042\u308A\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", color: "#dc2626", fontWeight: "700", marginBottom: "6px", padding: "10px", background: "#fef2f2", borderRadius: "8px" } }, (currentRound == null ? void 0 : currentRound.course) || "\u5165\u529B\u4E2D\u306E\u30E9\u30A6\u30F3\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#64748b", marginBottom: "20px" } }, "\u7834\u68C4\u3057\u3066\u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u3057\u307E\u3059\u304B\uFF1F", /* @__PURE__ */ React.createElement("br", null), "\u5165\u529B\u6E08\u307F\u306E\u30C7\u30FC\u30BF\u306F\u5931\u308F\u308C\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowDiscardWarning(false),
      style: { flex: 1, padding: "11px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#475569", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "\u30AD\u30E3\u30F3\u30BB\u30EB"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setCurrentRound(null);
        setHoleData({});
        setSimpleHoleData({});
        doStartRound();
      },
      style: { flex: 1, padding: "11px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#ef4444,#dc2626)", color: "#fff", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "\u7834\u68C4\u3057\u3066\u958B\u59CB"
  )))), showDetailPaywall && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 420, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(245,158,11,0.35)", borderRadius: "16px", padding: "22px 20px 20px", maxWidth: "340px", width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#1e293b" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u3092\u3082\u3063\u3068\u4F7F\u3046\u306B\u306F")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#64748b", lineHeight: 1.7, marginBottom: "16px" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u306F\u7121\u6599\u3067", DETAIL_FREE_LIMIT, "\u30E9\u30A6\u30F3\u30C9\u307E\u3067\u304A\u8A66\u3057\u3067\u304D\u3001", DETAIL_FREE_LIMIT + 1, "\u30E9\u30A6\u30F3\u30C9\u76EE\u4EE5\u964D\u306F", /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "800" } }, DETAIL_PRICE_LABEL), "\u3067\u4F7F\u3048\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\uFF08\u304A\u8A66\u3057\u8CA9\u58F2\u4E2D\uFF09\u3002\u7C21\u6613\u30E2\u30FC\u30C9\u306F\u7121\u6599\u3067\u4F7F\u3044\u653E\u984C\u3067\u3059\u3002"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        try {
          window.open(BUY_LINK_URL, "_blank");
        } catch (_) {
        }
      },
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "13px", marginBottom: "9px" })
    },
    DETAIL_PRICE_LABEL,
    "\u3067\u89E3\u9664\u3059\u308B\uFF08\u8CFC\u5165\uFF09"
  ), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "14px", marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("label", { style: { fontSize: "11px", color: "#94a3b8", fontWeight: "700", display: "block", marginBottom: "6px" } }, "\u8CFC\u5165\u6E08\u307F\u306E\u65B9\uFF1A\u89E3\u9664\u30B3\u30FC\u30C9\u3092\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement(
    "input",
    {
      value: unlockInput,
      onChange: (e) => {
        setUnlockInput(e.target.value);
        setUnlockError("");
      },
      placeholder: "\u4F8B: SCRX-XXXX-XXXX",
      style: __spreadProps(__spreadValues({}, S.input), { flex: 1 })
    }
  ), /* @__PURE__ */ React.createElement("button", { onClick: applyUnlockCode, style: __spreadProps(__spreadValues({}, S.btn("secondary")), { whiteSpace: "nowrap" }) }, "\u9069\u7528")), unlockError && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#dc2626", fontWeight: "700", marginTop: "6px" } }, unlockError)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setShowDetailPaywall(false);
        setUnlockInput("");
        setUnlockError("");
      },
      style: { width: "100%", padding: "9px", border: "none", background: "transparent", color: "#94a3b8", fontWeight: "600", fontSize: "12px", cursor: "pointer" }
    },
    "\u9589\u3058\u308B"
  ))), finishConfirm && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: `1px solid ${finishConfirm.type === "ok" ? "rgba(52,211,153,0.4)" : "rgba(251,191,36,0.4)"}`, borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, finishConfirm.type === "ok" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#e2e8f0", marginBottom: "16px" } }, "\u30B9\u30B3\u30A2\u3092\u767B\u9332\u3057\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setFinishConfirm(null),
      style: { flex: 1, padding: "11px", borderRadius: "9px", border: "1px solid #e2e8f0", background: "#f1f5f9", color: "#475569", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "\u30AD\u30E3\u30F3\u30BB\u30EB"
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setFinishConfirm(null);
        if (inputMode === "simple") {
          setPendingFinish(true);
        } else {
          finishRound();
        }
      },
      style: { flex: 1, padding: "11px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#34d399,#60a5fa)", color: "#f8fafc", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "OK"
  ))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "28px", marginBottom: "10px" } }, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "14px", color: "#fbbf24", marginBottom: "10px" } }, "\u672A\u5165\u529B\u306E\u30DB\u30FC\u30EB\u304C\u3042\u308A\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center", marginBottom: "16px" } }, finishConfirm.incompleteHoles.map((h) => /* @__PURE__ */ React.createElement("span", { key: h, style: { padding: "4px 10px", borderRadius: "20px", background: "rgba(251,191,36,0.15)", color: "#fbbf24", fontSize: "13px", fontWeight: "700" } }, getDisplayHoleNum(h), "\u756A"))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setFinishConfirm(null),
      style: { width: "100%", padding: "11px", borderRadius: "9px", border: "none", background: "linear-gradient(135deg,#34d399,#60a5fa)", color: "#f8fafc", fontWeight: "700", fontSize: "13px", cursor: "pointer" }
    },
    "OK"
  )))), view === "analytics" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30D7\u30EC\u30FC\u5206\u6790"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u5F97\u610F\u30FB\u4E0D\u5F97\u610F\u30B7\u30E7\u30C3\u30C8\u3092\u78BA\u8A8D\u3057\u3088\u3046")), /* @__PURE__ */ React.createElement(AnalyticsRexyGreeting, null), /* @__PURE__ */ React.createElement(AnalyticsAIDiagnosis, null), /* @__PURE__ */ React.createElement(AnalyticsScoreChart, null), /* @__PURE__ */ React.createElement(AnalyticsStats, null), /* @__PURE__ */ React.createElement(AnalyticsPuttStats, null), /* @__PURE__ */ React.createElement(AnalyticsDistanceStats, null), /* @__PURE__ */ React.createElement(AnalyticsClubStats, null), /* @__PURE__ */ React.createElement(AnalyticsSegmentCharts, null))), view === "clubs" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30AF\u30E9\u30D6\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u4F7F\u7528\u3059\u308B\u30AF\u30E9\u30D6\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u8A2D\u5B9A\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#94a3b8" } }, "\u9078\u629E\u4E2D\uFF1A", /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "800" } }, savedClubs.length), "\u672C"), savedClubs.length > 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setSavedClubs([]);
        try {
          (() => {
            try {
              localStorage.setItem("golf_clubs", "[]");
            } catch (_) {
            }
          })();
        } catch (_) {
        }
        if (true) {
          (() => {
            try {
              localStorage.setItem("golf_clubs", "[]");
            } catch (_) {
            }
          })();
        }
      },
      style: { fontSize: "11px", color: "#475569", background: "transparent", border: "none", cursor: "pointer", textDecoration: "underline" }
    },
    "\u3059\u3079\u3066\u30AF\u30EA\u30A2"
  )), CLUB_CATEGORIES.map((cat) => {
    const clubs = CLUB_MASTER.filter((c) => c.category === cat);
    const selectedInCat = clubs.filter((c) => savedClubs.includes(c.id)).length;
    return /* @__PURE__ */ React.createElement("div", { key: cat, style: S.card() }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("label", { style: __spreadProps(__spreadValues({}, S.lbl), { margin: 0 }) }, cat), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#475569" } }, selectedInCat, "/", clubs.length)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, clubs.map((c) => {
      const sel = savedClubs.includes(c.id);
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          key: c.id,
          onClick: () => {
            const next = sel ? savedClubs.filter((x) => x !== c.id) : [...savedClubs, c.id];
            setSavedClubs(next);
            (() => {
              try {
                localStorage.setItem("golf_clubs", JSON.stringify(next));
              } catch (_) {
              }
            })();
            (() => {
              try {
                localStorage.setItem("golf_clubs", JSON.stringify(next));
              } catch (_) {
              }
            })();
          },
          style: {
            padding: "7px 11px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "700",
            border: sel ? "2px solid #16a34a" : "1px solid #e2e8f0",
            background: sel ? "rgba(96,165,250,0.18)" : "#f8fafc",
            color: sel ? "#0ea5e9" : "#64748b",
            transition: "all 0.15s"
          }
        },
        c.label
      );
    })));
  }), savedClubs.length > 0 && /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.2)" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u9078\u629E\u4E2D\u306E\u30AF\u30E9\u30D6\u4E00\u89A7"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap" } }, savedClubs.map((id) => {
    const c = CLUB_MASTER.find((x) => x.id === id);
    return c ? /* @__PURE__ */ React.createElement("span", { key: id, style: { padding: "3px 9px", borderRadius: "20px", background: "rgba(14,165,233,0.12)", color: "#0ea5e9", fontSize: "12px", fontWeight: "700" } }, c.label) : null;
  }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "28px", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setDataMgmtOpen((o) => !o),
      "aria-expanded": dataMgmtOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "14px 16px",
        cursor: "pointer",
        textAlign: "left",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
      }
    },
    /* @__PURE__ */ React.createElement("span", { style: { display: "flex", flexDirection: "column", gap: "2px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "18px", fontWeight: "800", color: "#1e293b" } }, "\u30C7\u30FC\u30BF\u7BA1\u7406"), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b", fontSize: "11px" } }, "\u30C7\u30FC\u30BF\u306E\u66F8\u304D\u51FA\u3057\u30FB\u30A4\u30F3\u30DD\u30FC\u30C8\uFF08\u5FA9\u5143\uFF09\u203B\u6A5F\u7A2E\u5909\u66F4\u6642\u306E\u30C7\u30FC\u30BF\u5F15\u304D\u7D99\u304E\u306B\u4F7F\u7528")),
    /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true", style: {
      color: "#64748b",
      fontSize: "13px",
      fontWeight: "700",
      marginLeft: "10px",
      flexShrink: 0,
      transform: dataMgmtOpen ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.18s ease"
    } }, "\u25B6")
  )), dataMgmtOpen && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", { style: { color: "#475569", fontSize: "12px", marginBottom: "8px" } }, "\u30A2\u30D7\u30EA\u66F4\u65B0\u6642\u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u53D6\u3063\u3066\u304B\u3089\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u5FA9\u5143\u3057\u3066\u304F\u3060\u3055\u3044"), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u30C7\u30FC\u30BF\u66F8\u304D\u51FA\u3057"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "12px", lineHeight: 1.6 } }, "\u30E9\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u3092JSON\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002\u30B3\u30D4\u30FC\u3057\u3066\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u6295\u5165\u30C4\u30FC\u30EB\u306B\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleExport,
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", fontSize: "13px", padding: "12px" })
    },
    "JSON\u3092\u8868\u793A\u3059\u308B\uFF08",
    rounds.length,
    "\u4EF6\uFF09"
  )), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u30A4\u30F3\u30DD\u30FC\u30C8\uFF08\u5FA9\u5143\u30FB\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "12px", lineHeight: 1.6 } }, "\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u6295\u5165\u30C4\u30FC\u30EB\u3067\u751F\u6210\u3057\u305FJSON\u3092\u8CBC\u308A\u4ED8\u3051\u308B\u304B\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: pasteImportText,
      onChange: (e) => setPasteImportText(e.target.value),
      placeholder: "\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u6295\u5165\u30C4\u30FC\u30EB\u306E\u6700\u7D42JSON\u3092\u3053\u3053\u306B\u8CBC\u308A\u4ED8\u3051...",
      style: {
        width: "100%",
        height: "80px",
        background: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(96,165,250,0.25)",
        borderRadius: "8px",
        color: "#94a3b8",
        fontSize: "10px",
        padding: "8px",
        resize: "none",
        boxSizing: "border-box",
        fontFamily: "monospace",
        marginBottom: "8px"
      }
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handlePasteImport,
      disabled: !pasteImportText.trim(),
      style: __spreadProps(__spreadValues({}, S.btn("primary")), {
        width: "100%",
        fontSize: "13px",
        padding: "11px",
        marginBottom: "10px",
        opacity: pasteImportText.trim() ? 1 : 0.4,
        cursor: pasteImportText.trim() ? "pointer" : "not-allowed"
      })
    },
    "\u8CBC\u308A\u4ED8\u3051\u305FJSON\u3092\u8AAD\u307F\u8FBC\u3080"
  ), /* @__PURE__ */ React.createElement("label", { style: {
    display: "block",
    textAlign: "center",
    padding: "10px",
    background: "rgba(96,165,250,0.07)",
    border: "1px dashed rgba(96,165,250,0.25)",
    borderRadius: "8px",
    color: "#475569",
    fontWeight: "700",
    fontSize: "12px",
    cursor: "pointer"
  } }, "\u307E\u305F\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u30A4\u30F3\u30DD\u30FC\u30C8", /* @__PURE__ */ React.createElement("input", { type: "file", accept: ".json", onChange: handleImport, style: { display: "none" } })), importMsg && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: "10px",
    padding: "10px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "700",
    background: importMsg.type === "ok" ? "rgba(22,163,74,0.12)" : "rgba(239,68,68,0.15)",
    color: importMsg.type === "ok" ? "#16a34a" : "#dc2626",
    border: `1px solid ${importMsg.type === "ok" ? "rgba(52,211,153,0.3)" : "rgba(239,68,68,0.3)"}`
  } }, importMsg.type === "ok" ? "\u2705 " : "\u274C ", importMsg.text)))), view === "manual" && (() => {
    const M = {
      hero: { background: "linear-gradient(135deg,#f0fdf4,#eff6ff)", borderRadius: "14px", padding: "24px 20px 20px", marginBottom: "14px", border: "1px solid rgba(22,163,74,0.2)" },
      badge: { display: "inline-block", background: "rgba(22,163,74,0.12)", color: "#16a34a", fontSize: "10px", fontWeight: "700", padding: "3px 10px", borderRadius: "20px", marginBottom: "10px", letterSpacing: ".05em" },
      heroH: { fontSize: "22px", fontWeight: "800", color: "#1e293b", marginBottom: "8px", lineHeight: 1.3 },
      heroB: { fontSize: "12px", color: "#64748b", lineHeight: 1.7 },
      secH: { fontSize: "17px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" },
      secS: { fontSize: "10px", color: "#94a3b8", marginBottom: "12px", display: "block" },
      card: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", marginBottom: "10px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
      cardG: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "16px", marginBottom: "10px" },
      accentG: { background: "#f0fdf4", border: "1px solid rgba(22,163,74,0.2)", borderLeft: "3px solid #16a34a", borderRadius: "0 12px 12px 0", padding: "14px 16px", marginBottom: "10px" },
      accentB: { background: "#eff6ff", border: "1px solid rgba(14,165,233,0.2)", borderLeft: "3px solid #0ea5e9", borderRadius: "0 12px 12px 0", padding: "14px 16px", marginBottom: "10px" },
      accentA: { background: "#fffbeb", border: "1px solid rgba(245,158,11,0.2)", borderLeft: "3px solid #f59e0b", borderRadius: "0 12px 12px 0", padding: "14px 16px", marginBottom: "10px" },
      accentV: { background: "#f5f3ff", border: "1px solid rgba(167,139,250,0.2)", borderLeft: "3px solid #a78bfa", borderRadius: "0 12px 12px 0", padding: "14px 16px", marginBottom: "10px" },
      bubble: { position: "relative", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px", marginLeft: "40px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" },
      bubbleArrow: { position: "absolute", top: "-7px", left: "18px", width: "12px", height: "12px", background: "#ffffff", borderLeft: "1px solid #e2e8f0", borderTop: "1px solid #e2e8f0", transform: "rotate(45deg)" },
      tipBox: { background: "#f0fdf4", border: "1px solid rgba(22,163,74,0.25)", borderRadius: "10px", padding: "12px 14px", marginTop: "8px" },
      tipBoxB: { background: "#eff6ff", border: "1px solid rgba(14,165,233,0.25)", borderRadius: "10px", padding: "12px 14px", marginTop: "8px" },
      lbl: { fontSize: "9px", fontWeight: "700", color: "#94a3b8", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "6px", display: "block" },
      cardH: { fontSize: "13px", fontWeight: "800", color: "#1e293b", marginBottom: "5px" },
      body: { fontSize: "12px", color: "#64748b", lineHeight: 1.65 },
      stepNum: (c = "#16a34a") => ({ width: "26px", height: "26px", borderRadius: "50%", background: `${c}18`, border: `1px solid ${c}40`, color: c, fontWeight: "800", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }),
      evalBtn: (c) => ({ width: "32px", height: "32px", borderRadius: "8px", background: `${c}12`, border: `1px solid ${c}35`, color: c, fontWeight: "800", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" }),
      field: { background: "#f8fafc", borderRadius: "8px", padding: "10px 12px", border: "1px solid #e2e8f0" },
      tag: (c) => ({ padding: "4px 10px", borderRadius: "20px", background: `${c}12`, border: `1px solid ${c}35`, color: c, fontSize: "11px", fontWeight: "700" }),
      scoreRow: { display: "flex", alignItems: "center", gap: "10px", padding: "7px 10px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", marginBottom: "5px" },
      hr: { height: "1px", background: "#e2e8f0", margin: "16px 0" },
      // モックアップ用
      mockFrame: { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "0", overflow: "hidden", marginTop: "10px", marginBottom: "4px", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" },
      mockHeader: { background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "9px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" },
      mockBody: { padding: "12px", background: "#f8fafc" },
      mockNavBtn: (a) => ({ padding: "3px 7px", borderRadius: "12px", background: a ? "rgba(22,163,74,0.12)" : "transparent", color: a ? "#16a34a" : "#94a3b8", fontSize: "10px", fontWeight: "700", border: "none" }),
      mockBtn: { background: "linear-gradient(135deg,#f59e0b,#ea580c)", color: "#ffffff", borderRadius: "8px", padding: "10px", textAlign: "center", fontWeight: "800", fontSize: "12px", boxShadow: "0 2px 8px rgba(245,158,11,0.3)" },
      mockInput: { background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "6px 10px", color: "#1e293b", fontSize: "11px" },
      // 章番号バッジ
      chBadge: (c) => ({ width: "30px", height: "30px", borderRadius: "50%", background: `${c}1f`, border: `1px solid ${c}55`, color: c, fontWeight: "800", fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center" })
    };
    const Step = ({ n, color = "#16a34a", title, body }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: M.stepNum(color) }, n), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, title), /* @__PURE__ */ React.createElement("div", { style: M.body }, body)));
    const EvalBtns = ({ items }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, items.map(([c, l]) => /* @__PURE__ */ React.createElement("div", { key: l, style: M.evalBtn(c) }, l)));
    const MockHome = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", background: "linear-gradient(90deg,#16a34a,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px" } }, ["\u30DB\u30FC\u30E0", "\u5206\u6790", "\u30AF\u30E9\u30D6", "\u4F7F\u3044\u65B9"].map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: M.mockNavBtn(t === "\u30DB\u30FC\u30E0") }, t)))), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: M.mockBtn }, "\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px" } }, "\u6700\u8FD1\u306E\u30E9\u30A6\u30F3\u30C9"), [{ c: "\u30C0\u30C3\u30D5\u30A1\u30FC\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6", d: "2026/5/10", s: "+5", col: "#60a5fa" }, { c: "\u30D5\u30EB\u30B9\u30A4\u30F3\u30B0\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6", d: "2026/2/17", s: "+3", col: "#16a34a" }].map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 10px", marginBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#1e293b" } }, r.c), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#475569" } }, r.d)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: r.col } }, r.s)))));
    const MockSetup = ({ active = "simple" }) => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", background: "linear-gradient(90deg,#16a34a,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b", marginBottom: "10px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px", textTransform: "uppercase" } }, "\u5165\u529B\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "8px", borderRadius: "8px", border: active === "detail" ? "2px solid #0ea5e9" : "1px solid #e2e8f0", background: active === "detail" ? "rgba(14,165,233,0.10)" : "#f8fafc", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: active === "detail" ? "#0ea5e9" : "#64748b" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: active === "detail" ? "#475569" : "#94a3b8" } }, "\u30B7\u30E7\u30C3\u30C8\u5358\u4F4D\u3067\u8A18\u9332")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "8px", borderRadius: "8px", border: active === "simple" ? "2px solid #16a34a" : "1px solid #e2e8f0", background: active === "simple" ? "rgba(22,163,74,0.10)" : "#f8fafc", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: active === "simple" ? "#16a34a" : "#64748b" } }, "\u7C21\u6613\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: active === "simple" ? "#475569" : "#94a3b8" } }, "\u30B9\u30B3\u30A2\u30FB\u8A55\u4FA1\u306E\u307F"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px", textTransform: "uppercase" } }, "\u30B4\u30EB\u30D5\u5834"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.mockInput), { marginBottom: "10px" }) }, "\u30C0\u30C3\u30D5\u30A1\u30FC\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6 \u25BC"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", marginBottom: "10px" } }, ["\u4E2D\u30B3\u30FC\u30B9", "\u897F\u30B3\u30FC\u30B9", "\u6771\u30B3\u30FC\u30B9"].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: { padding: "5px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "700", border: i === 0 ? "2px solid #16a34a" : "1px solid #e2e8f0", background: i === 0 ? "rgba(22,163,74,0.10)" : "#f8fafc", color: i === 0 ? "#16a34a" : "#475569" } }, c))), /* @__PURE__ */ React.createElement("div", { style: M.mockBtn }, "\u30B9\u30BF\u30FC\u30C8\uFF01")));
    const MockRecord = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: "#1e293b" } }, "\u30C0\u30C3\u30D5\u30A1\u30FC\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#16a34a", fontWeight: "700" } }, "\u7C21\u6613\u30E2\u30FC\u30C9")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", marginBottom: "8px", flexWrap: "wrap" } }, Array.from({ length: 9 }, (_, i) => i + 1).map((h) => /* @__PURE__ */ React.createElement("div", { key: h, style: { width: "28px", height: "28px", borderRadius: "6px", background: h === 3 ? "rgba(22,163,74,0.18)" : h < 3 ? "rgba(22,163,74,0.06)" : "#f8fafc", border: h === 3 ? "2px solid #16a34a" : h < 3 ? "1px solid rgba(22,163,74,0.3)" : "1px solid #e2e8f0", color: h === 3 ? "#16a34a" : h < 3 ? "#94a3b8" : "#334155", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" } }, h))), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b", marginBottom: "8px" } }, "3\u756A\u30DB\u30FC\u30EB\uFF08Par4\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "3px", textTransform: "uppercase", fontWeight: "700" } }, "\u30B9\u30B3\u30A2"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "16px", color: "#1e293b" } }, "5"), /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\uFF0B"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "3px", textTransform: "uppercase", fontWeight: "700" } }, "\u30D1\u30C3\u30C8\u6570"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "16px", color: "#1e293b" } }, "2"), /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\uFF0B")))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "8px" } }, [["OB", "0"], ["\u30DA\u30CA\u30EB\u30C6\u30A3", "0"], ["\u30D0\u30F3\u30AB\u30FC", "1"]].map(([lb, v]) => /* @__PURE__ */ React.createElement("div", { key: lb }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "3px", textTransform: "uppercase", fontWeight: "700", whiteSpace: "nowrap" } }, lb), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", justifyContent: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "20px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "13px", color: "#1e293b" } }, v), /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "20px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\uFF0B"))))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "4px", textTransform: "uppercase", fontWeight: "700", borderTop: "1px solid #e2e8f0", paddingTop: "8px" } }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1"), [["\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", "good"], ["\u30BB\u30AB\u30F3\u30C9\u30B7\u30E7\u30C3\u30C8", "fair"], ["\u30A2\u30D7\u30ED\u30FC\u30C1", "bad"]].map(([nm, ev]) => /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#475569" } }, nm), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]].map(([c, l]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { width: "26px", height: "26px", borderRadius: "6px", background: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? `${c}20` : "#f8fafc", border: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? `2px solid ${c}` : "1px solid #e2e8f0", color: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? c : "#475569", fontWeight: "800", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, l))))))));
    const MockRecordDetail = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: "#1e293b" } }, "\u30C0\u30C3\u30D5\u30A1\u30FC\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#0ea5e9", fontWeight: "700" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", marginBottom: "8px", flexWrap: "wrap" } }, Array.from({ length: 9 }, (_, i) => i + 1).map((h) => /* @__PURE__ */ React.createElement("div", { key: h, style: { width: "26px", height: "26px", borderRadius: "6px", background: h === 3 ? "rgba(14,165,233,0.18)" : h < 3 ? "rgba(22,163,74,0.06)" : "#f8fafc", border: h === 3 ? "2px solid #0ea5e9" : h < 3 ? "1px solid rgba(22,163,74,0.3)" : "1px solid #e2e8f0", color: h === 3 ? "#0ea5e9" : h < 3 ? "#16a34a" : "#334155", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" } }, h))), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(14,165,233,0.20)", borderRadius: "10px", padding: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b" } }, "3\u756A ", /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8", fontWeight: "400", fontSize: "10px" } }, "Par4")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px", background: "rgba(14,165,233,0.12)", color: "#0ea5e9" } }, "3\u6253"))), [
      { n: 1, lbl: "\u25CB", txt: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", dist: "380Y", club: "1W", col: "#16a34a" },
      { n: 2, lbl: "\u25CB", txt: "\u30A2\u30D7\u30ED\u30FC\u30C1", dist: "150Y", club: "7I", col: "#16a34a" },
      { n: 3, lbl: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", txt: "\u30A2\u30D7\u30ED\u30FC\u30C1", dist: "30Y", club: "PW", col: "#16a34a" }
    ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.n, style: { display: "flex", alignItems: "center", gap: "7px", padding: "6px 8px", borderRadius: "6px", background: "#f8fafc", border: "1px solid #e2e8f0", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "18px", height: "18px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "800", color: "#64748b" } }, s.n), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: s.col } }, s.lbl), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", color: "#a16207", background: "rgba(251,191,36,0.12)", padding: "1px 5px", borderRadius: "4px" } }, "\u{1F4CF}", s.dist), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", color: "#0ea5e9", background: "rgba(14,165,233,0.12)", padding: "1px 5px", borderRadius: "4px" } }, s.club))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", borderRadius: "8px", border: "1px solid rgba(245,158,11,0.35)", background: "#fffbeb", marginTop: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#d97706", fontWeight: "700" } }, "\u6B21: \u30D1\u30C3\u30C8"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8", fontWeight: "700" } }, "4\u6253\u76EE \u203A")))));
    const MockShotForm = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.mockHeader), { borderBottom: "none", paddingBottom: "4px" }) }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b" } }, "3\u756A\u30DB\u30FC\u30EB\uFF08Par4\uFF09"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8", fontWeight: "700" } }, "\u30AD\u30E3\u30F3\u30BB\u30EB")), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 12px 12px 12px", background: "#f8fafc" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#d97706", fontWeight: "700", marginBottom: "10px" } }, "2\u6253\u76EE \u2014 \u30A2\u30D7\u30ED\u30FC\u30C1"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u6B8B\u308A\u8DDD\u96E2 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(14,165,233,0.3)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "18px", fontWeight: "800", color: "#0ea5e9" } }, "150", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#93c5fd" } }, " Y")))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u4F7F\u7528\u30AF\u30E9\u30D6 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, ["6I", "7I", "8I", "9I", "PW"].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: { padding: "6px 10px", borderRadius: "6px", fontSize: "10px", fontWeight: "800", border: i === 1 ? "1px solid rgba(14,165,233,0.6)" : "1px solid rgba(14,165,233,0.2)", background: i === 1 ? "rgba(14,165,233,0.18)" : "#ffffff", color: i === 1 ? "#0ea5e9" : "#93c5fd" } }, c)))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u7D50\u679C ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, [["\u25CB", "#16a34a", true], ["\u25B3", "#a16207", false], ["\xD7", "#64748b", false], ["\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", "#16a34a", false], ["\u30AB\u30C3\u30D7\u30A4\u30F3", "#16a34a", false]].map(([l, c, sel]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { padding: "7px 10px", borderRadius: "7px", fontSize: "10px", fontWeight: "800", border: `1px solid ${c}55`, background: sel ? `${c}18` : "#ffffff", color: c, opacity: sel ? 1 : 0.6 } }, sel ? "\u2713 " : "", l))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 12px 14px", borderTop: "1px solid #e2e8f0", background: "#ffffff" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", padding: "10px", borderRadius: "10px", background: "linear-gradient(135deg,#34d399,#10b981)", color: "#ffffff", fontWeight: "800", fontSize: "12px", textAlign: "center" } }, "\u8A18\u9332\u3059\u308B")));
    const MockAnalytics = () => {
      const cx = 90, cy = 80, R = 55;
      const labels = ["\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", "\u30D1\u30C3\u30C8", "\u30D0\u30F3\u30AB\u30FC"];
      const scores = [0.7, 0.4, 0.55, 0.8, 0.3];
      const avgs = [0.6, 0.6, 0.6, 0.6, 0.6];
      const n = labels.length;
      const angle = (i) => Math.PI * 2 * i / n - Math.PI / 2;
      const pt = (i, r) => [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))];
      const poly = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";
      const latestPts = scores.map((_, i) => pt(i, R * scores[i]));
      const avgPts = avgs.map((_, i) => pt(i, R * avgs[i]));
      const gridLvls = [0.25, 0.5, 0.75, 1];
      return /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b" } }, "\u30D7\u30EC\u30FC\u5206\u6790")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" } }, "\u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8"), /* @__PURE__ */ React.createElement("svg", { width: "100%", viewBox: "0 0 180 170", style: { display: "block" } }, gridLvls.map((lv, gi) => {
        const pts = labels.map((_, i) => pt(i, R * lv));
        return /* @__PURE__ */ React.createElement("path", { key: gi, d: poly(pts), fill: "none", stroke: "#eef2f7", strokeWidth: "1" });
      }), labels.map((_, i) => {
        const outer = pt(i, R);
        return /* @__PURE__ */ React.createElement("line", { key: i, x1: cx, y1: cy, x2: outer[0], y2: outer[1], stroke: "#eef2f7", strokeWidth: "1" });
      }), /* @__PURE__ */ React.createElement("path", { d: poly(labels.map((_, i) => pt(i, R * 0.75))), fill: "rgba(22,163,74,0.08)", stroke: "#16a34a", strokeWidth: "1.2", strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("path", { d: poly(avgPts), fill: "rgba(14,165,233,0.1)", stroke: "#0ea5e9", strokeWidth: "1.5", strokeDasharray: "3 2" }), /* @__PURE__ */ React.createElement("path", { d: poly(latestPts), fill: "rgba(251,191,36,0.18)", stroke: "#fbbf24", strokeWidth: "2" }), latestPts.map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r: "2.5", fill: "#fbbf24" })), labels.map((lb, i) => {
        const [x, y] = pt(i, R + 14);
        return /* @__PURE__ */ React.createElement("text", { key: i, x, y, textAnchor: "middle", fill: "#64748b", fontSize: "8", fontWeight: "700" }, lb);
      })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "7px", marginTop: "4px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#16a34a" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#16a34a" } }), " \u7406\u60F3\uFF08\xB10\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#d97706" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#fbbf24" } }), " \u76F4\u8FD15R\u5E73\u5747"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#0ea5e9" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#0ea5e9", opacity: 0.6 } }), " \u76F4\u8FD120R\u5E73\u5747"))));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: M.hero }, /* @__PURE__ */ React.createElement("div", { style: M.badge }, "\u30B9\u30BF\u30FC\u30C8\u30AC\u30A4\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, [
      { key: "Solution", desc: "\u3042\u306A\u305F\u306E\u30E9\u30A6\u30F3\u30C9\u306E\u8AB2\u984C\u3092\u89E3\u6C7A" },
      { key: "Evolution", desc: "\u3042\u306A\u305F\u306E\u30B9\u30B3\u30A2\u3092\u9032\u5316\u3055\u305B\u308B" },
      { key: "Revolution", desc: "\u3042\u306A\u305F\u306E\u30B4\u30EB\u30D5\u306B\u9769\u547D\u3092" }
    ].map(({ key, desc }) => /* @__PURE__ */ React.createElement("div", { key, style: { display: "flex", gap: "10px", alignItems: "baseline", lineHeight: "1.6" } }, /* @__PURE__ */ React.createElement("span", { style: {
      fontSize: "17px",
      fontWeight: "800",
      letterSpacing: "0.02em",
      minWidth: "108px",
      background: "linear-gradient(135deg,#f59e0b,#ea580c)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    } }, key), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, desc)))), /* @__PURE__ */ React.createElement("h2", { style: M.heroH }, "ScoRExolution\uFF08\u30B9\u30B3\u30EC\u30DC\uFF09\u3067", /* @__PURE__ */ React.createElement("br", null), "\u30B9\u30B3\u30A2\u3092\u6539\u5584\u3057\u3088\u3046\uFF01"), /* @__PURE__ */ React.createElement("p", { style: M.heroB }, "\u30B9\u30B3\u30A2\u304C\u4F38\u3073\u60A9\u3080\u7406\u7531\u3063\u3066\u3001\u3060\u3044\u305F\u3044\u300C\u81EA\u5206\u306E\u5F31\u70B9\u3092\u77E5\u3089\u306A\u3044\u304B\u3089\u300D\u306A\u3093\u3067\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "\u30B9\u30B3\u30EC\u30DC\u306F\u30E9\u30A6\u30F3\u30C9\u306E\u30C7\u30FC\u30BF\u3092\u84C4\u7A4D\u3057\u3066\u3001", /* @__PURE__ */ React.createElement("b", { style: { color: "#16a34a" } }, "\u3069\u3053\u3092\u76F4\u305B\u3070\u30B9\u30B3\u30A2\u304C\u7E2E\u307E\u308B\u304B"), "\u3092\u6559\u3048\u3066\u304F\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.card), { marginBottom: "16px" }) }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u3053\u306E\u30AC\u30A4\u30C9\u306E\u5185\u5BB9"), [
      { c: "#16a34a", t: "\u7B2C1\u7AE0 \u301C \u7C21\u6613\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5" },
      { c: "#0ea5e9", t: "\u7B2C2\u7AE0 \u301C \u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5" },
      { c: "#f59e0b", t: "\u7B2C3\u7AE0 \u301C \u5206\u6790\u30DA\u30FC\u30B8\u3067\u30B9\u30B3\u30A2\u30A2\u30C3\u30D7" }
    ].map(({ c, t }) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "6px", height: "6px", borderRadius: "50%", background: c, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#475569" } }, t)))), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.card), { marginBottom: "16px" }) }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "2\u3064\u306E\u5165\u529B\u30E2\u30FC\u30C9\u3092\u4F7F\u3044\u5206\u3051"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px", borderRadius: "8px", border: "1px solid rgba(22,163,74,0.2)", background: "#f0fdf4" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#16a34a", marginBottom: "4px" } }, "\u7C21\u6613\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", lineHeight: 1.55 } }, "1\u30DB\u30FC\u30EB30\u79D2\u3002\u30B9\u30B3\u30A2\u30FB\u30D1\u30C3\u30C8\u30FB\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1\u306E\u307F\u3002", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "\u30E9\u30A6\u30F3\u30C9\u4E2D\u306B\u624B\u65E9\u304F"), "\u8A18\u9332\u3057\u305F\u3044\u4EBA\u5411\u3051\u3002")), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px", borderRadius: "8px", border: "1px solid rgba(14,165,233,0.2)", background: "#eff6ff" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#0ea5e9", marginBottom: "4px" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", lineHeight: 1.55 } }, "1\u6253\u305A\u3064\u8DDD\u96E2\u30FB\u30AF\u30E9\u30D6\u30FB\u7D50\u679C\u3092\u8A18\u9332\u3002", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "\u8DDD\u96E2\u5225\uFF0F\u30AF\u30E9\u30D6\u5225\u306E\u5206\u6790"), "\u304C\u898B\u305F\u3044\u4EBA\u5411\u3051\u3002"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", marginTop: "8px", lineHeight: 1.5 } }, "\u3069\u3061\u3089\u306E\u30E2\u30FC\u30C9\u3067\u3082\u57FA\u672C\u5206\u6790\uFF08\u63A8\u79FB\u30B0\u30E9\u30D5\u30FB\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\uFF09\u306F\u540C\u3058\u3088\u3046\u306B\u4F7F\u3048\u307E\u3059\u3002\u8A73\u7D30\u30E2\u30FC\u30C9\u306F\u3055\u3089\u306B\u4E0A\u7D1A\u5206\u6790\u304C\u8FFD\u52A0\u3067\u898B\u3089\u308C\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", padding: "10px", borderRadius: "8px", background: "#fffbeb", border: "1px solid rgba(245,158,11,0.20)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#d97706", marginBottom: "4px" } }, "\u6599\u91D1\u306B\u3064\u3044\u3066"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("b", { style: { color: "#16a34a" } }, "\u7C21\u6613\u30E2\u30FC\u30C9\u306F\u7121\u6599\u3067\u4F7F\u3044\u653E\u984C"), "\u3067\u3059\u3002", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9"), "\u306F\u7121\u6599\u3067", DETAIL_FREE_LIMIT, "\u30E9\u30A6\u30F3\u30C9\u307E\u3067\u304A\u8A66\u3057\u3067\u304D\u3001", DETAIL_FREE_LIMIT + 1, "\u30E9\u30A6\u30F3\u30C9\u76EE\u4EE5\u964D\u306F", DETAIL_PRICE_LABEL, "\u3067\u4F7F\u3048\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\uFF08\u304A\u8A66\u3057\u8CA9\u58F2\u4E2D\uFF09\u3002"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#16a34a") }, "1"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u7C21\u6613\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "1\u30DB\u30FC\u30EB30\u79D2\u3067\u3067\u304D\u308B\u3001\u304B\u3093\u305F\u3093\u306A\u8A18\u9332\u65B9\u6CD5")))), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 1 \u2014 \u30E9\u30A6\u30F3\u30C9\u3092\u59CB\u3081\u308B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30DB\u30FC\u30E0\u753B\u9762\u306E\u300C\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u300D\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u8A2D\u5B9A\u753B\u9762\u304C\u958B\u3044\u305F\u3089\u3001\u5165\u529B\u30E2\u30FC\u30C9\u3067\u300C\u7C21\u6613\u30E2\u30FC\u30C9\u300D\u3092\u9078\u629E\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement(MockHome, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30DB\u30FC\u30E0\u753B\u9762\u3002\u30E9\u30A6\u30F3\u30C9\u5C65\u6B74\u3068\u30CF\u30F3\u30C7\u30A3\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement(Step, { n: "1", title: "\u7C21\u6613\u30E2\u30FC\u30C9 \u3092\u9078\u3076", body: "\u30B9\u30B3\u30A2\u3068\u8A55\u4FA1\u3092\u30B5\u30AF\u30C3\u3068\u5165\u529B\u3057\u305F\u3044\u306A\u3089\u3053\u3061\u3089\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "2", title: "\u30B4\u30EB\u30D5\u5834\u3092\u9078\u3076", body: "\u30D7\u30EB\u30C0\u30A6\u30F3\u304B\u3089\u9078\u629E\u3002\u5BFE\u5FDC\u30B4\u30EB\u30D5\u5834\u62E1\u5927\u4E2D\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "3", title: "\u30B3\u30FC\u30B9\u30FB\u30B0\u30EA\u30FC\u30F3\u30FB\u30C6\u30A3\u30FC\u3092\u8A2D\u5B9A", body: "\u300C\u4E2D\u2192\u897F\u300D\u300C\u30D9\u30F3\u30C8\u300D\u300C\u30EC\u30AE\u30E5\u30E9\u30FC\u300D\u306E\u3088\u3046\u306B\u6307\u5B9A\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "4", title: "\u65E5\u4ED8\u30FB\u5929\u6C17\u30FB\u98A8\u3092\u5165\u529B\u3057\u3066\u30B9\u30BF\u30FC\u30C8\uFF01", body: "\u5929\u6C17\u30FB\u98A8\u306F\u3056\u3063\u304F\u308A\u3067OK\u3002\u5F8C\u304B\u3089\u4FEE\u6B63\u3082\u3067\u304D\u307E\u3059\u3002" })), /* @__PURE__ */ React.createElement(MockSetup, { active: "simple" }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u753B\u9762\u3002\u7C21\u6613\u30E2\u30FC\u30C9\u3092\u9078\u3093\u3067\u30B9\u30BF\u30FC\u30C8\uFF01"), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 2 \u2014 \u30DB\u30FC\u30EB\u3054\u3068\u306B\u5165\u529B\u3059\u308B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u5404\u30DB\u30FC\u30EB\u30676\u9805\u76EE\u3092\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u4E0A\u306E\u30DB\u30FC\u30EB\u756A\u53F7\u30DC\u30BF\u30F3\u3067\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002\u300C\u2039 \u524D\u306E\u30DB\u30FC\u30EB\u300D\u300C\u6B21\u306E\u30DB\u30FC\u30EB \u203A\u300D\u30DC\u30BF\u30F3\u3067\u3082\u79FB\u52D5\u53EF\u80FD\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" } }, [
      { n: "\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09", req: true, d: "\u2212/\uFF0B\u3067\u5165\u529B\u3002\u305D\u306E\u30DB\u30FC\u30EB\u306E\u5408\u8A08\u6253\u6570\u3002" },
      { n: "\u30D1\u30C3\u30C8\u6570", req: true, d: "\u30B0\u30EA\u30FC\u30F3\u306B\u4E57\u3063\u3066\u304B\u3089\u306E\u6253\u6570\u3002" },
      { n: "OB", req: false, d: "OB\u306B\u306A\u3063\u305F\u56DE\u6570\u3002\u5206\u6790\u306B\u4F7F\u308F\u308C\u307E\u3059\u3002" },
      { n: "\u30DA\u30CA\u30EB\u30C6\u30A3", req: false, d: "\u6C60\u30DD\u30C1\u30E3\u306A\u30691\u6253\u7F70\u306E\u56DE\u6570\u3002" }
    ].map(({ n, req, d }) => /* @__PURE__ */ React.createElement("div", { key: n, style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, n, req && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#dc2626", marginLeft: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.5 } }, d)))), /* @__PURE__ */ React.createElement("div", { style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, "\u30D0\u30F3\u30AB\u30FC ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b" } }, "\u4EFB\u610F")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b" } }, "\u30D0\u30F3\u30AB\u30FC\u306B\u5165\u3063\u305F\u56DE\u6570\u30020\u306E\u307E\u307E\u3067\u3082OK\u3067\u3059\u3002"))), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 3 \u2014 \u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1\u304C\u8D85\u91CD\u8981\uFF01"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u5404\u30B7\u30E7\u30C3\u30C8\u306E\u51FA\u6765\u3092 \u25CB \u25B3 \xD7 \u306E3\u6BB5\u968E\u3067\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u6253\u6570\u3060\u3051\u3067\u306A\u304F\u300C\u3069\u306E\u30B7\u30E7\u30C3\u30C8\u304C\u826F\u304B\u3063\u305F\u304B\u30FB\u60AA\u304B\u3063\u305F\u304B\u300D\u3092\u8A18\u9332\u3059\u308B\u3053\u3068\u3067\u5F31\u70B9\u304C\u898B\u3048\u3066\u304D\u307E\u3059\u3002\u3053\u308C\u304C\u30B9\u30B3\u30A2\u6539\u5584\u306E\u6838\u5FC3\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, [
      { ic: "\u{1F3CC}\uFE0F", nm: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", when: "\u5168\u30DB\u30FC\u30EB\u5171\u901A", req: true, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F33F}", nm: "\u30BB\u30AB\u30F3\u30C9\u30B7\u30E7\u30C3\u30C8", when: "Par4 / Par5 \u306E\u307F", req: false, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F33F}", nm: "\u30B5\u30FC\u30C9\u30B7\u30E7\u30C3\u30C8", when: "Par5 \u306E\u307F", req: false, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F3AF}", nm: "\u30A2\u30D7\u30ED\u30FC\u30C1", when: "\u30D1\u30FC\u30AA\u30F3\u306A\u3089\u300C\u7121\u300D\u3092\u9078\u629E", req: true, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"], ["#64748b", "\u7121"]] }
    ].map(({ ic, nm, when, req, btns }) => /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", marginBottom: "8px", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flex: 1 } }, /* @__PURE__ */ React.createElement("span", null, ic), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "700", color: "#1e293b" } }, nm), req && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#dc2626", marginLeft: "5px" } }, "\u5FC5\u9808"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569" } }, when))), /* @__PURE__ */ React.createElement(EvalBtns, { items: btns }))), /* @__PURE__ */ React.createElement("div", { style: M.tipBox }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#16a34a", marginBottom: "5px" } }, "\u8A55\u4FA1\u306E\u76EE\u5B89"), [["#16a34a", "\u25CB\uFF08\u826F\u3044\uFF09", "\u306D\u3089\u3044\u901A\u308A\u306B\u6253\u3066\u305F"], ["#fbbf24", "\u25B3\uFF08\u666E\u901A\uFF09", "\u5C11\u3057\u30DF\u30B9\u3001\u6B21\u304C\u72D9\u3044\u3065\u3089\u3044"], ["#dc2626", "\xD7\uFF08\u60AA\u3044\uFF09", "\u30D0\u30F3\u30AB\u30FC\u30FBOB\u30FB\u6C60"]].map(([c, l, d]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: c, fontSize: "12px" } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, d))))), /* @__PURE__ */ React.createElement(MockRecord, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u7C21\u6613\u30E2\u30FC\u30C9\u306E\u30DB\u30FC\u30EB\u5165\u529B\u753B\u9762"), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 4 \u2014 \u30DB\u30FC\u30EB\u79FB\u52D5 & \u7D42\u4E86"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "18\u30DB\u30FC\u30EB\u5165\u529B\u3057\u305F\u3089\u300C\u7D42\u4E86\u300D\u30DC\u30BF\u30F3"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30DB\u30FC\u30EB\u756A\u53F7\u30DC\u30BF\u30F3\u306F\u5165\u529B\u72B6\u6CC1\u306B\u5FDC\u3058\u3066\u8272\u304C\u5909\u308F\u308A\u307E\u3059\u3002\u30B9\u30B3\u30A2\u8A18\u53F7\u306E\u610F\u5473\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, [["\u25CE", "#dc2626", "\u30A4\u30FC\u30B0\u30EB\u4EE5\u4E0A", "\u30D1\u30FC -2\u4EE5\u4E0B"], ["\u25CB", "#ef4444", "\u30D0\u30FC\u30C7\u30A3", "\u30D1\u30FC -1"], ["\uFF0D", "#16a34a", "\u30D1\u30FC", "\u57FA\u6E96\u901A\u308A"], ["\u25B3", "#60a5fa", "\u30DC\u30AE\u30FC", "\u30D1\u30FC +1"], ["\u25A1", "#3b82f6", "\u30C0\u30D6\u30EB\u30DC\u30AE\u30FC", "\u30D1\u30FC +2"], ["\u25A0", "#1d4ed8", "\u30C8\u30EA\u30D7\u30EB\u4EE5\u4E0A", "\u30D1\u30FC +3\u4EE5\u4E0A"]].map(([s, c, l, d]) => /* @__PURE__ */ React.createElement("div", { key: l, style: M.scoreRow }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: c, fontSize: "14px", width: "22px", textAlign: "center" } }, s), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", color: "#1e293b", fontSize: "12px", flex: 1 } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569" } }, d))), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.tipBox), { marginTop: "8px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#16a34a", marginBottom: "5px" } }, "\u8A18\u9332\u306E\u30B3\u30C4"), ["\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30FB\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u5FC5\u9808\u3002\u3053\u306E2\u3064\u304C\u306A\u3044\u3068\u5206\u6790\u304C\u3067\u304D\u307E\u305B\u3093\u3002", "\u5206\u6790\u306B\u306F3\u30E9\u30A6\u30F3\u30C9\u4EE5\u4E0A\u5FC5\u8981\u3002\u307E\u305A3\u56DE\u8A18\u9332\u3057\u3066\u307F\u307E\u3057\u3087\u3046\uFF01"].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "10px", marginTop: "1px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t))))), /* @__PURE__ */ React.createElement("div", { style: M.hr }), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#0ea5e9") }, "2"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "1\u6253\u305A\u3064\u8A18\u9332\u3057\u3066\u3001\u8DDD\u96E2\u5225\u30FB\u30AF\u30E9\u30D6\u5225\u306E\u6DF1\u3044\u5206\u6790\u3092\u5F97\u308B")))), /* @__PURE__ */ React.createElement("div", { style: M.bubble }, /* @__PURE__ */ React.createElement("div", { style: M.bubbleArrow }), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u8DDD\u96E2\u5225\uFF0F\u756A\u624B\u5225\u306E\u5F97\u610F\u4E0D\u5F97\u610F\u304C\u898B\u3048\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "1\u6253\u3054\u3068\u306B\u8DDD\u96E2\u30FB\u4F7F\u7528\u30AF\u30E9\u30D6\u30FB\u7D50\u679C\u3092\u8A18\u9332\u3059\u308B\u306E\u3067\u3001\u30E9\u30A6\u30F3\u30C9\u5F8C\u306B", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u6570"), "\u30FB", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u6B8B\u308A\u8DDD\u96E2\u5225\u30CA\u30A4\u30B9\u30B7\u30E7\u30C3\u30C8\u7387"), "\u30FB", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u30AF\u30E9\u30D6\u5225\u6210\u529F\u7387"), "\u3068\u3044\u3063\u305F\u4E0A\u7D1A\u5206\u6790\u304C\u8FFD\u52A0\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 1 \u2014 \u8A73\u7D30\u30E2\u30FC\u30C9\u3067\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u3067\u300C\u8A73\u7D30\u30E2\u30FC\u30C9\u300D\u3092\u9078\u629E"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u305D\u306E\u5F8C\u306E\u6D41\u308C\uFF08\u30B4\u30EB\u30D5\u5834\u30FB\u30B3\u30FC\u30B9\u30FB\u30B0\u30EA\u30FC\u30F3\u30FB\u30C6\u30A3\u30FC\u30FB\u65E5\u4ED8\uFF09\u306F\u7C21\u6613\u30E2\u30FC\u30C9\u3068\u540C\u3058\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement(MockSetup, { active: "detail" }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u300C\u8A73\u7D30\u30E2\u30FC\u30C9\u300D\u3092\u30BF\u30C3\u30D7\u3057\u3066\u9078\u629E"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 2 \u2014 \u30DB\u30FC\u30EB\u3092\u9078\u3093\u3067\u30B7\u30E7\u30C3\u30C8\u8A18\u9332\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30DB\u30FC\u30EB\u756A\u53F7 \u2192 Par\u9078\u629E \u2192 \u300C\u6B21:\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u300D\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30DB\u30FC\u30EB\u3054\u3068\u306B\u6700\u521D\u306F\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u304B\u3089\u8A18\u9332\u304C\u59CB\u307E\u308A\u307E\u3059\u3002\u30A2\u30F3\u30D0\u30FC\u8272\u306E\u30DC\u30BF\u30F3\u304C\u300C\u6B21\u306B\u5165\u529B\u3059\u3079\u304D\u30B7\u30E7\u30C3\u30C8\u300D\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement(MockRecordDetail, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u30DB\u30FC\u30EB\u5165\u529B\u753B\u9762\uFF083\u6253\u76EE\u307E\u3067\u30ED\u30B0\u8868\u793A\uFF09"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 3 \u2014 1\u30B7\u30E7\u30C3\u30C8\u305A\u3064\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30B7\u30E7\u30C3\u30C8\u5165\u529B\u30E2\u30FC\u30C0\u30EB\u304C\u958B\u304F"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "4\u9805\u76EE\u3092\u9806\u306B\u5165\u529B\u3057\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u5FC5\u9808\u9805\u76EE\u3092\u5165\u308C\u308B\u3068\u300C\u8A18\u9332\u3059\u308B\u300D\u30DC\u30BF\u30F3\u304C\u7DD1\u8272\u306B\u306A\u308A\u3001\u62BC\u3059\u3068\u81EA\u52D5\u3067\u6B21\u306E\u30B7\u30E7\u30C3\u30C8\u3078\u9032\u307F\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement(Step, { n: "1", color: "#0ea5e9", title: "\u{1F4CF} \u6B8B\u308A\u8DDD\u96E2\uFF08\u5FC5\u9808\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u30C6\u30A3\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u96FB\u5353\u3067\u6570\u5B57\u5165\u529B"), "\uFF08\u30B3\u30FC\u30B9\u8DDD\u96E2\u304C\u81EA\u52D5\u5165\u308B\uFF0F\u30BF\u30C3\u30D7\u3067\u4FEE\u6B63\uFF09\uFF0F\u30A2\u30D7\u30ED\u30FC\u30C1\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u30B9\u30E9\u30A4\u30C0\u30FC"), "\u3067Y\u6570\u6307\u5B9A\uFF0F\u30D1\u30C3\u30C8\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u30B9\u30E9\u30A4\u30C0\u30FC"), "\u3067m\u6570\u6307\u5B9A\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "2", color: "#0ea5e9", title: "\u{1F3CC}\uFE0F \u4F7F\u7528\u30AF\u30E9\u30D6\uFF08\u5FC5\u9808\u30FB\u30D1\u30C3\u30C8\u4EE5\u5916\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u767B\u9332\u30AF\u30E9\u30D6\u304B\u3089\u9078\u629E\u3002\u300C\u30AF\u30E9\u30D6\u30BB\u30C3\u30C8\u300D\u30DA\u30FC\u30B8\u3067\u81EA\u5206\u306E\u30AF\u30E9\u30D6\u3092\u767B\u9332\u3057\u3066\u304A\u304F\u3068\u3001\u3053\u3053\u306B\u81EA\u5206\u306E\u30AF\u30E9\u30D6\u3060\u3051\u304C\u8868\u793A\u3055\u308C\u3066\u30B5\u30AF\u30B5\u30AF\u9078\u3079\u307E\u3059\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "3", color: "#0ea5e9", title: "\u{1F4CA} \u7D50\u679C\uFF08\u5FC5\u9808\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u25CB / \u25B3 / \xD7 \u306E3\u6BB5\u968E\uFF0B\u7279\u6B8A2\u7A2E\uFF08\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\u30FB\u30AB\u30C3\u30D7\u30A4\u30F3\uFF09\u3002", /* @__PURE__ */ React.createElement("b", { style: { color: "#dc2626" } }, "\xD7\u3092\u9078\u3076\u3068\u30DF\u30B9\u306E\u7A2E\u985E"), "\uFF08\u30D0\u30F3\u30AB\u30FC\u30FB1\u30DA\u30CA\u30FBOB\uFF09\u306E\u9078\u629E\u304C\u8FFD\u52A0\u3067\u51FA\u307E\u3059\u3002OB\u306F\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30672\u6253\u7F70\uFF08\u524D\u90324\u6253\u6271\u3044\uFF09\u3001\u30A2\u30D7\u30ED\u30FC\u30C1\u4EE5\u964D\u30671\u6253\u7F70\u3068\u3057\u3066\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "4", color: "#0ea5e9", title: "\u{1F4DD} \u30E1\u30E2\uFF08\u4EFB\u610F\uFF09", body: "\u300C\u5DE6\u306B\u5F15\u3063\u639B\u3051\u305F\u300D\u306A\u3069\u6C17\u4ED8\u304D\u3092\u6B8B\u305B\u307E\u3059\u3002\u30B9\u30B3\u30A2\u30FB\u5206\u6790\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002" })), /* @__PURE__ */ React.createElement(MockShotForm, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30B7\u30E7\u30C3\u30C8\u5165\u529B\u30E2\u30FC\u30C0\u30EB\uFF08\u30A2\u30D7\u30ED\u30FC\u30C1\u30FB150Y\u30FB7I\u30FB\u25CB\u306E\u4F8B\uFF09"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 4 \u2014 \u30B0\u30EA\u30FC\u30F3\u5230\u9054\u5F8C\u306F\u30D1\u30C3\u30C8\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\u300D\u3092\u9078\u3076\u3068\u30D1\u30C3\u30C8\u5165\u529B\u3078\u81EA\u52D5\u5207\u66FF"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "1\u30D1\u30C3\u30C8\u3067\u30AB\u30C3\u30D7\u30A4\u30F3\u306A\u3089\u300C1\u30D1\u30C3\u30C8 \u25CB\u300D\u30012\u30D1\u30C3\u30C8\u306A\u3089\u300C2\u30D1\u30C3\u30C8 \u25B3\u300D\u3001\u3068", /* @__PURE__ */ React.createElement("b", null, "\u30D1\u30C3\u30C8\u6570\u307E\u3068\u3081\u30661\u56DE\u3067\u8A18\u9332"), "\u3067\u304D\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "5px", marginBottom: "8px" } }, [["1\u30D1\u30C3\u30C8", "#16a34a"], ["2\u30D1\u30C3\u30C8", "#fbbf24"], ["3\u30D1\u30C3\u30C8", "#64748b"], ["4\u30D1\u30C3\u30C8", "#dc2626"], ["5\u30D1\u30C3\u30C8", "#b91c1c"]].map(([l, c]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { padding: "8px 4px", borderRadius: "7px", border: `1px solid ${c}55`, background: `${c}10`, color: c, fontWeight: "800", fontSize: "10px", textAlign: "center" } }, l))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, "\u30D1\u30C3\u30C8\u306E\u5F8C\u306F\u300C\u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2\u300D\u3092\u805E\u304B\u308C\u308B\u306E\u3067\u30BF\u30C3\u30D7\u3057\u3066\u8A18\u9332\uFF08\u4EFB\u610F\uFF09\u3002\u3053\u308C\u3067\u5206\u6790\u306E", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08"), "\u304C\u3088\u308A\u6B63\u78BA\u306B\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 5 \u2014 \u30DB\u30FC\u30EB\u5B8C\u4E86 \u2192 \u6B21\u306E\u30DB\u30FC\u30EB\u3078"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30AB\u30C3\u30D7\u30A4\u30F3\u5F8C\u306F\u300C\u30DB\u30FC\u30EB\u5B8C\u4E86\u300D\u304C\u8868\u793A"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u300C\u6B21\u306E\u30DB\u30FC\u30EB \u203A\u300D\u3067\u6B21\u3078\u3002\u9593\u9055\u3048\u305F\u3089\u300C\u21A9 \u53D6\u6D88\u300D\u3067\u6700\u5F8C\u306E\u30B7\u30E7\u30C3\u30C8\u3092\u53D6\u308A\u6D88\u3057\u3001\u30DB\u30FC\u30EB\u5B8C\u4E86\u5F8C\u306F\u300C\u4FEE\u6B63\u300D\u30DC\u30BF\u30F3\u3067\u623B\u305B\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: M.tipBoxB }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#0ea5e9", marginBottom: "5px" } }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u30B3\u30C4"), [
      "\u30C6\u30A3\u306E\u6B8B\u308A\u8DDD\u96E2\u306F\u30B3\u30FC\u30B9\u8DDD\u96E2\u304B\u3089\u81EA\u52D5\u5165\u529B\u3002\u9055\u3046\u30C6\u30A3\u3092\u4F7F\u3063\u305F\u6642\u3060\u3051\u624B\u52D5\u4FEE\u6B63\u3002",
      "\u30AF\u30E9\u30D6\u30BB\u30C3\u30C8\u3092\u4E8B\u524D\u306B\u767B\u9332\u3057\u3066\u304A\u304F\u3068\u30AF\u30E9\u30D6\u9078\u629E\u304C\u30B9\u30E0\u30FC\u30BA\u3002",
      "\u30D4\u30F3\u8DDD\u96E2\uFF08\u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2\uFF09\u3082\u5165\u308C\u3066\u304A\u304F\u3068\u5206\u6790\u304C\u3088\u308A\u6B63\u78BA\u306B\u3002",
      "\u30E9\u30A6\u30F3\u30C9\u4E2D\u306F\u7C21\u6613\u3001\u5F8C\u3067\u3058\u3063\u304F\u308A\u8A73\u7D30\u3001\u3068\u4F7F\u3044\u5206\u3051\u308B\u306E\u3082\u25CE"
    ].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontSize: "10px", marginTop: "1px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t))))), /* @__PURE__ */ React.createElement("div", { style: M.hr }), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#f59e0b") }, "3"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u5206\u6790\u30DA\u30FC\u30B8\u3067\u30B9\u30B3\u30A2\u30A2\u30C3\u30D7"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "\u8A18\u9332\u3057\u305F\u30C7\u30FC\u30BF\u304B\u3089\u300C\u76F4\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u300D\u3092\u898B\u3064\u3051\u3088\u3046")))), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u5206\u6790\u30DA\u30FC\u30B8\u3078"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u4E0A\u90E8\u30CA\u30D3\u306E\u300C\u5206\u6790\u300D\u30BF\u30D6\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u5206\u6790\u30DA\u30FC\u30B8\u306F\u4E0A\u304B\u3089\u9806\u306B7\u3064\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u4E26\u3073\u307E\u3059\u3002\u30C7\u30FC\u30BF\u304C\u63C3\u3063\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u9806\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "8px" } }, "\u5206\u6790\u30DA\u30FC\u30B8\u306E\u69CB\u6210"), [
      { ic: "\u{1F916}", nm: "AI\u8A3A\u65AD", req: "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u8A2D\u5B9A + 1\u30E9\u30A6\u30F3\u30C9\u301C", d: "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9\u306E\u5E73\u5747\u304B\u3089\u3001\u5F37\u307F\u30FB\u5F31\u307F\u3092\u6587\u7AE0\u3067\u8A3A\u65AD\u3002\u7DCF\u5408\u8A55\u4FA1\u30FB5\u8981\u7D20\u5206\u6790\u30FB\u6539\u5584\u8AB2\u984C\u30FB\u6539\u5584\u30A2\u30C9\u30D0\u30A4\u30B9\u30921\u679A\u306B\u307E\u3068\u3081\u3066\u8868\u793A\u3002" },
      { ic: "\u{1F4C8}", nm: "\u30B9\u30B3\u30A2\u63A8\u79FB\u30B0\u30E9\u30D5", req: "2\u30E9\u30A6\u30F3\u30C9\u4EE5\u4E0A", d: "\u76F4\u8FD15\u30E9\u30A6\u30F3\u30C9\u306E\u30B9\u30B3\u30A2\u30FB\u30D1\u30C3\u30C8\u6570\u30FB5\u8981\u7D20\u8A55\u4FA1\u306E\u5909\u5316\u3092\u78BA\u8A8D\u3002" },
      { ic: "\u{1F3AF}", nm: "\u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8", req: "1\u30E9\u30A6\u30F3\u30C9\u301C", d: "5\u8981\u7D20\uFF08\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF0F\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\uFF0F\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\uFF0F\u30D1\u30C3\u30C8\uFF0F\u30D0\u30F3\u30AB\u30FC\uFF09\u306E\u76F4\u8FD15R\u5E73\u5747 vs \u76F4\u8FD120R\u5E73\u5747\u3092\u53EF\u8996\u5316\u3002" },
      { ic: "\u{1F4CA}", nm: "\u8A55\u4FA1\u30B9\u30B3\u30A2\u63A8\u79FB", req: "\u76F4\u8FD120R", d: "5\u8981\u7D20\u305D\u308C\u305E\u308C\u306E\u30C8\u30EC\u30F3\u30C9\u3092\u8FFD\u8DE1\u3002\u300C\u5148\u6708\u3088\u308A\u30ED\u30F3\u30B0\u304C\u4E0A\u304C\u3063\u305F\uFF01\u300D\u306A\u3069\u6210\u9577\u3092\u5B9F\u611F\u3002" },
      { ic: "\u26F3", nm: "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "1m\u30FB2m\u30FB3m\u2026\u2026\u306E\u30D1\u30C3\u30C8\u6210\u529F\u7387\u3092\u96C6\u8A08\u3002" },
      { ic: "\u{1F4CF}", nm: "\u6B8B\u308A\u8DDD\u96E2\u5225 \u25CB/\xD7\u7387", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "\u300C150Y\u306E\u6210\u529F\u7387\u300D\u306A\u3069\u3001\u8DDD\u96E2\u5E2F\u3054\u3068\u306E\u7CBE\u5EA6\u3092\u78BA\u8A8D\u3002" },
      { ic: "\u{1F3CC}\uFE0F", nm: "\u30AF\u30E9\u30D6\u5225 \u25CB/\xD7\u7387", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "7I\u30FBPW\u306A\u3069\u30AF\u30E9\u30D6\u3054\u3068\u306E\u7D50\u679C\u3092\u96C6\u8A08\u3002\u82E6\u624B\u306A\u30AF\u30E9\u30D6\u304C\u5206\u304B\u308B\u3002" }
    ].map(({ ic, nm, req, d }) => {
      const isDetail = req.includes("\u8A73\u7D30");
      return /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", gap: "10px", marginBottom: "10px", paddingBottom: "10px", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "18px", flexShrink: 0 } }, ic), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b" } }, nm), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px", background: isDetail ? "rgba(14,165,233,0.10)" : "rgba(22,163,74,0.10)", color: isDetail ? "#0ea5e9" : "#16a34a" } }, req)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.6 } }, d)));
    })), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "AI\u8A3A\u65AD\u306E\u8AAD\u307F\u65B9"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "1\u679A\u306E\u30AB\u30FC\u30C9\u3067\u300C\u73FE\u72B6\u2192\u5F31\u70B9\u2192\u3084\u308B\u3053\u3068\u300D\u304C\u5206\u304B\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "AI\u8A3A\u65AD\u306F\u3072\u3068\u3064\u306E\u30AB\u30FC\u30C9\u306B4\u3064\u306E\u60C5\u5831\u304C\u307E\u3068\u307E\u3063\u3066\u3044\u307E\u3059\u3002\u4E0A\u304B\u3089\u9806\u306B\u8AAD\u3080\u3060\u3051\u3067\u3001\u6B21\u306B\u4F55\u3092\u7DF4\u7FD2\u3059\u3079\u304D\u304B\u304C\u898B\u3048\u3066\u304D\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, [
      { nm: "\u7DCF\u5408\u8A55\u4FA1", d: "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u304B\u3089\u671F\u5F85\u3055\u308C\u308B\u30B9\u30B3\u30A2\u3068\u6BD4\u3079\u3066\u3001\u4ECA\u304C\u597D\u8ABF\u304B\u4E0D\u8ABF\u304B\u3092\u3072\u3068\u8A00\u3067\u3002" },
      { nm: "5\u8981\u7D20\u5206\u6790", d: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF0F\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\uFF0F\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\uFF0F\u30D1\u30C3\u30C8\uFF0F\u30D0\u30F3\u30AB\u30FC\u3092\u68D2\u30B0\u30E9\u30D5\u3068S\u301CD\u306E\u30B0\u30EC\u30FC\u30C9\u3067\u8868\u793A\u3002" },
      { nm: "\u6539\u5584\u8AB2\u984C\uFF08\u512A\u5148\u9806\uFF09", d: "\u7279\u306B\u5F31\u3044\u8981\u7D20\u3092\u6700\u59273\u3064\u3001\u512A\u5148\u9806\u4F4D\u3064\u304D\u3067\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u3002" },
      { nm: "\u6539\u5584\u30A2\u30C9\u30D0\u30A4\u30B9", d: "\u8AB2\u984C\u3054\u3068\u306B\u300C\u4F55\u3092\u3059\u308C\u3070\u3044\u3044\u304B\u300D\u3092\u5177\u4F53\u7684\u306B\u63D0\u6848\u3002" }
    ].map(({ nm, d }) => /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", gap: "10px", marginBottom: "10px", paddingBottom: "10px", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, nm), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.6 } }, d)))), /* @__PURE__ */ React.createElement("div", { style: M.tipBoxB }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#0ea5e9", marginBottom: "6px" } }, "5\u8981\u7D20\u306E\u7528\u8A9E"), [
      ["\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", "Par4/5\u306E\u6700\u521D\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u306F\u9664\u5916\uFF09"],
      ["\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", "100Y\u8D85\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u8D85\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09"],
      ["\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", "100Y\u4EE5\u5185\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u4EE5\u5185\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09"],
      ["\u30D1\u30C3\u30C8", "\u30B0\u30EA\u30FC\u30F3\u4E0A\u306E\u30D1\u30C3\u30C8\u6570\u3067\u8A55\u4FA1"],
      ["\u30D0\u30F3\u30AB\u30FC", "\u30D0\u30F3\u30AB\u30FC\u304B\u3089\u306E\u8131\u51FA\u30FB\u56DE\u907F\u3092\u8A55\u4FA1"]
    ].map(([term, desc]) => /* @__PURE__ */ React.createElement("div", { key: term, style: { marginBottom: "4px", lineHeight: 1.55 } }, /* @__PURE__ */ React.createElement("b", { style: { fontSize: "11px", color: "#1e293b" } }, term), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, "\uFF1A", desc)))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.55, marginTop: "8px" } }, "\u203B \u30B0\u30EC\u30FC\u30C9\u3084\u6539\u5584\u8AB2\u984C\u306F\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u3092\u57FA\u6E96\u306B\u5224\u5B9A\u3059\u308B\u306E\u3067\u3001\u30DE\u30A4\u30DA\u30FC\u30B8\u3067\u306E\u8A2D\u5B9A\u304C\u304A\u3059\u3059\u3081\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u306E\u8AAD\u307F\u65B9"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "3\u672C\u306E\u30E9\u30A4\u30F3\u3092\u6BD4\u3079\u3066\u5F31\u70B9\u3092\u898B\u3064\u3051\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u7DD1\uFF08\u7406\u60F3\xB10\uFF09\u30FB\u9EC4\uFF08\u76F4\u8FD15R\u5E73\u5747\uFF09\u30FB\u9752\uFF08\u76F4\u8FD120R\u5E73\u5747\uFF09\u306E3\u672C\u3002", /* @__PURE__ */ React.createElement("b", { style: { color: "#dc2626" } }, "\u4E2D\u5FC3\u306B\u8FD1\u3044\u8EF8\uFF1D\u82E6\u624B\u5206\u91CE"), "\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement(MockAnalytics, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u4F8B\u3002\u76F4\u8FD15R\uFF08\u9EC4\uFF09\u304C\u76F4\u8FD120R\u5E73\u5747\uFF08\u9752\uFF09\u3088\u308A\u5916\u5074\u306B\u51FA\u308C\u3070\u6700\u8FD1\u597D\u8ABF"), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: "6px" } }, [
      { c: "#16a34a", l: "\u7DD1\uFF08\u7406\u60F3\uFF09", d: "\u5168\u8981\u7D20 \xB10 \u306E\u30E9\u30A4\u30F3\u3002\u3053\u308C\u3088\u308A\u5916\u5074\uFF1D\u5E73\u5747\u3088\u308A\u4E0A\u3001\u5185\u5074\uFF1D\u5E73\u5747\u3088\u308A\u4E0B\u3002" },
      { c: "#fbbf24", l: "\u9EC4\uFF08\u76F4\u8FD15R\uFF09", d: "\u76F4\u8FD15\u30E9\u30A6\u30F3\u30C9\u306E\u5E73\u5747\u5024\u3002\u4ECA\u306E\u8ABF\u5B50\u3092\u8868\u3057\u307E\u3059\u3002" },
      { c: "#0ea5e9", l: "\u9752\uFF08\u76F4\u8FD120R\uFF09", d: "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9\u306E\u5E73\u5747\u5024\u3002\u3042\u306A\u305F\u306E\u5B9F\u529B\u306E\u57FA\u6E96\u7DDA\u3067\u3059\u3002" }
    ].map(({ c, l, d }) => /* @__PURE__ */ React.createElement("div", { key: l, style: { display: "flex", gap: "8px", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: c, minWidth: "72px" } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", flex: 1, lineHeight: 1.55 } }, d))))), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u5F31\u70B9 \u2192 \u7DF4\u7FD2\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u6700\u3082\u4F4E\u3044\u8981\u7D20\u300D\u3092\u96C6\u4E2D\u30BF\u30FC\u30B2\u30C3\u30C8\u306B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u3067\u4E00\u756A\u4E2D\u5FC3\u306B\u8FD1\u3044\u8981\u7D20\uFF1D\u3042\u306A\u305F\u306E\u30B9\u30B3\u30A2\u3092\u6700\u3082\u5F15\u304D\u4E0B\u3052\u3066\u3044\u308B\u5F31\u70B9\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" } }, [
      { lbl: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u304C\u5F31\u3044", nm: "\u30C9\u30E9\u30A4\u30D0\u30FC\u65B9\u5411\u6027", d: "OB\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u6700\u512A\u5148\u3002" },
      { lbl: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u304C\u5F31\u3044", nm: "\u4E2D\u30FB\u9577\u8DDD\u96E2\u30A2\u30A4\u30A2\u30F3", d: "150\u301C200Y\u306E\u7CBE\u5EA6\u3092\u78E8\u304F\u3002" },
      { lbl: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u304C\u5F31\u3044", nm: "\u30A2\u30D7\u30ED\u30FC\u30C1\u7DF4\u7FD2", d: "60Y\u4EE5\u5185\u3092\u96C6\u4E2D\u7684\u306B\u3002" },
      { lbl: "\u30D1\u30C3\u30C8\u304C\u5F31\u3044", nm: "\u30D1\u30BF\u30FC\u7DF4\u7FD2", d: "3\u30D1\u30C3\u30C8\u6E1B\u306F\u30B9\u30B3\u30A2\u306B\u76F4\u7D50\u3002" }
    ].map(({ lbl, nm, d }) => /* @__PURE__ */ React.createElement("div", { key: nm, style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#dc2626", marginBottom: "3px", fontWeight: "700" } }, lbl), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, nm), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.5 } }, d)))), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u306A\u3089\u3067\u306F\u306E\u5206\u6790"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u3069\u306E\u8DDD\u96E2\u3067\uFF0F\u3069\u306E\u30AF\u30E9\u30D6\u3067\u300D\u5931\u6557\u3057\u3066\u3044\u308B\u304B\u304C\u5206\u304B\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u4F8B\u3048\u3070\u300C150Y\u5E2F\u306E\u6210\u529F\u7387\u304C30%\u300D\u3068\u5206\u304B\u308C\u3070\u3001\u305D\u306E\u8DDD\u96E2\u3067\u306E\u7DF4\u7FD2\u304C\u6700\u512A\u5148\u3068\u5224\u65AD\u3067\u304D\u307E\u3059\u3002\u300C9I\u3088\u308A8I\u306E\u65B9\u304C\u6210\u529F\u7387\u304C\u9AD8\u3044\u300D\u3068\u5206\u304B\u308C\u3070\u3001\u8FF7\u3063\u305F\u3068\u304D\u306E\u5224\u65AD\u6750\u6599\u306B\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30DE\u30A4\u30DA\u30FC\u30B8\uFF08\u{1F464}\u30BF\u30D6\uFF09"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u30FB\u304A\u6C17\u306B\u5165\u308A\u30B3\u30FC\u30B9\u3092\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u4E0A\u90E8\u30CA\u30D3\u53F3\u7AEF\u306E\u{1F464}\u304B\u3089\u30DE\u30A4\u30DA\u30FC\u30B8\u3092\u958B\u3051\u307E\u3059\u3002", /* @__PURE__ */ React.createElement("b", null, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7"), "\uFF08\u624B\u52D5\u5165\u529B\u307E\u305F\u306F\u81EA\u52D5\u7B97\u51FA\u3092\u9078\u629E\uFF09\u3001\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3001\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\u3001", /* @__PURE__ */ React.createElement("b", null, "\u304A\u6C17\u306B\u5165\u308A\u30B4\u30EB\u30D5\u5834"), "\uFF08\u6700\u59275\u4EF6\u30FB\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u3067\u4E0A\u306B\u8868\u793A\uFF09\u3092\u767B\u9332\u3067\u304D\u307E\u3059\u3002\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u3092\u8A2D\u5B9A\u3059\u308B\u3068\u5206\u6790\u306E\u30B0\u30EC\u30FC\u30C9\u5224\u5B9A\u3084\u6539\u5584\u8AB2\u984C\u304C\u3088\u308A\u6B63\u78BA\u306B\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.tipBox }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#16a34a", marginBottom: "8px" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09\u3082\u81EA\u52D5\u8A08\u7B97\uFF01"), ["18H\u5B8C\u4E86\u30E9\u30A6\u30F3\u30C9\u304C3\u4EF6\u4EE5\u4E0A\u3067\u3001\u30DB\u30FC\u30E0\u753B\u9762\u306B\u53C2\u8003\u30CF\u30F3\u30C7\u30A3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002", "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9\u4E0A\u4F4D40%\u306E\u6210\u7E3E\u304B\u3089\u7B97\u51FA\uFF08\u516C\u5F0F\u3068\u306F\u7570\u306A\u308A\u307E\u3059\uFF09\u3002", "\u30E9\u30A6\u30F3\u30C9\u3092\u91CD\u306D\u308B\u307B\u3069\u7CBE\u5EA6\u30A2\u30C3\u30D7\u3002\u8A18\u9332\u3092\u7D9A\u3051\u308B\u3053\u3068\u304C\u4E00\u756A\u5927\u4E8B\uFF01"].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "10px", marginTop: "2px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t)))), /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(135deg,rgba(22,163,74,0.08),rgba(14,165,233,0.08))", border: "1px solid rgba(22,163,74,0.2)", borderRadius: "12px", padding: "20px", textAlign: "center", marginTop: "16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#1e293b", marginBottom: "6px" } }, "\u3055\u3042\u3001\u6B21\u306E\u30E9\u30A6\u30F3\u30C9\u304B\u3089\u8A18\u9332\u3092\u59CB\u3081\u3088\u3046\uFF01"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.7 } }, "\u30C7\u30FC\u30BF\u304C\u7A4D\u307F\u91CD\u306A\u308B\u307B\u3069\u3001\u6539\u5584\u30DD\u30A4\u30F3\u30C8\u304C\u30AF\u30EA\u30A2\u306B\u306A\u308A\u307E\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "\u30B9\u30B3\u30A2\u30AB\u30FC\u30C9\u3088\u308A\u6DF1\u3044\u300C\u81EA\u5206\u3060\u3051\u306E\u6210\u9577\u8A18\u9332\u300D\u3092\u4F5C\u308A\u307E\u3057\u3087\u3046\u3002")));
  })(), view === "profile" && profileEdit !== null && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30DE\u30A4\u30DA\u30FC\u30B8")), /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "14px" }) }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0"), /* @__PURE__ */ React.createElement(
    "input",
    {
      style: S.input,
      placeholder: "\u4F8B\uFF1A\u30BF\u30A4\u30AC\u30FC",
      value: profileEdit.nickname,
      maxLength: 20,
      onChange: (e) => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { nickname: e.target.value }))
    }
  )), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { bestScore: Math.max(54, (p.bestScore || 72) - 1) })),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\u2212"
  ), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "48px", textAlign: "center", fontSize: "22px", fontWeight: "800", color: "#fbbf24" } }, (_a = profileEdit.bestScore) != null ? _a : "\u2212"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { bestScore: Math.min(200, (p.bestScore || 71) + 1) })),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\uFF0B"
  ), profileEdit.bestScore && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { bestScore: null })),
      style: { padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "transparent", color: "#475569", cursor: "pointer", fontSize: "11px" }
    },
    "\u30AF\u30EA\u30A2"
  ))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u76EE\u6A19\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => {
        var _a2;
        return __spreadProps(__spreadValues({}, p), { targetHcp: Math.max(0, ((_a2 = p.targetHcp) != null ? _a2 : 20) - 1) });
      }),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\u2212"
  ), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "48px", textAlign: "center", fontSize: "22px", fontWeight: "800", color: "#0ea5e9" } }, (_b = profileEdit.targetHcp) != null ? _b : "\u2212"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => {
        var _a2;
        return __spreadProps(__spreadValues({}, p), { targetHcp: Math.min(54, ((_a2 = p.targetHcp) != null ? _a2 : 19) + 1) });
      }),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\uFF0B"
  ), profileEdit.targetHcp != null && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { targetHcp: null })),
      style: { padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "transparent", color: "#475569", cursor: "pointer", fontSize: "11px" }
    },
    "\u30AF\u30EA\u30A2"
  ))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7"), handicap && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "8px" } }, "\u5206\u6790\u306B\u4F7F\u7528\u3059\u308B\u5024\u3092\u9078\u629E"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [
    { key: "auto", label: "\u81EA\u52D5\u7B97\u51FA", desc: `${handicap.hcp}\uFF08${handicap.roundCount}R\uFF09` },
    { key: "manual", label: "\u270F\uFE0F \u624B\u5165\u529B", desc: profileEdit.manualHcp != null ? String(profileEdit.manualHcp) : "\u672A\u8A2D\u5B9A" }
  ].map(({ key, label, desc }) => {
    var _a2;
    const active = ((_a2 = profileEdit.hcpMode) != null ? _a2 : "auto") === key;
    return /* @__PURE__ */ React.createElement(
      "button",
      {
        key,
        onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { hcpMode: key })),
        style: {
          flex: 1,
          padding: "10px 6px",
          borderRadius: "10px",
          cursor: "pointer",
          textAlign: "center",
          border: active ? "2px solid #f59e0b" : "1px solid #e2e8f0",
          background: active ? "rgba(245,158,11,0.08)" : "#f8fafc",
          transition: "all 0.15s"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "700", color: active ? "#d97706" : "#64748b", marginBottom: "2px" } }, label),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: active ? "#f59e0b" : "#94a3b8" } }, desc)
    );
  })), ((_c = profileEdit.hcpMode) != null ? _c : "auto") === "auto" ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#16a34a", marginTop: "6px" } }, "\u2713 \u904E\u53BB\u30E9\u30A6\u30F3\u30C9(", handicap.roundCount, "\u4EF6)\u304B\u3089\u81EA\u52D5\u7B97\u51FA\u3057\u305F ", /* @__PURE__ */ React.createElement("b", null, handicap.hcp), " \u3092\u5206\u6790\u306B\u4F7F\u7528") : /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#d97706", marginTop: "6px" } }, "\u2713 \u4E0B\u8A18\u3067\u8A2D\u5B9A\u3059\u308B\u624B\u5165\u529B\u5024\u3092\u5206\u6790\u306B\u4F7F\u7528")), /* @__PURE__ */ React.createElement("div", { style: { opacity: handicap && ((_d = profileEdit.hcpMode) != null ? _d : "auto") === "auto" ? 0.45 : 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "8px" } }, handicap ? "\u624B\u5165\u529B\u5024\uFF08\u30E2\u30FC\u30C9\u3092\u300C\u624B\u5165\u529B\u300D\u306B\u3059\u308B\u3068\u5206\u6790\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\uFF09" : "\u30E9\u30A6\u30F3\u30C93\u4EF6\u672A\u6E80\u306E\u5834\u5408\u306B\u5206\u6790\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => {
        var _a2;
        return __spreadProps(__spreadValues({}, p), { manualHcp: Math.max(0, ((_a2 = p.manualHcp) != null ? _a2 : 20) - 1) });
      }),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\u2212"
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "60px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "22px", fontWeight: "800", color: "#f59e0b" } }, (_e = profileEdit.manualHcp) != null ? _e : "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8" } }, "\u624B\u5165\u529B")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => {
        var _a2;
        return __spreadProps(__spreadValues({}, p), { manualHcp: Math.min(54, ((_a2 = p.manualHcp) != null ? _a2 : 19) + 1) });
      }),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\uFF0B"
  ), profileEdit.manualHcp != null && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { manualHcp: null })),
      style: { padding: "4px 10px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "transparent", color: "#475569", cursor: "pointer", fontSize: "11px" }
    },
    "\u30AF\u30EA\u30A2"
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u304A\u6C17\u306B\u5165\u308A\u30B4\u30EB\u30D5\u5834\uFF08\u6700\u59275\u4EF6\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "10px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u306E\u300C\u304A\u6C17\u306B\u5165\u308A\u300D\u30BF\u30D6\u306B\u8868\u793A\u3055\u308C\u307E\u3059"), (profileEdit.favoriteVenues || []).length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "12px", borderRadius: "10px", border: "1px dashed #e2e8f0", textAlign: "center", color: "#94a3b8", fontSize: "12px" } }, "\u672A\u767B\u9332\u3067\u3059") : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" } }, (profileEdit.favoriteVenues || []).map((vid, idx) => {
    const v = VENUES.find((x) => x.id === vid);
    if (!v) return null;
    return /* @__PURE__ */ React.createElement("div", { key: vid, style: { display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "9px", background: "#f8fafc", border: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#f59e0b", minWidth: "16px" } }, "\u2605"), /* @__PURE__ */ React.createElement("span", { style: { flex: 1, fontSize: "13px", color: "#1e293b", fontWeight: "500" } }, v.name), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, idx > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const arr = [...profileEdit.favoriteVenues || []];
      [arr[idx - 1], arr[idx]] = [arr[idx], arr[idx - 1]];
      setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { favoriteVenues: arr }));
    }, style: { padding: "3px 8px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#64748b", cursor: "pointer", fontSize: "12px" } }, "\u2191"), idx < (profileEdit.favoriteVenues || []).length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => {
      const arr = [...profileEdit.favoriteVenues || []];
      [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
      setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { favoriteVenues: arr }));
    }, style: { padding: "3px 8px", borderRadius: "6px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#64748b", cursor: "pointer", fontSize: "12px" } }, "\u2193"), /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { favoriteVenues: (p.favoriteVenues || []).filter((x) => x !== vid) })),
        style: { padding: "3px 8px", borderRadius: "6px", border: "1px solid rgba(220,38,38,0.25)", background: "rgba(220,38,38,0.05)", color: "#dc2626", cursor: "pointer", fontSize: "12px", fontWeight: "700" }
      },
      "\u2715"
    )));
  })), (profileEdit.favoriteVenues || []).length < 5 && (() => {
    const venueRow = (v) => {
      if (/^[A-Za-z0-9]/.test(v.name)) return 10;
      const norm = {
        \u30AC: "\u30AB",
        \u30AE: "\u30AD",
        \u30B0: "\u30AF",
        \u30B2: "\u30B1",
        \u30B4: "\u30B3",
        \u30B6: "\u30B5",
        \u30B8: "\u30B7",
        \u30BA: "\u30B9",
        \u30BC: "\u30BB",
        \u30BE: "\u30BD",
        \u30C0: "\u30BF",
        \u30C2: "\u30C1",
        \u30C5: "\u30C4",
        \u30C7: "\u30C6",
        \u30C9: "\u30C8",
        \u30D0: "\u30CF",
        \u30D3: "\u30D2",
        \u30D6: "\u30D5",
        \u30D9: "\u30D8",
        \u30DC: "\u30DB",
        \u30D1: "\u30CF",
        \u30D4: "\u30D2",
        \u30D7: "\u30D5",
        \u30DA: "\u30D8",
        \u30DD: "\u30DB",
        \u30A1: "\u30A2",
        \u30A3: "\u30A4",
        \u30A5: "\u30A6",
        \u30A7: "\u30A8",
        \u30A9: "\u30AA",
        \u30F4: "\u30A6",
        \u30F5: "\u30AB",
        \u30F6: "\u30B1",
        \u30C3: "\u30C4",
        \u30E3: "\u30E4",
        \u30E5: "\u30E6",
        \u30E7: "\u30E8",
        \u30EE: "\u30EF"
      };
      const map = {
        \u30A2: 0,
        \u30A4: 0,
        \u30A6: 0,
        \u30A8: 0,
        \u30AA: 0,
        \u30AB: 1,
        \u30AD: 1,
        \u30AF: 1,
        \u30B1: 1,
        \u30B3: 1,
        \u30B5: 2,
        \u30B7: 2,
        \u30B9: 2,
        \u30BB: 2,
        \u30BD: 2,
        \u30BF: 3,
        \u30C1: 3,
        \u30C4: 3,
        \u30C6: 3,
        \u30C8: 3,
        \u30CA: 4,
        \u30CB: 4,
        \u30CC: 4,
        \u30CD: 4,
        \u30CE: 4,
        \u30CF: 5,
        \u30D2: 5,
        \u30D5: 5,
        \u30D8: 5,
        \u30DB: 5,
        \u30DE: 6,
        \u30DF: 6,
        \u30E0: 6,
        \u30E1: 6,
        \u30E2: 6,
        \u30E4: 7,
        \u30E6: 7,
        \u30E8: 7,
        \u30E9: 8,
        \u30EA: 8,
        \u30EB: 8,
        \u30EC: 8,
        \u30ED: 8,
        \u30EF: 9,
        \u30F2: 9,
        \u30F3: 9
      };
      const c = norm[v.reading[0]] || v.reading[0];
      return map[c] !== void 0 ? map[c] : 10;
    };
    const sorted = [...VENUES].filter((v) => !(profileEdit.favoriteVenues || []).includes(v.id)).sort((a, b) => {
      const ra = venueRow(a), rb = venueRow(b);
      if (ra !== rb) return ra - rb;
      return ra === 10 ? a.name.localeCompare(b.name) : a.reading.localeCompare(b.reading);
    });
    return /* @__PURE__ */ React.createElement("div", { style: { maxHeight: "180px", overflowY: "auto", WebkitOverflowScrolling: "touch", border: "1px solid #e2e8f0", borderRadius: "10px", background: "#ffffff" } }, sorted.map((v, i) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: v.id,
        onClick: () => setProfileEdit((p) => __spreadProps(__spreadValues({}, p), { favoriteVenues: [...p.favoriteVenues || [], v.id] })),
        style: {
          width: "100%",
          textAlign: "left",
          padding: "9px 12px",
          background: "transparent",
          border: "none",
          borderBottom: i < sorted.length - 1 ? "1px solid #f1f5f9" : "none",
          cursor: "pointer",
          fontSize: "13px",
          color: "#1e293b",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          WebkitTapHighlightColor: "transparent"
        }
      },
      /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "13px", fontWeight: "700" } }, "\uFF0B"),
      v.name
    )));
  })())), /* @__PURE__ */ React.createElement("div", { style: { height: "76px" } }), /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "480px",
    boxSizing: "border-box",
    background: "#ffffff",
    borderTop: "1px solid #e2e8f0",
    padding: "12px 16px calc(12px + env(safe-area-inset-bottom))",
    boxShadow: "0 -2px 10px rgba(0,0,0,0.08)",
    zIndex: 90
  } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "14px", fontSize: "14px" }),
      onClick: () => {
        saveProfile(profileEdit);
        showToast("\u30DE\u30A4\u30DA\u30FC\u30B8\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\uFF01");
        setView("home");
      }
    },
    "\u2705 \u4FDD\u5B58\u3059\u308B"
  ))), showShotForm && currentCatDef && (() => {
    const teeVenue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
    const teeAllH = teeVenue ? getRoundHoles(currentRound) : [];
    const teeHInfo = teeAllH[currentHole - 1];
    const teeAutoY = teeVenue && teeHInfo ? teeVenue.getYardage(teeHInfo, currentRound.green, currentRound.tee) : null;
    const teeDisplayY = teeDistOverride != null ? teeDistOverride : teeAutoY;
    const approachMax = teeAutoY != null ? teeAutoY : 300;
    const clubSet = savedClubs.length > 0 ? savedClubs : null;
    const filteredClubs = CLUB_MASTER.filter((c) => {
      if (currentCategory === "putt") return false;
      return !clubSet || clubSet.includes(c.id);
    });
    const badSubOpts = BAD_SUB_OPTIONS[currentCategory] || BAD_SUB_OPTIONS.approach;
    return /* @__PURE__ */ React.createElement("div", { style: S.modal, onClick: (e) => {
      if (e.target !== e.currentTarget) return;
      if (!calcOpen) setShowShotForm(false);
    } }, /* @__PURE__ */ React.createElement("style", null, SLIDER_CSS), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, S.modalBox), {
      padding: 0,
      display: "flex",
      flexDirection: "column",
      maxHeight: "calc(100vh - 60px)",
      overflowY: "hidden"
    }) }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px 10px", borderBottom: "1px solid #e2e8f0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontWeight: "800", fontSize: "15px", margin: 0 } }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB\uFF08Par", par, "\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, (() => {
      const ep = hd.extraPenalty || 0;
      return /* @__PURE__ */ React.createElement(
        "button",
        {
          style: {
            border: "none",
            borderRadius: "8px",
            padding: "5px 8px",
            fontSize: "11px",
            fontWeight: "700",
            cursor: "pointer",
            whiteSpace: "nowrap",
            background: ep > 0 ? "#b91c1c" : "#fee2e2",
            color: ep > 0 ? "#ffffff" : "#b91c1c"
          },
          onClick: () => {
            setExtraPenaltyDraft(hd.extraPenalty || 0);
            setShowExtraPenaltyModal(true);
          },
          title: "\u305D\u306E\u4ED6\u30DA\u30CA\u30EB\u30C6\u30A3\u3092\u52A0\u7B97"
        },
        "\u26A0\uFE0F ",
        ep > 0 ? `+${ep}` : "+\u30DA\u30CA"
      );
    })(), hd.shots.length === 0 ? /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => setShowShotForm(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB") : /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => {
      undoLastShot();
      setShotNote("");
    } }, "\u623B\u308B"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#fbbf24", fontWeight: "600" } }, totalStrokes + 1, "\u6253\u76EE \u2014 ", currentCatDef.label)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "12px 16px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u6B8B\u308A\u8DDD\u96E2 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), currentCategory === "tee" ? (
      /* ティ：電卓入力（自動取得＋上書き可） */
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: () => {
            if (!calcOpen) {
              setCalcInput("");
              setCalcOpen(true);
            }
          },
          style: {
            background: calcOpen ? "rgba(96,165,250,0.15)" : "rgba(96,165,250,0.08)",
            border: calcOpen ? "1px solid rgba(96,165,250,0.6)" : "1px solid rgba(96,165,250,0.25)",
            borderRadius: "10px",
            padding: "10px 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: calcOpen ? "default" : "pointer",
            marginBottom: calcOpen ? "10px" : 0,
            transition: "all .15s"
          }
        },
        /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", fontWeight: "600", marginBottom: "1px" } }, calcOpen ? "\u5165\u529B \u2192 \u2713\u78BA\u5B9A / \u2715\u30AD\u30E3\u30F3\u30BB\u30EB" : teeDistOverride ? "\u624B\u52D5\u5165\u529B\u6E08\u307F \u270F\uFE0F" : "\u81EA\u52D5\u53D6\u5F97 \u270F\uFE0F \u30BF\u30C3\u30D7\u3067\u4FEE\u6B63"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "24px", fontWeight: "800", color: "#60a5fa" } }, calcOpen ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { opacity: calcInput ? 1 : 0.35 } }, calcInput || "0"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#93c5fd" } }, " Y")) : /* @__PURE__ */ React.createElement(React.Fragment, null, teeDisplayY != null ? teeDisplayY : "\u2212", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#93c5fd" } }, teeDisplayY ? " Y" : "")))),
        !calcOpen && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "16px", opacity: 0.35 } }, "\u270F\uFE0F")
      ), calcOpen && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "6px" } }, ["7", "8", "9", "\u232B", "4", "5", "6", "C", "1", "2", "3", "", "\u2715", "0", "", "\u2713"].map((k, i) => {
        const empty = k === "", confirm = k === "\u2713", cancel = k === "\u2715", del = k === "\u232B" || k === "C";
        const press = () => {
          if (k === "C") {
            setCalcInput("");
            return;
          }
          if (k === "\u232B") {
            setCalcInput((p) => p.slice(0, -1));
            return;
          }
          if (k === "\u2713") {
            const n = parseInt(calcInput || "0", 10);
            if (n > 0) setTeeDistOverride(n);
            setCalcOpen(false);
            return;
          }
          if (k === "\u2715") {
            setCalcInput("");
            setCalcOpen(false);
            return;
          }
          if (calcInput.length >= 4) return;
          setCalcInput((p) => p + k);
        };
        return /* @__PURE__ */ React.createElement("button", { key: i, disabled: empty, onClick: press, style: {
          padding: "13px 0",
          borderRadius: "8px",
          border: "none",
          fontSize: "15px",
          fontWeight: "800",
          cursor: empty ? "default" : "pointer",
          visibility: empty ? "hidden" : "visible",
          background: empty ? "transparent" : confirm ? "rgba(52,211,153,0.25)" : cancel ? "rgba(148,163,184,0.12)" : del ? "rgba(239,68,68,0.12)" : "rgba(96,165,250,0.1)",
          color: empty ? "transparent" : confirm ? "#34d399" : cancel ? "#64748b" : del ? "#f87171" : "#93c5fd"
        } }, k);
      })))
    ) : currentCategory === "approach" ? (
      /* アプローチ：スライダー 1〜ホール総距離Y */
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "10px", padding: "8px 22px", fontSize: "26px", fontWeight: "800", color: "#60a5fa", minWidth: "110px", textAlign: "center" } }, approachDistVal, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", marginLeft: "3px", color: "#93c5fd" } }, "Y"))), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "range",
          className: "golf-slider",
          min: 5,
          max: approachMax,
          step: 5,
          value: approachDistVal,
          onChange: (e) => setApproachDistVal(Number(e.target.value)),
          style: { background: sliderBg(approachDistVal, 5, approachMax) }
        }
      ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "3px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#334155", fontWeight: "600" } }, "5Y"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#334155", fontWeight: "600" } }, approachMax, "Y")))
    ) : (
      /* パット：スライダー 1〜30m */
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "10px", padding: "8px 22px", fontSize: "26px", fontWeight: "800", color: "#60a5fa", minWidth: "110px", textAlign: "center" } }, puttDistVal, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", marginLeft: "3px", color: "#93c5fd" } }, "m"))), /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "range",
          className: "golf-slider",
          min: 1,
          max: 30,
          step: 1,
          value: puttDistVal,
          onChange: (e) => setPuttDistVal(Number(e.target.value)),
          style: { background: sliderBg(puttDistVal, 1, 30) }
        }
      ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: "3px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#334155", fontWeight: "600" } }, "1m"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#334155", fontWeight: "600" } }, "30m")))
    )), currentCategory !== "putt" && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u4F7F\u7528\u30AF\u30E9\u30D6 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" } }, filteredClubs.map((c) => {
      const sel = selectedClub === c.id;
      return /* @__PURE__ */ React.createElement("button", { key: c.id, onClick: () => setSelectedClub(sel ? null : c.id), style: {
        padding: "9px 13px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "800",
        border: sel ? "1px solid rgba(96,165,250,0.7)" : "1px solid rgba(96,165,250,0.2)",
        background: sel ? "rgba(96,165,250,0.22)" : "rgba(96,165,250,0.05)",
        color: sel ? "#60a5fa" : "#93c5fd",
        transition: "all .12s",
        boxShadow: sel ? "0 0 0 2px rgba(96,165,250,0.18)" : "none"
      } }, c.label);
    }), /* @__PURE__ */ React.createElement("button", { onClick: () => setSelectedClub(selectedClub === "none" ? null : "none"), style: {
      padding: "9px 13px",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "11px",
      fontWeight: "700",
      border: selectedClub === "none" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.07)",
      background: selectedClub === "none" ? "rgba(255,255,255,0.08)" : "transparent",
      color: selectedClub === "none" ? "#94a3b8" : "#334155",
      transition: "all .12s"
    } }, "\u30AF\u30E9\u30D6\u306A\u3057"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u7D50\u679C ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), newResultId === "bad" && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px", background: "rgba(148,163,184,0.05)", border: "1px solid rgba(148,163,184,0.14)", borderRadius: "10px", padding: "10px", animation: "sfadeDown .15s ease" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", fontWeight: "700", marginBottom: "7px" } }, "\u25B6 \u30DF\u30B9\u306E\u7A2E\u985E"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px" } }, badSubOpts.map((b) => {
      const c = COLOR_MAP[b.color] || COLOR_MAP.gray;
      const sel = newBadSubId === b.id;
      const totalPen = b.shotCount + b.penaltyCount;
      return /* @__PURE__ */ React.createElement("button", { key: b.id, onClick: () => setNewBadSubId(sel ? null : b.id), style: {
        flex: 1,
        padding: "10px 4px",
        borderRadius: "8px",
        cursor: "pointer",
        border: `1px solid ${c.border}`,
        background: sel ? c.bg : "transparent",
        color: c.text,
        fontSize: "12px",
        fontWeight: "800",
        opacity: sel ? 1 : 0.55,
        transition: "all .12s"
      } }, /* @__PURE__ */ React.createElement("div", null, b.label), b.penaltyCount > 0 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", marginTop: "2px", opacity: 0.8 } }, "+", b.penaltyCount, "\u7F70\u30FB\u8A08", totalPen, "\u6253"));
    }))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" } }, currentCatDef.options.map((o) => {
      const c = COLOR_MAP[o.color] || COLOR_MAP.gray;
      const sel = newResultId === o.id;
      return /* @__PURE__ */ React.createElement("button", { key: o.id, onClick: () => {
        if (newResultId === o.id) {
          setNewResultId(null);
          setNewBadSubId(null);
        } else {
          setNewResultId(o.id);
          if (o.id !== "bad") setNewBadSubId(null);
        }
      }, style: {
        flex: currentCategory === "putt" ? "1 1 calc(33% - 5px)" : "1 1 auto",
        padding: "11px 14px",
        borderRadius: "9px",
        cursor: "pointer",
        fontSize: "13px",
        fontWeight: "800",
        border: `1px solid ${c.border}`,
        background: sel ? c.bg : "transparent",
        color: c.text,
        opacity: sel ? 1 : 0.5,
        transition: "all .12s",
        boxShadow: sel ? `0 0 0 2px ${c.bg}` : "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3px"
      } }, sel && "\u2713 ", o.label);
    }))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u30E1\u30E2\uFF08\u4EFB\u610F\uFF09"), /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "\u4F8B\uFF1A\u5DE6\u306B\u5F15\u3063\u639B\u3051\u305F...", value: shotNote, onChange: (e) => setShotNote(e.target.value) }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
      "button",
      {
        disabled: !canRecordNew,
        onClick: handleRecordNew,
        style: {
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          cursor: canRecordNew ? "pointer" : "not-allowed",
          fontSize: "14px",
          fontWeight: "800",
          background: canRecordNew ? "linear-gradient(135deg,rgba(52,211,153,.85),rgba(16,185,129,.85))" : "rgba(255,255,255,0.04)",
          color: canRecordNew ? "#fff" : "#334155",
          transition: "all .2s",
          boxShadow: canRecordNew ? "0 4px 18px rgba(52,211,153,0.25)" : "none"
        }
      },
      "\u8A18\u9332\u3059\u308B"
    ))));
  })(), showPinDistStep && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 500, padding: "0 0 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "20px 20px 16px 16px", padding: "20px 18px 24px", width: "100%", maxWidth: "420px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "15px", fontWeight: "800", color: "#1e293b" } }, "\u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#475569", marginTop: "2px" } }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB")), /* @__PURE__ */ React.createElement(
    "button",
    {
      style: { padding: "5px 12px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "transparent", color: "#475569", fontSize: "12px", fontWeight: "700", cursor: "pointer" },
      onClick: () => savePinDistAndAdvance(null)
    },
    "\u30B9\u30AD\u30C3\u30D7"
  )), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" } }, PIN_DIST_OPTIONS.map((opt) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: opt.id,
      onClick: () => savePinDistAndAdvance(opt.label),
      style: {
        padding: "14px 8px",
        borderRadius: "10px",
        cursor: "pointer",
        border: "1px solid rgba(96,165,250,0.3)",
        background: "rgba(96,165,250,0.08)",
        color: "#93c5fd",
        fontSize: "14px",
        fontWeight: "800",
        textAlign: "center"
      }
    },
    opt.label
  ))))), showExportModal && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 600, padding: "16px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "16px", padding: "20px", width: "100%", maxWidth: "420px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "15px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u30C7\u30FC\u30BF\u66F8\u304D\u51FA\u3057\uFF08", rounds.length, "\u4EF6\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#16a34a", fontWeight: "700", marginBottom: "8px" } }, "\u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3092\u30BF\u30C3\u30D7 \u2192 \u5168\u9078\u629E\u3055\u308C\u307E\u3059 \u2192 \u30B3\u30D4\u30FC\uFF08Ctrl+C / \u2318C\uFF09"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      readOnly: true,
      value: exportJson,
      onClick: (e) => e.target.select(),
      onFocus: (e) => e.target.select(),
      style: { width: "100%", height: "140px", background: "rgba(0,0,0,0.5)", border: "2px solid rgba(96,165,250,0.4)", borderRadius: "8px", color: "#93c5fd", fontSize: "10px", padding: "8px", resize: "none", boxSizing: "border-box", fontFamily: "monospace", cursor: "text" }
    }
  ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => {
    setShowExportModal(false);
    setExportJson("");
  }, style: { padding: "10px 20px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#94a3b8", fontWeight: "700", fontSize: "13px", cursor: "pointer" } }, "\u9589\u3058\u308B")))), toast.visible && /* @__PURE__ */ React.createElement("div", { style: {
    position: "fixed",
    top: "68px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(9,18,31,0.96)",
    border: "1px solid rgba(52,211,153,0.45)",
    borderRadius: "14px",
    padding: "13px 28px",
    zIndex: 9999,
    color: "#16a34a",
    fontWeight: "800",
    fontSize: "17px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.45), 0 0 0 1px rgba(52,211,153,0.12)",
    backdropFilter: "blur(14px)",
    textAlign: "center",
    whiteSpace: "nowrap",
    letterSpacing: "0.03em",
    transition: "opacity 0.3s ease",
    pointerEvents: "none"
  } }, toast.message));
}
window.GolfTracker = GolfTracker;
if (typeof window !== "undefined" && typeof document !== "undefined") {
  const __scrxRoot = document.getElementById("root");
  if (__scrxRoot && !window.__SCRX_MOUNTED) {
    window.__SCRX_MOUNTED = true;
    ReactDOM.createRoot(__scrxRoot).render(React.createElement(GolfTracker));
  }
}
