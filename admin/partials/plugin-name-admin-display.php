<?php
 $my_gl=get_option('gallery_main');
 $gl_page=get_option('gallery_page');
?>
<div class="my-gallery-block">
	<form action="options.php" method="post">
		<?php settings_fields('my_gallery_sett'); ?>
		<table class="form-table">
			<tbody>
 					<tr><td><label for="gallery_main">Gallery Main</label></td></tr>
					<tr><td class="my-gallery">
						<input type="text" name="gallery_main" class="gl-inp" id="gallery_main" value="<?php echo $my_gl ?>">
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-edit">edit gallery</a>
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-delete">delete gallery</a>
					</td></tr>
 					<tr><td><label for="gallery_page">Gallery Page</label></td></tr>
					<tr><td class="my-gallery">
						<input type="text" name="gallery_page" class="gl-inp" id="gallery_page" value="<?php echo $gl_page; ?>">
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-edit">edit gallery</a>
						&nbsp;&nbsp;&nbsp;<a href="#" class="gl-delete">delete gallery</a>
					</td></tr>
					<tr><td><label for="slide-home">Slide home</label></td></tr>
					<tr><td class="slider-block">
						<input type="text" name="slide_home" id="slide-home" value="<?php echo get_option('slide_home'); ?>">
						<p><button class="add-butt">add slide</button></p>
						<div class="slide-fr">
							<img src="#" width="100px" height="100px" alt="">
							<input type="hidden" id="fr-img" value="" >
							<div class="input-gr">
								<label for="fr-url">post url</label>							
								<input type="text" id="fr-url" value="">
							</div>
							<div class="input-gr">
								<label for="fr-title">title : </label>
								<input type="text" id="fr-title" value="">
							</div>
							<div class="input-gr">
								<label for="fr-desc">description : </label>
								<input type="text" id="fr-desc" value="">
							</div>
						</div>
					</td></tr>
 			</tbody>
		</table>
		<div class="submit">
			<?php submit_button(); ?>
		</div>
	</form>
</div>

