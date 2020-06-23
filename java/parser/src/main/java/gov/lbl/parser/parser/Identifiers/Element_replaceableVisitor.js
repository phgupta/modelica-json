const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Element_replaceableVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement_replaceable(ctx) {
        var rep_dec = String(ctx.REPLACEABLE().getText());
        var short_class_definitionVisitor = new Short_class_definitionVisitor();
        var shoClaDefStr = String(ctx.short_class_definition() == null ? null : ctx.short_class_definition().accept(short_class_definitionVisitor));
        var component_clause1Visitor = new Component_clause1Visitor();
        var component_clause1_1 = String(ctx.component_clause1() == null ? null : ctx.component_clause1().accept(component_clause1Visitor));
        var constraining_clauseVisitor = new Constraining_clauseVisitor();
        var constraining_clause_1 = String(ctx.constraining_clause() == null ? null : ctx.constraining_clause().accept(constraining_clauseVisitor));
        var temStr = '';
        var eleRepStr = String(temStr + rep_dec + " ");
        if (component_clause1_1 == null) {
            temStr += shoClaDefStr;
        } else {
            temStr += component_clause1_1;
        }
        if (constraining_clause_1 != null) {
            temStr += constraining_clause_1;
        }
        eleRepStr = String(temStr);
        return eleRepStr;
        //return new Element_replaceable(rep_dec, short_class_definition_1, component_clause1_1, constraining_clause_1);
    }
}

module.exports = { Element_replaceableVisitor: Element_replaceableVisitor }

//     private static class Element_replaceableVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitElement_replaceable(modelicaParser.Element_replaceableContext ctx) {
//         String rep_dec = ctx.REPLACEABLE().getText();
//         Short_class_definitionVisitor short_class_definitionVisitor = new Short_class_definitionVisitor();
//         String shoClaDefStr = 
//         		ctx.short_class_definition() == null ? null : ctx.short_class_definition().accept(short_class_definitionVisitor);
//         Component_clause1Visitor component_clause1Visitor = new Component_clause1Visitor();
//         String component_clause1_1 = 
//         		ctx.component_clause1() == null ? null : ctx.component_clause1().accept(component_clause1Visitor);
//         Constraining_clauseVisitor constraining_clauseVisitor = new Constraining_clauseVisitor();
//         String constraining_clause_1 = 
//         		ctx.constraining_clause() == null ? null : ctx.constraining_clause().accept(constraining_clauseVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String eleRepStr = temStr.append(rep_dec).append(" ").toString();
//         if (component_clause1_1 == null) {
//         	temStr.append(shoClaDefStr);
//         } else {
//         	temStr.append(component_clause1_1);
//         }
//         if (constraining_clause_1 != null) {
//         	temStr.append(constraining_clause_1);
//         }
//         eleRepStr = temStr.toString();
//         return eleRepStr;
//         //return new Element_replaceable(rep_dec, short_class_definition_1, component_clause1_1, constraining_clause_1);
//       }
//     }