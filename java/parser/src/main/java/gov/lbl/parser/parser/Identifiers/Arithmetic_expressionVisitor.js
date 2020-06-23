const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Arithmetic_expressionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitArithmetic_expression(ctx) {
        var add_opVisitor = new Add_opVisitor();
        var add_ops = ctx.add_op() == null ? null : ctx.add_op()
                .stream()
                .map(add_op => add_op.accept(add_opVisitor))
                .collect(toList());  
        var termVisitor = new TermVisitor();
        var terms = ctx.term()
                .stream()
                .map(term => term.accept(termVisitor))
                .collect(toList());  
        var temStr = new StringBuilder();
        if (add_ops.length == terms.length) {
            for (let i = 0; i < terms.length; i++) {
                temStr += add_ops[i] + terms[i];
            }
        } else {
            temStr += terms[0];
            for (let i = 1; i < terms.length; i++) {
                temStr += add_ops[i-1] + terms[i];
            }
        }
        return String(temStr);       
        //return new Arithmetic_expression(add_op1, terms, add_op2);
    }
}

module.exports = { Arithmetic_expressionVisitor: Arithmetic_expressionVisitor }

//     private static class Arithmetic_expressionVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitArithmetic_expression(modelicaParser.Arithmetic_expressionContext ctx) {
//     	  Add_opVisitor add_opVisitor = new Add_opVisitor();
//     	  List<String> add_ops = ctx.add_op() == null ? null : ctx.add_op()
//     			  .stream()
//     			  .map(add_op -> add_op.accept(add_opVisitor))
//     			  .collect(toList());  
//     	  TermVisitor termVisitor = new TermVisitor();
//     	  List<String> terms = ctx.term()
//     			  .stream()
//     			  .map(term -> term.accept(termVisitor))
//     			  .collect(toList());  
//     	  StringBuilder temStr = new StringBuilder();
//     	  if (add_ops.size() == terms.size()) {
//     		  for (int i=0; i<terms.size(); i++) {
//     			  temStr.append(add_ops.get(i)).append(terms.get(i));
//     		  }
//     	  } else {    		  
//     		  temStr.append(terms.get(0));
//     		  for (int i=1; i<terms.size(); i++) {
//     			  temStr.append(add_ops.get(i-1)).append(terms.get(i));
//     		  }
//     	  }
//           return temStr.toString();       
//         //return new Arithmetic_expression(add_op1, terms, add_op2);
//       }
//     }