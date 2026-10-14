"use strict";

/* ---------- Datos ---------- */
const SECTIONS = {
  algebra: { name: "Álgebra", icon: "🧮" },
  geometria: { name: "Geometría", icon: "📐" },
  ingles: { name: "Inglés", icon: "🇬🇧" },
  historia: { name: "Historia y geografía", icon: "🌎" },
};

const mc = (section, text, options, answer, explain) =>
  ({ type: "mc", section, text, options, answer, explain });

const QUESTIONS = [
  /* Álgebra: reducción de términos semejantes */
  mc("algebra", "Reduce: x + 2x − 3y − 2x",
    ["x − 3y", "x + 3y", "3x − 3y", "−3y"], 0,
    "x + 2x − 2x = x, y el término −3y no tiene semejantes. Resultado: x − 3y."),
  mc("algebra", "Reduce: 4a + 3b + 2a − b",
    ["6a + 2b", "6a + 4b", "8a + 2b", "6ab + 2b"], 0,
    "4a + 2a = 6a y 3b − b = 2b."),
  mc("algebra", "Reduce: 5x − 2x + 4y − y",
    ["3x + 3y", "3x + 5y", "7x + 3y", "6xy"], 0,
    "5x − 2x = 3x y 4y − y = 3y."),
  mc("algebra", "Reduce: 3m + 2n − m + 5n",
    ["2m + 7n", "4m + 7n", "2m + 3n", "9mn"], 0,
    "3m − m = 2m y 2n + 5n = 7n."),
  mc("algebra", "Simplifica: 7x − 3x + 2x",
    ["6x", "8x", "12x", "6x²"], 0,
    "7 − 3 + 2 = 6, y la variable no cambia: 6x."),
  mc("algebra", "Simplifica: 6a + 4b − 2a − 3b",
    ["4a + b", "8a + b", "4a − b", "5ab"], 0,
    "6a − 2a = 4a y 4b − 3b = b."),
  mc("algebra", "Simplifica: 8y − 5y + 3x − x",
    ["2x + 3y", "4x + 3y", "2x + 13y", "5xy"], 0,
    "8y − 5y = 3y y 3x − x = 2x."),
  mc("algebra", "Simplifica: 2p + 4q + 3p − 2q",
    ["5p + 2q", "5p + 6q", "p + 2q", "7pq"], 0,
    "2p + 3p = 5p y 4q − 2q = 2q."),
  {
    type: "terms", section: "algebra", interactive: true,
    text: "Identifica el signo, el coeficiente y la variable de cada término.",
    hint: "Recuerda: el coeficiente es el número que multiplica a la variable (si no se ve, vale 1).",
    rows: [
      { term: "−5x", sign: "−", coef: "5", variable: "x" },
      { term: "+8a", sign: "+", coef: "8", variable: "a" },
      { term: "−3y", sign: "−", coef: "3", variable: "y" },
      { term: "+b", sign: "+", coef: "1", variable: "b" },
    ],
    signOptions: ["+", "−"],
    coefOptions: ["1", "3", "5", "8"],
    varOptions: ["x", "a", "y", "b"],
    explain: "Cuando una variable aparece sola (como +b), su coeficiente es 1.",
  },

  /* Geometría: conceptos básicos */
  mc("geometria", "¿Qué es un punto?",
    ["Una ubicación exacta que no tiene dimensiones",
     "Una línea con dos extremos definidos",
     "Una línea que se extiende infinitamente en ambas direcciones",
     "Una línea con un principio que continúa en una dirección"], 0,
    "El punto marca una ubicación exacta y no tiene longitud, ancho ni alto."),
  mc("geometria", "¿Qué es un segmento?",
    ["Una línea con dos extremos definidos",
     "Una ubicación sin dimensiones",
     "Una línea que no termina en ninguna dirección",
     "Una línea con un solo extremo"], 0,
    "Un segmento es la parte de una recta que está entre dos puntos (sus extremos)."),
  mc("geometria", "¿Qué es una recta?",
    ["Una línea que se extiende infinitamente en ambas direcciones",
     "Una línea con dos extremos definidos",
     "Una línea con un principio y sin final",
     "Un punto muy grande"], 0,
    "La recta no tiene principio ni fin."),
  mc("geometria", "¿Qué es una semirrecta?",
    ["Tiene un principio, pero continúa infinitamente en una dirección",
     "Tiene dos extremos definidos",
     "Se extiende infinitamente en ambas direcciones",
     "Representa una ubicación exacta"], 0,
    "La semirrecta empieza en un punto (origen) y sigue sin fin hacia un lado."),
  {
    type: "match", section: "geometria", interactive: true,
    text: "Relaciona cada concepto con su descripción.",
    hint: "Toca un concepto y después la descripción que le corresponde. Toca de nuevo una pareja para deshacerla.",
    pairs: [
      { concept: "A. Punto", desc: "Representa una ubicación exacta y no tiene dimensiones." },
      { concept: "B. Segmento", desc: "Tiene dos extremos definidos." },
      { concept: "C. Recta", desc: "Se extiende infinitamente en ambas direcciones." },
      { concept: "D. Semirrecta", desc: "Tiene un principio, pero continúa infinitamente en una dirección." },
    ],
    explain: "Punto → ubicación exacta; segmento → dos extremos; recta → infinita en ambos sentidos; semirrecta → un origen y sigue sin fin.",
  },

  /* Inglés: Simple Present */
  mc("ingles", "She ______ English every day. (study)",
    ["studies", "study", "studys", "studying"], 0,
    "Con he/she/it el verbo lleva -s; si termina en consonante + y, cambia a -ies: studies."),
  mc("ingles", "They ______ soccer on Sundays. (play)",
    ["play", "plays", "playes", "playing"], 0,
    "Con they el verbo queda en forma base: play."),
  mc("ingles", "My father ______ coffee in the morning. (drink)",
    ["drinks", "drink", "drinkes", "drinking"], 0,
    "My father = he, así que el verbo lleva -s: drinks."),
  mc("ingles", "We ______ to school by bus. (go)",
    ["go", "goes", "gos", "going"], 0,
    "Con we se usa la forma base: go."),
  mc("ingles", "Cambia a negativo: “I like chocolate.”",
    ["I don't like chocolate.", "I doesn't like chocolate.", "I not like chocolate.", "I don't likes chocolate."], 0,
    "Con I se usa don't + verbo base."),
  mc("ingles", "Cambia a negativo: “He watches TV at night.”",
    ["He doesn't watch TV at night.", "He doesn't watches TV at night.", "He don't watch TV at night.", "He not watch TV at night."], 0,
    "Con he/she/it se usa doesn't + verbo base (sin -s ni -es)."),
  mc("ingles", "Cambia a negativo: “They live in Mexico.”",
    ["They don't live in Mexico.", "They doesn't live in Mexico.", "They not live in Mexico.", "They don't lives in Mexico."], 0,
    "Con they se usa don't + verbo base."),
  {
    type: "order", section: "ingles", interactive: true,
    text: "Ordena las palabras para formar preguntas en inglés.",
    hint: "Toca las palabras para colocarlas en orden. Toca una palabra colocada para quitarla.",
    sentences: [
      { words: ["you", "like", "music", "do", "?"], answer: ["do", "you", "like", "music", "?"] },
      { words: ["she", "play", "does", "tennis", "?"], answer: ["does", "she", "play", "tennis", "?"] },
      { words: ["they", "study", "English", "do", "?"], answer: ["do", "they", "study", "english", "?"] },
    ],
    explain: "Estructura: Do/Does + sujeto + verbo base + complemento + ?",
  },

  /* Historia y geografía de México */
  mc("historia", "¿Qué es Mesoamérica?",
    ["Una región cultural del centro y sur de México y parte de Centroamérica",
     "Una región de Sudamérica donde vivieron los incas",
     "Un estado de México en la costa del Golfo",
     "Un virreinato español del siglo XVIII"], 0,
    "Mesoamérica fue una gran región cultural donde florecieron civilizaciones antes de la llegada de los españoles."),
  mc("historia", "¿Cuál de estas culturas NO se desarrolló en Mesoamérica?",
    ["Inca", "Maya", "Olmeca", "Mexica (azteca)"], 0,
    "Los incas habitaron los Andes, en Sudamérica. Mayas, olmecas, zapotecas y mexicas son mesoamericanos."),
  mc("historia", "¿En qué estado se encuentra la zona arqueológica de Palenque?",
    ["Chiapas", "Yucatán", "Oaxaca", "Veracruz"], 0,
    "Palenque, ciudad maya, está en Chiapas."),
  mc("historia", "¿Cuáles son los tres poderes de gobierno de México?",
    ["Ejecutivo, Legislativo y Judicial", "Federal, Estatal y Municipal", "Presidente, Gobernador y Alcalde", "Civil, Militar y Religioso"], 0,
    "El poder se divide en Ejecutivo (aplica las leyes), Legislativo (las crea) y Judicial (las interpreta)."),
  {
    type: "multi", section: "historia", interactive: true,
    text: "Marca los estados que tienen costa en el océano Pacífico.",
    hint: "Hay 6 correctos entre las opciones. Cada error resta puntos.",
    options: [
      { label: "Jalisco", correct: true }, { label: "Veracruz", correct: false },
      { label: "Guerrero", correct: true }, { label: "Chihuahua", correct: false },
      { label: "Oaxaca", correct: true }, { label: "Yucatán", correct: false },
      { label: "Sinaloa", correct: true }, { label: "Puebla", correct: false },
      { label: "Colima", correct: true }, { label: "Tamaulipas", correct: false },
      { label: "Baja California", correct: true }, { label: "Quintana Roo", correct: false },
    ],
    explain: "Veracruz, Tamaulipas, Yucatán y Quintana Roo dan al Golfo de México o al Caribe; Puebla y Chihuahua no tienen costa.",
  },
];

