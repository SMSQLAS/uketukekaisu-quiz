const questions = [
  {
    text: "同一の保険医療機関（歯科を除く）から交付された2枚の処方箋を同時に受け付けた。交付日が異なっていても、一連の診療行為に基づく処方箋であれば、受付回数は1回として数える。○か×か。",
    answer: true,
    explanation: "○。同一医療機関の同一医師による処方箋、または同一医療機関で一連の診療行為に基づいて交付された処方箋を同時に受け付けた場合は、まとめて受付1回として扱います。歯科の処方箋は別受付です。"
  },
  {
    text: "同一患者が、同一日に同じ保険医療機関から午前と午後に処方箋を受け取り、薬局へ持参した。一連の診療行為に基づく処方箋であれば、受付回数は午前分の1回のみとなり、午後分について調剤基本料を別に算定しない。○か×か。",
    answer: true,
    explanation: "○。同一患者・同一日で、同一医療機関から一連の診療行為に基づいて交付された処方箋は、受付回数をまとめて1回とします。"
  },
  {
    text: "同一医療機関の異なる医師から同じ日に処方箋が交付された場合、午前と夕方など発行時刻が離れていれば、それだけで必ず別受付として数える。○か×か。",
    answer: false,
    explanation: "×。時刻が離れていることだけでは別受付にはなりません。一連の診療行為に基づく処方箋かどうかで判断します。いったん処方箋を受け付けた後に病態が急変し、夜に再受診して新たな処方箋が交付された場合などは、別受付として認められることがあります。"
  },
  {
    text: "同一医療機関・同一診療科で、午前と午後に別の医師から処方箋が交付された。患者への聞き取りで、午後分は体調変化による追加処方だと確認できても、別受付として扱うには医療機関へ必ず電話確認しなければならない。○か×か。",
    answer: false,
    explanation: "×。患者からの聞き取りで理由が十分確認でき、取り扱いに問題がないと判断できる場合、改めて医療機関へ確認することが必須とはされていません。別受付とする場合は、必要に応じてレセプトの摘要欄に理由が分かるよう記載します。"
  },
  {
    text: "処方内容がFAXで先に届いた場合、FAXを受信した日時を処方箋の受付日時として扱う。○か×か。",
    answer: false,
    explanation: "×。処方箋の受付日時は、患者や家族などから処方箋の原本を受領した時点で扱います。FAX受信は調剤の準備行為として認められますが、FAX受信日時そのものが受付日時になるわけではありません。"
  },
  {
    text: "保険薬局が調剤基本料を算定するためには、所定の施設基準について地方厚生（支）局長あてに届出を行う必要がある。○か×か。",
    answer: true,
    explanation: "○。調剤基本料は施設基準に基づくため、該当する区分について所定の届出が必要です。"
  },
  {
    text: "調剤基本料の算定区分は毎年確認し、区分に変更が生じる場合は5月に届出を行う。前年と区分が変わらない場合は、改めて届出を行う必要はない。○か×か。",
    answer: true,
    explanation: "○。直近1年間の処方箋受付実績等を毎年確認し、区分が変わる場合は5月に届出を行います。区分に変更がなければ再届出は不要ですが、毎年の確認自体は必要です。"
  },
  {
    text: "以前から保険薬局の指定を受けているが、前年1年間に処方箋の受付実績がまったくない薬局は、調剤基本料1として届出を行う。○か×か。",
    answer: true,
    explanation: "○。1年間の処方箋受付実績がない場合は、受付回数や特定の保険医療機関からの集中率による区分判定の対象にならないため、調剤基本料1として届出します。"
  },
  {
    text: "同一病院の歯科と歯科以外の診療科の処方箋を同時に受け付けた場合、受付回数はそれぞれ1回として数える。また、集中率の計算でも歯科分は歯科以外の診療科分とは分けて扱う。○か×か。",
    answer: true,
    explanation: "○。同一医療機関であっても、歯科の処方箋は歯科以外の処方箋とは別受付として扱います。集中率についても区別して計算します。"
  },
  {
    text: "調剤基本料の受付回数や医療機関別の集中率を計算するとき、公費単独の処方箋や労災保険に係る処方箋も、健康保険の処方箋と同じように対象へ含める。○か×か。",
    answer: false,
    explanation: "×。受付回数や集中率の判定は健康保険法に基づく処方箋等を対象として行い、公費単独や労災保険などの処方箋は対象に含めません。"
  },
  {
    text: "医薬品の取引価格の妥結率が低い場合などに適用される調剤基本料の減算は、調剤基本料1だけが対象で、他の調剤基本料区分には適用されない。○か×か。",
    answer: false,
    explanation: "×。調剤基本料の減算規定は、原則としていずれの調剤基本料区分にも適用されます。なお、かかりつけ機能に係る基本的業務の実施状況に関する要件には、月平均の処方箋受付回数による適用除外があります。"
  },
  {
    text: "異なる保険医療機関から交付された処方箋を、同じ日の午前と夕方にそれぞれ受け付けた。夕方に受け付けた処方箋の調剤基本料は、2回目なので所定点数の80％で算定する。○か×か。",
    answer: false,
    explanation: "×。80％で算定する取り扱いは、異なる保険医療機関の複数の処方箋を『同時にまとめて』受け付けた場合に適用されます。午前と夕方のように別々の時点で受け付けた場合には適用しません。"
  },
  {
    text: "異なる保険医療機関の複数の処方箋を同時に受け付けた場合でも、その中に分割調剤に係る処方箋が含まれているときは、分割調剤の処方箋には調剤基本料を80％にする取り扱いを適用しない。○か×か。",
    answer: true,
    explanation: "○。複数の処方箋を同時に受け付けた場合の80％算定ルールは、分割調剤に係る処方箋には適用しません。"
  },
  {
    text: "所定の『医療を提供しているが、医療資源の少ない地域』に所在する保険薬局は、要件を満たして地方厚生（支）局へ届出を行えば、処方箋受付回数や集中率にかかわらず調剤基本料1を算定できる。○か×か。",
    answer: true,
    explanation: "○。対象となる地域に所在し、定められた要件を満たす保険薬局は、所定の届出を行うことで、受付回数や集中率によらず調剤基本料1を算定できる特例があります。"
  }
];

