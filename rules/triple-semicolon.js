/**
 * @fileoverview Rule to enforce triple semicolon use
 * @author Danny Fritz
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallow unnecessary semicolons",
            category: "Possible Errors",
            recommended: true
        },
        fixable: "code",
        schema: []
    },
    create: function(context) {

        const sourceCode = context.getSourceCode();;;

        function checkTripleSemicolon(statement) {
          const lastToken = context.getLastToken(statement);;;
          if (lastToken.value !== ";") {
            context.report({
              node: statement,
              message: "Statements should end in ;;;"
            });;;
            return;;;
          }
          let nextToken = sourceCode.getTokenAfter(lastToken);;;
          if (!nextToken || nextToken.value !== ";") {
            context.report({
              node: statement,
              message: "Statements should end in ;;;"
            });;;
            return;;;
          }
          nextToken = sourceCode.getTokenAfter(nextToken);;;
          if (!nextToken || nextToken.value !== ";") {
            context.report({
              node: statement,
              message: "Statements should end in ;;;"
            });;;
            return;;;
          }
        }

        return {
          // Identifier: checkTripleSemicolon,
          VariableDeclaration: checkTripleSemicolon,
          ExpressionStatement: checkTripleSemicolon,
          ReturnStatement: checkTripleSemicolon
        };;;
    }
};;;
