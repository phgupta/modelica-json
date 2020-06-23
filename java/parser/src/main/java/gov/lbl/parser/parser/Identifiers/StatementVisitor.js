const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class StatementVisitor extends ModelicaVisitor.modelicaVisitor {
    visitStatement(ctx) {
        var bre_dec = String(ctx.BREAK() == null ? "" : ctx.BREAK().getText());
        var ret_dec = String(ctx.RETURN() == null ? "" : ctx.RETURN().getText());
        var component_referenceVisitor = new Component_referenceVisitor();
        var component_reference_1 = String(ctx.component_reference() == null ? "" : ctx.component_reference().accept(component_referenceVisitor));
        var expressionVisitor = new ExpressionVisitor();
        var expression_1 = String(ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor));
        var function_call_argsVisitor = new Function_call_argsVisitor();
        var function_call_args_1 = String(ctx.function_call_args() == null ? "" : ctx.function_call_args().accept(function_call_argsVisitor));
        var output_expression_listVisitor = new Output_expression_listVisitor();
        var output_expression_list_1 = String(ctx.output_expression_list() == null ? null : ctx.output_expression_list().accept(output_expression_listVisitor));
        var if_statementVisitor = new If_statementVisitor();
        var if_statement_1 = String(ctx.if_statement() == null ? "" : ctx.if_statement().accept(if_statementVisitor));
        var for_statementVisitor = new For_statementVisitor();
        var for_statement_1 = String(ctx.for_statement() == null ? "" : ctx.for_statement().accept(for_statementVisitor));
        var while_statementVisitor = new While_statementVisitor();
        var while_statement_1 = String(ctx.while_statement() == null ? "" : ctx.while_statement().accept(while_statementVisitor));
        var when_statementVisitor = new When_statementVisitor();
        var when_statement_1 = String(ctx.when_statement() == null ? "" : ctx.when_statement().accept(when_statementVisitor));
        var commentVisitor = new CommentVisitor();
        var comment_1 = ctx.comment().accept(commentVisitor);
        
        // CHECK
        var comStr = String.valueOf(comment_1);            	  	

        var temStr1 = '';
        var temStr2 = '';
        var temStr3 = '';

        var temp1 = String((expression_1 == null) ? "" : (temStr1.append("=").append(expression_1).toString()));
        var temp2 = String((output_expression_list_1 == null) ? "" 
                        : (temStr2 + "(" + output_expression_list_1 + ")" + ":=" + component_reference_1 + " " + function_call_args_1));
        var staStr = String(temStr3 + component_reference_1 + temp1 + function_call_args_1 + temp2 + bre_dec + ret_dec 
                            + if_statement_1 + for_statement_1 + while_statement_1 + when_statement_1 + comStr);
        return staStr;
        //return new Statement(bre_dec, ret_dec, component_reference_1, expression_1, function_call_args_1,
        //                    output_expression_list_1, if_statement_1, for_statement_1, while_statement_1, when_statement_1, comment_1);
    }
}

module.exports = { StatementVisitor: StatementVisitor }

//     private static class StatementVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitStatement(modelicaParser.StatementContext ctx) {
//         String bre_dec = 
//         		ctx.BREAK() == null ? "" : ctx.BREAK().getText();
//         String ret_dec = 
//         		ctx.RETURN() == null ? "" : ctx.RETURN().getText();
//         Component_referenceVisitor component_referenceVisitor = new Component_referenceVisitor();
//         String component_reference_1 = 
//         		ctx.component_reference() == null ? "" : ctx.component_reference().accept(component_referenceVisitor);
//         ExpressionVisitor expressionVisitor = new ExpressionVisitor();
//         String expression_1 = 
//         		ctx.expression() == null ? null : ctx.expression().accept(expressionVisitor);
//         Function_call_argsVisitor function_call_argsVisitor = new Function_call_argsVisitor();
//         String function_call_args_1 = 
//         		ctx.function_call_args() == null ? "" : ctx.function_call_args().accept(function_call_argsVisitor);
//         Output_expression_listVisitor output_expression_listVisitor = new Output_expression_listVisitor();
//         String output_expression_list_1 = 
//         		ctx.output_expression_list() == null ? null : ctx.output_expression_list().accept(output_expression_listVisitor);
//         If_statementVisitor if_statementVisitor = new If_statementVisitor();
//         String if_statement_1 = 
//         		ctx.if_statement() == null ? "" : ctx.if_statement().accept(if_statementVisitor);
//         For_statementVisitor for_statementVisitor = new For_statementVisitor();
//         String for_statement_1 = 
//         		ctx.for_statement() == null ? "" : ctx.for_statement().accept(for_statementVisitor);
//         While_statementVisitor while_statementVisitor = new While_statementVisitor();
//         String while_statement_1 = 
//         		ctx.while_statement() == null ? "" : ctx.while_statement().accept(while_statementVisitor);
//         When_statementVisitor when_statementVisitor = new When_statementVisitor();
//         String when_statement_1 = 
//         		ctx.when_statement() == null ? "" : ctx.when_statement().accept(when_statementVisitor);
//         CommentVisitor commentVisitor = new CommentVisitor();
//         Comment comment_1 = ctx.comment().accept(commentVisitor);
//         String comStr = String.valueOf(comment_1);            	  	
//         StringBuilder temStr1 = new StringBuilder();
//         StringBuilder temStr2 = new StringBuilder();
//         StringBuilder temStr3 = new StringBuilder();
//         String temp1 = (expression_1 == null) ? "" : (temStr1.append("=").append(expression_1).toString());
//         String temp2 = (output_expression_list_1 == null) ? "" 
//         		       : (temStr2.append("(").append(output_expression_list_1).append(")").append(":=")
//         		    		     .append(component_reference_1).append(" ").append(function_call_args_1)
//         		    		     .toString());
//         String staStr = temStr3.append(component_reference_1).append(temp1).append(function_call_args_1) 
//         		               .append(temp2).append(bre_dec).append(ret_dec).append(if_statement_1)
//         		               .append(for_statement_1).append(while_statement_1)
//         		               .append(when_statement_1).append(comStr)
//         		               .toString();      
//         return staStr;
//         //return new Statement(bre_dec, ret_dec, component_reference_1, expression_1, function_call_args_1,
//         //                    output_expression_list_1, if_statement_1, for_statement_1, while_statement_1, when_statement_1, comment_1);
//       }
//     }