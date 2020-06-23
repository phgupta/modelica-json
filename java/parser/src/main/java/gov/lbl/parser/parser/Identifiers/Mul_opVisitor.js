const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Mul_opVisitor extends ModelicaVisitor.modelicaVisitor {
    visitMul_op(ctx) {  			  	
        var mulOpe = ctx.getText(); 
        return mulOpe;
        //return new Mul_op(mul_dec);
    }
}

module.exports = { Mul_opVisitor: Mul_opVisitor }

//     private static class Mul_opVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitMul_op(modelicaParser.Mul_opContext ctx) {  			  	
//         String mulOpe = ctx.getText(); 
//         return mulOpe;
//         //return new Mul_op(mul_dec);
//       }
//     }