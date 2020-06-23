const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Base_prefixVisitor extends ModelicaVisitor.modelicaVisitor {
    visitBase_prefix(ctx) {
        var type_prefixVisitor = new Type_prefixVisitor();
        var basPreStr = String(ctx.type_prefix().accept(type_prefixVisitor));
        return basPreStr;
        //return new Base_prefix(type_prefix_1);
    }
}

module.exports = { Base_prefixVisitor: Base_prefixVisitor }

//     private static class Base_prefixVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitBase_prefix(modelicaParser.Base_prefixContext ctx) {
//         Type_prefixVisitor type_prefixVisitor = new Type_prefixVisitor();
//         String basPreStr = ctx.type_prefix().accept(type_prefixVisitor);
//         return basPreStr;
//         //return new Base_prefix(type_prefix_1);
//       }
//     }