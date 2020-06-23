const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Connect_clauseVisitor extends ModelicaVisitor.modelicaVisitor {
    visitConnect_clause(ctx) {
        var component_referenceVisitor = new Component_referenceVisitor();
        var component_reference_1 = ctx.component_reference()
                .stream()
                .map(component_reference => component_reference.accept(component_referenceVisitor))
                .collect(toList());
        return new Connect_clause(component_reference_1[0], component_reference_1[1]);
    }
}

module.exports = { Connect_clauseVisitor: Connect_clauseVisitor }

//     private static class Connect_clauseVisitor extends modelicaBaseVisitor<Connect_clause> {
//       @Override
//       public Connect_clause visitConnect_clause(modelicaParser.Connect_clauseContext ctx) {
//         Component_referenceVisitor component_referenceVisitor = new Component_referenceVisitor();
//         List<String> component_reference_1 = ctx.component_reference()
//                 .stream()
//                 .map(component_reference -> component_reference.accept(component_referenceVisitor))
//                 .collect(toList());
//         return new Connect_clause(component_reference_1.get(0), component_reference_1.get(1));
//       }
//     }