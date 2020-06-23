const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class String_commentVisitor extends ModelicaVisitor.modelicaVisitor {
    
    visitString_comment(ctx) {
    var str_dec = ctx.STRING() == null ? null : ctx.STRING()
            .stream()
            .map(STRING => STRING.getText())
            .collect(toList());
    
    var strCom = "";
    if (str_dec.length == 1) {
        strCom = str_dec.get(0);
    } else if (str_dec.length > 1) {       	
        var temStr = '';
        tempStr += str_dec[0];
        for (let i = 1; i < str_dec.length; i++) {
            temStr += '+' + str_dec[i];
        }
        strCom = temStr.toString();
    }
    return strCom;
    //return new String_comment(str_dec);
    }
}

module.exports = { String_commentVisitor: String_commentVisitor }

//     public static class String_commentVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitString_comment(modelicaParser.String_commentContext ctx) {
//         List<String> str_dec = ctx.STRING() == null ? null : ctx.STRING()
//         		.stream()
//         		.map(STRING -> STRING.getText())
//         		.collect(toList());
//         String strCom = "";
//         if (str_dec.size() == 1) {
//         	strCom = str_dec.get(0);
//         } else if (str_dec.size() > 1) {       	
//         	StringBuilder temStr = new StringBuilder();
//         	temStr.append(str_dec.get(0));
//         	for (int i=1; i<str_dec.size(); i++) {
//         		temStr.append("+").append(str_dec.get(i));
//         	}
//         	strCom = temStr.toString();
//         }
//         return strCom;
//         //return new String_comment(str_dec);
//       }
//     }