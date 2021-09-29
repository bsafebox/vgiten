module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  globals: {},
  ecmaFeatures: {
    arrowFunctions: true, // lambda表达式
    destructuring: true, // 解构赋值
    classes: true, // class
    // http://es6.ruanyifeng.com/#docs/function#函数参数的默认值
    defaultParams: true,
    // 块级作用域，允许使用let const
    blockBindings: true,
    // 允许使用模块，模块内默认严格模式
    modules: true,
    // 允许字面量定义对象时，用表达式做属性名
    // http://es6.ruanyifeng.com/#docs/object#属性名表达式
    objectLiteralComputedProperties: true,
    /**
     * 对象字面量属性名简写
     */
    objectLiteralShorthandMethods: true,
  },
  rules: {
    // 定义对象的set存取器属性时，强制定义get
    'accessor-pairs': 2,
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    'array-bracket-spacing': [2, 'never'],
  },
};
