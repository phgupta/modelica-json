const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Simple_expressionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitSimple_expression(ctx) {
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
        //return new Simple_expression(logical_expression1, logical_expression2, logical_expression3);
    }
}

module.exports = { Simple_expressionVisitor: Simple_expressionVisitor }

//     private static class Simple_expressionVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitSimple_expression(modelicaParser.Simple_expressionContext ctx) {
//     	  String temStr = "";
//     	   if (ctx.getText().isEmpty()) {
//     		   temStr = null;
//     	   } else {
//     		   int a = ctx.start.getStartIndex();
//    	  	  	   int b = ctx.stop.getStopIndex();
//    	  	  	   Interval interval = new Interval(a,b);
//    	  	  	   CharStream charStr = ctx.start.getInputStream();
//    	  	       temStr = charStr.getText(interval).trim();
//     	   }   	   
//     	  return temStr;   	  
//         //return new Simple_expression(logical_expression1, logical_expression2, logical_expression3);
//       }
//     }