const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Function_argumentVisitor extends ModelicaVisitor.modelicaVisitor {

    visitFunction_argument(ctx) {
        var fun_dec = String(ctx.FUNCTION() == null ? null : ctx.FUNCTION().getText());
        var nameVisitor = new NameVisitor();
        var name = String(ctx.name() == null ? null : ctx.name().accept(nameVisitor));
        var named_argumentsVisitor = new Named_argumentsVisitor();
        var named_arguments = String(ctx.named_arguments() == null ? "" : ctx.named_arguments().accept(named_argumentsVisitor));
        var expressionVisitor = new ExpressionVisitor();
        var expression = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var funArgStr = expression;
        if (fun_dec != null) {
            var temStr = '';
            var funArgStr = String(temStr + fun_dec + " " + name + "(" + named_arguments + ")");
        } 
        return funArgStr;
        //return new Function_argument(fun_dec, name, named_arguments, expression);
    }
}

module.exports = { Function_argumentVisitor: Function_argumentVisitor }

//     private static class Function_argumentVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFunction_argument(modelicaParser.Function_argumentContext ctx) {
//     	  String fun_dec = 
//     			  ctx.FUNCTION() == null ? null : ctx.FUNCTION().getText();
//     	  NameVisitor nameVisitor = new NameVisitor();
//     	  String name = 
//     			  ctx.name() == null ? null : ctx.name().accept(nameVisitor);
//     	  Named_argumentsVisitor named_argumentsVisitor = new Named_argumentsVisitor();
//     	  String named_arguments = 
//     			  ctx.named_arguments() == null ? "" : ctx.named_arguments().accept(named_argumentsVisitor);
//     	  ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//     	  String expression = 
//     			  ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);    	  
//     	  String funArgStr = expression;
//     	  if (fun_dec != null) {
//     		  StringBuilder temStr = new StringBuilder();
//     		  funArgStr = temStr.append(fun_dec).append(" ").append(name)
//     		                    .append("(").append(named_arguments).append(")")
//     		                    .toString();
//     	  } 
//     	  return funArgStr;
//         //return new Function_argument(fun_dec, name, named_arguments, expression);
//       }
//     }