const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Element_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement_list(ctx) {
        var elementVisitor = new ElementVisitor();
        var element_1 = ctx.element() == null ? null : ctx.element()
                .stream()
                .map(element => element.accept(elementVisitor))
                .collect(toList());
        return new Element_list(element_1);
    }
}

module.exports = { Element_listVisitor: Element_listVisitor }

//     private static class Element_listVisitor extends ModelicaVisitor.modelicaVisitor {
//       @Override
//       public Element_list visitElement_list(modelicaParser.Element_listContext ctx) {
//         ElementVisitor elementVisitor = new ElementVisitor();
//         List<Element> element_1 = ctx.element() == null ? null : ctx.element()
//                 .stream()
//                 .map(element -> element.accept(elementVisitor))
//                 .collect(toList());
//         return new Element_list(element_1);
//       }
//     }