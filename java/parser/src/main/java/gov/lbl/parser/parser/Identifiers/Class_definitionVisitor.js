const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Class_definitionVisitor extends ModelicaVisitor.modelicaVisitor {
    
    visitClass_definition(ctx) {

        var enca_dec = String(ctx.ENCAPSULATED() == null ? null : ctx.ENCAPSULATED().getText());
        var class_prefixesVisitor = new Class_prefixesVisitor();
        var class_prefixes_1 = String(ctx.class_prefixes().accept(class_prefixesVisitor));
        class_specifierVisitor = new Class_specifierVisitor();
        class_specifier_1 = ctx.class_specifier().accept(class_specifierVisitor);
        return new Class_definition(enca_dec, class_prefixes_1, class_specifier_1);
    }
}

module.exports = { Class_definitionVisitor: Class_definitionVisitor }

// private static class Class_definitionVisitor extends modelicaBaseVisitor<Class_definition> {
//     @Override
//     public Class_definition visitClass_definition(modelicaParser.Class_definitionContext ctx) {
//       System.out.println("visitClass_definition");
//       String enca_dec = ctx.ENCAPSULATED() == null ? null : ctx.ENCAPSULATED().getText();       
//       Class_prefixesVisitor class_prefixesVisitor = new Class_prefixesVisitor();
//       String class_prefixes_1 = ctx.class_prefixes().accept(class_prefixesVisitor);
//       Class_specifierVisitor class_specifierVisitor = new Class_specifierVisitor();
//       Class_specifier class_specifier_1 = ctx.class_specifier().accept(class_specifierVisitor);
//       return new Class_definition(enca_dec, class_prefixes_1, class_specifier_1);
//     }
//   }