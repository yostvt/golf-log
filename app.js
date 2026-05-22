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
const CLUB_MASTER = [
  // ウッド
  { id: "1W", label: "1W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "2W", label: "2W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "3W", label: "3W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "4W", label: "4W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "5W", label: "5W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "6W", label: "6W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "7W", label: "7W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "8W", label: "8W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "9W", label: "9W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "10W", label: "10W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  { id: "11W", label: "11W", category: "\u30A6\u30C3\u30C9", icon: "\u{1FAB5}" },
  // ユーティリティ
  { id: "U1", label: "U1", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U2", label: "U2", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U3", label: "U3", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U4", label: "U4", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U5", label: "U5", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U6", label: "U6", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U7", label: "U7", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U8", label: "U8", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  { id: "U9", label: "U9", category: "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", icon: "\u{1F527}" },
  // アイアン
  { id: "1I", label: "1I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "2I", label: "2I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "3I", label: "3I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "4I", label: "4I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "5I", label: "5I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "6I", label: "6I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "7I", label: "7I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "8I", label: "8I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "9I", label: "9I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  { id: "10I", label: "10I", category: "\u30A2\u30A4\u30A2\u30F3", icon: "\u2699\uFE0F" },
  // ウェッジ
  { id: "PW", label: "PW", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W46", label: "46\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W48", label: "48\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W50", label: "50\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W52", label: "52\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W54", label: "54\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W56", label: "56\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W58", label: "58\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W60", label: "60\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W62", label: "62\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  { id: "W64", label: "64\xB0", category: "\u30A6\u30A7\u30C3\u30B8", icon: "\u{1F3AF}" },
  // パター
  { id: "PT", label: "PT", category: "\u30D1\u30BF\u30FC", icon: "\u26F3" }
];
const CLUB_CATEGORIES = ["\u30A6\u30C3\u30C9", "\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3", "\u30A2\u30A4\u30A2\u30F3", "\u30A6\u30A7\u30C3\u30B8", "\u30D1\u30BF\u30FC"];
const CATEGORIES = {
  // ── ティショット（全Par共通） ─────────────────────────────────────────────
  tee: {
    label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8",
    icon: "\u{1F3CC}\uFE0F",
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
    icon: "\u{1F3AF}",
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
    icon: "\u26F3",
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
  if (state === "approach") return "approach";
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
const CAT_ANALYTICS_LABEL = {
  tee: { label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", icon: "\u{1F3CC}\uFE0F" },
  approach: { label: "\u30A2\u30D7\u30ED\u30FC\u30C1", icon: "\u{1F3AF}" },
  putt: { label: "\u30D1\u30C3\u30C8", icon: "\u26F3" }
};
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
const SOBU_SOBU_COURSE = {
  name: "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9",
  courses: [
    {
      name: "\u6771\u30B3\u30FC\u30B9",
      holes: [
        { hole: 1, par: 5, hdcp: 15, back: 509, reg: 486, ladies: 439 },
        { hole: 2, par: 4, hdcp: 9, back: 383, reg: 347, ladies: 291 },
        { hole: 3, par: 3, hdcp: 3, back: 192, reg: 167, ladies: 154 },
        { hole: 4, par: 4, hdcp: 7, back: 394, reg: 371, ladies: 361 },
        { hole: 5, par: 4, hdcp: 1, back: 435, reg: 374, ladies: 319 },
        { hole: 6, par: 3, hdcp: 13, back: 174, reg: 163, ladies: 151 },
        { hole: 7, par: 4, hdcp: 11, back: 439, reg: 421, ladies: 313 },
        { hole: 8, par: 5, hdcp: 5, back: 551, reg: 505, ladies: 444 },
        { hole: 9, par: 4, hdcp: 17, back: 373, reg: 368, ladies: 348 }
      ]
    },
    {
      name: "\u4E2D\u30B3\u30FC\u30B9",
      holes: [
        { hole: 10, par: 5, hdcp: 10, back: 489, reg: 465, ladies: 425 },
        { hole: 11, par: 4, hdcp: 16, back: 387, reg: 367, ladies: 328 },
        { hole: 12, par: 4, hdcp: 4, back: 420, reg: 390, ladies: 315 },
        { hole: 13, par: 3, hdcp: 14, back: 196, reg: 171, ladies: 152 },
        { hole: 14, par: 4, hdcp: 2, back: 410, reg: 388, ladies: 309 },
        { hole: 15, par: 4, hdcp: 8, back: 380, reg: 351, ladies: 337 },
        { hole: 16, par: 3, hdcp: 18, back: 159, reg: 154, ladies: 145 },
        { hole: 17, par: 5, hdcp: 6, back: 564, reg: 508, ladies: 445 },
        { hole: 18, par: 4, hdcp: 12, back: 363, reg: 350, ladies: 338 }
      ]
    },
    {
      name: "\u897F\u30B3\u30FC\u30B9",
      holes: [
        { hole: 1, par: 5, hdcp: 5, back: 502, reg: 482, ladies: 438 },
        { hole: 2, par: 4, hdcp: 8, back: 373, reg: 340, ladies: 316 },
        { hole: 3, par: 4, hdcp: 2, back: 432, reg: 411, ladies: 350 },
        { hole: 4, par: 3, hdcp: 7, back: 161, reg: 152, ladies: 132 },
        { hole: 5, par: 4, hdcp: 4, back: 338, reg: 316, ladies: 293 },
        { hole: 6, par: 4, hdcp: 1, back: 407, reg: 381, ladies: 288 },
        { hole: 7, par: 3, hdcp: 9, back: 173, reg: 153, ladies: 132 },
        { hole: 8, par: 4, hdcp: 6, back: 391, reg: 371, ladies: 281 },
        { hole: 9, par: 5, hdcp: 3, back: 537, reg: 496, ladies: 471 }
      ]
    }
  ]
};
const SOBU_INBA_COURSE = {
  name: "\u7DCF\u6B66CC \u5370\u65DB\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 5, hdcp: 15, back: 493, reg: 473, ladies: 402 },
    { hole: 2, par: 4, hdcp: 9, back: 383, reg: 350, ladies: 317 },
    { hole: 3, par: 4, hdcp: 13, back: 370, reg: 328, ladies: 287 },
    { hole: 4, par: 3, hdcp: 17, back: 170, reg: 140, ladies: 132 },
    { hole: 5, par: 5, hdcp: 3, back: 513, reg: 480, ladies: 419 },
    { hole: 6, par: 3, hdcp: 7, back: 202, reg: 160, ladies: 130 },
    { hole: 7, par: 4, hdcp: 5, back: 420, reg: 383, ladies: 347 },
    { hole: 8, par: 4, hdcp: 1, back: 452, reg: 409, ladies: 340 },
    { hole: 9, par: 4, hdcp: 11, back: 377, reg: 318, ladies: 259 },
    { hole: 10, par: 5, hdcp: 14, back: 498, reg: 478, ladies: 412 },
    { hole: 11, par: 4, hdcp: 18, back: 382, reg: 355, ladies: 313 },
    { hole: 12, par: 4, hdcp: 8, back: 427, reg: 390, ladies: 314 },
    { hole: 13, par: 5, hdcp: 2, back: 506, reg: 474, ladies: 410 },
    { hole: 14, par: 3, hdcp: 6, back: 183, reg: 166, ladies: 133 },
    { hole: 15, par: 4, hdcp: 4, back: 416, reg: 375, ladies: 317 },
    { hole: 16, par: 4, hdcp: 16, back: 354, reg: 312, ladies: 301 },
    { hole: 17, par: 3, hdcp: 12, back: 167, reg: 131, ladies: 100 },
    { hole: 18, par: 4, hdcp: 10, back: 420, reg: 399, ladies: 344 }
  ]
};
const SOBU_KITA_COURSE = {
  name: "\u7DCF\u6B66CC \u5317\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 4, hdcp: 9, back: 303, reg: 273, ladies: 278 },
    { hole: 2, par: 4, hdcp: 5, back: 367, reg: 348, ladies: 208 },
    { hole: 3, par: 4, hdcp: 6, back: 339, reg: 317, ladies: 282 },
    { hole: 4, par: 3, hdcp: 4, back: 188, reg: 166, ladies: 166 },
    { hole: 5, par: 5, hdcp: 3, back: 552, reg: 464, ladies: 390 },
    { hole: 6, par: 4, hdcp: 1, back: 394, reg: 373, ladies: 233 },
    { hole: 7, par: 3, hdcp: 8, back: 144, reg: 120, ladies: 120 },
    { hole: 8, par: 4, hdcp: 2, back: 384, reg: 370, ladies: 309 },
    { hole: 9, par: 4, hdcp: 7, back: 328, reg: 324, ladies: 244 }
  ]
};
const NAKAYAMA_COURSE = {
  name: "\u4E2D\u5C71\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    // OUT (1-9)
    { hole: 1, par: 5, hdcp: 5, bent: { back: 524, reg: 504, gold: 465, ladies: 465 }, korai: { back: 516, reg: 496, ladies: 457 } },
    { hole: 2, par: 4, hdcp: 2, bent: { back: 396, reg: 377, gold: 365, ladies: 272 }, korai: { back: 406, reg: 387, ladies: 374 } },
    { hole: 3, par: 4, hdcp: 8, bent: { back: 396, reg: 372, gold: 355, ladies: 310 }, korai: { back: 401, reg: 377, ladies: 363 } },
    { hole: 4, par: 4, hdcp: 1, bent: { back: 401, reg: 360, gold: 341, ladies: 341 }, korai: { back: 418, reg: 377, ladies: 358 } },
    { hole: 5, par: 3, hdcp: 7, bent: { back: 166, reg: 147, gold: 110, ladies: 82 }, korai: { back: 197, reg: 178, ladies: 151 } },
    { hole: 6, par: 5, hdcp: 4, bent: { back: 519, reg: 479, gold: 461, ladies: 461 }, korai: { back: 522, reg: 482, ladies: 464 } },
    { hole: 7, par: 3, hdcp: 3, bent: { back: 166, reg: 153, gold: 130, ladies: 130 }, korai: { back: 198, reg: 185, ladies: 162 } },
    { hole: 8, par: 4, hdcp: 9, bent: { back: 381, reg: 357, gold: 349, ladies: 349 }, korai: { back: 385, reg: 361, ladies: 353 } },
    { hole: 9, par: 4, hdcp: 6, bent: { back: 362, reg: 332, gold: 320, ladies: 320 }, korai: { back: 383, reg: 353, ladies: 341 } },
    // IN (10-18)  高麗距離はBENTとの比率から推定 ※公式未公開
    { hole: 10, par: 5, hdcp: 5, bent: { back: 521, reg: 501, gold: 454, ladies: 454 }, korai: { back: 534, reg: 513, ladies: 465 } },
    { hole: 11, par: 4, hdcp: 8, bent: { back: 398, reg: 375, gold: 358, ladies: 318 }, korai: { back: 408, reg: 384, ladies: 326 } },
    { hole: 12, par: 4, hdcp: 2, bent: { back: 431, reg: 398, gold: 365, ladies: 275 }, korai: { back: 441, reg: 407, ladies: 282 } },
    { hole: 13, par: 5, hdcp: 4, bent: { back: 512, reg: 488, gold: 472, ladies: 387 }, korai: { back: 524, reg: 500, ladies: 396 } },
    { hole: 14, par: 4, hdcp: 1, bent: { back: 421, reg: 396, gold: 361, ladies: 308 }, korai: { back: 431, reg: 405, ladies: 316 } },
    { hole: 15, par: 3, hdcp: 7, bent: { back: 156, reg: 148, gold: 111, ladies: 99 }, korai: { back: 160, reg: 152, ladies: 101 } },
    { hole: 16, par: 4, hdcp: 3, bent: { back: 394, reg: 377, gold: 367, ladies: 297 }, korai: { back: 404, reg: 386, ladies: 304 } },
    { hole: 17, par: 3, hdcp: 9, bent: { back: 174, reg: 153, gold: 132, ladies: 132 }, korai: { back: 178, reg: 157, ladies: 135 } },
    { hole: 18, par: 4, hdcp: 6, bent: { back: 377, reg: 348, gold: 336, ladies: 336 }, korai: { back: 386, reg: 357, ladies: 344 } }
  ]
};
const CAMELLIA_HILLS_COURSE = {
  name: "\u30AB\u30E1\u30EA\u30A2\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 5, hdcp: 9, back: 570, reg: 537, front: 503, ladies: 457 },
    { hole: 2, par: 4, hdcp: 15, back: 324, reg: 304, front: 282, ladies: 243 },
    { hole: 3, par: 4, hdcp: 3, back: 425, reg: 400, front: 374, ladies: 337 },
    { hole: 4, par: 3, hdcp: 13, back: 158, reg: 133, front: 112, ladies: 112 },
    { hole: 5, par: 4, hdcp: 7, back: 328, reg: 310, front: 289, ladies: 250 },
    { hole: 6, par: 4, hdcp: 1, back: 465, reg: 436, front: 405, ladies: 344 },
    { hole: 7, par: 4, hdcp: 17, back: 308, reg: 289, front: 267, ladies: 267 },
    { hole: 8, par: 5, hdcp: 5, back: 520, reg: 500, front: 477, ladies: 430 },
    { hole: 9, par: 3, hdcp: 11, back: 189, reg: 165, front: 140, ladies: 108 },
    { hole: 10, par: 4, hdcp: 10, back: 417, reg: 399, front: 377, ladies: 347 },
    { hole: 11, par: 4, hdcp: 4, back: 432, reg: 413, front: 387, ladies: 317 },
    { hole: 12, par: 4, hdcp: 16, back: 383, reg: 360, front: 336, ladies: 307 },
    { hole: 13, par: 3, hdcp: 8, back: 188, reg: 167, front: 144, ladies: 115 },
    { hole: 14, par: 5, hdcp: 2, back: 544, reg: 524, front: 502, ladies: 472 },
    { hole: 15, par: 3, hdcp: 14, back: 173, reg: 156, front: 134, ladies: 134 },
    { hole: 16, par: 4, hdcp: 12, back: 382, reg: 357, front: 332, ladies: 299 },
    { hole: 17, par: 4, hdcp: 18, back: 359, reg: 337, front: 311, ladies: 269 },
    { hole: 18, par: 5, hdcp: 6, back: 517, reg: 498, front: 479, ladies: 449 }
  ]
};
const CALEDONIAN_GC_COURSE = {
  name: "\u30AB\u30EC\u30C9\u30CB\u30A2\u30F3\u30FB\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 4, hdcp: 3, gold: 427, blue: 385, white: 358, red: 311 },
    { hole: 2, par: 5, hdcp: 9, gold: 570, blue: 510, white: 480, red: 410 },
    { hole: 3, par: 3, hdcp: 15, gold: 204, blue: 165, white: 147, red: 129 },
    { hole: 4, par: 4, hdcp: 7, gold: 405, blue: 360, white: 347, red: 292 },
    { hole: 5, par: 3, hdcp: 13, gold: 175, blue: 160, white: 144, red: 108 },
    { hole: 6, par: 5, hdcp: 11, gold: 560, blue: 522, white: 486, red: 454 },
    // HDCP推定
    { hole: 7, par: 4, hdcp: 5, gold: 410, blue: 393, white: 381, red: 291 },
    // HDCP推定
    { hole: 8, par: 4, hdcp: 1, gold: 474, blue: 424, white: 403, red: 364 },
    // HDCP推定
    { hole: 9, par: 4, hdcp: 17, gold: 455, blue: 440, white: 415, red: 355 },
    // HDCP推定
    { hole: 10, par: 4, hdcp: 4, gold: 435, blue: 375, white: 350, red: 321 },
    { hole: 11, par: 4, hdcp: 16, gold: 429, blue: 360, white: 342, red: 294 },
    { hole: 12, par: 3, hdcp: 10, gold: 220, blue: 198, white: 185, red: 150 },
    { hole: 13, par: 4, hdcp: 6, gold: 407, blue: 377, white: 355, red: 324 },
    // HDCP推定
    { hole: 14, par: 4, hdcp: 14, gold: 392, blue: 385, white: 357, red: 322 },
    // HDCP推定
    { hole: 15, par: 5, hdcp: 8, gold: 498, blue: 498, white: 470, red: 419 },
    // HDCP推定
    { hole: 16, par: 4, hdcp: 18, gold: 343, blue: 343, white: 330, red: 268 },
    // HDCP推定
    { hole: 17, par: 3, hdcp: 12, gold: 195, blue: 163, white: 150, red: 123 },
    // HDCP推定
    { hole: 18, par: 5, hdcp: 2, gold: 545, blue: 515, white: 486, red: 469 }
    // HDCP推定
  ]
};
const TAKANODAI_CC_COURSE = {
  name: "\u9DF9\u4E4B\u53F0\u30AB\u30F3\u30C4\u30EA\u30FC\u5036\u697D\u90E8",
  holes: [
    // bent: {fullback, back, reg, front, ladies}
    { hole: 1, par: 4, hdcp: 11, bent: { fullback: 427, back: 427, reg: 402, front: 375, ladies: 357 } },
    { hole: 2, par: 4, hdcp: 3, bent: { fullback: 399, back: 399, reg: 371, front: 347, ladies: 332 } },
    { hole: 3, par: 3, hdcp: 17, bent: { fullback: 186, back: 168, reg: 147, front: 133, ladies: 133 } },
    { hole: 4, par: 5, hdcp: 7, bent: { fullback: 538, back: 538, reg: 517, front: 499, ladies: 471 } },
    { hole: 5, par: 4, hdcp: 1, bent: { fullback: 416, back: 416, reg: 393, front: 364, ladies: 348 } },
    { hole: 6, par: 5, hdcp: 5, bent: { fullback: 590, back: 564, reg: 545, front: 516, ladies: 483 } },
    { hole: 7, par: 3, hdcp: 15, bent: { fullback: 205, back: 205, reg: 186, front: 175, ladies: 155 } },
    { hole: 8, par: 4, hdcp: 13, bent: { fullback: 368, back: 361, reg: 339, front: 329, ladies: 329 } },
    { hole: 9, par: 4, hdcp: 9, bent: { fullback: 411, back: 411, reg: 393, front: 370, ladies: 357 } },
    { hole: 10, par: 4, hdcp: 6, bent: { fullback: 447, back: 447, reg: 414, front: 397, ladies: 367 } },
    { hole: 11, par: 4, hdcp: 12, bent: { fullback: 406, back: 406, reg: 372, front: 343, ladies: 329 } },
    { hole: 12, par: 4, hdcp: 4, bent: { fullback: 363, back: 363, reg: 338, front: 319, ladies: 303 } },
    { hole: 13, par: 3, hdcp: 18, bent: { fullback: 171, back: 171, reg: 150, front: 144, ladies: 144 } },
    { hole: 14, par: 5, hdcp: 2, bent: { fullback: 606, back: 586, reg: 536, front: 508, ladies: 494 } },
    { hole: 15, par: 3, hdcp: 14, bent: { fullback: 233, back: 233, reg: 205, front: 191, ladies: 171 } },
    { hole: 16, par: 4, hdcp: 8, bent: { fullback: 434, back: 417, reg: 397, front: 369, ladies: 351 } },
    // ladies推定
    { hole: 17, par: 4, hdcp: 10, bent: { fullback: 404, back: 404, reg: 374, front: 350, ladies: 333 } },
    // ladies推定
    { hole: 18, par: 5, hdcp: 16, bent: { fullback: 528, back: 528, reg: 506, front: 489, ladies: 465 } }
    // ladies推定
  ]
};
const TAIHEIYOCLUB_YACHIYO_COURSE = {
  name: "\u592A\u5E73\u6D0B\u30AF\u30E9\u30D6 \u516B\u5343\u4EE3\u30B3\u30FC\u30B9",
  holes: [
    // a/b: {rt, mt, ft, lt}  RT=レギュラー, MT=ミドル, FT=フロント, LT=レディース
    { hole: 1, par: 5, hdcp: 15, a: { rt: 494, mt: 474, ft: 466, lt: 393 }, b: { rt: 486, mt: 466, ft: 458, lt: 386 } },
    { hole: 2, par: 4, hdcp: 9, a: { rt: 360, mt: 335, ft: 324, lt: 324 }, b: { rt: 388, mt: 363, ft: 352, lt: 352 } },
    { hole: 3, par: 3, hdcp: 3, a: { rt: 198, mt: 182, ft: 161, lt: 161 }, b: { rt: 158, mt: 142, ft: 121, lt: 121 } },
    { hole: 4, par: 5, hdcp: 13, a: { rt: 542, mt: 503, ft: 472, lt: 442 }, b: { rt: 525, mt: 486, ft: 455, lt: 425 } },
    { hole: 5, par: 4, hdcp: 7, a: { rt: 358, mt: 338, ft: 327, lt: 327 }, b: { rt: 336, mt: 316, ft: 305, lt: 305 } },
    { hole: 6, par: 3, hdcp: 1, a: { rt: 179, mt: 159, ft: 149, lt: 149 }, b: { rt: 156, mt: 136, ft: 126, lt: 126 } },
    { hole: 7, par: 4, hdcp: 11, a: { rt: 386, mt: 324, ft: 300, lt: 300 }, b: { rt: 363, mt: 301, ft: 277, lt: 277 } },
    { hole: 8, par: 4, hdcp: 5, a: { rt: 367, mt: 362, ft: 354, lt: 354 }, b: { rt: 346, mt: 341, ft: 333, lt: 333 } },
    { hole: 9, par: 4, hdcp: 17, a: { rt: 334, mt: 324, ft: 310, lt: 310 }, b: { rt: 319, mt: 309, ft: 295, lt: 295 } },
    { hole: 10, par: 4, hdcp: 10, a: { rt: 329, mt: 314, ft: 294, lt: 294 }, b: { rt: 323, mt: 308, ft: 288, lt: 288 } },
    { hole: 11, par: 5, hdcp: 16, a: { rt: 500, mt: 485, ft: 452, lt: 401 }, b: { rt: 518, mt: 503, ft: 470, lt: 419 } },
    { hole: 12, par: 4, hdcp: 4, a: { rt: 384, mt: 362, ft: 342, lt: 342 }, b: { rt: 385, mt: 363, ft: 343, lt: 343 } },
    { hole: 13, par: 4, hdcp: 14, a: { rt: 294, mt: 278, ft: 272, lt: 272 }, b: { rt: 307, mt: 291, ft: 285, lt: 285 } },
    { hole: 14, par: 3, hdcp: 8, a: { rt: 161, mt: 152, ft: 142, lt: 142 }, b: { rt: 177, mt: 170, ft: 158, lt: 158 } },
    { hole: 15, par: 4, hdcp: 2, a: { rt: 376, mt: 355, ft: 342, lt: 342 }, b: { rt: 347, mt: 326, ft: 313, lt: 313 } },
    { hole: 16, par: 5, hdcp: 18, a: { rt: 533, mt: 528, ft: 439, lt: 439 }, b: { rt: 525, mt: 520, ft: 431, lt: 431 } },
    { hole: 17, par: 4, hdcp: 6, a: { rt: 338, mt: 324, ft: 318, lt: 318 }, b: { rt: 305, mt: 291, ft: 285, lt: 285 } },
    { hole: 18, par: 3, hdcp: 12, a: { rt: 118, mt: 97, ft: 91, lt: 91 }, b: { rt: 125, mt: 108, ft: 107, lt: 107 } }
  ]
};
const GLEN_OAKS_CC_COURSE = {
  name: "\u30B0\u30EC\u30F3\u30AA\u30FC\u30AF\u30B9\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    // black/blue/white/green/red
    { hole: 1, par: 4, hdcp: 11, black: 388, blue: 359, white: 324, green: 294, red: 294 },
    { hole: 2, par: 4, hdcp: 3, black: 421, blue: 392, white: 363, green: 337, red: 337 },
    { hole: 3, par: 4, hdcp: 1, black: 427, blue: 411, white: 382, green: 360, red: 360 },
    { hole: 4, par: 5, hdcp: 15, black: 516, blue: 494, white: 458, green: 426, red: 397 },
    { hole: 5, par: 3, hdcp: 17, black: 150, blue: 132, white: 120, green: 102, red: 102 },
    { hole: 6, par: 4, hdcp: 13, black: 335, blue: 316, white: 293, green: 271, red: 271 },
    { hole: 7, par: 4, hdcp: 9, black: 405, blue: 383, white: 351, green: 316, red: 316 },
    { hole: 8, par: 3, hdcp: 5, black: 223, blue: 195, white: 171, green: 136, red: 108 },
    { hole: 9, par: 5, hdcp: 7, black: 533, blue: 508, white: 484, green: 458, red: 408 },
    { hole: 10, par: 4, hdcp: 6, black: 460, blue: 430, white: 411, green: 384, red: 321 },
    { hole: 11, par: 5, hdcp: 4, black: 563, blue: 532, white: 508, green: 471, red: 407 },
    { hole: 12, par: 4, hdcp: 12, black: 401, blue: 367, white: 322, green: 208, red: 208 },
    { hole: 13, par: 3, hdcp: 16, black: 199, blue: 173, white: 146, green: 121, red: 121 },
    { hole: 14, par: 4, hdcp: 14, black: 388, blue: 360, white: 336, green: 317, red: 284 },
    { hole: 15, par: 4, hdcp: 8, black: 406, blue: 362, white: 328, green: 295, red: 295 },
    { hole: 16, par: 4, hdcp: 2, black: 439, blue: 412, white: 392, green: 365, red: 314 },
    { hole: 17, par: 3, hdcp: 18, black: 170, blue: 162, white: 144, green: 101, red: 101 },
    { hole: 18, par: 5, hdcp: 10, black: 548, blue: 521, white: 503, green: 478, red: 441 }
  ]
};
const OAK_HILLS_CC_COURSE = {
  name: "\u30AA\u30FC\u30AF\u30FB\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    // black(ブラック)/blue(ブルー)/white(ホワイト)/green(グリーン)/red(レッド)
    { hole: 1, par: 4, hdcp: 11, black: 435, blue: 406, white: 374, green: 300, red: 300 },
    { hole: 2, par: 4, hdcp: 3, black: 400, blue: 382, white: 342, green: 235, red: 235 },
    { hole: 3, par: 5, hdcp: 17, black: 493, blue: 483, white: 441, green: 412, red: 412 },
    { hole: 4, par: 3, hdcp: 5, black: 218, blue: 201, white: 185, green: 125, red: 125 },
    { hole: 5, par: 4, hdcp: 13, black: 374, blue: 358, white: 315, green: 291, red: 291 },
    { hole: 6, par: 4, hdcp: 1, black: 433, blue: 398, white: 369, green: 309, red: 309 },
    { hole: 7, par: 5, hdcp: 9, black: 569, blue: 530, white: 520, green: 463, red: 401 },
    { hole: 8, par: 3, hdcp: 15, black: 207, blue: 187, white: 167, green: 129, red: 129 },
    { hole: 9, par: 4, hdcp: 7, black: 384, blue: 367, white: 357, green: 320, red: 320 },
    { hole: 10, par: 5, hdcp: 18, black: 510, blue: 482, white: 472, green: 446, red: 422 },
    { hole: 11, par: 3, hdcp: 6, black: 190, blue: 180, white: 175, green: 146, red: 108 },
    { hole: 12, par: 4, hdcp: 14, black: 391, blue: 381, white: 357, green: 313, red: 313 },
    { hole: 13, par: 4, hdcp: 8, black: 346, blue: 332, white: 327, green: 299, red: 299 },
    { hole: 14, par: 3, hdcp: 16, black: 182, blue: 151, white: 135, green: 111, red: 111 },
    { hole: 15, par: 4, hdcp: 2, black: 430, blue: 413, white: 408, green: 353, red: 353 },
    { hole: 16, par: 5, hdcp: 12, black: 535, blue: 515, white: 501, green: 458, red: 401 },
    { hole: 17, par: 4, hdcp: 10, black: 368, blue: 359, white: 354, green: 318, red: 318 },
    { hole: 18, par: 4, hdcp: 4, black: 435, blue: 407, white: 359, green: 304, red: 304 }
  ]
};
const NARASHINO_CC_KING_COURSE = {
  name: "\u7FD2\u5FD7\u91CE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6 \u30AD\u30F3\u30B0\u30B3\u30FC\u30B9",
  holes: [
    // a: Aグリーン {blue, white, red}, b: Bグリーン {blue, white, red}
    { hole: 1, par: 4, hdcp: 3, a: { blue: 393, white: 379, red: 279 }, b: { blue: 372, white: 358, red: 258 } },
    { hole: 2, par: 4, hdcp: 17, a: { blue: 362, white: 347, red: 310 }, b: { blue: 360, white: 345, red: 308 } },
    { hole: 3, par: 3, hdcp: 9, a: { blue: 174, white: 159, red: 136 }, b: { blue: 156, white: 141, red: 118 } },
    { hole: 4, par: 5, hdcp: 1, a: { blue: 608, white: 583, red: 533 }, b: { blue: 613, white: 588, red: 538 } },
    { hole: 5, par: 4, hdcp: 7, a: { blue: 444, white: 420, red: 315 }, b: { blue: 412, white: 388, red: 283 } },
    { hole: 6, par: 3, hdcp: 13, a: { blue: 171, white: 159, red: 135 }, b: { blue: 146, white: 134, red: 110 } },
    { hole: 7, par: 4, hdcp: 5, a: { blue: 399, white: 377, red: 283 }, b: { blue: 374, white: 352, red: 258 } },
    { hole: 8, par: 5, hdcp: 15, a: { blue: 520, white: 498, red: 413 }, b: { blue: 506, white: 484, red: 399 } },
    { hole: 9, par: 4, hdcp: 11, a: { blue: 393, white: 377, red: 342 }, b: { blue: 362, white: 346, red: 311 } },
    { hole: 10, par: 4, hdcp: 4, a: { blue: 376, white: 366, red: 306 }, b: { blue: 368, white: 358, red: 298 } },
    { hole: 11, par: 5, hdcp: 18, a: { blue: 529, white: 511, red: 466 }, b: { blue: 514, white: 496, red: 451 } },
    { hole: 12, par: 4, hdcp: 10, a: { blue: 405, white: 392, red: 345 }, b: { blue: 394, white: 381, red: 334 } },
    { hole: 13, par: 3, hdcp: 16, a: { blue: 166, white: 151, red: 118 }, b: { blue: 154, white: 139, red: 110 } },
    { hole: 14, par: 4, hdcp: 8, a: { blue: 425, white: 415, red: 315 }, b: { blue: 406, white: 396, red: 296 } },
    { hole: 15, par: 4, hdcp: 2, a: { blue: 429, white: 409, red: 303 }, b: { blue: 415, white: 395, red: 289 } },
    { hole: 16, par: 3, hdcp: 14, a: { blue: 183, white: 164, red: 136 }, b: { blue: 178, white: 159, red: 131 } },
    { hole: 17, par: 4, hdcp: 6, a: { blue: 461, white: 439, red: 384 }, b: { blue: 457, white: 435, red: 380 } },
    { hole: 18, par: 5, hdcp: 12, a: { blue: 573, white: 532, red: 460 }, b: { blue: 547, white: 506, red: 434 } }
  ]
};
const SAWARA_CC_COURSE = {
  name: "\u4F50\u539F\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 4, hdcp: 15, back: 370, reg: 353, ladies: 270 },
    { hole: 2, par: 4, hdcp: 9, back: 367, reg: 341, ladies: 293 },
    { hole: 3, par: 3, hdcp: 3, back: 168, reg: 149, ladies: 134 },
    { hole: 4, par: 4, hdcp: 1, back: 360, reg: 341, ladies: 305 },
    { hole: 5, par: 4, hdcp: 13, back: 358, reg: 341, ladies: 274 },
    { hole: 6, par: 5, hdcp: 7, back: 526, reg: 491, ladies: 385 },
    { hole: 7, par: 4, hdcp: 11, back: 366, reg: 345, ladies: 222 },
    { hole: 8, par: 3, hdcp: 17, back: 150, reg: 126, ladies: 103 },
    { hole: 9, par: 5, hdcp: 5, back: 500, reg: 476, ladies: 422 },
    { hole: 10, par: 5, hdcp: 4, back: 545, reg: 492, ladies: 400 },
    { hole: 11, par: 4, hdcp: 10, back: 410, reg: 386, ladies: 260 },
    { hole: 12, par: 4, hdcp: 16, back: 355, reg: 336, ladies: 281 },
    { hole: 13, par: 3, hdcp: 14, back: 169, reg: 149, ladies: 84 },
    { hole: 14, par: 4, hdcp: 2, back: 389, reg: 365, ladies: 280 },
    { hole: 15, par: 4, hdcp: 8, back: 376, reg: 351, ladies: 300 },
    { hole: 16, par: 3, hdcp: 12, back: 172, reg: 158, ladies: 118 },
    { hole: 17, par: 4, hdcp: 18, back: 367, reg: 336, ladies: 250 },
    { hole: 18, par: 5, hdcp: 6, back: 515, reg: 509, ladies: 412 }
  ]
};
const TOSHO_GC_COURSE = {
  name: "\u6771\u5E84\u30B4\u30EB\u30D5\u5036\u697D\u90E8",
  holes: [
    { hole: 1, par: 4, hdcp: 15, back: 373, reg: 350, silver: 318, ladies: 288 },
    { hole: 2, par: 5, hdcp: 9, back: 599, reg: 565, silver: 528, ladies: 468 },
    { hole: 3, par: 4, hdcp: 3, back: 428, reg: 397, silver: 347, ladies: 307 },
    { hole: 4, par: 3, hdcp: 13, back: 192, reg: 172, silver: 150, ladies: 129 },
    { hole: 5, par: 4, hdcp: 1, back: 385, reg: 358, silver: 358, ladies: 326 },
    { hole: 6, par: 4, hdcp: 7, back: 355, reg: 324, silver: 303, ladies: 285 },
    { hole: 7, par: 3, hdcp: 17, back: 188, reg: 162, silver: 140, ladies: 121 },
    { hole: 8, par: 4, hdcp: 5, back: 392, reg: 368, silver: 346, ladies: 326 },
    { hole: 9, par: 5, hdcp: 11, back: 561, reg: 520, silver: 469, ladies: 386 },
    { hole: 10, par: 4, hdcp: 10, back: 425, reg: 399, silver: 375, ladies: 355 },
    { hole: 11, par: 5, hdcp: 4, back: 543, reg: 511, silver: 487, ladies: 455 },
    { hole: 12, par: 3, hdcp: 16, back: 180, reg: 160, silver: 141, ladies: 123 },
    { hole: 13, par: 4, hdcp: 14, back: 370, reg: 350, silver: 330, ladies: 308 },
    { hole: 14, par: 4, hdcp: 2, back: 451, reg: 409, silver: 386, ladies: 351 },
    { hole: 15, par: 4, hdcp: 8, back: 382, reg: 363, silver: 363, ladies: 316 },
    { hole: 16, par: 3, hdcp: 18, back: 200, reg: 184, silver: 151, ladies: 151 },
    { hole: 17, par: 5, hdcp: 6, back: 565, reg: 537, silver: 513, ladies: 486 },
    { hole: 18, par: 4, hdcp: 12, back: 407, reg: 387, silver: 367, ladies: 344 }
  ]
};
const CPG_CC_COURSE = {
  name: "CPG\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 5, hdcp: 3, back: 495, reg: 485, ladies: 450 },
    { hole: 2, par: 4, hdcp: 11, back: 385, reg: 370, ladies: 320 },
    { hole: 3, par: 3, hdcp: 17, back: 160, reg: 150, ladies: 135 },
    { hole: 4, par: 4, hdcp: 5, back: 430, reg: 410, ladies: 330 },
    { hole: 5, par: 4, hdcp: 13, back: 390, reg: 370, ladies: 320 },
    { hole: 6, par: 4, hdcp: 7, back: 300, reg: 280, ladies: 265 },
    { hole: 7, par: 3, hdcp: 15, back: 150, reg: 135, ladies: 120 },
    { hole: 8, par: 4, hdcp: 1, back: 450, reg: 430, ladies: 340 },
    { hole: 9, par: 5, hdcp: 9, back: 495, reg: 475, ladies: 410 },
    { hole: 10, par: 5, hdcp: 2, back: 525, reg: 510, ladies: 460 },
    { hole: 11, par: 3, hdcp: 18, back: 170, reg: 160, ladies: 130 },
    { hole: 12, par: 4, hdcp: 8, back: 380, reg: 360, ladies: 330 },
    { hole: 13, par: 4, hdcp: 12, back: 420, reg: 405, ladies: 320 },
    { hole: 14, par: 4, hdcp: 6, back: 450, reg: 430, ladies: 350 },
    { hole: 15, par: 3, hdcp: 16, back: 170, reg: 155, ladies: 150 },
    { hole: 16, par: 5, hdcp: 4, back: 495, reg: 480, ladies: 380 },
    { hole: 17, par: 4, hdcp: 14, back: 300, reg: 285, ladies: 260 },
    { hole: 18, par: 4, hdcp: 10, back: 420, reg: 410, ladies: 360 }
  ]
};
const TOKYO_INTL_AIRPORT_GC_COURSE = {
  name: "\u6771\u4EAC\u56FD\u969B\u7A7A\u6E2F\u30B4\u30EB\u30D5\u5036\u697D\u90E8",
  holes: [
    { hole: 1, par: 4, hdcp: 3, bent: { back: 422, reg: 410, ladies: 343 }, korai: { back: 408, reg: 396, ladies: 329 } },
    { hole: 2, par: 4, hdcp: 15, bent: { back: 374, reg: 348, ladies: 330 }, korai: { back: 340, reg: 314, ladies: 314 } },
    { hole: 3, par: 3, hdcp: 7, bent: { back: 207, reg: 161, ladies: 138 }, korai: { back: 207, reg: 144, ladies: 121 } },
    { hole: 4, par: 4, hdcp: 5, bent: { back: 401, reg: 380, ladies: 380 }, korai: { back: 407, reg: 386, ladies: 386 } },
    { hole: 5, par: 5, hdcp: 11, bent: { back: 493, reg: 474, ladies: 376 }, korai: { back: 473, reg: 451, ladies: 356 } },
    { hole: 6, par: 3, hdcp: 17, bent: { back: 134, reg: 129, ladies: 114 }, korai: { back: 117, reg: 112, ladies: 112 } },
    { hole: 7, par: 4, hdcp: 1, bent: { back: 423, reg: 385, ladies: 344 }, korai: { back: 411, reg: 373, ladies: 332 } },
    { hole: 8, par: 4, hdcp: 13, bent: { back: 383, reg: 350, ladies: 319 }, korai: { back: 377, reg: 344, ladies: 312 } },
    { hole: 9, par: 5, hdcp: 9, bent: { back: 538, reg: 516, ladies: 420 }, korai: { back: 527, reg: 505, ladies: 409 } },
    { hole: 10, par: 4, hdcp: 2, bent: { back: 404, reg: 382, ladies: 306 }, korai: { back: 381, reg: 359, ladies: 283 } },
    { hole: 11, par: 5, hdcp: 16, bent: { back: 492, reg: 475, ladies: 453 }, korai: { back: 472, reg: 455, ladies: 433 } },
    { hole: 12, par: 3, hdcp: 10, bent: { back: 201, reg: 185, ladies: 164 }, korai: { back: 184, reg: 168, ladies: 147 } },
    { hole: 13, par: 4, hdcp: 14, bent: { back: 369, reg: 339, ladies: 319 }, korai: { back: 362, reg: 332, ladies: 312 } },
    { hole: 14, par: 4, hdcp: 18, bent: { back: 376, reg: 365, ladies: 350 }, korai: { back: 356, reg: 345, ladies: 336 } },
    { hole: 15, par: 4, hdcp: 6, bent: { back: 392, reg: 375, ladies: 304 }, korai: { back: 389, reg: 372, ladies: 301 } },
    { hole: 16, par: 3, hdcp: 8, bent: { back: 199, reg: 175, ladies: 153 }, korai: { back: 178, reg: 154, ladies: 132 } },
    { hole: 17, par: 5, hdcp: 4, bent: { back: 531, reg: 498, ladies: 439 }, korai: { back: 527, reg: 494, ladies: 435 } },
    { hole: 18, par: 4, hdcp: 12, bent: { back: 385, reg: 353, ladies: 318 }, korai: { back: 380, reg: 348, ladies: 313 } }
  ]
};
const IZUMI_CC_EAST_COURSE = {
  name: "\uFF25\uFF41\uFF53\uFF54",
  holes: [
    { hole: 1, par: 5, hdcp: 5, a: { back: 453, reg: 435, front: 425, gold: 409 }, b: { back: 447, reg: 429, front: 419, gold: 403 } },
    { hole: 2, par: 4, hdcp: 2, a: { back: 417, reg: 394, front: 385, gold: 340 }, b: { back: 389, reg: 366, front: 357, gold: 312 } },
    { hole: 3, par: 3, hdcp: 9, a: { back: 204, reg: 186, front: 161, gold: 126 }, b: { back: 202, reg: 186, front: 161, gold: 126 } },
    { hole: 4, par: 4, hdcp: 7, a: { back: 410, reg: 390, front: 365, gold: 341 }, b: { back: 383, reg: 363, front: 338, gold: 314 } },
    { hole: 5, par: 4, hdcp: 3, a: { back: 362, reg: 342, front: 337, gold: 332 }, b: { back: 361, reg: 341, front: 336, gold: 331 } },
    { hole: 6, par: 3, hdcp: 8, a: { back: 187, reg: 167, front: 154, gold: 139 }, b: { back: 171, reg: 153, front: 138, gold: 120 } },
    { hole: 7, par: 4, hdcp: 1, a: { back: 432, reg: 417, front: 392, gold: 342 }, b: { back: 420, reg: 405, front: 380, gold: 330 } },
    { hole: 8, par: 4, hdcp: 6, a: { back: 400, reg: 360, front: 352, gold: 333 }, b: { back: 394, reg: 354, front: 346, gold: 327 } },
    { hole: 9, par: 5, hdcp: 4, a: { back: 496, reg: 470, front: 460, gold: 439 }, b: { back: 495, reg: 469, front: 459, gold: 438 } }
  ]
};
const IZUMI_CC_WEST_COURSE = {
  name: "\uFF37\uFF45\uFF53\uFF54",
  holes: [
    { hole: 1, par: 5, hdcp: 2, a: { back: 567, reg: 539, front: 517, gold: 488 }, b: { back: 544, reg: 516, front: 494, gold: 465 } },
    { hole: 2, par: 3, hdcp: 9, a: { back: 177, reg: 153, front: 151, gold: 123 }, b: { back: 153, reg: 130, front: 125, gold: 103 } },
    { hole: 3, par: 4, hdcp: 1, a: { back: 432, reg: 397, front: 383, gold: 370 }, b: { back: 406, reg: 371, front: 357, gold: 344 } },
    { hole: 4, par: 4, hdcp: 5, a: { back: 429, reg: 402, front: 367, gold: 317 }, b: { back: 422, reg: 395, front: 360, gold: 310 } },
    { hole: 5, par: 4, hdcp: 3, a: { back: 369, reg: 346, front: 339, gold: 331 }, b: { back: 366, reg: 343, front: 336, gold: 328 } },
    { hole: 6, par: 3, hdcp: 8, a: { back: 191, reg: 175, front: 162, gold: 147 }, b: { back: 145, reg: 133, front: 120, gold: 107 } },
    { hole: 7, par: 4, hdcp: 6, a: { back: 379, reg: 356, front: 350, gold: 337 }, b: { back: 376, reg: 353, front: 347, gold: 334 } },
    { hole: 8, par: 4, hdcp: 7, a: { back: 362, reg: 339, front: 329, gold: 307 }, b: { back: 349, reg: 329, front: 316, gold: 295 } },
    { hole: 9, par: 5, hdcp: 4, a: { back: 527, reg: 500, front: 472, gold: 428 }, b: { back: 525, reg: 498, front: 470, gold: 426 } }
  ]
};
const IZUMI_CC_SOUTH_COURSE = {
  name: "\uFF33\uFF4F\uFF55\uFF54\uFF48",
  holes: [
    { hole: 1, par: 4, hdcp: 9, a: { back: 340, reg: 336, front: 326, gold: 318 }, b: { back: 312, reg: 308, front: 298, gold: 290 } },
    { hole: 2, par: 3, hdcp: 6, a: { back: 220, reg: 202, front: 179, gold: 148 }, b: { back: 220, reg: 200, front: 173, gold: 139 } },
    { hole: 3, par: 4, hdcp: 4, a: { back: 359, reg: 337, front: 314, gold: 288 }, b: { back: 353, reg: 331, front: 308, gold: 282 } },
    { hole: 4, par: 5, hdcp: 3, a: { back: 537, reg: 503, front: 488, gold: 469 }, b: { back: 531, reg: 497, front: 482, gold: 463 } },
    { hole: 5, par: 3, hdcp: 8, a: { back: 181, reg: 165, front: 149, gold: 130 }, b: { back: 173, reg: 156, front: 143, gold: 120 } },
    { hole: 6, par: 4, hdcp: 7, a: { back: 306, reg: 292, front: 288, gold: 280 }, b: { back: 297, reg: 283, front: 279, gold: 271 } },
    { hole: 7, par: 4, hdcp: 2, a: { back: 400, reg: 370, front: 353, gold: 330 }, b: { back: 382, reg: 352, front: 335, gold: 312 } },
    { hole: 8, par: 5, hdcp: 1, a: { back: 588, reg: 564, front: 536, gold: 469 }, b: { back: 585, reg: 561, front: 533, gold: 466 } },
    { hole: 9, par: 4, hdcp: 5, a: { back: 451, reg: 426, front: 402, gold: 328 }, b: { back: 432, reg: 407, front: 383, gold: 309 } }
  ]
};
const FUNABASHI_CC_COURSE = {
  name: "\u8239\u6A4B\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    // a: Aグリーン, b: Bグリーン / {champ, back, reg, front}
    { hole: 1, par: 4, hdcp: 15, a: { champ: 385, back: 366, reg: 355, front: 317 }, b: { champ: 357, back: 368, reg: 357, front: 319 } },
    { hole: 2, par: 4, hdcp: 3, a: { champ: 452, back: 426, reg: 412, front: 338 }, b: { champ: 420, back: 394, reg: 380, front: 306 } },
    { hole: 3, par: 3, hdcp: 9, a: { champ: 221, back: 200, reg: 166, front: 154 }, b: { champ: 220, back: 199, reg: 165, front: 153 } },
    { hole: 4, par: 5, hdcp: 7, a: { champ: 509, back: 477, reg: 463, front: 447 }, b: { champ: 508, back: 476, reg: 462, front: 446 } },
    { hole: 5, par: 4, hdcp: 1, a: { champ: 422, back: 396, reg: 377, front: 324 }, b: { champ: 400, back: 374, reg: 355, front: 302 } },
    { hole: 6, par: 3, hdcp: 13, a: { champ: 170, back: 149, reg: 140, front: 126 }, b: { champ: 174, back: 153, reg: 144, front: 130 } },
    { hole: 7, par: 5, hdcp: 17, a: { champ: 511, back: 492, reg: 478, front: 425 }, b: { champ: 540, back: 521, reg: 507, front: 454 } },
    { hole: 8, par: 4, hdcp: 5, a: { champ: 434, back: 409, reg: 399, front: 376 }, b: { champ: 401, back: 376, reg: 366, front: 343 } },
    { hole: 9, par: 4, hdcp: 11, a: { champ: 398, back: 379, reg: 367, front: 283 }, b: { champ: 399, back: 380, reg: 368, front: 284 } },
    { hole: 10, par: 4, hdcp: 16, a: { champ: 409, back: 395, reg: 376, front: 362 }, b: { champ: 395, back: 381, reg: 362, front: 348 } },
    { hole: 11, par: 3, hdcp: 10, a: { champ: 200, back: 182, reg: 172, front: 147 }, b: { champ: 179, back: 161, reg: 151, front: 145 } },
    { hole: 12, par: 4, hdcp: 4, a: { champ: 399, back: 375, reg: 369, front: 356 }, b: { champ: 377, back: 353, reg: 347, front: 334 } },
    { hole: 13, par: 5, hdcp: 14, a: { champ: 546, back: 524, reg: 510, front: 451 }, b: { champ: 547, back: 525, reg: 511, front: 452 } },
    { hole: 14, par: 4, hdcp: 2, a: { champ: 441, back: 409, reg: 389, front: 311 }, b: { champ: 458, back: 426, reg: 406, front: 328 } },
    { hole: 15, par: 4, hdcp: 8, a: { champ: 418, back: 391, reg: 385, front: 365 }, b: { champ: 392, back: 365, reg: 359, front: 339 } },
    { hole: 16, par: 3, hdcp: 18, a: { champ: 190, back: 179, reg: 152, front: 137 }, b: { champ: 188, back: 177, reg: 150, front: 135 } },
    { hole: 17, par: 4, hdcp: 6, a: { champ: 398, back: 381, reg: 359, front: 351 }, b: { champ: 370, back: 353, reg: 331, front: 323 } },
    { hole: 18, par: 5, hdcp: 12, a: { champ: 504, back: 477, reg: 461, front: 437 }, b: { champ: 492, back: 465, reg: 449, front: 425 } }
  ]
};
const NARASHINO_CC_QUEEN_COURSE = {
  name: "\u7FD2\u5FD7\u91CE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6 \u30AF\u30A3\u30FC\u30F3\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 4, hdcp: 3, a: { blue: 405, white: 385, red: 360 }, b: { blue: 389, white: 369, red: 344 } },
    { hole: 2, par: 4, hdcp: 9, a: { blue: 350, white: 328, red: 305 }, b: { blue: 363, white: 341, red: 318 } },
    { hole: 3, par: 5, hdcp: 15, a: { blue: 535, white: 514, red: 475 }, b: { blue: 500, white: 479, red: 440 } },
    { hole: 4, par: 3, hdcp: 7, a: { blue: 191, white: 175, red: 136 }, b: { blue: 188, white: 172, red: 133 } },
    { hole: 5, par: 4, hdcp: 13, a: { blue: 361, white: 345, red: 321 }, b: { blue: 329, white: 313, red: 289 } },
    { hole: 6, par: 4, hdcp: 5, a: { blue: 356, white: 342, red: 316 }, b: { blue: 328, white: 314, red: 288 } },
    { hole: 7, par: 3, hdcp: 17, a: { blue: 167, white: 157, red: 130 }, b: { blue: 160, white: 150, red: 123 } },
    { hole: 8, par: 4, hdcp: 1, a: { blue: 395, white: 379, red: 353 }, b: { blue: 373, white: 357, red: 331 } },
    { hole: 9, par: 5, hdcp: 11, a: { blue: 529, white: 503, red: 467 }, b: { blue: 512, white: 486, red: 450 } },
    { hole: 10, par: 4, hdcp: 10, a: { blue: 381, white: 353, red: 322 }, b: { blue: 373, white: 345, red: 314 } },
    { hole: 11, par: 4, hdcp: 16, a: { blue: 358, white: 345, red: 320 }, b: { blue: 323, white: 310, red: 285 } },
    { hole: 12, par: 5, hdcp: 2, a: { blue: 574, white: 532, red: 474 }, b: { blue: 587, white: 545, red: 487 } },
    { hole: 13, par: 4, hdcp: 12, a: { blue: 360, white: 344, red: 317 }, b: { blue: 352, white: 336, red: 309 } },
    { hole: 14, par: 4, hdcp: 14, a: { blue: 357, white: 342, red: 314 }, b: { blue: 363, white: 348, red: 320 } },
    { hole: 15, par: 3, hdcp: 6, a: { blue: 180, white: 163, red: 131 }, b: { blue: 177, white: 160, red: 128 } },
    { hole: 16, par: 5, hdcp: 8, a: { blue: 554, white: 522, red: 454 }, b: { blue: 546, white: 514, red: 446 } },
    { hole: 17, par: 3, hdcp: 4, a: { blue: 191, white: 155, red: 119 }, b: { blue: 187, white: 151, red: 115 } },
    { hole: 18, par: 4, hdcp: 18, a: { blue: 335, white: 324, red: 306 }, b: { blue: 350, white: 339, red: 321 } }
  ]
};
const SODEGAURA_SHINSODE_COURSE = {
  name: "\u8896\u30F6\u6D66CC \u65B0\u8896\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 5, hdcp: 15, new: { back: 528, reg: 511, front: 475, gold: 432 }, old: { back: 523, reg: 506, front: 469, gold: 426 } },
    { hole: 2, par: 4, hdcp: 9, new: { back: 403, reg: 366, front: 363, gold: 330 }, old: { back: 377, reg: 340, front: 338, gold: 307 } },
    { hole: 3, par: 4, hdcp: 3, new: { back: 435, reg: 393, front: 391, gold: 356 }, old: { back: 439, reg: 397, front: 394, gold: 358 } },
    { hole: 4, par: 3, hdcp: 7, new: { back: 193, reg: 169, front: 174, gold: 158 }, old: { back: 171, reg: 147, front: 154, gold: 139 } },
    { hole: 5, par: 4, hdcp: 1, new: { back: 368, reg: 352, front: 331, gold: 301 }, old: { back: 369, reg: 353, front: 331, gold: 301 } },
    { hole: 6, par: 3, hdcp: 13, new: { back: 194, reg: 181, front: 175, gold: 159 }, old: { back: 182, reg: 169, front: 163, gold: 148 } },
    { hole: 7, par: 5, hdcp: 5, new: { back: 545, reg: 523, front: 490, gold: 446 }, old: { back: 533, reg: 511, front: 478, gold: 434 } },
    { hole: 8, par: 4, hdcp: 11, new: { back: 381, reg: 367, front: 343, gold: 312 }, old: { back: 378, reg: 364, front: 339, gold: 308 } },
    { hole: 9, par: 4, hdcp: 17, new: { back: 396, reg: 381, front: 356, gold: 324 }, old: { back: 400, reg: 385, front: 359, gold: 326 } },
    { hole: 10, par: 5, hdcp: 10, new: { back: 494, reg: 478, front: 456, gold: 418 }, old: { back: 492, reg: 476, front: 454, gold: 415 } },
    { hole: 11, par: 3, hdcp: 16, new: { back: 178, reg: 167, front: 164, gold: 151 }, old: { back: 155, reg: 144, front: 143, gold: 131 } },
    { hole: 12, par: 4, hdcp: 4, new: { back: 432, reg: 419, front: 399, gold: 365 }, old: { back: 403, reg: 390, front: 372, gold: 340 } },
    { hole: 13, par: 4, hdcp: 2, new: { back: 436, reg: 404, front: 402, gold: 369 }, old: { back: 437, reg: 405, front: 403, gold: 369 } },
    { hole: 14, par: 4, hdcp: 8, new: { back: 378, reg: 368, front: 349, gold: 320 }, old: { back: 380, reg: 370, front: 350, gold: 321 } },
    { hole: 15, par: 4, hdcp: 14, new: { back: 381, reg: 363, front: 352, gold: 322 }, old: { back: 388, reg: 370, front: 358, gold: 327 } },
    { hole: 16, par: 4, hdcp: 6, new: { back: 408, reg: 390, front: 377, gold: 345 }, old: { back: 412, reg: 394, front: 380, gold: 348 } },
    { hole: 17, par: 3, hdcp: 18, new: { back: 189, reg: 178, front: 174, gold: 160 }, old: { back: 183, reg: 172, front: 169, gold: 154 } },
    { hole: 18, par: 5, hdcp: 12, new: { back: 506, reg: 488, front: 467, gold: 428 }, old: { back: 505, reg: 487, front: 466, gold: 426 } }
  ]
};
const CHIBA_MATSUO_GC_COURSE = {
  name: "\u5343\u8449\u677E\u5C3E\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 5, hdcp: 7, back: 562, reg: 531, ladies: 482 },
    { hole: 2, par: 4, hdcp: 11, back: 337, reg: 316, ladies: 260 },
    { hole: 3, par: 4, hdcp: 1, back: 437, reg: 420, ladies: 297 },
    { hole: 4, par: 4, hdcp: 3, back: 445, reg: 424, ladies: 322 },
    { hole: 5, par: 3, hdcp: 17, back: 178, reg: 159, ladies: 123 },
    { hole: 6, par: 5, hdcp: 5, back: 587, reg: 567, ladies: 470 },
    { hole: 7, par: 3, hdcp: 15, back: 164, reg: 143, ladies: 109 },
    { hole: 8, par: 4, hdcp: 9, back: 367, reg: 339, ladies: 282 },
    { hole: 9, par: 4, hdcp: 13, back: 360, reg: 336, ladies: 280 },
    { hole: 10, par: 4, hdcp: 14, back: 339, reg: 323, ladies: 278 },
    { hole: 11, par: 3, hdcp: 16, back: 149, reg: 132, ladies: 92 },
    { hole: 12, par: 4, hdcp: 12, back: 352, reg: 323, ladies: 269 },
    { hole: 13, par: 4, hdcp: 4, back: 364, reg: 348, ladies: 281 },
    { hole: 14, par: 3, hdcp: 18, back: 140, reg: 116, ladies: 90 },
    { hole: 15, par: 4, hdcp: 8, back: 340, reg: 326, ladies: 288 },
    { hole: 16, par: 5, hdcp: 6, back: 518, reg: 503, ladies: 454 },
    { hole: 17, par: 5, hdcp: 2, back: 540, reg: 504, ladies: 458 },
    { hole: 18, par: 4, hdcp: 10, back: 382, reg: 372, ladies: 311 }
  ]
};
const CENTRAL_GC_EAST_COURSE = {
  name: "\u30BB\u30F3\u30C8\u30E9\u30EB\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6 \u6771\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 5, hdcp: 3, blue: 520, white: 495, green: 475, red: 369 },
    { hole: 2, par: 3, hdcp: 15, blue: 195, white: 188, green: 120, red: 120 },
    { hole: 3, par: 4, hdcp: 9, blue: 390, white: 366, green: 350, red: 320 },
    { hole: 4, par: 4, hdcp: 1, blue: 406, white: 376, green: 364, red: 292 },
    { hole: 5, par: 4, hdcp: 7, blue: 330, white: 306, green: 296, red: 250 },
    { hole: 6, par: 3, hdcp: 13, blue: 185, white: 175, green: 146, red: 120 },
    { hole: 7, par: 5, hdcp: 5, blue: 557, white: 537, green: 473, red: 366 },
    { hole: 8, par: 5, hdcp: 11, blue: 534, white: 502, green: 407, red: 367 },
    { hole: 9, par: 4, hdcp: 17, blue: 400, white: 371, green: 321, red: 287 },
    { hole: 10, par: 4, hdcp: 4, blue: 398, white: 398, green: 363, red: 278 },
    { hole: 11, par: 4, hdcp: 10, blue: 340, white: 336, green: 330, red: 302 },
    { hole: 12, par: 3, hdcp: 16, blue: 160, white: 147, green: 140, red: 108 },
    { hole: 13, par: 5, hdcp: 2, blue: 510, white: 500, green: 474, red: 400 },
    { hole: 14, par: 4, hdcp: 8, blue: 385, white: 381, green: 359, red: 255 },
    { hole: 15, par: 4, hdcp: 14, blue: 365, white: 336, green: 310, red: 281 },
    { hole: 16, par: 4, hdcp: 12, blue: 430, white: 414, green: 341, red: 260 },
    { hole: 17, par: 3, hdcp: 18, blue: 186, white: 182, green: 153, red: 120 },
    { hole: 18, par: 5, hdcp: 6, blue: 590, white: 568, green: 458, red: 395 }
  ]
};
const CENTRAL_GC_WEST_COURSE = {
  name: "\u30BB\u30F3\u30C8\u30E9\u30EB\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6 \u897F\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 4, hdcp: 9, blue: 324, white: 303, green: 295, red: 245 },
    { hole: 2, par: 4, hdcp: 3, blue: 384, white: 373, green: 285, red: 285 },
    { hole: 3, par: 3, hdcp: 15, blue: 188, white: 180, green: 140, red: 120 },
    { hole: 4, par: 5, hdcp: 1, blue: 568, white: 525, green: 481, red: 395 },
    { hole: 5, par: 5, hdcp: 7, blue: 514, white: 479, green: 434, red: 384 },
    { hole: 6, par: 4, hdcp: 13, blue: 405, white: 399, green: 330, red: 292 },
    { hole: 7, par: 4, hdcp: 11, blue: 370, white: 364, green: 360, red: 317 },
    { hole: 8, par: 3, hdcp: 17, blue: 180, white: 173, green: 157, red: 127 },
    { hole: 9, par: 4, hdcp: 5, blue: 380, white: 371, green: 356, red: 297 },
    { hole: 10, par: 5, hdcp: 4, blue: 490, white: 488, green: 456, red: 320 },
    { hole: 11, par: 4, hdcp: 10, blue: 350, white: 346, green: 326, red: 290 },
    { hole: 12, par: 3, hdcp: 16, blue: 188, white: 183, green: 146, red: 120 },
    { hole: 13, par: 4, hdcp: 2, blue: 404, white: 390, green: 382, red: 318 },
    { hole: 14, par: 4, hdcp: 8, blue: 342, white: 336, green: 317, red: 265 },
    { hole: 15, par: 4, hdcp: 14, blue: 373, white: 333, green: 320, red: 309 },
    { hole: 16, par: 3, hdcp: 12, blue: 156, white: 151, green: 130, red: 130 },
    { hole: 17, par: 4, hdcp: 18, blue: 442, white: 437, green: 390, red: 265 },
    { hole: 18, par: 5, hdcp: 6, blue: 540, white: 536, green: 519, red: 395 }
  ]
};
const NARITA_HILLS_CC_COURSE = {
  name: "\u6210\u7530\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    { hole: 1, par: 4, hdcp: 9, black: 417, blue: 373, white: 327, gold: 277, red: 248 },
    { hole: 2, par: 5, hdcp: 3, black: 536, blue: 511, white: 489, gold: 437, red: 354 },
    { hole: 3, par: 4, hdcp: 15, black: 393, blue: 393, white: 364, gold: 295, red: 285 },
    { hole: 4, par: 3, hdcp: 13, black: 207, blue: 172, white: 162, gold: 150, red: 119 },
    { hole: 5, par: 4, hdcp: 1, black: 487, blue: 469, white: 424, gold: 381, red: 275 },
    { hole: 6, par: 4, hdcp: 7, black: 428, blue: 378, white: 349, gold: 330, red: 317 },
    { hole: 7, par: 4, hdcp: 11, black: 416, blue: 401, white: 391, gold: 308, red: 289 },
    { hole: 8, par: 3, hdcp: 17, black: 230, blue: 207, white: 195, gold: 159, red: 122 },
    { hole: 9, par: 5, hdcp: 5, black: 551, blue: 502, white: 484, gold: 430, red: 393 },
    { hole: 10, par: 4, hdcp: 10, black: 349, blue: 312, white: 286, gold: 259, red: 232 },
    { hole: 11, par: 3, hdcp: 16, black: 187, blue: 187, white: 155, gold: 123, red: 105 },
    { hole: 12, par: 5, hdcp: 4, black: 548, blue: 516, white: 467, gold: 442, red: 442 },
    { hole: 13, par: 4, hdcp: 14, black: 373, blue: 356, white: 330, gold: 330, red: 269 },
    { hole: 14, par: 5, hdcp: 2, black: 500, blue: 476, white: 446, gold: 421, red: 421 },
    { hole: 15, par: 4, hdcp: 8, black: 421, blue: 421, white: 396, gold: 292, red: 266 },
    { hole: 16, par: 4, hdcp: 12, black: 415, blue: 415, white: 373, gold: 323, red: 278 },
    { hole: 17, par: 3, hdcp: 18, black: 220, blue: 198, white: 179, gold: 129, red: 100 },
    { hole: 18, par: 4, hdcp: 6, black: 442, blue: 421, white: 388, gold: 336, red: 225 }
  ]
};
const OLYMPIC_EAST_EDELWEISS_COURSE = {
  name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC EAST \u30A8\u30FC\u30C7\u30EB\u30EF\u30A4\u30B9\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 4, hdcp: 0, black: 460, blue: 431, white: 411, red: 365 },
    { hole: 2, par: 4, hdcp: 0, black: 372, blue: 351, white: 312, red: 252 },
    { hole: 3, par: 4, hdcp: 0, black: 440, blue: 418, white: 391, red: 275 },
    { hole: 4, par: 3, hdcp: 0, black: 209, blue: 179, white: 151, red: 116 },
    { hole: 5, par: 4, hdcp: 0, black: 340, blue: 321, white: 290, red: 265 },
    { hole: 6, par: 5, hdcp: 0, black: 545, blue: 522, white: 487, red: 429 },
    { hole: 7, par: 4, hdcp: 0, black: 397, blue: 361, white: 338, red: 272 },
    { hole: 8, par: 3, hdcp: 0, black: 207, blue: 194, white: 174, red: 135 },
    { hole: 9, par: 5, hdcp: 0, black: 527, blue: 500, white: 482, red: 434 }
  ]
};
const OLYMPIC_EAST_ORCHID_COURSE = {
  name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC EAST \u30AA\u30FC\u30AD\u30C3\u30C9\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 4, hdcp: 0, black: 406, blue: 389, white: 360, red: 289 },
    { hole: 2, par: 4, hdcp: 0, black: 395, blue: 369, white: 320, red: 251 },
    { hole: 3, par: 5, hdcp: 0, black: 536, blue: 515, white: 497, red: 446 },
    { hole: 4, par: 4, hdcp: 0, black: 347, blue: 322, white: 290, red: 230 },
    { hole: 5, par: 3, hdcp: 0, black: 164, blue: 145, white: 123, red: 92 },
    { hole: 6, par: 4, hdcp: 0, black: 426, blue: 397, white: 351, red: 283 },
    { hole: 7, par: 4, hdcp: 0, black: 423, blue: 398, white: 365, red: 321 },
    { hole: 8, par: 3, hdcp: 0, black: 190, blue: 164, white: 142, red: 102 },
    { hole: 9, par: 5, hdcp: 0, black: 570, blue: 543, white: 516, red: 438 }
  ]
};
const OLYMPIC_WEST_AZALEA_COURSE = {
  name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC WEST \u30A2\u30B6\u30EC\u30A2\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 3, hdcp: 8, black: 204, blue: 179, white: 158, red: 137 },
    { hole: 2, par: 5, hdcp: 2, black: 491, blue: 459, white: 431, red: 421 },
    { hole: 3, par: 4, hdcp: 5, black: 386, blue: 355, white: 340, red: 280 },
    { hole: 4, par: 5, hdcp: 4, black: 479, blue: 445, white: 391, red: 363 },
    { hole: 5, par: 4, hdcp: 1, black: 477, blue: 432, white: 412, red: 388 },
    { hole: 6, par: 3, hdcp: 7, black: 163, blue: 139, white: 123, red: 102 },
    { hole: 7, par: 5, hdcp: 9, black: 506, blue: 484, white: 443, red: 380 },
    { hole: 8, par: 4, hdcp: 3, black: 416, blue: 399, white: 368, red: 304 },
    { hole: 9, par: 3, hdcp: 6, black: 160, blue: 138, white: 122, red: 109 }
  ]
};
const OLYMPIC_WEST_CAMELLIA_COURSE = {
  name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC WEST \u30AB\u30E1\u30EA\u30A2\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 5, hdcp: 2, black: 513, blue: 497, white: 432, red: 407 },
    { hole: 2, par: 3, hdcp: 8, black: 163, blue: 144, white: 127, red: 106 },
    { hole: 3, par: 5, hdcp: 3, black: 616, blue: 590, white: 461, red: 412 },
    { hole: 4, par: 4, hdcp: 7, black: 407, blue: 383, white: 363, red: 343 },
    { hole: 5, par: 4, hdcp: 9, black: 356, blue: 337, white: 317, red: 256 },
    { hole: 6, par: 3, hdcp: 5, black: 169, blue: 148, white: 128, red: 113 },
    { hole: 7, par: 4, hdcp: 6, black: 408, blue: 376, white: 350, red: 286 },
    { hole: 8, par: 3, hdcp: 4, black: 174, blue: 157, white: 138, red: 119 },
    { hole: 9, par: 5, hdcp: 1, black: 584, blue: 552, white: 510, red: 410 }
  ]
};
const OLYMPIC_WEST_SHIBAZAKURA_COURSE = {
  name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC WEST \u30B7\u30D0\u30B6\u30AF\u30E9\u30B3\u30FC\u30B9",
  holes: [
    { hole: 1, par: 3, hdcp: 8, black: 179, blue: 179, white: 154, red: 85 },
    { hole: 2, par: 5, hdcp: 1, black: 581, blue: 561, white: 530, red: 384 },
    { hole: 3, par: 3, hdcp: 4, black: 199, blue: 185, white: 141, red: 125 },
    { hole: 4, par: 5, hdcp: 5, black: 555, blue: 507, white: 437, red: 418 },
    { hole: 5, par: 4, hdcp: 6, black: 387, blue: 355, white: 328, red: 258 },
    { hole: 6, par: 4, hdcp: 7, black: 382, blue: 341, white: 312, red: 252 },
    { hole: 7, par: 4, hdcp: 9, black: 332, blue: 296, white: 282, red: 238 },
    { hole: 8, par: 3, hdcp: 2, black: 172, blue: 152, white: 130, red: 102 },
    { hole: 9, par: 5, hdcp: 3, black: 518, blue: 495, white: 475, red: 404 }
  ]
};
const SAINOMORI_CC_COURSE = {
  name: "\u5F69\u306E\u68EE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
  holes: [
    // left: 左グリーン(LEFT), right: 右グリーン(RIGHT)
    { hole: 1, par: 4, hdcp: 9, left: { blue: 382, white: 350, green: 317, red: 216 }, right: { blue: 412, white: 379, green: 346, red: 245 } },
    { hole: 2, par: 5, hdcp: 5, left: { blue: 536, white: 513, green: 484, red: 410 }, right: { blue: 508, white: 484, green: 455, red: 381 } },
    { hole: 3, par: 4, hdcp: 1, left: { blue: 431, white: 390, green: 242, red: 230 }, right: { blue: 435, white: 394, green: 246, red: 232 } },
    { hole: 4, par: 3, hdcp: 13, left: { blue: 170, white: 157, green: 143, red: 88 }, right: { blue: 169, white: 162, green: 160, red: 113 } },
    { hole: 5, par: 4, hdcp: 17, left: { blue: 379, white: 372, green: 331, red: 243 }, right: { blue: 365, white: 358, green: 318, red: 230 } },
    { hole: 6, par: 5, hdcp: 7, left: { blue: 504, white: 471, green: 406, red: 362 }, right: { blue: 513, white: 479, green: 415, red: 368 } },
    { hole: 7, par: 4, hdcp: 3, left: { blue: 378, white: 369, green: 310, red: 249 }, right: { blue: 396, white: 387, green: 328, red: 265 } },
    { hole: 8, par: 3, hdcp: 15, left: { blue: 147, white: 135, green: 110, red: 78 }, right: { blue: 193, white: 184, green: 139, red: 88 } },
    { hole: 9, par: 4, hdcp: 11, left: { blue: 285, white: 252, green: 230, red: 130 }, right: { blue: 363, white: 330, green: 308, red: 221 } },
    { hole: 10, par: 4, hdcp: 6, left: { blue: 432, white: 409, green: 373, red: 238 }, right: { blue: 407, white: 384, green: 348, red: 224 } },
    { hole: 11, par: 3, hdcp: 18, left: { blue: 181, white: 162, green: 114, red: 114 }, right: { blue: 148, white: 131, green: 87, red: 87 } },
    { hole: 12, par: 4, hdcp: 12, left: { blue: 406, white: 382, green: 338, red: 236 }, right: { blue: 351, white: 327, green: 283, red: 182 } },
    { hole: 13, par: 5, hdcp: 2, left: { blue: 477, white: 457, green: 436, red: 366 }, right: { blue: 511, white: 491, green: 470, red: 400 } },
    { hole: 14, par: 4, hdcp: 16, left: { blue: 322, white: 304, green: 287, red: 287 }, right: { blue: 310, white: 291, green: 274, red: 274 } },
    { hole: 15, par: 4, hdcp: 14, left: { blue: 352, white: 331, green: 313, red: 226 }, right: { blue: 389, white: 368, green: 350, red: 268 } },
    { hole: 16, par: 3, hdcp: 8, left: { blue: 227, white: 216, green: 150, red: 82 }, right: { blue: 206, white: 195, green: 137, red: 84 } },
    { hole: 17, par: 4, hdcp: 10, left: { blue: 386, white: 360, green: 338, red: 241 }, right: { blue: 354, white: 328, green: 306, red: 196 } },
    { hole: 18, par: 5, hdcp: 4, left: { blue: 570, white: 558, green: 462, red: 412 }, right: { blue: 552, white: 541, green: 444, red: 394 } }
  ]
};
const VENUES = [
  {
    id: "nakayama",
    name: "\u4E2D\u5C71\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [
      { id: "bent", label: "\u30D9\u30F3\u30C8\uFF08A\uFF09" },
      { id: "korai", label: "\u9AD8\u9E97\uFF08B\uFF09" }
    ],
    tees: [
      { id: "back", label: "BACK" },
      { id: "reg", label: "REGULAR" },
      { id: "gold", label: "GOLD\uFF08\u30D9\u30F3\u30C8\u306E\u307F\uFF09" },
      { id: "ladies", label: "LADIES" }
    ],
    subCourses: [
      {
        name: "OUT",
        holes: NAKAYAMA_COURSE.holes.slice(0, 9)
      },
      {
        name: "IN",
        holes: NAKAYAMA_COURSE.holes.slice(9, 18)
      }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "bent" ? hole.bent : hole.korai;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "gold") return green === "bent" ? d.gold : null;
      if (tee === "ladies") return d.ladies;
      return null;
    }
  },
  {
    id: "sobu_sobu",
    name: "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9",
    greens: [
      { id: "bent", label: "\u30D9\u30F3\u30C8" },
      { id: "korai", label: "\u9AD8\u9E97\uFF08\u30B3\u30FC\u30E9\u30A4\uFF09" }
    ],
    tees: [
      { id: "back", label: "\u30D0\u30C3\u30AF\uFF08Blue\uFF09" },
      { id: "reg", label: "\u30EC\u30AE\u30E5\u30E9\u30FC\uFF08White\uFF09" },
      { id: "ladies", label: "\u30EC\u30C7\u30A3\u30FC\u30B9\uFF08Red\uFF09" }
    ],
    subCourses: SOBU_SOBU_COURSE.courses.map((c) => ({
      name: c.name,
      holes: c.holes
    })),
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  {
    id: "sobu_inba",
    name: "\u7DCF\u6B66CC \u5370\u65DB\u30B3\u30FC\u30B9",
    greens: [
      { id: "bent", label: "\u30D9\u30F3\u30C8\uFF081\u30B0\u30EA\u30FC\u30F3\uFF09" }
    ],
    tees: [
      { id: "back", label: "Back" },
      { id: "reg", label: "Regular" },
      { id: "ladies", label: "Ladies" }
    ],
    subCourses: [
      { name: "OUT", holes: SOBU_INBA_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: SOBU_INBA_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  {
    id: "sobu_kita",
    name: "\u7DCF\u6B66CC \u5317\u30B3\u30FC\u30B9",
    greens: [
      { id: "bent", label: "\u30D9\u30F3\u30C8\uFF08A\uFF09" },
      { id: "korai", label: "\u9AD8\u9E97\uFF08B\uFF09" }
    ],
    tees: [
      { id: "back", label: "Blue\uFF08Back\uFF09" },
      { id: "reg", label: "White\uFF08Regular\uFF09" },
      { id: "ladies", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "\u5317", holes: SOBU_KITA_COURSE.holes }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── カメリアヒルズカントリークラブ ───
  {
    id: "camellia_hills",
    name: "\u30AB\u30E1\u30EA\u30A2\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "back", label: "BACK" },
      { id: "reg", label: "REGULAR" },
      { id: "front", label: "FRONT" },
      { id: "ladies", label: "LADIES" }
    ],
    subCourses: [
      { name: "OUT", holes: CAMELLIA_HILLS_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: CAMELLIA_HILLS_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "front") return hole.front;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── カレドニアン・ゴルフクラブ ───
  {
    id: "caledonian_gc",
    name: "\u30AB\u30EC\u30C9\u30CB\u30A2\u30F3\u30FB\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "gold", label: "GOLD" },
      { id: "blue", label: "BLUE" },
      { id: "white", label: "WHITE" },
      { id: "red", label: "RED\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: CALEDONIAN_GC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: CALEDONIAN_GC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "gold") return hole.gold;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── 鷹之台カンツリー倶楽部（ベントグリーンのみ） ───
  {
    id: "takanodai_cc",
    name: "\u9DF9\u4E4B\u53F0\u30AB\u30F3\u30C4\u30EA\u30FC\u5036\u697D\u90E8",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8\uFF081\u30B0\u30EA\u30FC\u30F3\u4F7F\u7528\uFF09" }],
    tees: [
      { id: "fullback", label: "Fullback" },
      { id: "back", label: "Back" },
      { id: "reg", label: "Regular" },
      { id: "front", label: "Front" },
      { id: "ladies", label: "Ladies" }
    ],
    subCourses: [
      { name: "OUT", holes: TAKANODAI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: TAKANODAI_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = hole.bent;
      if (!d) return null;
      if (tee === "fullback") return d.fullback;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "front") return d.front;
      if (tee === "ladies") return d.ladies;
      return null;
    }
  },
  // ─── 太平洋クラブ 八千代コース ───
  {
    id: "taiheiyoclub_yachiyo",
    name: "\u592A\u5E73\u6D0B\u30AF\u30E9\u30D6 \u516B\u5343\u4EE3\u30B3\u30FC\u30B9",
    greens: [
      { id: "a", label: "A\u30B0\u30EA\u30FC\u30F3\uFF08CY-2\uFF09" },
      { id: "b", label: "B\u30B0\u30EA\u30FC\u30F3\uFF08CY-2\uFF09" }
    ],
    tees: [
      { id: "rt", label: "RT\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "mt", label: "MT\uFF08\u30DF\u30C9\u30EB\uFF09" },
      { id: "ft", label: "FT\uFF08\u30D5\u30ED\u30F3\u30C8\uFF09" },
      { id: "lt", label: "LT\uFF08\u30EC\u30C7\u30A3\u30FC\u30B9\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYOCLUB_YACHIYO_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: TAIHEIYOCLUB_YACHIYO_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "rt") return d.rt;
      if (tee === "mt") return d.mt;
      if (tee === "ft") return d.ft;
      if (tee === "lt") return d.lt;
      return null;
    }
  },
  // ─── グレンオークスカントリークラブ ───
  {
    id: "glen_oaks_cc",
    name: "\u30B0\u30EC\u30F3\u30AA\u30FC\u30AF\u30B9\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "black", label: "Black" },
      { id: "blue", label: "Blue" },
      { id: "white", label: "White" },
      { id: "green", label: "Green" },
      { id: "red", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: GLEN_OAKS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: GLEN_OAKS_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── オーク・ヒルズカントリークラブ ───
  {
    id: "oak_hills_cc",
    name: "\u30AA\u30FC\u30AF\u30FB\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "black", label: "\u30D6\u30E9\u30C3\u30AF" },
      { id: "blue", label: "\u30D6\u30EB\u30FC" },
      { id: "white", label: "\u30DB\u30EF\u30A4\u30C8" },
      { id: "green", label: "\u30B0\u30EA\u30FC\u30F3" },
      { id: "red", label: "\u30EC\u30C3\u30C9\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: OAK_HILLS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: OAK_HILLS_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── 習志野カントリークラブ キングコース ───
  {
    id: "narashino_cc_king",
    name: "\u7FD2\u5FD7\u91CE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6\uFF08King\uFF09",
    greens: [
      { id: "a", label: "A\u30B0\u30EA\u30FC\u30F3\uFF08\u30D9\u30F3\u30C8\uFF09" },
      { id: "b", label: "B\u30B0\u30EA\u30FC\u30F3\uFF08\u30D9\u30F3\u30C8\uFF09" }
    ],
    tees: [
      { id: "blue", label: "Blue" },
      { id: "white", label: "White" },
      { id: "red", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "King OUT", holes: NARASHINO_CC_KING_COURSE.holes.slice(0, 9) },
      { name: "King IN", holes: NARASHINO_CC_KING_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "blue") return d.blue;
      if (tee === "white") return d.white;
      if (tee === "red") return d.red;
      return null;
    }
  },
  // ─── 習志野カントリークラブ クィーンコース ───
  {
    id: "narashino_cc_queen",
    name: "\u7FD2\u5FD7\u91CE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6\uFF08Queen\uFF09",
    greens: [
      { id: "a", label: "A\u30B0\u30EA\u30FC\u30F3\uFF08\u30D9\u30F3\u30C8\uFF09" },
      { id: "b", label: "B\u30B0\u30EA\u30FC\u30F3\uFF08\u30D9\u30F3\u30C8\uFF09" }
    ],
    tees: [
      { id: "blue", label: "Blue" },
      { id: "white", label: "White" },
      { id: "red", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "Queen OUT", holes: NARASHINO_CC_QUEEN_COURSE.holes.slice(0, 9) },
      { name: "Queen IN", holes: NARASHINO_CC_QUEEN_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "blue") return d.blue;
      if (tee === "white") return d.white;
      if (tee === "red") return d.red;
      return null;
    }
  },
  // ─── 佐原カントリークラブ ───
  {
    id: "sawara_cc",
    name: "\u4F50\u539F\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "back", label: "Blue\uFF08Back\uFF09" },
      { id: "reg", label: "White\uFF08Regular\uFF09" },
      { id: "ladies", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: SAWARA_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: SAWARA_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── 東庄ゴルフ倶楽部 ───
  {
    id: "tosho_gc",
    name: "\u6771\u5E84\u30B4\u30EB\u30D5\u5036\u697D\u90E8",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8\uFF08\u30DA\u30F3\u30AF\u30ED\u30B9\uFF09" }],
    tees: [
      { id: "back", label: "Blue\uFF08Back\uFF09" },
      { id: "reg", label: "White\uFF08Regular\uFF09" },
      { id: "silver", label: "Silver" },
      { id: "ladies", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: TOSHO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: TOSHO_GC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "silver") return hole.silver;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── CPGカントリークラブ（ちばパブ） ───
  {
    id: "cpg_cc",
    name: "CPG\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6\uFF08\u3061\u3070\u30D1\u30D6\uFF09",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "back", label: "BACK" },
      { id: "reg", label: "REG" },
      { id: "ladies", label: "LADIES" }
    ],
    subCourses: [
      { name: "OUT", holes: CPG_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: CPG_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── 東京国際空港ゴルフ倶楽部 ───
  {
    id: "tokyo_intl_airport_gc",
    name: "\u6771\u4EAC\u56FD\u969B\u7A7A\u6E2F\u30B4\u30EB\u30D5\u5036\u697D\u90E8",
    greens: [
      { id: "bent", label: "\u30D9\u30F3\u30C8\uFF08B\uFF09" },
      { id: "korai", label: "\u30B3\u30FC\u30E9\u30A4\uFF08K\uFF09" }
    ],
    tees: [
      { id: "back", label: "BT\uFF08Back\uFF09" },
      { id: "reg", label: "RT\uFF08Regular\uFF09" },
      { id: "ladies", label: "LT\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: TOKYO_INTL_AIRPORT_GC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: TOKYO_INTL_AIRPORT_GC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "korai" ? hole.korai : hole.bent;
      if (!d) return null;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "ladies") return d.ladies;
      return null;
    }
  },
  // ─── 船橋カントリークラブ ───
  {
    id: "funabashi_cc",
    name: "\u8239\u6A4B\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [
      { id: "a", label: "A\u30B0\u30EA\u30FC\u30F3\uFF08\u30D9\u30F3\u30C8\uFF09" },
      { id: "b", label: "B\u30B0\u30EA\u30FC\u30F3\uFF08\u30CB\u30E5\u30FC\u30D9\u30F3\u30C8\uFF09" }
    ],
    tees: [
      { id: "champ", label: "Championship" },
      { id: "back", label: "Back" },
      { id: "reg", label: "Regular" },
      { id: "front", label: "Front\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: FUNABASHI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: FUNABASHI_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "champ") return d.champ;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "front") return d.front;
      return null;
    }
  },
  // ─── 泉カントリー倶楽部（East / West / South） ───
  {
    id: "izumi_cc",
    name: "\u6CC9\u30AB\u30F3\u30C8\u30EA\u30FC\u5036\u697D\u90E8",
    greens: [
      { id: "a", label: "A\u30B0\u30EA\u30FC\u30F3\uFF08\u30CB\u30E5\u30FC\u30D9\u30F3\u30C8\uFF09" },
      { id: "b", label: "B\u30B0\u30EA\u30FC\u30F3\uFF08\u30CB\u30E5\u30FC\u30D9\u30F3\u30C8\uFF09" }
    ],
    tees: [
      { id: "back", label: "Back" },
      { id: "reg", label: "Regular" },
      { id: "front", label: "Front" },
      { id: "gold", label: "Gold\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "East", holes: IZUMI_CC_EAST_COURSE.holes },
      { name: "West", holes: IZUMI_CC_WEST_COURSE.holes },
      { name: "South", holes: IZUMI_CC_SOUTH_COURSE.holes }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "front") return d.front;
      if (tee === "gold") return d.gold;
      return null;
    }
  },
  // ─── 千葉松尾ゴルフクラブ ───
  {
    id: "chiba_matsuo_gc",
    name: "\u5343\u8449\u677E\u5C3E\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "back", label: "B.T\uFF08\u30D0\u30C3\u30AF\uFF09" },
      { id: "reg", label: "R.T\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "ladies", label: "L.T\uFF08\u30EC\u30C7\u30A3\u30FC\u30B9\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: CHIBA_MATSUO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: CHIBA_MATSUO_GC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back") return hole.back;
      if (tee === "reg") return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    }
  },
  // ─── 袖ヶ浦カンツリークラブ 新袖コース ───
  {
    id: "sodegaura_shinsode",
    name: "\u8896\u30F6\u6D66CC \u65B0\u8896\u30B3\u30FC\u30B9",
    greens: [
      { id: "new", label: "NEW\u30D9\u30F3\u30C8" },
      { id: "old", label: "OLD\u30D9\u30F3\u30C8" }
    ],
    tees: [
      { id: "back", label: "BT\uFF08\u30D0\u30C3\u30AF\uFF09" },
      { id: "reg", label: "RT\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "front", label: "FT\uFF08\u30D5\u30ED\u30F3\u30C8\uFF09" },
      { id: "gold", label: "GT\uFF08\u30B4\u30FC\u30EB\u30C9\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: SODEGAURA_SHINSODE_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: SODEGAURA_SHINSODE_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "new" ? hole.new : hole.old;
      if (!d) return null;
      if (tee === "back") return d.back;
      if (tee === "reg") return d.reg;
      if (tee === "front") return d.front;
      if (tee === "gold") return d.gold;
      return null;
    }
  },
  // ─── セントラルゴルフクラブ ───
  {
    id: "central_gc",
    name: "\u30BB\u30F3\u30C8\u30E9\u30EB\u30B4\u30EB\u30D5\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "blue", label: "Blue" },
      { id: "white", label: "White" },
      { id: "green", label: "Green" },
      { id: "red", label: "Red\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "\u6771 OUT", holes: CENTRAL_GC_EAST_COURSE.holes.slice(0, 9) },
      { name: "\u6771 IN", holes: CENTRAL_GC_EAST_COURSE.holes.slice(9, 18) },
      { name: "\u897F OUT", holes: CENTRAL_GC_WEST_COURSE.holes.slice(0, 9) },
      { name: "\u897F IN", holes: CENTRAL_GC_WEST_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── 成田ヒルズカントリークラブ ───
  {
    id: "narita_hills_cc",
    name: "\u6210\u7530\u30D2\u30EB\u30BA\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [{ id: "bent", label: "\u30E1\u30E2\u30EA\u30A2\u30EB\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "black", label: "Black\uFF08\u30D5\u30EB\u30D0\u30C3\u30AF\uFF09" },
      { id: "blue", label: "Blue\uFF08\u30D0\u30C3\u30AF\uFF09" },
      { id: "white", label: "White\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "gold", label: "Gold\uFF08\u30D5\u30ED\u30F3\u30C8\uFF09" },
      { id: "red", label: "Red\uFF08\u30EC\u30C7\u30A3\u30FC\u30B9\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: NARITA_HILLS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: NARITA_HILLS_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "gold") return hole.gold;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── オリムピックナショナルGC EAST ───
  {
    id: "olympic_national_east",
    name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC EAST",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "black", label: "Black\uFF08\u30D0\u30C3\u30AF\uFF09" },
      { id: "blue", label: "Blue" },
      { id: "white", label: "White\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "red", label: "Red\uFF08\u30EC\u30C7\u30A3\u30FC\u30B9\uFF09" }
    ],
    subCourses: [
      { name: "\u30A8\u30FC\u30C7\u30EB\u30EF\u30A4\u30B9", holes: OLYMPIC_EAST_EDELWEISS_COURSE.holes },
      { name: "\u30AA\u30FC\u30AD\u30C3\u30C9", holes: OLYMPIC_EAST_ORCHID_COURSE.holes }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── オリムピックナショナルGC WEST ───
  {
    id: "olympic_national_west",
    name: "\u30AA\u30EA\u30E0\u30D4\u30C3\u30AF\u30CA\u30B7\u30E7\u30CA\u30EBGC WEST",
    greens: [{ id: "bent", label: "\u30D9\u30F3\u30C8" }],
    tees: [
      { id: "black", label: "Black\uFF08\u30D0\u30C3\u30AF\uFF09" },
      { id: "blue", label: "Blue" },
      { id: "white", label: "White\uFF08\u30EC\u30AE\u30E5\u30E9\u30FC\uFF09" },
      { id: "red", label: "Red\uFF08\u30EC\u30C7\u30A3\u30FC\u30B9\uFF09" }
    ],
    subCourses: [
      { name: "\u30A2\u30B6\u30EC\u30A2", holes: OLYMPIC_WEST_AZALEA_COURSE.holes },
      { name: "\u30AB\u30E1\u30EA\u30A2", holes: OLYMPIC_WEST_CAMELLIA_COURSE.holes },
      { name: "\u30B7\u30D0\u30B6\u30AF\u30E9", holes: OLYMPIC_WEST_SHIBAZAKURA_COURSE.holes }
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue") return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red") return hole.red;
      return null;
    }
  },
  // ─── 彩の森カントリークラブ ───
  {
    id: "sainomori_cc",
    name: "\u5F69\u306E\u68EE\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    greens: [
      { id: "left", label: "LEFT\uFF08\u5DE6\uFF09" },
      { id: "right", label: "RIGHT\uFF08\u53F3\uFF09" }
    ],
    tees: [
      { id: "blue", label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red", label: "Red Tee\uFF08Ladies\uFF09" }
    ],
    subCourses: [
      { name: "OUT", holes: SAINOMORI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN", holes: SAINOMORI_CC_COURSE.holes.slice(9, 18) }
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "right" ? hole.right : hole.left;
      if (!d) return null;
      if (tee === "blue") return d.blue;
      if (tee === "white") return d.white;
      if (tee === "green") return d.green;
      if (tee === "red") return d.red;
      return null;
    }
  }
];
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
  let shortScore;
  if (hcp !== null && hcp !== void 0) {
    const idealGIR = calcIdealGIR(hcp, holes.length);
    const avgPutt = approachHoles.length > 0 ? approachPuttTotal / approachHoles.length : 0;
    shortScore = r(holes.length * 2 - idealGIR - avgPutt * holes.length);
  } else {
    const approachShots = approachHoles.map((h) => h.approachEval);
    const appBad = approachShots.filter((v) => v === "\xD7").length / Math.max(approachShots.length, 1);
    const appFair = approachShots.filter((v) => v === "\u25B3").length / Math.max(approachShots.length, 1);
    shortScore = r((appFair * -0.5 + appBad * -1) * avgAfterPutts);
  }
  const threePuttCount = holes.filter((h) => (h.putts || 0) >= 3).length;
  const totalPutts = holes.reduce((a, h) => a + (h.putts || 0), 0);
  const totalParSum = holes.reduce((a, h) => a + h.par, 0);
  let puttScore;
  if (hcp !== null && hcp !== void 0) {
    puttScore = r((totalParSum + hcp) * 0.4 - totalPutts - threePuttCount);
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
    shortScore: r(shortScore),
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
    const score = shots.reduce((a, s) => a + s.shotCount, 0);
    const putts = shots.filter((s) => s.categoryKey === "putt").reduce((a, s) => a + s.shotCount, 0);
    const ob = shots.filter((s) => s.subType === "ob").length;
    const penalty = shots.filter((s) => s.subType === "1pen").reduce((a, s) => a + (s.penaltyCount || 0), 0);
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
    puttScore = r((totalParSum + hcp) * 0.4 - totalPutts - threePuttCount);
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
function generateDiagnosis(sa, shd, hcp, rounds, roundId) {
  var _a, _b, _c;
  const holeEntries = Object.entries(shd || {});
  const is9H = sa.holeCount <= 12;
  const hcAdj = is9H ? Math.floor(hcp / 2) : hcp;
  const expectedScore = sa.totalPar + hcAdj;
  const gap = Math.round((sa.totalScore - expectedScore) * 10) / 10;
  const count = (key, val) => holeEntries.filter(([, h]) => normQuality(h[key]) === val).length;
  const threePutts = holeEntries.filter(([, h]) => (h.putts || 0) >= 3).length;
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
    { maxZ: -0.5, label: "\u7D76\u597D\u8ABF", color: "#f59e0b", emoji: "\u{1F451}", comment: "\u5B9F\u529B\u4EE5\u4E0A\u306E\u30E9\u30A6\u30F3\u30C9\u3002\u30B3\u30F3\u30C7\u30A3\u30B7\u30E7\u30F3\u304C\u975E\u5E38\u306B\u826F\u304B\u3063\u305F\u3067\u3059\uFF01" },
    { maxZ: 0.5, label: "\u597D\u8ABF", color: "#16a34a", emoji: "\u{1F3C6}", comment: "\u5B9F\u529B\u3092\u3057\u3063\u304B\u308A\u767A\u63EE\u3067\u304D\u305F\u30E9\u30A6\u30F3\u30C9\u3067\u3059\u3002" },
    { maxZ: 1, label: "\u6A19\u6E96", color: "#0ea5e9", emoji: "\u{1F4CA}", comment: "\u5B9F\u529B\u76F8\u5FDC\u306E\u30B9\u30B3\u30A2\u3067\u3059\u3002\u5F31\u70B9\u306E\u6539\u5584\u3067\u6B21\u306E\u30EC\u30D9\u30EB\u3078\u3002" },
    { maxZ: 2, label: "\u3084\u3084\u4E0D\u8ABF", color: "#fbbf24", emoji: "\u{1F3AF}", comment: "\u5B9F\u529B\u3088\u308A\u5C11\u3057\u843D\u3061\u305F\u30E9\u30A6\u30F3\u30C9\u3002\u4F55\u304C\u539F\u56E0\u304B\u632F\u308A\u8FD4\u308A\u307E\u3057\u3087\u3046\u3002" },
    { maxZ: Infinity, label: "\u4E0D\u8ABF", color: "#dc2626", emoji: "\u{1F331}", comment: "\u8AB2\u984C\u304C\u91CD\u306A\u3063\u305F\u30E9\u30A6\u30F3\u30C9\u3067\u3059\u3002\u7279\u5B9A\u306E\u5F31\u70B9\u306B\u96C6\u4E2D\u3057\u3066\u5BFE\u51E6\u3092\u3002" }
  ];
  const lvl = (_b = gapLevels.find((l) => z <= l.maxZ)) != null ? _b : gapLevels[gapLevels.length - 1];
  const gradeOf = (score, hcpForTee = null, idealGIRForLong = null, isShort = false, isDetailShort = false) => {
    if (score == null) return { label: "\uFF0D", color: "#475569" };
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
      if (score > 5) return { label: "S", color: "#D4A017" };
      if (score > 2) return { label: "A", color: "#3FA34D" };
      if (score > 0) return { label: "B", color: "#4DA8DA" };
      if (score > -3) return { label: "C", color: "#C2B280" };
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
  const longGood = longQuals.filter((v) => v === "\u25CB").length;
  const longBad = longQuals.filter((v) => v === "\xD7").length;
  const longTotal = longQuals.length;
  const shortQuals = sa.shortShotQuals || [];
  const shortGood = shortQuals.filter((v) => v === "\u25CB").length;
  const shortBad = shortQuals.filter((v) => v === "\xD7").length;
  const shortTotal = shortQuals.length;
  const puttRef = is9H ? 20 : 36;
  const diagIdealGIR = (_c = sa.idealGIR) != null ? _c : null;
  const insights = {
    tee: (() => {
      const g = gradeOf(sa.teeScore);
      if (g.label === "S" || g.label === "A") {
        return sa.totalOB + sa.totalPen > 0 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u5B89\u5B9A\u3002\u305F\u3060\u3057OB/\u30DA\u30CA\u30EB\u30C6\u30A3${sa.totalOB + sa.totalPen}\u56DE\u306F\u8981\u6CE8\u610F` : `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25CB${teeGood}\u56DE\u3002\u3053\u306E\u8ABF\u5B50\u3092\u7DAD\u6301\u3057\u3088\u3046`;
      }
      if (g.label === "B") {
        return teeFair >= teeGood ? "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25B3\u304C\u591A\u3081\u3002\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u7387\u3092\u4E0A\u3052\u3088\u3046" : "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u306F\u6A19\u6E96\u7684\u3002\u3082\u3046\u4E00\u6BB5\u306E\u5B89\u5B9A\u611F\u3092\u76EE\u6307\u305D\u3046";
      }
      return sa.totalOB + sa.totalPen >= 4 ? `OB/\u30DA\u30CA\u30EB\u30C6\u30A3${sa.totalOB + sa.totalPen}\u56DE\u3002\u7F70\u6253\u304C\u30B9\u30B3\u30A2\u3092\u76F4\u6483\u3057\u3066\u3044\u307E\u3059` : teeBad >= 5 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\xD7\u304C${teeBad}\u56DE\u3002\u30A4\u30F3\u30D1\u30AF\u30C8\u7CBE\u5EA6\u306E\u5B89\u5B9A\u304C\u6700\u512A\u5148\u8AB2\u984C` : teeBad >= 3 ? `\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30DF\u30B9${teeBad}\u56DE\u3002\u30B9\u30A4\u30F3\u30B0\u306E\u30A4\u30F3\u30D1\u30AF\u30C8\u30BE\u30FC\u30F3\u3092\u78BA\u8A8D\u3057\u3088\u3046` : band.id === "S" || band.id === "A+" || band.id === "A" ? "\u25B3\u304C\u591A\u3081\u3002\u30D5\u30A7\u30FC\u30B9\u7BA1\u7406\u3068\u30A4\u30F3\u30D1\u30AF\u30C8\u30BE\u30FC\u30F3\u306E\u7CBE\u5EA6\u5411\u4E0A\u3067\u25CB\u7387\u3092\u9AD8\u3081\u3088\u3046" : "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u25B3\u304C\u591A\u3081\u3002\u30B3\u30F3\u30D1\u30AF\u30C8\u306A\u30B9\u30A4\u30F3\u30B0\u3067\u82AF\u5F53\u3066\u7387\u3092\u4E0A\u3052\u3088\u3046";
    })(),
    long: (() => {
      const g = gradeOf(sa.longScore, null, diagIdealGIR);
      if (g.label === "S" || g.label === "A") {
        return longGood >= longTotal * 0.6 ? "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u304C\u5B89\u5B9A\u3002\u5927\u304D\u306A\u5F37\u307F\u3067\u3059" : "GIR\u304C\u5B89\u5B9A\u3057\u3066\u3044\u307E\u3059\u3002\u3053\u306E\u8ABF\u5B50\u3092\u7DAD\u6301\u3057\u3088\u3046";
      }
      if (g.label === "B") {
        return longBad >= 2 ? `\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\xD7${longBad}\u56DE\u3002\u756A\u624B\u9078\u3073\u3068\u65B9\u5411\u6027\u3092\u898B\u76F4\u305D\u3046` : "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u306F\u6A19\u6E96\u7684\u3002GIR\u7387\u306E\u5411\u4E0A\u3067\u30B9\u30B3\u30A2\u304C\u5909\u308F\u308A\u307E\u3059";
      }
      return longBad >= 4 ? `\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\xD7${longBad}\u56DE\u3002\u756A\u624B\u9078\u3073\u3068\u65B9\u5411\u6027\u3092\u898B\u76F4\u305D\u3046` : "GIR\u304C\u671F\u5F85\u3092\u4E0B\u56DE\u3063\u3066\u3044\u307E\u3059\u3002\u30B0\u30EA\u30FC\u30F3\u3092\u6349\u3048\u308B\u7CBE\u5EA6\u5411\u4E0A\u304C\u6700\u512A\u5148\u8AB2\u984C";
    })(),
    short: (() => {
      const g = gradeOf(sa.shortScore, null, null, true, sa.isDetailMode);
      if (g.label === "D" || g.label === "C") {
        return shortBad >= 4 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\xD7${shortBad}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u306E\u7CBE\u5EA6\u304C\u6700\u91CD\u8981\u8AB2\u984C` : "\u5BC4\u305B\u5F8C\u306B1\u30D1\u30C3\u30C8\u3067\u4E0A\u304C\u308B\u305F\u3081\u306E\u30A8\u30EA\u30A2\u3092\u610F\u8B58\u3057\u307E\u3057\u3087\u3046";
      }
      return shortBad >= 4 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\xD7${shortBad}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u306E\u7CBE\u5EA6\u304C\u6700\u91CD\u8981\u8AB2\u984C` : sa.avgAfterPutts > 2.3 ? band.id === "S" || band.id === "A+" || band.id === "A" ? `\u5BC4\u305B\u5F8C\u306E\u5E73\u5747${sa.avgAfterPutts}\u30D1\u30C3\u30C8\u3002\u30D4\u30F32m\u4EE5\u5185\u306E\u5BC4\u305B\u7387\u3092\u610F\u8B58\u3057\u3088\u3046` : `\u5BC4\u305B\u5F8C\u306E\u5E73\u5747${sa.avgAfterPutts}\u30D1\u30C3\u30C8\u3002\u5BC4\u305B\u7CBE\u5EA6\u3092\u9AD8\u3081\u3066\u30D1\u30C3\u30C8\u3092\u697D\u306B\u3057\u3088\u3046` : shortGood >= shortTotal * 0.6 ? `\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u25CB${shortGood}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u5468\u308A\u304C\u5F37\u307F\u3067\u3059` : "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0\u306E\u5B89\u5B9A\u611F\u3092\u3082\u3046\u5C11\u3057\u4E0A\u3052\u307E\u3057\u3087\u3046";
    })(),
    putt: threePutts >= 4 ? `3\u30D1\u30C3\u30C8${threePutts}\u56DE\u304C\u75DB\u3044\u3002\u30ED\u30F3\u30B0\u30D1\u30C3\u30C8\u306E\u8DDD\u96E2\u611F\u304C\u6700\u91CD\u8981\u8AB2\u984C` : threePutts >= 2 ? `3\u30D1\u30C3\u30C8${threePutts}\u56DE\u3002\u30D5\u30A1\u30FC\u30B9\u30C8\u30D1\u30C3\u30C8\u306E\u7CBE\u5EA6\u3092\u4E0A\u3052\u308B\u3053\u3068\u304C\u5148\u6C7A` : sa.totalPutts > puttRef + 2 ? `\u30D1\u30C3\u30C8\u6570\u591A\u3081\uFF08${sa.totalPutts}\u30D1\u30C3\u30C8\uFF09\u3002\u30B0\u30EA\u30FC\u30F3\u4E0A\u306E\u5B89\u5B9A\u611F\u3092\u9AD8\u3081\u305F\u3044` : sa.totalPutts <= puttRef - 8 ? `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u30B0\u30EA\u30FC\u30F3\u4E0A\u304C\u5927\u304D\u306A\u6B66\u5668\u3067\u3059` : `\u30D1\u30C3\u30C8${sa.totalPutts}\u56DE\u3002\u6A19\u6E96\u7684\u306A\u6C34\u6E96\u3067\u3059`,
    bunker: (() => {
      if (!sa.bunkerHoleCount) return "\u30D0\u30F3\u30AB\u30FC\u306A\u3057\u3002\u7D20\u6674\u3089\u3057\u3044\u30B3\u30FC\u30B9\u7BA1\u7406\u3067\u3059";
      const g = gradeOf(sa.bunkerScore);
      if (g.label === "S" || g.label === "A") {
        return `\u30D0\u30F3\u30AB\u30FC${sa.bunkerHoleCount}\u30DB\u30FC\u30EB\u3002\u30B9\u30B3\u30A2\u3078\u306E\u5F71\u97FF\u306F\u6700\u5C0F\u9650\u306B\u6291\u3048\u3089\u308C\u3066\u3044\u307E\u3059`;
      }
      if (g.label === "B") {
        return `\u30D0\u30F3\u30AB\u30FC${sa.bunkerHoleCount}\u30DB\u30FC\u30EB\u3002\u307E\u305A\u307E\u305A\u306E\u5BFE\u51E6\u304C\u3067\u304D\u3066\u3044\u307E\u3059`;
      }
      return sa.bunkerHoleCount >= 4 ? `\u30D0\u30F3\u30AB\u30FC${sa.bunkerHoleCount}\u30DB\u30FC\u30EB\u3002\u56DE\u907F\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u3092\u610F\u8B58\u3057\u3066` : `\u30D0\u30F3\u30AB\u30FC${sa.bunkerHoleCount}\u30DB\u30FC\u30EB\u3002\u307E\u305A\u8131\u51FA\u3092\u6700\u512A\u5148\u306B`;
    })()
  };
  const categories = [
    { key: "tee", label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", icon: "\u{1F3CC}\uFE0F", score: sa.teeScore, hcpForGrade: hcp, idealGIRForGrade: null },
    { key: "long", label: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", icon: "\u{1F396}\uFE0F", score: sa.longScore, hcpForGrade: null, idealGIRForGrade: diagIdealGIR },
    { key: "short", label: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", icon: "\u{1F3AF}", score: sa.shortScore, hcpForGrade: null, idealGIRForGrade: null, isShort: true, isDetailMode: sa.isDetailMode },
    { key: "putt", label: "\u30D1\u30C3\u30C8", icon: "\u26F3", score: sa.puttScore, hcpForGrade: null, idealGIRForGrade: null },
    ...sa.bunkerScore != null ? [{ key: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", icon: "\u{1F3D6}\uFE0F", score: sa.bunkerScore, hcpForGrade: null, idealGIRForGrade: null }] : []
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
    const g = gradeOf(cat.score, cat.hcpForGrade, cat.idealGIRForGrade, cat.isShort, cat.isDetailMode);
    return g.label === "C" || g.label === "D";
  };
  const forcedKeys = /* @__PURE__ */ new Set();
  const teeGradeLbl = gradeOf(sa.teeScore, hcp, null).label;
  const puttGradeLbl = gradeOf(sa.puttScore).label;
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
  const prevRounds = (rounds || []).filter((r) => r.isComplete && r.id !== roundId && Object.keys(r.simpleHoleData || {}).length > 0).filter((r) => {
    const rCount = Object.keys(r.simpleHoleData || {}).length;
    return is9H ? rCount <= 12 : rCount > 12;
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
function AiDiagnosisPanel({ sa, shd, hcp, rounds, roundId, teeRates = null, showTrend = true, label = "AI \u30B9\u30B3\u30A2\u8A3A\u65AD", roundCount = null, dateRange = null }) {
  const [showDefs, setShowDefs] = useState(false);
  let d;
  try {
    d = generateDiagnosis(sa, shd, hcp, rounds, roundId);
  } catch (e) {
    return null;
  }
  if (!d || !d.lvl || !d.band) return null;
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
      `), /* @__PURE__ */ React.createElement("div", { className: "dag0", style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px" } }, "\u{1F916}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#a78bfa", letterSpacing: ".06em" } }, label), roundCount != null && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b", background: "rgba(167,139,250,.12)", borderRadius: "4px", padding: "1px 6px" } }, roundCount, "\u30E9\u30A6\u30F3\u30C9\u5E73\u5747"), dateRange && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#475569" } }, dateRange), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "1px", background: "linear-gradient(to right,rgba(167,139,250,.4),transparent)" } })), /* @__PURE__ */ React.createElement("div", { className: "dag1", style: { background: "rgba(167,139,250,.07)", border: "1px solid rgba(167,139,250,.2)", borderRadius: "10px", padding: "12px 14px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "24px" } }, d.lvl.emoji), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b", marginBottom: "2px", textTransform: "uppercase", letterSpacing: ".08em" } }, "\u7DCF\u5408\u8A55\u4FA1"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "17px", fontWeight: "900", color: d.lvl.color } }, d.lvl.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b", marginTop: "2px" } }, "HC ", hcp, " (", d.band.label, ")")), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "auto", textAlign: "right" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "22px", fontWeight: "800", color: d.gap >= 0 ? "#f97316" : "#16a34a", lineHeight: 1 } }, d.gap >= 0 ? "+" : "", d.gap), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#64748b" } }, "\u671F\u5F85", d.expectedScore, "\u6BD4"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#94a3b8", lineHeight: 1.65 } }, d.lvl.comment)), /* @__PURE__ */ React.createElement("div", { className: "dag2", style: { background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)", borderRadius: "10px", padding: "12px 14px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "\u{1F4CA}"), /* @__PURE__ */ React.createElement("span", null, "5\u8981\u7D20\u5206\u6790")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowDefs(!showDefs),
      style: {
        padding: "2px 8px",
        borderRadius: "12px",
        border: "1px solid rgba(167,139,250,0.35)",
        background: showDefs ? "rgba(167,139,250,0.18)" : "rgba(167,139,250,0.06)",
        color: "#c4b5fd",
        fontSize: "9px",
        fontWeight: "700",
        cursor: "pointer",
        whiteSpace: "nowrap"
      },
      "aria-label": "\u7528\u8A9E\u306E\u5B9A\u7FA9\u3092\u8868\u793A/\u975E\u8868\u793A"
    },
    "\u2139 \u7528\u8A9E"
  )), showDefs && /* @__PURE__ */ React.createElement("div", { style: {
    fontSize: "9px",
    color: "#cbd5e1",
    background: "rgba(167,139,250,0.08)",
    border: "1px solid rgba(167,139,250,0.2)",
    borderRadius: "6px",
    padding: "7px 9px",
    marginBottom: "10px",
    lineHeight: 1.6
  } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("b", { style: { color: "#c4b5fd" } }, "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8"), ": Par4/5\u306E\u6700\u521D\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u306F\u9664\u5916\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("b", { style: { color: "#c4b5fd" } }, "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0"), ": 100Y\u8D85\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u8D85\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", { style: { color: "#c4b5fd" } }, "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0"), ": 100Y\u4EE5\u5185\u306E\u30B7\u30E7\u30C3\u30C8\uFF08Par3\u3067100Y\u4EE5\u5185\u306E\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u542B\u3080\uFF09")), d.categories.map((cat) => {
    var _a;
    const g = d.gradeOf(cat.score, cat.hcpForGrade, cat.idealGIRForGrade, cat.isShort, cat.isDetailMode);
    const ds = cat.displayScore;
    return /* @__PURE__ */ React.createElement("div", { key: cat.key, style: { marginBottom: "9px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", width: "18px" } }, cat.icon), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "700", color: "#c4b5fd", minWidth: "74px", flexShrink: 0, whiteSpace: "nowrap" } }, cat.label), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, height: "6px", background: "rgba(255,255,255,.07)", borderRadius: "3px", overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { className: "dbar", style: { height: "100%", width: d.barW(ds), background: `linear-gradient(to right,${d.barC(ds)}66,${d.barC(ds)})`, borderRadius: "3px" } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8", fontWeight: "700", minWidth: "42px", textAlign: "right" } }, (cat.score >= 0 ? "+" : "") + ((_a = cat.score) != null ? _a : 0).toFixed(1)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "900", color: g.color, width: "16px", textAlign: "center" } }, g.label)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", paddingLeft: "24px", lineHeight: 1.5 } }, cat.insight));
  })), d.weaknesses.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "dag3", style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "8px", display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "\u26A0\uFE0F"), /* @__PURE__ */ React.createElement("span", null, "\u6539\u5584\u8AB2\u984C\uFF08\u512A\u5148\u9806\uFF09")), d.weaknesses.map((w, i) => /* @__PURE__ */ React.createElement("div", { key: w.key, style: { display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px", padding: "9px 11px", background: "rgba(239,68,68,.05)", border: "1px solid rgba(239,68,68,.1)", borderRadius: "8px", borderLeft: `3px solid ${["#dc2626", "#fbbf24", "#94a3b8"][i]}` } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "14px", fontWeight: "900", color: ["#dc2626", "#fbbf24", "#94a3b8"][i], flexShrink: 0, lineHeight: 1.4 } }, i + 1), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#e2e8f0", marginBottom: "2px" } }, w.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.5 } }, w.insight))))), /* @__PURE__ */ React.createElement("div", { className: "dag4", style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "8px", display: "flex", alignItems: "center", gap: "5px" } }, /* @__PURE__ */ React.createElement("span", null, "\u{1F4A1}"), /* @__PURE__ */ React.createElement("span", null, "\u6539\u5584\u30A2\u30C9\u30D0\u30A4\u30B9")), d.advice.map((a, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "6px", padding: "9px 11px", background: "rgba(167,139,250,.05)", border: "1px solid rgba(167,139,250,.12)", borderRadius: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: a.priorityColor, background: `${a.priorityColor}18`, borderRadius: "4px", padding: "2px 7px", flexShrink: 0, whiteSpace: "nowrap" } }, a.priority), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#94a3b8", lineHeight: 1.65 } }, a.text)))), showTrend && d.trend && /* @__PURE__ */ React.createElement("div", { className: "dag5", style: { padding: "10px 12px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b" } }, "\u{1F4C8} \u30C8\u30EC\u30F3\u30C9"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "800", color: d.trend.color } }, d.trend.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#475569", marginLeft: "auto" } }, "\u524D\u56DE: ", d.trend.prevDate)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.6 } }, d.trend.text)));
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
    const score = shots.reduce((a, s) => a + s.shotCount, 0);
    const putts = shots.filter((s) => s.categoryKey === "putt").reduce((a, s) => a + s.shotCount, 0);
    let ob, penalty, bunker, teeEval, secondEval, thirdEval, approachEval;
    if (isNewFmt) {
      ob = shots.filter((s) => s.subType === "ob").length;
      penalty = shots.filter((s) => s.subType === "1pen").reduce((a, s) => a + (s.penaltyCount || 0), 0);
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
  var _a, _b, _c, _d, _e, _f, _g;
  const [view, setView] = useState("home");
  const [inputMode, setInputMode] = useState("simple");
  const [simpleHoleData, setSimpleHoleData] = useState({});
  const [rounds, setRounds] = useState([]);
  const [importedTestData, setImportedTestData] = useState([]);
  const storageLoaded = useRef(false);
  const [currentRound, setCurrentRound] = useState(null);
  const [currentHole, setCurrentHole] = useState(1);
  const [holePars, setHolePars] = useState(Array(18).fill(4));
  const [holeData, setHoleData] = useState({});
  const [showShotForm, setShowShotForm] = useState(false);
  const [showNewRound, setShowNewRound] = useState(false);
  const [showDiscardWarning, setShowDiscardWarning] = useState(false);
  const [showHcpWarning, setShowHcpWarning] = useState(false);
  const [shotDetailRid, setShotDetailRid] = useState(null);
  const [scoreDisplayMode, setScoreDisplayMode] = useState("number");
  const [courseName, setCourseName] = useState("");
  const [showYardage, setShowYardage] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [venueSearch, setVenueSearch] = useState("");
  const [venueDropdownOpen, setVenueDropdownOpen] = useState(false);
  const [venueIsComposing, setVenueIsComposing] = useState(false);
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
  const [profile, setProfile] = useState({ nickname: "", bestScore: null, targetHcp: null, manualHcp: null, hcpMode: "auto" });
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
    if (diff <= -3) showToast("\u30A2\u30EB\u30D0\u30C8\u30ED\u30B9\uFF01\uFF01\u304A\u3081\u3067\u3068\u3046\uFF01 \u{1F985}\u{1F985}\u{1F985}");
    else if (diff === -2) showToast("\u30CA\u30A4\u30B9\u30A4\u30FC\u30B0\u30EB\uFF01 \u{1F985}");
    else if (diff === -1) showToast("\u30CA\u30A4\u30B9\u30D0\u30FC\u30C7\u30A3\uFF01\uFF01 \u{1F389}");
    else if (diff === 0) showToast("\u30CA\u30A4\u30B9\u30D1\u30FC\uFF01 \u26F3");
  };
  const saveProfile = (p) => {
    setProfile(p);
  };
  useEffect(() => {
    if (!storageLoaded.current) return;
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
  }, [profile]);
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
    try {
      const raw = localStorage.getItem("golf_rounds");
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
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
    storageLoaded.current = true;
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
  const totalStrokes = hd.shots.reduce((s, sh) => s + sh.shotCount, 0);
  const holeScore = hd.shots.reduce((s, sh) => s + sh.score, 0);
  const allHoleShots = Object.values(holeData).flatMap((h) => h.shots);
  const totalScore = allHoleShots.reduce((s, sh) => s + sh.score, 0);
  const totalStrk = allHoleShots.reduce((s, sh) => s + sh.shotCount, 0);
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
  const recordShot = (optId, clubId = null, remainDist = null, pinDistLabel = null) => {
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
      var _a2, _b2;
      return __spreadProps(__spreadValues({}, prev), {
        [currentHole]: {
          shots: [...((_a2 = prev[currentHole]) == null ? void 0 : _a2.shots) || [], shot],
          state: nextState,
          done: nextState === "done",
          pinDist: pinDistLabel != null ? pinDistLabel : (_b2 = prev[currentHole]) == null ? void 0 : _b2.pinDist
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
    if (nextState === "done") {
      setShowShotForm(false);
      const finalStrokes = totalStrokes + totalShotCount;
      const holeNum = currentHole;
      setTimeout(() => scoreToast(finalStrokes, par), 200);
      if (currentCategory === "putt") {
        if (pinDistLabel) {
          if (holeNum < 18) {
            setTimeout(() => setCurrentHole((h) => h + 1), 900);
          }
        } else {
          setTimeout(() => setShowPinDistStep(true), 400);
        }
      } else {
        if (holeNum < 18) {
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
    if (currentHole < 18) {
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
    setHoleData((p) => __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: state === "done", pinDist: void 0 } }));
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
    if (currentCategory === "tee") {
      const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
      const allH = venue ? getRoundHoles(currentRound) : [];
      const hInfo = allH[currentHole - 1];
      const autoY = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
      distLabel = distToLabel(teeDistOverride != null ? teeDistOverride : autoY);
    } else if (currentCategory === "approach") {
      distLabel = distToLabel(approachDistVal);
    }
    const pinDistLabel = currentCategory === "putt" ? metersToPinDistLabel(puttDistVal) : null;
    recordShot(finalOptId, selectedClub, distLabel, pinDistLabel);
  };
  const startRound = () => {
    if (!selectedVenue || selectedCourseA === null || selectedCourseB === null || !selectedGreen || !selectedTee) return;
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
    const backSC = venue.subCourses[selectedCourseB];
    const pars = [...frontSC.holes, ...backSC.holes].map((h) => h.par);
    const teeKey = selectedTee;
    const greenKey = selectedGreen;
    const label = venue.subCourses.length === 1 ? venue.name : frontSC.name === backSC.name ? `${venue.name}\uFF08${frontSC.name}\xD72\uFF09` : `${venue.name}\uFF08${frontSC.name}\u2192${backSC.name}\uFF09`;
    const frontHoleNums = frontSC.holes.map((h) => h.hole);
    const backHoleNums = backSC.holes.map((h) => h.hole);
    setCurrentRound({
      id: Date.now(),
      course: label,
      date: selectedDate,
      venueId: selectedVenue,
      frontCourse: frontSC.name,
      backCourse: backSC.name,
      green: greenKey,
      tee: teeKey,
      weather: selectedWeather,
      wind: selectedWind,
      clubs: savedClubs,
      frontHoleNums,
      backHoleNums,
      memo: roundMemo.trim().slice(0, 20)
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
  };
  useEffect(() => {
    if (!storageLoaded.current) return;
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
  }, [savedClubs]);
  useEffect(() => {
    if (!storageLoaded.current) return;
    (() => {
      try {
        localStorage.setItem("golf_rounds", JSON.stringify(rounds));
      } catch (_) {
      }
    })();
  }, [rounds]);
  useEffect(() => {
    if (!storageLoaded.current) return;
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
      const payload = { currentRound, inputMode, holePars, currentHole, holeData, simpleHoleData };
      (() => {
        try {
          localStorage.setItem("golf_current_round", JSON.stringify(payload));
        } catch (_) {
        }
      })();
    } catch (_) {
    }
  }, [currentRound, inputMode, holePars, currentHole, holeData, simpleHoleData]);
  const finishRound = () => {
    let totalScore2 = 0;
    let isComplete = false;
    const courseName2 = (currentRound == null ? void 0 : currentRound.course) || "";
    if (inputMode === "simple") {
      const completedHoles = Object.keys(simpleHoleData).length;
      const allRequired = Object.entries(simpleHoleData).every(([, h]) => h.teeEval && h.approachEval);
      isComplete = completedHoles >= 18 && allRequired;
      totalScore2 = Object.values(simpleHoleData).reduce((a, h) => a + (h.score || 0), 0);
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots: [], holePars: [...holePars], simpleHoleData: __spreadValues({}, simpleHoleData), inputMode: "simple", isComplete, hcp: effectiveHcp }), ...prev]);
      setCurrentRound(null);
      setSimpleHoleData({});
    } else {
      const shots = Object.values(holeData).flatMap((h) => h.shots);
      const completedHoles = Object.values(holeData).filter((h) => h.done).length;
      isComplete = completedHoles >= 18;
      totalScore2 = Object.values(holeData).reduce((a, h) => a + h.shots.reduce((s, sh) => s + sh.shotCount, 0), 0);
      const derivedSimple = deriveSimpleHoleData(holeData, holePars);
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots, holePars: [...holePars], holeData: __spreadValues({}, holeData), simpleHoleData: derivedSimple, inputMode: "detail", isComplete, hcp: effectiveHcp }), ...prev]);
      setCurrentRound(null);
      setHoleData({});
    }
    if (isComplete && totalScore2 > 0 && (profile.bestScore === null || totalScore2 < profile.bestScore)) {
      saveProfile(__spreadProps(__spreadValues({}, profile), { bestScore: totalScore2 }));
      setTimeout(() => showToast(`\u{1F3C6} \u30D9\u30B9\u30C8\u30B9\u30B3\u30A2\u66F4\u65B0\uFF01${totalScore2} (${courseName2})`), 400);
    } else {
      showToast("\u304A\u3064\u304B\u308C\u69D8\u3067\u3057\u305F\uFF01\u26F3");
    }
    setView("home");
  };
  const resumeRound = (r) => {
    setCurrentRound({ id: r.id, course: r.course, date: r.date, venueId: r.venueId, frontCourse: r.frontCourse, backCourse: r.backCourse, green: r.green, tee: r.tee, weather: r.weather, wind: r.wind, memo: r.memo || "" });
    setInputMode(r.inputMode || "detail");
    if (r.inputMode === "simple") {
      setSimpleHoleData(r.simpleHoleData || {});
      setHoleData({});
    } else {
      setHoleData(r.holeData || {});
      setSimpleHoleData({});
    }
    setHolePars(r.holePars || Array(18).fill(4));
    const firstIncomplete = Array.from({ length: 18 }, (_, i) => i + 1).find(
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
  const handleDetailFinishClick = () => {
    const allHoles = Array.from({ length: 18 }, (_, i) => i + 1);
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
    if (holeKey >= 1 && holeKey <= 9) return (_a2 = fNums[holeKey - 1]) != null ? _a2 : holeKey;
    if (holeKey >= 10 && holeKey <= 18) return (_b2 = bNums[holeKey - 10]) != null ? _b2 : holeKey;
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
  const analytics = useMemo(() => {
    const allShots = rounds.flatMap((r) => r.shots || []);
    if (!allShots.length) return null;
    const byCategory = {};
    Object.keys(CAT_ANALYTICS_LABEL).forEach((cat) => {
      const filtered = allShots.filter((s) => s.categoryKey === cat);
      if (filtered.length) {
        const avg = filtered.reduce((s, sh) => s + sh.score, 0) / filtered.length;
        byCategory[cat] = __spreadValues({ count: filtered.length, avg: Math.round(avg * 100) / 100, shots: filtered }, CAT_ANALYTICS_LABEL[cat]);
      }
    });
    const sorted = Object.entries(byCategory).sort((a, b) => b[1].avg - a[1].avg);
    const totScore = Math.round(allShots.reduce((s, sh) => s + sh.score, 0) * 10) / 10;
    return { byCategory, sorted, total: allShots.length, totalScore: totScore };
  }, [rounds]);
  const handicap = useMemo(() => {
    const completed = [...rounds.filter((r) => r.isComplete)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
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
        setTimeout(() => showToast(`\u{1F38A} \u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u304C${curr}\u306B\u306A\u308A\u307E\u3057\u305F\uFF01\u304A\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01`), 1e3);
      }
    }
    prevHcpRef.current = curr;
  }, [handicap == null ? void 0 : handicap.hcp]);
  const S = {
    app: { minHeight: "100vh", background: "#f8fafc", fontFamily: "'Noto Sans JP',sans-serif", color: "#1e293b" },
    header: { background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
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
    input: { width: "100%", padding: "10px 13px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#ffffff", color: "#1e293b", fontSize: "13px", outline: "none", boxSizing: "border-box" },
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
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "12px",
        border: "none",
        border: active ? `2px solid ${colorSel}` : "1px solid #e2e8f0",
        background: active ? `${colorSel}20` : "#f8fafc",
        color: active ? colorSel : "#64748b"
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
    const filteredVenues = VENUES.filter((v) => v.name.includes(venueIsComposing ? "" : venueSearch));
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
      { id: "detail", label: "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9", desc: "\u30B7\u30E7\u30C3\u30C8\u5358\u4F4D\u3067\u8A18\u9332" },
      { id: "simple", label: "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9", desc: "\u30B9\u30B3\u30A2\u30FB\u8A55\u4FA1\u306E\u307F" }
    ].map((m) => /* @__PURE__ */ React.createElement("button", { key: m.id, onClick: () => setInputMode(m.id), style: {
      flex: 1,
      padding: "10px 8px",
      borderRadius: "9px",
      cursor: "pointer",
      textAlign: "center",
      border: inputMode === m.id ? "2px solid #34d399" : "1px solid #e2e8f0",
      background: inputMode === m.id ? "rgba(22,163,74,0.10)" : "#f8fafc",
      color: inputMode === m.id ? "#16a34a" : "#64748b"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "13px" } }, m.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", opacity: 0.7, marginTop: "2px" } }, m.desc))))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B4\u30EB\u30D5\u5834"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "text",
        placeholder: "\u30B4\u30EB\u30D5\u5834\u540D\u3092\u5165\u529B\u3057\u3066\u7D5E\u308A\u8FBC\u3080...",
        value: venueSearch,
        onFocus: () => setVenueDropdownOpen(true),
        onBlur: () => setTimeout(() => setVenueDropdownOpen(false), 150),
        onChange: (e) => {
          setVenueSearch(e.target.value);
          setVenueDropdownOpen(true);
          if (selectedVenue) {
            setSelectedVenue(null);
            setSelectedGreen(null);
            setSelectedTee(null);
            setSelectedCourseA(null);
            setSelectedCourseB(null);
          }
        },
        onCompositionStart: () => setVenueIsComposing(true),
        onCompositionEnd: (e) => {
          setVenueIsComposing(false);
          setVenueSearch(e.target.value);
        },
        style: __spreadProps(__spreadValues({}, S.input), { paddingRight: venueSearch ? "36px" : S.input.padding })
      }
    ), venueSearch && /* @__PURE__ */ React.createElement(
      "button",
      {
        onMouseDown: (e) => {
          e.preventDefault();
          setVenueSearch("");
          setVenueDropdownOpen(false);
          setSelectedVenue(null);
          setSelectedGreen(null);
          setSelectedTee(null);
          setSelectedCourseA(null);
          setSelectedCourseB(null);
        },
        style: { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: selectedVenue ? "#34d399" : "#64748b", fontSize: "14px", lineHeight: 1, padding: "2px" }
      },
      selectedVenue ? "\u2713" : "\u2715"
    ), venueDropdownOpen && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "calc(100% + 4px)", left: 0, right: 0, zIndex: 200, background: "#0f172a", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "10px", overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,0.5)", maxHeight: "220px", overflowY: "auto" } }, filteredVenues.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { padding: "14px", color: "#475569", fontSize: "13px", textAlign: "center" } }, "\u300C", venueSearch, "\u300D\u306B\u4E00\u81F4\u3059\u308B\u30B4\u30EB\u30D5\u5834\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093") : filteredVenues.map((v, i) => /* @__PURE__ */ React.createElement("div", { key: v.id, onMouseDown: () => selectVenue(v.id), style: { padding: "11px 14px", cursor: "pointer", fontSize: "13px", fontWeight: v.id === selectedVenue ? "700" : "500", color: v.id === selectedVenue ? "#60a5fa" : "#e2e8f0", background: v.id === selectedVenue ? "rgba(96,165,250,0.1)" : "transparent", borderBottom: i < filteredVenues.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none", display: "flex", alignItems: "center", gap: "8px" } }, v.id === selectedVenue && /* @__PURE__ */ React.createElement("span", { style: { color: "#34d399", fontSize: "11px" } }, "\u2713"), v.name))))), venue && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, venue.subCourses.length === 1 ? "\u30B3\u30FC\u30B9" : "\u524D\u534A\u30B3\u30FC\u30B9"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.subCourses.map((c, i) => ({ id: i, label: c.name })), selectedCourseA, setSelectedCourseA, "#34d399")), venue.subCourses.length > 1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5F8C\u534A\u30B3\u30FC\u30B9"), selRow(venue.subCourses.map((c, i) => ({ id: i, label: c.name })), selectedCourseB, setSelectedCourseB, "#60a5fa"))), venue && selectedCourseA !== null && selectedCourseB !== null && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u4F7F\u7528\u30B0\u30EA\u30FC\u30F3"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.greens, selectedGreen, setSelectedGreen, "#34d399")), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30C6\u30A3\u30FC"), selRow(venue.tees, selectedTee, setSelectedTee, "#fbbf24")), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u65E5\u4ED8"), /* @__PURE__ */ React.createElement("input", { type: "date", value: selectedDate.replace(/\//g, "-"), onChange: (e) => {
      if (e.target.value) setSelectedDate(e.target.value.replace(/-/g, "/"));
    }, style: __spreadProps(__spreadValues({}, S.input), { colorScheme: "dark" }) })), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5929\u6C17"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "12px" } }, [{ id: "sunny", label: "\u2600\uFE0F \u6674\u308C" }, { id: "cloudy", label: "\u2601\uFE0F \u66C7\u308A" }, { id: "rainy", label: "\u{1F327}\uFE0F \u96E8" }, { id: "snowy", label: "\u2744\uFE0F \u96EA" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.id, onClick: () => setSelectedWeather(w.id), style: { flex: 1, padding: "8px 4px", borderRadius: "8px", cursor: "pointer", fontWeight: "600", fontSize: "12px", border: selectedWeather === w.id ? "2px solid #16a34a" : "1px solid #e2e8f0", background: selectedWeather === w.id ? "rgba(14,165,233,0.12)" : "#f8fafc", color: selectedWeather === w.id ? "#0ea5e9" : "#64748b" } }, w.label))), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u98A8\u306E\u5F37\u3055"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, [{ val: 0, sub: "\u7121\u98A8" }, { val: 1, sub: "\u5FAE\u98A8" }, { val: 2, sub: "\u5F31\u98A8" }, { val: 3, sub: "\u4E2D\u98A8" }, { val: 4, sub: "\u5F37\u3081" }, { val: 5, sub: "\u5F37\u98A8" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.val, onClick: () => setSelectedWind(w.val), style: { flex: 1, padding: "8px 2px", borderRadius: "8px", cursor: "pointer", fontWeight: "700", fontSize: "13px", border: selectedWind === w.val ? "2px solid #fbbf24" : "1px solid #e2e8f0", background: selectedWind === w.val ? "rgba(251,191,36,0.15)" : "#f8fafc", color: selectedWind === w.val ? "#fbbf24" : "#64748b", display: "flex", flexDirection: "column", alignItems: "center", gap: "1px" } }, /* @__PURE__ */ React.createElement("span", null, w.val), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", fontWeight: "500", opacity: 0.7 } }, w.sub))))), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30E9\u30A6\u30F3\u30C9\u30E1\u30E2\uFF08\u4EFB\u610F\u30FB20\u6587\u5B57\u4EE5\u5185\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement("input", { style: __spreadProps(__spreadValues({}, S.input), { paddingRight: "42px" }), placeholder: "\u4F8B\uFF1A\u521D\u30E9\u30A6\u30F3\u30C9\u3001\u98A8\u5F37\u3081...", value: roundMemo, maxLength: 20, onChange: (e) => setRoundMemo(e.target.value.slice(0, 20)) }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", fontSize: "11px", color: roundMemo.length >= 20 ? "#ef4444" : "#475569", pointerEvents: "none" } }, roundMemo.length, "/20"))), canStart && venue && /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "8px", padding: "10px 12px", marginBottom: "14px", fontSize: "12px", color: "#94a3b8" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", color: "#16a34a", marginBottom: "4px" } }, venue.name), /* @__PURE__ */ React.createElement("div", null, "\u524D\u534A\uFF1A", venue.subCourses[selectedCourseA].name, " / \u5F8C\u534A\uFF1A", venue.subCourses[selectedCourseB].name), /* @__PURE__ */ React.createElement("div", null, "\u30B0\u30EA\u30FC\u30F3\uFF1A", (_a2 = venue.greens.find((g) => g.id === selectedGreen)) == null ? void 0 : _a2.label, " / \u30C6\u30A3\u30FC\uFF1A", (_b2 = venue.tees.find((t) => t.id === selectedTee)) == null ? void 0 : _b2.label), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "3px" } }, "\u65E5\u4ED8\uFF1A", selectedDate.replace(/(\d{4})\/(\d{2})\/(\d{2})/, (_, y, m, d) => `${y}/${+m}/${+d}`), "\u5929\u6C17\uFF1A", { "sunny": "\u2600\uFE0F\u6674\u308C", "cloudy": "\u2601\uFE0F\u66C7\u308A", "rainy": "\u{1F327}\uFE0F\u96E8", "snowy": "\u2744\uFE0F\u96EA" }[selectedWeather], "\u98A8\uFF1A", ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][selectedWind], "\uFF08", selectedWind, "\uFF09")), /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", opacity: canStart ? 1 : 0.35, cursor: canStart ? "pointer" : "not-allowed" }), onClick: startRound, disabled: !canStart }, "\u30E9\u30A6\u30F3\u30C9\u958B\u59CB \u26F3"));
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
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", padding: "1px 6px", borderRadius: "10px", background: isSimple ? "rgba(251,191,36,0.15)" : "rgba(96,165,250,0.15)", color: isSimple ? "#fbbf24" : "#60a5fa", fontWeight: "700" } }, isSimple ? "\u26A1\u7C21\u6613" : "\u{1F50D}\u8A73\u7D30"),
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
        r.wind !== void 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][r.wind], "\uFF08", r.wind, "\uFF09"),
        /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8" } }, "\u270E")
      ), r.memo && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#94a3b8", marginTop: "3px" } }, "\u{1F4DD} ", r.memo)), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", flexShrink: 0, marginLeft: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" } }, !r.isComplete ? /* @__PURE__ */ React.createElement(
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
        "\u{1F4CB} \u30DB\u30FC\u30EB\u30D0\u30A4\u30DB\u30FC\u30EB"
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
      ) : /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", padding: "10px 12px", background: "#f5f3ff", border: "1px solid rgba(167,139,250,.12)", borderRadius: "8px", display: "flex", alignItems: "center", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px" } }, "\u{1F916}"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, "HCP\u672A\u767B\u9332\u306E\u305F\u3081\u5206\u6790\u4E0D\u80FD\u3067\u3059\uFF08\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3067HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u8A18\u9332\u3059\u308B\u3068\u5229\u7528\u3067\u304D\u307E\u3059\uFF09"))))));
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
      "\u{1F5D1} \u524A\u9664"
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
    } }, w.label))), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u98A8\u306E\u5F37\u3055"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", marginBottom: "20px" } }, [{ v: 0, s: "\u7121\u98A8" }, { v: 1, s: "\u5FAE\u98A8" }, { v: 2, s: "\u5F31\u98A8" }, { v: 3, s: "\u4E2D\u98A8" }, { v: 4, s: "\u5F37\u3081" }, { v: 5, s: "\u5F37\u98A8" }].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.v, onClick: () => setEditWind(w.v), style: {
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
    } }, /* @__PURE__ */ React.createElement("span", null, w.v), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", opacity: 0.7 } }, w.s)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
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
    )))), confirmDeleteId === r.id && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(239,68,68,0.4)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", marginBottom: "12px" } }, "\u{1F5D1}"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", marginBottom: "8px", color: "#1e293b" } }, r.course), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#94a3b8", marginBottom: "6px" } }, r.date), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", color: "#dc2626", fontWeight: "700", marginBottom: "20px", padding: "10px", background: "#fef2f2", borderRadius: "8px" } }, "\u767B\u9332\u3055\u308C\u305F\u30B9\u30B3\u30A2\u306F\u5143\u306B\u623B\u305B\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
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
      return /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px", background: "#f5f3ff", border: "1px solid rgba(167,139,250,.12)", borderRadius: "12px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "18px" } }, "\u{1F916}"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#a78bfa", marginBottom: "2px" } }, "\u76F4\u8FD11\u30F6\u6708 \u5E73\u5747AI\u8A3A\u65AD"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b" } }, "HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068\u5229\u7528\u3067\u304D\u307E\u3059")));
    }
    const latestDate = parseDate(completed[0].date);
    const oneMonthAgo = new Date(latestDate);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const targetRounds = completed.filter((r) => parseDate(r.date) >= oneMonthAgo);
    if (targetRounds.length === 0) return /* @__PURE__ */ React.createElement("div", { style: { padding: "12px 14px", background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)", borderRadius: "10px", marginBottom: "16px", fontSize: "11px", color: "#64748b" } }, "\u{1F916} \u76F4\u8FD11\u30F6\u6708\u306E\u30E9\u30A6\u30F3\u30C9\u304C\u3042\u308A\u307E\u305B\u3093");
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const saList = targetRounds.map(
      (r) => {
        var _a2;
        return calcAnalytics(r, (_a2 = r.hcp) != null ? _a2 : null, teeRatesAna);
      }
    ).filter(Boolean);
    if (!saList.length) return null;
    const avgN = (arr) => {
      const v = arr.filter((x) => x != null);
      return v.length ? v.reduce((s, x) => s + x, 0) / v.length : null;
    };
    const avgSa = {
      teeScore: avgN(saList.map((s) => s.teeScore)),
      longScore: avgN(saList.map((s) => s.longScore)),
      shortScore: avgN(saList.map((s) => s.shortScore)),
      puttScore: avgN(saList.map((s) => s.puttScore)),
      bunkerScore: saList.some((s) => s.bunkerScore != null) ? avgN(saList.filter((s) => s.bunkerScore != null).map((s) => s.bunkerScore)) : null,
      idealGIR: avgN(saList.filter((s) => s.idealGIR != null).map((s) => s.idealGIR)),
      totalScore: avgN(saList.map((s) => s.totalScore)),
      totalPar: avgN(saList.map((s) => s.totalPar)),
      totalPutts: Math.round(avgN(saList.map((s) => s.totalPutts)) * 10) / 10,
      totalOB: Math.round(avgN(saList.map((s) => s.totalOB)) * 10) / 10,
      totalPen: Math.round(avgN(saList.map((s) => s.totalPen)) * 10) / 10,
      totalBunker: Math.round(avgN(saList.map((s) => s.totalBunker)) * 10) / 10,
      holeCount: Math.round(avgN(saList.map((s) => s.holeCount))),
      avgAfterPutts: Math.round(avgN(saList.map((s) => s.avgAfterPutts)) * 10) / 10,
      bunkerHoleCount: Math.round(avgN(saList.map((s) => s.bunkerHoleCount)) * 10) / 10,
      // AIインサイト用：全ラウンドの品質配列を結合
      longShotQuals: saList.flatMap((s) => s.longShotQuals || []),
      shortShotQuals: saList.flatMap((s) => s.shortShotQuals || [])
    };
    const flatShd = {};
    let idx = 0;
    targetRounds.forEach((r) => {
      Object.values(r.simpleHoleData || {}).forEach((hd2) => {
        flatShd[idx++] = hd2;
      });
    });
    const oldestDate = targetRounds[targetRounds.length - 1].date;
    const dateRange = `${oldestDate} \u301C ${completed[0].date}`;
    const avgHcp = Math.round(avgN(targetRounds.map((r) => r.hcp)) * 10) / 10;
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement(
      AiDiagnosisPanel,
      {
        sa: avgSa,
        shd: flatShd,
        hcp: avgHcp != null ? avgHcp : 0,
        rounds: [],
        roundId: null,
        showTrend: false,
        label: "\u76F4\u8FD11\u30F6\u6708 \u5E73\u5747AI\u8A3A\u65AD",
        roundCount: targetRounds.length,
        dateRange
      }
    ));
  };
  const AnalyticsScoreChart = () => {
    const simpleCompleted = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (simpleCompleted.length < 2) return null;
    const recent = simpleCompleted.slice(0, 5).reverse();
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const saList = recent.map((r) => {
      var _a2;
      return {
        date: r.date,
        sa: calcAnalytics(r, (_a2 = r.hcp) != null ? _a2 : null, teeRatesAna),
        totalScore: Object.values(r.simpleHoleData || {}).reduce((a, h) => a + (h.score || 0), 0),
        totalPutts: Object.values(r.simpleHoleData || {}).reduce((a, h) => a + (h.putts || 0), 0),
        totalPar: (r.holePars || Array(18).fill(4)).reduce((a, p) => a + p, 0)
      };
    }).filter((x) => x.sa);
    if (saList.length < 2) return null;
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
      const W = 320, H = 180, padL = 62, padR = 12, padT = 22, padB = 28;
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
      })(), saList.map((x, i) => /* @__PURE__ */ React.createElement("text", { key: i, x: xOf(i).toFixed(1), y: H - 4, textAnchor: "middle", fill: "#475569", fontSize: "8" }, x.date.replace(/\d{4}\//, "").replace(/\/(\d)$/, "/0$1")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "6px" } }, [
        { label: "\u7DCF\u6253\u6570\uFF08\u5DE6\u8EF8\uFF09", color: "#94a3b8", bar: false },
        { label: "\u30D1\u30C3\u30C8\u6570\uFF08\u5DE6\u8EF8\uFF09", color: "#64748b", bar: false },
        { label: "\u8A55\u4FA1\u5408\u8A08 +", color: "#0ea5e9", bar: true },
        { label: "\u8A55\u4FA1\u5408\u8A08 -", color: "#dc2626", bar: true }
      ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: s.bar ? "10px" : "2px", background: s.color, opacity: s.bar ? 0.7 : 1, borderRadius: "2px" } }), /* @__PURE__ */ React.createElement("span", { style: { color: s.color } }, s.label)))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "4px" } }, "\u203B\u53F3\u8EF80 = Par", (_b2 = saList[saList.length - 1]) == null ? void 0 : _b2.totalPar, "+HCP", Math.round(hcpVal * 10) / 10, " = ", Math.round(zeroAnchorL)));
    })(), (() => {
      const W = 320, H = 210, padL = 62, padR = 12, padT = 20, padB = 24;
      const n = saList.length;
      const seriesDef = [
        { label: "A \u30C6\u30A3", color: "#0ea5e9", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.teeScore) != null ? _a2 : 0;
        }) },
        { label: "B \u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", color: "#16a34a", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.longScore) != null ? _a2 : 0;
        }) },
        { label: "C \u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", color: "#fbbf24", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.shortScore) != null ? _a2 : 0;
        }) },
        { label: "D \u30D1\u30C3\u30C8", color: "#f472b6", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.puttScore) != null ? _a2 : 0;
        }) },
        ...saList.some((x) => x.sa.bunkerScore != null) ? [{ label: "E \u30D0\u30F3\u30AB\u30FC", color: "#fb923c", vals: saList.map((x) => {
          var _a2;
          return (_a2 = x.sa.bunkerScore) != null ? _a2 : 0;
        }) }] : []
      ];
      const posMaxArr = saList.map((_, i) => seriesDef.reduce((a, s) => a + Math.max(0, s.vals[i]), 0));
      const negMinArr = saList.map((_, i) => seriesDef.reduce((a, s) => a + Math.min(0, s.vals[i]), 0));
      const absMax = Math.ceil(Math.max(Math.max(...posMaxArr, 1), Math.abs(Math.min(...negMinArr, -1))));
      const chartH = H - padT - padB;
      const y0 = padT + chartH * 0.55;
      const scale = chartH * 0.5 / absMax;
      const yOf = (v) => y0 - v * scale;
      const xOf = (i) => padL + (n === 1 ? (W - padL - padR) / 2 : i / (n - 1) * (W - padL - padR));
      const barW = Math.floor((W - padL - padR) / n * 0.65);
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
          stroke: g.v === 0 ? "rgba(255,255,255,0.3)" : "#f1f5f9",
          strokeWidth: g.v === 0 ? 1.5 : 1,
          strokeDasharray: g.v === 0 ? "3 2" : "none"
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
        let posBot = y0;
        let negTop = y0;
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
        return /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", { d, fill: "none", stroke: "#1e293b", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round" }), pts.map(([x, y], i) => /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("circle", { cx: x.toFixed(1), cy: y.toFixed(1), r: "3.5", fill: "#1e293b" }), /* @__PURE__ */ React.createElement("text", { x: x.toFixed(1), y: (y - 6).toFixed(1), textAnchor: "middle", fill: "#1e293b", fontSize: "8", fontWeight: "700" }, (evalTotals[i] >= 0 ? "+" : "") + evalTotals[i]))));
      })()), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" } }, seriesDef.map((s) => /* @__PURE__ */ React.createElement("div", { key: s.label, style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "12px", height: "12px", background: s.color, borderRadius: "2px", opacity: 0.8 } }), /* @__PURE__ */ React.createElement("span", { style: { color: s.color } }, s.label))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "16px", height: "2px", background: "white", opacity: 0.7, borderRadius: "1px" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8" } }, "\u5408\u8A08"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "3px" } }, "\u203B\u4E0A\u304C\u30DE\u30A4\u30CA\u30B9\u3001\u4E0B\u304C\u30D7\u30E9\u30B9"));
    })());
  };
  const AnalyticsRadarChart = () => {
    var _a2, _b2;
    const completed = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date));
    if (completed.length === 0) return null;
    const teeRatesAna = calcHistoricalTeeRates(rounds);
    const latest = completed[0];
    const latestSa = calcAnalytics(latest, (_a2 = latest.hcp) != null ? _a2 : null, teeRatesAna);
    const hcpTopIds = new Set(((handicap == null ? void 0 : handicap.top) || []).map((d) => d.id).filter(Boolean));
    const targets = hcpTopIds.size > 0 ? completed.filter((r) => hcpTopIds.has(r.id)) : completed.slice(0, 20);
    const avgScores = { A: 0, B: 0, C: 0, D: 0, E: null };
    const counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    targets.forEach((r) => {
      var _a3;
      const sa = calcAnalytics(r, (_a3 = r.hcp) != null ? _a3 : null, teeRatesAna);
      if (!sa) return;
      avgScores.A += sa.teeScore;
      counts.A++;
      avgScores.B += sa.longScore;
      counts.B++;
      avgScores.C += sa.shortScore;
      counts.C++;
      avgScores.D += sa.puttScore;
      counts.D++;
      if (sa.bunkerScore !== null && sa.bunkerScore !== void 0) {
        avgScores.E = (avgScores.E || 0) + sa.bunkerScore;
        counts.E++;
      }
    });
    const avg = {
      A: counts.A ? Math.round(avgScores.A / counts.A * 100) / 100 : 0,
      B: counts.B ? Math.round(avgScores.B / counts.B * 100) / 100 : 0,
      C: counts.C ? Math.round(avgScores.C / counts.C * 100) / 100 : 0,
      D: counts.D ? Math.round(avgScores.D / counts.D * 100) / 100 : 0,
      E: counts.E ? Math.round(avgScores.E / counts.E * 100) / 100 : null
    };
    if (!latestSa) return null;
    const items = [
      { key: "A", label: "\u30C6\u30A3", val: latestSa.teeScore, avgVal: avg.A },
      { key: "B", label: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", val: latestSa.longScore, avgVal: avg.B },
      { key: "C", label: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", val: latestSa.shortScore, avgVal: avg.C },
      { key: "D", label: "\u30D1\u30C3\u30C8", val: latestSa.puttScore, avgVal: avg.D },
      ...latestSa.bunkerScore !== null && latestSa.bunkerScore !== void 0 ? [{ key: "E", label: "\u30D0\u30F3\u30AB\u30FC", val: latestSa.bunkerScore, avgVal: (_b2 = avg.E) != null ? _b2 : 0 }] : avg.E !== null && avg.E !== void 0 ? [{ key: "E", label: "\u30D0\u30F3\u30AB\u30FC", val: 0, avgVal: avg.E }] : []
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
    const latestPts = items.map((it, i) => pointOf(i, R * normalize(it.val)));
    const avgPts = items.map((it, i) => pointOf(i, R * normalize(it.avgVal)));
    const labelPts = items.map((it, i) => {
      const [x, y] = pointOf(i, R + 22);
      return __spreadProps(__spreadValues({}, it), { x, y });
    });
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u8A55\u4FA1\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" } }, /* @__PURE__ */ React.createElement("svg", { width: "340", height: "310", viewBox: "0 0 350 310", style: { display: "block", margin: "0 auto" } }, gridPaths.map((d, gi) => /* @__PURE__ */ React.createElement("path", { key: gi, d, fill: "none", stroke: "#eef2f7", strokeWidth: "1" })), items.map((_, i) => {
      const [x, y] = pointOf(i, R);
      return /* @__PURE__ */ React.createElement("line", { key: i, x1: cx, y1: cy, x2: x.toFixed(1), y2: y.toFixed(1), stroke: "#eef2f7", strokeWidth: "1" });
    }), (() => {
      const idealPts = items.map((_, i) => pointOf(i, R * 0.75));
      return /* @__PURE__ */ React.createElement("path", { d: toPath(idealPts), fill: "rgba(52,211,153,0.08)", stroke: "#16a34a", strokeWidth: "1.5", strokeDasharray: "3 3" });
    })(), /* @__PURE__ */ React.createElement("path", { d: toPath(avgPts), fill: "rgba(14,165,233,0.12)", stroke: "#0ea5e9", strokeWidth: "1.5", strokeDasharray: "4 3" }), /* @__PURE__ */ React.createElement("path", { d: toPath(latestPts), fill: "rgba(251,191,36,0.2)", stroke: "#fbbf24", strokeWidth: "2" }), latestPts.map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x.toFixed(1), cy: y.toFixed(1), r: "4", fill: "#fbbf24" })), labelPts.map((it, i) => {
      const anchor = it.x < cx - 5 ? "end" : it.x > cx + 5 ? "start" : "middle";
      return /* @__PURE__ */ React.createElement("g", { key: i }, /* @__PURE__ */ React.createElement("text", { x: it.x.toFixed(1), y: (it.y - 4).toFixed(1), textAnchor: anchor, fill: "#94a3b8", fontSize: "11", fontWeight: "700" }, it.label), /* @__PURE__ */ React.createElement("text", { x: it.x.toFixed(1), y: (it.y + 9).toFixed(1), textAnchor: anchor, fill: "#16a34a", fontSize: "10" }, it.val >= 0 ? "+" : "", it.val.toFixed(1)));
    }), /* @__PURE__ */ React.createElement("circle", { cx, cy, r: R * 0.75, fill: "none", stroke: "rgba(255,255,255,0.25)", strokeWidth: "1", strokeDasharray: "2 2" })), /* @__PURE__ */ React.createElement("div", { style: { width: "100%" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#16a34a", borderTop: "2px dashed #34d399" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700" } }, "\u7406\u60F3\uFF08\xB10\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#fbbf24" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, "\u76F4\u8FD1"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontSize: "10px" } }, "(", latest.date, ")")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "20px", height: "2px", background: "#0ea5e9", borderTop: "2px dashed #60a5fa" } }), /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700" } }, "\u5E73\u5747"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontSize: "10px" } }, "(", targets.length, "R / HCP\u63A1\u7528)")), items.map((it) => /* @__PURE__ */ React.createElement("div", { key: it.key, style: { marginBottom: "6px", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, it.key, " ", it.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: it.val < 0 ? "#dc2626" : "#0ea5e9", fontWeight: "700", minWidth: "44px", textAlign: "right" } }, it.val >= 0 ? "+" : "", it.val.toFixed(1)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b", minWidth: "44px", textAlign: "right" } }, it.avgVal >= 0 ? "+" : "", it.avgVal.toFixed(1)))))))));
  };
  const AnalyticsStats = () => {
    const sc20 = [...rounds.filter((r) => r.isComplete && Object.keys(r.simpleHoleData || {}).length > 0)].sort((a, b) => dateToNum(b.date) - dateToNum(a.date)).slice(0, 20);
    if (sc20.length === 0) return null;
    const avgScore = Math.round(sc20.reduce((a, r) => {
      return a + Object.values(r.simpleHoleData || {}).reduce((s, h) => s + (h.score || 0), 0);
    }, 0) / sc20.length * 10) / 10;
    let totalGIR = 0, totalHoles = 0;
    sc20.forEach((r) => {
      const hd2 = r.simpleHoleData || {};
      const pars = r.holePars || Array(18).fill(4);
      Object.entries(hd2).forEach(([hStr, h]) => {
        const par2 = pars[parseInt(hStr) - 1] || 4;
        totalHoles++;
        if ((h.score || 0) - (h.putts || 0) <= par2 - 2) totalGIR++;
      });
    });
    const avgGIR = sc20.length > 0 ? Math.round(totalGIR / sc20.length * 10) / 10 : 0;
    const girRate = totalHoles > 0 ? Math.round(totalGIR / totalHoles * 1e3) / 10 : 0;
    let recoveryOk = 0, recoveryTotal = 0;
    sc20.forEach((r) => {
      const hd2 = r.simpleHoleData || {};
      const pars = r.holePars || Array(18).fill(4);
      Object.entries(hd2).forEach(([hStr, h]) => {
        const par2 = pars[parseInt(hStr) - 1] || 4;
        const isGIR = (h.score || 0) - (h.putts || 0) <= par2 - 2;
        if (!isGIR) {
          recoveryTotal++;
          if ((h.score || 0) <= par2) recoveryOk++;
        }
      });
    });
    const recoveryRate = recoveryTotal > 0 ? Math.round(recoveryOk / recoveryTotal * 1e3) / 10 : null;
    let parBreakHoles = 0, pbTotal = 0;
    sc20.forEach((r) => {
      const hd2 = r.simpleHoleData || {};
      const pars = r.holePars || Array(18).fill(4);
      Object.entries(hd2).forEach(([hStr, h]) => {
        const par2 = pars[parseInt(hStr) - 1] || 4;
        pbTotal++;
        if ((h.score || 0) <= par2) parBreakHoles++;
      });
    });
    const parBreakRate = pbTotal > 0 ? Math.round(parBreakHoles / pbTotal * 1e3) / 10 : null;
    let totalPutts = 0, totalPuttHoles = 0;
    const roundPutts = [];
    sc20.forEach((r) => {
      const holes = Object.values(r.simpleHoleData || {});
      const rPutts = holes.reduce((a, h) => a + (h.putts || 0), 0);
      roundPutts.push(rPutts);
      totalPutts += rPutts;
      totalPuttHoles += holes.length;
    });
    const avgPuttPerHole = totalPuttHoles > 0 ? Math.round(totalPutts / totalPuttHoles * 10) / 10 : null;
    const avgTotalPutts = sc20.length > 0 ? Math.round(roundPutts.reduce((a, v) => a + v, 0) / sc20.length * 10) / 10 : null;
    let totalOB = 0, totalPenalty = 0;
    sc20.forEach((r) => {
      const holes = Object.values(r.simpleHoleData || {});
      totalOB += holes.reduce((a, h) => a + (h.ob || 0), 0);
      totalPenalty += holes.reduce((a, h) => a + (h.penalty || 0), 0);
    });
    const avgOB = sc20.length > 0 ? Math.round(totalOB / sc20.length * 10) / 10 : null;
    const avgPenalty = sc20.length > 0 ? Math.round(totalPenalty / sc20.length * 10) / 10 : null;
    const hcpVal = effectiveHcp;
    const statRows = [
      { label: "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09", value: hcpVal != null ? hcpVal : "\uFF0D", unit: "", color: "#0ea5e9" },
      { label: "\u76F4\u8FD120R\u306E\u5E73\u5747\u30B9\u30B3\u30A2", value: avgScore, unit: "", color: "#16a34a" },
      { label: "\u5E73\u5747\u30D1\u30C3\u30C8\u6570\uFF081H\uFF09", value: avgPuttPerHole != null ? avgPuttPerHole : "\uFF0D", unit: "\u6253", color: "#94a3b8" },
      { label: "\u5E73\u5747\u30C8\u30FC\u30BF\u30EB\u30D1\u30C3\u30C8\u6570\uFF0818H\uFF09", value: avgTotalPutts != null ? avgTotalPutts : "\uFF0D", unit: "\u6253", color: "#64748b" },
      { label: "\u30D1\u30FC\u30AA\u30F3\u7387", value: girRate != null ? girRate + "%" : "\uFF0D", unit: "", color: "#fbbf24" },
      { label: "\u5E73\u5747\u30D1\u30FC\u30AA\u30F3\u6570\uFF0818H\uFF09", value: avgGIR + " \u56DE", unit: "", color: "#a78bfa" },
      { label: "\u30EA\u30AB\u30D0\u30EA\u30FC\u7387", value: recoveryRate != null ? recoveryRate + "%" : "\uFF0D", unit: "", color: "#fb923c" },
      { label: "\u30D1\u30FC\u30D6\u30EC\u30A4\u30AF\u7387", value: parBreakRate != null ? parBreakRate + "%" : "\uFF0D", unit: "", color: "#f472b6" },
      { label: "OB\u6570\uFF0818H\uFF09", value: avgOB != null ? avgOB : "\uFF0D", unit: "\u56DE", color: "#dc2626" },
      { label: "\u30DA\u30CA\u30EB\u30C6\u30A3\u6570\uFF0818H\uFF09", value: avgPenalty != null ? avgPenalty : "\uFF0D", unit: "\u56DE", color: "#b91c1c" }
    ];
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u{1F4CA} Stats\uFF08\u76F4\u8FD1", sc20.length, "R\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "0px" } }, statRows.map((row, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      borderBottom: i < statRows.length - 1 ? "1px solid #e2e8f0" : "none"
    } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "500" } }, row.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "17px", fontWeight: "800", color: row.color } }, row.value, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "500", marginLeft: "2px" } }, row.unit))))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#94a3b8", marginTop: "8px", lineHeight: "1.6" } }, "\u203B\u30D1\u30FC\u30AA\u30F3\uFF1A\u30B9\u30B3\u30A2\uFF0D\u30D1\u30C3\u30C8\u6570 \u2264 Par\uFF0D2\u306E\u30DB\u30FC\u30EB", /* @__PURE__ */ React.createElement("br", null), "\u203B\u30EA\u30AB\u30D0\u30EA\u30FC\u7387\uFF1A\u30D1\u30FC\u30AA\u30F3\u5931\u6557\u30DB\u30FC\u30EB\u3067Par\u4EE5\u4E0B\u3092\u53D6\u3063\u305F\u5272\u5408", /* @__PURE__ */ React.createElement("br", null), "\u203B\u30D1\u30FC\u30D6\u30EC\u30A4\u30AF\u7387\uFF1A\u30B9\u30B3\u30A2\u304CPar\u4EE5\u4E0B\u306E\u30DB\u30FC\u30EB\u306E\u5272\u5408"));
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
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u{1F4CD} \u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "280px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u8DDD\u96E2", "\u56DE\u6570", "1\u30D1\u30C3\u30C8\u7387", "3\u30D1\u30C3\u30C8\u7387", "\u5E73\u5747"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
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
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u{1F4CF} \u6B8B\u308A\u8DDD\u96E2\u5225 \u25CB/\xD7\u7387\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "260px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u8DDD\u96E2", "\u56DE\u6570", "\u25CB\u7387", "\xD7\u7387"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
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
      if (!clubMap[s.club]) clubMap[s.club] = { total: 0, good: 0, bad: 0 };
      clubMap[s.club].total += 1;
      if (s.quality === "\u25CB") clubMap[s.club].good += 1;
      if (s.quality === "\xD7") clubMap[s.club].bad += 1;
    });
    const clubOrder = CLUB_MASTER.map((c) => c.id);
    const rows = Object.entries(clubMap).map(([club, v]) => __spreadValues({ club }, v)).sort((a, b) => clubOrder.indexOf(a.club) - clubOrder.indexOf(b.club));
    if (rows.length === 0) return null;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "12px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u{1F3CC}\uFE0F \u30AF\u30E9\u30D6\u5225 \u25CB/\xD7\u7387\uFF08\u8A73\u7D30\u30E2\u30FC\u30C9\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { overflowX: "auto" } }, /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "11px", minWidth: "240px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { borderBottom: "1px solid #e2e8f0" } }, ["\u30AF\u30E9\u30D6", "\u56DE\u6570", "\u25CB\u7387", "\xD7\u7387"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "6px 4px", textAlign: "center", color: "#475569", fontWeight: "700", whiteSpace: "nowrap" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, rows.map((r, i) => {
      const gPct = Math.round(r.good / r.total * 100);
      const bPct = Math.round(r.bad / r.total * 100);
      return /* @__PURE__ */ React.createElement("tr", { key: i, style: { borderBottom: "1px solid rgba(255,255,255,0.04)" } }, /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#93c5fd", fontWeight: "800" } }, r.club), /* @__PURE__ */ React.createElement("td", { style: { padding: "8px 4px", textAlign: "center", color: "#64748b" } }, r.total), /* @__PURE__ */ React.createElement("td", { style: {
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
  return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("div", { style: S.header }, /* @__PURE__ */ React.createElement("button", { onClick: () => setView("home"), style: { display: "inline-block", lineHeight: 0, verticalAlign: "middle", background: "none", border: "none", padding: 0, cursor: "pointer", borderRadius: "6px", outline: "none" }, title: "\u30DB\u30FC\u30E0" }, /* @__PURE__ */ React.createElement("img", { src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCABAAEADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDW+PPxV1vWvEt7oWiahPY6LZytAfs7lGumU4ZmYc7cggL0wMnOePJftV5nm7uP+/rf41Z1Rf8AiZ3f/XeT/wBCNV9lfv8Al+CoYPDxpUopJL7/ADfmfleLxtWvVlObD7Vef8/dx/39b/GgXV5/z93H/f1v8aNntRtrutHscvtX3D7Vef8AP1cf9/W/xpPtV5/z93H/AH9b/Gl2cUbaLR7D9q+4hurz/n7uP+/rf41638Bfitrei+JbLQNc1Ca+0a8kWBTcOXa1djhWVjztzgEHjnIxjnyQpVjS1P8AaloRwfPj/wDQhXFmGBoY3DypVYppr7vNHVg8bVoVYzgyxqa/8TK6/wCu7/8AoRqttrt5/Bd3ceHrzxIZZmMtzOlpa29lLO0vluN5dkG2IDPG7rg8V1nw08I+GNJ8d21r4puI9QlWwWd4JbYraxzSKjxJ5hOJCULEDAGVOM4rgrZzh8PRlK7k430SfTf/ACvtfTcmll1etVUdlK2rffb/AIbfrseaeHPC3iHxGJW0PSLq/WEgSNEo2qT0BJIGT2HerR8G6pF4fOt3txpmnwEzLHFd3qRTyvE22REiPzFgeMepHrXqfiLxF4K8Pa9rUEWkWM0EyWt2liqssT3MM+RjZ9xijORn5cqMg5wef1Xx3olz4d1TRTd+IZhdXt7crMltbJ5y3GG2yb9xXDZz5eMj8MedRzjG4tKpRpWg2t072tr177aL87d9TLsJhrwq1LyV+vXp+H9d/LGjccGNxyRyp6jqKsXWnXdpZ2V5cQ7IL6NpLZtwPmKrlGOOo+YEc+lemxfEyweWAyW+uWjQWiWq3dtcRtcEI8bmQ7gBvlCFJD3UJ1wQZG8VeB9cSBtUsksUtJI5vsr2hkSRVN1K8EbJ91WlmQZOAQo6YrslmeLhZyoO3W2r+VvO343tozljgsLK6jWV+l9DyXZU+mL/AMTK0/67x/8AoQr1fU9A0DU9Bklsn0eyhtdOto5Lq3T7SWSONZriZUX51fzZUixnJBOcAccfq3gzXfD2rI95ZSyWUV8sC3scZ8pyGX15U8jg45yOoNb0M3o4hOL92XZ/1a+u26Mq2ArUGpbruv6/HY2fC3iafwtrF7Oo1O4C3Jmgt4dTkt4DKrHmVFB8wdMjjIGO9Yesa1r2r2SWOo6pdT2UchkjtS58qMkk/KvoMkAdhwMVqX9hm+uDj/lq/wD6EahGn5/hrCnSw6n7blXM7a+nbt8jxqmY4jk9lze6r/j37nNi0x0XFH2U+ldIbA/3aT7Af7tdn1lHJ7WRzn2Y+lBtvauj+wexpDYH+7T+soPayMnS5rjSTcapZ3F1aXVvEDHLbSmNwWdU6jthjxWtp/iy+1W0/s+SYTmWW2hlmbO8RRSFxGR0OZG8xm6sw5qe208Na3qugYGEcEekiEfypmnaeI7232IFHnISAMfxCvnZQr1swqVHKLpqys1rdJO6d1bpo7ryPpqOZ4KllUaPs5/WG21JStHldlZxad3o9VyvVau1i9f6/pi31wqpISsrg5wP4jUH9u2hPyxD8Wqf9oP4ZeJfDnia+8QaDp1zqGg3srXB+yoXe0djllZRztzkhgMYODjHPjg1PUM4NrdDHX903+FfiON4k4k53FVuVeUY/qm/xPankmDozanTv6t/5nrv9s2+OFjpP7ag54jBryQ6tf8A/Pvc/wDfpv8ACmnVNQ5/0e6P/bJv8K8qWccQz3xU/wAvyRSwGCX/AC6R602twjtGaY2vwj/lnH+teTnU9QwP9Huv+/Tf4U06pfkf8e10P+2Lf4VcM54hhtipfg/zQPL8E/8Al0j1G48bafYi5ins7h28gMPKjZg3zqMAgYz3x6A1b03xTpb3lqJILhC8qAcA4yw+leQnUtRI2i2u+fSJv8K9h/Z4+F3ifxJ4osfEHiDTbnTtAspVuB9qjKPeOpyqqp525AJYjGBgZzx62B4hz+M7Kre71uo+S6Jdu4LJsJiHGEadreb7+p//2Q==", style: { width: "28px", height: "28px", borderRadius: "6px", display: "block" }, alt: "icon" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px" } }, currentRound && /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "round"), onClick: () => setView("round") }, "\u8A18\u9332\u4E2D"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "analytics"), onClick: () => setView("analytics") }, "\u5206\u6790"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "clubs"), onClick: () => setView("clubs") }, "\u30AF\u30E9\u30D6"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "manual"), onClick: () => setView("manual") }, "\u4F7F\u3044\u65B9"), /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.navBtn(view === "profile")), { padding: "5px 9px" }), onClick: () => {
    setView("profile");
    setProfileEdit(__spreadValues({}, profile));
  } }, "\u{1F464}"))), /* @__PURE__ */ React.createElement("div", { style: S.page }, view === "home" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "3px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", margin: 0, background: "linear-gradient(90deg,#f59e0b,#ea580c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution"), /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u30B9\u30B3\u30A2\u306E\u8AB2\u984C\u89E3\u6C7A\u3057\u30B4\u30EB\u30D5\u3092\u9032\u5316\u3055\u305B\u308B")), profile.nickname ? /* @__PURE__ */ React.createElement("p", { style: { color: "#16a34a", fontSize: "13px", fontWeight: "600", marginBottom: "3px" } }, "\u3053\u3093\u306B\u3061\u306F\u3001", profile.nickname, "\u3055\u3093\uFF01") : null), handicap ? /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(96,165,250,0.25)", marginBottom: "18px", background: "#eff6ff" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#0ea5e9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "42px", fontWeight: "800", color: "#0ea5e9", lineHeight: 1 } }, handicap.hcp >= 0 ? "+" : "", handicap.hcp)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#475569", marginTop: "6px" } })), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontSize: "11px", color: "#475569" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "4px" } }, "\u30D9\u30B9\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "700" } }, handicap.bestDiff >= 0 ? "+" : "", handicap.bestDiff)), /* @__PURE__ */ React.createElement("div", null, "\u30EF\u30FC\u30B9\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#dc2626", fontWeight: "700" } }, handicap.worstDiff >= 0 ? "+" : "", handicap.worstDiff)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "8px", fontSize: "9px", color: "#94a3b8", fontStyle: "italic" } }, "\u203B\u5DEE\u5206\u5E73\u5747\u65B9\u5F0F\u306B\u3088\u308B\u53C2\u8003\u5024\u3067\u3059\u3002\u516C\u5F0F\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u3068\u306F\u7570\u306A\u308A\u307E\u3059")) : rounds.filter((r) => r.isComplete).length > 0 ? /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, S.card({ marginBottom: "18px", border: "1px solid rgba(96,165,250,0.15)" })), { fontSize: "12px", color: "#475569", textAlign: "center", padding: "12px" }) }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u7B97\u51FA\u306B\u306F18H\u5B8C\u4E86\u30E9\u30A6\u30F3\u30C9\u304C3\u4EF6\u4EE5\u4E0A\u5FC5\u8981\u3067\u3059\uFF08\u73FE\u5728 ", rounds.filter((r) => r.isComplete).length, "\u4EF6\uFF09") : null, !showNewRound ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "14px" }), onClick: () => {
    setShowNewRound(true);
    setSetupStep(0);
  } }, "\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB"), importedTestData.length > 0 && importedTestData.some((r) => !rounds.some((x) => x.rid === r.rid)) && /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("secondary")), { width: "100%", padding: "10px", fontSize: "12px" }),
      onClick: () => {
        setRounds((prev) => {
          const existingIds = new Set(prev.map((r) => r.rid).filter(Boolean));
          const newRounds = importedTestData.filter((r) => !existingIds.has(r.rid)).map((r) => {
            if (r.inputMode === "detail" && Object.keys(r.simpleHoleData || {}).length === 0 && r.holeData) {
              return __spreadProps(__spreadValues({}, r), { simpleHoleData: deriveSimpleHoleData(r.holeData, r.holePars) });
            }
            return r;
          });
          return [...newRounds, ...prev];
        });
      }
    },
    "\u{1F4E5} \u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\uFF08",
    importedTestData.length,
    "\u30E9\u30A6\u30F3\u30C9\uFF09"
  ), rounds.length > 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("secondary")), { width: "100%", padding: "10px", fontSize: "12px", opacity: 0.7 }),
      onClick: async () => {
        try {
          localStorage.setItem("golf_test_data", JSON.stringify(rounds));
          showToast(`${rounds.length}\u4EF6\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u4FDD\u5B58\u3057\u307E\u3057\u305F`);
          setImportedTestData(rounds);
        } catch (e) {
          showToast("\u4FDD\u5B58\u306B\u5931\u6557\u3057\u307E\u3057\u305F");
        }
      }
    },
    "\u{1F4BE} \u73FE\u5728\u306E",
    rounds.length,
    "\u4EF6\u3092\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3068\u3057\u3066\u4FDD\u5B58"
  )) : /* @__PURE__ */ React.createElement(RoundSetupForm, null), rounds.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: S.card({ textAlign: "center", padding: "38px 20px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "42px", marginBottom: "10px" } }), /* @__PURE__ */ React.createElement("p", { style: { fontWeight: "700", color: "#94a3b8" } }, "\u307E\u3060\u30E9\u30A6\u30F3\u30C9\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", marginTop: "3px", color: "#1e293b" } }, "\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u3057\u3066\u8A18\u9332\u3057\u3088\u3046\uFF01")) : (() => {
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
    const NumInput = ({ val, onChange, min = 0, max = 10 }) => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.max(min, (val || 0) - 1)), style: { width: "30px", height: "30px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#e2e8f0", cursor: "pointer", fontSize: "16px", fontWeight: "700" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "24px", textAlign: "center", fontWeight: "800", fontSize: "16px", color: "#e2e8f0" } }, val || 0), /* @__PURE__ */ React.createElement("button", { onClick: () => onChange(Math.min(max, (val || 0) + 1)), style: { width: "30px", height: "30px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#e2e8f0", cursor: "pointer", fontSize: "16px", fontWeight: "700" } }, "\uFF0B"));
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "11px", marginTop: "1px" } }, "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9\u3000", Object.keys(simpleHoleData).length, "H\u8A18\u9332\u6E08\u307F\u3000\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#1e293b", fontWeight: "700" } }, simpleTotalScore), "\u6253", simpleTotalPar > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: scoreColor(simpleTotalScore - simpleTotalPar) } }, " (", simpleTotalScore - simpleTotalPar >= 0 ? "+" : "", simpleTotalScore - simpleTotalPar, ")"))), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: () => {
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
      ].map((row) => /* @__PURE__ */ React.createElement("div", { key: row.label, style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#475569", width: "26px", flexShrink: 0 } }, row.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, row.keys.map((h, i) => {
        var _a3;
        const hh = simpleHoleData[h];
        const active = currentHole === h;
        const done = (hh == null ? void 0 : hh.score) != null;
        const diff = done ? hh.score - holePars[h - 1] : null;
        const dispNum = (_a3 = row.nums[i]) != null ? _a3 : h;
        return /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => moveToHole(h), style: {
          width: "33px",
          height: "33px",
          borderRadius: "7px",
          cursor: "pointer",
          fontWeight: "700",
          fontSize: "11px",
          border: active ? "2px solid #34d399" : done ? `1px solid ${scoreColor(diff)}55` : "1px solid #e2e8f0",
          background: active ? "rgba(52,211,153,0.18)" : done ? `${scoreColor(diff)}11` : "#f8fafc",
          color: active ? "#16a34a" : done ? scoreColor(diff) : "#334155"
        } }, dispNum);
      })))));
    })()), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => setPar(currentHole, p), style: {
      flex: 1,
      padding: "9px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "800",
      fontSize: "15px",
      border: par === p ? "2px solid #16a34a" : "1px solid #e2e8f0",
      background: par === p ? "rgba(22,163,74,0.10)" : "#f8fafc",
      color: par === p ? "#0ea5e9" : "#334155"
    } }, "Par", p)))), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.15)" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "14px", marginBottom: "14px" } }, getDisplayHoleNum(currentHole), "\u756A"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09"), /* @__PURE__ */ React.createElement(NumInput, { val: (_a2 = shd.score) != null ? _a2 : par, onChange: (v) => {
      var _a3;
      const maxPutts = Math.max(0, v - 1);
      const currentPutts = (_a3 = shd.putts) != null ? _a3 : 0;
      setShd(__spreadValues({ score: v }, currentPutts > maxPutts ? { putts: maxPutts } : {}));
    }, min: 1, max: 20 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30D1\u30C3\u30C8\u6570"), /* @__PURE__ */ React.createElement(NumInput, { val: shd.putts, onChange: (v) => setShd({ putts: v }), min: 0, max: Math.max(0, ((_b2 = shd.score) != null ? _b2 : par) - 1) }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" } }, [
      { key: "ob", label: "OB" },
      { key: "penalty", label: "\u30DA\u30CA\u30EB\u30C6\u30A3" },
      { key: "bunker", label: "\u30D0\u30F3\u30AB\u30FC" }
    ].map(({ key, label }) => /* @__PURE__ */ React.createElement("div", { key }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, label), /* @__PURE__ */ React.createElement(NumInput, { val: shd[key], onChange: (v) => setShd({ [key]: v }), min: 0, max: 5 })))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid #e2e8f0", paddingTop: "12px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "600", width: "90px", color: shd.teeEval ? "#94a3b8" : "#dc2626" } }, "\u{1F3CC}\uFE0F \u30C6\u30A3 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px" } }, "*")), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.teeEval, current: shd.teeEval, onChange: (v) => setShd({ teeEval: v }), labels: OX })), par >= 4 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F33F} \u30BB\u30AB\u30F3\u30C9"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.secondEval, current: shd.secondEval, onChange: (v) => setShd({ secondEval: v }), labels: OX })), par >= 5 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F33F} \u30B5\u30FC\u30C9"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.thirdEval, current: shd.thirdEval, onChange: (v) => setShd({ thirdEval: v }), labels: OX })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "600", width: "90px", color: shd.approachEval ? "#94a3b8" : "#dc2626" } }, "\u{1F3AF} \u30A2\u30D7\u30ED\u30FC\u30C1 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px" } }, "*")), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.approachEval, current: shd.approachEval, onChange: (v) => setShd({ approachEval: v }), labels: OXN })))), (() => {
      const firstHole = 1;
      const lastHole = 18;
      const _frontLastHole = 9;
      const _backFirstHole = 10;
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", marginTop: "16px" } }, currentHole !== firstHole && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { flex: 1 }), onClick: () => {
        if (currentHole === _backFirstHole) {
          moveToHole(_frontLastHole);
        } else {
          moveToHole(currentHole - 1);
        }
      } }, "\u2039 \u524D"), currentHole !== lastHole ? /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { flex: 1 }), onClick: () => {
        var _a3;
        const sc = (_a3 = shd.score) != null ? _a3 : par;
        scoreToast(sc, par);
        if (currentHole === _frontLastHole) {
          moveToHole(_backFirstHole);
        } else {
          moveToHole(currentHole + 1);
        }
      } }, "\u6B21 \u203A") : /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("danger")), { flex: 1 }), onClick: () => {
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
    })()));
  })(), view === "round" && currentRound && inputMode === "detail" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "11px", marginTop: "1px", display: "flex", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", null, totalStrk, "\u6253", !allHoleShots.some((s) => s.quality !== void 0) && totalScore !== 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, " \xB7 \u8A55\u4FA1 ", /* @__PURE__ */ React.createElement("span", { style: { color: scoreColor(totalScore), fontWeight: "700" } }, fmt(totalScore), "pt"))), currentRound.weather && /* @__PURE__ */ React.createElement("span", null, { "sunny": "\u2600\uFE0F", "cloudy": "\u2601\uFE0F", "rainy": "\u{1F327}\uFE0F", "snowy": "\u2744\uFE0F" }[currentRound.weather], " ", ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][(_a = currentRound.wind) != null ? _a : 0], "\uFF08", (_b = currentRound.wind) != null ? _b : 0, "\uFF09"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px" } }, currentRound.venueId && /* @__PURE__ */ React.createElement("button", { style: S.btn("secondary"), onClick: () => setShowYardage((v) => !v) }, "\u{1F4CB} \u8DDD\u96E2"), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: handleDetailFinishClick }, "\u7D42\u4E86"))), (() => {
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
  })(), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30DB\u30FC\u30EB\u9078\u629E"), [{ label: "\u524D\u534A", holes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, { label: "\u5F8C\u534A", holes: [10, 11, 12, 13, 14, 15, 16, 17, 18] }].map((row) => /* @__PURE__ */ React.createElement("div", { key: row.label, style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#475569", width: "26px", flexShrink: 0 } }, row.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, row.holes.map((h) => {
    const hInfo = holeData[h] || { shots: [], done: false };
    const hs = hInfo.shots.reduce((a, s) => a + s.score, 0);
    const active = currentHole === h;
    const hasDone = hInfo.done;
    const hasAny = hInfo.shots.length > 0;
    return /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => setCurrentHole(h), style: {
      width: "33px",
      height: "33px",
      borderRadius: "7px",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "11px",
      border: active ? "2px solid #34d399" : hasDone ? `1px solid ${scoreColor(hs)}55` : hasAny ? "1px solid rgba(251,191,36,0.4)" : "1px solid #e2e8f0",
      background: active ? "rgba(52,211,153,0.18)" : hasDone ? `${scoreColor(hs)}11` : hasAny ? "rgba(251,191,36,0.07)" : "#f8fafc",
      color: active ? "#16a34a" : hasDone ? scoreColor(hs) : hasAny ? "#fbbf24" : "#334155"
    } }, getDisplayHoleNum(h));
  })))))), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => setPar(currentHole, p), style: {
    flex: 1,
    padding: "9px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
    border: par === p ? "2px solid #16a34a" : "1px solid #e2e8f0",
    background: par === p ? "rgba(22,163,74,0.10)" : "#f8fafc",
    color: par === p ? "#0ea5e9" : "#334155"
  } }, "Par", p)))), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: `1px solid ${hd.done ? "rgba(22,163,74,0.25)" : "rgba(245,158,11,0.35)"}`, background: hd.done ? "#f0fdf4" : "#ffffff" }) }, (() => {
    var _a2;
    const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
    const allHoles = venue ? getRoundHoles(currentRound) : [];
    const hInfo = allHoles[currentHole - 1] || null;
    const yard = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
    const teeLabel = ((_a2 = venue == null ? void 0 : venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _a2.label) || "";
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "14px" } }, getDisplayHoleNum(currentHole), "\u756A ", /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8", fontWeight: "400", fontSize: "12px" } }, "Par", par), hInfo && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontWeight: "500", fontSize: "10px", marginLeft: "5px" } }, "HC", hInfo.hdcp)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: S.pill("#0ea5e9") }, totalStrokes, "\u6253"), !hd.shots.some((s) => s.quality !== void 0) && /* @__PURE__ */ React.createElement("span", { style: S.pill(scoreColor(holeScore)) }, fmt(holeScore), "pt"), hd.done && /* @__PURE__ */ React.createElement("span", { style: S.pill("#16a34a") }, "\u2713 \u5B8C\u4E86"), hd.done && /* @__PURE__ */ React.createElement(
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
          setHoleData((p) => __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: false, pinDist: void 0 } }));
        },
        style: { padding: "2px 9px", borderRadius: "20px", background: "rgba(245,158,11,0.10)", color: "#d97706", border: "1px solid rgba(245,158,11,0.30)", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
      },
      "\u4FEE\u6B63"
    ))), yard && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", marginTop: "5px", fontSize: "10px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#d97706", fontWeight: "700" } }, teeLabel, " ", yard, "y")));
  })(), hd.shots.map((s, i) => {
    const c = COLOR_MAP[s.color] || COLOR_MAP.gray;
    return /* @__PURE__ */ React.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: "9px", padding: "9px 11px", borderRadius: "8px", background: "#f8fafc", border: "1px solid rgba(255,255,255,0.055)", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "22px", height: "22px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800", color: "#64748b", flexShrink: 0 } }, hd.shots.slice(0, i).reduce((a, sh) => a + sh.shotCount, 1)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "13px", color: c.text } }, s.optionLabel), s.remainDist && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#fbbf24", background: "rgba(251,191,36,0.1)", padding: "1px 6px", borderRadius: "4px" } }, "\u{1F4CF}", s.remainDist), s.club && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#0ea5e9", background: "rgba(14,165,233,0.12)", padding: "1px 6px", borderRadius: "4px" } }, s.club)), s.penaltyCount > 0 && /* @__PURE__ */ React.createElement("div", { style: { color: "#b91c1c", fontSize: "10px" } }, "\uFF08+", s.penaltyCount, "\u7F70\u30FB\u8A08", s.shotCount, "\u6253\u6D88\u8CBB\uFF09"), s.shotCount > 1 && !s.penaltyCount && s.categoryKey === "putt" && /* @__PURE__ */ React.createElement("div", { style: { color: "#475569", fontSize: "10px" } }, "\uFF08", s.shotCount, "\u6253\u5206\uFF09"), s.note && /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "10px" } }, s.note)), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "13px", flexShrink: 0, color: s.quality !== void 0 ? s.quality === "\u25CB" ? "#16a34a" : s.quality === "\u25B3" ? "#fbbf24" : "#94a3b8" : scoreColor(s.score) } }, s.quality !== void 0 ? s.quality : fmt(s.score)));
  }), hd.shots.length === 0 && /* @__PURE__ */ React.createElement("p", { style: { color: "#1e293b", fontSize: "12px", textAlign: "center", padding: "10px 0" } }, "\u3053\u306E\u30DB\u30FC\u30EB\u306F\u307E\u3060\u8A18\u9332\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", marginTop: "10px" } }, !hd.done && currentCatDef ? /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#fbbf24", fontWeight: "700" } }, currentCatDef.icon, " \u6B21: ", currentCatDef.label),
    /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600" } }, totalStrokes + 1, "\u6253\u76EE \u203A")
  ) : hd.done ? /* @__PURE__ */ React.createElement(React.Fragment, null, currentHole > 1 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h - 1) }, "\u2039 \u524D\u306E\u30DB\u30FC\u30EB"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, textAlign: "center", padding: "12px", color: "#16a34a", fontSize: "13px", fontWeight: "700" } }, "\u30DB\u30FC\u30EB\u5B8C\u4E86 \u{1F3C6}", hd.pinDist && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#0ea5e9", fontWeight: "600", marginTop: "2px" } }, "\u{1F4CD} ", hd.pinDist)), currentHole < 18 ? /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h + 1) }, "\u6B21\u306E\u30DB\u30FC\u30EB \u203A") : /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("danger")), { padding: "10px 18px", fontSize: "13px", fontWeight: "800" }), onClick: handleDetailFinishClick }, "\u30E9\u30A6\u30F3\u30C9\u7D42\u4E86")) : null, !hd.done && hd.shots.length > 0 && /* @__PURE__ */ React.createElement("button", { style: S.btn("undo"), onClick: undoLastShot }, "\u21A9 \u53D6\u6D88")))), showHcpWarning && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 400, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(251,191,36,0.5)", borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", marginBottom: "12px" } }, "\u{1F3CC}\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#1e293b", marginBottom: "8px" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u304C\u672A\u8A2D\u5B9A\u3067\u3059"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#64748b", marginBottom: "20px", lineHeight: 1.7 } }, "HCP\u3092\u8A2D\u5B9A\u3057\u3066\u304B\u3089\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontWeight: "700" } }, "AI\u8A3A\u65AD\u30FB5\u8981\u7D20\u5206\u6790"), "\u304C\u5229\u7528\u3067\u304D\u307E\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "\u3053\u306E\u307E\u307E\u958B\u59CB\u3057\u305F\u5834\u5408\u3001\u4ECA\u56DE\u306E\u30E9\u30A6\u30F3\u30C9\u306F", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "#dc2626", fontWeight: "700" } }, "\u5206\u6790\u306A\u3057"), "\u3067\u8A18\u9332\u3055\u308C\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "8px" } }, /* @__PURE__ */ React.createElement(
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
    "\u{1F464} \u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3067HCP\u3092\u8A2D\u5B9A\u3059\u308B"
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
  )))), finishConfirm && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.50)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 300, padding: "20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: `1px solid ${finishConfirm.type === "ok" ? "rgba(52,211,153,0.4)" : "rgba(251,191,36,0.4)"}`, borderRadius: "16px", padding: "24px 20px", maxWidth: "320px", width: "100%", textAlign: "center" } }, finishConfirm.type === "ok" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "32px", marginBottom: "12px" } }, "\u26F3"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "15px", color: "#e2e8f0", marginBottom: "16px" } }, "\u30B9\u30B3\u30A2\u3092\u767B\u9332\u3057\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px" } }, /* @__PURE__ */ React.createElement(
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
  )))), view === "analytics" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30D7\u30EC\u30FC\u5206\u6790"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u5F97\u610F\u30FB\u4E0D\u5F97\u610F\u30B7\u30E7\u30C3\u30C8\u3092\u78BA\u8A8D\u3057\u3088\u3046")), /* @__PURE__ */ React.createElement(AnalyticsAIDiagnosis, null), /* @__PURE__ */ React.createElement(AnalyticsScoreChart, null), /* @__PURE__ */ React.createElement(AnalyticsRadarChart, null), /* @__PURE__ */ React.createElement(AnalyticsStats, null), /* @__PURE__ */ React.createElement(AnalyticsPuttStats, null), /* @__PURE__ */ React.createElement(AnalyticsDistanceStats, null), /* @__PURE__ */ React.createElement(AnalyticsClubStats, null), !analytics ? /* @__PURE__ */ React.createElement("div", { style: S.card({ textAlign: "center", padding: "38px 20px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "42px", marginBottom: "10px" } }, "\u{1F4CA}"), /* @__PURE__ */ React.createElement("p", { style: { fontWeight: "700", color: "#94a3b8" } }, "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", marginTop: "3px", color: "#1e293b" } }, "\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068\u5206\u6790\u304C\u8868\u793A\u3055\u308C\u307E\u3059")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "14px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" } }, [
    { val: rounds.length, sub: "\u30E9\u30A6\u30F3\u30C9", col: "#0ea5e9" },
    { val: analytics.total, sub: "\u8A18\u9332\u6570", col: "#16a34a" },
    { val: fmt(analytics.totalScore), sub: "\u7D2F\u8A08\u8A55\u4FA1", col: scoreColor(analytics.totalScore) }
  ].map(({ val, sub, col }) => /* @__PURE__ */ React.createElement("div", { key: sub }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "22px", fontWeight: "800", color: col } }, val), /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "10px", fontWeight: "600", marginTop: "2px" } }, sub))))), analytics.sorted.length >= 2 && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px", marginBottom: "12px" } }, [
    { label: "\u{1F3C6} \u6700\u3082\u5F97\u610F", item: analytics.sorted[0], col: "#16a34a" },
    { label: "\u{1F4C9} \u8981\u6539\u5584", item: analytics.sorted[analytics.sorted.length - 1], col: "#dc2626" }
  ].map(({ label, item, col }) => /* @__PURE__ */ React.createElement("div", { key: label, style: S.card({ margin: 0, textAlign: "center", border: `1px solid ${col}30` }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#94a3b8", marginBottom: "5px", fontWeight: "700" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "20px", marginBottom: "4px" } }, item[1].icon), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "11px", marginBottom: "3px" } }, item[1].label), /* @__PURE__ */ React.createElement("div", { style: { color: col, fontWeight: "800", fontSize: "20px" } }, fmt(item[1].avg)), /* @__PURE__ */ React.createElement("div", { style: { color: "#94a3b8", fontSize: "10px" } }, "\u5E73\u5747/\u56DE")))), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30AB\u30C6\u30B4\u30EA\u5225 \u5E73\u5747\u8A55\u4FA1\u30B9\u30B3\u30A2"), analytics.sorted.map(([catId, data]) => {
    const pct = Math.max(0, Math.min(100, (data.avg + 2) / 4 * 100));
    const col = scoreColor(data.avg);
    return /* @__PURE__ */ React.createElement("div", { key: catId, style: { marginBottom: "13px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "600" } }, data.icon, " ", data.label), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8" } }, data.count, "\u56DE"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: col } }, fmt(data.avg)))), /* @__PURE__ */ React.createElement("div", { style: { background: "#f8fafc", borderRadius: "4px", height: "8px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.12)" } }), /* @__PURE__ */ React.createElement("div", { style: { height: "8px", borderRadius: "4px", background: col, width: `${pct}%`, opacity: 0.75 } })));
  }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#1e293b", marginTop: "6px" } }, "\u4E2D\u592E\u304C\xB10\u3000\u5DE6=\u30DE\u30A4\u30CA\u30B9\u3000\u53F3=\u30D7\u30E9\u30B9")), analytics.sorted.map(([catId, data]) => {
    var _a2;
    const opts = ((_a2 = CATEGORIES[catId]) == null ? void 0 : _a2.options) || [];
    const breakdown = opts.map((o) => __spreadProps(__spreadValues({}, o), { count: data.shots.filter((s) => s.optionId === o.id).length })).filter((o) => o.count > 0);
    if (!breakdown.length) return null;
    return /* @__PURE__ */ React.createElement("div", { key: catId, style: S.card() }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, data.icon, " ", data.label, " \u2014 \u5185\u8A33"), breakdown.map((o) => {
      const pct = Math.round(o.count / data.count * 100);
      const c = COLOR_MAP[o.color] || COLOR_MAP.gray;
      return /* @__PURE__ */ React.createElement("div", { key: o.id, style: { marginBottom: "9px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: c.text, fontWeight: "600" } }, o.label), /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8" } }, o.count, "\u56DE (", pct, "%)")), /* @__PURE__ */ React.createElement("div", { style: { background: "#f8fafc", borderRadius: "4px", height: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "5px", borderRadius: "4px", background: c.text, width: `${pct}%`, opacity: 0.65 } })));
    }));
  })))), view === "clubs" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30AF\u30E9\u30D6\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u4F7F\u7528\u3059\u308B\u30AF\u30E9\u30D6\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u8A2D\u5B9A\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#94a3b8" } }, "\u9078\u629E\u4E2D\uFF1A", /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontWeight: "800" } }, savedClubs.length), "\u672C"), savedClubs.length > 0 && /* @__PURE__ */ React.createElement(
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
  }))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "28px", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "18px", fontWeight: "800", marginBottom: "3px" } }, "\u30C7\u30FC\u30BF\u7BA1\u7406"), /* @__PURE__ */ React.createElement("p", { style: { color: "#475569", fontSize: "12px" } }, "\u30A2\u30D7\u30EA\u66F4\u65B0\u6642\u306F\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3092\u53D6\u3063\u3066\u304B\u3089\u3001\u30A4\u30F3\u30DD\u30FC\u30C8\u3067\u5FA9\u5143\u3057\u3066\u304F\u3060\u3055\u3044")), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u{1F4E4} \u30C7\u30FC\u30BF\u66F8\u304D\u51FA\u3057"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "12px", lineHeight: 1.6 } }, "\u30E9\u30A6\u30F3\u30C9\u30C7\u30FC\u30BF\u3092JSON\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002\u30B3\u30D4\u30FC\u3057\u3066\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u6295\u5165\u30C4\u30FC\u30EB\u306B\u8CBC\u308A\u4ED8\u3051\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleExport,
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", fontSize: "13px", padding: "12px" })
    },
    "\u{1F4CB} JSON\u3092\u8868\u793A\u3059\u308B\uFF08",
    rounds.length,
    "\u4EF6\uFF09"
  )), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u{1F4E5} \u30A4\u30F3\u30DD\u30FC\u30C8\uFF08\u5FA9\u5143\u30FB\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u8AAD\u307F\u8FBC\u307F\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "12px", lineHeight: 1.6 } }, "\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u6295\u5165\u30C4\u30FC\u30EB\u3067\u751F\u6210\u3057\u305FJSON\u3092\u8CBC\u308A\u4ED8\u3051\u308B\u304B\u3001\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(
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
    "\u{1F4CB} \u8CBC\u308A\u4ED8\u3051\u305FJSON\u3092\u8AAD\u307F\u8FBC\u3080"
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
  } }, "\u{1F4C2} \u307E\u305F\u306F\u30D5\u30A1\u30A4\u30EB\u3092\u9078\u629E\u3057\u3066\u30A4\u30F3\u30DD\u30FC\u30C8", /* @__PURE__ */ React.createElement("input", { type: "file", accept: ".json", onChange: handleImport, style: { display: "none" } })), importMsg && /* @__PURE__ */ React.createElement("div", { style: {
    marginTop: "10px",
    padding: "10px 12px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "700",
    background: importMsg.type === "ok" ? "rgba(22,163,74,0.12)" : "rgba(239,68,68,0.15)",
    color: importMsg.type === "ok" ? "#16a34a" : "#dc2626",
    border: `1px solid ${importMsg.type === "ok" ? "rgba(52,211,153,0.3)" : "rgba(239,68,68,0.3)"}`
  } }, importMsg.type === "ok" ? "\u2705 " : "\u274C ", importMsg.text))), view === "manual" && (() => {
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
    const MockHome = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", background: "linear-gradient(90deg,#16a34a,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px" } }, ["\u30DB\u30FC\u30E0", "\u5206\u6790", "\u30AF\u30E9\u30D6", "\u4F7F\u3044\u65B9"].map((t) => /* @__PURE__ */ React.createElement("span", { key: t, style: M.mockNavBtn(t === "\u30DB\u30FC\u30E0") }, t)))), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: M.mockBtn }, "\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px" } }, "\u6700\u8FD1\u306E\u30E9\u30A6\u30F3\u30C9"), [{ c: "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9", d: "2026/5/10", s: "+5", col: "#60a5fa" }, { c: "\u4E2D\u5C71\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6", d: "2026/2/17", s: "+3", col: "#16a34a" }].map((r, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "8px 10px", marginBottom: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#1e293b" } }, r.c), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#475569" } }, r.d)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", fontWeight: "800", color: r.col } }, r.s)))));
    const MockSetup = ({ active = "simple" }) => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", background: "linear-gradient(90deg,#16a34a,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" } }, "ScoRExolution")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b", marginBottom: "10px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px", textTransform: "uppercase" } }, "\u5165\u529B\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "8px", borderRadius: "8px", border: active === "detail" ? "2px solid #0ea5e9" : "1px solid #e2e8f0", background: active === "detail" ? "rgba(14,165,233,0.10)" : "#f8fafc", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: active === "detail" ? "#0ea5e9" : "#64748b" } }, "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: active === "detail" ? "#475569" : "#94a3b8" } }, "\u30B7\u30E7\u30C3\u30C8\u5358\u4F4D\u3067\u8A18\u9332")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, padding: "8px", borderRadius: "8px", border: active === "simple" ? "2px solid #16a34a" : "1px solid #e2e8f0", background: active === "simple" ? "rgba(22,163,74,0.10)" : "#f8fafc", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: active === "simple" ? "#16a34a" : "#64748b" } }, "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: active === "simple" ? "#475569" : "#94a3b8" } }, "\u30B9\u30B3\u30A2\u30FB\u8A55\u4FA1\u306E\u307F"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "5px", textTransform: "uppercase" } }, "\u30B4\u30EB\u30D5\u5834"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.mockInput), { marginBottom: "10px" }) }, "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9 \u25BC"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", marginBottom: "10px" } }, ["\u4E2D\u30B3\u30FC\u30B9", "\u897F\u30B3\u30FC\u30B9", "\u6771\u30B3\u30FC\u30B9"].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: { padding: "5px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "700", border: i === 0 ? "2px solid #16a34a" : "1px solid #e2e8f0", background: i === 0 ? "rgba(22,163,74,0.10)" : "#f8fafc", color: i === 0 ? "#16a34a" : "#475569" } }, c))), /* @__PURE__ */ React.createElement("div", { style: M.mockBtn }, "\u30B9\u30BF\u30FC\u30C8\uFF01")));
    const MockRecord = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: "#1e293b" } }, "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#16a34a", fontWeight: "700" } }, "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", marginBottom: "8px", flexWrap: "wrap" } }, Array.from({ length: 9 }, (_, i) => i + 1).map((h) => /* @__PURE__ */ React.createElement("div", { key: h, style: { width: "28px", height: "28px", borderRadius: "6px", background: h === 3 ? "rgba(22,163,74,0.18)" : h < 3 ? "rgba(22,163,74,0.06)" : "#f8fafc", border: h === 3 ? "2px solid #16a34a" : h < 3 ? "1px solid rgba(22,163,74,0.3)" : "1px solid #e2e8f0", color: h === 3 ? "#16a34a" : h < 3 ? "#94a3b8" : "#334155", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" } }, h))), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b", marginBottom: "8px" } }, "3\u756A\u30DB\u30FC\u30EB\uFF08Par4\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "3px", textTransform: "uppercase", fontWeight: "700" } }, "\u30B9\u30B3\u30A2"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "16px", color: "#1e293b" } }, "5"), /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\uFF0B"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "3px", textTransform: "uppercase", fontWeight: "700" } }, "\u30D1\u30C3\u30C8\u6570"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "16px", color: "#1e293b" } }, "2"), /* @__PURE__ */ React.createElement("div", { style: { width: "24px", height: "24px", borderRadius: "5px", background: "#f8fafc", border: "1px solid #e2e8f0", color: "#1e293b", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, "\uFF0B")))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569", marginBottom: "4px", textTransform: "uppercase", fontWeight: "700" } }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1"), [["\u{1F3CC}\uFE0F", "\u30C6\u30A3", "good"], ["\u{1F33F}", "\u30BB\u30AB\u30F3\u30C9", "fair"], ["\u{1F3AF}", "\u30A2\u30D7\u30ED\u30FC\u30C1", "bad"]].map(([ic, nm, ev]) => /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#475569" } }, ic, " ", nm), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]].map(([c, l]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { width: "26px", height: "26px", borderRadius: "6px", background: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? `${c}20` : "#f8fafc", border: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? `2px solid ${c}` : "1px solid #e2e8f0", color: ev === "good" && l === "\u25CB" || ev === "fair" && l === "\u25B3" || ev === "bad" && l === "\xD7" ? c : "#475569", fontWeight: "800", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center" } }, l))))))));
    const MockRecordDetail = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "800", color: "#1e293b" } }, "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#0ea5e9", fontWeight: "700" } }, "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", marginBottom: "8px", flexWrap: "wrap" } }, Array.from({ length: 9 }, (_, i) => i + 1).map((h) => /* @__PURE__ */ React.createElement("div", { key: h, style: { width: "26px", height: "26px", borderRadius: "6px", background: h === 3 ? "rgba(14,165,233,0.18)" : h < 3 ? "rgba(22,163,74,0.06)" : "#f8fafc", border: h === 3 ? "2px solid #0ea5e9" : h < 3 ? "1px solid rgba(22,163,74,0.3)" : "1px solid #e2e8f0", color: h === 3 ? "#0ea5e9" : h < 3 ? "#16a34a" : "#334155", fontSize: "10px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" } }, h))), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(14,165,233,0.20)", borderRadius: "10px", padding: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "12px", color: "#1e293b" } }, "3\u756A ", /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8", fontWeight: "400", fontSize: "10px" } }, "Par4")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px", background: "rgba(14,165,233,0.12)", color: "#0ea5e9" } }, "3\u6253"))), [
      { n: 1, lbl: "\u25CB", txt: "\u30C6\u30A3", dist: "380Y", club: "1W", col: "#16a34a" },
      { n: 2, lbl: "\u25CB", txt: "\u30A2\u30D7\u30ED\u30FC\u30C1", dist: "150Y", club: "7I", col: "#16a34a" },
      { n: 3, lbl: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", txt: "\u30A2\u30D7\u30ED\u30FC\u30C1", dist: "30Y", club: "PW", col: "#16a34a" }
    ].map((s) => /* @__PURE__ */ React.createElement("div", { key: s.n, style: { display: "flex", alignItems: "center", gap: "7px", padding: "6px 8px", borderRadius: "6px", background: "#f8fafc", border: "1px solid #e2e8f0", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "18px", height: "18px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: "800", color: "#64748b" } }, s.n), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "800", color: s.col } }, s.lbl), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", color: "#a16207", background: "rgba(251,191,36,0.12)", padding: "1px 5px", borderRadius: "4px" } }, "\u{1F4CF}", s.dist), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", color: "#0ea5e9", background: "rgba(14,165,233,0.12)", padding: "1px 5px", borderRadius: "4px" } }, s.club))))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 12px", borderRadius: "8px", border: "1px solid rgba(245,158,11,0.35)", background: "#fffbeb", marginTop: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#d97706", fontWeight: "700" } }, "\u26F3 \u6B21: \u30D1\u30C3\u30C8"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8", fontWeight: "700" } }, "4\u6253\u76EE \u203A")))));
    const MockShotForm = () => /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.mockHeader), { borderBottom: "none", paddingBottom: "4px" }) }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b" } }, "3\u756A\u30DB\u30FC\u30EB\uFF08Par4\uFF09"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#94a3b8", fontWeight: "700" } }, "\u30AD\u30E3\u30F3\u30BB\u30EB")), /* @__PURE__ */ React.createElement("div", { style: { padding: "4px 12px 12px 12px", background: "#f8fafc" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#d97706", fontWeight: "700", marginBottom: "10px" } }, "\u{1F3AF} 2\u6253\u76EE \u2014 \u30A2\u30D7\u30ED\u30FC\u30C1"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u{1F4CF} \u6B8B\u308A\u8DDD\u96E2 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(14,165,233,0.3)", borderRadius: "8px", padding: "8px 12px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "18px", fontWeight: "800", color: "#0ea5e9" } }, "150", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#93c5fd" } }, " Y")))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u{1F3CC}\uFE0F \u4F7F\u7528\u30AF\u30E9\u30D6 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, ["6I", "7I", "8I", "9I", "PW"].map((c, i) => /* @__PURE__ */ React.createElement("div", { key: c, style: { padding: "6px 10px", borderRadius: "6px", fontSize: "10px", fontWeight: "800", border: i === 1 ? "1px solid rgba(14,165,233,0.6)" : "1px solid rgba(14,165,233,0.2)", background: i === 1 ? "rgba(14,165,233,0.18)" : "#ffffff", color: i === 1 ? "#0ea5e9" : "#93c5fd" } }, c)))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "5px" } }, "\u{1F4CA} \u7D50\u679C ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, [["\u25CB", "#16a34a", true], ["\u25B3", "#a16207", false], ["\xD7", "#64748b", false], ["\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3", "#16a34a", false], ["\u30AB\u30C3\u30D7\u30A4\u30F3", "#16a34a", false]].map(([l, c, sel]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { padding: "7px 10px", borderRadius: "7px", fontSize: "10px", fontWeight: "800", border: `1px solid ${c}55`, background: sel ? `${c}18` : "#ffffff", color: c, opacity: sel ? 1 : 0.6 } }, sel ? "\u2713 " : "", l))))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 12px 14px", borderTop: "1px solid #e2e8f0", background: "#ffffff" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "100%", padding: "10px", borderRadius: "10px", background: "linear-gradient(135deg,#34d399,#10b981)", color: "#ffffff", fontWeight: "800", fontSize: "12px", textAlign: "center" } }, "\u8A18\u9332\u3059\u308B")));
    const MockAnalytics = () => {
      const cx = 90, cy = 80, R = 55;
      const labels = ["\u30C6\u30A3", "\u30ED\u30F3\u30B0", "\u30B7\u30E7\u30FC\u30C8", "\u30D1\u30C3\u30C8", "\u30D0\u30F3\u30AB\u30FC"];
      const scores = [0.7, 0.4, 0.55, 0.8, 0.3];
      const avgs = [0.6, 0.6, 0.6, 0.6, 0.6];
      const n = labels.length;
      const angle = (i) => Math.PI * 2 * i / n - Math.PI / 2;
      const pt = (i, r) => [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))];
      const poly = (pts) => pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ") + "Z";
      const latestPts = scores.map((_, i) => pt(i, R * scores[i]));
      const avgPts = avgs.map((_, i) => pt(i, R * avgs[i]));
      const gridLvls = [0.25, 0.5, 0.75, 1];
      return /* @__PURE__ */ React.createElement("div", { style: M.mockFrame }, /* @__PURE__ */ React.createElement("div", { style: M.mockHeader }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b" } }, "\u30D7\u30EC\u30FC\u5206\u6790")), /* @__PURE__ */ React.createElement("div", { style: M.mockBody }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", fontWeight: "700", color: "#475569", marginBottom: "6px", textTransform: "uppercase" } }, "5\u8981\u7D20\u30D0\u30E9\u30F3\u30B9\uFF08\u76F4\u8FD1 vs \u5E73\u5747\uFF09"), /* @__PURE__ */ React.createElement("svg", { width: "100%", viewBox: "0 0 180 170", style: { display: "block" } }, gridLvls.map((lv, gi) => {
        const pts = labels.map((_, i) => pt(i, R * lv));
        return /* @__PURE__ */ React.createElement("path", { key: gi, d: poly(pts), fill: "none", stroke: "#eef2f7", strokeWidth: "1" });
      }), labels.map((_, i) => {
        const outer = pt(i, R);
        return /* @__PURE__ */ React.createElement("line", { key: i, x1: cx, y1: cy, x2: outer[0], y2: outer[1], stroke: "#eef2f7", strokeWidth: "1" });
      }), /* @__PURE__ */ React.createElement("path", { d: poly(labels.map((_, i) => pt(i, R * 0.75))), fill: "rgba(22,163,74,0.08)", stroke: "#16a34a", strokeWidth: "1.2", strokeDasharray: "3 3" }), /* @__PURE__ */ React.createElement("path", { d: poly(avgPts), fill: "rgba(14,165,233,0.1)", stroke: "#0ea5e9", strokeWidth: "1.5", strokeDasharray: "3 2" }), /* @__PURE__ */ React.createElement("path", { d: poly(latestPts), fill: "rgba(251,191,36,0.18)", stroke: "#fbbf24", strokeWidth: "2" }), latestPts.map(([x, y], i) => /* @__PURE__ */ React.createElement("circle", { key: i, cx: x, cy: y, r: "2.5", fill: "#fbbf24" })), labels.map((lb, i) => {
        const [x, y] = pt(i, R + 14);
        return /* @__PURE__ */ React.createElement("text", { key: i, x, y, textAnchor: "middle", fill: "#64748b", fontSize: "8", fontWeight: "700" }, lb);
      })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "7px", marginTop: "4px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#16a34a" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#16a34a" } }), " \u7406\u60F3"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#d97706" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#fbbf24" } }), " \u76F4\u8FD1"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "3px", fontSize: "8px", color: "#0ea5e9" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "10px", height: "2px", background: "#0ea5e9", opacity: 0.6 } }), " \u5E73\u5747"))));
    };
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: M.hero }, /* @__PURE__ */ React.createElement("div", { style: M.badge }, "\u{1F4D6} \u30B9\u30BF\u30FC\u30C8\u30AC\u30A4\u30C9"), /* @__PURE__ */ React.createElement("h2", { style: M.heroH }, "ScoRExolution \u3067", /* @__PURE__ */ React.createElement("br", null), "\u30B9\u30B3\u30A2\u3092\u6539\u5584\u3057\u3088\u3046\uFF01"), /* @__PURE__ */ React.createElement("p", { style: M.heroB }, "\u30B9\u30B3\u30A2\u304C\u4F38\u3073\u60A9\u3080\u7406\u7531\u3063\u3066\u3001\u3060\u3044\u305F\u3044\u300C\u81EA\u5206\u306E\u5F31\u70B9\u3092\u77E5\u3089\u306A\u3044\u304B\u3089\u300D\u306A\u3093\u3067\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "ScoRExolution \u306F\u30E9\u30A6\u30F3\u30C9\u306E\u30C7\u30FC\u30BF\u3092\u84C4\u7A4D\u3057\u3066\u3001", /* @__PURE__ */ React.createElement("b", { style: { color: "#16a34a" } }, "\u3069\u3053\u3092\u76F4\u305B\u3070\u30B9\u30B3\u30A2\u304C\u7E2E\u307E\u308B\u304B"), "\u3092\u6559\u3048\u3066\u304F\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.card), { marginBottom: "16px" }) }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u3053\u306E\u30AC\u30A4\u30C9\u306E\u5185\u5BB9"), [
      { c: "#16a34a", t: "\u7B2C1\u7AE0 \u301C \u7C21\u6613\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5" },
      { c: "#0ea5e9", t: "\u7B2C2\u7AE0 \u301C \u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5" },
      { c: "#f59e0b", t: "\u7B2C3\u7AE0 \u301C \u5206\u6790\u30DA\u30FC\u30B8\u3067\u30B9\u30B3\u30A2\u30A2\u30C3\u30D7" }
    ].map(({ c, t }) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "6px", height: "6px", borderRadius: "50%", background: c, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#475569" } }, t)))), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.card), { marginBottom: "16px" }) }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "2\u3064\u306E\u5165\u529B\u30E2\u30FC\u30C9\u3092\u4F7F\u3044\u5206\u3051"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { padding: "10px", borderRadius: "8px", border: "1px solid rgba(22,163,74,0.2)", background: "#f0fdf4" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#16a34a", marginBottom: "4px" } }, "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", lineHeight: 1.55 } }, "1\u30DB\u30FC\u30EB30\u79D2\u3002\u30B9\u30B3\u30A2\u30FB\u30D1\u30C3\u30C8\u30FB\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1\u306E\u307F\u3002", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "\u30E9\u30A6\u30F3\u30C9\u4E2D\u306B\u624B\u65E9\u304F"), "\u8A18\u9332\u3057\u305F\u3044\u4EBA\u5411\u3051\u3002")), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px", borderRadius: "8px", border: "1px solid rgba(14,165,233,0.2)", background: "#eff6ff" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#0ea5e9", marginBottom: "4px" } }, "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", lineHeight: 1.55 } }, "1\u6253\u305A\u3064\u8DDD\u96E2\u30FB\u30AF\u30E9\u30D6\u30FB\u7D50\u679C\u3092\u8A18\u9332\u3002", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("b", null, "\u8DDD\u96E2\u5225\uFF0F\u30AF\u30E9\u30D6\u5225\u306E\u5206\u6790"), "\u304C\u898B\u305F\u3044\u4EBA\u5411\u3051\u3002"))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", marginTop: "8px", lineHeight: 1.5 } }, "\u{1F4A1} \u3069\u3061\u3089\u306E\u30E2\u30FC\u30C9\u3067\u3082\u57FA\u672C\u5206\u6790\uFF08\u63A8\u79FB\u30B0\u30E9\u30D5\u30FB\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\uFF09\u306F\u540C\u3058\u3088\u3046\u306B\u4F7F\u3048\u307E\u3059\u3002\u8A73\u7D30\u30E2\u30FC\u30C9\u306F\u3055\u3089\u306B\u4E0A\u7D1A\u5206\u6790\u304C\u8FFD\u52A0\u3067\u898B\u3089\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#16a34a") }, "1"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u7C21\u6613\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "1\u30DB\u30FC\u30EB30\u79D2\u3067\u3067\u304D\u308B\u3001\u304B\u3093\u305F\u3093\u306A\u8A18\u9332\u65B9\u6CD5")))), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 1 \u2014 \u30E9\u30A6\u30F3\u30C9\u3092\u59CB\u3081\u308B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30DB\u30FC\u30E0\u753B\u9762\u306E\u300C\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u300D\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u8A2D\u5B9A\u753B\u9762\u304C\u958B\u3044\u305F\u3089\u3001\u5165\u529B\u30E2\u30FC\u30C9\u3067\u300C\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9\u300D\u3092\u9078\u629E\u3057\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement(MockHome, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30DB\u30FC\u30E0\u753B\u9762\u3002\u30E9\u30A6\u30F3\u30C9\u5C65\u6B74\u3068\u30CF\u30F3\u30C7\u30A3\u304C\u78BA\u8A8D\u3067\u304D\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement(Step, { n: "1", title: "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9 \u3092\u9078\u3076", body: "\u30B9\u30B3\u30A2\u3068\u8A55\u4FA1\u3092\u30B5\u30AF\u30C3\u3068\u5165\u529B\u3057\u305F\u3044\u306A\u3089\u3053\u3061\u3089\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "2", title: "\u30B4\u30EB\u30D5\u5834\u3092\u9078\u3076", body: "\u30D7\u30EB\u30C0\u30A6\u30F3\u304B\u3089\u9078\u629E\u3002\u7DCF\u6B66CC\u30FB\u4E2D\u5C71CC\u30FB\u6210\u7530\u306A\u3069\u95A2\u6771\u30A8\u30EA\u30A2\u4E2D\u5FC3\u306B\u5BFE\u5FDC\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "3", title: "\u30B3\u30FC\u30B9\u30FB\u30B0\u30EA\u30FC\u30F3\u30FB\u30C6\u30A3\u30FC\u3092\u8A2D\u5B9A", body: "\u300C\u4E2D\u2192\u897F\u300D\u300C\u30D9\u30F3\u30C8\u300D\u300C\u30EC\u30AE\u30E5\u30E9\u30FC\u300D\u306E\u3088\u3046\u306B\u6307\u5B9A\u3002" }), /* @__PURE__ */ React.createElement(Step, { n: "4", title: "\u65E5\u4ED8\u30FB\u5929\u6C17\u30FB\u98A8\u3092\u5165\u529B\u3057\u3066\u30B9\u30BF\u30FC\u30C8\uFF01", body: "\u5929\u6C17\u30FB\u98A8\u306F\u3056\u3063\u304F\u308A\u3067OK\u3002\u5F8C\u304B\u3089\u4FEE\u6B63\u3082\u3067\u304D\u307E\u3059\u3002" })), /* @__PURE__ */ React.createElement(MockSetup, { active: "simple" }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u753B\u9762\u3002\u7C21\u6613\u30E2\u30FC\u30C9\u3092\u9078\u3093\u3067\u30B9\u30BF\u30FC\u30C8\uFF01"), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 2 \u2014 \u30DB\u30FC\u30EB\u3054\u3068\u306B\u5165\u529B\u3059\u308B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u5404\u30DB\u30FC\u30EB\u30676\u9805\u76EE\u3092\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u4E0A\u306E\u30DB\u30FC\u30EB\u756A\u53F7\u30DC\u30BF\u30F3\u3067\u79FB\u52D5\u3067\u304D\u307E\u3059\u3002\u300C\u2039 \u524D\u300D\u300C\u6B21 \u203A\u300D\u30DC\u30BF\u30F3\u3067\u3082\u79FB\u52D5\u53EF\u80FD\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" } }, [
      { n: "\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09", req: true, d: "\u2212/\uFF0B\u3067\u5165\u529B\u3002\u305D\u306E\u30DB\u30FC\u30EB\u306E\u5408\u8A08\u6253\u6570\u3002" },
      { n: "\u30D1\u30C3\u30C8\u6570", req: true, d: "\u30B0\u30EA\u30FC\u30F3\u306B\u4E57\u3063\u3066\u304B\u3089\u306E\u6253\u6570\u3002" },
      { n: "OB", req: false, d: "OB\u306B\u306A\u3063\u305F\u56DE\u6570\u3002\u5206\u6790\u306B\u4F7F\u308F\u308C\u307E\u3059\u3002" },
      { n: "\u30DA\u30CA\u30EB\u30C6\u30A3", req: false, d: "\u6C60\u30DD\u30C1\u30E3\u306A\u30691\u6253\u7F70\u306E\u56DE\u6570\u3002" }
    ].map(({ n, req, d }) => /* @__PURE__ */ React.createElement("div", { key: n, style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, n, req && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#dc2626", marginLeft: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.5 } }, d)))), /* @__PURE__ */ React.createElement("div", { style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, "\u30D0\u30F3\u30AB\u30FC ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b" } }, "\u4EFB\u610F")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b" } }, "\u30D0\u30F3\u30AB\u30FC\u306B\u5165\u3063\u305F\u56DE\u6570\u30020\u306E\u307E\u307E\u3067\u3082OK\u3067\u3059\u3002"))), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 3 \u2014 \u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1\u304C\u8D85\u91CD\u8981\uFF01"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u5404\u30B7\u30E7\u30C3\u30C8\u306E\u51FA\u6765\u3092 \u25CB \u25B3 \xD7 \u306E3\u6BB5\u968E\u3067\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u6253\u6570\u3060\u3051\u3067\u306A\u304F\u300C\u3069\u306E\u30B7\u30E7\u30C3\u30C8\u304C\u826F\u304B\u3063\u305F\u304B\u30FB\u60AA\u304B\u3063\u305F\u304B\u300D\u3092\u8A18\u9332\u3059\u308B\u3053\u3068\u3067\u5F31\u70B9\u304C\u898B\u3048\u3066\u304D\u307E\u3059\u3002\u3053\u308C\u304C\u30B9\u30B3\u30A2\u6539\u5584\u306E\u6838\u5FC3\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, [
      { ic: "\u{1F3CC}\uFE0F", nm: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8", when: "\u5168\u30DB\u30FC\u30EB\u5171\u901A", req: true, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F33F}", nm: "\u30BB\u30AB\u30F3\u30C9\u30B7\u30E7\u30C3\u30C8", when: "Par4 / Par5 \u306E\u307F", req: false, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F33F}", nm: "\u30B5\u30FC\u30C9\u30B7\u30E7\u30C3\u30C8", when: "Par5 \u306E\u307F", req: false, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"]] },
      { ic: "\u{1F3AF}", nm: "\u30A2\u30D7\u30ED\u30FC\u30C1", when: "\u30D1\u30FC\u30AA\u30F3\u306A\u3089\u300C\u7121\u300D\u3092\u9078\u629E", req: true, btns: [["#16a34a", "\u25CB"], ["#fbbf24", "\u25B3"], ["#dc2626", "\xD7"], ["#64748b", "\u7121"]] }
    ].map(({ ic, nm, when, req, btns }) => /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", marginBottom: "8px", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flex: 1 } }, /* @__PURE__ */ React.createElement("span", null, ic), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", fontWeight: "700", color: "#1e293b" } }, nm), req && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#dc2626", marginLeft: "5px" } }, "\u5FC5\u9808"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569" } }, when))), /* @__PURE__ */ React.createElement(EvalBtns, { items: btns }))), /* @__PURE__ */ React.createElement("div", { style: M.tipBox }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#16a34a", marginBottom: "5px" } }, "\u{1F4A1} \u8A55\u4FA1\u306E\u76EE\u5B89"), [["#16a34a", "\u25CB\uFF08\u826F\u3044\uFF09", "\u306D\u3089\u3044\u901A\u308A\u306B\u6253\u3066\u305F"], ["#fbbf24", "\u25B3\uFF08\u666E\u901A\uFF09", "\u307E\u3042\u307E\u3042\u3001\u5C11\u3057\u30DF\u30B9"], ["#dc2626", "\xD7\uFF08\u60AA\u3044\uFF09", "\u660E\u3089\u304B\u306A\u30DF\u30B9\u30FBOB\u30FB\u6C60"]].map(([c, l, d]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: c, fontSize: "12px" } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b" } }, d))))), /* @__PURE__ */ React.createElement(MockRecord, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u7C21\u6613\u30E2\u30FC\u30C9\u306E\u30DB\u30FC\u30EB\u5165\u529B\u753B\u9762"), /* @__PURE__ */ React.createElement("div", { style: M.accentG }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 4 \u2014 \u30DB\u30FC\u30EB\u79FB\u52D5 & \u7D42\u4E86"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "18\u30DB\u30FC\u30EB\u5165\u529B\u3057\u305F\u3089\u300C\u7D42\u4E86\u300D\u30DC\u30BF\u30F3"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30DB\u30FC\u30EB\u756A\u53F7\u30DC\u30BF\u30F3\u306F\u5165\u529B\u72B6\u6CC1\u306B\u5FDC\u3058\u3066\u8272\u304C\u5909\u308F\u308A\u307E\u3059\u3002\u30B9\u30B3\u30A2\u8A18\u53F7\u306E\u610F\u5473\u306F\u6B21\u306E\u901A\u308A\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, [["\u25CE", "#dc2626", "\u30A4\u30FC\u30B0\u30EB\u4EE5\u4E0A", "\u30D1\u30FC -2\u4EE5\u4E0B"], ["\u25CB", "#ef4444", "\u30D0\u30FC\u30C7\u30A3", "\u30D1\u30FC -1"], ["\uFF0D", "#16a34a", "\u30D1\u30FC", "\u57FA\u6E96\u901A\u308A"], ["\u25B3", "#60a5fa", "\u30DC\u30AE\u30FC", "\u30D1\u30FC +1"], ["\u25A1", "#3b82f6", "\u30C0\u30D6\u30EB\u30DC\u30AE\u30FC", "\u30D1\u30FC +2"], ["\u25A0", "#1d4ed8", "\u30C8\u30EA\u30D7\u30EB\u4EE5\u4E0A", "\u30D1\u30FC +3\u4EE5\u4E0A"]].map(([s, c, l, d]) => /* @__PURE__ */ React.createElement("div", { key: l, style: M.scoreRow }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: c, fontSize: "14px", width: "22px", textAlign: "center" } }, s), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", color: "#1e293b", fontSize: "12px", flex: 1 } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569" } }, d))), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.tipBox), { marginTop: "8px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#16a34a", marginBottom: "5px" } }, "\u2705 \u8A18\u9332\u306E\u30B3\u30C4"), ["\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u30FB\u30A2\u30D7\u30ED\u30FC\u30C1\u306F\u5FC5\u9808\u3002\u3053\u306E2\u3064\u304C\u306A\u3044\u3068\u5206\u6790\u304C\u3067\u304D\u307E\u305B\u3093\u3002", "\u5206\u6790\u306B\u306F3\u30E9\u30A6\u30F3\u30C9\u4EE5\u4E0A\u5FC5\u8981\u3002\u307E\u305A3\u56DE\u8A18\u9332\u3057\u3066\u307F\u307E\u3057\u3087\u3046\uFF01", "\u521D\u56DE\u306F\u300C\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\u300D\u3067\u52D5\u4F5C\u78BA\u8A8D\u3082\u3067\u304D\u307E\u3059\u3002"].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "10px", marginTop: "1px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t))))), /* @__PURE__ */ React.createElement("div", { style: M.hr }), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#0ea5e9") }, "2"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u5165\u529B\u65B9\u6CD5"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "1\u6253\u305A\u3064\u8A18\u9332\u3057\u3066\u3001\u8DDD\u96E2\u5225\u30FB\u30AF\u30E9\u30D6\u5225\u306E\u6DF1\u3044\u5206\u6790\u3092\u5F97\u308B")))), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u8A73\u7D30\u30E2\u30FC\u30C9\u3067\u4F55\u304C\u3067\u304D\u308B\uFF1F"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C150Y\u30677I\u3092\u4F7F\u3063\u305F\u6642\u306E\u30DF\u30B9\u7387\u300D\u304C\u898B\u3048\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "1\u6253\u3054\u3068\u306B\u8DDD\u96E2\u30FB\u4F7F\u7528\u30AF\u30E9\u30D6\u30FB\u7D50\u679C\u3092\u8A18\u9332\u3059\u308B\u306E\u3067\u3001\u30E9\u30A6\u30F3\u30C9\u5F8C\u306B", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u6570"), "\u30FB", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u6B8B\u308A\u8DDD\u96E2\u5225\u30CA\u30A4\u30B9\u30B7\u30E7\u30C3\u30C8\u7387"), "\u30FB", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u30AF\u30E9\u30D6\u5225\u6210\u529F\u7387"), "\u3068\u3044\u3063\u305F\u4E0A\u7D1A\u5206\u6790\u304C\u8FFD\u52A0\u3067\u8868\u793A\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 1 \u2014 \u8A73\u7D30\u30E2\u30FC\u30C9\u3067\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A\u3067\u300C\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9\u300D\u3092\u9078\u629E"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u305D\u306E\u5F8C\u306E\u6D41\u308C\uFF08\u30B4\u30EB\u30D5\u5834\u30FB\u30B3\u30FC\u30B9\u30FB\u30B0\u30EA\u30FC\u30F3\u30FB\u30C6\u30A3\u30FC\u30FB\u65E5\u4ED8\uFF09\u306F\u7C21\u6613\u30E2\u30FC\u30C9\u3068\u540C\u3058\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement(MockSetup, { active: "detail" }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u300C\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9\u300D\u3092\u30BF\u30C3\u30D7\u3057\u3066\u9078\u629E"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 2 \u2014 \u30DB\u30FC\u30EB\u3092\u9078\u3093\u3067\u30B7\u30E7\u30C3\u30C8\u8A18\u9332\u958B\u59CB"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30DB\u30FC\u30EB\u756A\u53F7 \u2192 Par\u9078\u629E \u2192 \u300C\u6B21:\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u300D\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30DB\u30FC\u30EB\u3054\u3068\u306B\u6700\u521D\u306F\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u304B\u3089\u8A18\u9332\u304C\u59CB\u307E\u308A\u307E\u3059\u3002\u30A2\u30F3\u30D0\u30FC\u8272\u306E\u30DC\u30BF\u30F3\u304C\u300C\u6B21\u306B\u5165\u529B\u3059\u3079\u304D\u30B7\u30E7\u30C3\u30C8\u300D\u3092\u793A\u3057\u3066\u3044\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement(MockRecordDetail, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u30DB\u30FC\u30EB\u5165\u529B\u753B\u9762\uFF083\u6253\u76EE\u307E\u3067\u30ED\u30B0\u8868\u793A\uFF09"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 3 \u2014 1\u30B7\u30E7\u30C3\u30C8\u305A\u3064\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30B7\u30E7\u30C3\u30C8\u5165\u529B\u30E2\u30FC\u30C0\u30EB\u304C\u958B\u304F"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "4\u9805\u76EE\u3092\u9806\u306B\u5165\u529B\u3057\u307E\u3059\u3002\u3059\u3079\u3066\u306E\u5FC5\u9808\u9805\u76EE\u3092\u5165\u308C\u308B\u3068\u300C\u8A18\u9332\u3059\u308B\u300D\u30DC\u30BF\u30F3\u304C\u7DD1\u8272\u306B\u306A\u308A\u3001\u62BC\u3059\u3068\u81EA\u52D5\u3067\u6B21\u306E\u30B7\u30E7\u30C3\u30C8\u3078\u9032\u307F\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement(Step, { n: "1", color: "#0ea5e9", title: "\u{1F4CF} \u6B8B\u308A\u8DDD\u96E2\uFF08\u5FC5\u9808\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u30C6\u30A3\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u96FB\u5353\u3067\u6570\u5B57\u5165\u529B"), "\uFF08\u30B3\u30FC\u30B9\u8DDD\u96E2\u304C\u81EA\u52D5\u5165\u308B\uFF0F\u30BF\u30C3\u30D7\u3067\u4FEE\u6B63\uFF09\uFF0F\u30A2\u30D7\u30ED\u30FC\u30C1\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u30B9\u30E9\u30A4\u30C0\u30FC"), "\u3067Y\u6570\u6307\u5B9A\uFF0F\u30D1\u30C3\u30C8\uFF1D", /* @__PURE__ */ React.createElement("b", null, "\u30B9\u30E9\u30A4\u30C0\u30FC"), "\u3067m\u6570\u6307\u5B9A\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "2", color: "#0ea5e9", title: "\u{1F3CC}\uFE0F \u4F7F\u7528\u30AF\u30E9\u30D6\uFF08\u5FC5\u9808\u30FB\u30D1\u30C3\u30C8\u4EE5\u5916\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u767B\u9332\u30AF\u30E9\u30D6\u304B\u3089\u9078\u629E\u3002\u300C\u30AF\u30E9\u30D6\u30BB\u30C3\u30C8\u300D\u30DA\u30FC\u30B8\u3067\u81EA\u5206\u306E\u30AF\u30E9\u30D6\u3092\u767B\u9332\u3057\u3066\u304A\u304F\u3068\u3001\u3053\u3053\u306B\u81EA\u5206\u306E\u30AF\u30E9\u30D6\u3060\u3051\u304C\u8868\u793A\u3055\u308C\u3066\u30B5\u30AF\u30B5\u30AF\u9078\u3079\u307E\u3059\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "3", color: "#0ea5e9", title: "\u{1F4CA} \u7D50\u679C\uFF08\u5FC5\u9808\uFF09", body: /* @__PURE__ */ React.createElement(React.Fragment, null, "\u25CB / \u25B3 / \xD7 \u306E3\u6BB5\u968E\uFF0B\u7279\u6B8A2\u7A2E\uFF08\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\u30FB\u30AB\u30C3\u30D7\u30A4\u30F3\uFF09\u3002", /* @__PURE__ */ React.createElement("b", { style: { color: "#dc2626" } }, "\xD7\u3092\u9078\u3076\u3068\u30DF\u30B9\u306E\u7A2E\u985E"), "\uFF08\u30D0\u30F3\u30AB\u30FC\u30FB1\u30DA\u30CA\u30FBOB\uFF09\u306E\u9078\u629E\u304C\u8FFD\u52A0\u3067\u51FA\u307E\u3059\u3002OB\u306F\u30C6\u30A3\u30672\u6253\u7F70\u3001\u30A2\u30D7\u30ED\u30FC\u30C1\u4EE5\u964D\u30671\u6253\u7F70\u3068\u3057\u3066\u8A08\u7B97\u3055\u308C\u307E\u3059\u3002") }), /* @__PURE__ */ React.createElement(Step, { n: "4", color: "#0ea5e9", title: "\u{1F4DD} \u30E1\u30E2\uFF08\u4EFB\u610F\uFF09", body: "\u300C\u5DE6\u306B\u5F15\u3063\u639B\u3051\u305F\u300D\u306A\u3069\u6C17\u4ED8\u304D\u3092\u6B8B\u305B\u307E\u3059\u3002\u30B9\u30B3\u30A2\u30FB\u5206\u6790\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002" })), /* @__PURE__ */ React.createElement(MockShotForm, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30B7\u30E7\u30C3\u30C8\u5165\u529B\u30E2\u30FC\u30C0\u30EB\uFF08\u30A2\u30D7\u30ED\u30FC\u30C1\u30FB150Y\u30FB7I\u30FB\u25CB\u306E\u4F8B\uFF09"), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 4 \u2014 \u30B0\u30EA\u30FC\u30F3\u5230\u9054\u5F8C\u306F\u30D1\u30C3\u30C8\u5165\u529B"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\u300D\u3092\u9078\u3076\u3068\u30D1\u30C3\u30C8\u5165\u529B\u3078\u81EA\u52D5\u5207\u66FF"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "1\u30D1\u30C3\u30C8\u3067\u30AB\u30C3\u30D7\u30A4\u30F3\u306A\u3089\u300C1\u30D1\u30C3\u30C8 \u25CB\u300D\u30012\u30D1\u30C3\u30C8\u306A\u3089\u300C2\u30D1\u30C3\u30C8 \u25B3\u300D\u3001\u3068", /* @__PURE__ */ React.createElement("b", null, "\u30D1\u30C3\u30C8\u6570\u307E\u3068\u3081\u30661\u56DE\u3067\u8A18\u9332"), "\u3067\u304D\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "5px", marginBottom: "8px" } }, [["1\u30D1\u30C3\u30C8", "#16a34a"], ["2\u30D1\u30C3\u30C8", "#fbbf24"], ["3\u30D1\u30C3\u30C8", "#64748b"], ["4\u30D1\u30C3\u30C8", "#dc2626"], ["5\u30D1\u30C3\u30C8", "#b91c1c"]].map(([l, c]) => /* @__PURE__ */ React.createElement("div", { key: l, style: { padding: "8px 4px", borderRadius: "7px", border: `1px solid ${c}55`, background: `${c}10`, color: c, fontWeight: "800", fontSize: "10px", textAlign: "center" } }, l))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, "\u30D1\u30C3\u30C8\u306E\u5F8C\u306F\u300C\u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2\u300D\u3092\u805E\u304B\u308C\u308B\u306E\u3067\u30BF\u30C3\u30D7\u3057\u3066\u8A18\u9332\uFF08\u4EFB\u610F\uFF09\u3002\u3053\u308C\u3067\u5206\u6790\u306E", /* @__PURE__ */ React.createElement("b", { style: { color: "#0ea5e9" } }, "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08"), "\u304C\u3088\u308A\u6B63\u78BA\u306B\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30B9\u30C6\u30C3\u30D7 5 \u2014 \u30DB\u30FC\u30EB\u5B8C\u4E86 \u2192 \u6B21\u306E\u30DB\u30FC\u30EB\u3078"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u30AB\u30C3\u30D7\u30A4\u30F3\u5F8C\u306F\u300C\u30DB\u30FC\u30EB\u5B8C\u4E86 \u{1F3C6}\u300D\u304C\u8868\u793A"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u300C\u6B21\u306E\u30DB\u30FC\u30EB \u203A\u300D\u3067\u6B21\u3078\u3002\u9593\u9055\u3048\u305F\u3089\u300C\u21A9 \u53D6\u6D88\u300D\u3067\u6700\u5F8C\u306E\u30B7\u30E7\u30C3\u30C8\u3092\u53D6\u308A\u6D88\u3057\u3001\u30DB\u30FC\u30EB\u5B8C\u4E86\u5F8C\u306F\u300C\u4FEE\u6B63\u300D\u30DC\u30BF\u30F3\u3067\u623B\u305B\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: M.tipBoxB }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#0ea5e9", marginBottom: "5px" } }, "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u30B3\u30C4"), [
      "\u30C6\u30A3\u306E\u6B8B\u308A\u8DDD\u96E2\u306F\u30B3\u30FC\u30B9\u8DDD\u96E2\u304B\u3089\u81EA\u52D5\u5165\u529B\u3002\u9055\u3046\u30C6\u30A3\u3092\u4F7F\u3063\u305F\u6642\u3060\u3051\u624B\u52D5\u4FEE\u6B63\u3002",
      "\u30AF\u30E9\u30D6\u30BB\u30C3\u30C8\u3092\u4E8B\u524D\u306B\u767B\u9332\u3057\u3066\u304A\u304F\u3068\u30AF\u30E9\u30D6\u9078\u629E\u304C\u30B9\u30E0\u30FC\u30BA\u3002",
      "\u30D4\u30F3\u8DDD\u96E2\uFF08\u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2\uFF09\u3082\u5165\u308C\u3066\u304A\u304F\u3068\u5206\u6790\u304C\u3088\u308A\u6B63\u78BA\u306B\u3002",
      "\u30E9\u30A6\u30F3\u30C9\u4E2D\u306F\u7C21\u6613\u3001\u5F8C\u3067\u3058\u3063\u304F\u308A\u8A73\u7D30\u3001\u3068\u4F7F\u3044\u5206\u3051\u308B\u306E\u3082\u25CE"
    ].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#0ea5e9", fontSize: "10px", marginTop: "1px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t))))), /* @__PURE__ */ React.createElement("div", { style: M.hr }), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: M.chBadge("#f59e0b") }, "3"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: M.secH }, "\u5206\u6790\u30DA\u30FC\u30B8\u3067\u30B9\u30B3\u30A2\u30A2\u30C3\u30D7"), /* @__PURE__ */ React.createElement("span", { style: M.secS }, "\u8A18\u9332\u3057\u305F\u30C7\u30FC\u30BF\u304B\u3089\u300C\u76F4\u3059\u3079\u304D\u30DD\u30A4\u30F3\u30C8\u300D\u3092\u898B\u3064\u3051\u3088\u3046")))), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u5206\u6790\u30DA\u30FC\u30B8\u3078"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u4E0A\u90E8\u30CA\u30D3\u306E\u300C\u5206\u6790\u300D\u30BF\u30D6\u3092\u30BF\u30C3\u30D7"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u5206\u6790\u30DA\u30FC\u30B8\u306F\u4E0A\u304B\u3089\u9806\u306B7\u3064\u306E\u30BB\u30AF\u30B7\u30E7\u30F3\u304C\u4E26\u3073\u307E\u3059\u3002\u30C7\u30FC\u30BF\u304C\u63C3\u3063\u305F\u30BB\u30AF\u30B7\u30E7\u30F3\u304B\u3089\u9806\u306B\u8868\u793A\u3055\u308C\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "8px" } }, "\u{1F4CA} \u5206\u6790\u30DA\u30FC\u30B8\u306E\u69CB\u6210"), [
      { ic: "\u{1F916}", nm: "AI\u8A3A\u65AD", req: "HCP\u8A2D\u5B9A + 1\u30E9\u30A6\u30F3\u30C9\u301C", d: "\u76F4\u8FD11\u30F6\u6708\u306E\u5E73\u5747\u304B\u3089\u3001\u5F37\u307F\u30FB\u5F31\u307F\u3092\u6587\u7AE0\u3067\u8A3A\u65AD\u3002" },
      { ic: "\u{1F4C8}", nm: "\u30B9\u30B3\u30A2\u63A8\u79FB\u30B0\u30E9\u30D5", req: "2\u30E9\u30A6\u30F3\u30C9\u4EE5\u4E0A", d: "\u76F4\u8FD15\u30E9\u30A6\u30F3\u30C9\u306E\u30B9\u30B3\u30A2\u30FB\u30D1\u30C3\u30C8\u6570\u30FB5\u8981\u7D20\u8A55\u4FA1\u306E\u5909\u5316\u3092\u78BA\u8A8D\u3002" },
      { ic: "\u{1F3AF}", nm: "\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8", req: "1\u30E9\u30A6\u30F3\u30C9\u301C", d: "5\u8981\u7D20\uFF08\u30C6\u30A3\uFF0F\u30ED\u30F3\u30B0\uFF0F\u30B7\u30E7\u30FC\u30C8\uFF0F\u30D1\u30C3\u30C8\uFF0F\u30D0\u30F3\u30AB\u30FC\uFF09\u306E\u4ECA\u56DE vs \u5E73\u5747\u3092\u53EF\u8996\u5316\u3002" },
      { ic: "\u{1F4CA}", nm: "\u8A55\u4FA1\u30B9\u30B3\u30A2\u63A8\u79FB", req: "\u76F4\u8FD120R", d: "5\u8981\u7D20\u305D\u308C\u305E\u308C\u306E\u30C8\u30EC\u30F3\u30C9\u3092\u8FFD\u8DE1\u3002\u300C\u5148\u6708\u3088\u308A\u30ED\u30F3\u30B0\u304C\u4E0A\u304C\u3063\u305F\uFF01\u300D\u306A\u3069\u6210\u9577\u3092\u5B9F\u611F\u3002" },
      { ic: "\u26F3", nm: "\u8DDD\u96E2\u5225\u30D1\u30C3\u30C8\u7D71\u8A08", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "1m\u30FB2m\u30FB3m\u2026\u2026\u306E\u30D1\u30C3\u30C8\u6210\u529F\u7387\u3092\u96C6\u8A08\u3002" },
      { ic: "\u{1F4CF}", nm: "\u6B8B\u308A\u8DDD\u96E2\u5225 \u25CB/\xD7\u7387", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "\u300C150Y\u306E\u6210\u529F\u7387\u300D\u306A\u3069\u3001\u8DDD\u96E2\u5E2F\u3054\u3068\u306E\u7CBE\u5EA6\u3092\u78BA\u8A8D\u3002" },
      { ic: "\u{1F3CC}\uFE0F", nm: "\u30AF\u30E9\u30D6\u5225 \u25CB/\xD7\u7387", req: "\u{1F50D}\u8A73\u7D30\u30E2\u30FC\u30C9\u306E\u307F", d: "7I\u30FBPW\u306A\u3069\u30AF\u30E9\u30D6\u3054\u3068\u306E\u7D50\u679C\u3092\u96C6\u8A08\u3002\u82E6\u624B\u306A\u30AF\u30E9\u30D6\u304C\u5206\u304B\u308B\u3002" }
    ].map(({ ic, nm, req, d }) => {
      const isDetail = req.includes("\u8A73\u7D30");
      return /* @__PURE__ */ React.createElement("div", { key: nm, style: { display: "flex", gap: "10px", marginBottom: "10px", paddingBottom: "10px", borderBottom: "1px solid #e2e8f0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "18px", flexShrink: 0 } }, ic), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "3px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#1e293b" } }, nm), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", fontWeight: "700", padding: "2px 7px", borderRadius: "10px", background: isDetail ? "rgba(14,165,233,0.10)" : "rgba(22,163,74,0.10)", color: isDetail ? "#0ea5e9" : "#16a34a" } }, req)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.6 } }, d)));
    })), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u306E\u8AAD\u307F\u65B9"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "3\u672C\u306E\u30E9\u30A4\u30F3\u3092\u6BD4\u3079\u3066\u5F31\u70B9\u3092\u898B\u3064\u3051\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u7DD1\uFF08\u7406\u60F3\xB10\uFF09\u30FB\u9EC4\uFF08\u76F4\u8FD1\uFF09\u30FB\u9752\uFF08\u5E73\u5747\uFF09\u306E3\u672C\u3002", /* @__PURE__ */ React.createElement("b", { style: { color: "#dc2626" } }, "\u4E2D\u5FC3\u306B\u8FD1\u3044\u8EF8\uFF1D\u82E6\u624B\u5206\u91CE"), "\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement(MockAnalytics, null), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", textAlign: "center", marginBottom: "12px" } }, "\u2191 \u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u4F8B\u3002\u76F4\u8FD1\uFF08\u9EC4\uFF09\u304C\u5E73\u5747\uFF08\u9752\uFF09\u3088\u308A\u5916\u5074\u306B\u51FA\u308C\u3070\u6539\u5584\u50BE\u5411"), /* @__PURE__ */ React.createElement("div", { style: M.cardG }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr", gap: "6px" } }, [
      { c: "#16a34a", l: "\u7DD1\uFF08\u7406\u60F3\uFF09", d: "\u5168\u8981\u7D20 \xB10 \u306E\u30E9\u30A4\u30F3\u3002\u3053\u308C\u3088\u308A\u5916\u5074\uFF1D\u5E73\u5747\u3088\u308A\u4E0A\u3001\u5185\u5074\uFF1D\u5E73\u5747\u3088\u308A\u4E0B\u3002" },
      { c: "#fbbf24", l: "\u9EC4\uFF08\u76F4\u8FD1\uFF09", d: "\u3042\u306A\u305F\u306E\u76F4\u8FD1\u30E9\u30A6\u30F3\u30C9\u306E\u30B9\u30B3\u30A2\u3002" },
      { c: "#0ea5e9", l: "\u9752\uFF08\u5E73\u5747\uFF09", d: "HCP\u7B97\u51FA\u306B\u63A1\u7528\u3055\u308C\u305F\u4E0A\u4F4D\u30E9\u30A6\u30F3\u30C9\u306E\u5E73\u5747\u5024\u3002" }
    ].map(({ c, l, d }) => /* @__PURE__ */ React.createElement("div", { key: l, style: { display: "flex", gap: "8px", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", fontWeight: "800", color: c, minWidth: "66px" } }, l), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", flex: 1, lineHeight: 1.55 } }, d))))), /* @__PURE__ */ React.createElement("div", { style: M.accentA }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u5F31\u70B9 \u2192 \u7DF4\u7FD2\u30E1\u30CB\u30E5\u30FC"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u6700\u3082\u4F4E\u3044\u8981\u7D20\u300D\u3092\u96C6\u4E2D\u30BF\u30FC\u30B2\u30C3\u30C8\u306B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u30EC\u30FC\u30C0\u30FC\u30C1\u30E3\u30FC\u30C8\u3067\u4E00\u756A\u4E2D\u5FC3\u306B\u8FD1\u3044\u8981\u7D20\uFF1D\u3042\u306A\u305F\u306E\u30B9\u30B3\u30A2\u3092\u6700\u3082\u5F15\u304D\u4E0B\u3052\u3066\u3044\u308B\u5F31\u70B9\u3067\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" } }, [
      { lbl: "\u30C6\u30A3\u304C\u5F31\u3044", nm: "\u30C9\u30E9\u30A4\u30D0\u30FC\u65B9\u5411\u6027", d: "OB\u3092\u6E1B\u3089\u3059\u3053\u3068\u304C\u6700\u512A\u5148\u3002" },
      { lbl: "\u30ED\u30F3\u30B0\u304C\u5F31\u3044", nm: "\u4E2D\u30FB\u9577\u8DDD\u96E2\u30A2\u30A4\u30A2\u30F3", d: "150\u301C200Y\u306E\u7CBE\u5EA6\u3092\u78E8\u304F\u3002" },
      { lbl: "\u30B7\u30E7\u30FC\u30C8\u304C\u5F31\u3044", nm: "\u30A2\u30D7\u30ED\u30FC\u30C1\u7DF4\u7FD2", d: "60Y\u4EE5\u5185\u3092\u96C6\u4E2D\u7684\u306B\u3002" },
      { lbl: "\u30D1\u30C3\u30C8\u304C\u5F31\u3044", nm: "\u30D1\u30BF\u30FC\u7DF4\u7FD2", d: "3\u30D1\u30C3\u30C8\u6E1B\u306F\u30B9\u30B3\u30A2\u306B\u76F4\u7D50\u3002" }
    ].map(({ lbl, nm, d }) => /* @__PURE__ */ React.createElement("div", { key: nm, style: M.field }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "9px", color: "#dc2626", marginBottom: "3px", fontWeight: "700" } }, lbl), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: "#1e293b", marginBottom: "3px" } }, nm), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", lineHeight: 1.5 } }, d)))), /* @__PURE__ */ React.createElement("div", { style: M.accentB }, /* @__PURE__ */ React.createElement("span", { style: M.lbl }, "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9\u306A\u3089\u3067\u306F\u306E\u5206\u6790"), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, M.cardH), { marginBottom: "5px" }) }, "\u300C\u3069\u306E\u8DDD\u96E2\u3067\uFF0F\u3069\u306E\u30AF\u30E9\u30D6\u3067\u300D\u5931\u6557\u3057\u3066\u3044\u308B\u304B\u304C\u5206\u304B\u308B"), /* @__PURE__ */ React.createElement("div", { style: M.body }, "\u4F8B\u3048\u3070\u300C150Y\u5E2F\u306E\u6210\u529F\u7387\u304C30%\u300D\u3068\u5206\u304B\u308C\u3070\u3001\u305D\u306E\u8DDD\u96E2\u3067\u306E\u7DF4\u7FD2\u304C\u6700\u512A\u5148\u3068\u5224\u65AD\u3067\u304D\u307E\u3059\u3002\u300C9I\u3088\u308A8I\u306E\u65B9\u304C\u6210\u529F\u7387\u304C\u9AD8\u3044\u300D\u3068\u5206\u304B\u308C\u3070\u3001\u8FF7\u3063\u305F\u3068\u304D\u306E\u5224\u65AD\u6750\u6599\u306B\u306A\u308A\u307E\u3059\u3002")), /* @__PURE__ */ React.createElement("div", { style: M.tipBox }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "800", color: "#16a34a", marginBottom: "8px" } }, "\u{1F3CC}\uFE0F \u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09\u3082\u81EA\u52D5\u8A08\u7B97\uFF01"), ["18H\u5B8C\u4E86\u30E9\u30A6\u30F3\u30C9\u304C3\u4EF6\u4EE5\u4E0A\u3067\u3001\u30DB\u30FC\u30E0\u753B\u9762\u306B\u53C2\u8003\u30CF\u30F3\u30C7\u30A3\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002", "\u76F4\u8FD120\u30E9\u30A6\u30F3\u30C9\u4E0A\u4F4D40%\u306E\u6210\u7E3E\u304B\u3089\u7B97\u51FA\uFF08\u516C\u5F0F\u3068\u306F\u7570\u306A\u308A\u307E\u3059\uFF09\u3002", "\u30E9\u30A6\u30F3\u30C9\u3092\u91CD\u306D\u308B\u307B\u3069\u7CBE\u5EA6\u30A2\u30C3\u30D7\u3002\u8A18\u9332\u3092\u7D9A\u3051\u308B\u3053\u3068\u304C\u4E00\u756A\u5927\u4E8B\uFF01"].map((t) => /* @__PURE__ */ React.createElement("div", { key: t, style: { display: "flex", gap: "7px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#16a34a", fontSize: "10px", marginTop: "2px", flexShrink: 0 } }, "\u25CF"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.55 } }, t)))), /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(135deg,rgba(22,163,74,0.08),rgba(14,165,233,0.08))", border: "1px solid rgba(22,163,74,0.2)", borderRadius: "12px", padding: "20px", textAlign: "center", marginTop: "16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: "#1e293b", marginBottom: "6px" } }, "\u3055\u3042\u3001\u6B21\u306E\u30E9\u30A6\u30F3\u30C9\u304B\u3089\u8A18\u9332\u3092\u59CB\u3081\u3088\u3046\uFF01"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", lineHeight: 1.7 } }, "\u30C7\u30FC\u30BF\u304C\u7A4D\u307F\u91CD\u306A\u308B\u307B\u3069\u3001\u6539\u5584\u30DD\u30A4\u30F3\u30C8\u304C\u30AF\u30EA\u30A2\u306B\u306A\u308A\u307E\u3059\u3002", /* @__PURE__ */ React.createElement("br", null), "\u30B9\u30B3\u30A2\u30AB\u30FC\u30C9\u3088\u308A\u6DF1\u3044\u300C\u81EA\u5206\u3060\u3051\u306E\u6210\u9577\u8A18\u9332\u300D\u3092\u4F5C\u308A\u307E\u3057\u3087\u3046\u3002")));
  })(), view === "profile" && profileEdit !== null && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"), /* @__PURE__ */ React.createElement("p", { style: { color: "#94a3b8", fontSize: "12px" } }, "\u3042\u306A\u305F\u306E\u60C5\u5831\u3092\u767B\u9332\u3057\u3088\u3046")), /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, S.card({ border: "1px solid rgba(52,211,153,0.25)", marginBottom: "18px", background: "rgba(52,211,153,0.04)" })), { textAlign: "center", padding: "28px 16px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "52px", marginBottom: "12px" } }, "\u{1F3CC}\uFE0F"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "20px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, profileEdit.nickname || "\u30B4\u30EB\u30D5\u30A1\u30FC"), profileEdit.bestScore && /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#0ea5e9", fontWeight: "600" } }, "\u30D9\u30B9\u30C8 ", profileEdit.bestScore, profileEdit.targetHcp != null ? `\u3000\u76EE\u6A19HC: ${profileEdit.targetHcp}` : "", profileEdit.manualHcp != null && !handicap ? `\u3000HC(\u624B\u5165\u529B): ${profileEdit.manualHcp}` : "")), /* @__PURE__ */ React.createElement("div", { style: S.card({ marginBottom: "14px" }) }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0"), /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "48px", textAlign: "center", fontSize: "22px", fontWeight: "800", color: "#fbbf24" } }, (_c = profileEdit.bestScore) != null ? _c : "\u2212"), /* @__PURE__ */ React.createElement(
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
  ), /* @__PURE__ */ React.createElement("span", { style: { minWidth: "48px", textAlign: "center", fontSize: "22px", fontWeight: "800", color: "#0ea5e9" } }, (_d = profileEdit.targetHcp) != null ? _d : "\u2212"), /* @__PURE__ */ React.createElement(
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
    { key: "auto", label: "\u{1F504} \u81EA\u52D5\u7B97\u51FA", desc: `${handicap.hcp}\uFF08${handicap.roundCount}R\uFF09` },
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
  })), ((_e = profileEdit.hcpMode) != null ? _e : "auto") === "auto" ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#16a34a", marginTop: "6px" } }, "\u2713 \u904E\u53BB\u30E9\u30A6\u30F3\u30C9(", handicap.roundCount, "\u4EF6)\u304B\u3089\u81EA\u52D5\u7B97\u51FA\u3057\u305F ", /* @__PURE__ */ React.createElement("b", null, handicap.hcp), " \u3092\u5206\u6790\u306B\u4F7F\u7528") : /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#d97706", marginTop: "6px" } }, "\u2713 \u4E0B\u8A18\u3067\u8A2D\u5B9A\u3059\u308B\u624B\u5165\u529B\u5024\u3092\u5206\u6790\u306B\u4F7F\u7528")), /* @__PURE__ */ React.createElement("div", { style: { opacity: handicap && ((_f = profileEdit.hcpMode) != null ? _f : "auto") === "auto" ? 0.45 : 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#64748b", marginBottom: "8px" } }, handicap ? "\u624B\u5165\u529B\u5024\uFF08\u30E2\u30FC\u30C9\u3092\u300C\u624B\u5165\u529B\u300D\u306B\u3059\u308B\u3068\u5206\u6790\u306B\u4F7F\u7528\u3055\u308C\u307E\u3059\uFF09" : "\u30E9\u30A6\u30F3\u30C93\u4EF6\u672A\u6E80\u306E\u5834\u5408\u306B\u5206\u6790\u3067\u4F7F\u7528\u3055\u308C\u307E\u3059"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "10px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setProfileEdit((p) => {
        var _a2;
        return __spreadProps(__spreadValues({}, p), { manualHcp: Math.max(0, ((_a2 = p.manualHcp) != null ? _a2 : 20) - 1) });
      }),
      style: { width: "36px", height: "36px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "#f8fafc", color: "#1e293b", cursor: "pointer", fontSize: "18px", fontWeight: "700" }
    },
    "\u2212"
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "60px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "22px", fontWeight: "800", color: "#f59e0b" } }, (_g = profileEdit.manualHcp) != null ? _g : "\u2212"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#94a3b8" } }, "\u624B\u5165\u529B")), /* @__PURE__ */ React.createElement(
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
  ))))), /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "14px", fontSize: "14px" }),
      onClick: () => {
        saveProfile(profileEdit);
        showToast("\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u3092\u4FDD\u5B58\u3057\u307E\u3057\u305F\uFF01");
        setView("home");
      }
    },
    "\u2705 \u4FDD\u5B58\u3059\u308B"
  )), showShotForm && currentCatDef && (() => {
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
    }) }, /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 16px 10px", borderBottom: "1px solid #e2e8f0", flexShrink: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontWeight: "800", fontSize: "15px", margin: 0 } }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB\uFF08Par", par, "\uFF09"), hd.shots.length === 0 ? /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => setShowShotForm(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB") : /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => {
      undoLastShot();
      setShotNote("");
    } }, "\u623B\u308B")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#fbbf24", fontWeight: "600" } }, currentCatDef.icon, " ", totalStrokes + 1, "\u6253\u76EE \u2014 ", currentCatDef.label)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "12px 16px 8px" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u{1F4CF} \u6B8B\u308A\u8DDD\u96E2 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), currentCategory === "tee" ? (
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
    )), currentCategory !== "putt" && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u{1F3CC}\uFE0F \u4F7F\u7528\u30AF\u30E9\u30D6 ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: "6px" } }, filteredClubs.map((c) => {
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
    } }, "\u30AF\u30E9\u30D6\u306A\u3057"))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u{1F4CA} \u7D50\u679C ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#f87171", fontWeight: "700", background: "rgba(239,68,68,0.1)", padding: "1px 5px", borderRadius: "4px", marginLeft: "4px" } }, "\u5FC5\u9808")), newResultId === "bad" && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px", background: "rgba(148,163,184,0.05)", border: "1px solid rgba(148,163,184,0.14)", borderRadius: "10px", padding: "10px", animation: "sfadeDown .15s ease" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#64748b", fontWeight: "700", marginBottom: "7px" } }, "\u25B6 \u30DF\u30B9\u306E\u7A2E\u985E"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px" } }, badSubOpts.map((b) => {
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
    }))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", fontWeight: "700", color: "#94a3b8", marginBottom: "7px" } }, "\u{1F4DD} \u30E1\u30E2\uFF08\u4EFB\u610F\uFF09"), /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "\u4F8B\uFF1A\u5DE6\u306B\u5F15\u3063\u639B\u3051\u305F...", value: shotNote, onChange: (e) => setShotNote(e.target.value) }))), /* @__PURE__ */ React.createElement("div", { style: { padding: "10px 16px 20px", borderTop: "1px solid rgba(255,255,255,0.05)", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(
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
  })(), showPinDistStep && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 500, padding: "0 0 20px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "20px 20px 16px 16px", padding: "20px 18px 24px", width: "100%", maxWidth: "420px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "15px", fontWeight: "800", color: "#1e293b" } }, "\u{1F4CD} \u30AB\u30C3\u30D7\u307E\u3067\u306E\u8DDD\u96E2"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#475569", marginTop: "2px" } }, getDisplayHoleNum(currentHole), "\u756A\u30DB\u30FC\u30EB")), /* @__PURE__ */ React.createElement(
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
  ))))), showExportModal && /* @__PURE__ */ React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 600, padding: "16px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#ffffff", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "16px", padding: "20px", width: "100%", maxWidth: "420px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "15px", fontWeight: "800", color: "#1e293b", marginBottom: "4px" } }, "\u{1F4CB} \u30C7\u30FC\u30BF\u66F8\u304D\u51FA\u3057\uFF08", rounds.length, "\u4EF6\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "12px", color: "#16a34a", fontWeight: "700", marginBottom: "8px" } }, "\u{1F447} \u30C6\u30AD\u30B9\u30C8\u30A8\u30EA\u30A2\u3092\u30BF\u30C3\u30D7 \u2192 \u5168\u9078\u629E\u3055\u308C\u307E\u3059 \u2192 \u30B3\u30D4\u30FC\uFF08Ctrl+C / \u2318C\uFF09"), /* @__PURE__ */ React.createElement(
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
