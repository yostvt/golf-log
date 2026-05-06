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
const { useState, useMemo } = React;
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
const IMPORTED_TEST_DATA = [
  {
    "id": 863188376,
    "rid": "R001",
    "course": "\u4E2D\u5C71\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    "date": "2026/04/23",
    "frontCourse": "IN",
    "backCourse": "OUT",
    "green": "\u30D9\u30F3\u30C8",
    "tee": "REGULAR",
    "weather": "cloudy",
    "wind": 3,
    "inputMode": "simple",
    "isComplete": true,
    "holePars": [
      5,
      4,
      4,
      5,
      4,
      3,
      4,
      3,
      4,
      5,
      4,
      4,
      4,
      3,
      5,
      3,
      4,
      4
    ],
    "simpleHoleData": {
      "1": {
        "score": 6,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\xD7",
        "secondEval": "\xD7",
        "thirdEval": "\u25B3",
        "approachEval": "\u25CB",
        "note": "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\u53F3\u306E\u6797\u306E\u4E2D"
      },
      "2": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "3": {
        "score": 5,
        "putts": 2,
        "ob": 1,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25CB",
        "secondEval": "\xD7",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": ""
      },
      "4": {
        "score": 5,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": "\u25B3",
        "approachEval": "\u25CB",
        "note": ""
      },
      "5": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "6": {
        "score": 3,
        "putts": 3,
        "ob": 0,
        "penalty": 1,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": "3\u30D1\u30C3\u30C8"
      },
      "7": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "8": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "9": {
        "score": 3,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "10": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u7121",
        "note": ""
      },
      "11": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "12": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "13": {
        "score": 4,
        "putts": 2,
        "ob": 1,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "14": {
        "score": 3,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "15": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u7121",
        "note": ""
      },
      "16": {
        "score": 3,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "17": {
        "score": 5,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\xD7",
        "secondEval": "\xD7",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "18": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      }
    },
    "shots": []
  },
  {
    "id": 1337123015,
    "rid": "R002",
    "course": "\u4E2D\u5C71\u30AB\u30F3\u30C8\u30EA\u30FC\u30AF\u30E9\u30D6",
    "date": "2026/5/12",
    "frontCourse": "OUT",
    "backCourse": "IN",
    "green": "\u9AD8\u9E97",
    "tee": "REGULAR",
    "weather": "cloudy",
    "wind": 3,
    "inputMode": "simple",
    "isComplete": true,
    "holePars": [
      5,
      4,
      4,
      4,
      3,
      5,
      3,
      4,
      4,
      5,
      4,
      4,
      5,
      4,
      3,
      4,
      3,
      4
    ],
    "simpleHoleData": {
      "1": {
        "score": 6,
        "putts": 3,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\xD7",
        "note": ""
      },
      "2": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "3": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": ""
      },
      "4": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "5": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "6": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "7": {
        "score": 2,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": "\u30DB\u30FC\u30EB\u30A4\u30F3\u30EF\u30F3"
      },
      "8": {
        "score": 6,
        "putts": 3,
        "ob": 0,
        "penalty": 1,
        "bunker": 0,
        "teeEval": "\xD7",
        "secondEval": "\xD7",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": ""
      },
      "9": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "10": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": "\u25CB",
        "approachEval": "\u25B3",
        "note": ""
      },
      "11": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "12": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": ""
      },
      "13": {
        "score": 6,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\xD7",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u25CB",
        "note": ""
      },
      "14": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": ""
      },
      "15": {
        "score": 3,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "16": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "17": {
        "score": 3,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": ""
      },
      "18": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": ""
      }
    },
    "shots": []
  },
  {
    "id": 2059263278,
    "rid": "R003",
    "course": "\u7DCF\u6B66CC \u7DCF\u6B66\u30B3\u30FC\u30B9",
    "date": "2026/4/21",
    "frontCourse": "\u6771\u30B3\u30FC\u30B9",
    "backCourse": "\u4E2D\u30B3\u30FC\u30B9",
    "green": "\u30D9\u30F3\u30C8",
    "tee": "REGULAR",
    "weather": "sunny",
    "wind": 0,
    "inputMode": "simple",
    "isComplete": true,
    "holePars": [
      5,
      4,
      3,
      4,
      4,
      3,
      4,
      5,
      4,
      5,
      4,
      4,
      3,
      4,
      4,
      3,
      5,
      4
    ],
    "simpleHoleData": {
      "1": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u7121",
        "note": "1W"
      },
      "2": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "4W"
      },
      "3": {
        "score": 3,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "5i"
      },
      "4": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "1W"
      },
      "5": {
        "score": 3,
        "putts": 0,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "1W"
      },
      "6": {
        "score": 3,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "5i"
      },
      "7": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 1,
        "bunker": 1,
        "teeEval": "\xD7",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": "1W"
      },
      "8": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u7121",
        "note": "1W"
      },
      "9": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": "1W"
      },
      "10": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u7121",
        "note": "1W"
      },
      "11": {
        "score": 5,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": "5W"
      },
      "12": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u7121",
        "note": "1W"
      },
      "13": {
        "score": 4,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": "8i"
      },
      "14": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": "\u25B3",
        "thirdEval": null,
        "approachEval": "\u25B3",
        "note": "4W"
      },
      "15": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25CB",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "1W"
      },
      "16": {
        "score": 5,
        "putts": 2,
        "ob": 0,
        "penalty": 1,
        "bunker": 2,
        "teeEval": "\xD7",
        "secondEval": null,
        "thirdEval": null,
        "approachEval": "\xD7",
        "note": "6i"
      },
      "17": {
        "score": 5,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 0,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": "\u25CB",
        "approachEval": "\u25CB",
        "note": "1W"
      },
      "18": {
        "score": 4,
        "putts": 1,
        "ob": 0,
        "penalty": 0,
        "bunker": 1,
        "teeEval": "\u25B3",
        "secondEval": "\u25CB",
        "thirdEval": null,
        "approachEval": "\u25CB",
        "note": "1W"
      }
    },
    "shots": []
  }
];
const CATEGORIES = {
  // ── Tee shots ──────────────────────────────────────────────────────────────
  tee_par4plus: {
    label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF08Par4/5\uFF09",
    icon: "\u{1F3CC}\uFE0F",
    options: [
      { id: "fw_ok", label: "FW\u30FB\u6B21\u3092\u72D9\u3048\u308B", score: 1, color: "green", nextState: "fairway", shotCount: 1, penaltyCount: 0 },
      { id: "fw_ng", label: "FW\u30FB\u6B21\u3092\u72D9\u3048\u306A\u3044", score: 0.5, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "rough_ok", label: "FW\u5916\u30FB\u6B21\u3092\u72D9\u3048\u308B", score: 0.5, color: "yellow", nextState: "fairway", shotCount: 1, penaltyCount: 0 },
      { id: "rough_ng", label: "FW\u5916\u30FB\u6B21\u3092\u72D9\u3048\u306A\u3044", score: -1, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "tee_retry", shotCount: 1, penaltyCount: 1 }
    ]
  },
  tee_par3: {
    label: "\u30C6\u30A3\u30B7\u30E7\u30C3\u30C8\uFF08Par3\uFF09",
    icon: "\u{1F3CC}\uFE0F",
    options: [
      { id: "on_3m", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u4EE5\u5185\uFF09", score: 2, color: "green", nextState: "on_3m", shotCount: 1, penaltyCount: 0 },
      { id: "on_far", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u8D85\uFF09", score: 1, color: "green", nextState: "on_far", shotCount: 1, penaltyCount: 0 },
      { id: "near", label: "\u30AA\u30F3\u305B\u305A30yd\u4EE5\u5185", score: 0.5, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "far", label: "\u30AA\u30F3\u305B\u305A30yd\u4EE5\u4E0A", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "tee_retry", shotCount: 1, penaltyCount: 1 }
    ]
  },
  // ── Second shots ───────────────────────────────────────────────────────────
  second_par4: {
    label: "2\u6253\u76EE\uFF08Par4\uFF09",
    icon: "\u{1F33F}",
    options: [
      { id: "on_3m", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u4EE5\u5185\uFF09", score: 2, color: "green", nextState: "on_3m", shotCount: 1, penaltyCount: 0 },
      { id: "on_far", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u8D85\uFF09", score: 1, color: "green", nextState: "on_far", shotCount: 1, penaltyCount: 0 },
      { id: "near", label: "\u30AA\u30F3\u305B\u305A30yd\u4EE5\u5185", score: 0.5, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "far", label: "\u30AA\u30F3\u305B\u305A30yd\u4EE5\u4E0A", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "second_retry", shotCount: 1, penaltyCount: 1 }
    ]
  },
  second_par5: {
    label: "2\u6253\u76EE\uFF08Par5\uFF09",
    icon: "\u{1F33F}",
    options: [
      { id: "fw_ok", label: "FW\u30FB\u6B21\u3092\u72D9\u3048\u308B", score: 1, color: "green", nextState: "fairway", shotCount: 1, penaltyCount: 0 },
      { id: "fw_ng", label: "FW\u30FB\u6B21\u3092\u72D9\u3048\u306A\u3044", score: 0.5, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "rough_ok", label: "FW\u5916\u30FB\u6B21\u3092\u72D9\u3048\u308B", score: 0.5, color: "yellow", nextState: "fairway", shotCount: 1, penaltyCount: 0 },
      { id: "rough_ng", label: "FW\u5916\u30FB\u6B21\u3092\u72D9\u3048\u306A\u3044", score: -1, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "second_retry", shotCount: 1, penaltyCount: 1 }
    ]
  },
  // ── Approach ───────────────────────────────────────────────────────────────
  approach: {
    label: "\u30A2\u30D7\u30ED\u30FC\u30C1\uFF08100yd\u4EE5\u5185\uFF09",
    icon: "\u{1F3AF}",
    options: [
      { id: "on_3m", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u4EE5\u5185\uFF09", score: 1, color: "green", nextState: "on_3m", shotCount: 1, penaltyCount: 0 },
      { id: "on_far", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u8D85\uFF09", score: 0.5, color: "yellow", nextState: "on_far", shotCount: 1, penaltyCount: 0 },
      { id: "near", label: "\u30AA\u30F3\u305B\u305A 30yd\u4EE5\u5185", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "far", label: "\u30AA\u30F3\u305B\u305A 30yd\u4EE5\u4E0A", score: -0.5, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", score: -1, color: "red", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 }
    ]
  },
  // ── Fairway / mid-range shot ───────────────────────────────────────────────
  fairway: {
    label: "\u30D5\u30A7\u30A2\u30A6\u30A7\u30A4\u30B7\u30E7\u30C3\u30C8",
    icon: "\u{1F33F}",
    options: [
      { id: "on_3m", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u4EE5\u5185\uFF09", score: 2, color: "green", nextState: "on_3m", shotCount: 1, penaltyCount: 0 },
      { id: "on_far", label: "\u30B0\u30EA\u30FC\u30F3\u30AA\u30F3\uFF083m\u8D85\uFF09", score: 1, color: "green", nextState: "on_far", shotCount: 1, penaltyCount: 0 },
      { id: "near", label: "\u30AA\u30F3\u305B\u305A 30yd\u4EE5\u5185", score: 0.5, color: "yellow", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "far", label: "\u30AA\u30F3\u305B\u305A 30yd\u4EE5\u4E0A", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "bunker", label: "\u30D0\u30F3\u30AB\u30FC", score: 0, color: "gray", nextState: "approach", shotCount: 1, penaltyCount: 0 },
      { id: "pond", label: "\u6C60\u30FB\u30A2\u30F3\u30D7\u30EC\u30E4\u30D6\u30EB\u306A\u3069\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 },
      { id: "ob", label: "OB\uFF081\u6253\u7F70\uFF09", score: -2, color: "darkred", nextState: "approach", shotCount: 1, penaltyCount: 1 }
    ]
  },
  // ── Putting — from far (3m超) ──────────────────────────────────────────────
  putt_far: {
    label: "\u30D1\u30C3\u30C8\uFF083m\u8D85\uFF09",
    icon: "\u26F3",
    options: [
      { id: "p1_far", label: "1\u30D1\u30C3\u30C8\u3067\u6C88\u3081\u305F", score: 2, color: "green", nextState: "done", shotCount: 1, penaltyCount: 0 },
      { id: "p2_far_3m", label: "3m\u4EE5\u5185\u306B\u5BC4\u305B\u305F\uFF08\u6B21\u30D1\u30C3\u30C8\uFF09", score: 0, color: "gray", nextState: "putt_near", shotCount: 1, penaltyCount: 0 },
      { id: "p2_far_ng", label: "3m\u8D85\u3092\u6B8B\u3057\u305F\uFF08\u6B21\u30D1\u30C3\u30C8\uFF09", score: -1, color: "red", nextState: "putt_near", shotCount: 1, penaltyCount: 0 }
    ]
  },
  // ── Putting — from near (3m以内) ──────────────────────────────────────────
  putt_near: {
    label: "\u30D1\u30C3\u30C8\uFF083m\u4EE5\u5185\uFF09",
    icon: "\u26F3",
    options: [
      { id: "p1_3m", label: "1\u30D1\u30C3\u30C8\u3067\u6C88\u3081\u305F", score: 1, color: "green", nextState: "done", shotCount: 1, penaltyCount: 0 },
      { id: "p2_3m", label: "2\u30D1\u30C3\u30C8\u3067\u6C88\u3081\u305F\uFF08+1\u6253\uFF09", score: 0, color: "gray", nextState: "done", shotCount: 2, penaltyCount: 0 },
      { id: "p3_3m", label: "3\u30D1\u30C3\u30C8\u4EE5\u4E0A\uFF08+2\u6253\uFF09", score: -1, color: "red", nextState: "done", shotCount: 3, penaltyCount: 0 }
    ]
  }
};
function initialCategory(par) {
  return par === 3 ? "tee_par3" : "tee_par4plus";
}
function categoryForState(state, par, nextStrokeCount) {
  if (state === "on_3m") return "putt_near";
  if (state === "on_far") return "putt_far";
  if (state === "putt_near") return "putt_near";
  if (state === "approach") return "approach";
  if (state === "tee_retry") return par === 3 ? "tee_par3" : "tee_par4plus";
  if (state === "second_retry") return par === 4 ? "second_par4" : "second_par5";
  if (state === "fairway") {
    if (par === 4 && nextStrokeCount === 2) return "second_par4";
    if (par === 5 && nextStrokeCount === 2) return "second_par5";
    return "fairway";
  }
  return "approach";
}
const COLOR_MAP = {
  green: { bg: "rgba(52,211,153,0.14)", border: "rgba(52,211,153,0.5)", text: "#34d399" },
  yellow: { bg: "rgba(234,179,8,0.14)", border: "rgba(234,179,8,0.5)", text: "#fbbf24" },
  gray: { bg: "rgba(148,163,184,0.08)", border: "rgba(148,163,184,0.25)", text: "#94a3b8" },
  red: { bg: "rgba(239,68,68,0.12)", border: "rgba(239,68,68,0.4)", text: "#f87171" },
  darkred: { bg: "rgba(153,27,27,0.18)", border: "rgba(239,68,68,0.55)", text: "#fca5a5" }
};
const CAT_ANALYTICS_LABEL = {
  tee_par4plus: { label: "\u30C6\u30A3\uFF08Par4/5\uFF09", icon: "\u{1F3CC}\uFE0F" },
  tee_par3: { label: "\u30C6\u30A3\uFF08Par3\uFF09", icon: "\u{1F3CC}\uFE0F" },
  second_par4: { label: "2\u6253\u76EE\uFF08Par4\uFF09", icon: "\u{1F33F}" },
  second_par5: { label: "2\u6253\u76EE\uFF08Par5\uFF09", icon: "\u{1F33F}" },
  fairway: { label: "FW\u30B7\u30E7\u30C3\u30C8", icon: "\u{1F33F}" },
  approach: { label: "\u30A2\u30D7\u30ED\u30FC\u30C1", icon: "\u{1F3AF}" },
  putt_far: { label: "\u30D1\u30C3\u30C8(3m\u8D85)", icon: "\u26F3" },
  putt_near: { label: "\u30D1\u30C3\u30C8(3m\u4EE5\u5185)", icon: "\u26F3" }
};
function scoreColor(s) {
  if (s >= 1) return "#34d399";
  if (s >= 0.5) return "#fbbf24";
  if (s >= 0) return "#94a3b8";
  if (s >= -1) return "#f97316";
  return "#ef4444";
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
  }
];
function getRoundHoles(round) {
  var _a, _b;
  if (!round) return [];
  const venue = VENUES.find((v) => v.id === round.venueId);
  if (!venue) return [];
  const front = ((_a = venue.subCourses.find((c) => c.name === round.frontCourse)) == null ? void 0 : _a.holes) || [];
  const back = round.backCourse && round.backCourse !== round.frontCourse ? ((_b = venue.subCourses.find((c) => c.name === round.backCourse)) == null ? void 0 : _b.holes) || [] : venue.subCourses.length === 1 ? front : [];
  return back.length > 0 ? [...front, ...back] : front;
}
function calcSimpleAnalytics(simpleHoleData, holePars, hcp = null) {
  const holes = Object.entries(simpleHoleData).map(([h, d]) => __spreadProps(__spreadValues({}, d), {
    hole: parseInt(h),
    par: holePars[parseInt(h) - 1] || 4
  }));
  if (!holes.length) return null;
  const r = (v) => Math.round(v * 100) / 100;
  const rate = (arr, key, val) => {
    if (!arr.length) return 0;
    return arr.filter((h) => h[key] === val).length / arr.length;
  };
  const teeHoles45 = holes.filter((h) => h.par >= 4);
  const teeBadHoles = teeHoles45.filter((h) => h.teeEval === "\xD7");
  const teeBadOB = teeBadHoles.reduce((a, h) => a + (h.ob || 0), 0);
  const teeBadPen = teeBadHoles.reduce((a, h) => a + (h.penalty || 0), 0);
  const totalOB = holes.reduce((a, h) => a + (h.ob || 0), 0);
  const totalPen = holes.reduce((a, h) => a + (h.penalty || 0), 0);
  let longScore;
  if (hcp !== null && hcp !== void 0) {
    const hcpBase = Math.round(hcp / 10 * 10) / 10;
    longScore = r(hcpBase - teeBadOB * 2 - teeBadPen);
  } else {
    const teeBad = rate(teeHoles45, "teeEval", "\xD7");
    const teeFair = rate(teeHoles45, "teeEval", "\u25B3");
    longScore = r(teeFair * -0.5 + teeBad * -1 - (totalOB + totalPen) / 2);
  }
  const midShots = [
    ...holes.filter((h) => h.par === 3).map((h) => h.teeEval),
    ...holes.filter((h) => h.par >= 4).map((h) => h.secondEval),
    ...holes.filter((h) => h.par >= 5).map((h) => h.thirdEval)
  ].filter(Boolean);
  const midFairCount = midShots.filter((v) => v === "\u25B3").length;
  const midBadCount = midShots.filter((v) => v === "\xD7").length;
  let midScore;
  if (hcp !== null && hcp !== void 0) {
    const hcpVal = Math.max(0, Math.min(54, hcp));
    const idealGIR = Math.min(18, Math.max(0, 476e-5 * hcpVal * hcpVal - 0.429 * hcpVal + 10.12));
    const actualGIR = 18 - midFairCount - midBadCount * 2;
    midScore = r(actualGIR - idealGIR);
  } else {
    const midBadRate = midBadCount / Math.max(midShots.length, 1);
    const midFairRate = midFairCount / Math.max(midShots.length, 1);
    midScore = midFairRate * -0.5 + midBadRate * -1;
  }
  const approachHoles = holes.filter((h) => h.approachEval && h.approachEval !== "\u7121");
  const approachPuttTotal = approachHoles.reduce((a, h) => a + (h.putts || 0), 0);
  const avgAfterPutts = approachHoles.length ? Math.round(approachPuttTotal / approachHoles.length * 10) / 10 : 0;
  let shortScore;
  if (hcp !== null && hcp !== void 0) {
    const hcpVal = Math.max(0, Math.min(54, hcp));
    const idealGIR = Math.min(18, Math.max(0, 476e-5 * hcpVal * hcpVal - 0.429 * hcpVal + 10.12));
    shortScore = r(hcp + holes.length - idealGIR - approachPuttTotal);
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
  return {
    longScore,
    midScore,
    shortScore: r(shortScore),
    puttScore,
    totalScore: holes.reduce((a, h) => a + (h.score || 0), 0),
    totalPar: totalParSum,
    totalPutts,
    totalOB,
    totalPen,
    totalBunker: holes.reduce((a, h) => a + (h.bunker || 0), 0),
    holeCount: holes.length,
    avgAfterPutts: Math.round(avgAfterPutts * 10) / 10
  };
}
function getSimpleAdvice(analytics) {
  const scores = [
    { key: "A", label: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0", score: analytics.longScore },
    { key: "B", label: "\u30DF\u30C9\u30EB\u30B2\u30FC\u30E0", score: analytics.midScore },
    { key: "C", label: "\u30B7\u30E7\u30FC\u30C8\u30B2\u30FC\u30E0", score: analytics.shortScore },
    { key: "D", label: "\u30D1\u30C3\u30C6\u30A3\u30F3\u30B0", score: analytics.puttScore }
  ];
  const sorted = [...scores].sort((a, b) => a.score - b.score);
  const worst2 = sorted.filter((x) => x.score < 0).slice(0, 2);
  const advice = {
    A: "\u30A6\u30C3\u30C9\u30FB\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u30FB\u30ED\u30F3\u30B0\u30A2\u30A4\u30A2\u30F3\u306B\u539F\u56E0\u304C\u3042\u308B \u2192 \u30DF\u30B9\u306E\u50BE\u5411\u3092\u628A\u63E1\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B",
    B_withA: "\u30ED\u30F3\u30B0\u30B2\u30FC\u30E0\u306E\u6539\u5584\u3067\u3088\u304F\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308B",
    B_noA: "\u30B7\u30E7\u30FC\u30C8\u30A2\u30A4\u30A2\u30F3\u306E\u7DF4\u7FD2\u304C\u5FC5\u8981",
    C: "\u30A6\u30A7\u30C3\u30B8\u30B7\u30E7\u30C3\u30C8\u306E\u7DF4\u7FD2\u304C\u5FC5\u8981",
    D: "\u30D1\u30C3\u30C6\u30A3\u30F3\u30B0\u306E\u7DF4\u7FD2\u304C\u5FC5\u8981"
  };
  return worst2.map(({ key, label, score }) => {
    let text = "";
    if (key === "A") text = advice.A;
    else if (key === "B") text = worst2.some((x) => x.key === "A") ? advice.B_withA : advice.B_noA;
    else if (key === "C") text = advice.C;
    else if (key === "D") text = advice.D;
    return { key, label, score, text };
  });
}
function GolfTracker() {
  var _a, _b;
  const [view, setView] = useState("home");
  const [inputMode, setInputMode] = useState(() => {
    try {
      return localStorage.getItem("golf_inputMode") || "detail";
    } catch (e) {
      return "detail";
    }
  });
  const [simpleHoleData, setSimpleHoleData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_simpleHoleData") || "{}");
    } catch (e) {
      return {};
    }
  });
  const [rounds, setRounds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_rounds") || "[]");
    } catch (e) {
      return [];
    }
  });
  const [currentRound, setCurrentRound] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_currentRound") || "null");
    } catch (e) {
      return null;
    }
  });
  const [currentHole, setCurrentHole] = useState(() => {
    try {
      return parseInt(localStorage.getItem("golf_currentHole") || "1", 10);
    } catch (e) {
      return 1;
    }
  });
  const [holePars, setHolePars] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_holePars") || "null") || Array(18).fill(4);
    } catch (e) {
      return Array(18).fill(4);
    }
  });
  const [holeData, setHoleData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_holeData") || "{}");
    } catch (e) {
      return {};
    }
  });
  const [showShotForm, setShowShotForm] = useState(false);
  const [showNewRound, setShowNewRound] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [showYardage, setShowYardage] = useState(false);
  const [setupStep, setSetupStep] = useState(0);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [selectedCourseA, setSelectedCourseA] = useState(null);
  const [selectedCourseB, setSelectedCourseB] = useState(null);
  const [selectedGreen, setSelectedGreen] = useState(null);
  const [selectedTee, setSelectedTee] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState("sunny");
  const [selectedWind, setSelectedWind] = useState(0);
  const [savedClubs, setSavedClubs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("golf_clubs") || "[]");
    } catch (e) {
      return [];
    }
  });
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [shotNote, setShotNote] = useState("");
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
    if ((nextCat === "putt_near" || nextCat === "putt_far") && savedClubs.includes("PT")) {
      setSelectedClub("PT");
    } else {
      setSelectedClub(null);
    }
  };
  const openShotForm = () => {
    setSelectedOpt(null);
    autoSelectPutterClub(hd.state);
    setShotNote("");
    setShowShotForm(true);
  };
  const addShot = () => {
    if (!selectedOpt || !currentCatDef) return;
    const opt = currentCatDef.options.find((o) => o.id === selectedOpt);
    const totalShotCount = opt.shotCount + (opt.penaltyCount || 0);
    const shot = {
      id: Date.now(),
      hole: currentHole,
      par,
      categoryKey: currentCategory,
      optionId: opt.id,
      optionLabel: opt.label,
      score: opt.score,
      shotCount: totalShotCount,
      penaltyCount: opt.penaltyCount || 0,
      color: opt.color,
      club: selectedClub,
      note: shotNote
    };
    const nextShotNum = totalStrokes + totalShotCount + 1;
    let nextState;
    if (opt.nextState === "done") {
      nextState = "done";
    } else {
      nextState = categoryForState(opt.nextState, par, nextShotNum);
    }
    setHoleData((prev) => {
      var _a2;
      return __spreadProps(__spreadValues({}, prev), {
        [currentHole]: {
          shots: [...((_a2 = prev[currentHole]) == null ? void 0 : _a2.shots) || [], shot],
          state: nextState,
          done: nextState === "done"
        }
      });
    });
    if (nextState === "done") {
      setShowShotForm(false);
    } else {
      setSelectedOpt(null);
      autoSelectPutterClub(nextState);
      setShotNote("");
    }
  };
  const undoLastShot = () => {
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
    setHoleData((p) => __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: state === "done" } }));
  };
  const startRound = () => {
    if (!selectedVenue || selectedCourseA === null || selectedCourseB === null || !selectedGreen || !selectedTee) return;
    const venue = VENUES.find((v) => v.id === selectedVenue);
    const frontSC = venue.subCourses[selectedCourseA];
    const backSC = venue.subCourses[selectedCourseB];
    const frontHoles = frontSC.holes;
    const backHoles = backSC.holes;
    const pars = [...frontHoles, ...backHoles].map((h) => h.par);
    const teeKey = selectedTee;
    const greenKey = selectedGreen;
    const label = venue.subCourses.length === 1 ? venue.name : frontSC.name === backSC.name ? `${venue.name}\uFF08${frontSC.name}\xD72\uFF09` : `${venue.name}\uFF08${frontSC.name}\u2192${backSC.name}\uFF09`;
    setCurrentRound({
      id: Date.now(),
      course: label,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("ja-JP"),
      venueId: selectedVenue,
      frontCourse: frontSC.name,
      backCourse: backSC.name,
      green: greenKey,
      tee: teeKey,
      weather: selectedWeather,
      wind: selectedWind,
      clubs: savedClubs
    });
    setHoleData({});
    setCurrentHole(1);
    setHolePars(pars);
    setView("round");
    setShowNewRound(false);
    setSetupStep(0);
    setSelectedVenue(null);
    setSelectedCourseA(null);
    setSelectedCourseB(null);
    setSelectedGreen(null);
    setSelectedTee(null);
  };
  const { useEffect } = React;
  useEffect(() => {
    try {
      localStorage.setItem("golf_rounds", JSON.stringify(rounds));
    } catch (e) {
    }
  }, [rounds]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_currentRound", JSON.stringify(currentRound));
    } catch (e) {
    }
  }, [currentRound]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_holePars", JSON.stringify(holePars));
    } catch (e) {
    }
  }, [holePars]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_holeData", JSON.stringify(holeData));
    } catch (e) {
    }
  }, [holeData]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_inputMode", inputMode);
    } catch (e) {
    }
  }, [inputMode]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_simpleHoleData", JSON.stringify(simpleHoleData));
    } catch (e) {
    }
  }, [simpleHoleData]);
  useEffect(() => {
    try {
      localStorage.setItem("golf_currentHole", String(currentHole));
    } catch (e) {
    }
  }, [currentHole]);
  const finishRound = () => {
    if (inputMode === "simple") {
      const completedHoles = Object.keys(simpleHoleData).length;
      const isComplete = completedHoles >= 18;
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots: [], holePars: [...holePars], simpleHoleData: __spreadValues({}, simpleHoleData), inputMode: "simple", isComplete }), ...prev]);
      setCurrentRound(null);
      setSimpleHoleData({});
    } else {
      const shots = Object.values(holeData).flatMap((h) => h.shots);
      const completedHoles = Object.values(holeData).filter((h) => h.done).length;
      const isComplete = completedHoles >= 18;
      setRounds((prev) => [__spreadProps(__spreadValues({}, currentRound), { shots, holePars: [...holePars], holeData: __spreadValues({}, holeData), inputMode: "detail", isComplete }), ...prev]);
      setCurrentRound(null);
      setHoleData({});
    }
    setView("home");
  };
  const resumeRound = (r) => {
    setCurrentRound({ id: r.id, course: r.course, date: r.date, venueId: r.venueId, frontCourse: r.frontCourse, backCourse: r.backCourse, green: r.green, tee: r.tee, weather: r.weather, wind: r.wind });
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
        var _a2, _b2, _c;
        return r.inputMode === "simple" ? !((_a2 = r.simpleHoleData) == null ? void 0 : _a2[h]) : !((_c = (_b2 = r.holeData) == null ? void 0 : _b2[h]) == null ? void 0 : _c.done);
      }
    );
    setCurrentHole(firstIncomplete || 1);
    setRounds((prev) => prev.filter((x) => x.id !== r.id));
    setView("round");
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
    const allShots = rounds.flatMap((r) => r.shots);
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
    const completed = rounds.filter((r) => r.isComplete);
    if (completed.length < 3) return null;
    const target = completed.slice(0, 20);
    const diffs = target.map((r) => {
      let totalScore2 = 0;
      let totalPar = 0;
      if (r.inputMode === "simple") {
        const hd2 = r.simpleHoleData || {};
        totalScore2 = Object.values(hd2).reduce((a, h) => a + (h.score || 0), 0);
        totalPar = (r.holePars || []).reduce((a, p) => a + p, 0);
      } else {
        const shots = r.shots || [];
        totalScore2 = shots.reduce((a, s) => a + s.shotCount, 0);
        const hd2 = r.holeData || {};
        const parArr = r.holePars || Array(18).fill(4);
        totalPar = parArr.reduce((a, p) => a + p, 0);
      }
      if (!totalPar || !totalScore2) return null;
      return { diff: totalScore2 - totalPar, score: totalScore2, par: totalPar, date: r.date, course: r.course };
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
  const S = {
    app: { minHeight: "100vh", background: "linear-gradient(160deg,#060d18 0%,#0b1622 60%,#0d1f2d 100%)", fontFamily: "'Noto Sans JP',sans-serif", color: "#e2e8f0" },
    header: { background: "rgba(255,255,255,0.025)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, backdropFilter: "blur(14px)" },
    logo: { fontSize: "17px", fontWeight: "800", background: "linear-gradient(90deg,#34d399,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    navBtn: (a) => ({ padding: "5px 11px", borderRadius: "20px", border: "none", cursor: "pointer", fontSize: "12px", fontWeight: "600", background: a ? "rgba(52,211,153,0.16)" : "transparent", color: a ? "#34d399" : "#64748b" }),
    page: { padding: "16px 14px", maxWidth: "480px", margin: "0 auto" },
    card: (extra = {}) => __spreadValues({ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "13px", padding: "16px", marginBottom: "12px" }, extra),
    btn: (v = "primary") => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      padding: "10px 18px",
      borderRadius: "9px",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "13px"
    }, v === "primary" && { background: "linear-gradient(135deg,#34d399,#60a5fa)", color: "#060d18" }), v === "secondary" && { background: "rgba(255,255,255,0.07)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.1)" }), v === "danger" && { background: "rgba(239,68,68,0.13)", color: "#f87171", border: "1px solid rgba(239,68,68,0.28)" }), v === "ghost" && { background: "transparent", color: "#475569", padding: "5px 9px", fontSize: "12px" }), v === "undo" && { background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)", padding: "8px 14px", fontSize: "12px" }),
    input: { width: "100%", padding: "10px 13px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#e2e8f0", fontSize: "13px", outline: "none", boxSizing: "border-box" },
    lbl: { fontSize: "10px", fontWeight: "700", color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px", display: "block" },
    modal: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.78)", backdropFilter: "blur(6px)", display: "flex", alignItems: "flex-end", zIndex: 200 },
    modalBox: { background: "#0e1928", borderRadius: "18px 18px 0 0", padding: "20px 16px 36px", width: "100%", maxWidth: "480px", margin: "0 auto", border: "1px solid rgba(255,255,255,0.09)", maxHeight: "88vh", overflowY: "auto" },
    pill: (c) => ({ padding: "2px 8px", borderRadius: "20px", background: `${c}20`, color: c, fontSize: "10px", fontWeight: "700" }),
    optBtn: (sel, col) => {
      const c = COLOR_MAP[col] || COLOR_MAP.gray;
      return { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 13px", borderRadius: "9px", border: sel ? `1.5px solid ${c.border}` : "1px solid rgba(255,255,255,0.07)", background: sel ? c.bg : "rgba(255,255,255,0.025)", cursor: "pointer", marginBottom: "7px" };
    }
  };
  return /* @__PURE__ */ React.createElement("div", { style: S.app }, /* @__PURE__ */ React.createElement("div", { style: S.header }, /* @__PURE__ */ React.createElement("span", { style: S.logo }, "\u26F3 GOLF LOG"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px" } }, /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "home"), onClick: () => setView("home") }, "\u30DB\u30FC\u30E0"), currentRound && /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "round"), onClick: () => setView("round") }, "\u8A18\u9332\u4E2D"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "analytics"), onClick: () => setView("analytics") }, "\u5206\u6790"), /* @__PURE__ */ React.createElement("button", { style: S.navBtn(view === "clubs"), onClick: () => setView("clubs") }, "\u30AF\u30E9\u30D6"))), /* @__PURE__ */ React.createElement("div", { style: S.page }, view === "home" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A18\u9332"), /* @__PURE__ */ React.createElement("p", { style: { color: "#334155", fontSize: "12px" } }, "\u30B7\u30E7\u30C3\u30C8\u3092\u8A18\u9332\u3057\u3066\u5F31\u70B9\u3092\u767A\u898B\u3057\u3088\u3046")), handicap ? /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(96,165,250,0.25)", marginBottom: "18px", background: "rgba(96,165,250,0.04)" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" } }, "\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\uFF08\u53C2\u8003\u5024\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "42px", fontWeight: "800", color: "#60a5fa", lineHeight: 1 } }, handicap.hcp >= 0 ? "+" : "", handicap.hcp)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", color: "#475569", marginTop: "6px" } }, "\u76F4\u8FD1", handicap.roundCount, "\u30E9\u30A6\u30F3\u30C9\u4E2D \u4E0A\u4F4D", handicap.usedCount, "\u4EF6\u306E\u5E73\u5747\u5DEE\u5206 ", handicap.avgDiff >= 0 ? "+" : "", handicap.avgDiff, " \xD7 0.96")), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", fontSize: "11px", color: "#475569" } }, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "4px" } }, "\u30D9\u30B9\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#34d399", fontWeight: "700" } }, handicap.bestDiff >= 0 ? "+" : "", handicap.bestDiff)), /* @__PURE__ */ React.createElement("div", null, "\u30EF\u30FC\u30B9\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#f87171", fontWeight: "700" } }, handicap.worstDiff >= 0 ? "+" : "", handicap.worstDiff)))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", marginBottom: "6px", fontWeight: "700" } }, "\u5BFE\u30D1\u30FC\u5DEE\u5206\uFF08\u6607\u9806\uFF09"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "3px", alignItems: "flex-end", height: "40px" } }, handicap.allDiffs.map((d, i) => {
    const isTop = i < handicap.usedCount;
    const maxAbs = Math.max(...handicap.allDiffs.map((x) => Math.abs(x.diff)), 1);
    const barH = Math.max(4, Math.round(Math.abs(d.diff) / maxAbs * 36));
    const col = d.diff < 0 ? "#34d399" : d.diff === 0 ? "#94a3b8" : "#f97316";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: i,
        title: `${d.date} ${d.diff >= 0 ? "+" : ""}${d.diff}`,
        style: {
          flex: 1,
          height: `${barH}px`,
          borderRadius: "2px",
          background: isTop ? col : `${col}55`,
          border: isTop ? `1px solid ${col}` : "none",
          transition: "height 0.4s"
        }
      }
    );
  })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#334155", marginTop: "3px" } }, /* @__PURE__ */ React.createElement("span", null, "\u2190 \u4F7F\u7528(", handicap.usedCount, "\u4EF6)"), /* @__PURE__ */ React.createElement("span", null, "\u9664\u5916(", handicap.roundCount - handicap.usedCount, "\u4EF6) \u2192"))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "8px", fontSize: "9px", color: "#334155", fontStyle: "italic" } }, "\u203B\u5DEE\u5206\u5E73\u5747\u65B9\u5F0F\u306B\u3088\u308B\u53C2\u8003\u5024\u3067\u3059\u3002\u516C\u5F0F\u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u3068\u306F\u7570\u306A\u308A\u307E\u3059")) : rounds.filter((r) => r.isComplete).length > 0 ? /* @__PURE__ */ React.createElement("div", { style: __spreadProps(__spreadValues({}, S.card({ marginBottom: "18px", border: "1px solid rgba(96,165,250,0.15)" })), { fontSize: "12px", color: "#475569", textAlign: "center", padding: "12px" }) }, "\u{1F3CC}\uFE0F \u30CF\u30F3\u30C7\u30A3\u30AD\u30E3\u30C3\u30D7\u7B97\u51FA\u306B\u306F18H\u5B8C\u4E86\u30E9\u30A6\u30F3\u30C9\u304C3\u4EF6\u4EE5\u4E0A\u5FC5\u8981\u3067\u3059\uFF08\u73FE\u5728 ", rounds.filter((r) => r.isComplete).length, "\u4EF6\uFF09") : null, !showNewRound ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px", marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", padding: "14px" }), onClick: () => {
    setShowNewRound(true);
    setSetupStep(0);
  } }, "\uFF0B \u65B0\u3057\u3044\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB"), IMPORTED_TEST_DATA.length > 0 && !rounds.some((r) => r.rid === IMPORTED_TEST_DATA[0].rid) && /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("secondary")), { width: "100%", padding: "10px", fontSize: "12px" }),
      onClick: () => {
        setRounds((prev) => {
          const existingIds = new Set(prev.map((r) => r.rid).filter(Boolean));
          const newRounds = IMPORTED_TEST_DATA.filter((r) => !existingIds.has(r.rid));
          return [...newRounds, ...prev];
        });
      }
    },
    "\u{1F4E5} \u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3092\u8AAD\u307F\u8FBC\u3080\uFF08",
    IMPORTED_TEST_DATA.length,
    "\u30E9\u30A6\u30F3\u30C9\uFF09"
  )) : (() => {
    var _a2, _b2;
    const venue = VENUES.find((v) => v.id === selectedVenue);
    const canStart = selectedVenue && selectedCourseA !== null && selectedCourseB !== null && selectedGreen && selectedTee;
    const selRow = (items, val, setter, colorSel = "#34d399") => /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", flexWrap: "wrap" } }, items.map((it, i) => {
      var _a3, _b3, _c;
      const key = (_b3 = (_a3 = it.id) != null ? _a3 : it.name) != null ? _b3 : i;
      const active = val === (it.id !== void 0 ? it.id : i);
      return /* @__PURE__ */ React.createElement("button", { key, onClick: () => setter(it.id !== void 0 ? it.id : i), style: {
        padding: "8px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "12px",
        border: "none",
        border: active ? `2px solid ${colorSel}` : "1px solid rgba(255,255,255,0.1)",
        background: active ? `${colorSel}20` : "rgba(255,255,255,0.04)",
        color: active ? colorSel : "#64748b"
      } }, (_c = it.label) != null ? _c : it.name);
    }));
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.22)", marginBottom: "18px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", fontSize: "15px" } }, "\u30E9\u30A6\u30F3\u30C9\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => {
      setShowNewRound(false);
      setSetupStep(0);
      setSelectedVenue(null);
      setSelectedCourseA(null);
      setSelectedCourseB(null);
      setSelectedGreen(null);
      setSelectedTee(null);
      setSelectedWeather("sunny");
      setSelectedWind(0);
    } }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u5165\u529B\u30E2\u30FC\u30C9"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [
      { id: "detail", label: "\u{1F50D} \u8A73\u7D30\u30E2\u30FC\u30C9", desc: "\u30B7\u30E7\u30C3\u30C8\u5358\u4F4D\u3067\u8A18\u9332" },
      { id: "simple", label: "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9", desc: "\u30B9\u30B3\u30A2\u30FB\u8A55\u4FA1\u306E\u307F" }
    ].map((m) => /* @__PURE__ */ React.createElement("button", { key: m.id, onClick: () => setInputMode(m.id), style: {
      flex: 1,
      padding: "10px 8px",
      borderRadius: "9px",
      cursor: "pointer",
      textAlign: "center",
      border: inputMode === m.id ? "2px solid #34d399" : "1px solid rgba(255,255,255,0.1)",
      background: inputMode === m.id ? "rgba(52,211,153,0.12)" : "rgba(255,255,255,0.04)",
      color: inputMode === m.id ? "#34d399" : "#64748b"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "13px" } }, m.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", opacity: 0.7, marginTop: "2px" } }, m.desc))))), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2460 \u30B4\u30EB\u30D5\u5834"), /* @__PURE__ */ React.createElement(
      "select",
      {
        value: selectedVenue || "",
        onChange: (e) => {
          const vid = e.target.value || null;
          setSelectedVenue(vid);
          setSelectedGreen(null);
          setSelectedTee(null);
          if (!vid) {
            setSelectedCourseA(null);
            setSelectedCourseB(null);
            return;
          }
          const v = VENUES.find((x) => x.id === vid);
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
        },
        style: __spreadProps(__spreadValues({}, S.input), { appearance: "none", WebkitAppearance: "none", cursor: "pointer" })
      },
      /* @__PURE__ */ React.createElement("option", { value: "" }, "\u2014 \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 \u2014"),
      VENUES.map((v) => /* @__PURE__ */ React.createElement("option", { key: v.id, value: v.id }, v.name))
    )), venue && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2461 ", venue.subCourses.length === 1 ? "\u30B3\u30FC\u30B9" : "\u524D\u534A\u30B3\u30FC\u30B9"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.subCourses.map((c, i) => ({ id: i, label: c.name })), selectedCourseA, setSelectedCourseA, "#34d399")), venue.subCourses.length > 1 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2461 \u5F8C\u534A\u30B3\u30FC\u30B9"), selRow(venue.subCourses.map((c, i) => ({ id: i, label: c.name })), selectedCourseB, setSelectedCourseB, "#60a5fa"))), venue && selectedCourseA !== null && selectedCourseB !== null && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2462 \u4F7F\u7528\u30B0\u30EA\u30FC\u30F3"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "10px" } }, selRow(venue.greens, selectedGreen, setSelectedGreen, "#34d399")), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2462 \u30C6\u30A3\u30FC"), selRow(venue.tees, selectedTee, setSelectedTee, "#fbbf24")), venue && selectedGreen && selectedTee && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2463 \u5929\u6C17"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", marginBottom: "12px" } }, [
      { id: "sunny", label: "\u2600\uFE0F \u6674\u308C" },
      { id: "cloudy", label: "\u2601\uFE0F \u66C7\u308A" },
      { id: "rainy", label: "\u{1F327}\uFE0F \u96E8" },
      { id: "snowy", label: "\u2744\uFE0F \u96EA" }
    ].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.id, onClick: () => setSelectedWeather(w.id), style: {
      flex: 1,
      padding: "8px 4px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "600",
      fontSize: "12px",
      border: selectedWeather === w.id ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
      background: selectedWeather === w.id ? "rgba(96,165,250,0.15)" : "rgba(255,255,255,0.04)",
      color: selectedWeather === w.id ? "#60a5fa" : "#64748b"
    } }, w.label))), /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u2463 \u98A8\u306E\u5F37\u3055"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, [
      { val: 0, label: "0", sub: "\u7121\u98A8" },
      { val: 1, label: "1", sub: "\u5FAE\u98A8" },
      { val: 2, label: "2", sub: "\u5F31\u98A8" },
      { val: 3, label: "3", sub: "\u4E2D\u98A8" },
      { val: 4, label: "4", sub: "\u5F37\u3081" },
      { val: 5, label: "5", sub: "\u5F37\u98A8" }
    ].map((w) => /* @__PURE__ */ React.createElement("button", { key: w.val, onClick: () => setSelectedWind(w.val), style: {
      flex: 1,
      padding: "8px 2px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "13px",
      border: selectedWind === w.val ? "2px solid #fbbf24" : "1px solid rgba(255,255,255,0.1)",
      background: selectedWind === w.val ? "rgba(251,191,36,0.15)" : "rgba(255,255,255,0.04)",
      color: selectedWind === w.val ? "#fbbf24" : "#64748b",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1px"
    } }, /* @__PURE__ */ React.createElement("span", null, w.label), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", fontWeight: "500", opacity: 0.7 } }, w.sub))))), canStart && venue && /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "8px", padding: "10px 12px", marginBottom: "14px", fontSize: "12px", color: "#94a3b8" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", color: "#34d399", marginBottom: "4px" } }, venue.name), /* @__PURE__ */ React.createElement("div", null, "\u524D\u534A\uFF1A", venue.subCourses[selectedCourseA].name, " / \u5F8C\u534A\uFF1A", venue.subCourses[selectedCourseB].name), /* @__PURE__ */ React.createElement("div", null, "\u30B0\u30EA\u30FC\u30F3\uFF1A", (_a2 = venue.greens.find((g) => g.id === selectedGreen)) == null ? void 0 : _a2.label, " / \u30C6\u30A3\u30FC\uFF1A", (_b2 = venue.tees.find((t) => t.id === selectedTee)) == null ? void 0 : _b2.label), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "3px" } }, "\u5929\u6C17\uFF1A", { "sunny": "\u2600\uFE0F\u6674\u308C", "cloudy": "\u2601\uFE0F\u66C7\u308A", "rainy": "\u{1F327}\uFE0F\u96E8", "snowy": "\u2744\uFE0F\u96EA" }[selectedWeather], "\u98A8\uFF1A", ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][selectedWind], "\uFF08", selectedWind, "\uFF09")), /* @__PURE__ */ React.createElement(
      "button",
      {
        style: __spreadProps(__spreadValues({}, S.btn("primary")), { width: "100%", opacity: canStart ? 1 : 0.35, cursor: canStart ? "pointer" : "not-allowed" }),
        onClick: startRound,
        disabled: !canStart
      },
      "\u30E9\u30A6\u30F3\u30C9\u958B\u59CB \u26F3"
    ));
  })(), rounds.length === 0 ? /* @__PURE__ */ React.createElement("div", { style: S.card({ textAlign: "center", padding: "38px 20px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "42px", marginBottom: "10px" } }, "\u{1F3CC}\uFE0F"), /* @__PURE__ */ React.createElement("p", { style: { fontWeight: "700", color: "#334155" } }, "\u307E\u3060\u30E9\u30A6\u30F3\u30C9\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", marginTop: "3px", color: "#1e293b" } }, "\u30E9\u30A6\u30F3\u30C9\u3092\u958B\u59CB\u3057\u3066\u8A18\u9332\u3057\u3088\u3046\uFF01")) : rounds.map((r) => {
    const tot = Math.round(r.shots.reduce((s, sh) => s + sh.score, 0) * 10) / 10;
    const strk = r.shots.reduce((s, sh) => s + sh.shotCount, 0);
    const holeNums = [...new Set(r.shots.map((s) => s.hole))].sort((a, b) => a - b);
    const holeStats = holeNums.map((h) => {
      var _a2;
      const hs = r.shots.filter((s) => s.hole === h);
      const par2 = ((_a2 = hs[0]) == null ? void 0 : _a2.par) || 4;
      const totalS = hs.reduce((a, s) => a + s.shotCount, 0);
      const diff = totalS - par2;
      const putts = hs.filter((s) => s.categoryKey === "putt_near" || s.categoryKey === "putt_far").reduce((a, s) => a + s.shotCount, 0);
      const ob = hs.filter((s) => s.optionId === "ob").length;
      const pond = hs.filter((s) => s.optionId === "pond").length;
      const bunker = hs.filter((s) => s.optionId === "bunker").length;
      const evalSc = Math.round(hs.reduce((a, s) => a + s.score, 0) * 10) / 10;
      let sym, symColor;
      if (diff <= -3) {
        sym = "\u2606";
        symColor = "#a78bfa";
      } else if (diff === -2) {
        sym = "\u25CE";
        symColor = "#f59e0b";
      } else if (diff === -1) {
        sym = "\u25CB";
        symColor = "#34d399";
      } else if (diff === 0) {
        sym = "\uFF0D";
        symColor = "#94a3b8";
      } else if (diff === 1) {
        sym = "\u25B3";
        symColor = "#60a5fa";
      } else if (diff === 2) {
        sym = "\u25A1";
        symColor = "#f97316";
      } else if (diff === 3) {
        sym = "\u25A0";
        symColor = "#ef4444";
      } else {
        sym = `+${diff}`;
        symColor = "#ef4444";
      }
      return { h, par: par2, totalS, diff, putts, ob, pond, bunker, evalSc, sym, symColor };
    });
    const frontStats = holeStats.filter((h) => h.h <= 9);
    const backStats = holeStats.filter((h) => h.h >= 10);
    const frontStrk = frontStats.reduce((a, h) => a + h.totalS, 0);
    const backStrk = backStats.reduce((a, h) => a + h.totalS, 0);
    const frontPar = frontStats.reduce((a, h) => a + h.par, 0);
    const backPar = backStats.reduce((a, h) => a + h.par, 0);
    const totalPar = frontPar + backPar;
    const ScoreRow = ({ stats, label, halfStrk, halfPar }) => /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569", fontWeight: "700", width: "28px" } }, label), stats.map(({ h, par: par2, sym, symColor, totalS, putts }) => /* @__PURE__ */ React.createElement("div", { key: h, style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "26px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#334155", lineHeight: 1 } }, "P", par2), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", color: symColor, lineHeight: 1, fontWeight: "700" } }, sym), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b", lineHeight: 1 } }, totalS), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#334155", lineHeight: 1 } }, putts > 0 ? `${putts}P` : ""))), halfStrk > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "4px", padding: "2px 7px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: halfStrk - halfPar >= 0 ? "#f97316" : "#34d399" } }, halfStrk, halfStrk - halfPar >= 0 ? `(+${halfStrk - halfPar})` : `(${halfStrk - halfPar})`), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569" } }, "\u5C0F\u8A08"))));
    return /* @__PURE__ */ React.createElement("div", { key: r.id, style: S.card() }, (() => {
      var _a2;
      const isSimple = r.inputMode === "simple";
      const sa = isSimple ? calcSimpleAnalytics(r.simpleHoleData || {}, r.holePars || Array(18).fill(4), (_a2 = handicap == null ? void 0 : handicap.hcp) != null ? _a2 : null) : null;
      const advice = sa ? getSimpleAdvice(sa) : [];
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "13px" } }, r.course), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", padding: "1px 6px", borderRadius: "10px", background: isSimple ? "rgba(251,191,36,0.15)" : "rgba(96,165,250,0.15)", color: isSimple ? "#fbbf24" : "#60a5fa", fontWeight: "700" } }, isSimple ? "\u26A1\u7C21\u6613" : "\u{1F50D}\u8A73\u7D30")), /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "11px", marginTop: "2px", display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement("span", null, r.date), r.weather && /* @__PURE__ */ React.createElement("span", null, { "sunny": "\u2600\uFE0F", "cloudy": "\u2601\uFE0F", "rainy": "\u{1F327}\uFE0F", "snowy": "\u2744\uFE0F" }[r.weather]), r.wind !== void 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][r.wind], "\uFF08", r.wind, "\uFF09"))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", flexShrink: 0, marginLeft: "10px" } }, !r.isComplete && /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => resumeRound(r),
          style: { padding: "5px 12px", borderRadius: "20px", border: "1px solid rgba(251,191,36,0.5)", background: "rgba(251,191,36,0.12)", color: "#fbbf24", fontSize: "11px", fontWeight: "700", cursor: "pointer", display: "block", marginBottom: "4px", marginLeft: "auto" }
        },
        "\u270F\uFE0F \u5165\u529B\u4E2D"
      ), isSimple && sa ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "20px", color: sa.totalScore - sa.totalPar >= 0 ? "#f97316" : "#34d399" } }, sa.totalScore), /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "9px" } }, "(", sa.totalScore - sa.totalPar >= 0 ? "+" : "", sa.totalScore - sa.totalPar, ")")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "20px", color: scoreColor(tot) } }, fmt(tot)), /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "9px" } }, "\u8A55\u4FA1\u30B9\u30B3\u30A2")))), isSimple && sa && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" } }, [{ label: "\u524D\u534A", holes: Array.from({ length: 9 }, (_, i) => i + 1) }, { label: "\u5F8C\u534A", holes: Array.from({ length: 9 }, (_, i) => i + 10) }].map((row) => {
        const rowHoles = row.holes.filter((h) => {
          var _a3;
          return (_a3 = r.simpleHoleData) == null ? void 0 : _a3[h];
        });
        if (!rowHoles.length) return null;
        const rowScore = rowHoles.reduce((a, h) => {
          var _a3;
          return a + (((_a3 = r.simpleHoleData[h]) == null ? void 0 : _a3.score) || 0);
        }, 0);
        const rowPar = rowHoles.reduce((a, h) => {
          var _a3;
          return a + (((_a3 = r.holePars) == null ? void 0 : _a3[h - 1]) || 4);
        }, 0);
        return /* @__PURE__ */ React.createElement("div", { key: row.label, style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569", fontWeight: "700", width: "28px" } }, row.label), rowHoles.map((h) => {
          var _a3, _b2;
          const hd2 = r.simpleHoleData[h];
          const diff = ((hd2 == null ? void 0 : hd2.score) || 0) - (((_a3 = r.holePars) == null ? void 0 : _a3[h - 1]) || 4);
          let sym, symColor;
          if (diff <= -3) {
            sym = "\u2606";
            symColor = "#a78bfa";
          } else if (diff === -2) {
            sym = "\u25CE";
            symColor = "#f59e0b";
          } else if (diff === -1) {
            sym = "\u25CB";
            symColor = "#34d399";
          } else if (diff === 0) {
            sym = "\uFF0D";
            symColor = "#94a3b8";
          } else if (diff === 1) {
            sym = "\u25B3";
            symColor = "#60a5fa";
          } else if (diff === 2) {
            sym = "\u25A1";
            symColor = "#f97316";
          } else if (diff === 3) {
            sym = "\u25A0";
            symColor = "#ef4444";
          } else {
            sym = `+${diff}`;
            symColor = "#ef4444";
          }
          return /* @__PURE__ */ React.createElement("div", { key: h, style: { display: "flex", flexDirection: "column", alignItems: "center", minWidth: "26px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#334155" } }, "P", ((_b2 = r.holePars) == null ? void 0 : _b2[h - 1]) || 4), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "15px", color: symColor, fontWeight: "700" } }, sym), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "9px", color: "#64748b" } }, hd2 == null ? void 0 : hd2.score), /* @__PURE__ */ React.createElement("span", { style: { fontSize: "8px", color: "#334155" } }, ((hd2 == null ? void 0 : hd2.putts) || 0) > 0 ? `${hd2.putts}P` : ""));
        }), /* @__PURE__ */ React.createElement("div", { style: { marginLeft: "4px", padding: "2px 7px", background: "rgba(255,255,255,0.05)", borderRadius: "6px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "11px", fontWeight: "800", color: scoreColor(rowScore - rowPar) } }, rowScore, "(", rowScore - rowPar >= 0 ? "+" : "", rowScore - rowPar, ")"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "8px", color: "#475569" } }, "\u5C0F\u8A08"))));
      }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "11px", flexWrap: "wrap", gap: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "800" } }, sa.totalScore), "\u6253 (", sa.totalScore - sa.totalPar >= 0 ? "+" : "", sa.totalScore - sa.totalPar, ")"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D1\u30C3\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "700" } }, sa.totalPutts)), (sa.totalOB > 0 || sa.totalPen > 0) && /* @__PURE__ */ React.createElement("span", { style: { color: "#fca5a5" } }, "\u30DA\u30CA OB\xD7", sa.totalOB, " \u6C60\xD7", sa.totalPen), sa.totalBunker > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#fbbf24" } }, "\u30D0\u30F3\u30AB\u30FC ", sa.totalBunker))), sa.holeCount >= 9 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: "10px", padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.07)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", fontWeight: "700", color: "#64748b", marginBottom: "8px" } }, "\u{1F4CA} \u7C21\u6613\u5206\u6790"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" } }, [
        { label: "\uFF21 \u30ED\u30F3\u30B0", score: sa.longScore },
        { label: "\uFF22 \u30DF\u30C9\u30EB", score: sa.midScore },
        { label: "\uFF23 \u30B7\u30E7\u30FC\u30C8", score: sa.shortScore },
        { label: "\uFF24 \u30D1\u30C3\u30C8", score: sa.puttScore }
      ].map(({ label, score }) => /* @__PURE__ */ React.createElement("div", { key: label, style: { display: "flex", justifyContent: "space-between", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#94a3b8" } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", color: scoreColor(score) } }, score >= 0 ? "+" : "", score.toFixed(2))))), advice.map(({ key, label, score, text }) => /* @__PURE__ */ React.createElement("div", { key, style: { fontSize: "11px", color: "#f87171", marginBottom: "4px", padding: "6px 8px", background: "rgba(239,68,68,0.07)", borderRadius: "6px", borderLeft: "2px solid #ef4444" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700" } }, "\u26A0 ", label, "\uFF08", score >= 0 ? "+" : "", score.toFixed(2), "\uFF09"), "\uFF1A", text)))));
    })(), holeStats.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px", overflowX: "auto" } }, frontStats.length > 0 && /* @__PURE__ */ React.createElement(ScoreRow, { stats: frontStats, label: "\u524D\u534A", halfStrk: frontStrk, halfPar: frontPar }), backStats.length > 0 && /* @__PURE__ */ React.createElement(ScoreRow, { stats: backStats, label: "\u5F8C\u534A", halfStrk: backStrk, halfPar: backPar }), (() => {
      const totalPutts = holeStats.reduce((a, h) => a + h.putts, 0);
      const totalOb = holeStats.reduce((a, h) => a + h.ob, 0);
      const totalPond = holeStats.reduce((a, h) => a + h.pond, 0);
      const totalBunker = holeStats.reduce((a, h) => a + h.bunker, 0);
      return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "6px", borderTop: "1px solid rgba(255,255,255,0.06)", fontSize: "11px", flexWrap: "wrap", gap: "4px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "800" } }, strk), "\u6253 (", strk - totalPar >= 0 ? "+" : "", strk - totalPar, ")"), /* @__PURE__ */ React.createElement("span", { style: { color: "#475569" } }, "\u30D1\u30C3\u30C8 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "700" } }, totalPutts)), (totalOb > 0 || totalPond > 0) && /* @__PURE__ */ React.createElement("span", { style: { color: "#fca5a5" } }, "\u30DA\u30CA ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700" } }, totalOb > 0 ? `OB\xD7${totalOb}` : "", totalOb > 0 && totalPond > 0 ? " " : "", totalPond > 0 ? `\u6C60\xD7${totalPond}` : "")), totalBunker > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "#fbbf24" } }, "\u30D0\u30F3\u30AB\u30FC ", /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700" } }, totalBunker))), /* @__PURE__ */ React.createElement("span", { style: S.pill(scoreColor(tot)) }, fmt(tot), "pt"));
    })()));
  })), view === "round" && currentRound && inputMode === "simple" && (() => {
    const shd = simpleHoleData[currentHole] || {};
    const setShd = (patch) => setSimpleHoleData((prev) => __spreadProps(__spreadValues({}, prev), {
      [currentHole]: __spreadValues(__spreadValues({}, prev[currentHole] || {}), patch)
    }));
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
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#334155", fontSize: "11px", marginTop: "1px" } }, "\u26A1 \u7C21\u6613\u30E2\u30FC\u30C9\u3000", Object.keys(simpleHoleData).length, "H\u8A18\u9332\u6E08\u307F\u3000\u5408\u8A08 ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "700" } }, simpleTotalScore), "\u6253", simpleTotalPar > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: scoreColor(simpleTotalScore - simpleTotalPar) } }, " (", simpleTotalScore - simpleTotalPar >= 0 ? "+" : "", simpleTotalScore - simpleTotalPar, ")"))), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: finishRound }, "\u7D42\u4E86")), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30DB\u30FC\u30EB\u9078\u629E"), [{ label: "\u524D\u534A", holes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }, { label: "\u5F8C\u534A", holes: [10, 11, 12, 13, 14, 15, 16, 17, 18] }].map((row) => /* @__PURE__ */ React.createElement("div", { key: row.label, style: { marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#475569", width: "26px", flexShrink: 0 } }, row.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px" } }, row.holes.map((h) => {
      const hh = simpleHoleData[h];
      const active = currentHole === h;
      const done = (hh == null ? void 0 : hh.score) != null;
      const diff = done ? hh.score - holePars[h - 1] : null;
      return /* @__PURE__ */ React.createElement("button", { key: h, onClick: () => setCurrentHole(h), style: {
        width: "33px",
        height: "33px",
        borderRadius: "7px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "11px",
        border: active ? "2px solid #34d399" : done ? `1px solid ${scoreColor(diff)}55` : "1px solid rgba(255,255,255,0.08)",
        background: active ? "rgba(52,211,153,0.18)" : done ? `${scoreColor(diff)}11` : "rgba(255,255,255,0.025)",
        color: active ? "#34d399" : done ? scoreColor(diff) : "#334155"
      } }, h);
    })))))), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, currentHole, "\u756A\u30DB\u30FC\u30EB \u2014 \u30D1\u30FC"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => setPar(currentHole, p), style: {
      flex: 1,
      padding: "9px",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "800",
      fontSize: "15px",
      border: par === p ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.09)",
      background: par === p ? "rgba(96,165,250,0.13)" : "rgba(255,255,255,0.03)",
      color: par === p ? "#60a5fa" : "#334155"
    } }, "Par", p)))), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.15)" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "14px", marginBottom: "14px" } }, currentHole, "\u756A ", /* @__PURE__ */ React.createElement("span", { style: { color: "#334155", fontWeight: "400", fontSize: "12px" } }, "Par", par)), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B9\u30B3\u30A2\uFF08\u6253\u6570\uFF09"), /* @__PURE__ */ React.createElement(NumInput, { val: shd.score, onChange: (v) => setShd({ score: v }), min: 1, max: 20 })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30D1\u30C3\u30C8\u6570"), /* @__PURE__ */ React.createElement(NumInput, { val: shd.putts, onChange: (v) => setShd({ putts: v }), min: 0, max: 10 }))), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" } }, [
      { key: "ob", label: "OB" },
      { key: "penalty", label: "\u30DA\u30CA\u30EB\u30C6\u30A3" },
      { key: "bunker", label: "\u30D0\u30F3\u30AB\u30FC" }
    ].map(({ key, label }) => /* @__PURE__ */ React.createElement("div", { key }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, label), /* @__PURE__ */ React.createElement(NumInput, { val: shd[key], onChange: (v) => setShd({ [key]: v }), min: 0, max: 5 })))), /* @__PURE__ */ React.createElement("div", { style: { borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "12px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30B7\u30E7\u30C3\u30C8\u8A55\u4FA1"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "10px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F3CC}\uFE0F \u30C6\u30A3"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.teeEval, current: shd.teeEval, onChange: (v) => setShd({ teeEval: v }), labels: OX })), par >= 4 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F33F} \u30BB\u30AB\u30F3\u30C9"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.secondEval, current: shd.secondEval, onChange: (v) => setShd({ secondEval: v }), labels: OX })), par >= 5 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F33F} \u30B5\u30FC\u30C9"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.thirdEval, current: shd.thirdEval, onChange: (v) => setShd({ thirdEval: v }), labels: OX })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "12px", color: "#94a3b8", fontWeight: "600", width: "90px" } }, "\u{1F3AF} \u30A2\u30D7\u30ED\u30FC\u30C1"), /* @__PURE__ */ React.createElement(EvalBtn, { val: shd.approachEval, current: shd.approachEval, onChange: (v) => setShd({ approachEval: v }), labels: OXN })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", marginTop: "16px" } }, currentHole > 1 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { flex: 1 }), onClick: () => setCurrentHole((h) => h - 1) }, "\u2039 \u524D"), currentHole < 18 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { flex: 1 }), onClick: () => setCurrentHole((h) => h + 1) }, "\u6B21 \u203A"))));
  })(), view === "round" && currentRound && inputMode === "detail" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "16px", fontWeight: "800" } }, currentRound.course), /* @__PURE__ */ React.createElement("p", { style: { color: "#334155", fontSize: "11px", marginTop: "1px", display: "flex", gap: "8px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", null, totalStrk, "\u6253 \xB7 \u8A55\u4FA1 ", /* @__PURE__ */ React.createElement("span", { style: { color: scoreColor(totalScore), fontWeight: "700" } }, fmt(totalScore), "pt")), currentRound.weather && /* @__PURE__ */ React.createElement("span", null, { "sunny": "\u2600\uFE0F", "cloudy": "\u2601\uFE0F", "rainy": "\u{1F327}\uFE0F", "snowy": "\u2744\uFE0F" }[currentRound.weather], " ", ["\u7121\u98A8", "\u5FAE\u98A8", "\u5F31\u98A8", "\u4E2D\u98A8", "\u5F37\u3081", "\u5F37\u98A8"][(_a = currentRound.wind) != null ? _a : 0], "\uFF08", (_b = currentRound.wind) != null ? _b : 0, "\uFF09"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px" } }, currentRound.venueId && /* @__PURE__ */ React.createElement("button", { style: S.btn("secondary"), onClick: () => setShowYardage((v) => !v) }, "\u{1F4CB} \u8DDD\u96E2"), /* @__PURE__ */ React.createElement("button", { style: S.btn("danger"), onClick: finishRound }, "\u7D42\u4E86"))), (() => {
    var _a2, _b2;
    const venue = VENUES.find((v) => v.id === currentRound.venueId);
    if (!venue) return null;
    const greenLabel = ((_a2 = venue.greens.find((g) => g.id === currentRound.green)) == null ? void 0 : _a2.label) || currentRound.green;
    const teeLabel = ((_b2 = venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _b2.label) || currentRound.tee;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "10px 14px", marginBottom: "10px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "12px", flexWrap: "wrap", fontSize: "11px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u524D\u534A: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#34d399", fontWeight: "700" } }, currentRound.frontCourse)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u5F8C\u534A: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#60a5fa", fontWeight: "700" } }, currentRound.backCourse)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u30B0\u30EA\u30FC\u30F3: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#fbbf24", fontWeight: "700" } }, greenLabel)), /* @__PURE__ */ React.createElement("span", { style: { color: "#64748b" } }, "\u30C6\u30A3\u30FC: ", /* @__PURE__ */ React.createElement("span", { style: { color: "#e2e8f0", fontWeight: "700" } }, teeLabel))));
  })(), showYardage && (() => {
    var _a2;
    const venue = VENUES.find((v) => v.id === currentRound.venueId);
    if (!venue) return null;
    const allHoles = getRoundHoles(currentRound);
    if (!allHoles.length) return null;
    const green = currentRound.green;
    const tee = currentRound.tee;
    const teeLabel = ((_a2 = venue.tees.find((t) => t.id === tee)) == null ? void 0 : _a2.label) || tee;
    return /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "12px 10px", marginBottom: "10px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("label", { style: __spreadProps(__spreadValues({}, S.lbl), { margin: 0 }) }, "\u30E4\u30FC\u30C7\u30FC\u30B8\u8868\uFF08", teeLabel, "\uFF09"), /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => setShowYardage(false) }, "\u2715")), /* @__PURE__ */ React.createElement("table", { style: { width: "100%", borderCollapse: "collapse", fontSize: "12px" } }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", { style: { color: "#475569" } }, ["H", "Par", "HDCP", "\u8DDD\u96E2(Y)"].map((h) => /* @__PURE__ */ React.createElement("th", { key: h, style: { padding: "5px 4px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.07)", fontWeight: "700" } }, h)))), /* @__PURE__ */ React.createElement("tbody", null, allHoles.map((h, i) => {
      const yard = venue.getYardage(h, green, tee);
      const isActive = i + 1 === currentHole;
      const isFront = i < 9;
      return /* @__PURE__ */ React.createElement(
        "tr",
        {
          key: i,
          onClick: () => setCurrentHole(i + 1),
          style: { background: isActive ? "rgba(52,211,153,0.12)" : i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent", cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", fontWeight: isActive ? "800" : "600", color: isActive ? "#34d399" : isFront ? "#60a5fa" : "#a78bfa" } }, i + 1),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#e2e8f0", fontWeight: "700" } }, h.par),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#64748b" } }, h.hdcp),
        /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#fbbf24", fontWeight: "700" } }, yard != null ? yard : "\u2014")
      );
    }), /* @__PURE__ */ React.createElement("tr", { style: { borderTop: "1px solid rgba(255,255,255,0.1)" } }, /* @__PURE__ */ React.createElement("td", { colSpan: 3, style: { padding: "5px 4px", textAlign: "center", color: "#64748b", fontWeight: "700", fontSize: "10px" } }, "TOTAL"), /* @__PURE__ */ React.createElement("td", { style: { padding: "5px 4px", textAlign: "center", color: "#fbbf24", fontWeight: "800" } }, allHoles.reduce((s, h) => s + (venue.getYardage(h, green, tee) || 0), 0), "Y")))), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "9px", color: "#334155", marginTop: "6px" } }, "\u884C\u3092\u30BF\u30C3\u30D7\u3067\u30DB\u30FC\u30EB\u79FB\u52D5"));
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
      border: active ? "2px solid #34d399" : hasDone ? `1px solid ${scoreColor(hs)}55` : hasAny ? "1px solid rgba(251,191,36,0.4)" : "1px solid rgba(255,255,255,0.08)",
      background: active ? "rgba(52,211,153,0.18)" : hasDone ? `${scoreColor(hs)}11` : hasAny ? "rgba(251,191,36,0.07)" : "rgba(255,255,255,0.025)",
      color: active ? "#34d399" : hasDone ? scoreColor(hs) : hasAny ? "#fbbf24" : "#334155"
    } }, h);
  })))))), /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "13px 14px" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, currentHole, "\u756A\u30DB\u30FC\u30EB \u2014 \u30D1\u30FC"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, [3, 4, 5].map((p) => /* @__PURE__ */ React.createElement("button", { key: p, onClick: () => setPar(currentHole, p), style: {
    flex: 1,
    padding: "9px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
    border: par === p ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.09)",
    background: par === p ? "rgba(96,165,250,0.13)" : "rgba(255,255,255,0.03)",
    color: par === p ? "#60a5fa" : "#334155"
  } }, "Par", p)))), /* @__PURE__ */ React.createElement("div", { style: S.card({ border: `1px solid ${hd.done ? "rgba(52,211,153,0.2)" : "rgba(251,191,36,0.15)"}` }) }, (() => {
    var _a2;
    const venue = (currentRound == null ? void 0 : currentRound.venueId) ? VENUES.find((v) => v.id === currentRound.venueId) : null;
    const allHoles = venue ? getRoundHoles(currentRound) : [];
    const hInfo = allHoles[currentHole - 1] || null;
    const yard = venue && hInfo ? venue.getYardage(hInfo, currentRound.green, currentRound.tee) : null;
    const teeLabel = ((_a2 = venue == null ? void 0 : venue.tees.find((t) => t.id === currentRound.tee)) == null ? void 0 : _a2.label) || "";
    return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "12px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "700", fontSize: "14px" } }, currentHole, "\u756A ", /* @__PURE__ */ React.createElement("span", { style: { color: "#334155", fontWeight: "400", fontSize: "12px" } }, "Par", par), hInfo && /* @__PURE__ */ React.createElement("span", { style: { color: "#475569", fontWeight: "500", fontSize: "10px", marginLeft: "5px" } }, "HC", hInfo.hdcp)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "6px", alignItems: "center" } }, /* @__PURE__ */ React.createElement("span", { style: S.pill("#60a5fa") }, totalStrokes, "\u6253"), /* @__PURE__ */ React.createElement("span", { style: S.pill(scoreColor(holeScore)) }, fmt(holeScore), "pt"), hd.done && /* @__PURE__ */ React.createElement("span", { style: S.pill("#34d399") }, "\u2713 \u5B8C\u4E86"), hd.done && /* @__PURE__ */ React.createElement(
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
          setHoleData((p) => __spreadProps(__spreadValues({}, p), { [currentHole]: { shots: prev, state, done: false } }));
        },
        style: { padding: "2px 9px", borderRadius: "20px", background: "rgba(251,191,36,0.15)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.35)", fontSize: "11px", fontWeight: "700", cursor: "pointer" }
      },
      "\u4FEE\u6B63"
    ))), yard && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "10px", marginTop: "5px", fontSize: "10px", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#fbbf24", fontWeight: "700" } }, teeLabel, " ", yard, "y")));
  })(), hd.shots.map((s, i) => {
    const c = COLOR_MAP[s.color] || COLOR_MAP.gray;
    return /* @__PURE__ */ React.createElement("div", { key: s.id, style: { display: "flex", alignItems: "center", gap: "9px", padding: "9px 11px", borderRadius: "8px", background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.055)", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("div", { style: { width: "22px", height: "22px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "800", color: "#64748b", flexShrink: 0 } }, hd.shots.slice(0, i).reduce((a, sh) => a + sh.shotCount, 1)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "6px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "600", fontSize: "12px", color: c.text } }, s.optionLabel), s.club && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", fontWeight: "700", color: "#60a5fa", background: "rgba(96,165,250,0.15)", padding: "1px 6px", borderRadius: "4px" } }, s.club)), s.penaltyCount > 0 && /* @__PURE__ */ React.createElement("div", { style: { color: "#fca5a5", fontSize: "10px" } }, "\uFF081\u6253\u7F70\u542B\u3080\u30FB\u8A08", s.shotCount, "\u6253\uFF09"), s.shotCount > 1 && !s.penaltyCount && /* @__PURE__ */ React.createElement("div", { style: { color: "#475569", fontSize: "10px" } }, "\uFF08", s.shotCount, "\u6253\u5206\uFF09"), s.note && /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "10px" } }, s.note)), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "800", fontSize: "13px", color: scoreColor(s.score), flexShrink: 0 } }, fmt(s.score)));
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
  ) : hd.done ? /* @__PURE__ */ React.createElement(React.Fragment, null, currentHole > 1 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("secondary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h - 1) }, "\u2039 \u524D\u306E\u30DB\u30FC\u30EB"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, textAlign: "center", padding: "12px", color: "#34d399", fontSize: "13px", fontWeight: "700" } }, "\u30DB\u30FC\u30EB\u5B8C\u4E86 \u{1F3C6}"), currentHole < 18 && /* @__PURE__ */ React.createElement("button", { style: __spreadProps(__spreadValues({}, S.btn("primary")), { padding: "10px 14px", fontSize: "12px" }), onClick: () => setCurrentHole((h) => h + 1) }, "\u6B21\u306E\u30DB\u30FC\u30EB \u203A")) : null, !hd.done && hd.shots.length > 0 && /* @__PURE__ */ React.createElement("button", { style: S.btn("undo"), onClick: undoLastShot }, "\u21A9 \u53D6\u6D88")))), view === "analytics" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "18px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30D7\u30EC\u30FC\u5206\u6790"), /* @__PURE__ */ React.createElement("p", { style: { color: "#334155", fontSize: "12px" } }, "\u5F97\u610F\u30FB\u4E0D\u5F97\u610F\u30B7\u30E7\u30C3\u30C8\u3092\u78BA\u8A8D\u3057\u3088\u3046")), !analytics ? /* @__PURE__ */ React.createElement("div", { style: S.card({ textAlign: "center", padding: "38px 20px" }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "42px", marginBottom: "10px" } }, "\u{1F4CA}"), /* @__PURE__ */ React.createElement("p", { style: { fontWeight: "700", color: "#334155" } }, "\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "12px", marginTop: "3px", color: "#1e293b" } }, "\u30E9\u30A6\u30F3\u30C9\u3092\u8A18\u9332\u3059\u308B\u3068\u5206\u6790\u304C\u8868\u793A\u3055\u308C\u307E\u3059")) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: S.card({ padding: "14px" }) }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", textAlign: "center" } }, [
    { val: rounds.length, sub: "\u30E9\u30A6\u30F3\u30C9", col: "#60a5fa" },
    { val: analytics.total, sub: "\u8A18\u9332\u6570", col: "#34d399" },
    { val: fmt(analytics.totalScore), sub: "\u7D2F\u8A08\u8A55\u4FA1", col: scoreColor(analytics.totalScore) }
  ].map(({ val, sub, col }) => /* @__PURE__ */ React.createElement("div", { key: sub }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "22px", fontWeight: "800", color: col } }, val), /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "10px", fontWeight: "600", marginTop: "2px" } }, sub))))), analytics.sorted.length >= 2 && /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px", marginBottom: "12px" } }, [
    { label: "\u{1F3C6} \u6700\u3082\u5F97\u610F", item: analytics.sorted[0], col: "#34d399" },
    { label: "\u{1F4C9} \u8981\u6539\u5584", item: analytics.sorted[analytics.sorted.length - 1], col: "#f87171" }
  ].map(({ label, item, col }) => /* @__PURE__ */ React.createElement("div", { key: label, style: S.card({ margin: 0, textAlign: "center", border: `1px solid ${col}30` }) }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#334155", marginBottom: "5px", fontWeight: "700" } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "20px", marginBottom: "4px" } }, item[1].icon), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: "700", fontSize: "11px", marginBottom: "3px" } }, item[1].label), /* @__PURE__ */ React.createElement("div", { style: { color: col, fontWeight: "800", fontSize: "20px" } }, fmt(item[1].avg)), /* @__PURE__ */ React.createElement("div", { style: { color: "#334155", fontSize: "10px" } }, "\u5E73\u5747/\u56DE")))), /* @__PURE__ */ React.createElement("div", { style: S.card() }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30AB\u30C6\u30B4\u30EA\u5225 \u5E73\u5747\u8A55\u4FA1\u30B9\u30B3\u30A2"), analytics.sorted.map(([catId, data]) => {
    const pct = Math.max(0, Math.min(100, (data.avg + 2) / 4 * 100));
    const col = scoreColor(data.avg);
    return /* @__PURE__ */ React.createElement("div", { key: catId, style: { marginBottom: "13px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "5px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "600" } }, data.icon, " ", data.label), /* @__PURE__ */ React.createElement("span", { style: { display: "flex", gap: "7px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: "#334155" } }, data.count, "\u56DE"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: col } }, fmt(data.avg)))), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "8px", position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.12)" } }), /* @__PURE__ */ React.createElement("div", { style: { height: "8px", borderRadius: "4px", background: col, width: `${pct}%`, opacity: 0.75 } })));
  }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#1e293b", marginTop: "6px" } }, "\u4E2D\u592E\u304C\xB10\u3000\u5DE6=\u30DE\u30A4\u30CA\u30B9\u3000\u53F3=\u30D7\u30E9\u30B9")), analytics.sorted.map(([catId, data]) => {
    var _a2;
    const opts = ((_a2 = CATEGORIES[catId]) == null ? void 0 : _a2.options) || [];
    const breakdown = opts.map((o) => __spreadProps(__spreadValues({}, o), { count: data.shots.filter((s) => s.optionId === o.id).length })).filter((o) => o.count > 0);
    if (!breakdown.length) return null;
    return /* @__PURE__ */ React.createElement("div", { key: catId, style: S.card() }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, data.icon, " ", data.label, " \u2014 \u5185\u8A33"), breakdown.map((o) => {
      const pct = Math.round(o.count / data.count * 100);
      const c = COLOR_MAP[o.color] || COLOR_MAP.gray;
      return /* @__PURE__ */ React.createElement("div", { key: o.id, style: { marginBottom: "9px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("span", { style: { color: c.text, fontWeight: "600" } }, o.label), /* @__PURE__ */ React.createElement("span", { style: { color: "#334155" } }, o.count, "\u56DE (", pct, "%)")), /* @__PURE__ */ React.createElement("div", { style: { background: "rgba(255,255,255,0.05)", borderRadius: "4px", height: "5px" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "5px", borderRadius: "4px", background: c.text, width: `${pct}%`, opacity: 0.65 } })));
    }));
  })))), view === "clubs" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "20px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontSize: "21px", fontWeight: "800", marginBottom: "3px" } }, "\u30AF\u30E9\u30D6\u8A2D\u5B9A"), /* @__PURE__ */ React.createElement("p", { style: { color: "#334155", fontSize: "12px" } }, "\u4F7F\u7528\u3059\u308B\u30AF\u30E9\u30D6\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044\uFF08\u8A2D\u5B9A\u306F\u81EA\u52D5\u4FDD\u5B58\u3055\u308C\u307E\u3059\uFF09")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", color: "#94a3b8" } }, "\u9078\u629E\u4E2D\uFF1A", /* @__PURE__ */ React.createElement("span", { style: { color: "#34d399", fontWeight: "800" } }, savedClubs.length), "\u672C"), savedClubs.length > 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setSavedClubs([]);
        localStorage.setItem("golf_clubs", "[]");
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
            localStorage.setItem("golf_clubs", JSON.stringify(next));
          },
          style: {
            padding: "7px 11px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "13px",
            fontWeight: "700",
            border: sel ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
            background: sel ? "rgba(96,165,250,0.18)" : "rgba(255,255,255,0.04)",
            color: sel ? "#60a5fa" : "#64748b",
            transition: "all 0.15s"
          }
        },
        c.label
      );
    })));
  }), savedClubs.length > 0 && /* @__PURE__ */ React.createElement("div", { style: S.card({ border: "1px solid rgba(52,211,153,0.2)" }) }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u9078\u629E\u4E2D\u306E\u30AF\u30E9\u30D6\u4E00\u89A7"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "5px", flexWrap: "wrap" } }, savedClubs.map((id) => {
    const c = CLUB_MASTER.find((x) => x.id === id);
    return c ? /* @__PURE__ */ React.createElement("span", { key: id, style: { padding: "3px 9px", borderRadius: "20px", background: "rgba(96,165,250,0.15)", color: "#60a5fa", fontSize: "12px", fontWeight: "700" } }, c.label) : null;
  })))), showShotForm && currentCatDef && /* @__PURE__ */ React.createElement("div", { style: S.modal, onClick: (e) => e.target === e.currentTarget && setShowShotForm(false) }, /* @__PURE__ */ React.createElement("div", { style: S.modalBox }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" } }, /* @__PURE__ */ React.createElement("h3", { style: { fontWeight: "800", fontSize: "16px" } }, currentHole, "\u756A\u30DB\u30FC\u30EB\uFF08Par", par, "\uFF09"), /* @__PURE__ */ React.createElement("button", { style: S.btn("ghost"), onClick: () => setShowShotForm(false) }, "\u2715")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: "13px", color: "#fbbf24", fontWeight: "600", marginBottom: "8px" } }, currentCatDef.icon, " ", totalStrokes + 1, "\u6253\u76EE \u2014 ", currentCatDef.label), /* @__PURE__ */ React.createElement("div", { style: { marginTop: "14px", marginBottom: "4px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u4F7F\u7528\u30AF\u30E9\u30D6\uFF08\u4EFB\u610F\uFF09"), (() => {
    const roundClubSet = savedClubs.length > 0 ? savedClubs : null;
    return CLUB_CATEGORIES.map((cat) => {
      const clubs = CLUB_MASTER.filter((c) => c.category === cat && (!roundClubSet || roundClubSet.includes(c.id)));
      if (!clubs.length) return null;
      return /* @__PURE__ */ React.createElement("div", { key: cat, style: { marginBottom: "8px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: "10px", color: "#475569", fontWeight: "600", marginBottom: "4px" } }, cat), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "4px", flexWrap: "wrap" } }, clubs.map((c) => /* @__PURE__ */ React.createElement(
        "button",
        {
          key: c.id,
          onClick: () => setSelectedClub(selectedClub === c.id ? null : c.id),
          style: {
            padding: "5px 9px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: "700",
            border: selectedClub === c.id ? "2px solid #60a5fa" : "1px solid rgba(255,255,255,0.1)",
            background: selectedClub === c.id ? "rgba(96,165,250,0.18)" : "rgba(255,255,255,0.04)",
            color: selectedClub === c.id ? "#60a5fa" : "#64748b"
          }
        },
        c.label
      ))));
    });
  })()), /* @__PURE__ */ React.createElement("label", { style: __spreadProps(__spreadValues({}, S.lbl), { marginTop: "12px", marginBottom: "8px" }) }, "\u7D50\u679C"), currentCatDef.options.map((o) => {
    const c = COLOR_MAP[o.color] || COLOR_MAP.gray;
    return /* @__PURE__ */ React.createElement("div", { key: o.id, style: S.optBtn(selectedOpt === o.id, o.color), onClick: () => setSelectedOpt(o.id) }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: "13px", fontWeight: "600", color: selectedOpt === o.id ? c.text : "#64748b" } }, o.label), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px", alignItems: "center", flexShrink: 0, marginLeft: "8px" } }, o.shotCount > 1 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: "10px", color: "#475569" } }, "+", o.shotCount, "\u6253"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: "800", color: c.text, fontSize: "14px" } }, fmt(o.score), "pt")));
  }), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: "14px" } }, /* @__PURE__ */ React.createElement("label", { style: S.lbl }, "\u30E1\u30E2\uFF08\u4EFB\u610F\uFF09"), /* @__PURE__ */ React.createElement("input", { style: S.input, placeholder: "\u4F8B\uFF1A\u5DE6\u306B\u5F15\u3063\u639B\u3051\u305F...", value: shotNote, onChange: (e) => setShotNote(e.target.value) })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: "8px" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      style: __spreadProps(__spreadValues({}, S.btn("primary")), { flex: 1, opacity: selectedOpt ? 1 : 0.35, cursor: selectedOpt ? "pointer" : "not-allowed" }),
      onClick: addShot,
      disabled: !selectedOpt
    },
    "\u8A18\u9332\u3059\u308B"
  ), /* @__PURE__ */ React.createElement("button", { style: S.btn("secondary"), onClick: () => setShowShotForm(false) }, "\u30AD\u30E3\u30F3\u30BB\u30EB")))));
}

// グローバル公開
window.GolfTracker = GolfTracker;