let current = 0;
let score = 0;
let answered = false;
const answerLog = [];

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const finishScreen = document.getElementById("finishScreen");
const progress = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const questionText = document.getElementById("questionText");
const resultBox = document.getElementById("resultBox");
const judge = document.getElementById("judge");
const explanation = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const submitForm = document.getElementById("submitForm");
const sendStatus = document.getElementById("sendStatus");
const retryBtn = document.getElementById("retryBtn");

function showQuestion() {
  answered = false;
  const q = questions[current];
  progress.textContent = `${current + 1} / ${questions.length}`;
  scoreEl.textContent = `正解 ${score}`;
  questionText.textContent = q.text;
  resultBox.classList.add("hidden");
document.querySelectorAll(".answer").forEach(btn => btn.disabled = false);
}

function finishQuiz() {
  quizScreen.classList.add("hidden");
  finishScreen.classList.remove("hidden");
  const percent = Math.round((score / questions.length) * 100);
  finalScore.textContent = `${questions.length}問中 ${score}問正解（${percent}%）`;
finalMessage.textContent = "お疲れ様でした😊";
}

function handleAnswer(userAnswer) {
  if (answered) return;
  answered = true;
  const q = questions[current];
  const correct = userAnswer === q.answer;
  if (correct) score++;

  answerLog.push({
    no: current + 1,
    question: q.text,
    userAnswer: userAnswer ? "○" : "×",
    correctAnswer: q.answer ? "○" : "×",
    result: correct ? "正解" : "不正解"
  });

  judge.textContent = correct ? "正解！" : "不正解";
  explanation.textContent = q.explanation;
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `正解 ${score}`;
  document.querySelectorAll(".answer").forEach(btn => btn.disabled = true);
  nextBtn.textContent = current === questions.length - 1 ? "結果を見る" : "次の問題へ";
}

async function submitResult(event) {
  event.preventDefault();

  if (!GAS_WEB_APP_URL) {
    sendStatus.textContent = "config.js にGoogle Apps ScriptのウェブアプリURLを設定してください。";
    return;
  }

  const payload = {
    quizTitle: "受付回数",
    timestamp: new Date().toLocaleString("ja-JP"),
    store: document.getElementById("storeName").value.trim(),
    name: document.getElementById("playerName").value.trim(),
    difficulty: document.getElementById("difficulty").value,
    score,
    total: questions.length,
    percent: Math.round((score / questions.length) * 100),
   answers: answerLog
  .filter(item => item.result === "不正解")
  .map(item => `問題${item.no}`)
  .join("、") || "なし"
  };

  sendStatus.textContent = "送信中です...";

  try {
    await fetch(GAS_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    sendStatus.textContent = "送信しました。";
    submitForm.querySelector("button[type='submit']").disabled = true;
    retryBtn.classList.remove("hidden");
  } catch (error) {
    console.error(error);
    sendStatus.textContent = "送信に失敗しました。URLや公開設定を確認してください。";
  }
}

document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

document.querySelectorAll(".answer").forEach(btn => {
  btn.addEventListener("click", () => handleAnswer(btn.dataset.answer === "true"));
});

nextBtn.addEventListener("click", () => {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    finishQuiz();
  }
});

submitForm.addEventListener("submit", submitResult);
retryBtn.addEventListener("click", () => location.reload());