/* ---------- Utilidades ---------- */
const $ = (id) => document.getElementById(id);
const fmt = (n) => (Math.round(n * 100) / 100).toString().replace(".", ",");

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/* ---------- Estado ---------- */
let current = 0;
let score = 0;
let results = [];
let playerName = "";

/* ---------- Flujo ---------- */
$("startBtn").addEventListener("click", () => {
  playerName = $("name").value.trim();
  current = 0;
  score = 0;
  results = [];
  $("start").classList.add("hidden");
  $("result").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  showQuestion();
});

$("name").addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("startBtn").click();
});

function showQuestion() {
  const q = QUESTIONS[current];
  const sec = SECTIONS[q.section];
  $("sectionTag").textContent = `${sec.icon} ${sec.name}`;
  $("counter").textContent = `Pregunta ${current + 1} de ${QUESTIONS.length}`;
  $("liveScore").textContent = `⭐ ${fmt(score)} pts`;
  $("bar").style.width = `${(current / QUESTIONS.length) * 100}%`;

  const card = $("card");
  card.replaceChildren();
  card.appendChild(el("span", "q-badge", q.interactive ? "🧩 Reto interactivo" : "Opción múltiple"));
  card.appendChild(el("p", "q-text", q.text));
  if (q.hint) card.appendChild(el("p", "q-hint", q.hint));

  const body = el("div");
  const actions = el("div", "actions");
  const feedback = el("div");
  card.append(body, feedback, actions);

  let finished = false;
  const finish = (earned, message) => {
    if (finished) return;
    finished = true;
    score += earned;
    results.push({ q, earned });
    $("liveScore").textContent = `⭐ ${fmt(score)} pts`;

    const kind = earned >= 0.999 ? "ok" : earned > 0 ? "mid" : "bad";
    const icon = kind === "ok" ? "✅ ¡Correcto!" : kind === "mid" ? `🟡 ¡Casi! Ganaste ${fmt(earned)} de 1 punto.` : "❌ Incorrecto.";
    feedback.className = `feedback ${kind}`;
    feedback.replaceChildren(el("strong", "", icon));
    const extra = [message, q.explain].filter(Boolean).join(" ");
    if (extra) feedback.append(" ", extra);

    const last = current === QUESTIONS.length - 1;
    const next = el("button", "btn primary", last ? "Ver resultados 🏆" : "Siguiente ▶");
    next.addEventListener("click", () => {
      current++;
      last ? showResults() : showQuestion();
    });
    actions.replaceChildren(next);
    next.focus();
  };

  const builders = { mc: buildMC, terms: buildTerms, match: buildMatch, order: buildOrder, multi: buildMulti };
  builders[q.type](q, body, actions, finish);
}

