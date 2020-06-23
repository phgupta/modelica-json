const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_declarationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_declaration(ctx) {
        var declarationVisitor = new DeclarationVisitor();
        var declaration_1 = ctx.declaration().accept(declarationVisitor);
        var condition_attributeVisitor = new Condition_attributeVisitor();
        var condition_attribute_1 = String(ctx.condition_attribute() == null ? null : ctx.condition_attribute().accept(condition_attributeVisitor));
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
        return new Component_declaration(declaration_1, condition_attribute_1, comment_1);
    }
}

module.exports = { Component_declarationVisitor: Component_declarationVisitor }

//     private static class Component_declarationVisitor extends modelicaBaseVisitor<Component_declaration> {
//       @Override
//       public Component_declaration visitComponent_declaration(modelicaParser.Component_declarationContext ctx) {
//         DeclarationVisitor declarationVisitor = new DeclarationVisitor();
//         Declaration declaration_1 = ctx.declaration().accept(declarationVisitor);
//         Condition_attributeVisitor condition_attributeVisitor = new Condition_attributeVisitor();
//         String condition_attribute_1 = 
//         		ctx.condition_attribute() == null ? null : ctx.condition_attribute().accept(condition_attributeVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = 
//         		ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
//         return new Component_declaration(declaration_1, condition_attribute_1, comment_1);
//       }
//     }