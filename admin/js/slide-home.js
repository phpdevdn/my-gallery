(function($){
	$(document).ready(function(){
		var slide=(function(){
			var $sl_blk=$('.slide-block'),
				$sl_opt=$sl_blk.find('.slide-opt'),
				$sl_add=$sl_blk.find('.slide-butt');
			var sl_frame;
			
			var sl_fr=function(){
				var $fr_blk=$("<div></div>").addClass('slide-fr');
				var $del=$('<span></span>').addClass('fr-del').text('x');
				var $img=$("<img>").attr({ 'src':'','width':'100px','height':'100px','alt':'','class':'fr-img'});
				var $input=$("<input>").attr({ 'type':'hidden','class':'fr-img-id','value':''});
				var $url=inp_group('post url','fr-url');
				var $title=inp_group('title','fr-title');
				var $desc=inp_group('description','fr-desc','textarea');
 				$fr_blk.append($del,$img,$input,$url,$title,$desc);
				return $fr_blk
			}
			var inp_group=function(text_lb,cl_inp,form){
				var $blk=$('<div></div>').addClass('input-gr');
				var $label=$('<label></label>').text(text_lb);
				if(form=='textarea'){
						var $input=$('<textarea></textarea>').attr({ 'class':cl_inp, 'rows':2});
				} else{
						var $input=$('<input>').attr({ 'type':'text', 'class':cl_inp, 'value':''});
				}
				$blk.append($label,$input);
				return $blk ;
			}
			var add_image=function(element){
				var $img_clk=$(element);
				var $id_clk=$img_clk.siblings('.fr-img-id');
				console.log($img_clk);
 			    if ( sl_frame ) {
			      sl_frame.open();
			      return;
			    }
			    sl_frame = wp.media({
				      title: 'Select or Upload slide image',
				      button: {
				        text: 'Use this image'
				      },
				      multiple: false  
			    });
			    sl_frame.on( 'select', function() {
					var attachment = sl_frame.state().get('selection').first().toJSON();
					$img_clk.attr({'src':attachment.url});
					$id_clk.attr({'value':attachment.id});
				});
				sl_frame.open();
			}
			var init=function(){
				listend();
			}
			var listend=function(){
				$sl_add.on('click',function(evt){
					evt.preventDefault();
					$sl_blk.append(sl_fr());
				});
				$sl_blk.on('click','.fr-img',function(evt){
					add_image(evt.target);
				});
				$sl_blk.on('click','.fr-del',function(){
					var $blk=$(this).parent();
					$blk.remove();
				});

			}
			return {
				'init':init()
			}
		})();
	});
})(jQuery);