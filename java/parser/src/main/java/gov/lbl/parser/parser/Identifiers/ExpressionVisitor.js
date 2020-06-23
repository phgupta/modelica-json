const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class ExpressionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitExpression(ctx) {
        var temStr = '';
        if (ctx.getText().isEmpty()) {
            temStr = null;
        } else {
            var a = ctx.start.getStartIndex();
            var b = ctx.stop.getStopIndex();
            var interval = new Interval(a,b);
            var charStr = ctx.start.getInputStream();
            temStr = charStr.getText(interval).trim();
        }   
        return temStr;       		
        //return new Expression(simple_expression_1, expression1, expression2,
        //                      expression3, expression4, expression5);
    }
}

module.exports = { ExpressionVisitor: ExpressionVisitor }

//     private static class ExpressionVisitor extends modelicaBaseVisitor<String> {
// 	@Override
//       public String visitExpression(modelicaParser.ExpressionContext ctx) {
// 		String temStr = "";
//  	   if (ctx.getText().isEmpty()) {
//  		   temStr = null;
//  	   } else {
//  		   int a = ctx.start.getStartIndex();
// 	  	  	   int b = ctx.stop.getStopIndex();
// 	  	  	   Interval interval = new Interval(a,b);
// 	  	  	   CharStream charStr = ctx.start.getInputStream();
// 	  	       temStr = charStr.getText(interval).trim();
//  	   }   
//  	  return temStr;       		
//         //return new Expression(simple_expression_1, expression1, expression2,
//         //                      expression3, expression4, expression5);
//       }
//     }