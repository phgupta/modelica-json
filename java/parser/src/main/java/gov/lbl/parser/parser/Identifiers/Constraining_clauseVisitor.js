const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Constraining_clauseVisitor extends ModelicaVisitor.modelicaVisitor {
    visitConstraining_clause(ctx) {
        var constrain_dec = String(ctx.CONSTRAINEDBY().getText());
        var nameVisitor = new NameVisitor();
        var name_1 = String(ctx.name().accept(nameVisitor));
        var class_modificationVisitor = new Class_modificationVisitor();
        var class_modification_1 = String(ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor));
        var temStr = '';
        var conClaStr = String(temStr + constrain_dec + " " + name_1);
        if (class_modification_1 != null) {
            conClaStr = String(temStr + " " + class_modification_1);
        }
        return conClaStr;
        //return new Constraining_clause(constrain_dec, name_1, class_modification_1);
    }
}

module.exports = { Constraining_clauseVisitor: Constraining_clauseVisitor }

//     private static class Constraining_clauseVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitConstraining_clause(modelicaParser.Constraining_clauseContext ctx) {
//         String constrain_dec = ctx.CONSTRAINEDBY().getText();
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = ctx.name().accept(nameVisitor);
//         Class_modificationVisitor class_modificationVisitor = new Class_modificationVisitor();
//         String class_modification_1 = 
//         		ctx.class_modification() == null ? null : ctx.class_modification().accept(class_modificationVisitor);
//         StringBuilder temStr = new StringBuilder();
//         String conClaStr = temStr.append(constrain_dec).append(" ").append(name_1).toString();
//         if (class_modification_1 != null) {
//         	conClaStr = temStr.append(" ").append(class_modification_1).toString(); }
//         return conClaStr;
//         //return new Constraining_clause(constrain_dec, name_1, class_modification_1);
//       }
//     }