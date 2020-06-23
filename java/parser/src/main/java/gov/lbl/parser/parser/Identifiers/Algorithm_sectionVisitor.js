const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Algorithm_sectionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitAlgorithm_section(ctx) {
        var init_dec = String(ctx.INITIAL() == null ? null : ctx.INITIAL().getText());
        var alg_dec = String(ctx.ALGORITHM().getText());
        var statementVisitor = new StatementVisitor();
        var statement_1 = ctx.statement() == null ? null : ctx.statement()
                .stream()
                .map(statement => statement.accept(statementVisitor))
                .collect(toList());
        var temStr = '';
        var algSecStr = String((init_dec != null) ? (temStr + init_dec + " " + alg_dec)
                                                : alg_dec));
        if (statement_1.length > 0) {
            var temStr2 = '';
            temStr2 += algSecStr + "\n";
            for (let i = 0; i < statement_1.length; i++) {
                temStr2 += statement_1 + ";" + "\n";
            }
            algSecStr = String(temStr2);
        }
        return algSecStr;
        //return new Algorithm_section(init_dec, alg_dec, statement_1);
    }
}

module.exports = { Algorithm_sectionVisitor: Algorithm_sectionVisitor }

//     private static class Algorithm_sectionVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitAlgorithm_section(modelicaParser.Algorithm_sectionContext ctx) {
//         String init_dec = 
//         		ctx.INITIAL() == null ? null : ctx.INITIAL().getText();
//         String alg_dec = ctx.ALGORITHM().getText();
//         StatementVisitor statementVisitor = new StatementVisitor();
//         List<String> statement_1 = ctx.statement() == null ? null : ctx.statement()
//                 .stream()
//                 .map(statement -> statement.accept(statementVisitor))
//                 .collect(toList());
//         StringBuilder temStr = new StringBuilder();
//         String algSecStr = (init_dec != null) ? (temStr.append(init_dec).append(" ").append(alg_dec).toString()) 
//         		                              : alg_dec;
//         if (statement_1.size()>0) {
//         	StringBuilder temStr2 = new StringBuilder();
//         	temStr2.append(algSecStr).append("\n");
//         	for (int i=0; i<statement_1.size(); i++) {
//         		temStr2.append(statement_1).append(";").append("\n");
//         	}
//         	algSecStr = temStr2.toString();
//         }
//         return algSecStr;
//         //return new Algorithm_section(init_dec, alg_dec, statement_1);
//       }
//     }