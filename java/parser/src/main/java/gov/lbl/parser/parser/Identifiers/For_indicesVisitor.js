const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class For_indicesVisitor extends ModelicaVisitor.modelicaVisitor {
    visitFor_indices(ctx) {
        var for_indexVisitor = new For_indexVisitor();
        var for_index_1 = ctx.for_index()
                .stream()
                .map(for_index => for_index.accept(for_indexVisitor))
                .collect(toList());
        var temStr = '';
        temStr += for_index_1[0];
        if (for_index_1.length > 1) {
            for (let i = 1; i < for_index_1.length; i++) {
                temStr += "," + for_index_1[i];
            }
        }
        return String(temStr);
        //return new For_indices(for_index_1);
    }
}

module.exports = { For_indicesVisitor: For_indicesVisitor }

//     private static class For_indicesVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitFor_indices(modelicaParser.For_indicesContext ctx) {
//     	  For_indexVisitor for_indexVisitor = new For_indexVisitor();
//     	  List<String> for_index_1 = ctx.for_index()
//     			  .stream()
//     			  .map(for_index -> for_index.accept(for_indexVisitor))
//     			  .collect(toList());
//     	  StringBuilder temStr = new StringBuilder();   	  
//     	  temStr.append(for_index_1.get(0));
//     	  if (for_index_1.size() > 1) {
//     		  for (int i=1; i<for_index_1.size(); i++) {
//     			  temStr.append(",").append(for_index_1.get(i));
//     		  }
//     	  }
//     	  return temStr.toString();
//     	  //return new For_indices(for_index_1);
//       }
//     }