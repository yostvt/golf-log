/**
 * venues.js — ゴルフ場マスターデータ
 *
 * ScoRExolution のゴルフ場マスター定義ファイル。
 * このファイルをメインスクリプトより前に <script> で読み込むこと。
 *
 *   <script src="venues.js"></script>
 *   <script type="text/babel" src="golf-tracker.jsx"></script>
 *
 * VENUES は var で宣言してグローバルスコープに公開する。
 * コース定数（*_COURSE）は venues.js 内でのみ参照するため const のまま。
 *
 * 最終更新: 2026-05-27
 */

/* global React */
"use strict";

// コースデータ定義
// ─────────────────────────────────────────────────────────────────────────────

// 総武カントリークラブ 総武コース（東・中・西 各9H）
// ティー名: チャンピオン=BACK相当 / バック / レギュラー / レディース
// グリーン: ベント・高麗の2グリーン（距離はコーライ表記）
const SOBU_SOBU_COURSE = {
  name: "総武CC 総武コース",
  courses: [
    {
      name: "東コース", holes: [
        { hole:1,  par:5, hdcp:15, back:509, reg:486, ladies:439 },
        { hole:2,  par:4, hdcp: 9, back:383, reg:347, ladies:291 },
        { hole:3,  par:3, hdcp: 3, back:192, reg:167, ladies:154 },
        { hole:4,  par:4, hdcp: 7, back:394, reg:371, ladies:361 },
        { hole:5,  par:4, hdcp: 1, back:435, reg:374, ladies:319 },
        { hole:6,  par:3, hdcp:13, back:174, reg:163, ladies:151 },
        { hole:7,  par:4, hdcp:11, back:439, reg:421, ladies:313 },
        { hole:8,  par:5, hdcp: 5, back:551, reg:505, ladies:444 },
        { hole:9,  par:4, hdcp:17, back:373, reg:368, ladies:348 },
      ]
    },
    {
      name: "中コース", holes: [
        { hole:10, par:5, hdcp:10, back:489, reg:465, ladies:425 },
        { hole:11, par:4, hdcp:16, back:387, reg:367, ladies:328 },
        { hole:12, par:4, hdcp: 4, back:420, reg:390, ladies:315 },
        { hole:13, par:3, hdcp:14, back:196, reg:171, ladies:152 },
        { hole:14, par:4, hdcp: 2, back:410, reg:388, ladies:309 },
        { hole:15, par:4, hdcp: 8, back:380, reg:351, ladies:337 },
        { hole:16, par:3, hdcp:18, back:159, reg:154, ladies:145 },
        { hole:17, par:5, hdcp: 6, back:564, reg:508, ladies:445 },
        { hole:18, par:4, hdcp:12, back:363, reg:350, ladies:338 },
      ]
    },
    {
      name: "西コース", holes: [
        { hole:1,  par:5, hdcp: 5, back:502, reg:482, ladies:438 },
        { hole:2,  par:4, hdcp: 8, back:373, reg:340, ladies:316 },
        { hole:3,  par:4, hdcp: 2, back:432, reg:411, ladies:350 },
        { hole:4,  par:3, hdcp: 7, back:161, reg:152, ladies:132 },
        { hole:5,  par:4, hdcp: 4, back:338, reg:316, ladies:293 },
        { hole:6,  par:4, hdcp: 1, back:407, reg:381, ladies:288 },
        { hole:7,  par:3, hdcp: 9, back:173, reg:153, ladies:132 },
        { hole:8,  par:4, hdcp: 6, back:391, reg:371, ladies:281 },
        { hole:9,  par:5, hdcp: 3, back:537, reg:496, ladies:471 },
      ]
    },
  ],
};

// 総武カントリークラブ 印旛コース（18H）
// グリーン: ベント1グリーン
const SOBU_INBA_COURSE = {
  name: "総武CC 印旛コース",
  holes: [
    { hole:1,  par:5, hdcp:15, back:493, reg:473, ladies:402 },
    { hole:2,  par:4, hdcp: 9, back:383, reg:350, ladies:317 },
    { hole:3,  par:4, hdcp:13, back:370, reg:328, ladies:287 },
    { hole:4,  par:3, hdcp:17, back:170, reg:140, ladies:132 },
    { hole:5,  par:5, hdcp: 3, back:513, reg:480, ladies:419 },
    { hole:6,  par:3, hdcp: 7, back:202, reg:160, ladies:130 },
    { hole:7,  par:4, hdcp: 5, back:420, reg:383, ladies:347 },
    { hole:8,  par:4, hdcp: 1, back:452, reg:409, ladies:340 },
    { hole:9,  par:4, hdcp:11, back:377, reg:318, ladies:259 },
    { hole:10, par:5, hdcp:14, back:498, reg:478, ladies:412 },
    { hole:11, par:4, hdcp:18, back:382, reg:355, ladies:313 },
    { hole:12, par:4, hdcp: 8, back:427, reg:390, ladies:314 },
    { hole:13, par:5, hdcp: 2, back:506, reg:474, ladies:410 },
    { hole:14, par:3, hdcp: 6, back:183, reg:166, ladies:133 },
    { hole:15, par:4, hdcp: 4, back:416, reg:375, ladies:317 },
    { hole:16, par:4, hdcp:16, back:354, reg:312, ladies:301 },
    { hole:17, par:3, hdcp:12, back:167, reg:131, ladies:100 },
    { hole:18, par:4, hdcp:10, back:420, reg:399, ladies:344 },
  ],
};

