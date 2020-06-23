const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Component_clause1Visitor extends ModelicaVisitor.modelicaVisitor {
    visitComponent_clause1(ctx) {
        var type_prefixVisitor = new Type_prefixVisitor();
        var type_prefix_1 = ctx.type_prefix().accept(type_prefixVisitor);
        var type_specifierVisitor = new Type_specifierVisitor();
        var type_specifier_1 = ctx.type_specifier().accept(type_specifierVisitor);
        var component_declaration1Visitor = new Component_declaration1Visitor();
        var component_declaration1_1 = ctx.component_declaration1().accept(component_declaration1Visitor);
        var temStr = '';
        if (type_prefix_1 != null) {
            temStr += type_prefix_1 + " ";
        }         
        var comCla1Str = String(temStr + type_specifier_1 + " " + component_declaration1_1);
        return comCla1Str;
        //return new Component_clause1(type_prefix_1, type_specifier_1, component_declaration1_1);
    }
}

module.exports = { Component_clause1Visitor: Component_clause1Visitor }

//     private static class Component_clause1Visitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitComponent_clause1(modelicaParser.Component_clause1Context ctx) {
//         Type_prefixVisitor type_prefixVisitor = new Type_prefixVisitor();
//         String type_prefix_1 = ctx.type_prefix().accept(type_prefixVisitor);
//         Type_specifierVisitor type_specifierVisitor = new Type_specifierVisitor();
//         String type_specifier_1 = ctx.type_specifier().accept(type_specifierVisitor);
//         Component_declaration1Visitor component_declaration1Visitor = new Component_declaration1Visitor();
//         String component_declaration1_1 = ctx.component_declaration1().accept(component_declaration1Visitor);
//         StringBuilder temStr = new StringBuilder();
//         if (type_prefix_1 != null) {
//         	temStr.append(type_prefix_1).append(" ");
//         }
//         String comCla1Str = temStr.append(type_specifier_1).append(" ")
//         		                  .append(component_declaration1_1)
//         		                  .toString();           
//         return comCla1Str;
//         //return new Component_clause1(type_prefix_1, type_specifier_1, component_declaration1_1);
//       }
//     }