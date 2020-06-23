const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Long_class_specifierVisitor extends ModelicaVisitor.modelicaVisitor {
    
    visitLong_class_specifier(ctx) {
        var ident = ctx.IDENT()
                .stream()
                .map(IDENT => IDENT.getText())
                .collect(toList());
        var extends_dec = new String(ctx.EXTENDS() == null ? null : ctx.EXTENDS().getText());
        var string_commentVisitor = new String_commentVisitor();
        var string_comment_1 = new String(ctx.string_comment().accept(string_commentVisitor));
        var compositionVisitor = new CompositionVisitor();
        var composition_1 = ctx.composition().accept(compositionVisitor);
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification_1 = new String(ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor));
        return new Long_class_specifier(extends_dec, ident.get(0), string_comment_1, composition_1, class_modification_1);
    }
}

module.exports = { Long_class_specifierVisitor: Long_class_specifierVisitor }

//     private static class Long_class_specifierVisitor extends modelicaBaseVisitor<Long_class_specifier> {
//       @Override
//       public Long_class_specifier visitLong_class_specifier(modelicaParser.Long_class_specifierContext ctx) {
//         List<String> ident = ctx.IDENT()
//         		.stream()
//         		.map(IDENT -> IDENT.getText())
//         		.collect(toList());
//         String extends_dec = 
//         		ctx.EXTENDS() == null ? null : ctx.EXTENDS().getText();
//         String_commentVisitor string_commentVisitor = new String_commentVisitor();
//         String string_comment_1 = ctx.string_comment().accept(string_commentVisitor);
//         CompositionVisitor compositionVisitor = new CompositionVisitor();
//         Composition composition_1 = ctx.composition().accept(compositionVisitor);
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification_1 = 
//         		ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor);
//         return new Long_class_specifier(extends_dec, ident.get(0), string_comment_1, composition_1, class_modification_1);
//       }
//     }