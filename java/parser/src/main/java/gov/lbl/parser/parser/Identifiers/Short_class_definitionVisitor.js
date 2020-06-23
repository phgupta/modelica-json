const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Short_class_definitionVisitor extends ModelicaVisitor.modelicaVisitor {
    visitShort_class_definition(ctx) {
        var class_prefixesVisitor = new Class_prefixesVisitor();
        var class_prefixes_1 = String(ctx.class_prefixes().accept(class_prefixesVisitor));
        var short_class_specifierVisitor = new Short_class_specifierVisitor();
        var shortClaSpe = ctx.short_class_specifier().accept(short_class_specifierVisitor);
        var shortClaSpeStr = '';
        var comeStr = '';    
        if (shortClaSpe.comment != null) {
            if (shortClaSpe.comment.string_comment == null && shortClaSpe.comment.annotation == null) {
                comeStr = "";
            } else if (shortClaSpe.comment.string_comment == null && shortClaSpe.comment.annotation != null) {
                var temStr = '';
                comeStr = String(temStr + "annotation (" + String(shortClaSpe.comment.annotation) + ")");
            } else if (shortClaSpe.comment.string_comment != null && shortClaSpe.comment.annotation == null) {
                comeStr = shortClaSpe.comment.string_comment;
            } else {
                var temStr = '';
                comeStr = String(temStr + shortClaSpe.comment.string_comment + " " + "annotation ("
                            + String(shortClaSpe.comment.annotation) + ")");
            }
        } else {comeStr = "";}

        if (shortClaSpe.base_prefix != null || shortClaSpe.inputName != null) {     
            var temStr = '';
            var shortClaSpeStr = String(temStr + shortClaSpe.className + " ="
                                + (shortClaSpe.base_prefix == null ? "" : (shortClaSpe.base_prefix + " "))
                                + (shortClaSpe.inputName == null ? "" : (shortClaSpe.inputName + " "))
                                + (shortClaSpe.array_subscripts == null ? "" : (shortClaSpe.array_subscripts + " "))
                                + (shortClaSpe.class_modification == null ? "" : (shortClaSpe.class_modification + " "))
                                + comeStr);  	
        } else {
            var listStr = '';
            if (shortClaSpe.list_colon == null) {
                listStr = shortClaSpe.enum_list == null ? "" : String(shortClaSpe.enum_list);        	
            } else {
                listStr = shortClaSpe.list_colon;
            }
            var temStr = '';
            shortClaSpeStr = String(temStr + shortClaSpe.className + " =" + shortClaSpe.prefix + "(" + listStr + ")" + comeStr);
        }         

        var temStr = '';
        var shoClaDef = String(temStr + class_prefixes_1 + " " + shortClaSpeStr);
        return shoClaDef;
        //return new Short_class_definition(class_prefixes_1, short_class_specifier_1);
    }
}

module.exports = { Short_class_definitionVisitor: Short_class_definitionVisitor }

//     private static class Short_class_definitionVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitShort_class_definition(modelicaParser.Short_class_definitionContext ctx) {
//         Class_prefixesVisitor class_prefixesVisitor = new Class_prefixesVisitor();
//         String class_prefixes_1 
//         	= ctx.class_prefixes().accept(class_prefixesVisitor);
//         Short_class_specifierVisitor short_class_specifierVisitor = new Short_class_specifierVisitor();
//         Short_class_specifier shortClaSpe = ctx.short_class_specifier().accept(short_class_specifierVisitor);
//         String shortClaSpeStr;
//         String comeStr;       
//     	if (shortClaSpe.comment != null) {
//     		if (shortClaSpe.comment.string_comment == null && shortClaSpe.comment.annotation == null) {
//     			comeStr = "";
//     		} else if (shortClaSpe.comment.string_comment == null && shortClaSpe.comment.annotation != null) {
//     			StringBuilder temStr = new StringBuilder();
//     			comeStr = temStr.append("annotation (")
//     					        .append(shortClaSpe.comment.annotation.toString())
//     					        .append(")").toString();
//     		} else if (shortClaSpe.comment.string_comment != null && shortClaSpe.comment.annotation == null) {
//     			comeStr = shortClaSpe.comment.string_comment;
//     		} else {
//     			StringBuilder temStr = new StringBuilder();
//     			comeStr = temStr.append(shortClaSpe.comment.string_comment).append(" ") 
//     					        .append("annotation (")
//     					        .append(shortClaSpe.comment.annotation.toString()).append(")")
//     					        .toString();
//     		}
//     	} else {
//     		comeStr = "";
//     	}
//         if (shortClaSpe.base_prefix != null || shortClaSpe.inputName != null) {     
//         	StringBuilder temStr = new StringBuilder();
//         	shortClaSpeStr = temStr.append(shortClaSpe.className).append(" =")
//         			.append((shortClaSpe.base_prefix == null ? "" : (shortClaSpe.base_prefix+ " "))) 
//         			.append((shortClaSpe.inputName == null ? "" : (shortClaSpe.inputName+" "))) 
//         			.append((shortClaSpe.array_subscripts == null ? "" : (shortClaSpe.array_subscripts+" "))) 
//         			.append((shortClaSpe.class_modification == null ? "" : (shortClaSpe.class_modification+" "))) 
//         			.append(comeStr)
//         			.toString();      	
//         } else {
//         	String listStr;
//         	if (shortClaSpe.list_colon == null) {
//         		listStr = shortClaSpe.enum_list == null ? "" : shortClaSpe.enum_list.toString();        	
//         	} else {
//         		listStr = shortClaSpe.list_colon;
//         	}
//         	StringBuilder temStr = new StringBuilder();
//         	shortClaSpeStr = temStr.append(shortClaSpe.className).append(" =")
//         			               .append(shortClaSpe.prefix).append("(").append(listStr).append(")")
//         			               .append(comeStr).toString();
//         }         
//         StringBuilder temStr = new StringBuilder();
//         String shoClaDef = temStr.append(class_prefixes_1).append(" ").append(shortClaSpeStr).toString();     
//         return shoClaDef;
//         //return new Short_class_definition(class_prefixes_1, short_class_specifier_1);
//       }
//     }