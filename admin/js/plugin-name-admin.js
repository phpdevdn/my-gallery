jQuery(function( $ ) {
 	var gl_blk=$('.my-gallery');
 	gl_blk.each(function(){
 		var gl_frame,
			gl_code=$(this).find('.gl-inp'),
			gl_edit=$(this).find('.gl-edit'),
			gl_del=$(this).find('.gl-delete');
 		/*shortcode gallery*/
			var selection=function() {
		    			var shortcode = wp.shortcode.next( 'gallery', gl_code.attr('value') ),
				        defaultPostId = wp.media.gallery.defaults.id,
				        attachments, selection;
					    if ( ! shortcode )
					        return;
					      shortcode = shortcode.shortcode;
					    if ( _.isUndefined( shortcode.get('id') ) && ! _.isUndefined( defaultPostId ) )
					        shortcode.set( 'id', defaultPostId );
					 
					    attachments = wp.media.gallery.attachments( shortcode );
					    selection = new wp.media.model.Selection( attachments.models, {
					        props:    attachments.props.toJSON(),
					        multiple: true
					    });
					     
					    selection.gallery = attachments.gallery;
					 
					    // Fetch the query's attachments, and then break ties from the
					    // query to allow for sorting.
					    selection.more().done( function() {
					        // Break ties with the query.
					        selection.props.set({ query: false });
					        selection.unmirror();
					        selection.props.unset('orderby');
					    });
					 
					    return selection;
			}

		/* short modal*/

			gl_edit.on('click',function(evt){
				evt.preventDefault();
		 		if ( gl_frame ) {
			      gl_frame.open();
			      return;
			    }    		 
		    	gl_frame=wp.media({
		    			id:'my-gallery',
						frame:'post',
						title: 'edit gallery',
						state:'gallery-edit',
						button: {
							text: 'save gallery'
							},
						setting:true,
						multiple:true,
						selection:selection()		     
					});
		    	gl_frame.on('update',function(selection){
		    		var output=wp.media.gallery.shortcode( selection ).string();
 		    		gl_code.val(output);
		    	});

				gl_frame.open();
			});
			gl_del.on('click',function(evt){
				evt.preventDefault();
				gl_code.attr({ 'value':''});
			});

 	});
 });
