const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class For_statementVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFor_statement(ctx) {
        var temStr = "";
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
        //return new For_statement(for_indices_1, statement_1);
    }
}

module.exports = { StoredDefinitionVisitor: StoredDefinitionVisitor }

//     private static class For_statementVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFor_statement(modelicaParser.For_statementContext ctx) {
//     	  String temStr = "";
//     	  if (ctx.getText().isEmpty()) {
//     		  temStr = null;
//     	  } else {
//     		  int a = ctx.start.getStartIndex();
//  	  	  	  int b = ctx.stop.getStopIndex();
//  	  	  	  Interval interval = new Interval(a,b);
//  	  	  	  CharStream charStr = ctx.start.getInputStream();
//  	  	      temStr = charStr.getText(interval).trim();
//    	   	  }
//         return temStr;
//         //return new For_statement(for_indices_1, statement_1);
//       }
//     }