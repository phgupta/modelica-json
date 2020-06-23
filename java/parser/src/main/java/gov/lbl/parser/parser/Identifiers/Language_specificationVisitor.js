const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Language_specificationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitLanguage_specification(ctx) {
        var string = String(ctx.STRING().getText());
        return string;
        //return new Language_specification(ident);
    }
}

module.exports = { Language_specificationVisitor: Language_specificationVisitor }

//     private static class Language_specificationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitLanguage_specification(modelicaParser.Language_specificationContext ctx) {
//         String string = ctx.STRING().getText();
//         return string;
//         //return new Language_specification(ident);
//       }
//     }