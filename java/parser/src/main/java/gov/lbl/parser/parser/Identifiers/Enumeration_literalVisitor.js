const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Enumeration_literalVisitor extends ModelicaVisitor.modelicaVisitor {
    visitEnumeration_literal(ctx) {
        var ident = String(ctx.IDENT().getText());
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment().accept(commentVisitor);
        return new Enumeration_literal(ident, comment_1);
    }
}

module.exports = { Enumeration_literalVisitor: Enumeration_literalVisitor }

//     private static class Enumeration_literalVisitor extends modelicaBaseVisitor<Enumeration_literal> {
//       @Override
//       public Enumeration_literal visitEnumeration_literal(modelicaParser.Enumeration_literalContext ctx) {
//         String ident = ctx.IDENT().getText();
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = ctx.comment().accept(commentVisitor);
//         return new Enumeration_literal(ident, comment_1);
//       }
//     }