/* ---------- Opción múltiple ---------- */
function buildMC(q, body, actions, finish) {
  const order = shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer })));
  const list = el("div", "options");
  const buttons = order.map((opt) => {
    const b = el("button", "option", opt.text);
    b.type = "button";
    list.appendChild(b);
    return b;
  });
  buttons.forEach((b, i) => b.addEventListener("click", () => {
    buttons.forEach((x, j) => {
      x.disabled = true;
      if (order[j].correct) x.classList.add("correct");
    });
    if (!order[i].correct) {
      b.classList.add("wrong", "shake");
    }
    finish(order[i].correct ? 1 : 0);
  }));
  body.appendChild(list);
}

/* Utilidad para el botón "Comprobar" */
function addCheckButton(actions, onCheck) {
  const btn = el("button", "btn primary", "Comprobar ✔");
  btn.type = "button";
  btn.disabled = true;
  btn.addEventListener("click", () => {
    btn.remove();
    onCheck();
  });
  actions.appendChild(btn);
  return btn;
}

/* ---------- Reto 1: componentes de términos ---------- */
function buildTerms(q, body, actions, finish) {
  const table = el("table", "terms");
  const head = el("tr");
  ["Término", "Signo", "Coeficiente", "Variable"].forEach((h) => head.appendChild(el("th", "", h)));
  table.appendChild(head);

  const makeSelect = (options) => {
    const s = el("select");
    s.appendChild(new Option("Elige…", ""));
    options.forEach((o) => s.appendChild(new Option(o, o)));
    return s;
  };

  const rows = q.rows.map((r) => {
    const tr = el("tr");
    const td = el("td");
    td.appendChild(el("span", "math", r.term));
    tr.appendChild(td);
    const selects = [
      makeSelect(q.signOptions), makeSelect(q.coefOptions), makeSelect(q.varOptions),
    ];
    selects.forEach((s) => {
      const cell = el("td");
      cell.appendChild(s);
      tr.appendChild(cell);
    });
    table.appendChild(tr);
    return { r, selects };
  });
  body.appendChild(table);

  const check = addCheckButton(actions, () => {
    let right = 0;
    rows.forEach(({ r, selects }) => {
      const expected = [r.sign, r.coef, r.variable];
      selects.forEach((s, i) => {
        s.disabled = true;
        if (s.value === expected[i]) {
          right++;
          s.classList.add("correct");
        } else {
          s.classList.add("wrong");
          s.parentElement.appendChild(el("span", "hint-ok", `Correcto: ${expected[i]}`));
        }
      });
    });
    const total = rows.length * 3;
    finish(right / total, `Acertaste ${right} de ${total} casillas.`);
  });
  const update = () => {
    check.disabled = !rows.every(({ selects }) => selects.every((s) => s.value));
  };
  rows.forEach(({ selects }) => selects.forEach((s) => s.addEventListener("change", update)));
}

