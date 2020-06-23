const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class DeclarationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitDeclaration(ctx) {
        var ident = ctx.IDENT().getText();
        var array_subscriptsVisitor = new Array_subscriptsVisitor();
        var array_subscripts_1 = String(ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor));
        var modificationVisitor = new ModificationVisitor();
        var modification_1 = String(ctx.modification() == null ? null : ctx.modification().accept(modificationVisitor));
        return new Declaration(ident, array_subscripts_1, modification_1);
    }
}

module.exports = { DeclarationVisitor: DeclarationVisitor }

//     private static class DeclarationVisitor extends modelicaBaseVisitor<Declaration> {
//       @Override
//       public Declaration visitDeclaration(modelicaParser.DeclarationContext ctx) {
//         String ident = ctx.IDENT().getText();
//         Array_subscriptsVisitor array_subscriptsVisitor = new Array_subscriptsVisitor();
//         String array_subscripts_1 = 
//         		ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor);
//         ModificationVisitor modificationVisitor = new ModificationVisitor();
//         String modification_1 = 
//         		ctx.modification() == null ? null : ctx.modification().accept(modificationVisitor);        
//         return new Declaration(ident, array_subscripts_1, modification_1);
//       }
//     }