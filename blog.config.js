// 注: process.env.XX是Vercel的环境变量
// https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',

  // Important page_id
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5'

  THEME: process.env.NEXT_PUBLIC_THEME || 'simple',

  LANG: process.env.NEXT_PUBLIC_LANG || 'ja-JP',

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021,

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,

  NEXT_REVALIDATE_SECOND:
    process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,

  APPEARANCE:
    process.env.NEXT_PUBLIC_APPEARANCE || 'light',

  APPEARANCE_DARK_TIME:
    process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR:
    process.env.NEXT_PUBLIC_AUTHOR || 'ヨナCEO',

  BIO:
    process.env.NEXT_PUBLIC_BIO ||
    'Life Asset OS 運営責任者。2,500万円への航路。',

  LINK:
    process.env.NEXT_PUBLIC_LINK ||
    'https://notion-next-gilt-kappa.vercel.app',

  KEYWORDS:
    process.env.NEXT_PUBLIC_KEYWORDS ||
    '投資,AI,行動経済学,資産形成',

  BLOG_FAVICON:
    process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  BEI_AN:
    process.env.NEXT_PUBLIC_BEI_AN || '',

  BEI_AN_LINK:
    process.env.NEXT_PUBLIC_BEI_AN_LINK ||
    'https://beian.miit.gov.cn/',

  BEI_AN_GONGAN:
    process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  ENABLE_RSS:
    process.env.NEXT_PUBLIC_ENABLE_RSS || true,

  // 复杂配置
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),

  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // 外部资源
  CUSTOM_EXTERNAL_JS: [],
  CUSTOM_EXTERNAL_CSS: [],

  // 菜单
  CUSTOM_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_MENU || true,

  // 文章复制
  CAN_COPY:
    process.env.NEXT_PUBLIC_CAN_COPY || true,

  // 侧栏布局
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE ||
    false,

  // 欢迎语
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi,私はヨナCEOです,資産形成ブログへようこそ',

  // uuid跳转
  UUID_REDIRECT:
    process.env.UUID_REDIRECT || false
}

module.exports = BLOG
