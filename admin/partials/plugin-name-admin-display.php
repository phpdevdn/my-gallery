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
					<tr><td class="slide-block">
						<input type="text" name="slide_home" id="slide-home" class="slide-opt" value="<?php echo get_option('slide_home'); ?>">
						<p><button class="slide-butt">add slide</button></p>
					</td></tr>
 			</tbody>
		</table>
		<div class="submit">
			<?php submit_button(); ?>
		</div>
	</form>
</div>

