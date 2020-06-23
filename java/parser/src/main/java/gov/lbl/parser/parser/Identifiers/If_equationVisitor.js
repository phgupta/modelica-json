const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class If_equationVisitor extends ModelicaVisitor.modelicaVisitor {   	
    visitIf_equation(ctx) {
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
        //return new If_equation(expression1, equation1, expression2, equation2, equation3);
    }
}

module.exports = { If_equationVisitor: If_equationVisitor }

//  private static class If_equationVisitor extends modelicaBaseVisitor<String> {   	
// 	@Override
//       public String visitIf_equation(modelicaParser.If_equationContext ctx) {
//     	  String temStr = "";
//     	  if (ctx.getText().isEmpty()) {
//     		  temStr = null;
//     	  } else {
//     		  int a = ctx.start.getStartIndex();
//   	  	  	  int b = ctx.stop.getStopIndex();
//   	  	  	  Interval interval = new Interval(a,b);
//   	  	  	  CharStream charStr = ctx.start.getInputStream();
//   	  	      temStr = charStr.getText(interval).trim();
//     	  }            
//         return temStr;
//         //return new If_equation(expression1, equation1, expression2, equation2, equation3);
//       }
//     }