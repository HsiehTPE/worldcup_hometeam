const QUESTIONS = [
  {
    part: "出发前",
    title: "为这趟世界杯观赛买新旅行箱，你最心动哪种款？",
    options: [
      { label: "A", text: "复古亮色箱，推着走像电影里的旅行场景" },
      { label: "B", text: "极简纯色箱，线条干净，看着很舒服" },
      { label: "C", text: "硬壳金属箱，耐用、结实，推着也很有分量" },
      { label: "D", text: "轻量运动款，颜色干净，看着就方便随时出发" }
    ]
  },
  {
    part: "出发前",
    title: "真要订这趟世界杯观赛之旅，你最容易先下手的是哪一种？",
    options: [
      { label: "A", text: "纽约、洛杉矶、墨西哥城这种讨论度很高的热门主办城市，去一次就很有记忆点" },
      { label: "B", text: "波士顿、费城、瓜达拉哈拉这种经典感很强、攻略成熟的老牌路线" },
      { label: "C", text: "温哥华、堪萨斯城、蒙特雷这种评价越来越好、现在去刚刚好的城市" },
      { label: "D", text: "还没被聊烂的新路线组合，未知感比确定感更迷人" }
    ]
  },
  {
    part: "出发前",
    title: "你收藏美加墨观赛攻略时，更容易先加哪类内容进清单？",
    options: [
      { label: "A", text: "“纽约必吃、洛杉矶必逛、墨西哥城必打卡”这种一看就绕不开的清单" },
      { label: "B", text: "老城区路线、博物馆路线、经典球场周边散步线这种底蕴攻略" },
      { label: "C", text: "“冷门但很值得去”的小众推荐，比如本地人才去的酒吧街或海边小城" },
      { label: "D", text: "新开的市集、新开的展、新晋街区，越新越想试" }
    ]
  },
  {
    part: "出发前",
    title: "如果只能选一种世界杯观赛路线，你最愿意报名哪一团？",
    options: [
      { label: "A", text: "纽约 + 洛杉矶 + 墨西哥城热门城市打卡团，行程安排得很满" },
      { label: "B", text: "波士顿 + 费城 + 瓜达拉哈拉经典文化深度团，节奏稳、内容厚" },
      { label: "C", text: "温哥华 + 蒙特雷 + 堪萨斯城这种小众逆袭团" },
      { label: "D", text: "多伦多 + 西雅图周边 + 新晋热门街区实验团" }
    ]
  },
  {
    part: "旅途中",
    title: "如果这趟美加墨世界杯追赛之旅只能选一种城际移动方式，你更偏爱？",
    options: [
      { label: "A", text: "租车沿着公路一路开，把路上的氛围也算进旅行的一部分" },
      { label: "B", text: "优先选航班加市内轨道交通，路线清晰、时间可控" },
      { label: "C", text: "包车或自驾跨城，自己掌控节奏，遇到变化也比较从容" },
      { label: "D", text: "能坐夜巴就坐夜巴，能临时改去下一城就改" }
    ]
  },
  {
    part: "出发前",
    title: "在主办城市订住处，你最想住哪种风格？",
    options: [
      { label: "A", text: "有露台、有灯串、能看到城市夜色的精品民宿" },
      { label: "B", text: "设计感酒店，配色克制、质感在线" },
      { label: "C", text: "老牌经典酒店，装潢厚重、服务靠谱" },
      { label: "D", text: "年轻感公寓或新开的潮流旅舍" }
    ]
  },
  {
    part: "旅途中",
    title: "朋友给你推荐一座世界杯主办城市，哪种安利最容易让你立刻心动？",
    options: [
      { label: "A", text: "“这地方现在最受关注，去了就知道为什么大家都在聊”" },
      { label: "B", text: "“它一直都很经典，怎么去都不会错”" },
      { label: "C", text: "“现在还不算最顶流，但去过的人都说特别值”" },
      { label: "D", text: "“这是刚冒头的新路线，最有探索感”" }
    ]
  },
  {
    part: "旅途中",
    title: "落地第一座世界杯主办城市后，你最想用哪种方式开启第一顿？",
    options: [
      { label: "A", text: "直奔热门餐厅，先把这座城最热闹的一面吃到" },
      { label: "B", text: "先找唐人街里评价最稳的中餐馆，热汤热饭先安排上" },
      { label: "C", text: "找本地人常去的小馆子，低调但很见功夫" },
      { label: "D", text: "随机走进一家看着合眼缘的小店，吃到什么算什么" }
    ]
  },
  {
    part: "旅途中",
    title: "刚到主办城市酒店放下行李，你第一反应是？",
    options: [
      { label: "A", text: "立刻换衣服出门，白天黑夜都不能浪费" },
      { label: "B", text: "先把房间和路线研究明白，再开始行动" },
      { label: "C", text: "先确认门锁、充电、洗漱和第二天安排都妥了" },
      { label: "D", text: "先打开地图随便看看，想去哪就先过去" }
    ]
  },
  {
    part: "旅途中",
    title: "旅伴突然说有一场比赛赶不上了，你第一反应更像？",
    options: [
      { label: "A", text: "先把大家情绪接住，别让整趟旅行一下子散掉" },
      { label: "B", text: "马上开地图改路线，把替代方案尽快理顺" },
      { label: "C", text: "先把车票、酒店、时间这些关键环节保住" },
      { label: "D", text: "干脆顺势换玩法，说不定误打误撞更精彩" }
    ]
  },
  {
    part: "旅途中",
    title: "和朋友一起跑美加墨世界杯时，你通常是？",
    options: [
      { label: "A", text: "情绪担当，负责把早午晚三场都玩出氛围" },
      { label: "B", text: "决策军师，景点顺序、交通节奏我都会先过一遍" },
      { label: "C", text: "兜底队友，别人乱了我来稳住全局" },
      { label: "D", text: "社交担当，能把偶遇的人和店都变成记忆点" }
    ]
  },
  {
    part: "旅途中",
    title: "你在世界杯现场外拍到一张很好的照片时，通常会？",
    options: [
      { label: "A", text: "当场发朋友圈，想把那一刻的情绪一起发出去" },
      { label: "B", text: "先修一下图，再挑最能代表这趟旅行的一张发" },
      { label: "C", text: "先存着，等整趟旅行结束再慢慢整理" },
      { label: "D", text: "立刻发给朋友群，顺手问一句“下次谁一起？”" }
    ]
  },
  {
    part: "归途",
    title: "你准备的世界杯观赛穿搭里，哪一套最像你的菜？",
    options: [
      { label: "A", text: "飘逸衬衫、配饰、皮靴都到位，主打一个浪漫上镜" },
      { label: "B", text: "黑白灰套装，剪裁利落，拍照和日常看着都很干净" },
      { label: "C", text: "工装外套、硬挺长裤、厚底靴，风大也照样稳" },
      { label: "D", text: "球鞋、短夹克、运动感背包，随时可以快步出发" }
    ]
  },
  {
    part: "归途",
    title: "一整趟世界杯观赛之旅结束后，你最像哪种人？",
    options: [
      { label: "A", text: "还没回家就开始二刷照片，反复回味名场面" },
      { label: "B", text: "会认真复盘路线、餐厅、交通，顺手总结攻略" },
      { label: "C", text: "默默把票根和小物收好，之后很久都还记得细节" },
      { label: "D", text: "赶紧约下一趟，觉得旅行最好玩的地方是有人一起去" }
    ]
  },
  {
    part: "归途",
    title: "返程去机场前重新收行李时，你最先放进去的是什么？",
    options: [
      { label: "A", text: "这几天最常穿、也最有这趟旅行感觉的那套衣服" },
      { label: "B", text: "分装整齐的收纳袋和行程本，还是想按顺序收好" },
      { label: "C", text: "充电宝、常备药、证件这些关键东西，先确认一遍" },
      { label: "D", text: "路上临时买到的小物件，哪怕不知道怎么用也想带回去" }
    ]
  },
  {
    part: "归途",
    title: "回机场的路上，你最想再经过哪种城市街区？",
    options: [
      { label: "A", text: "色彩浓烈、音乐和风一起往外冒的街区" },
      { label: "B", text: "建筑漂亮、秩序在线、每条街都很有审美的城市中心" },
      { label: "C", text: "冷硬一点、厚重一点、越看越有力量感的老城区" },
      { label: "D", text: "年轻、明快、到处都有新店和新玩法的街区" }
    ]
  }
];

