const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class PrimaryVisitor extends ModelicaVisitor.modelicaVisitor {
    visitPrimary(ctx) {
        var num_dec = String(ctx.UNSIGNED_NUMBER() == null ? null : ctx.UNSIGNED_NUMBER().getText());
        var str_dec = String(ctx.STRING() == null ? null : ctx.STRING().getText());
        var false_dec = String(ctx.FALSE() == null ? null : ctx.FALSE().getText());
        var true_dec = String(ctx.TRUE() == null ? null : ctx.TRUE().getText());
        var der_der = String(ctx.DER() == null ? null : ctx.DER().getText());
        var init_dec = String(ctx.INITIAL() == null ? null : ctx.INITIAL().getText());
        var end_dec = String(ctx.END() == null ? null : ctx.END().getText());      
        
        var nameVisitor = new NameVisitor();
        var name1 = String(ctx.name() == null ? null : ctx.name().accept(nameVisitor));        
        
        var function_call_argsVisitor = new Function_call_argsVisitor();
        var function_call_args1 = String(ctx.function_call_args() == null ? null : ctx.function_call_args().accept(function_call_argsVisitor));
        
        var component_referenceVisitor = new Component_referenceVisitor();
        var component_reference1 = String(ctx.component_reference() == null ? null : ctx.component_reference().accept(component_referenceVisitor));
        
        var output_expression_listVisitor = new Output_expression_listVisitor();
        var output_expression_list1 = String(ctx.output_expression_list() == null ? null : ctx.output_expression_list().accept(output_expression_listVisitor));
        
        var expression_listVisitor = new Expression_listVisitor();
        var expression_list_1 = ctx.expression_list() == null ? null : ctx.expression_list()
                .stream()
                .map(expression_list => expression_list.accept(expression_listVisitor))
                .collect(toList());
        var semiColon = ctx.SYMBOL_SEMICOLON() == null ? null : ctx.SYMBOL_SEMICOLON()
                .stream()
                .map(SYMBOL_SEMICOLON => SYMBOL_SEMICOLON.getText())
                .collect(toList());
        
        var function_argumentsVisitor = new Function_argumentsVisitor();
        var function_arguments1 = String(ctx.function_arguments() == null ? null : ctx.function_arguments().accept(function_argumentsVisitor));
        
        var temStr = '';
        var priStr = num_dec;
        if (str_dec != null) {priStr = str_dec;}
        else if (false_dec != null) {priStr = false_dec;}
        else if (true_dec != null) {priStr = true_dec;}
        else if (function_call_args1 != null) {
            if (name1 != null) {
                priStr = String(temStr + name1 + " " + function_call_args1);
            }
            else if (der_der != null) {
                priStr = String(temStr + der_der + " " + function_call_args1);
            }
            else {
                priStr = String(temStr + init_dec + " " + function_call_args1);
            }
        } 
        else if (component_reference1 != null) {
            priStr = component_reference1;
        }
        else if (output_expression_list1 != null) {
            priStr = String(temStr + "(" + output_expression_list1 + ")");
        }
        else if (expression_list_1.length > 0 ) {
            temStr += expression_list_1[0];
            if (semiColon != null) {
                for (let i = 0; i < semiColon.length; i += 1) {
                    temStr += semiColon[i] + expression_list_1[i+1];
                }
            }
            var temStr2 = '';
            priStr = String(temStr2 + "[" + temStr + "]");
        } 
        else if (function_arguments1 != null) {
            priStr = String(temStr + "{" + function_arguments1 + "}");
        } 
        else if (end_dec != null) {priStr = end_dec;}
        return priStr;      
        //return new Primary(num_dec, str_dec, false_dec, true_dec, name1, der_der, init_dec,
        //                   function_call_args1, component_reference1, output_expression_list1,
        //                   expression_list_1, function_arguments1, end_dec);
    }
}

module.exports = { PrimaryVisitor: PrimaryVisitor }

