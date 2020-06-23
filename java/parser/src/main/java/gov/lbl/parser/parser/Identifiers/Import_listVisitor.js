const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Import_listVisitor extends ModelicaVisitor.modelicaVisitor {
    visitImport_list(ctx) {
        var ident = ctx.IDENT()
                .stream()
                .map(IDENT => IDENT.getText())
                .collect(toList());
        var impLisStr = ident[0];
        var temStr = '';
        temStr += impLisStr;
        if (ident.length > 1) {
            for (let i = 1; i < ident.length; i++) {
                temStr += "," + ident[i];
            }
        }
        impLisStr = String(temStr);
        return impLisStr;
        //return new Import_list(ident);
    }
}

module.exports = { Import_listVisitor: Import_listVisitor }

//     private static class Import_listVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitImport_list(modelicaParser.Import_listContext ctx) {
//     	  List<String> ident = ctx.IDENT()
//     			  .stream()
//     			  .map(IDENT -> IDENT.getText())
//     			  .collect(toList());
//     	  String impLisStr = ident.get(0);
//     	  StringBuilder temStr = new StringBuilder();
//     	  temStr.append(impLisStr);
//     	  if (ident.size()>1) {
//     		  for (int i=1; i<ident.size(); i++) {
//     			  temStr.append(",").append(ident.get(i));
//     		  }
//     	  }
//     	  impLisStr = temStr.toString();
//     	  return impLisStr;
//     	  //return new Import_list(ident);
//       }
//     }