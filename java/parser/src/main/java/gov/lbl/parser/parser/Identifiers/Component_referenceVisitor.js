const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_referenceVisitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_reference(ctx) {
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
    // return new Component_reference(ident, dots, array_subscripts_1);
    }
}

module.exports = { Component_referenceVisitor: Component_referenceVisitor }

//     private static class Component_referenceVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitComponent_reference(modelicaParser.Component_referenceContext ctx) {
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
//         // return new Component_reference(ident, dots, array_subscripts_1);
//       }
//     }