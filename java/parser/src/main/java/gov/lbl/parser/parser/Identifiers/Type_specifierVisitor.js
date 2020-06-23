const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Type_specifierVisitor extends ModelicaVisitor.modelicaVisitor {
    visitType_specifier(ctx) {
        var nameVisitor = new NameVisitor();
        var specifier = String(ctx.name().accept(nameVisitor));
        return specifier;
        //return new Type_specifier(name_1);
    }
}

module.exports = { Type_specifierVisitor: Type_specifierVisitor }

//     private static class Type_specifierVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitType_specifier(modelicaParser.Type_specifierContext ctx) {
//         NameVisitor nameVisitor = new NameVisitor();
//         String specifier = ctx.name().accept(nameVisitor);
//         return specifier;
//         //return new Type_specifier(name_1);
//       }
//     }