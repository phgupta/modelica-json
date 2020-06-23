const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Enum_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitEnum_list(ctx) {
        var enumeration_literalVisitor = new Enumeration_literalVisitor();
        var enumeration_literal_1 = ctx.enumeration_literal()
                .stream()
                .map(enumeration_literal => enumeration_literal.accept(enumeration_literalVisitor))
                .collect(toList());
        return new Enum_list(enumeration_literal_1);
    }
}

module.exports = { Enum_listVisitor: Enum_listVisitor }

//     private static class Enum_listVisitor extends modelicaBaseVisitor<Enum_list> {
//       @Override
//       public Enum_list visitEnum_list(modelicaParser.Enum_listContext ctx) {
//         Enumeration_literalVisitor enumeration_literalVisitor = new Enumeration_literalVisitor();
//         List<Enumeration_literal> enumeration_literal_1 = ctx.enumeration_literal()
//                 .stream()
//                 .map(enumeration_literal -> enumeration_literal.accept(enumeration_literalVisitor))
//                 .collect(toList());
//         return new Enum_list(enumeration_literal_1);
//       }
//     }