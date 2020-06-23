const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class TermVisitor extends ModelicaVisitor.modelicaVisitor {
    visitTerm(ctx) {
        var mul_opVisitor = new Mul_opVisitor();
        var mul_op_1 = ctx.mul_op() == null ? null : ctx.mul_op()
                .stream()
                .map(mul_op => mul_op.accept(mul_opVisitor))
                .collect(toList());
        var factorVisitor = new FactorVisitor();
        var factors = ctx.factor()
                .stream()
                .map(factor => factor.accept(factorVisitor))
                .collect(toList());        
        var temStr = '';
        temStr += factors[0];
        if (mul_op_1 != null) {
            for (let i = 0; i < mul_op_1.length; i++) {
                temStr += mul_op_1[0] + factors[i+1];
            }
        }
        return String(temStr);		
        //return new Term(factor_1, mul_op_1, factor_2);
    }
}

module.exports = { TermVisitor: TermVisitor }

//     private static class TermVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitTerm(modelicaParser.TermContext ctx) {
//         Mul_opVisitor mul_opVisitor = new Mul_opVisitor();
//         List<String> mul_op_1 = ctx.mul_op() == null ? null : ctx.mul_op()
//                 .stream()
//                 .map(mul_op -> mul_op.accept(mul_opVisitor))
//                 .collect(toList());
//         FactorVisitor factorVisitor = new FactorVisitor();
//         List<String> factors = ctx.factor()
//               .stream()
//               .map(factor -> factor.accept(factorVisitor))
//               .collect(toList());        
//         StringBuilder temStr = new StringBuilder();
//         temStr.append(factors.get(0));
//         if (mul_op_1 != null) {
//         	for (int i=0; i<mul_op_1.size(); i++) {
//         		temStr.append(mul_op_1.get(0)).append(factors.get(i+1));
//         	}
//         }
//         return temStr.toString();		
//         //return new Term(factor_1, mul_op_1, factor_2);
//       }
//     }