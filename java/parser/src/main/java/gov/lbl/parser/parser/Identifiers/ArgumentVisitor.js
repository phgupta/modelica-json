const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class ArgumentVisitor extends ModelicaVisitor.modelicaVisitor {
    visitArgument(ctx) {
        var element_modification_or_replaceableVisitor = new Element_modification_or_replaceableVisitor();
        var element_modification_or_replaceable_1 = String(ctx.element_modification_or_replaceable() == null ? null : ctx.element_modification_or_replaceable().accept(element_modification_or_replaceableVisitor));
        var element_redeclarationVisitor = new Element_redeclarationVisitor();
        var element_redeclaration_1 = String(ctx.element_redeclaration() == null ? null : ctx.element_redeclaration().accept(element_redeclarationVisitor));
        var argStr = String((element_redeclaration_1 != null) ? element_redeclaration_1 : element_modification_or_replaceable_1);
        return argStr;
        //return new Argument(element_modification_or_replaceable_1, element_redeclaration_1);
    }
}

module.exports = { ArgumentVisitor: ArgumentVisitor }

//     private static class ArgumentVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitArgument(modelicaParser.ArgumentContext ctx) {
//         Element_modification_or_replaceableVisitor element_modification_or_replaceableVisitor = new Element_modification_or_replaceableVisitor();
//         String element_modification_or_replaceable_1 = 
//         		ctx.element_modification_or_replaceable() == null ? null : ctx.element_modification_or_replaceable().accept(element_modification_or_replaceableVisitor);
//         Element_redeclarationVisitor element_redeclarationVisitor = new Element_redeclarationVisitor();
//         String element_redeclaration_1 = 
//         		ctx.element_redeclaration() == null ? null : ctx.element_redeclaration().accept(element_redeclarationVisitor);
//         String argStr = (element_redeclaration_1 != null) ? element_redeclaration_1 : element_modification_or_replaceable_1;         
//         return argStr;
//         //return new Argument(element_modification_or_replaceable_1, element_redeclaration_1);
//       }
//     }