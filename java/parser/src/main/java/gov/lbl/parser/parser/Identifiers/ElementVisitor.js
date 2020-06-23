const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class ElementVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement(ctx) {
        var red_dec = String(ctx.REDECLARE() == null ? null : ctx.REDECLARE().getText());
        var final_dec = String(ctx.FINAL() == null ? null : ctx.FINAL().getText());
        var inner_dec = String(ctx.INNER() == null ? null : ctx.INNER().getText());
        var outer_der = String(ctx.OUTER() == null ? null : ctx.OUTER().getText());
        var rep_dec = String(ctx.REPLACEABLE() == null ? null : ctx.REPLACEABLE().getText());
        var class_definition1;
        var class_definition2;
        var component_clause1;
        var component_clause2;
        if (rep_dec != null) {
            var class_definitionVisitor = new Class_definitionVisitor();
            class_definition2 = ctx.class_definition() == null ? null : ctx.class_definition().accept(class_definitionVisitor);
            var component_clauseVisitor = new Component_clauseVisitor();
            component_clause2 = ctx.component_clause() == null ? null : ctx.component_clause().accept(component_clauseVisitor);
            class_definition1 = null;
            component_clause1 = null;
        } else {
            var class_definitionVisitor = new Class_definitionVisitor();
            class_definition1 = ctx.class_definition() == null ? null : ctx.class_definition().accept(class_definitionVisitor);
            var component_clauseVisitor = new Component_clauseVisitor();
            component_clause1 = ctx.component_clause() == null ? null : ctx.component_clause().accept(component_clauseVisitor);
            class_definition2 = null;
            component_clause2 = null;
        }
        var import_clauseVisitor = new Import_clauseVisitor();
        var import_clause_1 = ctx.import_clause() == null ? null : ctx.import_clause().accept(import_clauseVisitor);
        var extends_clauseVisitor = new Extends_clauseVisitor();
        var extends_clause_1 = ctx.extends_clause() == null ? null : ctx.extends_clause().accept(extends_clauseVisitor);
        var constraining_clauseVisitor = new Constraining_clauseVisitor();
        var constraining_clause_1 = String(ctx.constraining_clause() == null ? null : ctx.constraining_clause().accept(constraining_clauseVisitor));
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
        return new Element(red_dec, final_dec, inner_dec, outer_der, rep_dec, import_clause_1,
                            extends_clause_1, class_definition1, class_definition2,
                            component_clause1, component_clause2, constraining_clause_1, comment_1);
    }
}

module.exports = { ElementVisitor: ElementVisitor }

//     private static class ElementVisitor extends modelicaBaseVisitor<Element> {
//       @Override
//       public Element visitElement(modelicaParser.ElementContext ctx) {
//         String red_dec = 
//         		ctx.REDECLARE() == null ? null : ctx.REDECLARE().getText();
//         String final_dec = 
//         		ctx.FINAL() == null ? null : ctx.FINAL().getText();
//         String inner_dec = 
//         		ctx.INNER() == null ? null : ctx.INNER().getText();
//         String outer_der = 
//         		ctx.OUTER() == null ? null : ctx.OUTER().getText();
//         String rep_dec = 
//         		ctx.REPLACEABLE() == null ? null : ctx.REPLACEABLE().getText();
//         Class_definition class_definition1;
//         Class_definition class_definition2;
//         Component_clause component_clause1;
//         Component_clause component_clause2;
//         if (rep_dec != null) {
//           Class_definitionVisitor class_definitionVisitor = new Class_definitionVisitor();
//           class_definition2 = 
//         		  ctx.class_definition() == null ? null : ctx.class_definition().accept(class_definitionVisitor);
//           Component_clauseVisitor component_clauseVisitor = new Component_clauseVisitor();
//           component_clause2 = 
//         		  ctx.component_clause() == null ? null : ctx.component_clause().accept(component_clauseVisitor);
//           class_definition1 = null;
//           component_clause1 = null;
//         } else {
//           Class_definitionVisitor class_definitionVisitor = new Class_definitionVisitor();
//           class_definition1 = 
//         		  ctx.class_definition() == null ? null : ctx.class_definition().accept(class_definitionVisitor);
//           Component_clauseVisitor component_clauseVisitor = new Component_clauseVisitor();
//           component_clause1 = 
//         		  ctx.component_clause() == null ? null : ctx.component_clause().accept(component_clauseVisitor);
//           class_definition2 = null;
//           component_clause2 = null;
//         }
//         Import_clauseVisitor import_clauseVisitor = new Import_clauseVisitor();
//         Import_clause import_clause_1 = 
//         		ctx.import_clause() == null ? null : ctx.import_clause().accept(import_clauseVisitor);
//         Extends_clauseVisitor extends_clauseVisitor = new Extends_clauseVisitor();
//         Extends_clause extends_clause_1 = 
//         		ctx.extends_clause() == null ? null : ctx.extends_clause().accept(extends_clauseVisitor);
//         Constraining_clauseVisitor constraining_clauseVisitor = new Constraining_clauseVisitor();
//         String constraining_clause_1 = 
//         		ctx.constraining_clause() == null ? null : ctx.constraining_clause().accept(constraining_clauseVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = 
//         		ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
//         return new Element(red_dec, final_dec, inner_dec, outer_der, rep_dec, import_clause_1,
//                            extends_clause_1, class_definition1, class_definition2,
//                            component_clause1, component_clause2, constraining_clause_1, comment_1);
//       }
//     }