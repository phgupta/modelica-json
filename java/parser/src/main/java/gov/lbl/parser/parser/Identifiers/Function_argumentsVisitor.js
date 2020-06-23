const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Function_argumentsVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFunction_arguments(ctx) {
        var function_argumentVisitor = new Function_argumentVisitor();
        var function_argument = String(ctx.function_argument() == null ? null : ctx.function_argument().accept(function_argumentVisitor));
        var function_argumentsVisitor = new Function_argumentsVisitor();
        var function_arguments = String(ctx.function_arguments() == null ? null : ctx.function_arguments().accept(function_argumentsVisitor));
        var for_dec = String(ctx.FOR() == null ? null : ctx.FOR().getText());
        var for_indicesVisitor = new For_indicesVisitor();
        var for_indices = String(ctx.for_indices() == null ? null : ctx.for_indices().accept(for_indicesVisitor));
        var named_argumentsVisitor = new Named_argumentsVisitor();
        var named_arguments = String(ctx.named_arguments() == null ? null : ctx.named_arguments().accept(named_argumentsVisitor));
        var funArgsStr = named_arguments;
        if (function_argument != null) {
            var temStr1 = '';
            if (function_arguments != null) {
                temStr1 += "," + function_arguments;
            } else if (for_indices != null) {
                temStr1 += "for " + for_indices;
            }
            var temStr2 = '';
            funArgsStr = String(temStr2 + function_arguments + temStr1);
        }
        return funArgsStr;    
        //return new Function_arguments(function_argument, function_arguments, for_dec, for_indices, named_arguments);
    }
}

module.exports = { Function_argumentsVisitor: Function_argumentsVisitor }

//     private static class Function_argumentsVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFunction_arguments(modelicaParser.Function_argumentsContext ctx) {
//         Function_argumentVisitor function_argumentVisitor = new Function_argumentVisitor();
//         String function_argument = 
//         		ctx.function_argument() == null ? null : ctx.function_argument().accept(function_argumentVisitor);
//         Function_argumentsVisitor function_argumentsVisitor = new Function_argumentsVisitor();
//         String function_arguments = 
//         		ctx.function_arguments() == null ? null : ctx.function_arguments().accept(function_argumentsVisitor);
//         String for_dec = 
//         		ctx.FOR() == null ? null : ctx.FOR().getText();
//         For_indicesVisitor for_indicesVisitor = new For_indicesVisitor();
//         String for_indices = 
//         		ctx.for_indices() == null ? null : ctx.for_indices().accept(for_indicesVisitor);
//         Named_argumentsVisitor named_argumentsVisitor = new Named_argumentsVisitor();
//         String named_arguments = 
//         		ctx.named_arguments() == null ? null : ctx.named_arguments().accept(named_argumentsVisitor);
//         String funArgsStr = named_arguments;
//         if (function_argument != null) {
//         	StringBuilder temStr1 =  new StringBuilder();
//         	if (function_arguments != null) {
//         		temStr1.append(",").append(function_arguments);
//         	} else if (for_indices != null) {
//         		temStr1.append("for ").append(for_indices);       		
//         	}   
//         	StringBuilder temStr2 = new StringBuilder();
//         	funArgsStr = temStr2.append(function_argument)
//         			            .append(temStr1.toString())
//         			            .toString();
//         }
//         return funArgsStr;    
//         //return new Function_arguments(function_argument, function_arguments, for_dec, for_indices, named_arguments);
//       }
//     }