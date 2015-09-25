<?php
 $my_gl=get_option('gallery_main');
 $gl_page=get_option('gallery_page');
 $sl_home=get_option('slide_home');
 $sl_hm_arr=json_decode($sl_home);
 ?>
<div class="my-gallery-block">
	<form action="options.php" method="post" id="gl-form" name="gl_form">
		<?php settings_fields('my_gallery_sett'); ?>
		<table class="form-table">
			<tbody>
 					<tr><td><label for="gallery_main">Gallery Main</label></td></tr>
					<tr><td class="my-gallery">
						<input type="text" name="gallery_main" class="gl-inp" id="gallery_main" value="<?php echo esc_attr($my_gl) ?>">
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-edit">edit gallery</a>
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-delete">delete gallery</a>
					</td></tr>
 					<tr><td><label for="gallery_page">Gallery Page</label></td></tr>
					<tr><td class="my-gallery">
						<input type="text" name="gallery_page" class="gl-inp" id="gallery_page" value="<?php echo esc_attr($gl_page); ?>">
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-edit">edit gallery</a>
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-delete">delete gallery</a>
					</td></tr>
					<tr><td><label for="slide-home">Slide home</label></td></tr>
					<tr><td class="slide-block">
							<input type="text" name="slide_home" id="slide-home" class="slide-opt" value="<?php echo esc_attr($sl_home); ?>">											 
							<p><button class="slide-butt">add slide</button></p>
							<?php if(!empty($sl_hm_arr)) : ?>
								<?php foreach($sl_hm_arr as $sl) : ?>
									<?php $sl_img=wp_get_attachment_url($sl->id); ?>
									<div class="slide-fr">
										<span class="fr-del">x</span>
										<img src="<?php echo $sl_img ?>" width="100px" height="100px" alt="" class="fr-img">
										<input type="hidden" class="fr-img-id" value="<?php echo $sl->id; ?>">
										<div class="input-gr">
											<label>post url</label>
											<input type="text" class="fr-url" value="<?php echo $sl->url; ?>">
										</div>
										<div class="input-gr">
											<label>title</label>
											<input type="text" class="fr-title" value="<?php echo $sl->title; ?>">
										</div>
										<div class="input-gr">
											<label>description</label>
											<textarea class="fr-desc" rows="2"><?php echo $sl->desc; ?></textarea>
										</div>
									</div>
								<?php endforeach; ?>
							<?php endif; ?>
					</td></tr>
 			</tbody>
		</table>
		<div class="submit">
			<?php submit_button(); ?>
		</div>
	</form>
</div>

