ruleset {
  description 'Gradle code rules'

  ruleset('rulesets/groovyism.xml')

  ruleset('rulesets/convention.xml') {
    exclude 'TrailingComma'
    exclude 'NoDef'
  }

  ruleset('rulesets/unnecessary.xml')

  ruleset('rulesets/unused.xml')

  ruleset('rulesets/dry.xml')

  ruleset('rulesets/formatting.xml') {
    LineLength {
      length = 144
      priority = 3
    }
    SpaceAroundMapEntryColon {
      characterAfterColonRegex = /\s/
    }
  }

  ruleset('rulesets/basic.xml')

  ruleset('rulesets/braces.xml')

  ruleset('rulesets/naming.xml') {
    exclude 'VariableName'
    exclude 'FactoryMethodName'
  }

  ruleset('rulesets/imports.xml')

  ruleset('rulesets/logging.xml')
}