const RESULT_MAP = {
  AAAA: "ARG",
  DAAA: "BRA",
  AABA: "FRA",
  AADA: "ENG",
  BBBA: "ESP",
  CCBB: "GER",
  AABB: "POR",
  DBBA: "NED",
  ADCD: "KOR",
  AADD: "MEX",
  DDDD: "USA",
  DCCD: "CAN",
  CCCA: "MAR",
  CBCA: "CRO",
  CCCD: "URU",
  DDCD: "NOR"
};

const TEAM_ORDER = ["ARG", "BRA", "FRA", "ENG", "ESP", "GER", "POR", "NED", "KOR", "MEX", "USA", "CAN", "MAR", "CRO", "URU", "NOR"];

const TEAM_DATA = {
  ARG: { title: "阿根廷", flag: "🇦🇷", label: "命运浪漫型" },
  BRA: { title: "巴西", flag: "🇧🇷", label: "快乐天赋型" },
  FRA: { title: "法国", flag: "🇫🇷", label: "全能配置型" },
  ENG: { title: "英格兰", flag: "🏴", label: "话题主场型" },
  ESP: { title: "西班牙", flag: "🇪🇸", label: "控场审美型" },
  GER: { title: "德国", flag: "🇩🇪", label: "硬核执行型" },
  POR: { title: "葡萄牙", flag: "🇵🇹", label: "英雄时刻型" },
  NED: { title: "荷兰", flag: "🇳🇱", label: "理想先锋型" },
  KOR: { title: "韩国", flag: "🇰🇷", label: "逆风燃魂型" },
  MEX: { title: "墨西哥", flag: "🇲🇽", label: "节日能量型" },
  USA: { title: "美国", flag: "🇺🇸", label: "新潮主场型" },
  CAN: { title: "加拿大", flag: "🇨🇦", label: "成长陪伴型" },
  MAR: { title: "摩洛哥", flag: "🇲🇦", label: "坚韧逆袭型" },
  CRO: { title: "克罗地亚", flag: "🇭🇷", label: "韧性史诗型" },
  URU: { title: "乌拉圭", flag: "🇺🇾", label: "硬派战魂型" },
  NOR: { title: "挪威", flag: "🇳🇴", label: "未来新势力型" }
};

