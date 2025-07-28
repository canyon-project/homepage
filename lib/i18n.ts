export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語'
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    title: "Canyon",
    subtitle: "More accurate JavaScript coverage data collection",
    description: "Canyon (pronounced /ˈkænjən/) enables JavaScript coverage collection and real-time report generation through simple Babel configuration, solving the challenge of coverage collection in end-to-end testing.",
    getStarted: "Get Started",
    githubRepo: "GitHub Repository",
    features: "Features",
    featuresDesc: "Canyon is designed for JavaScript end-to-end test coverage collection with the following features:",
    community: "Community",
    communityDesc: "Canyon was created by ",
    communityDescAuthor: "travzhang",
    communityDescFollow: ". Follow ",
    communityDescTwitter: "@wr_zhang25",
    communityDescEnd: " for project updates.",
    joinDiscussions: "Join the GitHub Discussions!",
    copyright: "© 2024 Canyon. More accurate JavaScript coverage data collection.",
    nav: {
      features: "Features",
      community: "Community",
      github: "GitHub"
    },
    featureCards: {
      accurate: {
        title: "Accurate and Efficient",
        desc: "Separate hit and map data, generate initial coverage data during compilation for accurate and efficient coverage data collection"
      },
      sourcemap: {
        title: "SourceMap",
        desc: "Accurate source code coverage restoration"
      },
      buildTools: {
        title: "Build Tools",
        desc: "Coverage solutions for common build tools like next.js, vite, webpack"
      },
      automation: {
        title: "Automation Frameworks",
        desc: "Integration solutions for common UI automation frameworks"
      },
      ci: {
        title: "CI Providers",
        desc: "Compatible with common CI providers (Github Actions, GitLab Runner), detecting CI environment variables"
      }
    }
  },
  zh: {
    title: "Canyon",
    subtitle: "更准确的 JavaScript 覆盖率数据收集",
    description: "Canyon（发音 /ˈkænjən/）通过简单的 Babel 配置实现 JavaScript 覆盖率收集和实时报告生成，解决端到端测试中覆盖率收集的挑战。",
    getStarted: "开始使用",
    githubRepo: "GitHub 仓库",
    features: "功能特性",
    featuresDesc: "Canyon 专为 JavaScript 端到端测试覆盖率收集而设计，具有以下特性：",
    community: "社区",
    communityDesc: "Canyon 由 ",
    communityDescAuthor: "travzhang",
    communityDescFollow: " 创建。关注 ",
    communityDescTwitter: "@wr_zhang25",
    communityDescEnd: " 获取项目更新。",
    joinDiscussions: "加入 GitHub 讨论！",
    copyright: "© 2024 Canyon. 更准确的 JavaScript 覆盖率数据收集。",
    nav: {
      features: "功能特性",
      community: "社区",
      github: "GitHub"
    },
    featureCards: {
      accurate: {
        title: "准确高效",
        desc: "分离命中和映射数据，在编译期间生成初始覆盖率数据，实现准确高效的覆盖率数据收集"
      },
      sourcemap: {
        title: "源码映射",
        desc: "准确的源代码覆盖率恢复"
      },
      buildTools: {
        title: "构建工具",
        desc: "为 next.js、vite、webpack 等常见构建工具提供覆盖率解决方案"
      },
      automation: {
        title: "自动化框架",
        desc: "为常见 UI 自动化框架提供集成解决方案"
      },
      ci: {
        title: "CI 提供商",
        desc: "兼容常见 CI 提供商（Github Actions、GitLab Runner），检测 CI 环境变量"
      }
    }
  },
  ja: {
    title: "Canyon",
    subtitle: "より正確な JavaScript カバレッジデータ収集",
    description: "Canyon（発音 /ˈkænjən/）は、シンプルな Babel 設定を通じて JavaScript カバレッジ収集とリアルタイムレポート生成を可能にし、エンドツーエンドテストでのカバレッジ収集の課題を解決します。",
    getStarted: "始める",
    githubRepo: "GitHub リポジトリ",
    features: "機能",
    featuresDesc: "Canyon は JavaScript エンドツーエンドテストカバレッジ収集のために設計されており、以下の機能を備えています：",
    community: "コミュニティ",
    communityDesc: "Canyon は ",
    communityDescAuthor: "travzhang",
    communityDescFollow: " によって作成されました。プロジェクトの更新については ",
    communityDescTwitter: "@wr_zhang25",
    communityDescEnd: " をフォローしてください。",
    joinDiscussions: "GitHub ディスカッションに参加！",
    copyright: "© 2024 Canyon. より正確な JavaScript カバレッジデータ収集。",
    nav: {
      features: "機能",
      community: "コミュニティ",
      github: "GitHub"
    },
    featureCards: {
      accurate: {
        title: "正確で効率的",
        desc: "ヒットデータとマップデータを分離し、コンパイル時に初期カバレッジデータを生成して、正確で効率的なカバレッジデータ収集を実現"
      },
      sourcemap: {
        title: "ソースマップ",
        desc: "正確なソースコードカバレッジの復元"
      },
      buildTools: {
        title: "ビルドツール",
        desc: "next.js、vite、webpack などの一般的なビルドツールのカバレッジソリューション"
      },
      automation: {
        title: "自動化フレームワーク",
        desc: "一般的な UI 自動化フレームワークの統合ソリューション"
      },
      ci: {
        title: "CI プロバイダー",
        desc: "一般的な CI プロバイダー（Github Actions、GitLab Runner）と互換性があり、CI 環境変数を検出"
      }
    }
  }
} as const;