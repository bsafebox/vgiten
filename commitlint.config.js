module.exports = {
  extends: ['@commitlint/config-conventional'], // 默认继承
  // parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'scope-empty': [0, 'never'], // scope非必填
    'scope-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
    'subject-case': [
      2,
      'always',
      [
        'lower-case', // default
        'upper-case', // UPPERCASE
        'camel-case', // camelCase
        'kebab-case', // kebab-case
        'pascal-case', // PascalCase
        'sentence-case', // Sentence case
        'snake-case', // snake_case
        'start-case', // Start Case
      ],
    ],
  },
  ignores: [commit => commit === ''],
  prompt: {
    messages: {
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
    },
    questions: {
      type: {
        description: '请选择您本次提交变更类型:',
        enum: {
          feat: {
            description: '新功能',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '解决Bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '文档更新',
            title: 'Documentation',
            emoji: '📚',
          },
          // style: {
          //   description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
          //   title: 'Styles',
          //   emoji: '💎',
          // },
          perf: {
            description: '性能优化',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '增加测试代码或更新测试代码',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '编译环境更新:引入lib 或者更新lib version',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: '持续集成脚本更新',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: '其他更新,不涉及源码功能',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '回退之前commit',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '本次改变影响范围(e.g. component or file name)',
      },
      subject: {
        description: '本次修改内容的简短说明',
      },
      body: {
        description: 'Provide a longer description of the change',
      },
      isBreaking: {
        description: 'Are there any breaking changes?',
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      },
      breaking: {
        description: 'Describe the breaking changes',
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?',
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};
