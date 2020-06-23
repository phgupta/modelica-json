const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Import_clauseVisitor extends ModelicaVisitor.modelicaVisitor {
    visitImport_clause(ctx) {
        var import_dec = String(ctx.IMPORT().getText());
        var ident = String(ctx.IDENT() == null ? null : ctx.IDENT().getText());
        var dotStar = String(ctx.SYMBOL_DOTSTAR() == null ? null : ctx.SYMBOL_DOTSTAR().getText());
        var import_listVisitor = new Import_listVisitor();
        var import_list_1 = String(ctx.import_list() == null ? null : ctx.import_list().accept(import_listVisitor));
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment().getText().length() == 0 ? null : ctx.comment().accept(commentVisitor);
        var nameVisitor = new NameVisitor();
        var name_1 = String(ctx.name().accept(nameVisitor));
        return new Import_clause(import_dec, ident, dotStar, name_1, import_list_1, comment_1);
    }
}

module.exports = { Import_clauseVisitor: Import_clauseVisitor }

//     private static class Import_clauseVisitor extends modelicaBaseVisitor<Import_clause> {
//       @Override
//       public Import_clause visitImport_clause(modelicaParser.Import_clauseContext ctx) {
//         String import_dec = ctx.IMPORT().getText();
//         String ident = 
//         		ctx.IDENT() == null ? null : ctx.IDENT().getText();
//         String dotStar = 
//         		ctx.SYMBOL_DOTSTAR() == null ? null : ctx.SYMBOL_DOTSTAR().getText();
//         Import_listVisitor import_listVisitor = new Import_listVisitor();
//         String import_list_1 = 
//         		ctx.import_list() == null ? null : ctx.import_list().accept(import_listVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = 
//         		ctx.comment().getText().length() == 0 ? null : ctx.comment().accept(commentVisitor);
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = ctx.name().accept(nameVisitor);
//         return new Import_clause(import_dec, ident, dotStar, name_1, import_list_1, comment_1);
//       }