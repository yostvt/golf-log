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
  name: "総武カントリークラブ 総武コース",
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
  name: "総武カントリークラブ 印旛コース",
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
  name: "総武カントリークラブ 北コース",
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
  name: "袖ヶ浦カントリークラブ 新袖コース",
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
  name: "オリムピックナショナルゴルフクラブ EASTコース エーデルワイス",
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
  name: "オリムピックナショナルゴルフクラブ EASTコース オーキッド",
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
  name: "オリムピックナショナルゴルフクラブ WESTコース アザレア",
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
  name: "オリムピックナショナルゴルフクラブ WESTコース カメリア",
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
  name: "オリムピックナショナルゴルフクラブ WESTコース シバザクラ",
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
  name: "土浦カントリークラブ 西コース",
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
  name: "土浦カントリークラブ 南コース",
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
  name: "土浦カントリークラブ 東コース",
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
  name: "霞台カントリークラブ 筑波コース",
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
  name: "霞台カントリークラブ 霞コース",
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
  name: "川越カントリークラブ 中コース",
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
  name: "川越カントリークラブ 西コース",
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
  name: "川越カントリークラブ 東コース",
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
  name: "房総カントリークラブ 西コース",
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
  name: "房総カントリークラブ 東コース",
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
  name: "房総カントリークラブ 大上ゴルフ場",
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
  name: "おおむらさきゴルフコース 東コース",
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
  name: "おおむらさきゴルフコース 中コース",
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
  name: "おおむらさきゴルフコース 西コース",
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
  name: "岡部チサンカントリークラブ 岡部コース",
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
  name: "岡部チサンカントリークラブ 美里コース",
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


