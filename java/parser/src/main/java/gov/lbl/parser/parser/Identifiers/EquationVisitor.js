const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class EquationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitEquation(ctx) {
        var simple_expressionVisitor = new Simple_expressionVisitor();
        var simple_expression_1 = String(ctx.simple_expression() == null ? null : ctx.simple_expression().accept(simple_expressionVisitor));
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var if_equationVisitor = new If_equationVisitor();
        var if_equation_1 = String(ctx.if_equation() == null ? null : ctx.if_equation().accept(if_equationVisitor));
        var for_equationVisitor = new For_equationVisitor();
        var for_equation_1 = String(ctx.for_equation() == null ? null : ctx.for_equation().accept(for_equationVisitor));
        var connect_clauseVisitor = new Connect_clauseVisitor();
        var connect_clause_1 = ctx.connect_clause() == null ? null : ctx.connect_clause().accept(connect_clauseVisitor);
        var when_equationVisitor = new When_equationVisitor();
        var when_equation_1 = String(ctx.when_equation() == null ? null : ctx.when_equation().accept(when_equationVisitor));
        var nameVisitor = new NameVisitor();
        var name_1 = String(ctx.name() == null ? null : ctx.name().accept(nameVisitor));
        var function_call_argsVisitor = new Function_call_argsVisitor();
        var function_call_args_1 = String(ctx.function_call_args() == null ? null : ctx.function_call_args().accept(function_call_argsVisitor));
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
        return new Equation(simple_expression_1, expression_1, if_equation_1, for_equation_1, connect_clause_1,
                            when_equation_1, name_1, function_call_args_1, comment_1);
    }
}

module.exports = { EquationVisitor: EquationVisitor }

//     private static class EquationVisitor extends modelicaBaseVisitor<Equation> {
//       @Override
//       public Equation visitEquation(modelicaParser.EquationContext ctx) {
//         Simple_expressionVisitor simple_expressionVisitor = new Simple_expressionVisitor();
//         String simple_expression_1 = 
//         		ctx.simple_expression() == null ? null : ctx.simple_expression().accept(simple_expressionVisitor);
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         String expression_1 = 
//         		ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);
//         If_equationVisitor if_equationVisitor = new If_equationVisitor();
//         String if_equation_1 = 
//         		ctx.if_equation() == null ? null : ctx.if_equation().accept(if_equationVisitor);
//         For_equationVisitor for_equationVisitor = new For_equationVisitor();
//         String for_equation_1 = 
//         		ctx.for_equation() == null ? null : ctx.for_equation().accept(for_equationVisitor);
//         Connect_clauseVisitor connect_clauseVisitor = new Connect_clauseVisitor();
//         Connect_clause connect_clause_1 = 
//         		ctx.connect_clause() == null ? null : ctx.connect_clause().accept(connect_clauseVisitor);
//         When_equationVisitor when_equationVisitor = new When_equationVisitor();
//         String when_equation_1 = 
//         		ctx.when_equation() == null ? null : ctx.when_equation().accept(when_equationVisitor);
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = 
//         		ctx.name() == null ? null : ctx.name().accept(nameVisitor);
//         Function_call_argsVisitor function_call_argsVisitor = new Function_call_argsVisitor();
//         String function_call_args_1 = 
//         		ctx.function_call_args() == null ? null : ctx.function_call_args().accept(function_call_argsVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = 
//         		ctx.comment() == null ? null : ctx.comment().accept(commentVisitor);
//         return new Equation(simple_expression_1, expression_1, if_equation_1, for_equation_1, connect_clause_1,
//                             when_equation_1, name_1, function_call_args_1, comment_1);
//       }
//     }