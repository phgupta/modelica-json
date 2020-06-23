const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Logical_expressionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitLogical_expression(ctx) {
        var or_decs = ctx.OR() == null ? null : ctx.OR()
                .stream()
                .map(OR => OR.getText())
                .collect(toList());
        var logical_termVisitor = new Logical_termVisitor();
        var logical_terms = ctx.logical_term()
                .stream()
                .map(logical_term => logical_term.accept(logical_termVisitor))
                .collect(toList());
        var temStr = '';
        temStr += logical_terms[0];
        if (or_decs != null) {
            for (let i = 0; i < or_decs.length; i++) {
                temStr += " " + or_decs[i] + " " + logical_terms[i+1];	  
            }
        }
        return String(temStr);       		
        //return new Logical_expression(logical_term_1, or_decs, logical_term_2);
    }
}

module.exports = { Logical_expressionVisitor: Logical_expressionVisitor }

//     private static class Logical_expressionVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitLogical_expression(modelicaParser.Logical_expressionContext ctx) {
//     	  List<String> or_decs = ctx.OR() == null ? null : ctx.OR()
//     			  .stream()
//     			  .map(OR -> OR.getText())
//     			  .collect(toList());
//     	  Logical_termVisitor logical_termVisitor = new Logical_termVisitor();
//     	  List<String> logical_terms = ctx.logical_term()
//     			  .stream()
//     			  .map(logical_term -> logical_term.accept(logical_termVisitor))
//     			  .collect(toList());
//     	  StringBuilder temStr = new StringBuilder();
//     	  temStr.append(logical_terms.get(0));
//     	  if (or_decs != null) {
//     		  for (int i=0; i<or_decs.size(); i++) {
//     			  temStr.append(" ").append(or_decs.get(i)).append(" ").append(logical_terms.get(i+1));   			  
//     		  }
//     	  }
//     	  return temStr.toString();       		
//     	  //return new Logical_expression(logical_term_1, or_decs, logical_term_2);
//       }
//     }