// ─────────────────────────────────────────────────────────────────────────────
// 横浜カントリークラブ（神奈川県横浜市保土ケ谷区 / 36H・1グリーン・ベント）
// ── 西コース（Par71 / BLACK/GREEN/BLUE/WHITE/YELLOW 5ティー）
// ── 東コース（Par73 / BLACK/BLUE/WHITE/GOLD 4ティー）
// 出典：公式サイト https://www.yokohama-cc.jp/west/ https://www.yokohama-cc.jp/east/
// 設計：相山武夫・竹村秀夫 / 西コース改修：Coore&Crenshaw(2014-16)
// 東コース改修：佐藤謙太郎(2000-2010)
// 1978/2018年 日本オープン開催 / 2025年 PGA Tour ベイカレントクラシック開催
// ─────────────────────────────────────────────────────────────────────────────
const YOKOHAMA_CC_WEST = {
  name: "横浜カントリークラブ 西コース",
  holes: [
    { hole: 1, par:4, hdcp: 9, black:447, green:414, blue:414, white:372, yellow:354 },
    { hole: 2, par:3, hdcp:13, black:168, green:156, blue:156, white:131, yellow: 99 },
    { hole: 3, par:4, hdcp: 7, black:294, green:294, blue:275, white:218, yellow:197 },
    { hole: 4, par:4, hdcp: 3, black:514, green:464, blue:432, white:398, yellow:369 },
    { hole: 5, par:5, hdcp: 5, black:523, green:506, blue:506, white:460, yellow:439 },
    { hole: 6, par:4, hdcp:17, black:337, green:337, blue:315, white:266, yellow:241 },
    { hole: 7, par:4, hdcp: 1, black:504, green:473, blue:473, white:439, yellow:362 },
    { hole: 8, par:4, hdcp:15, black:387, green:387, blue:367, white:317, yellow:283 },
    { hole: 9, par:3, hdcp:11, black:237, green:221, blue:187, white:149, yellow:127 },
    { hole:10, par:4, hdcp: 4, black:516, green:478, blue:450, white:435, yellow:418 },
    { hole:11, par:4, hdcp:10, black:418, green:418, blue:391, white:343, yellow:331 },
    { hole:12, par:3, hdcp:18, black:185, green:161, blue:149, white:133, yellow:122 },
    { hole:13, par:5, hdcp: 2, black:536, green:536, blue:492, white:460, yellow:431 },
    { hole:14, par:4, hdcp: 8, black:416, green:385, blue:369, white:341, yellow:300 },
    { hole:15, par:5, hdcp:14, black:529, green:511, blue:474, white:466, yellow:451 },
    { hole:16, par:3, hdcp:16, black:182, green:169, blue:150, white:135, yellow:125 },
    { hole:17, par:4, hdcp: 6, black:330, green:317, blue:317, white:290, yellow:272 },
    { hole:18, par:4, hdcp:12, black:415, green:394, blue:394, white:354, yellow:306 },
  ],
};
const YOKOHAMA_CC_EAST = {
  name: "横浜カントリークラブ 東コース",
  holes: [
    { hole: 1, par:4, hdcp: 9, black:368, blue:349, white:325, gold:317 },
    { hole: 2, par:3, hdcp:15, black:160, blue:136, white:132, gold:119 },
    { hole: 3, par:5, hdcp: 3, black:493, blue:474, white:451, gold:438 },
    { hole: 4, par:4, hdcp: 1, black:355, blue:338, white:319, gold:248 },
    { hole: 5, par:4, hdcp: 7, black:330, blue:319, white:293, gold:192 },
    { hole: 6, par:3, hdcp:13, black:162, blue:148, white:134, gold:130 },
    { hole: 7, par:5, hdcp: 5, black:539, blue:517, white:495, gold:430 },
    { hole: 8, par:4, hdcp:17, black:332, blue:315, white:299, gold:180 },
    { hole: 9, par:4, hdcp:11, black:395, blue:375, white:354, gold:346 },
    { hole:10, par:4, hdcp:10, black:366, blue:345, white:319, gold:311 },
    { hole:11, par:5, hdcp: 4, black:469, blue:454, white:438, gold:434 },
    { hole:12, par:3, hdcp:16, black:136, blue:127, white:120, gold:105 },
    { hole:13, par:4, hdcp: 2, black:388, blue:368, white:350, gold:344 },
    { hole:14, par:4, hdcp:14, black:351, blue:338, white:325, gold:270 },
    { hole:15, par:3, hdcp: 8, black:191, blue:176, white:156, gold:141 },
    { hole:16, par:5, hdcp: 6, black:542, blue:520, white:511, gold:438 },
    { hole:17, par:4, hdcp:18, black:439, blue:386, white:358, gold:335 },
    { hole:18, par:5, hdcp:12, black:492, blue:472, white:447, gold:368 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東京バーディクラブ（東京都青梅市 / 18H・2グリーン FUJI/UME・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/130013
// 設計：ロバート・村島 / GORA評価4.6
// ティー: フルバック / バック / レギュラー / レディース
// ─────────────────────────────────────────────────────────────────────────────
const TOKYO_BIRDIE_CC_COURSE = {
  name: "東京バーディクラブ",
  holes: [
    { hole: 1, par:4, hdcp: 9, fb:455, bk:429, rg:398, ld:355 },
    { hole: 2, par:4, hdcp:13, fb:400, bk:376, rg:350, ld:302 },
    { hole: 3, par:5, hdcp: 3, fb:525, bk:501, rg:483, ld:402 },
    { hole: 4, par:3, hdcp: 7, fb:182, bk:172, rg:142, ld:142 },
    { hole: 5, par:5, hdcp:15, fb:550, bk:522, rg:500, ld:482 },
    { hole: 6, par:4, hdcp: 1, fb:455, bk:430, rg:398, ld:281 },
    { hole: 7, par:4, hdcp:11, fb:426, bk:403, rg:376, ld:323 },
    { hole: 8, par:3, hdcp:17, fb:167, bk:167, rg:145, ld:117 },
    { hole: 9, par:4, hdcp: 5, fb:419, bk:395, rg:368, ld:281 },
    { hole:10, par:4, hdcp:12, fb:387, bk:370, rg:347, ld:314 },
    { hole:11, par:4, hdcp:14, fb:423, bk:403, rg:365, ld:291 },
    { hole:12, par:4, hdcp: 6, fb:404, bk:404, rg:379, ld:317 },
    { hole:13, par:5, hdcp:18, fb:554, bk:542, rg:510, ld:429 },
    { hole:14, par:3, hdcp:16, fb:175, bk:175, rg:154, ld:115 },
    { hole:15, par:4, hdcp: 8, fb:425, bk:407, rg:320, ld:295 },
    { hole:16, par:4, hdcp: 2, fb:483, bk:460, rg:415, ld:314 },
    { hole:17, par:3, hdcp: 4, fb:195, bk:195, rg:174, ld:105 },
    { hole:18, par:5, hdcp:10, fb:556, bk:530, rg:476, ld:445 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東京よみうりカントリークラブ（東京都稲城市 / 18H・2グリーン ベント/コーライ）
// 出典：公式サイト https://www.tokyoyomiuri.com/course/holes/
// 設計：井上誠一 / 開場：1964年 / ゴルフ日本シリーズ毎年開催
// ※H6のみ ベント=Par5 / コーライ=Par4（異なるPar）
// ベントティー: Tournament / Blue / White / Gold / Green
// コーライティー: Blue / White / Gold / Green
// ─────────────────────────────────────────────────────────────────────────────
const TOKYO_YOMIURI_CC_COURSE = {
  name: "東京よみうりカントリークラブ",
  holes: [
    { hole: 1, bentPar:4, koraiPar:4, hdcp: 9,
      bent:{to:396,bl:396,wh:374,go:341,gr:293}, korai:{bl:381,wh:359,go:326,gr:278} },
    { hole: 2, bentPar:3, koraiPar:3, hdcp:17,
      bent:{to:190,bl:190,wh:160,go:134,gr:124}, korai:{bl:171,wh:141,go:115,gr:105} },
    { hole: 3, bentPar:4, koraiPar:4, hdcp: 1,
      bent:{to:403,bl:314,wh:307,go:302,gr:244}, korai:{bl:325,wh:316,go:308,gr:257} },
    { hole: 4, bentPar:5, koraiPar:5, hdcp: 7,
      bent:{to:518,bl:518,wh:479,go:467,gr:335}, korai:{bl:516,wh:477,go:465,gr:333} },
    { hole: 5, bentPar:4, koraiPar:4, hdcp: 3,
      bent:{to:384,bl:384,wh:354,go:323,gr:254}, korai:{bl:366,wh:366,go:305,gr:236} },
    { hole: 6, bentPar:5, koraiPar:4, hdcp:11,
      bent:{to:519,bl:519,wh:475,go:456,gr:388}, korai:{bl:410,wh:383,go:347,gr:279} },
    { hole: 7, bentPar:4, koraiPar:4, hdcp:13,
      bent:{to:389,bl:389,wh:359,go:331,gr:261}, korai:{bl:379,wh:349,go:321,gr:251} },
    { hole: 8, bentPar:3, koraiPar:3, hdcp:15,
      bent:{to:197,bl:197,wh:171,go:166,gr:155}, korai:{bl:168,wh:142,go:137,gr:126} },
    { hole: 9, bentPar:4, koraiPar:4, hdcp: 5,
      bent:{to:448,bl:448,wh:421,go:342,gr:269}, korai:{bl:428,wh:401,go:322,gr:249} },
    { hole:10, bentPar:4, koraiPar:4, hdcp:10,
      bent:{to:432,bl:432,wh:407,go:384,gr:343}, korai:{bl:400,wh:375,go:352,gr:311} },
    { hole:11, bentPar:5, koraiPar:5, hdcp: 8,
      bent:{to:507,bl:507,wh:489,go:463,gr:358}, korai:{bl:507,wh:489,go:463,gr:358} },
    { hole:12, bentPar:4, koraiPar:4, hdcp: 2,
      bent:{to:432,bl:432,wh:408,go:388,gr:282}, korai:{bl:389,wh:365,go:345,gr:239} },
    { hole:13, bentPar:4, koraiPar:4, hdcp: 6,
      bent:{to:460,bl:460,wh:435,go:412,gr:326}, korai:{bl:420,wh:395,go:372,gr:286} },
    { hole:14, bentPar:4, koraiPar:4, hdcp:14,
      bent:{to:364,bl:364,wh:324,go:294,gr:201}, korai:{bl:346,wh:306,go:276,gr:183} },
    { hole:15, bentPar:3, koraiPar:3, hdcp:18,
      bent:{to:194,bl:194,wh:170,go:157,gr:118}, korai:{bl:179,wh:155,go:142,gr:103} },
    { hole:16, bentPar:4, koraiPar:4, hdcp:12,
      bent:{to:410,bl:410,wh:381,go:360,gr:298}, korai:{bl:386,wh:357,go:336,gr:274} },
    { hole:17, bentPar:5, koraiPar:5, hdcp: 4,
      bent:{to:535,bl:535,wh:520,go:473,gr:398}, korai:{bl:520,wh:505,go:458,gr:383} },
    { hole:18, bentPar:3, koraiPar:3, hdcp:16,
      bent:{to:224,bl:224,wh:202,go:189,gr:164}, korai:{bl:184,wh:162,go:149,gr:124} },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// ジュンクラシックカントリークラブ（栃木県那須郡那珂川町 / 36H・2グリーン ベント×2）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/322204/course-info/
// 設計：宮崎勤・佐々木忠 / 監修：ジーン・サラゼン / GORA評価4.9
// コース：椿ルート(OUT+IN) / 山吹ルート(OUT+IN)（各Par73）
// ※2グリーンはどちらもベント（ペンクロス）で距離は共通（グリーン別距離なし）
// ティー: CT / RT / FT / LT
// ─────────────────────────────────────────────────────────────────────────────
const JUN_CLASSIC_CC_TSUBAKI = {
  name: "ジュンクラシック 椿ルート",
  holes: [
    { hole: 1, par:5, hdcp: 3, ct:551, rt:539, ft:522, lt:415 },
    { hole: 2, par:4, hdcp: 9, ct:417, rt:369, ft:288, lt:272 },
    { hole: 3, par:4, hdcp:15, ct:354, rt:355, ft:335, lt:248 },
    { hole: 4, par:4, hdcp: 1, ct:404, rt:391, ft:321, lt:279 },
    { hole: 5, par:3, hdcp:13, ct:185, rt:163, ft:133, lt:103 },
    { hole: 6, par:4, hdcp: 7, ct:403, rt:381, ft:335, lt:286 },
    { hole: 7, par:3, hdcp:11, ct:162, rt:148, ft:148, lt:141 },
    { hole: 8, par:4, hdcp:17, ct:355, rt:355, ft:335, lt:245 },
    { hole: 9, par:5, hdcp: 5, ct:536, rt:526, ft:486, lt:395 },
    { hole:10, par:4, hdcp:16, ct:343, rt:330, ft:321, lt:298 },
    { hole:11, par:5, hdcp: 4, ct:545, rt:512, ft:512, lt:408 },
    { hole:12, par:3, hdcp:10, ct:164, rt:154, ft:138, lt: 75 },
    { hole:13, par:4, hdcp: 8, ct:393, rt:376, ft:376, lt:325 },
    { hole:14, par:4, hdcp: 2, ct:451, rt:428, ft:428, lt:340 },
    { hole:15, par:5, hdcp:14, ct:483, rt:454, ft:454, lt:303 },
    { hole:16, par:4, hdcp:12, ct:416, rt:390, ft:390, lt:285 },
    { hole:17, par:3, hdcp: 6, ct:175, rt:162, ft:157, lt:128 },
    { hole:18, par:5, hdcp:18, ct:485, rt:485, ft:476, lt:389 },
  ],
};
const JUN_CLASSIC_CC_YAMABUKI = {
  name: "ジュンクラシック 山吹ルート",
  holes: [
    { hole: 1, par:5, hdcp: 3, ct:552, rt:540, ft:523, lt:346 },
    { hole: 2, par:4, hdcp: 9, ct:392, rt:354, ft:336, lt:259 },
    { hole: 3, par:4, hdcp:15, ct:368, rt:344, ft:324, lt:237 },
    { hole: 4, par:5, hdcp:13, ct:452, rt:445, ft:439, lt:327 },
    { hole: 5, par:3, hdcp: 1, ct:215, rt:192, ft:139, lt:109 },
    { hole: 6, par:4, hdcp: 7, ct:408, rt:386, ft:340, lt:279 },
    { hole: 7, par:3, hdcp:11, ct:182, rt:168, ft:168, lt:163 },
    { hole: 8, par:4, hdcp:17, ct:348, rt:348, ft:328, lt:228 },
    { hole: 9, par:5, hdcp: 5, ct:521, rt:520, ft:471, lt:395 },
    { hole:10, par:4, hdcp:16, ct:352, rt:326, ft:313, lt:283 },
    { hole:11, par:5, hdcp:10, ct:572, rt:539, ft:444, lt:372 },
    { hole:12, par:3, hdcp: 4, ct:202, rt:188, ft:168, lt:125 },
    { hole:13, par:4, hdcp: 2, ct:379, rt:362, ft:346, lt:312 },
    { hole:14, par:4, hdcp: 8, ct:408, rt:385, ft:341, lt:293 },
    { hole:15, par:4, hdcp:14, ct:396, rt:367, ft:351, lt:212 },
    { hole:16, par:4, hdcp: 6, ct:384, rt:364, ft:364, lt:292 },
    { hole:17, par:3, hdcp:12, ct:175, rt:162, ft:135, lt:118 },
    { hole:18, par:5, hdcp:18, ct:523, rt:504, ft:493, lt:444 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 緑野カントリークラブ（群馬県藤岡市 / 18H・1グリーン・ベント / アコーディア）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/100069
// 設計：加藤俊輔 / 群馬県人気No.1コース
// ティー: Blue（バック） / White（レギュラー） / Red（レディース）
// ─────────────────────────────────────────────────────────────────────────────
const MIDONO_CC_COURSE = {
  name: "緑野カントリークラブ",
  holes: [
    { hole: 1, par:4, hdcp:13, blue:328, white:310, red:293 },
    { hole: 2, par:5, hdcp: 9, blue:553, white:522, red:460 },
    { hole: 3, par:4, hdcp: 3, blue:378, white:352, red:305 },
    { hole: 4, par:3, hdcp:11, blue:205, white:177, red:141 },
    { hole: 5, par:4, hdcp: 5, blue:312, white:262, red:241 },
    { hole: 6, par:3, hdcp:17, blue:203, white:186, red:170 },
    { hole: 7, par:4, hdcp: 1, blue:451, white:431, red:332 },
    { hole: 8, par:5, hdcp: 7, blue:528, white:506, red:456 },
    { hole: 9, par:4, hdcp:15, blue:397, white:357, red:329 },
    { hole:10, par:4, hdcp:12, blue:423, white:384, red:322 },
    { hole:11, par:5, hdcp: 6, blue:582, white:556, red:498 },
    { hole:12, par:3, hdcp:16, blue:219, white:191, red:139 },
    { hole:13, par:4, hdcp: 2, blue:354, white:320, red:280 },
    { hole:14, par:5, hdcp: 8, blue:500, white:478, red:414 },
    { hole:15, par:3, hdcp:18, blue:151, white:118, red:106 },
    { hole:16, par:4, hdcp: 4, blue:409, white:386, red:267 },
    { hole:17, par:4, hdcp:10, blue:443, white:391, red:355 },
    { hole:18, par:4, hdcp:14, blue:415, white:383, red:327 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ロペ倶楽部（栃木県塩谷郡塩谷町 / 18H・2グリーン YELLOW/RED・ベント / Par74）
// 出典：公式サイト https://www.ropeclub.com/course_guide （ヤーデージ）
//       GDO https://reserve.golfdigest.co.jp/golf-course/328503/course-info/ （HDCP）
// 設計：佐々木忠 / 監修：ジーン・サラゼン / GORA評価4.8 / 1990年開場
// ※YELLOW Route BT:6749/RT:6230/LT:5178、RED Route BT:6777/RT:6239/LT:5218
// ※両グリーンでINの距離は同一。OUTのみ異なる。
// ティー: BT（バック） / RT（レギュラー） / LT（レディース）
// ─────────────────────────────────────────────────────────────────────────────
const ROPE_CLUB_COURSE = {
  name: "ロペ倶楽部",
  holes: [
    // ─── OUT ───
    { hole:1, par:5, hdcp: 7, ybt:530,yrt:501,ylt:396, rbt:492,rrt:450,rlt:345 },
    { hole:2, par:4, hdcp:13, ybt:374,yrt:318,ylt:250, rbt:385,rrt:327,rlt:259 },
    { hole:3, par:5, hdcp: 5, ybt:499,yrt:484,ylt:429, rbt:503,rrt:488,rlt:433 },
    { hole:4, par:3, hdcp: 1, ybt:218,yrt:166,ylt:130, rbt:218,rrt:168,rlt:140 },
    { hole:5, par:4, hdcp:17, ybt:340,yrt:317,ylt:260, rbt:310,rrt:287,rlt:230 },
    { hole:6, par:4, hdcp:11, ybt:398,yrt:367,ylt:324, rbt:379,rrt:348,rlt:305 },
    { hole:7, par:4, hdcp: 3, ybt:317,yrt:293,ylt:271, rbt:340,rrt:316,rlt:294 },
    { hole:8, par:3, hdcp:15, ybt:167,yrt:148,ylt:118, rbt:176,rrt:152,rlt:138 },
    { hole:9, par:5, hdcp: 9, ybt:471,yrt:450,ylt:381, rbt:527,rrt:500,rlt:431 },
    // ─── IN（Yellow/Red共通距離）───
    { hole:10, par:4, hdcp: 8, ybt:366,yrt:335,ylt:271, rbt:366,rrt:335,rlt:271 },
    { hole:11, par:3, hdcp:18, ybt:149,yrt:143,ylt:130, rbt:149,rrt:143,rlt:130 },
    { hole:12, par:5, hdcp: 4, ybt:530,yrt:513,ylt:429, rbt:530,rrt:513,rlt:429 },
    { hole:13, par:4, hdcp:14, ybt:362,yrt:340,ylt:286, rbt:362,rrt:340,rlt:286 },
    { hole:14, par:3, hdcp:12, ybt:175,yrt:130,ylt:106, rbt:175,rrt:130,rlt:106 },
    { hole:15, par:5, hdcp: 6, ybt:540,yrt:486,ylt:335, rbt:540,rrt:486,rlt:335 },
    { hole:16, par:4, hdcp: 2, ybt:431,yrt:415,ylt:332, rbt:431,rrt:415,rlt:332 },
    { hole:17, par:4, hdcp:16, ybt:374,yrt:354,ylt:330, rbt:374,rrt:354,rlt:330 },
    { hole:18, par:5, hdcp:10, ybt:520,yrt:487,ylt:424, rbt:520,rrt:487,rlt:424 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 富士桜カントリー倶楽部（山梨県南都留郡富士河口湖町 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/190030/
// 設計：志村和也 / フジサンケイクラシック開催コース / GORA評価4.8
// ティー: Tournament / Back / Regular / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const FUJIZAKURA_CC_COURSE = {
  name: "富士桜カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp: 9, to:410, bk:356, rg:337, ld:320 },
    { hole: 2, par:3, hdcp:13, to:202, bk:187, rg:165, ld:119 },
    { hole: 3, par:5, hdcp:11, to:570, bk:480, rg:462, ld:403 },
    { hole: 4, par:3, hdcp:17, to:185, bk:150, rg:128, ld:101 },
    { hole: 5, par:5, hdcp: 1, to:501, bk:550, rg:483, ld:372 },
    { hole: 6, par:5, hdcp: 3, to:596, bk:534, rg:497, ld:378 },
    { hole: 7, par:3, hdcp: 7, to:212, bk:171, rg:153, ld:113 },
    { hole: 8, par:4, hdcp: 5, to:493, bk:392, rg:367, ld:267 },
    { hole: 9, par:4, hdcp:15, to:441, bk:396, rg:370, ld:244 },
    { hole:10, par:4, hdcp: 6, to:490, bk:441, rg:404, ld:368 },
    { hole:11, par:4, hdcp: 2, to:492, bk:433, rg:421, ld:361 },
    { hole:12, par:4, hdcp:18, to:402, bk:378, rg:333, ld:233 },
    { hole:13, par:3, hdcp:14, to:208, bk:200, rg:172, ld:151 },
    { hole:14, par:4, hdcp:16, to:425, bk:378, rg:360, ld:348 },
    { hole:15, par:5, hdcp:12, to:590, bk:546, rg:517, ld:426 },
    { hole:16, par:3, hdcp: 8, to:187, bk:177, rg:155, ld:130 },
    { hole:17, par:5, hdcp:10, to:568, bk:536, rg:496, ld:416 },
    { hole:18, par:4, hdcp: 4, to:465, bk:402, rg:372, ld:302 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 武蔵カントリークラブ 豊岡コース（埼玉県入間市 / 18H・2グリーン WHITE/RED・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110071/
// 設計：井上誠一 / 2009年日本オープン開催 / HDCPは非設定（全0）
// ティー: Back / Regular / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const MUSASHI_TOYOOKA_COURSE = {
  name: "武蔵カントリークラブ 豊岡コース",
  holes: [
    { hole: 1, par:5, bk:555, rg:520, ft:478, ld:448 },
    { hole: 2, par:4, bk:363, rg:341, ft:329, ld:309 },
    { hole: 3, par:3, bk:140, rg:130, ft:113, ld:113 },
    { hole: 4, par:4, bk:431, rg:412, ft:402, ld:327 },
    { hole: 5, par:4, bk:362, rg:343, ft:324, ld:274 },
    { hole: 6, par:5, bk:515, rg:493, ft:484, ld:418 },
    { hole: 7, par:4, bk:390, rg:378, ft:364, ld:344 },
    { hole: 8, par:4, bk:422, rg:389, ft:379, ld:329 },
    { hole: 9, par:3, bk:177, rg:170, ft:158, ld:136 },
    { hole:10, par:5, bk:560, rg:532, ft:479, ld:449 },
    { hole:11, par:4, bk:423, rg:399, ft:391, ld:341 },
    { hole:12, par:3, bk:154, rg:136, ft:117, ld:117 },
    { hole:13, par:5, bk:523, rg:479, ft:465, ld:404 },
    { hole:14, par:4, bk:417, rg:392, ft:383, ld:313 },
    { hole:15, par:4, bk:350, rg:331, ft:323, ld:261 },
    { hole:16, par:3, bk:230, rg:214, ft:180, ld:170 },
    { hole:17, par:4, bk:372, rg:349, ft:337, ld:293 },
    { hole:18, par:4, bk:427, rg:396, ft:386, ld:322 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 武蔵カントリークラブ 笹井コース（埼玉県狭山市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110070/
// 設計：井上誠一 / 2014年リニューアル（1グリーン化・池・バンカー新設）
// ティー: Back / Regular / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const MUSASHI_SASAI_COURSE = {
  name: "武蔵カントリークラブ 笹井コース",
  holes: [
    { hole: 1, par:4, hdcp: 7, bk:409, rg:392, ft:375, ld:354 },
    { hole: 2, par:5, hdcp: 3, bk:547, rg:512, ft:482, ld:448 },
    { hole: 3, par:3, hdcp:17, bk:172, rg:160, ft:148, ld:129 },
    { hole: 4, par:4, hdcp:13, bk:369, rg:341, ft:318, ld:293 },
    { hole: 5, par:4, hdcp: 1, bk:444, rg:421, ft:394, ld:346 },
    { hole: 6, par:5, hdcp: 9, bk:551, rg:517, ft:493, ld:438 },
    { hole: 7, par:4, hdcp:11, bk:418, rg:394, ft:372, ld:295 },
    { hole: 8, par:4, hdcp: 5, bk:379, rg:353, ft:328, ld:301 },
    { hole: 9, par:3, hdcp:15, bk:212, rg:186, ft:166, ld:148 },
    { hole:10, par:4, hdcp: 8, bk:427, rg:409, ft:381, ld:345 },
    { hole:11, par:5, hdcp: 4, bk:574, rg:532, ft:510, ld:471 },
    { hole:12, par:4, hdcp:12, bk:396, rg:372, ft:346, ld:329 },
    { hole:13, par:3, hdcp:10, bk:240, rg:205, ft:176, ld:146 },
    { hole:14, par:4, hdcp: 2, bk:415, rg:391, ft:368, ld:332 },
    { hole:15, par:4, hdcp:16, bk:354, rg:334, ft:320, ld:290 },
    { hole:16, par:3, hdcp:18, bk:153, rg:139, ft:122, ld:106 },
    { hole:17, par:5, hdcp: 6, bk:563, rg:528, ft:498, ld:452 },
    { hole:18, par:4, hdcp:14, bk:440, rg:411, ft:389, ld:357 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 甘楽カントリークラブ（群馬県甘楽郡甘楽町 / 18H・2グリーン 第1/第2・ベント / アコーディア）
// 出典：スコアカード画像（2025年）
// 設計：安田幸吉 / 1984年日本女子オープン開催 / GDO総合評価4.6
// ティー: Blue / White / Green / Red
// ─────────────────────────────────────────────────────────────────────────────
const KANRA_CC_G1 = {
  name: "甘楽カントリークラブ 第1グリーン",
  holes: [
    { hole: 1, par:4, hdcp: 9, bl:420, wh:401, gr:331, re:270 },
    { hole: 2, par:4, hdcp: 3, bl:413, wh:394, gr:291, re:260 },
    { hole: 3, par:4, hdcp:11, bl:400, wh:375, gr:311, re:240 },
    { hole: 4, par:3, hdcp:15, bl:168, wh:157, gr:145, re:136 },
    { hole: 5, par:4, hdcp:13, bl:391, wh:374, gr:298, re:250 },
    { hole: 6, par:5, hdcp: 1, bl:542, wh:523, gr:413, re:350 },
    { hole: 7, par:4, hdcp: 7, bl:387, wh:367, gr:319, re:240 },
    { hole: 8, par:3, hdcp:17, bl:188, wh:175, gr:152, re:115 },
    { hole: 9, par:5, hdcp: 5, bl:611, wh:544, gr:405, re:350 },
    { hole:10, par:4, hdcp: 6, bl:392, wh:370, gr:299, re:250 },
    { hole:11, par:4, hdcp:16, bl:344, wh:329, gr:329, re:250 },
    { hole:12, par:4, hdcp:12, bl:390, wh:374, gr:315, re:260 },
    { hole:13, par:4, hdcp: 2, bl:430, wh:414, gr:336, re:265 },
    { hole:14, par:3, hdcp:18, bl:194, wh:151, gr:137, re:100 },
    { hole:15, par:4, hdcp: 8, bl:375, wh:367, gr:347, re:266 },
    { hole:16, par:5, hdcp: 4, bl:519, wh:509, gr:402, re:330 },
    { hole:17, par:3, hdcp:14, bl:170, wh:155, gr:155, re:115 },
    { hole:18, par:5, hdcp:10, bl:540, wh:526, gr:405, re:330 },
  ],
};
const KANRA_CC_G2 = {
  name: "甘楽カントリークラブ 第2グリーン",
  holes: [
    { hole: 1, par:4, hdcp: 9, bl:397, wh:378, gr:308, re:247 },
    { hole: 2, par:4, hdcp: 3, bl:399, wh:381, gr:278, re:247 },
    { hole: 3, par:4, hdcp:11, bl:392, wh:367, gr:300, re:229 },
    { hole: 4, par:3, hdcp:15, bl:149, wh:140, gr:129, re:120 },
    { hole: 5, par:4, hdcp:13, bl:377, wh:360, gr:284, re:236 },
    { hole: 6, par:5, hdcp: 1, bl:535, wh:517, gr:407, re:344 },
    { hole: 7, par:4, hdcp: 7, bl:363, wh:345, gr:297, re:218 },
    { hole: 8, par:3, hdcp:17, bl:159, wh:149, gr:136, re: 88 },
    { hole: 9, par:5, hdcp: 5, bl:605, wh:537, gr:398, re:343 },
    { hole:10, par:4, hdcp: 6, bl:373, wh:351, gr:283, re:239 },
    { hole:11, par:4, hdcp:16, bl:313, wh:297, gr:297, re:211 },
    { hole:12, par:4, hdcp:12, bl:387, wh:371, gr:313, re:258 },
    { hole:13, par:4, hdcp: 2, bl:417, wh:402, gr:324, re:253 },
    { hole:14, par:3, hdcp:18, bl:155, wh:143, gr:129, re: 85 },
    { hole:15, par:4, hdcp: 8, bl:354, wh:346, gr:326, re:245 },
    { hole:16, par:5, hdcp: 4, bl:495, wh:484, gr:377, re:305 },
    { hole:17, par:3, hdcp:14, bl:142, wh:127, gr:112, re: 87 },
    { hole:18, par:5, hdcp:10, bl:536, wh:497, gr:375, re:300 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 箱根カントリー倶楽部（神奈川県足柄下郡箱根町 / 18H・1グリーン・ベント）
// 出典：スコアカード画像（公式）
// コースレーティング：Champion73.4 / Back72.3 / Regular69.9 / Front67.6 / Ladies65.6（男子）
// ティー: Champion / Back / Regular / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const HAKONE_CC_COURSE = {
  name: "箱根カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp: 9, ch:416, bk:396, rg:372, ft:347, ld:328 },
    { hole: 2, par:3, hdcp:15, ch:143, bk:143, rg:128, ft:128, ld:106 },
    { hole: 3, par:4, hdcp: 3, ch:470, bk:450, rg:426, ft:331, ld:331 },
    { hole: 4, par:4, hdcp: 1, ch:442, bk:442, rg:386, ft:359, ld:311 },
    { hole: 5, par:5, hdcp: 7, ch:560, bk:533, rg:499, ft:463, ld:450 },
    { hole: 6, par:3, hdcp:13, ch:209, bk:188, rg:164, ft:148, ld:133 },
    { hole: 7, par:4, hdcp:17, ch:363, bk:363, rg:339, ft:313, ld:273 },
    { hole: 8, par:5, hdcp: 5, ch:520, bk:505, rg:486, ft:466, ld:453 },
    { hole: 9, par:4, hdcp:11, ch:419, bk:407, rg:394, ft:348, ld:348 },
    { hole:10, par:3, hdcp:16, ch:215, bk:200, rg:180, ft:166, ld:152 },
    { hole:11, par:4, hdcp: 4, ch:433, bk:404, rg:385, ft:362, ld:320 },
    { hole:12, par:5, hdcp:10, ch:493, bk:493, rg:470, ft:418, ld:418 },
    { hole:13, par:4, hdcp: 8, ch:416, bk:399, rg:380, ft:352, ld:289 },
    { hole:14, par:3, hdcp:14, ch:188, bk:188, rg:164, ft:147, ld:127 },
    { hole:15, par:5, hdcp: 2, ch:576, bk:554, rg:502, ft:454, ld:431 },
    { hole:16, par:4, hdcp:18, ch:396, bk:383, rg:357, ft:335, ld:335 },
    { hole:17, par:4, hdcp: 6, ch:468, bk:452, rg:434, ft:412, ld:348 },
    { hole:18, par:4, hdcp:12, ch:427, bk:427, rg:402, ft:373, ld:349 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 富士箱根カントリークラブ（神奈川県足柄上郡山北町 / 18H・1グリーン・ベント）
// 出典：ヤーデージブック画像（公式）
// HDCPは非掲載 / ティー: BT（バック） / RT（レギュラー） / LT（レディース）
// ─────────────────────────────────────────────────────────────────────────────
const FUJIHAKONE_CC_COURSE = {
  name: "富士箱根カントリークラブ",
  holes: [
    { hole: 1, par:5, bt:494, rt:482, lt:420 },
    { hole: 2, par:3, bt:140, rt:125, lt:125 },
    { hole: 3, par:4, bt:370, rt:337, lt:285 },
    { hole: 4, par:5, bt:500, rt:471, lt:374 },
    { hole: 5, par:4, bt:389, rt:369, lt:303 },
    { hole: 6, par:4, bt:400, rt:376, lt:331 },
    { hole: 7, par:3, bt:173, rt:156, lt:110 },
    { hole: 8, par:4, bt:347, rt:325, lt:315 },
    { hole: 9, par:4, bt:369, rt:350, lt:276 },
    { hole:10, par:4, bt:371, rt:358, lt:318 },
    { hole:11, par:3, bt:156, rt:143, lt:115 },
    { hole:12, par:5, bt:530, rt:520, lt:425 },
    { hole:13, par:4, bt:420, rt:389, lt:350 },
    { hole:14, par:3, bt:142, rt:121, lt:105 },
    { hole:15, par:4, bt:427, rt:410, lt:256 },
    { hole:16, par:4, bt:332, rt:311, lt:290 },
    { hole:17, par:4, bt:322, rt:295, lt:282 },
    { hole:18, par:5, bt:533, rt:497, lt:459 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 茨城ゴルフ倶楽部 西コース（茨城県東茨城郡茨城町 / 18H・2グリーン A/B・ベント）
// 出典：スコアカード画像（コースレーティング認定日2025.11.07）
// ティー: BLACK / BLUE / WHITE / GREEN / ORANGE（各A/Bグリーン別距離）
// ─────────────────────────────────────────────────────────────────────────────
const IBARAKI_GC_WEST_A = {
  name: "茨城ゴルフ倶楽部 西コース Aグリーン",
  holes: [
    { hole: 1, par:4, hdcp:15, black:359, blue:346, white:333, green:296, orange:296 },
    { hole: 2, par:4, hdcp: 9, black:400, blue:365, white:355, green:279, orange:279 },
    { hole: 3, par:5, hdcp: 3, black:565, blue:543, white:491, green:463, orange:408 },
    { hole: 4, par:4, hdcp: 1, black:447, blue:411, white:366, green:349, orange:323 },
    { hole: 5, par:5, hdcp: 7, black:528, blue:503, white:475, green:408, orange:364 },
    { hole: 6, par:3, hdcp:13, black:196, blue:170, white:163, green:150, orange:117 },
    { hole: 7, par:4, hdcp: 5, black:441, blue:406, white:374, green:313, orange:289 },
    { hole: 8, par:3, hdcp:17, black:208, blue:184, white:170, green:142, orange:142 },
    { hole: 9, par:4, hdcp:11, black:418, blue:394, white:383, green:329, orange:329 },
    { hole:10, par:4, hdcp:16, black:370, blue:342, white:327, green:296, orange:296 },
    { hole:11, par:4, hdcp: 4, black:428, blue:411, white:355, green:326, orange:326 },
    { hole:12, par:5, hdcp:10, black:541, blue:507, white:487, green:450, orange:450 },
    { hole:13, par:3, hdcp:14, black:214, blue:195, white:186, green:137, orange:137 },
    { hole:14, par:4, hdcp: 2, black:438, blue:415, white:396, green:371, orange:371 },
    { hole:15, par:3, hdcp: 8, black:193, blue:151, white:120, green: 98, orange: 98 },
    { hole:16, par:4, hdcp:18, black:393, blue:381, white:376, green:293, orange:293 },
    { hole:17, par:5, hdcp: 6, black:566, blue:538, white:511, green:437, orange:437 },
    { hole:18, par:4, hdcp:12, black:415, blue:384, white:371, green:334, orange:334 },
  ],
};
const IBARAKI_GC_WEST_B = {
  name: "茨城ゴルフ倶楽部 西コース Bグリーン",
  holes: [
    { hole: 1, par:4, hdcp:15, black:355, blue:342, white:329, green:292, orange:292 },
    { hole: 2, par:4, hdcp: 9, black:381, blue:346, white:336, green:260, orange:260 },
    { hole: 3, par:5, hdcp: 3, black:535, blue:513, white:461, green:433, orange:378 },
    { hole: 4, par:4, hdcp: 1, black:432, blue:396, white:351, green:334, orange:308 },
    { hole: 5, par:5, hdcp: 7, black:512, blue:487, white:459, green:392, orange:348 },
    { hole: 6, par:3, hdcp:13, black:178, blue:152, white:145, green:132, orange: 99 },
    { hole: 7, par:4, hdcp: 5, black:425, blue:390, white:358, green:297, orange:273 },
    { hole: 8, par:3, hdcp:17, black:189, blue:165, white:151, green:123, orange:123 },
    { hole: 9, par:4, hdcp:11, black:388, blue:364, white:353, green:299, orange:299 },
    { hole:10, par:4, hdcp:16, black:364, blue:336, white:321, green:290, orange:290 },
    { hole:11, par:4, hdcp: 4, black:410, blue:393, white:337, green:308, orange:308 },
    { hole:12, par:5, hdcp:10, black:523, blue:489, white:469, green:432, orange:432 },
    { hole:13, par:3, hdcp:14, black:198, blue:179, white:170, green:121, orange:121 },
    { hole:14, par:4, hdcp: 2, black:414, blue:391, white:372, green:347, orange:347 },
    { hole:15, par:3, hdcp: 8, black:211, blue:169, white:138, green:116, orange:116 },
    { hole:16, par:4, hdcp:18, black:377, blue:365, white:360, green:277, orange:277 },
    { hole:17, par:5, hdcp: 6, black:543, blue:515, white:488, green:414, orange:414 },
    { hole:18, par:4, hdcp:12, black:403, blue:372, white:359, green:322, orange:322 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 茨城ゴルフ倶楽部 東コース（茨城県東茨城郡茨城町 / 18H・1グリーン・ベント）
// 出典：スコアカード画像（コースレーティング認定日2024.07.12）
// ティー: CHAMPION / BLACK / BLUE / WHITE / GREEN / ORANGE
// ─────────────────────────────────────────────────────────────────────────────
const IBARAKI_GC_EAST = {
  name: "茨城ゴルフ倶楽部 東コース",
  holes: [
    { hole: 1, par:5, hdcp:17, ch:528, bk:528, bl:507, wh:484, gr:445, or:445 },
    { hole: 2, par:3, hdcp:11, ch:240, bk:240, bl:189, wh:150, gr:119, or:119 },
    { hole: 3, par:4, hdcp: 3, ch:461, bk:461, bl:416, wh:403, gr:355, or:317 },
    { hole: 4, par:4, hdcp: 7, ch:395, bk:395, bl:365, wh:349, gr:295, or:295 },
    { hole: 5, par:4, hdcp: 1, ch:410, bk:410, bl:368, wh:351, gr:305, or:305 },
    { hole: 6, par:3, hdcp:13, ch:199, bk:190, bl:177, wh:153, gr:134, or:134 },
    { hole: 7, par:4, hdcp:15, ch:389, bk:389, bl:367, wh:351, gr:292, or:292 },
    { hole: 8, par:4, hdcp: 5, ch:445, bk:421, bl:401, wh:390, gr:357, or:357 },
    { hole: 9, par:5, hdcp: 9, ch:582, bk:545, bl:510, wh:475, gr:420, or:420 },
    { hole:10, par:4, hdcp: 4, ch:442, bk:442, bl:417, wh:382, gr:366, or:366 },
    { hole:11, par:4, hdcp:16, ch:445, bk:376, bl:351, wh:340, gr:298, or:298 },
    { hole:12, par:4, hdcp:12, ch:398, bk:398, bl:375, wh:361, gr:329, or:329 },
    { hole:13, par:3, hdcp:14, ch:184, bk:184, bl:158, wh:128, gr:107, or:107 },
    { hole:14, par:4, hdcp:18, ch:400, bk:400, bl:374, wh:360, gr:266, or:266 },
    { hole:15, par:5, hdcp: 2, ch:586, bk:531, bl:493, wh:482, gr:445, or:445 },
    { hole:16, par:4, hdcp: 6, ch:470, bk:434, bl:413, wh:400, gr:350, or:350 },
    { hole:17, par:3, hdcp: 8, ch:223, bk:223, bl:191, wh:161, gr:148, or:135 },
    { hole:18, par:5, hdcp:10, ch:539, bk:522, bl:512, wh:482, gr:421, or:421 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 鳴沢ゴルフ倶楽部（山梨県南都留郡鳴沢村 / 18H・1グリーン・ベント）
// 出典：スコアカード画像（公式 https://zuien.net/narusawa/）
// ティー: CHAMP / BACK / REGU / GOLD
// ─────────────────────────────────────────────────────────────────────────────
const NARUSAWA_GC_COURSE = {
  name: "鳴沢ゴルフ倶楽部",
  holes: [
    { hole: 1, par:5, hdcp: 7, ch:553, bk:553, rg:517, go:466 },
    { hole: 2, par:4, hdcp:11, ch:383, bk:383, rg:350, go:315 },
    { hole: 3, par:3, hdcp:13, ch:229, bk:208, rg:181, go:163 },
    { hole: 4, par:4, hdcp: 9, ch:391, bk:391, rg:346, go:307 },
    { hole: 5, par:5, hdcp: 1, ch:554, bk:533, rg:490, go:449 },
    { hole: 6, par:4, hdcp:15, ch:425, bk:410, rg:384, go:346 },
    { hole: 7, par:4, hdcp: 3, ch:457, bk:446, rg:398, go:340 },
    { hole: 8, par:3, hdcp:17, ch:174, bk:174, rg:138, go: 89 },
    { hole: 9, par:4, hdcp: 5, ch:453, bk:453, rg:425, go:365 },
    { hole:10, par:3, hdcp:16, ch:184, bk:184, rg:160, go:126 },
    { hole:11, par:4, hdcp:14, ch:386, bk:386, rg:365, go:269 },
    { hole:12, par:5, hdcp: 2, ch:530, bk:530, rg:494, go:444 },
    { hole:13, par:4, hdcp:10, ch:405, bk:372, rg:352, go:320 },
    { hole:14, par:4, hdcp:18, ch:368, bk:368, rg:337, go:290 },
    { hole:15, par:4, hdcp: 4, ch:389, bk:365, rg:337, go:295 },
    { hole:16, par:3, hdcp: 8, ch:204, bk:204, rg:174, go:147 },
    { hole:17, par:4, hdcp: 6, ch:398, bk:398, rg:363, go:288 },
    { hole:18, par:5, hdcp:12, ch:534, bk:534, rg:490, go:436 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 取手国際ゴルフ倶楽部（茨城県取手市 / 36H）
// 西コース：2グリーン（コーライ/ベント）× 4ティー BACK/REG/FRONT/LADY
// 東コース：1グリーン（ベント）× 4ティー BACK/REG/FRONT/LADY
// 出典：スコアカード画像（公式）
// ─────────────────────────────────────────────────────────────────────────────
const TORIDE_INTL_WEST_KORAI = {
  name: "取手国際ゴルフ倶楽部 西コース コーライG",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:575, rg:556, fr:500, la:500 },
    { hole: 2, par:4, hdcp: 9, bk:405, rg:380, fr:380, la:372 },
    { hole: 3, par:4, hdcp:15, bk:309, rg:290, fr:290, la:290 },
    { hole: 4, par:3, hdcp:13, bk:192, rg:173, fr:173, la:169 },
    { hole: 5, par:4, hdcp: 1, bk:455, rg:429, fr:410, la:398 },
    { hole: 6, par:4, hdcp: 7, bk:367, rg:347, fr:331, la:331 },
    { hole: 7, par:3, hdcp:17, bk:172, rg:155, fr:155, la:150 },
    { hole: 8, par:4, hdcp:11, bk:415, rg:391, fr:391, la:385 },
    { hole: 9, par:5, hdcp: 5, bk:530, rg:506, fr:487, la:487 },
    { hole:10, par:5, hdcp: 4, bk:611, rg:591, fr:537, la:490 },
    { hole:11, par:3, hdcp:16, bk:137, rg:119, fr:102, la:102 },
    { hole:12, par:4, hdcp:10, bk:367, rg:354, fr:334, la:329 },
    { hole:13, par:4, hdcp: 8, bk:416, rg:406, fr:387, la:364 },
    { hole:14, par:5, hdcp: 2, bk:500, rg:480, fr:480, la:475 },
    { hole:15, par:4, hdcp:14, bk:358, rg:331, fr:331, la:325 },
    { hole:16, par:4, hdcp:12, bk:467, rg:434, fr:407, la:376 },
    { hole:17, par:3, hdcp:18, bk:229, rg:215, fr:192, la:104 },
    { hole:18, par:4, hdcp: 6, bk:479, rg:465, fr:420, la:400 },
  ],
};
const TORIDE_INTL_WEST_BENT = {
  name: "取手国際ゴルフ倶楽部 西コース ベントG",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:550, rg:531, fr:475, la:475 },
    { hole: 2, par:4, hdcp: 9, bk:390, rg:365, fr:365, la:357 },
    { hole: 3, par:4, hdcp:15, bk:320, rg:301, fr:301, la:301 },
    { hole: 4, par:3, hdcp:13, bk:165, rg:146, fr:146, la:142 },
    { hole: 5, par:4, hdcp: 1, bk:439, rg:413, fr:394, la:382 },
    { hole: 6, par:4, hdcp: 7, bk:387, rg:367, fr:351, la:351 },
    { hole: 7, par:3, hdcp:17, bk:163, rg:146, fr:146, la:141 },
    { hole: 8, par:4, hdcp:11, bk:395, rg:371, fr:371, la:365 },
    { hole: 9, par:5, hdcp: 5, bk:496, rg:472, fr:453, la:453 },
    { hole:10, par:5, hdcp: 4, bk:614, rg:594, fr:540, la:493 },
    { hole:11, par:3, hdcp:16, bk:150, rg:132, fr:115, la:115 },
    { hole:12, par:4, hdcp:10, bk:357, rg:344, fr:324, la:319 },
    { hole:13, par:4, hdcp: 8, bk:392, rg:382, fr:363, la:340 },
    { hole:14, par:5, hdcp: 2, bk:505, rg:485, fr:485, la:480 },
    { hole:15, par:4, hdcp:14, bk:342, rg:315, fr:315, la:309 },
    { hole:16, par:4, hdcp:12, bk:407, rg:374, fr:347, la:316 },
    { hole:17, par:3, hdcp:18, bk:236, rg:222, fr:199, la:120 },
    { hole:18, par:4, hdcp: 6, bk:463, rg:449, fr:403, la:384 },
  ],
};
const TORIDE_INTL_EAST = {
  name: "取手国際ゴルフ倶楽部 東コース",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:505, rg:481, fr:452, la:444 },
    { hole: 2, par:3, hdcp:15, bk:172, rg:149, fr:142, la:142 },
    { hole: 3, par:4, hdcp: 9, bk:383, rg:350, fr:321, la:313 },
    { hole: 4, par:4, hdcp: 1, bk:415, rg:392, fr:339, la:324 },
    { hole: 5, par:4, hdcp: 7, bk:428, rg:389, fr:370, la:365 },
    { hole: 6, par:3, hdcp:13, bk:185, rg:165, fr:157, la:157 },
    { hole: 7, par:4, hdcp:17, bk:366, rg:348, fr:343, la:343 },
    { hole: 8, par:4, hdcp:11, bk:395, rg:377, fr:354, la:332 },
    { hole: 9, par:5, hdcp: 5, bk:548, rg:531, fr:499, la:493 },
    { hole:10, par:5, hdcp: 4, bk:519, rg:488, fr:482, la:482 },
    { hole:11, par:4, hdcp:10, bk:435, rg:392, fr:365, la:360 },
    { hole:12, par:4, hdcp:16, bk:390, rg:373, fr:368, la:368 },
    { hole:13, par:4, hdcp: 8, bk:381, rg:359, fr:344, la:328 },
    { hole:14, par:3, hdcp:14, bk:209, rg:202, fr:195, la:184 },
    { hole:15, par:5, hdcp: 2, bk:533, rg:488, fr:461, la:461 },
    { hole:16, par:3, hdcp:18, bk:168, rg:138, fr:130, la:130 },
    { hole:17, par:4, hdcp:12, bk:373, rg:344, fr:338, la:338 },
    { hole:18, par:4, hdcp: 6, bk:475, rg:437, fr:402, la:348 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 吉井カントリークラブ（群馬県高崎市 / 18H・1グリーン・ベント）
// 出典：スコアカード画像（公式）
// 設計：カーティス・ストレンジ / SANKYO FOREST所属
// HDCPは非掲載 / ティー: BACK / REGULAR / FRONT
// ─────────────────────────────────────────────────────────────────────────────
const YOSHII_CC_COURSE = {
  name: "吉井カントリークラブ",
  holes: [
    { hole: 1, par:4, bk:429, rg:395, fr:321 },
    { hole: 2, par:4, bk:365, rg:330, fr:303 },
    { hole: 3, par:3, bk:200, rg:157, fr:108 },
    { hole: 4, par:5, bk:600, rg:526, fr:453 },
    { hole: 5, par:4, bk:432, rg:389, fr:326 },
    { hole: 6, par:4, bk:359, rg:323, fr:270 },
    { hole: 7, par:5, bk:555, rg:510, fr:473 },
    { hole: 8, par:3, bk:232, rg:168, fr:138 },
    { hole: 9, par:4, bk:434, rg:400, fr:345 },
    { hole:10, par:4, bk:397, rg:375, fr:321 },
    { hole:11, par:3, bk:200, rg:166, fr:115 },
    { hole:12, par:4, bk:395, rg:358, fr:334 },
    { hole:13, par:4, bk:393, rg:350, fr:322 },
    { hole:14, par:5, bk:555, rg:500, fr:455 },
    { hole:15, par:4, bk:414, rg:358, fr:317 },
    { hole:16, par:4, bk:409, rg:349, fr:310 },
    { hole:17, par:3, bk:177, rg:155, fr:113 },
    { hole:18, par:5, bk:555, rg:498, fr:442 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 若洲ゴルフリンクス（東京都江東区 / 18H・1グリーン・ベント / 都立公共コース）
// 出典：スコアカード画像（公式）
// ティー: BLUE / WHITE / GOLD / RED
// ─────────────────────────────────────────────────────────────────────────────
const WAKASU_GL_COURSE = {
  name: "若洲ゴルフリンクス",
  holes: [
    { hole: 1, par:4, hdcp:15, bl:415, wh:391, go:367, re:338 },
    { hole: 2, par:5, hdcp: 3, bl:549, wh:483, go:462, re:395 },
    { hole: 3, par:4, hdcp: 9, bl:441, wh:419, go:387, re:337 },
    { hole: 4, par:3, hdcp: 7, bl:207, wh:197, go:171, re:126 },
    { hole: 5, par:4, hdcp: 1, bl:373, wh:349, go:335, re:321 },
    { hole: 6, par:3, hdcp:13, bl:171, wh:166, go:139, re:104 },
    { hole: 7, par:4, hdcp:11, bl:398, wh:342, go:326, re:293 },
    { hole: 8, par:5, hdcp: 5, bl:538, wh:510, go:484, re:448 },
    { hole: 9, par:4, hdcp:17, bl:394, wh:350, go:318, re:284 },
    { hole:10, par:4, hdcp:10, bl:405, wh:376, go:345, re:306 },
    { hole:11, par:4, hdcp: 4, bl:451, wh:417, go:395, re:334 },
    { hole:12, par:4, hdcp:16, bl:364, wh:337, go:311, re:284 },
    { hole:13, par:5, hdcp: 2, bl:558, wh:517, go:515, re:439 },
    { hole:14, par:3, hdcp:14, bl:190, wh:171, go:154, re:103 },
    { hole:15, par:4, hdcp: 8, bl:411, wh:391, go:374, re:324 },
    { hole:16, par:3, hdcp:18, bl:170, wh:150, go:123, re:114 },
    { hole:17, par:5, hdcp: 6, bl:543, wh:519, go:493, re:433 },
    { hole:18, par:4, hdcp:12, bl:392, wh:375, go:356, re:307 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// ホウライカントリー倶楽部（栃木県那須塩原市 / 18H・1グリーン・ベント）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/325501/course-info/
// 設計：ロバート・ボン・ヘギー / GDO評価4.8 / 日本ゴルフツアー選手権3年連続開催
// ティー: Back / Mid / Front / Lady
// ─────────────────────────────────────────────────────────────────────────────
const HOULAI_CC_COURSE = {
  name: "ホウライカントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp:11, bk:383, mi:362, fr:335, la:283 },
    { hole: 2, par:4, hdcp: 5, bk:388, mi:354, fr:349, la:280 },
    { hole: 3, par:3, hdcp: 3, bk:175, mi:164, fr:150, la:108 },
    { hole: 4, par:4, hdcp: 9, bk:428, mi:403, fr:374, la:324 },
    { hole: 5, par:5, hdcp: 7, bk:538, mi:517, fr:494, la:438 },
    { hole: 6, par:4, hdcp:17, bk:392, mi:374, fr:348, la:245 },
    { hole: 7, par:3, hdcp:15, bk:169, mi:153, fr:123, la:102 },
    { hole: 8, par:5, hdcp:13, bk:531, mi:507, fr:466, la:414 },
    { hole: 9, par:4, hdcp: 1, bk:419, mi:387, fr:356, la:274 },
    { hole:10, par:5, hdcp: 6, bk:525, mi:503, fr:474, la:426 },
    { hole:11, par:4, hdcp: 4, bk:376, mi:359, fr:333, la:251 },
    { hole:12, par:3, hdcp:16, bk:158, mi:143, fr:121, la: 89 },
    { hole:13, par:4, hdcp:10, bk:426, mi:404, fr:376, la:318 },
    { hole:14, par:4, hdcp:14, bk:393, mi:374, fr:360, la:248 },
    { hole:15, par:4, hdcp:18, bk:381, mi:352, fr:346, la:262 },
    { hole:16, par:5, hdcp: 8, bk:533, mi:497, fr:497, la:405 },
    { hole:17, par:3, hdcp:12, bk:190, mi:172, fr:145, la:119 },
    { hole:18, par:4, hdcp: 2, bk:416, mi:393, fr:362, la:302 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 北の杜カントリー倶楽部（山梨県北杜市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://kitanomori-cc.jp/course/
// 設計：中村行忠 / 八ヶ岳山麓 標高750m / GORA評価4.7
// ティー: Member / Back / Regular / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const KITANOMORI_CC_COURSE = {
  name: "北の杜カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp:15, me:456, bk:430, rg:388, fr:312, la:312 },
    { hole: 2, par:5, hdcp: 9, me:572, bk:572, rg:538, fr:501, la:406 },
    { hole: 3, par:4, hdcp: 3, me:446, bk:419, rg:401, fr:363, la:298 },
    { hole: 4, par:3, hdcp: 7, me:178, bk:178, rg:147, fr:147, la:119 },
    { hole: 5, par:4, hdcp: 1, me:380, bk:341, rg:330, fr:252, la:252 },
    { hole: 6, par:4, hdcp:13, me:330, bk:302, rg:302, fr:270, la:270 },
    { hole: 7, par:4, hdcp: 5, me:418, bk:385, rg:385, fr:348, la:310 },
    { hole: 8, par:3, hdcp:11, me:187, bk:187, rg:166, fr:155, la:132 },
    { hole: 9, par:5, hdcp:17, me:623, bk:590, rg:536, fr:493, la:391 },
    { hole:10, par:4, hdcp:10, me:417, bk:385, rg:385, fr:344, la:344 },
    { hole:11, par:4, hdcp: 4, me:442, bk:425, rg:405, fr:380, la:330 },
    { hole:12, par:3, hdcp:16, me:173, bk:157, rg:127, fr:102, la:102 },
    { hole:13, par:5, hdcp: 2, me:607, bk:569, rg:519, fr:425, la:405 },
    { hole:14, par:4, hdcp:14, me:390, bk:390, rg:347, fr:313, la:313 },
    { hole:15, par:4, hdcp: 8, me:388, bk:388, rg:360, fr:340, la:323 },
    { hole:16, par:5, hdcp:18, me:498, bk:463, rg:463, fr:432, la:432 },
    { hole:17, par:3, hdcp: 6, me:222, bk:190, rg:178, fr:149, la:124 },
    { hole:18, par:4, hdcp:12, me:425, bk:391, rg:391, fr:347, la:347 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 大栄カントリー倶楽部（千葉県成田市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://www.taiei.cc/courses（HDCP・ヤーデージ）
//       じゃらんゴルフ（INヤーデージ補完）
// Hitachi 3Tours Championship 2021-2023 開催コース / GDO評価4.4
// ティー: BLUE / WHITE / ORANGE / RED
// ─────────────────────────────────────────────────────────────────────────────
const TAIEY_CC_COURSE = {
  name: "大栄カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp: 3, bl:443, wh:420, or:360, re:346 },
    { hole: 2, par:4, hdcp: 9, bl:353, wh:331, or:325, re:291 },
    { hole: 3, par:5, hdcp:15, bl:544, wh:505, or:498, re:461 },
    { hole: 4, par:3, hdcp: 7, bl:210, wh:182, or:145, re:116 },
    { hole: 5, par:4, hdcp: 1, bl:434, wh:407, or:369, re:336 },
    { hole: 6, par:4, hdcp:13, bl:326, wh:305, or:300, re:272 },
    { hole: 7, par:5, hdcp: 5, bl:517, wh:480, or:454, re:420 },
    { hole: 8, par:3, hdcp:11, bl:198, wh:175, or:150, re:124 },
    { hole: 9, par:4, hdcp:17, bl:354, wh:326, or:309, re:290 },
    { hole:10, par:4, hdcp:16, bl:391, wh:361, or:333, re:303 },
    { hole:11, par:4, hdcp: 4, bl:405, wh:378, or:354, re:320 },
    { hole:12, par:5, hdcp: 2, bl:592, wh:548, or:535, re:506 },
    { hole:13, par:3, hdcp:14, bl:190, wh:154, or:137, re:123 },
    { hole:14, par:4, hdcp:10, bl:343, wh:323, or:297, re:271 },
    { hole:15, par:5, hdcp: 8, bl:514, wh:498, or:460, re:437 },
    { hole:16, par:3, hdcp:18, bl:204, wh:177, or:154, re:136 },
    { hole:17, par:4, hdcp: 6, bl:369, wh:339, or:324, re:301 },
    { hole:18, par:4, hdcp:12, bl:354, wh:330, or:320, re:284 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 上総富士ゴルフクラブ（千葉県君津市 / 27H・1グリーン・ベント）
// 出典：公式サイト https://www.kazusanet.co.jp/course.html
// 設計：赤星四郎・赤星弥次郎 / コース：南・東・西（各9H Par36）
// ティー: BACK / REG / LADIES
// ─────────────────────────────────────────────────────────────────────────────
const KAZUSAFUJI_GC_MINAMI = {
  name: "上総富士ゴルフクラブ 南コース",
  holes: [
    { hole: 1, par:4, hdcp:5, bk:410, rg:350, ld:285 },
    { hole: 2, par:3, hdcp:8, bk:200, rg:165, ld:130 },
    { hole: 3, par:4, hdcp:2, bk:403, rg:382, ld:346 },
    { hole: 4, par:4, hdcp:6, bk:409, rg:391, ld:330 },
    { hole: 5, par:5, hdcp:1, bk:515, rg:497, ld:385 },
    { hole: 6, par:3, hdcp:3, bk:190, rg:177, ld:157 },
    { hole: 7, par:4, hdcp:7, bk:340, rg:301, ld:295 },
    { hole: 8, par:4, hdcp:9, bk:344, rg:314, ld:314 },
    { hole: 9, par:5, hdcp:4, bk:535, rg:515, ld:423 },
  ],
};
const KAZUSAFUJI_GC_HIGASHI = {
  name: "上総富士ゴルフクラブ 東コース",
  holes: [
    { hole: 1, par:3, hdcp:7, bk:175, rg:160, ld:160 },
    { hole: 2, par:5, hdcp:5, bk:538, rg:519, ld:444 },
    { hole: 3, par:4, hdcp:4, bk:405, rg:355, ld:271 },
    { hole: 4, par:5, hdcp:8, bk:478, rg:460, ld:386 },
    { hole: 5, par:4, hdcp:9, bk:302, rg:285, ld:285 },
    { hole: 6, par:3, hdcp:2, bk:185, rg:155, ld:135 },
    { hole: 7, par:4, hdcp:3, bk:403, rg:363, ld:297 },
    { hole: 8, par:4, hdcp:1, bk:401, rg:346, ld:286 },
    { hole: 9, par:4, hdcp:6, bk:339, rg:319, ld:308 },
  ],
};
const KAZUSAFUJI_GC_NISHI = {
  name: "上総富士ゴルフクラブ 西コース",
  holes: [
    { hole: 1, par:4, hdcp:2, bk:386, rg:366, ld:316 },
    { hole: 2, par:3, hdcp:5, bk:165, rg:150, ld:150 },
    { hole: 3, par:4, hdcp:9, bk:325, rg:305, ld:305 },
    { hole: 4, par:4, hdcp:8, bk:390, rg:373, ld:324 },
    { hole: 5, par:4, hdcp:7, bk:352, rg:328, ld:260 },
    { hole: 6, par:3, hdcp:6, bk:171, rg:158, ld:143 },
    { hole: 7, par:5, hdcp:3, bk:477, rg:454, ld:402 },
    { hole: 8, par:4, hdcp:4, bk:436, rg:426, ld:376 },
    { hole: 9, par:5, hdcp:1, bk:527, rg:499, ld:437 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// シャトレーゼ ヴィンテージゴルフ倶楽部（山梨県北杜市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://vintage.chateraisegolf.jp/course/
// 設計：加藤俊輔 / 日本シニアオープン2021開催 / 標高800m
// ※H18のHDCPは公式に8と記載あるが、H13=8と重複のため18に修正（明らかな誤記）
// ティー: Back / Regular / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const CHATERAISE_VINTAGE_COURSE = {
  name: "シャトレーゼヴィンテージゴルフ倶楽部",
  holes: [
    { hole: 1, par:5, hdcp: 9, bk:530, rg:499, ld:415 },
    { hole: 2, par:4, hdcp: 3, bk:463, rg:399, ld:330 },
    { hole: 3, par:4, hdcp:15, bk:354, rg:308, ld:219 },
    { hole: 4, par:4, hdcp: 7, bk:339, rg:320, ld:247 },
    { hole: 5, par:3, hdcp:13, bk:206, rg:170, ld:135 },
    { hole: 6, par:4, hdcp: 1, bk:420, rg:375, ld:306 },
    { hole: 7, par:4, hdcp:17, bk:396, rg:338, ld:301 },
    { hole: 8, par:3, hdcp: 5, bk:242, rg:194, ld:131 },
    { hole: 9, par:5, hdcp:11, bk:634, rg:577, ld:428 },
    { hole:10, par:4, hdcp:10, bk:356, rg:328, ld:245 },
    { hole:11, par:4, hdcp:16, bk:313, rg:286, ld:251 },
    { hole:12, par:4, hdcp: 4, bk:395, rg:372, ld:310 },
    { hole:13, par:5, hdcp: 8, bk:489, rg:476, ld:400 },
    { hole:14, par:3, hdcp:14, bk:162, rg:138, ld: 99 },
    { hole:15, par:4, hdcp: 2, bk:410, rg:360, ld:292 },
    { hole:16, par:3, hdcp:12, bk:208, rg:155, ld:114 },
    { hole:17, par:4, hdcp: 6, bk:357, rg:328, ld:271 },
    { hole:18, par:5, hdcp:18, bk:585, rg:546, ld:467 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 東京国際ゴルフ倶楽部（東京都町田市 / 18H・2グリーン ベント/コーライ）
// 出典：公式サイト http://www.kokusai-net.co.jp/tkgc/
//       楽天GORA（HDCP・合計確認）
// 設計：赤星四郎 / 1961年開場 / シャトレーゼグループ
// ティー: BT（バック）/ RT（レギュラー） / FT（フロント）
// ※2グリーンでBent/Koraiの距離が異なる。HDCPはコース共通。
// ─────────────────────────────────────────────────────────────────────────────
const TOKYO_INTL_GC_BENT = {
  name: "東京国際ゴルフ倶楽部 ベントグリーン",
  holes: [
    { hole: 1, par:4, hdcp: 3, bt:470, rt:465, ft:350 },
    { hole: 2, par:3, hdcp: 9, bt:168, rt:160, ft:135 },
    { hole: 3, par:4, hdcp:15, bt:353, rt:330, ft:300 },
    { hole: 4, par:4, hdcp: 1, bt:375, rt:331, ft:320 },
    { hole: 5, par:5, hdcp: 7, bt:515, rt:501, ft:433 },
    { hole: 6, par:3, hdcp:13, bt:136, rt:126, ft:102 },
    { hole: 7, par:4, hdcp:11, bt:396, rt:334, ft:330 },
    { hole: 8, par:5, hdcp: 5, bt:580, rt:556, ft:442 },
    { hole: 9, par:4, hdcp:17, bt:295, rt:283, ft:263 },
    { hole:10, par:4, hdcp: 4, bt:458, rt:418, ft:325 },
    { hole:11, par:4, hdcp:10, bt:420, rt:405, ft:354 },
    { hole:12, par:4, hdcp:15, bt:325, rt:313, ft:305 },
    { hole:13, par:4, hdcp:14, bt:350, rt:339, ft:281 },
    { hole:14, par:3, hdcp: 8, bt:182, rt:173, ft:163 },
    { hole:15, par:5, hdcp: 2, bt:490, rt:480, ft:435 },
    { hole:16, par:3, hdcp:12, bt:187, rt:162, ft:150 },
    { hole:17, par:5, hdcp: 6, bt:535, rt:492, ft:485 },
    { hole:18, par:4, hdcp:18, bt:347, rt:322, ft:312 },
  ],
};
const TOKYO_INTL_GC_KORAI = {
  name: "東京国際ゴルフ倶楽部 コーライグリーン",
  holes: [
    { hole: 1, par:4, hdcp: 3, bt:465, rt:460, ft:345 },
    { hole: 2, par:3, hdcp: 9, bt:164, rt:156, ft:131 },
    { hole: 3, par:4, hdcp:15, bt:337, rt:314, ft:284 },
    { hole: 4, par:4, hdcp: 1, bt:375, rt:331, ft:320 },
    { hole: 5, par:5, hdcp: 7, bt:515, rt:501, ft:433 },
    { hole: 6, par:3, hdcp:13, bt:136, rt:126, ft:102 },
    { hole: 7, par:4, hdcp:11, bt:396, rt:334, ft:330 },
    { hole: 8, par:5, hdcp: 5, bt:580, rt:556, ft:442 },
    { hole: 9, par:4, hdcp:17, bt:295, rt:283, ft:263 },
    { hole:10, par:4, hdcp: 4, bt:462, rt:422, ft:329 },
    { hole:11, par:4, hdcp:10, bt:416, rt:401, ft:350 },
    { hole:12, par:4, hdcp:15, bt:322, rt:310, ft:302 },
    { hole:13, par:4, hdcp:14, bt:350, rt:339, ft:281 },
    { hole:14, par:3, hdcp: 8, bt:175, rt:166, ft:156 },
    { hole:15, par:5, hdcp: 2, bt:474, rt:464, ft:419 },
    { hole:16, par:3, hdcp:12, bt:153, rt:128, ft:116 },
    { hole:17, par:5, hdcp: 6, bt:537, rt:494, ft:487 },
    { hole:18, par:4, hdcp:18, bt:335, rt:310, ft:300 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 平塚富士見カントリークラブ（神奈川県足柄上郡中井町 / 36H・2グリーン A/B・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/140042/
// コース：平塚コース（OUT/IN）/ 大磯コース（OUT/IN） 各Par72
// HDCPは全コース未設定（GORA掲載値=0）
// ティー: CHAMP / BACK / REG / LADIES
// ─────────────────────────────────────────────────────────────────────────────
const HIRATSUKA_FC_HIRATSUKA = {
  name: "平塚富士見カントリークラブ 平塚コース",
  holes: [
    { hole: 1, par:5, ch:555, bk:529, rg:500, ld:488 },
    { hole: 2, par:4, ch:448, bk:448, rg:429, ld:368 },
    { hole: 3, par:4, ch:315, bk:314, rg:305, ld:298 },
    { hole: 4, par:4, ch:460, bk:445, rg:440, ld:361 },
    { hole: 5, par:4, ch:385, bk:385, rg:371, ld:364 },
    { hole: 6, par:3, ch:189, bk:189, rg:170, ld:144 },
    { hole: 7, par:5, ch:509, bk:509, rg:500, ld:490 },
    { hole: 8, par:3, ch:170, bk:170, rg:153, ld:153 },
    { hole: 9, par:4, ch:350, bk:350, rg:340, ld:340 },
    { hole:10, par:4, ch:398, bk:375, rg:353, ld:341 },
    { hole:11, par:5, ch:536, bk:536, rg:516, ld:516 },
    { hole:12, par:3, ch:144, bk:144, rg:127, ld:107 },
    { hole:13, par:4, ch:355, bk:355, rg:336, ld:336 },
    { hole:14, par:4, ch:430, bk:430, rg:416, ld:338 },
    { hole:15, par:3, ch:127, bk:127, rg:113, ld:113 },
    { hole:16, par:5, ch:620, bk:620, rg:591, ld:465 },
    { hole:17, par:4, ch:350, bk:350, rg:340, ld:326 },
    { hole:18, par:4, ch:388, bk:388, rg:374, ld:374 },
  ],
};
const HIRATSUKA_FC_OISO = {
  name: "平塚富士見カントリークラブ 大磯コース",
  holes: [
    { hole: 1, par:5, ch:556, bk:544, rg:531, ld:455 },
    { hole: 2, par:3, ch:147, bk:147, rg:134, ld:134 },
    { hole: 3, par:4, ch:398, bk:385, rg:360, ld:301 },
    { hole: 4, par:4, ch:430, bk:430, rg:410, ld:338 },
    { hole: 5, par:4, ch:375, bk:375, rg:365, ld:319 },
    { hole: 6, par:5, ch:535, bk:535, rg:505, ld:429 },
    { hole: 7, par:4, ch:355, bk:355, rg:340, ld:325 },
    { hole: 8, par:3, ch:210, bk:210, rg:194, ld:131 },
    { hole: 9, par:4, ch:350, bk:350, rg:328, ld:325 },
    { hole:10, par:4, ch:460, bk:445, rg:435, ld:337 },
    { hole:11, par:4, ch:336, bk:336, rg:320, ld:310 },
    { hole:12, par:3, ch:153, bk:131, rg:115, ld:112 },
    { hole:13, par:4, ch:425, bk:406, rg:375, ld:322 },
    { hole:14, par:4, ch:365, bk:340, rg:314, ld:294 },
    { hole:15, par:5, ch:503, bk:493, rg:477, ld:456 },
    { hole:16, par:4, ch:421, bk:421, rg:402, ld:343 },
    { hole:17, par:3, ch:186, bk:186, rg:171, ld:135 },
    { hole:18, par:5, ch:480, bk:480, rg:470, ld:470 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 大利根カントリークラブ（茨城県坂東市 / 36H・2グリーン RED/WHITE・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/80020
// 設計：井上誠一 / 1960年開場 / 日本オープン1970・日本女子オープン2010開催
// ティー: CHAMPION / BACK / REGULAR / FRONT
// ※RED/WHITEで距離が若干異なるがGORAはどちらも同距離で掲載（共通値として登録）
// ─────────────────────────────────────────────────────────────────────────────
const OHTONE_CC_EAST = {
  name: "大利根カントリークラブ 東コース",
  holes: [
    { hole: 1, par:4, hdcp: 3, ch:403, bk:373, rg:350, fr:309 },
    { hole: 2, par:4, hdcp: 9, ch:367, bk:336, rg:317, fr:273 },
    { hole: 3, par:3, hdcp:15, ch:145, bk:145, rg:121, fr:112 },
    { hole: 4, par:5, hdcp: 7, ch:513, bk:477, rg:464, fr:410 },
    { hole: 5, par:4, hdcp: 1, ch:418, bk:376, rg:362, fr:315 },
    { hole: 6, par:4, hdcp:13, ch:392, bk:362, rg:345, fr:307 },
    { hole: 7, par:3, hdcp:17, ch:169, bk:138, rg:127, fr:113 },
    { hole: 8, par:4, hdcp:11, ch:425, bk:387, rg:372, fr:318 },
    { hole: 9, par:5, hdcp: 5, ch:537, bk:477, rg:460, fr:417 },
    { hole:10, par:4, hdcp:16, ch:418, bk:384, rg:367, fr:314 },
    { hole:11, par:4, hdcp:10, ch:386, bk:353, rg:330, fr:308 },
    { hole:12, par:5, hdcp: 4, ch:563, bk:531, rg:492, fr:419 },
    { hole:13, par:3, hdcp: 8, ch:208, bk:181, rg:158, fr:132 },
    { hole:14, par:4, hdcp: 2, ch:383, bk:366, rg:346, fr:296 },
    { hole:15, par:3, hdcp:14, ch:179, bk:161, rg:131, fr:118 },
    { hole:16, par:5, hdcp:12, ch:505, bk:474, rg:455, fr:409 },
    { hole:17, par:4, hdcp:18, ch:360, bk:341, rg:322, fr:286 },
    { hole:18, par:4, hdcp: 6, ch:437, bk:411, rg:376, fr:321 },
  ],
};
const OHTONE_CC_WEST = {
  name: "大利根カントリークラブ 西コース",
  holes: [
    { hole: 1, par:4, hdcp: 9, ch:380, bk:362, rg:343, fr:317 },
    { hole: 2, par:4, hdcp:17, ch:350, bk:326, rg:312, fr:281 },
    { hole: 3, par:4, hdcp: 3, ch:385, bk:353, rg:346, fr:292 },
    { hole: 4, par:3, hdcp:13, ch:143, bk:123, rg:111, fr: 95 },
    { hole: 5, par:5, hdcp: 1, ch:493, bk:489, rg:471, fr:420 },
    { hole: 6, par:3, hdcp: 7, ch:204, bk:176, rg:156, fr:144 },
    { hole: 7, par:4, hdcp:15, ch:395, bk:368, rg:356, fr:309 },
    { hole: 8, par:4, hdcp:11, ch:408, bk:384, rg:375, fr:336 },
    { hole: 9, par:5, hdcp: 5, ch:539, bk:478, rg:460, fr:405 },
    { hole:10, par:4, hdcp:10, ch:373, bk:349, rg:338, fr:288 },
    { hole:11, par:5, hdcp: 4, ch:496, bk:481, rg:470, fr:404 },
    { hole:12, par:3, hdcp:16, ch:171, bk:160, rg:126, fr:111 },
    { hole:13, par:5, hdcp: 8, ch:559, bk:492, rg:477, fr:444 },
    { hole:14, par:4, hdcp: 2, ch:410, bk:375, rg:364, fr:296 },
    { hole:15, par:4, hdcp:14, ch:368, bk:349, rg:336, fr:290 },
    { hole:16, par:3, hdcp:12, ch:191, bk:171, rg:150, fr:131 },
    { hole:17, par:4, hdcp: 6, ch:402, bk:383, rg:378, fr:288 },
    { hole:18, par:4, hdcp:18, ch:410, bk:374, rg:360, fr:335 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 茨城ゴルフ倶楽部（茨城県つくばみらい市 / 36H）
// 東コース：1グリーン（ベント）× CHAMP/BLACK/BLUE/WHITE/GREEN/ORANGE 6ティー
// 西コース：2グリーン（A/B・ベント/高麗）× BLACK/WHITE/BLUE/GREEN/ORANGE 5ティー
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/80010
// 設計：上田治 / 日本オープン開催（東コース）
// ※西コースOUT H6のHDCP=GORAは14だが、IN H17=14と重複のため13に修正
// ─────────────────────────────────────────────────────────────────────────────
const IBARAKI_GC_EAST_COURSE = {
  name: "茨城ゴルフ倶楽部 東コース",
  holes: [
    { hole: 1, par:5, hdcp: 9, ch:528, bk:528, bl:507, wh:484, gr:445, or:445 },
    { hole: 2, par:3, hdcp:15, ch:240, bk:240, bl:189, wh:150, gr:119, or:119 },
    { hole: 3, par:4, hdcp: 3, ch:461, bk:461, bl:416, wh:403, gr:355, or:317 },
    { hole: 4, par:4, hdcp: 7, ch:395, bk:395, bl:365, wh:349, gr:295, or:295 },
    { hole: 5, par:4, hdcp: 1, ch:410, bk:410, bl:368, wh:351, gr:305, or:305 },
    { hole: 6, par:3, hdcp:13, ch:199, bk:190, bl:177, wh:153, gr:134, or:134 },
    { hole: 7, par:4, hdcp:17, ch:389, bk:389, bl:367, wh:351, gr:292, or:292 },
    { hole: 8, par:4, hdcp:11, ch:445, bk:421, bl:401, wh:390, gr:357, or:357 },
    { hole: 9, par:5, hdcp: 5, ch:582, bk:545, bl:510, wh:475, gr:420, or:420 },
    { hole:10, par:4, hdcp: 4, ch:442, bk:442, bl:417, wh:382, gr:366, or:366 },
    { hole:11, par:4, hdcp:16, ch:445, bk:376, bl:351, wh:340, gr:298, or:298 },
    { hole:12, par:4, hdcp:10, ch:398, bk:398, bl:375, wh:361, gr:329, or:329 },
    { hole:13, par:3, hdcp:14, ch:184, bk:184, bl:158, wh:128, gr:107, or:107 },
    { hole:14, par:4, hdcp: 8, ch:400, bk:400, bl:374, wh:360, gr:266, or:266 },
    { hole:15, par:5, hdcp: 2, ch:586, bk:531, bl:493, wh:482, gr:445, or:445 },
    { hole:16, par:4, hdcp:12, ch:470, bk:434, bl:413, wh:400, gr:350, or:350 },
    { hole:17, par:3, hdcp:18, ch:223, bk:223, bl:191, wh:161, gr:148, or:135 },
    { hole:18, par:5, hdcp: 6, ch:539, bk:522, bl:512, wh:482, gr:421, or:421 },
  ],
};
const IBARAKI_GC_WEST_COURSE = {
  name: "茨城ゴルフ倶楽部 西コース",
  holes: [
    { hole: 1, par:4, hdcp:15, bk:359, wh:351, bl:346, gr:339, or:296 },
    { hole: 2, par:4, hdcp: 9, bk:400, wh:365, bl:365, gr:355, or:337 },
    { hole: 3, par:5, hdcp: 3, bk:549, wh:493, bl:493, gr:483, or:440 },
    { hole: 4, par:4, hdcp: 1, bk:447, wh:411, bl:411, gr:357, or:323 },
    { hole: 5, par:5, hdcp: 7, bk:528, wh:510, bl:503, gr:482, or:414 },
    { hole: 6, par:3, hdcp:13, bk:196, wh:170, bl:170, gr:163, or:150 },
    { hole: 7, par:4, hdcp: 5, bk:437, wh:393, bl:393, gr:387, or:319 },
    { hole: 8, par:3, hdcp:17, bk:208, wh:184, bl:184, gr:170, or:142 },
    { hole: 9, par:4, hdcp:11, bk:418, wh:394, bl:394, gr:383, or:329 },
    { hole:10, par:4, hdcp:10, bk:370, wh:348, bl:342, gr:334, or:296 },
    { hole:11, par:4, hdcp:18, bk:428, wh:411, bl:411, gr:396, or:326 },
    { hole:12, par:5, hdcp: 4, bk:541, wh:515, bl:507, gr:507, or:450 },
    { hole:13, par:3, hdcp: 2, bk:214, wh:195, bl:195, gr:186, or:137 },
    { hole:14, par:4, hdcp: 6, bk:438, wh:409, bl:415, gr:393, or:371 },
    { hole:15, par:3, hdcp: 8, bk:193, wh:177, bl:151, gr:162, or:116 },
    { hole:16, par:4, hdcp:12, bk:393, wh:381, bl:381, gr:376, or:293 },
    { hole:17, par:5, hdcp:14, bk:566, wh:538, bl:538, gr:511, or:437 },
    { hole:18, par:4, hdcp:16, bk:415, wh:384, bl:384, gr:371, or:334 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 川奈ホテルゴルフコース 富士コース（静岡県伊東市 / 18H・1グリーン・高麗）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/520174/
// 設計：C.H.アリソン / 米国ゴルフマガジン「世界ゴルフ100選」選出 / 1936年開場
// フジサンケイレディスクラシック・女子トーナメント定期開催
// ティー: BACK / REGULAR / FRONT（KAWANAティーは省略）
// ─────────────────────────────────────────────────────────────────────────────
const KAWANA_FUJI_COURSE = {
  name: "川奈ホテルゴルフコース 富士コース",
  holes: [
    { hole: 1, par:4, hdcp: 9, bk:415, rg:409, fr:397 },
    { hole: 2, par:4, hdcp:15, bk:411, rg:397, fr:382 },
    { hole: 3, par:5, hdcp: 3, bk:450, rg:420, fr:390 },
    { hole: 4, par:5, hdcp: 1, bk:482, rg:468, fr:395 },
    { hole: 5, par:3, hdcp:13, bk:181, rg:181, fr:175 },
    { hole: 6, par:4, hdcp: 7, bk:434, rg:404, fr:380 },
    { hole: 7, par:4, hdcp: 5, bk:393, rg:330, fr:313 },
    { hole: 8, par:3, hdcp:11, bk:150, rg:145, fr:137 },
    { hole: 9, par:4, hdcp:17, bk:367, rg:308, fr:285 },
    { hole:10, par:3, hdcp: 8, bk:143, rg:143, fr:127 },
    { hole:11, par:5, hdcp: 2, bk:619, rg:568, fr:543 },
    { hole:12, par:4, hdcp:10, bk:404, rg:384, fr:358 },
    { hole:13, par:4, hdcp: 4, bk:395, rg:347, fr:335 },
    { hole:14, par:4, hdcp: 6, bk:416, rg:366, fr:350 },
    { hole:15, par:5, hdcp:14, bk:480, rg:470, fr:415 },
    { hole:16, par:3, hdcp:16, bk:185, rg:172, fr:161 },
    { hole:17, par:4, hdcp:12, bk:410, rg:388, fr:332 },
    { hole:18, par:4, hdcp:18, bk:366, rg:342, fr:310 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 武蔵野ゴルフクラブ（東京都八王子市 / 18H・2グリーン ベント/高麗）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/130017
// 設計：丸毛信勝（改造：富沢誠造） / GORA評価3.8
// ※2グリーンだがGORAはベント/コーライ共通距離表示。ベント値で登録。
// ティー: Back / Reg / Front / Ladies
// ─────────────────────────────────────────────────────────────────────────────
const MUSASHINO_GC_COURSE = {
  name: "武蔵野ゴルフクラブ",
  holes: [
    { hole: 1, par:4, hdcp:13, bk:375, rg:355, fr:340, ld:260 },
    { hole: 2, par:3, hdcp: 7, bk:180, rg:165, fr:110, ld: 65 },
    { hole: 3, par:4, hdcp: 3, bk:365, rg:340, fr:320, ld:260 },
    { hole: 4, par:4, hdcp:11, bk:375, rg:355, fr:320, ld:240 },
    { hole: 5, par:3, hdcp:17, bk:165, rg:130, fr:120, ld: 85 },
    { hole: 6, par:5, hdcp: 1, bk:510, rg:480, fr:405, ld:405 },
    { hole: 7, par:4, hdcp: 9, bk:360, rg:335, fr:315, ld:230 },
    { hole: 8, par:5, hdcp: 5, bk:500, rg:480, fr:480, ld:360 },
    { hole: 9, par:4, hdcp:15, bk:340, rg:330, fr:320, ld:260 },
    { hole:10, par:5, hdcp: 2, bk:520, rg:485, fr:468, ld:390 },
    { hole:11, par:4, hdcp: 8, bk:390, rg:355, fr:335, ld:250 },
    { hole:12, par:3, hdcp:16, bk:125, rg:110, fr:105, ld:105 },
    { hole:13, par:5, hdcp: 6, bk:485, rg:475, fr:465, ld:350 },
    { hole:14, par:4, hdcp:12, bk:380, rg:360, fr:340, ld:250 },
    { hole:15, par:3, hdcp:18, bk:160, rg:135, fr:135, ld:115 },
    { hole:16, par:4, hdcp: 4, bk:460, rg:450, fr:345, ld:345 },
    { hole:17, par:4, hdcp:14, bk:310, rg:285, fr:275, ld:275 },
    { hole:18, par:4, hdcp:10, bk:405, rg:390, fr:375, ld:325 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 西那須野カントリー倶楽部（栃木県那須塩原市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90088/
// 設計：ロバート・ボン・ヘギー / ホウライCC姉妹コース / JGTO公認トーナメント開催
// ティー: Back / Mid / Front / Lady
// ─────────────────────────────────────────────────────────────────────────────
const NISHINASUNO_CC_COURSE = {
  name: "西那須野カントリー倶楽部",
  holes: [
    { hole: 1, par:4, hdcp:15, bk:401, mi:374, fr:345, ld:294 },
    { hole: 2, par:5, hdcp: 3, bk:546, mi:521, fr:499, ld:447 },
    { hole: 3, par:4, hdcp: 9, bk:419, mi:404, fr:385, ld:308 },
    { hole: 4, par:4, hdcp: 7, bk:385, mi:365, fr:333, ld:305 },
    { hole: 5, par:3, hdcp:13, bk:162, mi:150, fr:134, ld:104 },
    { hole: 6, par:4, hdcp: 1, bk:427, mi:405, fr:380, ld:315 },
    { hole: 7, par:5, hdcp: 5, bk:567, mi:552, fr:534, ld:447 },
    { hole: 8, par:3, hdcp:17, bk:204, mi:179, fr:153, ld:112 },
    { hole: 9, par:4, hdcp:11, bk:436, mi:403, fr:393, ld:305 },
    { hole:10, par:4, hdcp:10, bk:435, mi:415, fr:389, ld:299 },
    { hole:11, par:4, hdcp: 4, bk:411, mi:390, fr:374, ld:291 },
    { hole:12, par:3, hdcp:16, bk:161, mi:141, fr:127, ld: 96 },
    { hole:13, par:5, hdcp: 2, bk:592, mi:556, fr:510, ld:450 },
    { hole:14, par:4, hdcp:14, bk:372, mi:356, fr:327, ld:279 },
    { hole:15, par:5, hdcp: 8, bk:537, mi:522, fr:507, ld:430 },
    { hole:16, par:4, hdcp:12, bk:393, mi:362, fr:322, ld:284 },
    { hole:17, par:3, hdcp:18, bk:175, mi:161, fr:137, ld:109 },
    { hole:18, par:4, hdcp: 6, bk:413, mi:391, fr:373, ld:317 },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// プレステージカントリークラブ【GRAND PGM】（栃木県栃木市 / 36H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90107/
// 設計：ベンツ＆ポーレット社 / 日本プロ1991開催（ジャンボ尾崎優勝）/ GORA評価4.8
// ティー: Black / Blue / White / Gold / Red（東西共通）
// ─────────────────────────────────────────────────────────────────────────────
const PRESTIGE_CC_EAST = {
  name: "プレステージカントリークラブ 東コース",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:502, bl:481, wh:460, go:443, re:410 },
    { hole: 2, par:4, hdcp: 9, bk:436, bl:410, wh:389, go:345, re:312 },
    { hole: 3, par:4, hdcp:15, bk:352, bl:318, wh:308, go:292, re:273 },
    { hole: 4, par:3, hdcp:13, bk:167, bl:157, wh:143, go:129, re:114 },
    { hole: 5, par:4, hdcp: 1, bk:430, bl:395, wh:352, go:325, re:299 },
    { hole: 6, par:4, hdcp: 7, bk:426, bl:371, wh:359, go:347, re:308 },
    { hole: 7, par:3, hdcp:17, bk:169, bl:156, wh:148, go:130, re:117 },
    { hole: 8, par:5, hdcp: 5, bk:605, bl:572, wh:555, go:518, re:509 },
    { hole: 9, par:4, hdcp:11, bk:402, bl:383, wh:355, go:315, re:299 },
    { hole:10, par:5, hdcp: 4, bk:538, bl:500, wh:483, go:434, re:383 },
    { hole:11, par:4, hdcp:10, bk:436, bl:411, wh:365, go:337, re:310 },
    { hole:12, par:3, hdcp:16, bk:204, bl:172, wh:137, go:118, re:105 },
    { hole:13, par:4, hdcp: 2, bk:468, bl:453, wh:412, go:375, re:339 },
    { hole:14, par:4, hdcp: 8, bk:401, bl:380, wh:336, go:311, re:258 },
    { hole:15, par:4, hdcp:14, bk:370, bl:357, wh:298, go:281, re:224 },
    { hole:16, par:4, hdcp:12, bk:410, bl:379, wh:346, go:300, re:292 },
    { hole:17, par:3, hdcp:18, bk:202, bl:187, wh:164, go:142, re:118 },
    { hole:18, par:5, hdcp: 6, bk:585, bl:554, wh:520, go:504, re:489 },
  ],
};
const PRESTIGE_CC_WEST = {
  name: "プレステージカントリークラブ 西コース",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:562, bl:534, wh:514, go:464, re:439 },
    { hole: 2, par:4, hdcp: 9, bk:447, bl:441, wh:433, go:342, re:327 },
    { hole: 3, par:4, hdcp:15, bk:430, bl:404, wh:338, go:321, re:293 },
    { hole: 4, par:3, hdcp: 7, bk:222, bl:207, wh:192, go:148, re:126 },
    { hole: 5, par:4, hdcp: 1, bk:387, bl:361, wh:348, go:327, re:294 },
    { hole: 6, par:3, hdcp:13, bk:174, bl:167, wh:158, go:135, re:121 },
    { hole: 7, par:4, hdcp:11, bk:413, bl:378, wh:348, go:322, re:280 },
    { hole: 8, par:4, hdcp:17, bk:389, bl:370, wh:349, go:290, re:266 },
    { hole: 9, par:5, hdcp: 5, bk:567, bl:546, wh:520, go:487, re:458 },
    { hole:10, par:5, hdcp: 4, bk:592, bl:537, wh:509, go:476, re:453 },
    { hole:11, par:4, hdcp:10, bk:416, bl:395, wh:380, go:323, re:291 },
    { hole:12, par:4, hdcp:16, bk:358, bl:336, wh:307, go:287, re:264 },
    { hole:13, par:4, hdcp: 2, bk:412, bl:389, wh:369, go:349, re:330 },
    { hole:14, par:3, hdcp:14, bk:215, bl:198, wh:181, go:164, re:126 },
    { hole:15, par:4, hdcp: 8, bk:415, bl:405, wh:384, go:338, re:315 },
    { hole:16, par:3, hdcp:18, bk:202, bl:169, wh:152, go:142, re:122 },
    { hole:17, par:4, hdcp:12, bk:417, bl:394, wh:387, go:361, re:349 },
    { hole:18, par:5, hdcp: 6, bk:589, bl:567, wh:546, go:503, re:480 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 那須カントリークラブ（栃木県那須郡那須町 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90082
// 旧名：那須チサンカントリークラブ / 設計：春日井薫 / グリーン：オーガスタ同品種L93使用
// ティー: バック / レギュラー （レディースはデータ一部のみ・省略）
// ─────────────────────────────────────────────────────────────────────────────
const NASU_CC_COURSE = {
  name: "那須カントリークラブ",
  holes: [
    { hole: 1, par:5, hdcp: 3, bk:572, rg:540 },
    { hole: 2, par:4, hdcp:15, bk:315, rg:293 },
    { hole: 3, par:4, hdcp: 9, bk:396, rg:337 },
    { hole: 4, par:4, hdcp: 7, bk:397, rg:356 },
    { hole: 5, par:3, hdcp:13, bk:171, rg:158 },
    { hole: 6, par:5, hdcp: 1, bk:512, rg:500 },
    { hole: 7, par:3, hdcp:17, bk:159, rg:148 },
    { hole: 8, par:4, hdcp: 5, bk:418, rg:399 },
    { hole: 9, par:4, hdcp:11, bk:382, rg:370 },
    { hole:10, par:4, hdcp:10, bk:386, rg:351 },
    { hole:11, par:3, hdcp: 4, bk:194, rg:176 },
    { hole:12, par:4, hdcp: 2, bk:400, rg:382 },
    { hole:13, par:5, hdcp: 6, bk:578, rg:559 },
    { hole:14, par:4, hdcp:14, bk:350, rg:318 },
    { hole:15, par:3, hdcp:16, bk:176, rg:158 },
    { hole:16, par:4, hdcp:12, bk:289, rg:268 },
    { hole:17, par:5, hdcp: 8, bk:532, rg:471 },
    { hole:18, par:4, hdcp:18, bk:441, rg:429 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// スプリングフィルズゴルフクラブ（18H・1グリーン・ベント）
// 出典：スコアカード画像（公式）
// ティー: Black / Blue / White / Gold / Red（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const SPRINGFIELDS_GC_COURSE = {
  name: "スプリングフィルズゴルフクラブ",
  holes: [
    { hole: 1, par:4, hdcp: 3, bk:429, bl:394, wh:369, go:329, re:315 },
    { hole: 2, par:4, hdcp: 9, bk:410, bl:410, wh:391, go:333, re:298 },
    { hole: 3, par:5, hdcp:15, bk:504, bl:504, wh:485, go:445, re:392 },
    { hole: 4, par:4, hdcp: 7, bk:414, bl:385, wh:358, go:348, re:284 },
    { hole: 5, par:4, hdcp: 1, bk:405, bl:387, wh:363, go:297, re:237 },
    { hole: 6, par:3, hdcp:13, bk:148, bl:148, wh:128, go:110, re:110 },
    { hole: 7, par:4, hdcp: 5, bk:461, bl:430, wh:420, go:338, re:293 },
    { hole: 8, par:3, hdcp:11, bk:200, bl:184, wh:159, go:116, re: 98 },
    { hole: 9, par:5, hdcp:17, bk:550, bl:506, wh:488, go:463, re:390 },
    { hole:10, par:4, hdcp:16, bk:370, bl:355, wh:334, go:316, re:290 },
    { hole:11, par:3, hdcp:10, bk:173, bl:145, wh:126, go:116, re: 90 },
    { hole:12, par:4, hdcp: 4, bk:372, bl:372, wh:344, go:314, re:257 },
    { hole:13, par:4, hdcp:14, bk:421, bl:405, wh:373, go:281, re:212 },
    { hole:14, par:3, hdcp: 8, bk:171, bl:149, wh:129, go:114, re: 72 },
    { hole:15, par:4, hdcp: 2, bk:417, bl:417, wh:384, go:353, re:310 },
    { hole:16, par:5, hdcp:12, bk:580, bl:543, wh:523, go:513, re:440 },
    { hole:17, par:4, hdcp: 6, bk:384, bl:384, wh:364, go:334, re:243 },
    { hole:18, par:5, hdcp:18, bk:555, bl:492, wh:472, go:445, re:372 },
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// 千葉国際カントリークラブ【PGM】（千葉県 / 桜27H＋竹18H = 計45H）
// 出典：スコアカード画像（公式）
// グリーン：桜コース＝ベント1グリーン（MG）/ 竹コース＝ベント2グリーン（MG/SG）
// ティー：Blue / White / Red × MG/SG（竹のみSG有）
// 桜コース：西・中・東の各9Hコース（3コースから前後半を選択してプレー）
// 竹コース：OUT/IN 各9H
// ─────────────────────────────────────────────────────────────────────────────

// 桜コース（1グリーン）
const CHIBA_KOKUSEI_SAKURA_WEST = [
  { hole:1, par:4, hdcp:8, bl:319, wh:302, re:296 },
  { hole:2, par:4, hdcp:5, bl:389, wh:374, re:293 },
  { hole:3, par:4, hdcp:2, bl:409, wh:388, re:307 },
  { hole:4, par:4, hdcp:1, bl:390, wh:361, re:295 },
  { hole:5, par:5, hdcp:4, bl:483, wh:458, re:446 },
  { hole:6, par:3, hdcp:7, bl:166, wh:149, re:139 },
  { hole:7, par:5, hdcp:3, bl:502, wh:476, re:408 },
  { hole:8, par:3, hdcp:9, bl:168, wh:143, re:135 },
  { hole:9, par:4, hdcp:6, bl:292, wh:261, re:254 },
];
const CHIBA_KOKUSEI_SAKURA_MID = [
  { hole:1, par:5, hdcp:2, bl:541, wh:518, re:445 },
  { hole:2, par:4, hdcp:8, bl:341, wh:324, re:309 },
  { hole:3, par:3, hdcp:5, bl:195, wh:180, re: 65 },
  { hole:4, par:4, hdcp:7, bl:273, wh:263, re:253 },
  { hole:5, par:4, hdcp:4, bl:317, wh:294, re:284 },
  { hole:6, par:5, hdcp:1, bl:588, wh:568, re:441 },
  { hole:7, par:3, hdcp:6, bl:185, wh:161, re:104 },
  { hole:8, par:4, hdcp:9, bl:343, wh:314, re:308 },
  { hole:9, par:4, hdcp:3, bl:385, wh:353, re:308 },
];
const CHIBA_KOKUSEI_SAKURA_EAST = [
  { hole:1, par:4, hdcp:9, bl:333, wh:323, re:297 },
  { hole:2, par:4, hdcp:4, bl:348, wh:314, re:277 },
  { hole:3, par:4, hdcp:1, bl:454, wh:428, re:315 },
  { hole:4, par:5, hdcp:2, bl:560, wh:540, re:464 },
  { hole:5, par:3, hdcp:3, bl:157, wh:135, re:132 },
  { hole:6, par:4, hdcp:7, bl:299, wh:279, re:270 },
  { hole:7, par:3, hdcp:5, bl:161, wh:138, re:129 },
  { hole:8, par:4, hdcp:6, bl:392, wh:323, re:310 },
  { hole:9, par:5, hdcp:8, bl:509, wh:486, re:425 },
];

// 竹コース（2グリーン MG/SG）
const CHIBA_KOKUSEI_TAKE_OUT = [
  { hole: 1, par:4, hdcp: 7, mgBl:410, mgWh:381, mgRe:244, sgBl:395, sgWh:366 },
  { hole: 2, par:4, hdcp: 5, mgBl:390, mgWh:357, mgRe:292, sgBl:424, sgWh:391 },
  { hole: 3, par:4, hdcp: 1, mgBl:439, mgWh:415, mgRe:311, sgBl:401, sgWh:377 },
  { hole: 4, par:5, hdcp: 9, mgBl:464, mgWh:444, mgRe:377, sgBl:466, sgWh:446 },
  { hole: 5, par:3, hdcp:13, mgBl:182, mgWh:147, mgRe:137, sgBl:182, sgWh:147 },
  { hole: 6, par:4, hdcp:15, mgBl:328, mgWh:308, mgRe:251, sgBl:304, sgWh:284 },
  { hole: 7, par:5, hdcp: 3, mgBl:596, mgWh:571, mgRe:397, sgBl:596, sgWh:571 },
  { hole: 8, par:3, hdcp:11, mgBl:190, mgWh:172, mgRe:112, sgBl:219, sgWh:201 },
  { hole: 9, par:4, hdcp:17, mgBl:411, mgWh:385, mgRe:285, sgBl:415, sgWh:389 },
];
const CHIBA_KOKUSEI_TAKE_IN = [
  { hole:10, par:4, hdcp: 4, mgBl:398, mgWh:372, mgRe:243, sgBl:423, sgWh:397 },
  { hole:11, par:4, hdcp:14, mgBl:304, mgWh:292, mgRe:223, sgBl:297, sgWh:285 },
  { hole:12, par:5, hdcp: 6, mgBl:543, mgWh:511, mgRe:386, sgBl:534, sgWh:502 },
  { hole:13, par:4, hdcp:12, mgBl:321, mgWh:282, mgRe:238, sgBl:333, sgWh:294 },
  { hole:14, par:4, hdcp:16, mgBl:301, mgWh:289, mgRe:277, sgBl:295, sgWh:283 },
  { hole:15, par:3, hdcp:10, mgBl:160, mgWh:142, mgRe:130, sgBl:160, sgWh:142 },
  { hole:16, par:4, hdcp: 2, mgBl:456, mgWh:429, mgRe:312, sgBl:464, sgWh:437 },
  { hole:17, par:3, hdcp: 8, mgBl:206, mgWh:188, mgRe:150, sgBl:176, sgWh:158 },
  { hole:18, par:5, hdcp:18, mgBl:489, mgWh:469, mgRe:332, sgBl:470, sgWh:450 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 鹿沼カントリー倶楽部（栃木県 / 北18H + 南27H = 計45H・2グリーン AG/BG）
// 出典：スコアカード画像（公式）
// コースローテーション：北コース18H / 南コース+黄金コース27H
// ティー: BACK / REGULAR / LADIES × AG（Aグリーン）/ BG（Bグリーン）
// ※南コース Reg AG 合計：個別値合計6270、画像表示6268（2Y差・個別値優先）
// ─────────────────────────────────────────────────────────────────────────────

// 北コース（18H / 2グリーン AG/BG）
const KANUMA_CC_KITA_OUT = [
  { hole:1, par:4, hdcp: 3, bkAg:410, bkBg:405, rgAg:390, rgBg:385, ldAg:365, ldBg:360 },
  { hole:2, par:3, hdcp:15, bkAg:196, bkBg:192, rgAg:180, rgBg:174, ldAg:135, ldBg:125 },
  { hole:3, par:4, hdcp: 9, bkAg:294, bkBg:290, rgAg:281, rgBg:276, ldAg:260, ldBg:255 },
  { hole:4, par:4, hdcp: 1, bkAg:451, bkBg:451, rgAg:419, rgBg:419, ldAg:323, ldBg:323 },
  { hole:5, par:5, hdcp: 7, bkAg:491, bkBg:484, rgAg:483, rgBg:476, ldAg:437, ldBg:431 },
  { hole:6, par:3, hdcp:13, bkAg:179, bkBg:154, rgAg:157, rgBg:136, ldAg:144, ldBg:123 },
  { hole:7, par:4, hdcp:17, bkAg:375, bkBg:371, rgAg:349, rgBg:344, ldAg:310, ldBg:305 },
  { hole:8, par:4, hdcp:11, bkAg:388, bkBg:385, rgAg:371, rgBg:367, ldAg:295, ldBg:291 },
  { hole:9, par:5, hdcp: 5, bkAg:525, bkBg:488, rgAg:492, rgBg:455, ldAg:404, ldBg:367 },
];
const KANUMA_CC_KITA_IN = [
  { hole:10, par:5, hdcp:10, bkAg:493, bkBg:495, rgAg:475, rgBg:478, ldAg:395, ldBg:397 },
  { hole:11, par:4, hdcp: 4, bkAg:372, bkBg:374, rgAg:350, rgBg:352, ldAg:302, ldBg:304 },
  { hole:12, par:3, hdcp:16, bkAg:170, bkBg:165, rgAg:153, rgBg:149, ldAg:150, ldBg:143 },
  { hole:13, par:4, hdcp: 2, bkAg:428, bkBg:410, rgAg:411, rgBg:393, ldAg:304, ldBg:286 },
  { hole:14, par:5, hdcp: 8, bkAg:504, bkBg:495, rgAg:484, rgBg:475, ldAg:410, ldBg:401 },
  { hole:15, par:4, hdcp:14, bkAg:329, bkBg:315, rgAg:292, rgBg:278, ldAg:265, ldBg:251 },
  { hole:16, par:4, hdcp:18, bkAg:311, bkBg:289, rgAg:291, rgBg:269, ldAg:272, ldBg:250 },
  { hole:17, par:3, hdcp:12, bkAg:175, bkBg:170, rgAg:164, rgBg:158, ldAg:146, ldBg:140 },
  { hole:18, par:4, hdcp: 6, bkAg:400, bkBg:384, rgAg:387, rgBg:370, ldAg:266, ldBg:250 },
];

// 南コース（18H / 2グリーン AG/BG）
const KANUMA_CC_MINAMI_OUT = [
  { hole:1, par:4, hdcp: 9, bkAg:339, bkBg:330, rgAg:326, rgBg:317, ldAg:311, ldBg:302 },
  { hole:2, par:5, hdcp: 3, bkAg:499, bkBg:495, rgAg:479, rgBg:475, ldAg:419, ldBg:415 },
  { hole:3, par:3, hdcp:15, bkAg:156, bkBg:161, rgAg:141, rgBg:146, ldAg:110, ldBg:115 },
  { hole:4, par:4, hdcp:13, bkAg:361, bkBg:365, rgAg:344, rgBg:350, ldAg:323, ldBg:328 },
  { hole:5, par:4, hdcp: 1, bkAg:410, bkBg:381, rgAg:398, rgBg:368, ldAg:313, ldBg:283 },
  { hole:6, par:4, hdcp: 7, bkAg:401, bkBg:396, rgAg:389, rgBg:384, ldAg:344, ldBg:339 },
  { hole:7, par:3, hdcp:17, bkAg:230, bkBg:225, rgAg:178, rgBg:180, ldAg:128, ldBg:130 },
  { hole:8, par:4, hdcp:11, bkAg:329, bkBg:319, rgAg:300, rgBg:291, ldAg:235, ldBg:226 },
  { hole:9, par:5, hdcp: 5, bkAg:512, bkBg:496, rgAg:492, rgBg:475, ldAg:477, ldBg:460 },
];
const KANUMA_CC_MINAMI_IN = [
  { hole:10, par:4, hdcp: 4, bkAg:363, bkBg:369, rgAg:344, rgBg:350, ldAg:313, ldBg:319 },
  { hole:11, par:4, hdcp:10, bkAg:331, bkBg:330, rgAg:316, rgBg:315, ldAg:301, ldBg:299 },
  { hole:12, par:3, hdcp:16, bkAg:205, bkBg:192, rgAg:186, rgBg:174, ldAg:150, ldBg:143 },
  { hole:13, par:4, hdcp: 8, bkAg:410, bkBg:425, rgAg:390, rgBg:405, ldAg:312, ldBg:327 },
  { hole:14, par:5, hdcp: 2, bkAg:558, bkBg:547, rgAg:543, rgBg:532, ldAg:495, ldBg:484 },
  { hole:15, par:4, hdcp:14, bkAg:384, bkBg:374, rgAg:364, rgBg:354, ldAg:342, ldBg:332 },
  { hole:16, par:3, hdcp:18, bkAg:157, bkBg:152, rgAg:151, rgBg:145, ldAg:131, ldBg:130 },
  { hole:17, par:5, hdcp:12, bkAg:514, bkBg:511, rgAg:502, rgBg:498, ldAg:437, ldBg:433 },
  { hole:18, par:4, hdcp: 6, bkAg:442, bkBg:431, rgAg:427, rgBg:416, ldAg:323, ldBg:312 },
];

// 黄金コース（9H / 2グリーン AG/BG）
const KANUMA_CC_KOGANE = [
  { hole:1, par:5, hdcp:2, bkAg:507, bkBg:498, rgAg:482, rgBg:472, ldAg:434, ldBg:424 },
  { hole:2, par:3, hdcp:5, bkAg:154, bkBg:151, rgAg:137, rgBg:133, ldAg:120, ldBg:116 },
  { hole:3, par:4, hdcp:7, bkAg:409, bkBg:404, rgAg:395, rgBg:390, ldAg:305, ldBg:300 },
  { hole:4, par:3, hdcp:9, bkAg:163, bkBg:184, rgAg:143, rgBg:160, ldAg:126, ldBg:142 },
  { hole:5, par:4, hdcp:1, bkAg:398, bkBg:393, rgAg:381, rgBg:376, ldAg:334, ldBg:329 },
  { hole:6, par:4, hdcp:4, bkAg:410, bkBg:400, rgAg:397, rgBg:387, ldAg:363, ldBg:353 },
  { hole:7, par:4, hdcp:6, bkAg:362, bkBg:325, rgAg:353, rgBg:315, ldAg:339, ldBg:301 },
  { hole:8, par:4, hdcp:3, bkAg:403, bkBg:375, rgAg:387, rgBg:359, ldAg:347, ldBg:319 },
  { hole:9, par:5, hdcp:8, bkAg:519, bkBg:515, rgAg:475, rgBg:471, ldAg:416, ldBg:412 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 大厚木カントリークラブ 本コース（神奈川県 / 東9H+西9H+南9H=27H・1グリーン）
// 出典：スコアカード画像（公式）
// グリーン：Rグリーン（ベント）1グリーン
// ティー: Blue / White / Green / Red（4ティー）
// ※西コースのみPar37（H4=Par5, H9=Par5, H1=Par5 の3Par5構成）
// ─────────────────────────────────────────────────────────────────────────────
const OATSUGI_CC_EAST = [
  { hole:1, par:5, hdcp:4, bl:594, wh:575, gr:476, re:333 },
  { hole:2, par:4, hdcp:8, bl:393, wh:372, gr:336, re:258 },
  { hole:3, par:3, hdcp:2, bl:220, wh:197, gr:136, re:136 },
  { hole:4, par:4, hdcp:1, bl:453, wh:429, gr:321, re:271 },
  { hole:5, par:4, hdcp:9, bl:355, wh:332, gr:332, re:229 },
  { hole:6, par:3, hdcp:7, bl:191, wh:178, gr:113, re:113 },
  { hole:7, par:5, hdcp:5, bl:550, wh:534, gr:451, re:304 },
  { hole:8, par:4, hdcp:3, bl:421, wh:390, gr:330, re:244 },
  { hole:9, par:4, hdcp:6, bl:410, wh:391, gr:361, re:279 },
];
const OATSUGI_CC_WEST = [
  { hole:1, par:5, hdcp:6, bl:544, wh:519, gr:418, re:279 },
  { hole:2, par:4, hdcp:8, bl:330, wh:303, gr:303, re:241 },
  { hole:3, par:3, hdcp:3, bl:214, wh:173, gr:158, re:103 },
  { hole:4, par:5, hdcp:1, bl:616, wh:591, gr:550, re:308 },
  { hole:5, par:3, hdcp:9, bl:180, wh:164, gr:141, re:141 },
  { hole:6, par:4, hdcp:5, bl:381, wh:354, gr:274, re:274 },
  { hole:7, par:4, hdcp:7, bl:356, wh:319, gr:319, re:260 },
  { hole:8, par:4, hdcp:2, bl:376, wh:356, gr:345, re:207 },
  { hole:9, par:5, hdcp:4, bl:570, wh:520, gr:339, re:299 },
];
const OATSUGI_CC_SOUTH = [
  { hole:1, par:4, hdcp:2, bl:419, wh:399, gr:311, re:243 },
  { hole:2, par:3, hdcp:8, bl:133, wh:108, gr: 88, re: 62 },
  { hole:3, par:4, hdcp:7, bl:391, wh:387, gr:337, re:337 },
  { hole:4, par:4, hdcp:3, bl:397, wh:362, gr:344, re:209 },
  { hole:5, par:4, hdcp:5, bl:307, wh:290, gr:260, re:260 },
  { hole:6, par:5, hdcp:4, bl:559, wh:559, gr:535, re:344 },
  { hole:7, par:4, hdcp:1, bl:434, wh:384, gr:328, re:209 },
  { hole:8, par:3, hdcp:9, bl:151, wh:146, gr:121, re:121 },
  { hole:9, par:5, hdcp:6, bl:452, wh:425, gr:405, re:361 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 烏山城カントリークラブ（栃木県那須烏山市 / 27H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90025
// 設計：井上誠一 / 日本女子オープン3回開催（史上最多）/ GORA評価4.6
// ティー: Black / Blue / White / Gold / Red（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const KARASUYAMA_CC_HONMARU = [
  { hole:1, par:5, hdcp:5, bk:520, bl:490, wh:470, go:450, re:442 },
  { hole:2, par:3, hdcp:8, bk:187, bl:161, wh:151, go:151, re:133 },
  { hole:3, par:4, hdcp:2, bk:415, bl:381, wh:369, go:360, re:348 },
  { hole:4, par:4, hdcp:1, bk:432, bl:403, wh:384, go:373, re:368 },
  { hole:5, par:3, hdcp:7, bk:214, bl:190, wh:182, go:182, re:182 },
  { hole:6, par:4, hdcp:4, bk:397, bl:373, wh:349, go:335, re:329 },
  { hole:7, par:4, hdcp:3, bk:410, bl:373, wh:343, go:336, re:327 },
  { hole:8, par:4, hdcp:9, bk:466, bl:450, wh:427, go:385, re:370 },
  { hole:9, par:5, hdcp:6, bk:554, bl:535, wh:526, go:380, re:380 },
];
const KARASUYAMA_CC_NINOMARU = [
  { hole:1, par:4, hdcp:8, bk:436, bl:412, wh:394, go:371, re:356 },
  { hole:2, par:4, hdcp:5, bk:403, bl:380, wh:358, go:343, re:343 },
  { hole:3, par:5, hdcp:2, bk:543, bl:517, wh:496, go:486, re:462 },
  { hole:4, par:3, hdcp:7, bk:177, bl:147, wh:136, go:136, re:126 },
  { hole:5, par:5, hdcp:1, bk:557, bl:534, wh:508, go:492, re:492 },
  { hole:6, par:4, hdcp:4, bk:440, bl:413, wh:381, go:374, re:362 },
  { hole:7, par:4, hdcp:6, bk:378, bl:347, wh:326, go:321, re:311 },
  { hole:8, par:3, hdcp:9, bk:212, bl:182, wh:159, go:152, re:143 },
  { hole:9, par:4, hdcp:3, bk:437, bl:403, wh:384, go:365, re:338 },
];
const KARASUYAMA_CC_SANMARU = [
  { hole:1, par:4, hdcp:5, bk:415, bl:395, wh:375, go:360, re:353 },
  { hole:2, par:3, hdcp:8, bk:182, bl:170, wh:151, go:151, re:151 },
  { hole:3, par:4, hdcp:2, bk:404, bl:382, wh:351, go:328, re:313 },
  { hole:4, par:4, hdcp:4, bk:417, bl:382, wh:362, go:332, re:327 },
  { hole:5, par:5, hdcp:7, bk:561, bl:529, wh:495, go:464, re:445 },
  { hole:6, par:4, hdcp:1, bk:468, bl:438, wh:398, go:392, re:363 },
  { hole:7, par:3, hdcp:9, bk:194, bl:174, wh:164, go:157, re:147 },
  { hole:8, par:5, hdcp:3, bk:603, bl:557, wh:529, go:512, re:492 },
  { hole:9, par:4, hdcp:6, bk:400, bl:363, wh:345, go:325, re:305 },
];

// ─────────────────────────────────────────────────────────────────────────────
// グランディ那須白河ゴルフクラブ（福島県西白河郡 / 27H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/70025/
// 設計：ロバート・トレント・ジョーンズ シニア / GORA評価4.2
// ティー: back / front / ladie's（3ティー）
// ─────────────────────────────────────────────────────────────────────────────
const GRANDI_NASUSHIRAKAWA_EAST = [
  { hole:1, par:4, hdcp:5, bk:398, fr:377, ld:310 },
  { hole:2, par:3, hdcp:8, bk:172, fr:139, ld:101 },
  { hole:3, par:4, hdcp:2, bk:407, fr:350, ld:312 },
  { hole:4, par:5, hdcp:1, bk:555, fr:519, ld:447 },
  { hole:5, par:4, hdcp:7, bk:361, fr:319, ld:258 },
  { hole:6, par:4, hdcp:4, bk:404, fr:368, ld:297 },
  { hole:7, par:5, hdcp:3, bk:526, fr:443, ld:413 },
  { hole:8, par:3, hdcp:6, bk:172, fr:155, ld: 99 },
  { hole:9, par:4, hdcp:9, bk:393, fr:364, ld:293 },
];
const GRANDI_NASUSHIRAKAWA_SOUTH = [
  { hole:1, par:4, hdcp:2, bk:455, fr:415, ld:345 },
  { hole:2, par:4, hdcp:8, bk:419, fr:389, ld:300 },
  { hole:3, par:3, hdcp:5, bk:202, fr:171, ld:145 },
  { hole:4, par:5, hdcp:1, bk:589, fr:511, ld:407 },
  { hole:5, par:4, hdcp:7, bk:319, fr:282, ld: 88 },
  { hole:6, par:4, hdcp:4, bk:394, fr:361, ld:315 },
  { hole:7, par:4, hdcp:6, bk:422, fr:352, ld:305 },
  { hole:8, par:3, hdcp:9, bk:177, fr:125, ld: 98 },
  { hole:9, par:5, hdcp:3, bk:549, fr:517, ld:429 },
];
const GRANDI_NASUSHIRAKAWA_WEST = [
  { hole:1, par:4, hdcp:8, bk:398, fr:344, ld:283 },
  { hole:2, par:5, hdcp:2, bk:532, fr:496, ld:368 },
  { hole:3, par:4, hdcp:5, bk:428, fr:372, ld:318 },
  { hole:4, par:4, hdcp:4, bk:415, fr:374, ld:297 },
  { hole:5, par:5, hdcp:1, bk:541, fr:482, ld:373 },
  { hole:6, par:3, hdcp:7, bk:238, fr:164, ld:114 },
  { hole:7, par:4, hdcp:6, bk:403, fr:371, ld:294 },
  { hole:8, par:3, hdcp:9, bk:183, fr:149, ld:100 },
  { hole:9, par:4, hdcp:3, bk:424, fr:339, ld:285 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 栃木カントリークラブ（栃木県栃木市 / 27H・2グリーン BG/KG・高麗）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90071/
//        公式サイト http://www.tochigicc.com/contents/course/
// 設計：富澤誠造 / 1959年開場 / 太平山県立公園の麓
// ティー: バック / レギュラー / レディース（東コースはバックのみ）
// ※2グリーンBG/KGだが共通距離表示
// ─────────────────────────────────────────────────────────────────────────────
const TOCHIGI_CC_WEST = [
  { hole:1, par:4, hdcp:7, bk:325, rg:306, ld:240 },
  { hole:2, par:3, hdcp:5, bk:170, rg:143, ld:110 },
  { hole:3, par:5, hdcp:2, bk:516, rg:473, ld:378 },
  { hole:4, par:4, hdcp:1, bk:352, rg:314, ld:245 },
  { hole:5, par:3, hdcp:9, bk:147, rg:134, ld:118 },
  { hole:6, par:5, hdcp:3, bk:531, rg:494, ld:447 },
  { hole:7, par:3, hdcp:8, bk:148, rg:134, ld: 71 },
  { hole:8, par:5, hdcp:6, bk:456, rg:428, ld:385 },
  { hole:9, par:4, hdcp:4, bk:379, rg:357, ld:318 },
];
const TOCHIGI_CC_CENTER = [
  { hole:1, par:4, hdcp:2, bk:406, rg:393, ld:340 },
  { hole:2, par:3, hdcp:8, bk:149, rg:137, ld:119 },
  { hole:3, par:4, hdcp:1, bk:359, rg:349, ld:302 },
  { hole:4, par:4, hdcp:4, bk:396, rg:376, ld:361 },
  { hole:5, par:4, hdcp:3, bk:361, rg:349, ld:269 },
  { hole:6, par:5, hdcp:6, bk:438, rg:398, ld:346 },
  { hole:7, par:3, hdcp:9, bk:165, rg:152, ld:130 },
  { hole:8, par:4, hdcp:7, bk:365, rg:348, ld:334 },
  { hole:9, par:5, hdcp:5, bk:479, rg:467, ld:453 },
];
const TOCHIGI_CC_EAST = [
  { hole:1, par:5, hdcp:3, bk:442 },
  { hole:2, par:3, hdcp:8, bk:148 },
  { hole:3, par:4, hdcp:6, bk:328 },
  { hole:4, par:4, hdcp:1, bk:304 },
  { hole:5, par:5, hdcp:4, bk:450 },
  { hole:6, par:4, hdcp:7, bk:348 },
  { hole:7, par:4, hdcp:2, bk:401 },
  { hole:8, par:3, hdcp:9, bk:163 },
  { hole:9, par:4, hdcp:5, bk:433 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 大洗ゴルフ倶楽部（茨城県東茨城郡大洗町 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/80019
// 設計：井上誠一 / シーサイドリンクス / 日本女子プロ選手権定期開催 / HDCP未設定
// ティー: BACK / REG / FRONT / GOLD（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const OARAI_GC_OUT = [
  { hole:1, par:4, bk:442, rg:419, fr:402, go:361 },
  { hole:2, par:5, bk:517, rg:501, fr:476, go:440 },
  { hole:3, par:4, bk:407, rg:389, fr:369, go:323 },
  { hole:4, par:3, bk:165, rg:150, fr:133, go:108 },
  { hole:5, par:4, bk:450, rg:414, fr:396, go:365 },
  { hole:6, par:4, bk:348, rg:332, fr:308, go:289 },
  { hole:7, par:5, bk:578, rg:542, fr:500, go:470 },
  { hole:8, par:3, bk:214, rg:192, fr:156, go:142 },
  { hole:9, par:4, bk:445, rg:390, fr:375, go:325 },
];
const OARAI_GC_IN = [
  { hole:10, par:5, bk:530, rg:504, fr:486, go:451 },
  { hole:11, par:4, bk:390, rg:374, fr:335, go:335 },
  { hole:12, par:4, bk:380, rg:365, fr:349, go:310 },
  { hole:13, par:4, bk:438, rg:410, fr:388, go:358 },
  { hole:14, par:3, bk:192, rg:169, fr:144, go:123 },
  { hole:15, par:5, bk:571, rg:533, fr:513, go:477 },
  { hole:16, par:3, bk:245, rg:218, fr:188, go:155 },
  { hole:17, par:4, bk:456, rg:418, fr:340, go:340 },
  { hole:18, par:4, bk:437, rg:390, fr:372, go:324 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 水戸・ゴルフ・クラブ【アコーディア】（茨城県水戸市 / 36H・2グリーン 右/左・ベント）
// 出典：アコーディア公式サイト + 楽天GORA（HDCP）
// 設計：相山武夫 / 日本プロマッチプレー選手権開催 / 東西コース・南北コースで18H
// ティー: Blue / White / Green / Red
// コースローテーション：東⇔西 / 南⇔北
// ─────────────────────────────────────────────────────────────────────────────
const MITO_GC_SOUTH = [
  { hole:1, par:4, bl:362, wh:336, gr:329, re:227 },
  { hole:2, par:3, bl:182, wh:171, gr:152, re:120 },
  { hole:3, par:4, bl:413, wh:393, gr:376, re:278 },
  { hole:4, par:4, bl:327, wh:312, gr:300, re:297 },
  { hole:5, par:4, bl:397, wh:382, gr:371, re:290 },
  { hole:6, par:4, bl:381, wh:365, gr:354, re:295 },
  { hole:7, par:5, bl:509, wh:480, gr:458, re:305 },
  { hole:8, par:3, bl:217, wh:198, gr:141, re: 92 },
  { hole:9, par:5, bl:542, wh:516, gr:432, re:412 },
];
const MITO_GC_WEST = [
  { hole:1, par:4, bl:336, wh:320, gr:306, re:237 },
  { hole:2, par:4, bl:412, wh:388, gr:364, re:230 },
  { hole:3, par:3, bl:160, wh:149, gr:110, re:100 },
  { hole:4, par:4, bl:410, wh:396, gr:325, re:236 },
  { hole:5, par:4, bl:454, wh:421, gr:394, re:263 },
  { hole:6, par:4, bl:385, wh:365, gr:298, re:292 },
  { hole:7, par:5, bl:584, wh:514, gr:500, re:391 },
  { hole:8, par:3, bl:195, wh:182, gr:130, re:115 },
  { hole:9, par:5, bl:540, wh:524, gr:481, re:400 },
];
const MITO_GC_NORTH = [
  { hole:1, par:4, hdcp:8, bl:316, wh:307, gr:296, re:222 },
  { hole:2, par:4, hdcp:7, bl:335, wh:285, gr:239, re:235 },
  { hole:3, par:4, hdcp:6, bl:393, wh:378, gr:338, re:303 },
  { hole:4, par:3, hdcp:5, bl:195, wh:170, gr:153, re:116 },
  { hole:5, par:5, hdcp:2, bl:527, wh:515, gr:497, re:414 },
  { hole:6, par:3, hdcp:9, bl:167, wh:156, gr:106, re:104 },
  { hole:7, par:4, hdcp:1, bl:442, wh:427, gr:342, re:240 },
  { hole:8, par:5, hdcp:4, bl:473, wh:461, gr:411, re:385 },
  { hole:9, par:4, hdcp:3, bl:383, wh:360, gr:345, re:247 },
];
const MITO_GC_EAST = [
  { hole:1, par:4, hdcp:3, bl:374, wh:358, gr:321, re:268 },
  { hole:2, par:4, hdcp:7, bl:325, wh:308, gr:320, re:298 },
  { hole:3, par:3, hdcp:6, bl:178, wh:148, gr:127, re:104 },
  { hole:4, par:5, hdcp:5, bl:501, wh:482, gr:452, re:404 },
  { hole:5, par:3, hdcp:9, bl:159, wh:148, gr:134, re:111 },
  { hole:6, par:5, hdcp:1, bl:602, wh:560, gr:499, re:445 },
  { hole:7, par:4, hdcp:2, bl:404, wh:384, gr:345, re:314 },
  { hole:8, par:4, hdcp:4, bl:351, wh:338, gr:325, re:278 },
  { hole:9, par:4, hdcp:8, bl:361, wh:346, gr:326, re:326 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 太平洋クラブ成田コース（千葉県成田市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/120069/
// 設計：ゲーリー・プレーヤー / 成田アーメンコーナー（13〜16番）が名物 / GORA評価4.4
// ティー: Back / Regular / Front / Ladies（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const TAIHEIYO_NARITA_OUT = [
  { hole:1, par:4, hdcp: 9, bk:385, rg:367, fr:340, ld:320 },
  { hole:2, par:3, hdcp: 3, bk:200, rg:182, fr:162, ld:130 },
  { hole:3, par:4, hdcp:15, bk:375, rg:354, fr:331, ld:308 },
  { hole:4, par:4, hdcp: 7, bk:389, rg:371, fr:348, ld:291 },
  { hole:5, par:3, hdcp:13, bk:132, rg:116, fr:100, ld: 93 },
  { hole:6, par:5, hdcp: 1, bk:504, rg:484, fr:464, ld:397 },
  { hole:7, par:4, hdcp:11, bk:378, rg:353, fr:327, ld:302 },
  { hole:8, par:4, hdcp: 5, bk:375, rg:351, fr:332, ld:274 },
  { hole:9, par:5, hdcp:17, bk:483, rg:460, fr:443, ld:406 },
];
const TAIHEIYO_NARITA_IN = [
  { hole:10, par:4, hdcp:10, bk:376, rg:351, fr:329, ld:285 },
  { hole:11, par:5, hdcp: 4, bk:490, rg:477, fr:455, ld:424 },
  { hole:12, par:3, hdcp:16, bk:182, rg:164, fr:141, ld:122 },
  { hole:13, par:4, hdcp:14, bk:394, rg:370, fr:352, ld:304 },
  { hole:14, par:4, hdcp: 8, bk:381, rg:363, fr:337, ld:279 },
  { hole:15, par:4, hdcp: 2, bk:420, rg:405, fr:390, ld:311 },
  { hole:16, par:3, hdcp:18, bk:163, rg:144, fr:130, ld:100 },
  { hole:17, par:4, hdcp: 6, bk:415, rg:399, fr:379, ld:353 },
  { hole:18, par:5, hdcp:12, bk:539, rg:524, fr:502, ld:421 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 宇都宮カンツリークラブ（栃木県宇都宮市 / 27H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90135/
// 設計：清木一男／相山武夫 / 1961年開場 / GORA評価4.0
// ティー: BACK / REGLAR / FRONT / LADIES（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const UTSUNOMIYA_CC_NORTH = [
  { hole:1, par:4, hdcp:2, bk:351, rg:324, fr:304, ld:272 },
  { hole:2, par:5, hdcp:5, bk:491, rg:476, fr:459, ld:419 },
  { hole:3, par:3, hdcp:9, bk:145, rg:131, fr:131, ld:131 },
  { hole:4, par:4, hdcp:1, bk:441, rg:378, fr:363, ld:327 },
  { hole:5, par:4, hdcp:7, bk:375, rg:359, fr:335, ld:314 },
  { hole:6, par:4, hdcp:4, bk:395, rg:368, fr:354, ld:305 },
  { hole:7, par:3, hdcp:8, bk:189, rg:167, fr:147, ld:133 },
  { hole:8, par:5, hdcp:3, bk:539, rg:511, fr:497, ld:439 },
  { hole:9, par:4, hdcp:6, bk:390, rg:373, fr:373, ld:359 },
];
const UTSUNOMIYA_CC_CENTER = [
  { hole:1, par:4, hdcp:2, bk:364, rg:321, fr:307, ld:250 },
  { hole:2, par:4, hdcp:5, bk:351, rg:333, fr:333, ld:314 },
  { hole:3, par:3, hdcp:8, bk:149, rg:138, fr:138, ld:138 },
  { hole:4, par:5, hdcp:1, bk:488, rg:475, fr:465, ld:409 },
  { hole:5, par:3, hdcp:7, bk:220, rg:202, fr:183, ld:163 },
  { hole:6, par:4, hdcp:4, bk:337, rg:326, fr:317, ld:317 },
  { hole:7, par:4, hdcp:6, bk:447, rg:396, fr:382, ld:331 },
  { hole:8, par:5, hdcp:3, bk:510, rg:476, fr:459, ld:404 },
  { hole:9, par:4, hdcp:9, bk:426, rg:408, fr:408, ld:393 },
];
const UTSUNOMIYA_CC_SOUTH = [
  { hole:1, par:4, hdcp:2, bk:396, rg:396, fr:310, ld:310 },
  { hole:2, par:4, hdcp:8, bk:369, rg:347, fr:328, ld:278 },
  { hole:3, par:4, hdcp:5, bk:342, rg:325, fr:312, ld:292 },
  { hole:4, par:3, hdcp:9, bk:124, rg:110, fr:110, ld:110 },
  { hole:5, par:4, hdcp:4, bk:402, rg:378, fr:362, ld:226 },
  { hole:6, par:5, hdcp:1, bk:439, rg:417, fr:395, ld:331 },
  { hole:7, par:4, hdcp:6, bk:359, rg:339, fr:339, ld:317 },
  { hole:8, par:3, hdcp:7, bk:180, rg:161, fr:161, ld:155 },
  { hole:9, par:5, hdcp:3, bk:573, rg:527, fr:510, ld:394 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 藤岡ゴルフクラブ（群馬県藤岡市 / 36H・2グリーン ベント/高麗）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/100058/
// 設計：(東)小松原三夫 / (西)三橋庄吉 / アコーディア・ゴルフ / GORA評価3.7
// ティー: Blue / White / Green / Red（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const FUJIOKA_GC_EAST_OUT = [
  { hole:1, par:5, hdcp:17, bl:445, wh:435, gr:421, re:300 },
  { hole:2, par:4, hdcp:15, bl:335, wh:324, gr:313, re:220 },
  { hole:3, par:3, hdcp:13, bl:120, wh:120, gr:120, re:120 },
  { hole:4, par:4, hdcp: 1, bl:351, wh:324, gr:235, re:235 },
  { hole:5, par:4, hdcp: 9, bl:412, wh:390, gr:336, re:296 },
  { hole:6, par:4, hdcp: 3, bl:366, wh:351, gr:243, re:243 },
  { hole:7, par:3, hdcp:11, bl:169, wh:153, gr:141, re:105 },
  { hole:8, par:4, hdcp: 5, bl:416, wh:401, gr:287, re:219 },
  { hole:9, par:5, hdcp: 7, bl:495, wh:454, gr:408, re:336 },
];
const FUJIOKA_GC_EAST_IN = [
  { hole:10, par:4, hdcp: 6, bl:455, wh:430, gr:300, re:255 },
  { hole:11, par:3, hdcp: 4, bl:180, wh:157, gr:109, re: 75 },
  { hole:12, par:4, hdcp:10, bl:355, wh:340, gr:334, re:195 },
  { hole:13, par:4, hdcp: 2, bl:380, wh:365, gr:273, re:199 },
  { hole:14, par:3, hdcp:18, bl:136, wh:127, gr:114, re:114 },
  { hole:15, par:5, hdcp:12, bl:505, wh:485, gr:439, re:322 },
  { hole:16, par:4, hdcp: 8, bl:365, wh:351, gr:288, re:224 },
  { hole:17, par:4, hdcp:16, bl:310, wh:282, gr:221, re:221 },
  { hole:18, par:5, hdcp:14, bl:519, wh:504, gr:425, re:341 },
];
const FUJIOKA_GC_WEST_OUT = [
  { hole:1, par:4, hdcp: 3, bl:392, wh:374, gr:325, re:313 },
  { hole:2, par:4, hdcp:17, bl:290, wh:274, gr:263, re:263 },
  { hole:3, par:4, hdcp:15, bl:366, wh:337, gr:314, re:255 },
  { hole:4, par:4, hdcp: 9, bl:365, wh:341, gr:306, re:223 },
  { hole:5, par:3, hdcp: 7, bl:178, wh:165, gr:141, re:141 },
  { hole:6, par:5, hdcp: 5, bl:546, wh:511, gr:397, re:281 },
  { hole:7, par:4, hdcp: 1, bl:440, wh:418, gr:354, re:294 },
  { hole:8, par:3, hdcp:13, bl:185, wh:153, gr:128, re: 56 },
  { hole:9, par:5, hdcp:11, bl:494, wh:477, gr:405, re:276 },
];
const FUJIOKA_GC_WEST_IN = [
  { hole:10, par:5, hdcp:16, bl:487, wh:466, gr:432, re:432 },
  { hole:11, par:4, hdcp: 8, bl:375, wh:354, gr:340, re:322 },
  { hole:12, par:4, hdcp:14, bl:361, wh:351, gr:333, re:292 },
  { hole:13, par:3, hdcp: 6, bl:200, wh:187, gr:141, re:141 },
  { hole:14, par:4, hdcp: 2, bl:365, wh:341, gr:341, re:292 },
  { hole:15, par:3, hdcp:12, bl:159, wh:147, gr: 96, re: 96 },
  { hole:16, par:4, hdcp:18, bl:331, wh:299, gr:289, re:289 },
  { hole:17, par:5, hdcp:10, bl:475, wh:465, gr:454, re:409 },
  { hole:18, par:4, hdcp: 4, bl:430, wh:405, gr:391, re:325 },
];

// ─────────────────────────────────────────────────────────────────────────────
// ゴールド栃木プレジデントカントリークラブ（栃木県栃木市 / 27H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90106/
// 設計：ジャック・ニクラウス / GORA評価4.7（高評価）
// ティー: Champion / Back / Regular / Front / Ladies（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const GOLD_TOCHIGI_EAST_OUT = [
  { hole:1, par:4, hdcp: 9, ch:381, bk:350, rg:314, fr:286, ld:247 },
  { hole:2, par:4, hdcp: 3, ch:376, bk:349, rg:328, fr:286, ld:259 },
  { hole:3, par:3, hdcp:15, ch:178, bk:159, rg:133, fr:101, ld: 88 },
  { hole:4, par:5, hdcp: 1, ch:578, bk:556, rg:536, fr:518, ld:439 },
  { hole:5, par:4, hdcp: 7, ch:346, bk:323, rg:295, fr:270, ld:243 },
  { hole:6, par:3, hdcp:13, ch:198, bk:171, rg:162, fr:129, ld:104 },
  { hole:7, par:4, hdcp: 5, ch:443, bk:419, rg:397, fr:349, ld:301 },
  { hole:8, par:5, hdcp:11, ch:548, bk:518, rg:487, fr:454, ld:423 },
  { hole:9, par:4, hdcp:17, ch:347, bk:325, rg:304, fr:264, ld:230 },
];
const GOLD_TOCHIGI_EAST_IN = [
  { hole:10, par:4, hdcp:10, ch:406, bk:384, rg:353, fr:318, ld:291 },
  { hole:11, par:3, hdcp:16, ch:164, bk:153, rg:142, fr:128, ld:112 },
  { hole:12, par:5, hdcp: 4, ch:535, bk:510, rg:479, fr:438, ld:407 },
  { hole:13, par:4, hdcp: 2, ch:420, bk:398, rg:365, fr:338, ld:311 },
  { hole:14, par:4, hdcp: 8, ch:409, bk:386, rg:365, fr:341, ld:278 },
  { hole:15, par:3, hdcp:14, ch:194, bk:181, rg:168, fr:153, ld: 97 },
  { hole:16, par:4, hdcp: 6, ch:392, bk:362, rg:332, fr:302, ld:259 },
  { hole:17, par:4, hdcp:18, ch:445, bk:416, rg:385, fr:359, ld:335 },
  { hole:18, par:5, hdcp:12, ch:526, bk:497, rg:456, fr:415, ld:415 },
];
const GOLD_TOCHIGI_WEST = [
  { hole:1, par:4, hdcp:5, ch:375, bk:347, rg:317, fr:291, ld:261 },
  { hole:2, par:3, hdcp:8, ch:189, bk:167, rg:143, fr:128, ld:109 },
  { hole:3, par:5, hdcp:2, ch:543, bk:514, rg:487, fr:449, ld:432 },
  { hole:4, par:4, hdcp:4, ch:364, bk:351, rg:328, fr:307, ld:282 },
  { hole:5, par:4, hdcp:7, ch:397, bk:381, rg:350, fr:321, ld:276 },
  { hole:6, par:4, hdcp:1, ch:414, bk:385, rg:360, fr:332, ld:304 },
  { hole:7, par:3, hdcp:9, ch:194, bk:170, rg:137, fr:107, ld: 81 },
  { hole:8, par:5, hdcp:3, ch:559, bk:531, rg:501, fr:446, ld:398 },
  { hole:9, par:4, hdcp:6, ch:408, bk:385, rg:359, fr:326, ld:298 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 那須カントリークラブ（栃木県那須郡那須町 / 18H・1グリーン L93・ベント）
// 出典：公式サイト https://nasu-cc.com/course/ （一次資料）
// 設計：春日井薫 / 1966年開場 / GORA評価4.0
// ティー: Back / Reg / Ladies（3ティー）
// HDCP出典：GORA（公式には記載なし）
// ─────────────────────────────────────────────────────────────────────────────
const NASU_CC_OUT = [
  { hole:1, par:5, hdcp: 3, bk:572, rg:540, ld:460 },
  { hole:2, par:4, hdcp:15, bk:315, rg:293, ld:280 },
  { hole:3, par:4, hdcp: 9, bk:396, rg:367, ld:327 },
  { hole:4, par:4, hdcp: 7, bk:397, rg:356, ld:297 },
  { hole:5, par:3, hdcp:13, bk:171, rg:158, ld:120 },
  { hole:6, par:5, hdcp: 1, bk:512, rg:500, ld:429 },
  { hole:7, par:3, hdcp:17, bk:159, rg:148, ld:139 },
  { hole:8, par:4, hdcp: 5, bk:418, rg:399, ld:360 },
  { hole:9, par:4, hdcp:11, bk:382, rg:370, ld:352 },
];
const NASU_CC_IN = [
  { hole:10, par:4, hdcp:10, bk:386, rg:368, ld:351 },
  { hole:11, par:3, hdcp:16, bk:194, rg:147, ld:143 },
  { hole:12, par:4, hdcp: 4, bk:400, rg:382, ld:355 },
  { hole:13, par:5, hdcp: 2, bk:578, rg:559, ld:419 },
  { hole:14, par:4, hdcp: 8, bk:350, rg:340, ld:318 },
  { hole:15, par:3, hdcp:14, bk:176, rg:158, ld: 75 },
  { hole:16, par:4, hdcp:18, bk:289, rg:278, ld:268 },
  { hole:17, par:5, hdcp:12, bk:532, rg:471, ld:443 },
  { hole:18, par:4, hdcp: 6, bk:441, rg:419, ld:363 },
];


// ─────────────────────────────────────────────────────────────────────────────
// さいたまゴルフクラブ（埼玉県入間郡毛呂山町 / 18H・2グリーン ベント/バミューダ）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110036/
// 設計：浅見緑蔵 / アコーディア・ゴルフ / GORA評価3.8
// ティー: Blue / White / Red（3ティー）
// ─────────────────────────────────────────────────────────────────────────────
const SAITAMA_GC_OUT = [
  { hole:1, par:4, hdcp:10, bl:328, wh:304, re:212 },
  { hole:2, par:3, hdcp:16, bl:132, wh:115, re: 72 },
  { hole:3, par:5, hdcp: 4, bl:564, wh:542, re:416 },
  { hole:4, par:4, hdcp: 2, bl:407, wh:383, re:311 },
  { hole:5, par:4, hdcp: 8, bl:370, wh:350, re:248 },
  { hole:6, par:3, hdcp:14, bl:159, wh:147, re:147 },
  { hole:7, par:5, hdcp: 6, bl:498, wh:492, re:403 },
  { hole:8, par:4, hdcp:18, bl:335, wh:304, re:229 },
  { hole:9, par:4, hdcp:12, bl:416, wh:396, re:286 },
];
const SAITAMA_GC_IN = [
  { hole:10, par:5, hdcp: 9, bl:481, wh:466, re:372 },
  { hole:11, par:4, hdcp: 3, bl:443, wh:419, re:319 },
  { hole:12, par:3, hdcp:15, bl:126, wh:115, re:104 },
  { hole:13, par:4, hdcp:13, bl:344, wh:320, re:320 },
  { hole:14, par:5, hdcp: 1, bl:514, wh:490, re:310 },
  { hole:15, par:4, hdcp: 7, bl:361, wh:334, re:222 },
  { hole:16, par:3, hdcp:17, bl:203, wh:179, re: 80 },
  { hole:17, par:4, hdcp:11, bl:301, wh:285, re:250 },
  { hole:18, par:4, hdcp: 5, bl:410, wh:393, re:307 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 埼玉国際ゴルフ倶楽部（埼玉県児玉郡神川町 / 27H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110035/
// 設計：新田造園土木 / GORA評価4.1 / 旧称：阿久原カントリークラブ
// ティー: ブルー / グリーン / ホワイト / レディース（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const SAITAMA_KOKUSAI_GC_WEST = [
  { hole:1, par:3, hdcp:2, bl:195, gr:170, wh:147, ld:130 },
  { hole:2, par:4, hdcp:5, bl:350, gr:332, wh:308, ld:285 },
  { hole:3, par:5, hdcp:8, bl:515, gr:497, wh:476, ld:445 },
  { hole:4, par:4, hdcp:1, bl:427, gr:403, wh:389, ld:351 },
  { hole:5, par:4, hdcp:4, bl:347, gr:334, wh:309, ld:250 },
  { hole:6, par:4, hdcp:7, bl:330, gr:310, wh:279, ld:262 },
  { hole:7, par:3, hdcp:3, bl:248, gr:206, wh:151, ld:118 },
  { hole:8, par:4, hdcp:6, bl:380, gr:334, wh:314, ld:270 },
  { hole:9, par:5, hdcp:9, bl:530, gr:510, wh:468, ld:311 },
];
const SAITAMA_KOKUSAI_GC_EAST = [
  { hole:1, par:5, hdcp:8, bl:518, gr:497, wh:486, ld:392 },
  { hole:2, par:4, hdcp:5, bl:380, gr:363, wh:363, ld:261 },
  { hole:3, par:4, hdcp:2, bl:411, gr:398, wh:363, ld:265 },
  { hole:4, par:3, hdcp:4, bl:192, gr:165, wh:147, ld:118 },
  { hole:5, par:4, hdcp:7, bl:309, gr:284, wh:284, ld:261 },
  { hole:6, par:4, hdcp:1, bl:394, gr:370, wh:351, ld:310 },
  { hole:7, par:4, hdcp:3, bl:350, gr:343, wh:328, ld:328 },
  { hole:8, par:3, hdcp:6, bl:185, gr:166, wh:146, ld:135 },
  { hole:9, par:5, hdcp:9, bl:465, gr:430, wh:390, ld:290 },
];
const SAITAMA_KOKUSAI_GC_SOUTH = [
  { hole:1, par:4, hdcp:2, bl:412, gr:392, wh:355, ld:294 },
  { hole:2, par:3, hdcp:8, bl:167, gr:154, wh:143, ld:129 },
  { hole:3, par:4, hdcp:5, bl:353, gr:346, wh:335, ld:300 },
  { hole:4, par:5, hdcp:1, bl:620, gr:600, wh:576, ld:370 },
  { hole:5, par:4, hdcp:4, bl:350, gr:336, wh:312, ld:285 },
  { hole:6, par:4, hdcp:7, bl:392, gr:378, wh:348, ld:300 },
  { hole:7, par:4, hdcp:3, bl:413, gr:392, wh:367, ld:342 },
  { hole:8, par:5, hdcp:9, bl:508, gr:469, wh:446, ld:417 },
  { hole:9, par:3, hdcp:6, bl:188, gr:167, wh:150, ld: 90 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 太平洋クラブ御殿場コース（静岡県御殿場市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/220046/
// 設計：加藤俊輔（2018年リース・ジョーンズ改修・松山英樹監修）
// 三井住友VISA太平洋マスターズ定期開催 / WGCワールドカップ2001開催
// ティー: Tournament / Back / Regular / Middle / Front / Ladies（6ティー）
// ─────────────────────────────────────────────────────────────────────────────
const TAIHEIYO_GOTENBA_OUT = [
  { hole:1, par:4, hdcp: 5, to:465, bk:445, rg:415, mi:409, fr:395, ld:335 },
  { hole:2, par:4, hdcp:13, to:435, bk:395, rg:385, mi:355, fr:345, ld:315 },
  { hole:3, par:5, hdcp:17, to:565, bk:530, rg:515, mi:500, fr:480, ld:435 },
  { hole:4, par:3, hdcp: 9, to:220, bk:195, rg:180, mi:158, fr:130, ld:126 },
  { hole:5, par:4, hdcp: 7, to:400, bk:385, rg:370, mi:350, fr:330, ld:315 },
  { hole:6, par:5, hdcp:15, to:540, bk:525, rg:510, mi:490, fr:450, ld:425 },
  { hole:7, par:3, hdcp:11, to:178, bk:157, rg:152, mi:140, fr:130, ld:127 },
  { hole:8, par:4, hdcp: 3, to:447, bk:415, rg:400, mi:375, fr:350, ld:310 },
  { hole:9, par:4, hdcp: 1, to:465, bk:425, rg:410, mi:385, fr:360, ld:305 },
];
const TAIHEIYO_GOTENBA_IN = [
  { hole:10, par:4, hdcp: 2, to:401, bk:385, rg:365, mi:355, fr:320, ld:280 },
  { hole:11, par:5, hdcp:18, to:540, bk:520, rg:505, mi:485, fr:452, ld:445 },
  { hole:12, par:4, hdcp: 4, to:451, bk:430, rg:385, mi:374, fr:317, ld:312 },
  { hole:13, par:3, hdcp:10, to:203, bk:192, rg:173, mi:152, fr:145, ld:130 },
  { hole:14, par:4, hdcp: 8, to:422, bk:390, rg:365, mi:345, fr:338, ld:315 },
  { hole:15, par:4, hdcp:12, to:378, bk:368, rg:355, mi:342, fr:300, ld:290 },
  { hole:16, par:4, hdcp: 6, to:462, bk:440, rg:400, mi:355, fr:343, ld:310 },
  { hole:17, par:3, hdcp:16, to:230, bk:195, rg:164, mi:144, fr:139, ld:115 },
  { hole:18, par:5, hdcp:14, to:525, bk:510, rg:490, mi:480, fr:470, ld:null },
];


// ─────────────────────────────────────────────────────────────────────────────
// 那須国際カントリークラブ（栃木県那須郡那須町 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90079/
// 設計：浅見緑蔵・富沢誠造 / 那須御用邸隣接「ロイヤルリゾート」
// ティー: バック / レギュラー / レディース（3ティー）
// ※IN HDCP: OUT=奇数のため偶数。H10=16, H11=6, H12=12, H13=4, H14=2, H15=14, H16=8, H17=18, H18=10（推定）
// ─────────────────────────────────────────────────────────────────────────────
const NASU_KOKUSAI_CC_OUT = [
  { hole:1, par:5, hdcp: 9, bk:526, rg:504, ld:460 },
  { hole:2, par:4, hdcp: 3, bk:395, rg:334, ld:298 },
  { hole:3, par:3, hdcp:15, bk:192, rg:172, ld:132 },
  { hole:4, par:4, hdcp: 7, bk:410, rg:392, ld:340 },
  { hole:5, par:5, hdcp: 1, bk:491, rg:478, ld:379 },
  { hole:6, par:3, hdcp:13, bk:174, rg:162, ld:125 },
  { hole:7, par:4, hdcp: 5, bk:410, rg:381, ld:280 },
  { hole:8, par:4, hdcp:11, bk:326, rg:301, ld:265 },
  { hole:9, par:4, hdcp:17, bk:364, rg:350, ld:311 },
];
const NASU_KOKUSAI_CC_IN = [
  { hole:10, par:5, hdcp:16, bk:505, rg:492, ld:446 },
  { hole:11, par:4, hdcp: 6, bk:353, rg:342, ld:304 },
  { hole:12, par:3, hdcp:12, bk:186, rg:153, ld:109 },
  { hole:13, par:4, hdcp: 4, bk:366, rg:350, ld:315 },
  { hole:14, par:5, hdcp: 2, bk:519, rg:499, ld:462 },
  { hole:15, par:4, hdcp:14, bk:383, rg:371, ld:308 },
  { hole:16, par:4, hdcp: 8, bk:414, rg:405, ld:362 },
  { hole:17, par:3, hdcp:18, bk:170, rg:150, ld:131 },
  { hole:18, par:4, hdcp:10, bk:416, rg:394, ld:270 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 太平洋クラブ御殿場ウエスト（静岡県御殿場市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/220045/
// 設計：加藤俊輔 / GORA評価4.6（高評価）/ 御殿場コースと同敷地
// ティー: バック / レギュラー / フロント / レディース（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const TAIHEIYO_GOTENBA_WEST_OUT = [
  { hole:1, par:5, hdcp: 9, bk:520, rg:493, fr:474, ld:459 },
  { hole:2, par:4, hdcp:15, bk:364, rg:347, fr:340, ld:331 },
  { hole:3, par:4, hdcp: 3, bk:347, rg:338, fr:327, ld:292 },
  { hole:4, par:3, hdcp: 7, bk:216, rg:174, fr:120, ld:111 },
  { hole:5, par:4, hdcp:13, bk:358, rg:344, fr:331, ld:311 },
  { hole:6, par:4, hdcp: 1, bk:358, rg:324, fr:315, ld:301 },
  { hole:7, par:3, hdcp:17, bk:167, rg:153, fr:138, ld:138 },
  { hole:8, par:5, hdcp: 5, bk:568, rg:535, fr:515, ld:494 },
  { hole:9, par:4, hdcp:11, bk:395, rg:358, fr:331, ld:301 },
];
const TAIHEIYO_GOTENBA_WEST_IN = [
  { hole:10, par:4, hdcp:16, bk:361, rg:322, fr:306, ld:306 },
  { hole:11, par:4, hdcp:10, bk:339, rg:320, fr:301, ld:298 },
  { hole:12, par:3, hdcp: 4, bk:190, rg:171, fr:149, ld:112 },
  { hole:13, par:5, hdcp:14, bk:490, rg:456, fr:439, ld:417 },
  { hole:14, par:4, hdcp: 8, bk:342, rg:328, fr:318, ld:303 },
  { hole:15, par:4, hdcp: 2, bk:419, rg:401, fr:376, ld:350 },
  { hole:16, par:5, hdcp: 6, bk:511, rg:467, fr:451, ld:431 },
  { hole:17, par:3, hdcp:18, bk:157, rg:140, fr:123, ld:123 },
  { hole:18, par:4, hdcp:12, bk:394, rg:367, fr:337, ld:324 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 伊香保カントリークラブ（群馬県渋川市 / 18H・2グリーン さくら/つつじ・ベント）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/330201/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/100004/
// 設計：下山忠廉 / 1959年開場・群馬県最古 / バンカーなし
// ティー: GREEN / BLUE / WHITE / SKYBLUE / RED（5ティー）
// グリーン: さくら(S) / つつじ(T)
// ─────────────────────────────────────────────────────────────────────────────
const IKAHO_CC_OUT = [
  { hole:1, par:5, hdcp:15, grS:530, blS:518, whS:505, skS:339, reS:339, grT:549, blT:537, whT:524, skT:358, reT:358 },
  { hole:2, par:3, hdcp: 9, grS:189, blS:173, whS:153, skS:111, reS:111, grT:208, blT:192, whT:172, skT:130, reT:130 },
  { hole:3, par:4, hdcp: 3, grS:374, blS:361, whS:235, skS:183, reS:183, grT:406, blT:393, whT:267, skT:215, reT:215 },
  { hole:4, par:4, hdcp: 1, grS:499, blS:387, whS:268, skS:205, reS:205, grT:535, blT:423, whT:304, skT:241, reT:241 },
  { hole:5, par:4, hdcp: 7, grS:369, blS:349, whS:289, skS:199, reS:199, grT:390, blT:370, whT:310, skT:220, reT:220 },
  { hole:6, par:3, hdcp:13, grS:204, blS:168, whS:151, skS:140, reS:140, grT:207, blT:171, whT:154, skT:143, reT:143 },
  { hole:7, par:4, hdcp:11, grS:337, blS:326, whS:299, skS:213, reS:213, grT:341, blT:330, whT:303, skT:217, reT:217 },
  { hole:8, par:5, hdcp:17, grS:536, blS:485, whS:421, skS:321, reS:321, grT:545, blT:494, whT:430, skT:330, reT:330 },
  { hole:9, par:4, hdcp: 5, grS:400, blS:354, whS:280, skS:227, reS:227, grT:414, blT:368, whT:294, skT:241, reT:241 },
];
const IKAHO_CC_IN = [
  { hole:10, par:4, hdcp:16, grS:381, blS:366, whS:300, skS:221, reS:221, grT:402, blT:387, whT:321, skT:242, reT:242 },
  { hole:11, par:4, hdcp: 4, grS:398, blS:375, whS:295, skS:187, reS:187, grT:436, blT:413, whT:333, skT:225, reT:225 },
  { hole:12, par:4, hdcp:10, grS:385, blS:368, whS:319, skS:259, reS:259, grT:386, blT:369, whT:320, skT:260, reT:260 },
  { hole:13, par:3, hdcp: 2, grS:171, blS:165, whS:149, skS: 77, reS: 77, grT:189, blT:183, whT:167, skT: 95, reT: 95 },
  { hole:14, par:4, hdcp: 8, grS:403, blS:390, whS:319, skS:225, reS:225, grT:418, blT:405, whT:334, skT:240, reT:240 },
  { hole:15, par:5, hdcp:14, grS:501, blS:481, whS:408, skS:346, reS:346, grT:513, blT:493, whT:420, skT:358, reT:358 },
  { hole:16, par:4, hdcp: 6, grS:347, blS:319, whS:298, skS:222, reS:222, grT:355, blT:327, whT:306, skT:230, reT:230 },
  { hole:17, par:3, hdcp:18, grS:165, blS:146, whS:146, skS:121, reS:121, grT:173, blT:154, whT:154, skT:129, reT:129 },
  { hole:18, par:5, hdcp:12, grS:586, blS:540, whS:476, skS:367, reS:367, grT:610, blT:564, whT:500, skT:391, reT:391 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 那須野ヶ原カントリークラブ（栃木県大田原市 / 18H・2グリーン・ベント）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/324105/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/90084/
// 設計：発知朗 / 1975年開場 / 高校ゴルフ全国大会「緑の甲子園」開催 / GDO評価4.8
// ティー: バック(Back T.) / レギュラー / フロント / レディース（4ティー）
// ※HDCP: 那須コースはAグリーン9H独立(1-9)、那珂川コースはGORAの18H通し後半偶数値を採用
// ─────────────────────────────────────────────────────────────────────────────
const NASUNOGHARA_CC_NASU = [
  { hole:1, par:4, hdcp: 5, bk:410, rg:377, fr:360, ld:279 },
  { hole:2, par:5, hdcp: 2, bk:548, rg:505, fr:467, ld:383 },
  { hole:3, par:3, hdcp: 8, bk:166, rg:140, fr:140, ld:110 },
  { hole:4, par:4, hdcp: 1, bk:443, rg:410, fr:389, ld:323 },
  { hole:5, par:4, hdcp: 4, bk:357, rg:329, fr:329, ld:219 },
  { hole:6, par:3, hdcp: 7, bk:180, rg:162, fr:162, ld:162 },
  { hole:7, par:4, hdcp: 6, bk:392, rg:364, fr:339, ld:309 },
  { hole:8, par:4, hdcp: 9, bk:370, rg:351, fr:351, ld:325 },
  { hole:9, par:5, hdcp: 3, bk:500, rg:485, fr:466, ld:394 },
];
const NASUNOGHARA_CC_NAKAGAWA = [
  { hole:10, par:4, hdcp:16, bk:382, rg:369, fr:347, ld:281 },
  { hole:11, par:3, hdcp: 4, bk:214, rg:181, fr:154, ld:126 },
  { hole:12, par:4, hdcp:10, bk:361, rg:334, fr:324, ld:249 },
  { hole:13, par:5, hdcp: 2, bk:530, rg:494, fr:467, ld:333 },
  { hole:14, par:4, hdcp: 8, bk:401, rg:376, fr:376, ld:300 },
  { hole:15, par:3, hdcp:14, bk:193, rg:162, fr:145, ld:145 },
  { hole:16, par:4, hdcp:18, bk:339, rg:318, fr:318, ld:318 },
  { hole:17, par:5, hdcp:12, bk:549, rg:513, fr:475, ld:380 },
  { hole:18, par:4, hdcp: 6, bk:404, rg:371, fr:351, ld:256 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 太平洋クラブ江南コース（埼玉県熊谷市 / 18H・1グリーン・ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110027/
// 設計：加藤俊輔 / 名コース100選（埼玉12位）
// ティー: Champion / Back / Regular / Front / Ladies（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const TAIHEIYO_KONAN_OUT = [
  { hole:1, par:5, hdcp:15, ch:543, bk:525, rg:508, fr:480, ld:450 },
  { hole:2, par:4, hdcp: 3, ch:449, bk:426, rg:393, fr:355, ld:334 },
  { hole:3, par:3, hdcp: 9, ch:220, bk:201, rg:184, fr:146, ld:141 },
  { hole:4, par:4, hdcp: 1, ch:446, bk:432, rg:412, fr:402, ld:305 },
  { hole:5, par:4, hdcp: 7, ch:422, bk:401, rg:377, fr:377, ld:359 },
  { hole:6, par:3, hdcp:13, ch:178, bk:160, rg:147, fr:140, ld:122 },
  { hole:7, par:4, hdcp:17, ch:330, bk:318, rg:306, fr:296, ld:290 },
  { hole:8, par:4, hdcp: 5, ch:390, bk:380, rg:359, fr:350, ld:343 },
  { hole:9, par:5, hdcp:11, ch:569, bk:537, rg:511, fr:476, ld:405 },
];
const TAIHEIYO_KONAN_IN = [
  { hole:10, par:4, hdcp:10, ch:389, bk:380, rg:359, fr:355, ld:274 },
  { hole:11, par:4, hdcp:16, ch:390, bk:380, rg:358, fr:313, ld:293 },
  { hole:12, par:3, hdcp: 4, ch:205, bk:184, rg:159, fr:136, ld:114 },
  { hole:13, par:5, hdcp: 8, ch:538, bk:521, rg:500, fr:490, ld:485 },
  { hole:14, par:4, hdcp: 2, ch:430, bk:392, rg:373, fr:363, ld:299 },
  { hole:15, par:5, hdcp:14, ch:517, bk:500, rg:478, fr:462, ld:444 },
  { hole:16, par:4, hdcp:12, ch:434, bk:378, rg:358, fr:346, ld:278 },
  { hole:17, par:3, hdcp:18, ch:188, bk:171, rg:157, fr:157, ld:144 },
  { hole:18, par:4, hdcp: 6, ch:432, bk:399, rg:376, fr:366, ld:276 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 嵐山カントリークラブ（埼玉県比企郡嵐山町 / 18H・2グリーン A/B ベント）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/348101/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110078/
// 設計：小寺酉二 / 1962年開場 / 日本オープン・日本女子プロ等開催名門コース
// ティー: Black / Blue / White / Gold / GREEN（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const RANZAN_CC_OUT = [
  { hole:1, par:4, hdcp: 9, bkA:386, blA:371, whA:371, goA:362, laA:292, bkB:398, blB:383, whB:383, goB:374, laB:304 },
  { hole:2, par:3, hdcp:15, bkA:155, blA:142, whA:123, goA:123, laA: 89, bkB:174, blB:161, whB:142, goB:142, laB:108 },
  { hole:3, par:4, hdcp: 3, bkA:376, blA:362, whA:352, goA:321, laA:230, bkB:391, blB:377, whB:367, goB:336, laB:245 },
  { hole:4, par:4, hdcp: 7, bkA:430, blA:413, whA:395, goA:329, laA:286, bkB:441, blB:424, whB:406, goB:340, laB:297 },
  { hole:5, par:4, hdcp:13, bkA:392, blA:372, whA:352, goA:352, laA:258, bkB:402, blB:382, whB:362, goB:362, laB:268 },
  { hole:6, par:5, hdcp: 1, bkA:505, blA:482, whA:460, goA:460, laA:400, bkB:527, blB:504, whB:482, goB:482, laB:422 },
  { hole:7, par:4, hdcp:17, bkA:375, blA:352, whA:327, goA:327, laA:230, bkB:388, blB:365, whB:340, goB:340, laB:243 },
  { hole:8, par:3, hdcp: 5, bkA:190, blA:175, whA:158, goA:158, laA: 97, bkB:232, blB:208, whB:197, goB:178, laB:115 },
  { hole:9, par:5, hdcp:11, bkA:509, blA:489, whA:469, goA:469, laA:371, bkB:492, blB:472, whB:452, goB:452, laB:354 },
];
const RANZAN_CC_IN = [
  { hole:10, par:4, hdcp:10, bkA:354, blA:354, whA:334, goA:334, laA:280, bkB:362, blB:362, whB:342, goB:342, laB:288 },
  { hole:11, par:3, hdcp:16, bkA:163, blA:137, whA:115, goA:109, laA: 73, bkB:193, blB:149, whB:135, goB:135, laB:107 },
  { hole:12, par:4, hdcp: 4, bkA:421, blA:401, whA:383, goA:383, laA:288, bkB:398, blB:373, whB:343, goB:347, laB:266 },
  { hole:13, par:4, hdcp:14, bkA:447, blA:422, whA:408, goA:387, laA:239, bkB:435, blB:410, whB:396, goB:375, laB:227 },
  { hole:14, par:5, hdcp: 2, bkA:528, blA:518, whA:509, goA:444, laA:374, bkB:518, blB:508, whB:499, goB:434, laB:364 },
  { hole:15, par:4, hdcp: 8, bkA:412, blA:398, whA:376, goA:330, laA:279, bkB:405, blB:391, whB:369, goB:323, laB:272 },
  { hole:16, par:3, hdcp:18, bkA:166, blA:161, whA:156, goA:156, laA:108, bkB:156, blB:151, whB:146, goB:146, laB: 84 },
  { hole:17, par:4, hdcp: 6, bkA:408, blA:391, whA:375, goA:356, laA:291, bkB:393, blB:376, whB:360, goB:341, laB:276 },
  { hole:18, par:5, hdcp:12, bkA:595, blA:570, whA:539, goA:515, laA:408, bkB:580, blB:555, whB:524, goB:500, laB:393 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 東松山カントリークラブ（埼玉県東松山市 / 27H・2グリーン A/L ベント/高麗）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110063/
// 設計：藤田欽哉 / HDCP:各コース9H独立（1〜9）
// ティー: チャンピオン / バック / レギュラー / フロント / レディース（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const HIGASHIMATSUYAMA_CC_EAST = [
  { hole:1, par:4, hdcp:3, ch:425, bk:399, rg:377, fr:351, ld:351 },
  { hole:2, par:3, hdcp:9, ch:158, bk:143, rg:143, fr:132, ld:132 },
  { hole:3, par:4, hdcp:5, ch:367, bk:334, rg:334, fr:315, ld:315 },
  { hole:4, par:4, hdcp:1, ch:384, bk:372, rg:356, fr:298, ld:298 },
  { hole:5, par:5, hdcp:8, ch:512, bk:485, rg:471, fr:424, ld:412 },
  { hole:6, par:5, hdcp:4, ch:562, bk:542, rg:514, fr:497, ld:462 },
  { hole:7, par:4, hdcp:2, ch:434, bk:414, rg:388, fr:367, ld:367 },
  { hole:8, par:3, hdcp:7, ch:203, bk:192, rg:173, fr:148, ld:128 },
  { hole:9, par:4, hdcp:6, ch:368, bk:352, rg:352, fr:327, ld:313 },
];
const HIGASHIMATSUYAMA_CC_CENTER = [
  { hole:1, par:4, hdcp:3, ch:403, bk:389, rg:375, fr:364, ld:364 },
  { hole:2, par:3, hdcp:9, ch:191, bk:168, rg:155, fr:143, ld:143 },
  { hole:3, par:4, hdcp:5, ch:410, bk:393, rg:373, fr:352, ld:325 },
  { hole:4, par:3, hdcp:7, ch:168, bk:155, rg:145, fr:134, ld:134 },
  { hole:5, par:5, hdcp:1, ch:568, bk:546, rg:504, fr:504, ld:442 },
  { hole:6, par:4, hdcp:8, ch:327, bk:327, rg:313, fr:313, ld:299 },
  { hole:7, par:4, hdcp:2, ch:491, bk:449, rg:427, fr:396, ld:366 },
  { hole:8, par:5, hdcp:4, ch:575, bk:565, rg:547, fr:405, ld:405 },
  { hole:9, par:4, hdcp:6, ch:428, bk:387, rg:368, fr:368, ld:340 },
];
const HIGASHIMATSUYAMA_CC_WEST = [
  { hole:1, par:4, hdcp:5, ch:412, bk:400, rg:400, fr:293, ld:286 },
  { hole:2, par:5, hdcp:7, ch:531, bk:515, rg:496, fr:478, ld:429 },
  { hole:3, par:4, hdcp:1, ch:430, bk:396, rg:376, fr:376, ld:314 },
  { hole:4, par:3, hdcp:6, ch:198, bk:186, rg:186, fr:171, ld:171 },
  { hole:5, par:4, hdcp:9, ch:345, bk:332, rg:318, fr:300, ld:300 },
  { hole:6, par:4, hdcp:3, ch:390, bk:369, rg:369, fr:351, ld:245 },
  { hole:7, par:3, hdcp:8, ch:187, bk:170, rg:170, fr:156, ld:156 },
  { hole:8, par:4, hdcp:2, ch:417, bk:401, rg:360, fr:347, ld:347 },
  { hole:9, par:5, hdcp:4, ch:565, bk:545, rg:518, fr:498, ld:438 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 狭山ゴルフ・クラブ（埼玉県入間市 / 27H・2グリーン A/B ベント）
// 出典：楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110038/
// 設計：小寺酉二・竹村秀夫 / HDCP未設定（GORA=0）
// ティー: バック / レギュラー / フロント（3ティー）
// ─────────────────────────────────────────────────────────────────────────────
const SAYAMA_GC_EAST = [
  { hole:1, par:5, bk:507, rg:497, fr:497 },
  { hole:2, par:4, bk:413, rg:385, fr:357 },
  { hole:3, par:3, bk:158, rg:141, fr:122 },
  { hole:4, par:4, bk:341, rg:320, fr:298 },
  { hole:5, par:4, bk:390, rg:357, fr:357 },
  { hole:6, par:4, bk:434, rg:409, fr:384 },
  { hole:7, par:3, bk:169, rg:146, fr:126 },
  { hole:8, par:5, bk:563, rg:514, fr:489 },
  { hole:9, par:4, bk:446, rg:418, fr:393 },
];
const SAYAMA_GC_SOUTH = [
  { hole:1, par:5, bk:550, rg:530, fr:509 },
  { hole:2, par:3, bk:171, rg:156, fr:134 },
  { hole:3, par:4, bk:411, rg:382, fr:361 },
  { hole:4, par:4, bk:442, rg:417, fr:394 },
  { hole:5, par:5, bk:551, rg:513, fr:491 },
  { hole:6, par:4, bk:347, rg:325, fr:301 },
  { hole:7, par:4, bk:369, rg:348, fr:326 },
  { hole:8, par:3, bk:189, rg:168, fr:153 },
  { hole:9, par:4, bk:420, rg:395, fr:373 },
];
const SAYAMA_GC_WEST = [
  { hole:1, par:4, bk:404, rg:382, fr:366 },
  { hole:2, par:3, bk:219, rg:198, fr:164 },
  { hole:3, par:5, bk:523, rg:497, fr:497 },
  { hole:4, par:4, bk:379, rg:361, fr:337 },
  { hole:5, par:4, bk:408, rg:391, fr:370 },
  { hole:6, par:3, bk:192, rg:169, fr:134 },
  { hole:7, par:4, bk:442, rg:415, fr:376 },
  { hole:8, par:4, bk:359, rg:345, fr:325 },
  { hole:9, par:5, bk:529, rg:508, fr:475 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 日高カントリークラブ（埼玉県日高市 / 27H・2グリーン AG/BG ベント）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/345202/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110064/
// 設計：相馬正胤 / HDCP: 各コース9H独立（1〜9）
// ティー: Back T.(AG) / Reg.(AG) / Front(AG) / Back T.(BG) / Reg.(BG) / Front(BG)
// ─────────────────────────────────────────────────────────────────────────────
const HIDAKA_CC_EAST = [
  { hole:1, par:4, hdcp:4, bkA:383, rgA:364, frA:364, bkB:363, rgB:344, frB:344 },
  { hole:2, par:3, hdcp:7, bkA:190, rgA:173, frA:162, bkB:179, rgB:162, frB:151 },
  { hole:3, par:4, hdcp:1, bkA:468, rgA:430, frA:364, bkB:462, rgB:424, frB:358 },
  { hole:4, par:5, hdcp:3, bkA:553, rgA:525, frA:511, bkB:540, rgB:512, frB:498 },
  { hole:5, par:4, hdcp:5, bkA:355, rgA:343, frA:343, bkB:358, rgB:346, frB:346 },
  { hole:6, par:3, hdcp:8, bkA:183, rgA:162, frA:140, bkB:142, rgB:120, frB:106 },
  { hole:7, par:4, hdcp:2, bkA:453, rgA:434, frA:358, bkB:455, rgB:436, frB:360 },
  { hole:8, par:5, hdcp:6, bkA:569, rgA:555, frA:501, bkB:543, rgB:529, frB:475 },
  { hole:9, par:4, hdcp:9, bkA:347, rgA:328, frA:311, bkB:333, rgB:314, frB:297 },
];
const HIDAKA_CC_SOUTH = [
  { hole:1, par:4, hdcp:3, bkA:415, rgA:399, frA:366, bkB:395, rgB:379, frB:346 },
  { hole:2, par:4, hdcp:1, bkA:382, rgA:342, frA:314, bkB:404, rgB:364, frB:336 },
  { hole:3, par:5, hdcp:5, bkA:500, rgA:487, frA:472, bkB:489, rgB:476, frB:461 },
  { hole:4, par:3, hdcp:7, bkA:161, rgA:150, frA:150, bkB:159, rgB:145, frB:145 },
  { hole:5, par:5, hdcp:8, bkA:491, rgA:462, frA:447, bkB:502, rgB:473, frB:458 },
  { hole:6, par:4, hdcp:6, bkA:313, rgA:295, frA:295, bkB:299, rgB:281, frB:281 },
  { hole:7, par:4, hdcp:2, bkA:326, rgA:306, frA:306, bkB:317, rgB:297, frB:291 },
  { hole:8, par:3, hdcp:9, bkA:126, rgA:110, frA:110, bkB:130, rgB:112, frB:112 },
  { hole:9, par:4, hdcp:4, bkA:352, rgA:333, frA:333, bkB:334, rgB:315, frB:315 },
];
const HIDAKA_CC_WEST = [
  { hole:1, par:4, hdcp:8, bkA:362, rgA:343, frA:327, bkB:345, rgB:326, frB:310 },
  { hole:2, par:5, hdcp:9, bkA:499, rgA:475, frA:454, bkB:496, rgB:472, frB:451 },
  { hole:3, par:4, hdcp:2, bkA:419, rgA:398, frA:349, bkB:407, rgB:386, frB:337 },
  { hole:4, par:3, hdcp:7, bkA:177, rgA:166, frA:155, bkB:170, rgB:156, frB:145 },
  { hole:5, par:4, hdcp:1, bkA:456, rgA:415, frA:352, bkB:448, rgB:407, frB:344 },
  { hole:6, par:4, hdcp:3, bkA:418, rgA:378, frA:378, bkB:340, rgB:281, frB:281 },
  { hole:7, par:3, hdcp:5, bkA:219, rgA:198, frA:172, bkB:230, rgB:209, frB:183 },
  { hole:8, par:5, hdcp:4, bkA:583, rgA:556, frA:497, bkB:573, rgB:546, frB:487 },
  { hole:9, par:4, hdcp:6, bkA:385, rgA:371, frA:356, bkB:367, rgB:353, frB:338 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 高坂カントリークラブ（埼玉県東松山市 / 36H・2グリーン Ba/Be ベント/バミューダ）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/343101/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110043/
// 設計：（米山）富沢誠造 / （岩殿）東観光開発 / GDO評価4.9（高評価）
// ティー: Back / Reg / Ladies（×Be(ベント) / Ba(バミューダ) 2グリーン）
// ─────────────────────────────────────────────────────────────────────────────
const TAKASAKA_CC_YONEYAMA_OUT = [
  { hole:1, par:4, hdcp: 9, bkBe:391, rgBe:376, ldBe:335, bkBa:396, rgBa:381, ldBa:340 },
  { hole:2, par:4, hdcp: 3, bkBe:400, rgBe:380, ldBe:331, bkBa:407, rgBa:387, ldBa:338 },
  { hole:3, par:5, hdcp:15, bkBe:582, rgBe:487, ldBe:447, bkBa:584, rgBa:489, ldBa:449 },
  { hole:4, par:3, hdcp: 7, bkBe:197, rgBe:184, ldBe:121, bkBa:199, rgBa:186, ldBa:123 },
  { hole:5, par:4, hdcp: 1, bkBe:361, rgBe:332, ldBe:283, bkBa:373, rgBa:344, ldBa:295 },
  { hole:6, par:3, hdcp:13, bkBe:182, rgBe:148, ldBe:129, bkBa:191, rgBa:157, ldBa:131 },
  { hole:7, par:5, hdcp: 5, bkBe:500, rgBe:479, ldBe:420, bkBa:503, rgBa:482, ldBa:423 },
  { hole:8, par:4, hdcp:11, bkBe:393, rgBe:370, ldBe:326, bkBa:395, rgBa:372, ldBa:328 },
  { hole:9, par:4, hdcp:17, bkBe:423, rgBe:400, ldBe:338, bkBa:416, rgBa:393, ldBa:331 },
];
const TAKASAKA_CC_YONEYAMA_IN = [
  { hole:10, par:4, hdcp: 4, bkBe:402, rgBe:384, ldBe:316, bkBa:405, rgBa:367, ldBa:319 },
  { hole:11, par:3, hdcp:10, bkBe:177, rgBe:168, ldBe:149, bkBa:180, rgBa:162, ldBa:143 },
  { hole:12, par:4, hdcp:16, bkBe:379, rgBe:367, ldBe:350, bkBa:385, rgBa:373, ldBa:356 },
  { hole:13, par:4, hdcp:14, bkBe:382, rgBe:364, ldBe:291, bkBa:370, rgBa:352, ldBa:279 },
  { hole:14, par:5, hdcp: 2, bkBe:555, rgBe:533, ldBe:447, bkBa:559, rgBa:516, ldBa:451 },
  { hole:15, par:4, hdcp: 8, bkBe:393, rgBe:357, ldBe:324, bkBa:409, rgBa:373, ldBa:324 },
  { hole:16, par:3, hdcp: 6, bkBe:172, rgBe:162, ldBe:152, bkBa:169, rgBa:159, ldBa:149 },
  { hole:17, par:5, hdcp:12, bkBe:489, rgBe:469, ldBe:449, bkBa:490, rgBa:470, ldBa:450 },
  { hole:18, par:4, hdcp:18, bkBe:395, rgBe:377, ldBe:297, bkBa:393, rgBa:375, ldBa:295 },
];
const TAKASAKA_CC_IWADONO_OUT = [
  { hole:1, par:4, hdcp: 9, bkBe:353, rgBe:338, ldBe:251, bkBa:364, rgBa:349, ldBa:262 },
  { hole:2, par:5, hdcp: 3, bkBe:498, rgBe:484, ldBe:399, bkBa:497, rgBa:483, ldBa:398 },
  { hole:3, par:3, hdcp:15, bkBe:194, rgBe:177, ldBe:159, bkBa:173, rgBa:156, ldBa:138 },
  { hole:4, par:4, hdcp: 1, bkBe:414, rgBe:395, ldBe:316, bkBa:413, rgBa:394, ldBa:315 },
  { hole:5, par:4, hdcp: 7, bkBe:371, rgBe:357, ldBe:341, bkBa:373, rgBa:359, ldBa:343 },
  { hole:6, par:3, hdcp:13, bkBe:160, rgBe:146, ldBe:119, bkBa:165, rgBa:151, ldBa:124 },
  { hole:7, par:4, hdcp:17, bkBe:301, rgBe:280, ldBe:274, bkBa:349, rgBa:328, ldBa:322 },
  { hole:8, par:5, hdcp:11, bkBe:492, rgBe:465, ldBe:362, bkBa:495, rgBa:468, ldBa:365 },
  { hole:9, par:4, hdcp: 5, bkBe:348, rgBe:330, ldBe:303, bkBa:365, rgBa:347, ldBa:320 },
];
const TAKASAKA_CC_IWADONO_IN = [
  { hole:10, par:4, hdcp: 4, bkBe:417, rgBe:399, ldBe:331, bkBa:412, rgBa:394, ldBa:326 },
  { hole:11, par:5, hdcp:10, bkBe:514, rgBe:497, ldBe:445, bkBa:500, rgBa:483, ldBa:431 },
  { hole:12, par:4, hdcp:16, bkBe:383, rgBe:372, ldBe:351, bkBa:377, rgBa:366, ldBa:345 },
  { hole:13, par:4, hdcp: 2, bkBe:385, rgBe:371, ldBe:307, bkBa:382, rgBa:368, ldBa:304 },
  { hole:14, par:3, hdcp: 8, bkBe:170, rgBe:159, ldBe:143, bkBa:162, rgBa:151, ldBa:135 },
  { hole:15, par:5, hdcp:14, bkBe:549, rgBe:517, ldBe:460, bkBa:545, rgBa:513, ldBa:456 },
  { hole:16, par:4, hdcp:18, bkBe:346, rgBe:308, ldBe:307, bkBa:345, rgBa:307, ldBa:306 },
  { hole:17, par:3, hdcp: 6, bkBe:197, rgBe:175, ldBe:141, bkBa:204, rgBa:182, ldBa:148 },
  { hole:18, par:4, hdcp:12, bkBe:444, rgBe:411, ldBe:324, bkBa:444, rgBa:411, ldBa:324 },
];

// ─────────────────────────────────────────────────────────────────────────────
// こだまゴルフクラブ（埼玉県本庄市 / 18H・2グリーン New(ベント)/Old(バミューダ)）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/341503/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110031/
// 設計：上田治（最終作）/川田太三（監修） / GDO評価5.0（最高評価）
// ティー: BACK / REG. / FRONT / lady（4ティー）× Old/New 2グリーン
// ─────────────────────────────────────────────────────────────────────────────
const KODAMA_GC_OUT = [
  { hole:1, par:4, hdcp: 9, bkN:398, rgN:385, frN:364, ldN:305, bkO:407, rgO:394, frO:373, ldO:314 },
  { hole:2, par:4, hdcp: 3, bkN:390, rgN:373, frN:355, ldN:290, bkO:406, rgO:389, frO:371, ldO:306 },
  { hole:3, par:3, hdcp:15, bkN:216, rgN:199, frN:180, ldN:109, bkO:207, rgO:190, frO:171, ldO:100 },
  { hole:4, par:5, hdcp: 7, bkN:519, rgN:498, frN:482, ldN:408, bkO:565, rgO:544, frO:528, ldO:454 },
  { hole:5, par:3, hdcp:13, bkN:201, rgN:188, frN:174, ldN:158, bkO:200, rgO:187, frO:173, ldO:157 },
  { hole:6, par:4, hdcp: 1, bkN:402, rgN:382, frN:360, ldN:254, bkO:408, rgO:388, frO:366, ldO:260 },
  { hole:7, par:4, hdcp:17, bkN:344, rgN:328, frN:310, ldN:294, bkO:371, rgO:355, frO:337, ldO:321 },
  { hole:8, par:5, hdcp: 5, bkN:544, rgN:532, frN:509, ldN:395, bkO:556, rgO:544, frO:521, ldO:407 },
  { hole:9, par:4, hdcp:11, bkN:356, rgN:338, frN:319, ldN:264, bkO:373, rgO:355, frO:336, ldO:281 },
];
const KODAMA_GC_IN = [
  { hole:10, par:4, hdcp:10, bkN:414, rgN:396, frN:378, ldN:318, bkO:418, rgO:400, frO:382, ldO:322 },
  { hole:11, par:5, hdcp: 4, bkN:538, rgN:515, frN:499, ldN:439, bkO:539, rgO:516, frO:500, ldO:440 },
  { hole:12, par:3, hdcp:16, bkN:224, rgN:192, frN:168, ldN:140, bkO:228, rgO:196, frO:172, ldO:144 },
  { hole:13, par:4, hdcp:14, bkN:387, rgN:371, frN:352, ldN:290, bkO:395, rgO:379, frO:360, ldO:298 },
  { hole:14, par:4, hdcp: 2, bkN:456, rgN:430, frN:407, ldN:337, bkO:466, rgO:440, frO:417, ldO:347 },
  { hole:15, par:5, hdcp: 8, bkN:549, rgN:528, frN:498, ldN:417, bkO:554, rgO:533, frO:503, ldO:422 },
  { hole:16, par:4, hdcp: 6, bkN:364, rgN:345, frN:324, ldN:285, bkO:371, rgO:352, frO:331, ldO:292 },
  { hole:17, par:3, hdcp:18, bkN:184, rgN:164, frN:150, ldN:128, bkO:187, rgO:167, frO:153, ldO:131 },
  { hole:18, par:4, hdcp:12, bkN:412, rgN:394, frN:370, ldN:312, bkO:415, rgO:397, frO:373, ldO:315 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 鳩山カントリークラブ（埼玉県比企郡鳩山町 / 18H・2グリーン A/B ベント/バミューダ）
// 出典：GDO https://reserve.golfdigest.co.jp/golf-course/345101/course-info/
//        楽天GORA https://booking.gora.golf.rakuten.co.jp/guide/course_info/disp/c_id/110058/
// 設計：三好徳行・小林光昭 / GDO評価4.7
// ティー: Black / Blue / White / Red / Pink（5ティー）× A/B 2グリーン
// ─────────────────────────────────────────────────────────────────────────────
const HATOYAMA_CC_OUT = [
  { hole:1, par:4, hdcp: 9, bkA:416, blA:397, whA:354, reA:329, pkA:329, bkB:408, blB:389, whB:346, reB:321, pkB:321 },
  { hole:2, par:3, hdcp:15, bkA:210, blA:196, whA:173, reA:146, pkA:146, bkB:210, blB:169, whB:146, reB:118, pkB:118 },
  { hole:3, par:4, hdcp: 3, bkA:442, blA:424, whA:364, reA:336, pkA:240, bkB:412, blB:394, whB:334, reB:306, pkB:210 },
  { hole:4, par:4, hdcp: 1, bkA:430, blA:406, whA:379, reA:344, pkA:263, bkB:426, blB:402, whB:375, reB:340, pkB:259 },
  { hole:5, par:5, hdcp: 7, bkA:526, blA:502, whA:488, reA:452, pkA:341, bkB:513, blB:489, whB:475, reB:439, pkB:328 },
  { hole:6, par:4, hdcp:13, bkA:404, blA:394, whA:365, reA:327, pkA:327, bkB:379, blB:369, whB:340, reB:302, pkB:302 },
  { hole:7, par:4, hdcp: 5, bkA:379, blA:357, whA:321, reA:282, pkA:282, bkB:387, blB:365, whB:329, reB:290, pkB:290 },
  { hole:8, par:3, hdcp:17, bkA:195, blA:181, whA:170, reA:138, pkA:138, bkB:175, blB:163, whB:153, reB:124, pkB:124 },
  { hole:9, par:5, hdcp:11, bkA:542, blA:513, whA:475, reA:456, pkA:392, bkB:559, blB:530, whB:492, reB:473, pkB:409 },
];
const HATOYAMA_CC_IN = [
  { hole:10, par:4, hdcp: 4, bkA:442, blA:416, whA:396, reA:375, pkA:253, bkB:459, blB:433, whB:413, reB:392, pkB:270 },
  { hole:11, par:4, hdcp:16, bkA:368, blA:347, whA:335, reA:319, pkA:319, bkB:368, blB:347, whB:335, reB:319, pkB:319 },
  { hole:12, par:3, hdcp:10, bkA:204, blA:187, whA:160, reA:125, pkA:125, bkB:213, blB:193, whB:175, reB:143, pkB:143 },
  { hole:13, par:5, hdcp: 8, bkA:543, blA:510, whA:492, reA:458, pkA:356, bkB:552, blB:519, whB:501, reB:467, pkB:365 },
  { hole:14, par:4, hdcp:14, bkA:398, blA:381, whA:355, reA:327, pkA:327, bkB:392, blB:375, whB:349, reB:321, pkB:321 },
  { hole:15, par:4, hdcp: 2, bkA:465, blA:442, whA:395, reA:368, pkA:208, bkB:461, blB:438, whB:391, reB:364, pkB:204 },
  { hole:16, par:4, hdcp: 6, bkA:464, blA:443, whA:427, reA:394, pkA:278, bkB:462, blB:441, whB:425, reB:392, pkB:276 },
  { hole:17, par:3, hdcp:18, bkA:160, blA:139, whA:123, reA:107, pkA:107, bkB:165, blB:148, whB:131, reB:109, pkB:109 },
  { hole:18, par:5, hdcp:12, bkA:567, blA:545, whA:498, reA:470, pkA:470, bkB:564, blB:542, whB:495, reB:467, pkB:467 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 清澄ゴルフ倶楽部（埼玉県東松山市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 設計：大久保昌 / 埼玉ランキング14位
// ティー: BLACK / BLUE / WHITE / GREEN / GOLD（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const KIYOSUMI_GC_OUT = [
  { hole:1, par:4, hdcp: 9, bk:410, bl:381, wh:353, gr:315, go:281 },
  { hole:2, par:5, hdcp: 3, bk:566, bl:539, wh:513, gr:480, go:445 },
  { hole:3, par:3, hdcp:15, bk:198, bl:171, wh:142, gr:118, go:100 },
  { hole:4, par:4, hdcp: 1, bk:420, bl:391, wh:369, gr:332, go:315 },
  { hole:5, par:4, hdcp: 7, bk:425, bl:400, wh:379, gr:347, go:328 },
  { hole:6, par:4, hdcp:13, bk:404, bl:378, wh:349, gr:308, go:284 },
  { hole:7, par:4, hdcp:11, bk:381, bl:381, wh:356, gr:334, go:282 },
  { hole:8, par:3, hdcp:17, bk:180, bl:180, wh:163, gr:143, go:110 },
  { hole:9, par:5, hdcp: 5, bk:573, bl:543, wh:516, gr:487, go:454 },
];
const KIYOSUMI_GC_IN = [
  { hole:10, par:5, hdcp:10, bk:556, bl:530, wh:503, gr:459, go:441 },
  { hole:11, par:4, hdcp: 4, bk:427, bl:401, wh:371, gr:333, go:317 },
  { hole:12, par:4, hdcp:16, bk:390, bl:368, wh:344, gr:315, go:296 },
  { hole:13, par:3, hdcp:14, bk:206, bl:180, wh:155, gr:135, go:126 },
  { hole:14, par:5, hdcp: 8, bk:530, bl:513, wh:493, gr:465, go:450 },
  { hole:15, par:4, hdcp: 2, bk:414, bl:396, wh:380, gr:359, go:330 },
  { hole:16, par:4, hdcp:12, bk:379, bl:361, wh:345, gr:323, go:231 },
  { hole:17, par:3, hdcp:18, bk:188, bl:161, wh:136, gr:113, go: 95 },
  { hole:18, par:4, hdcp: 6, bk:437, bl:415, wh:390, gr:347, go:315 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 石坂ゴルフ倶楽部（埼玉県比企郡鳩山町 / 18H・1グリーン・ベント）
// 出典：公式サイト https://ishizakagolfclub.com（スクリーンショット）
// 設計：大日本土木 / 埼玉ランキング14位
// ティー: Black / Blue / White / Gold / Red（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const ISHIZAKA_GC_OUT = [
  { hole:1, par:5, hdcp:15, bk:550, bl:505, wh:480, go:460, re:430 },
  { hole:2, par:3, hdcp: 9, bk:200, bl:180, wh:165, go:135, re:110 },
  { hole:3, par:4, hdcp: 3, bk:410, bl:375, wh:340, go:305, re:255 },
  { hole:4, par:4, hdcp:13, bk:380, bl:350, wh:350, go:325, re:280 },
  { hole:5, par:4, hdcp: 7, bk:395, bl:360, wh:360, go:340, re:315 },
  { hole:6, par:5, hdcp: 1, bk:580, bl:565, wh:525, go:490, re:455 },
  { hole:7, par:3, hdcp:11, bk:230, bl:200, wh:170, go:160, re:145 },
  { hole:8, par:4, hdcp:17, bk:350, bl:330, wh:330, go:310, re:275 },
  { hole:9, par:4, hdcp: 5, bk:470, bl:430, wh:400, go:400, re:370 },
];
const ISHIZAKA_GC_IN = [
  { hole:10, par:4, hdcp:10, bk:405, bl:380, wh:365, go:365, re:330 },
  { hole:11, par:4, hdcp: 4, bk:375, bl:345, wh:330, go:330, re:315 },
  { hole:12, par:5, hdcp:16, bk:540, bl:510, wh:510, go:475, re:455 },
  { hole:13, par:3, hdcp: 8, bk:205, bl:175, wh:150, go:150, re:115 },
  { hole:14, par:4, hdcp: 2, bk:440, bl:405, wh:365, go:365, re:275 },
  { hole:15, par:4, hdcp:14, bk:385, bl:360, wh:360, go:330, re:310 },
  { hole:16, par:3, hdcp:12, bk:185, bl:165, wh:145, go:145, re: 80 },
  { hole:17, par:5, hdcp:18, bk:540, bl:530, wh:500, go:460, re:430 },
  { hole:18, par:4, hdcp: 6, bk:410, bl:385, wh:355, go:355, re:330 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 我孫子ゴルフ倶楽部（千葉県我孫子市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 設計：赤星兄弟 / 改造：ブライアン・シルバ・カイ・ゴールビー
// 名コース100選 8位 / コースレート72.8（Black Tee）/ 全長6,923Y
// ティー: Back / Regular / Front / Ladies（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const ABIKO_GC_OUT = [
  { hole:1, par:4, hdcp: 9, bk:365, rg:342, fr:332, ld:293 },
  { hole:2, par:4, hdcp: 3, bk:422, rg:391, fr:380, ld:348 },
  { hole:3, par:3, hdcp:15, bk:195, rg:179, fr:146, ld:146 },
  { hole:4, par:4, hdcp:13, bk:362, rg:326, fr:313, ld:254 },
  { hole:5, par:4, hdcp: 7, bk:381, rg:359, fr:309, ld:259 },
  { hole:6, par:5, hdcp: 1, bk:519, rg:488, fr:477, ld:426 },
  { hole:7, par:3, hdcp:17, bk:204, rg:184, fr:147, ld:147 },
  { hole:8, par:5, hdcp: 5, bk:562, rg:539, fr:524, ld:460 },
  { hole:9, par:4, hdcp:11, bk:387, rg:365, fr:351, ld:311 },
];
const ABIKO_GC_IN = [
  { hole:10, par:5, hdcp: 4, bk:537, rg:514, fr:493, ld:443 },
  { hole:11, par:4, hdcp:16, bk:401, rg:371, fr:361, ld:302 },
  { hole:12, par:5, hdcp:10, bk:573, rg:536, fr:522, ld:430 },
  { hole:13, par:3, hdcp: 8, bk:184, rg:157, fr:134, ld: 95 },
  { hole:14, par:4, hdcp: 2, bk:374, rg:357, fr:348, ld:320 },
  { hole:15, par:3, hdcp:14, bk:160, rg:157, fr:145, ld:145 },
  { hole:16, par:4, hdcp: 6, bk:428, rg:397, fr:385, ld:309 },
  { hole:17, par:4, hdcp:18, bk:437, rg:410, fr:401, ld:349 },
  { hole:18, par:4, hdcp:12, bk:432, rg:402, fr:389, ld:333 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 日光カンツリー倶楽部（栃木県日光市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 設計：井上誠一 / 名コース100選 11位 / CR74.8(Back) SR129
// ティー: BACK / REG（2ティー）
// ─────────────────────────────────────────────────────────────────────────────
const NIKKO_CC_OUT = [
  { hole:1, par:4, hdcp:11, bk:419, rg:407 },
  { hole:2, par:4, hdcp: 5, bk:468, rg:407 },
  { hole:3, par:3, hdcp:17, bk:200, rg:152 },
  { hole:4, par:5, hdcp: 1, bk:580, rg:559 },
  { hole:5, par:4, hdcp: 7, bk:444, rg:386 },
  { hole:6, par:4, hdcp:13, bk:350, rg:330 },
  { hole:7, par:4, hdcp: 3, bk:435, rg:400 },
  { hole:8, par:3, hdcp:15, bk:210, rg:188 },
  { hole:9, par:5, hdcp: 9, bk:513, rg:484 },
];
const NIKKO_CC_IN = [
  { hole:10, par:5, hdcp:12, bk:518, rg:500 },
  { hole:11, par:4, hdcp: 4, bk:455, rg:436 },
  { hole:12, par:3, hdcp:14, bk:235, rg:215 },
  { hole:13, par:5, hdcp: 2, bk:547, rg:500 },
  { hole:14, par:4, hdcp:10, bk:350, rg:330 },
  { hole:15, par:4, hdcp: 6, bk:415, rg:402 },
  { hole:16, par:3, hdcp:18, bk:225, rg:179 },
  { hole:17, par:4, hdcp: 8, bk:410, rg:388 },
  { hole:18, par:4, hdcp:16, bk:462, rg:404 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 千葉カントリークラブ 野田コース（千葉県野田市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://www.chibacc.co.jp/noda（スクリーンショット）
// ティー: Champion / Back / Regular / Front / Ladies（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const CHIBA_CC_NODA_OUT = [
  { hole:1, par:4, hdcp: 9, ch:380, bk:370, rg:360, fr:347, ld:335 },
  { hole:2, par:3, hdcp:15, ch:209, bk:187, rg:168, fr:158, ld:142 },
  { hole:3, par:5, hdcp: 3, ch:542, bk:522, rg:502, fr:490, ld:450 },
  { hole:4, par:4, hdcp: 7, ch:426, bk:413, rg:386, fr:376, ld:344 },
  { hole:5, par:4, hdcp: 1, ch:461, bk:435, rg:412, fr:392, ld:357 },
  { hole:6, par:4, hdcp:13, ch:361, bk:361, rg:345, fr:345, ld:337 },
  { hole:7, par:5, hdcp: 5, ch:538, bk:538, rg:524, fr:510, ld:462 },
  { hole:8, par:3, hdcp:17, ch:210, bk:201, rg:173, fr:140, ld:121 },
  { hole:9, par:4, hdcp:11, ch:388, bk:378, rg:347, fr:337, ld:327 },
];
const CHIBA_CC_NODA_IN = [
  { hole:10, par:4, hdcp:10, ch:435, bk:410, rg:400, fr:400, ld:351 },
  { hole:11, par:5, hdcp: 4, ch:566, bk:543, rg:526, fr:501, ld:467 },
  { hole:12, par:3, hdcp:16, ch:183, bk:183, rg:164, fr:146, ld:130 },
  { hole:13, par:4, hdcp:14, ch:362, bk:362, rg:346, fr:333, ld:333 },
  { hole:14, par:4, hdcp: 2, ch:425, bk:397, rg:380, fr:380, ld:363 },
  { hole:15, par:4, hdcp: 8, ch:393, bk:373, rg:357, fr:346, ld:307 },
  { hole:16, par:4, hdcp: 6, ch:451, bk:428, rg:411, fr:391, ld:350 },
  { hole:17, par:3, hdcp:18, ch:214, bk:197, rg:176, fr:157, ld:157 },
  { hole:18, par:5, hdcp:12, ch:514, bk:502, rg:481, fr:470, ld:452 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 千葉カントリークラブ 梅郷コース（千葉県野田市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://www.chibacc.co.jp/umesato（スクリーンショット）
// 名コース100選 29位 / ティー: Champion / Back / Regular / Front / Ladies（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const CHIBA_CC_UMESATO_OUT = [
  { hole:1, par:4, hdcp: 9, ch:400, bk:378, rg:363, fr:345, ld:345 },
  { hole:2, par:5, hdcp: 5, ch:517, bk:494, rg:470, fr:433, ld:433 },
  { hole:3, par:3, hdcp:15, ch:210, bk:210, rg:190, fr:167, ld:167 },
  { hole:4, par:4, hdcp: 7, ch:456, bk:417, rg:378, fr:363, ld:333 },
  { hole:5, par:4, hdcp:13, ch:402, bk:378, rg:363, fr:347, ld:347 },
  { hole:6, par:5, hdcp: 1, ch:601, bk:569, rg:539, fr:513, ld:485 },
  { hole:7, par:3, hdcp:17, ch:162, bk:162, rg:149, fr:128, ld:128 },
  { hole:8, par:4, hdcp: 3, ch:446, bk:410, rg:389, fr:374, ld:348 },
  { hole:9, par:4, hdcp:11, ch:385, bk:365, rg:353, fr:335, ld:335 },
];
const CHIBA_CC_UMESATO_IN = [
  { hole:10, par:4, hdcp: 4, ch:408, bk:408, rg:389, fr:366, ld:336 },
  { hole:11, par:4, hdcp:16, ch:379, bk:358, rg:345, fr:329, ld:329 },
  { hole:12, par:4, hdcp:10, ch:382, bk:366, rg:347, fr:334, ld:334 },
  { hole:13, par:3, hdcp:14, ch:175, bk:175, rg:159, fr:140, ld:140 },
  { hole:14, par:5, hdcp: 2, ch:562, bk:528, rg:513, fr:489, ld:454 },
  { hole:15, par:4, hdcp: 8, ch:407, bk:387, rg:369, fr:356, ld:356 },
  { hole:16, par:3, hdcp:18, ch:204, bk:204, rg:178, fr:157, ld:157 },
  { hole:17, par:4, hdcp:12, ch:415, bk:381, rg:361, fr:344, ld:314 },
  { hole:18, par:5, hdcp: 6, ch:572, bk:552, rg:519, fr:487, ld:457 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 千葉カントリークラブ 川間コース（千葉県野田市 / 27H・1グリーン・ベント）
// 出典：公式サイト https://www.chibacc.co.jp/kawama（スクリーンショット）
// ティー: Champion / Back / Regular / Front / Ladies（5ティー）
// HDCP: 各コース9H独立（1〜9）
// ─────────────────────────────────────────────────────────────────────────────
const CHIBA_CC_KAWAMA_EAST = [
  { hole:1, par:4, hdcp:4, ch:400, bk:372, rg:345, fr:345, ld:325 },
  { hole:2, par:3, hdcp:8, ch:144, bk:144, rg:125, fr:109, ld:109 },
  { hole:3, par:5, hdcp:2, ch:579, bk:516, rg:487, fr:453, ld:453 },
  { hole:4, par:5, hdcp:5, ch:520, bk:504, rg:482, fr:465, ld:440 },
  { hole:5, par:4, hdcp:1, ch:467, bk:440, rg:383, fr:357, ld:350 },
  { hole:6, par:4, hdcp:7, ch:374, bk:374, rg:353, fr:331, ld:331 },
  { hole:7, par:3, hdcp:9, ch:203, bk:182, rg:169, fr:152, ld:136 },
  { hole:8, par:4, hdcp:3, ch:442, bk:424, rg:401, fr:345, ld:345 },
  { hole:9, par:4, hdcp:6, ch:386, bk:386, rg:368, fr:349, ld:333 },
];
const CHIBA_CC_KAWAMA_SOUTH = [
  { hole:1, par:5, hdcp:2, ch:552, bk:527, rg:492, fr:481, ld:440 },
  { hole:2, par:4, hdcp:5, ch:431, bk:400, rg:385, fr:374, ld:338 },
  { hole:3, par:4, hdcp:8, ch:364, bk:364, rg:350, fr:342, ld:314 },
  { hole:4, par:4, hdcp:1, ch:440, bk:411, rg:391, fr:380, ld:350 },
  { hole:5, par:3, hdcp:7, ch:159, bk:159, rg:147, fr:134, ld:115 },
  { hole:6, par:4, hdcp:4, ch:371, bk:333, rg:321, fr:306, ld:291 },
  { hole:7, par:4, hdcp:3, ch:404, bk:387, rg:375, fr:363, ld:331 },
  { hole:8, par:3, hdcp:9, ch:221, bk:187, rg:173, fr:155, ld:142 },
  { hole:9, par:5, hdcp:6, ch:574, bk:512, rg:471, fr:460, ld:460 },
];
const CHIBA_CC_KAWAMA_WEST = [
  { hole:1, par:4, hdcp:5, ch:412, bk:392, rg:380, fr:364, ld:341 },
  { hole:2, par:4, hdcp:2, ch:415, bk:402, rg:386, fr:374, ld:360 },
  { hole:3, par:3, hdcp:8, ch:184, bk:166, rg:151, fr:134, ld:120 },
  { hole:4, par:5, hdcp:1, ch:572, bk:540, rg:507, fr:474, ld:474 },
  { hole:5, par:4, hdcp:7, ch:362, bk:348, rg:326, fr:303, ld:293 },
  { hole:6, par:4, hdcp:4, ch:410, bk:377, rg:360, fr:329, ld:329 },
  { hole:7, par:4, hdcp:3, ch:389, bk:357, rg:337, fr:327, ld:302 },
  { hole:8, par:3, hdcp:9, ch:210, bk:179, rg:154, fr:141, ld:141 },
  { hole:9, par:5, hdcp:6, ch:503, bk:487, rg:466, fr:454, ld:404 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 成田ゴルフ倶楽部（千葉県成田市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 名コース100選 52位 / 設計：川田太三
// ティー: Blue / White / Green / Red（4ティー）
// ─────────────────────────────────────────────────────────────────────────────
const NARITA_GC_OUT = [
  { hole:1, par:4, hdcp:15, bl:393, wh:354, gr:316, re:316 },
  { hole:2, par:4, hdcp: 9, bl:405, wh:372, gr:352, re:352 },
  { hole:3, par:5, hdcp: 3, bl:567, wh:532, gr:495, re:440 },
  { hole:4, par:3, hdcp:13, bl:198, wh:169, gr:143, re:143 },
  { hole:5, par:4, hdcp: 1, bl:418, wh:391, gr:367, re:260 },
  { hole:6, par:5, hdcp: 7, bl:550, wh:514, gr:485, re:447 },
  { hole:7, par:3, hdcp:17, bl:188, wh:176, gr:156, re:155 },
  { hole:8, par:4, hdcp: 5, bl:424, wh:397, gr:370, re:274 },
  { hole:9, par:4, hdcp:11, bl:456, wh:400, gr:318, re:318 },
];
const NARITA_GC_IN = [
  { hole:10, par:5, hdcp:10, bl:532, wh:482, gr:445, re:445 },
  { hole:11, par:4, hdcp: 4, bl:431, wh:398, gr:362, re:297 },
  { hole:12, par:3, hdcp:16, bl:180, wh:165, gr:127, re:127 },
  { hole:13, par:4, hdcp: 2, bl:454, wh:412, gr:384, re:307 },
  { hole:14, par:4, hdcp:14, bl:359, wh:345, gr:325, re:302 },
  { hole:15, par:4, hdcp: 8, bl:429, wh:408, gr:382, re:273 },
  { hole:16, par:3, hdcp: 6, bl:208, wh:183, gr:123, re:123 },
  { hole:17, par:5, hdcp:18, bl:501, wh:470, gr:424, re:424 },
  { hole:18, par:4, hdcp:12, bl:447, wh:380, gr:337, re:304 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 紫カントリークラブ すみれコース（千葉県印西市 / 18H・2グリーン A/B ベント）
// 出典：公式サイト（スクリーンショット）
// 名コース100選 57位 / 設計：小林英年
// ティー: Tournament / Champion / Back / Regular / Front（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const YUKARI_CC_OUT = [
  { hole:1, par:4, hdcp:15, toA:415, chA:395, bkA:385, rgA:375, frA:295, toB:430, chB:410, bkB:400, rgB:390, frB:310 },
  { hole:2, par:4, hdcp: 3, toA:426, chA:413, bkA:390, rgA:378, frA:284, toB:386, chB:373, bkB:350, rgB:338, frB:244 },
  { hole:3, par:4, hdcp: 9, toA:463, chA:422, bkA:413, rgA:398, frA:347, toB:441, chB:400, bkB:391, rgB:376, frB:325 },
  { hole:4, par:5, hdcp: 1, toA:566, chA:523, bkA:512, rgA:476, frA:461, toB:546, chB:503, bkB:492, rgB:456, frB:441 },
  { hole:5, par:4, hdcp: 7, toA:435, chA:421, bkA:398, rgA:383, frA:371, toB:390, chB:376, bkB:353, rgB:338, frB:326 },
  { hole:6, par:3, hdcp:13, toA:181, chA:165, bkA:157, rgA:130, frA:110, toB:178, chB:162, bkB:154, rgB:127, frB:107 },
  { hole:7, par:5, hdcp: 5, toA:579, chA:536, bkA:505, rgA:494, frA:456, toB:555, chB:512, bkB:481, rgB:470, frB:432 },
  { hole:8, par:3, hdcp:11, toA:251, chA:221, bkA:184, rgA:175, frA:141, toB:200, chB:190, bkB:161, rgB:145, frB:116 },
  { hole:9, par:4, hdcp:17, toA:404, chA:386, bkA:369, rgA:359, frA:339, toB:355, chB:337, bkB:320, rgB:310, frB:290 },
];
const YUKARI_CC_IN = [
  { hole:10, par:4, hdcp:10, toA:423, chA:412, bkA:401, rgA:390, frA:353, toB:431, chB:420, bkB:409, rgB:398, frB:361 },
  { hole:11, par:3, hdcp:16, toA:172, chA:157, bkA:147, rgA:136, frA:118, toB:191, chB:176, bkB:166, rgB:155, frB:137 },
  { hole:12, par:5, hdcp: 4, toA:495, chA:480, bkA:466, rgA:455, frA:393, toB:494, chB:479, bkB:465, rgB:454, frB:392 },
  { hole:13, par:4, hdcp:14, toA:425, chA:400, bkA:390, rgA:364, frA:347, toB:416, chB:391, bkB:381, rgB:355, frB:338 },
  { hole:14, par:4, hdcp: 2, toA:451, chA:424, bkA:416, rgA:404, frA:349, toB:460, chB:433, bkB:425, rgB:413, frB:358 },
  { hole:15, par:3, hdcp: 8, toA:227, chA:212, bkA:186, rgA:163, frA:155, toB:181, chB:163, bkB:147, rgB:115, frB:104 },
  { hole:16, par:4, hdcp:18, toA:428, chA:383, bkA:358, rgA:351, frA:315, toB:463, chB:418, bkB:393, rgB:386, frB:350 },
  { hole:17, par:4, hdcp: 6, toA:465, chA:441, bkA:421, rgA:396, frA:384, toB:419, chB:395, bkB:375, rgB:350, frB:338 },
  { hole:18, par:5, hdcp:12, toA:572, chA:516, bkA:503, rgA:477, frA:445, toB:553, chB:497, bkB:484, rgB:458, frB:426 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 紫カントリークラブ あやめコース EAST（千葉県印西市 / 18H・2グリーン あやめ/むらさき ベント）
// 出典：公式サイト（スクリーンショット）
// ティー: Back / Regular / Front / Murasaki(M)（4ティー）× あやめ/むらさき 2グリーン
// ─────────────────────────────────────────────────────────────────────────────
const YUKARI_AYAME_EAST_OUT = [
  { hole:1, par:4, hdcp: 3, bA:375, rA:360, fA:345, mA:300, bM:385, rM:370, fM:355, mM:310 },
  { hole:2, par:3, hdcp:15, bA:180, rA:173, fA:142, mA:122, bM:192, rM:185, fM:155, mM:137 },
  { hole:3, par:4, hdcp: 9, bA:357, rA:345, fA:335, mA:314, bM:350, rM:338, fM:328, mM:307 },
  { hole:4, par:3, hdcp:13, bA:195, rA:174, fA:165, mA:147, bM:160, rM:138, fM:129, mM:111 },
  { hole:5, par:5, hdcp: 1, bA:510, rA:491, fA:430, mA:430, bM:493, rM:474, fM:423, mM:423 },
  { hole:6, par:4, hdcp: 7, bA:346, rA:322, fA:274, mA:274, bM:336, rM:312, fM:264, mM:264 },
  { hole:7, par:4, hdcp: 5, bA:411, rA:398, fA:382, mA:315, bM:393, rM:380, fM:364, mM:297 },
  { hole:8, par:4, hdcp:17, bA:364, rA:343, fA:329, mA:299, bM:360, rM:339, fM:325, mM:295 },
  { hole:9, par:5, hdcp:11, bA:511, rA:502, fA:490, mA:430, bM:490, rM:480, fM:468, mM:408 },
];
const YUKARI_AYAME_EAST_IN = [
  { hole:10, par:5, hdcp: 4, bA:510, rA:492, fA:474, mA:428, bM:490, rM:472, fM:454, mM:408 },
  { hole:11, par:4, hdcp:10, bA:386, rA:361, fA:349, mA:318, bM:362, rM:337, fM:325, mM:294 },
  { hole:12, par:3, hdcp:16, bA:175, rA:165, fA:152, mA:126, bM:178, rM:168, fM:155, mM:129 },
  { hole:13, par:4, hdcp: 2, bA:415, rA:384, fA:373, mA:326, bM:392, rM:369, fM:358, mM:311 },
  { hole:14, par:4, hdcp:14, bA:307, rA:290, fA:277, mA:265, bM:307, rM:290, fM:277, mM:265 },
  { hole:15, par:4, hdcp: 8, bA:380, rA:366, fA:352, mA:310, bM:365, rM:351, fM:337, mM:298 },
  { hole:16, par:3, hdcp:18, bA:150, rA:131, fA:118, mA:118, bM:138, rM:119, fM:106, mM:106 },
  { hole:17, par:4, hdcp: 6, bA:406, rA:389, fA:362, mA:307, bM:383, rM:366, fM:339, mM:284 },
  { hole:18, par:5, hdcp:12, bA:482, rA:462, fA:448, mA:417, bM:471, rM:451, fM:437, mM:406 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 紫カントリークラブ あやめコース WEST（千葉県印西市 / 18H・2グリーン あやめ/むらさき ベント）
// 出典：公式サイト（スクリーンショット）
// ティー: Back / Regular / Front（3ティー）× あやめ/むらさき 2グリーン
// ─────────────────────────────────────────────────────────────────────────────
const YUKARI_AYAME_WEST_OUT = [
  { hole:1, par:4, hdcp: 9, bA:322, rA:314, fA:306, bM:311, rM:303, fM:295 },
  { hole:2, par:3, hdcp:15, bA:127, rA:119, fA:114, bM:120, rM:112, fM:107 },
  { hole:3, par:4, hdcp: 3, bA:375, rA:362, fA:348, bM:344, rM:331, fM:317 },
  { hole:4, par:3, hdcp:13, bA:176, rA:166, fA:157, bM:166, rM:156, fM:147 },
  { hole:5, par:5, hdcp: 7, bA:450, rA:442, fA:431, bM:435, rM:427, fM:416 },
  { hole:6, par:4, hdcp: 1, bA:392, rA:383, fA:378, bM:373, rM:364, fM:359 },
  { hole:7, par:5, hdcp:17, bA:453, rA:444, fA:435, bM:449, rM:440, fM:431 },
  { hole:8, par:4, hdcp: 5, bA:353, rA:348, fA:338, bM:346, rM:341, fM:331 },
  { hole:9, par:4, hdcp:11, bA:323, rA:303, fA:294, bM:314, rM:294, fM:285 },
];
const YUKARI_AYAME_WEST_IN = [
  { hole:10, par:4, hdcp:16, bA:321, rA:306, fA:300, bM:321, rM:306, fM:300 },
  { hole:11, par:4, hdcp: 4, bA:353, rA:344, fA:337, bM:345, rM:336, fM:329 },
  { hole:12, par:4, hdcp:10, bA:369, rA:355, fA:350, bM:354, rM:340, fM:335 },
  { hole:13, par:4, hdcp: 2, bA:355, rA:346, fA:320, bM:336, rM:327, fM:301 },
  { hole:14, par:5, hdcp: 8, bA:458, rA:448, fA:438, bM:439, rM:429, fM:419 },
  { hole:15, par:5, hdcp:14, bA:444, rA:433, fA:423, bM:442, rM:431, fM:421 },
  { hole:16, par:3, hdcp:12, bA:158, rA:151, fA:128, bM:149, rM:142, fM:123 },
  { hole:17, par:4, hdcp: 6, bA:328, rA:310, fA:300, bM:297, rM:279, fM:269 },
  { hole:18, par:3, hdcp:18, bA:157, rA:145, fA:131, bM:144, rM:132, fM:115 },
];


// ─────────────────────────────────────────────────────────────────────────────
// 宍戸ヒルズカントリークラブ WESTコース（茨城県笠間市 / 18H・1グリーン・ベント）
// 出典：公式サイト https://www.hillsgolf.jp/shishido/（スクリーンショット）
// 名コース100選 64位 / 設計：発知朗 / 日本ゴルフツアー選手権定期開催
// ティー: Black / Blue / White / Gold / Red（5ティー）/ HDCP非公開
// ─────────────────────────────────────────────────────────────────────────────
const SHISHIDO_HILLS_WEST = [
  { hole:1,  par:4, bk:398, bl:398, wh:358, go:326, re:326 },
  { hole:2,  par:5, bk:519, bl:519, wh:486, go:415, re:415 },
  { hole:3,  par:3, bk:192, bl:171, wh:161, go:125, re:125 },
  { hole:4,  par:4, bk:415, bl:393, wh:359, go:331, re:331 },
  { hole:5,  par:4, bk:402, bl:374, wh:339, go:339, re:248 },
  { hole:6,  par:5, bk:588, bl:588, wh:545, go:505, re:505 },
  { hole:7,  par:3, bk:231, bl:196, wh:164, go:117, re:117 },
  { hole:8,  par:4, bk:456, bl:411, wh:390, go:330, re:287 },
  { hole:9,  par:4, bk:508, bl:449, wh:375, go:356, re:356 },
  { hole:10, par:5, bk:515, bl:494, wh:471, go:417, re:400 },
  { hole:11, par:4, bk:407, bl:385, wh:374, go:324, re:324 },
  { hole:12, par:4, bk:408, bl:325, wh:325, go:325, re:291 },
  { hole:13, par:3, bk:162, bl:146, wh:146, go:132, re:132 },
  { hole:14, par:4, bk:460, bl:430, wh:383, go:360, re:272 },
  { hole:15, par:5, bk:638, bl:615, wh:580, go:500, re:464 },
  { hole:16, par:3, bk:190, bl:155, wh:139, go: 95, re: 95 },
  { hole:17, par:4, bk:481, bl:430, wh:412, go:387, re:310 },
  { hole:18, par:4, bk:467, bl:420, wh:374, go:336, re:320 },
];

// ─────────────────────────────────────────────────────────────────────────────
// 宍戸ヒルズカントリークラブ EASTコース（茨城県笠間市 / 18H・1グリーン・ベント New Green）
// 出典：公式サイト https://www.hillsgolf.jp/shishido/（スクリーンショット）
// 設計：発知朗 / HDCP非公開
// ─────────────────────────────────────────────────────────────────────────────
const SHISHIDO_HILLS_EAST = [
  { hole:1,  par:5, bk:562, bl:549, wh:518, go:477, re:425 },
  { hole:2,  par:3, bk:192, bl:192, wh:170, go:170, re:150 },
  { hole:3,  par:4, bk:400, bl:381, wh:367, go:367, re:278 },
  { hole:4,  par:3, bk:176, bl:176, wh:161, go:135, re:135 },
  { hole:5,  par:4, bk:353, bl:334, wh:316, go:292, re:292 },
  { hole:6,  par:4, bk:439, bl:439, wh:420, go:398, re:331 },
  { hole:7,  par:5, bk:496, bl:470, wh:445, go:445, re:358 },
  { hole:8,  par:4, bk:400, bl:400, wh:385, go:291, re:291 },
  { hole:9,  par:4, bk:420, bl:408, wh:386, go:372, re:358 },
  { hole:10, par:4, bk:411, bl:390, wh:374, go:352, re:332 },
  { hole:11, par:3, bk:187, bl:187, wh:174, go:147, re:147 },
  { hole:12, par:4, bk:409, bl:409, wh:388, go:368, re:300 },
  { hole:13, par:4, bk:419, bl:400, wh:359, go:330, re:282 },
  { hole:14, par:5, bk:501, bl:501, wh:475, go:450, re:450 },
  { hole:15, par:4, bk:393, bl:393, wh:369, go:345, re:268 },
  { hole:16, par:3, bk:197, bl:185, wh:167, go:148, re:148 },
  { hole:17, par:5, bk:523, bl:511, wh:491, go:475, re:435 },
  { hole:18, par:4, bk:364, bl:364, wh:346, go:328, re:328 },
];


// ─────────────────────────────────────────────────────────────────────────────
// PGM石岡ゴルフクラブ（茨城県石岡市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 名コース100選 77位 / 設計：J・ニクラウス
// ティー: Black / Blue / White / Gold / Red（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const PGM_ISHIOKA_OUT = [
  { hole:1, par:4, hdcp:15, bk:352, bl:335, wh:315, go:295, re:225 },
  { hole:2, par:5, hdcp: 3, bk:533, bl:519, wh:501, go:479, re:417 },
  { hole:3, par:4, hdcp: 9, bk:382, bl:350, wh:341, go:312, re:272 },
  { hole:4, par:3, hdcp:13, bk:196, bl:187, wh:156, go:130, re:105 },
  { hole:5, par:5, hdcp: 7, bk:576, bl:541, wh:510, go:467, re:420 },
  { hole:6, par:4, hdcp: 1, bk:466, bl:441, wh:383, go:354, re:319 },
  { hole:7, par:4, hdcp: 5, bk:430, bl:404, wh:375, go:340, re:290 },
  { hole:8, par:3, hdcp:17, bk:225, bl:198, wh:170, go:151, re:131 },
  { hole:9, par:4, hdcp:11, bk:429, bl:394, wh:367, go:328, re:286 },
];
const PGM_ISHIOKA_IN = [
  { hole:10, par:4, hdcp:10, bk:389, bl:363, wh:349, go:307, re:276 },
  { hole:11, par:5, hdcp: 4, bk:495, bl:463, wh:422, go:384, re:384 },
  { hole:12, par:4, hdcp:16, bk:352, bl:331, wh:304, go:271, re:250 },
  { hole:13, par:3, hdcp:14, bk:206, bl:191, wh:167, go:141, re:110 },
  { hole:14, par:4, hdcp: 8, bk:412, bl:387, wh:359, go:320, re:279 },
  { hole:15, par:4, hdcp: 2, bk:465, bl:413, wh:378, go:342, re:314 },
  { hole:16, par:5, hdcp: 6, bk:544, bl:476, wh:445, go:407, re:407 },
  { hole:17, par:3, hdcp:18, bk:184, bl:165, wh:153, go:140, re:117 },
  { hole:18, par:4, hdcp:12, bk:435, bl:411, wh:386, go:356, re:356 },
];


// ─────────────────────────────────────────────────────────────────────────────
// イーグルポイントゴルフクラブ（茨城県鉾田市 / 18H・1グリーン・ベント）
// 出典：公式サイト（スクリーンショット）
// 名コース100選 79位 / 設計：川田太三 / HDCP非公開
// ティー: Gold / Blue / White / Silver / Red（5ティー）
// ─────────────────────────────────────────────────────────────────────────────
const EAGLE_POINT_GC_OUT = [
  { hole:1, par:4, go:397, bl:361, wh:338, si:318, re:318 },
  { hole:2, par:4, go:460, bl:435, wh:407, si:384, re:342 },
  { hole:3, par:5, go:541, bl:501, wh:479, si:461, re:343 },
  { hole:4, par:4, go:354, bl:329, wh:303, si:285, re:285 },
  { hole:5, par:3, go:178, bl:155, wh:137, si:128, re:128 },
  { hole:6, par:4, go:415, bl:393, wh:358, si:337, re:228 },
  { hole:7, par:4, go:431, bl:369, wh:344, si:317, re:292 },
  { hole:8, par:5, go:601, bl:567, wh:543, si:507, re:444 },
  { hole:9, par:3, go:214, bl:176, wh:143, si:125, re:125 },
];
const EAGLE_POINT_GC_IN = [
  { hole:10, par:4, go:431, bl:377, wh:355, si:332, re:274 },
  { hole:11, par:5, go:539, bl:506, wh:483, si:453, re:345 },
  { hole:12, par:3, go:210, bl:189, wh:163, si:142, re:142 },
  { hole:13, par:4, go:372, bl:341, wh:316, si:298, re:298 },
  { hole:14, par:4, go:471, bl:422, wh:394, si:362, re:335 },
  { hole:15, par:5, go:570, bl:550, wh:524, si:500, re:388 },
  { hole:16, par:3, go:216, bl:169, wh:145, si:130, re:130 },
  { hole:17, par:4, go:432, bl:407, wh:386, si:350, re:303 },
  { hole:18, par:4, go:460, bl:395, wh:367, si:335, re:335 },
];

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
    name: "総武カントリークラブ 総武コース",
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
    name: "総武カントリークラブ 印旛コース",
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
    name: "総武カントリークラブ 北コース",
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
    name: "袖ヶ浦カントリークラブ 新袖コース",
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
    name: "オリムピックナショナルゴルフクラブ EASTコース",
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
    name: "オリムピックナショナルゴルフクラブ WESTコース",
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
    name: "房総カントリークラブ 西コース",
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
    name: "房総カントリークラブ 東コース",
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
    name: "房総カントリークラブ 大上ゴルフ場",
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
  // ─── 横浜カントリークラブ（36H / 東×西） ───
  {
    id: "yokohama_cc", reading: "ヨコハマカントリークラブ",
    name: "横浜カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "black",  label: "Black Tee" },
      { id: "green",  label: "Green Tee" },
      { id: "blue",   label: "Blue Tee" },
      { id: "white",  label: "White Tee" },
      { id: "yellow", label: "Yellow Tee（レディース/シニア）" },
    ],
    subCourses: [
      { name: "西OUT", holes: YOKOHAMA_CC_WEST.holes.slice(0, 9) },
      { name: "西IN",  holes: YOKOHAMA_CC_WEST.holes.slice(9, 18) },
      { name: "東OUT", holes: YOKOHAMA_CC_EAST.holes.slice(0, 9) },
      { name: "東IN",  holes: YOKOHAMA_CC_EAST.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      // 東コースはBlack/Blue/White/Gold、西コースはBlack/Green/Blue/White/Yellow
      if (tee === "black")  return hole.black  ?? null;
      if (tee === "green")  return hole.green  ?? null;
      if (tee === "blue")   return hole.blue   ?? null;
      if (tee === "white")  return hole.white  ?? null;
      if (tee === "yellow") return hole.yellow ?? null;
      if (tee === "gold")   return hole.gold   ?? null;
      return null;
    },
  },
  // ─── 東京バーディクラブ ───
  {
    id: "tokyo_birdie_cc", reading: "トウキョウバーディクラブ",
    name: "東京バーディクラブ",
    greens: [
      { id: "fuji", label: "FUJIグリーン（ベント）" },
      { id: "ume",  label: "UMEグリーン（ベント）" },
    ],
    tees: [
      { id: "fb", label: "フルバック" },
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "OUT", holes: TOKYO_BIRDIE_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TOKYO_BIRDIE_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      // FUJI/UMEで距離は同一（両グリーンで共通データ）
      if (tee === "fb") return hole.fb;
      if (tee === "bk") return hole.bk;
      if (tee === "rg") return hole.rg;
      if (tee === "ld") return hole.ld;
      return null;
    },
  },
  // ─── 東京よみうりカントリークラブ ───
  {
    id: "tokyo_yomiuri_cc", reading: "トウキョウヨミウリカントリークラブ",
    name: "東京よみうりカントリークラブ",
    greens: [
      { id: "bent",  label: "ベントグリーン（ニューベント）" },
      { id: "korai", label: "コーライグリーン" },
    ],
    tees: [
      { id: "to", label: "Tournament（ベントのみ）" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "gr", label: "Green（最前部）" },
    ],
    subCourses: [
      { name: "OUT", holes: TOKYO_YOMIURI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TOKYO_YOMIURI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const d = green === "korai" ? hole.korai : hole.bent;
      if (!d) return null;
      // Tournamentティーはベントのみ
      if (tee === "to") return hole.bent?.to ?? null;
      return d[tee] ?? null;
    },
  },
  // ─── ジュンクラシックカントリークラブ（36H / 椿×山吹） ───
  {
    id: "jun_classic_cc", reading: "ジュンクラシックカントリークラブ",
    name: "ジュンクラシックカントリークラブ",
    greens: [{ id: "bent", label: "ベント（ペンクロス×2G・共通距離）" }],
    tees: [
      { id: "ct", label: "CT（チャンピオン）" },
      { id: "rt", label: "RT（レギュラー）" },
      { id: "ft", label: "FT（フロント）" },
      { id: "lt", label: "LT（レディース）" },
    ],
    subCourses: [
      { name: "椿OUT", holes: JUN_CLASSIC_CC_TSUBAKI.holes.slice(0, 9) },
      { name: "椿IN",  holes: JUN_CLASSIC_CC_TSUBAKI.holes.slice(9, 18) },
      { name: "山吹OUT", holes: JUN_CLASSIC_CC_YAMABUKI.holes.slice(0, 9) },
      { name: "山吹IN",  holes: JUN_CLASSIC_CC_YAMABUKI.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "ct") return hole.ct;
      if (tee === "rt") return hole.rt;
      if (tee === "ft") return hole.ft;
      if (tee === "lt") return hole.lt;
      return null;
    },
  },
  // ─── 緑野カントリークラブ ───
  {
    id: "midono_cc", reading: "ミドノカントリークラブ",
    name: "緑野カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "blue",  label: "Blue（バック）" },
      { id: "white", label: "White（レギュラー）" },
      { id: "red",   label: "Red（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: MIDONO_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: MIDONO_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "blue")  return hole.blue;
      if (tee === "white") return hole.white;
      if (tee === "red")   return hole.red;
      return null;
    },
  },
  // ─── ロペ倶楽部 ───
  {
    id: "rope_club", reading: "ロペクラブ",
    name: "ロペ倶楽部",
    greens: [
      { id: "yellow", label: "YELLOWグリーン（ベント）" },
      { id: "red",    label: "REDグリーン（ベント）" },
    ],
    tees: [
      { id: "bt", label: "BT（バック）" },
      { id: "rt", label: "RT（レギュラー）" },
      { id: "lt", label: "LT（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: ROPE_CLUB_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: ROPE_CLUB_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const isRed = green === "red";
      if (tee === "bt") return isRed ? hole.rbt : hole.ybt;
      if (tee === "rt") return isRed ? hole.rrt : hole.yrt;
      if (tee === "lt") return isRed ? hole.rlt : hole.ylt;
      return null;
    },
  },
  // ─── 富士桜カントリー倶楽部 ───
  {
    id: "fujizakura_cc", reading: "フジザクラカントリークラブ",
    name: "富士桜カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "to", label: "Tournament" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: FUJIZAKURA_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: FUJIZAKURA_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "to") return hole.to;
      if (tee === "bk") return hole.bk;
      if (tee === "rg") return hole.rg;
      if (tee === "ld") return hole.ld;
      return null;
    },
  },
  // ─── 武蔵カントリークラブ 豊岡コース ───
  {
    id: "musashi_toyooka", reading: "ムサシカントリークラブトヨオカコース",
    name: "武蔵カントリークラブ 豊岡コース",
    greens: [
      { id: "white", label: "WHITEグリーン（ベント）" },
      { id: "red",   label: "REDグリーン（ベント）" },
    ],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "ft", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: MUSASHI_TOYOOKA_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: MUSASHI_TOYOOKA_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      // 両グリーンで共通距離
      if (tee === "bk") return hole.bk;
      if (tee === "rg") return hole.rg;
      if (tee === "ft") return hole.ft;
      if (tee === "ld") return hole.ld;
      return null;
    },
  },
  // ─── 武蔵カントリークラブ 笹井コース ───
  {
    id: "musashi_sasai", reading: "ムサシカントリークラブササイコース",
    name: "武蔵カントリークラブ 笹井コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "ft", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: MUSASHI_SASAI_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: MUSASHI_SASAI_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "bk") return hole.bk;
      if (tee === "rg") return hole.rg;
      if (tee === "ft") return hole.ft;
      if (tee === "ld") return hole.ld;
      return null;
    },
  },
  // ─── 甘楽カントリークラブ ───
  {
    id: "kanra_cc", reading: "カンラカントリークラブ",
    name: "甘楽カントリークラブ",
    greens: [
      { id: "g1", label: "第1グリーン（ベント）" },
      { id: "g2", label: "第2グリーン（ベント）" },
    ],
    tees: [
      { id: "bl", label: "Blue Tee" },
      { id: "wh", label: "White Tee" },
      { id: "gr", label: "Green Tee" },
      { id: "re", label: "Red Tee" },
    ],
    subCourses: [
      { name: "OUT", holes: KANRA_CC_G1.holes.slice(0, 9) },
      { name: "IN",  holes: KANRA_CC_G1.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      // 第1/第2グリーンで距離が異なる → グリーン選択でデータソース切替
      const src = green === "g2"
        ? KANRA_CC_G2.holes.find(h => h.hole === hole.hole)
        : hole;
      if (!src) return null;
      if (tee === "bl") return src.bl;
      if (tee === "wh") return src.wh;
      if (tee === "gr") return src.gr;
      if (tee === "re") return src.re;
      return null;
    },
  },
  // ─── 箱根カントリー倶楽部 ───
  {
    id: "hakone_cc", reading: "ハコネカントリークラブ",
    name: "箱根カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "ft", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: HAKONE_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HAKONE_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "ch") return hole.ch;
      if (tee === "bk") return hole.bk;
      if (tee === "rg") return hole.rg;
      if (tee === "ft") return hole.ft;
      if (tee === "ld") return hole.ld;
      return null;
    },
  },
  // ─── 富士箱根カントリークラブ ───
  {
    id: "fujihakone_cc", reading: "フジハコネカントリークラブ",
    name: "富士箱根カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bt", label: "BT（バック）" },
      { id: "rt", label: "RT（レギュラー）" },
      { id: "lt", label: "LT（レディース）" },
    ],
    subCourses: [
      { name: "OUT", holes: FUJIHAKONE_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: FUJIHAKONE_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "bt") return hole.bt;
      if (tee === "rt") return hole.rt;
      if (tee === "lt") return hole.lt;
      return null;
    },
  },
  // ─── 鳴沢ゴルフ倶楽部 ───
  {
    id: "narusawa_gc", reading: "ナルサワゴルフクラブ",
    name: "鳴沢ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "CHAMP" },
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGU" },
      { id: "go", label: "GOLD" },
    ],
    subCourses: [
      { name: "OUT", holes: NARUSAWA_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: NARUSAWA_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 取手国際ゴルフ倶楽部（36H 西×東） ───
  {
    id: "toride_intl_gc", reading: "トリデコクサイゴルフクラブ",
    name: "取手国際ゴルフ倶楽部",
    greens: [
      { id: "wko",  label: "西コース コーライG" },
      { id: "wbe",  label: "西コース ベントG" },
      { id: "east", label: "東コース（ベント1G）" },
    ],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG" },
      { id: "fr", label: "FRONT" },
      { id: "la", label: "LADY" },
    ],
    subCourses: [
      { name: "西OUT", holes: TORIDE_INTL_WEST_KORAI.holes.slice(0, 9) },
      { name: "西IN",  holes: TORIDE_INTL_WEST_KORAI.holes.slice(9, 18) },
      { name: "東OUT", holes: TORIDE_INTL_EAST.holes.slice(0, 9) },
      { name: "東IN",  holes: TORIDE_INTL_EAST.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      let src = hole;
      if (green === "wbe") {
        src = TORIDE_INTL_WEST_BENT.holes.find(x => x.hole === hole.hole) ?? hole;
      } else if (green === "east") {
        src = TORIDE_INTL_EAST.holes.find(x => x.hole === hole.hole) ?? hole;
      }
      return src[tee] ?? null;
    },
  },
  // ─── 吉井カントリークラブ ───
  {
    id: "yoshii_cc", reading: "ヨシイカントリークラブ",
    name: "吉井カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGULAR" },
      { id: "fr", label: "FRONT" },
    ],
    subCourses: [
      { name: "OUT", holes: YOSHII_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: YOSHII_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 若洲ゴルフリンクス ───
  {
    id: "wakasu_gl", reading: "ワカスゴルフリンクス",
    name: "若洲ゴルフリンクス",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bl", label: "BLUE" },
      { id: "wh", label: "WHITE" },
      { id: "go", label: "GOLD" },
      { id: "re", label: "RED" },
    ],
    subCourses: [
      { name: "OUT", holes: WAKASU_GL_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: WAKASU_GL_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── ホウライカントリー倶楽部 ───
  {
    id: "houlai_cc", reading: "ホウライカントリークラブ",
    name: "ホウライカントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "mi", label: "Mid" },
      { id: "fr", label: "Front" },
      { id: "la", label: "Lady" },
    ],
    subCourses: [
      { name: "OUT", holes: HOULAI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: HOULAI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 北の杜カントリー倶楽部 ───
  {
    id: "kitanomori_cc", reading: "キタノモリカントリークラブ",
    name: "北の杜カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "me", label: "Member" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "la", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: KITANOMORI_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: KITANOMORI_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 大栄カントリー倶楽部 ───
  {
    id: "taiey_cc", reading: "タイエイカントリークラブ",
    name: "大栄カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bl", label: "BLUE" },
      { id: "wh", label: "WHITE" },
      { id: "or", label: "ORANGE" },
      { id: "re", label: "RED" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIEY_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: TAIEY_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 上総富士ゴルフクラブ（27H / 南・東・西） ───
  {
    id: "kazusafuji_gc", reading: "カズサフジゴルフクラブ",
    name: "上総富士ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG" },
      { id: "ld", label: "LADIES" },
    ],
    subCourses: [
      { name: "南", holes: KAZUSAFUJI_GC_MINAMI.holes },
      { name: "東", holes: KAZUSAFUJI_GC_HIGASHI.holes },
      { name: "西", holes: KAZUSAFUJI_GC_NISHI.holes },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── シャトレーゼヴィンテージゴルフ倶楽部 ───
  {
    id: "chateraise_vintage_gc", reading: "シャトレーゼヴィンテージゴルフクラブ",
    name: "シャトレーゼヴィンテージゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: CHATERAISE_VINTAGE_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: CHATERAISE_VINTAGE_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 東京国際ゴルフ倶楽部 ───
  {
    id: "tokyo_intl_gc", reading: "トウキョウコクサイゴルフクラブ",
    name: "東京国際ゴルフ倶楽部",
    greens: [
      { id: "bent",  label: "ベントグリーン" },
      { id: "korai", label: "コーライグリーン" },
    ],
    tees: [
      { id: "bt", label: "BT（バック）" },
      { id: "rt", label: "RT（レギュラー）" },
      { id: "ft", label: "FT（フロント）" },
    ],
    subCourses: [
      { name: "OUT", holes: TOKYO_INTL_GC_BENT.holes.slice(0, 9) },
      { name: "IN",  holes: TOKYO_INTL_GC_BENT.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const src = green === "korai"
        ? TOKYO_INTL_GC_KORAI.holes.find(h => h.hole === hole.hole) ?? hole
        : hole;
      return src[tee] ?? null;
    },
  },
  // ─── 平塚富士見カントリークラブ（36H / 平塚×大磯） ───
  {
    id: "hiratsuka_fc", reading: "ヒラツカフジミカントリークラブ",
    name: "平塚富士見カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント CY2）" },
      { id: "b", label: "Bグリーン（ベント ペンクロス）" },
    ],
    tees: [
      { id: "ch", label: "CHAMP" },
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG" },
      { id: "ld", label: "LADIES" },
    ],
    subCourses: [
      { name: "平塚OUT", holes: HIRATSUKA_FC_HIRATSUKA.holes.slice(0, 9) },
      { name: "平塚IN",  holes: HIRATSUKA_FC_HIRATSUKA.holes.slice(9, 18) },
      { name: "大磯OUT", holes: HIRATSUKA_FC_OISO.holes.slice(0, 9) },
      { name: "大磯IN",  holes: HIRATSUKA_FC_OISO.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      // A/Bグリーンで距離データは同一（GORAはA表示のみ）
      return hole[tee] ?? null;
    },
  },
  // ─── 大利根カントリークラブ（36H / 東×西） ───
  {
    id: "ohtone_cc", reading: "オオトネカントリークラブ",
    name: "大利根カントリークラブ",
    greens: [
      { id: "white", label: "Whiteグリーン（ベント）" },
      { id: "red",   label: "Redグリーン（ベント）" },
    ],
    tees: [
      { id: "ch", label: "CHAMPION" },
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGULAR" },
      { id: "fr", label: "FRONT" },
    ],
    subCourses: [
      { name: "東OUT", holes: OHTONE_CC_EAST.holes.slice(0, 9) },
      { name: "東IN",  holes: OHTONE_CC_EAST.holes.slice(9, 18) },
      { name: "西OUT", holes: OHTONE_CC_WEST.holes.slice(0, 9) },
      { name: "西IN",  holes: OHTONE_CC_WEST.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 茨城ゴルフ倶楽部（36H / 東×西） ───
  {
    id: "ibaraki_gc", reading: "イバラキゴルフクラブ",
    name: "茨城ゴルフ倶楽部",
    greens: [
      { id: "east", label: "東コース（ベント1G）" },
      { id: "wa",   label: "西コース Aグリーン（ベント）" },
      { id: "wb",   label: "西コース Bグリーン（高麗）" },
    ],
    tees: [
      { id: "ch", label: "CHAMP（東のみ）" },
      { id: "bk", label: "BLACK" },
      { id: "bl", label: "BLUE" },
      { id: "wh", label: "WHITE" },
      { id: "gr", label: "GREEN" },
      { id: "or", label: "ORANGE" },
    ],
    subCourses: [
      { name: "東OUT", holes: IBARAKI_GC_EAST_COURSE.holes.slice(0, 9) },
      { name: "東IN",  holes: IBARAKI_GC_EAST_COURSE.holes.slice(9, 18) },
      { name: "西OUT", holes: IBARAKI_GC_WEST_COURSE.holes.slice(0, 9) },
      { name: "西IN",  holes: IBARAKI_GC_WEST_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      if (green === "east") {
        const h = IBARAKI_GC_EAST_COURSE.holes.find(x => x.hole === hole.hole) ?? hole;
        return h[tee] ?? null;
      }
      // 西コースはA/B共通距離
      const h = IBARAKI_GC_WEST_COURSE.holes.find(x => x.hole === hole.hole) ?? hole;
      if (tee === "ch") return h.bk ?? null; // CHAMPなし→BLACK代用
      return h[tee] ?? null;
    },
  },
  // ─── 川奈ホテルゴルフコース 富士コース ───
  {
    id: "kawana_fuji_gc", reading: "カワナホテルゴルフコースフジコース",
    name: "川奈ホテルゴルフコース 富士コース",
    greens: [{ id: "korai", label: "高麗（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGULAR" },
      { id: "fr", label: "FRONT" },
    ],
    subCourses: [
      { name: "OUT", holes: KAWANA_FUJI_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: KAWANA_FUJI_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 武蔵野ゴルフクラブ ───
  {
    id: "musashino_gc", reading: "ムサシノゴルフクラブ",
    name: "武蔵野ゴルフクラブ",
    greens: [
      { id: "bent",  label: "ベントグリーン" },
      { id: "korai", label: "高麗グリーン" },
    ],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Reg" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: MUSASHINO_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: MUSASHINO_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 西那須野カントリー倶楽部 ───
  {
    id: "nishinasuno_cc", reading: "ニシナスノカントリークラブ",
    name: "西那須野カントリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "mi", label: "Mid" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Lady" },
    ],
    subCourses: [
      { name: "OUT", holes: NISHINASUNO_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: NISHINASUNO_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── プレステージカントリークラブ（36H / 東×西） ───
  {
    id: "prestige_cc", reading: "プレステージカントリークラブ",
    name: "プレステージカントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "東OUT", holes: PRESTIGE_CC_EAST.holes.slice(0, 9) },
      { name: "東IN",  holes: PRESTIGE_CC_EAST.holes.slice(9, 18) },
      { name: "西OUT", holes: PRESTIGE_CC_WEST.holes.slice(0, 9) },
      { name: "西IN",  holes: PRESTIGE_CC_WEST.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => {
      const src = PRESTIGE_CC_WEST.holes.find(h => h.hole === hole.hole && hole._course === 'west')
        ?? hole;
      return hole[tee] ?? null;
    },
  },
  // ─── 那須カントリークラブ ───
  {
    id: "nasu_cc", reading: "ナスカントリークラブ",
    name: "那須カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン・L93）" }],
    tees: [
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
    ],
    subCourses: [
      { name: "OUT", holes: NASU_CC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: NASU_CC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── スプリングフィルズゴルフクラブ ───
  {
    id: "springfields_gc", reading: "スプリングフィルズゴルフクラブ",
    name: "スプリングフィルズゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: SPRINGFIELDS_GC_COURSE.holes.slice(0, 9) },
      { name: "IN",  holes: SPRINGFIELDS_GC_COURSE.holes.slice(9, 18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 千葉国際カントリークラブ 桜コース（27H / 西・中・東） ───
  {
    id: "chiba_kokusei_sakura", reading: "チバコクサイカントリークラブサクラコース",
    name: "千葉国際カントリークラブ 桜コース",
    greens: [{ id: "mg", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "桜西", holes: CHIBA_KOKUSEI_SAKURA_WEST },
      { name: "桜中", holes: CHIBA_KOKUSEI_SAKURA_MID },
      { name: "桜東", holes: CHIBA_KOKUSEI_SAKURA_EAST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 千葉国際カントリークラブ 竹コース（18H / 2グリーン MG/SG） ───
  {
    id: "chiba_kokusei_take", reading: "チバコクサイカントリークラブタケコース",
    name: "千葉国際カントリークラブ 竹コース",
    greens: [
      { id: "mg", label: "MGグリーン（ベント）" },
      { id: "sg", label: "SGグリーン（ベント）" },
    ],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "re", label: "Red（MGのみ）" },
    ],
    subCourses: [
      { name: "OUT", holes: CHIBA_KOKUSEI_TAKE_OUT },
      { name: "IN",  holes: CHIBA_KOKUSEI_TAKE_IN },
    ],
    getYardage: (hole, green, tee) => {
      if (tee === "re") return hole["mgRe"] ?? null;
      if (green === "sg") return hole[`sg${tee.charAt(0).toUpperCase()+tee.slice(1)}`] ?? null;
      return hole[`mg${tee.charAt(0).toUpperCase()+tee.slice(1)}`] ?? null;
    },
  },
  // ─── 鹿沼カントリー倶楽部 北コース（18H） ───
  {
    id: "kanuma_cc_kita", reading: "カヌマカントリークラブキタコース",
    name: "鹿沼カントリー倶楽部 北コース",
    greens: [
      { id: "ag", label: "AGグリーン" },
      { id: "bg", label: "BGグリーン" },
    ],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGULAR" },
      { id: "ld", label: "LADIES" },
    ],
    subCourses: [
      { name: "OUT", holes: KANUMA_CC_KITA_OUT },
      { name: "IN",  holes: KANUMA_CC_KITA_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "bg" ? "Bg" : "Ag";
      const t = tee === "bk" ? "bk" : tee === "rg" ? "rg" : "ld";
      return hole[`${t}${g}`] ?? null;
    },
  },
  // ─── 鹿沼カントリー倶楽部 南コース＋黄金コース（27H） ───
  {
    id: "kanuma_cc_minami", reading: "カヌマカントリークラブミナミコース",
    name: "鹿沼カントリー倶楽部 南コース・黄金コース",
    greens: [
      { id: "ag", label: "AGグリーン" },
      { id: "bg", label: "BGグリーン" },
    ],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGULAR" },
      { id: "ld", label: "LADIES" },
    ],
    subCourses: [
      { name: "南OUT",  holes: KANUMA_CC_MINAMI_OUT },
      { name: "南IN",   holes: KANUMA_CC_MINAMI_IN },
      { name: "黄金",   holes: KANUMA_CC_KOGANE },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "bg" ? "Bg" : "Ag";
      const t = tee === "bk" ? "bk" : tee === "rg" ? "rg" : "ld";
      return hole[`${t}${g}`] ?? null;
    },
  },
  // ─── 大厚木カントリークラブ 本コース（27H / 東・西・南） ───
  {
    id: "oatsugi_cc", reading: "オオアツギカントリークラブホンコース",
    name: "大厚木カントリークラブ 本コース",
    greens: [{ id: "r", label: "Rグリーン（ベント）" }],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "gr", label: "Green" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "東", holes: OATSUGI_CC_EAST },
      { name: "西", holes: OATSUGI_CC_WEST },
      { name: "南", holes: OATSUGI_CC_SOUTH },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 烏山城カントリークラブ（27H / 本丸・二の丸・三の丸） ───
  {
    id: "karasuyama_cc", reading: "カラスヤマジョウカントリークラブ",
    name: "烏山城カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "本丸", holes: KARASUYAMA_CC_HONMARU },
      { name: "二の丸", holes: KARASUYAMA_CC_NINOMARU },
      { name: "三の丸", holes: KARASUYAMA_CC_SANMARU },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── グランディ那須白河ゴルフクラブ（27H / EAST・SOUTH・WEST） ───
  {
    id: "grandi_nasushirakawa_gc", reading: "グランディナスシラカワゴルフクラブ",
    name: "グランディ那須白河ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "back" },
      { id: "fr", label: "front" },
      { id: "ld", label: "ladie's" },
    ],
    subCourses: [
      { name: "EAST",  holes: GRANDI_NASUSHIRAKAWA_EAST },
      { name: "SOUTH", holes: GRANDI_NASUSHIRAKAWA_SOUTH },
      { name: "WEST",  holes: GRANDI_NASUSHIRAKAWA_WEST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 栃木カントリークラブ（27H / 西・中・東） ───
  {
    id: "tochigi_cc", reading: "トチギカントリークラブ",
    name: "栃木カントリークラブ",
    greens: [
      { id: "bg", label: "BGグリーン（高麗）" },
      { id: "kg", label: "KGグリーン（高麗）" },
    ],
    tees: [
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "西", holes: TOCHIGI_CC_WEST },
      { name: "中", holes: TOCHIGI_CC_CENTER },
      { name: "東", holes: TOCHIGI_CC_EAST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 大洗ゴルフ倶楽部 ───
  {
    id: "oarai_gc", reading: "オオアライゴルフクラブ",
    name: "大洗ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG" },
      { id: "fr", label: "FRONT" },
      { id: "go", label: "GOLD" },
    ],
    subCourses: [
      { name: "OUT", holes: OARAI_GC_OUT },
      { name: "IN",  holes: OARAI_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 水戸・ゴルフ・クラブ（36H / 南・西・北・東） ───
  {
    id: "mito_gc", reading: "ミトゴルフクラブ",
    name: "水戸・ゴルフ・クラブ",
    greens: [
      { id: "r", label: "右グリーン（ベント）" },
      { id: "l", label: "左グリーン（ベント）" },
    ],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "gr", label: "Green" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "南", holes: MITO_GC_SOUTH },
      { name: "西", holes: MITO_GC_WEST },
      { name: "北", holes: MITO_GC_NORTH },
      { name: "東", holes: MITO_GC_EAST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 太平洋クラブ成田コース ───
  {
    id: "taiheiyo_narita", reading: "タイヘイヨウクラブナリタコース",
    name: "太平洋クラブ成田コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYO_NARITA_OUT },
      { name: "IN",  holes: TAIHEIYO_NARITA_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 宇都宮カンツリークラブ（27H / 北・中・南） ───
  {
    id: "utsunomiya_cc", reading: "ウツノミヤカンツリークラブ",
    name: "宇都宮カンツリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REGLAR" },
      { id: "fr", label: "FRONT" },
      { id: "ld", label: "LADIES" },
    ],
    subCourses: [
      { name: "北", holes: UTSUNOMIYA_CC_NORTH },
      { name: "中", holes: UTSUNOMIYA_CC_CENTER },
      { name: "南", holes: UTSUNOMIYA_CC_SOUTH },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 藤岡ゴルフクラブ（36H / 東コース・西コース） ───
  {
    id: "fujioka_gc", reading: "フジオカゴルフクラブ",
    name: "藤岡ゴルフクラブ",
    greens: [
      { id: "bent", label: "ベント" },
      { id: "korai", label: "高麗" },
    ],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "gr", label: "Green" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "東OUT", holes: FUJIOKA_GC_EAST_OUT },
      { name: "東IN",  holes: FUJIOKA_GC_EAST_IN },
      { name: "西OUT", holes: FUJIOKA_GC_WEST_OUT },
      { name: "西IN",  holes: FUJIOKA_GC_WEST_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── ゴールド栃木プレジデントカントリークラブ（27H / 東OUT・東IN・西） ───
  {
    id: "gold_tochigi_cc", reading: "ゴールドトチギプレジデントカントリークラブ",
    name: "ゴールド栃木プレジデントカントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "東OUT", holes: GOLD_TOCHIGI_EAST_OUT },
      { name: "東IN",  holes: GOLD_TOCHIGI_EAST_IN },
      { name: "西",    holes: GOLD_TOCHIGI_WEST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── さいたまゴルフクラブ ───
  {
    id: "saitama_gc", reading: "サイタマゴルフクラブ",
    name: "さいたまゴルフクラブ",
    greens: [
      { id: "bent", label: "ベント" },
      { id: "bm", label: "バミューダ（ティフイーグル）" },
    ],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: SAITAMA_GC_OUT },
      { name: "IN",  holes: SAITAMA_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 埼玉国際ゴルフ倶楽部（27H / 西・東・南） ───
  {
    id: "saitama_kokusai_gc", reading: "サイタマコクサイゴルフクラブ",
    name: "埼玉国際ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント１（1グリーン）" }],
    tees: [
      { id: "bl", label: "ブルー" },
      { id: "gr", label: "グリーン" },
      { id: "wh", label: "ホワイト" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "西", holes: SAITAMA_KOKUSAI_GC_WEST },
      { name: "東", holes: SAITAMA_KOKUSAI_GC_EAST },
      { name: "南", holes: SAITAMA_KOKUSAI_GC_SOUTH },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 太平洋クラブ御殿場コース ───
  {
    id: "taiheiyo_gotenba", reading: "タイヘイヨウクラブゴテンバコース",
    name: "太平洋クラブ御殿場コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "to", label: "Tournament" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "mi", label: "Middle" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYO_GOTENBA_OUT },
      { name: "IN",  holes: TAIHEIYO_GOTENBA_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 那須国際カントリークラブ ───
  {
    id: "nasu_kokusai_cc", reading: "ナスコクサイカントリークラブ",
    name: "那須国際カントリークラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "OUT", holes: NASU_KOKUSAI_CC_OUT },
      { name: "IN",  holes: NASU_KOKUSAI_CC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 太平洋クラブ御殿場ウエスト ───
  {
    id: "taiheiyo_gotenba_west", reading: "タイヘイヨウクラブゴテンバウエスト",
    name: "太平洋クラブ御殿場ウエスト",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "fr", label: "フロント" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYO_GOTENBA_WEST_OUT },
      { name: "IN",  holes: TAIHEIYO_GOTENBA_WEST_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 伊香保カントリークラブ（18H / さくら(S)・つつじ(T) 2グリーン）───
  {
    id: "ikaho_cc", reading: "イカホカントリークラブ",
    name: "伊香保カントリークラブ",
    greens: [
      { id: "s", label: "さくらグリーン（ベント）" },
      { id: "t", label: "つつじグリーン（ベント）" },
    ],
    tees: [
      { id: "gr", label: "GREEN" },
      { id: "bl", label: "BLUE" },
      { id: "wh", label: "WHITE" },
      { id: "sk", label: "SKYBLUE" },
      { id: "re", label: "RED" },
    ],
    subCourses: [
      { name: "OUT", holes: IKAHO_CC_OUT },
      { name: "IN",  holes: IKAHO_CC_IN },
    ],
    getYardage: (hole, green, tee) => {
      const gKey = green === "t" ? "T" : "S";
      return hole[tee + gKey] ?? null;
    },
  },
  // ─── 那須野ヶ原カントリークラブ（18H / 那須コース・那珂川コース） ───
  {
    id: "nasunoghara_cc", reading: "ナスノガハラカントリークラブ",
    name: "那須野ヶ原カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "bk", label: "バック(Back T.)" },
      { id: "rg", label: "レギュラー" },
      { id: "fr", label: "フロント" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "那須",   holes: NASUNOGHARA_CC_NASU },
      { name: "那珂川", holes: NASUNOGHARA_CC_NAKAGAWA },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 太平洋クラブ江南コース ───
  {
    id: "taiheiyo_konan", reading: "タイヘイヨウクラブコウナンコース",
    name: "太平洋クラブ江南コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: TAIHEIYO_KONAN_OUT },
      { name: "IN",  holes: TAIHEIYO_KONAN_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 嵐山カントリークラブ（18H / A・B 2グリーン） ───
  {
    id: "ranzan_cc", reading: "ランザンカントリークラブ",
    name: "嵐山カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "la", label: "GREEN" },
    ],
    subCourses: [
      { name: "OUT", holes: RANZAN_CC_OUT },
      { name: "IN",  holes: RANZAN_CC_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "b" ? "B" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 東松山カントリークラブ（27H / 東・中・西） ───
  {
    id: "higashimatsuyama_cc", reading: "ヒガシマツヤマカントリークラブ",
    name: "東松山カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "l", label: "Lグリーン（高麗）" },
    ],
    tees: [
      { id: "ch", label: "チャンピオン" },
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "fr", label: "フロント" },
      { id: "ld", label: "レディース" },
    ],
    subCourses: [
      { name: "東", holes: HIGASHIMATSUYAMA_CC_EAST },
      { name: "中", holes: HIGASHIMATSUYAMA_CC_CENTER },
      { name: "西", holes: HIGASHIMATSUYAMA_CC_WEST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 狭山ゴルフ・クラブ（27H / 東・南・西） ───
  {
    id: "sayama_gc", reading: "サヤマゴルフクラブ",
    name: "狭山ゴルフ・クラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "bk", label: "バック" },
      { id: "rg", label: "レギュラー" },
      { id: "fr", label: "フロント" },
    ],
    subCourses: [
      { name: "東", holes: SAYAMA_GC_EAST },
      { name: "南", holes: SAYAMA_GC_SOUTH },
      { name: "西", holes: SAYAMA_GC_WEST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 日高カントリークラブ（27H / 東・南・西） ───
  {
    id: "hidaka_cc", reading: "ヒダカカントリークラブ",
    name: "日高カントリークラブ",
    greens: [
      { id: "ag", label: "AGグリーン（ベント）" },
      { id: "bg", label: "BGグリーン（ベント）" },
    ],
    tees: [
      { id: "bk", label: "Back T." },
      { id: "rg", label: "Reg." },
      { id: "fr", label: "Front" },
    ],
    subCourses: [
      { name: "東", holes: HIDAKA_CC_EAST },
      { name: "南", holes: HIDAKA_CC_SOUTH },
      { name: "西", holes: HIDAKA_CC_WEST },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "bg" ? "B" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 高坂カントリークラブ（36H / 米山・岩殿 × OUT・IN） ───
  {
    id: "takasaka_cc", reading: "タカサカカントリークラブ",
    name: "高坂カントリークラブ",
    greens: [
      { id: "be", label: "ベントグリーン" },
      { id: "ba", label: "バミューダグリーン" },
    ],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Reg" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "米山OUT", holes: TAKASAKA_CC_YONEYAMA_OUT },
      { name: "米山IN",  holes: TAKASAKA_CC_YONEYAMA_IN },
      { name: "岩殿OUT", holes: TAKASAKA_CC_IWADONO_OUT },
      { name: "岩殿IN",  holes: TAKASAKA_CC_IWADONO_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "ba" ? "Ba" : "Be";
      return hole[tee + g] ?? null;
    },
  },
  // ─── こだまゴルフクラブ（18H / New(ベント)・Old(バミューダ) 2グリーン） ───
  {
    id: "kodama_gc", reading: "コダマゴルフクラブ",
    name: "こだまゴルフクラブ",
    greens: [
      { id: "n", label: "Newグリーン（ニューベント）" },
      { id: "o", label: "Oldグリーン（バミューダ）" },
    ],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG." },
      { id: "fr", label: "FRONT" },
      { id: "ld", label: "lady" },
    ],
    subCourses: [
      { name: "OUT", holes: KODAMA_GC_OUT },
      { name: "IN",  holes: KODAMA_GC_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "o" ? "O" : "N";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 鳩山カントリークラブ（18H / A・B 2グリーン ベント/バミューダ） ───
  {
    id: "hatoyama_cc", reading: "ハトヤマカントリークラブ",
    name: "鳩山カントリークラブ",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（バミューダ）" },
    ],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "re", label: "Red" },
      { id: "pk", label: "Pink" },
    ],
    subCourses: [
      { name: "OUT", holes: HATOYAMA_CC_OUT },
      { name: "IN",  holes: HATOYAMA_CC_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "b" ? "B" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 清澄ゴルフ倶楽部 ───
  {
    id: "kiyosumi_gc", reading: "キヨスミゴルフクラブ",
    name: "清澄ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BLACK" },
      { id: "bl", label: "BLUE" },
      { id: "wh", label: "WHITE" },
      { id: "gr", label: "GREEN" },
      { id: "go", label: "GOLD" },
    ],
    subCourses: [
      { name: "OUT", holes: KIYOSUMI_GC_OUT },
      { name: "IN",  holes: KIYOSUMI_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 石坂ゴルフ倶楽部 ───
  {
    id: "ishizaka_gc", reading: "イシザカゴルフクラブ",
    name: "石坂ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: ISHIZAKA_GC_OUT },
      { name: "IN",  holes: ISHIZAKA_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 我孫子ゴルフ倶楽部 ───
  {
    id: "abiko_gc", reading: "アビコゴルフクラブ",
    name: "我孫子ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: ABIKO_GC_OUT },
      { name: "IN",  holes: ABIKO_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 日光カンツリー倶楽部 ───
  {
    id: "nikko_cc", reading: "ニッコウカントリークラブ",
    name: "日光カンツリー倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "BACK" },
      { id: "rg", label: "REG" },
    ],
    subCourses: [
      { name: "OUT", holes: NIKKO_CC_OUT },
      { name: "IN",  holes: NIKKO_CC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 千葉カントリークラブ 野田コース ───
  {
    id: "chiba_cc_noda", reading: "チバカントリークラブノダコース",
    name: "千葉カントリークラブ 野田コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: CHIBA_CC_NODA_OUT },
      { name: "IN",  holes: CHIBA_CC_NODA_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 千葉カントリークラブ 梅郷コース（名コース100選29位） ───
  {
    id: "chiba_cc_umesato", reading: "チバカントリークラブウメサトコース",
    name: "千葉カントリークラブ 梅郷コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "OUT", holes: CHIBA_CC_UMESATO_OUT },
      { name: "IN",  holes: CHIBA_CC_UMESATO_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 千葉カントリークラブ 川間コース（27H / 東・南・西） ───
  {
    id: "chiba_cc_kawama", reading: "チバカントリークラブカワマコース",
    name: "千葉カントリークラブ 川間コース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
      { id: "ld", label: "Ladies" },
    ],
    subCourses: [
      { name: "東", holes: CHIBA_CC_KAWAMA_EAST },
      { name: "南", holes: CHIBA_CC_KAWAMA_SOUTH },
      { name: "西", holes: CHIBA_CC_KAWAMA_WEST },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 成田ゴルフ倶楽部（名コース100選52位） ───
  {
    id: "narita_gc", reading: "ナリタゴルフクラブ",
    name: "成田ゴルフ倶楽部",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "gr", label: "Green" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: NARITA_GC_OUT },
      { name: "IN",  holes: NARITA_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 紫カントリークラブ すみれコース（名コース100選57位） ───
  {
    id: "yukari_cc_sumire", reading: "ムラサキカントリークラブスミレコース",
    name: "紫カントリークラブ すみれコース",
    greens: [
      { id: "a", label: "Aグリーン（ベント）" },
      { id: "b", label: "Bグリーン（ベント）" },
    ],
    tees: [
      { id: "to", label: "Tournament" },
      { id: "ch", label: "Champion" },
      { id: "bk", label: "Back" },
      { id: "rg", label: "Regular" },
      { id: "fr", label: "Front" },
    ],
    subCourses: [
      { name: "OUT", holes: YUKARI_CC_OUT },
      { name: "IN",  holes: YUKARI_CC_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "b" ? "B" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 紫カントリークラブ あやめコース EAST ───
  {
    id: "yukari_cc_ayame_east", reading: "ムラサキカントリークラブアヤメコースイースト",
    name: "紫カントリークラブ あやめコース EAST",
    greens: [
      { id: "a", label: "あやめグリーン（ベント）" },
      { id: "m", label: "むらさきグリーン（ベント）" },
    ],
    tees: [
      { id: "b", label: "Back" },
      { id: "r", label: "Regular" },
      { id: "f", label: "Front" },
      { id: "m", label: "Murasaki" },
    ],
    subCourses: [
      { name: "OUT", holes: YUKARI_AYAME_EAST_OUT },
      { name: "IN",  holes: YUKARI_AYAME_EAST_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "m" ? "M" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 紫カントリークラブ あやめコース WEST ───
  {
    id: "yukari_cc_ayame_west", reading: "ムラサキカントリークラブアヤメコースウエスト",
    name: "紫カントリークラブ あやめコース WEST",
    greens: [
      { id: "a", label: "あやめグリーン（ベント）" },
      { id: "m", label: "むらさきグリーン（ベント）" },
    ],
    tees: [
      { id: "b", label: "Back" },
      { id: "r", label: "Regular" },
      { id: "f", label: "Front" },
    ],
    subCourses: [
      { name: "OUT", holes: YUKARI_AYAME_WEST_OUT },
      { name: "IN",  holes: YUKARI_AYAME_WEST_IN },
    ],
    getYardage: (hole, green, tee) => {
      const g = green === "m" ? "M" : "A";
      return hole[tee + g] ?? null;
    },
  },
  // ─── 宍戸ヒルズカントリークラブ WESTコース（名コース100選64位） ───
  {
    id: "shishido_hills_west", reading: "シシドヒルズカントリークラブウエスト",
    name: "宍戸ヒルズカントリークラブ WESTコース",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "FRONT9",  holes: SHISHIDO_HILLS_WEST.slice(0,9) },
      { name: "BACK9",   holes: SHISHIDO_HILLS_WEST.slice(9,18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── 宍戸ヒルズカントリークラブ EASTコース ───
  {
    id: "shishido_hills_east", reading: "シシドヒルズカントリークラブイースト",
    name: "宍戸ヒルズカントリークラブ EASTコース",
    greens: [{ id: "new", label: "Newグリーン（ベント）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "FRONT9",  holes: SHISHIDO_HILLS_EAST.slice(0,9) },
      { name: "BACK9",   holes: SHISHIDO_HILLS_EAST.slice(9,18) },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── PGM石岡ゴルフクラブ（名コース100選77位） ───
  {
    id: "pgm_ishioka_gc", reading: "ピージーエムイシオカゴルフクラブ",
    name: "PGM石岡ゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "bk", label: "Black" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "go", label: "Gold" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: PGM_ISHIOKA_OUT },
      { name: "IN",  holes: PGM_ISHIOKA_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
  // ─── イーグルポイントゴルフクラブ（名コース100選79位） ───
  {
    id: "eagle_point_gc", reading: "イーグルポイントゴルフクラブ",
    name: "イーグルポイントゴルフクラブ",
    greens: [{ id: "bent", label: "ベント（1グリーン）" }],
    tees: [
      { id: "go", label: "Gold" },
      { id: "bl", label: "Blue" },
      { id: "wh", label: "White" },
      { id: "si", label: "Silver" },
      { id: "re", label: "Red" },
    ],
    subCourses: [
      { name: "OUT", holes: EAGLE_POINT_GC_OUT },
      { name: "IN",  holes: EAGLE_POINT_GC_IN },
    ],
    getYardage: (hole, green, tee) => hole[tee] ?? null,
  },
];
