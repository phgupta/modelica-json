const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Equation_sectionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitEquation_section(ctx) {
        var init_dec = String(ctx.INITIAL() == null ? null : ctx.INITIAL().getText());
        var equ_dec = String(ctx.EQUATION().getText());
        var equationVisitor = new EquationVisitor();
        var equation_1 = ctx.equation() == null ? null : ctx.equation()
                .stream()
                .map(equation => equation.accept(equationVisitor))
                .collect(toList());
        return new Equation_section(init_dec, equ_dec, equation_1);
    }
}

module.exports = { Equation_sectionVisitor: Equation_sectionVisitor }

//     private static class Equation_sectionVisitor extends modelicaBaseVisitor<Equation_section> {
//       @Override
//       public Equation_section visitEquation_section(modelicaParser.Equation_sectionContext ctx) {
//         String init_dec = 
//         		ctx.INITIAL() == null ? null : ctx.INITIAL().getText();
//         String equ_dec = ctx.EQUATION().getText();
//         EquationVisitor equationVisitor = new EquationVisitor();
//         List<Equation> equation_1 = ctx.equation() == null ? null : ctx.equation()
//                 .stream()
//                 .map(equation -> equation.accept(equationVisitor))
//                 .collect(toList());
//         return new Equation_section(init_dec, equ_dec, equation_1);
//       }
//     }