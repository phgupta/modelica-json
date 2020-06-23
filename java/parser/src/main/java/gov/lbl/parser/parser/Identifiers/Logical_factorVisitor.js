const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Logical_factorVisitor extends ModelicaVisitor.modelicaVisitor {
    visitLogical_factor(ctx) {
        not_dec = String(ctx.NOT() == null ? null : ctx.NOT().getText());
        var relationVisitor = new RelationVisitor();
        var relation = String(ctx.relation().accept(relationVisitor));
        var temStr = '';
        var logFacStr = String((not_dec != null) ? (String(temStr += not_dec + " " + relation)) 
                                                : (relation));
        return logFacStr;
        //return new Logical_factor(not_dec, relation);
    }
}

module.exports = { Logical_factorVisitor: Logical_factorVisitor }

//     private static class Logical_factorVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitLogical_factor(modelicaParser.Logical_factorContext ctx) {
//         String not_dec = 
//         		ctx.NOT() == null ? null : ctx.NOT().getText();
//         RelationVisitor relationVisitor = new RelationVisitor();
//         String relation = ctx.relation().accept(relationVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String logFacStr = (not_dec != null) ? (temStr.append(not_dec).append(" ").append(relation).toString()) 
//         		                             : (relation);        	
//         return logFacStr;
//         //return new Logical_factor(not_dec, relation);
//       }
//     }