const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class For_equationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFor_equation(ctx) {
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
        //return new For_equation(for_indices_1, equation_1);
    }
}

module.exports = { For_equationVisitor: For_equationVisitor }

//     private static class For_equationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFor_equation(modelicaParser.For_equationContext ctx) {
//     	  String temStr = "";
//     	   if (ctx.getText().isEmpty()) {
//     		   temStr = null;
//     	   } else {
//     		   int a = ctx.start.getStartIndex();
//   	  	  	   int b = ctx.stop.getStopIndex();
//   	  	  	   Interval interval = new Interval(a,b);
//   	  	  	   CharStream charStr = ctx.start.getInputStream();
//   	  	       temStr = charStr.getText(interval).trim();
//     	   }   
//         return temStr;       
//         //return new For_equation(for_indices_1, equation_1);
//       }
//     }