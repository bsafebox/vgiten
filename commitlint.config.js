module.exports = {
    extends:['@commitlint/config-conventional'],// 默认继承
     // parserPreset: 'conventional-changelog-conventionalcommits',
    rules:{
        'scope-empty':[0,'never'], // scope非必填
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
                'start-case' // Start Case
            ]
        ],
        'subject-case':[
            2,'always',
            [
                'lower-case', // default
                'upper-case', // UPPERCASE
                'camel-case', // camelCase
                'kebab-case', // kebab-case
                'pascal-case', // PascalCase
                'sentence-case', // Sentence case
                'snake-case', // snake_case
                'start-case' // Start Case
            ]
        ]
    }
}