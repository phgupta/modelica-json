const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Extends_clauseVisitor extends ModelicaVisitor.modelicaVisitor {
    visitExtends_clause(ctx) {
        var ext_dec = String(ctx.EXTENDS().getText());
        var nameVisitor = new NameVisitor();
        var name_1 = String(ctx.name().accept(nameVisitor));
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification_1 = String(ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor));
        var annotationVisitor = new AnnotationVisitor();
        var annotation_1 = String(ctx.annotation() == null ? null : ctx.annotation().accept(annotationVisitor));
        return new Extends_clause(ext_dec, name_1, class_modification_1, annotation_1);
    }
}

module.exports = { Extends_clauseVisitor: Extends_clauseVisitor }

//     private static class Extends_clauseVisitor extends modelicaBaseVisitor<Extends_clause> {
//       @Override
//       public Extends_clause visitExtends_clause(modelicaParser.Extends_clauseContext ctx) {
//         String ext_dec = ctx.EXTENDS().getText();
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = ctx.name().accept(nameVisitor);
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification_1 = 
//         		ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor);
//         AnnotationVisitor annotationVisitor = new AnnotationVisitor();
//         String annotation_1 = 
//         		ctx.annotation() == null ? null : ctx.annotation().accept(annotationVisitor);      
//         return new Extends_clause(ext_dec, name_1, class_modification_1, annotation_1);
//       }
//     }