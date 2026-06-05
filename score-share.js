/**
 * score-share.js
 * ScoRExolution フォトカード作成・保存機能
 * 依存: React (CDN), M PLUS Rounded 1c (Google Fonts), html2canvas (CDN)
 * 既存 app.js への変更: RoundCard に ScoreShareButton を1個追加するだけ
 */

(function () {
  "use strict";

  /* ============================================================
   * 定数
   * ============================================================ */
  const FONT_URL =
    "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800;900&display=swap";
  const H2C_URL =
    "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

  const WEATHER_EMOJI = { sunny: "☀️", cloudy: "☁️", rainy: "🌧️", snowy: "❄️" };

  /* スコア差記号（app.js と同定義） */
  function scoreSym(diff) {
    if (diff <= -3) return { sym: "☆", color: "#f87171" };
    if (diff === -2) return { sym: "◎", color: "#f87171" };
    if (diff === -1) return { sym: "○", color: "#f87171" };
    if (diff ===  0) return { sym: "－", color: "#4ade80" };
    if (diff ===  1) return { sym: "△", color: "#93c5fd" };
    if (diff ===  2) return { sym: "□", color: "#60a5fa" };
    if (diff ===  3) return { sym: "■", color: "#818cf8" };
    return { sym: `+${diff}`, color: "#c4b5fd" };
  }

  /* 日付文字列 "2026/06/04" → "2026.6.4" (先頭0除去) */
  function fmtDate(d) {
    if (!d) return "";
    return d.replace(/\//g, ".").replace(/\.0(\d)/g, ".$1");
  }

  /* テキストシャドウ共通 */
  const TS  = "0 1px 8px rgba(0,0,0,1), 0 0 16px rgba(0,0,0,0.7)";
  const TSS = "0 1px 5px rgba(0,0,0,1)";

  /* ============================================================
   * html2canvas ロード（初回のみ）
   * ============================================================ */
  let h2cReady = false;
  function loadH2C(cb) {
    if (h2cReady) { cb(); return; }
    if (window.html2canvas) { h2cReady = true; cb(); return; }
    const s = document.createElement("script");
    s.src = H2C_URL;
    s.onload = () => { h2cReady = true; cb(); };
    s.onerror = () => cb(new Error("html2canvas load failed"));
    document.head.appendChild(s);
  }

  /* ============================================================
   * Google Fonts インジェクト（初回のみ）
   * ============================================================ */
  (function injectFont() {
    if (document.querySelector("[data-score-share-font]")) return;
    const l = document.createElement("link");
    l.rel = "stylesheet"; l.href = FONT_URL;
    l.setAttribute("data-score-share-font", "1");
    document.head.appendChild(l);
  })();

  /* ============================================================
   * ラウンドデータからホール別情報を組み立て
   * ============================================================ */
  function buildHoleSymbols(r) {
    const shd   = r.simpleHoleData || {};
    const pars  = r.holePars || Array(18).fill(4);
    const front = Array.from({ length: 9 }, (_, i) => i + 1).filter(h => shd[h]);
    const back  = Array.from({ length: 9 }, (_, i) => i + 10).filter(h => shd[h]);

    const toSymbols = (holes) =>
      holes.map(h => {
        const score = shd[h]?.score ?? null;
        const par   = pars[h - 1] || 4;
        if (score == null) return { sym: "　", color: "rgba(255,255,255,0.2)" };
        return scoreSym(score - par);
      });

    const sumScore = (holes) => holes.reduce((a, h) => a + (shd[h]?.score || 0), 0);

    return {
      frontLabel:   r.frontCourse || "前半",
      backLabel:    r.backCourse  || "後半",
      frontSymbols: toSymbols(front),
      backSymbols:  toSymbols(back),
      frontScore:   front.length ? sumScore(front) : null,
      backScore:    back.length  ? sumScore(back)  : null,
    };
  }

  /* ============================================================
   * スタイルA オーバーレイ DOM
   * ============================================================ */
  function buildOverlayA(r, totalScore) {
    const { frontLabel, backLabel, frontScore, backScore } = buildHoleSymbols(r);
    const weather = WEATHER_EMOJI[r.weather] || "";
    const date    = fmtDate(r.date);

    const el = document.createElement("div");
    el.style.cssText = [
      "position:absolute;inset:0;display:flex;flex-direction:column",
      "justify-content:flex-end;padding:10px 12px 11px;color:#fff",
      "font-family:'M PLUS Rounded 1c',sans-serif;pointer-events:none",
    ].join(";");

    /* 日付・天気 */
    const dateEl = document.createElement("div");
    dateEl.style.cssText = `font-size:11px;font-weight:700;opacity:0.80;letter-spacing:0.06em;margin-bottom:2px;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    el.appendChild(dateEl);

    /* コース名 */
    const courseEl = document.createElement("div");
    courseEl.style.cssText = `font-size:11px;font-weight:800;margin-bottom:8px;text-shadow:${TS}`;
    courseEl.textContent = r.course || "";
    el.appendChild(courseEl);

    /* スコア行 */
    const scoreRow = document.createElement("div");
    scoreRow.style.cssText = "display:flex;align-items:flex-end;gap:10px";

    /* トータル */
    const totalEl = document.createElement("div");
    totalEl.style.cssText = `font-size:36px;font-weight:900;line-height:1;text-shadow:${TS}`;
    totalEl.textContent = totalScore;
    scoreRow.appendChild(totalEl);

    /* 前後半 */
    const splitEl = document.createElement("div");
    splitEl.style.cssText = "display:flex;flex-direction:column;gap:2px;padding-bottom:3px";
    [[frontLabel, frontScore], [backLabel, backScore]].forEach(([label, score]) => {
      if (score == null) return;
      const row = document.createElement("div");
      row.style.cssText = "display:flex;gap:4px;align-items:baseline";
      const lbl = document.createElement("span");
      lbl.style.cssText = `font-size:8px;font-weight:800;opacity:0.75;width:44px;text-shadow:${TSS}`;
      lbl.textContent = label;
      const val = document.createElement("span");
      val.style.cssText = `font-size:15px;font-weight:900;line-height:1;text-shadow:${TS}`;
      val.textContent = score;
      row.appendChild(lbl); row.appendChild(val);
      splitEl.appendChild(row);
    });
    scoreRow.appendChild(splitEl);
    el.appendChild(scoreRow);
    return el;
  }

  /* ============================================================
   * スタイルB オーバーレイ DOM
   * ============================================================ */
  function buildOverlayB(r, totalScore) {
    const { frontLabel, backLabel, frontSymbols, backSymbols, frontScore, backScore } = buildHoleSymbols(r);
    const weather = WEATHER_EMOJI[r.weather] || "";
    const date    = fmtDate(r.date);

    const outer = document.createElement("div");
    outer.style.cssText = [
      "position:absolute;inset:0;display:flex;flex-direction:column",
      "justify-content:flex-end;pointer-events:none",
      "font-family:'M PLUS Rounded 1c',sans-serif;color:#fff",
    ].join(";");

    const band = document.createElement("div");
    band.style.cssText = "padding:5px 10px 7px";

    /* トータル行 */
    const totalRow = document.createElement("div");
    totalRow.style.cssText = "display:flex;justify-content:flex-end;align-items:baseline;gap:5px;margin-bottom:1px";
    const totalLbl = document.createElement("span");
    totalLbl.style.cssText = `font-size:9px;font-weight:800;opacity:0.70;text-shadow:${TSS}`;
    totalLbl.textContent = "TOTAL";
    const totalVal = document.createElement("span");
    totalVal.style.cssText = `font-size:36px;font-weight:900;line-height:1;text-shadow:${TS}`;
    totalVal.textContent = totalScore;
    totalRow.appendChild(totalLbl); totalRow.appendChild(totalVal);
    band.appendChild(totalRow);

    /* コース名・日付・天気行 */
    const metaRow = document.createElement("div");
    metaRow.style.cssText = "display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px";
    const courseEl = document.createElement("span");
    courseEl.style.cssText = `font-size:9px;font-weight:800;opacity:0.82;text-shadow:${TSS}`;
    courseEl.textContent = r.course || "";
    const dateEl = document.createElement("span");
    dateEl.style.cssText = `font-size:9px;font-weight:700;opacity:0.70;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    metaRow.appendChild(courseEl); metaRow.appendChild(dateEl);
    band.appendChild(metaRow);

    /* 記号行ビルダー */
    function buildSymRow(label, symbols, subtotal) {
      const row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:center;gap:1px;margin-bottom:2px";

      const lbl = document.createElement("div");
      lbl.style.cssText = `font-size:8px;font-weight:900;width:20px;flex-shrink:0;opacity:0.75;text-shadow:${TSS}`;
      lbl.textContent = label;
      row.appendChild(lbl);

      symbols.forEach(({ sym, color }) => {
        const cell = document.createElement("div");
        cell.style.cssText = [
          "flex:1;text-align:center;font-size:13px;font-weight:900;line-height:1.1",
          `color:${color}`,
          "filter:drop-shadow(0 1px 4px rgba(0,0,0,1))",
        ].join(";");
        cell.textContent = sym;
        row.appendChild(cell);
      });

      if (subtotal != null) {
        const sub = document.createElement("div");
        sub.style.cssText = `font-size:12px;font-weight:900;width:22px;text-align:right;flex-shrink:0;text-shadow:${TSS}`;
        sub.textContent = subtotal;
        row.appendChild(sub);
      }
      return row;
    }

    if (frontSymbols.length) band.appendChild(buildSymRow(frontLabel.slice(0, 2), frontSymbols, frontScore));
    if (backSymbols.length)  band.appendChild(buildSymRow(backLabel.slice(0, 2),  backSymbols,  backScore));

    outer.appendChild(band);
    return outer;
  }

  /* ============================================================
   * スタイルC オーバーレイ DOM
   * ============================================================ */
  function buildOverlayC(r) {
    const weather = WEATHER_EMOJI[r.weather] || "";
    const date    = fmtDate(r.date);

    const el = document.createElement("div");
    el.style.cssText = [
      "position:absolute;inset:0;display:flex;flex-direction:column",
      "justify-content:flex-end;padding:14px 14px 13px;color:#fff",
      "font-family:'M PLUS Rounded 1c',sans-serif;pointer-events:none",
    ].join(";");

    const dateEl = document.createElement("div");
    dateEl.style.cssText = `font-size:9px;font-weight:700;opacity:0.75;letter-spacing:0.06em;margin-bottom:3px;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    el.appendChild(dateEl);

    const courseEl = document.createElement("div");
    courseEl.style.cssText = `font-size:16px;font-weight:900;line-height:1.4;text-shadow:${TS}`;
    courseEl.textContent = r.course || "";
    el.appendChild(courseEl);

    return el;
  }

  /* ============================================================
   * ブランディングオーバーレイ
   * ============================================================ */
  function buildBranding() {
    const el = document.createElement("div");
    el.style.cssText = [
      "position:absolute;top:10px;right:12px",
      "display:flex;align-items:center;gap:4px;pointer-events:none",
    ].join(";");
    const rexy = document.createElement("span");
    rexy.style.cssText = "font-size:15px;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.8))";
    rexy.textContent = "🦖";
    const text = document.createElement("span");
    text.style.cssText = [
      "font-family:'M PLUS Rounded 1c',sans-serif",
      "font-size:12px;font-weight:900",
      "color:rgba(255,255,255,0.80)",
      "text-shadow:0 1px 6px rgba(0,0,0,0.9)",
    ].join(";");
    text.textContent = "スコレボ";
    el.appendChild(rexy); el.appendChild(text);
    return el;
  }

  /* ============================================================
   * 画像を生成して保存 (html2canvas → <a> download)
   * ============================================================ */
  function generateAndSave(photoSrc, style, r, totalScore, onDone, onError) {
    loadH2C((err) => {
      if (err) { onError("html2canvasの読み込みに失敗しました"); return; }

      /* 一時コンテナ（画面外） */
      const W = 800, H = 600;
      const wrap = document.createElement("div");
      wrap.style.cssText = [
        `width:${W}px;height:${H}px`,
        "position:fixed;left:-9999px;top:-9999px",
        "overflow:hidden;border-radius:0",
      ].join(";");

      /* 背景画像 */
      const img = document.createElement("img");
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;position:absolute;inset:0";
      img.crossOrigin = "anonymous";
      img.src = photoSrc;
      wrap.appendChild(img);

      /* スコアオーバーレイ */
      let overlay;
      if (style === "A") overlay = buildOverlayA(r, totalScore);
      else if (style === "B") overlay = buildOverlayB(r, totalScore);
      else overlay = buildOverlayC(r);
      wrap.appendChild(overlay);

      /* ブランディング */
      wrap.appendChild(buildBranding());

      document.body.appendChild(wrap);

      /* フォント読み込み待ち → html2canvas */
      document.fonts.ready.then(() => {
        html2canvas(wrap, {
          useCORS: true,
          allowTaint: false,
          scale: 2,
          width: W, height: H,
          logging: false,
        }).then((canvas) => {
          document.body.removeChild(wrap);
          /* PNG に変換してダウンロード */
          canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a   = document.createElement("a");
            a.href    = url;
            a.download = `scorexo_${(r.date || "").replace(/\//g, "")}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            onDone();
          }, "image/png");
        }).catch((e) => {
          document.body.removeChild(wrap);
          onError("画像の生成に失敗しました: " + e.message);
        });
      });
    });
  }

  /* ============================================================
   * ScoreShareModal コンポーネント
   * ============================================================ */
  function ScoreShareModal({ r, totalScore, onClose }) {
    const { useState, useRef, useEffect, useCallback } = React;

    const [photoSrc, setPhotoSrc]   = useState(null);
    const [style, setStyle]         = useState("A");
    const [saving, setSaving]       = useState(false);
    const [errMsg, setErrMsg]       = useState("");
    const fileRef                   = useRef(null);
    const cameraRef                 = useRef(null);

    /* スクロールロック */
    useEffect(() => {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }, []);

    /* ファイル選択ハンドラ */
    const handleFile = useCallback((e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => setPhotoSrc(ev.target.result);
      reader.readAsDataURL(file);
    }, []);

    /* 保存 */
    const handleSave = useCallback(() => {
      if (!photoSrc) { setErrMsg("背景写真を選んでください"); return; }
      setErrMsg(""); setSaving(true);
      generateAndSave(
        photoSrc, style, r, totalScore,
        () => setSaving(false),
        (msg) => { setSaving(false); setErrMsg(msg); }
      );
    }, [photoSrc, style, r, totalScore]);

    /* プレビュー用インライン CSS */
    const previewStyle = {
      position: "relative", aspectRatio: "4/3", borderRadius: "12px",
      overflow: "hidden", background: "#111",
      boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
      margin: "10px 0 14px",
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    };

    const overlayBase = {
      position: "absolute", inset: 0,
      color: "#fff",
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    };

    /* スコア記号データ */
    const { frontLabel, backLabel, frontSymbols, backSymbols, frontScore, backScore } = buildHoleSymbols(r);
    const weather = WEATHER_EMOJI[r.weather] || "";
    const date    = fmtDate(r.date);

    /* ---- render ---- */
    return React.createElement("div", {
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", display: "flex", alignItems: "flex-end", zIndex: 9999 },
      onClick: (e) => { if (e.target === e.currentTarget) onClose(); },
    },
      React.createElement("div", {
        style: {
          background: "#fff", borderRadius: "22px 22px 0 0",
          width: "100%", maxWidth: "480px", margin: "0 auto",
          maxHeight: "92vh", overflowY: "auto",
          fontFamily: "'M PLUS Rounded 1c', sans-serif",
        },
        onClick: (e) => e.stopPropagation(),
      },
        /* ハンドル */
        React.createElement("div", { style: { width: 36, height: 4, background: "#e2e8f0", borderRadius: 2, margin: "12px auto 4px" } }),
        /* タイトル */
        React.createElement("div", { style: { fontSize: 15, fontWeight: 800, textAlign: "center", padding: "8px 16px 12px", borderBottom: "1px solid #f1f5f9" } },
          "📸 フォトカードを作成"
        ),

        React.createElement("div", { style: { padding: "12px 16px 24px" } },

          /* 背景写真 */
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 7 } }, "背景写真"),
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 } },
            /* カメラロール */
            React.createElement("div", {
              style: {
                border: `2px solid ${photoSrc ? "#0ea5e9" : "#e2e8f0"}`,
                borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: "pointer",
                background: photoSrc ? "rgba(14,165,233,0.06)" : "transparent",
              },
              onClick: () => fileRef.current?.click(),
            },
              React.createElement("div", { style: { fontSize: 20, marginBottom: 3 } }, "🖼️"),
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: photoSrc ? "#0284c7" : "#64748b" } }, "カメラロールから"),
              React.createElement("input", { ref: fileRef, type: "file", accept: "image/*", style: { display: "none" }, onChange: handleFile }),
            ),
            /* 撮影する */
            React.createElement("div", {
              style: { border: "2px solid #e2e8f0", borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: "pointer" },
              onClick: () => cameraRef.current?.click(),
            },
              React.createElement("div", { style: { fontSize: 20, marginBottom: 3 } }, "📷"),
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b" } }, "撮影する"),
              React.createElement("input", { ref: cameraRef, type: "file", accept: "image/*", capture: "environment", style: { display: "none" }, onChange: handleFile }),
            ),
          ),

          /* スタイルタブ */
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", margin: "12px 0 7px" } }, "表示スタイル"),
          React.createElement("div", { style: { display: "flex", background: "#f1f5f9", borderRadius: 10, padding: 3, gap: 2 } },
            ...[["A", "シンプル"], ["B", "ホール別"], ["C", "写真のみ"]].map(([id, sub]) =>
              React.createElement("button", {
                key: id,
                style: {
                  flex: 1, padding: "6px 4px", border: "none", borderRadius: 8,
                  fontFamily: "'M PLUS Rounded 1c', sans-serif",
                  fontSize: 13, fontWeight: 800, cursor: "pointer",
                  background: style === id ? "#fff" : "transparent",
                  color: style === id ? "#1e293b" : "#94a3b8",
                  boxShadow: style === id ? "0 1px 4px rgba(0,0,0,0.10)" : "none",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
                },
                onClick: () => setStyle(id),
              },
                id,
                React.createElement("span", { style: { fontSize: 9, fontWeight: 400, opacity: 0.7 } }, sub),
              )
            ),
          ),

          /* プレビュー */
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", margin: "12px 0 7px" } }, "プレビュー"),
          React.createElement("div", { style: previewStyle },
            /* 背景 */
            photoSrc
              ? React.createElement("img", { src: photoSrc, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } })
              : React.createElement("div", {
                  style: { position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a3a2a,#0f2d1a,#152310)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, color: "rgba(255,255,255,0.22)", fontSize: 12, fontWeight: 700 }
                },
                  React.createElement("span", { style: { fontSize: 26 } }, "🖼️"),
                  "写真を選ぶとここに表示"
                ),

            /* スタイル A */
            style === "A" && React.createElement("div", { style: { ...overlayBase, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "10px 12px 11px" } },
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, opacity: 0.80, letterSpacing: "0.06em", marginBottom: 2, textShadow: TSS } }, `${date} ${weather}`),
              React.createElement("div", { style: { fontSize: 11, fontWeight: 800, marginBottom: 8, textShadow: TS } }, r.course || ""),
              React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 10 } },
                React.createElement("div", { style: { fontSize: 36, fontWeight: 900, lineHeight: 1, textShadow: TS } }, totalScore),
                React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2, paddingBottom: 3 } },
                  ...[
                    frontScore != null ? [frontLabel, frontScore] : null,
                    backScore  != null ? [backLabel,  backScore]  : null,
                  ].filter(Boolean).map(([lbl, val]) =>
                    React.createElement("div", { key: lbl, style: { display: "flex", gap: 4, alignItems: "baseline" } },
                      React.createElement("span", { style: { fontSize: 8, fontWeight: 800, opacity: 0.75, width: 44, textShadow: TSS } }, lbl),
                      React.createElement("span", { style: { fontSize: 15, fontWeight: 900, lineHeight: 1, textShadow: TS } }, val),
                    )
                  )
                )
              )
            ),

            /* スタイル B */
            style === "B" && React.createElement("div", { style: { ...overlayBase, display: "flex", flexDirection: "column", justifyContent: "flex-end" } },
              React.createElement("div", { style: { padding: "5px 10px 7px" } },
                /* トータル */
                React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", alignItems: "baseline", gap: 5, marginBottom: 1 } },
                  React.createElement("span", { style: { fontSize: 9, fontWeight: 800, opacity: 0.70, textShadow: TSS } }, "TOTAL"),
                  React.createElement("span", { style: { fontSize: 36, fontWeight: 900, lineHeight: 1, textShadow: TS } }, totalScore),
                ),
                /* コース + 日付・天気 */
                React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 } },
                  React.createElement("span", { style: { fontSize: 9, fontWeight: 800, opacity: 0.82, textShadow: TSS } }, r.course || ""),
                  React.createElement("span", { style: { fontSize: 9, fontWeight: 700, opacity: 0.70, textShadow: TSS } }, `${date} ${weather}`),
                ),
                /* 記号行 */
                ...[
                  frontSymbols.length ? [frontLabel, frontSymbols, frontScore] : null,
                  backSymbols.length  ? [backLabel,  backSymbols,  backScore]  : null,
                ].filter(Boolean).map(([lbl, syms, sub]) =>
                  React.createElement("div", { key: lbl, style: { display: "flex", alignItems: "center", gap: 1, marginBottom: 2 } },
                    React.createElement("div", { style: { fontSize: 8, fontWeight: 900, width: 20, flexShrink: 0, opacity: 0.75, textShadow: TSS } }, lbl.slice(0, 2)),
                    ...syms.map((s, i) =>
                      React.createElement("div", {
                        key: i,
                        style: { flex: 1, textAlign: "center", fontSize: 13, fontWeight: 900, lineHeight: 1.1, color: s.color, filter: "drop-shadow(0 1px 4px rgba(0,0,0,1))" }
                      }, s.sym)
                    ),
                    React.createElement("div", { style: { fontSize: 12, fontWeight: 900, width: 22, textAlign: "right", flexShrink: 0, textShadow: TSS } }, sub),
                  )
                )
              )
            ),

            /* スタイル C */
            style === "C" && React.createElement("div", { style: { ...overlayBase, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "14px 14px 13px" } },
              React.createElement("div", { style: { fontSize: 9, fontWeight: 700, opacity: 0.75, letterSpacing: "0.06em", marginBottom: 3, textShadow: TSS } }, `${date} ${weather}`),
              React.createElement("div", { style: { fontSize: 16, fontWeight: 900, lineHeight: 1.4, textShadow: TS } }, r.course || ""),
            ),

            /* ブランディング（全スタイル共通） */
            React.createElement("div", { style: { position: "absolute", top: 10, right: 12, display: "flex", alignItems: "center", gap: 4, pointerEvents: "none" } },
              React.createElement("span", { style: { fontSize: 15, filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.8))" } }, "🦖"),
              React.createElement("span", { style: { fontFamily: "'M PLUS Rounded 1c',sans-serif", fontSize: 12, fontWeight: 900, color: "rgba(255,255,255,0.80)", textShadow: "0 1px 6px rgba(0,0,0,0.9)" } }, "スコレボ"),
            ),
          ),

          /* エラーメッセージ */
          errMsg && React.createElement("div", { style: { fontSize: 11, color: "#dc2626", textAlign: "center", marginBottom: 8, fontWeight: 700 } }, errMsg),

          /* 保存ボタン */
          React.createElement("button", {
            onClick: handleSave,
            disabled: saving,
            style: {
              width: "100%", padding: 14,
              background: saving ? "#e2e8f0" : "linear-gradient(135deg,#f59e0b,#ea580c)",
              color: saving ? "#94a3b8" : "#fff",
              fontSize: 15, fontWeight: 800, border: "none", borderRadius: 11,
              cursor: saving ? "not-allowed" : "pointer",
              boxShadow: saving ? "none" : "0 3px 12px rgba(245,158,11,0.32)",
              fontFamily: "'M PLUS Rounded 1c', sans-serif",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            },
          }, saving ? "⏳ 生成中..." : "⬇️ カメラロールに保存"),
          React.createElement("div", { style: { fontSize: 10, color: "#94a3b8", textAlign: "center", marginTop: 7 } },
            "Safari の「共有」→「写真に保存」で保存されます"
          ),
        )
      )
    );
  }

  /* ============================================================
   * ScoreShareButton コンポーネント（RoundCard に差し込む）
   * ============================================================ */
  function ScoreShareButton({ r, totalScore }) {
    const { useState } = React;
    const [open, setOpen] = useState(false);

    return React.createElement(React.Fragment, null,
      React.createElement("button", {
        onClick: (e) => { e.stopPropagation(); setOpen(true); },
        style: {
          padding: "5px 10px",
          background: "rgba(14,165,233,0.08)",
          border: "1px solid rgba(14,165,233,0.28)",
          borderRadius: 8, cursor: "pointer",
          color: "#0284c7", fontSize: 11, fontWeight: 700,
          fontFamily: "'M PLUS Rounded 1c', sans-serif",
          whiteSpace: "nowrap",
        },
      }, "フォト"),
      open && React.createElement(ScoreShareModal, {
        r,
        totalScore,
        onClose: () => setOpen(false),
      }),
    );
  }

  /* グローバルに公開 */
  window.ScoreShareButton = ScoreShareButton;

})();
