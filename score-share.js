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

  /* ブランディング用レキシー画像（黒背景透過・トリミング・96px最適化済み, base64埋め込み） */
  const REXY_BADGE = "data:image/png;base64,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";

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

  /* コース名から末尾の括弧（サブコース表記 例:（カメリア→シバザクラ））を除去 */
  function cleanCourse(name) {
    return String(name || "").replace(/[（(][^（）()]*[）)]\s*$/, "").trim();
  }
  /* Rexyマスコット画像src（rexy.js の window.REXY_IMAGES）。未ロード時は空文字 */
  function rexyImgSrc() {
    const R = (typeof window !== "undefined" && window.REXY_IMAGES) || {};
    return R.basic || R.basic7 || R.basic8 || R.basic1 || "";
  }

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
      "justify-content:flex-end;align-items:flex-start;padding:10px 12px 11px;color:#fff",
      "font-family:'M PLUS Rounded 1c',sans-serif;pointer-events:none",
    ].join(";");

    /* 日付・天気 */
    const dateEl = document.createElement("div");
    dateEl.style.cssText = `font-size:11px;font-weight:700;opacity:0.80;letter-spacing:0.06em;margin-bottom:2px;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    el.appendChild(dateEl);

    /* コース名 */
    const courseEl = document.createElement("div");
    courseEl.style.cssText = `font-size:11px;font-weight:800;margin-bottom:8px;text-align:left;text-shadow:${TS}`;
    courseEl.textContent = cleanCourse(r.course);
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
    courseEl.style.cssText = `font-size:9px;font-weight:800;opacity:0.82;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:6px;text-shadow:${TSS}`;
    courseEl.textContent = cleanCourse(r.course);
    const dateEl = document.createElement("span");
    dateEl.style.cssText = `font-size:9px;font-weight:700;opacity:0.70;flex-shrink:0;white-space:nowrap;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    metaRow.appendChild(courseEl); metaRow.appendChild(dateEl);
    band.appendChild(metaRow);

    /* 記号行ビルダー */
    function buildSymRow(label, symbols, subtotal) {
      const row = document.createElement("div");
      row.style.cssText = "display:flex;align-items:center;gap:1px;margin-bottom:2px";

      const lbl = document.createElement("div");
      lbl.style.cssText = `font-size:8px;font-weight:900;width:14px;flex-shrink:0;opacity:0.75;text-shadow:${TSS}`;
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
        sub.style.cssText = `font-size:12px;font-weight:900;width:16px;text-align:right;flex-shrink:0;text-shadow:${TSS}`;
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
      "justify-content:flex-end;align-items:flex-start;padding:14px 14px 13px;color:#fff",
      "font-family:'M PLUS Rounded 1c',sans-serif;pointer-events:none",
    ].join(";");

    const dateEl = document.createElement("div");
    dateEl.style.cssText = `font-size:9px;font-weight:700;opacity:0.75;letter-spacing:0.06em;margin-bottom:3px;text-shadow:${TSS}`;
    dateEl.textContent = `${date} ${weather}`;
    el.appendChild(dateEl);

    const courseEl = document.createElement("div");
    courseEl.style.cssText = `font-size:11px;font-weight:800;line-height:1.3;text-align:left;text-shadow:${TS}`;
    courseEl.textContent = cleanCourse(r.course);
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
    const rexy = document.createElement("img");
    rexy.src = REXY_BADGE;
    rexy.style.cssText = "height:26px;width:auto;display:block;filter:drop-shadow(0 1px 4px rgba(0,0,0,0.85))";
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
  /* PNG Blob を保存。iOS等はWeb共有(共有シート→「画像を保存」でカメラロール)、非対応はダウンロード */
  function downloadBlob(blob, fileName) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = fileName;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function saveOrShareBlob(blob, fileName, onDone, onError) {
    try {
      const file = new File([blob], fileName, { type: "image/png" });
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({ files: [file] })
          .then(() => onDone())
          .catch((err) => {
            // 共有シートをキャンセル → 正常終了扱い（保存画面に留まらない）
            if (err && (err.name === "AbortError" || /abort|cancel/i.test(err.message || ""))) { onDone(); return; }
            try { downloadBlob(blob, fileName); onDone(); }
            catch (e2) { onError && onError("保存に失敗しました: " + (e2.message || e2)); }
          });
        return;
      }
    } catch (e) { /* File/Web共有未対応 → ダウンロードへ */ }
    try { downloadBlob(blob, fileName); onDone(); }
    catch (e3) { onError && onError("保存に失敗しました: " + (e3.message || e3)); }
  }

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

      /* 背景画像：html2canvasはobject-fitを正しく描画しない→background-size:coverで縦横比保持 */
      const bg = document.createElement("div");
      bg.style.cssText = "position:absolute;inset:0;background-position:center;background-repeat:no-repeat;background-size:cover;background-image:url('" + photoSrc + "')";
      wrap.appendChild(bg);

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
            const fileName = `scorexo_${(r.date || "").replace(/\//g, "")}.png`;
            saveOrShareBlob(blob, fileName, onDone, onError);
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
  /* ============================================================
   * PreviewStage: 生成画像(800x600)を実寸で組み、コンテナ幅に合わせ縮小表示。
   * → プレビューと生成画像のレイアウト(文字/余白/位置)を完全一致させる。
   * ============================================================ */
  function PreviewStage({ children }) {
    const { useRef, useState, useLayoutEffect } = React;
    const ref = useRef(null);
    const [scale, setScale] = useState(0.42);
    useLayoutEffect(() => {
      const measure = () => { if (ref.current) setScale(ref.current.clientWidth / 800); };
      measure();
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }, []);
    return React.createElement("div", {
      ref: ref,
      style: { position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", background: "#111", boxShadow: "0 4px 20px rgba(0,0,0,0.18)", margin: "10px 0 14px", fontFamily: "'M PLUS Rounded 1c', sans-serif" },
    },
      React.createElement("div", {
        style: { position: "absolute", top: 0, left: 0, width: 800, height: 600, transformOrigin: "top left", transform: `scale(${scale})` },
      }, children)
    );
  }

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
        React.createElement("div", { style: { position: "relative", padding: "8px 16px 12px", borderBottom: "1px solid #f1f5f9" } },
          React.createElement("div", { style: { fontSize: 15, fontWeight: 800, textAlign: "center" } }, "フォトカードを作成"),
          React.createElement("button", { onClick: onClose, "aria-label": "閉じる", style: { position: "absolute", top: "50%", right: 12, transform: "translateY(-50%)", width: 30, height: 30, borderRadius: 15, border: "none", background: "#f1f5f9", color: "#64748b", fontSize: 20, fontWeight: 800, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'M PLUS Rounded 1c',sans-serif" } }, "×"),
        ),

        React.createElement("div", { style: { padding: "12px 16px 24px" } },

          /* 背景写真 */
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", textAlign: "left", marginBottom: 7 } }, "背景写真"),
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
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: photoSrc ? "#0284c7" : "#64748b" } }, "カメラロールから"),
              React.createElement("input", { ref: fileRef, type: "file", accept: "image/*", style: { display: "none" }, onChange: handleFile }),
            ),
            /* 撮影する */
            React.createElement("div", {
              style: { border: "2px solid #e2e8f0", borderRadius: 12, padding: "10px 8px", textAlign: "center", cursor: "pointer" },
              onClick: () => cameraRef.current?.click(),
            },
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b" } }, "撮影する"),
              React.createElement("input", { ref: cameraRef, type: "file", accept: "image/*", capture: "environment", style: { display: "none" }, onChange: handleFile }),
            ),
          ),

          /* スタイルタブ */
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", textAlign: "left", margin: "12px 0 7px" } }, "表示スタイル"),
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
          React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#64748b", textAlign: "left", margin: "12px 0 7px" } }, "プレビュー"),
          React.createElement(PreviewStage, null,
            /* 背景 */
            photoSrc
              ? React.createElement("img", { src: photoSrc, style: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } })
              : React.createElement("div", {
                  style: { position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a3a2a,#0f2d1a,#152310)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, color: "rgba(255,255,255,0.22)", fontSize: 24, fontWeight: 700 }
                },
                  React.createElement("span", { style: { fontSize: 72 } }, "🖼️"),
                  "写真を選ぶとここに表示"
                ),

            /* スタイル A */
            style === "A" && React.createElement("div", { style: { ...overlayBase, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", padding: "10px 12px 11px" } },
              React.createElement("div", { style: { fontSize: 11, fontWeight: 700, opacity: 0.80, letterSpacing: "0.06em", marginBottom: 2, textShadow: TSS } }, `${date} ${weather}`),
              React.createElement("div", { style: { fontSize: 11, fontWeight: 800, marginBottom: 8, textAlign: "left", textShadow: TS } }, cleanCourse(r.course)),
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
                  React.createElement("span", { style: { fontSize: 9, fontWeight: 800, opacity: 0.82, flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginRight: 6, textShadow: TSS } }, cleanCourse(r.course)),
                  React.createElement("span", { style: { fontSize: 9, fontWeight: 700, opacity: 0.70, flexShrink: 0, whiteSpace: "nowrap", textShadow: TSS } }, `${date} ${weather}`),
                ),
                /* 記号行 */
                ...[
                  frontSymbols.length ? [frontLabel, frontSymbols, frontScore] : null,
                  backSymbols.length  ? [backLabel,  backSymbols,  backScore]  : null,
                ].filter(Boolean).map(([lbl, syms, sub]) =>
                  React.createElement("div", { key: lbl, style: { display: "flex", alignItems: "center", gap: 1, marginBottom: 2 } },
                    React.createElement("div", { style: { fontSize: 8, fontWeight: 900, width: 14, flexShrink: 0, opacity: 0.75, textShadow: TSS } }, lbl.slice(0, 2)),
                    ...syms.map((s, i) =>
                      React.createElement("div", {
                        key: i,
                        style: { flex: 1, textAlign: "center", fontSize: 13, fontWeight: 900, lineHeight: 1.1, color: s.color, filter: "drop-shadow(0 1px 4px rgba(0,0,0,1))" }
                      }, s.sym)
                    ),
                    React.createElement("div", { style: { fontSize: 12, fontWeight: 900, width: 16, textAlign: "right", flexShrink: 0, textShadow: TSS } }, sub),
                  )
                )
              )
            ),

            /* スタイル C */
            style === "C" && React.createElement("div", { style: { ...overlayBase, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", padding: "14px 14px 13px" } },
              React.createElement("div", { style: { fontSize: 9, fontWeight: 700, opacity: 0.75, letterSpacing: "0.06em", marginBottom: 3, textShadow: TSS } }, `${date} ${weather}`),
              React.createElement("div", { style: { fontSize: 11, fontWeight: 800, lineHeight: 1.3, textAlign: "left", textShadow: TS } }, cleanCourse(r.course)),
            ),

            /* ブランディング（全スタイル共通） */
            React.createElement("div", { style: { position: "absolute", top: 10, right: 12, display: "flex", alignItems: "center", gap: 4, pointerEvents: "none" } },
              React.createElement("img", { src: REXY_BADGE, style: { height: 26, width: "auto", display: "block", filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.85))" } }),
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
          }, saving ? "生成中…" : "画像を保存"),
          React.createElement("div", { style: { fontSize: 10, color: "#94a3b8", textAlign: "center", marginTop: 7 } },
            "iPhoneは共有シートの「画像を保存」でカメラロールへ。PCはダウンロードされます"
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
