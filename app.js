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
    title: "真到了抢世界杯门票那一刻，你最想先锁定哪一种比赛体验？",
    options: [
      { label: "A", text: "揭幕战、焦点战这种全网都会讨论的高热度场次，先抢到再说" },
      { label: "B", text: "传统强队之间的经典对决，哪怕不是最炸也值得现场看一次" },
      { label: "C", text: "容易出黑马故事的比赛，过程和气氛可能比名气更精彩" },
      { label: "D", text: "话题还没完全起来的新鲜场次，越有未知感越想冲" }
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
  DCCD: "CPV",
  CCCA: "MAR",
  CBCA: "CRO",
  CCCD: "URU",
  DDCD: "NOR"
};

const TEAM_ORDER = ["ARG", "BRA", "FRA", "ENG", "ESP", "GER", "POR", "NED", "KOR", "MEX", "USA", "CPV", "MAR", "CRO", "URU", "NOR"];

const TEAM_DATA = {
  ARG: {
    title: "阿根廷",
    flag: "🇦🇷",
    badgeFile: "ARG.svg",
    label: "命运浪漫型",
    hook: "你不是随便看球，你是在等一段带宿命感的大剧情发生。",
    description: "你很容易被那种“越投入越有回报”的东西打动。你要的不是简单赢球，而是有故事、有起伏、有情绪的胜利，最好还能在最后时刻留下记忆点。你支持主队时很容易代入，嘴上说理性，心里其实早就跟着比赛一起走了。你和阿根廷的连接，更像是热血和浪漫放在一起之后产生的吸引力。",
    watchStyle: "找最懂你情绪的朋友一起看，赛前先立 flag，赛后不管输赢都要发一条很有故事感的朋友圈。",
    chant: "这一场，我支持的不只是比分。",
    shareCopy: "我的主队，自带故事感"
  },
  BRA: {
    title: "巴西",
    flag: "🇧🇷",
    badgeFile: "BRA.svg",
    label: "快乐天赋型",
    hook: "你相信厉害这件事，最好还能顺便把全场变成秀场。",
    description: "你不喜欢无聊，也不喜欢把热爱变得太沉重。对你来说，最吸引人的状态是有灵感、有创造力，而且看着很自然。你会被那种自由、松弛、关键时刻又能给出变化的气质吸引。你不只是想看结果，你也在意比赛是怎么赢下来的。所以巴西对你来说，不只是主队，更像是一种看球时最舒服的节奏。",
    watchStyle: "多人局最佳，零食、音乐、弹幕、欢呼一个都不能少，进球后最好能立刻起身庆祝。",
    chant: "好看的球，才配我的尖叫。",
    shareCopy: "我支持天赋流快乐足球"
  },
  FRA: {
    title: "法国",
    flag: "🇫🇷",
    badgeFile: "FRA.svg",
    label: "全能配置型",
    hook: "你喜欢强者，但要那种强得轻松、强得有审美的版本。",
    description: "你对“厉害”有自己的标准，不只是热闹，不只是名气，而是配置高、上限高、关键时刻还能稳定兑现。你欣赏那种天赋密度很高、风格又不单一的存在，看起来有点冷静，实际上压迫感很强。你和法国型主队的适配点在于：既要实力在线，也要气质在线，最好还能让人感叹一句，怎么连赢都这么有风格。",
    watchStyle: "大屏、好座位、好画质，最好边看边点评，享受那些处理得很漂亮的瞬间。",
    chant: "我支持的，是完成度很高的强队。",
    shareCopy: "强，是一种很时髦的事"
  },
  ENG: {
    title: "英格兰",
    flag: "🏴",
    badgeFile: "ENG.svg",
    label: "话题主场型",
    hook: "你看重的不只是比赛本身，还有那种全世界都在讨论的参与感。",
    description: "你很容易被“阵容豪华、话题不断、每场都像大场面”的主队吸引。你不是跟风，只是清楚有些舞台天然更容易聚焦目光。你喜欢期待一点点堆起来的过程，也享受和朋友一起分析、吐槽、预测和讨论。英格兰型适合你的地方在于，它总能让看球这件事同时变成社交现场和情绪现场，你看的不只是比赛，也是在看整个氛围。",
    watchStyle: "开群聊、看讨论、边看边聊，最好随时有人接得上你的话。",
    chant: "大场面，当然要站在话题中心。",
    shareCopy: "我和主队一起占据讨论区"
  },
  ESP: {
    title: "西班牙",
    flag: "🇪🇸",
    badgeFile: "ESP.svg",
    label: "控场审美型",
    hook: "你会为秩序、细节和漂亮的整体感认真投入。",
    description: "你对“好看”的定义很高，不是花哨，而是精确、流畅、每一步都像提前写好分镜。你喜欢局势被慢慢拿住的感觉，也喜欢那种不靠吼、不靠炸、靠节奏和技术就能让人服气的强大。西班牙型主队很适合你，因为你看重的是过程的完成度，甚至有时候，一场很美的控制本身，就已经是一种胜利。",
    watchStyle: "安静看，全程投入，看到某个细节配合时会忍不住轻轻点头。",
    chant: "真正的强，是把节奏握在手里。",
    shareCopy: "我喜欢把比赛踢成艺术"
  },
  GER: {
    title: "德国",
    flag: "🇩🇪",
    badgeFile: "GER.svg",
    label: "硬核执行型",
    hook: "你会被那种不废话、真能把事做成的力量感打动。",
    description: "你不太吃虚的东西。比起热闹叙事，你更尊重效率、纪律和关键时刻能扛住的人。你欣赏那种看似朴素，但每一步都很扎实的强大，也相信真正可靠的东西从来不靠运气。德国型主队和你的适配感，在于它给你的不是漂浮的幻想，而是一种“只要体系在线，就能把局面做出来”的踏实感，硬，但很稳。",
    watchStyle: "少说废话，认真看过程，赛后复盘比赛时欢呼还认真。",
    chant: "赢，不靠玄学，靠执行。",
    shareCopy: "我站的是硬核实力派"
  },
  POR: {
    title: "葡萄牙",
    flag: "🇵🇹",
    badgeFile: "POR.svg",
    label: "英雄时刻型",
    hook: "你天生会被那种关键时刻能站出来的人和故事吸走注意力。",
    description: "你看比赛时很在意“谁来定义这一刻”。你欣赏个人魅力，也相信大场面需要真正能承担压力的人。你不排斥整体体系，但更容易被那种在关键时刻站出来的人吸引。葡萄牙型对你来说很合适，因为它既有细节感，也有戏剧性，既能让你看到整体，也会让你记住某个名字、某个瞬间。",
    watchStyle: "把关键镜头多看几遍，赛后第一时间收藏你最想留下的画面。",
    chant: "关键时刻，总要有人站出来。",
    shareCopy: "我喜欢看决定比赛的人出现"
  },
  NED: {
    title: "荷兰",
    flag: "🇳🇱",
    badgeFile: "NED.svg",
    label: "理想先锋型",
    hook: "你喜欢有体系的浪漫，也喜欢和“普通答案”保持一点距离。",
    description: "你不是会被热闹轻易带着跑的人。你更容易喜欢那些有自己想法、有方法、甚至带一点理想主义色彩的存在。你欣赏创造，也欣赏结构，最好两者能同时成立。荷兰型主队适合你的地方在于，它不是最保险的选项，却总有一种特别的吸引力，让你觉得支持它本身就是一种表达。",
    watchStyle: "适合和会聊的人一起看，边看边交流观点，越聊越觉得有意思。",
    chant: "我支持的，不止是结果，还有理念。",
    shareCopy: "橙色浪漫，正合我胃口"
  },
  KOR: {
    title: "韩国",
    flag: "🇰🇷",
    badgeFile: "KOR.svg",
    label: "逆风燃魂型",
    hook: "你最容易被那种越难越冲、越压越爆的团队感点燃。",
    description: "你对热血的定义，不是空喊口号，而是明明很难还是全力往前。你会被速度感、拼劲、压迫感和整支队伍一起往前顶的状态吸引，因为那种逆风里的爆发很真实。韩国型主队很适合你，因为你看重的不是谁先被看好，而是谁能在高压里把士气带起来。你支持的，是那种一旦进入状态就很有感染力的团队。",
    watchStyle: "最适合和同样能喊的人一起看，越到后面越要站起来，主打一个情绪共振。",
    chant: "越是逆风，越要往前冲。",
    shareCopy: "我会为这样的团队一直看下去"
  },
  MEX: {
    title: "墨西哥",
    flag: "🇲🇽",
    badgeFile: "MEX.svg",
    label: "节日能量型",
    hook: "你需要的主队，不只是能看，还得能把气氛点到全场都发烫。",
    description: "你是那种会把观赛活成聚会的人。对你来说，一支主队最迷人的地方，是它能带来热烈感、参与感和一种“大家一起活过这一晚”的生命力。你不喜欢太端着的氛围，你要的是热情、是欢呼、是即使有波动也能继续往前燃的状态。墨西哥型主队对你很准，因为它能把每场比赛都踢出庆典感，而你刚好最吃这一套。",
    watchStyle: "适合多人观赛局，音乐开着，吃喝备足，进球时必须有人负责全场欢呼。",
    chant: "看球这件事，当然要尽兴。",
    shareCopy: "我的主队，自带节日气氛"
  },
  USA: {
    title: "美国",
    flag: "🇺🇸",
    badgeFile: "USA.svg",
    label: "新潮主场型",
    hook: "你喜欢新东西、快节奏和那种很会调动气氛的运动环境。",
    description: "你会被年轻、明快、娱乐感强的东西吸引，也很擅长在新趋势里快速找到乐趣。你不执着于传统答案，反而更容易对“正在长成主流”的新势力产生兴趣。美国型主队适合你，因为它带来的不仅是比赛，还有社交、潮流、话题和一种未来已经开始的感觉。你支持它，不是因为保守，而是因为你本来就习惯站在新叙事这边。",
    watchStyle: "边看边发内容最适合你，梗图、短视频、实时互动，一个都别少。",
    chant: "新主场时代，我先入场。",
    shareCopy: "我支持下一代世界杯气氛组"
  },
  CPV: {
    title: "佛得角",
    flag: "🇨🇻",
    badgeFile: "CPV.svg",
    label: "首秀硬扛型",
    hook: "你会为那种第一次站上大场面，就敢把强队硬生生拖进自己节奏里的气质上头。",
    description: "你不太迷信资历，更相信真正的硬气是在高压里站住。佛得角在 2026 年 6 月 15 日世界杯首秀里 0 比 0 逼平西班牙，这种不是靠运气混过去、而是靠纪律、执行和集体心气扛出来的比赛，很像你会偏爱的版本。你喜欢的不是空喊黑马，而是那种赛前不被看好、开场后却能让所有人重新评估的存在。你会被这种冷静、顽强、越顶压越清醒的表现打动。",
    watchStyle: "适合盯细节看，越是对手围着压，你越能看出这支队的门将、站位和每一次解围为什么值钱。",
    chant: "第一次来，不代表只能当背景板。",
    shareCopy: "我偏爱首秀就敢硬扛强队的黑马"
  },
  MAR: {
    title: "摩洛哥",
    flag: "🇲🇦",
    badgeFile: "MAR.svg",
    label: "坚韧逆袭型",
    hook: "你会为那种不被轻易击穿、越看越硬的主队真心服气。",
    description: "你不迷信排面，更尊重意志力。你喜欢看那些在高压里依然能守住节奏的存在，因为那种力量不是表演出来的，是一分一秒累积出来的。摩洛哥型主队适合你的地方在于，它带着黑马故事，但不是靠运气走到前面，而是靠坚韧和执行把每一步都走实。你会越来越欣赏这种低调但不容易被击倒的气质。",
    watchStyle: "适合沉浸式观看，越到关键时刻越安静，因为你知道真正的燃点常常发生在最顶压的那几分钟。",
    chant: "不轻易倒下，本身就是强大。",
    shareCopy: "我偏爱硬撑到最后的逆袭感"
  },
  CRO: {
    title: "克罗地亚",
    flag: "🇭🇷",
    badgeFile: "CRO.svg",
    label: "韧性史诗型",
    hook: "你相信真正动人的强，不一定最喧哗，但一定最能熬。",
    description: "你会被时间感和韧性打动。你欣赏那些经历很多、却依然能在关键时刻把自己拎起来的存在，也特别吃那种带一点悲壮、带一点不服输的美学。克罗地亚型主队很适合你，因为它让你感受到的不是简单的燃，而是一种越撑越有重量的力量。你支持它时，心里会自动给每一场比赛加上“这支队真的很能扛”的旁白。",
    watchStyle: "适合一个人或和老朋友一起看，越到胶着时刻越能看出它的味道。",
    chant: "真正的强，是把难局熬成名场面。",
    shareCopy: "我爱有重量的热血剧本"
  },
  URU: {
    title: "乌拉圭",
    flag: "🇺🇾",
    badgeFile: "URU.svg",
    label: "硬派战魂型",
    hook: "你欣赏那种不铺张、不服软、但每一下都很有分量的主队。",
    description: "你偏爱的强，从来不是浮在表面的高调，而是一种骨子里的斗志和传统感。你对“来真的”这件事特别敏感，也会天然尊重那些体量不夸张、气势却一点不小的存在。乌拉圭型主队会让你很有代入感，因为它身上有硬朗、有血性，也有一种小而强、小而硬的能量。你看它比赛，最容易被那种咬住不放的劲打动。",
    watchStyle: "适合认真看，不必太吵，但每个对抗、每个关键回合你都不会错过。",
    chant: "硬一点，才像真正的比赛。",
    shareCopy: "我站的是不服输硬派流"
  },
  NOR: {
    title: "挪威",
    flag: "🇳🇴",
    badgeFile: "NOR.svg",
    label: "未来新势力型",
    hook: "你对新势力天然敏感，尤其喜欢那种冷感外表下藏着爆发点的存在。",
    description: "你很懂“提前看见趋势”这件事带来的乐趣。你喜欢直接、有速度感的东西，也会被那种还在往上走、但已经显出锋芒的气质吸引。挪威型主队适合你的地方，在于它身上有未来感、有年轻感，还有一种看似冷静、其实随时可能提速的张力。你支持它，其实是在看一个很有前景的开头。",
    watchStyle: "适合边看边发“这队以后会很有东西”的判断，主打一个提前押中未来。",
    chant: "未来的风，先吹到我这边。",
    shareCopy: "我先看见了这支队的以后"
  }
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
const resultLabel = document.querySelector("#result-label");
const resultHook = document.querySelector("#result-hook");
const resultDescription = document.querySelector("#result-description");
const resultWatchStyle = document.querySelector("#result-watch-style");
const resultChant = document.querySelector("#result-chant");
const resultShareCopy = document.querySelector("#result-share-copy");
const copyButton = document.querySelector("#copy-button");
const restartButton = document.querySelector("#restart-button");

function getTeamByCode(teamCode) {
  return TEAM_DATA[teamCode] || null;
}

function getCurrentDisplayedTeam() {
  const code = resultPanel.dataset.teamCode || "";
  return getTeamByCode(code);
}

function getBadgeUrl(team) {
  return team.badgeFile ? `./assets/badges/${team.badgeFile}` : "";
}

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
  partLabel.classList.remove("eyebrow--departure", "eyebrow--travel", "eyebrow--return");
  if (QUESTIONS[index].part === "出发前") {
    partLabel.classList.add("eyebrow--departure");
  } else if (QUESTIONS[index].part === "旅途中") {
    partLabel.classList.add("eyebrow--travel");
  } else if (QUESTIONS[index].part === "归途") {
    partLabel.classList.add("eyebrow--return");
  }
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
  return getTeamByCode(teamCode);
}

