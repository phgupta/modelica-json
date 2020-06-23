const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Condition_attributeVisitor extends ModelicaVisitor.modelicaVisitor {
    visitCondition_attribute(ctx) {
        var if_dec = ctx.IF().getText();
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = String(ctx.expression().accept(expressionVisitor));
        var temStr = '';
        var conAttStr = String(temStr + if_dec + " " + expression_1);
        return conAttStr;
        // return new Condition_attribute(if_dec, expression_1);
    }
}

module.exports = { Condition_attributeVisitor: Condition_attributeVisitor }

//     private static class Condition_attributeVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitCondition_attribute(modelicaParser.Condition_attributeContext ctx) {
//         String if_dec = ctx.IF().getText();
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         String expression_1 = ctx.expression().accept(expressionVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String conAttStr = temStr.append(if_dec).append(" ").append(expression_1).toString();
//         return conAttStr;
//         // return new Condition_attribute(if_dec, expression_1);
//       }
//     }