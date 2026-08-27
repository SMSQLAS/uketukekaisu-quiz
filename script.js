const questions = [
  {
    text: "同一病院から交付された2枚の処方箋を「同時」に受け付けた場合、受付回数は何回となりますか。",
   choices: ["1回", "2回"],
   answer: "1回",
    explanation: "<strong>処方箋の交付日が同一であるか、異なるかにかかわらず、受付回数は１回となります。</strong><br>ただし、同一の医療機関でも歯科の処方箋は別受付とします。"
  },
    {
    text: "「同時」に別の医療機関から発行された２枚以上の処方箋を受け付けた場合、２回目以降の調剤基本料はどうしますか。",
   choices: ["そのまま", "80/100"],
   answer: "80/100",
    explanation: "<strong>異なる医療機関から発行された処方箋であれば、受付回数は２回以上となりますが、受付が１回目以外の処方箋の調剤基本料は所定点数を100分の80として算定します。</strong>"
  },
  {
    text: "同一日の午前と午後に同一患者から同一医療機関で発行された処方箋を受け付けた場合、午後（２回目）の分も調剤基本料を算定していいでしょうか。",
   choices: ["算定する", "算定しない"],
   answer: "算定しない",
    explanation: "<strong>午後に受け付けた処方箋の調剤基本料は算定できません。受付回数は午前に受け付けた処方箋の１回のみとなります。<br>ただし、体調の急変により、再度処方箋の交付を受け調剤してもらうような場合は、受付回数を別にすることが認められています。</strong><br>「体調急変の為１日２回受付」とコメントを入れておく。"
  },
  {
    text: "A診療所B科（診察は午前のみ）を受診、処方箋を午前中に持参した。いったん出勤し、夕方A診療所C科（診察は午後のみ）を受診し処方箋を持参した。<br>両科の受診についてはB科からC科へ受診勧告があったわけではなく、全く別々の疾病による自発的受診で関連はない。<br>この場合の受付回数は何回？",
   choices: ["1回", "2回"],
   answer: "1回",
    explanation: "一連の診療行為に基づいて交付されたものを同一日に受け付けた場合は、一括して受付回数は１回となります。<br><strong>この一連の診療行為とは、同一の保険医療機関の異なる医師によって交付された処方箋でも受付１回としていますので、傷病上や交付された処方箋の時間的な要因を含んだものではないと解釈できます。</strong><br>別受付として認められるケースは、午前の処方箋受付後に患者の病態が急変し、夜に再度医療機関を受診して処方箋を持参した場合などです。"
  },
  {
    text: "処方内容がFAXで先に届いた場合、FAXを受信した日時を処方箋の受付日時として扱う。○か×か。",
   choices: ["○", "×"],
   answer: "×",
    explanation: "×。処方箋の受付日時は、患者や家族などから処方箋の原本を受領した時点で扱います。FAX受信は調剤の準備行為として認められますが、FAX受信日時そのものが受付日時になるわけではありません。"
  },
  {
    text: "同一医療機関・同一診療科で、午前と午後に別の医師から処方箋が交付された。患者への聞き取りで、午後分は体調変化による追加処方だと確認できても、別受付として扱うには医療機関へ必ず電話確認しなければならない。○か×か。",
   choices: ["○", "×"],
   answer: "×",
    explanation: "×。患者からの聞き取りで理由が十分確認でき、取り扱いに問題がないと判断できる場合、改めて医療機関へ確認することが必須とはされていません。<br>別受付とする場合は、「体調急変の為１日２回受付」とコメントを入れておく。"
  },
  {
    text: "調剤基本料の算定区分は毎年確認し、区分に変更が生じる場合は5月に届出を行う。前年と区分が変わらない場合は、改めて届出を行う必要はない。○か×か。",
   choices: ["○", "×"],
   answer: "○",
    explanation: "○。直近1年間の処方箋受付実績等を毎年確認し、区分が変わる場合は5月に届出を行います。「前年5月1日から当年4月末日までの１年間」の保険処方箋の応需実績に基づいて、該当する算定区分を判断します。変更の有無は毎年確認し、算定区分に変更が生じなければ改めての届出は不要です。"
  },
  {
    text: "以前から保険薬局の指定を受けているが、前年1年間に処方箋の受付実績がまったくない薬局は、調剤基本料1として届出を行う。○か×か。",
   choices: ["○", "×"],
   answer: "○",
    explanation: "○。1年間の処方箋受付実績がない場合は、受付回数や特定の保険医療機関からの集中率による区分判定の対象にならないため、調剤基本料1として届出します。"
  },
  {
    text: "調剤基本料の受付回数や医療機関別の集中率を計算するとき、公費単独の処方箋や労災保険に係る処方箋も、健康保険の処方箋と同じように対象へ含める。○か×か。",
   choices: ["○", "×"],
   answer: "×",
    explanation: "×。受付回数や集中率の判定は健康保険法に基づく処方箋等を対象として行い、公費単独や労災保険などの処方箋は対象に含めません。"
  },
  {
    text: "医薬品の取引価格の妥結率が低い保険薬局や、かかりつけ機能に係る基本的業務を実施していない保険薬局については、調剤基本料を100分の○○に減算して算定する。",
   choices: ["50/100", "70/100"],
   answer: "50/100",
    explanation: "100分の50に減算して算定します。また、調剤基本料の減算規定は、いずれの調剤基本料区分にも適用されます。<br>①医療用医薬品の取引価格の妥結率が5割以下<br>②妥結率・単品価格契約率・一律値引き契約にかかる状況について地方厚生支局へ報告していない<br>③かかりつけ機能に係る基本業務を実施していない<br>いずれかの条件に1つでも該当する場合は減算となります。<br>ただし、かかりつけ機能に係る基本業務の実施の有無については、処方箋受付回数が月平均600回以下の保険薬局には適用されません。"
  },
  {
    text: "異なる保険医療機関から交付された処方箋を、同じ日の午前と夕方にそれぞれ受け付けた。夕方に受け付けた処方箋の調剤基本料はどう算定する？",
   choices: ["80/100", "100/100"],
   answer: "100/100",
    explanation: "80％で算定する取り扱いは、異なる保険医療機関の複数の処方箋を『同時にまとめて』受け付けた場合に適用されます。午前と夕方のように別々の時点で受け付けた場合には適用しません。"
  },
  {
    text: "異なる保険医療機関の複数の処方箋を同時に受け付けた場合の中で、分割調剤に係る処方箋が含まれているときは、どのように算定する？",
   choices: ["80/100", "100/100"],
   answer: "100/100",
    explanation: "処方箋の受付時点が「同時」であっても、分割調剤に係る処方箋が含まれていた場合、点数の計算方法などの取り扱いがきわめて複雑になってしまうといった問題があるので、80/100の規定は適用しないこととして整理されています。"
  },

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
  questionText.innerHTML = q.text;
  const choiceBtn1 = document.getElementById("choiceBtn1");
const choiceBtn2 = document.getElementById("choiceBtn2");

choiceBtn1.textContent = q.choices[0];
choiceBtn2.textContent = q.choices[1];

choiceBtn1.dataset.answer = q.choices[0];
choiceBtn2.dataset.answer = q.choices[1];
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
userAnswer: userAnswer,
correctAnswer: q.answer,
    result: correct ? "正解" : "不正解"
  });

  judge.textContent = correct ? "正解！" : "不正解";
  explanation.innerHTML = q.explanation;
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
    storeName: document.getElementById("storeName").value.trim(),
    name: document.getElementById("playerName").value.trim(),
    difficulty: document.getElementById("difficulty").value,
    score: `${score}/${questions.length}`,
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
  btn.addEventListener("click", () => handleAnswer(btn.dataset.answer));
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
