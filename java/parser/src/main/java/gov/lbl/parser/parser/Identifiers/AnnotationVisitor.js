const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class AnnotationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitAnnotation(ctx) {
        var ann_dec = String(ctx.ANNOTATION().getText());
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification = String(ctx.class_modification().accept(class_modificationVisitor));
        return class_modification;
        //return new Annotation(ann_dec, class_modification);
    }
}

module.exports = { AnnotationVisitor: AnnotationVisitor }

//     public static class AnnotationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitAnnotation(modelicaParser.AnnotationContext ctx) {
//     	String ann_dec = ctx.ANNOTATION().getText();
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification = ctx.class_modification().accept(class_modificationVisitor);
//         return class_modification;
//         //return new Annotation(ann_dec, class_modification);
//       }
//     }
// }