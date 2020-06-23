const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class ModificationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitModification(ctx) {    	  
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification_1 = String(ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor));
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var eqSymb = String(ctx.SYMBOL_EQUAL() == null ? null : ctx.SYMBOL_EQUAL().getText());
        var colEqSymb = String(ctx.SYMBOL_COLONEQUAL() == null ? null : ctx.SYMBOL_COLONEQUAL().getText());
        var modStr = '';
        var temStr = '';
        if (class_modification_1 != null) {
            if (expression_1 != null) {        		
                modStr = String(temStr + class_modification_1 + "=" + expression_1);
            } else {
                modStr = class_modification_1;
            }
        } else if (eqSymb != null && expression_1 != null) {
            modStr = String(temStr + eqSymb + expression_1);
        } else if (colEqSymb != null && expression_1 != null) {
            modStr = String(temStr + colEqSymb + expression_1);
        }        
        return modStr;
        // return new Modification(class_modification_1, eqSymb, colEqSymb, expression_1);
    }
}

module.exports = { ModificationVisitor: ModificationVisitor }

//     private static class ModificationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitModification(modelicaParser.ModificationContext ctx) {    	  
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification_1 = 
//         		ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor);
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         String expression_1 = 
//         		ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);
//         String eqSymb = ctx.SYMBOL_EQUAL() == null ? null : ctx.SYMBOL_EQUAL().getText();
//         String colEqSymb = ctx.SYMBOL_COLONEQUAL() == null ? null : ctx.SYMBOL_COLONEQUAL().getText();
//         String modStr = "";
//         StringBuilder temStr = new StringBuilder();
//         if (class_modification_1 != null) {
//         	if (expression_1 != null) {        		
//         		modStr = temStr.append(class_modification_1).append("=").append(expression_1).toString();
//         	} else {
//         		modStr = class_modification_1;
//         	}
//         } else if (eqSymb != null && expression_1 != null) {
//         	modStr = temStr.append(eqSymb).append(expression_1).toString();
//         } else if (colEqSymb != null && expression_1 != null) {
//         	modStr = temStr.append(colEqSymb).append(expression_1).toString();
//         }        
//         return modStr;       
//         // return new Modification(class_modification_1, eqSymb, colEqSymb, expression_1);
//       }
//     }