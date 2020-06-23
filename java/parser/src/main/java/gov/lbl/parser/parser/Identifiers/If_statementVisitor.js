const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class If_statementVisitor extends ModelicaVisitor.modelicaVisitor {
    visitIf_statement(ctx) {
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
        //return new If_statement(expression1, statement1, expression2, statement2, statement3);
    }
}

module.exports = { If_statementVisitor: If_statementVisitor }

//     private static class If_statementVisitor extends modelicaBaseVisitor<String> {
// 	@Override
//       public String visitIf_statement(modelicaParser.If_statementContext ctx) {
//     	   String temStr = "";
//      	   if (ctx.getText().isEmpty()) {
//      		   temStr = null;
//      	   } else {
//      		   int a = ctx.start.getStartIndex();
//    	  	  	   int b = ctx.stop.getStopIndex();
//    	  	  	   Interval interval = new Interval(a,b);
//    	  	  	   CharStream charStr = ctx.start.getInputStream();
//    	  	       temStr = charStr.getText(interval).trim();
//      	   }
//         return temStr;
//         //return new If_statement(expression1, statement1, expression2, statement2, statement3);
//       }
//     }