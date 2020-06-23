const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Function_call_argsVisitor extends ModelicaVisitor.modelicaVisitor {

    visitFunction_call_args(ctx) {
        var function_argumentsVisitor = new Function_argumentsVisitor();
        var function_arguments = String(ctx.function_arguments() == null ? "" : ctx.function_arguments().accept(function_argumentsVisitor));
        var temStr = '';
        var funCalArgs = String(temStr + "(" + function_arguments + ")");
        return funCalArgs;
        //return new Function_call_args(function_arguments);
    }
}

module.exports = { Function_call_argsVisitor: Function_call_argsVisitor }

//     private static class Function_call_argsVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFunction_call_args(modelicaParser.Function_call_argsContext ctx) {
//         Function_argumentsVisitor function_argumentsVisitor = new Function_argumentsVisitor();
//         String function_arguments = 
//         		ctx.function_arguments() == null ? "" : ctx.function_arguments().accept(function_argumentsVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String funCalArgs = temStr.append("(").append(function_arguments).append(")")
//         		                  .toString();
//         return funCalArgs;
//         //return new Function_call_args(function_arguments);
//       }
//     }