const appState = {
  currentIndex: -1,
  answers: Array(QUESTIONS.length).fill(null)
};

const hero = document.querySelector(".hero");
const startButton = document.querySelector("#start-button");
const quizPanel = document.querySelector("#quiz-panel");
const resultPanel = document.querySelector("#result-panel");
const partLabel = document.querySelector("#part-label");
const questionIndex = document.querySelector("#question-index");
const progressText = document.querySelector("#progress-text");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const optionsList = document.querySelector("#options-list");
const homeButton = document.querySelector("#home-button");
const prevButton = document.querySelector("#prev-button");
const nextButton = document.querySelector("#next-button");
const resultPhase = document.querySelector("#result-phase");
const resultFlag = document.querySelector("#result-flag");
const resultTitle = document.querySelector("#result-title");
const copyButton = document.querySelector("#copy-button");
const restartButton = document.querySelector("#restart-button");

function showQuiz() {
  hero.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  resultPanel.classList.add("hidden");
}

function showHome() {
  hero.classList.remove("hidden");
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
}

function showResult() {
  hero.classList.add("hidden");
  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");
}

function option(label, text) {
  return { label, text };
}

function renderQuestion(index) {
  const total = QUESTIONS.length;
  const answer = appState.answers[index];

  partLabel.textContent = QUESTIONS[index].part;
  partLabel.classList.remove("hidden");
  questionIndex.textContent = `Q${index + 1}`;
  progressText.textContent = `${index + 1} / ${total}`;
  progressFill.style.width = `${((index + 1) / total) * 100}%`;
  questionText.textContent = QUESTIONS[index].title;

  optionsList.innerHTML = "";
  QUESTIONS[index].options.forEach((item, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answer === optionIndex) {
      button.classList.add("selected");
    }

    const marker = document.createElement("span");
    marker.className = "option-label";
    marker.textContent = item.label;

    const text = document.createElement("span");
    text.className = "option-text";
    text.textContent = item.text;

    button.append(marker, text);
    button.addEventListener("click", () => {
      appState.answers[index] = optionIndex;
      renderQuestion(index);
    });

    optionsList.appendChild(button);
  });

  prevButton.disabled = index === 0;
  nextButton.disabled = answer === null;
  nextButton.textContent = index === QUESTIONS.length - 1 ? "查看最终结果" : "下一题";
}

