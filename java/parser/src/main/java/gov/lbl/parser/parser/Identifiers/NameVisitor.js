const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class NameVisitor extends ModelicaVisitor.modelicaVisitor {

    visitName(ctx) {
        var dots = ctx.SYMBOL_DOT()==null ? null : ctx.SYMBOL_DOT()
                .stream()
                .map(SYMBOL_DOT => SYMBOL_DOT.getText())
                .collect(toList());
        var ident = ctx.IDENT()
                .stream()
                .map(IDENT => IDENT.getText())
                .collect(toList());
        var temStr = '';
        if (dots == null) {
            temStr += ident[0];
        } else {
            if (dots.length == ident.length) {
                for (let i = 0; i < ident.length; i++) {
                    temStr += dots[i] + ident[i];
                }
            } else {
                temStr.append(ident.get(0));
                for (let i = 1; i < ident.length; i++) {
                    temStr += dots[i-1] + ident[i];
                }
            }
        }              
        return temStr;
        //return new Name(dots, ident);
    }
}

module.exports = { NameVisitor: NameVisitor }

//     private static class NameVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitName(modelicaParser.NameContext ctx) {
//     	List<String> dots = ctx.SYMBOL_DOT()==null ? null : ctx.SYMBOL_DOT()
//     			.stream()
//     			.map(SYMBOL_DOT -> SYMBOL_DOT.getText())
//     			.collect(toList());
//         List<String> ident = ctx.IDENT()
//         		.stream()
//         		.map(IDENT -> IDENT.getText())
//         		.collect(toList());
//         StringBuilder temStr = new StringBuilder();
//         if (dots == null) {
//         	temStr.append(ident.get(0));
//         } else {
//         	if (dots.size() == ident.size()) {
//         		for (int i=0; i<ident.size(); i++) {
//         			temStr.append(dots.get(i)).append(ident.get(i));
//         		}
//         	} else {
//         		temStr.append(ident.get(0));
//         		for (int i=1; i<ident.size(); i++) {
//         			temStr.append(dots.get(i-1)).append(ident.get(i));
//         		}
//         	}
//         }              
//         return temStr.toString();
//         //return new Name(dots, ident);
//       }
//     }