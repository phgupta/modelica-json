const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class CommentVisitor extends ModelicaVisitor.modelicaVisitor {
    
    var string_comment1;
    var annotation1;

    visitComment(ctx) {
        var string_commentVisitor = new String_commentVisitor();
        var string_comment1 = String(ctx.string_comment() == null ? null : ctx.string_comment().accept(string_commentVisitor));
        var annotationVisitor = new AnnotationVisitor();
        var annotation1 = String(ctx.annotation() == null ? null : ctx.annotation().accept(annotationVisitor));
        this.string_comment1 = string_comment1;
        this.annotation1 = annotation1;
        return new Comment(string_comment1, annotation1);
    }
}

module.exports = { StoredDefinitionVisitor: StoredDefinitionVisitor }

//     public static class CommentVisitor extends modelicaBaseVisitor<Comment> {
//     	String string_comment1;
//     	String annotation1;
//       @Override
//       public Comment visitComment(modelicaParser.CommentContext ctx) {
//         String_commentVisitor string_commentVisitor = new String_commentVisitor();
//         String string_comment1 = 
//         		ctx.string_comment() == null ? null : ctx.string_comment().accept(string_commentVisitor);
//         AnnotationVisitor annotationVisitor = new AnnotationVisitor();
//         String annotation1 = 
//         		ctx.annotation() == null ? null : ctx.annotation().accept(annotationVisitor);
//         this.string_comment1 = string_comment1;
//         this.annotation1 = annotation1;
//         return new Comment(string_comment1, annotation1);
//       }
//     }