function renderResult(teamOverride = null) {
  const team = teamOverride || buildResult();
  resultPanel.dataset.teamCode = TEAM_ORDER.find((code) => TEAM_DATA[code] === team) || "";
  if (resultPhase) {
    resultPhase.textContent = "你的主队测试结果是";
    resultPhase.classList.remove("hidden");
  }
  if (resultTitle) {
    resultTitle.textContent = team.title;
  }
  if (resultFlag) {
    const badgeUrl = getBadgeUrl(team);
    resultFlag.textContent = badgeUrl ? "" : team.title;
    resultFlag.setAttribute("aria-label", `${team.title}足协标志`);
    resultFlag.style.backgroundImage = badgeUrl ? `url("${badgeUrl}")` : "none";
  }
  if (resultLabel) {
    resultLabel.textContent = team.label;
  }
  if (resultHook) {
    resultHook.textContent = team.hook;
  }
  if (resultDescription) {
    resultDescription.textContent = team.description;
  }
  if (resultWatchStyle) {
    resultWatchStyle.textContent = team.watchStyle;
  }
  if (resultChant) {
    resultChant.textContent = team.chant;
  }
  if (resultShareCopy) {
    resultShareCopy.textContent = team.shareCopy;
  }
  showResult();
}

function tryRenderResultFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const resultCode = (params.get("result") || "").trim().toUpperCase();
  const team = getTeamByCode(resultCode);

  if (!team) {
    return false;
  }

  renderResult(team);
  return true;
}

function tryRenderQuestionFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const rawQuestion = (searchParams.get("question") || hashParams.get("question") || "").trim();
  if (!rawQuestion) {
    return false;
  }

  const questionNumber = Number.parseInt(rawQuestion, 10);
  if (!Number.isInteger(questionNumber) || questionNumber < 1 || questionNumber > QUESTIONS.length) {
    return false;
  }

  moveToQuestion(questionNumber - 1);
  return true;
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
  const team = getCurrentDisplayedTeam() || buildResult();
  const text = `我的 2026 世界杯人格是「${team.title} · ${team.label}」\n${team.hook}\n分享卡文案：${team.shareCopy}`;
  try {
    await navigator.clipboard.writeText(text);
    copyButton.textContent = "已复制";
    setTimeout(() => { copyButton.textContent = "复制结果文案"; }, 1200);
  } catch {
    copyButton.textContent = "复制失败";
    setTimeout(() => { copyButton.textContent = "复制结果文案"; }, 1200);
  }
});

if (!tryRenderResultFromUrl()) {
  if (!tryRenderQuestionFromUrl()) {
    showHome();
  }
}
