// 第 5 课：作品数据。
//
// 每个对象代表一个作品。**数据和界面完全分开**——
// 想加一个作品，只在这里加一个对象，HTML 一个字都不用动。
// 这是本课最重要的一个观念。
//
// 六个字段各管一件事：
//   title        卡片标题
//   description  一句话说明
//   image        封面图路径
//   url          点击去哪
//   year         年份，用来排序和显示右上角徽标
//   tags         标签数组，用来筛选。一个作品可以有多个标签
const works = [
  {
    title: '软件实训 · 智能评价系统',
    description: 'AI 驱动的实训评价系统，查看图文项目介绍。',
    image: 'assets/work-eval.jpg',
    url: 'eval-system.html',
    year: 2026,
    tags: ['前端', 'AI', '数据库'],
  },
  {
    title: 'HotspotInsight · 热榜洞察',
    description: '技术、行业、品牌热点的搜索门户。',
    image: 'assets/work-hotspot.png',
    url: 'https://ffd-p3-community.netlify.app/',
    year: 2025,
    tags: ['前端', '数据库', '部署'],
  },
]
