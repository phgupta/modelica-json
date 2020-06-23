const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_list(ctx) {
        var component_declarationVisitor = new Component_declarationVisitor();
        var component_declaration_1 = ctx.component_declaration()
                .stream()
                .map(component_declaration => component_declaration.accept(component_declarationVisitor))
                .collect(toList());
        return new Component_list(component_declaration_1);
    }
}

module.exports = { Component_listVisitor: Component_listVisitor }

//     private static class Component_listVisitor extends modelicaBaseVisitor<Component_list> {
//       @Override
//       public Component_list visitComponent_list(modelicaParser.Component_listContext ctx) {
//         Component_declarationVisitor component_declarationVisitor = new Component_declarationVisitor();
//         List<Component_declaration> component_declaration_1 = ctx.component_declaration()
//                 .stream()
//                 .map(component_declaration -> component_declaration.accept(component_declarationVisitor))
//                 .collect(toList());
//         return new Component_list(component_declaration_1);
//       }
//     }