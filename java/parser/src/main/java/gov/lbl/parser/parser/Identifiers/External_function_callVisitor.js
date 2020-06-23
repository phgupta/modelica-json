const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class External_function_callVisitor extends ModelicaVisitor.modelicaVisitor {
    visitExternal_function_call(ctx) {
        var ident = String(ctx.IDENT().getText());
        var component_referenceVisitor = new Component_referenceVisitor();
        var component_reference_1 = String(ctx.component_reference() == null ? null : ctx.component_reference().accept(component_referenceVisitor));
        var expression_listVisitor = new Expression_listVisitor();
        var expression_list_1 = String(ctx.expression_list() == null ? "" : ctx.expression_list().accept(expression_listVisitor));   	    	  
        var temStr1 = '';
        var temStr2 = '';
        var extFunCalStr = String((component_reference_1 != null) 
                ? (String(temStr1 + component_reference_1 + "=" + ident + "(" + expression_list_1 + ")"))
                : (String(temStr2 + ident + "(" + expression_list_1 + ")")));
        return extFunCalStr;   
        //return new External_function_call(ident, component_reference_1, expression_list_1);
    }
}

module.exports = { External_function_callVisitor: External_function_callVisitor }

//     private static class External_function_callVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitExternal_function_call(modelicaParser.External_function_callContext ctx) {
//     	  String ident = ctx.IDENT().getText();
//     	  Component_referenceVisitor component_referenceVisitor = new Component_referenceVisitor();
//     	  String component_reference_1 = 
//     			  ctx.component_reference() == null ? null : ctx.component_reference().accept(component_referenceVisitor);
//     	  Expression_listVisitor expression_listVisitor = new Expression_listVisitor();
//     	  String expression_list_1 = 
//     			  ctx.expression_list() == null ? "" : ctx.expression_list().accept(expression_listVisitor);
//     	  StringBuilder temStr1 = new StringBuilder();
//     	  StringBuilder temStr2 = new StringBuilder();    	    	  
//     	  String extFunCalStr = (component_reference_1 != null) 
//     			  ? (temStr1.append(component_reference_1).append("=").append(ident).append("(").append(expression_list_1).append(")").toString())
//     			  : (temStr2.append(ident).append("(").append(expression_list_1).append(")").toString());
//     	  return extFunCalStr;   
//     	  //return new External_function_call(ident, component_reference_1, expression_list_1);
//       }
//     }