// 総武カントリークラブ 北コース（9H×2周）
// グリーン: ベント・高麗の2グリーン / ティー: Blue=BACK / White=REG / Red=LADIES
const SOBU_KITA_COURSE = {
  name: "総武CC 北コース",
  holes: [
    { hole:1, par:4, hdcp:9, back:303, reg:273, ladies:278 },
    { hole:2, par:4, hdcp:5, back:367, reg:348, ladies:208 },
    { hole:3, par:4, hdcp:6, back:339, reg:317, ladies:282 },
    { hole:4, par:3, hdcp:4, back:188, reg:166, ladies:166 },
    { hole:5, par:5, hdcp:3, back:552, reg:464, ladies:390 },
    { hole:6, par:4, hdcp:1, back:394, reg:373, ladies:233 },
    { hole:7, par:3, hdcp:8, back:144, reg:120, ladies:120 },
    { hole:8, par:4, hdcp:2, back:384, reg:370, ladies:309 },
    { hole:9, par:4, hdcp:7, back:328, reg:324, ladies:244 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 中山カントリークラブ コースデータ
// BENT距離：楽天GORA, 高麗OUT距離：ShotNavi
// 高麗INはホール別データ未公開のため合計値のみ参考掲載
// ─────────────────────────────────────────────────────────────────────────────
const NAKAYAMA_COURSE = {
  name: "中山カントリークラブ",
  holes: [
    // OUT (1-9)
    { hole:1,  par:5, hdcp:5, bent:{back:524,reg:504,gold:465,ladies:465}, korai:{back:516,reg:496,ladies:457} },
    { hole:2,  par:4, hdcp:2, bent:{back:396,reg:377,gold:365,ladies:272}, korai:{back:406,reg:387,ladies:374} },
    { hole:3,  par:4, hdcp:8, bent:{back:396,reg:372,gold:355,ladies:310}, korai:{back:401,reg:377,ladies:363} },
    { hole:4,  par:4, hdcp:1, bent:{back:401,reg:360,gold:341,ladies:341}, korai:{back:418,reg:377,ladies:358} },
    { hole:5,  par:3, hdcp:7, bent:{back:166,reg:147,gold:110,ladies: 82}, korai:{back:197,reg:178,ladies:151} },
    { hole:6,  par:5, hdcp:4, bent:{back:519,reg:479,gold:461,ladies:461}, korai:{back:522,reg:482,ladies:464} },
    { hole:7,  par:3, hdcp:3, bent:{back:166,reg:153,gold:130,ladies:130}, korai:{back:198,reg:185,ladies:162} },
    { hole:8,  par:4, hdcp:9, bent:{back:381,reg:357,gold:349,ladies:349}, korai:{back:385,reg:361,ladies:353} },
    { hole:9,  par:4, hdcp:6, bent:{back:362,reg:332,gold:320,ladies:320}, korai:{back:383,reg:353,ladies:341} },
    // IN (10-18)  高麗距離はBENTとの比率から推定 ※公式未公開
    { hole:10, par:5, hdcp:5, bent:{back:521,reg:501,gold:454,ladies:454}, korai:{back:534,reg:513,ladies:465} },
    { hole:11, par:4, hdcp:8, bent:{back:398,reg:375,gold:358,ladies:318}, korai:{back:408,reg:384,ladies:326} },
    { hole:12, par:4, hdcp:2, bent:{back:431,reg:398,gold:365,ladies:275}, korai:{back:441,reg:407,ladies:282} },
    { hole:13, par:5, hdcp:4, bent:{back:512,reg:488,gold:472,ladies:387}, korai:{back:524,reg:500,ladies:396} },
    { hole:14, par:4, hdcp:1, bent:{back:421,reg:396,gold:361,ladies:308}, korai:{back:431,reg:405,ladies:316} },
    { hole:15, par:3, hdcp:7, bent:{back:156,reg:148,gold:111,ladies: 99}, korai:{back:160,reg:152,ladies:101} },
    { hole:16, par:4, hdcp:3, bent:{back:394,reg:377,gold:367,ladies:297}, korai:{back:404,reg:386,ladies:304} },
    { hole:17, par:3, hdcp:9, bent:{back:174,reg:153,gold:132,ladies:132}, korai:{back:178,reg:157,ladies:135} },
    { hole:18, par:4, hdcp:6, bent:{back:377,reg:348,gold:336,ladies:336}, korai:{back:386,reg:357,ladies:344} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// カメリアヒルズカントリークラブ（18H・1グリーン・Bent）
// 出典：公式サイト https://www.camelliahills.com/course/
// ─────────────────────────────────────────────────────────────────────────────
const CAMELLIA_HILLS_COURSE = {
  name: "カメリアヒルズカントリークラブ",
  holes: [
    { hole:1,  par:5, hdcp: 9, back:570, reg:537, front:503, ladies:457 },
    { hole:2,  par:4, hdcp:15, back:324, reg:304, front:282, ladies:243 },
    { hole:3,  par:4, hdcp: 3, back:425, reg:400, front:374, ladies:337 },
    { hole:4,  par:3, hdcp:13, back:158, reg:133, front:112, ladies:112 },
    { hole:5,  par:4, hdcp: 7, back:328, reg:310, front:289, ladies:250 },
    { hole:6,  par:4, hdcp: 1, back:465, reg:436, front:405, ladies:344 },
    { hole:7,  par:4, hdcp:17, back:308, reg:289, front:267, ladies:267 },
    { hole:8,  par:5, hdcp: 5, back:520, reg:500, front:477, ladies:430 },
    { hole:9,  par:3, hdcp:11, back:189, reg:165, front:140, ladies:108 },
    { hole:10, par:4, hdcp:10, back:417, reg:399, front:377, ladies:347 },
    { hole:11, par:4, hdcp: 4, back:432, reg:413, front:387, ladies:317 },
    { hole:12, par:4, hdcp:16, back:383, reg:360, front:336, ladies:307 },
    { hole:13, par:3, hdcp: 8, back:188, reg:167, front:144, ladies:115 },
    { hole:14, par:5, hdcp: 2, back:544, reg:524, front:502, ladies:472 },
    { hole:15, par:3, hdcp:14, back:173, reg:156, front:134, ladies:134 },
    { hole:16, par:4, hdcp:12, back:382, reg:357, front:332, ladies:299 },
    { hole:17, par:4, hdcp:18, back:359, reg:337, front:311, ladies:269 },
    { hole:18, par:5, hdcp: 6, back:517, reg:498, front:479, ladies:449 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// カレドニアン・ゴルフクラブ（18H・1グリーン・Bent）
// 出典：公式サイト https://www.caledoniangolf.net/course/
// ※HDCP: H1-H5,H10-H12は公式確認済 / H6-H9,H13-H18は推定値
// ─────────────────────────────────────────────────────────────────────────────
const CALEDONIAN_GC_COURSE = {
  name: "カレドニアン・ゴルフクラブ",
  holes: [
    { hole:1,  par:4, hdcp: 3, gold:427, blue:385, white:358, red:311 },
    { hole:2,  par:5, hdcp: 9, gold:570, blue:510, white:480, red:410 },
    { hole:3,  par:3, hdcp:15, gold:204, blue:165, white:147, red:129 },
    { hole:4,  par:4, hdcp: 7, gold:405, blue:360, white:347, red:292 },
    { hole:5,  par:3, hdcp:13, gold:175, blue:160, white:144, red:108 },
    { hole:6,  par:5, hdcp:11, gold:560, blue:522, white:486, red:454 }, // HDCP推定
    { hole:7,  par:4, hdcp: 5, gold:410, blue:393, white:381, red:291 }, // HDCP推定
    { hole:8,  par:4, hdcp: 1, gold:474, blue:424, white:403, red:364 }, // HDCP推定
    { hole:9,  par:4, hdcp:17, gold:455, blue:440, white:415, red:355 }, // HDCP推定
    { hole:10, par:4, hdcp: 4, gold:435, blue:375, white:350, red:321 },
    { hole:11, par:4, hdcp:16, gold:429, blue:360, white:342, red:294 },
    { hole:12, par:3, hdcp:10, gold:220, blue:198, white:185, red:150 },
    { hole:13, par:4, hdcp: 6, gold:407, blue:377, white:355, red:324 }, // HDCP推定
    { hole:14, par:4, hdcp:14, gold:392, blue:385, white:357, red:322 }, // HDCP推定
    { hole:15, par:5, hdcp: 8, gold:498, blue:498, white:470, red:419 }, // HDCP推定
    { hole:16, par:4, hdcp:18, gold:343, blue:343, white:330, red:268 }, // HDCP推定
    { hole:17, par:3, hdcp:12, gold:195, blue:163, white:150, red:123 }, // HDCP推定
    { hole:18, par:5, hdcp: 2, gold:545, blue:515, white:486, red:469 }, // HDCP推定
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 鷹之台カンツリー倶楽部（18H・2グリーン・ベント/コーライ）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/353103/course-info/
// ※ベントグリーン距離のみ収録。コーライグリーン距離は未収録。
// ─────────────────────────────────────────────────────────────────────────────
const TAKANODAI_CC_COURSE = {
  name: "鷹之台カンツリー倶楽部",
  holes: [
    // bent: {fullback, back, reg, front, ladies}
    { hole:1,  par:4, hdcp:11, bent:{fullback:427,back:427,reg:402,front:375,ladies:357} },
    { hole:2,  par:4, hdcp: 3, bent:{fullback:399,back:399,reg:371,front:347,ladies:332} },
    { hole:3,  par:3, hdcp:17, bent:{fullback:186,back:168,reg:147,front:133,ladies:133} },
    { hole:4,  par:5, hdcp: 7, bent:{fullback:538,back:538,reg:517,front:499,ladies:471} },
    { hole:5,  par:4, hdcp: 1, bent:{fullback:416,back:416,reg:393,front:364,ladies:348} },
    { hole:6,  par:5, hdcp: 5, bent:{fullback:590,back:564,reg:545,front:516,ladies:483} },
    { hole:7,  par:3, hdcp:15, bent:{fullback:205,back:205,reg:186,front:175,ladies:155} },
    { hole:8,  par:4, hdcp:13, bent:{fullback:368,back:361,reg:339,front:329,ladies:329} },
    { hole:9,  par:4, hdcp: 9, bent:{fullback:411,back:411,reg:393,front:370,ladies:357} },
    { hole:10, par:4, hdcp: 6, bent:{fullback:447,back:447,reg:414,front:397,ladies:367} },
    { hole:11, par:4, hdcp:12, bent:{fullback:406,back:406,reg:372,front:343,ladies:329} },
    { hole:12, par:4, hdcp: 4, bent:{fullback:363,back:363,reg:338,front:319,ladies:303} },
    { hole:13, par:3, hdcp:18, bent:{fullback:171,back:171,reg:150,front:144,ladies:144} },
    { hole:14, par:5, hdcp: 2, bent:{fullback:606,back:586,reg:536,front:508,ladies:494} },
    { hole:15, par:3, hdcp:14, bent:{fullback:233,back:233,reg:205,front:191,ladies:171} },
    { hole:16, par:4, hdcp: 8, bent:{fullback:434,back:417,reg:397,front:369,ladies:351} }, // ladies推定
    { hole:17, par:4, hdcp:10, bent:{fullback:404,back:404,reg:374,front:350,ladies:333} }, // ladies推定
    { hole:18, par:5, hdcp:16, bent:{fullback:528,back:528,reg:506,front:489,ladies:465} }, // ladies推定
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 太平洋クラブ 八千代コース（18H・2グリーン Bent A/B）
// 出典：公式サイト https://www.taiheiyoclub.co.jp/course/yachiyo/information.html
// ─────────────────────────────────────────────────────────────────────────────
const TAIHEIYOCLUB_YACHIYO_COURSE = {
  name: "太平洋クラブ 八千代コース",
  holes: [
    // a/b: {rt, mt, ft, lt}  RT=レギュラー, MT=ミドル, FT=フロント, LT=レディース
    { hole:1,  par:5, hdcp:15, a:{rt:494,mt:474,ft:466,lt:393}, b:{rt:486,mt:466,ft:458,lt:386} },
    { hole:2,  par:4, hdcp: 9, a:{rt:360,mt:335,ft:324,lt:324}, b:{rt:388,mt:363,ft:352,lt:352} },
    { hole:3,  par:3, hdcp: 3, a:{rt:198,mt:182,ft:161,lt:161}, b:{rt:158,mt:142,ft:121,lt:121} },
    { hole:4,  par:5, hdcp:13, a:{rt:542,mt:503,ft:472,lt:442}, b:{rt:525,mt:486,ft:455,lt:425} },
    { hole:5,  par:4, hdcp: 7, a:{rt:358,mt:338,ft:327,lt:327}, b:{rt:336,mt:316,ft:305,lt:305} },
    { hole:6,  par:3, hdcp: 1, a:{rt:179,mt:159,ft:149,lt:149}, b:{rt:156,mt:136,ft:126,lt:126} },
    { hole:7,  par:4, hdcp:11, a:{rt:386,mt:324,ft:300,lt:300}, b:{rt:363,mt:301,ft:277,lt:277} },
    { hole:8,  par:4, hdcp: 5, a:{rt:367,mt:362,ft:354,lt:354}, b:{rt:346,mt:341,ft:333,lt:333} },
    { hole:9,  par:4, hdcp:17, a:{rt:334,mt:324,ft:310,lt:310}, b:{rt:319,mt:309,ft:295,lt:295} },
    { hole:10, par:4, hdcp:10, a:{rt:329,mt:314,ft:294,lt:294}, b:{rt:323,mt:308,ft:288,lt:288} },
    { hole:11, par:5, hdcp:16, a:{rt:500,mt:485,ft:452,lt:401}, b:{rt:518,mt:503,ft:470,lt:419} },
    { hole:12, par:4, hdcp: 4, a:{rt:384,mt:362,ft:342,lt:342}, b:{rt:385,mt:363,ft:343,lt:343} },
    { hole:13, par:4, hdcp:14, a:{rt:294,mt:278,ft:272,lt:272}, b:{rt:307,mt:291,ft:285,lt:285} },
    { hole:14, par:3, hdcp: 8, a:{rt:161,mt:152,ft:142,lt:142}, b:{rt:177,mt:170,ft:158,lt:158} },
    { hole:15, par:4, hdcp: 2, a:{rt:376,mt:355,ft:342,lt:342}, b:{rt:347,mt:326,ft:313,lt:313} },
    { hole:16, par:5, hdcp:18, a:{rt:533,mt:528,ft:439,lt:439}, b:{rt:525,mt:520,ft:431,lt:431} },
    { hole:17, par:4, hdcp: 6, a:{rt:338,mt:324,ft:318,lt:318}, b:{rt:305,mt:291,ft:285,lt:285} },
    { hole:18, par:3, hdcp:12, a:{rt:118,mt: 97,ft: 91,lt: 91}, b:{rt:125,mt:108,ft:107,lt:107} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// グレンオークスカントリークラブ（18H・1グリーン・Bent）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/351303/course-info/
// ─────────────────────────────────────────────────────────────────────────────
const GLEN_OAKS_CC_COURSE = {
  name: "グレンオークスカントリークラブ",
  holes: [
    // black/blue/white/green/red
    { hole:1,  par:4, hdcp:11, black:388, blue:359, white:324, green:294, red:294 },
    { hole:2,  par:4, hdcp: 3, black:421, blue:392, white:363, green:337, red:337 },
    { hole:3,  par:4, hdcp: 1, black:427, blue:411, white:382, green:360, red:360 },
    { hole:4,  par:5, hdcp:15, black:516, blue:494, white:458, green:426, red:397 },
    { hole:5,  par:3, hdcp:17, black:150, blue:132, white:120, green:102, red:102 },
    { hole:6,  par:4, hdcp:13, black:335, blue:316, white:293, green:271, red:271 },
    { hole:7,  par:4, hdcp: 9, black:405, blue:383, white:351, green:316, red:316 },
    { hole:8,  par:3, hdcp: 5, black:223, blue:195, white:171, green:136, red:108 },
    { hole:9,  par:5, hdcp: 7, black:533, blue:508, white:484, green:458, red:408 },
    { hole:10, par:4, hdcp: 6, black:460, blue:430, white:411, green:384, red:321 },
    { hole:11, par:5, hdcp: 4, black:563, blue:532, white:508, green:471, red:407 },
    { hole:12, par:4, hdcp:12, black:401, blue:367, white:322, green:208, red:208 },
    { hole:13, par:3, hdcp:16, black:199, blue:173, white:146, green:121, red:121 },
    { hole:14, par:4, hdcp:14, black:388, blue:360, white:336, green:317, red:284 },
    { hole:15, par:4, hdcp: 8, black:406, blue:362, white:328, green:295, red:295 },
    { hole:16, par:4, hdcp: 2, black:439, blue:412, white:392, green:365, red:314 },
    { hole:17, par:3, hdcp:18, black:170, blue:162, white:144, green:101, red:101 },
    { hole:18, par:5, hdcp:10, black:548, blue:521, white:503, green:478, red:441 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// オーク・ヒルズカントリークラブ（18H・1グリーン・Bent）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/350504/course-info/
// ─────────────────────────────────────────────────────────────────────────────
const OAK_HILLS_CC_COURSE = {
  name: "オーク・ヒルズカントリークラブ",
  holes: [
    // black(ブラック)/blue(ブルー)/white(ホワイト)/green(グリーン)/red(レッド)
    { hole:1,  par:4, hdcp:11, black:435, blue:406, white:374, green:300, red:300 },
    { hole:2,  par:4, hdcp: 3, black:400, blue:382, white:342, green:235, red:235 },
    { hole:3,  par:5, hdcp:17, black:493, blue:483, white:441, green:412, red:412 },
    { hole:4,  par:3, hdcp: 5, black:218, blue:201, white:185, green:125, red:125 },
    { hole:5,  par:4, hdcp:13, black:374, blue:358, white:315, green:291, red:291 },
    { hole:6,  par:4, hdcp: 1, black:433, blue:398, white:369, green:309, red:309 },
    { hole:7,  par:5, hdcp: 9, black:569, blue:530, white:520, green:463, red:401 },
    { hole:8,  par:3, hdcp:15, black:207, blue:187, white:167, green:129, red:129 },
    { hole:9,  par:4, hdcp: 7, black:384, blue:367, white:357, green:320, red:320 },
    { hole:10, par:5, hdcp:18, black:510, blue:482, white:472, green:446, red:422 },
    { hole:11, par:3, hdcp: 6, black:190, blue:180, white:175, green:146, red:108 },
    { hole:12, par:4, hdcp:14, black:391, blue:381, white:357, green:313, red:313 },
    { hole:13, par:4, hdcp: 8, black:346, blue:332, white:327, green:299, red:299 },
    { hole:14, par:3, hdcp:16, black:182, blue:151, white:135, green:111, red:111 },
    { hole:15, par:4, hdcp: 2, black:430, blue:413, white:408, green:353, red:353 },
    { hole:16, par:5, hdcp:12, black:535, blue:515, white:501, green:458, red:401 },
    { hole:17, par:4, hdcp:10, black:368, blue:359, white:354, green:318, red:318 },
    { hole:18, par:4, hdcp: 4, black:435, blue:407, white:359, green:304, red:304 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 習志野カントリークラブ キングコース（36H中のKing18H）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/354102/course-info/
// 2グリーン（A/B どちらもベント）
// ─────────────────────────────────────────────────────────────────────────────
const NARASHINO_CC_KING_COURSE = {
  name: "習志野カントリークラブ キングコース",
  holes: [
    // a: Aグリーン {blue, white, red}, b: Bグリーン {blue, white, red}
    { hole:1,  par:4, hdcp: 3, a:{blue:393,white:379,red:279}, b:{blue:372,white:358,red:258} },
    { hole:2,  par:4, hdcp:17, a:{blue:362,white:347,red:310}, b:{blue:360,white:345,red:308} },
    { hole:3,  par:3, hdcp: 9, a:{blue:174,white:159,red:136}, b:{blue:156,white:141,red:118} },
    { hole:4,  par:5, hdcp: 1, a:{blue:608,white:583,red:533}, b:{blue:613,white:588,red:538} },
    { hole:5,  par:4, hdcp: 7, a:{blue:444,white:420,red:315}, b:{blue:412,white:388,red:283} },
    { hole:6,  par:3, hdcp:13, a:{blue:171,white:159,red:135}, b:{blue:146,white:134,red:110} },
    { hole:7,  par:4, hdcp: 5, a:{blue:399,white:377,red:283}, b:{blue:374,white:352,red:258} },
    { hole:8,  par:5, hdcp:15, a:{blue:520,white:498,red:413}, b:{blue:506,white:484,red:399} },
    { hole:9,  par:4, hdcp:11, a:{blue:393,white:377,red:342}, b:{blue:362,white:346,red:311} },
    { hole:10, par:4, hdcp: 4, a:{blue:376,white:366,red:306}, b:{blue:368,white:358,red:298} },
    { hole:11, par:5, hdcp:18, a:{blue:529,white:511,red:466}, b:{blue:514,white:496,red:451} },
    { hole:12, par:4, hdcp:10, a:{blue:405,white:392,red:345}, b:{blue:394,white:381,red:334} },
    { hole:13, par:3, hdcp:16, a:{blue:166,white:151,red:118}, b:{blue:154,white:139,red:110} },
    { hole:14, par:4, hdcp: 8, a:{blue:425,white:415,red:315}, b:{blue:406,white:396,red:296} },
    { hole:15, par:4, hdcp: 2, a:{blue:429,white:409,red:303}, b:{blue:415,white:395,red:289} },
    { hole:16, par:3, hdcp:14, a:{blue:183,white:164,red:136}, b:{blue:178,white:159,red:131} },
    { hole:17, par:4, hdcp: 6, a:{blue:461,white:439,red:384}, b:{blue:457,white:435,red:380} },
    { hole:18, par:5, hdcp:12, a:{blue:573,white:532,red:460}, b:{blue:547,white:506,red:434} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 佐原カントリークラブ（18H・1グリーン・Bent）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/352103/course-info/
// ティー: Blue(=Back) / White(=Reg) / Red(=Ladies)
// ─────────────────────────────────────────────────────────────────────────────
const SAWARA_CC_COURSE = {
  name: "佐原カントリークラブ",
  holes: [
    { hole:1,  par:4, hdcp:15, back:370, reg:353, ladies:270 },
    { hole:2,  par:4, hdcp: 9, back:367, reg:341, ladies:293 },
    { hole:3,  par:3, hdcp: 3, back:168, reg:149, ladies:134 },
    { hole:4,  par:4, hdcp: 1, back:360, reg:341, ladies:305 },
    { hole:5,  par:4, hdcp:13, back:358, reg:341, ladies:274 },
    { hole:6,  par:5, hdcp: 7, back:526, reg:491, ladies:385 },
    { hole:7,  par:4, hdcp:11, back:366, reg:345, ladies:222 },
    { hole:8,  par:3, hdcp:17, back:150, reg:126, ladies:103 },
    { hole:9,  par:5, hdcp: 5, back:500, reg:476, ladies:422 },
    { hole:10, par:5, hdcp: 4, back:545, reg:492, ladies:400 },
    { hole:11, par:4, hdcp:10, back:410, reg:386, ladies:260 },
    { hole:12, par:4, hdcp:16, back:355, reg:336, ladies:281 },
    { hole:13, par:3, hdcp:14, back:169, reg:149, ladies: 84 },
    { hole:14, par:4, hdcp: 2, back:389, reg:365, ladies:280 },
    { hole:15, par:4, hdcp: 8, back:376, reg:351, ladies:300 },
    { hole:16, par:3, hdcp:12, back:172, reg:158, ladies:118 },
    { hole:17, par:4, hdcp:18, back:367, reg:336, ladies:250 },
    { hole:18, par:5, hdcp: 6, back:515, reg:509, ladies:412 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東庄ゴルフ倶楽部（18H・1グリーン・Bent/Pencross）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/353506/course-info/
// ティー: Blue / White / Silver / Red
// ─────────────────────────────────────────────────────────────────────────────
const TOSHO_GC_COURSE = {
  name: "東庄ゴルフ倶楽部",
  holes: [
    { hole:1,  par:4, hdcp:15, back:373, reg:350, silver:318, ladies:288 },
    { hole:2,  par:5, hdcp: 9, back:599, reg:565, silver:528, ladies:468 },
    { hole:3,  par:4, hdcp: 3, back:428, reg:397, silver:347, ladies:307 },
    { hole:4,  par:3, hdcp:13, back:192, reg:172, silver:150, ladies:129 },
    { hole:5,  par:4, hdcp: 1, back:385, reg:358, silver:358, ladies:326 },
    { hole:6,  par:4, hdcp: 7, back:355, reg:324, silver:303, ladies:285 },
    { hole:7,  par:3, hdcp:17, back:188, reg:162, silver:140, ladies:121 },
    { hole:8,  par:4, hdcp: 5, back:392, reg:368, silver:346, ladies:326 },
    { hole:9,  par:5, hdcp:11, back:561, reg:520, silver:469, ladies:386 },
    { hole:10, par:4, hdcp:10, back:425, reg:399, silver:375, ladies:355 },
    { hole:11, par:5, hdcp: 4, back:543, reg:511, silver:487, ladies:455 },
    { hole:12, par:3, hdcp:16, back:180, reg:160, silver:141, ladies:123 },
    { hole:13, par:4, hdcp:14, back:370, reg:350, silver:330, ladies:308 },
    { hole:14, par:4, hdcp: 2, back:451, reg:409, silver:386, ladies:351 },
    { hole:15, par:4, hdcp: 8, back:382, reg:363, silver:363, ladies:316 },
    { hole:16, par:3, hdcp:18, back:200, reg:184, silver:151, ladies:151 },
    { hole:17, par:5, hdcp: 6, back:565, reg:537, silver:513, ladies:486 },
    { hole:18, par:4, hdcp:12, back:407, reg:387, silver:367, ladies:344 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// CPGカントリークラブ（ちばパブ）（18H・1グリーン）
// 出典：公式サイト https://www.cpg.co.jp/course/
// ティー: BACK / REG / LADIES
// ─────────────────────────────────────────────────────────────────────────────
const CPG_CC_COURSE = {
  name: "CPGカントリークラブ",
  holes: [
    { hole:1,  par:5, hdcp: 3, back:495, reg:485, ladies:450 },
    { hole:2,  par:4, hdcp:11, back:385, reg:370, ladies:320 },
    { hole:3,  par:3, hdcp:17, back:160, reg:150, ladies:135 },
    { hole:4,  par:4, hdcp: 5, back:430, reg:410, ladies:330 },
    { hole:5,  par:4, hdcp:13, back:390, reg:370, ladies:320 },
    { hole:6,  par:4, hdcp: 7, back:300, reg:280, ladies:265 },
    { hole:7,  par:3, hdcp:15, back:150, reg:135, ladies:120 },
    { hole:8,  par:4, hdcp: 1, back:450, reg:430, ladies:340 },
    { hole:9,  par:5, hdcp: 9, back:495, reg:475, ladies:410 },
    { hole:10, par:5, hdcp: 2, back:525, reg:510, ladies:460 },
    { hole:11, par:3, hdcp:18, back:170, reg:160, ladies:130 },
    { hole:12, par:4, hdcp: 8, back:380, reg:360, ladies:330 },
    { hole:13, par:4, hdcp:12, back:420, reg:405, ladies:320 },
    { hole:14, par:4, hdcp: 6, back:450, reg:430, ladies:350 },
    { hole:15, par:3, hdcp:16, back:170, reg:155, ladies:150 },
    { hole:16, par:5, hdcp: 4, back:495, reg:480, ladies:380 },
    { hole:17, par:4, hdcp:14, back:300, reg:285, ladies:260 },
    { hole:18, par:4, hdcp:10, back:420, reg:410, ladies:360 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東京国際空港ゴルフ倶楽部（18H・2グリーン ベント/コーライ）
// 出典（ベント）：スコアカード実物（ユーザー提供）・GDO照合済み
// 出典（コーライ）：GDO https://reserve.golfdigest.co.jp/golf-course/353503/course-info/
//   ※コーライデータは公式未確認のためUI非表示（holesデータのみ保持）
// ティー: BT(バック)/RT(レギュラー)/LT(レディース)
// ─────────────────────────────────────────────────────────────────────────────
const TOKYO_INTL_AIRPORT_GC_COURSE = {
  name: "東京国際空港ゴルフ倶楽部",
  holes: [
    { hole:1,  par:4, hdcp: 3, bent:{back:422,reg:410,ladies:343}, korai:{back:408,reg:396,ladies:329} },
    { hole:2,  par:4, hdcp:15, bent:{back:374,reg:348,ladies:330}, korai:{back:340,reg:314,ladies:314} },
    { hole:3,  par:3, hdcp: 7, bent:{back:207,reg:161,ladies:138}, korai:{back:207,reg:144,ladies:121} },
    { hole:4,  par:4, hdcp: 5, bent:{back:401,reg:380,ladies:380}, korai:{back:407,reg:386,ladies:386} },
    { hole:5,  par:5, hdcp:11, bent:{back:493,reg:474,ladies:376}, korai:{back:473,reg:451,ladies:356} },
    { hole:6,  par:3, hdcp:17, bent:{back:134,reg:129,ladies:114}, korai:{back:117,reg:112,ladies:112} },
    { hole:7,  par:4, hdcp: 1, bent:{back:423,reg:385,ladies:344}, korai:{back:411,reg:373,ladies:332} },
    { hole:8,  par:4, hdcp:13, bent:{back:383,reg:350,ladies:319}, korai:{back:377,reg:344,ladies:312} },
    { hole:9,  par:5, hdcp: 9, bent:{back:538,reg:516,ladies:420}, korai:{back:527,reg:505,ladies:409} },
    { hole:10, par:4, hdcp: 2, bent:{back:404,reg:382,ladies:306}, korai:{back:381,reg:359,ladies:283} },
    { hole:11, par:5, hdcp:16, bent:{back:492,reg:475,ladies:453}, korai:{back:472,reg:455,ladies:433} },
    { hole:12, par:3, hdcp:10, bent:{back:201,reg:185,ladies:164}, korai:{back:184,reg:168,ladies:147} },
    { hole:13, par:4, hdcp:14, bent:{back:369,reg:339,ladies:319}, korai:{back:362,reg:332,ladies:312} },
    { hole:14, par:4, hdcp:18, bent:{back:376,reg:365,ladies:350}, korai:{back:356,reg:345,ladies:336} },
    { hole:15, par:4, hdcp: 6, bent:{back:392,reg:375,ladies:304}, korai:{back:389,reg:372,ladies:301} },
    { hole:16, par:3, hdcp: 8, bent:{back:199,reg:175,ladies:153}, korai:{back:178,reg:154,ladies:132} },
    { hole:17, par:5, hdcp: 4, bent:{back:531,reg:498,ladies:439}, korai:{back:527,reg:494,ladies:435} },
    { hole:18, par:4, hdcp:12, bent:{back:385,reg:353,ladies:318}, korai:{back:380,reg:348,ladies:313} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 泉カントリー倶楽部 East/West/Southコース（27H 各9H）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/350201/course-info/
// 2グリーン（A/B どちらもニューベント）
// ティー: Back/Reg/Front/Gold(=Ladies) × A/B グリーン
// ─────────────────────────────────────────────────────────────────────────────
const IZUMI_CC_EAST_COURSE = {
  name: "Ｅａｓｔ",
  holes: [
    { hole:1, par:5, hdcp:5, a:{back:453,reg:435,front:425,gold:409}, b:{back:447,reg:429,front:419,gold:403} },
    { hole:2, par:4, hdcp:2, a:{back:417,reg:394,front:385,gold:340}, b:{back:389,reg:366,front:357,gold:312} },
    { hole:3, par:3, hdcp:9, a:{back:204,reg:186,front:161,gold:126}, b:{back:202,reg:186,front:161,gold:126} },
    { hole:4, par:4, hdcp:7, a:{back:410,reg:390,front:365,gold:341}, b:{back:383,reg:363,front:338,gold:314} },
    { hole:5, par:4, hdcp:3, a:{back:362,reg:342,front:337,gold:332}, b:{back:361,reg:341,front:336,gold:331} },
    { hole:6, par:3, hdcp:8, a:{back:187,reg:167,front:154,gold:139}, b:{back:171,reg:153,front:138,gold:120} },
    { hole:7, par:4, hdcp:1, a:{back:432,reg:417,front:392,gold:342}, b:{back:420,reg:405,front:380,gold:330} },
    { hole:8, par:4, hdcp:6, a:{back:400,reg:360,front:352,gold:333}, b:{back:394,reg:354,front:346,gold:327} },
    { hole:9, par:5, hdcp:4, a:{back:496,reg:470,front:460,gold:439}, b:{back:495,reg:469,front:459,gold:438} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 泉カントリー倶楽部 Westコース（27H中の1コース）
// ─────────────────────────────────────────────────────────────────────────────
const IZUMI_CC_WEST_COURSE = {
  name: "Ｗｅｓｔ",
  holes: [
    { hole:1, par:5, hdcp:2, a:{back:567,reg:539,front:517,gold:488}, b:{back:544,reg:516,front:494,gold:465} },
    { hole:2, par:3, hdcp:9, a:{back:177,reg:153,front:151,gold:123}, b:{back:153,reg:130,front:125,gold:103} },
    { hole:3, par:4, hdcp:1, a:{back:432,reg:397,front:383,gold:370}, b:{back:406,reg:371,front:357,gold:344} },
    { hole:4, par:4, hdcp:5, a:{back:429,reg:402,front:367,gold:317}, b:{back:422,reg:395,front:360,gold:310} },
    { hole:5, par:4, hdcp:3, a:{back:369,reg:346,front:339,gold:331}, b:{back:366,reg:343,front:336,gold:328} },
    { hole:6, par:3, hdcp:8, a:{back:191,reg:175,front:162,gold:147}, b:{back:145,reg:133,front:120,gold:107} },
    { hole:7, par:4, hdcp:6, a:{back:379,reg:356,front:350,gold:337}, b:{back:376,reg:353,front:347,gold:334} },
    { hole:8, par:4, hdcp:7, a:{back:362,reg:339,front:329,gold:307}, b:{back:349,reg:329,front:316,gold:295} },
    { hole:9, par:5, hdcp:4, a:{back:527,reg:500,front:472,gold:428}, b:{back:525,reg:498,front:470,gold:426} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 泉カントリー倶楽部 Southコース（27H中の1コース）
// ─────────────────────────────────────────────────────────────────────────────
const IZUMI_CC_SOUTH_COURSE = {
  name: "Ｓｏｕｔｈ",
  holes: [
    { hole:1, par:4, hdcp:9, a:{back:340,reg:336,front:326,gold:318}, b:{back:312,reg:308,front:298,gold:290} },
    { hole:2, par:3, hdcp:6, a:{back:220,reg:202,front:179,gold:148}, b:{back:220,reg:200,front:173,gold:139} },
    { hole:3, par:4, hdcp:4, a:{back:359,reg:337,front:314,gold:288}, b:{back:353,reg:331,front:308,gold:282} },
    { hole:4, par:5, hdcp:3, a:{back:537,reg:503,front:488,gold:469}, b:{back:531,reg:497,front:482,gold:463} },
    { hole:5, par:3, hdcp:8, a:{back:181,reg:165,front:149,gold:130}, b:{back:173,reg:156,front:143,gold:120} },
    { hole:6, par:4, hdcp:7, a:{back:306,reg:292,front:288,gold:280}, b:{back:297,reg:283,front:279,gold:271} },
    { hole:7, par:4, hdcp:2, a:{back:400,reg:370,front:353,gold:330}, b:{back:382,reg:352,front:335,gold:312} },
    { hole:8, par:5, hdcp:1, a:{back:588,reg:564,front:536,gold:469}, b:{back:585,reg:561,front:533,gold:466} },
    { hole:9, par:4, hdcp:5, a:{back:451,reg:426,front:402,gold:328}, b:{back:432,reg:407,front:383,gold:309} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 船橋カントリークラブ（18H・2グリーン ベントA/ニューベントB）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/355302/course-info/
// ティー: Champ/Back/Reg/Front × A/B グリーン
// ─────────────────────────────────────────────────────────────────────────────
const FUNABASHI_CC_COURSE = {
  name: "船橋カントリークラブ",
  holes: [
    // a: Aグリーン, b: Bグリーン / {champ, back, reg, front}
    { hole:1,  par:4, hdcp:15, a:{champ:385,back:366,reg:355,front:317}, b:{champ:357,back:368,reg:357,front:319} },
    { hole:2,  par:4, hdcp: 3, a:{champ:452,back:426,reg:412,front:338}, b:{champ:420,back:394,reg:380,front:306} },
    { hole:3,  par:3, hdcp: 9, a:{champ:221,back:200,reg:166,front:154}, b:{champ:220,back:199,reg:165,front:153} },
    { hole:4,  par:5, hdcp: 7, a:{champ:509,back:477,reg:463,front:447}, b:{champ:508,back:476,reg:462,front:446} },
    { hole:5,  par:4, hdcp: 1, a:{champ:422,back:396,reg:377,front:324}, b:{champ:400,back:374,reg:355,front:302} },
    { hole:6,  par:3, hdcp:13, a:{champ:170,back:149,reg:140,front:126}, b:{champ:174,back:153,reg:144,front:130} },
    { hole:7,  par:5, hdcp:17, a:{champ:511,back:492,reg:478,front:425}, b:{champ:540,back:521,reg:507,front:454} },
    { hole:8,  par:4, hdcp: 5, a:{champ:434,back:409,reg:399,front:376}, b:{champ:401,back:376,reg:366,front:343} },
    { hole:9,  par:4, hdcp:11, a:{champ:398,back:379,reg:367,front:283}, b:{champ:399,back:380,reg:368,front:284} },
    { hole:10, par:4, hdcp:16, a:{champ:409,back:395,reg:376,front:362}, b:{champ:395,back:381,reg:362,front:348} },
    { hole:11, par:3, hdcp:10, a:{champ:200,back:182,reg:172,front:147}, b:{champ:179,back:161,reg:151,front:145} },
    { hole:12, par:4, hdcp: 4, a:{champ:399,back:375,reg:369,front:356}, b:{champ:377,back:353,reg:347,front:334} },
    { hole:13, par:5, hdcp:14, a:{champ:546,back:524,reg:510,front:451}, b:{champ:547,back:525,reg:511,front:452} },
    { hole:14, par:4, hdcp: 2, a:{champ:441,back:409,reg:389,front:311}, b:{champ:458,back:426,reg:406,front:328} },
    { hole:15, par:4, hdcp: 8, a:{champ:418,back:391,reg:385,front:365}, b:{champ:392,back:365,reg:359,front:339} },
    { hole:16, par:3, hdcp:18, a:{champ:190,back:179,reg:152,front:137}, b:{champ:188,back:177,reg:150,front:135} },
    { hole:17, par:4, hdcp: 6, a:{champ:398,back:381,reg:359,front:351}, b:{champ:370,back:353,reg:331,front:323} },
    { hole:18, par:5, hdcp:12, a:{champ:504,back:477,reg:461,front:437}, b:{champ:492,back:465,reg:449,front:425} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 習志野カントリークラブ クィーンコース（36H中のQueen18H）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/354102/course-info/
// 2グリーン（A/B どちらもベント）
// ティー: Blue/White/Red × A/B グリーン
// ─────────────────────────────────────────────────────────────────────────────
const NARASHINO_CC_QUEEN_COURSE = {
  name: "習志野カントリークラブ クィーンコース",
  holes: [
    { hole:1,  par:4, hdcp: 3, a:{blue:405,white:385,red:360}, b:{blue:389,white:369,red:344} },
    { hole:2,  par:4, hdcp: 9, a:{blue:350,white:328,red:305}, b:{blue:363,white:341,red:318} },
    { hole:3,  par:5, hdcp:15, a:{blue:535,white:514,red:475}, b:{blue:500,white:479,red:440} },
    { hole:4,  par:3, hdcp: 7, a:{blue:191,white:175,red:136}, b:{blue:188,white:172,red:133} },
    { hole:5,  par:4, hdcp:13, a:{blue:361,white:345,red:321}, b:{blue:329,white:313,red:289} },
    { hole:6,  par:4, hdcp: 5, a:{blue:356,white:342,red:316}, b:{blue:328,white:314,red:288} },
    { hole:7,  par:3, hdcp:17, a:{blue:167,white:157,red:130}, b:{blue:160,white:150,red:123} },
    { hole:8,  par:4, hdcp: 1, a:{blue:395,white:379,red:353}, b:{blue:373,white:357,red:331} },
    { hole:9,  par:5, hdcp:11, a:{blue:529,white:503,red:467}, b:{blue:512,white:486,red:450} },
    { hole:10, par:4, hdcp:10, a:{blue:381,white:353,red:322}, b:{blue:373,white:345,red:314} },
    { hole:11, par:4, hdcp:16, a:{blue:358,white:345,red:320}, b:{blue:323,white:310,red:285} },
    { hole:12, par:5, hdcp: 2, a:{blue:574,white:532,red:474}, b:{blue:587,white:545,red:487} },
    { hole:13, par:4, hdcp:12, a:{blue:360,white:344,red:317}, b:{blue:352,white:336,red:309} },
    { hole:14, par:4, hdcp:14, a:{blue:357,white:342,red:314}, b:{blue:363,white:348,red:320} },
    { hole:15, par:3, hdcp: 6, a:{blue:180,white:163,red:131}, b:{blue:177,white:160,red:128} },
    { hole:16, par:5, hdcp: 8, a:{blue:554,white:522,red:454}, b:{blue:546,white:514,red:446} },
    { hole:17, par:3, hdcp: 4, a:{blue:191,white:155,red:119}, b:{blue:187,white:151,red:115} },
    { hole:18, par:4, hdcp:18, a:{blue:335,white:324,red:306}, b:{blue:350,white:339,red:321} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 袖ヶ浦カンツリークラブ 新袖コース（18H・2グリーン NEWベント/OLDベント）
// 出典：袖ヶ浦カンツリークラブ公式サイト https://www.sodegaura.co.jp/shinsode-course/
// ティー: BT（バック）/ RT（レギュラー）/ FT（フロント）/ GT（ゴールド）
// ─────────────────────────────────────────────────────────────────────────────
const SODEGAURA_SHINSODE_COURSE = {
  name: "袖ヶ浦CC 新袖コース",
  holes: [
    { hole: 1, par:5, hdcp:15, new:{back:528, reg:511, front:475, gold:432}, old:{back:523, reg:506, front:469, gold:426} },
    { hole: 2, par:4, hdcp: 9, new:{back:403, reg:366, front:363, gold:330}, old:{back:377, reg:340, front:338, gold:307} },
    { hole: 3, par:4, hdcp: 3, new:{back:435, reg:393, front:391, gold:356}, old:{back:439, reg:397, front:394, gold:358} },
    { hole: 4, par:3, hdcp: 7, new:{back:193, reg:169, front:174, gold:158}, old:{back:171, reg:147, front:154, gold:139} },
    { hole: 5, par:4, hdcp: 1, new:{back:368, reg:352, front:331, gold:301}, old:{back:369, reg:353, front:331, gold:301} },
    { hole: 6, par:3, hdcp:13, new:{back:194, reg:181, front:175, gold:159}, old:{back:182, reg:169, front:163, gold:148} },
    { hole: 7, par:5, hdcp: 5, new:{back:545, reg:523, front:490, gold:446}, old:{back:533, reg:511, front:478, gold:434} },
    { hole: 8, par:4, hdcp:11, new:{back:381, reg:367, front:343, gold:312}, old:{back:378, reg:364, front:339, gold:308} },
    { hole: 9, par:4, hdcp:17, new:{back:396, reg:381, front:356, gold:324}, old:{back:400, reg:385, front:359, gold:326} },
    { hole:10, par:5, hdcp:10, new:{back:494, reg:478, front:456, gold:418}, old:{back:492, reg:476, front:454, gold:415} },
    { hole:11, par:3, hdcp:16, new:{back:178, reg:167, front:164, gold:151}, old:{back:155, reg:144, front:143, gold:131} },
    { hole:12, par:4, hdcp: 4, new:{back:432, reg:419, front:399, gold:365}, old:{back:403, reg:390, front:372, gold:340} },
    { hole:13, par:4, hdcp: 2, new:{back:436, reg:404, front:402, gold:369}, old:{back:437, reg:405, front:403, gold:369} },
    { hole:14, par:4, hdcp: 8, new:{back:378, reg:368, front:349, gold:320}, old:{back:380, reg:370, front:350, gold:321} },
    { hole:15, par:4, hdcp:14, new:{back:381, reg:363, front:352, gold:322}, old:{back:388, reg:370, front:358, gold:327} },
    { hole:16, par:4, hdcp: 6, new:{back:408, reg:390, front:377, gold:345}, old:{back:412, reg:394, front:380, gold:348} },
    { hole:17, par:3, hdcp:18, new:{back:189, reg:178, front:174, gold:160}, old:{back:183, reg:172, front:169, gold:154} },
    { hole:18, par:5, hdcp:12, new:{back:506, reg:488, front:467, gold:428}, old:{back:505, reg:487, front:466, gold:426} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 千葉松尾ゴルフクラブ（旧：ラフォーレ＆松尾ゴルフ倶楽部）（18H・1グリーン・Bent）
// 出典：公式サイト https://www.matsuogolfclub.jp/course/ / 楽天GORA
// ティー: B.T(バック) / R.T(レギュラー) / L.T(レディース)
// ─────────────────────────────────────────────────────────────────────────────
const CHIBA_MATSUO_GC_COURSE = {
  name: "千葉松尾ゴルフクラブ",
  holes: [
    { hole:1,  par:5, hdcp: 7, back:562, reg:531, ladies:482 },
    { hole:2,  par:4, hdcp:11, back:337, reg:316, ladies:260 },
    { hole:3,  par:4, hdcp: 1, back:437, reg:420, ladies:297 },
    { hole:4,  par:4, hdcp: 3, back:445, reg:424, ladies:322 },
    { hole:5,  par:3, hdcp:17, back:178, reg:159, ladies:123 },
    { hole:6,  par:5, hdcp: 5, back:587, reg:567, ladies:470 },
    { hole:7,  par:3, hdcp:15, back:164, reg:143, ladies:109 },
    { hole:8,  par:4, hdcp: 9, back:367, reg:339, ladies:282 },
    { hole:9,  par:4, hdcp:13, back:360, reg:336, ladies:280 },
    { hole:10, par:4, hdcp:14, back:339, reg:323, ladies:278 },
    { hole:11, par:3, hdcp:16, back:149, reg:132, ladies: 92 },
    { hole:12, par:4, hdcp:12, back:352, reg:323, ladies:269 },
    { hole:13, par:4, hdcp: 4, back:364, reg:348, ladies:281 },
    { hole:14, par:3, hdcp:18, back:140, reg:116, ladies: 90 },
    { hole:15, par:4, hdcp: 8, back:340, reg:326, ladies:288 },
    { hole:16, par:5, hdcp: 6, back:518, reg:503, ladies:454 },
    { hole:17, par:5, hdcp: 2, back:540, reg:504, ladies:458 },
    { hole:18, par:4, hdcp:10, back:382, reg:372, ladies:311 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// セントラルゴルフクラブ 東コース（18H・1グリーン・Bent）
// 出典：アコーディア公式 https://reserve.accordiagolf.com/golfCourse/ibaraki/central/layout
// ティー: Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const CENTRAL_GC_EAST_COURSE = {
  name: "セントラルゴルフクラブ 東コース",
  holes: [
    { hole:1,  par:5, hdcp: 3, blue:520, white:495, green:475, red:369 },
    { hole:2,  par:3, hdcp:15, blue:195, white:188, green:120, red:120 },
    { hole:3,  par:4, hdcp: 9, blue:390, white:366, green:350, red:320 },
    { hole:4,  par:4, hdcp: 1, blue:406, white:376, green:364, red:292 },
    { hole:5,  par:4, hdcp: 7, blue:330, white:306, green:296, red:250 },
    { hole:6,  par:3, hdcp:13, blue:185, white:175, green:146, red:120 },
    { hole:7,  par:5, hdcp: 5, blue:557, white:537, green:473, red:366 },
    { hole:8,  par:5, hdcp:11, blue:534, white:502, green:407, red:367 },
    { hole:9,  par:4, hdcp:17, blue:400, white:371, green:321, red:287 },
    { hole:10, par:4, hdcp: 4, blue:398, white:398, green:363, red:278 },
    { hole:11, par:4, hdcp:10, blue:340, white:336, green:330, red:302 },
    { hole:12, par:3, hdcp:16, blue:160, white:147, green:140, red:108 },
    { hole:13, par:5, hdcp: 2, blue:510, white:500, green:474, red:400 },
    { hole:14, par:4, hdcp: 8, blue:385, white:381, green:359, red:255 },
    { hole:15, par:4, hdcp:14, blue:365, white:336, green:310, red:281 },
    { hole:16, par:4, hdcp:12, blue:430, white:414, green:341, red:260 },
    { hole:17, par:3, hdcp:18, blue:186, white:182, green:153, red:120 },
    { hole:18, par:5, hdcp: 6, blue:590, white:568, green:458, red:395 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// セントラルゴルフクラブ 西コース（18H・1グリーン・Bent）
// 出典：アコーディア公式 https://reserve.accordiagolf.com/golfCourse/ibaraki/central/layout
// ティー: Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const CENTRAL_GC_WEST_COURSE = {
  name: "セントラルゴルフクラブ 西コース",
  holes: [
    { hole:1,  par:4, hdcp: 9, blue:324, white:303, green:295, red:245 },
    { hole:2,  par:4, hdcp: 3, blue:384, white:373, green:285, red:285 },
    { hole:3,  par:3, hdcp:15, blue:188, white:180, green:140, red:120 },
    { hole:4,  par:5, hdcp: 1, blue:568, white:525, green:481, red:395 },
    { hole:5,  par:5, hdcp: 7, blue:514, white:479, green:434, red:384 },
    { hole:6,  par:4, hdcp:13, blue:405, white:399, green:330, red:292 },
    { hole:7,  par:4, hdcp:11, blue:370, white:364, green:360, red:317 },
    { hole:8,  par:3, hdcp:17, blue:180, white:173, green:157, red:127 },
    { hole:9,  par:4, hdcp: 5, blue:380, white:371, green:356, red:297 },
    { hole:10, par:5, hdcp: 4, blue:490, white:488, green:456, red:320 },
    { hole:11, par:4, hdcp:10, blue:350, white:346, green:326, red:290 },
    { hole:12, par:3, hdcp:16, blue:188, white:183, green:146, red:120 },
    { hole:13, par:4, hdcp: 2, blue:404, white:390, green:382, red:318 },
    { hole:14, par:4, hdcp: 8, blue:342, white:336, green:317, red:265 },
    { hole:15, par:4, hdcp:14, blue:373, white:333, green:320, red:309 },
    { hole:16, par:3, hdcp:12, blue:156, white:151, green:130, red:130 },
    { hole:17, par:4, hdcp:18, blue:442, white:437, green:390, red:265 },
    { hole:18, par:5, hdcp: 6, blue:540, white:536, green:519, red:395 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// 成田ヒルズカントリークラブ（18H・1グリーン・ベント/メモリアルベント）
// 出典：公式サイト https://naritahills.wixsite.com/index/corse / GDO
// ティー: Black / Blue / White / Gold / Red
// 設計：ピート・ダイ
// ─────────────────────────────────────────────────────────────────────────────
const NARITA_HILLS_CC_COURSE = {
  name: "成田ヒルズカントリークラブ",
  holes: [
    { hole:1,  par:4, hdcp: 9, black:417, blue:373, white:327, gold:277, red:248 },
    { hole:2,  par:5, hdcp: 3, black:536, blue:511, white:489, gold:437, red:354 },
    { hole:3,  par:4, hdcp:15, black:393, blue:393, white:364, gold:295, red:285 },
    { hole:4,  par:3, hdcp:13, black:207, blue:172, white:162, gold:150, red:119 },
    { hole:5,  par:4, hdcp: 1, black:487, blue:469, white:424, gold:381, red:275 },
    { hole:6,  par:4, hdcp: 7, black:428, blue:378, white:349, gold:330, red:317 },
    { hole:7,  par:4, hdcp:11, black:416, blue:401, white:391, gold:308, red:289 },
    { hole:8,  par:3, hdcp:17, black:230, blue:207, white:195, gold:159, red:122 },
    { hole:9,  par:5, hdcp: 5, black:551, blue:502, white:484, gold:430, red:393 },
    { hole:10, par:4, hdcp:10, black:349, blue:312, white:286, gold:259, red:232 },
    { hole:11, par:3, hdcp:16, black:187, blue:187, white:155, gold:123, red:105 },
    { hole:12, par:5, hdcp: 4, black:548, blue:516, white:467, gold:442, red:442 },
    { hole:13, par:4, hdcp:14, black:373, blue:356, white:330, gold:330, red:269 },
    { hole:14, par:5, hdcp: 2, black:500, blue:476, white:446, gold:421, red:421 },
    { hole:15, par:4, hdcp: 8, black:421, blue:421, white:396, gold:292, red:266 },
    { hole:16, par:4, hdcp:12, black:415, blue:415, white:373, gold:323, red:278 },
    { hole:17, par:3, hdcp:18, black:220, blue:198, white:179, gold:129, red:100 },
    { hole:18, par:4, hdcp: 6, black:442, blue:421, white:388, gold:336, red:225 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// オリムピックナショナルゴルフクラブ EAST エーデルワイスコース（9H・1グリーン・Bent）
// 出典：公式サイト https://www.olympicnational.co.jp/east/course.html
// ティー: Black / Blue / White / Red  ※HDCPは公式非公開
// 旧：エーデルワイスゴルフクラブ
// ─────────────────────────────────────────────────────────────────────────────
const OLYMPIC_EAST_EDELWEISS_COURSE = {
  name: "オリムピックナショナルGC EAST エーデルワイスコース",
  holes: [
    { hole:1, par:4, hdcp: 0, black:460, blue:431, white:411, red:365 },
    { hole:2, par:4, hdcp: 0, black:372, blue:351, white:312, red:252 },
    { hole:3, par:4, hdcp: 0, black:440, blue:418, white:391, red:275 },
    { hole:4, par:3, hdcp: 0, black:209, blue:179, white:151, red:116 },
    { hole:5, par:4, hdcp: 0, black:340, blue:321, white:290, red:265 },
    { hole:6, par:5, hdcp: 0, black:545, blue:522, white:487, red:429 },
    { hole:7, par:4, hdcp: 0, black:397, blue:361, white:338, red:272 },
    { hole:8, par:3, hdcp: 0, black:207, blue:194, white:174, red:135 },
    { hole:9, par:5, hdcp: 0, black:527, blue:500, white:482, red:434 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// オリムピックナショナルゴルフクラブ EAST オーキッドコース（9H・1グリーン・Bent）
// 出典：公式サイト https://www.olympicnational.co.jp/east/course.html
// ティー: Black / Blue / White / Red  ※HDCPは公式非公開
// ─────────────────────────────────────────────────────────────────────────────
const OLYMPIC_EAST_ORCHID_COURSE = {
  name: "オリムピックナショナルGC EAST オーキッドコース",
  holes: [
    { hole:1, par:4, hdcp: 0, black:406, blue:389, white:360, red:289 },
    { hole:2, par:4, hdcp: 0, black:395, blue:369, white:320, red:251 },
    { hole:3, par:5, hdcp: 0, black:536, blue:515, white:497, red:446 },
    { hole:4, par:4, hdcp: 0, black:347, blue:322, white:290, red:230 },
    { hole:5, par:3, hdcp: 0, black:164, blue:145, white:123, red: 92 },
    { hole:6, par:4, hdcp: 0, black:426, blue:397, white:351, red:283 },
    { hole:7, par:4, hdcp: 0, black:423, blue:398, white:365, red:321 },
    { hole:8, par:3, hdcp: 0, black:190, blue:164, white:142, red:102 },
    { hole:9, par:5, hdcp: 0, black:570, blue:543, white:516, red:438 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// オリムピックナショナルゴルフクラブ WEST アザレアコース（9H・1グリーン・Bent）
// 出典：公式サイト https://www.olympicnational.co.jp/west/course.html
// ティー: Black / Blue / White / Red
// 旧：鶴ヶ島ゴルフ倶楽部 / ジム・ファジオ監修リデザイン
// ─────────────────────────────────────────────────────────────────────────────
const OLYMPIC_WEST_AZALEA_COURSE = {
  name: "オリムピックナショナルGC WEST アザレアコース",
  holes: [
    { hole:1, par:3, hdcp:8, black:204, blue:179, white:158, red:137 },
    { hole:2, par:5, hdcp:2, black:491, blue:459, white:431, red:421 },
    { hole:3, par:4, hdcp:5, black:386, blue:355, white:340, red:280 },
    { hole:4, par:5, hdcp:4, black:479, blue:445, white:391, red:363 },
    { hole:5, par:4, hdcp:1, black:477, blue:432, white:412, red:388 },
    { hole:6, par:3, hdcp:7, black:163, blue:139, white:123, red:102 },
    { hole:7, par:5, hdcp:9, black:506, blue:484, white:443, red:380 },
    { hole:8, par:4, hdcp:3, black:416, blue:399, white:368, red:304 },
    { hole:9, par:3, hdcp:6, black:160, blue:138, white:122, red:109 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// オリムピックナショナルゴルフクラブ WEST カメリアコース（9H・1グリーン・Bent）
// 出典：公式サイト https://www.olympicnational.co.jp/west/course.html
// ティー: Black / Blue / White / Red
// ─────────────────────────────────────────────────────────────────────────────
const OLYMPIC_WEST_CAMELLIA_COURSE = {
  name: "オリムピックナショナルGC WEST カメリアコース",
  holes: [
    { hole:1, par:5, hdcp:2, black:513, blue:497, white:432, red:407 },
    { hole:2, par:3, hdcp:8, black:163, blue:144, white:127, red:106 },
    { hole:3, par:5, hdcp:3, black:616, blue:590, white:461, red:412 },
    { hole:4, par:4, hdcp:7, black:407, blue:383, white:363, red:343 },
    { hole:5, par:4, hdcp:9, black:356, blue:337, white:317, red:256 },
    { hole:6, par:3, hdcp:5, black:169, blue:148, white:128, red:113 },
    { hole:7, par:4, hdcp:6, black:408, blue:376, white:350, red:286 },
    { hole:8, par:3, hdcp:4, black:174, blue:157, white:138, red:119 },
    { hole:9, par:5, hdcp:1, black:584, blue:552, white:510, red:410 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// オリムピックナショナルゴルフクラブ WEST シバザクラコース（9H・1グリーン・Bent）
// 出典：公式サイト https://www.olympicnational.co.jp/west/course.html
// ティー: Black / Blue / White / Red
// ─────────────────────────────────────────────────────────────────────────────
const OLYMPIC_WEST_SHIBAZAKURA_COURSE = {
  name: "オリムピックナショナルGC WEST シバザクラコース",
  holes: [
    { hole:1, par:3, hdcp:8, black:179, blue:179, white:154, red: 85 },
    { hole:2, par:5, hdcp:1, black:581, blue:561, white:530, red:384 },
    { hole:3, par:3, hdcp:4, black:199, blue:185, white:141, red:125 },
    { hole:4, par:5, hdcp:5, black:555, blue:507, white:437, red:418 },
    { hole:5, par:4, hdcp:6, black:387, blue:355, white:328, red:258 },
    { hole:6, par:4, hdcp:7, black:382, blue:341, white:312, red:252 },
    { hole:7, par:4, hdcp:9, black:332, blue:296, white:282, red:238 },
    { hole:8, par:3, hdcp:2, black:172, blue:152, white:130, red:102 },
    { hole:9, par:5, hdcp:3, black:518, blue:495, white:475, red:404 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 彩の森カントリークラブ（18H・2グリーン・ベント）
// 出典：アコーディア公式 https://reserve.accordiagolf.com/golfCourse/saitama/sainomori/layout
// ティー: Blue / White / Green / Red
// グリーン: LEFT（左）/ RIGHT（右）
// ─────────────────────────────────────────────────────────────────────────────
const SAINOMORI_CC_COURSE = {
  name: "彩の森カントリークラブ",
  holes: [
    // left: 左グリーン(LEFT), right: 右グリーン(RIGHT)
    { hole:1,  par:4, hdcp: 9, left:{blue:382, white:350, green:317, red:216}, right:{blue:412, white:379, green:346, red:245} },
    { hole:2,  par:5, hdcp: 5, left:{blue:536, white:513, green:484, red:410}, right:{blue:508, white:484, green:455, red:381} },
    { hole:3,  par:4, hdcp: 1, left:{blue:431, white:390, green:242, red:230}, right:{blue:435, white:394, green:246, red:232} },
    { hole:4,  par:3, hdcp:13, left:{blue:170, white:157, green:143, red: 88}, right:{blue:169, white:162, green:160, red:113} },
    { hole:5,  par:4, hdcp:17, left:{blue:379, white:372, green:331, red:243}, right:{blue:365, white:358, green:318, red:230} },
    { hole:6,  par:5, hdcp: 7, left:{blue:504, white:471, green:406, red:362}, right:{blue:513, white:479, green:415, red:368} },
    { hole:7,  par:4, hdcp: 3, left:{blue:378, white:369, green:310, red:249}, right:{blue:396, white:387, green:328, red:265} },
    { hole:8,  par:3, hdcp:15, left:{blue:147, white:135, green:110, red: 78}, right:{blue:193, white:184, green:139, red: 88} },
    { hole:9,  par:4, hdcp:11, left:{blue:285, white:252, green:230, red:130}, right:{blue:363, white:330, green:308, red:221} },
    { hole:10, par:4, hdcp: 6, left:{blue:432, white:409, green:373, red:238}, right:{blue:407, white:384, green:348, red:224} },
    { hole:11, par:3, hdcp:18, left:{blue:181, white:162, green:114, red:114}, right:{blue:148, white:131, green: 87, red: 87} },
    { hole:12, par:4, hdcp:12, left:{blue:406, white:382, green:338, red:236}, right:{blue:351, white:327, green:283, red:182} },
    { hole:13, par:5, hdcp: 2, left:{blue:477, white:457, green:436, red:366}, right:{blue:511, white:491, green:470, red:400} },
    { hole:14, par:4, hdcp:16, left:{blue:322, white:304, green:287, red:287}, right:{blue:310, white:291, green:274, red:274} },
    { hole:15, par:4, hdcp:14, left:{blue:352, white:331, green:313, red:226}, right:{blue:389, white:368, green:350, red:268} },
    { hole:16, par:3, hdcp: 8, left:{blue:227, white:216, green:150, red: 82}, right:{blue:206, white:195, green:137, red: 84} },
    { hole:17, par:4, hdcp:10, left:{blue:386, white:360, green:338, red:241}, right:{blue:354, white:328, green:306, red:196} },
    { hole:18, par:5, hdcp: 4, left:{blue:570, white:558, green:462, red:412}, right:{blue:552, white:541, green:444, red:394} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 東千葉カントリークラブ 東コース（36H中の東18H / 2グリーン・ベント）
// 出典：アコーディア・ゴルフ公式サイト
//   https://reserve.accordiagolf.com/golfCourse/chiba/higashichiba/layout
// ティー: Blue / White / Gold / Red
// ─────────────────────────────────────────────────────────────────────────────
const HIGASHICHIBA_CC_EAST_COURSE = {
  name: "東千葉カントリークラブ 東コース",
  holes: [
    { hole: 1, par:4, hdcp:15, a:{blue:380,white:358,gold:352,red:295}, b:{blue:358,white:336,gold:330,red:273} },
    { hole: 2, par:3, hdcp: 9, a:{blue:196,white:164,gold:156,red:143}, b:{blue:161,white:129,gold:121,red:113} },
    { hole: 3, par:4, hdcp: 3, a:{blue:380,white:360,gold:319,red:291}, b:{blue:400,white:380,gold:338,red:311} },
    { hole: 4, par:4, hdcp:13, a:{blue:398,white:381,gold:367,red:317}, b:{blue:390,white:370,gold:353,red:303} },
    { hole: 5, par:5, hdcp: 1, a:{blue:560,white:521,gold:419,red:419}, b:{blue:518,white:480,gold:365,red:365} },
    { hole: 6, par:4, hdcp: 7, a:{blue:434,white:384,gold:312,red:247}, b:{blue:446,white:397,gold:322,red:255} },
    { hole: 7, par:4, hdcp: 5, a:{blue:377,white:344,gold:344,red:284}, b:{blue:414,white:381,gold:381,red:321} },
    { hole: 8, par:3, hdcp:17, a:{blue:137,white:115,gold:110,red:110}, b:{blue:166,white:141,gold:136,red:136} },
    { hole: 9, par:5, hdcp:11, a:{blue:508,white:487,gold:437,red:437}, b:{blue:537,white:516,gold:466,red:466} },
    { hole:10, par:4, hdcp:10, a:{blue:388,white:378,gold:367,red:367}, b:{blue:377,white:366,gold:356,red:356} },
    { hole:11, par:4, hdcp:16, a:{blue:352,white:352,gold:336,red:336}, b:{blue:375,white:375,gold:359,red:359} },
    { hole:12, par:5, hdcp: 4, a:{blue:512,white:499,gold:424,red:424}, b:{blue:518,white:504,gold:429,red:429} },
    { hole:13, par:4, hdcp: 8, a:{blue:400,white:385,gold:350,red:350}, b:{blue:388,white:373,gold:338,red:338} },
    { hole:14, par:4, hdcp: 2, a:{blue:431,white:412,gold:412,red:358}, b:{blue:406,white:387,gold:387,red:333} },
    { hole:15, par:5, hdcp:14, a:{blue:502,white:477,gold:414,red:414}, b:{blue:491,white:466,gold:403,red:403} },
    { hole:16, par:3, hdcp:12, a:{blue:173,white:149,gold:144,red:119}, b:{blue:184,white:160,gold:155,red:130} },
    { hole:17, par:4, hdcp: 6, a:{blue:407,white:384,gold:314,red:257}, b:{blue:401,white:375,gold:305,red:251} },
    { hole:18, par:3, hdcp:18, a:{blue:166,white:149,gold:149,red:127}, b:{blue:181,white:165,gold:165,red:143} },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東千葉カントリークラブ 西コース（36H中の西18H / 2グリーン・ベント）
// 出典：上記同様
// ─────────────────────────────────────────────────────────────────────────────
const HIGASHICHIBA_CC_WEST_COURSE = {
  name: "東千葉カントリークラブ 西コース",
  holes: [
    { hole: 1, par:5, hdcp: 9, a:{blue:508,white:491,gold:491,red:441}, b:{blue:500,white:484,gold:484,red:434} },
    { hole: 2, par:4, hdcp:15, a:{blue:335,white:319,gold:319,red:289}, b:{blue:309,white:292,gold:292,red:263} },
    { hole: 3, par:4, hdcp: 3, a:{blue:326,white:303,gold:283,red:283}, b:{blue:334,white:311,gold:291,red:291} },
    { hole: 4, par:4, hdcp: 1, a:{blue:413,white:388,gold:363,red:323}, b:{blue:433,white:408,gold:383,red:343} },
    { hole: 5, par:3, hdcp:13, a:{blue:158,white:138,gold:124,red: 80}, b:{blue:178,white:158,gold:144,red:103} },
    { hole: 6, par:4, hdcp: 7, a:{blue:423,white:396,gold:373,red:333}, b:{blue:377,white:350,gold:327,red:287} },
    { hole: 7, par:3, hdcp:11, a:{blue:184,white:162,gold:147,red:108}, b:{blue:195,white:173,gold:158,red:118} },
    { hole: 8, par:4, hdcp:17, a:{blue:335,white:316,gold:301,red:301}, b:{blue:330,white:304,gold:296,red:296} },
    { hole: 9, par:5, hdcp: 5, a:{blue:501,white:476,gold:431,red:431}, b:{blue:505,white:480,gold:435,red:435} },
    { hole:10, par:4, hdcp:10, a:{blue:346,white:329,gold:312,red:299}, b:{blue:355,white:338,gold:321,red:308} },
    { hole:11, par:5, hdcp: 4, a:{blue:536,white:514,gold:479,red:453}, b:{blue:542,white:520,gold:485,red:459} },
    { hole:12, par:3, hdcp:16, a:{blue:166,white:161,gold:147,red:116}, b:{blue:156,white:151,gold:137,red: 98} },
    { hole:13, par:4, hdcp:14, a:{blue:364,white:344,gold:327,red:327}, b:{blue:362,white:342,gold:325,red:325} },
    { hole:14, par:4, hdcp: 8, a:{blue:378,white:358,gold:340,red:340}, b:{blue:375,white:354,gold:336,red:336} },
    { hole:15, par:5, hdcp: 2, a:{blue:502,white:478,gold:453,red:309}, b:{blue:495,white:471,gold:446,red:312} },
    { hole:16, par:4, hdcp: 6, a:{blue:338,white:313,gold:294,red:294}, b:{blue:320,white:295,gold:276,red:276} },
    { hole:17, par:3, hdcp:12, a:{blue:178,white:161,gold:145,red:107}, b:{blue:192,white:175,gold:159,red:121} },
    { hole:18, par:4, hdcp:18, a:{blue:371,white:361,gold:335,red:335}, b:{blue:354,white:344,gold:318,red:318} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 御殿場ゴルフ倶楽部（静岡県御殿場市 / 18H・1グリーン・ベント）
// 出典：スコアカード実物（ユーザー提供） / Wikipedia・GDO・楽天GORAで確認
// 設計：赤星四郎 / 開場：1971年
// ティー: Back / Regular / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const GOTEMBA_GC_COURSE = {
  name: "御殿場ゴルフ倶楽部",
  holes: [
    { hole: 1, par:5, hdcp: 9, back:540, reg:495, ladies:465 },
    { hole: 2, par:4, hdcp: 3, back:375, reg:340, ladies:285 },
    { hole: 3, par:3, hdcp:15, back:155, reg:145, ladies:120 },
    { hole: 4, par:4, hdcp: 1, back:380, reg:360, ladies:295 },
    { hole: 5, par:4, hdcp:13, back:375, reg:365, ladies:230 },
    { hole: 6, par:5, hdcp: 7, back:465, reg:455, ladies:425 },
    { hole: 7, par:4, hdcp: 5, back:310, reg:300, ladies:215 },
    { hole: 8, par:3, hdcp:17, back:175, reg:125, ladies:120 },
    { hole: 9, par:4, hdcp:11, back:360, reg:340, ladies:320 },
    { hole:10, par:4, hdcp:10, back:410, reg:405, ladies:355 },
    { hole:11, par:5, hdcp: 4, back:596, reg:580, ladies:450 },
    { hole:12, par:3, hdcp:16, back:155, reg:127, ladies:110 },
    { hole:13, par:5, hdcp: 8, back:460, reg:450, ladies:330 },
    { hole:14, par:4, hdcp:14, back:310, reg:295, ladies:260 },
    { hole:15, par:5, hdcp: 2, back:485, reg:465, ladies:335 },
    { hole:16, par:3, hdcp:18, back:140, reg:125, ladies:105 },
    { hole:17, par:3, hdcp:12, back:205, reg:185, ladies:135 },
    { hole:18, par:4, hdcp: 6, back:385, reg:365, ladies:250 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 静ヒルズカントリークラブ（茨城県常陸大宮市 / 18H・1グリーン・ニューベント）
// 出典（ヤーデージ）：公式サイト https://www.hillsgolf.jp/shizu/course/
//                  ＋スコアカード実物（ユーザー提供）で照合済み
// 出典（HDCP）：GDO https://reserve.golfdigest.co.jp/golf-course/312208/course-info/
// 設計：中嶋常幸 / 開場：1987年
// ティー: Black / Blue / White / Gold / Red / Green Tee（最前部）
// ─────────────────────────────────────────────────────────────────────────────
const SHIZUHILLS_CC_COURSE = {
  name: "静ヒルズカントリークラブ",
  holes: [
    { hole: 1, par:4, hdcp: 9, black:417, blue:383, white:352, gold:352, red:325, greentee:258 },
    { hole: 2, par:4, hdcp:15, black:420, blue:362, white:327, gold:295, red:274, greentee:274 },
    { hole: 3, par:4, hdcp: 3, black:445, blue:427, white:390, gold:337, red:312, greentee:238 },
    { hole: 4, par:3, hdcp:13, black:155, blue:155, white:130, gold:130, red:100, greentee: 95 },
    { hole: 5, par:4, hdcp: 7, black:394, blue:367, white:341, gold:322, red:310, greentee:270 },
    { hole: 6, par:5, hdcp: 1, black:620, blue:548, white:474, gold:457, red:444, greentee:400 },
    { hole: 7, par:4, hdcp: 5, black:480, blue:454, white:424, gold:394, red:367, greentee:310 },
    { hole: 8, par:3, hdcp:17, black:220, blue:185, white:166, gold:154, red:154, greentee:117 },
    { hole: 9, par:5, hdcp:11, black:467, blue:438, white:428, gold:406, red:406, greentee:400 },
    { hole:10, par:5, hdcp:16, black:491, blue:471, white:456, gold:456, red:426, greentee:408 },
    { hole:11, par:4, hdcp: 4, black:395, blue:375, white:358, gold:308, red:308, greentee:253 },
    { hole:12, par:3, hdcp:10, black:230, blue:190, white:174, gold:134, red:134, greentee:122 },
    { hole:13, par:4, hdcp: 2, black:495, blue:464, white:428, gold:373, red:373, greentee:295 },
    { hole:14, par:5, hdcp: 8, black:533, blue:505, white:485, gold:455, red:455, greentee:403 },
    { hole:15, par:3, hdcp:14, black:185, blue:160, white:136, gold:112, red:112, greentee:107 },
    { hole:16, par:4, hdcp:18, black:355, blue:330, white:315, gold:315, red:255, greentee:250 },
    { hole:17, par:4, hdcp:12, black:428, blue:397, white:359, gold:359, red:327, greentee:270 },
    { hole:18, par:4, hdcp: 6, black:482, blue:392, white:368, gold:345, red:330, greentee:257 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 鹿島の杜カントリー倶楽部【PGM】（茨城県鹿嶋市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 設計：安田幸吉／川村四郎 / 開場：1996年
// ティー: Black / Blue / White / Gold / Red
// ─────────────────────────────────────────────────────────────────────────────
const KASHIMA_NO_MORI_CC_COURSE = {
  name: "鹿島の杜カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp: 9, black:395, blue:372, white:350, gold:310, red:275 },
    { hole: 2, par:5, hdcp:15, black:645, blue:548, white:528, gold:463, red:386 },
    { hole: 3, par:3, hdcp: 3, black:211, blue:178, white:158, gold:133, red: 94 },
    { hole: 4, par:4, hdcp: 7, black:423, blue:393, white:373, gold:352, red:253 },
    { hole: 5, par:4, hdcp: 1, black:469, blue:427, white:402, gold:344, red:322 },
    { hole: 6, par:3, hdcp:13, black:250, blue:164, white:147, gold:125, red: 92 },
    { hole: 7, par:4, hdcp:11, black:376, blue:362, white:331, gold:311, red:236 },
    { hole: 8, par:5, hdcp: 5, black:525, blue:491, white:476, gold:419, red:382 },
    { hole: 9, par:4, hdcp:17, black:416, blue:386, white:365, gold:341, red:287 },
    { hole:10, par:4, hdcp:16, black:383, blue:356, white:340, gold:317, red:284 },
    { hole:11, par:4, hdcp: 4, black:505, blue:415, white:389, gold:361, red:302 },
    { hole:12, par:3, hdcp:10, black:246, blue:189, white:165, gold:142, red:115 },
    { hole:13, par:4, hdcp:14, black:444, blue:363, white:344, gold:321, red:250 },
    { hole:14, par:4, hdcp: 2, black:470, blue:422, white:402, gold:325, red:271 },
    { hole:15, par:5, hdcp: 8, black:602, blue:543, white:511, gold:429, red:371 },
    { hole:16, par:3, hdcp:18, black:245, blue:202, white:174, gold:145, red:107 },
    { hole:17, par:4, hdcp: 6, black:534, blue:427, white:400, gold:311, red:267 },
    { hole:18, par:5, hdcp:12, black:591, blue:533, white:513, gold:472, red:433 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 龍ヶ崎カントリー倶楽部（茨城県龍ヶ崎市 / 18H・2グリーン O/C）
// 出典：公式サイト https://www.ryugasaki-cc.com/course/
// 設計：井上誠一 / 開場：1962年
// グリーン: Oグリーン（OO7・ベント）/ Cグリーン（CY2・ベント）
// ティー: Champion / Back / Regular / Front / Gold / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const RYUGASAKI_CC_COURSE = {
  name: "龍ヶ崎カントリー倶楽部",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp: 9, o:{champ:419,back:419,reg:399,front:379,gold:374,ladies:334}, c:{champ:419,back:419,reg:399,front:379,gold:374,ladies:334} },
    { hole: 2, par:5, hdcp: 3, o:{champ:591,back:574,reg:536,front:514,gold:504,ladies:464}, c:{champ:574,back:557,reg:519,front:497,gold:487,ladies:447} },
    { hole: 3, par:3, hdcp:17, o:{champ:192,back:182,reg:169,front:154,gold:147,ladies:140}, c:{champ:188,back:178,reg:165,front:150,gold:143,ladies:136} },
    { hole: 4, par:5, hdcp: 5, o:{champ:563,back:523,reg:505,front:487,gold:477,ladies:433}, c:{champ:549,back:509,reg:491,front:473,gold:463,ladies:419} },
    { hole: 5, par:4, hdcp:15, o:{champ:379,back:379,reg:357,front:337,gold:334,ladies:314}, c:{champ:357,back:357,reg:335,front:315,gold:312,ladies:292} },
    { hole: 6, par:4, hdcp: 1, o:{champ:425,back:425,reg:408,front:391,gold:385,ladies:340}, c:{champ:403,back:403,reg:386,front:369,gold:363,ladies:318} },
    { hole: 7, par:4, hdcp: 7, o:{champ:392,back:392,reg:374,front:356,gold:346,ladies:310}, c:{champ:370,back:370,reg:352,front:334,gold:324,ladies:288} },
    { hole: 8, par:3, hdcp:13, o:{champ:243,back:203,reg:189,front:175,gold:166,ladies:149}, c:{champ:240,back:200,reg:186,front:172,gold:163,ladies:146} },
    { hole: 9, par:4, hdcp:11, o:{champ:445,back:432,reg:418,front:404,gold:397,ladies:348}, c:{champ:434,back:421,reg:407,front:393,gold:386,ladies:337} },
    // ─── IN ───
    { hole:10, par:4, hdcp: 4, o:{champ:419,back:419,reg:405,front:389,gold:384,ladies:306}, c:{champ:397,back:397,reg:383,front:367,gold:362,ladies:284} },
    { hole:11, par:4, hdcp:10, o:{champ:472,back:435,reg:415,front:398,gold:381,ladies:342}, c:{champ:451,back:414,reg:394,front:377,gold:360,ladies:321} },
    { hole:12, par:3, hdcp:18, o:{champ:188,back:168,reg:155,front:143,gold:143,ladies:130}, c:{champ:181,back:161,reg:148,front:136,gold:136,ladies:123} },
    { hole:13, par:5, hdcp: 8, o:{champ:567,back:523,reg:508,front:493,gold:493,ladies:400}, c:{champ:556,back:512,reg:497,front:482,gold:482,ladies:389} },
    { hole:14, par:4, hdcp: 2, o:{champ:418,back:397,reg:379,front:361,gold:356,ladies:327}, c:{champ:413,back:392,reg:374,front:356,gold:351,ladies:322} },
    { hole:15, par:4, hdcp:16, o:{champ:386,back:386,reg:368,front:350,gold:342,ladies:298}, c:{champ:356,back:356,reg:338,front:320,gold:312,ladies:268} },
    { hole:16, par:3, hdcp:14, o:{champ:216,back:216,reg:203,front:189,gold:186,ladies:166}, c:{champ:197,back:197,reg:184,front:170,gold:167,ladies:147} },
    { hole:17, par:5, hdcp: 6, o:{champ:553,back:540,reg:524,front:504,gold:494,ladies:455}, c:{champ:520,back:507,reg:491,front:471,gold:461,ladies:422} },
    { hole:18, par:4, hdcp:12, o:{champ:434,back:434,reg:418,front:392,gold:385,ladies:337}, c:{champ:423,back:423,reg:407,front:381,gold:374,ladies:326} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 飯能グリーンカントリークラブ（埼玉県飯能市 / 18H・2グリーン Bent/Korai）
// 出典：スコアカード実物（ユーザー提供）
// ティー: B.T（バック）/ R.T（レギュラー）/ F.T（フロント）/ L.T（レディース）
// ─────────────────────────────────────────────────────────────────────────────
const HANNO_GREEN_CC_COURSE = {
  name: "飯能グリーンカントリークラブ",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp:15, bent:{bt:388,rt:368,ft:349,lt:289}, korai:{bt:385,rt:365,ft:345,lt:285} },
    { hole: 2, par:5, hdcp: 3, bent:{bt:615,rt:583,ft:544,lt:480}, korai:{bt:603,rt:578,ft:540,lt:476} },
    { hole: 3, par:4, hdcp: 9, bent:{bt:398,rt:376,ft:352,lt:326}, korai:{bt:396,rt:374,ft:350,lt:322} },
    { hole: 4, par:4, hdcp: 1, bent:{bt:445,rt:434,ft:419,lt:419}, korai:{bt:423,rt:412,ft:397,lt:397} },
    { hole: 5, par:3, hdcp: 7, bent:{bt:207,rt:185,ft:160,lt:160}, korai:{bt:178,rt:156,ft:132,lt:132} },
    { hole: 6, par:4, hdcp:13, bent:{bt:367,rt:339,ft:321,lt:321}, korai:{bt:339,rt:312,ft:295,lt:295} },
    { hole: 7, par:5, hdcp: 5, bent:{bt:555,rt:517,ft:478,lt:478}, korai:{bt:543,rt:505,ft:466,lt:466} },
    { hole: 8, par:3, hdcp:17, bent:{bt:162,rt:142,ft:124,lt:124}, korai:{bt:147,rt:128,ft:108,lt:108} },
    { hole: 9, par:4, hdcp:11, bent:{bt:410,rt:388,ft:367,lt:367}, korai:{bt:378,rt:355,ft:335,lt:335} },
    // ─── IN ───
    { hole:10, par:4, hdcp:10, bent:{bt:418,rt:396,ft:370,lt:298}, korai:{bt:400,rt:378,ft:352,lt:298} },
    { hole:11, par:5, hdcp: 4, bent:{bt:595,rt:543,ft:498,lt:475}, korai:{bt:595,rt:543,ft:498,lt:475} },
    { hole:12, par:4, hdcp:16, bent:{bt:347,rt:332,ft:314,lt:298}, korai:{bt:360,rt:345,ft:327,lt:306} },
    { hole:13, par:3, hdcp:14, bent:{bt:176,rt:152,ft:134,lt:134}, korai:{bt:154,rt:129,ft:110,lt:110} },
    { hole:14, par:4, hdcp: 8, bent:{bt:350,rt:335,ft:300,lt:300}, korai:{bt:345,rt:330,ft:295,lt:295} },
    { hole:15, par:4, hdcp: 2, bent:{bt:437,rt:386,ft:359,lt:334}, korai:{bt:394,rt:343,ft:319,lt:290} },
    { hole:16, par:3, hdcp: 6, bent:{bt:197,rt:173,ft:152,lt:152}, korai:{bt:180,rt:155,ft:135,lt:135} },
    { hole:17, par:4, hdcp:18, bent:{bt:388,rt:366,ft:343,lt:343}, korai:{bt:355,rt:333,ft:310,lt:310} },
    { hole:18, par:5, hdcp:12, bent:{bt:550,rt:522,ft:491,lt:491}, korai:{bt:532,rt:505,ft:473,lt:473} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 霞ヶ浦国際ゴルフコース（茨城県つくば市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://www.kasumigaura-kokusai-golf.com/coursemap
//   ※スコアカード(ユーザー提供)のH12 Reg「56」は「510」の印刷ミス
//   ※スコアカードのTOTAL PAR「75」は「72」の印刷ミス（公式サイト確認）
// ティー: Back / Regular / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const KASUMIGAURA_KOKUSAI_GC_COURSE = {
  name: "霞ヶ浦国際ゴルフコース",
  holes: [
    { hole: 1, par:4, hdcp: 3, back:460, reg:410, ladies:300 },
    { hole: 2, par:5, hdcp: 7, back:530, reg:490, ladies:355 },
    { hole: 3, par:3, hdcp:17, back:160, reg:130, ladies:110 },
    { hole: 4, par:4, hdcp: 9, back:400, reg:370, ladies:288 },
    { hole: 5, par:4, hdcp:15, back:370, reg:350, ladies:273 },
    { hole: 6, par:5, hdcp:11, back:520, reg:480, ladies:350 },
    { hole: 7, par:3, hdcp:13, back:190, reg:160, ladies:122 },
    { hole: 8, par:4, hdcp: 1, back:470, reg:420, ladies:310 },
    { hole: 9, par:4, hdcp: 5, back:410, reg:370, ladies:310 },
    { hole:10, par:4, hdcp:12, back:410, reg:380, ladies:269 },
    { hole:11, par:3, hdcp: 6, back:200, reg:170, ladies:160 },
    { hole:12, par:5, hdcp:10, back:550, reg:510, ladies:376 },
    { hole:13, par:4, hdcp:16, back:415, reg:375, ladies:297 },
    { hole:14, par:4, hdcp: 2, back:470, reg:430, ladies:319 },
    { hole:15, par:4, hdcp: 8, back:435, reg:395, ladies:250 },
    { hole:16, par:3, hdcp:18, back:180, reg:150, ladies:111 },
    { hole:17, par:4, hdcp:14, back:400, reg:370, ladies:284 },
    { hole:18, par:5, hdcp: 4, back:510, reg:480, ladies:358 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// メイプルポイントゴルフクラブ（山梨県上野原市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
//   ※H5 FRONT: カード表記「228」→合計値より「328」に補正
//   ※H14 PRO②: カード表記「346」→合計値より「349」に補正
// 出典（グリーン）：楽天GORA・Weblio・会員権サイト各種
// 設計：ピート・ダイ / 開場：1994年
// ティー: PRO①（Champion） / PRO②（Pro②） / Back / Regular / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const MAPLE_POINT_GC_COURSE = {
  name: "メイプルポイントゴルフクラブ",
  holes: [
    { hole: 1, par:5, hdcp: 9, pro1:552, pro2:552, back:524, reg:496, front:463, ladies:424 },
    { hole: 2, par:4, hdcp: 3, pro1:397, pro2:397, back:385, reg:364, front:342, ladies:276 },
    { hole: 3, par:3, hdcp:17, pro1:185, pro2:185, back:168, reg:162, front:122, ladies: 97 },
    { hole: 4, par:4, hdcp:15, pro1:375, pro2:375, back:362, reg:347, front:319, ladies:261 },
    { hole: 5, par:4, hdcp: 7, pro1:379, pro2:379, back:370, reg:356, front:328, ladies:269 },
    { hole: 6, par:4, hdcp: 1, pro1:436, pro2:436, back:422, reg:397, front:327, ladies:296 },
    { hole: 7, par:5, hdcp:11, pro1:524, pro2:524, back:503, reg:498, front:471, ladies:412 },
    { hole: 8, par:3, hdcp:13, pro1:240, pro2:212, back:212, reg:165, front:135, ladies:122 },
    { hole: 9, par:4, hdcp: 5, pro1:461, pro2:461, back:433, reg:381, front:343, ladies:305 },
    { hole:10, par:5, hdcp:10, pro1:547, pro2:547, back:533, reg:511, front:480, ladies:432 },
    { hole:11, par:4, hdcp: 4, pro1:427, pro2:427, back:414, reg:378, front:354, ladies:292 },
    { hole:12, par:3, hdcp:16, pro1:219, pro2:219, back:201, reg:173, front:145, ladies:122 },
    { hole:13, par:4, hdcp: 2, pro1:422, pro2:422, back:403, reg:361, front:347, ladies:281 },
    { hole:14, par:4, hdcp:14, pro1:349, pro2:349, back:334, reg:319, front:288, ladies:248 },
    { hole:15, par:4, hdcp: 6, pro1:426, pro2:426, back:403, reg:361, front:342, ladies:280 },
    { hole:16, par:3, hdcp:18, pro1:203, pro2:188, back:188, reg:157, front:139, ladies:102 },
    { hole:17, par:4, hdcp: 8, pro1:392, pro2:392, back:365, reg:335, front:327, ladies:288 },
    { hole:18, par:5, hdcp:12, pro1:567, pro2:567, back:556, reg:543, front:497, ladies:453 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 土浦カントリー倶楽部【アコーディア・ゴルフ】
//（茨城県稲敷市 / 27H・Par108・2グリーン Aベント/Bベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：GDO・楽天GORA等複数ソース確認済み（ペンクロス）
// 設計：陳清水 / コース組合せ：西×東 / 東×南 / 南×西
// ティー: Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const TSUCHIURA_CC_NISHI = {
  name: "土浦CC 西コース",
  holes: [
    { hole:1, par:4, hdcp:1, a:{blue:450,white:435,green:435,red:332}, b:{blue:445,white:430,green:430,red:324} },
    { hole:2, par:4, hdcp:4, a:{blue:415,white:395,green:395,red:340}, b:{blue:420,white:400,green:400,red:345} },
    { hole:3, par:5, hdcp:9, a:{blue:520,white:490,green:470,red:337}, b:{blue:520,white:490,green:470,red:337} },
    { hole:4, par:3, hdcp:8, a:{blue:150,white:141,green:135,red: 97}, b:{blue:131,white:122,green:116,red: 77} },
    { hole:5, par:4, hdcp:3, a:{blue:340,white:325,green:325,red:320}, b:{blue:345,white:330,green:330,red:325} },
    { hole:6, par:3, hdcp:6, a:{blue:171,white:158,green:146,red:132}, b:{blue:168,white:160,green:148,red:136} },
    { hole:7, par:4, hdcp:2, a:{blue:380,white:355,green:355,red:300}, b:{blue:380,white:355,green:355,red:291} },
    { hole:8, par:4, hdcp:7, a:{blue:380,white:350,green:326,red:223}, b:{blue:370,white:340,green:316,red:215} },
    { hole:9, par:5, hdcp:5, a:{blue:525,white:495,green:495,red:387}, b:{blue:525,white:495,green:495,red:387} },
  ],
};
const TSUCHIURA_CC_MINAMI = {
  name: "土浦CC 南コース",
  holes: [
    { hole:1, par:4, hdcp:5, a:{blue:360,white:340,green:340,red:313}, b:{blue:360,white:340,green:340,red:286} },
    { hole:2, par:4, hdcp:3, a:{blue:455,white:430,green:420,red:333}, b:{blue:435,white:410,green:400,red:309} },
    { hole:3, par:5, hdcp:1, a:{blue:545,white:490,green:490,red:359}, b:{blue:535,white:480,green:480,red:349} },
    { hole:4, par:3, hdcp:8, a:{blue:150,white:140,green:140,red:130}, b:{blue:150,white:140,green:140,red:130} },
    { hole:5, par:4, hdcp:4, a:{blue:390,white:370,green:315,red:315}, b:{blue:370,white:350,green:296,red:296} },
    { hole:6, par:4, hdcp:7, a:{blue:370,white:355,green:355,red:234}, b:{blue:345,white:330,green:330,red:216} },
    { hole:7, par:5, hdcp:2, a:{blue:560,white:535,green:535,red:418}, b:{blue:570,white:545,green:545,red:430} },
    { hole:8, par:3, hdcp:9, a:{blue:150,white:144,green:133,red: 82}, b:{blue:150,white:142,green:136,red: 97} },
    { hole:9, par:4, hdcp:6, a:{blue:445,white:425,green:385,red:285}, b:{blue:395,white:375,green:335,red:242} },
  ],
};
const TSUCHIURA_CC_HIGASHI = {
  name: "土浦CC 東コース",
  holes: [
    { hole:1, par:5, hdcp:5, a:{blue:520,white:505,green:505,red:410}, b:{blue:500,white:485,green:485,red:388} },
    { hole:2, par:4, hdcp:2, a:{blue:395,white:380,green:360,red:291}, b:{blue:400,white:385,green:365,red:298} },
    { hole:3, par:3, hdcp:9, a:{blue:175,white:155,green:155,red:138}, b:{blue:170,white:150,green:150,red:133} },
    { hole:4, par:4, hdcp:1, a:{blue:450,white:420,green:420,red:357}, b:{blue:425,white:395,green:395,red:339} },
    { hole:5, par:3, hdcp:6, a:{blue:205,white:170,green:123,red: 94}, b:{blue:235,white:200,green:143,red:104} },
    { hole:6, par:5, hdcp:3, a:{blue:530,white:505,green:505,red:456}, b:{blue:535,white:510,green:510,red:476} },
    { hole:7, par:4, hdcp:8, a:{blue:345,white:335,green:335,red:308}, b:{blue:345,white:335,green:335,red:308} },
    { hole:8, par:4, hdcp:4, a:{blue:395,white:370,green:370,red:328}, b:{blue:390,white:365,green:365,red:323} },
    { hole:9, par:4, hdcp:7, a:{blue:385,white:365,green:365,red:285}, b:{blue:430,white:405,green:405,red:325} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 霞台カントリークラブ【アコーディア・ゴルフ】
//（茨城県稲敷市 / 36H・Par144 / 1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：GDO（1グリーン・ペンクロス）
//   ※楽天GORAは「2グリーン」と表記しているが、GDO・スコアカード表示は1グリーン
// 設計：日本ゴルフ場建設(株) / 開場：1970年
// コース：筑波コース(18H) / 霞コース(18H)
// ティー: Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const KASUMIDAI_CC_TSUKUBA = {
  name: "霞台CC 筑波コース",
  holes: [
    { hole: 1, par:4, hdcp: 3, blue:345, white:317, green:297, red:284 },
    { hole: 2, par:4, hdcp: 9, blue:385, white:360, green:347, red:300 },
    { hole: 3, par:4, hdcp:15, blue:333, white:307, green:290, red:290 },
    { hole: 4, par:4, hdcp: 7, blue:377, white:362, green:342, red:307 },
    { hole: 5, par:5, hdcp: 1, blue:566, white:535, green:499, red:432 },
    { hole: 6, par:3, hdcp:13, blue:214, white:162, green:130, red:130 },
    { hole: 7, par:5, hdcp: 5, blue:581, white:526, green:495, red:405 },
    { hole: 8, par:3, hdcp:17, blue:175, white:159, green:159, red: 97 },
    { hole: 9, par:4, hdcp:11, blue:411, white:385, green:370, red:276 },
    { hole:10, par:5, hdcp: 4, blue:557, white:512, green:493, red:413 },
    { hole:11, par:4, hdcp:10, blue:439, white:404, green:346, red:310 },
    { hole:12, par:4, hdcp:16, blue:399, white:378, green:351, red:298 },
    { hole:13, par:4, hdcp: 2, blue:435, white:420, green:382, red:295 },
    { hole:14, par:4, hdcp:14, blue:389, white:377, green:377, red:319 },
    { hole:15, par:3, hdcp: 8, blue:193, white:164, green:145, red: 78 },
    { hole:16, par:4, hdcp: 6, blue:338, white:330, green:310, red:310 },
    { hole:17, par:3, hdcp:18, blue:164, white:150, green:130, red:125 },
    { hole:18, par:5, hdcp:12, blue:512, white:484, green:437, red:400 },
  ],
};
const KASUMIDAI_CC_KASUMI = {
  name: "霞台CC 霞コース",
  holes: [
    { hole: 1, par:4, hdcp: 9, blue:347, white:326, green:326, red:244 },
    { hole: 2, par:4, hdcp: 3, blue:342, white:318, green:312, red:262 },
    { hole: 3, par:3, hdcp:15, blue:158, white:151, green:151, red:139 },
    { hole: 4, par:4, hdcp: 7, blue:372, white:358, green:344, red:331 },
    { hole: 5, par:4, hdcp:13, blue:391, white:375, green:358, red:287 },
    { hole: 6, par:5, hdcp: 1, blue:557, white:507, green:477, red:426 },
    { hole: 7, par:4, hdcp:11, blue:366, white:345, green:325, red:250 },
    { hole: 8, par:3, hdcp:17, blue:189, white:149, green:129, red:114 },
    { hole: 9, par:5, hdcp: 5, blue:529, white:478, green:478, red:410 },
    { hole:10, par:4, hdcp: 4, blue:424, white:379, green:364, red:330 },
    { hole:11, par:3, hdcp:16, blue:143, white:111, green: 86, red: 86 },
    { hole:12, par:4, hdcp:10, blue:318, white:298, green:271, red:225 },
    { hole:13, par:4, hdcp: 8, blue:349, white:328, green:298, red:298 },
    { hole:14, par:5, hdcp: 2, blue:513, white:485, green:460, red:436 },
    { hole:15, par:3, hdcp:14, blue:189, white:176, green:107, red:107 },
    { hole:16, par:4, hdcp: 6, blue:401, white:362, green:341, red:320 },
    { hole:17, par:4, hdcp:18, blue:354, white:333, green:306, red:298 },
    { hole:18, par:5, hdcp:12, blue:482, white:451, green:424, red:424 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 白鳳カントリー倶楽部（千葉県成田市 / 18H・2グリーン A/B・ベント）
// 出典：公式サイト https://www.unimat-golf.jp/hakuho/course/
//   ＋スコアカード実物（ユーザー提供）で照合済み
// 設計：大久保昌 / UNIMAT GOLF
// コースレート：Aグリーン72.1 / Bグリーン71.1
// ティー: バック / レギュラー / ゴールド / レディース
// ─────────────────────────────────────────────────────────────────────────────
const HAKUHO_CC_COURSE = {
  name: "白鳳カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp:11, a:{back:377,reg:350,gold:323,ladies:300}, b:{back:366,reg:339,gold:312,ladies:289} },
    { hole: 2, par:4, hdcp: 9, a:{back:383,reg:366,gold:337,ladies:337}, b:{back:374,reg:357,gold:328,ladies:328} },
    { hole: 3, par:3, hdcp:17, a:{back:150,reg:137,gold:115,ladies:115}, b:{back:142,reg:120,gold:105,ladies:105} },
    { hole: 4, par:5, hdcp: 3, a:{back:558,reg:534,gold:472,ladies:387}, b:{back:530,reg:506,gold:444,ladies:359} },
    { hole: 5, par:4, hdcp: 7, a:{back:401,reg:374,gold:367,ladies:325}, b:{back:379,reg:352,gold:346,ladies:304} },
    { hole: 6, par:3, hdcp:15, a:{back:191,reg:171,gold:137,ladies:137}, b:{back:171,reg:152,gold:118,ladies:118} },
    { hole: 7, par:5, hdcp:13, a:{back:519,reg:504,gold:472,ladies:391}, b:{back:500,reg:484,gold:452,ladies:371} },
    { hole: 8, par:4, hdcp: 1, a:{back:405,reg:374,gold:350,ladies:296}, b:{back:405,reg:374,gold:350,ladies:296} },
    { hole: 9, par:4, hdcp: 5, a:{back:416,reg:390,gold:376,ladies:323}, b:{back:397,reg:372,gold:358,ladies:305} },
    { hole:10, par:4, hdcp: 6, a:{back:396,reg:366,gold:341,ladies:301}, b:{back:388,reg:359,gold:334,ladies:294} },
    { hole:11, par:3, hdcp:18, a:{back:164,reg:133,gold:109,ladies:109}, b:{back:153,reg:122,gold: 98,ladies: 98} },
    { hole:12, par:4, hdcp:16, a:{back:359,reg:315,gold:299,ladies:299}, b:{back:323,reg:279,gold:262,ladies:262} },
    { hole:13, par:4, hdcp: 2, a:{back:400,reg:377,gold:326,ladies:264}, b:{back:366,reg:344,gold:292,ladies:231} },
    { hole:14, par:5, hdcp:12, a:{back:525,reg:505,gold:466,ladies:405}, b:{back:503,reg:483,gold:444,ladies:383} },
    { hole:15, par:4, hdcp: 8, a:{back:379,reg:350,gold:317,ladies:317}, b:{back:369,reg:339,gold:299,ladies:299} },
    { hole:16, par:3, hdcp:14, a:{back:208,reg:175,gold:150,ladies:123}, b:{back:180,reg:148,gold:122,ladies: 95} },
    { hole:17, par:5, hdcp: 4, a:{back:547,reg:523,gold:453,ladies:412}, b:{back:534,reg:510,gold:440,ladies:399} },
    { hole:18, par:4, hdcp:10, a:{back:427,reg:399,gold:358,ladies:303}, b:{back:421,reg:394,gold:353,ladies:298} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 川越カントリークラブ（埼玉県東松山市 / 27H・Par108・2グリーン ベント/高麗）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：楽天GORA・ALBA等複数ソース確認済み
// 設計：中村寅吉（中）・発知朗（西）・大竹敏郎（東）/ 開場：1963年
// コース組合せ：中×西 / 西×東 / 東×中
// ティー: BACK / REG / LADY
// ─────────────────────────────────────────────────────────────────────────────
const KAWAGOE_CC_NAKA = {
  name: "川越CC 中コース",
  holes: [
    { hole:1, par:5, hdcp:2, bent:{back:498,reg:482,lady:464}, korai:{back:503,reg:486,lady:469} },
    { hole:2, par:4, hdcp:5, bent:{back:426,reg:399,lady:278}, korai:{back:405,reg:378,lady:257} },
    { hole:3, par:4, hdcp:8, bent:{back:425,reg:398,lady:381}, korai:{back:396,reg:369,lady:352} },
    { hole:4, par:3, hdcp:7, bent:{back:160,reg:144,lady:144}, korai:{back:179,reg:155,lady:155} },
    { hole:5, par:4, hdcp:4, bent:{back:269,reg:258,lady:235}, korai:{back:291,reg:280,lady:257} },
    { hole:6, par:5, hdcp:1, bent:{back:508,reg:490,lady:420}, korai:{back:553,reg:535,lady:465} },
    { hole:7, par:4, hdcp:3, bent:{back:454,reg:430,lady:270}, korai:{back:467,reg:443,lady:293} },
    { hole:8, par:3, hdcp:9, bent:{back:151,reg:130,lady:130}, korai:{back:165,reg:144,lady:144} },
    { hole:9, par:4, hdcp:6, bent:{back:418,reg:385,lady:385}, korai:{back:439,reg:415,lady:406} },
  ],
};
const KAWAGOE_CC_NISHI = {
  name: "川越CC 西コース",
  holes: [
    { hole:1, par:5, hdcp:2, bent:{back:526,reg:515,lady:424}, korai:{back:509,reg:498,lady:407} },
    { hole:2, par:4, hdcp:8, bent:{back:363,reg:344,lady:344}, korai:{back:367,reg:351,lady:348} },
    { hole:3, par:4, hdcp:5, bent:{back:396,reg:379,lady:344}, korai:{back:385,reg:368,lady:333} },
    { hole:4, par:4, hdcp:4, bent:{back:372,reg:360,lady:289}, korai:{back:383,reg:371,lady:300} },
    { hole:5, par:5, hdcp:1, bent:{back:561,reg:540,lady:485}, korai:{back:574,reg:553,lady:498} },
    { hole:6, par:3, hdcp:7, bent:{back:184,reg:135,lady:107}, korai:{back:203,reg:164,lady:137} },
    { hole:7, par:4, hdcp:3, bent:{back:416,reg:407,lady:371}, korai:{back:407,reg:398,lady:362} },
    { hole:8, par:3, hdcp:9, bent:{back:168,reg:142,lady:142}, korai:{back:176,reg:155,lady:150} },
    { hole:9, par:4, hdcp:6, bent:{back:306,reg:297,lady:297}, korai:{back:293,reg:284,lady:284} },
  ],
};
const KAWAGOE_CC_HIGASHI = {
  name: "川越CC 東コース",
  holes: [
    { hole:1, par:4, hdcp:5, bent:{back:363,reg:327,lady:277}, korai:{back:341,reg:305,lady:255} },
    { hole:2, par:4, hdcp:2, bent:{back:360,reg:338,lady:301}, korai:{back:345,reg:323,lady:286} },
    { hole:3, par:3, hdcp:8, bent:{back:160,reg:134,lady:120}, korai:{back:150,reg:124,lady:110} },
    { hole:4, par:4, hdcp:7, bent:{back:323,reg:289,lady:268}, korai:{back:332,reg:296,lady:277} },
    { hole:5, par:5, hdcp:1, bent:{back:525,reg:489,lady:434}, korai:{back:507,reg:471,lady:416} },
    { hole:6, par:4, hdcp:4, bent:{back:409,reg:376,lady:354}, korai:{back:393,reg:360,lady:338} },
    { hole:7, par:4, hdcp:6, bent:{back:348,reg:316,lady:285}, korai:{back:345,reg:313,lady:282} },
    { hole:8, par:3, hdcp:9, bent:{back:170,reg:142,lady:138}, korai:{back:160,reg:135,lady:125} },
    { hole:9, par:5, hdcp:3, bent:{back:535,reg:501,lady:473}, korai:{back:534,reg:499,lady:472} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 房総カントリークラブ 房総ゴルフ場（千葉県長生郡睦沢町 / 36H）
// ── 西コース（18H・2グリーン Aベント/Bニューベント）
// ── 東コース（18H・1グリーン・ベント / 日本プロ・日本オープン開催コース）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：GDO予約ページ・楽天GORA・複数サイト確認済み
// 開場：1975年
// ティー 西コース: CHAMP / BACK / REG / GOLD / GREEN（最前部）
// ティー 東コース: TOUR（トーナメント）/ CHAMP / BACK / REG / GOLD
// ─────────────────────────────────────────────────────────────────────────────
const BOSO_CC_WEST_COURSE = {
  name: "房総CC 西コース",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp:14, a:{champ:368,back:348,reg:325,gold:291,green:250}, b:{champ:357,back:337,reg:314,gold:280,green:239} },
    { hole: 2, par:4, hdcp: 8, a:{champ:333,back:324,reg:299,gold:277,green:277}, b:{champ:329,back:320,reg:295,gold:273,green:273} },
    { hole: 3, par:3, hdcp:10, a:{champ:199,back:180,reg:170,gold:150,green:134}, b:{champ:193,back:175,reg:164,gold:143,green:127} },
    { hole: 4, par:5, hdcp: 2, a:{champ:565,back:538,reg:508,gold:444,green:394}, b:{champ:548,back:521,reg:491,gold:427,green:377} },
    { hole: 5, par:4, hdcp: 1, a:{champ:461,back:438,reg:417,gold:395,green:287}, b:{champ:438,back:415,reg:394,gold:372,green:264} },
    { hole: 6, par:4, hdcp: 7, a:{champ:358,back:347,reg:327,gold:293,green:228}, b:{champ:352,back:341,reg:321,gold:287,green:222} },
    { hole: 7, par:5, hdcp: 4, a:{champ:547,back:522,reg:500,gold:454,green:402}, b:{champ:532,back:507,reg:485,gold:439,green:387} },
    { hole: 8, par:3, hdcp:17, a:{champ:167,back:152,reg:140,gold:123,green:123}, b:{champ:149,back:135,reg:123,gold:108,green:108} },
    { hole: 9, par:4, hdcp:12, a:{champ:350,back:334,reg:315,gold:295,green:295}, b:{champ:337,back:321,reg:302,gold:282,green:282} },
    // ─── IN ───
    { hole:10, par:4, hdcp: 9, a:{champ:350,back:332,reg:312,gold:296,green:240}, b:{champ:330,back:312,reg:292,gold:276,green:220} },
    { hole:11, par:4, hdcp: 5, a:{champ:403,back:378,reg:353,gold:326,green:236}, b:{champ:400,back:375,reg:350,gold:323,green:233} },
    { hole:12, par:3, hdcp:13, a:{champ:222,back:200,reg:178,gold:134,green: 97}, b:{champ:200,back:180,reg:158,gold:115,green: 73} },
    { hole:13, par:4, hdcp: 3, a:{champ:395,back:377,reg:350,gold:335,green:269}, b:{champ:388,back:370,reg:343,gold:328,green:262} },
    { hole:14, par:5, hdcp:15, a:{champ:547,back:532,reg:510,gold:456,green:396}, b:{champ:512,back:497,reg:475,gold:421,green:361} },
    { hole:15, par:4, hdcp:18, a:{champ:305,back:292,reg:278,gold:263,green:263}, b:{champ:300,back:287,reg:273,gold:258,green:258} },
    { hole:16, par:3, hdcp:16, a:{champ:134,back:128,reg:122,gold:100,green:100}, b:{champ:123,back:121,reg:110,gold: 93,green: 93} },
    { hole:17, par:5, hdcp:11, a:{champ:524,back:510,reg:495,gold:430,green:374}, b:{champ:507,back:493,reg:478,gold:413,green:357} },
    { hole:18, par:4, hdcp: 6, a:{champ:372,back:353,reg:338,gold:288,green:288}, b:{champ:367,back:348,reg:333,gold:283,green:283} },
  ],
};
const BOSO_CC_EAST_COURSE = {
  name: "房総CC 東コース",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp: 3, tour:447, champ:447, back:421, reg:400, gold:370 },
    { hole: 2, par:4, hdcp: 5, tour:452, champ:411, back:381, reg:346, gold:307 },
    { hole: 3, par:5, hdcp:17, tour:577, champ:562, back:546, reg:526, gold:493 },
    { hole: 4, par:3, hdcp:10, tour:205, champ:205, back:190, reg:171, gold:139 },
    { hole: 5, par:4, hdcp: 4, tour:422, champ:422, back:398, reg:373, gold:339 },
    { hole: 6, par:5, hdcp:15, tour:553, champ:553, back:527, reg:497, gold:473 },
    { hole: 7, par:4, hdcp:12, tour:393, champ:393, back:370, reg:338, gold:307 },
    { hole: 8, par:3, hdcp:14, tour:207, champ:207, back:183, reg:164, gold:143 },
    { hole: 9, par:4, hdcp: 8, tour:421, champ:421, back:397, reg:373, gold:335 },
    // ─── IN ───
    { hole:10, par:4, hdcp: 2, tour:424, champ:424, back:400, reg:377, gold:350 },
    { hole:11, par:4, hdcp: 6, tour:430, champ:430, back:383, reg:356, gold:320 },
    { hole:12, par:5, hdcp:18, tour:540, champ:540, back:516, reg:502, gold:485 },
    { hole:13, par:4, hdcp:13, tour:431, champ:379, back:368, reg:347, gold:327 },
    { hole:14, par:3, hdcp:16, tour:138, champ:138, back:136, reg:118, gold:103 },
    { hole:15, par:4, hdcp: 7, tour:453, champ:360, back:341, reg:314, gold:298 },
    { hole:16, par:3, hdcp: 9, tour:224, champ:224, back:199, reg:188, gold:140 },
    { hole:17, par:4, hdcp: 1, tour:457, champ:441, back:419, reg:403, gold:276 },
    { hole:18, par:5, hdcp:11, tour:550, champ:550, back:526, reg:503, gold:480 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 房総カントリークラブ 大上ゴルフ場（千葉県長生郡睦沢町 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：GDO（ベント・ペンクロス・1グリーン）
// 設計：富澤廣親 / 開場：1986年
// ティー: CHAMP / BACK / REG / GOLD / GREEN（最前部）
// ─────────────────────────────────────────────────────────────────────────────
const BOSO_CC_OGAMI_COURSE = {
  name: "房総CC 大上ゴルフ場",
  holes: [
    { hole: 1, par:4, hdcp:13, champ:363, back:339, reg:311, gold:293, green:264 },
    { hole: 2, par:5, hdcp: 1, champ:609, back:516, reg:493, gold:464, green:301 },
    { hole: 3, par:4, hdcp:16, champ:363, back:343, reg:320, gold:297, green:254 },
    { hole: 4, par:3, hdcp:15, champ:203, back:185, reg:166, gold:128, green:128 },
    { hole: 5, par:4, hdcp:10, champ:403, back:373, reg:349, gold:278, green:233 },
    { hole: 6, par:4, hdcp:11, champ:406, back:385, reg:363, gold:264, green:264 },
    { hole: 7, par:3, hdcp:17, champ:182, back:153, reg:125, gold:109, green:109 },
    { hole: 8, par:4, hdcp: 4, champ:393, back:369, reg:348, gold:315, green:238 },
    { hole: 9, par:5, hdcp:18, champ:485, back:455, reg:436, gold:381, green:381 },
    { hole:10, par:4, hdcp: 3, champ:422, back:406, reg:388, gold:352, green:275 },
    { hole:11, par:4, hdcp: 5, champ:405, back:369, reg:348, gold:268, green:268 },
    { hole:12, par:4, hdcp: 2, champ:414, back:384, reg:352, gold:266, green:266 },
    { hole:13, par:5, hdcp:12, champ:498, back:482, reg:461, gold:436, green:367 },
    { hole:14, par:3, hdcp: 9, champ:195, back:178, reg:170, gold: 85, green: 85 },
    { hole:15, par:4, hdcp: 6, champ:399, back:369, reg:346, gold:321, green:272 },
    { hole:16, par:4, hdcp: 8, champ:404, back:375, reg:346, gold:293, green:293 },
    { hole:17, par:3, hdcp:14, champ:168, back:156, reg:150, gold:113, green:113 },
    { hole:18, par:5, hdcp: 7, champ:495, back:467, reg:439, gold:421, green:334 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 山田ゴルフ倶楽部（千葉県山武市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
//   ※H16 白: カード表記「158」→合計値より「160」に補正
//   ※H10 緑: カード表記「437」→合計値より「433」に補正
// 出典（グリーン）：楽天GORA・ゴルフホットライン（ベントワングリーン）
// ※GORAのティー名（BACK/REGULAR/FRONT/LADIES）とスコアカード（青/白/緑/赤）は別系統
// 設計：山田地建 / 開場：1996年
// ティー: 青 / 白 / 緑 / 赤
// ─────────────────────────────────────────────────────────────────────────────
const YAMADA_GC_COURSE = {
  name: "山田ゴルフ倶楽部",
  holes: [
    { hole: 1, par:5, hdcp: 3, blue:490, white:469, green:463, red:388 },
    { hole: 2, par:4, hdcp:15, blue:342, white:330, green:307, red:289 },
    { hole: 3, par:3, hdcp: 9, blue:180, white:158, green:138, red:105 },
    { hole: 4, par:4, hdcp: 1, blue:370, white:354, green:340, red:297 },
    { hole: 5, par:4, hdcp: 7, blue:376, white:370, green:362, red:268 },
    { hole: 6, par:3, hdcp:13, blue:168, white:158, green:136, red:126 },
    { hole: 7, par:4, hdcp:17, blue:336, white:325, green:307, red:296 },
    { hole: 8, par:5, hdcp: 5, blue:561, white:551, green:531, red:510 },
    { hole: 9, par:4, hdcp:11, blue:387, white:377, green:347, red:320 },
    { hole:10, par:5, hdcp: 4, blue:491, white:458, green:433, red:422 },
    { hole:11, par:4, hdcp:10, blue:321, white:301, green:275, red:260 },
    { hole:12, par:3, hdcp:16, blue:160, white:153, green:143, red:131 },
    { hole:13, par:4, hdcp:14, blue:371, white:354, green:321, red:321 },
    { hole:14, par:4, hdcp: 8, blue:354, white:330, green:322, red:269 },
    { hole:15, par:5, hdcp: 2, blue:494, white:485, green:466, red:433 },
    { hole:16, par:3, hdcp:18, blue:188, white:160, green:150, red:127 },
    { hole:17, par:4, hdcp:12, blue:373, white:362, green:345, red:301 },
    { hole:18, par:4, hdcp: 6, blue:423, white:402, green:378, red:350 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 成田フェアフィールドゴルフクラブ（千葉県成田市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ）：スコアカード実物（ユーザー提供）+ GDO照合済み
// 出典（HDCP）：GDO https://reserve.golfdigest.co.jp/golf-course/354109/course-info/
// 出典（グリーン）：GDO（ベント・ペンクロス・1グリーン）
// 設計：三井建設(株)一級建築士事務所 / 開場：1998年
// ティー: GREEN TEE / BLUE TEE / WHITE TEE / GOLD TEE / LADIES TEE
// ─────────────────────────────────────────────────────────────────────────────
const NARITA_FAIRFIELD_GC_COURSE = {
  name: "成田フェアフィールドゴルフクラブ",
  holes: [
    { hole: 1, par:4, hdcp: 5, green:410, blue:390, white:370, gold:342, ladies:292 },
    { hole: 2, par:4, hdcp:15, green:343, blue:321, white:297, gold:280, ladies:246 },
    { hole: 3, par:3, hdcp:17, green:166, blue:155, white:142, gold:131, ladies:111 },
    { hole: 4, par:5, hdcp: 9, green:497, blue:475, white:454, gold:430, ladies:410 },
    { hole: 5, par:4, hdcp: 3, green:427, blue:410, white:395, gold:361, ladies:323 },
    { hole: 6, par:3, hdcp:13, green:178, blue:155, white:136, gold:133, ladies:123 },
    { hole: 7, par:5, hdcp: 7, green:545, blue:517, white:496, gold:440, ladies:393 },
    { hole: 8, par:4, hdcp: 1, green:418, blue:392, white:392, gold:366, ladies:322 },
    { hole: 9, par:4, hdcp:11, green:376, blue:362, white:346, gold:321, ladies:271 },
    { hole:10, par:5, hdcp: 4, green:562, blue:552, white:540, gold:483, ladies:423 },
    { hole:11, par:4, hdcp:14, green:359, blue:342, white:322, gold:322, ladies:293 },
    { hole:12, par:4, hdcp:12, green:376, blue:361, white:343, gold:343, ladies:310 },
    { hole:13, par:3, hdcp:10, green:196, blue:174, white:174, gold:145, ladies:105 },
    { hole:14, par:4, hdcp: 6, green:419, blue:393, white:375, gold:320, ladies:268 },
    { hole:15, par:3, hdcp:16, green:215, blue:182, white:160, gold:143, ladies:112 },
    { hole:16, par:4, hdcp:18, green:328, blue:309, white:288, gold:267, ladies:267 },
    { hole:17, par:5, hdcp: 8, green:550, blue:534, white:513, gold:450, ladies:400 },
    { hole:18, par:4, hdcp: 2, green:450, blue:437, white:424, gold:362, ladies:312 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 麻倉ゴルフ倶楽部（千葉県佐倉市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ）：公式サイト スコアカード実物（ユーザー提供）
// 出典（HDCP）：GDO https://reserve.golfdigest.co.jp/golf-course/350107/course-info/
// 出典（グリーン）：GDO（ベント・ペンクロス）/ ゴルフホットライン（ベントワングリーン）
//   ※H9 L.Tee: スコアカード322Y / GDO369Y → スコアカード優先
// 設計：黒澤長夫・杉本昌治 / 開場：2008年
// ティー: C.TEE(Champion) / B.TEE(Back) / R.TEE(Regular) / L.TEE(Ladies)
// ─────────────────────────────────────────────────────────────────────────────
const ASAKURA_GC_COURSE = {
  name: "麻倉ゴルフ倶楽部",
  holes: [
    { hole: 1, par:4, hdcp: 9, ctee:400, btee:379, rtee:354, ltee:312 },
    { hole: 2, par:5, hdcp: 3, ctee:558, btee:538, rtee:519, ltee:436 },
    { hole: 3, par:3, hdcp:15, ctee:209, btee:190, rtee:170, ltee:141 },
    { hole: 4, par:4, hdcp: 7, ctee:403, btee:384, rtee:354, ltee:309 },
    { hole: 5, par:4, hdcp: 1, ctee:419, btee:388, rtee:367, ltee:322 },
    { hole: 6, par:5, hdcp:13, ctee:529, btee:501, rtee:480, ltee:442 },
    { hole: 7, par:3, hdcp:11, ctee:195, btee:181, rtee:152, ltee:124 },
    { hole: 8, par:4, hdcp:17, ctee:387, btee:357, rtee:340, ltee:306 },
    { hole: 9, par:4, hdcp: 5, ctee:426, btee:404, rtee:383, ltee:322 },
    { hole:10, par:4, hdcp: 4, ctee:445, btee:422, rtee:399, ltee:365 },
    { hole:11, par:5, hdcp:10, ctee:551, btee:494, rtee:475, ltee:425 },
    { hole:12, par:4, hdcp:16, ctee:406, btee:377, rtee:353, ltee:325 },
    { hole:13, par:3, hdcp:14, ctee:168, btee:148, rtee:133, ltee: 98 },
    { hole:14, par:4, hdcp: 8, ctee:417, btee:396, rtee:370, ltee:334 },
    { hole:15, par:4, hdcp: 2, ctee:439, btee:411, rtee:395, ltee:349 },
    { hole:16, par:4, hdcp:18, ctee:410, btee:389, rtee:365, ltee:337 },
    { hole:17, par:3, hdcp: 6, ctee:200, btee:170, rtee:156, ltee:121 },
    { hole:18, par:5, hdcp:12, ctee:541, btee:528, rtee:503, ltee:419 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 藤ヶ谷カントリークラブ（18H・2グリーン コーライ/ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// ※グリーンによってHDCPが異なる（コーライ・ベントそれぞれ独立したHDCP）
// ティー: B.TEE / R.TEE / F.TEE / L.TEE
// ─────────────────────────────────────────────────────────────────────────────
const FUJIGAYA_CC_COURSE = {
  name: "藤ヶ谷カントリークラブ",
  holes: [
    // hole: ホール番号, par: パー,
    // k: {hdcp, b,r,f,l} = コーライグリーン
    // b: {hdcp, b,r,f,l} = ベントグリーン
    { hole: 1, par:5, k:{hdcp: 3,b:533,r:500,f:491,l:461}, bent:{hdcp:15,b:503,r:470,f:461,l:431} },
    { hole: 2, par:3, k:{hdcp: 9,b:192,r:175,f:142,l:142}, bent:{hdcp: 3,b:200,r:183,f:150,l:150} },
    { hole: 3, par:5, k:{hdcp:15,b:518,r:487,f:474,l:434}, bent:{hdcp:11,b:510,r:479,f:466,l:426} },
    { hole: 4, par:4, k:{hdcp: 7,b:416,r:396,f:330,l:330}, bent:{hdcp: 1,b:432,r:412,f:346,l:346} },
    { hole: 5, par:4, k:{hdcp: 1,b:440,r:428,f:301,l:301}, bent:{hdcp: 7,b:431,r:419,f:293,l:293} },
    { hole: 6, par:3, k:{hdcp:13,b:165,r:151,f:144,l:134}, bent:{hdcp:13,b:161,r:147,f:140,l:130} },
    { hole: 7, par:4, k:{hdcp:11,b:396,r:373,f:360,l:330}, bent:{hdcp: 5,b:423,r:400,f:387,l:357} },
    { hole: 8, par:4, k:{hdcp:17,b:367,r:337,f:322,l:302}, bent:{hdcp:17,b:360,r:330,f:315,l:295} },
    { hole: 9, par:4, k:{hdcp: 5,b:408,r:367,f:328,l:328}, bent:{hdcp: 9,b:420,r:379,f:343,l:343} },
    { hole:10, par:5, k:{hdcp:10,b:495,r:472,f:456,l:426}, bent:{hdcp: 6,b:518,r:495,f:479,l:449} },
    { hole:11, par:4, k:{hdcp: 4,b:453,r:409,f:331,l:331}, bent:{hdcp:12,b:426,r:382,f:305,l:305} },
    { hole:12, par:5, k:{hdcp:16,b:538,r:488,f:478,l:448}, bent:{hdcp:16,b:533,r:483,f:473,l:443} },
    { hole:13, par:3, k:{hdcp: 2,b:205,r:170,f:131,l:131}, bent:{hdcp: 2,b:192,r:157,f:119,l:119} },
    { hole:14, par:4, k:{hdcp: 8,b:385,r:370,f:361,l:291}, bent:{hdcp:10,b:397,r:382,f:373,l:303} },
    { hole:15, par:3, k:{hdcp:14,b:190,r:159,f:145,l:135}, bent:{hdcp:14,b:189,r:158,f:144,l:134} },
    { hole:16, par:4, k:{hdcp:18,b:299,r:282,f:274,l:254}, bent:{hdcp:18,b:319,r:302,f:294,l:274} },
    { hole:17, par:4, k:{hdcp: 6,b:434,r:367,f:314,l:314}, bent:{hdcp: 4,b:450,r:383,f:328,l:328} },
    { hole:18, par:4, k:{hdcp:12,b:392,r:360,f:312,l:312}, bent:{hdcp: 8,b:420,r:388,f:339,l:339} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 出島ゴルフクラブ（茨城県かすみがうら市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：楽天GORA・じゃらん・公式等（ベントワングリーン）
// 旧名：富士OGMゴルフクラブ 出島コース / アコーディア・ゴルフ運営
// 開場：1988年 / 日経カップ男子トーナメント開催（1995〜1998年）
// ティー: Blue Tee / White Tee / Green Tee / Red Tee
// ─────────────────────────────────────────────────────────────────────────────
const DEJIMA_GC_COURSE = {
  name: "出島ゴルフクラブ",
  holes: [
    { hole: 1, par:4, hdcp:14, blue:357, white:344, green:314, red:273 },
    { hole: 2, par:4, hdcp:12, blue:395, white:383, green:364, red:317 },
    { hole: 3, par:3, hdcp:16, blue:145, white:139, green:121, red:105 },
    { hole: 4, par:5, hdcp: 4, blue:526, white:504, green:482, red:454 },
    { hole: 5, par:4, hdcp: 6, blue:414, white:389, green:372, red:336 },
    { hole: 6, par:3, hdcp:18, blue:138, white:118, green:102, red: 90 },
    { hole: 7, par:4, hdcp:10, blue:396, white:381, green:354, red:337 },
    { hole: 8, par:4, hdcp: 8, blue:380, white:360, green:335, red:301 },
    { hole: 9, par:5, hdcp: 2, blue:517, white:501, green:474, red:436 },
    { hole:10, par:5, hdcp: 3, blue:531, white:513, green:489, red:471 },
    { hole:11, par:4, hdcp:13, blue:354, white:326, green:312, red:292 },
    { hole:12, par:3, hdcp:17, blue:160, white:134, green:124, red:115 },
    { hole:13, par:4, hdcp: 9, blue:405, white:391, green:360, red:345 },
    { hole:14, par:5, hdcp: 1, blue:519, white:499, green:467, red:427 },
    { hole:15, par:4, hdcp: 7, blue:413, white:394, green:359, red:334 },
    { hole:16, par:3, hdcp:15, blue:187, white:171, green:140, red:100 },
    { hole:17, par:4, hdcp:11, blue:402, white:390, green:369, red:320 },
    { hole:18, par:4, hdcp: 5, blue:405, white:378, green:352, red:352 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 加茂ゴルフ倶楽部（千葉県市原市 / 18H・1グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
//   ※H10 Red: カード表記「245」→合計値(2776)より「372」に補正
// 出典（グリーン）：楽天GORA・ゴルフホットライン（ベントワングリーン）
// 設計：富澤誠造 / 開場：1978年
// ティー: Black / Blue / White / Red
// ─────────────────────────────────────────────────────────────────────────────
const KAMO_GC_COURSE = {
  name: "加茂ゴルフ倶楽部",
  holes: [
    { hole: 1, par:5, hdcp: 3, black:583, blue:583, white:564, red:496 },
    { hole: 2, par:4, hdcp: 9, black:362, blue:362, white:347, red:250 },
    { hole: 3, par:3, hdcp:15, black:165, blue:155, white:134, red: 92 },
    { hole: 4, par:4, hdcp: 1, black:415, blue:395, white:380, red:310 },
    { hole: 5, par:4, hdcp:13, black:365, blue:350, white:341, red:307 },
    { hole: 6, par:4, hdcp: 7, black:381, blue:368, white:357, red:315 },
    { hole: 7, par:3, hdcp:11, black:214, blue:202, white:190, red:163 },
    { hole: 8, par:5, hdcp: 5, black:518, blue:505, white:502, red:455 },
    { hole: 9, par:4, hdcp:17, black:317, blue:315, white:310, red:298 },
    { hole:10, par:4, hdcp:10, black:394, blue:391, white:378, red:372 },
    { hole:11, par:5, hdcp: 4, black:595, blue:590, white:570, red:383 },
    { hole:12, par:4, hdcp:16, black:410, blue:376, white:365, red:345 },
    { hole:13, par:4, hdcp: 2, black:416, blue:407, white:393, red:350 },
    { hole:14, par:3, hdcp: 8, black:212, blue:198, white:185, red:164 },
    { hole:15, par:4, hdcp:14, black:353, blue:350, white:332, red:310 },
    { hole:16, par:3, hdcp: 6, black:191, blue:188, white:163, red:128 },
    { hole:17, par:4, hdcp:18, black:355, blue:351, white:341, red:307 },
    { hole:18, par:5, hdcp:12, black:503, blue:495, white:485, red:417 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// おおむらさきゴルフ倶楽部【アコーディア・ゴルフ】
//（埼玉県比企郡滑川町 / 27H・Par108）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：GDO「1グリーン・ベント（ペンクロス）」
//   ※楽天GORAは「2グリーン（A/B）」と表記、スコアカードは1セットのみ掲載
// コース監修：室田淳 / 開場：埼玉 / コース組合せ：東×西 / 西×中 / 中×東
// ティー: Blue Tee / White Tee / Green Tee / Red Tee
// ─────────────────────────────────────────────────────────────────────────────
const OMURASAKI_GC_HIGASHI = {
  name: "おおむらさきGC 東コース",
  holes: [
    { hole:1, par:5, hdcp:6, blue:507, white:477, green:446, red:390 },
    { hole:2, par:3, hdcp:4, blue:189, white:171, green:151, red:141 },
    { hole:3, par:4, hdcp:5, blue:381, white:353, green:326, red:293 },
    { hole:4, par:5, hdcp:1, blue:565, white:540, green:420, red:355 },
    { hole:5, par:4, hdcp:8, blue:372, white:347, green:324, red:284 },
    { hole:6, par:4, hdcp:3, blue:378, white:356, green:330, red:289 },
    { hole:7, par:4, hdcp:9, blue:361, white:336, green:312, red:280 },
    { hole:8, par:3, hdcp:2, blue:210, white:186, green:159, red:128 },
    { hole:9, par:4, hdcp:7, blue:374, white:346, green:319, red:287 },
  ],
};
const OMURASAKI_GC_NAKA = {
  name: "おおむらさきGC 中コース",
  holes: [
    { hole:1, par:5, hdcp:8, blue:516, white:496, green:474, red:403 },
    { hole:2, par:4, hdcp:5, blue:379, white:351, green:325, red:286 },
    { hole:3, par:4, hdcp:1, blue:445, white:425, green:401, red:265 },
    { hole:4, par:4, hdcp:7, blue:360, white:336, green:310, red:281 },
    { hole:5, par:3, hdcp:3, blue:169, white:144, green:121, red:110 },
    { hole:6, par:4, hdcp:4, blue:406, white:381, green:356, red:309 },
    { hole:7, par:3, hdcp:2, blue:207, white:181, green:155, red:123 },
    { hole:8, par:4, hdcp:6, blue:358, white:330, green:303, red:276 },
    { hole:9, par:5, hdcp:9, blue:532, white:507, green:482, red:407 },
  ],
};
const OMURASAKI_GC_NISHI = {
  name: "おおむらさきGC 西コース",
  holes: [
    { hole:1, par:5, hdcp:5, blue:560, white:537, green:514, red:370 },
    { hole:2, par:4, hdcp:7, blue:356, white:333, green:311, red:264 },
    { hole:3, par:4, hdcp:1, blue:443, white:420, green:375, red:258 },
    { hole:4, par:3, hdcp:4, blue:169, white:149, green:120, red:115 },
    { hole:5, par:4, hdcp:8, blue:343, white:324, green:294, red:210 },
    { hole:6, par:4, hdcp:2, blue:447, white:420, green:354, red:224 },
    { hole:7, par:4, hdcp:6, blue:362, white:338, green:313, red:282 },
    { hole:8, par:3, hdcp:3, blue:186, white:174, green:142, red:114 },
    { hole:9, par:5, hdcp:9, blue:518, white:497, green:471, red:433 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 岡部チサンカントリークラブ【PGM】
//（埼玉県深谷市 / 36H・Par144・2グリーン ベント/高麗）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
//   ※スコアカードはベント/高麗共通のBlack/White/Redの3ティー1セットのみ記載
// 出典（グリーン）：GDO・楽天GORA等（ベント・高麗 2グリーン）
// 設計：（岡部）久米建築設計事務所 / （美里）春日井薫 / 開場：1960年
// コース：岡部コース(18H OUT+IN) / 美里コース(18H OUT+IN)
// ティー: Black / White / Red
// ─────────────────────────────────────────────────────────────────────────────
const OKABE_CHISAN_CC_OKABE = {
  name: "岡部チサンCC 岡部コース",
  holes: [
    // ─── OUT ───
    { hole: 1, par:5, hdcp: 3, black:505, white:494, red:484 },
    { hole: 2, par:3, hdcp: 9, black:150, white:110, red:110 },
    { hole: 3, par:5, hdcp:15, black:484, white:474, red:401 },
    { hole: 4, par:4, hdcp: 7, black:381, white:360, red:360 },
    { hole: 5, par:3, hdcp:13, black:160, white:150, red:119 },
    { hole: 6, par:4, hdcp: 1, black:305, white:290, red:290 },
    { hole: 7, par:4, hdcp:17, black:350, white:340, red:280 },
    { hole: 8, par:4, hdcp: 5, black:390, white:360, red:260 },
    { hole: 9, par:4, hdcp:11, black:365, white:350, red:350 },
    // ─── IN ───
    { hole:10, par:4, hdcp:16, black:420, white:378, red:337 },
    { hole:11, par:4, hdcp:10, black:425, white:420, red:304 },
    { hole:12, par:4, hdcp: 4, black:464, white:439, red:339 },
    { hole:13, par:5, hdcp: 2, black:585, white:545, red:413 },
    { hole:14, par:3, hdcp:14, black:135, white:135, red:135 },
    { hole:15, par:4, hdcp: 8, black:369, white:330, red:330 },
    { hole:16, par:3, hdcp:18, black:118, white:110, red:110 },
    { hole:17, par:4, hdcp:12, black:336, white:310, red:256 },
    { hole:18, par:5, hdcp: 6, black:490, white:474, red:401 },
  ],
};
const OKABE_CHISAN_CC_MISATO = {
  name: "岡部チサンCC 美里コース",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp: 5, black:444, white:411, red:346 },
    { hole: 2, par:3, hdcp:15, black:200, white:155, red:132 },
    { hole: 3, par:4, hdcp: 7, black:358, white:324, red:289 },
    { hole: 4, par:5, hdcp: 9, black:572, white:530, red:471 },
    { hole: 5, par:4, hdcp: 3, black:405, white:382, red:276 },
    { hole: 6, par:3, hdcp:13, black:240, white:218, red:141 },
    { hole: 7, par:4, hdcp: 1, black:425, white:394, red:304 },
    { hole: 8, par:5, hdcp:11, black:520, white:476, red:412 },
    { hole: 9, par:4, hdcp:17, black:380, white:358, red:310 },
    // ─── IN ───
    { hole:10, par:5, hdcp:10, black:548, white:507, red:487 },
    { hole:11, par:4, hdcp: 6, black:415, white:364, red:290 },
    { hole:12, par:3, hdcp:14, black:216, white:189, red:121 },
    { hole:13, par:4, hdcp:12, black:385, white:367, red:320 },
    { hole:14, par:4, hdcp: 2, black:449, white:375, red:323 },
    { hole:15, par:4, hdcp:18, black:395, white:369, red:317 },
    { hole:16, par:5, hdcp: 8, black:528, white:505, red:445 },
    { hole:17, par:3, hdcp:16, black:162, white:150, red:128 },
    { hole:18, par:4, hdcp: 4, black:450, white:393, red:329 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 玉造ゴルフ倶楽部 若海コース【PGM】（茨城県行方市 / 18H・2グリーン・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）+ 楽天GORAで照合
//   ※スコアカード = 右グリーン(Right Green) / Blue:6510/White:5981/Gold:5425/Red:4856 ✓
//   ※左グリーン(Left Green)：楽天GORAコースレート Blue:6481/White:5954/Gold:5406/Red:4842
//     GORAのAグリーンタブの合計値が不一致のため、左グリーンはホール別データ未登録
//   ※HDCPは右グリーン用（左グリーンはHDCP割当が異なる可能性あり）
// 出典（グリーン）：PGM公式・楽天GORA（ベント2グリーン 右/左）
// 設計：大洋緑化(株)コース管理部 / 開場：1979年
// ティー: Blue / White / Gold / Red
// ─────────────────────────────────────────────────────────────────────────────
const TAMATSUKURI_WAKAUMI_COURSE = {
  name: "玉造ゴルフ倶楽部 若海コース",
  holes: [
    { hole: 1, par:5, hdcp: 3, blue:537, white:514, gold:488, red:419 },
    { hole: 2, par:3, hdcp:17, blue:124, white:111, gold: 95, red: 82 },
    { hole: 3, par:4, hdcp:13, blue:377, white:340, gold:312, red:270 },
    { hole: 4, par:4, hdcp:15, blue:314, white:291, gold:271, red:258 },
    { hole: 5, par:4, hdcp:11, blue:360, white:309, gold:286, red:255 },
    { hole: 6, par:4, hdcp: 9, blue:312, white:277, gold:277, red:265 },
    { hole: 7, par:4, hdcp: 1, blue:418, white:398, gold:361, red:260 },
    { hole: 8, par:3, hdcp: 7, blue:207, white:185, gold:135, red:111 },
    { hole: 9, par:5, hdcp: 5, blue:534, white:516, gold:405, red:373 },
    { hole:10, par:4, hdcp:12, blue:433, white:335, gold:335, red:312 },
    { hole:11, par:3, hdcp:18, blue:155, white:131, gold:110, red:107 },
    { hole:12, par:5, hdcp: 4, blue:546, white:528, gold:491, red:410 },
    { hole:13, par:4, hdcp:14, blue:365, white:347, gold:347, red:310 },
    { hole:14, par:4, hdcp: 2, blue:368, white:349, gold:312, red:295 },
    { hole:15, par:4, hdcp:10, blue:351, white:324, gold:299, red:299 },
    { hole:16, par:3, hdcp:16, blue:224, white:192, gold:153, red:133 },
    { hole:17, par:5, hdcp: 6, blue:520, white:515, gold:448, red:430 },
    { hole:18, par:4, hdcp: 8, blue:365, white:319, gold:300, red:267 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 浜野ゴルフクラブ（千葉県市原市 / 18H・2グリーン A/B・ベント）
// 出典（ヤーデージ・HDCP）：スコアカード実物（ユーザー提供）
// 出典（グリーン）：Wikipedia・ゴルフホットライン（ベント2グリーン・ペンクロス）
// 設計：井上誠一 / 開場：1984年 / 第55回日本プロ選手権開催（1987年）
// ティー: Black / Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const HAMANO_GC_COURSE = {
  name: "浜野ゴルフクラブ",
  holes: [
    // ─── OUT ───
    { hole: 1, par:4, hdcp: 3, a:{black:423,blue:402,white:381,green:357,red:357}, b:{black:446,blue:425,white:404,green:381,red:381} },
    { hole: 2, par:4, hdcp: 9, a:{black:413,blue:397,white:374,green:357,red:341}, b:{black:382,blue:365,white:342,green:325,red:308} },
    { hole: 3, par:4, hdcp:15, a:{black:370,blue:352,white:335,green:318,red:318}, b:{black:396,blue:378,white:361,green:344,red:344} },
    { hole: 4, par:4, hdcp: 7, a:{black:414,blue:404,white:377,green:362,red:341}, b:{black:421,blue:410,white:384,green:370,red:348} },
    { hole: 5, par:3, hdcp:13, a:{black:172,blue:155,white:137,green:127,red:118}, b:{black:200,blue:183,white:163,green:153,red:148} },
    { hole: 6, par:5, hdcp: 1, a:{black:559,blue:545,white:526,green:504,red:440}, b:{black:540,blue:527,white:507,green:487,red:423} },
    { hole: 7, par:4, hdcp: 5, a:{black:454,blue:421,white:402,green:385,red:349}, b:{black:440,blue:407,white:389,green:371,red:336} },
    { hole: 8, par:5, hdcp:11, a:{black:547,blue:530,white:515,green:500,red:474}, b:{black:567,blue:550,white:535,green:518,red:492} },
    { hole: 9, par:3, hdcp:17, a:{black:231,blue:208,white:186,green:164,red:132}, b:{black:205,blue:180,white:159,green:137,red:107} },
    // ─── IN ───
    { hole:10, par:4, hdcp:10, a:{black:445,blue:423,white:404,green:376,red:376}, b:{black:423,blue:402,white:382,green:355,red:355} },
    { hole:11, par:4, hdcp: 4, a:{black:439,blue:406,white:381,green:359,red:329}, b:{black:451,blue:418,white:392,green:371,red:340} },
    { hole:12, par:5, hdcp:16, a:{black:577,blue:545,white:524,green:499,red:470}, b:{black:604,blue:571,white:550,green:525,red:497} },
    { hole:13, par:3, hdcp:14, a:{black:209,blue:188,white:167,green:144,red:144}, b:{black:183,blue:163,white:140,green:119,red:119} },
    { hole:14, par:4, hdcp: 8, a:{black:394,blue:380,white:355,green:339,red:324}, b:{black:412,blue:400,white:375,green:359,red:343} },
    { hole:15, par:4, hdcp: 2, a:{black:451,blue:428,white:353,green:353,red:335}, b:{black:447,blue:424,white:350,green:331,red:331} },
    { hole:16, par:4, hdcp: 6, a:{black:374,blue:353,white:331,green:308,red:308}, b:{black:354,blue:334,white:312,green:289,red:289} },
    { hole:17, par:3, hdcp:18, a:{black:218,blue:202,white:184,green:174,red:145}, b:{black:197,blue:182,white:162,green:150,red:115} },
    { hole:18, par:5, hdcp:12, a:{black:527,blue:516,white:498,green:444,red:390}, b:{black:541,blue:530,white:512,green:459,red:405} },
  ],
};

// VENUES マスター — セレクトボックス用統合定義
// subCourses: ゴルフ場内のコース一覧（18Hなら1エントリ、27Hなら3エントリ等）
// greens: 使用グリーン選択肢
// tees: ティー選択肢 { id, label, key } key=holesオブジェクトのプロパティ名
// ─────────────────────────────────────────────────────────────────────────────
var VENUES = [
  {
    id: "nakayama", reading: "ナカヤマカントリークラブ",
    name: "中山カントリークラブ",
    greens: [
      { id: "bent",  label: "ベント（A）" },
      { id: "korai", label: "高麗（B）" },
    ],
    tees: [
      { id: "back",   label: "BACK" },
      { id: "reg",    label: "REGULAR" },
      { id: "gold",   label: "GOLD（ベントのみ）" },
      { id: "ladies", label: "LADIES" },
    ],
    subCourses: [
      {
        name: "OUT",
        holes: NAKAYAMA_COURSE.holes.slice(0, 9),
      },
      {
        name: "IN",
        holes: NAKAYAMA_COURSE.holes.slice(9, 18),
      },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "bent" ? hole.bent : hole.korai;
      if (tee === "back")   return d.back;
      if (tee === "reg")    return d.reg;
      if (tee === "gold")   return green === "bent" ? d.gold : null;
      if (tee === "ladies") return d.ladies;
      return null;
    },
  },
  {
    id: "sobu_sobu", reading: "ソウブシーシーソウブコース",
    name: "総武CC 総武コース",
    greens: [
      { id: "bent",  label: "ベント" },
      { id: "korai", label: "高麗（コーライ）" },
    ],
    tees: [
      { id: "back",   label: "バック（Blue）" },
      { id: "reg",    label: "レギュラー（White）" },
      { id: "ladies", label: "レディース（Red）" },
    ],
    subCourses: SOBU_SOBU_COURSE.courses.map((c) => ({
      name: c.name,
      holes: c.holes,
    })),
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  {
    id: "sobu_inba", reading: "ソウブシーシーインバコース",
    name: "総武CC 印旛コース",
    greens: [
      { id: "bent", label: "ベント（1グリーン）" },
    ],
    tees: [
      { id: "back",   label: "Back" },
      { id: "reg",    label: "Regular" },
      { id: "ladies", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: SOBU_INBA_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SOBU_INBA_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  {
    id: "sobu_kita", reading: "ソウブシーシーキタコース",
    name: "総武CC 北コース",
    greens: [
      { id: "bent",  label: "ベント（A）" },
      { id: "korai", label: "高麗（B）" },
    ],
    tees: [
      { id: "back",   label: "Blue（Back）" },
      { id: "reg",    label: "White（Regular）" },
      { id: "ladies", label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "北", holes: SOBU_KITA_COURSE.holes },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── カメリアヒルズカントリークラブ ───
  {
    id: "camellia_hills", reading: "カメリアヒルズカントリークラブ",
    name: "カメリアヒルズカントリークラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "back",   label: "BACK" },
      { id: "reg",    label: "REGULAR" },
      { id: "front",  label: "FRONT" },
      { id: "ladies", label: "LADIES" },
    ],
    subCourses: [
      { name: "OUT", holes: CAMELLIA_HILLS_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: CAMELLIA_HILLS_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "front")  return hole.front;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── カレドニアン・ゴルフクラブ ───
  {
    id: "caledonian_gc", reading: "カレドニアンゴルフクラブ",
    name: "カレドニアン・ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "gold",  label: "GOLD" },
      { id: "blue",  label: "BLUE" },
      { id: "white", label: "WHITE" },
      { id: "red",   label: "RED（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: CALEDONIAN_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: CALEDONIAN_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "gold")  return hole.gold;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 鷹之台カンツリー倶楽部（ベントグリーンのみ） ───
  {
    id: "takanodai_cc", reading: "タカノダイカンツリークラブ",
    name: "鷹之台カンツリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン使用）" }],
    tees: [
      { id: "fullback", label: "Fullback" },
      { id: "back",     label: "Back" },
      { id: "reg",      label: "Regular" },
      { id: "front",    label: "Front" },
      { id: "ladies",   label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: TAKANODAI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TAKANODAI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = hole.bent;
      if (!d) return null;
      if (tee === "fullback") return d.fullback;
      if (tee === "back")     return d.back;
      if (tee === "reg")      return d.reg;
      if (tee === "front")    return d.front;
      if (tee === "ladies")   return d.ladies;
      return null;
    },
  },
  // ─── 太平洋クラブ 八千代コース ───
  {
    id: "taiheiyoclub_yachiyo", reading: "タイヘイヨウクラブヤチヨコース",
    name: "太平洋クラブ 八千代コース",
    greens: [
      { id: "a", label: "Aグリーン（CY-2）" },
      { id: "b", label: "Bグリーン（CY-2）" },
    ],
    tees: [
      { id: "rt", label: "RT（レギュラー）" },
      { id: "mt", label: "MT（ミドル）" },
      { id: "ft", label: "FT（フロント）" },
      { id: "lt", label: "LT（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYOCLUB_YACHIYO_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TAIHEIYOCLUB_YACHIYO_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "rt") return d.rt;
      if (tee === "mt") return d.mt;
      if (tee === "ft") return d.ft;
      if (tee === "lt") return d.lt;
      return null;
    },
  },
  // ─── グレンオークスカントリークラブ ───
  {
    id: "glen_oaks_cc", reading: "グレンオークスカントリークラブ",
    name: "グレンオークスカントリークラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "black",  label: "Black" },
      { id: "blue",   label: "Blue" },
      { id: "white",  label: "White" },
      { id: "green",  label: "Green" },
      { id: "red",    label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: GLEN_OAKS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: GLEN_OAKS_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black")  return hole.black;
      if (tee === "blue")   return hole.blue;
      if (tee === "white")  return hole.white;
      if (tee === "green")  return hole.green;
      if (tee === "red")    return hole.red;
      return null;
    },
  },
  // ─── オーク・ヒルズカントリークラブ ───
  {
    id: "oak_hills_cc", reading: "オークヒルズカントリークラブ",
    name: "オーク・ヒルズカントリークラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "black",  label: "ブラック" },
      { id: "blue",   label: "ブルー" },
      { id: "white",  label: "ホワイト" },
      { id: "green",  label: "グリーン" },
      { id: "red",    label: "レッド（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: OAK_HILLS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: OAK_HILLS_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black")  return hole.black;
      if (tee === "blue")   return hole.blue;
      if (tee === "white")  return hole.white;
      if (tee === "green")  return hole.green;
      if (tee === "red")    return hole.red;
      return null;
    },
  },
  // ─── 習志野カントリークラブ キングコース ───
  {
    id: "narashino_cc_king", reading: "ナラシノカントリークラブキング",
    name: "習志野カントリークラブ（King）",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White" },
      { id: "red",   label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "King OUT", holes: NARASHINO_CC_KING_COURSE.holes.slice(0, 9) },
      { name: "King IN",  holes: NARASHINO_CC_KING_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "blue")  return d.blue;
      if (tee === "white") return d.white;
      if (tee === "red")   return d.red;
      return null;
    },
  },
  // ─── 習志野カントリークラブ クィーンコース ───
  {
    id: "narashino_cc_queen", reading: "ナラシノカントリークラブクイーン",
    name: "習志野カントリークラブ（Queen）",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White" },
      { id: "red",   label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "Queen OUT", holes: NARASHINO_CC_QUEEN_COURSE.holes.slice(0, 9) },
      { name: "Queen IN",  holes: NARASHINO_CC_QUEEN_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "blue")  return d.blue;
      if (tee === "white") return d.white;
      if (tee === "red")   return d.red;
      return null;
    },
  },
  // ─── 佐原カントリークラブ ───
  {
    id: "sawara_cc", reading: "サワラカントリークラブ",
    name: "佐原カントリークラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "back",   label: "Blue（Back）" },
      { id: "reg",    label: "White（Regular）" },
      { id: "ladies", label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: SAWARA_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SAWARA_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 東庄ゴルフ倶楽部 ───
  {
    id: "tosho_gc", reading: "トウノショウゴルフクラブ",
    name: "東庄ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "back",   label: "Blue（Back）" },
      { id: "reg",    label: "White（Regular）" },
      { id: "silver", label: "Silver" },
      { id: "ladies", label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: TOSHO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TOSHO_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "silver") return hole.silver;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── CPGカントリークラブ（ちばパブ） ───
  {
    id: "cpg_cc", reading: "シーピージーカントリークラブ",
    name: "CPGカントリークラブ（ちばパブ）",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "back",   label: "BACK" },
      { id: "reg",    label: "REG" },
      { id: "ladies", label: "LADIES" },
    ],
    subCourses: [
      { name: "OUT", holes: CPG_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: CPG_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 東京国際空港ゴルフ倶楽部 ───
  {
    id: "tokyo_intl_airport_gc", reading: "トウキョウコクサイクウコウゴルフクラブ",
    name: "東京国際空港ゴルフ倶楽部",
    greens: [
      { id: "bent",  label: "ベント（B）" },
      { id: "korai", label: "コーライ（K）" },
    ],
    tees: [
      { id: "back",   label: "BT（Back）" },
      { id: "reg",    label: "RT（Regular）" },
      { id: "ladies", label: "LT（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: TOKYO_INTL_AIRPORT_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TOKYO_INTL_AIRPORT_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "korai" ? hole.korai : hole.bent;
      if (!d) return null;
      if (tee === "back")   return d.back;
      if (tee === "reg")    return d.reg;
      if (tee === "ladies") return d.ladies;
      return null;
    },
  },
  // ─── 船橋カントリークラブ ───
  {
    id: "funabashi_cc", reading: "フナバシカントリークラブ",
    name: "船橋カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ニューベント）" },
    ],
    tees: [
      { id: "champ", label: "Championship" },
      { id: "back",  label: "Back" },
      { id: "reg",   label: "Regular" },
      { id: "front", label: "Front（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: FUNABASHI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: FUNABASHI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "champ") return d.champ;
      if (tee === "back")  return d.back;
      if (tee === "reg")   return d.reg;
      if (tee === "front") return d.front;
      return null;
    },
  },
  // ─── 泉カントリー倶楽部（East / West / South） ───
  {
    id: "izumi_cc", reading: "イズミカントリークラブ",
    name: "泉カントリー倶楽部",
    greens: [
      { id: "a", label: "Aグリーン（ニューベント）" },
      { id: "b", label: "Bグリーン（ニューベント）" },
    ],
    tees: [
      { id: "back",  label: "Back" },
      { id: "reg",   label: "Regular" },
      { id: "front", label: "Front" },
      { id: "gold",  label: "Gold（Ladies）" },
    ],
    subCourses: [
      { name: "East",  holes: IZUMI_CC_EAST_COURSE.holes },
      { name: "West",  holes: IZUMI_CC_WEST_COURSE.holes },
      { name: "South", holes: IZUMI_CC_SOUTH_COURSE.holes },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      if (tee === "back")  return d.back;
      if (tee === "reg")   return d.reg;
      if (tee === "front") return d.front;
      if (tee === "gold")  return d.gold;
      return null;
    },
  },
  // ─── 千葉松尾ゴルフクラブ ───
  {
    id: "chiba_matsuo_gc", reading: "チバマツオゴルフクラブ",
    name: "千葉松尾ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "back",   label: "B.T（バック）" },
      { id: "reg",    label: "R.T（レギュラー）" },
      { id: "ladies", label: "L.T（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: CHIBA_MATSUO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: CHIBA_MATSUO_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 袖ヶ浦カンツリークラブ 新袖コース ───
  {
    id: "sodegaura_shinsode", reading: "ソデガウラシーシーシンソデコース",
    name: "袖ヶ浦CC 新袖コース",
    greens: [
      { id: "new", label: "NEWベント" },
      { id: "old", label: "OLDベント" },
    ],
    tees: [
      { id: "back",  label: "BT（バック）" },
      { id: "reg",   label: "RT（レギュラー）" },
      { id: "front", label: "FT（フロント）" },
      { id: "gold",  label: "GT（ゴールド）" },
    ],
    subCourses: [
      { name: "OUT", holes: SODEGAURA_SHINSODE_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SODEGAURA_SHINSODE_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "new" ? hole.new : hole.old;
      if (!d) return null;
      if (tee === "back")  return d.back;
      if (tee === "reg")   return d.reg;
      if (tee === "front") return d.front;
      if (tee === "gold")  return d.gold;
      return null;
    },
  },
  // ─── セントラルゴルフクラブ ───
  {
    id: "central_gc", reading: "セントラルゴルフクラブ",
    name: "セントラルゴルフクラブ",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White" },
      { id: "green", label: "Green" },
      { id: "red",   label: "Red（Ladies）" },
    ],
    subCourses: [
      { name: "東 OUT", holes: CENTRAL_GC_EAST_COURSE.holes.slice(0, 9) },
      { name: "東 IN",  holes: CENTRAL_GC_EAST_COURSE.holes.slice(9, 18) },
      { name: "西 OUT", holes: CENTRAL_GC_WEST_COURSE.holes.slice(0, 9) },
      { name: "西 IN",  holes: CENTRAL_GC_WEST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 成田ヒルズカントリークラブ ───
  {
    id: "narita_hills_cc", reading: "ナリタヒルズカントリークラブ",
    name: "成田ヒルズカントリークラブ",
    greens: [{ id: "bent", label: "メモリアルベント" }],
    tees: [
      { id: "black", label: "Black（フルバック）" },
      { id: "blue",  label: "Blue（バック）" },
      { id: "white", label: "White（レギュラー）" },
      { id: "gold",  label: "Gold（フロント）" },
      { id: "red",   label: "Red（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: NARITA_HILLS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: NARITA_HILLS_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "gold")  return hole.gold;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── オリムピックナショナルGC EAST ───
  {
    id: "olympic_national_east", reading: "オリムピックナショナルジーシーイースト",
    name: "オリムピックナショナルGC EAST",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "black", label: "Black（バック）" },
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White（レギュラー）" },
      { id: "red",   label: "Red（レディース）" },
    ],
    subCourses: [
      { name: "エーデルワイス", holes: OLYMPIC_EAST_EDELWEISS_COURSE.holes },
      { name: "オーキッド",     holes: OLYMPIC_EAST_ORCHID_COURSE.holes },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── オリムピックナショナルGC WEST ───
  {
    id: "olympic_national_west", reading: "オリムピックナショナルジーシーウエスト",
    name: "オリムピックナショナルGC WEST",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "black", label: "Black（バック）" },
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White（レギュラー）" },
      { id: "red",   label: "Red（レディース）" },
    ],
    subCourses: [
      { name: "アザレア",   holes: OLYMPIC_WEST_AZALEA_COURSE.holes },
      { name: "カメリア",   holes: OLYMPIC_WEST_CAMELLIA_COURSE.holes },
      { name: "シバザクラ", holes: OLYMPIC_WEST_SHIBAZAKURA_COURSE.holes },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 彩の森カントリークラブ ───
  {
    id: "sainomori_cc", reading: "サイノモリカントリークラブ",
    name: "彩の森カントリークラブ",
    greens: [
      { id: "left",  label: "LEFT（左）" },
      { id: "right", label: "RIGHT（右）" },
    ],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: SAINOMORI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SAINOMORI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "right" ? hole.right : hole.left;
      if (!d) return null;
      if (tee === "blue")  return d.blue;
      if (tee === "white") return d.white;
      if (tee === "green") return d.green;
      if (tee === "red")   return d.red;
      return null;
    },
  },
  // ─── 東千葉カントリークラブ 東コース ───
  {
    id: "higashichiba_cc_east", reading: "ヒガシチバカントリークラブヒガシコース",
    name: "東千葉カントリークラブ 東コース",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "gold",  label: "Gold Tee" },
      { id: "red",   label: "Red Tee（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: HIGASHICHIBA_CC_EAST_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HIGASHICHIBA_CC_EAST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "a" ? hole.a : hole.b;
      if (!d) return null;
      if (tee === "blue")  return d.blue;
      if (tee === "white") return d.white;
      if (tee === "gold")  return d.gold;
      if (tee === "red")   return d.red;
      return null;
    },
  },
  // ─── 東千葉カントリークラブ 西コース ───
  {
    id: "higashichiba_cc_west", reading: "ヒガシチバカントリークラブニシコース",
    name: "東千葉カントリークラブ 西コース",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "gold",  label: "Gold Tee" },
      { id: "red",   label: "Red Tee（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: HIGASHICHIBA_CC_WEST_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HIGASHICHIBA_CC_WEST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "a" ? hole.a : hole.b;
      if (!d) return null;
      if (tee === "blue")  return d.blue;
      if (tee === "white") return d.white;
      if (tee === "gold")  return d.gold;
      if (tee === "red")   return d.red;
      return null;
    },
  },
  // ─── 御殿場ゴルフ倶楽部 ───
  {
    id: "gotemba_gc", reading: "ゴテンバゴルフクラブ",
    name: "御殿場ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "back",   label: "Back Tee" },
      { id: "reg",    label: "Regular Tee" },
      { id: "ladies", label: "Ladies Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: GOTEMBA_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: GOTEMBA_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 静ヒルズカントリークラブ ───
  {
    id: "shizuhills_cc", reading: "シズヒルズカントリークラブ",
    name: "静ヒルズカントリークラブ",
    greens: [{ id: "bent", label: "ベント（ニューベント）" }],
    tees: [
      { id: "black",   label: "Black Tee" },
      { id: "blue",    label: "Blue Tee" },
      { id: "white",   label: "White Tee" },
      { id: "gold",    label: "Gold Tee" },
      { id: "red",     label: "Red Tee" },
      { id: "greentee",label: "Green Tee（最前部）" },
    ],
    subCourses: [
      { name: "OUT", holes: SHIZUHILLS_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SHIZUHILLS_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black")    return hole.black;
      if (tee === "blue")     return hole.blue;
      if (tee === "white")    return hole.white;
      if (tee === "gold")     return hole.gold;
      if (tee === "red")      return hole.red;
      if (tee === "greentee") return hole.greentee;
      return null;
    },
  },
  // ─── 鹿島の杜カントリー倶楽部 ───
  {
    id: "kashima_no_mori_cc", reading: "カシマノモリカントリークラブ",
    name: "鹿島の杜カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント" }],
    tees: [
      { id: "black", label: "Black Tee" },
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "gold",  label: "Gold Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: KASHIMA_NO_MORI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: KASHIMA_NO_MORI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "gold")  return hole.gold;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 龍ヶ崎カントリー倶楽部 ───
  {
    id: "ryugasaki_cc", reading: "リュウガサキカントリークラブ",
    name: "龍ヶ崎カントリー倶楽部",
    greens: [
      { id: "o", label: "Oグリーン（OO7）" },
      { id: "c", label: "Cグリーン（CY2）" },
    ],
    tees: [
      { id: "champ",  label: "Champion Tee" },
      { id: "back",   label: "Back Tee" },
      { id: "reg",    label: "Regular Tee" },
      { id: "front",  label: "Front Tee" },
      { id: "gold",   label: "Gold Tee" },
      { id: "ladies", label: "Ladies Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: RYUGASAKI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: RYUGASAKI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "c" ? hole.c : hole.o;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 飯能グリーンカントリークラブ ───
  {
    id: "hanno_green_cc", reading: "ハンノウグリーンカントリークラブ",
    name: "飯能グリーンカントリークラブ",
    greens: [
      { id: "bent",  label: "ベントグリーン" },
      { id: "korai", label: "コーライグリーン" },
    ],
    tees: [
      { id: "bt", label: "B.T（バック）" },
      { id: "rt", label: "R.T（レギュラー）" },
      { id: "ft", label: "F.T（フロント）" },
      { id: "lt", label: "L.T（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: HANNO_GREEN_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HANNO_GREEN_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "korai" ? hole.korai : hole.bent;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 霞ヶ浦国際ゴルフコース ───
  {
    id: "kasumigaura_kokusai_gc", reading: "カスミガウラコクサイゴルフコース",
    name: "霞ヶ浦国際ゴルフコース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "back",   label: "Back Tee" },
      { id: "reg",    label: "Regular Tee" },
      { id: "ladies", label: "Ladies Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: KASUMIGAURA_KOKUSAI_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: KASUMIGAURA_KOKUSAI_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── メイプルポイントゴルフクラブ ───
  {
    id: "maple_point_gc", reading: "メイプルポイントゴルフクラブ",
    name: "メイプルポイントゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "pro1",   label: "PRO①（Champion）" },
      { id: "pro2",   label: "PRO②" },
      { id: "back",   label: "Back Tee" },
      { id: "reg",    label: "Regular Tee" },
      { id: "front",  label: "Front Tee" },
      { id: "ladies", label: "Ladies Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: MAPLE_POINT_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: MAPLE_POINT_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "pro1")   return hole.pro1;
      if (tee === "pro2")   return hole.pro2;
      if (tee === "back")   return hole.back;
      if (tee === "reg")    return hole.reg;
      if (tee === "front")  return hole.front;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 土浦カントリー倶楽部（27H / 西×東 / 東×南 / 南×西） ───
  {
    id: "tsuchiura_cc", reading: "ツチウラカントリークラブ",
    name: "土浦カントリー倶楽部",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "西", holes: TSUCHIURA_CC_NISHI.holes },
      { name: "南", holes: TSUCHIURA_CC_MINAMI.holes },
      { name: "東", holes: TSUCHIURA_CC_HIGASHI.holes },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 霞台カントリークラブ（36H / 筑波コース × 霞コース） ───
  {
    id: "kasumidai_cc", reading: "カスミダイカントリークラブ",
    name: "霞台カントリークラブ",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "筑波OUT", holes: KASUMIDAI_CC_TSUKUBA.holes.slice(0, 9) },
      { name: "筑波IN",  holes: KASUMIDAI_CC_TSUKUBA.holes.slice(9, 18) },
      { name: "霞OUT",   holes: KASUMIDAI_CC_KASUMI.holes.slice(0, 9) },
      { name: "霞IN",    holes: KASUMIDAI_CC_KASUMI.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 白鳳カントリー倶楽部 ───
  {
    id: "hakuho_cc", reading: "ハクホウカントリークラブ",
    name: "白鳳カントリー倶楽部",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "back",   label: "バック" },
      { id: "reg",    label: "レギュラー" },
      { id: "gold",   label: "ゴールド" },
      { id: "ladies", label: "レディース" },
    ],
    subCourses: [
      { name: "OUT", holes: HAKUHO_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HAKUHO_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 川越カントリークラブ（27H / 中×西 / 西×東 / 東×中） ───
  {
    id: "kawagoe_cc", reading: "カワゴエカントリークラブ",
    name: "川越カントリークラブ",
    greens: [
      { id: "bent",  label: "ベントグリーン" },
      { id: "korai", label: "高麗グリーン" },
    ],
    tees: [
      { id: "back", label: "BACK" },
      { id: "reg",  label: "REG" },
      { id: "lady", label: "LADY" },
    ],
    subCourses: [
      { name: "中", holes: KAWAGOE_CC_NAKA.holes },
      { name: "西", holes: KAWAGOE_CC_NISHI.holes },
      { name: "東", holes: KAWAGOE_CC_HIGASHI.holes },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "korai" ? hole.korai : hole.bent;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 房総CC 房総ゴルフ場 西コース ───
  {
    id: "boso_cc_west", reading: "ボウソウカントリークラブボウソウゴルフジョウニシコース",
    name: "房総CC 西コース",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ニューベント）" },
    ],
    tees: [
      { id: "champ", label: "CHAMP" },
      { id: "back",  label: "BACK" },
      { id: "reg",   label: "REG" },
      { id: "gold",  label: "GOLD" },
      { id: "green", label: "GREEN（最前部）" },
    ],
    subCourses: [
      { name: "OUT", holes: BOSO_CC_WEST_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: BOSO_CC_WEST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 房総CC 房総ゴルフ場 東コース ───
  {
    id: "boso_cc_east", reading: "ボウソウカントリークラブボウソウゴルフジョウヒガシコース",
    name: "房総CC 東コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "tour",  label: "TOUR（トーナメント）" },
      { id: "champ", label: "CHAMP" },
      { id: "back",  label: "BACK" },
      { id: "reg",   label: "REG" },
      { id: "gold",  label: "GOLD" },
    ],
    subCourses: [
      { name: "OUT", holes: BOSO_CC_EAST_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: BOSO_CC_EAST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "tour")  return hole.tour;
      if (tee === "champ") return hole.champ;
      if (tee === "back")  return hole.back;
      if (tee === "reg")   return hole.reg;
      if (tee === "gold")  return hole.gold;
      return null;
    },
  },
  // ─── 房総CC 大上ゴルフ場 ───
  {
    id: "boso_cc_ogami", reading: "ボウソウカントリークラブオオガミゴルフジョウ",
    name: "房総CC 大上ゴルフ場",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "champ", label: "CHAMP" },
      { id: "back",  label: "BACK" },
      { id: "reg",   label: "REG" },
      { id: "gold",  label: "GOLD" },
      { id: "green", label: "GREEN（最前部）" },
    ],
    subCourses: [
      { name: "OUT", holes: BOSO_CC_OGAMI_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: BOSO_CC_OGAMI_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "champ") return hole.champ;
      if (tee === "back")  return hole.back;
      if (tee === "reg")   return hole.reg;
      if (tee === "gold")  return hole.gold;
      if (tee === "green") return hole.green;
      return null;
    },
  },
  // ─── 山田ゴルフ倶楽部 ───
  {
    id: "yamada_gc", reading: "ヤマダゴルフクラブ",
    name: "山田ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "blue",  label: "青ティー" },
      { id: "white", label: "白ティー" },
      { id: "green", label: "緑ティー" },
      { id: "red",   label: "赤ティー" },
    ],
    subCourses: [
      { name: "OUT", holes: YAMADA_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: YAMADA_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 成田フェアフィールドゴルフクラブ ───
  {
    id: "narita_fairfield_gc", reading: "ナリタフェアフィールドゴルフクラブ",
    name: "成田フェアフィールドゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "green",  label: "GREEN TEE" },
      { id: "blue",   label: "BLUE TEE" },
      { id: "white",  label: "WHITE TEE" },
      { id: "gold",   label: "GOLD TEE" },
      { id: "ladies", label: "LADIES TEE" },
    ],
    subCourses: [
      { name: "OUT", holes: NARITA_FAIRFIELD_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: NARITA_FAIRFIELD_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "green")  return hole.green;
      if (tee === "blue")   return hole.blue;
      if (tee === "white")  return hole.white;
      if (tee === "gold")   return hole.gold;
      if (tee === "ladies") return hole.ladies;
      return null;
    },
  },
  // ─── 麻倉ゴルフ倶楽部 ───
  {
    id: "asakura_gc", reading: "アサクラゴルフクラブ",
    name: "麻倉ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "ctee", label: "C.TEE（Champion）" },
      { id: "btee", label: "B.TEE（Back）" },
      { id: "rtee", label: "R.TEE（Regular）" },
      { id: "ltee", label: "L.TEE（Ladies）" },
    ],
    subCourses: [
      { name: "OUT", holes: ASAKURA_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: ASAKURA_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "ctee") return hole.ctee;
      if (tee === "btee") return hole.btee;
      if (tee === "rtee") return hole.rtee;
      if (tee === "ltee") return hole.ltee;
      return null;
    },
  },
  // ─── 藤ヶ谷カントリークラブ ───
  {
    id: "fujigaya_cc", reading: "フジガヤカントリークラブ",
    name: "藤ヶ谷カントリークラブ",
    greens: [
      { id: "korai", label: "コーライ芝グリーン" },
      { id: "bent",  label: "ベント芝グリーン" },
    ],
    tees: [
      { id: "b", label: "B.TEE" },
      { id: "r", label: "R.TEE" },
      { id: "f", label: "F.TEE" },
      { id: "l", label: "L.TEE" },
    ],
    subCourses: [
      { name: "OUT", holes: FUJIGAYA_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: FUJIGAYA_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "bent" ? hole.bent : hole.k;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
  // ─── 出島ゴルフクラブ ───
  {
    id: "dejima_gc", reading: "デジマゴルフクラブ",
    name: "出島ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（ワングリーン）" }],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: DEJIMA_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: DEJIMA_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 加茂ゴルフ倶楽部 ───
  {
    id: "kamo_gc", reading: "カモゴルフクラブ",
    name: "加茂ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（SR1020洋芝）" }],
    tees: [
      { id: "black", label: "Black Tee" },
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: KAMO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: KAMO_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── おおむらさきゴルフ倶楽部（27H / 東×西 / 西×中 / 中×東） ───
  {
    id: "omurasaki_gc", reading: "オオムラサキゴルフクラブ",
    name: "おおむらさきゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（ペンクロス）" }],
    tees: [
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "東", holes: OMURASAKI_GC_HIGASHI.holes },
      { name: "中", holes: OMURASAKI_GC_NAKA.holes },
      { name: "西", holes: OMURASAKI_GC_NISHI.holes },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "green") return hole.green;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 岡部チサンカントリークラブ（36H / 岡部+美里） ───
  {
    id: "okabe_chisan_cc", reading: "オカベチサンカントリークラブ",
    name: "岡部チサンカントリークラブ",
    greens: [
      { id: "bent",  label: "ベント（ペンクロス）" },
      { id: "korai", label: "高麗" },
    ],
    tees: [
      { id: "black", label: "Black" },
      { id: "white", label: "White" },
      { id: "red",   label: "Red" },
    ],
    subCourses: [
      { name: "岡部OUT", holes: OKABE_CHISAN_CC_OKABE.holes.slice(0, 9) },
      { name: "岡部IN",  holes: OKABE_CHISAN_CC_OKABE.holes.slice(9, 18) },
      { name: "美里OUT", holes: OKABE_CHISAN_CC_MISATO.holes.slice(0, 9) },
      { name: "美里IN",  holes: OKABE_CHISAN_CC_MISATO.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "black") return hole.black;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 玉造ゴルフ倶楽部 若海コース ───
  {
    id: "tamatsukuri_wakaumi_gc", reading: "タマツクリゴルフクラブワカウミコース",
    name: "玉造ゴルフ倶楽部 若海コース",
    greens: [
      { id: "right", label: "右グリーン（ベント）" },
      { id: "left",  label: "左グリーン（ベント）※ホール別距離未登録" },
    ],
    tees: [
      { id: "blue",  label: "Blue" },
      { id: "white", label: "White" },
      { id: "gold",  label: "Gold" },
      { id: "red",   label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: TAMATSUKURI_WAKAUMI_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TAMATSUKURI_WAKAUMI_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "gold")  return hole.gold;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── 浜野ゴルフクラブ ───
  {
    id: "hamano_gc", reading: "ハマノゴルフクラブ",
    name: "浜野ゴルフクラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "black", label: "Black Tee" },
      { id: "blue",  label: "Blue Tee" },
      { id: "white", label: "White Tee" },
      { id: "green", label: "Green Tee" },
      { id: "red",   label: "Red Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: HAMANO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HAMANO_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "b" ? hole.b : hole.a;
      if (!d) return null;
      return d[tee] ?? null;
    },
  },
];
