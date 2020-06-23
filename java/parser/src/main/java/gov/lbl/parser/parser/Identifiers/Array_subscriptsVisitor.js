const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Array_subscriptsVisitor extends ModelicaVisitor.modelicaVisitor {

    visitArray_subscripts(ctx) {
        var subscriptVisitor = new SubscriptVisitor();
        var subscript_1 = ctx.subscript()
                .stream()
                .map(subscript => subscript.accept(subscriptVisitor))
                .collect(toList());
        var temStr1 = '';
        var arraySubStr = String(tempStr1 + "[" + subscript_1[0] + "]");
        if (subscript_1.length > 1) {
            var temStr2 = '';
            temStr2 += subscript_1[0];
            for (let i = 1; i < subscript_1.length; i += 1) {
                temStr2 += "," + subscript_1[i];
            }
            var temStr3 = '';
            arraySubStr = String(temStr3 + "[" + tempStr2 + "]");
        }
        return arraySubStr;
        //return new Array_subscripts(subscript_1);
    }
}

module.exports = { Array_subscriptsVisitor: Array_subscriptsVisitor }

//     private static class Array_subscriptsVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitArray_subscripts(modelicaParser.Array_subscriptsContext ctx) {
//     	  SubscriptVisitor subscriptVisitor = new SubscriptVisitor();
//     	  List<String> subscript_1 = ctx.subscript()
//     			  .stream()
//     			  .map(subscript -> subscript.accept(subscriptVisitor))
//     			  .collect(toList());
//     	  StringBuilder temStr1 = new StringBuilder();
//     	  String arraySubStr = temStr1.append("[")
//     			                      .append(subscript_1.get(0))
//     			                      .append("]")
//     			                      .toString();
//     	  if (subscript_1.size() > 1) {
//         	  StringBuilder temStr2 = new StringBuilder();
//         	  temStr2.append(subscript_1.get(0));
//     		  for (int i=1; i<subscript_1.size(); i++) {
//     			  temStr2.append(",").append(subscript_1.get(i));
//     		  }
//     		  StringBuilder temStr3 = new StringBuilder();
//     		  arraySubStr = temStr3.append("[")
//     				               .append(temStr2.toString())
//     				               .append("]")
//     				               .toString();
//     	  } 
//     	  return arraySubStr;       
//     	  //return new Array_subscripts(subscript_1);
//       }
//     }