/* ---------- Reto 2: relacionar ---------- */
function buildMatch(q, body, actions, finish) {
  const concepts = q.pairs.map((p) => p.concept);
  const descs = shuffle(q.pairs.map((p, i) => ({ text: p.desc, correctConcept: i })));
  const assignment = new Map(); // índice de concepto -> índice (mostrado) de descripción
  let selected = null;

  const wrap = el("div", "match");
  const left = el("div", "col");
  const right = el("div", "col");
  left.appendChild(el("h3", "", "Conceptos"));
  right.appendChild(el("h3", "", "Descripciones"));
  const cBtns = concepts.map((c) => {
    const b = el("button", "pill", c);
    b.type = "button";
    left.appendChild(b);
    return b;
  });
  const dBtns = descs.map((d) => {
    const b = el("button", "pill", d.text);
    b.type = "button";
    right.appendChild(b);
    return b;
  });
  wrap.append(left, right);
  body.appendChild(wrap);

  const conceptOf = (d) => [...assignment.entries()].find(([, v]) => v === d)?.[0];

  const paint = () => {
    cBtns.forEach((b, i) => {
      b.className = "pill" + (assignment.has(i) ? ` c${i}` : "") + (selected === i ? " selected" : "");
    });
    dBtns.forEach((b, d) => {
      const c = conceptOf(d);
      b.className = "pill" + (c !== undefined ? ` c${c}` : "");
    });
    check.disabled = assignment.size < concepts.length;
  };

  cBtns.forEach((b, i) => b.addEventListener("click", () => {
    if (assignment.has(i) && selected === null) assignment.delete(i);
    else selected = selected === i ? null : i;
    paint();
  }));
  dBtns.forEach((b, d) => b.addEventListener("click", () => {
    const owner = conceptOf(d);
    if (selected === null) {
      if (owner !== undefined) assignment.delete(owner);
    } else {
      if (owner !== undefined) assignment.delete(owner);
      assignment.set(selected, d);
      selected = null;
    }
    paint();
  }));

  const check = addCheckButton(actions, () => {
    let right = 0;
    [...cBtns, ...dBtns].forEach((b) => (b.disabled = true));
    assignment.forEach((d, c) => {
      const ok = descs[d].correctConcept === c;
      if (ok) right++;
      cBtns[c].classList.add(ok ? "right" : "nope");
      dBtns[d].classList.add(ok ? "right" : "nope");
    });
    finish(right / concepts.length, `Relacionaste bien ${right} de ${concepts.length}.`);
  });
  paint();
}

