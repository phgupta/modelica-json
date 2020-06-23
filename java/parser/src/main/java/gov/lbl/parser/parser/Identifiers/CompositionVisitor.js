const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class CompositionVisitor extends ModelicaVisitor.modelicaVisitor {

    visitComposition(ctx) {
        
        var public_dec = ctx.PUBLIC() == null ? null : ctx.PUBLIC()
                .stream()
                .map(PUBLIC => PUBLIC.getText())
                .collect(toList());
        var protected_dec = ctx.PROTECTED() == null ? null : ctx.PROTECTED()
                .stream()
                .map(PROTECTED => PROTECTED.getText())
                .collect(toList());
        var external_dec = String(ctx.EXTERNAL() == null ? null : ctx.EXTERNAL().getText());
        var element_listVisitor = new Element_listVisitor();
        var element_lists = ctx.element_list()
                .stream()
                .map(element_list => element_list.accept(element_listVisitor))
                .collect(toList()); 
        var element_list1 = element_lists.get(0);    
        var element_list2 = element_lists.size() < 2 ? null : element_lists.subList(1,element_lists.size()); 
        var equation_sectionVisitor = new Equation_sectionVisitor();
        var equation_section_1 = ctx.equation_section() == null ? null : ctx.equation_section()
                .stream()
                .map(equation_section => equation_section.accept(equation_sectionVisitor))
                .collect(toList());
        var algorithm_sectionVisitor = new Algorithm_sectionVisitor();
        var algorithm_section_1 = ctx.algorithm_section() == null ? null : ctx.algorithm_section()
                .stream()
                .map(algorithm_section => algorithm_section.accept(algorithm_sectionVisitor))
                .collect(toList());
        var language_specificationVisitor = new Language_specificationVisitor();
        var language_specification_1 = String(ctx.language_specification() == null ? null : ctx.language_specification().accept(language_specificationVisitor));
        var external_function_callVisitor = new External_function_callVisitor();
        var external_function_call_1 = String(ctx.external_function_call() == null ? null : ctx.external_function_call().accept(external_function_callVisitor));
        var annotationVisitor = new AnnotationVisitor();
        var annotations = ctx.annotation() == null ? null : ctx.annotation()
                .stream()
                .map(annotation => annotation.accept(annotationVisitor))
                .collect(toList());
        var annotation1 = '';
        var annotation2 = '';
        if (annotations.length == 2) {
            annotation1 = annotations[0];
            annotation2 = annotations[1];
        } else if (annotations.length == 1 && external_dec != null) {
            annotation1 = annotations[0];
        } else if (annotations.length == 1 && external_dec == null) {
            annotation2 = annotations[0];
        } else {
            annotation1 = '';
            annotation2 = '';
        }
        return new Composition(external_dec, public_dec, protected_dec, element_list1, element_list2,
                                equation_section_1, algorithm_section_1, language_specification_1, external_function_call_1,
                                annotation1, annotation2);
    }
}

module.exports = { CompositionVisitor: CompositionVisitor }

//     private static class CompositionVisitor extends modelicaBaseVisitor<Composition> {
//       @Override
//       public Composition visitComposition(modelicaParser.CompositionContext ctx) {
//         List<String> public_dec = ctx.PUBLIC() == null ? null : ctx.PUBLIC()
//         		.stream()
//         		.map(PUBLIC -> PUBLIC.getText())
//         		.collect(toList());
//         List<String> protected_dec = ctx.PROTECTED() == null ? null : ctx.PROTECTED()
//         		.stream()
//         		.map(PROTECTED -> PROTECTED.getText())
//         		.collect(toList());
//         String external_dec = 
//         		ctx.EXTERNAL() == null ? null : ctx.EXTERNAL().getText();
//         Element_listVisitor element_listVisitor = new Element_listVisitor();
//         List<Element_list> element_lists = ctx.element_list()
//                 .stream()
//                 .map(element_list -> element_list.accept(element_listVisitor))
//                 .collect(toList()); 
//         Element_list element_list1 = element_lists.get(0);    
//         List<Element_list> element_list2 = 
//         		element_lists.size() < 2 ? null : element_lists.subList(1,element_lists.size()); 
//         Equation_sectionVisitor equation_sectionVisitor = new Equation_sectionVisitor();
//         List<Equation_section> equation_section_1 = ctx.equation_section() == null ? null : ctx.equation_section()
//                 .stream()
//                 .map(equation_section -> equation_section.accept(equation_sectionVisitor))
//                 .collect(toList());
//         Algorithm_sectionVisitor algorithm_sectionVisitor = new Algorithm_sectionVisitor();
//         List<String> algorithm_section_1 = ctx.algorithm_section() == null ? null : ctx.algorithm_section()
//                 .stream()
//                 .map(algorithm_section -> algorithm_section.accept(algorithm_sectionVisitor))
//                 .collect(toList());
//         Language_specificationVisitor language_specificationVisitor = new Language_specificationVisitor();
//         String language_specification_1 = 
//         		ctx.language_specification() == null ? null : ctx.language_specification().accept(language_specificationVisitor);
//         External_function_callVisitor external_function_callVisitor = new External_function_callVisitor();
//         String external_function_call_1 = 
//         		ctx.external_function_call() == null ? null : ctx.external_function_call().accept(external_function_callVisitor);
//         AnnotationVisitor annotationVisitor = new AnnotationVisitor();
//         List<String> annotations = ctx.annotation() == null ? null : ctx.annotation()
//                 .stream()
//                 .map(annotation -> annotation.accept(annotationVisitor))
//                 .collect(toList());
//         String annotation1 = null;
//         String annotation2 = null;
//         if (annotations.size() == 2) {
//         	annotation1 = annotations.get(0);
//         	annotation2 = annotations.get(1);
//         } else if (annotations.size() == 1 && external_dec != null) {
//         	annotation1 = annotations.get(0);
//         } else if (annotations.size() == 1 && external_dec == null) {
//         	annotation2 = annotations.get(0);
//         } else {
//         	annotation1 = null;
//             annotation2 = null;
//         }
//         return new Composition(external_dec, public_dec, protected_dec, element_list1, element_list2,
//                                equation_section_1, algorithm_section_1, language_specification_1, external_function_call_1,
//                                annotation1, annotation2);
//       }
//     }