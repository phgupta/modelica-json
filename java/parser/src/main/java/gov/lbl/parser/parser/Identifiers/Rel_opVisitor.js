const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Rel_opVisitor extends ModelicaVisitor.modelicaVisitor {
    visitRel_op(ctx) {
        var relOpe = ctx.getText();  
        return relOpe;
        //return new Rel_op(ope_dec);
    }
}

module.exports = { Rel_opVisitor: Rel_opVisitor }

//     private static class Rel_opVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitRel_op(modelicaParser.Rel_opContext ctx) {
//     	String relOpe = ctx.getText();  
//     	return relOpe;
//         //return new Rel_op(ope_dec);
//       }
//     }