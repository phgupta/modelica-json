const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class For_indexVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFor_index(ctx) {
        var ident = ctx.IDENT().getText();
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var temStr = '';
        temStr += ident;
        if (expression_1 != null) {
            temStr += " in " + expression_1;
        }
        return String(temStr);
        //return new For_index(ident, expression_1);
    }
}

module.exports = { For_indexVisitor: For_indexVisitor }

//     private static class For_indexVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFor_index(modelicaParser.For_indexContext ctx) {
//         String ident = ctx.IDENT().getText();
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         String expression_1 = 
//         		ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);
//         StringBuilder temStr = new StringBuilder();
//         temStr.append(ident);
//         if (expression_1 != null) {
//         	temStr.append(" in ").append(expression_1);
//         }
//         return temStr.toString();
//         //return new For_index(ident, expression_1);
//       }
//     }