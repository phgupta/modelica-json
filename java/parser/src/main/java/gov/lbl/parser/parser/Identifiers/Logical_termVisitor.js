const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Logical_termVisitor extends ModelicaVisitor.modelicaVisitor {
    visitLogical_term(ctx) {
        var and_decs = ctx.AND() == null ? null : ctx.AND()
                .stream()
                .map(AND => AND.getText())
                .collect(toList());
        var logical_factorVisitor = new Logical_factorVisitor();
        List<String> logical_factors = ctx.logical_factor()
                .stream()
                .map(logical_factor => logical_factor.accept(logical_factorVisitor))
                .collect(toList());
        var temStr = '';
        temStr += logical_factors[0];
        if (and_decs != null) {
            for (let i = 0; i < and_decs.length; i++) {
                temStr += " " + and_decs[i] + " " + logical_factors[i+1];
            }
        }
        return String(temStr);
        // return new Logical_term(logical_factor_1, and_decs, logical_factor_2);
    }
}

module.exports = { Logical_termVisitor: Logical_termVisitor }

//     private static class Logical_termVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitLogical_term(modelicaParser.Logical_termContext ctx) {
//     	  List<String> and_decs = ctx.AND() == null ? null : ctx.AND()
//     			  .stream()
//     			  .map(AND -> AND.getText())
//     			  .collect(toList());
//     	  Logical_factorVisitor logical_factorVisitor = new Logical_factorVisitor();
//     	  List<String> logical_factors = ctx.logical_factor()
//     			  .stream()
//     			  .map(logical_factor -> logical_factor.accept(logical_factorVisitor))
//     			  .collect(toList());
//     	  StringBuilder temStr = new StringBuilder();
//     	  temStr.append(logical_factors.get(0));
//     	  if (and_decs != null) {
//     		  for (int i=0; i<and_decs.size(); i++) {
//     			  temStr.append(" ").append(and_decs.get(i)).append(" ").append(logical_factors.get(i+1)); 
//     		  }
//     	  }
//     	  return temStr.toString();
//         // return new Logical_term(logical_factor_1, and_decs, logical_factor_2);
//       }
//     }