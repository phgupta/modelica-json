const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Named_argumentVisitor extends ModelicaVisitor.modelicaVisitor {
    visitNamed_argument(ctx) {
        var ident = String(ctx.IDENT().getText());
        var function_argumentVisitor = new Function_argumentVisitor();
        var function_argument = String(ctx.function_argument().accept(function_argumentVisitor));
        var temStr = '';
        var namedArgStr = String(temStr + ident + "=" + function_argument);
        return namedArgStr;
        //return new Named_argument(ident, function_argument);
    }
}

module.exports = { Named_argumentVisitor: Named_argumentVisitor }

//     private static class Named_argumentVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitNamed_argument(modelicaParser.Named_argumentContext ctx) {
//     	  String ident = ctx.IDENT().getText();
//     	  Function_argumentVisitor function_argumentVisitor = new Function_argumentVisitor();
//     	  String function_argument = 
//     			  ctx.function_argument().accept(function_argumentVisitor);
//     	  StringBuilder temStr = new StringBuilder();
//     	  String namedArgStr = temStr.append(ident).append("=")
//     			                     .append(function_argument)
//     			                     .toString();
//     	  return namedArgStr;
//         //return new Named_argument(ident, function_argument);
//       }
//     }