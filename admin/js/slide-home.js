(function($){
	$(document).ready(function(){
		var slide=(function(){
			var $form=$("#gl-form"),
				$sl_blk=$('.slide-block'),
				$sl_opt=$sl_blk.find('.slide-opt'),
				$sl_add=$sl_blk.find('.slide-butt');
			var sl_frame,img_clk,id_clk;
			
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
			var add_image=function(evt){
				$img_clk=$(evt.target);	
				$id_clk=$img_clk.siblings('.fr-img-id');
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
				sl_frame.on( 'select',function(){
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
				$sl_blk.on('click','.fr-img',add_image);
				$sl_blk.on('click','.fr-del',function(){
					var $blk=$(this).parent();
					$blk.remove();
				});
				$form.submit(function(event) {
 					if($('.slide-fr').length > 0){
							var opt_arr=[];
							var $slide_fr=$('.slide-fr');
							$slide_fr.each(function(){
								var slide_dt={
									'id':$(this).find('.fr-img-id').val(),
									'url':$(this).find('.fr-url').val(),
									'title':$(this).find('.fr-title').val(),
									'desc':$(this).find('.fr-desc').val()
								}
								opt_arr.push(slide_dt);
							});
							$sl_opt.val(JSON.stringify(opt_arr));
					} else{
						$sl_opt.val('');
					}
 					
				});

			}
			return {
				'init':init()
			}
		})();
	});
})(jQuery);