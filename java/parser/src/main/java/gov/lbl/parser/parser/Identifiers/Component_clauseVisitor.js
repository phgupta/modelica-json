const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_clauseVisitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_clause(ctx) {
        var type_prefixVisitor = new Type_prefixVisitor();
        var type_prefix_1 = String(ctx.type_prefix() == null ? null : ctx.type_prefix().accept(type_prefixVisitor));
        var type_specifierVisitor = new Type_specifierVisitor();
        var type_specifier_1 = String(ctx.type_specifier().accept(type_specifierVisitor));
        var array_subscriptsVisitor = new Array_subscriptsVisitor();
        var array_subscripts_1 = String(ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor));
        var component_listVisitor = new Component_listVisitor();
        var component_list_1 = ctx.component_list().accept(component_listVisitor);
        return new Component_clause(type_prefix_1, type_specifier_1, array_subscripts_1, component_list_1);
    }
}

module.exports = { Component_clauseVisitor: Component_clauseVisitor }

//     private static class Component_clauseVisitor extends modelicaBaseVisitor<Component_clause> {
//       @Override
//       public Component_clause visitComponent_clause(modelicaParser.Component_clauseContext ctx) {
//         Type_prefixVisitor type_prefixVisitor = new Type_prefixVisitor();
//         String type_prefix_1 = 
//         		ctx.type_prefix() == null ? null : ctx.type_prefix().accept(type_prefixVisitor);
//         Type_specifierVisitor type_specifierVisitor = new Type_specifierVisitor();
//         String type_specifier_1 = ctx.type_specifier().accept(type_specifierVisitor);
//         Array_subscriptsVisitor array_subscriptsVisitor = new Array_subscriptsVisitor();
//         String array_subscripts_1 = 
//         		ctx.array_subscripts() == null ? null : ctx.array_subscripts().accept(array_subscriptsVisitor);
//         Component_listVisitor component_listVisitor = new Component_listVisitor();
//         Component_list component_list_1 = ctx.component_list().accept(component_listVisitor);
//         return new Component_clause(type_prefix_1, type_specifier_1, array_subscripts_1, component_list_1);
//       }
//     }