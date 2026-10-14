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
  mc("algebra", "Reduce: 3x + 5x − 2y",
    ["8x − 2y", "8x + 2y", "6x − 2y", "8xy"], 0,
    "3x + 5x = 8x; el término −2y no tiene semejantes."),
  mc("algebra", "Reduce: 6a − 2a + 4b − 3b",
    ["4a + b", "4a + 7b", "8a + b", "4ab + b"], 0,
    "6a − 2a = 4a y 4b − 3b = b."),
  mc("algebra", "Reduce: x + 4y + 3x − 2y",
    ["4x + 2y", "4x + 6y", "2x + 2y", "4xy"], 0,
    "x + 3x = 4x y 4y − 2y = 2y."),
  mc("algebra", "Reduce: 9m − 4m + 2n − n",
    ["5m + n", "5m + 3n", "13m + n", "5mn"], 0,
    "9m − 4m = 5m y 2n − n = n."),
  mc("algebra", "Simplifica: 2x + 3y + 4x − y",
    ["6x + 2y", "6x + 4y", "2x + 2y", "6xy"], 0,
    "2x + 4x = 6x y 3y − y = 2y."),
  mc("algebra", "Simplifica: 7a − 3b − 2a + b",
    ["5a − 2b", "5a − 4b", "9a − 2b", "5ab"], 0,
    "7a − 2a = 5a y −3b + b = −2b."),
  mc("algebra", "Simplifica: 5p + 2q − 3p + 4q",
    ["2p + 6q", "8p + 6q", "2p − 2q", "2pq + 6q"], 0,
    "5p − 3p = 2p y 2q + 4q = 6q."),
  mc("algebra", "Simplifica: 8x − 3y − 5x + y",
    ["3x − 2y", "3x − 4y", "13x − 2y", "3xy"], 0,
    "8x − 5x = 3x y −3y + y = −2y."),
  {
    type: "terms", section: "algebra", interactive: true,
    text: "Identifica el signo, el coeficiente y la variable de cada término.",
    hint: "Recuerda: el coeficiente es el número que multiplica a la variable (si no se ve, vale 1).",
    rows: [
      { term: "+7x", sign: "+", coef: "7", variable: "x" },
      { term: "−9m", sign: "−", coef: "9", variable: "m" },
      { term: "+4y", sign: "+", coef: "4", variable: "y" },
      { term: "−a", sign: "−", coef: "1", variable: "a" },
      { term: "+12b", sign: "+", coef: "12", variable: "b" },
    ],
    signOptions: ["+", "−"],
    coefOptions: ["1", "4", "7", "9", "12"],
    varOptions: ["x", "m", "y", "a", "b"],
    explain: "El signo de −a es negativo y su coeficiente numérico es 1.",
  },
  mc("algebra", "En la expresión x + 3y, ¿cuáles son el signo y el coeficiente de x?",
    ["Signo positivo y coeficiente 1", "Signo negativo y coeficiente 1", "Signo positivo y coeficiente 3", "Signo negativo y coeficiente 3"], 0,
    "La x no tiene signo negativo escrito, así que su signo es positivo; su coeficiente implícito es 1."),

  /* Geometría: conceptos básicos */
  mc("geometria", "¿Qué es un punto?",
    ["Una ubicación exacta sin largo ni ancho",
     "Una figura con dos extremos",
     "Una figura que se extiende infinitamente en ambas direcciones",
     "Una figura que empieza en un punto y sigue hacia un lado"], 0,
    "Un punto indica una ubicación exacta y no tiene dimensiones."),
  mc("geometria", "¿Qué es un segmento?",
    ["Una figura que tiene dos extremos",
     "Una ubicación sin dimensiones",
     "Una figura que no termina en ninguna dirección",
     "Una figura con un origen y que sigue infinitamente hacia un lado"], 0,
    "Un segmento es la parte de una recta limitada por dos extremos."),
  mc("geometria", "¿Qué es una recta?",
    ["Una figura que se extiende sin fin en ambas direcciones",
     "Una figura con dos extremos",
     "Una figura que comienza en un punto y sigue hacia un lado",
     "Una ubicación con largo y ancho"], 0,
    "La recta continúa infinitamente en ambos sentidos."),
  mc("geometria", "¿Qué es una semirrecta?",
    ["Comienza en un punto y continúa infinitamente hacia un lado",
     "Tiene dos extremos definidos",
     "Se extiende infinitamente en ambas direcciones",
     "Representa una ubicación sin dimensiones"], 0,
    "La semirrecta tiene un punto de origen y continúa sin fin en una dirección."),
  mc("geometria", "Verdadero o falso: un segmento tiene dos extremos.",
    ["Verdadero", "Falso", "Solo si es horizontal", "No se puede saber"], 0,
    "Verdadero: los extremos delimitan el segmento."),
  mc("geometria", "Verdadero o falso: una recta termina en un punto.",
    ["Falso", "Verdadero", "Solo si es vertical", "Depende de su longitud"], 0,
    "Falso: una recta se prolonga infinitamente en ambas direcciones."),
  mc("geometria", "Verdadero o falso: una semirrecta tiene un punto de origen.",
    ["Verdadero", "Falso", "Tiene dos orígenes", "No se puede saber"], 0,
    "Verdadero: la semirrecta empieza en un punto y continúa hacia un solo lado."),
  mc("geometria", "Verdadero o falso: un punto tiene longitud y anchura.",
    ["Falso", "Verdadero", "Solo tiene longitud", "Solo tiene anchura"], 0,
    "Falso: un punto solo representa una ubicación."),
  {
    type: "match", section: "geometria", interactive: true,
    text: "Relaciona cada instrucción con su representación.",
    hint: "Las flechas muestran las figuras que continúan infinitamente.",
    pairs: [
      { concept: "Recta por A y B", desc: "←──── A ──── B ────→" },
      { concept: "Segmento C-D", desc: "C ●────────● D" },
      { concept: "Semirrecta desde E por F", desc: "E ●──── F ────→" },
      { concept: "Punto G", desc: "G •" },
    ],
    explain: "La recta lleva flechas en ambos extremos; el segmento tiene dos extremos; la semirrecta tiene un origen y una flecha; el punto marca una ubicación.",
  },

  /* Inglés: Simple Present */
  mc("ingles", "My brother ______ video games after school. (play)",
    ["plays", "play", "plaies", "playing"], 0,
    "My brother equivale a he, por eso play lleva -s: plays."),
  mc("ingles", "The students ______ their homework every day. (do)",
    ["do", "does", "dos", "doing"], 0,
    "The students equivale a they, así que se usa do."),
  mc("ingles", "Ana ______ her room on Saturdays. (clean)",
    ["cleans", "clean", "cleanes", "cleaning"], 0,
    "Con Ana (she), el verbo clean lleva -s: cleans."),
  mc("ingles", "The dog ______ a lot at night. (bark)",
    ["barks", "bark", "barkes", "barking"], 0,
    "The dog equivale a it, por eso bark lleva -s: barks."),
  mc("ingles", "Completa la pregunta: ______ you speak English?",
    ["Do", "Does", "Are", "Is"], 0,
    "Con you se usa do para formar preguntas en simple present."),
  mc("ingles", "Completa la pregunta: ______ he like pizza?",
    ["Does", "Do", "Is", "Are"], 0,
    "Con he se usa does; el verbo principal queda en forma base: like."),
  mc("ingles", "Completa la pregunta: ______ your friends play basketball?",
    ["Do", "Does", "Are", "Is"], 0,
    "Your friends equivale a they, por eso se usa do."),
  mc("ingles", "Completa la pregunta: ______ your mother work on Sundays?",
    ["Does", "Do", "Is", "Are"], 0,
    "Your mother equivale a she, así que se usa does."),
  {
    type: "order", section: "ingles", interactive: true,
    text: "Ordena las palabras para formar respuestas modelo completas en inglés.",
    hint: "Reordena las palabras para responder cada pregunta. Puedes cambiar las respuestas al practicar para que sean verdaderas para ti.",
    sentences: [
      { prompt: "Do you study English every day?", words: ["Yes", ",", "I", "do", "."], answer: ["Yes", ",", "I", "do", "."] },
      { prompt: "Does your best friend play video games?", words: ["Yes", ",", "my", "best", "friend", "does", "."], answer: ["Yes", ",", "my", "best", "friend", "does", "."] },
      { prompt: "Do your parents work on Saturdays?", words: ["No", ",", "they", "don't", "."], answer: ["No", ",", "they", "don't", "."] },
    ],
    explain: "Las respuestas cortas usan do/don't o does/doesn't según el sujeto.",
  },

  /* Historia y geografía de México */
  mc("historia", "¿Quién fue Miguel Hidalgo y qué papel tuvo en la Independencia de México?",
    ["Un sacerdote que inició el movimiento de Independencia con el llamado de 1810",
     "El primer presidente de México después de la Revolución",
     "Un explorador que fundó la ciudad de Oaxaca",
     "Un virrey que declaró la independencia en 1821"], 0,
    "Miguel Hidalgo fue un sacerdote y líder insurgente; su llamado a levantarse en 1810 inició la lucha por la Independencia."),
  mc("historia", "¿Cuál es la capital del estado de Oaxaca?",
    ["Oaxaca de Juárez", "Puebla de Zaragoza", "Tuxtla Gutiérrez", "Mérida"], 0,
    "La capital del estado es Oaxaca de Juárez."),
  mc("historia", "¿Qué península comprende los estados de Yucatán, Campeche y Quintana Roo?",
    ["La península de Yucatán", "La península de Baja California", "La península de Florida", "La península de Osa"], 0,
    "La península de Yucatán se encuentra al sureste de México e incluye esos tres estados."),
  {
    type: "multi", section: "historia", interactive: true,
    text: "Selecciona las dos características de cada clima (4 respuestas correctas en total).",
    hint: "Elige dos características del clima desértico y dos de la selva tropical. Cada error resta puntos.",
    options: [
      { label: "Desierto: llueve muy poco.", correct: true },
      { label: "Selva tropical: llueve mucho durante el año.", correct: true },
      { label: "Desierto: suele tener poca humedad.", correct: true },
      { label: "Selva tropical: tiene vegetación abundante por la humedad.", correct: true },
      { label: "Desierto: recibe lluvias abundantes todo el año.", correct: false },
      { label: "Selva tropical: casi siempre es seca y sin vegetación.", correct: false },
    ],
    explain: "Las regiones desérticas son muy secas y con poca humedad; las selvas tropicales son húmedas, lluviosas y tienen vegetación abundante.",
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
    const label = `${String.fromCharCode(97 + n)})${s.prompt ? ` ${s.prompt}` : ""}`;
    wrap.appendChild(el("div", "label", label));
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
      const expected = st.s.answer.map((word) => word.toLowerCase()).join(" ");
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
