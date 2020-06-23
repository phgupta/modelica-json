const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Output_expression_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitOutput_expression_list(ctx) {
        var temStr = "";
        if (ctx.getText().isEmpty()) {
            temStr = null;
        } else {
            var a = Intctx.start.getStartIndex();
            var b = ctx.stop.getStopIndex();
            var interval = new Interval(a,b);
            var charStr = ctx.start.getInputStream();
            temStr = charStr.getText(interval).trim();
        }   	   
        return temStr;     
        //return new Output_expression_list(expression_1);
    }
}

module.exports = { Output_expression_listVisitor: Output_expression_listVisitor }

//     private static class Output_expression_listVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitOutput_expression_list(modelicaParser.Output_expression_listContext ctx) {
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
//         //return new Output_expression_list(expression_1);
//       }
//     }