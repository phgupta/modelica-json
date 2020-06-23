const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Class_modificationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitClass_modification(ctx) {
        var argument_listVisitor = new Argument_listVisitor();
        var argument_list_1 = String(ctx.argument_list() == null ? null : ctx.argument_list().accept(argument_listVisitor)); 
        var temStr = '';
        var claModStr = String(temStr + "(" + argument_list_1 + ")");    
        return claModStr;
        //return new Class_modification(argument_list_1);
    }
}

module.exports = { Class_modificationVisitor: Class_modificationVisitor }

//     private static class Class_modificationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitClass_modification(modelicaParser.Class_modificationContext ctx) {
//         Argument_listVisitor argument_listVisitor = new Argument_listVisitor();
//         String argument_list_1 = 
//         		ctx.argument_list() == null ? null : ctx.argument_list().accept(argument_listVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String claModStr = temStr.append("(").append(argument_list_1).append(")").toString();       
//         return claModStr;
//         //return new Class_modification(argument_list_1);
//       }
//     }