/* ---------- Reto 3: ordenar palabras ---------- */
function buildOrder(q, body, actions, finish) {
  const states = q.sentences.map((s, n) => {
    const wrap = el("div", "sentence");
    wrap.appendChild(el("div", "label", `${String.fromCharCode(97 + n)})`));
    const slot = el("div", "slot");
    const bank = el("div", "bank");
    wrap.append(slot, bank);
    body.appendChild(wrap);
    const words = shuffle(s.words.map((w, id) => ({ w, id })));
    return { s, slot, bank, bankWords: words, placed: [], wrap };
  });

  const render = (st) => {
    st.slot.replaceChildren();
    if (!st.placed.length) st.slot.appendChild(el("span", "placeholder", "Toca las palabras en orden…"));
    st.placed.forEach((item) => {
      const b = el("button", "word", item.w);
      b.type = "button";
      b.addEventListener("click", () => {
        st.placed = st.placed.filter((x) => x !== item);
        st.bankWords.push(item);
        render(st);
      });
      st.slot.appendChild(b);
    });
    st.bank.replaceChildren();
    st.bankWords.forEach((item) => {
      const b = el("button", "word", item.w);
      b.type = "button";
      b.addEventListener("click", () => {
        st.bankWords = st.bankWords.filter((x) => x !== item);
        st.placed.push(item);
        render(st);
      });
      st.bank.appendChild(b);
    });
    check.disabled = !states.every((x) => x.bankWords.length === 0);
  };

  const check = addCheckButton(actions, () => {
    let right = 0;
    states.forEach((st) => {
      const mine = st.placed.map((x) => x.w.toLowerCase()).join(" ");
      const expected = st.s.answer.join(" ");
      const ok = mine === expected;
      if (ok) right++;
      st.slot.classList.add(ok ? "correct" : "wrong");
      st.slot.querySelectorAll("button").forEach((b) => (b.disabled = true));
      if (!ok) {
        const pretty = expected.replace(/^./, (c) => c.toUpperCase()).replace(" ?", "?");
        st.wrap.appendChild(el("div", "expected", `Correcto: ${pretty}`));
      }
    });
    finish(right / states.length, `Ordenaste bien ${right} de ${states.length} preguntas.`);
  });
  states.forEach(render);
}

