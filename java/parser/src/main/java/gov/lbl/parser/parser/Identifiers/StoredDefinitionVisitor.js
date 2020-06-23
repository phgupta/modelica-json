const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class StoredDefinitionVisitor extends ModelicaVisitor.modelicaVisitor {
    
//     constructor() { super() }

    visitStored_definition(ctx) {

        var within_dec = ctx.WITHIN() == null ? null : ctx.WITHIN()           		
                .stream() 
                .map(WITHIN => WITHIN.getText())
                .collect(toList());
        var nameVisitor = new NameVisitor();
        var names = ctx.name() == null ? null : ctx.name()
                .stream()
                .map(name => name.accept(nameVisitor))
                .collect(toList());
        var final_dec = ctx.FINAL() == null ? null : ctx.FINAL()
                .stream()
                .map(FINAL => FINAL.getText())
                .collect(toList());
        var class_definitionVisitor = new Class_definitionVisitor();
        var class_definitions = ctx.class_definition()
                .stream()
                .map(class_definition => class_definition.accept(class_definitionVisitor))
                .collect(toList());
        return new Stored_definition(within_dec, final_dec, names, class_definitions);
    }
}

module.exports = { StoredDefinitionVisitor: StoredDefinitionVisitor }

// private static class Stored_definitionVisitor extends modelicaBaseVisitor<Stored_definition> {
//     @Override
//     public Stored_definition visitStored_definition(modelicaParser.Stored_definitionContext ctx) {
//       System.out.println("visitStored_definition");
//       List<String> within_dec = ctx.WITHIN() == null ? null : ctx.WITHIN()           		
//               .stream() 
//               .map(WITHIN -> WITHIN.getText())
//               .collect(toList());
//       NameVisitor nameVisitor = new NameVisitor();
//       List<String> names = ctx.name() == null ? null : ctx.name()
//               .stream()
//               .map(name -> name.accept(nameVisitor))
//               .collect(toList());
//       List<String> final_dec = ctx.FINAL() == null ? null : ctx.FINAL()
//               .stream()
//               .map(FINAL -> FINAL.getText())
//               .collect(toList());
//       Class_definitionVisitor class_definitionVisitor = new Class_definitionVisitor();
//       List<Class_definition> class_definitions = ctx.class_definition()
//               .stream()
//               .map(class_definition -> class_definition.accept(class_definitionVisitor))
//               .collect(toList());
//       return new Stored_definition(within_dec, final_dec, names, class_definitions);
//     }
//   }