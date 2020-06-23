const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Argument_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitArgument_list(ctx) {
        var argumentVisitor = new ArgumentVisitor();
        var argument_1 = ctx.argument()
                .stream()
                .map(argument => argument.accept(argumentVisitor))
                .collect(toList());
        var argLisStr = argument_1[0];
        var temStr = '';
        temStr += argLisStr;
        if (argument_1.length > 1) {
            for (let i = 1; i < argument_1.length; i++) {
                temStr += "," + argument_1[i];
            }
        }
        argLisStr = String(temStr);
        return argLisStr;
        //return new Argument_list(argument_1);
    }
}

module.exports = { Argument_listVisitor: Argument_listVisitor }

//     private static class Argument_listVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitArgument_list(modelicaParser.Argument_listContext ctx) {
//         ArgumentVisitor argumentVisitor = new ArgumentVisitor();
//         List<String> argument_1 = ctx.argument()
//                 .stream()
//                 .map(argument -> argument.accept(argumentVisitor))
//                 .collect(toList());
//         String argLisStr = argument_1.get(0);
//         StringBuilder temStr = new StringBuilder();
//         temStr.append(argLisStr);
//         if (argument_1.size()>1) {
//         	for (int i=1; i<argument_1.size(); i++) {
//         		temStr.append(",").append(argument_1.get(i));
//         	}
//         }   
//         argLisStr = temStr.toString();       
//         return argLisStr;
//         //return new Argument_list(argument_1);
//       }
//     }