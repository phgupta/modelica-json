const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Class_specifierVisitor extends ModelicaVisitor.modelicaVisitor {
    
    visitClass_specifier(ctx) {
        var long_class_specifierVisitor = new Long_class_specifierVisitor();
        var long_class_specifier_1 = 
                ctx.long_class_specifier() == null ? null : ctx.long_class_specifier().accept(long_class_specifierVisitor);
        var short_class_specifierVisitor = new Short_class_specifierVisitor();
        var short_class_specifier_1 = 
                ctx.short_class_specifier() == null ? null : ctx.short_class_specifier().accept(short_class_specifierVisitor);
        var der_class_specifierVisitor = new Der_class_specifierVisitor();
        var der_class_specifier_1 = 
                ctx.der_class_specifier() == null ? null : ctx.der_class_specifier().accept(der_class_specifierVisitor);
        return new Class_specifier(long_class_specifier_1, short_class_specifier_1, der_class_specifier_1);
    }
}

module.exports = { Class_specifierVisitor: Class_specifierVisitor }

//     private static class Class_specifierVisitor extends modelicaBaseVisitor<Class_specifier> {
//       @Override
//       public Class_specifier visitClass_specifier(modelicaParser.Class_specifierContext ctx) {
//         Long_class_specifierVisitor long_class_specifierVisitor = new Long_class_specifierVisitor();
//         Long_class_specifier long_class_specifier_1 = 
//         		ctx.long_class_specifier() == null ? null : ctx.long_class_specifier().accept(long_class_specifierVisitor);
//         Short_class_specifierVisitor short_class_specifierVisitor = new Short_class_specifierVisitor();
//         Short_class_specifier short_class_specifier_1 = 
//         		ctx.short_class_specifier() == null ? null : ctx.short_class_specifier().accept(short_class_specifierVisitor);
//         Der_class_specifierVisitor der_class_specifierVisitor = new Der_class_specifierVisitor();
//         Der_class_specifier der_class_specifier_1 = 
//         		ctx.der_class_specifier() == null ? null : ctx.der_class_specifier().accept(der_class_specifierVisitor);
//         return new Class_specifier(long_class_specifier_1, short_class_specifier_1, der_class_specifier_1);
//       }
//     }