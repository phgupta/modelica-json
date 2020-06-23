const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class SubscriptVisitor extends ModelicaVisitor.modelicaVisitor {

    visitSubscript(ctx) {
        var colon = String(ctx.SYMBOL_COLON() == null ? null : ctx.SYMBOL_COLON().getText());
        var expressionVisitor = new ExpressionVisitor();
        var expression = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var subStr = String(colon != null ? colon : expression);
        return subStr;    	  
        //return new Subscript(expression);
    }
}

module.exports = { SubscriptVisitor: SubscriptVisitor }

//     private static class SubscriptVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitSubscript(modelicaParser.SubscriptContext ctx) {
//     	  String colon = 
//     			  ctx.SYMBOL_COLON() == null ? null : ctx.SYMBOL_COLON().getText();
//     	  ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//     	  String expression = 
//     			  ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);
//     	  String subStr = 
//     			  colon != null ? colon : expression;
//     	  return subStr;    	  
//     	  //return new Subscript(expression);
//       }
//     }