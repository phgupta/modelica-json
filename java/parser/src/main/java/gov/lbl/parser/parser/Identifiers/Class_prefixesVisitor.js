const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Class_prefixesVisitor extends ModelicaVisitor.modelicaVisitor {
    
    visitClass_prefixes(ctx) { 	  
    
        var partial_dec = new String(ctx.PARTIAL() == null ? "" : ctx.PARTIAL().getText());
        var class_dec = new String(ctx.CLASS() == null ? "" : ctx.CLASS().getText());
        var model_dec = new String(ctx.MODEL() == null ? "" : ctx.MODEL().getText());
        var block_dec = new String(ctx.BLOCK() == null ? "" : ctx.BLOCK().getText());
        var type_dec = new String(ctx.TYPE() == null ? "" : ctx.TYPE().getText());
        var package_dec = new String(ctx.PACKAGE() == null ? "" : ctx.PACKAGE().getText());
        var operator_dec = new String(ctx.OPERATOR() == null ? "" : ctx.OPERATOR().getText());
        var record_dec = new String(ctx.RECORD() == null ? "" : ctx.RECORD().getText());
        var expandable_dec = new String(ctx.EXPANDABLE() == null ? "" : ctx.EXPANDABLE().getText());
        var connector_dec = new String(ctx.CONNECTOR() == null ? "" : ctx.CONNECTOR().getText());
        var pure_dec = new String(ctx.PURE() == null ? "" : ctx.PURE().getText());
        var impure_dec = new String(ctx.IMPURE() == null ? "" : ctx.IMPURE().getText());
        var function_dec = new String(ctx.FUNCTION() == null ? "" : ctx.FUNCTION().getText());
        var other_dec;
        
        if ((!function_dec.isEmpty()) && (connector_dec.isEmpty()) && (record_dec.isEmpty())) {
            var tempStr = '';
            if (operator_dec.isEmpty()) {
                tempStr = function_dec;
            } else {
                tempStr += operator_dec + ' ' + function_dec;
            }     	
            if (pure_dec.isEmpty() && impure_dec.isEmpty()) {
                other_dec = tempStr;        		       		
            } else {
                other_dec = tempStr + pure_dec + impure_dec + ' ' + tempStr;
            }         
        } else if ((!connector_dec.isEmpty()) && (function_dec.isEmpty()) && (record_dec.isEmpty())) {
            var tempStr = '';
            other_dec = (expandable_dec.isEmpty()) ? connector_dec 
                                                    : (temStr + expandable_dec + ' ' + connector_dec);
        } else if ((!record_dec.isEmpty()) && (function_dec.isEmpty()) && (connector_dec.isEmpty())) {
            var temStr = '';
            other_dec = (operator_dec.isEmpty()) ? record_dec 
                                                    : (temStr + operator_dec + ' ' + record_dec);
        } else {
            var tempStr = '';
            tempStr += (class_dec != null ? class_dec : "")
                    + (model_dec != null ? model_dec : "")
                    + (block_dec != null ? block_dec : "")
                    + (type_dec != null ? type_dec : "")
                    + (package_dec != null ? package_dec : "")
                    + (operator_dec != null ? operator_dec : "");
            other_dec = temStr;
        }

        var temStr = '';
        var claPreStr = String(
            (!partial_dec.isEmpty()) ? (tempStr + partial_dec + ' ' + other_dec) 
                                        : other_dec
        );

        return claPreStr;
    }
}

module.exports = { Class_prefixesVisitor: Class_prefixesVisitor }

//     private static class Class_prefixesVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitClass_prefixes(modelicaParser.Class_prefixesContext ctx) { 	  
//         String partial_dec = 
//         		ctx.PARTIAL() == null ? "" : ctx.PARTIAL().getText();
//         String class_dec = 
//         		ctx.CLASS() == null ? "" : ctx.CLASS().getText();
//         String model_dec = 
//         		ctx.MODEL() == null ? "" : ctx.MODEL().getText();
//         String block_dec = 
//         		ctx.BLOCK() == null ? "" : ctx.BLOCK().getText();
//         String type_dec = 
//         		ctx.TYPE() == null ? "" : ctx.TYPE().getText();
//         String package_dec = 
//         		ctx.PACKAGE() == null ? "" : ctx.PACKAGE().getText();
//         String operator_dec = 
//         		ctx.OPERATOR() == null ? "" : ctx.OPERATOR().getText();
//         String record_dec = 
//         		ctx.RECORD() == null ? "" : ctx.RECORD().getText();
//         String expandable_dec = 
//         		ctx.EXPANDABLE() == null ? "" : ctx.EXPANDABLE().getText();
//         String connector_dec = 
//         		ctx.CONNECTOR() == null ? "" : ctx.CONNECTOR().getText();
//         String pure_dec = 
//         		ctx.PURE() == null ? "" : ctx.PURE().getText();
//         String impure_dec = 
//         		ctx.IMPURE() == null ? "" : ctx.IMPURE().getText();
//         String function_dec = 
//         		ctx.FUNCTION() == null ? "" : ctx.FUNCTION().getText();
//         String other_dec;
//         if ((!function_dec.isEmpty()) && (connector_dec.isEmpty()) && (record_dec.isEmpty())) {
//         	String tempStr;
//         	if (operator_dec.isEmpty()) {
//         		tempStr = function_dec;
//     		} else {
//     	        StringBuilder temStr = new StringBuilder();
//     			tempStr = temStr.append(operator_dec).append(" ").append(function_dec).toString();
//     		}     	
//         	if (pure_dec.isEmpty() && impure_dec.isEmpty()) {
//         		other_dec = tempStr;        		       		
//         	} else {
//         		StringBuilder temStr = new StringBuilder();
//         		other_dec = temStr.append(pure_dec).append(impure_dec).append(" ").append(tempStr).toString();
//         	}         
//         } else if ((!connector_dec.isEmpty()) && (function_dec.isEmpty()) && (record_dec.isEmpty())) {
//         	StringBuilder temStr = new StringBuilder();
//         	other_dec = (expandable_dec.isEmpty()) ? connector_dec 
//         			                               : (temStr.append(expandable_dec).append(" ").append(connector_dec).toString());
//         } else if ((!record_dec.isEmpty()) && (function_dec.isEmpty()) && (connector_dec.isEmpty())) {
//         	StringBuilder temStr = new StringBuilder();
//         	other_dec = (operator_dec.isEmpty()) ? record_dec 
//         			                             : (temStr.append(operator_dec).append(" ").append(record_dec).toString());
//         } else {
//         	StringBuilder temStr = new StringBuilder();
//         	temStr.append(class_dec != null ? class_dec : "")
//         	      .append(model_dec != null ? model_dec : "")
//         	      .append(block_dec != null ? block_dec : "")
//         	      .append(type_dec != null ? type_dec : "")
//         	      .append(package_dec != null ? package_dec : "")
//         	      .append(operator_dec != null ? operator_dec : "");
//         	other_dec = temStr.toString();
//         }
//         StringBuilder temStr = new StringBuilder();
//         String claPreStr = 
//         		(!partial_dec.isEmpty()) ? (temStr.append(partial_dec).append(" ").append(other_dec).toString()) 
//         				                 : other_dec;
        		
//         return claPreStr;
//       }
//     }