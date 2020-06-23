const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Named_argumentsVisitor extends ModelicaVisitor.ModelicaVisitor {
    visitNamed_arguments(ctx) {
        var named_argumentVisitor = new Named_argumentVisitor();
        var named_argument = String(ctx.named_argument().accept(named_argumentVisitor));
        var named_argumentsVisitor = new Named_argumentsVisitor();
        var named_arguments = String(ctx.named_arguments() == null ? null : ctx.named_arguments().accept(named_argumentsVisitor));
        var comma = String(ctx.SYMBOL_COMMA()==null ? null : ctx.SYMBOL_COMMA().getText());
        var namedArgsStr = named_argument;
        if (comma != null) {
            var temStr = '';
            namedArgsStr = String(temStr + namedArgsStr + "," + named_arguments);
        }
        return namedArgsStr;
        //return new Named_arguments(named_argument,named_arguments);
    }
}

module.exports = { Named_argumentsVisitor: Named_argumentsVisitor }

//     private static class Named_argumentsVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitNamed_arguments(modelicaParser.Named_argumentsContext ctx) {
//         Named_argumentVisitor named_argumentVisitor = new Named_argumentVisitor();
//         String named_argument = 
//         		ctx.named_argument().accept(named_argumentVisitor);
//         Named_argumentsVisitor named_argumentsVisitor = new Named_argumentsVisitor();
//         String named_arguments = 
//         		ctx.named_arguments() == null ? null : ctx.named_arguments().accept(named_argumentsVisitor);
//         String comma = 
//         		ctx.SYMBOL_COMMA()==null ? null : ctx.SYMBOL_COMMA().getText();
//         String namedArgsStr = named_argument;
//         if (comma != null) {
//         	StringBuilder temStr = new StringBuilder();
//         	namedArgsStr = temStr.append(namedArgsStr).append(",")
//         			             .append(named_arguments)
//         			             .toString();       	
//         }
//         return namedArgsStr;
//         //return new Named_arguments(named_argument,named_arguments);
//       }
//     }