/* ---------- Reto 4: selección múltiple ---------- */
function buildMulti(q, body, actions, finish) {
  const totalCorrect = q.options.filter((o) => o.correct).length;
  const chips = el("div", "chips");
  const selected = new Set();
  const buttons = shuffle(q.options).map((opt) => {
    const b = el("button", "chip", opt.label);
    b.type = "button";
    b.addEventListener("click", () => {
      selected.has(opt) ? selected.delete(opt) : selected.add(opt);
      b.classList.toggle("on");
      note.textContent = `Seleccionados: ${selected.size}`;
      check.disabled = selected.size === 0;
    });
    chips.appendChild(b);
    return { opt, b };
  });
  const note = el("p", "counter-note", "Seleccionados: 0");
  body.append(chips, note);

  const check = addCheckButton(actions, () => {
    let good = 0;
    let bad = 0;
    buttons.forEach(({ opt, b }) => {
      b.disabled = true;
      b.classList.remove("on");
      if (selected.has(opt)) {
        if (opt.correct) { good++; b.classList.add("correct"); }
        else { bad++; b.classList.add("wrong"); }
      } else if (opt.correct) {
        b.classList.add("missed");
      }
    });
    const earned = Math.max(0, (good - bad) / totalCorrect);
    finish(earned, `Aciertos: ${good} de ${totalCorrect}, errores: ${bad}. Los de borde amarillo eran correctos y no los marcaste.`);
  });
}

/* ---------- Resultados ---------- */
function gradeInfo(pct) {
  if (pct >= 0.9) return { medal: "🏆", text: "¡Excelente! Dominas estos temas." };
  if (pct >= 0.75) return { medal: "🥇", text: "¡Muy bien! Solo te faltan unos detalles." };
  if (pct >= 0.6) return { medal: "🥈", text: "Bien, pero conviene repasar un poco." };
  return { medal: "💪", text: "Sigue practicando, ¡tú puedes! Repasa y vuelve a intentarlo." };
}

function showResults() {
  $("quiz").classList.add("hidden");
  $("bar").style.width = "100%";
  const box = $("resultContent");
  box.replaceChildren();
  $("result").classList.remove("hidden");

  const total = QUESTIONS.length;
  const pct = score / total;
  const info = gradeInfo(pct);

  const head = el("div", "result-head");
  head.appendChild(el("div", "medal", info.medal));
  head.appendChild(el("h2", "", playerName ? `¡Terminaste, ${playerName}!` : "¡Terminaste!"));
  head.appendChild(el("div", "big-score", `${fmt(score)} / ${total}`));
  head.appendChild(el("div", "grade", `Calificación: ${fmt(pct * 10)} / 10 (${Math.round(pct * 100)}%)`));
  head.appendChild(el("p", "", info.text));
  box.appendChild(head);

  const breakdown = el("div", "breakdown");
  Object.entries(SECTIONS).forEach(([key, sec]) => {
    const items = results.filter((r) => r.q.section === key);
    const got = items.reduce((s, r) => s + r.earned, 0);
    const row = el("div", "bk-row");
    row.appendChild(el("strong", "", `${sec.icon} ${sec.name}`));
    row.appendChild(el("span", "", `${fmt(got)} / ${items.length}`));
    const bar = el("div", "bk-bar");
    const fill = el("div");
    fill.style.width = `${items.length ? (got / items.length) * 100 : 0}%`;
    bar.appendChild(fill);
    row.appendChild(bar);
    breakdown.appendChild(row);
  });
  box.appendChild(breakdown);

  const review = el("details", "review");
  review.appendChild(el("summary", "", "Revisar mis respuestas"));
  const ol = el("ol");
  results.forEach(({ q, earned }) => {
    const li = el("li", earned >= 0.999 ? "full" : earned > 0 ? "part" : "none", q.text + " ");
    li.appendChild(el("span", "pts", `(${fmt(earned)} pt)`));
    ol.appendChild(li);
  });
  review.appendChild(ol);
  box.appendChild(review);

  const actions = el("div", "result-actions");
  const again = el("button", "btn primary", "🔄 Intentar de nuevo");
  again.addEventListener("click", () => $("startBtn").click());
  const print = el("button", "btn", "🖨️ Imprimir / guardar PDF");
  print.addEventListener("click", () => window.print());
  actions.append(again, print);
  box.appendChild(actions);

  if (pct >= 0.75) launchConfetti();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function launchConfetti() {
  const host = $("confetti");
  host.replaceChildren();
  const colors = ["#f97316", "#8b5cf6", "#0ea5e9", "#ec4899", "#22c55e", "#fde047"];
  for (let i = 0; i < 70; i++) {
    const p = el("div", "piece");
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = `${2 + Math.random() * 2.5}s`;
    p.style.animationDelay = `${Math.random() * 0.8}s`;
    host.appendChild(p);
  }
  setTimeout(() => host.replaceChildren(), 6000);
}