function moveToQuestion(index) {
  appState.currentIndex = index;
  showQuiz();
  renderQuestion(index);
}

function earliestTieWinner(questionIndexes) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  const firstSeen = { A: Infinity, B: Infinity, C: Infinity, D: Infinity };

  questionIndexes.forEach((questionIndex, order) => {
    const answerIndex = appState.answers[questionIndex];
    if (answerIndex === null) {
      return;
    }
    const label = ["A", "B", "C", "D"][answerIndex];
    counts[label] += 1;
    firstSeen[label] = Math.min(firstSeen[label], order);
  });

  return ["A", "B", "C", "D"].sort((left, right) => {
    if (counts[right] !== counts[left]) {
      return counts[right] - counts[left];
    }
    return firstSeen[left] - firstSeen[right];
  })[0];
}

function buildResultCode() {
  const groups = [
    [4, 7, 8, 14],
    [1, 2, 3, 6],
    [9, 10, 11, 13],
    [0, 5, 12, 15]
  ];
  return groups.map((indexes) => earliestTieWinner(indexes)).join("");
}

function getFallbackTeam(code) {
  const ranked = Object.entries(RESULT_MAP).map(([coreCode, teamCode]) => {
    let overlap = 0;
    for (let i = 0; i < 4; i += 1) {
      if (coreCode[i] === code[i]) {
        overlap += 1;
      }
    }
    return { coreCode, teamCode, overlap };
  }).sort((left, right) => {
    if (right.overlap !== left.overlap) {
      return right.overlap - left.overlap;
    }
    return left.coreCode.localeCompare(right.coreCode);
  });

  return ranked[0].teamCode;
}

function buildResult() {
  const resultCodeValue = buildResultCode();
  const teamCode = RESULT_MAP[resultCodeValue] || getFallbackTeam(resultCodeValue);
  return TEAM_DATA[teamCode];
}

function renderResult() {
  const team = buildResult();
  resultPhase.textContent = "World Cup 2026";
  resultPhase.classList.remove("hidden");
  resultTitle.textContent = team.title;
  resultFlag.textContent = team.flag;
  showResult();
}

startButton.addEventListener("click", () => moveToQuestion(0));
homeButton.addEventListener("click", showHome);

prevButton.addEventListener("click", () => {
  if (appState.currentIndex > 0) {
    moveToQuestion(appState.currentIndex - 1);
  }
});

nextButton.addEventListener("click", () => {
  if (appState.currentIndex < QUESTIONS.length - 1) {
    moveToQuestion(appState.currentIndex + 1);
  } else {
    renderResult();
  }
});

restartButton.addEventListener("click", () => {
  appState.currentIndex = 0;
  appState.answers = Array(QUESTIONS.length).fill(null);
  moveToQuestion(0);
});

copyButton.addEventListener("click", async () => {
  const team = buildResult();
  const text = `我的 2026 世界杯人格是「${team.title} · ${team.label}」`;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "已复制";
    setTimeout(() => { copyButton.textContent = "复制结果文案"; }, 1200);
  } catch {
    copyButton.textContent = "复制失败";
    setTimeout(() => { copyButton.textContent = "复制结果文案"; }, 1200);
  }
});

showHome();
