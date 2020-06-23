const ModelicaVisitor = require('../../../../../../../../../antlrVisitor/src/main/antlr4/gov/lbl/antlr4/visitor/modelicaVisitor.js');

class Type_prefixVisitor extends ModelicaVisitor.modelicaVisitor {
    visitType_prefix(ctx) {
        var flow_dec = String(ctx.FLOW() == null ? null : ctx.FLOW().getText());
        var stream_dec = String(ctx.STREAM() == null ? null : ctx.STREAM().getText());
        var disc_dec = String(ctx.DISCRETE() == null ? null : ctx.DISCRETE().getText());
        var par_dec = String(ctx.PARAMETER() == null ? null : ctx.PARAMETER().getText());
        var con_dec = String(ctx.CONSTANT() == null ? null : ctx.CONSTANT().getText());
        var in_dec = String(ctx.INPUT() == null ? null : ctx.INPUT().getText());
        var out_dec = String(ctx.OUTPUT() == null ? null : ctx.OUTPUT().getText());
        var prefix = String((flow_dec != null) ? flow_dec 
                        : (stream_dec != null ? stream_dec
                                : (disc_dec != null ? disc_dec 
                                        : (par_dec != null ? par_dec 
                                                : (con_dec != null ? con_dec
                                                        : (in_dec != null ? in_dec
                                                                : out_dec))))));
        return prefix;
        //return new Type_prefix(flow_dec, stream_dec, disc_dec, par_dec,
        //                       con_dec, in_dec, out_dec);
    }
}

module.exports = { Type_prefixVisitor: Type_prefixVisitor }

    //     private static class Type_prefixVisitor extends modelicaBaseVisitor<String> {
    //       @Override
    //       public String visitType_prefix(modelicaParser.Type_prefixContext ctx) {
    //     	  String flow_dec = 
    //     			  ctx.FLOW() == null ? null : ctx.FLOW().getText();
    //     	  String stream_dec = 
    //     			  ctx.STREAM() == null ? null : ctx.STREAM().getText();
    //     	  String disc_dec = 
    //     			  ctx.DISCRETE() == null ? null : ctx.DISCRETE().getText();
    //     	  String par_dec = 
    //     			  ctx.PARAMETER() == null ? null : ctx.PARAMETER().getText();
    //     	  String con_dec = 
    //     			  ctx.CONSTANT() == null ? null : ctx.CONSTANT().getText();
    //     	  String in_dec = 
    //     			  ctx.INPUT() == null ? null : ctx.INPUT().getText();
    //     	  String out_dec = 
    //     			  ctx.OUTPUT() == null ? null : ctx.OUTPUT().getText();
    //     	  String prefix = (flow_dec != null) ? flow_dec 
    //         		        	: (stream_dec != null ? stream_dec
    //         		        			: (disc_dec != null ? disc_dec 
    //         		        					: (par_dec != null ? par_dec 
    //         		        							: (con_dec != null ? con_dec
    //         		        									: (in_dec != null ? in_dec
    //         		        											: out_dec)))));
    //     	  return prefix;        
    //     	  //return new Type_prefix(flow_dec, stream_dec, disc_dec, par_dec,
    //     	  //                       con_dec, in_dec, out_dec);
    //       }
    //     }