//     private static class PrimaryVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitPrimary(modelicaParser.PrimaryContext ctx) {
//         String num_dec = 
//         		ctx.UNSIGNED_NUMBER() == null ? null : ctx.UNSIGNED_NUMBER().getText();
//         String str_dec = 
//         		ctx.STRING() == null ? null : ctx.STRING().getText();
//         String false_dec = 
//         		ctx.FALSE() == null ? null : ctx.FALSE().getText();
//         String true_dec = 
//         		ctx.TRUE() == null ? null : ctx.TRUE().getText();
//         String der_der = 
//         		ctx.DER() == null ? null : ctx.DER().getText();
//         String init_dec = 
//         		ctx.INITIAL() == null ? null : ctx.INITIAL().getText();
//         String end_dec = 
//         		ctx.END() == null ? null : ctx.END().getText();       
//         NameVisitor nameVisitor = new NameVisitor();
//         String name1 = 
//         		ctx.name() == null ? null : ctx.name().accept(nameVisitor);        
//         Function_call_argsVisitor function_call_argsVisitor = new Function_call_argsVisitor();
//         String function_call_args1 = 
//         		ctx.function_call_args() == null ? null : ctx.function_call_args().accept(function_call_argsVisitor);
//         Component_referenceVisitor component_referenceVisitor = new Component_referenceVisitor();
//         String component_reference1 = 
//         		ctx.component_reference() == null ? null : ctx.component_reference().accept(component_referenceVisitor);
//         Output_expression_listVisitor output_expression_listVisitor = new Output_expression_listVisitor();
//         String output_expression_list1 = 
//         		ctx.output_expression_list() == null ? null : ctx.output_expression_list().accept(output_expression_listVisitor);
//         Expression_listVisitor expression_listVisitor = new Expression_listVisitor();
//         List<String> expression_list_1 = ctx.expression_list() == null ? null : ctx.expression_list()
//               .stream()
//               .map(expression_list -> expression_list.accept(expression_listVisitor))
//               .collect(toList());
//         List<String> semiColon = ctx.SYMBOL_SEMICOLON() == null ? null : ctx.SYMBOL_SEMICOLON()
//         		.stream()
//         		.map(SYMBOL_SEMICOLON -> SYMBOL_SEMICOLON.getText())
//         		.collect(toList());
//         Function_argumentsVisitor function_argumentsVisitor = new Function_argumentsVisitor();
//         String function_arguments1 = 
//         		ctx.function_arguments() == null ? null : ctx.function_arguments().accept(function_argumentsVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String priStr = num_dec;
//         if (str_dec != null) {priStr = str_dec;}
//         else if (false_dec != null) {priStr = false_dec;}
//         else if (true_dec != null) {priStr = true_dec;}
//         else if (function_call_args1 != null) {
//         	if (name1 != null) {
//         		priStr = temStr.append(name1).append(" ").append(function_call_args1).toString();}
//         	else if (der_der != null) {
//         		priStr = temStr.append(der_der).append(" ").append(function_call_args1).toString();}
//         	else {
//         		priStr = temStr.append(init_dec).append(" ").append(function_call_args1).toString();}
//         	} 
//         else if (component_reference1 != null) {
//         	priStr = component_reference1;}
//         else if (output_expression_list1 != null) {
//         	priStr = temStr.append("(").append(output_expression_list1).append(")").toString();}
//         else if (expression_list_1.size() > 0 ) {
//         	temStr.append(expression_list_1.get(0));
//         	if (semiColon != null) {
//         		for (int i=0; i<semiColon.size(); i++) {
//         			temStr.append(semiColon.get(i)).append(expression_list_1.get(i+1));
//         		}
//         	}
//         	StringBuilder temStr2 = new StringBuilder();
//         	priStr = temStr2.append("[").append(temStr.toString()).append("]").toString(); } 
//         else if (function_arguments1 != null) {
//         	priStr = temStr.append("{").append(function_arguments1).append("}").toString(); } 
//         else if (end_dec != null) {priStr = end_dec;}
//         return priStr;      
//         //return new Primary(num_dec, str_dec, false_dec, true_dec, name1, der_der, init_dec,
//         //                   function_call_args1, component_reference1, output_expression_list1,
//         //                   expression_list_1, function_arguments1, end_dec);
//       }
//     }