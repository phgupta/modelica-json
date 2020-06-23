const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Add_opVisitor extends ModelicaVisitor.modelicaVisitor {
    visitAdd_op(ctx) {
        var addOpe = ctx.getText(); 
        return addOpe;
        //return new Add_op(add_dec);
    }
}

module.exports = { Add_opVisitor: Add_opVisitor }

//     private static class Add_opVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitAdd_op(modelicaParser.Add_opContext ctx) {
//     	String addOpe = ctx.getText(); 
//     	return addOpe;
//         //return new Add_op(add_dec);
//       }
//     }