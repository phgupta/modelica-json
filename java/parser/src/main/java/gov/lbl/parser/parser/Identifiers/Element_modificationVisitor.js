const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Element_modificationVisitor extends ModelicaVisitor.modelicaVisitor {
    visitElement_modification(ctx) {
        var nameVisitor = new NameVisitor();
        var name_1 = String(ctx.name().accept(nameVisitor));
        var modificationVisitor = new ModificationVisitor();
        var modification_1 = String(ctx.modification() == null ? null : ctx.modification().accept(modificationVisitor));        
        //String modStr = String.valueOf(modification_1);
        var string_commentVisitor = new String_commentVisitor();
        var string_comment_1 = String(ctx.string_comment().accept(string_commentVisitor));
        var temStr1 = '';
        var temStr2 = '';
        var eleModStr = (modification_1 == null) 
                            ? (String(temStr1 + name_1 + " " + string_comment_1))
                            : (String(temStr2 + name_1 + " " + modification_1 + " " + string_comment_1));
        return eleModStr;		    
        //return new Element_modification(name_1, modification_1, string_comment_1);
    }
}

module.exports = { Element_modificationVisitor: Element_modificationVisitor }

//     private static class Element_modificationVisitor extends modelicaBaseVisitor<String> {
//       @Override
//       public String visitElement_modification(modelicaParser.Element_modificationContext ctx) {
//         NameVisitor nameVisitor = new NameVisitor();
//         String name_1 = ctx.name().accept(nameVisitor);
//         ModificationVisitor modificationVisitor = new ModificationVisitor();
//         String modification_1 = 
//         		ctx.modification() == null ? null : ctx.modification().accept(modificationVisitor);        
//         //String modStr = String.valueOf(modification_1);
//         String_commentVisitor string_commentVisitor = new String_commentVisitor();
//         String string_comment_1 = ctx.string_comment().accept(string_commentVisitor);
//         StringBuilder temStr1 = new StringBuilder();
//         StringBuilder temStr2 = new StringBuilder();
//         String eleModStr = (modification_1 == null) 
//         		           ? (temStr1.append(name_1).append(" ").append(string_comment_1).toString())
//         		           : (temStr2.append(name_1).append(" ").append(modification_1).append(" ").append(string_comment_1).toString());
//         return eleModStr;		    
//         //return new Element_modification(name_1, modification_1, string_comment_1);
//       }
//     }