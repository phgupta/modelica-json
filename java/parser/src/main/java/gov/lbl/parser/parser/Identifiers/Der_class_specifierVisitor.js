const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Der_class_specifierVisitor extends ModelicaVisitor.modelicaVisitor {
    visitDer_class_specifier(ctx) {
        var idents = ctx.IDENT()
            .stream()
            .map(IDENT => IDENT.getText())
            .collect(toList());
        var ident1 = idents[0];
        var ident2 = idents.slice(1, idents.length);    
        var comma = ctx.SYMBOL_COMMA() == null ? null : ctx.SYMBOL_COMMA()
                .stream()
                .map(SYMBOL_COMMA => SYMBOL_COMMA.getText())
                .collect(toList());      
        var nameVisitor = new NameVisitor();
        var name_1 = ctx.name().accept(nameVisitor);
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment().accept(commentVisitor);
        return new Der_class_specifier(ident1, comma, ident2, name_1, comment_1);
    }
}

module.exports = { Der_class_specifierVisitor: Der_class_specifierVisitor }

//     private static class Der_class_specifierVisitor extends modelicaBaseVisitor<Der_class_specifier> {
//       @Override
//       public Der_class_specifier visitDer_class_specifier(modelicaParser.Der_class_specifierContext ctx) {
//     	List<String> idents = ctx.IDENT()
//     			.stream()
//     			.map(IDENT -> IDENT.getText())
//     			.collect(toList());
//         String ident1 = idents.get(0);
//         List<String> ident2 = idents.subList(1, idents.size());    
//         List<String> comma = ctx.SYMBOL_COMMA() == null ? null : ctx.SYMBOL_COMMA()
//         		.stream()
//         		.map(SYMBOL_COMMA -> SYMBOL_COMMA.getText())
//         		.collect(toList());      
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = ctx.name().accept(nameVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = ctx.comment().accept(commentVisitor);
//         return new Der_class_specifier(ident1, comma, ident2, name_1, comment_1);
//       }
//     }