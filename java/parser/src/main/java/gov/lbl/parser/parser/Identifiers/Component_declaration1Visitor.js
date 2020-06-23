const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_declaration1Visitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_declaration1(ctx) {
        var declaration_1 = '';
        if (ctx.declaration().getText().isEmpty()) {
            declaration_1 = null;
        } else {
            var a = ctx.declaration().start.getStartIndex();
            var b = ctx.declaration().stop.getStopIndex();
            var interval = new Interval(a,b);
            var decStr = ctx.declaration().start.getInputStream();       
            declaration_1 = decStr.getText(interval).trim();
        }
        var comStr = ctx.comment().getText();
        var temStr = '';
        var comDec1Str = String(temStr + declaration_1 + " " + comStr);
        return comDec1Str;
        //return new Component_declaration1(declaration_1, comment_1);
    }
}

module.exports = { Component_declaration1Visitor: Component_declaration1Visitor }

//     private static class Component_declaration1Visitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitComponent_declaration1(modelicaParser.Component_declaration1Context ctx) {
//     	  String declaration_1 = "";
//     	  if (ctx.declaration().getText().isEmpty()) {
//     		  declaration_1 = null;
//     	  } else {
//     		  int a = ctx.declaration().start.getStartIndex();
//     	        int b = ctx.declaration().stop.getStopIndex();
//     	        Interval interval = new Interval(a,b);
//     	        CharStream decStr = ctx.declaration().start.getInputStream();       
//     	        declaration_1 = decStr.getText(interval).trim();
//     	  }
    	  
//           String comStr = ctx.comment().getText();
//           StringBuilder temStr = new StringBuilder();
//           String comDec1Str = temStr.append(declaration_1).append(" ").append(comStr).toString();
        
//           return comDec1Str;
//         //return new Component_declaration1(declaration_1, comment_1);
//       }
//     }