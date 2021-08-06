import type { Translations } from "./data";

import locale from "@angular/common/locales/zh-Hant";
import dateFnsLocale from "date-fns/locale/zh-TW";

const translations: Translations = {
  // UI
  updatedAt: "更新於 {$INTERPOLATION}",
  name: "名稱",
  total: "總計",
  subscribers: "訂閱",
  views: "觀看",
  lastDay: "日增",
  last7Days: "週增",
  last30Days: "月增",
  youtubeChannel: "YouTube 頻道",
  bilibiliChannel: "Bilibili 頻道",
  youtubeStream: "YouTube 直播",
  youtubeSchedule: "YouTube 預定直播",
  settings: "設定",
  toggleDarkMode: "切換夜間模式",
  averageViewers: "平均同接",
  maximumViewers: "最高同接",
  streamHasEnded: "直播結束",
  streaming: "正在直播",
  streamStartTime: "開始時間",
  streamDuration: "持續時間",
  youtubeSubscribers: "YouTube 訂閱",
  bilibiliSubscribers: "Bilibili 訂閱",
  youtubeViews: "YouTube 觀看",
  bilibiliViews: "Bilibili 播放",
  vtuberSelected: "已選取的 VTuber",
  selectLanguage: "選擇語言",
  recentStreams: "近期直播",
  streamViewers: "直播同接",
  watchLiveByHolotool: "使用 holotools 觀看直播",
  youtubeChannelEX: "YouTube 頻道影片",
  videoCount: "影片數",
  weeklyVideo: "周增短片",
  weeklyLive: "周增直播",
  weeklyDuration: "周影片時數",
  monthlyVideo: "月增短片",
  monthlyLive: "月增直播",
  monthlyDuration: "月影片時數",
  selectDate: "選擇日期",

  // VTubers
  ahiruibi: "鴨鴨伊比 Ahiru Ibi",
  amamiyayume: "雨宮夢 YUME Channel",
  aoi: "夏日葵",
  asa: "Asa Ifrit Ch.",
  ayamizuka: "綾瑞香 AyaMizuKa",
  balaenmlnam: "巴蘭利維坦 Balaen Leviathan Ch.",
  beryllulu: "貝莉莓Vタイプ TYPE",
  chilla: "祈菈‧貝希毛絲 ch.Narrator/STORIA",
  choco: "邱可 Choco",
  fengxu: "風絮 FengXu Ch.",
  fifteen: "十五號 No.Fifteen",
  fujinokuma: "藤乃熊 Fujinokuma",
  gentotaitan: "弦戶帝丹 Gento Taitan ch.",
  haruka: "星見遙 Haruka",
  healingluka: "希靈 Healing Ch.",
  himemiyayuka: "姬宮優花 Himemiya Yuka",
  hoonie: "β虎妮 Hoonie friends",
  ikusen: "いくせん Ikusen",
  jimu0918: "吉姆 Jimu. Channel",
  kaina: "灰名 Kaina",
  kurita: "鼠屋栗太 Kurita",
  kwakon: "小空 KITSUNEKON",
  lapis: "綾賢ラピス Ryoken Lapis",
  lumina: "Lumina",
  lutra: "露恰露恰 Lutralutra Ch.",
  miamya: "瀰婭ミア MiaMya",
  mirotabasco: "塔芭絲可 Ch. Tabasuko",
  miru: "杏仁ミル Annin Miru",
  noerelive0101: "",
  nyoro: "香草奈若 Vanilla Nyoro",
  obear: "歐貝爾 Obear Ch.",
  pedko: "平平子 Padko",
  proose: "布魯斯頻道 Proose ch.",
  queenie: "祈霓722 Ch.",
  rana: "鳥羽樂奈 TobaRana",
  rayer: "蕾兒 Rayer",
  rhe850726: "噓你吉娃娃 Virtual Chihuahua Ch.",
  rumi0813: "Rumi ch. 懶貓子",
  ruroro: "璐洛洛 Ruroro",
  rutanbuna: "土芒果社-蘆棠布奈",
  sakuranoruu: "櫻野露 露露TIME",
  sanmou: "三毛毛毛 SanMou",
  shalalavtuber: "蝦拉拉 Shalala",
  shaya: "莎亞 Shaya",
  silverbell: "銀鈴 Silverbell Ch.",
  sitwvtuber: "浠 Mizuki Channel",
  soysaucexd: "醬油Mochi",
  sudayoruka: "須多夜花·ヨルカ ch.",
  tedobear: "虛擬熊頭 TedoBear",
  tedobear2: "泰多貝亞 TedoBear",
  tendododo1129: "天堂密室 Tendo ch.",
  tsmatch: "火柴 TSMATCH",
  twsiriya: "希莉亞 Siriya",
  ubye: "悠白 Ubye",
  umihimeiriya: "海姬依莉亞·イリヤ ch.",
  usagi: "兔姬 USAGIHIME CLUB.",
  woofwoffle: "嗚夫沃夫 Woof Woffle ch.",
  yumemi: "雲之上夢見 YumemiChannel",
  yuna: "水野魚娜 Mizuno yuna",
  zasasa: "夏莎莎 Zasasa",

  // Batches
};

export default translations;

export { locale, dateFnsLocale, translations };
