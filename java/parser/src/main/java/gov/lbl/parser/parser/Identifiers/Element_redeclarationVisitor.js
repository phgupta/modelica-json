const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');
const { each } = require('bluebird');

class Element_redeclarationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement_redeclaration(ctx) {
        var red_dec = ctx.REDECLARE().getText();
        var each_dec = String(ctx.EACH() == null ? null : ctx.EACH().getText());
        var final_dec = String(ctx.FINAL() == null ? null : ctx.FINAL().getText());
        var short_class_definitionVisitor = new Short_class_definitionVisitor();
        var shoClaDefStr = String(ctx.short_class_definition() == null ? null : ctx.short_class_definition().accept(short_class_definitionVisitor));
        var component_clause1Visitor = new Component_clause1Visitor();       
        var component_clause1_1 = String(ctx.component_clause1() == null ? null : ctx.component_clause1().accept(component_clause1Visitor));
        var element_replaceableVisitor = new Element_replaceableVisitor();
        var element_replaceable_1 = String(ctx.element_replaceable() == null ? null : ctx.element_replaceable().accept(element_replaceableVisitor));
        var temStr = '';
        var eleRedStr = String(temStr + red_dec + " ");
        if (each_dec != null) {temStr + each_dec + " ";}
        if (final_dec != null) {temStr + final_dec + " ";}
        if (element_replaceable_1 != null) {
            temStr += element_replaceable_1;
        } else {
            if (shoClaDefStr != null) {
                temStr += shoClaDefStr;
            } else {
                temStr += component_clause1_1;
            }
        }                
        eleRedStr = String(temStr);
        return eleRedStr;      
        //return new Element_redeclaration(red_dec, each_dec, final_dec, short_class_definition_1, component_clause1_1, element_replaceable_1);
    }
}

module.exports = { Element_redeclarationVisitor: Element_redeclarationVisitor }

//     private static class Element_redeclarationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitElement_redeclaration(modelicaParser.Element_redeclarationContext ctx) {
//         String red_dec = ctx.REDECLARE().getText();
//         String each_dec = 
//         		ctx.EACH() == null ? null : ctx.EACH().getText();
//         String final_dec = 
//         		ctx.FINAL() == null ? null : ctx.FINAL().getText();
//         Short_class_definitionVisitor short_class_definitionVisitor = new Short_class_definitionVisitor();
//         String shoClaDefStr = 
//         		ctx.short_class_definition() == null ? null : ctx.short_class_definition().accept(short_class_definitionVisitor);
//         Component_clause1Visitor component_clause1Visitor = new Component_clause1Visitor();       
//         String component_clause1_1 = 
//         		ctx.component_clause1() == null ? null : ctx.component_clause1().accept(component_clause1Visitor);
//         Element_replaceableVisitor element_replaceableVisitor = new Element_replaceableVisitor();
//         String element_replaceable_1 = 
//         		ctx.element_replaceable() == null ? null : ctx.element_replaceable().accept(element_replaceableVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String eleRedStr = temStr.append(red_dec).append(" ").toString();
//         if (each_dec != null) {temStr.append(each_dec).append(" ");}
//         if (final_dec != null) {temStr.append(final_dec).append(" ");}
//         if (element_replaceable_1 != null) {
//         	temStr.append(element_replaceable_1);
//         } else {
//         	if (shoClaDefStr != null) {
//         		temStr.append(shoClaDefStr);
//         	} else {
//         		temStr.append(component_clause1_1);
//         	}
//         }                
//         eleRedStr = temStr.toString();        
//         return eleRedStr;      
//         //return new Element_redeclaration(red_dec, each_dec, final_dec, short_class_definition_1, component_clause1_1, element_replaceable_1);
//       }
//     }