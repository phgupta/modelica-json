const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class FactorVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFactor( ctx) {
        var primaryVisitor = new PrimaryVisitor();
        var primarys = ctx.primary()
                .stream()
                .map(primary => primary.accept(primaryVisitor))
                .collect(toList());
        var caret = String(ctx.SYMBOL_CARET()==null ? null : ctx.SYMBOL_CARET().getText());
        var dotCaret = String(ctx.SYMBOL_DOTCARET()==null ? null : ctx.SYMBOL_DOTCARET().getText());
        var facStr = primarys[0];
        
        if (primarys.length > 1) {
            var temStr = '';
            if (caret != null) {
                facStr = String(temStr + primarys[0] + caret + primarys[1]);
            } else {
                facStr = String(temStr + primarys[0] + dotCaret + primarys[1]);
            }
        }
        return facStr;
        // return new Factor(primarys, caret, dotCaret);
    }
}

module.exports = { FactorVisitor: FactorVisitor }

//     private static class FactorVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFactor(modelicaParser.FactorContext ctx) {
//     	  PrimaryVisitor primaryVisitor = new PrimaryVisitor();
//     	  List<String> primarys = ctx.primary()
//     			  .stream()
//     			  .map(primary -> primary.accept(primaryVisitor))
//     			  .collect(toList());
//     	  String caret = 
//     			  ctx.SYMBOL_CARET()==null ? null : ctx.SYMBOL_CARET().getText();
//     	  String dotCaret = 
//     			  ctx.SYMBOL_DOTCARET()==null ? null : ctx.SYMBOL_DOTCARET().getText();
//     	  String facStr = primarys.get(0);
//     	  if (primarys.size()>1) {
//     		  StringBuilder temStr = new StringBuilder();
//     		  if (caret != null) {
//     			  facStr = temStr.append(primarys.get(0)).append(caret)
//     					         .append(primarys.get(1))
//     					         .toString();
//     		  } else {
//     			  facStr = temStr.append(primarys.get(0)).append(dotCaret)
//     					         .append(primarys.get(1))
//     					         .toString();
//     		  }
//     	  }
//     	  return facStr;       		
//         // return new Factor(primarys, caret, dotCaret);
//       }
//     }