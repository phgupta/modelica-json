const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Short_class_specifierVisitor extends ModelicaVisitor.modelicaVisitor {

    visitShort_class_specifier() {
        var enum_dec = new String(ctx.ENUMERATION() == null ? null : ctx.ENUMERATION().getText());
        var ident = new String(ctx.IDENT().getText());
        var base_prefixVisitor = new Base_prefixVisitor();
        var base_prefix_1 = new String(ctx.base_prefix() == null ? null : ctx.base_prefix().accept(base_prefixVisitor));
        var array_subscriptsVisitor = new Array_subscriptsVisitor();
        var array_subscripts_1 = new String(ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor));
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification_1 = new String(ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor));
        
        var commentVisitor = new CommentVisitor();
        var comment = ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);       
        var enum_listVisitor = new Enum_listVisitor();
        var enum_list_1 = ctx.enum_list() == null ? null : ctx.enum_list().accept(enum_listVisitor);       		       
        var nameVisitor = new NameVisitor();
        var name_1 = new String(ctx.name() == null ? null : ctx.name().accept(nameVisitor));
        var symCol = new String(ctx.SYMBOL_COLON() == null ? null : ctx.SYMBOL_COLON().getText());
        return new Short_class_specifier(enum_dec, ident, base_prefix_1, name_1, array_subscripts_1,
                                            class_modification_1, comment, enum_list_1);
    }
}

module.exports = { Short_class_specifierVisitor: Short_class_specifierVisitor }

//     private static class Short_class_specifierVisitor extends modelicaBaseVisitor<Short_class_specifier> {
//       @Override
//       public Short_class_specifier visitShort_class_specifier(modelicaParser.Short_class_specifierContext ctx) {
//         String enum_dec = 
//         		ctx.ENUMERATION() == null ? null : ctx.ENUMERATION().getText();
//         String ident = ctx.IDENT().getText();
//         Base_prefixVisitor base_prefixVisitor = new Base_prefixVisitor();
//         String base_prefix_1 = 
//         		ctx.base_prefix() == null ? null : ctx.base_prefix().accept(base_prefixVisitor);
//         Array_subscriptsVisitor array_subscriptsVisitor = new Array_subscriptsVisitor();
//         String array_subscripts_1 = 
//         		ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor);
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification_1 = 
//         		ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor);
        
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment = 
//         		ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);       
//         Enum_listVisitor enum_listVisitor = new Enum_listVisitor();
//         Enum_list enum_list_1 = 
//         		ctx.enum_list() == null ? null : ctx.enum_list().accept(enum_listVisitor);       		       
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = 
//         		ctx.name() == null ? null : ctx.name().accept(nameVisitor);
//         String symCol = 
//         		ctx.SYMBOL_COLON() == null ? null : ctx.SYMBOL_COLON().getText();
//         return new Short_class_specifier(enum_dec, ident, base_prefix_1, name_1, array_subscripts_1,
//                                          class_modification_1, comment, enum_list_1);
//       }
//     }