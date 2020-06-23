const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Element_modification_or_replaceableVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement_modification_or_replaceable(ctx) {
        var each_dec = String(ctx.EACH() == null ? null : ctx.EACH().getText());
        var final_dec = String(ctx.FINAL() == null ? null : ctx.FINAL().getText());
        var element_modificationVisitor = new Element_modificationVisitor();
        var element_modification_1 = String(ctx.element_modification() == null ? null : ctx.element_modification().accept(element_modificationVisitor));
        var element_replaceableVisitor = new Element_replaceableVisitor();
        var element_replaceable_1 = String(ctx.element_replaceable() == null ? null : ctx.element_replaceable().accept(element_replaceableVisitor));
        var eleModRep = "";
        var temStr = '';
        temStr += eleModRep;
        if (each_dec != null) {temStr += each_dec + " ";}
        if (final_dec != null) {temStr += final_dec + " ";}
        if (element_modification_1 != null) {       	
            temStr += element_modification_1;      	
        } else {
            temStr += element_replaceable_1;
        }
        eleModRep = String(temStr);
        return eleModRep;
        //return new Element_modification_or_replaceable(each_dec, final_dec, element_modification_1, element_replaceable_1);
    }
}

module.exports = { Element_modification_or_replaceableVisitor: Element_modification_or_replaceableVisitor }

//     private static class Element_modification_or_replaceableVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitElement_modification_or_replaceable(modelicaParser.Element_modification_or_replaceableContext ctx) {
//         String each_dec = 
//         		ctx.EACH() == null ? null : ctx.EACH().getText();
//         String final_dec = 
//         		ctx.FINAL() == null ? null : ctx.FINAL().getText();
//         Element_modificationVisitor element_modificationVisitor = new Element_modificationVisitor();
//         String element_modification_1 = 
//         		ctx.element_modification() == null ? null : ctx.element_modification().accept(element_modificationVisitor);
//         Element_replaceableVisitor element_replaceableVisitor = new Element_replaceableVisitor();
//         String element_replaceable_1 = 
//         		ctx.element_replaceable() == null ? null : ctx.element_replaceable().accept(element_replaceableVisitor);
//         String eleModRep = "";
//         StringBuilder temStr = new StringBuilder();
//         temStr.append(eleModRep);
//         if (each_dec != null) {temStr.append(each_dec).append(" ");}
//         if (final_dec != null) {temStr.append(final_dec).append(" ");}
//         if (element_modification_1 != null) {       	
//         	temStr.append(element_modification_1);      	
//         } else {
//         	temStr.append(element_replaceable_1);
//         }
//         eleModRep = temStr.toString();
//         return eleModRep;
//         //return new Element_modification_or_replaceable(each_dec, final_dec, element_modification_1, element_replaceable_1);
//       }
//     }