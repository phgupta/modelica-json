const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Expression_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitExpression_list(ctx) {
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = ctx.expression()
                .stream()
                .map(expression => expression.accept(expressionVisitor))
                .collect(toList());
        var temStr = '';
        temStr += expression_1[0];
        if (expression_1.length > 1) {
            for (let i = 1; i < expression_1.length; i += 1) {
                temStr += "," + expression_1[i];
            }       	
        }
        return temStr.toString();
        //return new Expression_list(expression_1);
    }
}

module.exports = { Expression_listVisitor: Expression_listVisitor }

//     private static class Expression_listVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitExpression_list(modelicaParser.Expression_listContext ctx) {
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         List<String> expression_1 = ctx.expression()
//               .stream()
//               .map(expression -> expression.accept(expressionVisitor))
//               .collect(toList());
//         StringBuilder temStr = new StringBuilder();
//         temStr.append(expression_1.get(0));
//         if (expression_1.size()>1) {
//         	for (int i=1; i<expression_1.size(); i++) {
//         		temStr.append(",").append(expression_1.get(i));
//         	}       	
//         }
//         return temStr.toString();
//         //return new Expression_list(expression_1);
//       }
//     }