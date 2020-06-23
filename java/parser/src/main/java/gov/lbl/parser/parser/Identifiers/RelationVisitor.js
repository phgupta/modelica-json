const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class RelationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitRelation(ctx) {
        var arithmetic_expressionVisitor = new Arithmetic_expressionVisitor();
        var arithmetic_expressions = ctx.arithmetic_expression()
                .stream()
                .map(arithmetic_expression => arithmetic_expression.accept(arithmetic_expressionVisitor))
                .collect(toList()); 
        var rel_opVisitor = new Rel_opVisitor();
        var rel_op1 = String(ctx.rel_op() == null ? null : ctx.rel_op().accept(rel_opVisitor));  
        var temStr = '';
        temStr += arithmetic_expressions[0];
        if (rel_op1 != null) {
            temStr += rel_op1 + arithmetic_expressions[1];
        }
        return String(temStr);
        // return new Relation(arithmetic_expression1, rel_op1, arithmetic_expression2);
    }
}

module.exports = { RelationVisitor: RelationVisitor }

//     private static class RelationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitRelation(modelicaParser.RelationContext ctx) {
//     	  Arithmetic_expressionVisitor arithmetic_expressionVisitor = new Arithmetic_expressionVisitor();
//     	  List<String> arithmetic_expressions = ctx.arithmetic_expression()
//     			  .stream()
//     			  .map(arithmetic_expression -> arithmetic_expression.accept(arithmetic_expressionVisitor))
//     			  .collect(toList()); 
//     	  Rel_opVisitor rel_opVisitor = new Rel_opVisitor();
//     	  String rel_op1 = 
//     			  ctx.rel_op() == null ? null : ctx.rel_op().accept(rel_opVisitor);  
//     	  StringBuilder temStr = new StringBuilder();
//     	  temStr.append(arithmetic_expressions.get(0));
//     	  if (rel_op1 != null) {
//     		  temStr.append(rel_op1).append(arithmetic_expressions.get(1));
//     	  }
//     	  return temStr.toString();       
//         // return new Relation(arithmetic_expression1, rel_op1, arithmetic_expression2);
//       }
//     }